Ext.regController('memberVotes', {

    // index action
	Index: function(options)
    {
        if (!this.memberVotesView) {
            this.memberVotesView = this.render({
                xtype: 'memberVotesView',
            });

            //Get the List for reference
            var memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];

            //Defining what is happening when tapping on an item in the list
            memberVotesList.addListener('itemtap',
                function(that, index, item, e) {
                    var record = that.store.getAt(index);
                    //console.log(record);
                    OKnesset.app.controllers.navigation.dispatchPanel('VoteDetails/Index/' + record.data.id, options.historyUrl);
            });
        }

        var memberVotesController = this;
        var memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];

        if (this.cached != options.id) {
            this.cached = options.id;
            var hideWhileLoading = [memberVotesList];
            memberVotesController._init(hideWhileLoading);

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
                            memberVotesController._refresh(hideWhileLoading);
                        }
                    });

                }
            });
        }

        //Change toolbar title
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.votes);



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
    _init: function(elementsToHIDE){

        this.memberVotesView.query('#memberVotesLoading')[0].show();

        elementsToHIDE.forEach(function(e){
            e.hide();
        });
    },
    _refresh: function(elementsToSHOW){

        this.memberVotesView.query('#memberVotesLoading')[0].hide();

        elementsToSHOW.forEach(function(e){
            e.show();
        });
    },
    refresh : function() {
        var memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];
        memberVotesList.refresh();
	},
});