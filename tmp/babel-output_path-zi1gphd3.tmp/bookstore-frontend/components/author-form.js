define('bookstore-frontend/components/author-form', ['exports', 'ember', 'ember-data', 'npm:validator'], function (exports, _ember, _emberData, _npmValidator) {
  exports['default'] = _ember['default'].Component.extend({
    // errors: DS.Errors.create(),

    buttonLabel: (function () {
      return this.get('author').id ? 'Update Author' : 'Add Author';
    }).property(),

    actions: {
      submit: function submit() {
        if (this.validate()) {
          this.sendAction('action', this.get('author'));
        }
      },
      validateName: function validateName(value) {
        this.validateName(value);
      }
    },

    validate: function validate() {
      this.set('errors', _emberData['default'].Errors.create());
      this.validateName(this.get('author.name'));
      return this.get('errors.isEmpty');
      // if (!Validator.isEmail(this.get('author.name'))){
      //   this.get('errors').add('name', "Name is not valid email");
      // }
    },

    validateName: function validateName(value) {
      this.get('errors').remove('name');
      if (_npmValidator['default'].isNull(value)) {
        this.get('errors').add('name', "Name can't be empty");
      }
    }

  });
});