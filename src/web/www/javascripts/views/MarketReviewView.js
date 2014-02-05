OKnesset.app.views.MarketReviewView = new Ext.extend(Ext.Panel, {
	id : 'MarketReviewView',
	layout : 'vbox',
	width : '90%',
	height : '60%',
	floating : true,
	centered : true,
	items : [{
		scroll : 'vertical',
		id : 'pageDescription',
		tpl : '{text}',
		height : "100%",
		margin : "10 10 0 10",
	}],
	dockedItems : [{
		dock : 'top',
		xtype : 'toolbar',
	}, {
		dock : 'bottom',
		ui : 'light',
		items : [{
			xtype : 'button',
			id : 'letsGoBtn',
			width : "90%",
			margin : "0 10 10 10",
			text : OKnesset.strings.letsGoButtonLabel
		}, {
			xtype : 'button',
			id : 'notNowBtn',
			width : "90%",
			margin : "0 10 10 10",
			text : OKnesset.strings.notNowButtonLabel,
		}, {
			xtype : 'button',
			id : 'dontShowAgainBtn',
			width : "90%",
			margin : "0 10 10 10",
			text : OKnesset.strings.dontShowAgainButtonLabel,
		}]
	}],
	listeners : {
		// layout the pageDescription height, because it varies
		afterlayout : {
			fn : function(that, layout) {
				var textHeight = that.getHeight();
				for (var i = 0; i < that.dockedItems.items.length; i++) {
					textHeight -= that.dockedItems.items[i].getHeight();
				};
				that.items.getAt(0).setHeight(textHeight - 10);
			}
		}

	}
});

Ext.reg('MarketReviewView', OKnesset.app.views.MarketReviewView);
