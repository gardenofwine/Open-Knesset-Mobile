var memberPanelHtml =
//'	<div class="memberImage"> \
//		<img src={img_url} width="75px" height="110px"></img> \
//	</div> \
	'<div class="memberInfo" "> \
		<table> \
			<tr> \
				<td class="justify"><b>{roles}</b></td> \
			</tr> \
			<tr> \
				<td class="justify"> \
				<tpl if="committees.length &gt; 0 && gender == \'זכר\'"><b>חבר ב: </b></tpl> \
				<tpl if="committees.length &gt; 0 && gender == \'נקבה\'"><b>חברה ב: </b></tpl> \
				<tpl for="committees">{0}{[xindex == xcount ? "" : ", "]}</tpl></td> \
			</tr> \
		</table> \
	</div> \
';

