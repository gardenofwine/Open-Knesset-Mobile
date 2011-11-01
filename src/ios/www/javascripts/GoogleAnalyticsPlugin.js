
function GoogleAnalyticsPlugin()
{
//
}

GoogleAnalyticsPlugin.prototype.startTrackerWithAccountID = function(id)
{
	PhoneGap.exec("GoogleAnalyticsPlugin.startTrackerWithAccountID",id);
};

GoogleAnalyticsPlugin.prototype.setCustomVariable = function(index, name, value, scope)
{
	if (typeof scope == 'undefined'){
		var scope = 3;
	}
	PhoneGap.exec("GoogleAnalyticsPlugin.setCustomVariable", index, name, value, scope);
};


GoogleAnalyticsPlugin.prototype.trackPageview = function(pageUri, callback, options)
{
//	console.log("** trackPageview callback("+(typeof callback)+") is " + callback);
	if (typeof callback !== 'function'){
		callback = null;
	}
	PhoneGap.exec(callback, callback, "GoogleAnalyticsPlugin", "trackPageview", [pageUri, options]);
};


GoogleAnalyticsPlugin.prototype.trackEvent = function(callback, category,action,label,value, dispatchNow){
	var options = {category:category,
		action:action,
		label:label,
		value:value,
		dispatchNow : dispatchNow};
	PhoneGap.exec(callback, null, "GoogleAnalyticsPlugin" ,"trackEvent",[options]);
};

GoogleAnalyticsPlugin.prototype.trackerDispatchDidComplete = function(count)
{
//	console.log("** trackerDispatchDidComplete :: " + count);
};

/**
 * Install function
 */
GoogleAnalyticsPlugin.install = function()
{
	if ( !window.plugins )
	{
		window.plugins = {};
	}
	if ( !window.plugins.googleAnalyticsPlugin )
	{
		window.plugins.googleAnalyticsPlugin = new GoogleAnalyticsPlugin();
	}
}

/**
 * Add to PhoneGap constructor
 */
PhoneGap.addConstructor(GoogleAnalyticsPlugin.install);

