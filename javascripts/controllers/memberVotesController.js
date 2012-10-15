Ext.regController('memberVotes', {

    // index action
	Index: function(options)
    {
        if (!this.memberVotesView) {
            this.memberVotesView = this.render({
                xtype: 'memberVotesView',
            });

            var memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];
        
            memberVotesList.addListener('itemtap',
                function(that, index, item, e) {
                    var record = that.store.getAt(index);
                    //console.log(record);
                    OKnesset.app.controllers.navigation.dispatchPanel('Votes/Index/' + record.data.id, options.historyUrl);
            });
        }

        var memberVotesController = this;


        // var operation = new Ext.data.Operation({
        //     action: 'read',
        //     type: 'scripttag'
        // //    format: jsonp,
        // });

        // var proxy = new Ext.data.ScriptTagProxy ({
        //     url: 'http://www.oknesset.org/api/v2/vote/?format=jsonp&callback=callback&member_for=' + options.id,
        //     reader: new Ext.data.Reader({
        //         type: 'json',
        //         root: 'objects'
        //     })
        // });

        //add for votes to store
         Ext.util.JSONP.request({
            url: 'http://www.oknesset.org/api/v2/vote/',
            callbackKey : "callback",
            params : {limit:10, format:"jsonp", member_for: options.id},
            onFailure : function(){console.log("failure");},
            callback: function(data){

                for (var i = data.objects.length - 1; i >= 0; i--) {
                    data.objects[i]['VoteType'] = 'for';
                };

               //console.log(data.objects);
                OKnesset.MemberVotesStore.loadData(data.objects);

                           // scroll votes list up


                 memberVotesList.refresh();

                    //add against votes to store
                    Ext.util.JSONP.request({
                        url: 'http://www.oknesset.org/api/v2/vote/',
                        callbackKey : "callback",
                        params : {limit:10,format:"jsonp", member_against: options.id},
                        onFailure : function(){console.log("failure");},
                        callback: function(dataAgainst){

                            for (var i = dataAgainst.objects.length - 1; i >= 0; i--) {
                                dataAgainst.objects[i]['VoteType'] = 'against';
                            };

                            //console.log(dataAgainst.objects);
                            OKnesset.MemberVotesStore.add(dataAgainst.objects);
                            memberVotesList.refresh();
                        }
                    });

            }
        });

        if (options.pushed) {
            if (memberVotesList.scroller) {
                memberVotesList.scroller.scrollTo({
                    x: 0,
                    y: 0
                });
            }
        }

 

        this.application.viewport.setActiveItem(this.memberVotesView, options.animation);
       
    },
    refresh : function() {        
        var memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];
        memberVotesList.refresh();
	},
});