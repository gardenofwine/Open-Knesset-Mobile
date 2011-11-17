
function GoogleAnalyticsPlugin()
{
//
}

GoogleAnalyticsPlugin.prototype.startTrackerWithAccountID = function(id)
{
	PhoneGap.exec("GoogleAnalyticsPlugin.startTrackerWithAccountID",id);
};

GoogleAnalyticsPlugin.prototype.trackPageviewWithCustomVariable = function(pageUri, index, name, value, scope)
{
	if (typeof scope == 'undefined'){
		var scope = 3;
	}
	PhoneGap.exec("GoogleAnalyticsPlugin.trackPageviewWithCustomVariable",pageUri, index, name, value, scope);
};


GoogleAnalyticsPlugin.prototype.trackPageview = function(pageUri)
{
	PhoneGap.exec("GoogleAnalyticsPlugin.trackPageview",pageUri);
};


GoogleAnalyticsPlugin.prototype.trackEvent = function(callback, category,action,label,value)
{
	var options = {category:category,
		action:action,
		label:label,
		value:value};
	PhoneGap.exec(callback, null, "GoogleAnalyticsPlugin", "trackEvent",[options]);
//	PhoneGap.exec("GoogleAnalyticsPlugin.trackEvent",options);
};

GoogleAnalyticsPlugin.prototype.trackerDispatchDidComplete = function(count)
{
	//console.log("trackerDispatchDidComplete :: " + count);
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

