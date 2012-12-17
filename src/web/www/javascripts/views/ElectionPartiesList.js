/**
 * The List of all knesset members (אהוד ברק, ציפי לבני...), sorted alphabetically
 */
OKnesset.app.views.ElectionView = new Ext.extend(OKnesset.Panel, {
    id: 'ElectionViewPanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function(){
        this.partyList = new OKnesset.app.views.ElectionView.PartyList();
        // this.items = [this.memberList];
        this.items = [this.partyList];
        OKnesset.app.views.ElectionView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('ElectionView', OKnesset.app.views.ElectionView);

OKnesset.app.views.ElectionView.PartyList = new Ext.extend(Ext.List, {
    id: 'ElectionPrtyListView',
    store: OKnesset.ElectionPartyStore,
    // grouped: true,
    flex: 1,
    itemTpl: '<div>{name}</div>',
    onItemDisclosure: true
});

