Ext.regController('VoteDetails', {

    // index action
    Index: function (options) {

         if (!this.VoteDetailsView) {
            this.VoteDetailsView = this.render({
                xtype: 'VoteDetailsView',
            });

            var VoteDetailsController = this;
            var membersVotedList = this.VoteDetailsView.query('#membersVotedList')[0];
            membersVotedList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                VoteDetailsController._gotoMember(record);
            });
        }

        var VoteDetailsController = this;
        var voteDescription = this.VoteDetailsView.query('#voteDescription')[0];
        var membersVotedList = this.VoteDetailsView.query('#membersVotedList')[0];
        
        if (this.cached != options.id) {
            this.cached = options.id;
            var hideWhileLoading = [voteDescription, membersVotedList];
            VoteDetailsController._init(hideWhileLoading);


            Ext.util.JSONP.request({
                url: 'http://www.oknesset.org/api/vote/' + options.id,
                callbackKey : "callback",
                onFailure : function(){console.log("failure");},
                callback: function(data){
                    VoteDetailsController.updateData(data);
                    VoteDetailsController._refresh(hideWhileLoading);
                }
            });
        }

        this.application.viewport.setActiveItem(this.VoteDetailsView, options.animation);

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.votesDetails);

        if (VoteDetailsController.VoteDetailsView.scroller) {
            VoteDetailsController.VoteDetailsView.scroller.scrollTo({
                x: 0,
                y: 0
            });
        }
    },

    _init: function(elementsToHIDE){

        this.VoteDetailsView.query('#voteTitle')[0].update({
            title: OKnesset.strings.LoadingPlsWait
        });

        elementsToHIDE.forEach(function(e){
            e.hide();
        });
    },
    _refresh: function(elementsToSHOW){

        elementsToSHOW.forEach(function(e){
            e.show();
        });
    },

    updateData: function(data) {
        //update VotedStore
        var voted = {
            for: OKnesset.GetMembersById(data.for_votes),
            against: OKnesset.GetMembersById(data.against_votes),
            abstain: OKnesset.GetMembersById(data.abstain_votes)
            //need to get full data required from party store
        }

        voted.for.forEach(function (member) {
            member.VoteType = 'for';
        });

        voted.against.forEach(function (member) {
            member.VoteType = 'against';
        });

        voted.abstain.forEach(function (member) {
            member.VoteType = 'abstain';
        });                

        OKnesset.VotedStore.loadData(voted.for);
        OKnesset.VotedStore.add(voted.against);
        OKnesset.VotedStore.add(voted.abstain);

        // membersVotedList.refresh();

        //update title + description
        this.VoteDetailsView.query('#voteTitle')[0].update({
            title: data.title
        });

        this.VoteDetailsView.query('#voteDescription')[0].update({
            summary: data.summary
        });


    },
        _gotoMember: function(record){
        console.log(record)
        OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, this.historyUrl);
    }

});
