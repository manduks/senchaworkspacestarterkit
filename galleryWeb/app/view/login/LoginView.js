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
        'GalleryWeb.view.login.LoginForm',
        'Ext.view.View'
    ],
    layout: 'border',
    defaults:{
    	padding:'0px 5px 5px 5px'
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
                autoScroll:true,
                items:[
                	{
                		xtype:'dataview',
                		data: [
					        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
					    	{ src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
					    	{ src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
					    	{ src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
					        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
					        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
					        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
					    ],
                		loadMask:false,
                		tpl: [
                			'<tpl for=".">',
						        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
						          '<img src="{src}" />',
						          '<br/><span>{caption}</span>',
						        '</div>',
						    '</tpl>'
                		],
                		itemSelector: 'div.thumb-wrap',
    					emptyText: 'No images available'
                	}
                ]
            }]

        }];
    }
});