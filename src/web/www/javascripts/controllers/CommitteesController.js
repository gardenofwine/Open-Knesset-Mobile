Ext.regController('Committees', {

    // index action
    Index: function(options){

        if (!this.committeesView) {
            this.committeesView = this.render({
                xtype: 'CommitteesView',
            });
        }
        var committeesController = this;
        var member = OKnesset.MemberStore.findBy(function(r){
            return r.data.id === parseInt(options.id)
        });
        member = this.currentMember = OKnesset.MemberStore.getAt(member).data;
        this.updateData(member);
        this.application.viewport.setActiveItem(this.committeesView, options.animation);
    },
    updateData: function(member){
    	this.committeesView.query('#CommitteesInfo')[0].update(member);
    }
});
