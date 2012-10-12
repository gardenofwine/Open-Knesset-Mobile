Ext.define('OKnesset.app.views.DisclaimerView', {
	extend: 'Ext.Panel',

	config: {
		    id: 'DisclaimerView',
			floating : true,
			centered : true,
			styleHtmlContent : true,
			style : {
				direction : 'rtl'
			},
			scroll : "vertical",
			hideOnMaskTap : false,
			stopMaskTapEvent: false,
			items : [{
				html : OKnesset.strings.disclaimerDialogBody,
				height : "5em"
			}],
			dockedItems : [{
				docked : 'top',
				xtype : 'toolbar',
				title : OKnesset.strings.oknessetName
			}, {
				xtype : 'button',
				id : 'cancelDisclaimerBtn',
				ui : 'confirm',
				text : OKnesset.strings.ok,
				docked : 'bottom'
			}],
		},

	initialize: function() {
		this.callParent(arguments);
		var viewport = Ext.ApplicationManager.get("oknesset").viewport;
	    this.width = viewport.getWidth() * 0.9;
    	this.height = viewport.getHeight() * 0.9;
    },
});
Ext.reg('DisclaimerView', OKnesset.app.views.DisclaimerView);
