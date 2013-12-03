/**
 * Created with JetBrains WebStorm.
 * User: LDo
 * Date: 12/3/13
 * Time: 11:03 AM
 * To change this template use File | Settings | File Templates.
 */
describe("ApplicationFacade", function() {
    var facade;
    beforeEach(function() {
        facade = App.ApplicationFacade.getInstance(App.ApplicationFacade.NAME);
    });

    it("should have instance of App.ApplicationFacade", function() {
        expect(facade).not.toBe(null);
    });

    it("should have startup function", function() {
        expect(facade.startup).toBeDefined();
    });
});

describe("ApplicationFaccade startup", function() {
    var facade;

    beforeEach(function() {
        facade = App.ApplicationFacade.getInstance(App.ApplicationFacade.NAME);
        try {
            facade.startup();
        }
        catch (e) {
            // exception that we have no reference to DOM objects
        }
    });

    it("initialized should be true after startup", function() {
        expect(facade.initialized).toBeDefined();
    });

    it("has controller", function() {
        expect(facade.controller).toBeDefined();
    });

    it("has model", function() {
        expect(facade.model).toBeDefined();
    });

    it("has view", function() {
        expect(facade.view).toBeDefined();
    });
});
