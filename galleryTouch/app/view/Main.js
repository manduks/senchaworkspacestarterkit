Ext.define('GalleryTouch.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['GalleryTouch.view.login.Login'],
    config: {
        layout: 'card',
        fullscreen: true,
        activeItem: 0,
        items: [{
            xtype: 'login'
        }, {
            xtype: 'container',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome to Sencha Touch 2',
            }, {
                xtype: 'button',
                cls: 'default',
                text: 'Default Button'
            }, {
                xtype: 'button',
                cls: 'success',
                text: 'Success Button'
            }, {
                xtype: 'button',
                cls: 'info',
                text: 'Info Button'
            }, {
                xtype: 'button',
                cls: 'danger',
                text: 'Danger Button'
            }, {
                xtype: 'button',
                cls: 'warning',
                text: 'Danger Button'
            }]
        }]
    }
});