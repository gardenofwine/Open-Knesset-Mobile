/**
 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
 * member
 */
Ext.define('OKnesset.app.views.MemberView', {
    extend: 'Ext.Panel',

    config: {
        id: 'MemberView',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        // items: [{
        //     xtype : "panel"
        // }],
        currentMemeber: null,
    },
    
    initialize: function() {
        this.callParent(arguments);
        this.infoWrapper = new OKnesset.app.views.MemberView.InfoWrapper();
        //this.billList = new OKnesset.app.views.MemberView.BillList();
        this.items = [this.infoWrapper];
    }
});
Ext.reg('MemberView', OKnesset.app.views.MemberView);

OKnesset.app.views.MemberView.memberEmailBtn = new Ext.Button({margin : '10 5 10 5'});
OKnesset.app.views.MemberView.memberCallBtn = new Ext.Button({margin : '10 5 10 5'});
OKnesset.app.views.MemberView.memberBillsBtn = new Ext.Button({margin : '10 5 10 5',text :  OKnesset.strings.bills});
OKnesset.app.views.MemberView.memberCommitteesBtn = new Ext.Button({margin : '10 5 10 5',text : OKnesset.strings.committees});

Ext.define('OKnesset.app.views.MemberView.InfoWrapper', {
    extend: 'Ext.Panel',

    config: {
        id: 'MemberInfoWrapper',
        flex: 1,
    },

    initialize: function() {
        this.callParent(arguments);
        this.info = new OKnesset.app.views.MemberView.Info();
        this.image = new OKnesset.app.views.MemberView.Image();
        this.items = [this.info, OKnesset.app.views.MemberView.memberEmailBtn, OKnesset.app.views.MemberView.memberCallBtn, OKnesset.app.views.MemberView.memberBillsBtn, OKnesset.app.views.MemberView.memberCommitteesBtn];
        this.dockedItems = [{
            xtype: 'panel',
            dock: 'right',
            items: [this.image]
        }];
    },
});

Ext.define('OKnesset.app.views.MemberView.Info', {
    extend: 'Ext.Panel',

    config: {
        id: 'MemberInfo',
        tpl: memberPanelHtml
    },
});

Ext.define('OKnesset.app.views.MemberView.Image', {
    extend: 'Ext.Panel',

    config: {
        id: 'MemberImage',
        layout: 'fit',
        tpl: '<img src={img_url} height="100%"></img>'
    },
});
