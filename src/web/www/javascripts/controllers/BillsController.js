Ext.regController('Bills', {

    // index action
    Index: function(options){
        if (!this.billsView) {
            this.billsView = this.render({
                xtype: 'BillsView',
            });
            var billList = this.billsView.query('#MemberBillList')[0];
			var billsController = this;
            billList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                billsController._gotoBill(record);
            });
        }

 
        var member = OKnesset.MemberStore.findBy(function(r){
            return r.data.id === parseInt(options.id)
        });
        member = this.currentMember = OKnesset.MemberStore.getAt(member).data;
        OKnesset.MemberBillsStore.loadData(member.bills);

        // scroll bill list up
        if (options.pushed) {
            var billList = this.billsView.query('#MemberBillList')[0];
            if (billList.scroller) {
                billList.scroller.scrollTo({
                    x: 0,
                    y: 0
                });
            }
        }
        // if there are no bills for the current member, display a text explaining
        // that.
        if (this.hasExcuseForNoBills(member)) {
            this.billsView.query('#MemberBillList')[0].emptyText = "<br/><br/><br/>" +
            OKnesset.strings.excuseForNoBills;
        } else {
            this.billsView.query('#MemberBillList')[0].emptyText = "";
        }
        console.log('before refresh');
        this.billsView.query('#MemberBillList')[0].refresh();

        this.application.viewport.setActiveItem(this.billsView, options.animation);
    },

    
    refresh: function(){


        var billList = this.billsView.query('#MemberBillList')[0];
        billList.refresh();
    },

    /**
     * Returns true if the member is a minister, or is the chairperson of the
     * Knesset.
     *
     * @param member
     * @returns {Boolean}
     */
    hasExcuseForNoBills: function(member){
        return (member.roles.indexOf(OKnesset.strings.ministerIndicator) != -1 || member.roles === OKnesset.strings.knessetChairman);
    },

    /**
     * Open Bill in browser. open the browser to display the bill in oknesset.org's
     * website
     */
    _gotoBill: function(record){
        var bill = record.data;
        var url = 'http://www.oknesset.org' + bill.url;
        if (isPhoneGap()) {
            if (isiOS()) {
                // Since in iOS opening the browser exists the application,
                // the user should be prompted if she wishes to do so.
				var that = this;
                navigator.notification.confirm(null, function(idx){
                    if (idx == 2) {
                        that._gotoBillCallback(url, bill.url)
                    } else {
                        // track bill cancel
                        GATrackBillCanceled(bill.url)
                    }
                }, OKnesset.strings.openBillText, OKnesset.strings.dialogOKCancel);
            } else {// android
                this._gotoBillCallback(url, bill.url);
            }
        }
        // TODO for web version - open a new browser tab

    },

    _gotoBillCallback: function(url, billUrl){
        // in iOS, this function is called form native code, and it is necessary
        // that the next call to native code via phonegap command would not be
        // executed in the same "thread".
        window.setTimeout(function(){
            GATrackBill(billUrl, function(){
                if (isAndroid()) {
                    window.plugins.webintent.startActivity({
                        action: WebIntent.ACTION_VIEW,
                        url: url
                    }, function(){
                        // success callback
                    }, function(){
                        alert(OKnesset.strings.errorOpenBill)
                    });
                } else if (isiOS()) {
                    document.location = url;
                }
            });
        }, 10);
    }


});
