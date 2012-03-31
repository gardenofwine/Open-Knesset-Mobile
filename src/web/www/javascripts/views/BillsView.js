/**
 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
 * member
 */
OKnesset.app.views.BillsView = new Ext.extend(Ext.Panel, {
    //	OKnesset.memberPanelWrapper = new OKnesset.Panel({
    id: 'BillsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
      //  afterlayout: {
            // For some reason, This is the only way I could layout the
            // member panel
            // as I wanted. Using flex and hbox+vbox layouts did not yeild
            // the desired results
         //   fn: function(comp){
                // TODO calculate only once!
               // var realImageHeight = this.infoWrapper.getHeight() -
                //this.infoWrapper.billsTitle.getHeight();
                //var realImageWidth = 75 / 110 * realImageHeight;

                // apply maximum width. The Member image is designed to be
                // 3/7
                // of the width of the screen (the width of the memberPanel)
                //if (realImageWidth >
                //this.infoWrapper.getWidth() *
                //(3 / 7)) {
               //     realImageWidth = this.infoWrapper.getWidth() *
                //    (3 / 7);
                //    realImageHeight = realImageWidth * 110 / 75;
           //     }
                // Set the member image height to the actual panel height
                // (rescaling if necessary)
             //   this.infoWrapper.info.setWidth(this.infoWrapper.getWidth() -
             //   realImageWidth);
             //   this.infoWrapper.image.setHeight(realImageHeight);
             //   this.infoWrapper.image.setWidth(realImageWidth);
             //   this.infoWrapper.doLayout();
            //}
    //    }
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





