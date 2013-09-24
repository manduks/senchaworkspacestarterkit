/**
 * @class GalleryWeb.view.login.LoginForm
 * @extends Ext.form.Panel
 * The login form
 */
Ext.define('GalleryWeb.view.login.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    requires: [
        'Ext.layout.container.Form'
    ],
    layout: 'form',
    defaultType: 'textfield',
    frame: true,
    //title: 'Login',
    bodyPadding: '5 5 0',
    width: 270,
    height: 150,
    items: [{
        fieldLabel: 'Email',
        name: 'email',
        value: 'armando@codetlan.com',
        vtype: 'email',
        allowBlank: false
    }, {
        fieldLabel: 'Password',
        name: 'password',
        value: '12345678',
        inputType: 'password',
        allowBlank: false
    }],
    buttons: [{
        text: 'Cancel',
        glyph:'160',
        iconCls:'icon-music',
        handler: function () {
            this.up('form').getForm().reset();
            // Ext.getCmp
        }
    }, {
        text: 'Login',
        glyph:'160',
        iconCls:'icon-music',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function () {
            var form = this.up('form').getForm(),
                me = this; //get the scope

            // '4' == 4 -->true
            // '4' === 4 -->false
            // 4 === 4 -->true

            if (form.isValid()) {
                Ext.data.JsonP.request({
                    url: 'http://api.codetlan.com/api/tokens/create.json',
                    params: form.getValues(),
                    callback: function (c, action) {
                        if (action.response.success === true) {
                            me.up('form').fireEvent('logged', me);
                        } else {
                            Ext.Msg.alert('Failed', action.response.message);
                        }
                    }
                });
            }
        }

    }]
});