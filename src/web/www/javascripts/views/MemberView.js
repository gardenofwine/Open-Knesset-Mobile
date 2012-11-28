/**
 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
 * member
 */
OKnesset.app.views.MemberView = new Ext.extend(OKnesset.Panel, {
    id: 'MemberView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    currentMemeber: null,
    initComponent: function(){
        this.infoWrapper = new OKnesset.app.views.MemberView.InfoWrapper();
        this.items = [this.infoWrapper];
        OKnesset.app.views.MemberView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('MemberView', OKnesset.app.views.MemberView);

OKnesset.app.views.MemberView.InfoWrapper = new Ext.extend(Ext.Panel, {
    id: 'MemberInfoWrapper',
    flex : 100,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items:[
      {
        flex : 10,
        layout: {
          type: 'hbox',
          align: 'stretch'
        },
        items : [
          {
            xtype : 'panel',
            flex : 1,
            id: 'MemberImage',
            tpl: '<img src={img_url} width="100%"></img>'
          },
          {
            xtype: 'panel',
            flex : 2,
            id: 'MemberInfo',
            tpl: memberPanelHtml,
            margin : '0 10 0 0',
            cls:'memberViewInfo',
          },
        ]
      },
      {
        flex : 1,
        xtype: 'button',
        id : 'memberEmailBtn',
        margin : '5 5 5 5'
      },        
      {
        flex : 1,
        xtype: 'button',
        id : 'memberCallBtn',
        margin : '5 5 5 5'
      },        
      {
        flex : 1,
        xtype: 'button',
        id : 'memberBillsBtn',
        margin : '5 5 5 5'
      },        
      {
        flex : 1,
        xtype: 'button',
        id : 'memberCommitteesBtn',
        margin : '5 5 5 5'
      },        
      {
        flex : 1,
        xtype: 'button',
        id : 'memberVotesBtn',
        text : OKnesset.strings.votes,
        margin : '5 5 5 5'
      },        

    ],
});

