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
            var proxy = this.facade.retrieveProxy(App.model.proxy.DaisyProxy.NAME);

            switch (note.getName()) {
               case App.AppConstants.BUILD_DAISY:
                   var daisies = note.getBody();
                   console.log("daisy to built " + daisies);
                   proxy.createDaisyField(daisies);
                   break;

               case App.AppConstants.REMOVE_DAISY:
                   var daisyTobeRemoved = note.getBody();
                   proxy.removeDaisy(daisyTobeRemoved);
                   break;
           }
        }
    }
);