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
    					OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id , options.historyUrl);
            });
            //when tap on the spokeman and text
            var spokemantap = this.protocolView.query('#ProtocolText')[0];
            spokemantap.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					OKnesset.app.controllers.navigation.dispatchPanel('ProtocolSection/Index/' + index, options.historyUrl)
            });
        }

		var protocolController = this;


        getAPIData({
            apiKey:'committeeProtocol',
            urlOptions : options.id,
            success:function(data){
                // creating ProtocolStore
                var tmpArray = [];

                tmpArray.push(data);
                OKnesset.Protocol2Store.loadData(tmpArray);

                var member_idArray =[];
                // split the id from the url
                data.mks_attended.forEach(function(e){
                        var params=e.split("/");
                        member_idArray.push(params[4]);
                });

                var memberObj= [];
                //the function GetMemberById doesn't work well/
                memberObj=getMembersById(member_idArray);


                // creating ProtocolMembersStore

                OKnesset.ProtocolMembersStore.loadData(memberObj);

                // creating ProtocolTextStore

                var protocolArray= data.protocol;

                var protocolText =[];
                protocolArray.forEach(function(e){
                    protocolText.push({protocol: e});
                });

                OKnesset.ProtocolTopicsStore.loadData(protocolText);
                OKnesset.ProtocolTopicsStore.protocolId = options.id;


                 //apply different colors on a
                var colors = [ 'GreenYellow ','DarkTurquoise ', 'Gold  ','PaleVioletRed  ', 'Red  '];
                var j=0;

                var elements = protocolController.protocolView.query('#ProtocolText')[0].all.elements;
                for (i=0;i < elements.length ;i++) {
                    elements[i].style.background = colors[j];
                    j++;
                    if ( j == 5 ){
                        j=0;
                    }
                }
            },
            failure:function(result){
                console.log("error receiving Committee Protocol data. ", result);
            }
        });


        // don't track if the panal was reached by pressing 'back'
        if (options.pushed){
            GATrackPage('ProtocolView', options.id);
        }

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.Committeemeeting);
        this.application.viewport.setActiveItem(this.protocolView, options.animation);

        if (options.pushed){
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
	}
});
