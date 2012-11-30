OKnesset.Panel = Ext.extend(Ext.Panel, {
	constructor: function(config) {
    	OKnesset.Panel.superclass.constructor.call(this, config);
	},
	initComponent : function(){
		this.loadingPanel = new Ext.Panel({
			id: "loading",
			cls: 'titlePanel',
			floating : true,			
			height : "2em",
			padding: '5',
			html:'<div class="hebTitle">'+ OKnesset.strings.LoadingPlsWait + '</div>'
        });
		this.items.splice(0, 0, this.loadingPanel);
		OKnesset.Panel.superclass.initComponent.call(this,arguments);
	},
	listeners:{
		show : {
			fn : function(that){
				if (that._showLoadingOnShow){
					that.loadingPanel.show();
				}
			}
		}

	},

	showLoading: function(show) {
		if (show){
			if (this.isVisible()){
			// var that = this;
			// window.setTimeout(function(){that.loadingPanel.show();}, 10);
				this.loadingPanel.show();
				this._showLoadingOnShow = false;
			} else {
				this._showLoadingOnShow = true;
			}
		} else {
			this.loadingPanel.hide();
			this._showLoadingOnShow = false;
		}
	}
});
