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

            var committeeMeetings = this.CommitteeDetailsView.query('#committeeMeetings')[0];
            committeeMeetings.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                committeeDetailsController._gotoCommitteeProtocol(record);
            });

        }


        var committeeDetailsController = this;

        var committeeName = this.CommitteeDetailsView.query('#committeeName')[0];
        var committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
        var committeeMeetings = this.CommitteeDetailsView.query('#committeeMeetings')[0];
        var committeeMembers = this.CommitteeDetailsView.query('#committeeMembers')[0];



        if (this.cached != options.id) {
            this.cached = options.id;
            var hideWhileLoading = [committeeName, committeeMembersList, committeeMeetings, committeeMembers];
            committeeDetailsController._init(hideWhileLoading);


            Ext.util.JSONP.request({
                url: 'http://www.oknesset.org/api/committee/' + options.id,
                callbackKey : "callback",
                onFailure : function(){console.log("failure");},
                callback: function(data){
                    committeeDetailsController._updateData(data);
                    committeeDetailsController._refresh(hideWhileLoading);
                }
            });

        }
      
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
    _updateData: function (CommitteeDetails) {

            this.CommitteeDetailsView.query('#committeeName')[0].update({
            name: CommitteeDetails.name
        });

        OKnesset.CommitteeDetailsMembersListStore.loadData(CommitteeDetails.members);

        //update meetings store with recent and future meetings data.
        committeesMeetings = [];
        var recent_meetings = CommitteeDetails.recent_meetings;
        for (i=0;i<recent_meetings.length;i++){
            recent_meetings[i]['MeetingType'] = 'recent';
            committeesMeetings.push(recent_meetings[i]);
        }

        var future_meetings = CommitteeDetails.future_meetings;
        for (i=0;i<future_meetings.length;i++){
            future_meetings[i]['MeetingType'] = 'future';
            committeesMeetings.push(future_meetings[i]);
        }

        OKnesset.CommitteeDetailsMeetingsListStore.loadData(committeesMeetings);
    },
    _init: function(elementsToHIDE){

        this.CommitteeDetailsView.query('#committeeDetailsLoading')[0].show();

        elementsToHIDE.forEach(function(e){
            e.hide();
        });
    },
    _refresh: function(elementsToSHOW){

        this.CommitteeDetailsView.query('#committeeDetailsLoading')[0].hide();

        elementsToSHOW.forEach(function(e){
            e.show();
        });
    },

    _gotoMember: function(record){
        //console.log(record)
        OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.url.match(/\/member\/(\d+)\/+/)[1], this.historyUrl);
    },

    _gotoCommitteeProtocol: function(record){
        //console.log(record)
        OKnesset.app.controllers.navigation.dispatchPanel('Protocol/Index/' + this.getIdFromAbsoluteUrl(record.data.url), this.historyUrl);
    },

    getIdFromAbsoluteUrl: function(url){
        var sub1 = url.substr("/committee/meeting/".length);
        return sub1.substr(0,sub1.indexOf('/'));
    },    

    refresh: function(){


        var committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
        committeeMembersList.refresh();
    },


});
