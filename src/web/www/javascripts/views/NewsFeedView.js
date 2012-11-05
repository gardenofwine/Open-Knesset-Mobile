/**
 * A sort of "news feed" (term borrowed from facebook) for the Knesset, taken from these URLs:
 * http://www.knesset.gov.il/rssservice/daily_plenum_agenda.aspx
 * http://www.knesset.gov.il/rssservice/daily_agenda.aspx
 * etc... (all of the above are linked from here: http://main.knesset.gov.il/Activity/Info/Pages/Databases.aspx)
 */
OKnesset.app.views.NewsFeedView = new Ext.extend(Ext.List, {
    id: 'NewsFeedView',
    store: OKnesset.NewsFeedStore,
    grouped: true,
    itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
    onItemDisclosure: true
});

Ext.reg('PartyListView', OKnesset.app.views.PartyListView);
