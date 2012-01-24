Ext.regController('Member', {

    // index action
    Index: function(options){
        if (!this.memberView) {
            this.memberView = this.render({
                xtype: 'MemberView',
            });
            var billList = this.memberView.query('#MemberBillList')[0];
            billList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                gotoBill(record);
            });
        }

        // TODO the memberController page should not rely on the MemberStore to contain party members
        // the way the stores are organized should change
        var member = OKnesset.MemberStore.findBy(function(r){
            return r.data.id === parseInt(options.id)
        });
        member = this.currentMember = OKnesset.MemberStore.getAt(member).data;

        GATrackMember(member.name);

        this.memberView.query('#MemberImage')[0].update({
            img_url: "images/members/" +
            member.img_url.substring(member.img_url.lastIndexOf('/') + 1)
        });

		this.updateData(member);

        // scroll bill list up
    	if (options.pushed) {
			var billList = this.memberView.query('#MemberBillList')[0];
			if (billList.scroller) {
				billList.scroller.scrollTo({
					x: 0,
					y: 0
				});
			}
		}
        // if there are no bills for the current member, display a text explaining
        // that.
        if (hasExcuseForNoBills(member)) {
            this.memberView.query('#MemberBillList')[0].emptyText = "<br/><br/><br/>" +
            OKnesset.strings.excuseForNoBills;
        } else {
            this.memberView.query('#MemberBillList')[0].emptyText = "";
        }
        this.memberView.query('#MemberBillList')[0].refresh();

        this.application.viewport.setActiveItem(this.memberView, options.animation);
    },

	getReviewButtonText : function(){
		return Ext.util.Format.format(
				OKnesset.strings.emailMember,
				this.currentMember.name);
	},

	updateData : function(member){
        this.memberView.query('#MemberBillsTitle')[0].update({
            billNumber: member.bills.length,
            hasExcuseForNoBills: hasExcuseForNoBills(member)
        });
        this.memberView.query('#MemberInfo')[0].update(member);
        OKnesset.MemberBillsStore.loadData(member.bills);
        this.application.viewport.query('#toolbar')[0].setTitle(member.name);
	},

    refresh: function(){
        // get current member data from Party store, which is updated
        var party = getPartyFromPartyStoreByName(this.currentMember.party);
        Ext.iterate(party.data.members, function(value, index){
            if (value.data.id === this.currentMember.id) {
                this.updateData(value.data);
                return false;
            }
        }, this);

        var billList = this.memberView.query('#MemberBillList')[0];
        billList.refresh();
    }
});
