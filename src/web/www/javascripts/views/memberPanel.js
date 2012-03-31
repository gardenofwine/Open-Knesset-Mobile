var memberPanelHtml ='<div class="memberInfo" "> \
	<table> \
	<tr> \
	<td class="justify" dir="rtl"> \
<b>{roles}</b><br> \
<tpl if="date_of_birth.length &gt; 0"> תאריך לידה:<br/> {date_of_birth}<br/></tpl> \
<tpl if="place_of_residence.length &gt; 0"> יישוב: {place_of_residence}<br/></tpl> \
<tpl if="family_status.length &gt; 0">מצב משפחתי : {family_status} <tpl if="number_of_children.length &gt; 0">+{number_of_children}</tpl><br/></tpl> \
</td><td><img src={img_url} id="MemberImage" height="100%"></img></td> \
	</tr> \
	<!--tr class="textColorFix"> \
		<td class="justify"><b>hh \
		<tpl if="committees.length &gt; 0 && gender == \'×–×›×¨\'">×—×‘×¨ ×‘: </tpl> \
		<tpl if="committees.length &gt; 0 && gender == \'× ×§×‘×”\'">×—×‘×¨×” ×‘: </tpl> \
		</b> \
		<tpl for="committees">{0}{[xindex == xcount ? "" : ", "]}</tpl></td> \
	</tr--> \
</table> \
</div><div style="clear:both"></div> \
';

