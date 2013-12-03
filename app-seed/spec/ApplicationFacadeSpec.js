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
        expect(facade.startup).not.toBe(null);
    });
});
