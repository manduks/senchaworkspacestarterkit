Ext.define('GalleryWeb.Application', {
    name: 'GalleryWeb',

    extend: 'Ext.app.Application',
    requires:['Ext.data.JsonP'],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'GalleryWeb.controller.Main'
    ],

    stores: [
        // TODO: add stores here
    ]
});
