/**
 * @class GalleryTouch.view.login.Login
 * @extends Ext.form.Panel
 */
Ext.define('GalleryTouch.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Img'
    ],

    config: {
        padding: '15 15 15 15',
        baseCls: 'background',
        items: [
        {
            xtype: 'fieldset',
            defaults: {
                required: true
            },
            items: [{
                xtype: 'emailfield',
                name: 'email',
                placeHolder: 'Email',
                value: 'armando@codetlan.com',
                clearIcon: true
            }, {
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: 'Password',
                value: '12345678',
                clearIcon: true
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                text: 'Login',
                scope: this,
                handler: function (btn) {
                    var form = btn.up('formpanel'),
                        obj = form.getValues();
                    form.setMasked({
                        xtype: 'loadmask',
                        message: 'loading ...'
                    });

                    Ext.data.JsonP.request({
                        url: 'http://api.codetlan.com/api/tokens/create.json',
                        params: {
                            email: obj.email ,
                            password: obj.password
                        },
                        callback: function (c, action) {
                            if (action.response.success === true) {
                                form.fireEvent('logged', form);
                            } else {
                                Ext.Msg.alert('Failed', action.response.message);
                            }
                        }
                    });

                }
            }]
        }]
    }
});