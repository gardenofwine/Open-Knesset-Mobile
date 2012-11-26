Ext.regController('Bills', {

    // index action
    Index: function(options){
        var billList = this.billsView.query('#MemberBillList')[0],
            that = this;
        if (!this.billsView) {
            this.billsView = this.render({
                xtype: 'BillsView'
            });
            var billsController = this;
            billList.addListener('itemtap', function(that, index, item, e){
                var record = that.store.getAt(index);
                billsController._gotoBill(record);
            });
        }


        getAPIData({
            apiKey:'member',
            urlOptions : options.id,
            success: function (data){
                var member = data;

                // don't track if the panal was reached by pressing 'back'
                if (options.pushed){
                    GATrackPage('BillsView', member.name);
                }

                getAPIData({
                    apiKey : 'memberBills',
                    parameterOptions : options.id,
                    success: function (billsData){
                        OKnesset.MemberBillsStore.loadData(billsData.bills);
                        // if there are no bills for the current member, display a text explaining
                        // that.
                        if (that.hasExcuseForNoBills(member)) {
                            that.billsView.query('#MemberBillList')[0].emptyText = "<br/><br/><br/>" +
                                OKnesset.strings.excuseForNoBills;
                        } else {
                            that.billsView.query('#MemberBillList')[0].emptyText = "<br/><br/><br/>" +
                                OKnesset.strings.hasNoBillsTitle;
                        }
                        that.billsView.query('#MemberBillList')[0].refresh();
                    },
                    failure:function(result){
                        console.log("Error receiving memeber bills data. ", result);
                    }
                });
            },
            failure:function(result){
                console.log("Error receiving memeber data. ", result);
            }
        });

        // scroll bill list up
        if (options.pushed) {
            billList = this.billsView.query('#MemberBillList')[0];
            if (billList.scroller) {
                billList.scroller.scrollTo({
                    x: 0,
                    y: 0
                });
            }
        }


        this.application.viewport.setActiveItem(this.billsView, options.animation);
    },
    /**
     * Returns true if the member is a minister, or is the chairperson of the
     * Knesset.
     *
     * @param member
     * @returns {Boolean}
     */
    hasExcuseForNoBills: function(member){
        return (
            member.current_role_descriptions !== null &&
            (member.current_role_descriptions.indexOf(OKnesset.strings.ministerIndicator) != -1 ||
            member.current_role_descriptions === OKnesset.strings.knessetChairman));
    },

    /**
     * Open Bill in browser. open the browser to display the bill in oknesset.org's
     * website
     */
    _gotoBill: function(record){
        var bill = record.data;
        OKnesset.app.controllers.navigation.dispatchPanel('BillDetails/Index/' + bill.id, this.historyUrl);
    }
});
