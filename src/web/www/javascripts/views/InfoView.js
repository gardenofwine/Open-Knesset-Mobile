OKnesset.app.views.InfoView = new Ext.extend(Ext.Panel, {
	id : 'InfoView',
	layout : 'vbox',
	cls : 'textCenter',
	width : '90%',
	height : '80%',	
	floating : true,
	centered : true,
	items : [ 
	{
		id : 'pageDescription',
		tpl : '<span>{text}</span>',
		margin : "10 10 0 10",
	}, {
		xtype : 'spacer',
	}, 
	{
		xtype : 'button',
		id : 'displayDisclaimerBtn',
		width : "90%",
		margin : "0 0 10 0",
		text : OKnesset.strings.showDisclaimer
	}, 
	{
        // The email icon at the top left of the application toolbar
        xtype: 'button',
        id: 'emailReview',
		width : "90%",
		margin : "0 0 10 0",
        text: OKnesset.strings.emailButtonLabel,
	},
	],
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
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
});

Ext.reg('InfoView', OKnesset.app.views.InfoView);
