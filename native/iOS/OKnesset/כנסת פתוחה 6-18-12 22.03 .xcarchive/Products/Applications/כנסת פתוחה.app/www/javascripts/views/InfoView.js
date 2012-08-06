OKnesset.app.views.InfoView = new Ext.extend(Ext.Panel, {
	id : 'InfoView',
	layout : 'vbox',
	cls : 'textCenter',
	floating : true,
	centered : true,
	items : [ {
		tpl : '{dateString}',
		id : 'updateDate'
	}, {
		xtype : 'spacer',
		height : "2em"
	}, {
		xtype : 'button',
		id : 'updateAppDataBtn',
		width : "50%",
		text : OKnesset.strings.updateNow
	}, {
		xtype : 'spacer',
		height : "2em"
	}, {
		xtype : 'button',
		id : 'displayDisclaimerBtn',
		width : "50%",
		text : OKnesset.strings.showDisclaimer
	}, {
		xtype : 'spacer',
		height : "2em"
	} ],
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
		title : OKnesset.strings.openKnessetTitle
	}, {
		dock : 'bottom',
		ui : 'light',
		items : [ {
			xtype : 'button',
			id : 'cancelInfoBtn',
			ui : 'confirm',
			text : OKnesset.strings.back
		} ]
	} ],
	initComponent : function() {
    	var viewport = Ext.ApplicationManager.get("oknesset").viewport;
		this.width = viewport.getWidth() * 0.9;
		this.height = viewport.getHeight() * 0.65;
		OKnesset.app.views.InfoView.superclass.initComponent.apply(this,
				arguments);
	}
});

Ext.reg('InfoView', OKnesset.app.views.InfoView);
