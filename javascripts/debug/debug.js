if (typeof OKnesset === 'undefined') {
	var OKnesset = {};
}
OKnesset.debug = true;

var scriptLoadStartTime = new Date();
time.setReportMethod(function reportTime(reports){
	for (var i = 0 ; i < reports.length ; i++){
		console.log(reports[i].name + " : " + reports[i].delta / 1000);
	}
});
