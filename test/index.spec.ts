import { expect } from 'chai';
import { actionTut, actionTut2 } from '../src';

describe('index.js', function () {
  it('actionTut function should return a string', function () {
    expect(actionTut()).is.a('string');
  });

  it('actionTut2 function should return "Something Awesome"', function () {
    expect(actionTut2()).to.be.eq('Something Awesome');
  });

  it('actionTut2 function should be a function', function () {
    expect(actionTut).is.a('function');
  });
});
