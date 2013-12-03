/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:14 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.view.mediator.ApplicationMediator',
        parent: puremvc.Mediator
    },

    {
        /** @override */
        listNotificationInterests: function (){
            return [App.AppConstants.DISPLAY_MESSAGE]
        },

        /** @override */
        handleNotification: function (note){
            switch (note.getName()){
                case App.AppConstants.DISPLAY_MESSAGE:
                    this.getViewComponent().update(note.getBody());
                break;

            }
        },

        /** @override */
        onRegister: function (){
            this.setViewComponent( new App.view.MainApp );
        },

        /** @override */
        onRemove: function (){}
    },
    // STATIC MEMBERS
    {
        /**
         * @static
         * @type {string}
         */
        NAME: 'ApplicationMediator'
    }
);