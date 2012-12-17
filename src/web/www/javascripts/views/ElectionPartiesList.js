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
        // this.memberList = new OKnesset.app.views.MemberListView.List();
        // this.items = [this.memberList];
        this.items = [];
        OKnesset.app.views.MemberListView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('ElectionView', OKnesset.app.views.ElectionView);

OKnesset.app.views.ElectionView.PartyList = new Ext.extend(Ext.List, {
    id: 'ElectionPrtyListView',
    store: OKnesset.ElectionStore,
    grouped: true,
    flex: 1,
    itemTpl: new Ext.XTemplate('<div>{name}<div class="partySize" style="font-size:80%">{[this.partyName(values.party_id)]}</div></div>', 
    	{
			compiled: true,    		
    		partyName : function(partyId){
    			return OKnesset.app.controllers.Party.getNameById(partyId);
    		}
    	}),
    onItemDisclosure: true
});

