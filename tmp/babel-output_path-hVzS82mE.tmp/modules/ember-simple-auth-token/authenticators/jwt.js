import Ember from 'ember';
import Configuration from '../configuration';
import TokenAuthenticator from './token';

var assign = Ember.assign || Ember.merge;

/**
  JWT (JSON Web Token) Authenticator that supports automatic token refresh.

  Inspired by [ember-simple-auth-oauth2](https://github.com/simplabs/ember-simple-auth/tree/master/packages/ember-simple-auth-oauth2)

  The factory for this authenticator is registered as
  'authenticator:jwt` in Ember's container.

  @class JWT
  @namespace SimpleAuth.Authenticators
  @module ember-simple-auth-token/authenticators/jwt
  @extends TokenAuthenticator
*/
export default TokenAuthenticator.extend({
  /**
    The endpoint on the server for refreshing a token.
    @property serverTokenRefreshEndpoint
    @type String
    @default '/api/token-refresh/'
  */
  serverTokenRefreshEndpoint: '/api/token-refresh/',

  /**
    Sets whether the authenticator automatically refreshes access tokens.
    @property refreshAccessTokens
    @type Boolean
    @default true
  */
  refreshAccessTokens: true,

  /**
    The number of seconds to subtract from the token's time of expiration when
    scheduling the automatic token refresh call.
    @property refreshLeeway
    @type Integer
    @default 0 (seconds)
  */
  refreshLeeway: 0,

  /**
    The amount of time to wait before refreshing the token - set automatically.
    @property refreshTokenTimeout
    @private
  */
  refreshTokenTimeout: null,

  /**
    The name for which decoded token field represents the token expire time.
    @property tokenExpireName
    @type String
    @default 'exp'
  */
  tokenExpireName: 'exp',

  /**
    Default time unit.
    @property timeFactor
    @type Integer
    @default 1 (seconds)
  */
  timeFactor: 1,

  /**
    @method init
    @private
  */
  init: function init() {
    this.serverTokenEndpoint = Configuration.serverTokenEndpoint;
    this.serverTokenRefreshEndpoint = Configuration.serverTokenRefreshEndpoint;
    this.identificationField = Configuration.identificationField;
    this.passwordField = Configuration.passwordField;
    this.tokenPropertyName = Configuration.tokenPropertyName;
    this.refreshAccessTokens = Configuration.refreshAccessTokens;
    this.refreshLeeway = Configuration.refreshLeeway;
    this.tokenExpireName = Configuration.tokenExpireName;
    this.timeFactor = Configuration.timeFactor;
    this.headers = Configuration.headers;
  },

  /**
    Restores the session from a set of session properties.
     It will return a resolving promise if one of two conditions is met:
     1) Both `data.token` and `data.expiresAt` are non-empty and `expiresAt`
       is greater than the calculated `now`.
    2) If `data.token` is non-empty and the decoded token has a key for
       `tokenExpireName`.
     If `refreshAccessTokens` is true, `scheduleAccessTokenRefresh` will
    be called and an automatic token refresh will be initiated.
     @method restore
    @param {Object} data The data to restore the session from
    @return {Ember.RSVP.Promise} A promise that when it resolves results
                                 in the session being authenticated
  */
  restore: function restore(data) {
    var _this = this;

    var dataObject = Ember.Object.create(data);

    return new Ember.RSVP.Promise(function (resolve, reject) {
      var now = _this.getCurrentTime();
      var token = dataObject.get(_this.tokenPropertyName);
      var expiresAt = _this.resolveTime(dataObject.get(_this.tokenExpireName));

      if (Ember.isEmpty(token)) {
        return reject(new Error('empty token'));
      }

      if (Ember.isEmpty(expiresAt)) {
        // Fetch the expire time from the token data since `expiresAt`
        // wasn't included in the data object that was passed in.
        var tokenData = _this.getTokenData(token);

        expiresAt = _this.resolveTime(tokenData[_this.tokenExpireName]);
        if (Ember.isEmpty(expiresAt)) {
          return resolve(data);
        }
      }

      if (expiresAt > now) {
        var wait = expiresAt - now - _this.refreshLeeway * 1000;

        if (wait > 0) {
          if (_this.refreshAccessTokens) {
            _this.scheduleAccessTokenRefresh(dataObject.get(_this.tokenExpireName), token);
          }
          resolve(data);
        } else if (_this.refreshAccessTokens) {
          resolve(_this.refreshAccessToken(token));
        } else {
          reject(new Error('unable to refresh token'));
        }
      } else {
        reject(new Error('token is expired'));
      }
    });
  },

  /**
    Authenticates the session with the specified `credentials`.
     It will return a resolving promise if it successfully posts a request
    to the `JWT.serverTokenEndpoint` with the valid credentials.
     An automatic token refresh will be scheduled with the new expiration date
    from the returned refresh token. That expiration will be merged with the
    response and the promise resolved.
     @method authenticate
    @param {Object} credentials The credentials to authenticate the session with
    @param {Object} headers Additional headers to be sent to server
    @return {Ember.RSVP.Promise} A promise that resolves when an auth token is
                                 successfully acquired from the server and rejects
                                 otherwise
  */
  authenticate: function authenticate(credentials, headers) {
    var _this2 = this;

    return new Ember.RSVP.Promise(function (resolve, reject) {
      var data = _this2.getAuthenticateData(credentials);

      _this2.makeRequest(_this2.serverTokenEndpoint, data, headers).then(function (response) {
        Ember.run(function () {
          try {
            var sessionData = _this2.handleAuthResponse(response);

            resolve(sessionData);
          } catch (error) {
            reject(error);
          }
        });
      }, function (xhr) {
        Ember.run(function () {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  /**
    Schedules a token refresh request to be sent to the backend after a calculated
    `wait` time has passed.
     If both `token` and `expiresAt` are non-empty, and `expiresAt` minus the optional
    refres leeway is greater than the calculated `now`, the token refresh will be scheduled
    through Ember.run.later.
     @method scheduleAccessTokenRefresh
    @private
  */
  scheduleAccessTokenRefresh: function scheduleAccessTokenRefresh(expiresAt, token) {
    if (this.refreshAccessTokens) {
      expiresAt = this.resolveTime(expiresAt);

      var now = this.getCurrentTime();
      var wait = expiresAt - now - this.refreshLeeway * 1000;

      if (!Ember.isEmpty(token) && !Ember.isEmpty(expiresAt) && wait > 0) {
        Ember.run.cancel(this._refreshTokenTimeout);

        delete this._refreshTokenTimeout;

        this._refreshTokenTimeout = Ember.run.later(this, this.refreshAccessToken, token, wait);
      }
    }
  },

  /**
    Makes a refresh token request to grab a new authenticated JWT token from the server.
     It will return a resolving promise if a successful POST is made to the
    `JWT.serverTokenRefreshEndpoint`.
     After the new token is obtained it will schedule the next automatic token refresh
    based on the new `expiresAt` time.
     The session will be updated via the trigger `sessionDataUpdated`.
     @method refreshAccessToken
    @private
  */
  refreshAccessToken: function refreshAccessToken(token, headers) {
    var _this3 = this;

    var data = this.makeRefreshData(token);

    return new Ember.RSVP.Promise(function (resolve, reject) {
      _this3.makeRequest(_this3.serverTokenRefreshEndpoint, data, headers).then(function (response) {
        Ember.run(function () {
          try {
            var sessionData = _this3.handleAuthResponse(response);

            _this3.trigger('sessionDataUpdated', sessionData);
            resolve(sessionData);
          } catch (error) {
            reject(error);
          }
        });
      }, function (xhr, status, error) {
        Ember.Logger.warn('Access token could not be refreshed - server responded with ' + error + '.');
        reject();
      });
    });
  },

  /**
    Returns a nested object with the token property name.
    Example:  If `tokenPropertyName` is "data.user.token", `makeRefreshData` will return {data: {user: {token: "token goes here"}}}
     @method makeRefreshData
    @return {object} An object with the nested property name.
  */
  makeRefreshData: function makeRefreshData(token) {
    var data = {};
    var lastObject = data;
    var nestings = this.tokenPropertyName.split('.');
    var tokenPropertyName = nestings.pop();

    nestings.forEach(function (nesting) {
      lastObject[nesting] = {};
      lastObject = lastObject[nesting];
    });

    lastObject[tokenPropertyName] = token;

    return data;
  },

  /**
    Returns the decoded token with accessible returned values.
     @method getTokenData
    @return {object} An object with properties for the session.
  */
  getTokenData: function getTokenData(token) {
    var payload = token.split('.')[1];
    var tokenData = decodeURIComponent(window.escape(atob(payload)));

    try {
      return JSON.parse(tokenData);
    } catch (e) {
      return tokenData;
    }
  },

  /**
    Accepts a `url` and `data` to be used in an ajax server request.
     @method makeRequest
    @private
  */
  makeRequest: function makeRequest(url, data, headers) {
    return Ember.$.ajax({
      url: url,
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      headers: this.headers,
      beforeSend: function beforeSend(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);

        if (headers) {
          Object.keys(headers).forEach(function (key) {
            xhr.setRequestHeader(key, headers[key]);
          });
        }
      }
    });
  },

  /**
    Cancels any outstanding automatic token refreshes and returns a resolving
    promise.
    @method invalidate
    @param {Object} data The data of the session to be invalidated
    @return {Ember.RSVP.Promise} A resolving promise
  */
  invalidate: function invalidate() {
    Ember.run.cancel(this._refreshTokenTimeout);

    delete this._refreshTokenTimeout;

    return new Ember.RSVP.resolve();
  },

  getCurrentTime: function getCurrentTime() {
    return new Date().getTime();
  },

  /**
    Handles converting between time units for data between different systems.
    Default: seconds(1)
    @method resolveTime
    @private
  */
  resolveTime: function resolveTime(time) {
    if (Ember.isEmpty(time)) {
      return time;
    }
    return new Date(time * this.timeFactor).getTime();
  },

  /**
    Handles authentication response from server, and returns session data
     @method handleAuthResponse
    @private
   */
  handleAuthResponse: function handleAuthResponse(response) {
    var token = Ember.get(response, this.tokenPropertyName);

    if (Ember.isEmpty(token)) {
      throw new Error('Token is empty. Please check your backend response.');
    }

    var tokenData = this.getTokenData(token);
    var expiresAt = Ember.get(tokenData, this.tokenExpireName);
    var tokenExpireData = {};

    tokenExpireData[this.tokenExpireName] = expiresAt;

    this.scheduleAccessTokenRefresh(expiresAt, token);

    return assign(this.getResponseData(response), tokenExpireData);
  }
});