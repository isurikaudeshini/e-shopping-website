const expect = require('chai').expect;

const authMiddleware = require('../middleware/is-auth');

//describe => group the tests, nesting tests
describe('Auth middleware', function() {
  it('should throw an error if no authorization header is present', function () {
    const req = {
      get: function (headerName) {
        return null;
      },
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      'Not authenticated'
    ); //it has get method
  });
  
  it('should throw error if the authorization header is only one string', function() {
    const req = {
      get: function (headerName) {
        return 'xyz';
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  })
})

