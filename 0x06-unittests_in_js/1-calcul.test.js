const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return 6 when a is 1.4 and b is 4.5', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return -4 when a is 1.4 and b is 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return 0.2 when a is 1.4 and b is 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("should return 'Error' when a is 1.4 and b is 0", () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
