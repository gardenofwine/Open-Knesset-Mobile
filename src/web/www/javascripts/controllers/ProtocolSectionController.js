Ext.regController('ProtocolSection', {

	Index: function(options)
    {

        if ( ! this.protocolsectionView)
        {
            this.protocolsectionView = this.render({
                xtype: 'ProtocolSectionView',
            });
        }

        var that=this;

        this.protocolsectionView.query('#next_spokemanBtn')[0].setHandler(function(){
        	options.id ++;
        	var record = OKnesset.ProtocolTopicsStore.getAt(options.id);
        	that.updateData(record,options.id);
        });

        this.protocolsectionView.query('#pre_spokemanBtn')[0].setHandler(function(){
        	options.id --;
        	var record = OKnesset.ProtocolTopicsStore.getAt(options.id);
        	that.updateData(record,options.id);
        });

        var first_record = OKnesset.ProtocolTopicsStore.getAt(options.id);

        this.updateData(first_record,options.id);

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.protocolsec);

        this.application.viewport.setActiveItem(this.protocolsectionView, options.animation);


    },


	refresh : function() {
    	this.protocolsectionView.update()
	},

	updateData : function(record,i){

		if ((i) >= OKnesset.ProtocolTopicsStore.data.length-1) {
        	this.protocolsectionView.query('#next_spokemanBtn')[0].disable()
        }

        if ((i) < OKnesset.ProtocolTopicsStore.data.length-1){
        	this.protocolsectionView.query('#next_spokemanBtn')[0].enable()
        }
        if ((i) == 0) {
        	this.protocolsectionView.query('#pre_spokemanBtn')[0].disable()
        }
        if ((i) > 0){
        	this.protocolsectionView.query('#pre_spokemanBtn')[0].enable()
        }

		this.protocolsectionView.query('#Text')[0].update(record.data);
		this.protocolsectionView.query('#Spokeman')[0].update(record.data);

	}
});