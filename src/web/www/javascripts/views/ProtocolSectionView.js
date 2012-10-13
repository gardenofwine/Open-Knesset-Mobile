/**
 * The Protocol section  - displays the spokeman and the text
 * Protocol
 */

OKnesset.app.views.ProtocolSectionView = new Ext.extend(Ext.Panel, {
    id: 'ProtocolSectionView',
    scroll: 'vertical',
	initComponent: function()
    {
		
		this.image = new OKnesset.app.views.ProtocolSectionView.SpokemanImage();
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
					items: [this.image,{xtype: 'spacer'},this.spokeman]
				 },{
					xtype: 'toolbar',
					height: '75px',
					maxHeight:'100px',
					padding: '5' ,
				    dock: 'bottom',
					items: [{ui: 'action',id: 'next_spokemanBtn',iconMask: true,text: 'next_spokeman',}, {xtype: 'spacer' },{ui: 'action',id: 'pre_spokemanBtn',iconMask: true,text: 'pre_spokeman',}]
				 }];

		 OKnesset.app.views.ProtocolSectionView.superclass.initComponent.apply(this, arguments);
    }
});


Ext.reg('ProtocolSectionView', OKnesset.app.views.ProtocolSectionView);

OKnesset.app.views.ProtocolSectionView.Text = new Ext.extend(Ext.Panel, {
	id : 'Text',
	height : "2em",
	padding: '5',
	tpl:'<div dir="rtl">{protocol_text}</div>', 
	
});

OKnesset.app.views.ProtocolSectionView.SpokemanImage = new Ext.extend(Ext.Panel, {
    id: 'SpokemanImage',
    html: '<img src="http://www.inspiredhealthcoaching.com/wp-content/uploads/2012/08/red_x.jpg" height="100%"></img>'
});

OKnesset.app.views.ProtocolSectionView.Spokeman = new Ext.extend(Ext.Panel, {
    id: 'Spokeman',
    layout: 'fit',
    tpl: '<div dir="rtl" s><font size="5" color="#FFFAF0"><b>{protocol_text}</b></font></div>'
});

