Ext.define('OKnesset.app.views.Viewport', {
    extend: 'Ext.Panel',

    config: {
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
                // {
                //     // The "i" at the top left of the application toolbar
                //     ui: 'plain',
                //     id: 'appInfo',
                //     iconMask: true,
                //     iconCls: 'info',
                // }, {
                //     // The email icon at the top left of the application toolbar
                //     ui: 'plain',
                //     id: 'emailReview',
                //     iconMask: true,
                //     iconCls: 'mail',
                // }, {
                //     xtype: 'spacer'
                // }, 
                {
                    id: 'backBtn',
                    hidden : true,
                    iconCls: 'right2',
                    iconMask: true,
                    ui: 'action',
                },],
            },],
    },

    initialize: function() {
        this.callParent(arguments);
        // this.appMenu = this.render({
        //         xtype: 'AppMenu'
        //     });
        //OKnesset.app.views.Viewport.AppMenu.el.appendTo(document.body);
        OKnesset.app.views.Viewport.AppMenu.setFloating(true);
        OKnesset.app.views.Viewport.AppMenu.setSize(150, 200);
    },
});

// the data-bound menu list
OKnesset.app.views.Viewport.menuList = new Ext.List({
    store: OKnesset.menuStore,
    itemTpl: '{title}',
    allowDeselect: false,
    singleSelect: true
});

// a wrapper around the menu list
OKnesset.app.views.Viewport.AppMenu = new Ext.Panel({
    id: 'AppMenu',
    items: [OKnesset.app.views.Viewport.menuList],
    layout: 'fit',
    width: 150,
    docked: 'left',
    hidden : true
});
