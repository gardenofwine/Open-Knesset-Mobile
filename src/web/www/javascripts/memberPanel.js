var memberPanelHtml =
	'<div class="memberInfo" "> \
		<table> \
			<tr> \
				<td class="justify"><b>{roles}</b></td> \
			</tr> \
			<tr class="textColorFix"> \
				<td class="justify"><b> \
				<tpl if="committees.length &gt; 0 && gender == \'זכר\'">חבר ב: </tpl> \
				<tpl if="committees.length &gt; 0 && gender == \'נקבה\'">חברה ב: </tpl> \
				</b> \
				<tpl for="committees">{0}{[xindex == xcount ? "" : ", "]}</tpl></td> \
			</tr> \
		</table> \
	</div> \
';

