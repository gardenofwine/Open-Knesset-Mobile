Ext.regController('CommitteeMembers', {
    CommitteeMembersView: undefined,

    Index: function (options) {
        var committeeMembersList;
        if (!this.CommitteeMembersView) {
            this.CommitteeMembersView = this.render({
                xtype: 'CommitteeMembersView'
            });

            committeeMembersList = this.CommitteeMembersView.query('#CommitteeMembersList')[0];
            committeeMembersList.addListener('itemtap', function (that, index) {
                var record = that.store.getAt(index);
                this._gotoMember(record);
            }, this);
        }

        committeeMembersList = committeeMembersList || this.CommitteeMembersView.query('#CommitteeMembersList')[0];
        committeeMembersList.refresh();

        var committee = getObjectFromStoreByID(OKnesset.AllCommitteesStore, options.id);

        // don't track if the panel was reached by pressing 'back'
        if (options.pushed) {
            GATrackPage('CommitteeMembersView', committee.data.name);
        }

        //scroll view up
        if (this.CommitteeMembersView.scroller) {
            this.CommitteeMembersView.scroller.scrollTo({
                x: 0,
                y: 0
            });
        }

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committeeMembers);
        this.application.viewport.setActiveItem(this.CommitteeMembersView, options.animation);
    },

    _gotoMember: function (record) {
        OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.url.match(/\/member\/(\d+)\/+/)[1], this.historyUrl);
    }
});