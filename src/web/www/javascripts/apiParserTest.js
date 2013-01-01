OKnesset = ((typeof OKnesset !== 'undefined')?OKnesset :{});
OKnesset.debug = true;

function testAPIParser(){
	var apiCalls = Object.keys(OKnessetAPIMapping);
	var apiCallCounter = 0;
	var apiDataObjectParameters = [];

	for (var i = 0; i < apiCalls.length ; i++) {
		var theApiCall = apiCalls[i] 
		var baseAPIDataObjectParameter = (function(apiCall){
			return {
				apiKey : theApiCall,
				forceLoad : true,
				success: function(data){
					console.log("" + apiCall + " success. " + apiCallCounter + " more to go");
					apiCallCounter --;
				},
				failure: function(){
					console.error("" + apiCall + " failure. " + apiCallCounter + " more to go");
					apiCallCounter --;
				}
			};
		})(theApiCall);

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
	}

	try {

		apiCallCounter = apiDataObjectParameters.length;
		// make the api call
		for (var j = 0; j < apiDataObjectParameters.length; j++) {
			getAPIData(apiDataObjectParameters[j]);
		};
			 
	} catch (e) {
		console.error(e);
	}
}
