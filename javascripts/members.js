/*
var initialMembers = [
    {
        "discipline": 100.0,
        "bills_proposed": 3,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "אביגדור ליברמן",
        "roles": "סגן ראש הממשלה, שר החוץ",
        "committee_meetings_per_month": 0.080000000000000002,
        "url": "/member/214/%D7%90%D7%91%D7%99%D7%92%D7%93%D7%95%D7%A8-%D7%9C%D7%99%D7%91%D7%A8%D7%9E%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.4000000000000004,
        "votes_per_month": 10.4,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 257,
        "img_url": "http://www.knesset.gov.il/mk/images/members/liberman_avigdor-s.jpg",
        "id": 214,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 12,
        "service_time": 743,
        "committees": [
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "אבי (משה) דיכטר",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 0.35999999999999999,
        "url": "/member/771/%D7%90%D7%91%D7%99-%D7%9E%D7%A9%D7%94-%D7%93%D7%99%D7%9B%D7%98%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 16.100000000000001,
        "votes_per_month": 32.899999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 814,
        "img_url": "http://www.knesset.gov.il/mk/images/members/dicter_abraham-s.jpg",
        "id": 771,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ]
        ],
        "name": "אבישי ברוורמן",
        "roles": "שר המופקד לענייני המיעוטים",
        "committee_meetings_per_month": 0.35999999999999999,
        "url": "/member/797/%D7%90%D7%91%D7%99%D7%A9%D7%99-%D7%91%D7%A8%D7%95%D7%95%D7%A8%D7%9E%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.5,
        "votes_per_month": 22.699999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 561,
        "img_url": "http://www.knesset.gov.il/mk/images/members/braverman_avishay-s.jpg",
        "id": 797,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 15,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "אברהים צרצור",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 1.05,
        "url": "/member/800/%D7%90%D7%91%D7%A8%D7%94%D7%99%D7%9D-%D7%A6%D7%A8%D7%A6%D7%95%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 1,
        "average_weekly_presence": 15.5,
        "votes_per_month": 19.199999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "רע\"מ-תע\"ל",
        "votes_count": 476,
        "img_url": "http://www.knesset.gov.il/mk/images/members/sarsur_ibrahim-s.jpg",
        "id": 800,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 114,
        "service_time": 743,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ]
        ],
        "name": "אברהם מיכאלי",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 22.41,
        "url": "/member/784/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 7,
        "bills_passed_pre_vote": 18,
        "average_weekly_presence": 27.300000000000001,
        "votes_per_month": 76.700000000000003,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1900,
        "img_url": "http://www.knesset.gov.il/mk/images/members/michaeli_avraham-s.jpg",
        "id": 784,
        "bills_approved": 2
    },
    {
        "discipline": 98.799999999999997,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "אהוד ברק",
        "roles": "סגן ראש הממשלה, שר הביטחון",
        "committee_meetings_per_month": 0.080000000000000002,
        "url": "/member/28/%D7%90%D7%94%D7%95%D7%93-%D7%91%D7%A8%D7%A7/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.0,
        "votes_per_month": 13.0,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 323,
        "img_url": "http://www.knesset.gov.il/mk/images/members/barak_ehud-s.jpg",
        "id": 28,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 27,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "אופיר אקוניס",
        "roles": "יו\"ר ועדת הכלכלה",
        "committee_meetings_per_month": 13.890000000000001,
        "url": "/member/830/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%90%D7%A7%D7%95%D7%A0%D7%99%D7%A1/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 19.300000000000001,
        "votes_per_month": 42.200000000000003,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1044,
        "img_url": "http://www.knesset.gov.il/mk/images/members/akunis_ofir-s.jpg",
        "id": 830,
        "bills_approved": 2
    },
    {
        "discipline": 92.299999999999997,
        "bills_proposed": 120,
        "service_time": 320,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "אופיר פינס-פז",
        "roles": "חבר כנסת לשעבר",
        "committee_meetings_per_month": 15.75,
        "url": "/member/100/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%A4%D7%99%D7%A0%D7%A1-%D7%A4%D7%96/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 9,
        "average_weekly_presence": 11.0,
        "votes_per_month": 18.399999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": false,
        "party": "העבודה",
        "votes_count": 196,
        "img_url": "http://www.knesset.gov.il/mk/images/members/pinespaz_ofir-s.jpg",
        "id": 100,
        "bills_approved": 1
    },
    {
        "discipline": 100.0,
        "bills_proposed": 89,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "אורי אורבך",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 12.52,
        "url": "/member/845/%D7%90%D7%95%D7%A8%D7%99-%D7%90%D7%95%D7%A8%D7%91%D7%9A/",
        "gender": "זכר",
        "bills_passed_first_vote": 7,
        "bills_passed_pre_vote": 13,
        "average_weekly_presence": 21.5,
        "votes_per_month": 48.0,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הבית היהודי",
        "votes_count": 1190,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Orbach_Uri-s.jpg",
        "id": 845,
        "bills_approved": 3
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 94,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "אורי יהודה אריאל",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 8.5999999999999996,
        "url": "/member/713/%D7%90%D7%95%D7%A8%D7%99-%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%90%D7%A8%D7%99%D7%90%D7%9C/",
        "gender": "זכר",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 20,
        "average_weekly_presence": 24.0,
        "votes_per_month": 26.800000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "האיחוד הלאומי",
        "votes_count": 664,
        "img_url": "http://www.knesset.gov.il/mk/images/members/ariel_uri-yehuda-s.jpg",
        "id": 713,
        "bills_approved": 1
    },
    {
        "discipline": 100.0,
        "bills_proposed": 84,
        "service_time": 743,
        "committees": [
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "אורי מקלב",
        "roles": "יו\"ר ועדה מיוחדת לפניות הציבור",
        "committee_meetings_per_month": 13.49,
        "url": "/member/814/%D7%90%D7%95%D7%A8%D7%99-%D7%9E%D7%A7%D7%9C%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 9,
        "bills_passed_pre_vote": 22,
        "average_weekly_presence": 32.100000000000001,
        "votes_per_month": 62.5,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "יהדות התורה",
        "votes_count": 1548,
        "img_url": "http://www.knesset.gov.il/mk/images/members/uri_maklev-s.jpg",
        "id": 814,
        "bills_approved": 4
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 86,
        "service_time": 743,
        "committees": [
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת משנה למאבק בסחר בנשים",
                "/committee/13/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "אורית זוארץ",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 5.1699999999999999,
        "url": "/member/822/%D7%90%D7%95%D7%A8%D7%99%D7%AA-%D7%96%D7%95%D7%90%D7%A8%D7%A5/",
        "gender": "נקבה",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 13,
        "average_weekly_presence": 17.5,
        "votes_per_month": 30.100000000000001,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 746,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Zuaretz_Orit-s.jpg",
        "id": 822,
        "bills_approved": 1
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 12,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ]
        ],
        "name": "אורית נוקד",
        "roles": "סגנית שר התעשייה, המסחר והתעסוקה",
        "committee_meetings_per_month": 0.60999999999999999,
        "url": "/member/717/%D7%90%D7%95%D7%A8%D7%99%D7%AA-%D7%A0%D7%95%D7%A7%D7%93/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 6.5999999999999996,
        "votes_per_month": 34.799999999999997,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 863,
        "img_url": "http://www.knesset.gov.il/mk/images/members/noked_orit-s.jpg",
        "id": 717,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 50,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "אורלי לוי-אבקסיס",
        "roles": "חברת כנסת בקואליציה",
        "committee_meetings_per_month": 9.2899999999999991,
        "url": "/member/832/%D7%90%D7%95%D7%A8%D7%9C%D7%99-%D7%9C%D7%95%D7%99-%D7%90%D7%91%D7%A7%D7%A1%D7%99%D7%A1/",
        "gender": "נקבה",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 12,
        "average_weekly_presence": 14.6,
        "votes_per_month": 40.799999999999997,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1010,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Levy_Orli-s.jpg",
        "id": 832,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 70,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "אחמד טיבי",
        "roles": "יו\"ר ועדת חקירה פרלמנטרית בנושא קליטת עובדים ערבים בשירות הציבורי",
        "committee_meetings_per_month": 6.9000000000000004,
        "url": "/member/208/%D7%90%D7%97%D7%9E%D7%93-%D7%98%D7%99%D7%91%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 15.699999999999999,
        "votes_per_month": 20.899999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "רע\"מ-תע\"ל",
        "votes_count": 517,
        "img_url": "http://www.knesset.gov.il/mk/images/members/tibi_ahmed-s.jpg",
        "id": 208,
        "bills_approved": 1
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "איוב קרא",
        "roles": "סגן שר לפיתוח הנגב והגליל",
        "committee_meetings_per_month": 0.81000000000000005,
        "url": "/member/230/%D7%90%D7%99%D7%95%D7%91-%D7%A7%D7%A8%D7%90/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 11.4,
        "votes_per_month": 38.700000000000003,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 958,
        "img_url": "http://www.knesset.gov.il/mk/images/members/kara_ayoob-s.jpg",
        "id": 230,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 67,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "אילן גילאון",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 8.9199999999999999,
        "url": "/member/200/%D7%90%D7%99%D7%9C%D7%9F-%D7%92%D7%99%D7%9C%D7%90%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 4,
        "average_weekly_presence": 16.100000000000001,
        "votes_per_month": 45.5,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "מרצ",
        "votes_count": 1127,
        "img_url": "http://www.knesset.gov.il/mk/images/members/gilon_ilan-s.jpg",
        "id": 200,
        "bills_approved": 1
    },
    {
        "discipline": 91.099999999999994,
        "bills_proposed": 108,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ]
        ],
        "name": "איתן כבל",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 5.29,
        "url": "/member/64/%D7%90%D7%99%D7%AA%D7%9F-%D7%9B%D7%91%D7%9C/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 17,
        "average_weekly_presence": 16.699999999999999,
        "votes_per_month": 21.899999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 542,
        "img_url": "http://www.knesset.gov.il/mk/images/members/cabel_eitan-s.jpg",
        "id": 64,
        "bills_approved": 0
    },
    {
        "discipline": 98.900000000000006,
        "bills_proposed": 16,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "אלי אפללו",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 3.5499999999999998,
        "url": "/member/730/%D7%90%D7%9C%D7%99-%D7%90%D7%A4%D7%9C%D7%9C%D7%95/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 9.5,
        "votes_per_month": 15.0,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 371,
        "img_url": "http://www.knesset.gov.il/mk/images/members/aflalo_eli-s.jpg",
        "id": 730,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "אליהו ישי",
        "roles": "סגן ראש הממשלה, שר הפנים",
        "committee_meetings_per_month": 0.040000000000000001,
        "url": "/member/63/%D7%90%D7%9C%D7%99%D7%94%D7%95-%D7%99%D7%A9%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 4.7999999999999998,
        "votes_per_month": 23.800000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 589,
        "img_url": "http://www.knesset.gov.il/mk/images/members/yishai_eli-s.jpg",
        "id": 63,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 85,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "אלכס מילר",
        "roles": "יו\"ר ועדת החינוך, התרבות והספורט",
        "committee_meetings_per_month": 19.460000000000001,
        "url": "/member/785/%D7%90%D7%9C%D7%9B%D7%A1-%D7%9E%D7%99%D7%9C%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 7,
        "bills_passed_pre_vote": 19,
        "average_weekly_presence": 19.0,
        "votes_per_month": 52.600000000000001,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1303,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Miller_Alex-s.jpg",
        "id": 785,
        "bills_approved": 4
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 87,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "אמנון כהן",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 20.07,
        "url": "/member/210/%D7%90%D7%9E%D7%A0%D7%95%D7%9F-%D7%9B%D7%94%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 8,
        "bills_passed_pre_vote": 19,
        "average_weekly_presence": 18.600000000000001,
        "votes_per_month": 39.799999999999997,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 986,
        "img_url": "http://www.knesset.gov.il/mk/images/members/cohen_amnon-s.jpg",
        "id": 210,
        "bills_approved": 8
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 38,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "אנסטסיה מיכאלי",
        "roles": "חברת כנסת בקואליציה",
        "committee_meetings_per_month": 6.9000000000000004,
        "url": "/member/834/%D7%90%D7%A0%D7%A1%D7%98%D7%A1%D7%99%D7%94-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%99/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 9,
        "average_weekly_presence": 20.0,
        "votes_per_month": 54.0,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1338,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Michaeli_Anastassia-s.jpg",
        "id": 834,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "אריאל אטיאס",
        "roles": "שר הבינוי והשיכון",
        "committee_meetings_per_month": 0.60999999999999999,
        "url": "/member/791/%D7%90%D7%A8%D7%99%D7%90%D7%9C-%D7%90%D7%98%D7%99%D7%90%D7%A1/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.9000000000000004,
        "votes_per_month": 20.600000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 510,
        "img_url": "http://www.knesset.gov.il/mk/images/members/atias_ariel-s.jpg",
        "id": 791,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 141,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ]
        ],
        "name": "אריה אלדד",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 7.1900000000000004,
        "url": "/member/752/%D7%90%D7%A8%D7%99%D7%94-%D7%90%D7%9C%D7%93%D7%93/",
        "gender": "זכר",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 11,
        "average_weekly_presence": 25.800000000000001,
        "votes_per_month": 31.800000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "האיחוד הלאומי",
        "votes_count": 787,
        "img_url": "http://www.knesset.gov.il/mk/images/members/eldad_aryeh-s.jpg",
        "id": 752,
        "bills_approved": 4
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 31,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "אריה ביבי",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 10.09,
        "url": "/member/821/%D7%90%D7%A8%D7%99%D7%94-%D7%91%D7%99%D7%91%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 16.0,
        "votes_per_month": 33.600000000000001,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 832,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Bibi_Arie-s.jpg",
        "id": 821,
        "bills_approved": 0
    },
    {
        "discipline": 99.200000000000003,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "בנימין נתניהו",
        "roles": "ראש ממשלה, שר לאסטרטגיה כלכלית, שר לענייני גמלאים, שר הבריאות",
        "committee_meetings_per_month": 0.040000000000000001,
        "url": "/member/90/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F-%D7%A0%D7%AA%D7%A0%D7%99%D7%94%D7%95/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.7999999999999998,
        "votes_per_month": 30.300000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 750,
        "img_url": "http://www.knesset.gov.il/mk/images/members/netanyahu_bibi-s.jpg",
        "id": 90,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [],
        "name": "בנימין (פואד) בן-אליעזר",
        "roles": "שר התעשייה, המסחר והתעסוקה",
        "committee_meetings_per_month": 0.0,
        "url": "/member/20/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F-%D7%A4%D7%95%D7%90%D7%93-%D7%91%D7%9F-%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 3.7999999999999998,
        "votes_per_month": 12.0,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 297,
        "img_url": "http://www.knesset.gov.il/mk/images/members/beneliezer_binyamin-s.jpg",
        "id": 20,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "גדעון סער",
        "roles": "שר החינוך",
        "committee_meetings_per_month": 1.8600000000000001,
        "url": "/member/725/%D7%92%D7%93%D7%A2%D7%95%D7%9F-%D7%A1%D7%A2%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.0999999999999996,
        "votes_per_month": 18.699999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 463,
        "img_url": "http://www.knesset.gov.il/mk/images/members/saar_gidon-s.jpg",
        "id": 725,
        "bills_approved": 0
    },
    {
        "discipline": 99.299999999999997,
        "bills_proposed": 29,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "גדעון עזרא",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 2.6200000000000001,
        "url": "/member/96/%D7%92%D7%93%D7%A2%D7%95%D7%9F-%D7%A2%D7%96%D7%A8%D7%90/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 15.9,
        "votes_per_month": 48.100000000000001,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 1192,
        "img_url": "http://www.knesset.gov.il/mk/images/members/ezra_gidon-s.jpg",
        "id": 96,
        "bills_approved": 2
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 1,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "גילה גמליאל",
        "roles": "סגנית שר לקידום צעירים, סטודנטים ונשים במשרד ראש הממשלה",
        "committee_meetings_per_month": 0.47999999999999998,
        "url": "/member/723/%D7%92%D7%99%D7%9C%D7%94-%D7%92%D7%9E%D7%9C%D7%99%D7%90%D7%9C/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.9000000000000004,
        "votes_per_month": 30.199999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 747,
        "img_url": "http://www.knesset.gov.il/mk/images/members/gamliel_gila-s.jpg",
        "id": 723,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "גלעד ארדן",
        "roles": "שר להגנת הסביבה",
        "committee_meetings_per_month": 1.21,
        "url": "/member/734/%D7%92%D7%9C%D7%A2%D7%93-%D7%90%D7%A8%D7%93%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 9.3000000000000007,
        "votes_per_month": 37.799999999999997,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 935,
        "img_url": "http://www.knesset.gov.il/mk/images/members/erdan_gilad-s.jpg",
        "id": 734,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 27,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "ג`מאל זחאלקה",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 3.6299999999999999,
        "url": "/member/756/%D7%92%D7%9E%D7%90%D7%9C-%D7%96%D7%97%D7%90%D7%9C%D7%A7%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 4,
        "average_weekly_presence": 14.300000000000001,
        "votes_per_month": 28.699999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "בל\"ד",
        "votes_count": 712,
        "img_url": "http://www.knesset.gov.il/mk/images/members/zahalka_jamal-s.jpg",
        "id": 756,
        "bills_approved": 1
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 369,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "דב חנין",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 18.57,
        "url": "/member/780/%D7%93%D7%91-%D7%97%D7%A0%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 10,
        "bills_passed_pre_vote": 27,
        "average_weekly_presence": 19.300000000000001,
        "votes_per_month": 42.600000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "חד\"ש",
        "votes_count": 1056,
        "img_url": "http://www.knesset.gov.il/mk/images/members/khenin_dov-s.jpg",
        "id": 780,
        "bills_approved": 5
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 112,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "דוד אזולאי",
        "roles": "יו\"ר ועדת הפנים והגנת הסביבה",
        "committee_meetings_per_month": 14.82,
        "url": "/member/7/%D7%93%D7%95%D7%93-%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 17,
        "average_weekly_presence": 19.100000000000001,
        "votes_per_month": 50.600000000000001,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1254,
        "img_url": "http://www.knesset.gov.il/mk/images/members/azoulay_david-s.jpg",
        "id": 7,
        "bills_approved": 1
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 63,
        "service_time": 743,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "דוד רותם",
        "roles": "יו\"ר ועדת החוקה, חוק ומשפט",
        "committee_meetings_per_month": 18.940000000000001,
        "url": "/member/805/%D7%93%D7%95%D7%93-%D7%A8%D7%95%D7%AA%D7%9D/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 13,
        "average_weekly_presence": 34.5,
        "votes_per_month": 53.5,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1326,
        "img_url": "http://www.knesset.gov.il/mk/images/members/David_Rotem-s.jpg",
        "id": 805,
        "bills_approved": 0
    },
    {
        "discipline": 98.799999999999997,
        "bills_proposed": 25,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "דליה איציק",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 0.60999999999999999,
        "url": "/member/8/%D7%93%D7%9C%D7%99%D7%94-%D7%90%D7%99%D7%A6%D7%99%D7%A7/",
        "gender": "נקבה",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 4,
        "average_weekly_presence": 11.199999999999999,
        "votes_per_month": 30.5,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 756,
        "img_url": "http://www.knesset.gov.il/mk/images/members/itzik_dalia-s.jpg",
        "id": 8,
        "bills_approved": 2
    },
    {
        "discipline": 99.099999999999994,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "דן מרידור",
        "roles": "סגן ראש הממשלה, שר המופקד על שירותי המודיעין והוועדה לאנרגיה אטומית",
        "committee_meetings_per_month": 0.040000000000000001,
        "url": "/member/88/%D7%93%D7%9F-%D7%9E%D7%A8%D7%99%D7%93%D7%95%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.0999999999999996,
        "votes_per_month": 27.5,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 681,
        "img_url": "http://www.knesset.gov.il/mk/images/members/meridor_dan-s.jpg",
        "id": 88,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 9,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה מיוחדת לבעיית העובדים הזרים",
                "/committee/12/"
            ],
            [
                "ועדת משנה למאבק בסחר בנשים",
                "/committee/13/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "דניאל אילון",
        "roles": "סגן שר החוץ",
        "committee_meetings_per_month": 0.23999999999999999,
        "url": "/member/833/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%90%D7%99%D7%9C%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 6.7999999999999998,
        "votes_per_month": 33.100000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 820,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Ayalon_Daniel-s.jpg",
        "id": 833,
        "bills_approved": 0
    },
    {
        "discipline": 96.400000000000006,
        "bills_proposed": 17,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ]
        ],
        "name": "דניאל בן-סימון",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 4.2000000000000002,
        "url": "/member/836/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%91%D7%9F-%D7%A1%D7%99%D7%9E%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 13.0,
        "votes_per_month": 13.5,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 335,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Ben_Simon_Daniel-s.jpg",
        "id": 836,
        "bills_approved": 1
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "דניאל הרשקוביץ",
        "roles": "שר המדע והטכנולוגיה",
        "committee_meetings_per_month": 0.93000000000000005,
        "url": "/member/847/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%94%D7%A8%D7%A9%D7%A7%D7%95%D7%91%D7%99%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.0,
        "votes_per_month": 35.799999999999997,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הבית היהודי",
        "votes_count": 887,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Hershkowitz_Daniel-s.jpg",
        "id": 847,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 72,
        "service_time": 743,
        "committees": [
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "דני דנון",
        "roles": "יו\"ר ועדה לזכויות הילד",
        "committee_meetings_per_month": 9.2100000000000009,
        "url": "/member/828/%D7%93%D7%A0%D7%99-%D7%93%D7%A0%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 18,
        "average_weekly_presence": 16.0,
        "votes_per_month": 36.299999999999997,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 900,
        "img_url": "http://www.knesset.gov.il/mk/images/members/danon_danny-s.jpg",
        "id": 828,
        "bills_approved": 3
    },
    {
        "discipline": 100.0,
        "bills_proposed": 70,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "זאב אלקין",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 13.08,
        "url": "/member/768/%D7%96%D7%90%D7%91-%D7%90%D7%9C%D7%A7%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 11,
        "bills_passed_pre_vote": 19,
        "average_weekly_presence": 20.5,
        "votes_per_month": 70.299999999999997,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1741,
        "img_url": "http://www.knesset.gov.il/mk/images/members/elkin_zeev-s.jpg",
        "id": 768,
        "bills_approved": 7
    },
    {
        "discipline": 98.299999999999997,
        "bills_proposed": 13,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "זאב בוים",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 0.32000000000000001,
        "url": "/member/16/%D7%96%D7%90%D7%91-%D7%91%D7%95%D7%99%D7%9D/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 6.4000000000000004,
        "votes_per_month": 25.399999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 630,
        "img_url": "http://www.knesset.gov.il/mk/images/members/boim_zev-s.jpg",
        "id": 16,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 70,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "זאב בילסקי",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 5.5700000000000003,
        "url": "/member/817/%D7%96%D7%90%D7%91-%D7%91%D7%99%D7%9C%D7%A1%D7%A7%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 14,
        "average_weekly_presence": 14.199999999999999,
        "votes_per_month": 36.5,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 905,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Bielski_Zeev-s.jpg",
        "id": 817,
        "bills_approved": 2
    },
    {
        "discipline": 99.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [],
        "name": "זאב בנימין  בגין",
        "roles": "שר",
        "committee_meetings_per_month": 0.0,
        "url": "/member/14/%D7%96%D7%90%D7%91-%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F--%D7%91%D7%92%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.5999999999999996,
        "votes_per_month": 36.700000000000003,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 909,
        "img_url": "http://www.knesset.gov.il/mk/images/members/begin_beni-s.jpg",
        "id": 14,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 256,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ]
        ],
        "name": "זבולון אורלב",
        "roles": "יו\"ר ועדת החינוך, התרבות והספורט",
        "committee_meetings_per_month": 19.140000000000001,
        "url": "/member/194/%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F-%D7%90%D7%95%D7%A8%D7%9C%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 15,
        "bills_passed_pre_vote": 40,
        "average_weekly_presence": 30.600000000000001,
        "votes_per_month": 47.700000000000003,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הבית היהודי",
        "votes_count": 1181,
        "img_url": "http://www.knesset.gov.il/mk/images/members/orlev_zevulun-s.jpg",
        "id": 194,
        "bills_approved": 10
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 111,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ]
        ],
        "name": "חיים אורון",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 19.059999999999999,
        "url": "/member/5/%D7%97%D7%99%D7%99%D7%9D-%D7%90%D7%95%D7%A8%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 18.300000000000001,
        "votes_per_month": 38.899999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "מרצ",
        "votes_count": 964,
        "img_url": "http://www.knesset.gov.il/mk/images/members/oron_chaim-s.jpg",
        "id": 5,
        "bills_approved": 3
    },
    {
        "discipline": 99.5,
        "bills_proposed": 32,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ]
        ],
        "name": "חיים אמסלם",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 6.6200000000000001,
        "url": "/member/795/%D7%97%D7%99%D7%99%D7%9D-%D7%90%D7%9E%D7%A1%D7%9C%D7%9D/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 20.199999999999999,
        "votes_per_month": 31.899999999999999,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 789,
        "img_url": "http://www.knesset.gov.il/mk/images/members/amsalem_haim-s.jpg",
        "id": 795,
        "bills_approved": 1
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 121,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "חיים כץ",
        "roles": "יו\"ר ועדת העבודה, הרווחה והבריאות",
        "committee_meetings_per_month": 15.18,
        "url": "/member/212/%D7%97%D7%99%D7%99%D7%9D-%D7%9B%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 8,
        "bills_passed_pre_vote": 24,
        "average_weekly_presence": 13.6,
        "votes_per_month": 41.100000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1019,
        "img_url": "http://www.knesset.gov.il/mk/images/members/katz_haim-s.jpg",
        "id": 212,
        "bills_approved": 4
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 128,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "חיים רמון",
        "roles": "חבר כנסת לשעבר",
        "committee_meetings_per_month": 0.69999999999999996,
        "url": "/member/115/%D7%97%D7%99%D7%99%D7%9D-%D7%A8%D7%9E%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": null,
        "votes_per_month": 7.7000000000000002,
        "average_weekly_presence_rank": 0,
        "is_current": false,
        "party": "קדימה",
        "votes_count": 33,
        "img_url": "http://www.knesset.gov.il/mk/images/members/ramon_haim-s.jpg",
        "id": 115,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 25,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה מיוחדת למאבק בנגע הסמים",
                "/committee/16/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "חמד עמאר",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 14.289999999999999,
        "url": "/member/837/%D7%97%D7%9E%D7%93-%D7%A2%D7%9E%D7%90%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 9,
        "average_weekly_presence": 19.199999999999999,
        "votes_per_month": 62.600000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1551,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Amar_Hamad-s.jpg",
        "id": 837,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 40,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "חנא סוייד",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 6.0599999999999996,
        "url": "/member/789/%D7%97%D7%A0%D7%90-%D7%A1%D7%95%D7%99%D7%99%D7%93/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 14.800000000000001,
        "votes_per_month": 21.600000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "חד\"ש",
        "votes_count": 535,
        "img_url": "http://www.knesset.gov.il/mk/images/members/swaid_hana-s.jpg",
        "id": 789,
        "bills_approved": 1
    },
    {
        "discipline": 100.0,
        "bills_proposed": 15,
        "service_time": 743,
        "committees": [
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "חנין זועבי",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 3.7599999999999998,
        "url": "/member/846/%D7%97%D7%A0%D7%99%D7%9F-%D7%96%D7%95%D7%A2%D7%91%D7%99/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 1,
        "average_weekly_presence": 15.4,
        "votes_per_month": 22.899999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "בל\"ד",
        "votes_count": 567,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Zuabi_Hanin-s.jpg",
        "id": 846,
        "bills_approved": 0
    },
    {
        "discipline": 98.900000000000006,
        "bills_proposed": 11,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "טלב אלסאנע",
        "roles": "יו\"ר ועדה מיוחדת למאבק בנגע הסמים",
        "committee_meetings_per_month": 4.5199999999999996,
        "url": "/member/13/%D7%98%D7%9C%D7%91-%D7%90%D7%9C%D7%A1%D7%90%D7%A0%D7%A2/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 13.300000000000001,
        "votes_per_month": 18.300000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "רע\"מ-תע\"ל",
        "votes_count": 452,
        "img_url": "http://www.knesset.gov.il/mk/images/members/elsana_taleb-s.jpg",
        "id": 13,
        "bills_approved": 1
    },
    {
        "discipline": 99.299999999999997,
        "bills_proposed": 98,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "יואל חסון",
        "roles": "יו\"ר ועדה לענייני ביקורת המדינה",
        "committee_meetings_per_month": 7.71,
        "url": "/member/772/%D7%99%D7%95%D7%90%D7%9C-%D7%97%D7%A1%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 15.5,
        "votes_per_month": 37.100000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 918,
        "img_url": "http://www.knesset.gov.il/mk/images/members/hasson_yoel-s.jpg",
        "id": 772,
        "bills_approved": 2
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "יובל שטייניץ",
        "roles": "שר האוצר",
        "committee_meetings_per_month": 0.44,
        "url": "/member/695/%D7%99%D7%95%D7%91%D7%9C-%D7%A9%D7%98%D7%99%D7%99%D7%A0%D7%99%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.5,
        "votes_per_month": 30.899999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 766,
        "img_url": "http://www.knesset.gov.il/mk/images/members/steinitz_yuval-s.jpg",
        "id": 695,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 45,
        "service_time": 743,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "יוחנן פלסנר",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 3.7999999999999998,
        "url": "/member/809/%D7%99%D7%95%D7%97%D7%A0%D7%9F-%D7%A4%D7%9C%D7%A1%D7%A0%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 16.899999999999999,
        "votes_per_month": 32.700000000000003,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 810,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Plesner_yohanan-s.jpg",
        "id": 809,
        "bills_approved": 1
    },
    {
        "discipline": 99.5,
        "bills_proposed": 27,
        "service_time": 615,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "יוליה שמאלוב ברקוביץ`",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 6.3899999999999997,
        "url": "/member/848/%D7%99%D7%95%D7%9C%D7%99%D7%94-%D7%A9%D7%9E%D7%90%D7%9C%D7%95%D7%91-%D7%91%D7%A8%D7%A7%D7%95%D7%91%D7%99%D7%A5/",
        "gender": "נקבה",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 4,
        "average_weekly_presence": 15.800000000000001,
        "votes_per_month": 26.600000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 546,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Shamalov_Berkovich_Yulia-s.jpg",
        "id": 848,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 24,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "יולי - יואל אדלשטיין",
        "roles": "שר ההסברה והתפוצות",
        "committee_meetings_per_month": 0.35999999999999999,
        "url": "/member/1/%D7%99%D7%95%D7%9C%D7%99-%D7%99%D7%95%D7%90%D7%9C-%D7%90%D7%93%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 9.5999999999999996,
        "votes_per_month": 37.5,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 929,
        "img_url": "http://www.knesset.gov.il/mk/images/members/edelstein_yoel-s.jpg",
        "id": 1,
        "bills_approved": 0
    },
    {
        "discipline": 74.0,
        "bills_proposed": 12,
        "service_time": 413,
        "committees": [
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת משנה למאבק בסחר בנשים",
                "/committee/13/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "יולי תמיר",
        "roles": "חברת כנסת לשעבר",
        "committee_meetings_per_month": 1.02,
        "url": "/member/697/%D7%99%D7%95%D7%9C%D7%99-%D7%AA%D7%9E%D7%99%D7%A8/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 9.9000000000000004,
        "votes_per_month": 3.6000000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": false,
        "party": "העבודה",
        "votes_count": 50,
        "img_url": "http://www.knesset.gov.il/mk/images/members/tamir_yuli-s.jpg",
        "id": 697,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "יוסי פלד",
        "roles": "שר",
        "committee_meetings_per_month": 0.47999999999999998,
        "url": "/member/824/%D7%99%D7%95%D7%A1%D7%99-%D7%A4%D7%9C%D7%93/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.1999999999999993,
        "votes_per_month": 39.100000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 968,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Peled_Yossi-s.jpg",
        "id": 824,
        "bills_approved": 0
    },
    {
        "discipline": 99.0,
        "bills_proposed": 26,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "יעקב אדרי",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 14.09,
        "url": "/member/728/%D7%99%D7%A2%D7%A7%D7%91-%D7%90%D7%93%D7%A8%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 11.800000000000001,
        "votes_per_month": 19.300000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 477,
        "img_url": "http://www.knesset.gov.il/mk/images/members/edri_yaakov-s.jpg",
        "id": 728,
        "bills_approved": 2
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 43,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה מיוחדת לבעיית העובדים הזרים",
                "/committee/12/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "יעקב (כצל`ה) כ”ץ",
        "roles": "יו\"ר ועדה מיוחדת לבעיית העובדים הזרים",
        "committee_meetings_per_month": 4.9699999999999998,
        "url": "/member/840/%D7%99%D7%A2%D7%A7%D7%91-%D7%9B%D7%A6%D7%9C%D7%94-%D7%9B%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 5,
        "average_weekly_presence": 18.399999999999999,
        "votes_per_month": 24.699999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "האיחוד הלאומי",
        "votes_count": 611,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Yaakov_Katzeleh_Katz-s.jpg",
        "id": 840,
        "bills_approved": 1
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדה לזכויות הילד",
                "/committee/15/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "יעקב ליצמן",
        "roles": "סגן שר הבריאות",
        "committee_meetings_per_month": 1.6200000000000001,
        "url": "/member/216/%D7%99%D7%A2%D7%A7%D7%91-%D7%9C%D7%99%D7%A6%D7%9E%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 9.6999999999999993,
        "votes_per_month": 26.899999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "יהדות התורה",
        "votes_count": 667,
        "img_url": "http://www.knesset.gov.il/mk/images/members/lizman_yaakov-s.jpg",
        "id": 216,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "יעקב מרגי",
        "roles": "שר לשירותי דת",
        "committee_meetings_per_month": 0.47999999999999998,
        "url": "/member/751/%D7%99%D7%A2%D7%A7%D7%91-%D7%9E%D7%A8%D7%92%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.7000000000000002,
        "votes_per_month": 39.100000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 969,
        "img_url": "http://www.knesset.gov.il/mk/images/members/margi_yaakov-s.jpg",
        "id": 751,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 1,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת משנה למאבק בסחר בנשים",
                "/committee/13/"
            ],
            [
                "ועדה מיוחדת למאבק בנגע הסמים",
                "/committee/16/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "יצחק אהרונוביץ",
        "roles": "שר לביטחון פנים",
        "committee_meetings_per_month": 0.56999999999999995,
        "url": "/member/790/%D7%99%D7%A6%D7%97%D7%A7-%D7%90%D7%94%D7%A8%D7%95%D7%A0%D7%95%D7%91%D7%99%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 1,
        "average_weekly_presence": 13.199999999999999,
        "votes_per_month": 43.600000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1079,
        "img_url": "http://www.knesset.gov.il/mk/images/members/aharonovitch_yitzhak-s.jpg",
        "id": 790,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדה מיוחדת למאבק בנגע הסמים",
                "/committee/16/"
            ]
        ],
        "name": "יצחק הרצוג",
        "roles": "שר הרווחה והשרותים החברתיים",
        "committee_meetings_per_month": 0.89000000000000001,
        "url": "/member/740/%D7%99%D7%A6%D7%97%D7%A7-%D7%94%D7%A8%D7%A6%D7%95%D7%92/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.0999999999999996,
        "votes_per_month": 33.100000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 820,
        "img_url": "http://www.knesset.gov.il/mk/images/members/herzog_yitzhak-s.jpg",
        "id": 740,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 25,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה מיוחדת לבעיית העובדים הזרים",
                "/committee/12/"
            ]
        ],
        "name": "יצחק וקנין",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 14.74,
        "url": "/member/50/%D7%99%D7%A6%D7%97%D7%A7-%D7%95%D7%A7%D7%A0%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 16.800000000000001,
        "votes_per_month": 52.200000000000003,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1292,
        "img_url": "http://www.knesset.gov.il/mk/images/members/vaknin_yizhak-s.jpg",
        "id": 50,
        "bills_approved": 2
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "יצחק כהן",
        "roles": "סגן שר האוצר",
        "committee_meetings_per_month": 2.1400000000000001,
        "url": "/member/65/%D7%99%D7%A6%D7%97%D7%A7-%D7%9B%D7%94%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 8.0999999999999996,
        "votes_per_month": 40.5,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1002,
        "img_url": "http://www.knesset.gov.il/mk/images/members/cohen_yitzhak-s.jpg",
        "id": 65,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 129,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "יריב לוין",
        "roles": "יו\"ר ועדת הכנסת",
        "committee_meetings_per_month": 11.390000000000001,
        "url": "/member/826/%D7%99%D7%A8%D7%99%D7%91-%D7%9C%D7%95%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 14,
        "bills_passed_pre_vote": 30,
        "average_weekly_presence": 20.199999999999999,
        "votes_per_month": 63.600000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1576,
        "img_url": "http://www.knesset.gov.il/mk/images/members/levin_yariv-s.jpg",
        "id": 826,
        "bills_approved": 7
    },
    {
        "discipline": 100.0,
        "bills_proposed": 1,
        "service_time": 31,
        "committees": [],
        "name": "ישראל אייכלר",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 0.0,
        "url": "/member/754/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%90%D7%99%D7%99%D7%9B%D7%9C%D7%A8/",
        "gender": null,
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 25.0,
        "votes_per_month": 52.299999999999997,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "יהדות התורה",
        "votes_count": 54,
        "img_url": "http://www.knesset.gov.il/mk/images/members/eichler_israel-s.jpg",
        "id": 754,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 42,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "ישראל חסון",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 5.8499999999999996,
        "url": "/member/781/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%97%D7%A1%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 15.1,
        "votes_per_month": 18.0,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 446,
        "img_url": "http://www.knesset.gov.il/mk/images/members/hasson_israel-s.jpg",
        "id": 781,
        "bills_approved": 1
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה מיוחדת לבעיית העובדים הזרים",
                "/committee/12/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "ישראל כץ",
        "roles": "שר התחבורה והבטיחות בדרכים",
        "committee_meetings_per_month": 0.32000000000000001,
        "url": "/member/69/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%9B%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.2999999999999998,
        "votes_per_month": 27.399999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 679,
        "img_url": "http://www.knesset.gov.il/mk/images/members/katz_yisrael-s.jpg",
        "id": 69,
        "bills_approved": 0
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 94,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "כרמל שאמה",
        "roles": "יו\"ר ועדת הכלכלה",
        "committee_meetings_per_month": 15.220000000000001,
        "url": "/member/829/%D7%9B%D7%A8%D7%9E%D7%9C-%D7%A9%D7%90%D7%9E%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 16,
        "average_weekly_presence": 16.699999999999999,
        "votes_per_month": 32.299999999999997,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 800,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Shama_Carmel-s.jpg",
        "id": 829,
        "bills_approved": 1
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "לאה נס",
        "roles": "סגנית שר לענייני גמלאים",
        "committee_meetings_per_month": 0.28000000000000003,
        "url": "/member/738/%D7%9C%D7%90%D7%94-%D7%A0%D7%A1/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.2000000000000002,
        "votes_per_month": 42.0,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1041,
        "img_url": "http://www.knesset.gov.il/mk/images/members/nass_lea-s.jpg",
        "id": 738,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 53,
        "service_time": 743,
        "committees": [
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "ליה שמטוב",
        "roles": "יו\"ר ועדת העלייה, הקליטה והתפוצות",
        "committee_meetings_per_month": 8.4000000000000004,
        "url": "/member/802/%D7%9C%D7%99%D7%94-%D7%A9%D7%9E%D7%98%D7%95%D7%91/",
        "gender": "נקבה",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 7,
        "average_weekly_presence": 18.899999999999999,
        "votes_per_month": 53.700000000000003,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1329,
        "img_url": "http://www.knesset.gov.il/mk/images/members/shemtov_lia-s.jpg",
        "id": 802,
        "bills_approved": 2
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "לימור לבנת",
        "roles": "שרת התרבות והספורט",
        "committee_meetings_per_month": 0.56999999999999995,
        "url": "/member/70/%D7%9C%D7%99%D7%9E%D7%95%D7%A8-%D7%9C%D7%91%D7%A0%D7%AA/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 6.7999999999999998,
        "votes_per_month": 22.0,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 546,
        "img_url": "http://www.knesset.gov.il/mk/images/members/livnat_limor-s.jpg",
        "id": 70,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 1,
        "service_time": 712,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "מאיר פרוש",
        "roles": "סגן שר החינוך",
        "committee_meetings_per_month": 0.20999999999999999,
        "url": "/member/103/%D7%9E%D7%90%D7%99%D7%A8-%D7%A4%D7%A8%D7%95%D7%A9/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.2000000000000002,
        "votes_per_month": 19.399999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": false,
        "party": "יהדות התורה",
        "votes_count": 460,
        "img_url": "http://www.knesset.gov.il/mk/images/members/porush_meir-s.jpg",
        "id": 103,
        "bills_approved": 0
    },
    {
        "discipline": 97.599999999999994,
        "bills_proposed": 58,
        "service_time": 743,
        "committees": [
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "מאיר שטרית",
        "roles": "יו\"ר ועדת  המדע  והטכנולוגיה",
        "committee_meetings_per_month": 4.4800000000000004,
        "url": "/member/119/%D7%9E%D7%90%D7%99%D7%A8-%D7%A9%D7%98%D7%A8%D7%99%D7%AA/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 12,
        "average_weekly_presence": 14.6,
        "votes_per_month": 33.5,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 830,
        "img_url": "http://www.knesset.gov.il/mk/images/members/shitrit_meir-s.jpg",
        "id": 119,
        "bills_approved": 0
    },
    {
        "discipline": 97.799999999999997,
        "bills_proposed": 24,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "מגלי והבה",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 7.6699999999999999,
        "url": "/member/727/%D7%9E%D7%92%D7%9C%D7%99-%D7%95%D7%94%D7%91%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 14.9,
        "votes_per_month": 45.5,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 1128,
        "img_url": "http://www.knesset.gov.il/mk/images/members/whbee_majalli-s.jpg",
        "id": 727,
        "bills_approved": 3
    },
    {
        "discipline": 99.5,
        "bills_proposed": 64,
        "service_time": 743,
        "committees": [
            [
                "ועדה מיוחדת למאבק בנגע הסמים",
                "/committee/16/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "מוחמד ברכה",
        "roles": "יו\"ר ועדה מיוחדת למאבק בנגע הסמים",
        "committee_meetings_per_month": 3.96,
        "url": "/member/197/%D7%9E%D7%95%D7%97%D7%9E%D7%93-%D7%91%D7%A8%D7%9B%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 7.9000000000000004,
        "votes_per_month": 22.399999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "חד\"ש",
        "votes_count": 555,
        "img_url": "http://www.knesset.gov.il/mk/images/members/baraka_mohamed-s.jpg",
        "id": 197,
        "bills_approved": 1
    },
    {
        "discipline": 98.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "מיכאל איתן",
        "roles": "שר המופקד על שיפור השירות הממשלתי לציבור",
        "committee_meetings_per_month": 0.65000000000000002,
        "url": "/member/9/%D7%9E%D7%99%D7%9B%D7%90%D7%9C-%D7%90%D7%99%D7%AA%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 19.800000000000001,
        "votes_per_month": 41.200000000000003,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1020,
        "img_url": "http://www.knesset.gov.il/mk/images/members/eitan_michael-s.jpg",
        "id": 9,
        "bills_approved": 0
    },
    {
        "discipline": 99.200000000000003,
        "bills_proposed": 14,
        "service_time": 743,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "מיכאל בן-ארי",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 6.0199999999999996,
        "url": "/member/841/%D7%9E%D7%99%D7%9B%D7%90%D7%9C-%D7%91%D7%9F-%D7%90%D7%A8%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 23.0,
        "votes_per_month": 29.5,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "האיחוד הלאומי",
        "votes_count": 730,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Ben_Ari_Michael-s.jpg",
        "id": 841,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 100,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "מירי רגב",
        "roles": "חברת כנסת בקואליציה",
        "committee_meetings_per_month": 8.1600000000000001,
        "url": "/member/831/%D7%9E%D7%99%D7%A8%D7%99-%D7%A8%D7%92%D7%91/",
        "gender": "נקבה",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 16,
        "average_weekly_presence": 18.899999999999999,
        "votes_per_month": 36.700000000000003,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 909,
        "img_url": "http://www.knesset.gov.il/mk/images/members/regev_miri-s.jpg",
        "id": 831,
        "bills_approved": 2
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 23,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "מנחם אליעזר מוזס",
        "roles": "סגן שר החינוך",
        "committee_meetings_per_month": 6.1399999999999997,
        "url": "/member/839/%D7%9E%D7%A0%D7%97%D7%9D-%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8-%D7%9E%D7%95%D7%96%D7%A1/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 19.5,
        "votes_per_month": 35.299999999999997,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "יהדות התורה",
        "votes_count": 874,
        "img_url": "http://www.knesset.gov.il/mk/images/members/moses_menachem-s.jpg",
        "id": 839,
        "bills_approved": 0
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 13,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "מסעוד גנאים",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 5.5700000000000003,
        "url": "/member/844/%D7%9E%D7%A1%D7%A2%D7%95%D7%93-%D7%92%D7%A0%D7%90%D7%99%D7%9D/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 3,
        "average_weekly_presence": 14.9,
        "votes_per_month": 31.800000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "רע\"מ-תע\"ל",
        "votes_count": 787,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Ganaim_Masud-s.jpg",
        "id": 844,
        "bills_approved": 0
    },
    {
        "discipline": 99.0,
        "bills_proposed": 77,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה מיוחדת לפניות הציבור",
                "/committee/14/"
            ]
        ],
        "name": "מרינה סולודקין",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 10.130000000000001,
        "url": "/member/91/%D7%9E%D7%A8%D7%99%D7%A0%D7%94-%D7%A1%D7%95%D7%9C%D7%95%D7%93%D7%A7%D7%99%D7%9F/",
        "gender": "נקבה",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 11,
        "average_weekly_presence": 18.5,
        "votes_per_month": 31.399999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 778,
        "img_url": "http://www.knesset.gov.il/mk/images/members/solodkin_marina-s.jpg",
        "id": 91,
        "bills_approved": 3
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 105,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "משה גפני",
        "roles": "יו\"ר ועדת הכספים",
        "committee_meetings_per_month": 23.300000000000001,
        "url": "/member/35/%D7%9E%D7%A9%D7%94-%D7%92%D7%A4%D7%A0%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 13,
        "bills_passed_pre_vote": 24,
        "average_weekly_presence": 21.100000000000001,
        "votes_per_month": 41.5,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "יהדות התורה",
        "votes_count": 1029,
        "img_url": "http://www.knesset.gov.il/mk/images/members/gafni_moshe-s.jpg",
        "id": 35,
        "bills_approved": 7
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [],
        "name": "משה יעלון",
        "roles": "משנה לראש הממשלה, שר לנושאים אסטרטגיים",
        "committee_meetings_per_month": 0.0,
        "url": "/member/823/%D7%9E%D7%A9%D7%94-%D7%99%D7%A2%D7%9C%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.7999999999999998,
        "votes_per_month": 44.600000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1104,
        "img_url": "http://www.knesset.gov.il/mk/images/members/yaalon_moshe-s.jpg",
        "id": 823,
        "bills_approved": 0
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "משה כחלון",
        "roles": "שר התקשורת",
        "committee_meetings_per_month": 1.3700000000000001,
        "url": "/member/731/%D7%9E%D7%A9%D7%94-%D7%9B%D7%97%D7%9C%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 9.5,
        "votes_per_month": 32.0,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 792,
        "img_url": "http://www.knesset.gov.il/mk/images/members/cahlon_moshe-s.jpg",
        "id": 731,
        "bills_approved": 0
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 65,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "משה מוץ מטלון",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 6.0999999999999996,
        "url": "/member/838/%D7%9E%D7%A9%D7%94-%D7%9E%D7%95%D7%A5-%D7%9E%D7%98%D7%9C%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 12,
        "average_weekly_presence": 15.300000000000001,
        "votes_per_month": 47.200000000000003,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1170,
        "img_url": "http://www.knesset.gov.il/mk/images/members/matalon_moshe_mutz-s.jpg",
        "id": 838,
        "bills_approved": 1
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "משולם נהרי",
        "roles": "שר",
        "committee_meetings_per_month": 0.16,
        "url": "/member/222/%D7%9E%D7%A9%D7%95%D7%9C%D7%9D-%D7%A0%D7%94%D7%A8%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.4000000000000004,
        "votes_per_month": 42.799999999999997,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1061,
        "img_url": "http://www.knesset.gov.il/mk/images/members/nahari_meshulam-s.jpg",
        "id": 222,
        "bills_approved": 0
    },
    {
        "discipline": 97.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "מתן וילנאי",
        "roles": "סגן שר הביטחון",
        "committee_meetings_per_month": 0.12,
        "url": "/member/204/%D7%9E%D7%AA%D7%9F-%D7%95%D7%99%D7%9C%D7%A0%D7%90%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.0999999999999996,
        "votes_per_month": 33.899999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 840,
        "img_url": "http://www.knesset.gov.il/mk/images/members/vilnai_matan-s.jpg",
        "id": 204,
        "bills_approved": 0
    },
    {
        "discipline": 99.299999999999997,
        "bills_proposed": 40,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "נחמן שי",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 8.0299999999999994,
        "url": "/member/818/%D7%A0%D7%97%D7%9E%D7%9F-%D7%A9%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 23.300000000000001,
        "votes_per_month": 35.0,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 868,
        "img_url": "http://www.knesset.gov.il/mk/images/members/nachman_shai-s.jpg",
        "id": 818,
        "bills_approved": 1
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 3,
        "service_time": 120,
        "committees": [],
        "name": "נינו אבסדזה",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 0.0,
        "url": "/member/850/%D7%A0%D7%99%D7%A0%D7%95-%D7%90%D7%91%D7%A1%D7%93%D7%96%D7%94/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 19.0,
        "votes_per_month": 85.5,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 342,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Nino_Abesadze-s.jpg",
        "id": 850,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 103,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "ניצן הורוביץ",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 7.9100000000000001,
        "url": "/member/843/%D7%A0%D7%99%D7%A6%D7%9F-%D7%94%D7%95%D7%A8%D7%95%D7%91%D7%99%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 13,
        "average_weekly_presence": 15.800000000000001,
        "votes_per_month": 34.0,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "מרצ",
        "votes_count": 841,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Horowitz_Nitzan-s.jpg",
        "id": 843,
        "bills_approved": 2
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 45,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "נסים זאב",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 7.9900000000000002,
        "url": "/member/206/%D7%A0%D7%A1%D7%99%D7%9D-%D7%96%D7%90%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 5,
        "average_weekly_presence": 19.300000000000001,
        "votes_per_month": 76.400000000000006,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "ש\"ס",
        "votes_count": 1892,
        "img_url": "http://www.knesset.gov.il/mk/images/members/zeev_nissim-s.jpg",
        "id": 206,
        "bills_approved": 2
    },
    {
        "discipline": 99.5,
        "bills_proposed": 34,
        "service_time": 743,
        "committees": [
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "סופה לנדבר",
        "roles": "שרה לקליטת עלייה",
        "committee_meetings_per_month": 0.77000000000000002,
        "url": "/member/78/%D7%A1%D7%95%D7%A4%D7%94-%D7%9C%D7%A0%D7%93%D7%91%D7%A8/",
        "gender": "נקבה",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 5,
        "average_weekly_presence": 5.2000000000000002,
        "votes_per_month": 31.899999999999999,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 791,
        "img_url": "http://www.knesset.gov.il/mk/images/members/landver_sofa-s.jpg",
        "id": 78,
        "bills_approved": 2
    },
    {
        "discipline": 100.0,
        "bills_proposed": 7,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "סטס מיסז`ניקוב",
        "roles": "שר התיירות",
        "committee_meetings_per_month": 0.080000000000000002,
        "url": "/member/786/%D7%A1%D7%98%D7%A1-%D7%9E%D7%99%D7%A1%D7%96%D7%A0%D7%99%D7%A7%D7%95%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 1,
        "average_weekly_presence": 4.7000000000000002,
        "votes_per_month": 22.800000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 564,
        "img_url": "http://www.knesset.gov.il/mk/images/members/miznikov_stas-s.jpg",
        "id": 786,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "סילבן שלום",
        "roles": "משנה לראש הממשלה, שר לשיתוף פעולה איזורי, שר לפיתוח הנגב והגליל",
        "committee_meetings_per_month": 0.12,
        "url": "/member/122/%D7%A1%D7%99%D7%9C%D7%91%D7%9F-%D7%A9%D7%9C%D7%95%D7%9D/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 5.0999999999999996,
        "votes_per_month": 17.600000000000001,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 436,
        "img_url": "http://www.knesset.gov.il/mk/images/members/shalom_silvan-s.jpg",
        "id": 122,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 17,
        "service_time": 743,
        "committees": [
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "סעיד נפאע",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 1.45,
        "url": "/member/807/%D7%A1%D7%A2%D7%99%D7%93-%D7%A0%D7%A4%D7%90%D7%A2/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 12.5,
        "votes_per_month": 12.4,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "בל\"ד",
        "votes_count": 308,
        "img_url": "http://www.knesset.gov.il/mk/images/members/naffa_said-s.jpg",
        "id": 807,
        "bills_approved": 0
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "עוזי לנדאו",
        "roles": "שר התשתיות הלאומיות",
        "committee_meetings_per_month": 0.20000000000000001,
        "url": "/member/77/%D7%A2%D7%95%D7%96%D7%99-%D7%9C%D7%A0%D7%93%D7%90%D7%95/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.0999999999999996,
        "votes_per_month": 32.799999999999997,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 813,
        "img_url": "http://www.knesset.gov.il/mk/images/members/landau_uzi-s.jpg",
        "id": 77,
        "bills_approved": 0
    },
    {
        "discipline": 98.299999999999997,
        "bills_proposed": 8,
        "service_time": 423,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ]
        ],
        "name": "עינת וילף",
        "roles": "חברת כנסת בקואליציה",
        "committee_meetings_per_month": 3.8300000000000001,
        "url": "/member/849/%D7%A2%D7%99%D7%A0%D7%AA-%D7%95%D7%99%D7%9C%D7%A3/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 9.0999999999999996,
        "votes_per_month": 29.600000000000001,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 417,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Einat_Wilf-s.jpg",
        "id": 849,
        "bills_approved": 0
    },
    {
        "discipline": 90.299999999999997,
        "bills_proposed": 36,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "עמיר פרץ",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 4.8499999999999996,
        "url": "/member/105/%D7%A2%D7%9E%D7%99%D7%A8-%D7%A4%D7%A8%D7%A5/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 14.300000000000001,
        "votes_per_month": 5.9000000000000004,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 145,
        "img_url": "http://www.knesset.gov.il/mk/images/members/peretz_amir-s.jpg",
        "id": 105,
        "bills_approved": 0
    },
    {
        "discipline": 100.0,
        "bills_proposed": 33,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדה מיוחדת למאבק בנגע הסמים",
                "/committee/16/"
            ]
        ],
        "name": "עפו אגבאריה",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 5.9400000000000004,
        "url": "/member/842/%D7%A2%D7%A4%D7%95-%D7%90%D7%92%D7%91%D7%90%D7%A8%D7%99%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 4,
        "average_weekly_presence": 12.1,
        "votes_per_month": 30.399999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "חד\"ש",
        "votes_count": 754,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Agbaria_Afou-s.jpg",
        "id": 842,
        "bills_approved": 0
    },
    {
        "discipline": 99.0,
        "bills_proposed": 41,
        "service_time": 743,
        "committees": [
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "עתניאל שנלר",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 3.27,
        "url": "/member/776/%D7%A2%D7%AA%D7%A0%D7%99%D7%90%D7%9C-%D7%A9%D7%A0%D7%9C%D7%A8/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 30.5,
        "votes_per_month": 35.600000000000001,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 882,
        "img_url": "http://www.knesset.gov.il/mk/images/members/schneller_otniel-s.jpg",
        "id": 776,
        "bills_approved": 3
    },
    {
        "discipline": 100.0,
        "bills_proposed": 47,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ]
        ],
        "name": "פאינה (פניה) קירשנבאום",
        "roles": "חברת כנסת בקואליציה",
        "committee_meetings_per_month": 14.9,
        "url": "/member/835/%D7%A4%D7%90%D7%99%D7%A0%D7%94-%D7%A4%D7%A0%D7%99%D7%94-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%91%D7%90%D7%95%D7%9D/",
        "gender": "נקבה",
        "bills_passed_first_vote": 6,
        "bills_passed_pre_vote": 10,
        "average_weekly_presence": 16.199999999999999,
        "votes_per_month": 37.0,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 916,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Kirshenbaum_Faina-s.jpg",
        "id": 835,
        "bills_approved": 1
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 13,
        "service_time": 623,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "צחי הנגבי",
        "roles": "יו\"ר ועדת החוץ והבטחון",
        "committee_meetings_per_month": 0.53000000000000003,
        "url": "/member/45/%D7%A6%D7%97%D7%99-%D7%94%D7%A0%D7%92%D7%91%D7%99/",
        "gender": "זכר",
        "bills_passed_first_vote": 2,
        "bills_passed_pre_vote": 6,
        "average_weekly_presence": 14.199999999999999,
        "votes_per_month": 7.9000000000000004,
        "average_weekly_presence_rank": 3,
        "is_current": false,
        "party": "קדימה",
        "votes_count": 165,
        "img_url": "http://www.knesset.gov.il/mk/images/members/hanegbi_tzahi-s.jpg",
        "id": 45,
        "bills_approved": 2
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 85,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ]
        ],
        "name": "ציון פיניאן",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 25.440000000000001,
        "url": "/member/827/%D7%A6%D7%99%D7%95%D7%9F-%D7%A4%D7%99%D7%A0%D7%99%D7%90%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 22.0,
        "votes_per_month": 58.5,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1449,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Pinyan_Zion-s.jpg",
        "id": 827,
        "bills_approved": 2
    },
    {
        "discipline": 99.900000000000006,
        "bills_proposed": 64,
        "service_time": 743,
        "committees": [
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "ציפי חוטובלי",
        "roles": "יו\"ר ועדה לקידום מעמד האישה",
        "committee_meetings_per_month": 5.4900000000000002,
        "url": "/member/825/%D7%A6%D7%99%D7%A4%D7%99-%D7%97%D7%95%D7%98%D7%95%D7%91%D7%9C%D7%99/",
        "gender": "נקבה",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 9,
        "average_weekly_presence": 18.800000000000001,
        "votes_per_month": 42.0,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1040,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Hotovely_Tzipi-s.jpg",
        "id": 825,
        "bills_approved": 1
    },
    {
        "discipline": 99.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "ציפי לבני",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 0.16,
        "url": "/member/213/%D7%A6%D7%99%D7%A4%D7%99-%D7%9C%D7%91%D7%A0%D7%99/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 12.800000000000001,
        "votes_per_month": 22.199999999999999,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 550,
        "img_url": "http://www.knesset.gov.il/mk/images/members/livnee_zipi-s.jpg",
        "id": 213,
        "bills_approved": 0
    },
    {
        "discipline": 99.5,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "ראובן ריבלין",
        "roles": "יו\"ר ועדת הפירושים",
        "committee_meetings_per_month": 2.2200000000000002,
        "url": "/member/114/%D7%A8%D7%90%D7%95%D7%91%D7%9F-%D7%A8%D7%99%D7%91%D7%9C%D7%99%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 27.5,
        "votes_per_month": 55.0,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "הליכוד",
        "votes_count": 1363,
        "img_url": "http://www.knesset.gov.il/mk/images/members/rivlin_rubi-s.jpg",
        "id": 114,
        "bills_approved": 0
    },
    {
        "discipline": 99.0,
        "bills_proposed": 8,
        "service_time": 330,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ]
        ],
        "name": "ראלב מג`אדלה",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 9.2699999999999996,
        "url": "/member/758/%D7%A8%D7%90%D7%9C%D7%91-%D7%9E%D7%92%D7%90%D7%93%D7%9C%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 19.199999999999999,
        "votes_per_month": 47.299999999999997,
        "average_weekly_presence_rank": 5,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 520,
        "img_url": "http://www.knesset.gov.il/mk/images/members/majadele_ralev-s.jpg",
        "id": 758,
        "bills_approved": 1
    },
    {
        "discipline": 99.799999999999997,
        "bills_proposed": 115,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "רוברט אילטוב",
        "roles": "חבר כנסת בקואליציה",
        "committee_meetings_per_month": 7.4299999999999997,
        "url": "/member/793/%D7%A8%D7%95%D7%91%D7%A8%D7%98-%D7%90%D7%99%D7%9C%D7%98%D7%95%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 11,
        "bills_passed_pre_vote": 31,
        "average_weekly_presence": 15.1,
        "votes_per_month": 53.0,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "ישראל ביתנו",
        "votes_count": 1313,
        "img_url": "http://www.knesset.gov.il/mk/images/members/ilatov_robert-s.jpg",
        "id": 793,
        "bills_approved": 5
    },
    {
        "discipline": 99.599999999999994,
        "bills_proposed": 58,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת  המדע  והטכנולוגיה",
                "/committee/8/"
            ]
        ],
        "name": "רוברט טיבייב",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 7.4699999999999998,
        "url": "/member/819/%D7%A8%D7%95%D7%91%D7%A8%D7%98-%D7%98%D7%99%D7%91%D7%99%D7%99%D7%91/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 7,
        "average_weekly_presence": 15.199999999999999,
        "votes_per_month": 34.399999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 852,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Tiviaev_Robert-s.jpg",
        "id": 819,
        "bills_approved": 0
    },
    {
        "discipline": 99.700000000000003,
        "bills_proposed": 53,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "רוחמה אברהם בלילא",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 1.3700000000000001,
        "url": "/member/724/%D7%A8%D7%95%D7%97%D7%9E%D7%94-%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%91%D7%9C%D7%99%D7%9C%D7%90/",
        "gender": "נקבה",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 13.0,
        "votes_per_month": 31.5,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 781,
        "img_url": "http://www.knesset.gov.il/mk/images/members/avraham_ruhama-s.jpg",
        "id": 724,
        "bills_approved": 0
    },
    {
        "discipline": 98.5,
        "bills_proposed": 12,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ]
        ],
        "name": "רוני בר-און",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 0.44,
        "url": "/member/735/%D7%A8%D7%95%D7%A0%D7%99-%D7%91%D7%A8-%D7%90%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 1,
        "bills_passed_pre_vote": 2,
        "average_weekly_presence": 14.699999999999999,
        "votes_per_month": 24.600000000000001,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 610,
        "img_url": "http://www.knesset.gov.il/mk/images/members/baron_roni-s.jpg",
        "id": 735,
        "bills_approved": 1
    },
    {
        "discipline": 99.099999999999994,
        "bills_proposed": 96,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת החינוך, התרבות והספורט",
                "/committee/6/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ]
        ],
        "name": "רונית תירוש",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 11.18,
        "url": "/member/774/%D7%A8%D7%95%D7%A0%D7%99%D7%AA-%D7%AA%D7%99%D7%A8%D7%95%D7%A9/",
        "gender": "נקבה",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 18,
        "average_weekly_presence": 15.0,
        "votes_per_month": 31.399999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 778,
        "img_url": "http://www.knesset.gov.il/mk/images/members/tirosh_ronit-s.jpg",
        "id": 774,
        "bills_approved": 2
    },
    {
        "discipline": 99.0,
        "bills_proposed": 40,
        "service_time": 743,
        "committees": [
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ]
        ],
        "name": "רחל אדטו",
        "roles": "חברת כנסת באופוזיציה",
        "committee_meetings_per_month": 15.380000000000001,
        "url": "/member/820/%D7%A8%D7%97%D7%9C-%D7%90%D7%93%D7%98%D7%95/",
        "gender": "נקבה",
        "bills_passed_first_vote": 3,
        "bills_passed_pre_vote": 7,
        "average_weekly_presence": 17.899999999999999,
        "votes_per_month": 41.899999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 1038,
        "img_url": "http://www.knesset.gov.il/mk/images/members/Adatto_Rachel-s.jpg",
        "id": 820,
        "bills_approved": 2
    },
    {
        "discipline": 99.400000000000006,
        "bills_proposed": 11,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "שאול מופז",
        "roles": "יו\"ר ועדת החוץ והבטחון",
        "committee_meetings_per_month": 0.080000000000000002,
        "url": "/member/720/%D7%A9%D7%90%D7%95%D7%9C-%D7%9E%D7%95%D7%A4%D7%96/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 10.1,
        "votes_per_month": 13.9,
        "average_weekly_presence_rank": 2,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 345,
        "img_url": "http://www.knesset.gov.il/mk/images/members/mofaz_shaul-s.jpg",
        "id": 720,
        "bills_approved": 0
    },
    {
        "discipline": 98.400000000000006,
        "bills_proposed": 61,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ],
            [
                "ועדה מיוחדת לבעיית העובדים הזרים",
                "/committee/12/"
            ]
        ],
        "name": "שי חרמש",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 12.68,
        "url": "/member/804/%D7%A9%D7%99-%D7%97%D7%A8%D7%9E%D7%A9/",
        "gender": "זכר",
        "bills_passed_first_vote": 5,
        "bills_passed_pre_vote": 12,
        "average_weekly_presence": 13.5,
        "votes_per_month": 25.199999999999999,
        "average_weekly_presence_rank": 3,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 624,
        "img_url": "http://www.knesset.gov.il/mk/images/members/hermesh_shai-s.jpg",
        "id": 804,
        "bills_approved": 3
    },
    {
        "discipline": 97.0,
        "bills_proposed": 0,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדה לענייני ביקורת המדינה",
                "/committee/7/"
            ],
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ]
        ],
        "name": "שלום שמחון",
        "roles": "שר החקלאות ופיתוח הכפר",
        "committee_meetings_per_month": 0.44,
        "url": "/member/123/%D7%A9%D7%9C%D7%95%D7%9D-%D7%A9%D7%9E%D7%97%D7%95%D7%9F/",
        "gender": "זכר",
        "bills_passed_first_vote": 0,
        "bills_passed_pre_vote": 0,
        "average_weekly_presence": 7.2999999999999998,
        "votes_per_month": 32.0,
        "average_weekly_presence_rank": 1,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 792,
        "img_url": "http://www.knesset.gov.il/mk/images/members/simhon_shalom-s.jpg",
        "id": 123,
        "bills_approved": 0
    },
    {
        "discipline": 92.900000000000006,
        "bills_proposed": 128,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת העבודה, הרווחה והבריאות",
                "/committee/10/"
            ],
            [
                "ועדת הכלכלה",
                "/committee/2/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת הפנים והגנת הסביבה",
                "/committee/4/"
            ]
        ],
        "name": "שלי יחימוביץ",
        "roles": "יו\"ר ועדת האתיקה",
        "committee_meetings_per_month": 17.77,
        "url": "/member/782/%D7%A9%D7%9C%D7%99-%D7%99%D7%97%D7%99%D7%9E%D7%95%D7%91%D7%99%D7%A5/",
        "gender": "נקבה",
        "bills_passed_first_vote": 13,
        "bills_passed_pre_vote": 26,
        "average_weekly_presence": 18.300000000000001,
        "votes_per_month": 27.199999999999999,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "העבודה",
        "votes_count": 673,
        "img_url": "http://www.knesset.gov.il/mk/images/members/yacimovich_shelly-s.jpg",
        "id": 782,
        "bills_approved": 6
    },
    {
        "discipline": 98.799999999999997,
        "bills_proposed": 103,
        "service_time": 743,
        "committees": [
            [
                "ועדת הכספים",
                "/committee/9/"
            ],
            [
                "ועדת הכנסת",
                "/committee/1/"
            ],
            [
                "ועדת העלייה, הקליטה והתפוצות",
                "/committee/3/"
            ],
            [
                "ועדת החוקה, חוק ומשפט",
                "/committee/5/"
            ],
            [
                "ועדה לקידום מעמד האישה",
                "/committee/11/"
            ]
        ],
        "name": "שלמה (נגוסה) מולה",
        "roles": "חבר כנסת באופוזיציה",
        "committee_meetings_per_month": 14.449999999999999,
        "url": "/member/810/%D7%A9%D7%9C%D7%9E%D7%94-%D7%A0%D7%92%D7%95%D7%A1%D7%94-%D7%9E%D7%95%D7%9C%D7%94/",
        "gender": "זכר",
        "bills_passed_first_vote": 4,
        "bills_passed_pre_vote": 8,
        "average_weekly_presence": 18.600000000000001,
        "votes_per_month": 44.299999999999997,
        "average_weekly_presence_rank": 4,
        "is_current": true,
        "party": "קדימה",
        "votes_count": 1097,
        "img_url": "http://www.knesset.gov.il/mk/images/members/molla_shlomo-s.jpg",
        "id": 810,
        "bills_approved": 3
    }
];
*/