Ext.regController('ProtocolSection', {

	Index: function(options)
    {
	
        if ( ! this.protocolsectionView)
        {
            this.protocolsectionView = this.render({
                xtype: 'ProtocolSectionView',
            });        
        }
       //assuming the data is in pairs ( the first line is the title and the second is the desription) 
       //this is why the jumps are X2 .
        //enable/disable next/prev buttons when at the edges of the list
        if ((options.id) >= OKnesset.ProtocolTopicsStore.data.length-2) {
        	this.protocolsectionView.query('#next_spokemanBtn')[0].disable()
        }
        
        if ((options.id) < OKnesset.ProtocolTopicsStore.data.length-2){
        	this.protocolsectionView.query('#next_spokemanBtn')[0].enable()
        }
        
        this.protocolsectionView.query('#next_spokemanBtn')[0].setHandler(function(){
        	options.id ++;
        	options.id ++;
        	OKnesset.app.controllers.navigation.dispatchPanel('ProtocolSection/Index/'+options.id,options.historyUrl);
        });
        
        if ((options.id) == 0) {
        	this.protocolsectionView.query('#pre_spokemanBtn')[0].disable()
        }
        if ((options.id) > 0){
        	this.protocolsectionView.query('#pre_spokemanBtn')[0].enable()
        }
        
        this.protocolsectionView.query('#pre_spokemanBtn')[0].setHandler(function(){
        	options.id --;
        	options.id --;
        	OKnesset.app.controllers.navigation.dispatchPanel('ProtocolSection/Index/'+options.id,options.historyUrl);
        });
      
        var recordSpokeman = OKnesset.ProtocolTopicsStoreEven.getAt(options.id/2);
        this.protocolsectionView.query('#Spokeman')[0].update(recordSpokeman.data);
    
        var recordText = OKnesset.ProtocolTopicsStoreOdd.getAt(options.id/2);
        this.protocolsectionView.query('#Text')[0].update(recordText.data);
        
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.protocolsec);
        this.application.viewport.setActiveItem(this.protocolsectionView, options.animation);
        
        
    },


	refresh : function() {
    	this.protocolsectionView.refresh()
	},

	updateData : function(record){
		this.protocolsectionView.query('#Text')[0].update(record.data);
		this.protocolsectionView.query('#Spokeman')[0].update(record.data);
	}
});