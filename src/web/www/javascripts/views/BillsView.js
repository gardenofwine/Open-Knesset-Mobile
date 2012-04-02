/**
 * member
 */
OKnesset.app.views.BillsView = new Ext.extend(Ext.Panel, {
    id: 'BillsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
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
    itemTpl: '<div>{title}</div>',
    store: OKnesset.MemberBillsStore,
    layout: 'fit',
    deferEmptyText: false,
    grouped: true,
    flex: 1.5,
    onItemDisclosure: true
});




// The text that appears below the members picture, "bills proposed"
OKnesset.app.views.BillsView.BillsTitle = new Ext.extend(Ext.Panel, {
    id: 'MemberBillsTitle',
    layout: 'fit',
    dock: 'bottom',
    // some sencha touch magic to decide the title
    tpl: '<tpl if="billNumber &gt; 0"><h2 class="MemberBillsTitle x-toolbar-dark">' +
    OKnesset.strings.hasBillsTitle +
    '</h2></tpl>\
				  <tpl if="billNumber == 0"><h2 class="MemberBillsTitle x-toolbar-dark">' +
    OKnesset.strings.hasNoBillsTitle +
    '</h2></tpl>'
});





