Ext.define('OKnesset.app.views.InfoView', {
	extend: 'Ext.Panel',

	config: {
		id : 'InfoView',
		layout : 'vbox',
		cls : 'textCenter',
		floating : true,
		centered : true,
		items : [{
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
		}],
		dockedItems : [{
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
			}]
		}],
	},
	
	initialize: function() {
		this.callParents(arguments);
    	var viewport = Ext.ApplicationManager.get("oknesset").viewport;
		this.width = viewport.getWidth() * 0.9;
		this.height = viewport.getHeight() * 0.65;
	},
});
Ext.reg('InfoView', OKnesset.app.views.InfoView);
