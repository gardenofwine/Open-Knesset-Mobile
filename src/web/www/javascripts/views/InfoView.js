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
		scroll : 'vertical',
		id : 'pageDescription',
		tpl : '<span>{text}</span>',
		height: "100%"
		// margin : "10 10 0 10",
	}
	// , {
	// 	xtype : 'spacer',
	// }, 
	],
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
	}, {
		dock : 'bottom',
		ui : 'light',
		items : [ 
			{
				xtype : 'button',
				id : 'displayDisclaimerBtn',
				width : "90%",
				margin : "0 10 10 10",
				text : OKnesset.strings.showDisclaimer
			}, 
			{
		        // The email icon at the top left of the application toolbar
		        xtype: 'button',
		        id: 'emailReview',
				width : "90%",
				margin : "0 10 10 10",
		        text: OKnesset.strings.emailButtonLabel,
			},
			{
				xtype : 'button',
				id : 'cancelInfoBtn',
				ui : 'confirm',
				text : OKnesset.strings.back
			} ]
	} ],
	listeners:{
		// layout the pageDescription height, because it varies
		afterlayout : {
			fn : function(that, layout ){
				var textHeight = that.getHeight();
				for (var i = 0; i < that.dockedItems.items.length; i++) {
					textHeight -= that.dockedItems.items[i].getHeight();
				};
				that.items.getAt(0).setHeight(textHeight - 10);
			}
		}

	}
});

Ext.reg('InfoView', OKnesset.app.views.InfoView);
