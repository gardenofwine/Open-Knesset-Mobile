/**
 * The Protocol section  - displays the spokeman and the text
 * Protocol
 */

OKnesset.app.views.ProtocolSectionView = new Ext.extend(Ext.Panel, {
    id: 'ProtocolSectionView',
    scroll: 'vertical',
    layout: {
    	type :'vbox'
    },
	initComponent: function()
    {
		this.protocolsectionText=  new OKnesset.app.views.ProtocolSectionView.Text();
		this.spokeman = new OKnesset.app.views.ProtocolSectionView.Spokeman();
	
		this.items = [this.protocolsectionText];
		
		this.dockedItems = 
				[{
					xtype: 'toolbar',
					dock: 'top',
					height: '75px',
					maxHeight:'100px',
					padding: '5' ,
					items: [this.spokeman]
				 },{
					xtype: 'toolbar',
					minHeight:'100px',
					padding: '5' ,
				    dock: 'bottom',
					items: [{
						ui: 'action',
						id: 'pre_spokemanBtn',
						iconMask: true,
						text: OKnesset.strings.previous},
						{
						xtype: 'spacer' 
						},
						{
						ui: 'action',
						id: 'next_spokemanBtn',
						iconMask: true,
						text: OKnesset.strings.next
					}]
				 }];

		 OKnesset.app.views.ProtocolSectionView.superclass.initComponent.apply(this, arguments);
    }
});


Ext.reg('ProtocolSectionView', OKnesset.app.views.ProtocolSectionView);

OKnesset.app.views.ProtocolSectionView.Text = new Ext.extend(Ext.Panel, {
	id : 'Text',
	height : "2em",
	padding: '5',
	tpl:'<div>{protocol.body}</div>', 
	
});

OKnesset.app.views.ProtocolSectionView.Spokeman = new Ext.extend(Ext.Panel, {
    id: 'Spokeman',
    layout: 'fit',
    tpl: '<div><font size="5" color="#FFFAF0"><b style="color:white">{protocol.header}</b></font></div>'
});
