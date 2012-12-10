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


// the data-bound menu list
OKnesset.app.views.Viewport.menuList = new Ext.List({
    id: 'AppMenuList',
    store: OKnesset.menuStore,
    itemTpl: '{title}',
    allowDeselect: true,
    singleSelect: true
});

// a wrapper around the menu list
OKnesset.app.views.Viewport.AppMenu = new Ext.Panel({
    id: 'AppMenu',
    items: [OKnesset.app.views.Viewport.menuList],
    layout: 'fit',
    dock: 'left',
    hidden : true
});




