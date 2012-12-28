OKnesset = ((typeof OKnesset !== 'undefined')?OKnesset :{});
OKnesset.debug = true;

function testAPIParser(){

	var apiCalls = Object.keys(OKnessetAPIMapping);
	for (var i = 0; i < apiCalls.length ; i++) {
		try {
			var baseAPIDataObjectParameter = {
				apiKey : apiCalls[i],
				success: function(){},
				failure: function(){}
			}
			var apiDataObjectParameters = [];
			console.log(apiCalls[i]);
			if (typeof OKnessetAPIMapping[apiCalls[i]].sampleUrl !== 'undefined'){
				for (var j = 0; j < OKnessetAPIMapping[apiCalls[i]].sampleUrl.length; j++) {
					apiDataObjectParameters.push(
						Ext.apply(
							{
								urlOptions:OKnessetAPIMapping[apiCalls[i]].sampleUrl[j]
							}, 
							baseAPIDataObjectParameter));
				};
			} else if (typeof OKnessetAPIMapping[apiCalls[i]].sampleParameters !== 'undefined'){
				// assumig an api call does not require both a urlParams and a get param
				for (var j = 0; j < OKnessetAPIMapping[apiCalls[i]].sampleParameters.length; j++) {
					apiDataObjectParameters.push(
						Ext.apply(
							{
								parameterOptions:OKnessetAPIMapping[apiCalls[i]].sampleParameters[j]
							}, 
							baseAPIDataObjectParameter));
				};
			} else {
				apiDataObjectParameters.push(baseAPIDataObjectParameter);
			}


			// make the api call
			for (var j = 0; j < apiDataObjectParameters.length; j++) {
				getAPIData(apiDataObjectParameters[j]);
			};
			 
		} catch (e) {
			console.log("exception")
		}
	};
}
