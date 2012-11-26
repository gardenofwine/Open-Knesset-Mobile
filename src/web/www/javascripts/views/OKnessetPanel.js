OKnesset.Panel = Ext.extend(Ext.Panel, {
	constructor: function(config) {
    	OKnesset.Panel.superclass.constructor.call(this, config);
	},
	initComponent : function(){
		this.loadingPanel = new Ext.Panel({
			id: "loading",
			cls: 'titlePanel',
			height : "2em",
			padding: '5',
			html:'<div class="hebTitle">'+ OKnesset.strings.LoadingPlsWait + '</div>'
        });
		this.items.splice(0, 0, this.loadingPanel);
		OKnesset.Panel.superclass.initComponent.call(this,arguments);
	},

	showLoading: function(show) {
		if (show){
			this.loadingPanel.show();
		} else {
			this.loadingPanel.hide();
		}
	}
});
