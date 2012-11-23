/**
 * The List of all knesset members (אהוד ברק, ציפי לבני...), sorted alphabetically
 */
OKnesset.app.views.MemberListView = new Ext.extend(Ext.List, {
    id: 'MemberListView',
    store: OKnesset.MemberStore,
    grouped: true,
    itemTpl: new Ext.XTemplate('<div>{name}<div class="partySize" style="font-size:80%">{[this.partyName(values.party_id)]}</div></div>', 
    	{
			compiled: true,    		
    		partyName : function(partyId){
    			return OKnesset.app.controllers.Party.getNameById(partyId);
    		}
    	}),
    onItemDisclosure: true
});

Ext.reg('MemberListView', OKnesset.app.views.MemberListView);
