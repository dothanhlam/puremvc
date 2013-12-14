/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 11:03 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.model.proxy.HelloProxy',
        parent: puremvc.Proxy
    },

    // INSTANCE MEMBERS
    {
        onRegister: function() {
     //       this.sendNotification(App.AppConstants.SEND_MESSAGE, "Hello, PureMVC");
        },

        setMessage: function ( message ) {
            this.sendNotification( App.AppConstants.DISPLAY_MESSAGE, message );
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'HelloProxy'
    }
);