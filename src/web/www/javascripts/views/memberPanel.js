var memberPanelHtml =
'<div class="memberInfo" "> \
	<tpl if="current_role_descriptions != null"><b>{current_role_descriptions}</b><br></tpl> \
	<tpl if="current_role_descriptions == null"><b>' + OKnesset.strings.memberRole + '</b><br></tpl> \
	<tpl if="party_name.length &gt; 0"> מפלגה:<a href="javascript:OKnesset.app.controllers.Party.navigateToParty({party_id})"><b> {party_name}</b></a><br/></tpl> \
	<tpl if="date_of_birth.length &gt; 0"> תאריך לידה: {date_of_birth}<br/></tpl> \
	<tpl if="place_of_residence.length &gt; 0"> יישוב: {place_of_residence}<br/></tpl> \
	<tpl if="average_weekly_presence_hours &gt; -1">ממוצע שעות שבועי במשכן: {average_weekly_presence_hours} <tpl if="number_of_children.length &gt; 0">+{number_of_children}</tpl><br/></tpl> \
</div><div style="clear:both"></div> \
';

