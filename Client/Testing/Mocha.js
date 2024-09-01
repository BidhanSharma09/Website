const chai = require('chai');
const expect = chai.expect;

describe('Array', function() {
  it('should start empty', function() {
    const arr = [];
    expect(arr).to.be.empty;
  });

  it('should add an element', function() {
    const arr = [];
    arr.push(1);
    expect(arr).to.have.lengthOf(1);
  });
});
