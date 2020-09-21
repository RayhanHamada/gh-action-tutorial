import { expect } from 'chai';
import { actionTut } from '../src';

describe('index.js', function () {
  it('actionTut function should return a string', function () {
    expect(actionTut()).is.a('string');
  });
});
