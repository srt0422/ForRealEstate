/// <reference path="../typings/references.d.ts"/>
"use strict";
var rentalPropertyComponent_1 = require("../client/rentalProperty/rentalPropertyComponent");
var sinon = require("sinon");
var chai_1 = require("chai");
var scopeMock;
var helperSpy;
before(function () {
    scopeMock = {};
    helperSpy = sinon.spy($scopeMock, "helpers");
});
after(function () {
    scopeMock = null;
    helperSpy = null;
});
describe("rental property component", function () {
    it("should initialize without id", function () {
        rentalPropertyComponent_1.controller($scopeMock);
        chai_1.assert.isTrue(helperSpy.notCalled);
    });
    it("should submitRentalProperty", function () {
        chai_1.assert.fail();
    });
});
