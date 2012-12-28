package org.oknesset;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

public class OKnesset extends DroidGap {
	Map<String, String> indexPageMapping = generateIndexPageMapping();
	Map<String, String> detailsPageMapping = generateDetailsPageMapping();

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);
    	super.setIntegerProperty("splashscreen", R.drawable.splash);
    	super.setStringProperty("loadingDialog", "בודקת מה חברי הכנסת עשו היום");
        super.loadUrl("file:///android_asset/www/index.html" + getSegment(), 10000);
    }

    private String getSegment() {
    	Intent intent = this.getIntent();
    	if ((intent == null) || (intent.getData() == null)) {
    		return "";
    	}
    	Uri uri = intent.getData();
    	List<String> pathSegments = uri.getPathSegments();
    	String pageType = pathSegments.get(0).toLowerCase(Locale.US);
    	if ((pathSegments.size() == 1) && indexPageMapping.containsKey(pageType)) {
    		return "#" + indexPageMapping.get(pageType) + "/Index";
    	} else if ((pathSegments.size() == 2) && detailsPageMapping.containsKey(pageType)) {
    		return "#" + detailsPageMapping.get(pageType) + "/Index/" + pathSegments.get(1);
    	}
    	return "";
    }

    private Map<String, String> generateIndexPageMapping() {
    	Map<String, String> map = new HashMap<String, String>();
    	map.put("agenda", "AgendaList");
    	map.put("committee", "AllCommittees");
    	map.put("bill", "Bills");
    	map.put("member", "MemberList");
    	map.put("about", "Credits");
    	map.put("party", "PartyList");
    	// committee/meeting
    	return map;
    }

    private Map<String, String> generateDetailsPageMapping() {
    	Map<String, String> map = new HashMap<String, String>();
    	map.put("agenda", "AgendaDetails");
    	map.put("committee", "CommitteeDetails");
    	map.put("bill", "BillDetails");
    	map.put("member", "Member");
    	map.put("party", "Party");
    	return map;
    }
}