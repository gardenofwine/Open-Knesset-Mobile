/**
 * A sort of "news feed" (term borrowed from facebook) for the Knesset, taken from these URLs:
 * http://www.knesset.gov.il/rssservice/daily_plenum_agenda.aspx
 * http://www.knesset.gov.il/rssservice/daily_agenda.aspx
 * etc... (all of the above are linked from here: http://main.knesset.gov.il/Activity/Info/Pages/Databases.aspx)
 */

Ext.define('OKnesset.app.views.NewsFeedView', {
	extend: 'Ext.List',

	config: {
		id: 'NewsFeedView',
		store: OKnesset.NewsFeedStore,
		grouped: true,
		itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
		onItemDisclosure: true
	},
});
