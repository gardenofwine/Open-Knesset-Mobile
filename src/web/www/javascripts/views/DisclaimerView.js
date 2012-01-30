OKnesset.app.views.DisclaimerView = new Ext.extend(Ext.Panel, {
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
	items : [ {
		html : OKnesset.strings.disclaimerDialogBody,
		height : "5em"
	} ],
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
		title : OKnesset.strings.oknessetName
	}, {
		xtype : 'button',
		id : 'cancelDisclaimerBtn',
		ui : 'confirm',
		text : OKnesset.strings.ok,
		dock : 'bottom'
	} ],
    initComponent: function(){
    	var viewport = Ext.ApplicationManager.get("oknesset").viewport;
	    this.width = viewport.getWidth() * 0.9;
    	this.height = viewport.getHeight() * 0.9;
        OKnesset.app.views.DisclaimerView.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('DisclaimerView', OKnesset.app.views.DisclaimerView);
