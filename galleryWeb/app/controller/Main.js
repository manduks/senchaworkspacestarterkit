Ext.define('GalleryWeb.controller.Main', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'loginForm',
        selector: 'login'
    }, {
        ref: 'mainView',
        selector: 'app-main'
    }],
    init: function () {
        this.control({
            'login': {
                logged: this.onLoginUser
            }
        });
    },
    onLoginUser: function () {
        this.getMainView().layout.setActiveItem(1);
    }
});