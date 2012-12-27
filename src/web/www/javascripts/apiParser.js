window.OKnessetParser = {
	helpers : {},
	parsers : {}
};

/*******************************************************************************
 * members parser
 */

window.OKnessetParser.helpers.createMinimalMemberItem = function (member){
	var reducedMember = {};
	reducedMember.id = member.id;
	reducedMember.img_url = "images/members/" + member.img_url.substring(member.img_url.lastIndexOf('/') + 1);
	reducedMember.name = member.name;
	reducedMember.average_weekly_presence_hours = member.average_weekly_presence_hours;
	reducedMember.email = member.email;
	reducedMember.phone = member.phone;
	// if (member.start_date){}
	// 	var now = new Date(); 
	// 	var start_date_arr = member.start_date.split("-");
	// 	var startDate = new Date(
	// 		start_date_arr[0],
	// 		start_date_arr[1],
	// 		start_date_arr[2]);
	// 	reducedMember.monthesInOffice = (now - startDate) / 1000 / 60 / 60 / 24 / 30;	
	// }

	reducedMember.party_id = partyIdFromMember(member);

	if (typeof OKnessetParser.helpers.sortedMembers[reducedMember.party_id] != "undefined") {
		if (OKnessetParser.helpers.sortedMembers[reducedMember.party_id].indexOf(reducedMember.name) == -1){
			// the member was not found.
			console.log("Member " + member.name + " of party " + member.party_id + "was not found in sorted members array");
		} else {
			reducedMember.party_ordinal = OKnessetParser.helpers.sortedMembers[reducedMember.party_id].indexOf(reducedMember.name) + 1;
		}
	}

	return reducedMember;
	
	function partyIdFromMember(member){
		return member.party_url.substring(7,member.party_url.indexOf("/", 7));
	}
}

window.OKnessetParser.helpers.createExpandedMember = function (member){
	var reducedMember = window.OKnessetParser.helpers.createMinimalMemberItem(member);
	reducedMember.gender = member.gender;
	reducedMember.party_name = member.party_name;
	reducedMember.date_of_birth = member.date_of_birth;
	reducedMember.place_of_residence = member.place_of_residence;
	reducedMember.current_role_descriptions = member.current_role_descriptions;

	return reducedMember;
}

window.OKnessetParser.parsers.members = function(result, success, failure){
	var memberArray = [];

	// For each member
	for (var i = result.objects.length - 1; i >= 0; i--) {
		var member = result.objects[i];

		if (!member.is_current) {
			continue;
		}

		// add current memeber to member list
		var minMember = window.OKnessetParser.helpers.createMinimalMemberItem(member);
		// fetch member bills from web?

		memberArray.push(minMember);
	}

	success(memberArray);
};

window.OKnessetParser.helpers.AVODA = ["אהוד ברק","יצחק הרצוג","אופיר פינס-פז","אבישי ברוורמן","שלי יחימוביץ","מתן וילנאי","איתן כבל","בנימין (פואד) בן-אליעזר","יולי תמיר","עמיר פרץ","דניאל בן-סימון","שלום שמחון","אורית נוקד","עינת וילף","ראלב מג`אדלה","שכיב שנאן","יורם מרציאנו","לאון ליטינצקי","קולט אביטל","משה סמיה","יוסף סולימני","אריק חדד","אבי חזקיהו","מנחם ליבוביץ","עפר קורנפלד","יואב חי","עזי נגר","בנימין לוין","אבי שקד","נאדיה חילו","שמעון שיטרית","יריב אופנהיימר","רות דיין מדר","אסתר ביתן","דנה אורן","אמנון זילברמן","ואפד קבלאן","יעקב רומי","מיקי מיכאל גולד","מאיר וייס","ולדימיר סברדלוב","מעין אמודאי","פייצל אלהזייל","ניקולא מסעד","זאב-ולוולה שור","אהרון קראוס","אמנון זך","מוטי ששון","חנה מרשק","הדסה חנה רוסו","אלי אורן","דב צור","סימון אלפסי","יוסף ונונו","שייע יצחק ישועה","שלומי וייזר","מישל שלום חלימי","יוסי ארבל","לאה יונה גבע","ארז שלמה אבו","יובל אדמון","דקל דוד עוזר","יהונתן מאייר עוזר","אהרון רוני כהן","משה פרנקל","אדית אבוד","יהודית הרן","אליהו סדן","רבקה בית הלחמי","אבינועם טובים","אברהם הצמרי","רמי אזרן","שמעון קמרי","שרה גנסטיל","מוטי דותן","יהודית אוליאל","נורית לוי","יהודה שביט","דניאל עטר"];

window.OKnessetParser.helpers.sortedMembers = {
	"9" : ["ג`מאל זחאלקה","סעיד נפאע","חנין זועבי","עבאס זכור"],
	"7" : ["אליהו ישי","אריאל אטיאס","יצחק כהן","אמנון כהן","משולם נהרי","יעקב מרגי","דוד אזולאי","יצחק וקנין","נסים זאב","חיים אמסלם","אברהם מיכאלי","מזור בהיינה","רפאל כהן","עמי ביטון","אורן מלכה","רפאל מלאכי","חיים אלי רואש","גרשון לוי","דוד גבאי","פינחס צברי","צבי זאב חי חקוק","יצחק אבידני","בנימין אלחרר","חגי חדד","עופר כרדי","יצחק סולטן","צבי אסולין","גבריאל רחמים"],
	"11" : ["חיים אורון","אילן גילאון","ניצן הורוביץ","זהבה גלאון","משה רז","אבשלום וילן","טליה ששון","צביה גרינפלד","צלי רשף","עיסווי פריג`","מיכל רוזין","אברהם מיכאלי","מזור בהיינה","רפאל כהן","עמי ביטון","אורן מלכה","רפאל מלאכי","חיים אלי רואש"],
	"10" : ["אברהים צרצור","אחמד טיבי","טלב אלסאנע","מסעוד גנאים","טלב אבו עראר","גסאן עבדאללה","באסל דראושה","יוסף פדילה","איעתמאד קעדאן","מחמוד מואסי"],
	"8" : ["מוחמד ברכה","חנא סוייד","דב חנין","עפו אגבאריה","עאידה תומא -סלימאן","נורית חג`אג`","דח`יל אבו זייד (חאמד)","עבדאללה אבו מערוף","פדרו גולדפרב","מהא אלנקיב"],
	"1" : ["יעקב (כצל`ה) כ”ץ","אורי יהודה אריאל","אריה אלדד","מיכאל בן-ארי","אורי בנק","אלון דוידי","אברהם רט","רון ברימן","בצלאל סמורטיף","אילן כהן","שבתאי ויינטראוב","אהד ברט","אמיתי כהן","משה כהן","נצר מנצור","חוה טבנקין"],
	"4" :["יעקב ליצמן","משה גפני","מאיר פרוש","אורי מקלב","מנחם אליעזר מוזס","ישראל אייכלר","מנחם כרמל","יעקב אשר גוטרמן","אברהם יוסף לייזרזון","שמעון חדד","יהושע מנחם פולק","יעקב אשר","חיים מאיר כץ","אריה צבי בוימל","אפרים וובר","אליהו מרדכי קרליץ","יוסף יהושע קופרברג","אברהם רובינשטיין","יוסף דייטש","יצחק זאב פינדרוס"],
	"12" : ["דניאל הרשקוביץ","זבולון אורלב","אורי אורבך","ניסן סולומינסקי","שר שלום ג`רבי","לאורה מינקה","שלה רוזנק-שורשן","אברהם נגוסה","אופיר יחזקאל כהן","אלישיב רייכנר","אהרון אטיאס","יפה פרץ","יעקב סולר","יהודה דה-פריידיגר","אברהם מועלם","יורם כמיסה","אליעזר אויירבך","משה אהרון פת","אבי סילימן"],
	"5" : ["אביגדור ליברמן","עוזי לנדאו","סטס מיסז`ניקוב","יצחק אהרונוביץ","סופה לנדבר","אורלי לוי-אבקסיס","דניאל אילון","דוד רותם","אנסטסיה מיכאלי","פאינה (פניה) קירשנבאום","רוברט אילטוב","חמד עמאר","משה מוץ מטלון","ליה שמטוב","אלכס מילר","יצחק סלבין","סמדר בת אדם לויטן"],
	"2" : ["בנימין נתניהו","גדעון סער","גלעד ארדן","ראובן ריבלין","זאב בנימין  בגין","משה כחלון","סילבן שלום","משה יעלון","יובל שטייניץ","לאה נס","ישראל כץ","יולי - יואל אדלשטיין","לימור לבנת","חיים כץ","יוסי פלד","מיכאל איתן","דן מרידור","ציפי חוטובלי","גילה גמליאל","זאב אלקין","יריב לוין","ציון פיניאן","איוב קרא","דני דנון","כרמל שאמה","אופיר אקוניס","מירי רגב","אללי אדמסו","יצחק (איציק) דנינו","דוד אבן צור","קטי (קטרין) שיטרית","קרן ברק","שגיב אסולין","בועז ישראל העצני","גיא חנן יפרח","משה זלמן פייגלין","מיכאל רצון","אהוד יצחק יתום","שלום לרנר","הילה -אסנת מארק","אסף חפץ","יחיאל (מיכאל) לייטר","דניאל בנלולו","עוזי דיין","אדמונד חסין","פנינה רוזנבלום סימונוב","זאב -יאיר ז`בוטינסקי","מיכאל קליינר","נורית (יונה) קורן","סמיר קאידבה","יוסף- ספי ריבלין","דוד מנע","יחיאל- מיכאל חזן","משה שלמה מוסקל","אליהו גבאי","גיל חדד","אלי אבידר","חמי - נחמיה דורון","מיכל - דאה כפרי - ירדני","אתי תלמי","בלהה ניסנסון","ריכאד חיאדין","אפריים אבן","איילה שטגמן","מרים ארז","עטאף קרינאוי","יוסף בדש","רפעאת אסדי","חאתם חסון","צפורה בר","יאנה זהר","שלמה ציביון","שוש- שושנה הלוי","גיל-עד זגר","גבריאל אביטל","שאול אדם","פרוספר אזוט"],
	"3" : OKnessetParser.helpers.AVODA,
	"6" : ["ציפי לבני","שאול מופז","דליה איציק","צחי הנגבי","רוני בר-און","זאב בוים","מאיר שטרית","רוחמה אברהם בלילא","אבי (משה) דיכטר","מרינה סולודקין","יואל חסון","גדעון עזרא","יעקב אדרי","אלי אפללו","זאב בילסקי","רונית תירוש","חיים רמון","נחמן שי","שלמה (נגוסה) מולה","רוברט טיבייב","מגלי והבה","רחל אדטו","יוחנן פלסנר","שי חרמש","ישראל חסון","אריה ביבי","עתניאל שנלר","אורית זוארץ","יוליה שמאלוב ברקוביץ`","נינו אבסדזה","אבנר ברזאני","דורון אביטל","אברהם (אבי) דואן","יובל צלנר","אכרם חסון","אחמד דבאח","דוד טל","דימטרי רוסינסקי","אהרון רוני בן חמו","איתן שלום","נחמיה רייבי","גליה אלבין","שלמה יצחק","מושון גבאי","וליד שנאן","מוטי מרדכי אלפריח","יורי בוצ'רוב","אלי בן מנחם","עדי שטרנברג","חליל קאסם","אתי אסתר לבני","גילה אוגניה וקסמן","סימה נבון","משה קונפורטי","לזר קפלון","מרינה קונצביה","סוריה נוג'ידאת","אבי אברהם וידרמן","עודד אליגון","אופיר מילר","יצחק רגב","יוסי מנור","שבתאי בירן","איזיק פיטרמן","אורי נאמן","שלמה אברמוביץ","חוסיין סלימאן","ציפי גורדין","רומי זונדר כסלו","שרון מנחם בר און","יהודה סקר","יניב קזז","צבי אדנייב -עדי","רמי פרדרו","נסים הדס","מאיר דורון","שלמה טל","ענת זיו","דוד אזולאי"],
	// סיעת העצמאות היא בעצם סיעת העבודה
	"13": OKnessetParser.helpers.AVODA
};

/*******************************************************************************
 * member parser
 */
window.OKnessetParser.parsers.member = function (result, success, failure){
	result = window.OKnessetParser.helpers.createExpandedMember(result);
	success(result);
};

/*******************************************************************************
 * object.id to number parser
 */
window.OKnessetParser.parsers.objectIdToNumberParser = function (result, success, failure){
	for (var i = 0; i < result.objects.length; i++) {
			result.objects[i].id = parseInt(result.objects[i].id, 10);
		};	
	success(result.objects);
};

/*******************************************************************************
 * memberBills parser
 */
window.OKnessetParser.parsers.memberBills = function (result, success, failure){
	var legitBills = [];
	for (var i = 0; i < result.objects.length ; i++) {
		var item = result.objects[i];
		if (
			item.stage == OKnesset.strings.billStage6 ||
			item.stage == OKnesset.strings.billStage5 ||
			item.stage == OKnesset.strings.billStage4 ||
			item.stage == OKnesset.strings.billStage3 ||
			item.stage == OKnesset.strings.billStage2 ||
			item.stage == OKnesset.strings.billStage1){

			legitBills.push(item);
		}
	};

	success({
		bills:legitBills, 
		total:result.objects.length
	});
};


/*******************************************************************************
 * trivial parser
 */
window.OKnessetParser.parsers.trivialParser = function (result, success, failure){
	success(result);
};

/*******************************************************************************
 * objects parser
 */
window.OKnessetParser.parsers.objectsParser = function (result, success, failure){
	success(result.objects);
};

/*******************************************************************************
 * API Mapping
 */
window.OKnessetAPIMapping = {
	voteDetails : {
		url : function(id){
			// example id: 5592, 5388
			return 'http://www.oknesset.org/api/vote/' + id;
		},
		sampleUrl : [5592,5388],
		parameters : {},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.trivialParser,
		expectedObject: {
			for_votes : ["number"],
			against_votes : ["number"],
			abstain_votes : ["number"],
			title : "string",
			summary : "string,null"
		}
	},

	members : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/member/';
		},
		parameters : {format:"jsonp", extra_fields:"is_current,party_url"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.members,
		expectedObject: {
			objects : [{
				id : "string",
				is_current : "boolean",
				name: "string",
				party_url : "string"
			}]
		}
	},

	member : {
		url : function(id){
			// example id: 826, 800
			return 'http://www.oknesset.org/api/v2/member/' + id;
		},
		sampleUrl : [90, 826],
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.member,
		expectedObject: {
			name : "string",
			id : "string",
			party_url : "string",
			email : "string",
			phone : "string",
			current_role_descriptions : "string,null",
			img_url : "string",
			gender : "string",
			party_name : "string",
			place_of_residence : "string",
			average_weekly_presence_hours : "number"
		}
	},

	memberBills : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/bill/'
		},
		parameters : function(id){
			return {
				format:"jsonp",
				limit : 200,
				// example proposer id: 800
				proposer:id
			}
		},
		sampleParameters: [800],
		callbackKey : "callback",
		parser: OKnessetParser.parsers.memberBills,
		expectedObject: {
			objects:[{
				stage : "string",
				stage_date : "string",
				title : "string",
				id : "string"
			}]
		}		
	},

	bill : {
		url : function(id){
			// example id: 6397
			return 'http://www.oknesset.org/api/bill/' + id;
		},
		sampleUrl : [6397],
		callbackKey : "callback",
		parser: OKnessetParser.parsers.trivialParser,
		expectedObject: {
			bill_title: "string",
			proposing_mks :[{
				id : "number",
				name : "string"
			}],
			joining_mks : [{
				id : "number",
				name : "string"
			}],
			proposals : {
				private_proposals : [{
					explanation : "string",
					source_url : "sring"
				}],
				gov_proposal : {
					explanation : "string",
					source_url : "sring"
				},
				knesset_proposal : {
					explanation : "string",
					source_url : "sring"
				}
			},
			stage_text : "string",
			stage_date : "string"
		}		
	},


	memberVotesFavor :{
		url : function(){
			return 'http://www.oknesset.org/api/v2/vote/';
		},
		parameters : function(id){
			// example memeber_for: 800
			return {format:"jsonp", limit : 10, member_for : id};
		},
		sampleParameters: [800],		
		callbackKey : "callback",
		parser: OKnessetParser.parsers.objectsParser,
		expectedObject: {
			objects:[{
				title : "string",
				against_votes_count : "number",
				for_votes_count : "number",
				time_string : "string"
			}]
		}		

	},

	memberVotesAgainst : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/vote/';
		},
		parameters : function(id){
			return {format:"jsonp", limit : 10, member_against : id};
		},
		sampleParameters : [800],
		callbackKey : "callback",
		parser: OKnessetParser.parsers.objectsParser,
		expectedObject: {
			objects:[{
				title : "string",
				against_votes_count : "number",
				for_votes_count : "number",
				time_string : "string"
			}]
		}		
	},

	agendas : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/agenda/';
		},
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.objectIdToNumberParser,
		expectedObject: {
			objects : [{
				name: "string",
				public_owner_name : "string",
				id : "string"
			}]
		}
	},

	agendaDetails :{
		url : function(id){
			// id for example: 74
			return 'http://www.oknesset.org/api/v2/agenda/' + id;
		},
		sampleUrl : [74],
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.trivialParser,
		expectedObject: {
			members : [{
				score: "number",
				name : "string",
				absolute_url : "string"
			}],
			parties : [{
				score: "number",
				name : "string",
				absolute_url : "string"
			}],
			description : "string",
			image : "string",
			id : "string"
		}
	},

	parties : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/party/';
		},
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.objectIdToNumberParser,
		expectedObject: {
			objects : [{
				id : "string",
				is_coalition : "boolean",
				number_of_seats : "number",
				name: "string",
			}]
		}
	},

	committees : {
		url : function(){
			return 'http://www.oknesset.org/api/v2/committee/';
		},
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.objectIdToNumberParser,
		expectedObject: {
			objects : [{
				id : "string",
				name : "string",
				description : "string"
			}]
		}
	},

	committeeDetail : {
		url : function(id){
			//  example id: 1, 3
			return 'http://www.oknesset.org/api/committee/' + id;
		},
		sampleUrl : [1,3],
		parameters : {},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.trivialParser,
		expectedObject: {
			name : "string",
			id : "number",
			recent_meetings : [{
				title : "string",
				date : "string",
				url : "string"
			}],
			future_meetings : [{
				title : "string",
				date : "string"
			}],
			members : [{
				url : "string",
				name : "string",
				presence : "string"
			}],

		}
	},

	committeeProtocol : {
		url : function(id){
			// example id 6726, 6858
			return 'http://www.oknesset.org/api/v2/committeemeeting/' + id;
		},
		sampleUrl : [6726, 6858],
		parameters : {format:"jsonp"},
		callbackKey : "callback",
		parser: OKnessetParser.parsers.trivialParser,
		expectedObject: {
			mks_attended : ["string"],
			protocol : [{
				body : "string",
				header : "string"
			}],
			topics : "string",
			// currently not used
			date : "string",
			id : "string"
		}
	}
};

