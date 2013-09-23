/**
 * @class GalleryWeb.view.login.LoginView
 * @extends Ext.Panel
 * Description
 */
Ext.define('GalleryWeb.view.login.LoginView', {
    extend: 'Ext.Panel',
    alias: 'widget.loginview',
    requires: [
        'Ext.layout.container.Border',
        'GalleryWeb.view.login.LoginForm'
    ],
    layout: 'border',
    defaults:{
    	padding:'0px 5px 5px 5px',
    },
    initComponent: function (argument) {
        var me = this;
        me.items = me.buildItems();
        me.callParent();
    },
    buildItems: function () {
        return [{
            xtype: 'container',
            region: 'north',
            html: 'My brown hanky',
            height: 40
        }, {
            xtype: 'container',
            region: 'west',
            width: 200,
            items: [{
                xtype: 'menu',
                floating: false,
                items: [{
                    text: 'Account',
                    step: 'cookie'
                }, {
                    text: 'Terms',
                    step: 'clip'
                }, {
                    text: 'Clip',
                    step: 'agree'
                }]
            }]
        }, {
            xtype: 'container',
            region: 'center',
            itemId: 'centerview',
            layout: {
                type: 'card',
                activeItem: 0
            },
            items: [{
                xtype: 'container',
                 layout: {
		            align: 'middle',
		            pack: 'center',
		            type: 'hbox'
		        },
		        items: {
		            xtype: 'loginform'
		        }
            }, {
                xtype: 'container',
                html: 'terms'
            }, {
                xtype: 'container',
                html: 'clip'
            }]

        }, {
            xtype: 'container',
            region: 'south',
            html: 'footer',
            height: 20
        }];
    }
});