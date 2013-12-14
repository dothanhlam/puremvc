/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/14/13
 * Time: 10:05 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
    name: 'App.model.vo.DaisyVO',
        /** @constructor */
        constructor: function (image){
            this.name = "daisy";
            this.xpos = 800 * Math.random() | 0;
            this.ypos = 400 * Math.random() | 0;
            this.rotation = 360 * Math.random() | 0;
            this.regX = image.width / 2 | 0;
            this.regY = image.height / 2 | 0;
            this.scale = Math.random()*0.4+0.6;
            this.image = image;
        }
    },
    {
        name: 'daisy',
        xpos:0,
        ypos:0,
        rot: 0,
        scale: 1,
        image: null
    },
    {}
);