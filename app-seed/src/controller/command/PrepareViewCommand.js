/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.controller.command.PrepareViewCommand',
        parent: puremvc.SimpleCommand
    },

    {
        /** @override */
        execute: function (note){
            this.facade.registerMediator( new App.view.mediator.ApplicationMediator );
        }
    }
);