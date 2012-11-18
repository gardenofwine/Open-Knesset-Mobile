/**
 * The Homepage
 */

OKnesset.app.views.HomepageView = new Ext.extend(Ext.Panel, {
    id: 'HomePage',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
      flex : 1,
      xtype : 'panel',
      html: homepagePanelHTml,
      layout: {
          type: 'hbox',
          align: 'stretch'
      }},
      {
      flex : 1,
      xtype : 'panel',
      layout: {
          type: 'hbox',
          align: 'stretch'
      },
      items: [{
        id: 'homepageAgendaBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepageAgendaBtnHtml},
        {
        id: 'homepagePartiesBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepagePartiesBtnHtml
        }
      ]},
      {
      flex : 1,
      xtype : 'panel',
      layout: {
          type: 'hbox',
          align: 'stretch'
      },
      items: [{
        id: 'homepageAboutBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        text : OKnesset.strings.about},
        {
        id: 'homepageCommitteesBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepageCommitteesBtnHtml
        },
      ]},
    ],
    // initComponent: function(){
    //   OKnesset.app.views.MemberView.superclass.initComponent.apply(this, arguments);
    // }
});

Ext.reg('HomePage', OKnesset.app.views.HomepageView);

