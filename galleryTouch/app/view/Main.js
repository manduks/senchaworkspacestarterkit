Ext.define('GalleryTouch.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['GalleryTouch.view.login.Login'],
    config: {
        layout: 'card',
        fullscreen: true,
        activeItem:0,
        items: [{
            xtype: 'login'
        },{
            xtype: 'container',
            html: 'container 2'
        }]
    }
});