Ext.regController('Votes', {

    // index action
    Index: function (options) {
        if (!this.VotesView) {
            this.VotesView = this.render({
                xtype: 'VotesView',
            });
            var VotesList = this.VotesView.query('#VotesList')[0];
			var VotesController = this;
        }


        Ext.util.JSONP.request({
            url: 'http://www.oknesset.org/api/vote/' + options.id,
            callbackKey : "callback",
            onFailure : function(){console.log("failure");},
            callback: function(data){
                var tmpArray = [];
                tmpArray.push(data);
                console.log(tmpArray);
                OKnesset.VotesStore.loadData(tmpArray);
            }
        });

        // scroll Votes list up
        if (options.pushed) {
            var VotesList = this.VotesView.query('#VotesList')[0];
            if (VotesList.scroller) {
                VotesList.scroller.scrollTo({
                    x: 0,
                    y: 0
                });
            }
        }

          var VotesList = this.VotesView.query('#VotesList')[0];
          VotesList.refresh();

          this.application.viewport.setActiveItem(this.VotesView, options.animation);
    },

    
    refresh: function(){
        var VotesList = this.VotesView.query('#VotesList')[0];
        VotesList.refresh();
    }

});
