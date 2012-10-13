Ext.regController('Committees', {

    // index action
    Index: function (options) {
        if (!this.committeesView) {
            this.committeesView = this.render({
                xtype: 'CommitteesView',
            });
            var committeeList = this.committeesView.query('#MemberCommitteeList')[0];
			var committeesController = this;
            committeeList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                committeesController._gotoCommittee(record);
            });
        }

        //ROYCHANGE
        // var member = OKnesset.MemberStore.findBy(function(r){
        //     return r.data.id === parseInt(options.id)
        // });
        // member = this.currentMember = OKnesset.MemberStore.getAt(member).data;
       
        var member = this.currentMember = OKnesset.GetMembersById(options.id)[0];
        OKnesset.MemberCommitteesStore.loadData(member.committees);

        // scroll committee list up
        if (options.pushed) {
            var committeeList = this.committeesView.query('#MemberCommitteeList')[0];
            if (committeeList.scroller) {
                committeeList.scroller.scrollTo({
                    x: 0,
                    y: 0
                });
            }
        }

        this.committeesView.query('#MemberCommitteeList')[0].refresh();

        this.application.viewport.setActiveItem(this.committeesView, options.animation);
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committees);
    },

    
    refresh: function(){


        var committeeList = this.committeesView.query('#MemberCommitteeList')[0];
        committeeList.refresh();
    },

    _gotoCommittee: function(record){

        var committee = OKnesset.CommitteeDetailsStore.findBy(function(r){
            return (r.data.name == record.data.title);
        });

        var committee = OKnesset.CommitteeDetailsStore.getAt(committee);        
        OKnesset.app.controllers.navigation.dispatchPanel('CommitteeDetails/Index/' + committee.data.id, this.historyUrl);
    }




});
