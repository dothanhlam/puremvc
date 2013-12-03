/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/3/13
 * Time: 12:36 AM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.view.MainApp',

        /** @constructor */
        constructor: function ()
        {
            // use HTML5 querySelector for DOM retrieval
            this.main = document.querySelector('#main');
            this.main.innerText = "loading ...";
        }
    },
    {
        main: null,

        update: function (message) {
            this.main.innerText = message;
        }
    },
    {}
)