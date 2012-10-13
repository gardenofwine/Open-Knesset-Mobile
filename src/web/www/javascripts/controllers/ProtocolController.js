Ext.regController('Protocol', {
    // index action
	
    Index: function(options)
    {
        if (!this.protocolView)
        {
            this.protocolView = this.render({
                xtype: 'ProtocolView',
            });
            
            //when tap on committee member
            var protocolController = this.protocolView.query('#ProtocolMembers')[0];
            protocolController.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					//var memberObj= OKnesset.GetMembersByName(record.data.name);
    					OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + OKnesset.app.controllers.Member.getIdFromAbsoluteUrl(record.data.url) , options.historyUrl);
            });
           
            //when tap on the spokeman and text
            var spokemantap = this.protocolView.query('#ProtocolText')[0];
            spokemantap.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					//only the even lines will be clickable
    					if((index)%2 == 0){ 
    					OKnesset.app.controllers.navigation.dispatchPanel('ProtocolSection/Index/' + index, options.historyUrl)
    					};
            });
            
            Ext.util.JSONP.request({
    		    url: 'http://www.oknesset.org/api/committeemeeting/6728/',
    		    callbackKey : "callback",
    		    onFailure : function(){console.log("failure");},
    			callback : function(data){
    		     // creating ProtocolStore
    		     var tmpArray = [];
            	 tmpArray.push(data);
                 OKnesset.Protocol2Store.loadData(tmpArray);
                 // creating ProtocolMembersStore
            	 OKnesset.ProtocolMembersStore.loadData(data.mks_attended);
            	// creating ProtocolTextStore
        	     var protocolArray= data.protocol_text.split(/[<>]/);
            	 var protocolText =[];
            	 protocolArray.forEach(function(e){
            		 protocolText.push({protocol_text: e});
            	 });
            	 
            	 //split the array to even array and odd array
            	 //even array contain the title/spokeman
            	 //odd array conatain the text
            	 var protocolArrayEven=[];
            	 var protocolArrayOdd=[];
            	 //the "for" loop considering that the array is even
            	 for (i=0; i<(protocolText.length/2); i++){
            		 protocolArrayEven[i]=protocolText[2*i];
            		 protocolArrayOdd[i]=protocolText[2*i+1];
            	 }
            	 OKnesset.ProtocolTopicsStoreEven.loadData(protocolArrayEven);
            	 OKnesset.ProtocolTopicsStoreOdd.loadData(protocolArrayOdd);
            	 OKnesset.ProtocolTopicsStore.loadData(protocolText);
    		    },
    		});
           
        }
        
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.Committeemeeting);
        this.application.viewport.setActiveItem(this.protocolView, options.animation);
        
        
        
        if (options.pushed){
        	var protocolController = this.protocolView.query('#ProtocolMembers')[0];
            var spokemantap = this.protocolView.query('#ProtocolText')[0];
        	if (spokemantap.scroller) {
        		spokemantap.scroller.scrollTo({
        			x: 0,
        			y: 0
        		});
        	}
        	if (protocolController.scroller) {
        		protocolController.scroller.scrollTo({
        			x: 0,
        			y: 0
        		});
        	}
        }
    
	},
	
    refresh : function() {
		
		this.protocolView.refresh();
	}
});
