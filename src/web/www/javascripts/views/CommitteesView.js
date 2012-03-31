/**
 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
 * member
 */
OKnesset.app.views.CommitteesView = new Ext.extend(Ext.Panel, {
    //	OKnesset.memberPanelWrapper = new OKnesset.Panel({
    id: 'CommitteesView',
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
                //this.infoWrapper.committeesTitle.getHeight();
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
        this.committeeList = new OKnesset.app.views.CommitteesView.CommitteeList();
        this.items = [this.committeeList];
        OKnesset.app.views.CommitteesView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('CommitteesView', OKnesset.app.views.CommitteesView); 

OKnesset.app.views.CommitteesView.CommitteeList = new Ext.extend(Ext.List, {
    id: 'MemberCommitteeList',
    itemTpl: '<div>{title}</div>',
    store: OKnesset.MemberCommitteesStore,
    layout: 'fit',
    deferEmptyText: false,
    flex: 1.5
});









