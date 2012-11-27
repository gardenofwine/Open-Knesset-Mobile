/**
 * Bills
 */
OKnesset.app.views.BillsView = new Ext.extend(OKnesset.Panel, {
    id: 'BillsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    currentMemeber: null,
    initComponent: function(){
        this.billList = new OKnesset.app.views.BillsView.BillList();
        this.items = [this.billList];
        OKnesset.app.views.BillsView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('BillsView', OKnesset.app.views.BillsView);

OKnesset.app.views.BillsView.BillList = new Ext.extend(Ext.List, {
    id: 'MemberBillList',
    itemTpl: '<div>{full_title}</div>',
    store: OKnesset.MemberBillsStore,
    layout: 'fit',
    deferEmptyText: false,
    grouped: true,
    flex: 1.5,
    onItemDisclosure: true
});






