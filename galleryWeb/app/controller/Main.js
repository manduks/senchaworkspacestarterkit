Ext.define('GalleryWeb.controller.Main', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'loginForm',
        selector: 'loginform'
    }, {
        ref: 'mainView',
        selector: 'app-main'
    }, {
        ref: 'loginContainer',
        selector: 'loginview #centerview'
    }, {
        ref: 'moduleView',
        selector: 'app-main #inMainView'
    }],
    init: function () {
        this.control({
            'loginform': {
                logged: this.onLoginUser
            },
            'loginview container menu': {
                click: this.onMenuSelect
            },
            'app-main #inMainView button':{
                click: this.changeModule
            }
        });
    },
    onLoginUser: function () {
        this.getMainView().layout.setActiveItem(1);
    },
    onMenuSelect: function () {
        this.getLoginContainer().layout.setActiveItem(2);
    },
    changeModule: function () {
        this.getModuleView().layout.setActiveItem(2);
    }
});