describe('prompt.js', function() {

  describe('getUserName', function() {
    it('should return a string', function() {
      var result;
      spyOn(window, 'prompt').andReturn('Steven');
      result = getUserName();
      expect(typeof result).toEqual('string');
    });
  });

  describe('validatePhoneNumber', function() {
    it('should return a boolean', function() {
      var result = validatePhoneNumber('23456');
      expect(typeof result).toEqual('boolean');
    });
  });
});
