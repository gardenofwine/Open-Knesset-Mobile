var committeesPanelHtml ='<div class="CommitteesInfo" > \
	<table> \
	<tr class="textColorFix"> \
		<td class="justify"><b> \
		<tpl if="committees.length &gt; 0 && gender == \'זכר\'">חבר ב: </tpl> \
		<tpl if="committees.length &gt; 0 && gender == \'נקבה\'">חברה ב: </tpl> \
		</b> \
		<ul> \
		<tpl for="committees"><li>{0}</li></tpl> \
		</ul></td> \
	</tr> \
</table> \
</div><div style="clear:both"></div> \
';

