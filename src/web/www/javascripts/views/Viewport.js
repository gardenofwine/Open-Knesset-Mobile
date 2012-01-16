// The "i" at the top left of the application toolbar
OKnesset.app.toolbarInfoItem = {
	ui : 'plain',
	itemId : 'appInfo',
	iconMask : true,
	iconCls : 'info',
	// TODO move handler to conteroller
	handler : function() {
		displayInfoDialog();
	}
};

// The email icon at the top left of the application toolbar
OKnesset.app.toolbarMailItem = {
	ui : 'plain',
	iconMask : true,
	iconCls : 'mail',
	itemId : 'appEmail',
	// TODO move handler to conteroller
	handler : function() {
		displayEmailDialog();
	}
};

OKnesset.app.views.Viewport = new Ext.extend(Ext.Panel, {
	fullscreen : true,
	layout : 'card',
	cardSwitchAnimation : 'slide',
    dockedItems: [
                  {
                  	xtype: 'toolbar',
                  	title: '',
                  	items : [ OKnesset.app.toolbarInfoItem, OKnesset.app.toolbarMailItem ],
                  },
              ],
});