Ext.define('GalleryWeb.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.layout.container.Card',
        'GalleryWeb.view.login.LoginView',
        'GalleryWeb.view.blog.BlogView',
        'GalleryWeb.view.video.VideoView',
        'GalleryWeb.view.profile.ProfileView'
    ],

    xtype: 'app-main',

    layout: {
        type: 'card'
    },
    activeItem: 0,

    items: [{
        xtype:'loginview'
    },{
        xtype:'panel',
        itemId:'inMainView',
        tbar:['->',{
            text:'blog',
            step:0
        },{
            text:'video',
            step:1
        },{
            text:'profile',
            step:2
        }],
        layout: {
            type: 'card'
        },
        items:[{
            xtype:'blogview'
        },{
            xtype:'videoview'
        },{
            xtype:'profileview'
        }]
    }]
});