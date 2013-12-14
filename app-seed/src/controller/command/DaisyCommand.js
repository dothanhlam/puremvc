/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/13/13
 * Time: 10:32 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define
(
    // CLASS INFO
    {
            name: 'App.controller.command.DaisyCommand',
        parent:puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note){
            var daisies = note.getBody();
            var proxy = this.facade.retrieveProxy(App.model.proxy.DaisyProxy.NAME);
            console.log("daisy to built " + daisies);
            proxy.createDaisyField(daisies);
        }
    }
);