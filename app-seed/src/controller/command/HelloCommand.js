/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:42 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'App.controller.command.HelloCommand',
        parent:puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note){
            var message = note.getBody();
            var proxy = this.facade.retrieveProxy( App.model.proxy.HelloProxy.NAME );
            proxy.setMessage(message);
        }
    }
);