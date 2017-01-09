const chai = require('chai');
const app = require('../app');
const expect = chai.expect;
const should = chai.should;

describe('Pig Latin module', () => {
  it('Should have a function that translates English to Pig Latin', (done) => {
    expect(app.pigLatin('apple')).to.equal('apple-ay');
    expect(app.pigLatin('potato')).to.equal('otato-pay')
    expect(app.wordConcat('I have a cookie.')).to.equal('I-ay ave-hay a-ay ookie.-cay');
    expect(app.wordConcat('They are speaking Pig-Latin')).to.equal('ey-Thay are-ay eaking-spay ig-Latin-Pay');
    done();
  })
})