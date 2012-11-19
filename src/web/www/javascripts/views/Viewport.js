OKnesset.app.views.Viewport = new Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [{
        itemId: 'toolbar',
        xtype: 'toolbar',
        title: '',
        items: [
        // {
        //     id: 'openMenu',
        //     iconCls: 'list',
        //     iconMask: true
        // },
        {
            id: 'backBtn',
			hidden : true,
            iconCls: 'right2',
            iconMask: true,
            ui: 'action',
        }, 
        {
             xtype: 'spacer'
        }],
    }, ],
    initComponent: function(){
        OKnesset.app.views.Viewport.AppMenu.setFloating(true);
        OKnesset.app.views.Viewport.AppMenu.setSize(150, 200);
        OKnesset.app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
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




