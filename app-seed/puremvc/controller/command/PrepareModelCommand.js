/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.controller.command.PrepareModelCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            this.facade.registerProxy( new App.model.proxy.HelloProxy);
            this.sendNotification(App.AppConstants.SEND_MESSAGE, "Hello PureMVC");
        }
    }
)