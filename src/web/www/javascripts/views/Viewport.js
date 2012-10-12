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
             xtype: 'spacer'
        },
        {
            id: 'openMenu',
            iconCls: 'list',
            iconMask: true
        },
        {
            id: 'backBtn',
			hidden : true,
            iconCls: 'right2',
            iconMask: true,
            ui: 'action',
        }, ],
    }, ],
    initComponent: function(){
        // this.appMenu = this.render({
        //         xtype: 'AppMenu'
        //     });
        //OKnesset.app.views.Viewport.AppMenu.el.appendTo(document.body);
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

//Ext.reg('AppMEnu', OKnesset.app.views.Viewport.AppMenu);




