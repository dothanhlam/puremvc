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
            return [App.AppConstants.DISPLAY_MESSAGE, App.AppConstants.UPDATE_SCREEN]
        },

        /** @override */
        handleNotification: function (note){
            switch (note.getName()){
                case App.AppConstants.UPDATE_SCREEN:
                    var daisies = note.getBody();
                    this.getViewComponent().drawDaisies(daisies);
                break;

                case App.AppConstants.DISPLAY_MESSAGE:
                    this.getViewComponent().update(note.getBody());
                break;

            }
        },

        /** @override */
        onRegister: function (){
            var view = new App.view.MainApp;
            this.setViewComponent(view);
            view.mediator = this;
            var self = this;
            view.daisies.addEventListener("click",  function() {
                self.sendNotification(App.AppConstants.BUILD_DAISY, 10);
            });
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