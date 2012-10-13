var memberPanelHtml = '<div class="memberInfo"> \
	<table> \
	<tr> \
	<td class="justify" dir="rtl"> \
<b>{roles}</b><br> \
<tpl if="date_of_birth.length &gt; 0"> תאריך לידה:<br/> {date_of_birth}<br/></tpl> \
<tpl if="place_of_residence.length &gt; 0"> יישוב: {place_of_residence}<br/></tpl> \
<tpl if="family_status.length &gt; 0">מצב משפחתי: {family_status} <tpl if="number_of_children.length &gt; 0">+{number_of_children}</tpl><br/></tpl> \
</td><td><img src={img_url} id="MemberImage" height="100%"></img></td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<b>נוכחות</b> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="average_weekly_presence_hours &gt; -1"> במשכן: {average_weekly_presence_hours} שעות שבועיות בממוצע<br/></tpl> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="average_monthly_committee_presence &gt; -1"> בוועדות: {average_monthly_committee_presence} ישיבות וועדות בחודש<br/></tpl> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<b>הצעות חוק</b> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="bills_stats_proposed &gt; -1"> הוצעו: {bills_stats_proposed}<br/></tpl> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="bills_stats_pre &gt; -1"> עברו קריאה טרומית: {bills_stats_pre}<br/></tpl> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="bills_stats_first &gt; -1"> עברו קריאה ראשונה: {bills_stats_first}<br/></tpl> \
		</td> \
	</tr> \
	<tr> \
		<td class="justify" dir="rtl"> \
			<tpl if="bills_stats_approved &gt; -1"> אושרו סופית: {bills_stats_approved}<br/></tpl> \
		</td> \
	</tr> \
</table> \
</div><div style="clear:both"></div> \
';

