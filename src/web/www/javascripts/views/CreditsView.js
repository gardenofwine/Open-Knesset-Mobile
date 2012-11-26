OKnesset.app.views.CreditsView = new Ext.extend(Ext.Panel, {
    id: 'CreditsView',
	floating : true,
	centered : true,
	styleHtmlContent : true,
	scroll : "vertical",
	// hideOnMaskTap : false,
	// stopMaskTapEvent: false,
	items : [ {
		html : creditsText,
		height : "5em"
	} ],
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
		title : OKnesset.strings.about
	}, {
		xtype : 'button',
		id : 'creditsCancel',
		ui : 'confirm',
		text : OKnesset.strings.ok,
		dock : 'bottom'
	} ],
    initComponent: function(){
    	var viewport = Ext.ApplicationManager.get("oknesset").viewport;
	    this.width = viewport.getWidth() * 0.9;
    	this.height = viewport.getHeight() * 0.9;
        OKnesset.app.views.CreditsView.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('CreditsView', OKnesset.app.views.CreditsView);
