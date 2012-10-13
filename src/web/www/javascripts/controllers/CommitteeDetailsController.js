Ext.regController('CommitteeDetails', {

    // index action
    Index: function (options) {
        if (!this.CommitteeDetailsView) {
            this.CommitteeDetailsView = this.render({
                xtype: 'CommitteeDetailsView',
            });
            var committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
			var committeeDetailsController = this;
            committeeMembersList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                committeeDetailsController._gotoMember(record);
            });
        }

        CommitteeDetails = OKnesset.CommitteeDetailsStore.findBy(function(r){
            return r.data.id === parseInt(options.id)
        });

        CommitteeDetails = OKnesset.CommitteeDetailsStore.getAt(CommitteeDetails);
        
        this.CommitteeDetailsView.query('#committeeName')[0].update({
            name: CommitteeDetails.data.name
        });

        OKnesset.CommitteeDetailsMembersListStore.loadData(CommitteeDetails.data.members);

        //update meetings store with recent and future meetings data.
        committeesMeetings = [];
        var recent_meetings = CommitteeDetails.data.recent_meetings;
        for (i=0;i<recent_meetings.length;i++){
            recent_meetings[i]['MeetingType'] = 'recent';
            committeesMeetings.push(recent_meetings[i]);
        }

        var future_meetings = CommitteeDetails.data.future_meetings;
        for (i=0;i<future_meetings.length;i++){
            future_meetings[i]['MeetingType'] = 'future';
            committeesMeetings.push(future_meetings[i]);
        }

        OKnesset.CommitteeDetailsMeetingsListStore.loadData(committeesMeetings);

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committeeDetails);
        this.application.viewport.setActiveItem(this.CommitteeDetailsView, options.animation);

        //scroll view up

        if (this.CommitteeDetailsView.scroller) {
            this.CommitteeDetailsView.scroller.scrollTo({
                x: 0,
                y: 0
            });
        }
        this.refresh();
        
    },

    
    refresh: function(){


        var committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
        committeeMembersList.refresh();
    },

    _gotoMember: function(record){
        console.log(record)
        OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.url.match(/\/member\/(\d+)\/+/)[1], this.historyUrl);
    }

});
