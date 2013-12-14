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
        constructor: function (){
            // use HTML5 querySelector for DOM retrieval
            this.main = document.querySelector('#main');

            this.version = document.querySelector('#version');
            this.version.innerText = App.AppConstants.APP_VERSION;

            this.daisies = document.querySelector('#daisies')
            this.stage = new createjs.Stage(document.querySelector('#mainCanvas'));
            this.container = new createjs.Container();
            this.stage.addChild(this.container);
        }
    },

    {
        main: null,
        version: null,
        daisies: null,
        stage: null,
        container: null,
        mediator:null,

        update: function (message) {
            this.main.innerText = message;
        },

        drawDaisies: function(daisies) {
            var bitmap = null;
            for (var i = 0; i < daisies.length; i ++) {
                var daisy = daisies[i];
                bitmap = new createjs.Bitmap(daisy.image);
                this.container.addChild(bitmap);
                bitmap.x = daisy.xpos;
                bitmap.y = daisy.ypos;
                bitmap.scaleX = bitmap.scaleY = daisy.scale;
                bitmap.regX = daisy.regX;
                bitmap.regY = daisy.regY;
            }

            this.stage.update();
        }
    },
    // STATIC MEMBERS GO HERE
    {}
)