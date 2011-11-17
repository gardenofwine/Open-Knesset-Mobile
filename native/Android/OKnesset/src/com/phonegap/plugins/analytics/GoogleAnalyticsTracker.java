/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2006-2011 Worklight, Ltd.  
 */

package com.phonegap.plugins.analytics;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.util.Log;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import com.phonegap.api.PluginResult.Status;

public class GoogleAnalyticsTracker extends Plugin {
	public static final String START = "start";
	public static final String TRACK_PAGE_VIEW = "trackPageView";
    public static final String TRACK_EVENT = "trackEvent";
    public static final String CUSTOM_VARIABLE = "setCustomVariable";
    
	public static final int DISPATCH_INTERVAL = 10;
	private com.google.android.apps.analytics.GoogleAnalyticsTracker tracker;
	
	public GoogleAnalyticsTracker() {
		tracker = com.google.android.apps.analytics.GoogleAnalyticsTracker.getInstance();
	}
	
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		PluginResult result = null;
		if (START.equals(action)) {
			try {
				start(data.getString(0));
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				result = new PluginResult(Status.JSON_EXCEPTION);
			}			
		} else if (TRACK_PAGE_VIEW.equals(action)) {
			try {
				JSONObject options = null;
				if (data.length() > 1 && !data.isNull(1)) {
					Log.d("oknesset", "** options for page view");
					options = data.getJSONObject(1);
				}
				trackPageView(data.getString(0), options);
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				System.out.println("** pageview fail:" + e.getMessage());
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		} else if (TRACK_EVENT.equals(action)) {
			try {
				trackEvent(data.getString(0), data.getString(1), data.getString(2), data.getInt(3));
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		} else if (CUSTOM_VARIABLE.equals(action)) {
			try {
				setCustomVariable(data.getInt(0), data.getString(1), data.getString(2), data.getInt(3));
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		} else {
			result = new PluginResult(Status.INVALID_ACTION);
		}		
		return result;
	}
	
	private void start(String accountId) {
		tracker.startNewSession(accountId, DISPATCH_INTERVAL, this.ctx);
	}
	
	private void trackPageView(String key, JSONObject options) throws JSONException {
		tracker.trackPageView(key);
		if (options != null && options.getBoolean("dispatch")) {
			tracker.dispatch();
		}
	}

	private void trackEvent(String category, String action, String label, int value){
		tracker.trackEvent(category, action, label, value);
	}
	
	private void setCustomVariable(int slot, String name, String value, int scope){
		tracker.setCustomVar(slot, name, value, scope);
	}
}