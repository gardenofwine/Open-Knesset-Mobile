
OKnesset.app.views.AgendaDetailsView = new Ext.extend(OKnesset.Panel, {
	id : 'AgendaDetailsView',
	scroll: 'vertical',
	initComponent: function() {
		this.AgendaDescription = new OKnesset.app.views.AgendaDetailsView.AgendaDescription();
		this.MostSupportMember = new OKnesset.app.views.AgendaDetailsView.MostSupportMember();
		this.MostSupportParty = new OKnesset.app.views.AgendaDetailsView.MostSupportParty();
		this.items =
		[
			new Ext.Panel({
				height : "2em",
				padding: '5',
				html: '<div align="right" dir="rtl"><b>'  + OKnesset.strings.AgendaDescription +  '</b></div>'
			}),

			this.AgendaDescription,

			new Ext.Panel({
				height : "2em",
				padding: '5',
				html: '<div align="right" dir="rtl"><b>'  + OKnesset.strings.AgendaMostSupport +  '</b></div>'
			}),

			this.MostSupportMember,
			this.MostSupportParty,


			new Ext.Panel({
				height : "2em",
				padding: '5',
				html: '<div align="right" dir="rtl"><b>'  + OKnesset.strings.AgendaMore +  '</b><br></div>'
			}),

			OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn,
			OKnesset.app.views.AgendaDetailsView.SupportMemberBtn,
			OKnesset.app.views.AgendaDetailsView.SupportPartyBtn
		];
		OKnesset.app.views.AgendaDetailsView.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('AgendaDetailsView', OKnesset.app.views.AgendaDetailsView);

OKnesset.app.views.AgendaDetailsView.AgendaDescription = new Ext.extend(Ext.List, {
	id: 'AgendaDetails',
	layout: ' fit',
	padding: '5',
	scroll: false,
	store :OKnesset.AgendaDetailsStore,
	itemTpl: '<div align="right"><tpl if="image"><img class="agend-image" src="http://www.oknesset.org{image}"/></tpl><br> {description}<br><br></div>'
	//flex: 1,
});

// TODO: these views are not list views... they present only one item
OKnesset.app.views.AgendaDetailsView.MostSupportMember = new Ext.extend(Ext.List, {
	id : 'MostSupportMember',
	layout: ' fit',
	padding: '5',
	scroll: false,
	store : OKnesset.AgendaDetailsStore,
	itemTpl :    '<div align="right"> {MostSupportMember.name} <br> <font size="2">' + OKnesset.strings.mostsupportmember+ '</font></div>',
	onItemDisclosure: true
});

OKnesset.app.views.AgendaDetailsView.MostSupportParty = new Ext.extend(Ext.List, {
	id : 'MostSupportParty',
	layout: ' fit',
	padding: '5',
	scroll: false,
	store : OKnesset.AgendaDetailsStore,
	itemTpl :    '<div align="right">{MostSupportParty.name} <br> <font size="2">' + OKnesset.strings.mostsupportparty+ '</font></div>',
	onItemDisclosure: true
});

OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn = new Ext.Button({margin : '10 5 10 5',text :  OKnesset.strings.AgendaVoteButton});
OKnesset.app.views.AgendaDetailsView.SupportMemberBtn = new Ext.Button({margin : '10 5 10 5',text : OKnesset.strings.SupportMembers});
OKnesset.app.views.AgendaDetailsView.SupportPartyBtn = new Ext.Button({margin : '10 5 10 5',text : OKnesset.strings.SupportParties});