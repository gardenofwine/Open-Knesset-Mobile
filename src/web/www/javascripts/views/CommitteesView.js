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
    currentMemeber: null,
    initComponent: function(){
    	this.info = new OKnesset.app.views.CommitteesView.Info();
        this.items = [this.info];
        OKnesset.app.views.CommitteesView.Info.superclass.initComponent.apply(this, arguments);
    }
});



Ext.reg('CommitteesView', OKnesset.app.views.CommitteesView); 

OKnesset.app.views.CommitteesView.Info = new Ext.extend(Ext.Panel, {
    id: 'CommitteesInfo',
    tpl: committeesPanelHtml
});





