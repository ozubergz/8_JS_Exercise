"use strict";
const { expect } = require("chai");
const sinon = require('sinon');
const { func } = require("../index")


describe("Create Function", function() {

    it("myFunction should be created", function() {
        expect(func).to.exist
    })

    it("myFunction should print 'Hello World!' in console log", function() {
        let stub = sinon.stub(console, "log")
        
        func()
        expect(stub.calledOnce).to.be.true
        expect(stub.calledWith("Hello World!")).to.be.true
    })
})