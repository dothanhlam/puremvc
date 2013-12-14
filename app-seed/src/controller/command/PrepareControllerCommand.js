/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.controller.command.PrepareControllerCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note) {
            this.facade.registerCommand(App.AppConstants.SEND_MESSAGE, App.controller.command.HelloCommand);
            this.facade.registerCommand(App.AppConstants.BUILD_DAISY, App.controller.command.DaisyCommand);
        }
    }
);