/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/13/13
 * Time: 10:23 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.model.proxy.DaisyProxy',
        parent: puremvc.Proxy
    },

    // INSTANCE MEMBERS
    {
        image:null ,

        onRegister: function() {
            this.image = new Image();
            this.image.src = "assets/daisy.png";
            this.image.onload = this.loadImageComplete;
        },

        loadImageComplete: function() {
            console.log("load image complete ")
        },

        createDaisyField: function (daisies) {
            console.log("we must create a model for " + daisies)
            var arr = [];
            for (var i = 0; i < daisies; i ++) {
                arr.push(new App.model.vo.DaisyVO(this.image));
            }
            this.sendNotification( App.AppConstants.UPDATE_SCREEN, arr );
        },

        removeDaisy: function(daisy) {
            // do some stuff here
            console.log("daisy to be removed: " + daisy);

        }
    },
    // STATIC MEMBERS
    {
        NAME: 'DaisyProxy'
    }
);