/**
 * The List of all knesset members (אהוד ברק, ציפי לבני...), sorted alphabetically
 */
OKnesset.app.views.MemberListView = new Ext.extend(OKnesset.Panel, {
    id: 'MemberListViewPanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function(){
        this.memberList = new OKnesset.app.views.MemberListView.List();
        this.items = [this.memberList];

        OKnesset.app.views.MemberListView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('MemberListView', OKnesset.app.views.MemberListView);

OKnesset.app.views.MemberListView.List = new Ext.extend(Ext.List, {
    id: 'MemberListView',
    store: OKnesset.MemberStore,
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

