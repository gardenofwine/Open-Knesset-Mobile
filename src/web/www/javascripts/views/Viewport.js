OKnesset.app.views.Viewport = new Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [{
        itemId: 'toolbar',
        xtype: 'toolbar',
        title: '',
        items: [{
            // The "i" at the top left of the application toolbar
            ui: 'plain',
            itemId: 'appInfo',
            iconMask: true,
            iconCls: 'info',
            // TODO move handler to conteroller
            handler: function(){
				dispatchDialog('Info/Index');
            }
        }, {
            // The email icon at the top left of the application toolbar
            ui: 'plain',
            iconMask: true,
            iconCls: 'mail',
            itemId: 'appEmail',
            // TODO move handler to conteroller
            handler: function(){
				dispatchDialog('Email/Index');
            }
        }, {
            xtype: 'spacer'
        }, {
            itemId: 'backBtn',
            iconCls: 'right2',
            iconMask: true,
            ui: 'action',
        }, ],
    }, ],
});


