(function() {
  "use strict";

  describe("scormAPI", function() {
    var originalFunctions = {};
    var api, constants, result;

    beforeEach(function() {
      api = new window.simplifyScorm.ScormAPI();
      constants = window.simplifyScorm.constants;

      originalFunctions["console.error"] = console.error;
      originalFunctions["console.info"] = console.info;
      originalFunctions["console.warn"] = console.warn;
      console.error = sinon.stub();
      console.info = sinon.stub();
      console.warn = sinon.stub();
    });

    afterEach(function() {
      console.error = originalFunctions["console.error"];
      console.info = originalFunctions["console.info"];
      console.warn = originalFunctions["console.warn"];
    });

    context("initially", function() {
      it("should create a global instance of itself", function() {
        expect(window.API).to.be.an.instanceof(window.simplifyScorm.ScormAPI);
      });
    });

    describe("#LMSInitialize", function() {
      context("when initializing for the first time", function() {
        beforeEach(function() {
          var listener = sinon.stub();
          api.on("LMSInitialize", listener);
          result = api.LMSInitialize();
        });

        it("should initialize the API", function() {
          expect(api.currentState).to.equal(constants.STATE_INITIALIZED);
        });

        it("should return true", function() {
          expect(result).to.equal(constants.SCORM_TRUE);
        });

        it("should notify event listeners", function() {

        });
      });
    });
  });
})();
