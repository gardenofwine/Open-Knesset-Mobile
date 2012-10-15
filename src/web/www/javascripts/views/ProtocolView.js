/**
 * The Protocol panel  - displays info on a specific
 * Protocol
 */

OKnesset.app.views.ProtocolView = new Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	initComponent: function()
    {
		this.protocolTitle = new OKnesset.app.views.ProtocolView.Title();
		this.protocolMembers = new OKnesset.app.views.ProtocolView.Members();
		this.protocolText = new OKnesset.app.views.ProtocolView.Text();
		this.items = [

		              new Ext.Panel({
		          		height : "2em",
		          		padding: '5',
		            	html: '<div align="right"><b>' + OKnesset.strings.protocolMeetingTitle+'  </b></div>'

		              }),
		              this.protocolTitle,

		              new Ext.Panel({
		            	  height : "2em",
		            	  padding: '5',
		            	  html:'<div align="right"><b>' + OKnesset.strings.protocolMeetingAttendants + '</b></div>'
		              }),

		              this.protocolMembers,

		              new Ext.Panel({
		            	  height : "2em",
		            	  padding: '5',
		            	  html:'<div align="right"><b> '+OKnesset.strings.protocolMeetingContent+'</b></div>'
		              }),

		              this.protocolText,

		      ];
		 OKnesset.app.views.ProtocolView.superclass.initComponent.apply(this, arguments);
    }
});


Ext.reg('ProtocolView', OKnesset.app.views.ProtocolView);

OKnesset.app.views.ProtocolView.Title = new Ext.extend(Ext.List, {
	id : 'ProtocolTitle',
	layout: ' fit',
	padding: '5',
    scroll: false,
    itemTpl :'<div class="ProtocolTopics">{topics}</div>',
	store : OKnesset.Protocol2Store,

});

OKnesset.app.views.ProtocolView.Members = new Ext.extend(Ext.List, {
	id : 'ProtocolMembers',
	layout: ' fit',
	padding: '5',
	scroll: false,
    maxHeight: '50px',
    itemTpl : '<div>{name}</div>',
	store : OKnesset.ProtocolMembersStore,
	onItemDisclosure : true
});
OKnesset.app.views.ProtocolView.Text = new Ext.extend(Ext.List, {
	id : 'ProtocolText',
	layout: ' fit',
	padding: '5',
    scroll: false,
    itemTpl: '<div>{protocol_text}</div>',
  	store : OKnesset.ProtocolTopicsStore,
	onItemDisclosure : false,

});


