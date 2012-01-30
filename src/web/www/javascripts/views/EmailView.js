OKnesset.app.views.EmailView = new Ext.extend(Ext.Panel, {
    id: 'EmailView',
    floating: true,
    centered: true,
    cls: 'textCenter',
    styleHtmlContent: true,
    items: [{
        html: OKnesset.strings.emailDialogBody,
        height: "5em"
    }, {
        xtype: 'button',
		id :'generalFeedbackBtn',
        text: OKnesset.strings.emailGeneral
    }, {
        xtype: 'spacer',
        height: "2em"
    }, {
        xtype: 'button',
		id : 'contextButton',
        style: {
            'font-size': '115%'
        },
    }],
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: OKnesset.strings.emailDialogTitle
    }, {
        dock: 'bottom',
		id : 'cancelEmailBtn',
        xtype: 'button',
        ui: 'decline',
        text: OKnesset.strings.cancel
    }],
    initComponent: function(){
    	var viewport = Ext.ApplicationManager.get("oknesset").viewport;
	    this.width = viewport.getWidth() * 0.9;
    	this.height = viewport.getHeight() * 0.65;
        OKnesset.app.views.EmailView.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('EmailView', OKnesset.app.views.EmailView);
