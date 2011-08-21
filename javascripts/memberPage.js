var memberPageHtml = '	<div class="memberImage"> \
		<img src={img_url} width="75px" height="110px"></img> \
	</div> \
	<div class="memberInfo"> \
		<table> \
			<tr> \
				<td>{roles}</td> \
				<td>:תפקידים</td> \
			</tr> \
			<tr> \
				<td><tpl for="committees">{0}{[xindex == xcount ? "" : ", "]}</tpl></td> \
				<td>:ועדות</td> \
			</tr> \
		</table> \
	</div> \
';

