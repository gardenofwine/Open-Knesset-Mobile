Ext.define('OKnesset.app.views.BillsView', {
    extend: 'Ext.Panel',

    config: {
        id: 'BillsView',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        listeners: {
        },
        currentMemeber: null,
    },

    initialize: function() {
        this.callParent(arguments);
        this.billList = new OKnesset.app.views.BillsView.BillList();
        this.items = [this.billList];
    },
});

Ext.define('OKnesset.app.views.BillsView.BillList', {
    extend: 'Ext.List',

    config: {
        id: 'MemberBillList',
        itemTpl: '<div>{title}</div>',
        store: OKnesset.MemberBillsStore,
        layout: 'fit',
        deferEmptyText: false,
        grouped: true,
        flex: 1.5,
        onItemDisclosure: true
    },
});

// The text that appears below the members picture, "bills proposed"
Ext.define('OKnesset.app.views.BillsView.BillsTitle', {
    extend: 'Ext.Panel',

    config: {
            id: 'MemberBillsTitle',
            layout: 'fit',
            docked: 'bottom',
            // some sencha touch magic to decide the title
            tpl: '<tpl if="billNumber &gt; 0"><h2 class="MemberBillsTitle x-toolbar-dark">' +
            OKnesset.strings.hasBillsTitle +
            '</h2></tpl>\
                          <tpl if="billNumber == 0"><h2 class="MemberBillsTitle x-toolbar-dark">' +
            OKnesset.strings.hasNoBillsTitle +
            '</h2></tpl>'
    },
});
