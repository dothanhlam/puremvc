/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 10:16 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.ApplicationFacade',
        parent: puremvc.Facade
    },
    // INSTANCE MEMBERS
    {
        startup: function (){
            if (!this.initialized){
                this.initialized= true;
                // associate the SetupCommand with the STARTUP notification
                this.registerCommand(App.AppConstants.STARTUP, App.controller.command.StartupCommand );
                // issue the SETUP notification to execute StartupCommand
                this.sendNotification(App.AppConstants.STARTUP);
            }
        }
    },
    {
        getInstance: function (multitonKey) {
            var instanceMap = puremvc.Facade.instanceMap;
            instance = instanceMap[multitonKey]; // read from the instance map

            if (instance) { // if there is an instance...
                return instance; // return it
            }
            // otherwise create a new instance and cache it on Facade.instanceMap;
            return instanceMap[multitonKey]= new App.ApplicationFacade(multitonKey);
        },

        /**
         * @static
         * @type {string}
         */
        NAME: 'App'
    }
);