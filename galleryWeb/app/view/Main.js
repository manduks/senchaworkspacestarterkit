Ext.define('GalleryWeb.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'GalleryWeb.view.login.Login',
        'Ext.layout.container.Card'
    ],

    xtype: 'app-main',

    layout: {
        type: 'card'
    },
    activeItem: 0,

    items: [{
        xtype: 'container',
        layout: {
            align: 'middle',
            pack: 'center',
            type: 'hbox'
        },
        items: {
            xtype: 'login'
        }
    }, {
        xtype: 'container',
        html: 'container 2'
    }]
});