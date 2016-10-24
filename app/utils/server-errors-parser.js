export default function(resp, errors) {
  resp.errors.forEach(function(error) {
    var attribute = error.source;
    errors.add(attribute, error.detail);
  });
}