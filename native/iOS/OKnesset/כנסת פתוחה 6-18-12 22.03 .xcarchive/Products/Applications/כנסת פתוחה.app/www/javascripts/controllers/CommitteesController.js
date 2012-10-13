Ext.regController('Committees', {

    // index action
    Index: function (options) {
        if (!this.committeesView) {
            this.committeesView = this.render({
                xtype: 'CommitteesView',
            });
            var committeeList = this.committeesView.query('#MemberCommitteeList')[0];
			var committeesController = this;
        }

 
        var member = OKnesset.MemberStore.findBy(function(r){
            return r.data.id === parseInt(options.id)
        });
        member = this.currentMember = OKnesset.MemberStore.getAt(member).data;
       
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
    },

    
    refresh: function(){


        var committeeList = this.committeesView.query('#MemberCommitteeList')[0];
        committeeList.refresh();
    }




});
