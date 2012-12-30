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
      flex : 3,
      xtype : 'panel',
      html: homepagePanelHTml,
      layout: {
          type: 'hbox',
          align: 'stretch'
      }},
      {
        id : 'electionsBtn',
        flex : 1,
        xtype: 'button',
        margin: "10 10 10 10",
        text : OKnesset.strings.ElcetionTitle
      },
      {
      flex : 3,
      xtype : 'panel',
      layout: {
          type: 'hbox',
          align: 'stretch'
      },
      items: [{
        id: 'homepagePartiesBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepagePartiesBtnHtml
      },
      {
        id: 'homepageAgendaBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepageAgendaBtnHtml
        }
      ]},
      {
      flex : 3,
      xtype : 'panel',
      layout: {
          type: 'hbox',
          align: 'stretch'
      },
      items: [{
        id: 'homepageCommitteesBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepageCommitteesBtnHtml
      },
        {
        id: 'homepageMembersBtn',
        flex : 1,
        margin: "10 10 10 10",
        xtype: 'button',
        cls : 'homepageBtn',
        html : homepageMemberBtnHtml
        },
      ]},
    ]
});

Ext.reg('HomePage', OKnesset.app.views.HomepageView);

