Ext.define('GalleryTouch.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: {
                selector: 'main'
            }
        },
         control: {
            'login': {
                logged: 'loginUser'
            }
        }
    },
    init: function () {},
    loginUser:function () {
        var me = this;
        me.getMain().setActiveItem(1);
    }
});