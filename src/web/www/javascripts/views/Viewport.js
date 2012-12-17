OKnesset.app.views.Viewport = new Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [{
        itemId: 'toolbar',
        xtype: 'toolbar',
        title: '',
        items: [
        {
            id: 'backBtn',
			hidden : true,
            iconCls: 'right2',
            iconMask: true,
            ui: 'action',
        }, 
        {
             xtype: 'spacer'
        },
        {
            // The "i" at the top left of the application toolbar
            ui: 'plain',
            id: 'info',
            iconMask: true,
            iconCls: 'info',
        }] 
    }, ]
});




