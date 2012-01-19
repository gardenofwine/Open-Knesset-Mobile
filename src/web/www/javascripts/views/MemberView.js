/**
 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
 * member
 */
OKnesset.app.views.MemberView = new Ext.extend(Ext.Panel, {
    //	OKnesset.memberPanelWrapper = new OKnesset.Panel({
    id: 'MemberView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        afterlayout: {
            // For some reason, This is the only way I could layout the
            // member panel
            // as I wanted. Using flex and hbox+vbox layouts did not yeild
            // the desired results
            fn: function(comp){
                // TODO calculate only once!
                var realImageHeight = this.infoWrapper.getHeight() -
                this.infoWrapper.billsTitle.getHeight();
                var realImageWidth = 75 / 110 * realImageHeight;

                // apply maximum width. The Member image is designed to be
                // 3/7
                // of the width of the screen (the width of the memberPanel)
                if (realImageWidth >
                this.infoWrapper.getWidth() *
                (3 / 7)) {
                    realImageWidth = this.infoWrapper.getWidth() *
                    (3 / 7);
                    realImageHeight = realImageWidth * 110 / 75;
                }
                // Set the member image height to the actual panel height
                // (rescaling if necessary)
                this.infoWrapper.info.setWidth(this.infoWrapper.getWidth() -
                realImageWidth);
                this.infoWrapper.image.setHeight(realImageHeight);
                this.infoWrapper.image.setWidth(realImageWidth);
                this.infoWrapper.doLayout();
            }
        }
    },
    // TODO move to controller
    refresh: function(){
        // get current member data from Party store, which is updated
        var party = getPartyFromPartyStoreByName(OKnesset.memberPanelWrapper.currentMemeber.party);
        Ext.iterate(party.data.members, function(value, index){
            if (value.id === OKnesset.memberPanelWrapper.currentMemeber.id) {
                updateMemberData(value);
                return false;
            }
        });

        OKnesset.memberBillList.refresh();
    },
    currentMemeber: null,
    initComponent: function(){
        this.infoWrapper = new OKnesset.app.views.MemberView.InfoWrapper();
        this.billList = new OKnesset.app.views.MemberView.BillList();

        //	    items: [OKnesset.memberPanel, OKnesset.memberBillList],

        this.items = [this.infoWrapper, this.billList];
        OKnesset.app.views.MemberView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('MemberView', OKnesset.app.views.MemberView);

OKnesset.app.views.MemberView.InfoWrapper = new Ext.extend(Ext.Panel, {
    //OKnesset.memberPanel = new Ext.Panel({
    id: 'MemberInfoWrapper',
    flex: 1,
    initComponent: function(){
        this.info = new OKnesset.app.views.MemberView.Info();
        this.billsTitle = new OKnesset.app.views.MemberView.BillsTitle();
        this.image = new OKnesset.app.views.MemberView.Image();
        //	    items: [OKnesset.memberPanel, OKnesset.memberBillList],

        this.items = [this.info];
        this.dockedItems = [{
            xtype: 'panel',
            dock: 'bottom',
            items: [this.billsTitle]
        }, {
            xtype: 'panel',
            dock: 'right',
            items: [this.image]
        }];
        OKnesset.app.views.MemberView.InfoWrapper.superclass.initComponent.apply(this, arguments);
    }

});

OKnesset.app.views.MemberView.BillList = new Ext.extend(Ext.List, {
    //OKnesset.memberBillList = new Ext.List({
    id: 'MemberBillList',
    itemTpl: '<div>{title}</div>',
    store: OKnesset.MemberBillsStore,
    layout: 'fit',
    deferEmptyText: false,
    grouped: true,
    flex: 1.5,
    onItemDisclosure: true
});

OKnesset.app.views.MemberView.Info = new Ext.extend(Ext.Panel, {
    //OKnesset.memberInfoPanel = new Ext.Panel({
    id: 'MemberInfo',
    tpl: memberPanelHtml
});

// The text that appears below the members picture, "bills proposed"
OKnesset.app.views.MemberView.BillsTitle = new Ext.extend(Ext.Panel, {
    //OKnesset.app.memberBillsTitle = new Ext.Panel({
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


OKnesset.app.views.MemberView.Image = new Ext.extend(Ext.Panel, {
    //OKnesset.memberImagePanel = new Ext.Panel({
    id: 'MemberImage',
    layout: 'fit',
    tpl: '<img src={img_url} height="100%"></img>'
});



