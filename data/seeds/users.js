exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          balance: 1954098,
          first_name: "Charyl",
          last_name: "Beadles",
          email: "cbeadles0@mtv.com",
          password: "yNsVoJJgu",
          phone: "386-925-9132",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4611528,
          first_name: "Reynard",
          last_name: "Kolodziej",
          email: "rkolodziej1@istockphoto.com",
          password: "U8Ar2xga8Jo",
          phone: "754-027-0054",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4120477,
          first_name: "Bondon",
          last_name: "Keme",
          email: "bkeme2@mit.edu",
          password: "ZIlmrKsl5Vu",
          phone: "282-933-2687",
          image_url: "http://dummyimage.com/100x100.jpg/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2147867,
          first_name: "Langsdon",
          last_name: "Garlee",
          email: "lgarlee3@gravatar.com",
          password: "dFsXatI8kOKv",
          phone: "288-894-7426",
          image_url: "http://dummyimage.com/100x100.png/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1564228,
          first_name: "Josi",
          last_name: "Henrion",
          email: "jhenrion4@qq.com",
          password: "0MqTkqklR",
          phone: "374-002-1679",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4796558,
          first_name: "Gage",
          last_name: "Shute",
          email: "gshute5@godaddy.com",
          password: "7Kg0it5vtD",
          phone: "542-599-7505",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2474749,
          first_name: "Antone",
          last_name: "Westwater",
          email: "awestwater6@ning.com",
          password: "HA4zdzlpcfa",
          phone: "575-358-1267",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 625490,
          first_name: "Ives",
          last_name: "Clibbery",
          email: "iclibbery7@bloglovin.com",
          password: "03J5y24y6",
          phone: "034-399-5220",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3278775,
          first_name: "Annadiane",
          last_name: "MacCaughen",
          email: "amaccaughen8@yellowpages.com",
          password: "F88oKWYQx",
          phone: "173-501-8882",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3672474,
          first_name: "Camille",
          last_name: "Grishankov",
          email: "cgrishankov9@utexas.edu",
          password: "EHux4Z7R",
          phone: "088-290-4472",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2231712,
          first_name: "Findley",
          last_name: "Wortt",
          email: "fwortta@nsw.gov.au",
          password: "dTgnYxTkEFR",
          phone: "282-453-8759",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1246332,
          first_name: "Gustavo",
          last_name: "Riggott",
          email: "griggottb@ftc.gov",
          password: "cY2g1EKjy9",
          phone: "225-224-6316",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3409425,
          first_name: "Jayson",
          last_name: "Colleford",
          email: "jcollefordc@gmpg.org",
          password: "o7qIxpQlq8Q",
          phone: "311-019-1861",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4199017,
          first_name: "Melinde",
          last_name: "Leeke",
          email: "mleeked@jugem.jp",
          password: "bByxUkCsP0",
          phone: "366-337-8688",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2771034,
          first_name: "Xylina",
          last_name: "Pescod",
          email: "xpescode@simplemachines.org",
          password: "ZTVeW7EhB",
          phone: "504-695-6314",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 408572,
          first_name: "Danell",
          last_name: "Wheeldon",
          email: "dwheeldonf@illinois.edu",
          password: "hZeKgfHI",
          phone: "968-381-6238",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 145627,
          first_name: "Kania",
          last_name: "Prendeguest",
          email: "kprendeguestg@theguardian.com",
          password: "nBIQiwEKG",
          phone: "802-671-5943",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2058246,
          first_name: "Deedee",
          last_name: "Radnedge",
          email: "dradnedgeh@disqus.com",
          password: "xgN5rJp",
          phone: "005-402-0331",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1530954,
          first_name: "Ynez",
          last_name: "Pardoe",
          email: "ypardoei@1und1.de",
          password: "IgvNQ5V",
          phone: "669-550-9986",
          image_url: "http://dummyimage.com/100x100.jpg/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4742632,
          first_name: "Marline",
          last_name: "Baitey",
          email: "mbaiteyj@exblog.jp",
          password: "fn5PXPCUL",
          phone: "184-994-2395",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1349610,
          first_name: "Carlen",
          last_name: "Kellegher",
          email: "ckellegherk@gravatar.com",
          password: "VWP4MXw0z",
          phone: "597-520-3223",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2021026,
          first_name: "Kaylyn",
          last_name: "Matthewman",
          email: "kmatthewmanl@zimbio.com",
          password: "rsCnhVuL",
          phone: "516-417-2832",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4702686,
          first_name: "Irene",
          last_name: "Hadingham",
          email: "ihadinghamm@utexas.edu",
          password: "JTnht0",
          phone: "857-567-5709",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3692078,
          first_name: "Myrtice",
          last_name: "Pesticcio",
          email: "mpesticcion@phpbb.com",
          password: "5ZRWV5p",
          phone: "661-124-0828",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4390710,
          first_name: "Gloriane",
          last_name: "Clyma",
          email: "gclymao@independent.co.uk",
          password: "Nk3VS2",
          phone: "772-519-4088",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4509623,
          first_name: "Bonni",
          last_name: "Asgodby",
          email: "basgodbyp@hud.gov",
          password: "B5Rdcx",
          phone: "026-599-1003",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3432387,
          first_name: "Amanda",
          last_name: "California",
          email: "acaliforniaq@bizjournals.com",
          password: "8bPXsPNa",
          phone: "275-309-3955",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2613320,
          first_name: "Ellen",
          last_name: "Keig",
          email: "ekeigr@addthis.com",
          password: "LvlRjy0",
          phone: "809-113-5961",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2410537,
          first_name: "Aubry",
          last_name: "Althorpe",
          email: "aalthorpes@engadget.com",
          password: "oiktDtCqez03",
          phone: "784-948-0092",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4750016,
          first_name: "Lolita",
          last_name: "Ewbanke",
          email: "lewbanket@linkedin.com",
          password: "WKLjXlF8",
          phone: "225-728-3214",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 663102,
          first_name: "Anastassia",
          last_name: "McNally",
          email: "amcnallyu@yandex.ru",
          password: "IT5mEq96",
          phone: "165-847-6874",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4462753,
          first_name: "Neely",
          last_name: "Plant",
          email: "nplantv@pcworld.com",
          password: "1yaFyq4A9Ey",
          phone: "912-437-2262",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4542704,
          first_name: "Joli",
          last_name: "Chaundy",
          email: "jchaundyw@mlb.com",
          password: "nazvQcGM",
          phone: "164-221-1533",
          image_url: "http://dummyimage.com/100x100.png/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 789672,
          first_name: "Arabel",
          last_name: "Athersmith",
          email: "aathersmithx@printfriendly.com",
          password: "JedhxVRU3MSP",
          phone: "441-724-5206",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3633230,
          first_name: "Joellen",
          last_name: "Castillou",
          email: "jcastillouy@wikispaces.com",
          password: "SveOjC1JTAO",
          phone: "609-313-5270",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2928811,
          first_name: "Moss",
          last_name: "Gration",
          email: "mgrationz@dell.com",
          password: "fiizEl",
          phone: "611-865-6725",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3141114,
          first_name: "Brianna",
          last_name: "Ingle",
          email: "bingle10@dyndns.org",
          password: "lCYowdg",
          phone: "023-011-5495",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4471638,
          first_name: "Abby",
          last_name: "McSkin",
          email: "amcskin11@forbes.com",
          password: "LYDjK4Br5tA",
          phone: "010-429-3870",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4468430,
          first_name: "Timothee",
          last_name: "Philbrick",
          email: "tphilbrick12@cargocollective.com",
          password: "G5FLu3",
          phone: "974-763-9570",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2465009,
          first_name: "Marguerite",
          last_name: "Roly",
          email: "mroly13@newsvine.com",
          password: "yySRHBSU",
          phone: "510-764-2579",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2038049,
          first_name: "Lorelle",
          last_name: "Pavlitschek",
          email: "lpavlitschek14@howstuffworks.com",
          password: "uPQUByYNtC",
          phone: "108-056-9338",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4432262,
          first_name: "Pammy",
          last_name: "Forcer",
          email: "pforcer15@webeden.co.uk",
          password: "l6yc7uCgM",
          phone: "814-201-1205",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3586929,
          first_name: "Kristoforo",
          last_name: "Fleetham",
          email: "kfleetham16@canalblog.com",
          password: "c38tXQof8Gm",
          phone: "348-300-4151",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1764382,
          first_name: "Krystalle",
          last_name: "Toffler",
          email: "ktoffler17@nih.gov",
          password: "tsqJdlqU4g",
          phone: "196-461-4966",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2450000,
          first_name: "Ericha",
          last_name: "Coker",
          email: "ecoker18@networksolutions.com",
          password: "fYf1di0cjTyZ",
          phone: "687-105-6819",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2476471,
          first_name: "Horacio",
          last_name: "Kendrew",
          email: "hkendrew19@amazon.com",
          password: "7lbzYAO58A",
          phone: "631-415-1315",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4531314,
          first_name: "Neala",
          last_name: "Meenehan",
          email: "nmeenehan1a@oracle.com",
          password: "CnYiOemmnQEv",
          phone: "259-251-7974",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4724195,
          first_name: "Amelia",
          last_name: "Burgh",
          email: "aburgh1b@trellian.com",
          password: "tr0aXwrSul",
          phone: "560-052-0179",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1134827,
          first_name: "Sharona",
          last_name: "Hartell",
          email: "shartell1c@ow.ly",
          password: "jdlJUjWPVFrb",
          phone: "326-333-6385",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4434247,
          first_name: "Brig",
          last_name: "Muncaster",
          email: "bmuncaster1d@linkedin.com",
          password: "pgJ1DZFbw9z",
          phone: "311-488-8849",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4813066,
          first_name: "Ernie",
          last_name: "Iveagh",
          email: "eiveagh1e@samsung.com",
          password: "vovXpAdOe",
          phone: "407-338-5542",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2462392,
          first_name: "Elladine",
          last_name: "Cohen",
          email: "ecohen1f@is.gd",
          password: "eGGa5HRngwSg",
          phone: "674-135-7153",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4688720,
          first_name: "Cody",
          last_name: "Monger",
          email: "cmonger1g@phoca.cz",
          password: "0Cu2ejk91WKo",
          phone: "233-628-6274",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2030214,
          first_name: "Travus",
          last_name: "Reynault",
          email: "treynault1h@technorati.com",
          password: "7Ehy2iOZgy",
          phone: "113-151-7162",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 377296,
          first_name: "Laughton",
          last_name: "Tefft",
          email: "ltefft1i@mozilla.org",
          password: "GiUrMEPbt",
          phone: "636-521-5732",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 552407,
          first_name: "Kaitlyn",
          last_name: "McFater",
          email: "kmcfater1j@digg.com",
          password: "NKgyPPfn7aLR",
          phone: "061-778-6784",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4522371,
          first_name: "Buffy",
          last_name: "Alfuso",
          email: "balfuso1k@vk.com",
          password: "bqvT2B",
          phone: "181-810-8264",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 416895,
          first_name: "Isacco",
          last_name: "Mixture",
          email: "imixture1l@boston.com",
          password: "XfF8UXX",
          phone: "063-587-9236",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 226235,
          first_name: "Casper",
          last_name: "Houtby",
          email: "choutby1m@domainmarket.com",
          password: "Uhfe31BlW6",
          phone: "665-961-2172",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1602910,
          first_name: "Roxanne",
          last_name: "Beidebeke",
          email: "rbeidebeke1n@devhub.com",
          password: "FNwNnMOZ9",
          phone: "194-411-8905",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 634705,
          first_name: "Gratia",
          last_name: "Vickers",
          email: "gvickers1o@google.nl",
          password: "5R05N2weWDHM",
          phone: "573-437-4809",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 214899,
          first_name: "Adorne",
          last_name: "De Zamudio",
          email: "adezamudio1p@qq.com",
          password: "NPDCO8x",
          phone: "138-207-5773",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2431642,
          first_name: "Jammal",
          last_name: "Castri",
          email: "jcastri1q@dmoz.org",
          password: "fp9rMjbQd2B1",
          phone: "216-650-6418",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3763287,
          first_name: "Tarrah",
          last_name: "Franzolini",
          email: "tfranzolini1r@answers.com",
          password: "gSMiYIH",
          phone: "787-235-1176",
          image_url: "http://dummyimage.com/100x100.jpg/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 434724,
          first_name: "Sofia",
          last_name: "Cavet",
          email: "scavet1s@wikimedia.org",
          password: "2Gaum8ZJ",
          phone: "899-794-6742",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3540168,
          first_name: "Brien",
          last_name: "Chrichton",
          email: "bchrichton1t@archive.org",
          password: "afytdRd17FGG",
          phone: "419-951-8083",
          image_url: "http://dummyimage.com/100x100.jpg/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4296032,
          first_name: "Porter",
          last_name: "Trustrie",
          email: "ptrustrie1u@liveinternet.ru",
          password: "2XdOx7a3otX",
          phone: "811-608-8888",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2840066,
          first_name: "Berny",
          last_name: "Whorlton",
          email: "bwhorlton1v@friendfeed.com",
          password: "Yg8nUl",
          phone: "340-339-7042",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 88531,
          first_name: "Shermy",
          last_name: "Race",
          email: "srace1w@scientificamerican.com",
          password: "FaLrDfzC0O",
          phone: "827-201-0327",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4842865,
          first_name: "Thain",
          last_name: "Catt",
          email: "tcatt1x@epa.gov",
          password: "C5Qn1h5",
          phone: "759-936-2303",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 777689,
          first_name: "Pearline",
          last_name: "Sturte",
          email: "psturte1y@newyorker.com",
          password: "Y8ahF3mYw",
          phone: "811-414-8294",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3793272,
          first_name: "Tim",
          last_name: "Deeth",
          email: "tdeeth1z@forbes.com",
          password: "UVA2kSYT",
          phone: "652-890-3141",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1596230,
          first_name: "Clovis",
          last_name: "Barlass",
          email: "cbarlass20@utexas.edu",
          password: "C9ITE9lHx",
          phone: "117-175-9239",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4110134,
          first_name: "Mallory",
          last_name: "Geindre",
          email: "mgeindre21@census.gov",
          password: "7TtqrecQH946",
          phone: "196-236-9954",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2328455,
          first_name: "Adham",
          last_name: "Redihalgh",
          email: "aredihalgh22@home.pl",
          password: "4FxHuNPvX7",
          phone: "552-079-4834",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1668043,
          first_name: "Emalia",
          last_name: "Towner",
          email: "etowner23@guardian.co.uk",
          password: "ovr0SaYVQno8",
          phone: "948-543-8643",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3621972,
          first_name: "Quinn",
          last_name: "Zack",
          email: "qzack24@bigcartel.com",
          password: "Z7ttn5x",
          phone: "576-944-7300",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3373499,
          first_name: "Rad",
          last_name: "Mancell",
          email: "rmancell25@mayoclinic.com",
          password: "XrhiAX4LRjbP",
          phone: "444-627-7555",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 118371,
          first_name: "Shirline",
          last_name: "Sussans",
          email: "ssussans26@smh.com.au",
          password: "plhlv4",
          phone: "450-862-4813",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1698533,
          first_name: "Waite",
          last_name: "Manntschke",
          email: "wmanntschke27@sourceforge.net",
          password: "YQW9nr",
          phone: "640-389-4199",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 189227,
          first_name: "Ianthe",
          last_name: "O' Scallan",
          email: "ioscallan28@wordpress.org",
          password: "sqTF17S7r1DS",
          phone: "461-585-0099",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4589043,
          first_name: "Ronnica",
          last_name: "Leasor",
          email: "rleasor29@cisco.com",
          password: "2hQVLRH",
          phone: "887-163-6383",
          image_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3712523,
          first_name: "Drucie",
          last_name: "Gronaver",
          email: "dgronaver2a@prweb.com",
          password: "4fWFPflX4rcp",
          phone: "812-495-8635",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4508823,
          first_name: "Dorella",
          last_name: "Trimble",
          email: "dtrimble2b@nps.gov",
          password: "sTbLjf",
          phone: "498-036-5250",
          image_url: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3217296,
          first_name: "Nicky",
          last_name: "Salvadore",
          email: "nsalvadore2c@sina.com.cn",
          password: "vcDjFUuiBZ",
          phone: "602-580-8841",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3982037,
          first_name: "Dorena",
          last_name: "Cullington",
          email: "dcullington2d@artisteer.com",
          password: "yy16wuRsyihr",
          phone: "966-076-5330",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 380463,
          first_name: "Latrina",
          last_name: "Balchin",
          email: "lbalchin2e@surveymonkey.com",
          password: "eoRwFXOj",
          phone: "914-938-3750",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1963676,
          first_name: "Jonathon",
          last_name: "Dalrymple",
          email: "jdalrymple2f@dmoz.org",
          password: "6e2zNTR40I5",
          phone: "925-888-8589",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3757403,
          first_name: "Alano",
          last_name: "Drowsfield",
          email: "adrowsfield2g@ca.gov",
          password: "rgBO19KPXXE",
          phone: "060-513-4804",
          image_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3207679,
          first_name: "Aaron",
          last_name: "Finney",
          email: "afinney2h@nhs.uk",
          password: "QPsZDnWbk2C",
          phone: "664-623-7394",
          image_url: "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1088963,
          first_name: "Freida",
          last_name: "Innocenti",
          email: "finnocenti2i@last.fm",
          password: "7ODRAZfkrWyL",
          phone: "867-293-6414",
          image_url: "http://dummyimage.com/100x100.png/ff4444/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3037822,
          first_name: "Pavia",
          last_name: "Hellyer",
          email: "phellyer2j@tumblr.com",
          password: "kDECpDHKu",
          phone: "221-229-7122",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3727229,
          first_name: "Dominic",
          last_name: "Galliford",
          email: "dgalliford2k@newyorker.com",
          password: "L2qGEPU9hGut",
          phone: "791-085-9891",
          image_url: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 1390742,
          first_name: "Janey",
          last_name: "Banisch",
          email: "jbanisch2l@fotki.com",
          password: "u5r9KIsYciW",
          phone: "158-680-3140",
          image_url: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 3530473,
          first_name: "Erwin",
          last_name: "Whylie",
          email: "ewhylie2m@yelp.com",
          password: "8OylhRn",
          phone: "019-583-0391",
          image_url: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2873566,
          first_name: "Candace",
          last_name: "Ingarfield",
          email: "cingarfield2n@fda.gov",
          password: "Yp3ifem",
          phone: "265-181-6211",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 255456,
          first_name: "Korie",
          last_name: "Wenderoth",
          email: "kwenderoth2o@oracle.com",
          password: "IbVkEhI",
          phone: "416-452-4089",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 2721089,
          first_name: "Francois",
          last_name: "Bridgett",
          email: "fbridgett2p@baidu.com",
          password: "rWwXXZDR",
          phone: "157-852-5949",
          image_url: "http://dummyimage.com/100x100.bmp/dddddd/000000",
          acct_type: "admin",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 4141157,
          first_name: "Christalle",
          last_name: "Wildblood",
          email: "cwildblood2q@1688.com",
          password: "0GIvWDZKqxsH",
          phone: "659-005-9970",
          image_url: "http://dummyimage.com/100x100.png/dddddd/000000",
          acct_type: "advertiser",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        },
        {
          balance: 585823,
          first_name: "Nickie",
          last_name: "Fraczkiewicz",
          email: "nfraczkiewicz2r@mayoclinic.com",
          password: "ZNiZvkSlkD",
          phone: "562-023-7563",
          image_url: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
          acct_type: "affiliate",
          oauth_token: "a6d43bec3d513659aa90a4be7b7f8e9ac796a53b"
        }
      ]);
    });
};
