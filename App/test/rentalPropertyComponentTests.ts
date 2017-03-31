/// <reference path="../typings/references.d.ts"/>

import {controller} from "../client/rentalProperty/rentalPropertyComponent"

import sinon = require("sinon");

import {assert} from "chai";

let scopeMock;
let helperSpy: sinon.SinonSpy;

before(function() {
    scopeMock = {};

    helperSpy = sinon.spy($scopeMock, "helpers");
});

after(function() {
    scopeMock = null;
    helperSpy = null;
});

describe("rental property component", function() {
    it("should initialize without id", function() {

        controller($scopeMock);

        assert.isTrue(helperSpy.notCalled);

        
    });

    it("should submitRentalProperty", function() {

        assert.fail();
    });
});
