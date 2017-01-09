const chai = require('chai');
const app = require('../app');
const expect = chai.expect;
const should = chai.should;

describe('Pig Latin module', () => {
  it('Should have a function that translates English to Pig Latin', (done) => {
    expect(app.pigLatin('apple')).to.equal('apple-ay');
    expect(app.pigLatin('potato')).to.equal('otato-pay')
    expect(app.pigWordConcat('I have a cookie.')).to.equal('I-ay ave-hay a-ay ookie.-cay');
    expect(app.pigWordConcat('They are speaking Pig-Latin')).to.equal('ey-Thay are-ay eaking-spay ig-Latin-Pay');
    done();
  })
  it('Should have a function that translates Pig Latin to English', (done) => {
    expect(app.english('apple-ay')).to.equal('apple')
    expect(app.english('eaking-spay')).to.equal('speaking')
    expect(app.englishWordConcat('I-ay ave-hay a-ay ookie.-cay')).to.equal('I have a cookie.')
    done();
  })

})