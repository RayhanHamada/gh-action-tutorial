const { expect } = require("chai");
const actionTut = require("..");

describe("index.js", function () {
  it("actionTut function should return a string", function () {
    expect(actionTut()).is.a("string");
  });
});
