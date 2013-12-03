/**
 * Created with JetBrains WebStorm.
 * User: LDo
 * Date: 12/3/13
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */
describe("HelloProxy", function() {
    var proxy;
    beforeEach(function() {
        proxy = new App.model.proxy.HelloProxy();
    })

    it("has set message function", function() {
        expect(proxy.setMessage).toBeDefined();
    });
});