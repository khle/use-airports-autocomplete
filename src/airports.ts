const airports = [
  {
    name: 'Goroka ',
    city: 'Goroka',
    country: 'Papua New Guinea',
    IATA: 'GKA',
    ICAO: 'AYGA',
    lat: '-6.081689834590001',
    lon: '145.391998291',
    timezone: '10'
  },
  {
    name: 'Madang ',
    city: 'Madang',
    country: 'Papua New Guinea',
    IATA: 'MAG',
    ICAO: 'AYMD',
    lat: '-5.20707988739',
    lon: '145.789001465',
    timezone: '10'
  },
  {
    name: 'Mount Hagen Kagamuga ',
    city: 'Mount Hagen',
    country: 'Papua New Guinea',
    IATA: 'HGU',
    ICAO: 'AYMH',
    lat: '-5.826789855957031',
    lon: '144.29600524902344',
    timezone: '10'
  },
  {
    name: 'Nadzab ',
    city: 'Nadzab',
    country: 'Papua New Guinea',
    IATA: 'LAE',
    ICAO: 'AYNZ',
    lat: '-6.569803',
    lon: '146.725977',
    timezone: '10'
  },
  {
    name: 'Port Moresby Jacksons Intl ',
    city: 'Port Moresby',
    country: 'Papua New Guinea',
    IATA: 'POM',
    ICAO: 'AYPY',
    lat: '-9.443380355834961',
    lon: '147.22000122070312',
    timezone: '10'
  },
  {
    name: 'Wewak Intl ',
    city: 'Wewak',
    country: 'Papua New Guinea',
    IATA: 'WWK',
    ICAO: 'AYWK',
    lat: '-3.58383011818',
    lon: '143.669006348',
    timezone: '10'
  },
  {
    name: 'Narsarsuaq ',
    city: 'Narssarssuaq',
    country: 'Greenland',
    IATA: 'UAK',
    ICAO: 'BGBW',
    lat: '61.1604995728',
    lon: '-45.4259986877',
    timezone: '-3'
  },
  {
    name: 'Godthaab / Nuuk ',
    city: 'Godthaab',
    country: 'Greenland',
    IATA: 'GOH',
    ICAO: 'BGGH',
    lat: '64.19090271',
    lon: '-51.6781005859',
    timezone: '-3'
  },
  {
    name: 'Kangerlussuaq ',
    city: 'Sondrestrom',
    country: 'Greenland',
    IATA: 'SFJ',
    ICAO: 'BGSF',
    lat: '67.0122218992',
    lon: '-50.7116031647',
    timezone: '-3'
  },
  {
    name: 'Thule Air Base',
    city: 'Thule',
    country: 'Greenland',
    IATA: 'THU',
    ICAO: 'BGTL',
    lat: '76.5311965942',
    lon: '-68.7032012939',
    timezone: '-4'
  },
  {
    name: 'Akureyri ',
    city: 'Akureyri',
    country: 'Iceland',
    IATA: 'AEY',
    ICAO: 'BIAR',
    lat: '65.66000366210938',
    lon: '-18.07270050048828',
    timezone: '0'
  },
  {
    name: 'Egilssta\u00f0ir ',
    city: 'Egilsstadir',
    country: 'Iceland',
    IATA: 'EGS',
    ICAO: 'BIEG',
    lat: '65.2833023071289',
    lon: '-14.401399612426758',
    timezone: '0'
  },
  {
    name: 'Hornafj\u00f6r\u00f0ur ',
    city: 'Hofn',
    country: 'Iceland',
    IATA: 'HFN',
    ICAO: 'BIHN',
    lat: '64.295601',
    lon: '-15.2272',
    timezone: '0'
  },
  {
    name: 'H\u00fasav\u00edk ',
    city: 'Husavik',
    country: 'Iceland',
    IATA: 'HZK',
    ICAO: 'BIHU',
    lat: '65.952301',
    lon: '-17.426001',
    timezone: '0'
  },
  {
    name: '\u00cdsafj\u00f6r\u00f0ur ',
    city: 'Isafjordur',
    country: 'Iceland',
    IATA: 'IFJ',
    ICAO: 'BIIS',
    lat: '66.05809783935547',
    lon: '-23.135299682617188',
    timezone: '0'
  },
  {
    name: 'Keflavik Intl ',
    city: 'Keflavik',
    country: 'Iceland',
    IATA: 'KEF',
    ICAO: 'BIKF',
    lat: '63.985000610352',
    lon: '-22.605600357056',
    timezone: '0'
  },
  {
    name: 'Patreksfj\u00f6r\u00f0ur ',
    city: 'Patreksfjordur',
    country: 'Iceland',
    IATA: 'PFJ',
    ICAO: 'BIPA',
    lat: '65.555801',
    lon: '-23.965',
    timezone: '0'
  },
  {
    name: 'Reykjavik ',
    city: 'Reykjavik',
    country: 'Iceland',
    IATA: 'RKV',
    ICAO: 'BIRK',
    lat: '64.1299972534',
    lon: '-21.9405994415',
    timezone: '0'
  },
  {
    name: 'Siglufj\u00f6r\u00f0ur ',
    city: 'Siglufjordur',
    country: 'Iceland',
    IATA: 'SIJ',
    ICAO: 'BISI',
    lat: '66.133301',
    lon: '-18.9167',
    timezone: '0'
  },
  {
    name: 'Vestmannaeyjar ',
    city: 'Vestmannaeyjar',
    country: 'Iceland',
    IATA: 'VEY',
    ICAO: 'BIVM',
    lat: '63.42430114746094',
    lon: '-20.278900146484375',
    timezone: '0'
  },
  {
    name: 'Sault Ste Marie ',
    city: 'Sault Sainte Marie',
    country: 'Canada',
    IATA: 'YAM',
    ICAO: 'CYAM',
    lat: '46.48500061035156',
    lon: '-84.5093994140625',
    timezone: '-5'
  },
  {
    name: 'Winnipeg / St. Andrews ',
    city: 'Winnipeg',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYAV',
    lat: '50.0564002991',
    lon: '-97.03250122070001',
    timezone: '-6'
  },
  {
    name: 'Halifax / CFB Shearwater Heliport',
    city: 'Halifax',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYAW',
    lat: '44.639702',
    lon: '-63.499401',
    timezone: '-4'
  },
  {
    name: 'St. Anthony ',
    city: 'St. Anthony',
    country: 'Canada',
    IATA: 'YAY',
    ICAO: 'CYAY',
    lat: '51.3918991089',
    lon: '-56.083099365200006',
    timezone: '-3.5'
  },
  {
    name: 'Tofino / Long Beach ',
    city: 'Tofino',
    country: 'Canada',
    IATA: 'YAZ',
    ICAO: 'CYAZ',
    lat: '49.079833',
    lon: '-125.775583',
    timezone: '-8'
  },
  {
    name: 'Kugaaruk ',
    city: 'Pelly Bay',
    country: 'Canada',
    IATA: 'YBB',
    ICAO: 'CYBB',
    lat: '68.534401',
    lon: '-89.808098',
    timezone: '-7'
  },
  {
    name: 'Baie Comeau ',
    city: 'Baie Comeau',
    country: 'Canada',
    IATA: 'YBC',
    ICAO: 'CYBC',
    lat: '49.13249969482422',
    lon: '-68.20439910888672',
    timezone: '-5'
  },
  {
    name: 'CFB Bagotville',
    city: 'Bagotville',
    country: 'Canada',
    IATA: 'YBG',
    ICAO: 'CYBG',
    lat: '48.33060073852539',
    lon: '-70.99639892578125',
    timezone: '-5'
  },
  {
    name: 'Baker Lake ',
    city: 'Baker Lake',
    country: 'Canada',
    IATA: 'YBK',
    ICAO: 'CYBK',
    lat: '64.29889678960001',
    lon: '-96.077796936',
    timezone: '-6'
  },
  {
    name: 'Campbell River ',
    city: 'Campbell River',
    country: 'Canada',
    IATA: 'YBL',
    ICAO: 'CYBL',
    lat: '49.950801849365234',
    lon: '-125.27100372314453',
    timezone: '-8'
  },
  {
    name: 'Brandon Municipal ',
    city: 'Brandon',
    country: 'Canada',
    IATA: 'YBR',
    ICAO: 'CYBR',
    lat: '49.91',
    lon: '-99.951897',
    timezone: '-6'
  },
  {
    name: 'Cambridge Bay ',
    city: 'Cambridge Bay',
    country: 'Canada',
    IATA: 'YCB',
    ICAO: 'CYCB',
    lat: '69.1081008911',
    lon: '-105.138000488',
    timezone: '-7'
  },
  {
    name: 'Nanaimo ',
    city: 'Nanaimo',
    country: 'Canada',
    IATA: 'YCD',
    ICAO: 'CYCD',
    lat: '49.054970224899996',
    lon: '-123.869862556',
    timezone: '-8'
  },
  {
    name: 'Castlegar/West Kootenay Regional ',
    city: 'Castlegar',
    country: 'Canada',
    IATA: 'YCG',
    ICAO: 'CYCG',
    lat: '49.2963981628',
    lon: '-117.632003784',
    timezone: '-8'
  },
  {
    name: 'Miramichi ',
    city: 'Chatham',
    country: 'Canada',
    IATA: 'YCH',
    ICAO: 'CYCH',
    lat: '47.007801',
    lon: '-65.449203',
    timezone: '-4'
  },
  {
    name: 'Charlo ',
    city: 'Charlo',
    country: 'Canada',
    IATA: 'YCL',
    ICAO: 'CYCL',
    lat: '47.990799',
    lon: '-66.330299',
    timezone: '-4'
  },
  {
    name: 'Kugluktuk ',
    city: 'Coppermine',
    country: 'Canada',
    IATA: 'YCO',
    ICAO: 'CYCO',
    lat: '67.816704',
    lon: '-115.143997',
    timezone: '-7'
  },
  {
    name: 'Coronation ',
    city: 'Coronation',
    country: 'Canada',
    IATA: 'YCT',
    ICAO: 'CYCT',
    lat: '52.0750007629',
    lon: '-111.444999695',
    timezone: '-7'
  },
  {
    name: 'Chilliwack ',
    city: 'Chilliwack',
    country: 'Canada',
    IATA: 'YCW',
    ICAO: 'CYCW',
    lat: '49.1528015137',
    lon: '-121.939002991',
    timezone: '-8'
  },
  {
    name: 'Clyde River ',
    city: 'Clyde River',
    country: 'Canada',
    IATA: 'YCY',
    ICAO: 'CYCY',
    lat: '70.4860992432',
    lon: '-68.5167007446',
    timezone: '-5'
  },
  {
    name: 'Coral Harbour ',
    city: 'Coral Harbour',
    country: 'Canada',
    IATA: 'YZS',
    ICAO: 'CYZS',
    lat: '64.1932983398',
    lon: '-83.3593978882',
    timezone: '-5'
  },
  {
    name: 'Dawson City ',
    city: 'Dawson',
    country: 'Canada',
    IATA: 'YDA',
    ICAO: 'CYDA',
    lat: '64.04309844970703',
    lon: '-139.1280059814453',
    timezone: '-8'
  },
  {
    name: 'Burwash ',
    city: 'Burwash',
    country: 'Canada',
    IATA: 'YDB',
    ICAO: 'CYDB',
    lat: '61.37110137939453',
    lon: '-139.04100036621094',
    timezone: '-8'
  },
  {
    name: 'Princeton ',
    city: 'Princeton',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYDC',
    lat: '49.4681015015',
    lon: '-120.511001587',
    timezone: '-8'
  },
  {
    name: 'Deer Lake ',
    city: 'Deer Lake',
    country: 'Canada',
    IATA: 'YDF',
    ICAO: 'CYDF',
    lat: '49.21080017089844',
    lon: '-57.39139938354492',
    timezone: '-3.5'
  },
  {
    name: 'Dease Lake ',
    city: 'Dease Lake',
    country: 'Canada',
    IATA: 'YDL',
    ICAO: 'CYDL',
    lat: '58.4221992493',
    lon: '-130.031997681',
    timezone: '-8'
  },
  {
    name: 'Dauphin Barker ',
    city: 'Dauphin',
    country: 'Canada',
    IATA: 'YDN',
    ICAO: 'CYDN',
    lat: '51.100799560546875',
    lon: '-100.052001953125',
    timezone: '-6'
  },
  {
    name: 'Dawson Creek ',
    city: 'Dawson Creek',
    country: 'Canada',
    IATA: 'YDQ',
    ICAO: 'CYDQ',
    lat: '55.7422981262207',
    lon: '-120.18299865722656',
    timezone: '-7'
  },
  {
    name: 'Edmonton Intl ',
    city: 'Edmonton',
    country: 'Canada',
    IATA: 'YEG',
    ICAO: 'CYEG',
    lat: '53.309700012200004',
    lon: '-113.580001831',
    timezone: '-7'
  },
  {
    name: 'Arviat ',
    city: 'Eskimo Point',
    country: 'Canada',
    IATA: 'YEK',
    ICAO: 'CYEK',
    lat: '61.0942001343',
    lon: '-94.07080078119999',
    timezone: '-6'
  },
  {
    name: 'Estevan ',
    city: 'Estevan',
    country: 'Canada',
    IATA: 'YEN',
    ICAO: 'CYEN',
    lat: '49.2103004456',
    lon: '-102.966003418',
    timezone: '-6'
  },
  {
    name: 'Edson ',
    city: 'Edson',
    country: 'Canada',
    IATA: 'YET',
    ICAO: 'CYET',
    lat: '53.578899383499994',
    lon: '-116.464996338',
    timezone: '-7'
  },
  {
    name: 'Eureka ',
    city: 'Eureka',
    country: 'Canada',
    IATA: 'YEU',
    ICAO: 'CYEU',
    lat: '79.9946975708',
    lon: '-85.814201355',
    timezone: '-6'
  },
  {
    name: 'Inuvik Mike Zubko ',
    city: 'Inuvik',
    country: 'Canada',
    IATA: 'YEV',
    ICAO: 'CYEV',
    lat: '68.30419921880001',
    lon: '-133.483001709',
    timezone: '-7'
  },
  {
    name: 'Iqaluit ',
    city: 'Iqaluit',
    country: 'Canada',
    IATA: 'YFB',
    ICAO: 'CYFB',
    lat: '63.756402',
    lon: '-68.555801',
    timezone: '-5'
  },
  {
    name: 'Fredericton ',
    city: 'Fredericton',
    country: 'Canada',
    IATA: 'YFC',
    ICAO: 'CYFC',
    lat: '45.868900299072266',
    lon: '-66.53720092773438',
    timezone: '-4'
  },
  {
    name: 'Forestville ',
    city: 'Forestville',
    country: 'Canada',
    IATA: 'YFE',
    ICAO: 'CYFE',
    lat: '48.74610137939453',
    lon: '-69.09719848632812',
    timezone: '-5'
  },
  {
    name: 'Flin Flon ',
    city: 'Flin Flon',
    country: 'Canada',
    IATA: 'YFO',
    ICAO: 'CYFO',
    lat: '54.6781005859375',
    lon: '-101.68199920654297',
    timezone: '-6'
  },
  {
    name: 'Fort Resolution ',
    city: 'Fort Resolution',
    country: 'Canada',
    IATA: 'YFR',
    ICAO: 'CYFR',
    lat: '61.1808013916',
    lon: '-113.690002441',
    timezone: '-7'
  },
  {
    name: 'Fort Simpson ',
    city: 'Fort Simpson',
    country: 'Canada',
    IATA: 'YFS',
    ICAO: 'CYFS',
    lat: '61.76020050048828',
    lon: '-121.23699951171875',
    timezone: '-7'
  },
  {
    name: 'Kingston Norman Rogers ',
    city: 'Kingston',
    country: 'Canada',
    IATA: 'YGK',
    ICAO: 'CYGK',
    lat: '44.22529983520508',
    lon: '-76.5969009399414',
    timezone: '-5'
  },
  {
    name: 'La Grande Rivi\u00e8re ',
    city: 'La Grande Riviere',
    country: 'Canada',
    IATA: 'YGL',
    ICAO: 'CYGL',
    lat: '53.625301361083984',
    lon: '-77.7042007446289',
    timezone: '-5'
  },
  {
    name: 'Gasp\u00e9 (Michel-Pouliot) ',
    city: 'Gaspe',
    country: 'Canada',
    IATA: 'YGP',
    ICAO: 'CYGP',
    lat: '48.7752990723',
    lon: '-64.4785995483',
    timezone: '-5'
  },
  {
    name: 'Geraldton Greenstone Regional ',
    city: 'Geraldton',
    country: 'Canada',
    IATA: 'YGQ',
    ICAO: 'CYGQ',
    lat: '49.77830123901367',
    lon: '-86.93939971923828',
    timezone: '-5'
  },
  {
    name: '\u00celes-de-la-Madeleine ',
    city: 'Iles De La Madeleine',
    country: 'Canada',
    IATA: 'YGR',
    ICAO: 'CYGR',
    lat: '47.42470169067383',
    lon: '-61.778099060058594',
    timezone: '-5'
  },
  {
    name: 'Hudson Bay ',
    city: 'Hudson Bay',
    country: 'Canada',
    IATA: 'YHB',
    ICAO: 'CYHB',
    lat: '52.8166999817',
    lon: '-102.310997009',
    timezone: '-6'
  },
  {
    name: 'Dryden Regional ',
    city: 'Dryden',
    country: 'Canada',
    IATA: 'YHD',
    ICAO: 'CYHD',
    lat: '49.831699',
    lon: '-92.744202',
    timezone: '-6'
  },
  {
    name: 'Ulukhaktok Holman ',
    city: 'Holman Island',
    country: 'Canada',
    IATA: 'YHI',
    ICAO: 'CYHI',
    lat: '70.76280212402344',
    lon: '-117.80599975585938',
    timezone: '-7'
  },
  {
    name: 'Gjoa Haven ',
    city: 'Gjoa Haven',
    country: 'Canada',
    IATA: 'YHK',
    ICAO: 'CYHK',
    lat: '68.635597229',
    lon: '-95.84970092770001',
    timezone: '-7'
  },
  {
    name: 'John C. Munro Hamilton Intl ',
    city: 'Hamilton',
    country: 'Canada',
    IATA: 'YHM',
    ICAO: 'CYHM',
    lat: '43.173599243199995',
    lon: '-79.93499755859999',
    timezone: '-5'
  },
  {
    name: 'Montr\u00e9al / Saint-Hubert ',
    city: 'Montreal',
    country: 'Canada',
    IATA: 'YHU',
    ICAO: 'CYHU',
    lat: '45.5175018311',
    lon: '-73.4169006348',
    timezone: '-5'
  },
  {
    name: 'Hay River / Merlyn Carter ',
    city: 'Hay River',
    country: 'Canada',
    IATA: 'YHY',
    ICAO: 'CYHY',
    lat: '60.8396987915',
    lon: '-115.782997131',
    timezone: '-7'
  },
  {
    name: 'Halifax / Stanfield Intl ',
    city: 'Halifax',
    country: 'Canada',
    IATA: 'YHZ',
    ICAO: 'CYHZ',
    lat: '44.8807983398',
    lon: '-63.5085983276',
    timezone: '-4'
  },
  {
    name: 'Atikokan Municipal ',
    city: 'Atikokan',
    country: 'Canada',
    IATA: 'YIB',
    ICAO: 'CYIB',
    lat: '48.7738990784',
    lon: '-91.6386032104',
    timezone: '-5'
  },
  {
    name: 'Pond Inlet ',
    city: 'Pond Inlet',
    country: 'Canada',
    IATA: 'YIO',
    ICAO: 'CYIO',
    lat: '72.6832962036',
    lon: '-77.9666976929',
    timezone: '-5'
  },
  {
    name: 'St Jean ',
    city: 'St. Jean',
    country: 'Canada',
    IATA: 'YJN',
    ICAO: 'CYJN',
    lat: '45.29439926147461',
    lon: '-73.28109741210938',
    timezone: '-5'
  },
  {
    name: 'Stephenville ',
    city: 'Stephenville',
    country: 'Canada',
    IATA: 'YJT',
    ICAO: 'CYJT',
    lat: '48.5442008972168',
    lon: '-58.54999923706055',
    timezone: '-3.5'
  },
  {
    name: 'Kamloops ',
    city: 'Kamloops',
    country: 'Canada',
    IATA: 'YKA',
    ICAO: 'CYKA',
    lat: '50.7022018433',
    lon: '-120.444000244',
    timezone: '-8'
  },
  {
    name: 'Waterloo ',
    city: 'Waterloo',
    country: 'Canada',
    IATA: 'YKF',
    ICAO: 'CYKF',
    lat: '43.460800170899994',
    lon: '-80.3786010742',
    timezone: '-5'
  },
  {
    name: 'Schefferville ',
    city: 'Schefferville',
    country: 'Canada',
    IATA: 'YKL',
    ICAO: 'CYKL',
    lat: '54.805301666259766',
    lon: '-66.8052978515625',
    timezone: '-5'
  },
  {
    name: 'Kindersley ',
    city: 'Kindersley',
    country: 'Canada',
    IATA: 'YKY',
    ICAO: 'CYKY',
    lat: '51.5175018311',
    lon: '-109.180999756',
    timezone: '-6'
  },
  {
    name: 'Buttonville Municipal ',
    city: 'Toronto',
    country: 'Canada',
    IATA: 'YKZ',
    ICAO: 'CYKZ',
    lat: '43.86220169067383',
    lon: '-79.37000274658203',
    timezone: '-5'
  },
  {
    name: 'Chapleau ',
    city: 'Chapleau',
    country: 'Canada',
    IATA: 'YLD',
    ICAO: 'CYLD',
    lat: '47.81999969482422',
    lon: '-83.3467025756836',
    timezone: '-5'
  },
  {
    name: 'Meadow Lake ',
    city: 'Meadow Lake',
    country: 'Canada',
    IATA: 'YLJ',
    ICAO: 'CYLJ',
    lat: '54.125301361083984',
    lon: '-108.52300262451172',
    timezone: '-6'
  },
  {
    name: 'Lloydminster ',
    city: 'Lloydminster',
    country: 'Canada',
    IATA: 'YLL',
    ICAO: 'CYLL',
    lat: '53.309200286865234',
    lon: '-110.072998046875',
    timezone: '-7'
  },
  {
    name: 'Alert ',
    city: 'Alert',
    country: 'Canada',
    IATA: 'YLT',
    ICAO: 'CYLT',
    lat: '82.51779937740001',
    lon: '-62.2806015015',
    timezone: '-5'
  },
  {
    name: 'Kelowna Intl ',
    city: 'Kelowna',
    country: 'Canada',
    IATA: 'YLW',
    ICAO: 'CYLW',
    lat: '49.9561004639',
    lon: '-119.377998352',
    timezone: '-8'
  },
  {
    name: 'Mayo ',
    city: 'Mayo',
    country: 'Canada',
    IATA: 'YMA',
    ICAO: 'CYMA',
    lat: '63.61640167236328',
    lon: '-135.8679962158203',
    timezone: '-8'
  },
  {
    name: 'Moose Jaw Air Vice Marshal C. M. McEwen ',
    city: 'Moose Jaw',
    country: 'Canada',
    IATA: 'YMJ',
    ICAO: 'CYMJ',
    lat: '50.330299377441406',
    lon: '-105.55899810791016',
    timezone: '-6'
  },
  {
    name: 'Fort McMurray ',
    city: 'Fort Mcmurray',
    country: 'Canada',
    IATA: 'YMM',
    ICAO: 'CYMM',
    lat: '56.653301239',
    lon: '-111.222000122',
    timezone: '-7'
  },
  {
    name: 'Moosonee ',
    city: 'Moosonee',
    country: 'Canada',
    IATA: 'YMO',
    ICAO: 'CYMO',
    lat: '51.291099548339844',
    lon: '-80.60780334472656',
    timezone: '-5'
  },
  {
    name: 'Maniwaki ',
    city: 'Maniwaki',
    country: 'Canada',
    IATA: 'YMW',
    ICAO: 'CYMW',
    lat: '46.2728004456',
    lon: '-75.9906005859',
    timezone: '-5'
  },
  {
    name: 'Montreal Intl (Mirabel) ',
    city: 'Montreal',
    country: 'Canada',
    IATA: 'YMX',
    ICAO: 'CYMX',
    lat: '45.679501',
    lon: '-74.038696',
    timezone: '-5'
  },
  {
    name: 'Natashquan ',
    city: 'Natashquan',
    country: 'Canada',
    IATA: 'YNA',
    ICAO: 'CYNA',
    lat: '50.189998626708984',
    lon: '-61.78919982910156',
    timezone: '-5'
  },
  {
    name: 'Ottawa / Gatineau ',
    city: 'Gatineau',
    country: 'Canada',
    IATA: 'YND',
    ICAO: 'CYND',
    lat: '45.521701812699995',
    lon: '-75.5635986328',
    timezone: '-5'
  },
  {
    name: 'Matagami ',
    city: 'Matagami',
    country: 'Canada',
    IATA: 'YNM',
    ICAO: 'CYNM',
    lat: '49.76169967651367',
    lon: '-77.80280303955078',
    timezone: '-5'
  },
  {
    name: 'Old Crow ',
    city: 'Old Crow',
    country: 'Canada',
    IATA: 'YOC',
    ICAO: 'CYOC',
    lat: '67.57060241699219',
    lon: '-139.83900451660156',
    timezone: '-8'
  },
  {
    name: 'CFB Cold Lake',
    city: 'Cold Lake',
    country: 'Canada',
    IATA: 'YOD',
    ICAO: 'CYOD',
    lat: '54.404998779296875',
    lon: '-110.27899932861328',
    timezone: '-7'
  },
  {
    name: 'High Level ',
    city: 'High Level',
    country: 'Canada',
    IATA: 'YOJ',
    ICAO: 'CYOJ',
    lat: '58.62139892578125',
    lon: '-117.16500091552734',
    timezone: '-7'
  },
  {
    name: 'Ottawa Macdonald-Cartier Intl ',
    city: 'Ottawa',
    country: 'Canada',
    IATA: 'YOW',
    ICAO: 'CYOW',
    lat: '45.3224983215332',
    lon: '-75.66919708251953',
    timezone: '-5'
  },
  {
    name: 'Prince Albert Glass Field',
    city: 'Prince Albert',
    country: 'Canada',
    IATA: 'YPA',
    ICAO: 'CYPA',
    lat: '53.214199066199996',
    lon: '-105.672996521',
    timezone: '-6'
  },
  {
    name: 'Peace River ',
    city: 'Peace River',
    country: 'Canada',
    IATA: 'YPE',
    ICAO: 'CYPE',
    lat: '56.226898',
    lon: '-117.446999',
    timezone: '-7'
  },
  {
    name: 'Southport ',
    city: 'Portage-la-prairie',
    country: 'Canada',
    IATA: 'YPG',
    ICAO: 'CYPG',
    lat: '49.903099',
    lon: '-98.273817',
    timezone: '-6'
  },
  {
    name: 'Pitt Meadows ',
    city: 'Pitt Meadows',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYPK',
    lat: '49.21609878540039',
    lon: '-122.70999908447266',
    timezone: '-8'
  },
  {
    name: 'Pickle Lake ',
    city: 'Pickle Lake',
    country: 'Canada',
    IATA: 'YPL',
    ICAO: 'CYPL',
    lat: '51.4463996887207',
    lon: '-90.21420288085938',
    timezone: '-5'
  },
  {
    name: 'Port Menier ',
    city: 'Port Menier',
    country: 'Canada',
    IATA: 'YPN',
    ICAO: 'CYPN',
    lat: '49.83639907836914',
    lon: '-64.2885971069336',
    timezone: '-5'
  },
  {
    name: 'Peterborough ',
    city: 'Peterborough',
    country: 'Canada',
    IATA: 'YPQ',
    ICAO: 'CYPQ',
    lat: '44.22999954223633',
    lon: '-78.36329650878906',
    timezone: '-5'
  },
  {
    name: 'Prince Rupert ',
    city: 'Prince Pupert',
    country: 'Canada',
    IATA: 'YPR',
    ICAO: 'CYPR',
    lat: '54.286098480199996',
    lon: '-130.445007324',
    timezone: '-8'
  },
  {
    name: 'Fort Chipewyan ',
    city: 'Fort Chipewyan',
    country: 'Canada',
    IATA: 'YPY',
    ICAO: 'CYPY',
    lat: '58.7672004699707',
    lon: '-111.11699676513672',
    timezone: '-7'
  },
  {
    name: 'Muskoka ',
    city: 'Muskoka',
    country: 'Canada',
    IATA: 'YQA',
    ICAO: 'CYQA',
    lat: '44.974700927734375',
    lon: '-79.30329895019531',
    timezone: '-5'
  },
  {
    name: 'Quebec Jean Lesage Intl ',
    city: 'Quebec',
    country: 'Canada',
    IATA: 'YQB',
    ICAO: 'CYQB',
    lat: '46.7911',
    lon: '-71.393303',
    timezone: '-5'
  },
  {
    name: 'Red Deer Regional ',
    city: 'Red Deer Industrial',
    country: 'Canada',
    IATA: 'YQF',
    ICAO: 'CYQF',
    lat: '52.18220138549805',
    lon: '-113.89399719238281',
    timezone: '-7'
  },
  {
    name: 'Windsor ',
    city: 'Windsor',
    country: 'Canada',
    IATA: 'YQG',
    ICAO: 'CYQG',
    lat: '42.27560043334961',
    lon: '-82.95559692382812',
    timezone: '-5'
  },
  {
    name: 'Watson Lake ',
    city: 'Watson Lake',
    country: 'Canada',
    IATA: 'YQH',
    ICAO: 'CYQH',
    lat: '60.11640167236328',
    lon: '-128.82200622558594',
    timezone: '-8'
  },
  {
    name: 'Kenora ',
    city: 'Kenora',
    country: 'Canada',
    IATA: 'YQK',
    ICAO: 'CYQK',
    lat: '49.788299560546875',
    lon: '-94.36309814453125',
    timezone: '-6'
  },
  {
    name: 'Lethbridge County ',
    city: 'Lethbridge',
    country: 'Canada',
    IATA: 'YQL',
    ICAO: 'CYQL',
    lat: '49.6302986145',
    lon: '-112.800003052',
    timezone: '-7'
  },
  {
    name: 'Greater Moncton Intl ',
    city: 'Moncton',
    country: 'Canada',
    IATA: 'YQM',
    ICAO: 'CYQM',
    lat: '46.11220169067383',
    lon: '-64.67859649658203',
    timezone: '-4'
  },
  {
    name: 'Comox ',
    city: 'Comox',
    country: 'Canada',
    IATA: 'YQQ',
    ICAO: 'CYQQ',
    lat: '49.71080017089844',
    lon: '-124.88700103759766',
    timezone: '-8'
  },
  {
    name: 'Regina Intl ',
    city: 'Regina',
    country: 'Canada',
    IATA: 'YQR',
    ICAO: 'CYQR',
    lat: '50.43190002441406',
    lon: '-104.66600036621094',
    timezone: '-6'
  },
  {
    name: 'Thunder Bay ',
    city: 'Thunder Bay',
    country: 'Canada',
    IATA: 'YQT',
    ICAO: 'CYQT',
    lat: '48.37189865112305',
    lon: '-89.32389831542969',
    timezone: '-5'
  },
  {
    name: 'Grande Prairie ',
    city: 'Grande Prairie',
    country: 'Canada',
    IATA: 'YQU',
    ICAO: 'CYQU',
    lat: '55.1796989441',
    lon: '-118.885002136',
    timezone: '-7'
  },
  {
    name: 'Yorkton Municipal ',
    city: 'Yorkton',
    country: 'Canada',
    IATA: 'YQV',
    ICAO: 'CYQV',
    lat: '51.26470184326172',
    lon: '-102.46199798583984',
    timezone: '-6'
  },
  {
    name: 'North Battleford ',
    city: 'North Battleford',
    country: 'Canada',
    IATA: 'YQW',
    ICAO: 'CYQW',
    lat: '52.76919937133789',
    lon: '-108.24400329589844',
    timezone: '-6'
  },
  {
    name: 'Gander Intl ',
    city: 'Gander',
    country: 'Canada',
    IATA: 'YQX',
    ICAO: 'CYQX',
    lat: '48.9369010925293',
    lon: '-54.56809997558594',
    timezone: '-3.5'
  },
  {
    name: 'Sydney / J.A. Douglas McCurdy ',
    city: 'Sydney',
    country: 'Canada',
    IATA: 'YQY',
    ICAO: 'CYQY',
    lat: '46.1614',
    lon: '-60.047798',
    timezone: '-4'
  },
  {
    name: 'Quesnel ',
    city: 'Quesnel',
    country: 'Canada',
    IATA: 'YQZ',
    ICAO: 'CYQZ',
    lat: '53.026100158691406',
    lon: '-122.51000213623047',
    timezone: '-8'
  },
  {
    name: 'Resolute Bay ',
    city: 'Resolute',
    country: 'Canada',
    IATA: 'YRB',
    ICAO: 'CYRB',
    lat: '74.7169036865',
    lon: '-94.9693984985',
    timezone: '-6'
  },
  {
    name: 'Rivi\u00e8re-du-Loup ',
    city: 'Riviere Du Loup',
    country: 'Canada',
    IATA: 'YRI',
    ICAO: 'CYRI',
    lat: '47.764400482177734',
    lon: '-69.58470153808594',
    timezone: '-5'
  },
  {
    name: 'Roberval ',
    city: 'Roberval',
    country: 'Canada',
    IATA: 'YRJ',
    ICAO: 'CYRJ',
    lat: '48.52000045776367',
    lon: '-72.2656021118164',
    timezone: '-5'
  },
  {
    name: 'Rocky Mountain House ',
    city: 'Rocky Mountain House',
    country: 'Canada',
    IATA: 'YRM',
    ICAO: 'CYRM',
    lat: '52.4296989441',
    lon: '-114.903999329',
    timezone: '-7'
  },
  {
    name: 'Rankin Inlet ',
    city: 'Rankin Inlet',
    country: 'Canada',
    IATA: 'YRT',
    ICAO: 'CYRT',
    lat: '62.8114013672',
    lon: '-92.1157989502',
    timezone: '-6'
  },
  {
    name: 'Sudbury ',
    city: 'Sudbury',
    country: 'Canada',
    IATA: 'YSB',
    ICAO: 'CYSB',
    lat: '46.625',
    lon: '-80.79889678955078',
    timezone: '-5'
  },
  {
    name: 'Sherbrooke ',
    city: 'Sherbrooke',
    country: 'Canada',
    IATA: 'YSC',
    ICAO: 'CYSC',
    lat: '45.4385986328125',
    lon: '-71.69139862060547',
    timezone: '-5'
  },
  {
    name: 'Saint John ',
    city: 'St. John',
    country: 'Canada',
    IATA: 'YSJ',
    ICAO: 'CYSJ',
    lat: '45.31610107421875',
    lon: '-65.89029693603516',
    timezone: '-4'
  },
  {
    name: 'Fort Smith ',
    city: 'Fort Smith',
    country: 'Canada',
    IATA: 'YSM',
    ICAO: 'CYSM',
    lat: '60.020301818847656',
    lon: '-111.96199798583984',
    timezone: '-7'
  },
  {
    name: 'Nanisivik ',
    city: 'Nanisivik',
    country: 'Canada',
    IATA: 'YSR',
    ICAO: 'CYSR',
    lat: '72.982201',
    lon: '-84.613602',
    timezone: '-5'
  },
  {
    name: 'Summerside ',
    city: 'Summerside',
    country: 'Canada',
    IATA: 'YSU',
    ICAO: 'CYSU',
    lat: '46.44060134887695',
    lon: '-63.83359909057617',
    timezone: '-4'
  },
  {
    name: 'Sachs Harbour (David Nasogaluak Jr. Saaryuaq) ',
    city: 'Sachs Harbour',
    country: 'Canada',
    IATA: 'YSY',
    ICAO: 'CYSY',
    lat: '71.9938964844',
    lon: '-125.242996216',
    timezone: '-7'
  },
  {
    name: 'Cape Dorset ',
    city: 'Cape Dorset',
    country: 'Canada',
    IATA: 'YTE',
    ICAO: 'CYTE',
    lat: '64.2300033569',
    lon: '-76.5267028809',
    timezone: '-5'
  },
  {
    name: 'Thompson ',
    city: 'Thompson',
    country: 'Canada',
    IATA: 'YTH',
    ICAO: 'CYTH',
    lat: '55.80110168457031',
    lon: '-97.86419677734375',
    timezone: '-6'
  },
  {
    name: 'CFB Trenton',
    city: 'Trenton',
    country: 'Canada',
    IATA: 'YTR',
    ICAO: 'CYTR',
    lat: '44.118900299072266',
    lon: '-77.5280990600586',
    timezone: '-5'
  },
  {
    name: 'Timmins/Victor M. Power',
    city: 'Timmins',
    country: 'Canada',
    IATA: 'YTS',
    ICAO: 'CYTS',
    lat: '48.569698333699996',
    lon: '-81.376701355',
    timezone: '-5'
  },
  {
    name: 'Billy Bishop Toronto City Centre ',
    city: 'Toronto',
    country: 'Canada',
    IATA: 'YTZ',
    ICAO: 'CYTZ',
    lat: '43.627499',
    lon: '-79.396202',
    timezone: '-5'
  },
  {
    name: 'Tuktoyaktuk ',
    city: 'Tuktoyaktuk',
    country: 'Canada',
    IATA: 'YUB',
    ICAO: 'CYUB',
    lat: '69.43329620361328',
    lon: '-133.0260009765625',
    timezone: '-7'
  },
  {
    name: 'Montreal / Pierre Elliott Trudeau Intl ',
    city: 'Montreal',
    country: 'Canada',
    IATA: 'YUL',
    ICAO: 'CYUL',
    lat: '45.4706001282',
    lon: '-73.7407989502',
    timezone: '-5'
  },
  {
    name: 'Repulse Bay ',
    city: 'Repulse Bay',
    country: 'Canada',
    IATA: 'YUT',
    ICAO: 'CYUT',
    lat: '66.5214004517',
    lon: '-86.22470092770001',
    timezone: '-6'
  },
  {
    name: 'Hall Beach ',
    city: 'Hall Beach',
    country: 'Canada',
    IATA: 'YUX',
    ICAO: 'CYUX',
    lat: '68.77610015869999',
    lon: '-81.2425',
    timezone: '-5'
  },
  {
    name: 'Rouyn Noranda ',
    city: 'Rouyn',
    country: 'Canada',
    IATA: 'YUY',
    ICAO: 'CYUY',
    lat: '48.20610046386719',
    lon: '-78.83560180664062',
    timezone: '-5'
  },
  {
    name: 'La Ronge ',
    city: 'La Ronge',
    country: 'Canada',
    IATA: 'YVC',
    ICAO: 'CYVC',
    lat: '55.151401519800004',
    lon: '-105.262001038',
    timezone: '-6'
  },
  {
    name: 'Vermilion ',
    city: 'Vermillion',
    country: 'Canada',
    IATA: 'YVG',
    ICAO: 'CYVG',
    lat: '53.355800628699996',
    lon: '-110.823997498',
    timezone: '-7'
  },
  {
    name: 'Qikiqtarjuaq ',
    city: 'Broughton Island',
    country: 'Canada',
    IATA: 'YVM',
    ICAO: 'CYVM',
    lat: '67.5457992554',
    lon: '-64.03140258789999',
    timezone: '-5'
  },
  {
    name: "Val-d'Or ",
    city: "Val D'or",
    country: 'Canada',
    IATA: 'YVO',
    ICAO: 'CYVO',
    lat: '48.0532989502',
    lon: '-77.7827987671',
    timezone: '-5'
  },
  {
    name: 'Kuujjuaq ',
    city: 'Quujjuaq',
    country: 'Canada',
    IATA: 'YVP',
    ICAO: 'CYVP',
    lat: '58.096099853515625',
    lon: '-68.4269027709961',
    timezone: '-5'
  },
  {
    name: 'Norman Wells ',
    city: 'Norman Wells',
    country: 'Canada',
    IATA: 'YVQ',
    ICAO: 'CYVQ',
    lat: '65.28160095214844',
    lon: '-126.7979965209961',
    timezone: '-7'
  },
  {
    name: 'Vancouver Intl ',
    city: 'Vancouver',
    country: 'Canada',
    IATA: 'YVR',
    ICAO: 'CYVR',
    lat: '49.193901062',
    lon: '-123.183998108',
    timezone: '-8'
  },
  {
    name: 'Buffalo Narrows ',
    city: 'Buffalo Narrows',
    country: 'Canada',
    IATA: 'YVT',
    ICAO: 'CYVT',
    lat: '55.8418998718',
    lon: '-108.417999268',
    timezone: '-6'
  },
  {
    name: 'Wiarton ',
    city: 'Wiarton',
    country: 'Canada',
    IATA: 'YVV',
    ICAO: 'CYVV',
    lat: '44.7458',
    lon: '-81.107201',
    timezone: '-5'
  },
  {
    name: 'Petawawa ',
    city: 'Petawawa',
    country: 'Canada',
    IATA: 'YWA',
    ICAO: 'CYWA',
    lat: '45.95220184326172',
    lon: '-77.31919860839844',
    timezone: '-5'
  },
  {
    name: 'Winnipeg / James Armstrong Richardson Intl ',
    city: 'Winnipeg',
    country: 'Canada',
    IATA: 'YWG',
    ICAO: 'CYWG',
    lat: '49.909999847399995',
    lon: '-97.2398986816',
    timezone: '-6'
  },
  {
    name: 'Wabush ',
    city: 'Wabush',
    country: 'Canada',
    IATA: 'YWK',
    ICAO: 'CYWK',
    lat: '52.92190170288086',
    lon: '-66.8644027709961',
    timezone: '-4'
  },
  {
    name: 'Williams Lake ',
    city: 'Williams Lake',
    country: 'Canada',
    IATA: 'YWL',
    ICAO: 'CYWL',
    lat: '52.1831016541',
    lon: '-122.054000854',
    timezone: '-8'
  },
  {
    name: 'Wrigley ',
    city: 'Wrigley',
    country: 'Canada',
    IATA: 'YWY',
    ICAO: 'CYWY',
    lat: '63.20940017700195',
    lon: '-123.43699645996094',
    timezone: '-7'
  },
  {
    name: 'Cranbrook/Canadian Rockies Intl ',
    city: 'Cranbrook',
    country: 'Canada',
    IATA: 'YXC',
    ICAO: 'CYXC',
    lat: '49.610801696777',
    lon: '-115.78199768066',
    timezone: '-7'
  },
  {
    name: 'Edmonton City Centre (Blatchford Field) ',
    city: 'Edmonton',
    country: 'Canada',
    IATA: 'YXD',
    ICAO: 'CYXD',
    lat: '53.5724983215',
    lon: '-113.521003723',
    timezone: '-7'
  },
  {
    name: 'Saskatoon John G. Diefenbaker Intl ',
    city: 'Saskatoon',
    country: 'Canada',
    IATA: 'YXE',
    ICAO: 'CYXE',
    lat: '52.170799255371094',
    lon: '-106.69999694824219',
    timezone: '-6'
  },
  {
    name: 'Medicine Hat ',
    city: 'Medicine Hat',
    country: 'Canada',
    IATA: 'YXH',
    ICAO: 'CYXH',
    lat: '50.01890182495117',
    lon: '-110.72100067138672',
    timezone: '-7'
  },
  {
    name: 'Fort St John ',
    city: 'Fort Saint John',
    country: 'Canada',
    IATA: 'YXJ',
    ICAO: 'CYXJ',
    lat: '56.23809814453125',
    lon: '-120.73999786376953',
    timezone: '-7'
  },
  {
    name: 'Sioux Lookout ',
    city: 'Sioux Lookout',
    country: 'Canada',
    IATA: 'YXL',
    ICAO: 'CYXL',
    lat: '50.11389923095703',
    lon: '-91.9052963256836',
    timezone: '-6'
  },
  {
    name: 'Pangnirtung ',
    city: 'Pangnirtung',
    country: 'Canada',
    IATA: 'YXP',
    ICAO: 'CYXP',
    lat: '66.1449966431',
    lon: '-65.71360015869999',
    timezone: '-5'
  },
  {
    name: 'Earlton (Timiskaming Regional) ',
    city: 'Earlton',
    country: 'Canada',
    IATA: 'YXR',
    ICAO: 'CYXR',
    lat: '47.697400654599996',
    lon: '-79.8473453522',
    timezone: '-5'
  },
  {
    name: 'Prince George ',
    city: 'Prince George',
    country: 'Canada',
    IATA: 'YXS',
    ICAO: 'CYXS',
    lat: '53.8894004822',
    lon: '-122.679000854',
    timezone: '-8'
  },
  {
    name: 'Northwest Regional  Terrace-Kitimat',
    city: 'Terrace',
    country: 'Canada',
    IATA: 'YXT',
    ICAO: 'CYXT',
    lat: '54.468498',
    lon: '-128.576009',
    timezone: '-8'
  },
  {
    name: 'London ',
    city: 'London',
    country: 'Canada',
    IATA: 'YXU',
    ICAO: 'CYXU',
    lat: '43.035599',
    lon: '-81.1539',
    timezone: '-5'
  },
  {
    name: 'Abbotsford ',
    city: 'Abbotsford',
    country: 'Canada',
    IATA: 'YXX',
    ICAO: 'CYXX',
    lat: '49.025299072265625',
    lon: '-122.36100006103516',
    timezone: '-8'
  },
  {
    name: 'Whitehorse / Erik Nielsen Intl ',
    city: 'Whitehorse',
    country: 'Canada',
    IATA: 'YXY',
    ICAO: 'CYXY',
    lat: '60.7095985413',
    lon: '-135.067001343',
    timezone: '-8'
  },
  {
    name: 'North Bay Jack Garland ',
    city: 'North Bay',
    country: 'Canada',
    IATA: 'YYB',
    ICAO: 'CYYB',
    lat: '46.363602',
    lon: '-79.422798',
    timezone: '-5'
  },
  {
    name: 'Calgary Intl ',
    city: 'Calgary',
    country: 'Canada',
    IATA: 'YYC',
    ICAO: 'CYYC',
    lat: '51.113899231',
    lon: '-114.019996643',
    timezone: '-7'
  },
  {
    name: 'Smithers ',
    city: 'Smithers',
    country: 'Canada',
    IATA: 'YYD',
    ICAO: 'CYYD',
    lat: '54.82469940185547',
    lon: '-127.18299865722656',
    timezone: '-8'
  },
  {
    name: 'Fort Nelson ',
    city: 'Fort Nelson',
    country: 'Canada',
    IATA: 'YYE',
    ICAO: 'CYYE',
    lat: '58.8363990784',
    lon: '-122.597000122',
    timezone: '-8'
  },
  {
    name: 'Penticton ',
    city: 'Penticton',
    country: 'Canada',
    IATA: 'YYF',
    ICAO: 'CYYF',
    lat: '49.46310043334961',
    lon: '-119.60199737548828',
    timezone: '-8'
  },
  {
    name: 'Charlottetown ',
    city: 'Charlottetown',
    country: 'Canada',
    IATA: 'YYG',
    ICAO: 'CYYG',
    lat: '46.290000915527344',
    lon: '-63.12110137939453',
    timezone: '-4'
  },
  {
    name: 'Taloyoak ',
    city: 'Spence Bay',
    country: 'Canada',
    IATA: 'YYH',
    ICAO: 'CYYH',
    lat: '69.5466995239',
    lon: '-93.5766983032',
    timezone: '-7'
  },
  {
    name: 'Victoria Intl ',
    city: 'Victoria',
    country: 'Canada',
    IATA: 'YYJ',
    ICAO: 'CYYJ',
    lat: '48.646900177',
    lon: '-123.426002502',
    timezone: '-8'
  },
  {
    name: 'Lynn Lake ',
    city: 'Lynn Lake',
    country: 'Canada',
    IATA: 'YYL',
    ICAO: 'CYYL',
    lat: '56.86389923095703',
    lon: '-101.07599639892578',
    timezone: '-6'
  },
  {
    name: 'Swift Current ',
    city: 'Swift Current',
    country: 'Canada',
    IATA: 'YYN',
    ICAO: 'CYYN',
    lat: '50.291900634799994',
    lon: '-107.691001892',
    timezone: '-6'
  },
  {
    name: 'Churchill ',
    city: 'Churchill',
    country: 'Canada',
    IATA: 'YYQ',
    ICAO: 'CYYQ',
    lat: '58.739200592041016',
    lon: '-94.06500244140625',
    timezone: '-6'
  },
  {
    name: 'Goose Bay ',
    city: 'Goose Bay',
    country: 'Canada',
    IATA: 'YYR',
    ICAO: 'CYYR',
    lat: '53.3191986084',
    lon: '-60.4258003235',
    timezone: '-4'
  },
  {
    name: "St. John's Intl ",
    city: "St. John's",
    country: 'Canada',
    IATA: 'YYT',
    ICAO: 'CYYT',
    lat: '47.618598938',
    lon: '-52.7518997192',
    timezone: '-3.5'
  },
  {
    name: 'Kapuskasing ',
    city: 'Kapuskasing',
    country: 'Canada',
    IATA: 'YYU',
    ICAO: 'CYYU',
    lat: '49.41389846801758',
    lon: '-82.46749877929688',
    timezone: '-5'
  },
  {
    name: 'Armstrong ',
    city: 'Armstrong',
    country: 'Canada',
    IATA: 'YYW',
    ICAO: 'CYYW',
    lat: '50.29029846191406',
    lon: '-88.90969848632812',
    timezone: '-5'
  },
  {
    name: 'Mont Joli ',
    city: 'Mont Joli',
    country: 'Canada',
    IATA: 'YYY',
    ICAO: 'CYYY',
    lat: '48.60860061645508',
    lon: '-68.20809936523438',
    timezone: '-5'
  },
  {
    name: 'Lester B. Pearson Intl ',
    city: 'Toronto',
    country: 'Canada',
    IATA: 'YYZ',
    ICAO: 'CYYZ',
    lat: '43.6772003174',
    lon: '-79.63059997559999',
    timezone: '-5'
  },
  {
    name: 'Downsview ',
    city: 'Toronto',
    country: 'Canada',
    IATA: 'YZD',
    ICAO: 'CYZD',
    lat: '43.74250030517578',
    lon: '-79.4655990600586',
    timezone: '-5'
  },
  {
    name: 'Gore Bay Manitoulin ',
    city: 'Gore Bay',
    country: 'Canada',
    IATA: 'YZE',
    ICAO: 'CYZE',
    lat: '45.88529968261719',
    lon: '-82.56780242919922',
    timezone: '-5'
  },
  {
    name: 'Yellowknife ',
    city: 'Yellowknife',
    country: 'Canada',
    IATA: 'YZF',
    ICAO: 'CYZF',
    lat: '62.462799072265625',
    lon: '-114.44000244140625',
    timezone: '-7'
  },
  {
    name: 'Slave Lake ',
    city: 'Slave Lake',
    country: 'Canada',
    IATA: 'YZH',
    ICAO: 'CYZH',
    lat: '55.2930984497',
    lon: '-114.777000427',
    timezone: '-7'
  },
  {
    name: 'Sandspit ',
    city: 'Sandspit',
    country: 'Canada',
    IATA: 'YZP',
    ICAO: 'CYZP',
    lat: '53.25429916379999',
    lon: '-131.813995361',
    timezone: '-8'
  },
  {
    name: 'Chris Hadfield ',
    city: 'Sarnia',
    country: 'Canada',
    IATA: 'YZR',
    ICAO: 'CYZR',
    lat: '42.9994010925293',
    lon: '-82.30889892578125',
    timezone: '-5'
  },
  {
    name: 'Port Hardy ',
    city: 'Port Hardy',
    country: 'Canada',
    IATA: 'YZT',
    ICAO: 'CYZT',
    lat: '50.680599212646484',
    lon: '-127.36699676513672',
    timezone: '-8'
  },
  {
    name: 'Whitecourt ',
    city: 'Whitecourt',
    country: 'Canada',
    IATA: 'YZU',
    ICAO: 'CYZU',
    lat: '54.14390182495117',
    lon: '-115.78700256347656',
    timezone: '-7'
  },
  {
    name: 'Sept-\u00celes ',
    city: 'Sept-iles',
    country: 'Canada',
    IATA: 'YZV',
    ICAO: 'CYZV',
    lat: '50.22330093383789',
    lon: '-66.2656021118164',
    timezone: '-5'
  },
  {
    name: 'Teslin ',
    city: 'Teslin',
    country: 'Canada',
    IATA: 'YZW',
    ICAO: 'CYZW',
    lat: '60.17279815673828',
    lon: '-132.7429962158203',
    timezone: '-8'
  },
  {
    name: 'CFB Greenwood',
    city: 'Greenwood',
    country: 'Canada',
    IATA: 'YZX',
    ICAO: 'CYZX',
    lat: '44.98440170288086',
    lon: '-64.91690063476562',
    timezone: '-4'
  },
  {
    name: 'Faro ',
    city: 'Faro',
    country: 'Canada',
    IATA: 'ZFA',
    ICAO: 'CZFA',
    lat: '62.20750045776367',
    lon: '-133.37600708007812',
    timezone: '-8'
  },
  {
    name: 'Fort Mcpherson ',
    city: 'Fort Mcpherson',
    country: 'Canada',
    IATA: 'ZFM',
    ICAO: 'CZFM',
    lat: '67.40750122070312',
    lon: '-134.86099243164062',
    timezone: '-7'
  },
  {
    name: 'Blida ',
    city: 'Blida',
    country: 'Algeria',
    IATA: 'QLD',
    ICAO: 'DAAB',
    lat: '36.50360107421875',
    lon: '2.8141698837280273',
    timezone: '1'
  },
  {
    name: 'Bou Saada ',
    city: 'Bou Saada',
    country: 'Algeria',
    IATA: 'BUJ',
    ICAO: 'DAAD',
    lat: '35.33250045776367',
    lon: '4.206389904022217',
    timezone: '1'
  },
  {
    name: 'Soummam ',
    city: 'Bejaja',
    country: 'Algeria',
    IATA: 'BJA',
    ICAO: 'DAAE',
    lat: '36.7120018005',
    lon: '5.0699200630200005',
    timezone: '1'
  },
  {
    name: 'Houari Boumediene ',
    city: 'Algier',
    country: 'Algeria',
    IATA: 'ALG',
    ICAO: 'DAAG',
    lat: '36.691001892089844',
    lon: '3.215409994125366',
    timezone: '1'
  },
  {
    name: 'Djanet Inedbirene ',
    city: 'Djanet',
    country: 'Algeria',
    IATA: 'DJG',
    ICAO: 'DAAJ',
    lat: '24.292801',
    lon: '9.45244',
    timezone: '1'
  },
  {
    name: 'Boufarik ',
    city: 'Boufarik',
    country: 'Algeria',
    IATA: '\\N',
    ICAO: 'DAAK',
    lat: '36.545799',
    lon: '2.87611',
    timezone: '1'
  },
  {
    name: 'Reggane ',
    city: 'Reggan',
    country: 'Algeria',
    IATA: '\\N',
    ICAO: 'DAAN',
    lat: '26.7101',
    lon: '0.285647',
    timezone: '1'
  },
  {
    name: 'Illizi Takhamalt ',
    city: 'Illizi',
    country: 'Algeria',
    IATA: 'VVZ',
    ICAO: 'DAAP',
    lat: '26.7234992981',
    lon: '8.62265014648',
    timezone: '1'
  },
  {
    name: 'Ain Oussera ',
    city: 'Ain Oussera',
    country: 'Algeria',
    IATA: '\\N',
    ICAO: 'DAAQ',
    lat: '35.52539825439453',
    lon: '2.8787100315093994',
    timezone: '1'
  },
  {
    name: 'Aguenar \u2013 Hadj Bey Akhamok ',
    city: 'Tamanrasset',
    country: 'Algeria',
    IATA: 'TMR',
    ICAO: 'DAAT',
    lat: '22.8115005493',
    lon: '5.45107984543',
    timezone: '1'
  },
  {
    name: 'Jijel Ferhat Abbas ',
    city: 'Jijel',
    country: 'Algeria',
    IATA: 'GJL',
    ICAO: 'DAAV',
    lat: '36.7951011658',
    lon: '5.87361001968',
    timezone: '1'
  },
  {
    name: 'Mecheria ',
    city: 'Mecheria',
    country: 'Algeria',
    IATA: 'MZW',
    ICAO: 'DAAY',
    lat: '33.535900116',
    lon: '-0.242353007197',
    timezone: '1'
  },
  {
    name: 'Relizane ',
    city: 'Relizane',
    country: 'Algeria',
    IATA: '\\N',
    ICAO: 'DAAZ',
    lat: '35.752201',
    lon: '0.626272',
    timezone: '1'
  },
  {
    name: 'Rabah Bitat ',
    city: 'Annaba',
    country: 'Algeria',
    IATA: 'AAE',
    ICAO: 'DABB',
    lat: '36.822201',
    lon: '7.809174',
    timezone: '1'
  },
  {
    name: 'Mohamed Boudiaf Intl ',
    city: 'Constantine',
    country: 'Algeria',
    IATA: 'CZL',
    ICAO: 'DABC',
    lat: '36.2760009765625',
    lon: '6.620389938354492',
    timezone: '1'
  },
  {
    name: 'Cheikh Larbi T\u00e9bessi ',
    city: 'Tebessa',
    country: 'Algeria',
    IATA: 'TEE',
    ICAO: 'DABS',
    lat: '35.4315986633',
    lon: '8.12071990967',
    timezone: '1'
  },
  {
    name: "Hassi R'Mel ",
    city: 'Tilrempt',
    country: 'Algeria',
    IATA: 'HRM',
    ICAO: 'DAFH',
    lat: '32.93040084838867',
    lon: '3.311539888381958',
    timezone: '1'
  },
  {
    name: 'Bou Chekif ',
    city: 'Tiaret',
    country: 'Algeria',
    IATA: 'TID',
    ICAO: 'DAOB',
    lat: '35.3410987854',
    lon: '1.46315002441',
    timezone: '1'
  },
  {
    name: 'Bou Sfer ',
    city: 'Bou Sfer',
    country: 'Algeria',
    IATA: '\\N',
    ICAO: 'DAOE',
    lat: '35.73540115356445',
    lon: '-0.8053889870643616',
    timezone: '1'
  },
  {
    name: 'Tindouf ',
    city: 'Tindouf',
    country: 'Algeria',
    IATA: 'TIN',
    ICAO: 'DAOF',
    lat: '27.7003993988',
    lon: '-8.167099952700001',
    timezone: '1'
  },
  {
    name: 'Ech Cheliff ',
    city: 'Ech-cheliff',
    country: 'Algeria',
    IATA: 'CFK',
    ICAO: 'DAOI',
    lat: '36.2126998901',
    lon: '1.33176994324',
    timezone: '1'
  },
  {
    name: 'Tafaraoui ',
    city: 'Oran',
    country: 'Algeria',
    IATA: 'TAF',
    ICAO: 'DAOL',
    lat: '35.54240036010742',
    lon: '-0.5322780013084412',
    timezone: '1'
  },
  {
    name: 'Zenata \u2013 Messali El Hadj ',
    city: 'Tlemcen',
    country: 'Algeria',
    IATA: 'TLM',
    ICAO: 'DAON',
    lat: '35.0167007446',
    lon: '-1.45000004768',
    timezone: '1'
  },
  {
    name: 'Es Senia ',
    city: 'Oran',
    country: 'Algeria',
    IATA: 'ORN',
    ICAO: 'DAOO',
    lat: '35.6239013672',
    lon: '-0.6211829781529999',
    timezone: '1'
  },
  {
    name: 'Sidi Bel Abbes ',
    city: 'Sidi Bel Abbes',
    country: 'Algeria',
    IATA: 'BFW',
    ICAO: 'DAOS',
    lat: '35.1717987061',
    lon: '-0.593275010586',
    timezone: '1'
  },
  {
    name: 'Ghriss ',
    city: 'Ghriss',
    country: 'Algeria',
    IATA: 'MUW',
    ICAO: 'DAOV',
    lat: '35.207698822021484',
    lon: '0.14714199304580688',
    timezone: '1'
  },
  {
    name: 'Touat Cheikh Sidi Mohamed Belkebir ',
    city: 'Adrar',
    country: 'Algeria',
    IATA: 'AZR',
    ICAO: 'DAUA',
    lat: '27.837600708007812',
    lon: '-0.18641400337219238',
    timezone: '1'
  },
  {
    name: 'Biskra ',
    city: 'Biskra',
    country: 'Algeria',
    IATA: 'BSK',
    ICAO: 'DAUB',
    lat: '34.793300628699996',
    lon: '5.73823022842',
    timezone: '1'
  },
  {
    name: 'El Golea ',
    city: 'El Golea',
    country: 'Algeria',
    IATA: 'ELG',
    ICAO: 'DAUE',
    lat: '30.571300506591797',
    lon: '2.8595900535583496',
    timezone: '1'
  },
  {
    name: 'Noum\u00e9rat - Moufdi Zakaria ',
    city: 'Ghardaia',
    country: 'Algeria',
    IATA: 'GHA',
    ICAO: 'DAUG',
    lat: '32.38410186767578',
    lon: '3.794110059738159',
    timezone: '1'
  },
  {
    name: 'Oued Irara ',
    city: 'Hassi Messaoud',
    country: 'Algeria',
    IATA: 'HME',
    ICAO: 'DAUH',
    lat: '31.673000335699996',
    lon: '6.140439987180001',
    timezone: '1'
  },
  {
    name: 'In Salah ',
    city: 'In Salah',
    country: 'Algeria',
    IATA: 'INZ',
    ICAO: 'DAUI',
    lat: '27.250999450699997',
    lon: '2.51202011108',
    timezone: '1'
  },
  {
    name: 'Touggourt Sidi Madhi ',
    city: 'Touggourt',
    country: 'Algeria',
    IATA: 'TGR',
    ICAO: 'DAUK',
    lat: '33.06779861450195',
    lon: '6.088669776916504',
    timezone: '1'
  },
  {
    name: 'Laghouat ',
    city: 'Laghouat',
    country: 'Algeria',
    IATA: 'LOO',
    ICAO: 'DAUL',
    lat: '33.764400482199996',
    lon: '2.92833995819',
    timezone: '1'
  },
  {
    name: 'Timimoun ',
    city: 'Timimoun',
    country: 'Algeria',
    IATA: 'TMX',
    ICAO: 'DAUT',
    lat: '29.2371006012',
    lon: '0.276033014059',
    timezone: '1'
  },
  {
    name: 'Ain el Beida ',
    city: 'Ouargla',
    country: 'Algeria',
    IATA: 'OGX',
    ICAO: 'DAUU',
    lat: '31.917200088500977',
    lon: '5.412779808044434',
    timezone: '1'
  },
  {
    name: 'In Am\u00e9nas ',
    city: 'Zarzaitine',
    country: 'Algeria',
    IATA: 'IAM',
    ICAO: 'DAUZ',
    lat: '28.0515',
    lon: '9.64291',
    timezone: '1'
  },
  {
    name: 'Cadjehoun ',
    city: 'Cotonou',
    country: 'Benin',
    IATA: 'COO',
    ICAO: 'DBBB',
    lat: '6.357230186462402',
    lon: '2.384350061416626',
    timezone: '1'
  },
  {
    name: 'Ouagadougou ',
    city: 'Ouagadougou',
    country: 'Burkina Faso',
    IATA: 'OUA',
    ICAO: 'DFFD',
    lat: '12.3532',
    lon: '-1.51242',
    timezone: '0'
  },
  {
    name: 'Bobo Dioulasso ',
    city: 'Bobo-dioulasso',
    country: 'Burkina Faso',
    IATA: 'BOY',
    ICAO: 'DFOO',
    lat: '11.160099983215332',
    lon: '-4.33096981048584',
    timezone: '0'
  },
  {
    name: 'Kotoka Intl ',
    city: 'Accra',
    country: 'Ghana',
    IATA: 'ACC',
    ICAO: 'DGAA',
    lat: '5.605189800262451',
    lon: '-0.16678600013256073',
    timezone: '0'
  },
  {
    name: 'Tamale ',
    city: 'Tamale',
    country: 'Ghana',
    IATA: 'TML',
    ICAO: 'DGLE',
    lat: '9.55718994140625',
    lon: '-0.8632140159606934',
    timezone: '0'
  },
  {
    name: 'Wa ',
    city: 'Wa',
    country: 'Ghana',
    IATA: '\\N',
    ICAO: 'DGLW',
    lat: '10.0826997756958',
    lon: '-2.507689952850342',
    timezone: '0'
  },
  {
    name: 'Sunyani ',
    city: 'Sunyani',
    country: 'Ghana',
    IATA: 'NYI',
    ICAO: 'DGSN',
    lat: '7.361830234527588',
    lon: '-2.3287599086761475',
    timezone: '0'
  },
  {
    name: 'Takoradi ',
    city: 'Takoradi',
    country: 'Ghana',
    IATA: 'TKD',
    ICAO: 'DGTK',
    lat: '4.896059989929199',
    lon: '-1.7747600078582764',
    timezone: '0'
  },
  {
    name: 'Port Bouet ',
    city: 'Abidjan',
    country: "Cote d'Ivoire",
    IATA: 'ABJ',
    ICAO: 'DIAP',
    lat: '5.261390209197998',
    lon: '-3.9262900352478027',
    timezone: '0'
  },
  {
    name: 'Bouak\u00e9 ',
    city: 'Bouake',
    country: "Cote d'Ivoire",
    IATA: 'BYK',
    ICAO: 'DIBK',
    lat: '7.738800048828125',
    lon: '-5.073669910430908',
    timezone: '0'
  },
  {
    name: 'Daloa ',
    city: 'Daloa',
    country: "Cote d'Ivoire",
    IATA: 'DJO',
    ICAO: 'DIDL',
    lat: '6.792809963226318',
    lon: '-6.473189830780029',
    timezone: '0'
  },
  {
    name: 'Korhogo ',
    city: 'Korhogo',
    country: "Cote d'Ivoire",
    IATA: 'HGO',
    ICAO: 'DIKO',
    lat: '9.38718032837',
    lon: '-5.55666017532',
    timezone: '0'
  },
  {
    name: 'Man ',
    city: 'Man',
    country: "Cote d'Ivoire",
    IATA: 'MJC',
    ICAO: 'DIMN',
    lat: '7.272069931030273',
    lon: '-7.58735990524292',
    timezone: '0'
  },
  {
    name: 'San Pedro ',
    city: 'San Pedro',
    country: "Cote d'Ivoire",
    IATA: 'SPY',
    ICAO: 'DISP',
    lat: '4.746719837188721',
    lon: '-6.660820007324219',
    timezone: '0'
  },
  {
    name: 'Yamoussoukro ',
    city: 'Yamoussoukro',
    country: "Cote d'Ivoire",
    IATA: 'ASK',
    ICAO: 'DIYO',
    lat: '6.9031701088',
    lon: '-5.36558008194',
    timezone: '0'
  },
  {
    name: 'Nnamdi Azikiwe Intl ',
    city: 'Abuja',
    country: 'Nigeria',
    IATA: 'ABV',
    ICAO: 'DNAA',
    lat: '9.006790161132812',
    lon: '7.263169765472412',
    timezone: '1'
  },
  {
    name: 'Akure ',
    city: 'Akure',
    country: 'Nigeria',
    IATA: 'AKR',
    ICAO: 'DNAK',
    lat: '7.246739864349365',
    lon: '5.3010101318359375',
    timezone: '1'
  },
  {
    name: 'Benin ',
    city: 'Benin',
    country: 'Nigeria',
    IATA: 'BNI',
    ICAO: 'DNBE',
    lat: '6.316979885101318',
    lon: '5.5995001792907715',
    timezone: '1'
  },
  {
    name: 'Margaret Ekpo Intl ',
    city: 'Calabar',
    country: 'Nigeria',
    IATA: 'CBQ',
    ICAO: 'DNCA',
    lat: '4.976019859313965',
    lon: '8.347200393676758',
    timezone: '1'
  },
  {
    name: 'Akanu Ibiam Intl ',
    city: 'Enugu',
    country: 'Nigeria',
    IATA: 'ENU',
    ICAO: 'DNEN',
    lat: '6.474269866943359',
    lon: '7.561960220336914',
    timezone: '1'
  },
  {
    name: 'Gusau ',
    city: 'Gusau',
    country: 'Nigeria',
    IATA: '\\N',
    ICAO: 'DNGU',
    lat: '12.1717',
    lon: '6.69611',
    timezone: '1'
  },
  {
    name: 'Ibadan ',
    city: 'Ibadan',
    country: 'Nigeria',
    IATA: 'IBA',
    ICAO: 'DNIB',
    lat: '7.362460136413574',
    lon: '3.97832989692688',
    timezone: '1'
  },
  {
    name: 'Ilorin Intl ',
    city: 'Ilorin',
    country: 'Nigeria',
    IATA: 'ILR',
    ICAO: 'DNIL',
    lat: '8.440210342407227',
    lon: '4.493919849395752',
    timezone: '1'
  },
  {
    name: 'Yakubu Gowon ',
    city: 'Jos',
    country: 'Nigeria',
    IATA: 'JOS',
    ICAO: 'DNJO',
    lat: '9.639829635620117',
    lon: '8.869050025939941',
    timezone: '1'
  },
  {
    name: 'Kaduna ',
    city: 'Kaduna',
    country: 'Nigeria',
    IATA: 'KAD',
    ICAO: 'DNKA',
    lat: '10.696000099182129',
    lon: '7.320109844207764',
    timezone: '1'
  },
  {
    name: 'Mallam Aminu Intl ',
    city: 'Kano',
    country: 'Nigeria',
    IATA: 'KAN',
    ICAO: 'DNKN',
    lat: '12.0476',
    lon: '8.52462',
    timezone: '1'
  },
  {
    name: 'Maiduguri Intl ',
    city: 'Maiduguri',
    country: 'Nigeria',
    IATA: 'MIU',
    ICAO: 'DNMA',
    lat: '11.855299949645996',
    lon: '13.080900192260742',
    timezone: '1'
  },
  {
    name: 'Makurdi ',
    city: 'Makurdi',
    country: 'Nigeria',
    IATA: 'MDI',
    ICAO: 'DNMK',
    lat: '7.70388',
    lon: '8.61394',
    timezone: '1'
  },
  {
    name: 'Murtala Muhammed Intl ',
    city: 'Lagos',
    country: 'Nigeria',
    IATA: 'LOS',
    ICAO: 'DNMM',
    lat: '6.5773701667785645',
    lon: '3.321160078048706',
    timezone: '1'
  },
  {
    name: 'Minna ',
    city: 'Minna',
    country: 'Nigeria',
    IATA: 'MXJ',
    ICAO: 'DNMN',
    lat: '9.652170181274414',
    lon: '6.462259769439697',
    timezone: '1'
  },
  {
    name: 'Port Harcourt Intl ',
    city: 'Port Hartcourt',
    country: 'Nigeria',
    IATA: 'PHC',
    ICAO: 'DNPO',
    lat: '5.0154900550842285',
    lon: '6.94959020614624',
    timezone: '1'
  },
  {
    name: 'Sadiq Abubakar III Intl ',
    city: 'Sokoto',
    country: 'Nigeria',
    IATA: 'SKO',
    ICAO: 'DNSO',
    lat: '12.916299819946289',
    lon: '5.207190036773682',
    timezone: '1'
  },
  {
    name: 'Yola ',
    city: 'Yola',
    country: 'Nigeria',
    IATA: 'YOL',
    ICAO: 'DNYO',
    lat: '9.257550239562988',
    lon: '12.430399894714355',
    timezone: '1'
  },
  {
    name: 'Zaria ',
    city: 'Zaria',
    country: 'Nigeria',
    IATA: 'ZAR',
    ICAO: 'DNZA',
    lat: '11.1302',
    lon: '7.68581',
    timezone: '1'
  },
  {
    name: 'Maradi ',
    city: 'Maradi',
    country: 'Niger',
    IATA: 'MFQ',
    ICAO: 'DRRM',
    lat: '13.5024995803833',
    lon: '7.1267499923706055',
    timezone: '1'
  },
  {
    name: 'Diori Hamani Intl ',
    city: 'Niamey',
    country: 'Niger',
    IATA: 'NIM',
    ICAO: 'DRRN',
    lat: '13.4815',
    lon: '2.18361',
    timezone: '1'
  },
  {
    name: 'Tahoua ',
    city: 'Tahoua',
    country: 'Niger',
    IATA: 'THZ',
    ICAO: 'DRRT',
    lat: '14.875699996948242',
    lon: '5.265359878540039',
    timezone: '1'
  },
  {
    name: 'Mano Dayak Intl ',
    city: 'Agadez',
    country: 'Niger',
    IATA: 'AJY',
    ICAO: 'DRZA',
    lat: '16.965999603271484',
    lon: '8.000109672546387',
    timezone: '1'
  },
  {
    name: 'Dirkou ',
    city: 'Dirkou',
    country: 'Niger',
    IATA: '\\N',
    ICAO: 'DRZD',
    lat: '18.968700408935547',
    lon: '12.86870002746582',
    timezone: '1'
  },
  {
    name: 'Diffa ',
    city: 'Diffa',
    country: 'Niger',
    IATA: '\\N',
    ICAO: 'DRZF',
    lat: '13.372900009155273',
    lon: '12.626700401306152',
    timezone: '1'
  },
  {
    name: 'Zinder ',
    city: 'Zinder',
    country: 'Niger',
    IATA: 'ZND',
    ICAO: 'DRZR',
    lat: '13.779000282287598',
    lon: '8.983759880065918',
    timezone: '1'
  },
  {
    name: 'Monastir Habib Bourguiba Intl ',
    city: 'Monastir',
    country: 'Tunisia',
    IATA: 'MIR',
    ICAO: 'DTMB',
    lat: '35.75809860229492',
    lon: '10.75469970703125',
    timezone: '1'
  },
  {
    name: 'Tunis Carthage Intl ',
    city: 'Tunis',
    country: 'Tunisia',
    IATA: 'TUN',
    ICAO: 'DTTA',
    lat: '36.85100173950195',
    lon: '10.22719955444336',
    timezone: '1'
  },
  {
    name: 'Sidi Ahmed Air Base',
    city: 'Bizerte',
    country: 'Tunisia',
    IATA: '\\N',
    ICAO: 'DTTB',
    lat: '37.245398',
    lon: '9.79145',
    timezone: '1'
  },
  {
    name: 'Remada Air Base',
    city: 'Remada',
    country: 'Tunisia',
    IATA: '\\N',
    ICAO: 'DTTD',
    lat: '32.30619812011719',
    lon: '10.382100105285645',
    timezone: '1'
  },
  {
    name: 'Gafsa Ksar Intl ',
    city: 'Gafsa',
    country: 'Tunisia',
    IATA: 'GAF',
    ICAO: 'DTTF',
    lat: '34.422000885009766',
    lon: '8.822500228881836',
    timezone: '1'
  },
  {
    name: 'Gab\u00e8s Matmata Intl ',
    city: 'Gabes',
    country: 'Tunisia',
    IATA: 'GAE',
    ICAO: 'DTTG',
    lat: '33.87689971923828',
    lon: '10.103300094604492',
    timezone: '1'
  },
  {
    name: 'Borj El Amri ',
    city: 'Bordj El Amri',
    country: 'Tunisia',
    IATA: '\\N',
    ICAO: 'DTTI',
    lat: '36.72129821777344',
    lon: '9.94314956665039',
    timezone: '1'
  },
  {
    name: 'Djerba Zarzis Intl ',
    city: 'Djerba',
    country: 'Tunisia',
    IATA: 'DJE',
    ICAO: 'DTTJ',
    lat: '33.875',
    lon: '10.775500297546387',
    timezone: '1'
  },
  {
    name: 'El Borma ',
    city: 'El Borma',
    country: 'Tunisia',
    IATA: 'EBM',
    ICAO: 'DTTR',
    lat: '31.704299926757812',
    lon: '9.254619598388672',
    timezone: '1'
  },
  {
    name: 'Sfax Thyna Intl ',
    city: 'Sfax',
    country: 'Tunisia',
    IATA: 'SFA',
    ICAO: 'DTTX',
    lat: '34.71799850463867',
    lon: '10.690999984741211',
    timezone: '1'
  },
  {
    name: 'Tozeur Nefta Intl ',
    city: 'Tozeur',
    country: 'Tunisia',
    IATA: 'TOE',
    ICAO: 'DTTZ',
    lat: '33.939701080322266',
    lon: '8.110560417175293',
    timezone: '1'
  },
  {
    name: 'Niamtougou Intl ',
    city: 'Niatougou',
    country: 'Togo',
    IATA: 'LRL',
    ICAO: 'DXNG',
    lat: '9.767330169677734',
    lon: '1.091249942779541',
    timezone: '0'
  },
  {
    name: 'Lom\u00e9-Tokoin ',
    city: 'Lome',
    country: 'Togo',
    IATA: 'LFW',
    ICAO: 'DXXX',
    lat: '6.165609836578369',
    lon: '1.2545100450515747',
    timezone: '0'
  },
  {
    name: 'Antwerp Intl  (Deurne)',
    city: 'Antwerp',
    country: 'Belgium',
    IATA: 'ANR',
    ICAO: 'EBAW',
    lat: '51.1893997192',
    lon: '4.46027994156',
    timezone: '1'
  },
  {
    name: 'Beauvechain Air Base',
    city: 'Beauvechain',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBBE',
    lat: '50.75859832763672',
    lon: '4.768330097198486',
    timezone: '1'
  },
  {
    name: 'Kleine Brogel Air Base',
    city: 'Kleine Brogel',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBBL',
    lat: '51.168301',
    lon: '5.47',
    timezone: '1'
  },
  {
    name: 'Brussels ',
    city: 'Brussels',
    country: 'Belgium',
    IATA: 'BRU',
    ICAO: 'EBBR',
    lat: '50.901401519800004',
    lon: '4.48443984985',
    timezone: '1'
  },
  {
    name: 'Jehonville Air Base',
    city: 'Bertrix',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBBX',
    lat: '49.891700744628906',
    lon: '5.2238898277282715',
    timezone: '1'
  },
  {
    name: 'Brussels South Charleroi ',
    city: 'Charleroi',
    country: 'Belgium',
    IATA: 'CRL',
    ICAO: 'EBCI',
    lat: '50.459202',
    lon: '4.45382',
    timezone: '1'
  },
  {
    name: 'Chi\u00e8vres Air Base',
    city: 'Chievres',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBCV',
    lat: '50.575801849365234',
    lon: '3.8310000896453857',
    timezone: '1'
  },
  {
    name: 'Koksijde Air Base',
    city: 'Koksijde',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBFN',
    lat: '51.090301513671875',
    lon: '2.652780055999756',
    timezone: '1'
  },
  {
    name: 'Florennes Air Base',
    city: 'Florennes',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBFS',
    lat: '50.2433013916',
    lon: '4.64583015442',
    timezone: '1'
  },
  {
    name: 'Wevelgem ',
    city: 'Kortrijk-vevelgem',
    country: 'Belgium',
    IATA: 'KJK',
    ICAO: 'EBKT',
    lat: '50.817199707',
    lon: '3.20472002029',
    timezone: '1'
  },
  {
    name: 'Li\u00e8ge ',
    city: 'Liege',
    country: 'Belgium',
    IATA: 'LGG',
    ICAO: 'EBLG',
    lat: '50.63740158081055',
    lon: '5.443220138549805',
    timezone: '1'
  },
  {
    name: 'Ostend-Bruges Intl ',
    city: 'Ostend',
    country: 'Belgium',
    IATA: 'OST',
    ICAO: 'EBOS',
    lat: '51.198898315399994',
    lon: '2.8622200489',
    timezone: '1'
  },
  {
    name: 'Zutendaal Air Base',
    city: 'Zutendaal',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBSL',
    lat: '50.9474983215332',
    lon: '5.590559959411621',
    timezone: '1'
  },
  {
    name: 'Brustem Airfield Sint Truiden',
    city: 'Sint-truiden',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBST',
    lat: '50.791901',
    lon: '5.20167',
    timezone: '1'
  },
  {
    name: 'Saint Hubert Air Base',
    city: 'St.-hubert',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBSU',
    lat: '50.034400939941406',
    lon: '5.440810203552246',
    timezone: '1'
  },
  {
    name: 'Ursel Air Base',
    city: 'Ursel',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBUL',
    lat: '51.14419937133789',
    lon: '3.475559949874878',
    timezone: '1'
  },
  {
    name: 'Weelde Air Base',
    city: 'Weelde',
    country: 'Belgium',
    IATA: '\\N',
    ICAO: 'EBWE',
    lat: '51.394798278808594',
    lon: '4.9601898193359375',
    timezone: '1'
  },
  {
    name: 'Zoersel (Oostmalle) Airfield',
    city: 'Zoersel',
    country: 'Belgium',
    IATA: 'OBL',
    ICAO: 'EBZR',
    lat: '51.264702',
    lon: '4.75333',
    timezone: '1'
  },
  {
    name: 'Flugplatz Bautzen',
    city: 'Bautzen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAB',
    lat: '51.193611',
    lon: '14.519722',
    timezone: '1'
  },
  {
    name: 'Altenburg-Nobitz ',
    city: 'Altenburg',
    country: 'Germany',
    IATA: 'AOC',
    ICAO: 'EDAC',
    lat: '50.981945',
    lon: '12.506389',
    timezone: '1'
  },
  {
    name: 'Dessau Airfield',
    city: 'Dessau',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAD',
    lat: '51.831694',
    lon: '12.190962',
    timezone: '1'
  },
  {
    name: 'Eisenh\u00fcttenstadt Airfield',
    city: 'Eisenhuettenstadt',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAE',
    lat: '52.195856',
    lon: '14.58753',
    timezone: '1'
  },
  {
    name: 'Gro\u00dfenhain ',
    city: 'Suhl',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAK',
    lat: '51.30805587768555',
    lon: '13.555556297302246',
    timezone: '1'
  },
  {
    name: 'Merseburg ',
    city: 'Muehlhausen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAM',
    lat: '51.3630556',
    lon: '11.9408333',
    timezone: '1'
  },
  {
    name: 'Halle-Oppin ',
    city: 'Halle',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAQ',
    lat: '51.552223',
    lon: '12.053889',
    timezone: '1'
  },
  {
    name: 'Riesa-G\u00f6hlis ',
    city: 'Riesa',
    country: 'Germany',
    IATA: 'IES',
    ICAO: 'EDAU',
    lat: '51.2936096191',
    lon: '13.3561105728',
    timezone: '1'
  },
  {
    name: 'Rechlin-L\u00e4rz ',
    city: 'Rechlin-laerz',
    country: 'Germany',
    IATA: 'REB',
    ICAO: 'EDAX',
    lat: '53.306388855',
    lon: '12.7522220612',
    timezone: '1'
  },
  {
    name: 'Strausberg ',
    city: 'Strausberg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDAY',
    lat: '52.5805549621582',
    lon: '13.916666984558105',
    timezone: '1'
  },
  {
    name: 'Sch\u00f6nhagen ',
    city: 'Schoenhagen',
    country: 'Germany',
    IATA: 'QXH',
    ICAO: 'EDAZ',
    lat: '52.203609',
    lon: '13.156389',
    timezone: '1'
  },
  {
    name: 'Barth ',
    city: 'Barth',
    country: 'Germany',
    IATA: 'BBH',
    ICAO: 'EDBH',
    lat: '54.338253',
    lon: '12.710515',
    timezone: '1'
  },
  {
    name: 'Jena-Sch\u00f6ngleina Airfield',
    city: 'Jena',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDBJ',
    lat: '50.915279',
    lon: '11.714444',
    timezone: '1'
  },
  {
    name: 'Kyritz ',
    city: 'Kyritz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDBK',
    lat: '52.918888092041016',
    lon: '12.425277709960938',
    timezone: '1'
  },
  {
    name: 'Magdeburg City ',
    city: 'Magdeburg',
    country: 'Germany',
    IATA: 'ZMG',
    ICAO: 'EDBM',
    lat: '52.073612',
    lon: '11.626389',
    timezone: '1'
  },
  {
    name: 'Rothenburg/G\u00f6rlitz ',
    city: 'Rothenburg/ol',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDBR',
    lat: '51.36333465576172',
    lon: '14.949999809265137',
    timezone: '1'
  },
  {
    name: 'Anklam Airfield',
    city: 'Anklam',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDCA',
    lat: '53.832779',
    lon: '13.668611',
    timezone: '1'
  },
  {
    name: 'Cottbus-Drewitz ',
    city: 'Cottbus',
    country: 'Germany',
    IATA: 'CBU',
    ICAO: 'EDCD',
    lat: '51.889442',
    lon: '14.531944',
    timezone: '1'
  },
  {
    name: 'Kamenz ',
    city: 'Kamenz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDCM',
    lat: '51.29694366455078',
    lon: '14.1274995803833',
    timezone: '1'
  },
  {
    name: 'Berlin-Sch\u00f6nefeld ',
    city: 'Berlin',
    country: 'Germany',
    IATA: 'SXF',
    ICAO: 'EDDB',
    lat: '52.380001',
    lon: '13.5225',
    timezone: '1'
  },
  {
    name: 'Dresden ',
    city: 'Dresden',
    country: 'Germany',
    IATA: 'DRS',
    ICAO: 'EDDC',
    lat: '51.1328010559082',
    lon: '13.767200469970703',
    timezone: '1'
  },
  {
    name: 'Erfurt ',
    city: 'Erfurt',
    country: 'Germany',
    IATA: 'ERF',
    ICAO: 'EDDE',
    lat: '50.979801177978516',
    lon: '10.958100318908691',
    timezone: '1'
  },
  {
    name: 'Frankfurt am Main ',
    city: 'Frankfurt',
    country: 'Germany',
    IATA: 'FRA',
    ICAO: 'EDDF',
    lat: '50.033333',
    lon: '8.570556',
    timezone: '1'
  },
  {
    name: 'M\u00fcnster Osnabr\u00fcck ',
    city: 'Munster',
    country: 'Germany',
    IATA: 'FMO',
    ICAO: 'EDDG',
    lat: '52.134601593',
    lon: '7.68483018875',
    timezone: '1'
  },
  {
    name: 'Hamburg ',
    city: 'Hamburg',
    country: 'Germany',
    IATA: 'HAM',
    ICAO: 'EDDH',
    lat: '53.630401611328',
    lon: '9.9882297515869',
    timezone: '1'
  },
  {
    name: 'Berlin-Tempelhof Intl ',
    city: 'Berlin',
    country: 'Germany',
    IATA: 'THF',
    ICAO: 'EDDI',
    lat: '52.472999572753906',
    lon: '13.403900146484375',
    timezone: '1'
  },
  {
    name: 'Cologne Bonn ',
    city: 'Cologne',
    country: 'Germany',
    IATA: 'CGN',
    ICAO: 'EDDK',
    lat: '50.8658981323',
    lon: '7.1427397728',
    timezone: '1'
  },
  {
    name: 'D\u00fcsseldorf ',
    city: 'Duesseldorf',
    country: 'Germany',
    IATA: 'DUS',
    ICAO: 'EDDL',
    lat: '51.289501',
    lon: '6.76678',
    timezone: '1'
  },
  {
    name: 'Munich ',
    city: 'Munich',
    country: 'Germany',
    IATA: 'MUC',
    ICAO: 'EDDM',
    lat: '48.353802',
    lon: '11.7861',
    timezone: '1'
  },
  {
    name: 'Nuremberg ',
    city: 'Nuernberg',
    country: 'Germany',
    IATA: 'NUE',
    ICAO: 'EDDN',
    lat: '49.498699',
    lon: '11.078056',
    timezone: '1'
  },
  {
    name: 'Leipzig/Halle ',
    city: 'Leipzig',
    country: 'Germany',
    IATA: 'LEJ',
    ICAO: 'EDDP',
    lat: '51.423889',
    lon: '12.236389',
    timezone: '1'
  },
  {
    name: 'Saarbr\u00fccken ',
    city: 'Saarbruecken',
    country: 'Germany',
    IATA: 'SCN',
    ICAO: 'EDDR',
    lat: '49.214599609400004',
    lon: '7.10950994492',
    timezone: '1'
  },
  {
    name: 'Stuttgart ',
    city: 'Stuttgart',
    country: 'Germany',
    IATA: 'STR',
    ICAO: 'EDDS',
    lat: '48.689899444599995',
    lon: '9.22196006775',
    timezone: '1'
  },
  {
    name: 'Berlin-Tegel ',
    city: 'Berlin',
    country: 'Germany',
    IATA: 'TXL',
    ICAO: 'EDDT',
    lat: '52.5597',
    lon: '13.2877',
    timezone: '1'
  },
  {
    name: 'Hannover ',
    city: 'Hannover',
    country: 'Germany',
    IATA: 'HAJ',
    ICAO: 'EDDV',
    lat: '52.461101532',
    lon: '9.685079574580001',
    timezone: '1'
  },
  {
    name: 'Bremen ',
    city: 'Bremen',
    country: 'Germany',
    IATA: 'BRE',
    ICAO: 'EDDW',
    lat: '53.0475006104',
    lon: '8.78666973114',
    timezone: '1'
  },
  {
    name: 'Frankfurt-Egelsbach ',
    city: 'Egelsbach',
    country: 'Germany',
    IATA: 'QEF',
    ICAO: 'EDFE',
    lat: '49.959999',
    lon: '8.645833',
    timezone: '1'
  },
  {
    name: 'Frankfurt-Hahn ',
    city: 'Hahn',
    country: 'Germany',
    IATA: 'HHN',
    ICAO: 'EDFH',
    lat: '49.9487',
    lon: '7.26389',
    timezone: '1'
  },
  {
    name: 'Mannheim-City ',
    city: 'Mannheim',
    country: 'Germany',
    IATA: 'MHG',
    ICAO: 'EDFM',
    lat: '49.473057',
    lon: '8.514167',
    timezone: '1'
  },
  {
    name: 'Allendorf/Eder ',
    city: 'Allendorf',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDFQ',
    lat: '51.03499984741211',
    lon: '8.680832862854004',
    timezone: '1'
  },
  {
    name: 'Worms ',
    city: 'Worms',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDFV',
    lat: '49.606945',
    lon: '8.368333',
    timezone: '1'
  },
  {
    name: 'Mainz-Finthen ',
    city: 'Mainz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDFZ',
    lat: '49.967499',
    lon: '8.147222',
    timezone: '1'
  },
  {
    name: 'Eisenach-Kindel ',
    city: 'Eisenach',
    country: 'Germany',
    IATA: 'EIB',
    ICAO: 'EDGE',
    lat: '50.991604',
    lon: '10.47973',
    timezone: '1'
  },
  {
    name: 'Siegerland ',
    city: 'Siegerland',
    country: 'Germany',
    IATA: 'SGE',
    ICAO: 'EDGS',
    lat: '50.707698822021484',
    lon: '8.082969665527344',
    timezone: '1'
  },
  {
    name: 'Hamburg-Finkenwerder ',
    city: 'Hamburg',
    country: 'Germany',
    IATA: 'XFW',
    ICAO: 'EDHI',
    lat: '53.5352783203125',
    lon: '9.835556030273438',
    timezone: '1'
  },
  {
    name: 'Kiel-Holtenau ',
    city: 'Kiel',
    country: 'Germany',
    IATA: 'KEL',
    ICAO: 'EDHK',
    lat: '54.37944412231445',
    lon: '10.145277976989746',
    timezone: '1'
  },
  {
    name: 'L\u00fcbeck Blankensee ',
    city: 'Luebeck',
    country: 'Germany',
    IATA: 'LBC',
    ICAO: 'EDHL',
    lat: '53.8054008484',
    lon: '10.7192001343',
    timezone: '1'
  },
  {
    name: 'Flugplatz Dahlemer Binz',
    city: 'Dahlemer Binz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDKV',
    lat: '50.405555725',
    lon: '6.5288891792',
    timezone: '1'
  },
  {
    name: 'Meinerzhagen ',
    city: 'Meinerzhagen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDKZ',
    lat: '51.099998474121094',
    lon: '7.599999904632568',
    timezone: '1'
  },
  {
    name: 'Arnsberg-Menden ',
    city: 'Arnsberg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDLA',
    lat: '51.483890533447266',
    lon: '7.8983330726623535',
    timezone: '1'
  },
  {
    name: 'Essen Mulheim ',
    city: 'Essen',
    country: 'Germany',
    IATA: 'ESS',
    ICAO: 'EDLE',
    lat: '51.40230178833008',
    lon: '6.9373297691345215',
    timezone: '1'
  },
  {
    name: 'Bielefeld ',
    city: 'Bielefeld',
    country: 'Germany',
    IATA: 'BFE',
    ICAO: 'EDLI',
    lat: '51.964722',
    lon: '8.544444',
    timezone: '1'
  },
  {
    name: 'M\u00f6nchengladbach ',
    city: 'Moenchengladbach',
    country: 'Germany',
    IATA: 'MGL',
    ICAO: 'EDLN',
    lat: '51.230278',
    lon: '6.504444',
    timezone: '1'
  },
  {
    name: 'Paderborn Lippstadt ',
    city: 'Paderborn',
    country: 'Germany',
    IATA: 'PAD',
    ICAO: 'EDLP',
    lat: '51.614101409899995',
    lon: '8.616319656369999',
    timezone: '1'
  },
  {
    name: 'Stadtlohn-Vreden ',
    city: 'Stadtlohn',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDLS',
    lat: '51.99583435058594',
    lon: '6.8405561447143555',
    timezone: '1'
  },
  {
    name: 'Dortmund ',
    city: 'Dortmund',
    country: 'Germany',
    IATA: 'DTM',
    ICAO: 'EDLW',
    lat: '51.51829910279999',
    lon: '7.61223983765',
    timezone: '1'
  },
  {
    name: 'Augsburg ',
    city: 'Augsburg',
    country: 'Germany',
    IATA: 'AGB',
    ICAO: 'EDMA',
    lat: '48.425278',
    lon: '10.931667',
    timezone: '1'
  },
  {
    name: 'Biberach a.d. Ri\u00df Airfield',
    city: 'Biberach',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDMB',
    lat: '48.111111',
    lon: '9.762778',
    timezone: '1'
  },
  {
    name: 'Eggenfelden ',
    city: 'Eggenfelden',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDME',
    lat: '48.39611053466797',
    lon: '12.723610877990723',
    timezone: '1'
  },
  {
    name: 'Mindelheim-Mattsies Airfield',
    city: 'Mindelheim',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDMN',
    lat: '48.106945',
    lon: '10.525',
    timezone: '1'
  },
  {
    name: 'Oberpfaffenhofen ',
    city: 'Oberpfaffenhofen',
    country: 'Germany',
    IATA: 'OBF',
    ICAO: 'EDMO',
    lat: '48.081402',
    lon: '11.2831',
    timezone: '1'
  },
  {
    name: 'Straubing ',
    city: 'Straubing',
    country: 'Germany',
    IATA: 'RBM',
    ICAO: 'EDMS',
    lat: '48.90083312988281',
    lon: '12.516667366027832',
    timezone: '1'
  },
  {
    name: 'Vilshofen ',
    city: 'Vilshofen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDMV',
    lat: '48.6349983215332',
    lon: '13.195555686950684',
    timezone: '1'
  },
  {
    name: 'Leutkirch-Unterzeil ',
    city: 'Leutkirch',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDNL',
    lat: '47.858890533447266',
    lon: '10.014166831970215',
    timezone: '1'
  },
  {
    name: 'Friedrichshafen ',
    city: 'Friedrichshafen',
    country: 'Germany',
    IATA: 'FDH',
    ICAO: 'EDNY',
    lat: '47.671298980699994',
    lon: '9.51148986816',
    timezone: '1'
  },
  {
    name: 'Schwerin Parchim ',
    city: 'Parchim',
    country: 'Germany',
    IATA: 'SZW',
    ICAO: 'EDOP',
    lat: '53.426998',
    lon: '11.7834',
    timezone: '1'
  },
  {
    name: 'Stendal-Borstel ',
    city: 'Stendal',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDOV',
    lat: '52.62888717651367',
    lon: '11.818611145019531',
    timezone: '1'
  },
  {
    name: 'Aalen-Heidenheim/Elchingen ',
    city: 'Aalen-heidenheim',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDPA',
    lat: '48.77777862548828',
    lon: '10.264721870422363',
    timezone: '1'
  },
  {
    name: 'Bayreuth ',
    city: 'Bayreuth',
    country: 'Germany',
    IATA: 'BYU',
    ICAO: 'EDQD',
    lat: '49.985001',
    lon: '11.64',
    timezone: '1'
  },
  {
    name: 'Burg Feuerstein ',
    city: 'Burg Feuerstein',
    country: 'Germany',
    IATA: 'URD',
    ICAO: 'EDQE',
    lat: '49.794166564941',
    lon: '11.133610725403',
    timezone: '1'
  },
  {
    name: 'Hof-Plauen ',
    city: 'Hof',
    country: 'Germany',
    IATA: 'HOQ',
    ICAO: 'EDQM',
    lat: '50.288612365722656',
    lon: '11.856389045715332',
    timezone: '1'
  },
  {
    name: 'Ha\u00dffurt-Schweinfurt ',
    city: 'Hassfurt',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDQT',
    lat: '50.0180549621582',
    lon: '10.529443740844727',
    timezone: '1'
  },
  {
    name: 'Koblenz-Winningen Airfield',
    city: 'Koblenz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDRK',
    lat: '50.325558',
    lon: '7.528611',
    timezone: '1'
  },
  {
    name: 'Trier-F\u00f6hren ',
    city: 'Trier',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDRT',
    lat: '49.863888',
    lon: '6.7875',
    timezone: '1'
  },
  {
    name: 'Speyer Airfield',
    city: 'Speyer',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDRY',
    lat: '49.304722',
    lon: '8.451389',
    timezone: '1'
  },
  {
    name: 'Zweibr\u00fccken ',
    city: 'Zweibruecken',
    country: 'Germany',
    IATA: 'ZQW',
    ICAO: 'EDRZ',
    lat: '49.2094',
    lon: '7.40056',
    timezone: '1'
  },
  {
    name: 'Donaueschingen-Villingen ',
    city: 'Donaueschingen',
    country: 'Germany',
    IATA: 'ZQL',
    ICAO: 'EDTD',
    lat: '47.97333145139999',
    lon: '8.52222156525',
    timezone: '1'
  },
  {
    name: 'Freiburg i. Br. ',
    city: 'Freiburg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDTF',
    lat: '48.022777557400005',
    lon: '7.83249998093',
    timezone: '1'
  },
  {
    name: 'Mengen-Hohentengen ',
    city: 'Mengen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDTM',
    lat: '48.053890228271484',
    lon: '9.372777938842773',
    timezone: '1'
  },
  {
    name: 'Adolf W\u00fcrth ',
    city: 'Schwaebisch Hall',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDTY',
    lat: '49.1183319092',
    lon: '9.783888816829998',
    timezone: '1'
  },
  {
    name: 'Finsterwalde/Schacksdorf ',
    city: 'Soest',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDUS',
    lat: '51.607498',
    lon: '13.743611',
    timezone: '1'
  },
  {
    name: 'Braunschweig-Wolfsburg ',
    city: 'Braunschweig',
    country: 'Germany',
    IATA: 'BWE',
    ICAO: 'EDVE',
    lat: '52.319199',
    lon: '10.5561',
    timezone: '1'
  },
  {
    name: 'Kassel-Calden ',
    city: 'Kassel',
    country: 'Germany',
    IATA: 'KSF',
    ICAO: 'EDVK',
    lat: '51.417273',
    lon: '9.384967',
    timezone: '1'
  },
  {
    name: 'Hildesheim ',
    city: 'Hildesheim',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDVM',
    lat: '52.18138885498047',
    lon: '9.946389198303223',
    timezone: '1'
  },
  {
    name: 'Bremerhaven ',
    city: 'Bremerhaven',
    country: 'Germany',
    IATA: 'BRV',
    ICAO: 'EDWB',
    lat: '53.506943',
    lon: '8.572778',
    timezone: '1'
  },
  {
    name: 'Emden ',
    city: 'Emden',
    country: 'Germany',
    IATA: 'EME',
    ICAO: 'EDWE',
    lat: '53.391109',
    lon: '7.2275',
    timezone: '1'
  },
  {
    name: 'Leer-Papenburg ',
    city: 'Leer',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDWF',
    lat: '53.271942138671875',
    lon: '7.441667079925537',
    timezone: '1'
  },
  {
    name: 'Wilhelmshaven-Mariensiel ',
    city: 'Wilhelmshaven',
    country: 'Germany',
    IATA: 'WVN',
    ICAO: 'EDWI',
    lat: '53.502220153808594',
    lon: '8.05222225189209',
    timezone: '1'
  },
  {
    name: 'Borkum ',
    city: 'Borkum',
    country: 'Germany',
    IATA: 'BMK',
    ICAO: 'EDWR',
    lat: '53.59639',
    lon: '6.709167',
    timezone: '1'
  },
  {
    name: 'Norderney ',
    city: 'Norderney',
    country: 'Germany',
    IATA: 'NRD',
    ICAO: 'EDWY',
    lat: '53.70694351196289',
    lon: '7.230000019073486',
    timezone: '1'
  },
  {
    name: 'Flensburg-Sch\u00e4ferhaus ',
    city: 'Flensburg',
    country: 'Germany',
    IATA: 'FLF',
    ICAO: 'EDXF',
    lat: '54.77333450317383',
    lon: '9.378889083862305',
    timezone: '1'
  },
  {
    name: 'Rendsburg-Schachtholm ',
    city: 'Rendsburg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDXR',
    lat: '54.220001220703125',
    lon: '9.599444389343262',
    timezone: '1'
  },
  {
    name: 'Westerland Sylt ',
    city: 'Westerland',
    country: 'Germany',
    IATA: 'GWT',
    ICAO: 'EDXW',
    lat: '54.9132003784',
    lon: '8.34047031403',
    timezone: '1'
  },
  {
    name: '\u00c4mari Air Base',
    city: 'Armari Air Force Base',
    country: 'Estonia',
    IATA: '\\N',
    ICAO: 'EEEI',
    lat: '59.26029968261719',
    lon: '24.208499908447266',
    timezone: '2'
  },
  {
    name: 'K\u00e4rdla ',
    city: 'Kardla',
    country: 'Estonia',
    IATA: 'KDL',
    ICAO: 'EEKA',
    lat: '58.99079895019531',
    lon: '22.830699920654297',
    timezone: '2'
  },
  {
    name: 'Kuressaare ',
    city: 'Kuressaare',
    country: 'Estonia',
    IATA: 'URE',
    ICAO: 'EEKE',
    lat: '58.22990036010742',
    lon: '22.50950050354004',
    timezone: '2'
  },
  {
    name: 'P\u00e4rnu ',
    city: 'Parnu',
    country: 'Estonia',
    IATA: 'EPU',
    ICAO: 'EEPU',
    lat: '58.41899871826172',
    lon: '24.47279930114746',
    timezone: '2'
  },
  {
    name: 'Lennart Meri Tallinn ',
    city: 'Tallinn-ulemiste International',
    country: 'Estonia',
    IATA: 'TLL',
    ICAO: 'EETN',
    lat: '59.41329956049999',
    lon: '24.832799911499997',
    timezone: '2'
  },
  {
    name: 'Tartu ',
    city: 'Tartu',
    country: 'Estonia',
    IATA: 'TAY',
    ICAO: 'EETU',
    lat: '58.3074989319',
    lon: '26.690399169900004',
    timezone: '2'
  },
  {
    name: 'Enontekio ',
    city: 'Enontekio',
    country: 'Finland',
    IATA: 'ENF',
    ICAO: 'EFET',
    lat: '68.362602233887',
    lon: '23.424299240112',
    timezone: '2'
  },
  {
    name: 'Eura ',
    city: 'Eura',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFEU',
    lat: '61.1161003112793',
    lon: '22.201400756835938',
    timezone: '2'
  },
  {
    name: 'Halli ',
    city: 'Halli',
    country: 'Finland',
    IATA: 'KEV',
    ICAO: 'EFHA',
    lat: '61.856039',
    lon: '24.786686',
    timezone: '2'
  },
  {
    name: 'Helsinki Malmi ',
    city: 'Helsinki',
    country: 'Finland',
    IATA: 'HEM',
    ICAO: 'EFHF',
    lat: '60.254600524902344',
    lon: '25.042800903320312',
    timezone: '2'
  },
  {
    name: 'Helsinki Vantaa ',
    city: 'Helsinki',
    country: 'Finland',
    IATA: 'HEL',
    ICAO: 'EFHK',
    lat: '60.317199707031',
    lon: '24.963300704956',
    timezone: '2'
  },
  {
    name: 'Hameenkyro ',
    city: 'Hameenkyro',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFHM',
    lat: '61.689701080322266',
    lon: '23.073699951171875',
    timezone: '2'
  },
  {
    name: 'Hanko ',
    city: 'Hanko',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFHN',
    lat: '59.848899841308594',
    lon: '23.083599090576172',
    timezone: '2'
  },
  {
    name: 'Hyvink\u00e4\u00e4 Airfield',
    city: 'Hyvinkaa',
    country: 'Finland',
    IATA: 'HYV',
    ICAO: 'EFHV',
    lat: '60.6543998718',
    lon: '24.8810997009',
    timezone: '2'
  },
  {
    name: 'Kiikala ',
    city: 'Kikala',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFIK',
    lat: '60.4625015259',
    lon: '23.6525001526',
    timezone: '2'
  },
  {
    name: 'Immola ',
    city: 'Immola',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFIM',
    lat: '61.24919891357422',
    lon: '28.90369987487793',
    timezone: '2'
  },
  {
    name: 'Kitee ',
    city: 'Kitee',
    country: 'Finland',
    IATA: 'KTQ',
    ICAO: 'EFIT',
    lat: '62.1661',
    lon: '30.073601',
    timezone: '2'
  },
  {
    name: 'Ivalo ',
    city: 'Ivalo',
    country: 'Finland',
    IATA: 'IVL',
    ICAO: 'EFIV',
    lat: '68.607299804688',
    lon: '27.405300140381',
    timezone: '2'
  },
  {
    name: 'Joensuu ',
    city: 'Joensuu',
    country: 'Finland',
    IATA: 'JOE',
    ICAO: 'EFJO',
    lat: '62.662899017334',
    lon: '29.607500076294',
    timezone: '2'
  },
  {
    name: 'Jyvaskyla ',
    city: 'Jyvaskyla',
    country: 'Finland',
    IATA: 'JYV',
    ICAO: 'EFJY',
    lat: '62.399501800537',
    lon: '25.678300857544',
    timezone: '2'
  },
  {
    name: 'Kauhava ',
    city: 'Kauhava',
    country: 'Finland',
    IATA: 'KAU',
    ICAO: 'EFKA',
    lat: '63.127102',
    lon: '23.051399',
    timezone: '2'
  },
  {
    name: 'Kemi-Tornio ',
    city: 'Kemi',
    country: 'Finland',
    IATA: 'KEM',
    ICAO: 'EFKE',
    lat: '65.778701782227',
    lon: '24.582099914551',
    timezone: '2'
  },
  {
    name: 'Kajaani ',
    city: 'Kajaani',
    country: 'Finland',
    IATA: 'KAJ',
    ICAO: 'EFKI',
    lat: '64.285499572754',
    lon: '27.692399978638',
    timezone: '2'
  },
  {
    name: 'Kauhajoki ',
    city: 'Kauhajoki',
    country: 'Finland',
    IATA: 'KHJ',
    ICAO: 'EFKJ',
    lat: '62.4625015259',
    lon: '22.3931007385',
    timezone: '2'
  },
  {
    name: 'Kokkola-Pietarsaari ',
    city: 'Kruunupyy',
    country: 'Finland',
    IATA: 'KOK',
    ICAO: 'EFKK',
    lat: '63.721199035645',
    lon: '23.143100738525',
    timezone: '2'
  },
  {
    name: 'Kemijarvi ',
    city: 'Kemijarvi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFKM',
    lat: '66.712898',
    lon: '27.156799',
    timezone: '2'
  },
  {
    name: 'Kuusamo ',
    city: 'Kuusamo',
    country: 'Finland',
    IATA: 'KAO',
    ICAO: 'EFKS',
    lat: '65.987602233887',
    lon: '29.239400863647',
    timezone: '2'
  },
  {
    name: 'Kittil\u00e4 ',
    city: 'Kittila',
    country: 'Finland',
    IATA: 'KTT',
    ICAO: 'EFKT',
    lat: '67.700996398926',
    lon: '24.846799850464',
    timezone: '2'
  },
  {
    name: 'Kuopio ',
    city: 'Kuopio',
    country: 'Finland',
    IATA: 'KUO',
    ICAO: 'EFKU',
    lat: '63.007099151611',
    lon: '27.797800064087',
    timezone: '2'
  },
  {
    name: 'Lahti Vesivehmaa ',
    city: 'Vesivehmaa',
    country: 'Finland',
    IATA: 'QLF',
    ICAO: 'EFLA',
    lat: '61.144199',
    lon: '25.693501',
    timezone: '2'
  },
  {
    name: 'Lappeenranta ',
    city: 'Lappeenranta',
    country: 'Finland',
    IATA: 'LPP',
    ICAO: 'EFLP',
    lat: '61.044601',
    lon: '28.144743',
    timezone: '2'
  },
  {
    name: 'Mariehamn ',
    city: 'Mariehamn',
    country: 'Finland',
    IATA: 'MHQ',
    ICAO: 'EFMA',
    lat: '60.122200012207',
    lon: '19.898199081421',
    timezone: '2'
  },
  {
    name: 'Menkijarvi ',
    city: 'Menkijarvi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFME',
    lat: '62.94670104980469',
    lon: '23.51889991760254',
    timezone: '2'
  },
  {
    name: 'Mikkeli ',
    city: 'Mikkeli',
    country: 'Finland',
    IATA: 'MIK',
    ICAO: 'EFMI',
    lat: '61.6866',
    lon: '27.201799',
    timezone: '2'
  },
  {
    name: 'Nummela ',
    city: 'Nummela',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFNU',
    lat: '60.333900451699996',
    lon: '24.2964000702',
    timezone: '2'
  },
  {
    name: 'Oulu ',
    city: 'Oulu',
    country: 'Finland',
    IATA: 'OUL',
    ICAO: 'EFOU',
    lat: '64.930099487305',
    lon: '25.354600906372',
    timezone: '2'
  },
  {
    name: 'Piikajarvi ',
    city: 'Piikajarvi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFPI',
    lat: '61.245601654052734',
    lon: '22.19339942932129',
    timezone: '2'
  },
  {
    name: 'Pori ',
    city: 'Pori',
    country: 'Finland',
    IATA: 'POR',
    ICAO: 'EFPO',
    lat: '61.461700439453',
    lon: '21.799999237061',
    timezone: '2'
  },
  {
    name: 'Pudasj\u00e4rvi ',
    city: 'Pudasjarvi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFPU',
    lat: '65.4021987915',
    lon: '26.946899414100002',
    timezone: '2'
  },
  {
    name: 'Pyh\u00e4salmi ',
    city: 'Pyhasalmi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFPY',
    lat: '63.7318992615',
    lon: '25.926300048799998',
    timezone: '2'
  },
  {
    name: 'Raahe Pattijoki ',
    city: 'Pattijoki',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFRH',
    lat: '64.6881027222',
    lon: '24.6958007812',
    timezone: '2'
  },
  {
    name: 'Rantasalmi ',
    city: 'Rantasalmi',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFRN',
    lat: '62.0654983521',
    lon: '28.3565006256',
    timezone: '2'
  },
  {
    name: 'Rovaniemi ',
    city: 'Rovaniemi',
    country: 'Finland',
    IATA: 'RVN',
    ICAO: 'EFRO',
    lat: '66.564796447754',
    lon: '25.830400466919',
    timezone: '2'
  },
  {
    name: 'Rayskala ',
    city: 'Rayskala',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFRY',
    lat: '60.74470138549805',
    lon: '24.107799530029297',
    timezone: '2'
  },
  {
    name: 'Savonlinna ',
    city: 'Savonlinna',
    country: 'Finland',
    IATA: 'SVL',
    ICAO: 'EFSA',
    lat: '61.943099975586',
    lon: '28.945100784302',
    timezone: '2'
  },
  {
    name: 'Selanpaa ',
    city: 'Selanpaa',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFSE',
    lat: '61.062400817871094',
    lon: '26.798900604248047',
    timezone: '2'
  },
  {
    name: 'Sodankyla ',
    city: 'Sodankyla',
    country: 'Finland',
    IATA: 'SOT',
    ICAO: 'EFSO',
    lat: '67.3949966431',
    lon: '26.6191005707',
    timezone: '2'
  },
  {
    name: 'Tampere-Pirkkala ',
    city: 'Tampere',
    country: 'Finland',
    IATA: 'TMP',
    ICAO: 'EFTP',
    lat: '61.414100646973',
    lon: '23.604400634766',
    timezone: '2'
  },
  {
    name: 'Teisko ',
    city: 'Teisko',
    country: 'Finland',
    IATA: '\\N',
    ICAO: 'EFTS',
    lat: '61.7733',
    lon: '24.027',
    timezone: '2'
  },
  {
    name: 'Turku ',
    city: 'Turku',
    country: 'Finland',
    IATA: 'TKU',
    ICAO: 'EFTU',
    lat: '60.514099121094',
    lon: '22.262800216675',
    timezone: '2'
  },
  {
    name: 'Utti Air Base',
    city: 'Utti',
    country: 'Finland',
    IATA: 'UTI',
    ICAO: 'EFUT',
    lat: '60.89640045166',
    lon: '26.938400268555',
    timezone: '2'
  },
  {
    name: 'Vaasa ',
    city: 'Vaasa',
    country: 'Finland',
    IATA: 'VAA',
    ICAO: 'EFVA',
    lat: '63.050701141357',
    lon: '21.762199401855',
    timezone: '2'
  },
  {
    name: 'Varkaus ',
    city: 'Varkaus',
    country: 'Finland',
    IATA: 'VRK',
    ICAO: 'EFVR',
    lat: '62.171100616455',
    lon: '27.868600845337',
    timezone: '2'
  },
  {
    name: 'Ylivieska Airfield',
    city: 'Ylivieska-raudaskyla',
    country: 'Finland',
    IATA: 'YLI',
    ICAO: 'EFYL',
    lat: '64.0547222',
    lon: '24.7252778',
    timezone: '2'
  },
  {
    name: 'Belfast Intl ',
    city: 'Belfast',
    country: 'United Kingdom',
    IATA: 'BFS',
    ICAO: 'EGAA',
    lat: '54.6575012207',
    lon: '-6.2158298492399995',
    timezone: '0'
  },
  {
    name: 'St Angelo ',
    city: 'Enniskillen',
    country: 'United Kingdom',
    IATA: 'ENK',
    ICAO: 'EGAB',
    lat: '54.39889907836914',
    lon: '-7.651669979095459',
    timezone: '0'
  },
  {
    name: 'George Best Belfast City ',
    city: 'Belfast',
    country: 'United Kingdom',
    IATA: 'BHD',
    ICAO: 'EGAC',
    lat: '54.618099212646484',
    lon: '-5.872499942779541',
    timezone: '0'
  },
  {
    name: 'City of Derry ',
    city: 'Londonderry',
    country: 'United Kingdom',
    IATA: 'LDY',
    ICAO: 'EGAE',
    lat: '55.04280090332031',
    lon: '-7.161109924316406',
    timezone: '0'
  },
  {
    name: 'Birmingham Intl ',
    city: 'Birmingham',
    country: 'United Kingdom',
    IATA: 'BHX',
    ICAO: 'EGBB',
    lat: '52.453899383499994',
    lon: '-1.74802994728',
    timezone: '0'
  },
  {
    name: 'Coventry ',
    city: 'Coventry',
    country: 'United Kingdom',
    IATA: 'CVT',
    ICAO: 'EGBE',
    lat: '52.3697013855',
    lon: '-1.4797199964499999',
    timezone: '0'
  },
  {
    name: 'Leicester ',
    city: 'Leicester',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGBG',
    lat: '52.6077995300293',
    lon: '-1.03193998336792',
    timezone: '0'
  },
  {
    name: 'Gloucestershire ',
    city: 'Golouchestershire',
    country: 'United Kingdom',
    IATA: 'GLO',
    ICAO: 'EGBJ',
    lat: '51.89419937133789',
    lon: '-2.167220115661621',
    timezone: '0'
  },
  {
    name: 'Wolverhampton Halfpenny Green ',
    city: 'Halfpenny Green',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGBO',
    lat: '52.51750183105469',
    lon: '-2.2594399452209473',
    timezone: '0'
  },
  {
    name: 'Cotswold ',
    city: 'Pailton',
    country: 'United Kingdom',
    IATA: 'GBA',
    ICAO: 'EGBP',
    lat: '51.668095',
    lon: '-2.05694',
    timezone: '0'
  },
  {
    name: 'Turweston ',
    city: 'Turweston',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGBT',
    lat: '52.0407981873',
    lon: '-1.09555995464',
    timezone: '0'
  },
  {
    name: 'Wellesbourne Mountford ',
    city: 'Wellesbourne',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGBW',
    lat: '52.19219970703125',
    lon: '-1.6144399642944336',
    timezone: '0'
  },
  {
    name: 'Manchester ',
    city: 'Manchester',
    country: 'United Kingdom',
    IATA: 'MAN',
    ICAO: 'EGCC',
    lat: '53.35369873046875',
    lon: '-2.2749500274658203',
    timezone: '0'
  },
  {
    name: 'Manchester Woodford ',
    city: 'Woodfort',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGCD',
    lat: '53.3381',
    lon: '-2.14889',
    timezone: '0'
  },
  {
    name: 'Royal Marines Base Chivenor ',
    city: 'Chivenor',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGDC',
    lat: '51.08720016479492',
    lon: '-4.1503400802612305',
    timezone: '0'
  },
  {
    name: 'Newquay Cornwall ',
    city: 'Newquai',
    country: 'United Kingdom',
    IATA: 'NQY',
    ICAO: 'EGHQ',
    lat: '50.44060134887695',
    lon: '-4.995409965515137',
    timezone: '0'
  },
  {
    name: 'RAF Lyneham',
    city: 'Lyneham',
    country: 'United Kingdom',
    IATA: 'LYE',
    ICAO: 'EGDL',
    lat: '51.5051',
    lon: '-1.99343',
    timezone: '0'
  },
  {
    name: 'MoD Boscombe Down ',
    city: 'Boscombe Down',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGDM',
    lat: '51.152198791503906',
    lon: '-1.7474100589752197',
    timezone: '0'
  },
  {
    name: 'RNAS Culdrose',
    city: 'Culdrose',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGDR',
    lat: '50.08610153198242',
    lon: '-5.255710124969482',
    timezone: '0'
  },
  {
    name: 'MoD St. Athan',
    city: 'St. Athan',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGDX',
    lat: '51.4048',
    lon: '-3.43575',
    timezone: '0'
  },
  {
    name: 'RNAS Yeovilton',
    city: 'Yeovilton',
    country: 'United Kingdom',
    IATA: 'YEO',
    ICAO: 'EGDY',
    lat: '51.0093994140625',
    lon: '-2.638819932937622',
    timezone: '0'
  },
  {
    name: 'Haverfordwest ',
    city: 'Haverfordwest',
    country: 'United Kingdom',
    IATA: 'HAW',
    ICAO: 'EGFE',
    lat: '51.833099365234375',
    lon: '-4.9611101150512695',
    timezone: '0'
  },
  {
    name: 'Cardiff Intl ',
    city: 'Cardiff',
    country: 'United Kingdom',
    IATA: 'CWL',
    ICAO: 'EGFF',
    lat: '51.39670181274414',
    lon: '-3.343329906463623',
    timezone: '0'
  },
  {
    name: 'Swansea ',
    city: 'Swansea',
    country: 'United Kingdom',
    IATA: 'SWS',
    ICAO: 'EGFH',
    lat: '51.60530090332031',
    lon: '-4.0678300857543945',
    timezone: '0'
  },
  {
    name: 'Bristol ',
    city: 'Bristol',
    country: 'United Kingdom',
    IATA: 'BRS',
    ICAO: 'EGGD',
    lat: '51.382702',
    lon: '-2.71909',
    timezone: '0'
  },
  {
    name: 'Liverpool John Lennon ',
    city: 'Liverpool',
    country: 'United Kingdom',
    IATA: 'LPL',
    ICAO: 'EGGP',
    lat: '53.33359909057617',
    lon: '-2.849720001220703',
    timezone: '0'
  },
  {
    name: 'London Luton ',
    city: 'London',
    country: 'United Kingdom',
    IATA: 'LTN',
    ICAO: 'EGGW',
    lat: '51.874698638916016',
    lon: '-0.36833301186561584',
    timezone: '0'
  },
  {
    name: 'Plymouth City ',
    city: 'Plymouth',
    country: 'United Kingdom',
    IATA: 'PLH',
    ICAO: 'EGHD',
    lat: '50.422798',
    lon: '-4.10583',
    timezone: '0'
  },
  {
    name: 'Bournemouth ',
    city: 'Bournemouth',
    country: 'United Kingdom',
    IATA: 'BOH',
    ICAO: 'EGHH',
    lat: '50.779998779296875',
    lon: '-1.8424999713897705',
    timezone: '0'
  },
  {
    name: 'Southampton ',
    city: 'Southampton',
    country: 'United Kingdom',
    IATA: 'SOU',
    ICAO: 'EGHI',
    lat: '50.95029830932617',
    lon: '-1.3567999601364136',
    timezone: '0'
  },
  {
    name: 'Lasham ',
    city: 'Lasham',
    country: 'United Kingdom',
    IATA: 'QLA',
    ICAO: 'EGHL',
    lat: '51.187198638916016',
    lon: '-1.0334999561309814',
    timezone: '0'
  },
  {
    name: 'Alderney ',
    city: 'Alderney',
    country: 'Guernsey',
    IATA: 'ACI',
    ICAO: 'EGJA',
    lat: '49.706104',
    lon: '-2.21472',
    timezone: '0'
  },
  {
    name: 'Guernsey ',
    city: 'Guernsey',
    country: 'Guernsey',
    IATA: 'GCI',
    ICAO: 'EGJB',
    lat: '49.435001373291016',
    lon: '-2.6019699573516846',
    timezone: '0'
  },
  {
    name: 'Jersey ',
    city: 'Jersey',
    country: 'Jersey',
    IATA: 'JER',
    ICAO: 'EGJJ',
    lat: '49.20790100097656',
    lon: '-2.195509910583496',
    timezone: '0'
  },
  {
    name: 'Shoreham ',
    city: 'Shoreham By Sea',
    country: 'United Kingdom',
    IATA: 'ESH',
    ICAO: 'EGKA',
    lat: '50.835602',
    lon: '-0.297222',
    timezone: '0'
  },
  {
    name: 'London Biggin Hill ',
    city: 'Biggin Hill',
    country: 'United Kingdom',
    IATA: 'BQH',
    ICAO: 'EGKB',
    lat: '51.33079910279999',
    lon: '0.0324999988079',
    timezone: '0'
  },
  {
    name: 'London Gatwick ',
    city: 'London',
    country: 'United Kingdom',
    IATA: 'LGW',
    ICAO: 'EGKK',
    lat: '51.148102',
    lon: '-0.190278',
    timezone: '0'
  },
  {
    name: 'London City ',
    city: 'London',
    country: 'United Kingdom',
    IATA: 'LCY',
    ICAO: 'EGLC',
    lat: '51.505299',
    lon: '0.055278',
    timezone: '0'
  },
  {
    name: 'Farnborough ',
    city: 'Farnborough',
    country: 'United Kingdom',
    IATA: 'FAB',
    ICAO: 'EGLF',
    lat: '51.2757987976',
    lon: '-0.776332974434',
    timezone: '0'
  },
  {
    name: 'Chalgrove ',
    city: 'Chalsgrove',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGLJ',
    lat: '51.67610168457031',
    lon: '-1.0808299779891968',
    timezone: '0'
  },
  {
    name: 'Blackbushe ',
    city: 'Blackbushe',
    country: 'United Kingdom',
    IATA: 'BBS',
    ICAO: 'EGLK',
    lat: '51.32389831542969',
    lon: '-0.8475000262260437',
    timezone: '0'
  },
  {
    name: 'London Heathrow ',
    city: 'London',
    country: 'United Kingdom',
    IATA: 'LHR',
    ICAO: 'EGLL',
    lat: '51.4706',
    lon: '-0.461941',
    timezone: '0'
  },
  {
    name: 'Southend ',
    city: 'Southend',
    country: 'United Kingdom',
    IATA: 'SEN',
    ICAO: 'EGMC',
    lat: '51.5713996887207',
    lon: '0.6955559849739075',
    timezone: '0'
  },
  {
    name: 'Lydd ',
    city: 'Lydd',
    country: 'United Kingdom',
    IATA: 'LYX',
    ICAO: 'EGMD',
    lat: '50.95610046386719',
    lon: '0.9391670227050781',
    timezone: '0'
  },
  {
    name: 'Kent Intl ',
    city: 'Manston',
    country: 'United Kingdom',
    IATA: 'MSE',
    ICAO: 'EGMH',
    lat: '51.342201',
    lon: '1.34611',
    timezone: '0'
  },
  {
    name: 'Brough ',
    city: 'Brough',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGNB',
    lat: '53.7197',
    lon: '-0.566333',
    timezone: '0'
  },
  {
    name: 'Carlisle ',
    city: 'Carlisle',
    country: 'United Kingdom',
    IATA: 'CAX',
    ICAO: 'EGNC',
    lat: '54.9375',
    lon: '-2.8091700077056885',
    timezone: '0'
  },
  {
    name: 'Retford Gamston ',
    city: 'Repton',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGNE',
    lat: '53.280601501464844',
    lon: '-0.9513890147209167',
    timezone: '0'
  },
  {
    name: 'Blackpool Intl ',
    city: 'Blackpool',
    country: 'United Kingdom',
    IATA: 'BLK',
    ICAO: 'EGNH',
    lat: '53.77170181274414',
    lon: '-3.0286099910736084',
    timezone: '0'
  },
  {
    name: 'Humberside ',
    city: 'Humberside',
    country: 'United Kingdom',
    IATA: 'HUY',
    ICAO: 'EGNJ',
    lat: '53.57440185546875',
    lon: '-0.350832998752594',
    timezone: '0'
  },
  {
    name: 'Barrow Walney Island ',
    city: 'Barrow Island',
    country: 'United Kingdom',
    IATA: 'BWF',
    ICAO: 'EGNL',
    lat: '54.1286111',
    lon: '-3.2675',
    timezone: '0'
  },
  {
    name: 'Leeds Bradford ',
    city: 'Leeds',
    country: 'United Kingdom',
    IATA: 'LBA',
    ICAO: 'EGNM',
    lat: '53.86589813232422',
    lon: '-1.6605700254440308',
    timezone: '0'
  },
  {
    name: 'Warton ',
    city: 'Warton',
    country: 'United Kingdom',
    IATA: 'WRT',
    ICAO: 'EGNO',
    lat: '53.745098',
    lon: '-2.88306',
    timezone: '0'
  },
  {
    name: 'Hawarden ',
    city: 'Hawarden',
    country: 'United Kingdom',
    IATA: 'CEG',
    ICAO: 'EGNR',
    lat: '53.1781005859375',
    lon: '-2.9777801036834717',
    timezone: '0'
  },
  {
    name: 'Isle of Man ',
    city: 'Isle Of Man',
    country: 'Isle of Man',
    IATA: 'IOM',
    ICAO: 'EGNS',
    lat: '54.08330154418945',
    lon: '-4.623889923095703',
    timezone: '0'
  },
  {
    name: 'Newcastle ',
    city: 'Newcastle',
    country: 'United Kingdom',
    IATA: 'NCL',
    ICAO: 'EGNT',
    lat: '55.037498474121094',
    lon: '-1.6916699409484863',
    timezone: '0'
  },
  {
    name: 'Durham Tees Valley ',
    city: 'Teesside',
    country: 'United Kingdom',
    IATA: 'MME',
    ICAO: 'EGNV',
    lat: '54.50920104980469',
    lon: '-1.4294099807739258',
    timezone: '0'
  },
  {
    name: 'East Midlands ',
    city: 'East Midlands',
    country: 'United Kingdom',
    IATA: 'EMA',
    ICAO: 'EGNX',
    lat: '52.8311004639',
    lon: '-1.32806003094',
    timezone: '0'
  },
  {
    name: 'Llanbedr ',
    city: 'Llanbedr',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGOD',
    lat: '52.811698913574',
    lon: '-4.1235799789429',
    timezone: '0'
  },
  {
    name: 'RAF Ternhill',
    city: 'Ternhill',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGOE',
    lat: '52.87120056152344',
    lon: '-2.533560037612915',
    timezone: '0'
  },
  {
    name: 'RAF Shawbury',
    city: 'Shawbury',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGOS',
    lat: '52.79819869995117',
    lon: '-2.6680400371551514',
    timezone: '0'
  },
  {
    name: 'RAF Woodvale',
    city: 'Woodvale',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGOW',
    lat: '53.5816',
    lon: '-3.05552',
    timezone: '0'
  },
  {
    name: 'Kirkwall ',
    city: 'Kirkwall',
    country: 'United Kingdom',
    IATA: 'KOI',
    ICAO: 'EGPA',
    lat: '58.957801818847656',
    lon: '-2.9049999713897705',
    timezone: '0'
  },
  {
    name: 'Sumburgh ',
    city: 'Sumburgh',
    country: 'United Kingdom',
    IATA: 'LSI',
    ICAO: 'EGPB',
    lat: '59.87889862060547',
    lon: '-1.2955600023269653',
    timezone: '0'
  },
  {
    name: 'Wick ',
    city: 'Wick',
    country: 'United Kingdom',
    IATA: 'WIC',
    ICAO: 'EGPC',
    lat: '58.458900451660156',
    lon: '-3.09306001663208',
    timezone: '0'
  },
  {
    name: 'Aberdeen Dyce ',
    city: 'Aberdeen',
    country: 'United Kingdom',
    IATA: 'ABZ',
    ICAO: 'EGPD',
    lat: '57.201900482177734',
    lon: '-2.197779893875122',
    timezone: '0'
  },
  {
    name: 'Inverness ',
    city: 'Inverness',
    country: 'United Kingdom',
    IATA: 'INV',
    ICAO: 'EGPE',
    lat: '57.54249954223633',
    lon: '-4.047500133514404',
    timezone: '0'
  },
  {
    name: 'Glasgow Intl ',
    city: 'Glasgow',
    country: 'United Kingdom',
    IATA: 'GLA',
    ICAO: 'EGPF',
    lat: '55.8718986511',
    lon: '-4.43306016922',
    timezone: '0'
  },
  {
    name: 'Edinburgh ',
    city: 'Edinburgh',
    country: 'United Kingdom',
    IATA: 'EDI',
    ICAO: 'EGPH',
    lat: '55.95000076293945',
    lon: '-3.372499942779541',
    timezone: '0'
  },
  {
    name: 'Islay ',
    city: 'Islay',
    country: 'United Kingdom',
    IATA: 'ILY',
    ICAO: 'EGPI',
    lat: '55.68190002441406',
    lon: '-6.256669998168945',
    timezone: '0'
  },
  {
    name: 'Glasgow Prestwick ',
    city: 'Prestwick',
    country: 'United Kingdom',
    IATA: 'PIK',
    ICAO: 'EGPK',
    lat: '55.5093994140625',
    lon: '-4.586669921875',
    timezone: '0'
  },
  {
    name: 'Benbecula ',
    city: 'Benbecula',
    country: 'United Kingdom',
    IATA: 'BEB',
    ICAO: 'EGPL',
    lat: '57.48109817504883',
    lon: '-7.3627800941467285',
    timezone: '0'
  },
  {
    name: 'Scatsta ',
    city: 'Scatsta',
    country: 'United Kingdom',
    IATA: 'SCS',
    ICAO: 'EGPM',
    lat: '60.43280029296875',
    lon: '-1.2961100339889526',
    timezone: '0'
  },
  {
    name: 'Dundee ',
    city: 'Dundee',
    country: 'United Kingdom',
    IATA: 'DND',
    ICAO: 'EGPN',
    lat: '56.45249938964844',
    lon: '-3.025830030441284',
    timezone: '0'
  },
  {
    name: 'Stornoway ',
    city: 'Stornoway',
    country: 'United Kingdom',
    IATA: 'SYY',
    ICAO: 'EGPO',
    lat: '58.215599060058594',
    lon: '-6.331110000610352',
    timezone: '0'
  },
  {
    name: 'Tiree ',
    city: 'Tiree',
    country: 'United Kingdom',
    IATA: 'TRE',
    ICAO: 'EGPU',
    lat: '56.49919891357422',
    lon: '-6.869170188903809',
    timezone: '0'
  },
  {
    name: 'RAF Leuchars',
    city: 'Leuchars',
    country: 'United Kingdom',
    IATA: 'ADX',
    ICAO: 'EGQL',
    lat: '56.37289810180664',
    lon: '-2.8684399127960205',
    timezone: '0'
  },
  {
    name: 'RAF Lossiemouth',
    city: 'Lossiemouth',
    country: 'United Kingdom',
    IATA: 'LMO',
    ICAO: 'EGQS',
    lat: '57.7052001953125',
    lon: '-3.339169979095459',
    timezone: '0'
  },
  {
    name: 'Cambridge ',
    city: 'Cambridge',
    country: 'United Kingdom',
    IATA: 'CBG',
    ICAO: 'EGSC',
    lat: '52.205002',
    lon: '0.175',
    timezone: '0'
  },
  {
    name: 'Peterborough Business ',
    city: 'Peterborough',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGSF',
    lat: '52.468101501464844',
    lon: '-0.2511110007762909',
    timezone: '0'
  },
  {
    name: 'Norwich Intl ',
    city: 'Norwich',
    country: 'United Kingdom',
    IATA: 'NWI',
    ICAO: 'EGSH',
    lat: '52.6758003235',
    lon: '1.28278005123',
    timezone: '0'
  },
  {
    name: 'London Stansted ',
    city: 'London',
    country: 'United Kingdom',
    IATA: 'STN',
    ICAO: 'EGSS',
    lat: '51.8849983215',
    lon: '0.234999999404',
    timezone: '0'
  },
  {
    name: 'North Weald ',
    city: 'North Weald',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGSX',
    lat: '51.721698761',
    lon: '0.154166996479',
    timezone: '0'
  },
  {
    name: 'Sheffield City Heliport',
    city: 'Fowlmere',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGSY',
    lat: '53.394299',
    lon: '-1.38849',
    timezone: '0'
  },
  {
    name: 'Cranfield ',
    city: 'Cranfield',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGTC',
    lat: '52.0722007751',
    lon: '-0.616666972637',
    timezone: '0'
  },
  {
    name: 'Exeter Intl ',
    city: 'Exeter',
    country: 'United Kingdom',
    IATA: 'EXT',
    ICAO: 'EGTE',
    lat: '50.73440170288086',
    lon: '-3.4138898849487305',
    timezone: '0'
  },
  {
    name: 'Bristol Filton ',
    city: 'Bristol',
    country: 'United Kingdom',
    IATA: 'FZO',
    ICAO: 'EGTG',
    lat: '51.5194015503',
    lon: '-2.59083008766',
    timezone: '0'
  },
  {
    name: 'Oxford (Kidlington) ',
    city: 'Oxford',
    country: 'United Kingdom',
    IATA: 'OXF',
    ICAO: 'EGTK',
    lat: '51.8368988037',
    lon: '-1.32000005245',
    timezone: '0'
  },
  {
    name: 'RAF Benson',
    city: 'Benson',
    country: 'United Kingdom',
    IATA: 'BEX',
    ICAO: 'EGUB',
    lat: '51.616401672399995',
    lon: '-1.09582996368',
    timezone: '0'
  },
  {
    name: 'RAF Lakenheath',
    city: 'Lakenheath',
    country: 'United Kingdom',
    IATA: 'LKZ',
    ICAO: 'EGUL',
    lat: '52.409301757799994',
    lon: '0.56099998951',
    timezone: '0'
  },
  {
    name: 'RAF Mildenhall',
    city: 'Mildenhall',
    country: 'United Kingdom',
    IATA: 'MHZ',
    ICAO: 'EGUN',
    lat: '52.361900329589844',
    lon: '0.48640599846839905',
    timezone: '0'
  },
  {
    name: 'RAF Wattisham',
    city: 'Wattisham',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGUW',
    lat: '52.1273002625',
    lon: '0.956264019012',
    timezone: '0'
  },
  {
    name: 'RAF Wyton',
    city: 'Wyton',
    country: 'United Kingdom',
    IATA: 'QUY',
    ICAO: 'EGUY',
    lat: '52.3572006226',
    lon: '-0.107832998037',
    timezone: '0'
  },
  {
    name: 'RAF Fairford',
    city: 'Fairford',
    country: 'United Kingdom',
    IATA: 'FFD',
    ICAO: 'EGVA',
    lat: '51.6822013855',
    lon: '-1.7900300025900002',
    timezone: '0'
  },
  {
    name: 'RAF Brize Norton',
    city: 'Brize Norton',
    country: 'United Kingdom',
    IATA: 'BZZ',
    ICAO: 'EGVN',
    lat: '51.75',
    lon: '-1.58362',
    timezone: '0'
  },
  {
    name: 'RAF Odiham',
    city: 'Odiham',
    country: 'United Kingdom',
    IATA: 'ODH',
    ICAO: 'EGVO',
    lat: '51.2341003418',
    lon: '-0.94282501936',
    timezone: '0'
  },
  {
    name: 'DCAE Cosford Air Base',
    city: 'Cosford',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGWC',
    lat: '52.639999',
    lon: '-2.30558',
    timezone: '0'
  },
  {
    name: 'RAF Northolt',
    city: 'Northolt',
    country: 'United Kingdom',
    IATA: 'NHT',
    ICAO: 'EGWU',
    lat: '51.553001403799996',
    lon: '-0.418166995049',
    timezone: '0'
  },
  {
    name: 'RAF Coningsby',
    city: 'Coningsby',
    country: 'United Kingdom',
    IATA: 'QCY',
    ICAO: 'EGXC',
    lat: '53.0929985046',
    lon: '-0.166014000773',
    timezone: '0'
  },
  {
    name: 'RAF Dishforth',
    city: 'Dishforth',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXD',
    lat: '54.1371994019',
    lon: '-1.42025005817',
    timezone: '0'
  },
  {
    name: 'Leeming ',
    city: 'Leeming',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXE',
    lat: '54.2924',
    lon: '-1.5354',
    timezone: '0'
  },
  {
    name: 'Leeds East ',
    city: 'Church Fenton',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXG',
    lat: '53.834301',
    lon: '-1.1955',
    timezone: '0'
  },
  {
    name: 'RAF Honington',
    city: 'Honington',
    country: 'United Kingdom',
    IATA: 'BEQ',
    ICAO: 'EGXH',
    lat: '52.34260177612305',
    lon: '0.7729390263557434',
    timezone: '0'
  },
  {
    name: 'RAF Cottesmore',
    city: 'Cottesmore',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXJ',
    lat: '52.735699',
    lon: '-0.648769',
    timezone: '0'
  },
  {
    name: 'RAF Scampton',
    city: 'Scampton',
    country: 'United Kingdom',
    IATA: 'SQZ',
    ICAO: 'EGXP',
    lat: '53.307800293',
    lon: '-0.550832986832',
    timezone: '0'
  },
  {
    name: 'RAF Wittering',
    city: 'Wittering',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXT',
    lat: '52.612598',
    lon: '-0.476453',
    timezone: '0'
  },
  {
    name: 'RAF Linton-On-Ouse',
    city: 'Linton-on-ouse',
    country: 'United Kingdom',
    IATA: 'HRT',
    ICAO: 'EGXU',
    lat: '54.0489006042',
    lon: '-1.2527500391',
    timezone: '0'
  },
  {
    name: 'RAF Waddington',
    city: 'Waddington',
    country: 'United Kingdom',
    IATA: 'WTN',
    ICAO: 'EGXW',
    lat: '53.1661987305',
    lon: '-0.523810982704',
    timezone: '0'
  },
  {
    name: 'RAF Topcliffe',
    city: 'Topcliffe',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGXZ',
    lat: '54.205501556399994',
    lon: '-1.3820899725',
    timezone: '0'
  },
  {
    name: 'RAF Cranwell',
    city: 'Cranwell',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGYD',
    lat: '53.0303001404',
    lon: '-0.48324200511',
    timezone: '0'
  },
  {
    name: 'RAF Barkston Heath',
    city: 'Barkston Heath',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGYE',
    lat: '52.962200164799995',
    lon: '-0.561625003815',
    timezone: '0'
  },
  {
    name: 'RAF Marham',
    city: 'Marham',
    country: 'United Kingdom',
    IATA: 'KNF',
    ICAO: 'EGYM',
    lat: '52.648395',
    lon: '0.550692',
    timezone: '0'
  },
  {
    name: 'Mount Pleasant ',
    city: 'Mount Pleasant',
    country: 'Falkland Islands',
    IATA: 'MPN',
    ICAO: 'EGYP',
    lat: '-51.82279968261719',
    lon: '-58.447200775146484',
    timezone: '-3'
  },
  {
    name: 'Amsterdam  Schiphol',
    city: 'Amsterdam',
    country: 'Netherlands',
    IATA: 'AMS',
    ICAO: 'EHAM',
    lat: '52.308601',
    lon: '4.76389',
    timezone: '1'
  },
  {
    name: 'Budel Airfield Kempen',
    city: 'Weert',
    country: 'Netherlands',
    IATA: '\\N',
    ICAO: 'EHBD',
    lat: '51.255299',
    lon: '5.60139',
    timezone: '1'
  },
  {
    name: 'Maastricht Aachen ',
    city: 'Maastricht',
    country: 'Netherlands',
    IATA: 'MST',
    ICAO: 'EHBK',
    lat: '50.911701',
    lon: '5.77014',
    timezone: '1'
  },
  {
    name: 'Deelen Air Base',
    city: 'Deelen',
    country: 'Netherlands',
    IATA: '\\N',
    ICAO: 'EHDL',
    lat: '52.0606',
    lon: '5.87306',
    timezone: '1'
  },
  {
    name: 'Drachten ',
    city: 'Drachten',
    country: 'Netherlands',
    IATA: '\\N',
    ICAO: 'EHDR',
    lat: '53.1192016602',
    lon: '6.12972021103',
    timezone: '1'
  },
  {
    name: 'Eindhoven ',
    city: 'Eindhoven',
    country: 'Netherlands',
    IATA: 'EIN',
    ICAO: 'EHEH',
    lat: '51.4500999451',
    lon: '5.37452983856',
    timezone: '1'
  },
  {
    name: 'Eelde ',
    city: 'Groningen',
    country: 'Netherlands',
    IATA: 'GRQ',
    ICAO: 'EHGG',
    lat: '53.1197013855',
    lon: '6.57944011688',
    timezone: '1'
  },
  {
    name: 'Gilze Rijen Air Base',
    city: 'Gilze-rijen',
    country: 'Netherlands',
    IATA: 'GLZ',
    ICAO: 'EHGR',
    lat: '51.56740188598633',
    lon: '4.931829929351807',
    timezone: '1'
  },
  {
    name: 'De Kooy ',
    city: 'De Kooy',
    country: 'Netherlands',
    IATA: 'DHR',
    ICAO: 'EHKD',
    lat: '52.92340087890625',
    lon: '4.780620098114014',
    timezone: '1'
  },
  {
    name: 'Lelystad ',
    city: 'Lelystad',
    country: 'Netherlands',
    IATA: 'LEY',
    ICAO: 'EHLE',
    lat: '52.4603',
    lon: '5.52722',
    timezone: '1'
  },
  {
    name: 'Leeuwarden Air Base',
    city: 'Leeuwarden',
    country: 'Netherlands',
    IATA: 'LWR',
    ICAO: 'EHLW',
    lat: '53.228599548339844',
    lon: '5.760560035705566',
    timezone: '1'
  },
  {
    name: 'Rotterdam The Hague ',
    city: 'Rotterdam',
    country: 'Netherlands',
    IATA: 'RTM',
    ICAO: 'EHRD',
    lat: '51.956902',
    lon: '4.43722',
    timezone: '1'
  },
  {
    name: 'Soesterberg Air Base',
    city: 'Soesterberg',
    country: 'Netherlands',
    IATA: 'UTC',
    ICAO: 'EHSB',
    lat: '52.1273002625',
    lon: '5.27618980408',
    timezone: '1'
  },
  {
    name: 'Twente ',
    city: 'Enschede',
    country: 'Netherlands',
    IATA: 'ENS',
    ICAO: 'EHTW',
    lat: '52.275833',
    lon: '6.889167',
    timezone: '1'
  },
  {
    name: 'Valkenburg Naval Air Base',
    city: 'Valkenburg',
    country: 'Netherlands',
    IATA: 'LID',
    ICAO: 'EHVB',
    lat: '52.166099548300004',
    lon: '4.41794013977',
    timezone: '1'
  },
  {
    name: 'Woensdrecht Air Base',
    city: 'Woensdrecht',
    country: 'Netherlands',
    IATA: 'WOE',
    ICAO: 'EHWO',
    lat: '51.4491',
    lon: '4.34203',
    timezone: '1'
  },
  {
    name: 'Cork ',
    city: 'Cork',
    country: 'Ireland',
    IATA: 'ORK',
    ICAO: 'EICK',
    lat: '51.84130096435547',
    lon: '-8.491109848022461',
    timezone: '0'
  },
  {
    name: 'Galway ',
    city: 'Galway',
    country: 'Ireland',
    IATA: 'GWY',
    ICAO: 'EICM',
    lat: '53.300201416015625',
    lon: '-8.941590309143066',
    timezone: '0'
  },
  {
    name: 'Dublin ',
    city: 'Dublin',
    country: 'Ireland',
    IATA: 'DUB',
    ICAO: 'EIDW',
    lat: '53.421299',
    lon: '-6.27007',
    timezone: '0'
  },
  {
    name: 'Ireland West Knock ',
    city: 'Connaught',
    country: 'Ireland',
    IATA: 'NOC',
    ICAO: 'EIKN',
    lat: '53.910301208496094',
    lon: '-8.818490028381348',
    timezone: '0'
  },
  {
    name: 'Kerry ',
    city: 'Kerry',
    country: 'Ireland',
    IATA: 'KIR',
    ICAO: 'EIKY',
    lat: '52.18090057373047',
    lon: '-9.52377986907959',
    timezone: '0'
  },
  {
    name: 'Casement Air Base',
    city: 'Casement',
    country: 'Ireland',
    IATA: '\\N',
    ICAO: 'EIME',
    lat: '53.301700592',
    lon: '-6.451330184940001',
    timezone: '0'
  },
  {
    name: 'Shannon ',
    city: 'Shannon',
    country: 'Ireland',
    IATA: 'SNN',
    ICAO: 'EINN',
    lat: '52.702',
    lon: '-8.92482',
    timezone: '0'
  },
  {
    name: 'Sligo ',
    city: 'Sligo',
    country: 'Ireland',
    IATA: 'SXL',
    ICAO: 'EISG',
    lat: '54.280200958252',
    lon: '-8.5992097854614',
    timezone: '0'
  },
  {
    name: 'Waterford ',
    city: 'Waterford',
    country: 'Ireland',
    IATA: 'WAT',
    ICAO: 'EIWF',
    lat: '52.187198638916016',
    lon: '-7.0869598388671875',
    timezone: '0'
  },
  {
    name: 'Aarhus ',
    city: 'Aarhus',
    country: 'Denmark',
    IATA: 'AAR',
    ICAO: 'EKAH',
    lat: '56.2999992371',
    lon: '10.619000434899998',
    timezone: '1'
  },
  {
    name: 'Billund ',
    city: 'Billund',
    country: 'Denmark',
    IATA: 'BLL',
    ICAO: 'EKBI',
    lat: '55.7402992249',
    lon: '9.15178012848',
    timezone: '1'
  },
  {
    name: 'Copenhagen Kastrup ',
    city: 'Copenhagen',
    country: 'Denmark',
    IATA: 'CPH',
    ICAO: 'EKCH',
    lat: '55.617900848389',
    lon: '12.656000137329',
    timezone: '1'
  },
  {
    name: 'Esbjerg ',
    city: 'Esbjerg',
    country: 'Denmark',
    IATA: 'EBJ',
    ICAO: 'EKEB',
    lat: '55.525902',
    lon: '8.5534',
    timezone: '1'
  },
  {
    name: 'Gr\u00f8nholt Hiller\u00f8d ',
    city: 'Gronholt',
    country: 'Denmark',
    IATA: '\\N',
    ICAO: 'EKGH',
    lat: '55.94139862060547',
    lon: '12.382200241088867',
    timezone: '1'
  },
  {
    name: 'Karup ',
    city: 'Karup',
    country: 'Denmark',
    IATA: 'KRP',
    ICAO: 'EKKA',
    lat: '56.29750061035156',
    lon: '9.124629974365234',
    timezone: '1'
  },
  {
    name: 'L\u00e6s\u00f8 ',
    city: 'Laeso',
    country: 'Denmark',
    IATA: 'BYR',
    ICAO: 'EKLS',
    lat: '57.277198791503906',
    lon: '11.000100135803223',
    timezone: '1'
  },
  {
    name: 'Lolland Falster Maribo ',
    city: 'Maribo',
    country: 'Denmark',
    IATA: 'MRW',
    ICAO: 'EKMB',
    lat: '54.699299',
    lon: '11.4401',
    timezone: '1'
  },
  {
    name: 'Odense ',
    city: 'Odense',
    country: 'Denmark',
    IATA: 'ODE',
    ICAO: 'EKOD',
    lat: '55.47669982910156',
    lon: '10.330900192260742',
    timezone: '1'
  },
  {
    name: 'Krus\u00e5-Padborg ',
    city: 'Krusa-padborg',
    country: 'Denmark',
    IATA: '\\N',
    ICAO: 'EKPB',
    lat: '54.87030029296875',
    lon: '9.279009819030762',
    timezone: '1'
  },
  {
    name: 'Copenhagen Roskilde ',
    city: 'Copenhagen',
    country: 'Denmark',
    IATA: 'RKE',
    ICAO: 'EKRK',
    lat: '55.585601806640625',
    lon: '12.131400108337402',
    timezone: '1'
  },
  {
    name: 'Bornholm ',
    city: 'Ronne',
    country: 'Denmark',
    IATA: 'RNN',
    ICAO: 'EKRN',
    lat: '55.06330108642578',
    lon: '14.759599685668945',
    timezone: '1'
  },
  {
    name: 'S\u00f8nderborg ',
    city: 'Soenderborg',
    country: 'Denmark',
    IATA: 'SGD',
    ICAO: 'EKSB',
    lat: '54.96440124511719',
    lon: '9.791729927062988',
    timezone: '1'
  },
  {
    name: 'Skrydstrup Air Base',
    city: 'Skrydstrup',
    country: 'Denmark',
    IATA: 'SKS',
    ICAO: 'EKSP',
    lat: '55.221048',
    lon: '9.26702',
    timezone: '1'
  },
  {
    name: 'Skive ',
    city: 'Skive',
    country: 'Denmark',
    IATA: 'SQW',
    ICAO: 'EKSV',
    lat: '56.550201416015625',
    lon: '9.172980308532715',
    timezone: '1'
  },
  {
    name: 'Thisted ',
    city: 'Thisted',
    country: 'Denmark',
    IATA: 'TED',
    ICAO: 'EKTS',
    lat: '57.06880187988281',
    lon: '8.705220222473145',
    timezone: '1'
  },
  {
    name: 'Kolding Vamdrup Airfield',
    city: 'Kolding',
    country: 'Denmark',
    IATA: '\\N',
    ICAO: 'EKVD',
    lat: '55.436298',
    lon: '9.33092',
    timezone: '1'
  },
  {
    name: 'Vagar ',
    city: 'Vagar',
    country: 'Faroe Islands',
    IATA: 'FAE',
    ICAO: 'EKVG',
    lat: '62.0635986328125',
    lon: '-7.277219772338867',
    timezone: '0'
  },
  {
    name: 'Vesthimmerlands Flyveplads',
    city: 'Vesthimmerland',
    country: 'Denmark',
    IATA: '\\N',
    ICAO: 'EKVH',
    lat: '56.846901',
    lon: '9.45861',
    timezone: '1'
  },
  {
    name: 'Stauning ',
    city: 'Stauning',
    country: 'Denmark',
    IATA: 'STA',
    ICAO: 'EKVJ',
    lat: '55.9901008605957',
    lon: '8.353910446166992',
    timezone: '1'
  },
  {
    name: 'Aalborg ',
    city: 'Aalborg',
    country: 'Denmark',
    IATA: 'AAL',
    ICAO: 'EKYT',
    lat: '57.0927589138',
    lon: '9.84924316406',
    timezone: '1'
  },
  {
    name: 'Luxembourg-Findel Intl ',
    city: 'Luxemburg',
    country: 'Luxembourg',
    IATA: 'LUX',
    ICAO: 'ELLX',
    lat: '49.6233333',
    lon: '6.2044444',
    timezone: '1'
  },
  {
    name: '\u00c5lesund ',
    city: 'Alesund',
    country: 'Norway',
    IATA: 'AES',
    ICAO: 'ENAL',
    lat: '62.5625',
    lon: '6.119699954986572',
    timezone: '1'
  },
  {
    name: 'And\u00f8ya ',
    city: 'Andoya',
    country: 'Norway',
    IATA: 'ANX',
    ICAO: 'ENAN',
    lat: '69.292503356934',
    lon: '16.144199371338',
    timezone: '1'
  },
  {
    name: 'Alta ',
    city: 'Alta',
    country: 'Norway',
    IATA: 'ALF',
    ICAO: 'ENAT',
    lat: '69.976097106934',
    lon: '23.371700286865',
    timezone: '1'
  },
  {
    name: 'B\u00f8moen ',
    city: 'Voss',
    country: 'Norway',
    IATA: '\\N',
    ICAO: 'ENBM',
    lat: '60.63890075683594',
    lon: '6.501500129699707',
    timezone: '1'
  },
  {
    name: 'Br\u00f8nn\u00f8ysund ',
    city: 'Bronnoysund',
    country: 'Norway',
    IATA: 'BNN',
    ICAO: 'ENBN',
    lat: '65.461097717285',
    lon: '12.217499732971',
    timezone: '1'
  },
  {
    name: 'Bod\u00f8 ',
    city: 'Bodo',
    country: 'Norway',
    IATA: 'BOO',
    ICAO: 'ENBO',
    lat: '67.26920318603516',
    lon: '14.365300178527832',
    timezone: '1'
  },
  {
    name: 'Bergen  Flesland',
    city: 'Bergen',
    country: 'Norway',
    IATA: 'BGO',
    ICAO: 'ENBR',
    lat: '60.29339981',
    lon: '5.218140125',
    timezone: '1'
  },
  {
    name: 'B\u00e5tsfjord ',
    city: 'Batsfjord',
    country: 'Norway',
    IATA: 'BJF',
    ICAO: 'ENBS',
    lat: '70.60050201416',
    lon: '29.691400527954',
    timezone: '1'
  },
  {
    name: 'Kristiansand ',
    city: 'Kristiansand',
    country: 'Norway',
    IATA: 'KRS',
    ICAO: 'ENCN',
    lat: '58.204201',
    lon: '8.08537',
    timezone: '1'
  },
  {
    name: 'Geilo  Dagali',
    city: 'Geilo',
    country: 'Norway',
    IATA: 'DLD',
    ICAO: 'ENDI',
    lat: '60.417301177978516',
    lon: '8.518349647521973',
    timezone: '1'
  },
  {
    name: 'Bardufoss ',
    city: 'Bardufoss',
    country: 'Norway',
    IATA: 'BDU',
    ICAO: 'ENDU',
    lat: '69.055801391602',
    lon: '18.540399551392',
    timezone: '1'
  },
  {
    name: 'Leirin ',
    city: 'Fagernes',
    country: 'Norway',
    IATA: 'VDB',
    ICAO: 'ENFG',
    lat: '61.015598297119',
    lon: '9.2880601882935',
    timezone: '1'
  },
  {
    name: 'Flor\u00f8 ',
    city: 'Floro',
    country: 'Norway',
    IATA: 'FRO',
    ICAO: 'ENFL',
    lat: '61.583599090576',
    lon: '5.0247201919556',
    timezone: '1'
  },
  {
    name: 'Oslo Lufthavn',
    city: 'Oslo',
    country: 'Norway',
    IATA: 'OSL',
    ICAO: 'ENGM',
    lat: '60.121',
    lon: '11.0502',
    timezone: '1'
  },
  {
    name: 'Haugesund ',
    city: 'Haugesund',
    country: 'Norway',
    IATA: 'HAU',
    ICAO: 'ENHD',
    lat: '59.34529876709',
    lon: '5.2083601951599',
    timezone: '1'
  },
  {
    name: 'Hasvik ',
    city: 'Hasvik',
    country: 'Norway',
    IATA: 'HAA',
    ICAO: 'ENHK',
    lat: '70.486701965332',
    lon: '22.139699935913',
    timezone: '1'
  },
  {
    name: 'Kristiansund  (Kvernberget)',
    city: 'Kristiansund',
    country: 'Norway',
    IATA: 'KSU',
    ICAO: 'ENKB',
    lat: '63.111801147461',
    lon: '7.824520111084',
    timezone: '1'
  },
  {
    name: 'Kjeller ',
    city: 'Kjeller',
    country: 'Norway',
    IATA: '\\N',
    ICAO: 'ENKJ',
    lat: '59.9692993164',
    lon: '11.036100387600001',
    timezone: '1'
  },
  {
    name: 'Kirkenes  (H\u00f8ybuktmoen)',
    city: 'Kirkenes',
    country: 'Norway',
    IATA: 'KKN',
    ICAO: 'ENKR',
    lat: '69.725799560547',
    lon: '29.891300201416',
    timezone: '1'
  },
  {
    name: 'Lista ',
    city: 'Farsund',
    country: 'Norway',
    IATA: 'FAN',
    ICAO: 'ENLI',
    lat: '58.0994987487793',
    lon: '6.626049995422363',
    timezone: '1'
  },
  {
    name: 'Molde ',
    city: 'Molde',
    country: 'Norway',
    IATA: 'MOL',
    ICAO: 'ENML',
    lat: '62.744701385498',
    lon: '7.2624998092651',
    timezone: '1'
  },
  {
    name: 'Mosj\u00f8en  (Kj\u00e6rstad)',
    city: 'Mosjoen',
    country: 'Norway',
    IATA: 'MJF',
    ICAO: 'ENMS',
    lat: '65.783996582031',
    lon: '13.214900016785',
    timezone: '1'
  },
  {
    name: 'Banak ',
    city: 'Lakselv',
    country: 'Norway',
    IATA: 'LKL',
    ICAO: 'ENNA',
    lat: '70.068801879883',
    lon: '24.973499298096',
    timezone: '1'
  },
  {
    name: 'Notodden ',
    city: 'Notodden',
    country: 'Norway',
    IATA: 'NTB',
    ICAO: 'ENNO',
    lat: '59.565701',
    lon: '9.21222',
    timezone: '1'
  },
  {
    name: '\u00d8rland ',
    city: 'Orland',
    country: 'Norway',
    IATA: 'OLA',
    ICAO: 'ENOL',
    lat: '63.69889831542969',
    lon: '9.604000091552734',
    timezone: '1'
  },
  {
    name: 'R\u00f8ros ',
    city: 'Roros',
    country: 'Norway',
    IATA: 'RRS',
    ICAO: 'ENRO',
    lat: '62.578399658203',
    lon: '11.342300415039',
    timezone: '1'
  },
  {
    name: 'Skien ',
    city: 'Skien',
    country: 'Norway',
    IATA: 'SKE',
    ICAO: 'ENSN',
    lat: '59.185001373291016',
    lon: '9.566940307617188',
    timezone: '1'
  },
  {
    name: 'Stord ',
    city: 'Stord',
    country: 'Norway',
    IATA: 'SRP',
    ICAO: 'ENSO',
    lat: '59.791900634765625',
    lon: '5.340849876403809',
    timezone: '1'
  },
  {
    name: 'Sandnessj\u00f8en  (Stokka)',
    city: 'Sandnessjoen',
    country: 'Norway',
    IATA: 'SSJ',
    ICAO: 'ENST',
    lat: '65.956802368164',
    lon: '12.468899726868',
    timezone: '1'
  },
  {
    name: 'Trondheim  V\u00e6rnes',
    city: 'Trondheim',
    country: 'Norway',
    IATA: 'TRD',
    ICAO: 'ENVA',
    lat: '63.4578018',
    lon: '10.9239998',
    timezone: '1'
  },
  {
    name: 'Stavanger  Sola',
    city: 'Stavanger',
    country: 'Norway',
    IATA: 'SVG',
    ICAO: 'ENZV',
    lat: '58.876701354',
    lon: '5.6377801895',
    timezone: '1'
  },
  {
    name: 'Babice ',
    city: 'Warsaw',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPBC',
    lat: '52.26850128173828',
    lon: '20.910999298095703',
    timezone: '1'
  },
  {
    name: 'Gda\u0144sk Lech Wa\u0142\u0119sa ',
    city: 'Gdansk',
    country: 'Poland',
    IATA: 'GDN',
    ICAO: 'EPGD',
    lat: '54.377601623535156',
    lon: '18.46619987487793',
    timezone: '1'
  },
  {
    name: 'Krak\u00f3w John Paul II Intl ',
    city: 'Krakow',
    country: 'Poland',
    IATA: 'KRK',
    ICAO: 'EPKK',
    lat: '50.077702',
    lon: '19.7848',
    timezone: '1'
  },
  {
    name: 'Muchowiec ',
    city: 'Katowice',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPKM',
    lat: '50.23809814453125',
    lon: '19.03420066833496',
    timezone: '1'
  },
  {
    name: 'Katowice Intl ',
    city: 'Katowice',
    country: 'Poland',
    IATA: 'KTW',
    ICAO: 'EPKT',
    lat: '50.4743',
    lon: '19.08',
    timezone: '1'
  },
  {
    name: 'Mielec ',
    city: 'Mielec',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPML',
    lat: '50.32229995727539',
    lon: '21.462099075317383',
    timezone: '1'
  },
  {
    name: 'Pozna\u0144-\u0141awica ',
    city: 'Poznan',
    country: 'Poland',
    IATA: 'POZ',
    ICAO: 'EPPO',
    lat: '52.421001434299995',
    lon: '16.8262996674',
    timezone: '1'
  },
  {
    name: 'Rzesz\u00f3w-Jasionka ',
    city: 'Rzeszow',
    country: 'Poland',
    IATA: 'RZE',
    ICAO: 'EPRZ',
    lat: '50.1100006104',
    lon: '22.0189990997',
    timezone: '1'
  },
  {
    name: 'Szczecin-Goleni\u00f3w Solidarno\u015b\u0107 ',
    city: 'Szczecin',
    country: 'Poland',
    IATA: 'SZZ',
    ICAO: 'EPSC',
    lat: '53.584701538100006',
    lon: '14.902199745199999',
    timezone: '1'
  },
  {
    name: 'Redzikowo Air Base',
    city: 'Slupsk',
    country: 'Poland',
    IATA: 'OSP',
    ICAO: 'EPSK',
    lat: '54.47890090942383',
    lon: '17.107500076293945',
    timezone: '1'
  },
  {
    name: 'Swidwin Military Air Base',
    city: 'Shapaja',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPSN',
    lat: '53.790599823',
    lon: '15.826299667399999',
    timezone: '1'
  },
  {
    name: 'Warsaw Chopin ',
    city: 'Warsaw',
    country: 'Poland',
    IATA: 'WAW',
    ICAO: 'EPWA',
    lat: '52.1656990051',
    lon: '20.967100143399996',
    timezone: '1'
  },
  {
    name: 'Copernicus Wroc\u0142aw ',
    city: 'Wroclaw',
    country: 'Poland',
    IATA: 'WRO',
    ICAO: 'EPWR',
    lat: '51.1026992798',
    lon: '16.885799408',
    timezone: '1'
  },
  {
    name: 'Zielona G\u00f3ra-Babimost ',
    city: 'Zielona Gora',
    country: 'Poland',
    IATA: 'IEG',
    ICAO: 'EPZG',
    lat: '52.138500213600004',
    lon: '15.7986001968',
    timezone: '1'
  },
  {
    name: 'Malmen Air Base',
    city: 'Linkoeping',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESCF',
    lat: '58.40230178833008',
    lon: '15.525699615478516',
    timezone: '1'
  },
  {
    name: 'Br\u00e5valla Air Base',
    city: 'Norrkoeping',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESCK',
    lat: '58.61090087890625',
    lon: '16.103599548339844',
    timezone: '1'
  },
  {
    name: 'Uppsala ',
    city: 'Uppsala',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESCM',
    lat: '59.897300720214844',
    lon: '17.588600158691406',
    timezone: '1'
  },
  {
    name: 'Ronneby ',
    city: 'Ronneby',
    country: 'Sweden',
    IATA: 'RNB',
    ICAO: 'ESDF',
    lat: '56.266700744629',
    lon: '15.265000343323',
    timezone: '1'
  },
  {
    name: 'R\u00e5da Air Base',
    city: 'Rada',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESFR',
    lat: '58.49810028076172',
    lon: '13.053199768066406',
    timezone: '1'
  },
  {
    name: 'Gothenburg-Landvetter ',
    city: 'Gothenborg',
    country: 'Sweden',
    IATA: 'GOT',
    ICAO: 'ESGG',
    lat: '57.662799835205',
    lon: '12.279800415039',
    timezone: '1'
  },
  {
    name: 'J\u00f6nk\u00f6ping ',
    city: 'Joenkoeping',
    country: 'Sweden',
    IATA: 'JKG',
    ICAO: 'ESGJ',
    lat: '57.757598876953125',
    lon: '14.068699836730957',
    timezone: '1'
  },
  {
    name: 'Falk\u00f6ping ',
    city: 'Falkoping',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESGK',
    lat: '58.1697998046875',
    lon: '13.587800025939941',
    timezone: '1'
  },
  {
    name: 'Lidk\u00f6ping-Hovby ',
    city: 'Lidkoping',
    country: 'Sweden',
    IATA: 'LDK',
    ICAO: 'ESGL',
    lat: '58.4655',
    lon: '13.1744',
    timezone: '1'
  },
  {
    name: 'Gothenburg City ',
    city: 'Gothenborg',
    country: 'Sweden',
    IATA: 'GSE',
    ICAO: 'ESGP',
    lat: '57.7747',
    lon: '11.8704',
    timezone: '1'
  },
  {
    name: 'Sk\u00f6vde ',
    city: 'Skovde',
    country: 'Sweden',
    IATA: 'KVB',
    ICAO: 'ESGR',
    lat: '58.45640182495117',
    lon: '13.972700119018555',
    timezone: '1'
  },
  {
    name: 'Trollh\u00e4ttan-V\u00e4nersborg ',
    city: 'Trollhattan',
    country: 'Sweden',
    IATA: 'THN',
    ICAO: 'ESGT',
    lat: '58.31809997558594',
    lon: '12.345000267028809',
    timezone: '1'
  },
  {
    name: 'Karlsborg Air Base',
    city: 'Karlsborg',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESIA',
    lat: '58.51380157470703',
    lon: '14.507100105285645',
    timezone: '1'
  },
  {
    name: 'S\u00e5ten\u00e4s Air Base',
    city: 'Satenas',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESIB',
    lat: '58.42639923095703',
    lon: '12.714400291442871',
    timezone: '1'
  },
  {
    name: 'Barkarby ',
    city: 'Stockholm',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESKB',
    lat: '59.4144743644',
    lon: '17.8821372986',
    timezone: '1'
  },
  {
    name: 'Karlskoga ',
    city: 'Karlskoga',
    country: 'Sweden',
    IATA: 'KSK',
    ICAO: 'ESKK',
    lat: '59.34590148925781',
    lon: '14.49590015411377',
    timezone: '1'
  },
  {
    name: 'Mora ',
    city: 'Mora',
    country: 'Sweden',
    IATA: 'MXX',
    ICAO: 'ESKM',
    lat: '60.957901',
    lon: '14.5114',
    timezone: '1'
  },
  {
    name: 'Stockholm Skavsta ',
    city: 'Stockholm',
    country: 'Sweden',
    IATA: 'NYO',
    ICAO: 'ESKN',
    lat: '58.78860092163086',
    lon: '16.912200927734375',
    timezone: '1'
  },
  {
    name: 'Arvika ',
    city: 'Arvika',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESKV',
    lat: '59.6759',
    lon: '12.6394',
    timezone: '1'
  },
  {
    name: 'Emmaboda Airfield',
    city: 'Emmaboda',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESMA',
    lat: '56.610802',
    lon: '15.6048',
    timezone: '1'
  },
  {
    name: 'Feringe ',
    city: 'Ljungby',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESMG',
    lat: '56.9502983093',
    lon: '13.921699523900001',
    timezone: '1'
  },
  {
    name: 'Kristianstad ',
    city: 'Kristianstad',
    country: 'Sweden',
    IATA: 'KID',
    ICAO: 'ESMK',
    lat: '55.92169952392578',
    lon: '14.08549976348877',
    timezone: '1'
  },
  {
    name: 'Landskrona ',
    city: 'Landskrona',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESML',
    lat: '55.94599914550781',
    lon: '12.869999885559082',
    timezone: '1'
  },
  {
    name: 'Oskarshamn ',
    city: 'Oskarshamn',
    country: 'Sweden',
    IATA: 'OSK',
    ICAO: 'ESMO',
    lat: '57.350498',
    lon: '16.497999',
    timezone: '1'
  },
  {
    name: 'Anderstorp ',
    city: 'Anderstorp',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESMP',
    lat: '57.264198303222656',
    lon: '13.59939956665039',
    timezone: '1'
  },
  {
    name: 'Kalmar ',
    city: 'Kalkmar',
    country: 'Sweden',
    IATA: 'KLR',
    ICAO: 'ESMQ',
    lat: '56.68550109863281',
    lon: '16.287599563598633',
    timezone: '1'
  },
  {
    name: 'Malm\u00f6 Sturup ',
    city: 'Malmoe',
    country: 'Sweden',
    IATA: 'MMX',
    ICAO: 'ESMS',
    lat: '55.536305364',
    lon: '13.376197814900001',
    timezone: '1'
  },
  {
    name: 'Halmstad ',
    city: 'Halmstad',
    country: 'Sweden',
    IATA: 'HAD',
    ICAO: 'ESMT',
    lat: '56.69110107421875',
    lon: '12.820199966430664',
    timezone: '1'
  },
  {
    name: 'Hagshult Air Base',
    city: 'Hagshult',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESMV',
    lat: '57.292198',
    lon: '14.1372',
    timezone: '1'
  },
  {
    name: 'V\u00e4xj\u00f6 Kronoberg ',
    city: 'Vaxjo',
    country: 'Sweden',
    IATA: 'VXO',
    ICAO: 'ESMX',
    lat: '56.929100036621094',
    lon: '14.727999687194824',
    timezone: '1'
  },
  {
    name: 'Hallviken ',
    city: 'Hallviken',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNA',
    lat: '63.73830032348633',
    lon: '15.45829963684082',
    timezone: '1'
  },
  {
    name: 'Hedlanda ',
    city: 'Hede',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNC',
    lat: '62.40890121459999',
    lon: '13.747200012199999',
    timezone: '1'
  },
  {
    name: 'Sveg ',
    city: 'Sveg',
    country: 'Sweden',
    IATA: 'EVG',
    ICAO: 'ESND',
    lat: '62.04779815673828',
    lon: '14.422900199890137',
    timezone: '1'
  },
  {
    name: 'G\u00e4llivare ',
    city: 'Gallivare',
    country: 'Sweden',
    IATA: 'GEV',
    ICAO: 'ESNG',
    lat: '67.13240051269531',
    lon: '20.814599990844727',
    timezone: '1'
  },
  {
    name: 'Hudiksvall ',
    city: 'Hudiksvall',
    country: 'Sweden',
    IATA: 'HUV',
    ICAO: 'ESNH',
    lat: '61.7681007385',
    lon: '17.0806999207',
    timezone: '1'
  },
  {
    name: 'Jokkmokk ',
    city: 'Jokkmokk',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNJ',
    lat: '66.49620056152344',
    lon: '20.147199630737305',
    timezone: '1'
  },
  {
    name: 'Kramfors Sollefte\u00e5 ',
    city: 'Kramfors',
    country: 'Sweden',
    IATA: 'KRF',
    ICAO: 'ESNK',
    lat: '63.04859924316406',
    lon: '17.76889991760254',
    timezone: '1'
  },
  {
    name: 'Lycksele ',
    city: 'Lycksele',
    country: 'Sweden',
    IATA: 'LYC',
    ICAO: 'ESNL',
    lat: '64.54830169677734',
    lon: '18.71619987487793',
    timezone: '1'
  },
  {
    name: 'Optand ',
    city: 'Optand',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNM',
    lat: '63.12860107421875',
    lon: '14.802800178527832',
    timezone: '1'
  },
  {
    name: 'Sundsvall-H\u00e4rn\u00f6sand ',
    city: 'Sundsvall',
    country: 'Sweden',
    IATA: 'SDL',
    ICAO: 'ESNN',
    lat: '62.528099060058594',
    lon: '17.443899154663086',
    timezone: '1'
  },
  {
    name: '\u00d6rnsk\u00f6ldsvik ',
    city: 'Ornskoldsvik',
    country: 'Sweden',
    IATA: 'OER',
    ICAO: 'ESNO',
    lat: '63.40829849243164',
    lon: '18.989999771118164',
    timezone: '1'
  },
  {
    name: 'Pite\u00e5 ',
    city: 'Pitea',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNP',
    lat: '65.39830017089844',
    lon: '21.260799407958984',
    timezone: '1'
  },
  {
    name: 'Kiruna ',
    city: 'Kiruna',
    country: 'Sweden',
    IATA: 'KRN',
    ICAO: 'ESNQ',
    lat: '67.821998596191',
    lon: '20.336799621582',
    timezone: '1'
  },
  {
    name: 'Orsa ',
    city: 'Orsa',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNR',
    lat: '61.189998626708984',
    lon: '14.712599754333496',
    timezone: '1'
  },
  {
    name: 'Skellefte\u00e5 ',
    city: 'Skelleftea',
    country: 'Sweden',
    IATA: 'SFT',
    ICAO: 'ESNS',
    lat: '64.62480163574219',
    lon: '21.076900482177734',
    timezone: '1'
  },
  {
    name: 'S\u00e4ttna ',
    city: 'Sattna',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESNT',
    lat: '62.4814',
    lon: '17.002899',
    timezone: '1'
  },
  {
    name: 'Ume\u00e5 ',
    city: 'Umea',
    country: 'Sweden',
    IATA: 'UME',
    ICAO: 'ESNU',
    lat: '63.791801452637',
    lon: '20.282800674438',
    timezone: '1'
  },
  {
    name: 'Vilhelmina ',
    city: 'Vilhelmina',
    country: 'Sweden',
    IATA: 'VHM',
    ICAO: 'ESNV',
    lat: '64.5791015625',
    lon: '16.833599090576172',
    timezone: '1'
  },
  {
    name: 'Arvidsjaur ',
    city: 'Arvidsjaur',
    country: 'Sweden',
    IATA: 'AJR',
    ICAO: 'ESNX',
    lat: '65.59030151367188',
    lon: '19.28190040588379',
    timezone: '1'
  },
  {
    name: '\u00d6rebro ',
    city: 'Orebro',
    country: 'Sweden',
    IATA: 'ORB',
    ICAO: 'ESOE',
    lat: '59.22370147705078',
    lon: '15.038000106811523',
    timezone: '1'
  },
  {
    name: 'Stockholm V\u00e4ster\u00e5s ',
    city: 'Vasteras',
    country: 'Sweden',
    IATA: 'VST',
    ICAO: 'ESOW',
    lat: '59.58940124511719',
    lon: '16.63360023498535',
    timezone: '1'
  },
  {
    name: 'Lule\u00e5 ',
    city: 'Lulea',
    country: 'Sweden',
    IATA: 'LLA',
    ICAO: 'ESPA',
    lat: '65.543800354004',
    lon: '22.121999740601',
    timezone: '1'
  },
  {
    name: 'Vidsel Air Base',
    city: 'Vidsel',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESPE',
    lat: '65.87529754638672',
    lon: '20.149900436401367',
    timezone: '1'
  },
  {
    name: 'Arboga ',
    city: 'Arboga',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESQO',
    lat: '59.386600494384766',
    lon: '15.924099922180176',
    timezone: '1'
  },
  {
    name: 'Stockholm-Arlanda ',
    city: 'Stockholm',
    country: 'Sweden',
    IATA: 'ARN',
    ICAO: 'ESSA',
    lat: '59.651901245117',
    lon: '17.918600082397',
    timezone: '1'
  },
  {
    name: 'Stockholm-Bromma ',
    city: 'Stockholm',
    country: 'Sweden',
    IATA: 'BMA',
    ICAO: 'ESSB',
    lat: '59.354400634765625',
    lon: '17.941699981689453',
    timezone: '1'
  },
  {
    name: 'Borlange ',
    city: 'Borlange',
    country: 'Sweden',
    IATA: 'BLE',
    ICAO: 'ESSD',
    lat: '60.422000885009766',
    lon: '15.515199661254883',
    timezone: '1'
  },
  {
    name: 'Hultsfred ',
    city: 'Hultsfred',
    country: 'Sweden',
    IATA: 'HLF',
    ICAO: 'ESSF',
    lat: '57.525799',
    lon: '15.8233',
    timezone: '1'
  },
  {
    name: 'G\u00e4vle Sandviken ',
    city: 'Gavle',
    country: 'Sweden',
    IATA: 'GVX',
    ICAO: 'ESSK',
    lat: '60.593299865722656',
    lon: '16.951400756835938',
    timezone: '1'
  },
  {
    name: 'Link\u00f6ping City ',
    city: 'Linkoeping',
    country: 'Sweden',
    IATA: 'LPI',
    ICAO: 'ESSL',
    lat: '58.4062004089',
    lon: '15.680500030500001',
    timezone: '1'
  },
  {
    name: 'Norrk\u00f6ping ',
    city: 'Norrkoeping',
    country: 'Sweden',
    IATA: 'NRK',
    ICAO: 'ESSP',
    lat: '58.586299896240234',
    lon: '16.250600814819336',
    timezone: '1'
  },
  {
    name: 'Eskilstuna ',
    city: 'Eskilstuna',
    country: 'Sweden',
    IATA: 'EKT',
    ICAO: 'ESSU',
    lat: '59.35110092163086',
    lon: '16.70840072631836',
    timezone: '1'
  },
  {
    name: 'Visby ',
    city: 'Visby',
    country: 'Sweden',
    IATA: 'VBY',
    ICAO: 'ESSV',
    lat: '57.662799835205',
    lon: '18.346200942993',
    timezone: '1'
  },
  {
    name: 'Kalixfors ',
    city: 'Kalixfors',
    country: 'Sweden',
    IATA: '\\N',
    ICAO: 'ESUK',
    lat: '67.76480102539062',
    lon: '20.257200241088867',
    timezone: '1'
  },
  {
    name: 'Spangdahlem Air Base',
    city: 'Spangdahlem',
    country: 'Germany',
    IATA: 'SPM',
    ICAO: 'ETAD',
    lat: '49.9726982117',
    lon: '6.69250011444',
    timezone: '1'
  },
  {
    name: 'Ramstein Air Base',
    city: 'Ramstein',
    country: 'Germany',
    IATA: 'RMS',
    ICAO: 'ETAR',
    lat: '49.4369010925293',
    lon: '7.600279808044434',
    timezone: '1'
  },
  {
    name: '[Duplicate] Giebelstadt Army Air Field',
    city: 'Giebelstadt',
    country: 'Germany',
    IATA: 'GHF',
    ICAO: 'ETEU',
    lat: '49.648101806599996',
    lon: '9.966489791870002',
    timezone: '1'
  },
  {
    name: 'B\u00fcckeburg Air Base',
    city: 'Brueckeburg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHB',
    lat: '52.2785',
    lon: '9.08217',
    timezone: '1'
  },
  {
    name: 'Celle ',
    city: 'Celle',
    country: 'Germany',
    IATA: 'ZCN',
    ICAO: 'ETHC',
    lat: '52.59120178222656',
    lon: '10.022100448608398',
    timezone: '1'
  },
  {
    name: 'Rheine Bentlage Air Base',
    city: 'Rheine-brentlange',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHE',
    lat: '52.291199',
    lon: '7.387',
    timezone: '1'
  },
  {
    name: 'Fritzlar ',
    city: 'Fritzlar',
    country: 'Germany',
    IATA: 'FRZ',
    ICAO: 'ETHF',
    lat: '51.1146',
    lon: '9.286',
    timezone: '1'
  },
  {
    name: 'Laupheim Air Base',
    city: 'Laupheim',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHL',
    lat: '48.220299',
    lon: '9.91002',
    timezone: '1'
  },
  {
    name: 'Mendig Airfield',
    city: 'Mendig',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHM',
    lat: '50.366001',
    lon: '7.31533',
    timezone: '1'
  },
  {
    name: 'Niederstetten Army Air Base',
    city: 'Niederstetten',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHN',
    lat: '49.391945',
    lon: '9.958889',
    timezone: '1'
  },
  {
    name: 'Roth ',
    city: 'Roth',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHR',
    lat: '49.217498779296875',
    lon: '11.100199699401855',
    timezone: '1'
  },
  {
    name: 'Fassberg Air Base',
    city: 'Fassberg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETHS',
    lat: '52.919399',
    lon: '10.185827',
    timezone: '1'
  },
  {
    name: 'Grafenwohr Army Air Field',
    city: 'Grafenwoehr',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETIC',
    lat: '49.698699951171875',
    lon: '11.940199851989746',
    timezone: '1'
  },
  {
    name: 'Hanau Army Air Field',
    city: 'Hanau',
    country: 'Germany',
    IATA: 'ZNF',
    ICAO: 'ETID',
    lat: '50.169201',
    lon: '8.96159',
    timezone: '1'
  },
  {
    name: 'Hohenfels Army Air Field',
    city: 'Hohenfels',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETIH',
    lat: '49.218101501464844',
    lon: '11.836099624633789',
    timezone: '1'
  },
  {
    name: 'Flugplatz Kitzingen',
    city: 'Kitzingen',
    country: 'Germany',
    IATA: 'KZG',
    ICAO: 'ETIN',
    lat: '49.743099',
    lon: '10.2006',
    timezone: '1'
  },
  {
    name: 'Nordholz Naval Airbase',
    city: 'Nordholz',
    country: 'Germany',
    IATA: 'FCN',
    ICAO: 'ETMN',
    lat: '53.7677001953',
    lon: '8.658499717709999',
    timezone: '1'
  },
  {
    name: 'Diepholz Air Base',
    city: 'Diepholz',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETND',
    lat: '52.585556',
    lon: '8.342222',
    timezone: '1'
  },
  {
    name: 'Geilenkirchen Air Base',
    city: 'Geilenkirchen',
    country: 'Germany',
    IATA: 'GKE',
    ICAO: 'ETNG',
    lat: '50.9608',
    lon: '6.04242',
    timezone: '1'
  },
  {
    name: 'Hohn Air Base',
    city: 'Hohn',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETNH',
    lat: '54.312199',
    lon: '9.53817',
    timezone: '1'
  },
  {
    name: 'Jever Air Base',
    city: 'Jever',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETNJ',
    lat: '53.533501',
    lon: '7.88867',
    timezone: '1'
  },
  {
    name: 'Rostock-Laage ',
    city: 'Laage',
    country: 'Germany',
    IATA: 'RLG',
    ICAO: 'ETNL',
    lat: '53.9182014465',
    lon: '12.278300285299999',
    timezone: '1'
  },
  {
    name: 'N\u00f6rvenich Air Base',
    city: 'Noervenich',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETNN',
    lat: '50.8312',
    lon: '6.65817',
    timezone: '1'
  },
  {
    name: 'Schleswig Air Base',
    city: 'Schleswig',
    country: 'Germany',
    IATA: 'WBG',
    ICAO: 'ETNS',
    lat: '54.459301',
    lon: '9.51633',
    timezone: '1'
  },
  {
    name: 'Wittmundhafen ',
    city: 'Wittmundhafen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETNT',
    lat: '53.54779815673828',
    lon: '7.667329788208008',
    timezone: '1'
  },
  {
    name: 'Wunstorf Air Base',
    city: 'Wunstorf',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETNW',
    lat: '52.457298',
    lon: '9.42717',
    timezone: '1'
  },
  {
    name: 'Vilseck Army Air Field',
    city: 'Vilseck',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETOI',
    lat: '49.63359832763672',
    lon: '11.767200469970703',
    timezone: '1'
  },
  {
    name: 'Coleman Army Air Field',
    city: 'Coleman',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETOR',
    lat: '49.5635986328125',
    lon: '8.463390350341797',
    timezone: '1'
  },
  {
    name: 'Wiesbaden Army Airfield',
    city: 'Wiesbaden',
    country: 'Germany',
    IATA: 'WIE',
    ICAO: 'ETOU',
    lat: '50.049800872802734',
    lon: '8.325400352478027',
    timezone: '1'
  },
  {
    name: 'Landsberg Lech Air Base',
    city: 'Landsberg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSA',
    lat: '48.070599',
    lon: '10.906',
    timezone: '1'
  },
  {
    name: 'B\u00fcchel Air Base',
    city: 'Buechel',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSB',
    lat: '50.1738014221',
    lon: '7.06333017349',
    timezone: '1'
  },
  {
    name: 'Erding ',
    city: 'Erding',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSE',
    lat: '48.32229995727539',
    lon: '11.948699951171875',
    timezone: '1'
  },
  {
    name: 'F\u00fcrstenfeldbruck Air Base',
    city: 'Fuerstenfeldbruck',
    country: 'Germany',
    IATA: 'FEL',
    ICAO: 'ETSF',
    lat: '48.205555',
    lon: '11.266944',
    timezone: '1'
  },
  {
    name: 'Holzdorf Air Base',
    city: 'Holzdorf',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSH',
    lat: '51.767799',
    lon: '13.1677',
    timezone: '1'
  },
  {
    name: 'Ingolstadt Manching ',
    city: 'Ingolstadt',
    country: 'Germany',
    IATA: 'IGS',
    ICAO: 'ETSI',
    lat: '48.7156982421875',
    lon: '11.534000396728516',
    timezone: '1'
  },
  {
    name: 'Lechfeld Air Base',
    city: 'Lechfeld',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSL',
    lat: '48.185504',
    lon: '10.8612',
    timezone: '1'
  },
  {
    name: 'Neuburg AFB',
    city: 'Neuburg',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'ETSN',
    lat: '48.710999',
    lon: '11.2115',
    timezone: '1'
  },
  {
    name: 'G\u00fctersloh Air Base',
    city: 'Guetersloh',
    country: 'Germany',
    IATA: 'GUT',
    ICAO: 'ETUO',
    lat: '51.922798',
    lon: '8.30633',
    timezone: '1'
  },
  {
    name: 'Alexander Bay ',
    city: 'Alexander Bay',
    country: 'South Africa',
    IATA: 'ALJ',
    ICAO: 'FAAB',
    lat: '-28.575001',
    lon: '16.5333',
    timezone: '2'
  },
  {
    name: 'Aggeneys ',
    city: 'Aggeneys',
    country: 'South Africa',
    IATA: 'AGZ',
    ICAO: 'FAAG',
    lat: '-29.28179931640625',
    lon: '18.813899993896484',
    timezone: '2'
  },
  {
    name: 'Brakpan ',
    city: 'Brakpan',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FABB',
    lat: '-26.23859977722168',
    lon: '28.301799774169922',
    timezone: '2'
  },
  {
    name: 'Bisho ',
    city: 'Bisho',
    country: 'South Africa',
    IATA: 'BIY',
    ICAO: 'FABE',
    lat: '-32.8970985413',
    lon: '27.279100418099997',
    timezone: '2'
  },
  {
    name: 'Bram Fischer Intl ',
    city: 'Bloemfontein',
    country: 'South Africa',
    IATA: 'BFN',
    ICAO: 'FABL',
    lat: '-29.092699050900002',
    lon: '26.302400589',
    timezone: '2'
  },
  {
    name: 'Bethlehem ',
    city: 'Bethlehem',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FABM',
    lat: '-28.2483997345',
    lon: '28.3360996246',
    timezone: '2'
  },
  {
    name: 'Hendrik Potgieter ',
    city: 'Bothaville',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FABO',
    lat: '-27.36680030822754',
    lon: '26.629199981689453',
    timezone: '2'
  },
  {
    name: 'Cape Town Intl ',
    city: 'Cape Town',
    country: 'South Africa',
    IATA: 'CPT',
    ICAO: 'FACT',
    lat: '-33.9648017883',
    lon: '18.6016998291',
    timezone: '2'
  },
  {
    name: 'Calvinia ',
    city: 'Calvinia',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FACV',
    lat: '-31.50029945373535',
    lon: '19.725900650024414',
    timezone: '2'
  },
  {
    name: 'King Shaka Intl ',
    city: 'Durban',
    country: 'South Africa',
    IATA: 'DUR',
    ICAO: 'FALE',
    lat: '-29.6144444444',
    lon: '31.1197222222',
    timezone: '2'
  },
  {
    name: 'Ben Schoeman ',
    city: 'East London',
    country: 'South Africa',
    IATA: 'ELS',
    ICAO: 'FAEL',
    lat: '-33.0355987549',
    lon: '27.825899124099998',
    timezone: '2'
  },
  {
    name: 'Ermelo ',
    city: 'Ermelo',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAEO',
    lat: '-26.4955997467041',
    lon: '29.979799270629883',
    timezone: '2'
  },
  {
    name: 'Ficksburg Sentraoes ',
    city: 'Ficksburg',
    country: 'South Africa',
    IATA: 'FCB',
    ICAO: 'FAFB',
    lat: '-28.82309913635254',
    lon: '27.908899307250977',
    timezone: '2'
  },
  {
    name: 'Grand Central ',
    city: 'Johannesburg',
    country: 'South Africa',
    IATA: 'GCJ',
    ICAO: 'FAGC',
    lat: '-25.986299514799995',
    lon: '28.1401004791',
    timezone: '2'
  },
  {
    name: 'George ',
    city: 'George',
    country: 'South Africa',
    IATA: 'GRJ',
    ICAO: 'FAGG',
    lat: '-34.0056',
    lon: '22.378902',
    timezone: '2'
  },
  {
    name: 'Graaff Reinet ',
    city: 'Graaff Reinet',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAGR',
    lat: '-32.193599700927734',
    lon: '24.541400909423828',
    timezone: '2'
  },
  {
    name: 'Grahamstown ',
    city: 'Grahamstown',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAGT',
    lat: '-33.284698486328125',
    lon: '26.49810028076172',
    timezone: '2'
  },
  {
    name: 'Greytown ',
    city: 'Greytown',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAGY',
    lat: '-29.1219997406',
    lon: '30.586700439499996',
    timezone: '2'
  },
  {
    name: 'Harmony ',
    city: 'Harmony',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAHA',
    lat: '-28.078699111938477',
    lon: '26.8612003326416',
    timezone: '2'
  },
  {
    name: 'Harrismith ',
    city: 'Harrismith',
    country: 'South Africa',
    IATA: 'HRS',
    ICAO: 'FAHR',
    lat: '-28.23509979248047',
    lon: '29.106199264526367',
    timezone: '2'
  },
  {
    name: 'Hoedspruit Air Force Base ',
    city: 'Hoedspruit',
    country: 'South Africa',
    IATA: 'HDS',
    ICAO: 'FAHS',
    lat: '-24.368600845299998',
    lon: '31.0487003326',
    timezone: '2'
  },
  {
    name: 'Gariep Dam ',
    city: 'Hendrik Verwoerddam',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAHV',
    lat: '-30.56220054626465',
    lon: '25.52829933166504',
    timezone: '2'
  },
  {
    name: 'OR Tambo Intl ',
    city: 'Johannesburg',
    country: 'South Africa',
    IATA: 'JNB',
    ICAO: 'FAOR',
    lat: '-26.1392',
    lon: '28.246',
    timezone: '2'
  },
  {
    name: 'P C Pelser ',
    city: 'Klerksdorp',
    country: 'South Africa',
    IATA: 'KXE',
    ICAO: 'FAKD',
    lat: '-26.8710994720459',
    lon: '26.718000411987305',
    timezone: '2'
  },
  {
    name: 'Kimberley ',
    city: 'Kimberley',
    country: 'South Africa',
    IATA: 'KIM',
    ICAO: 'FAKM',
    lat: '-28.802799224900003',
    lon: '24.7651996613',
    timezone: '2'
  },
  {
    name: 'Krugersdorp ',
    city: 'Krugersdorp',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAKR',
    lat: '-26.0808259199',
    lon: '27.7259149551',
    timezone: '2'
  },
  {
    name: 'Kroonstad ',
    city: 'Kroonstad',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAKS',
    lat: '-27.660600662231445',
    lon: '27.315799713134766',
    timezone: '2'
  },
  {
    name: 'Johan Pienaar ',
    city: 'Kuruman',
    country: 'South Africa',
    IATA: 'KMH',
    ICAO: 'FAKU',
    lat: '-27.45669937133789',
    lon: '23.411399841308594',
    timezone: '2'
  },
  {
    name: 'Kleinsee ',
    city: 'Kleinsee',
    country: 'South Africa',
    IATA: 'KLZ',
    ICAO: 'FAKZ',
    lat: '-29.6884002686',
    lon: '17.093999862700002',
    timezone: '2'
  },
  {
    name: 'Lanseria ',
    city: 'Johannesburg',
    country: 'South Africa',
    IATA: 'HLA',
    ICAO: 'FALA',
    lat: '-25.938499450699997',
    lon: '27.9260997772',
    timezone: '2'
  },
  {
    name: 'Lichtenburg ',
    city: 'Lichtenburg',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FALI',
    lat: '-26.17569923400879',
    lon: '26.184600830078125',
    timezone: '2'
  },
  {
    name: 'Makhado Air Force Base ',
    city: 'Lambertsbaai',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FALM',
    lat: '-23.159900665283203',
    lon: '29.696500778198242',
    timezone: '2'
  },
  {
    name: 'Langebaanweg ',
    city: 'Langebaanweg',
    country: 'South Africa',
    IATA: 'SDB',
    ICAO: 'FALW',
    lat: '-32.968898773199996',
    lon: '18.1602993011',
    timezone: '2'
  },
  {
    name: 'Ladysmith ',
    city: 'Ladysmith',
    country: 'South Africa',
    IATA: 'LAY',
    ICAO: 'FALY',
    lat: '-28.5816993713',
    lon: '29.749700546299998',
    timezone: '2'
  },
  {
    name: 'Middelburg ',
    city: 'Middelburg',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAMB',
    lat: '-25.684799194335938',
    lon: '29.440200805664062',
    timezone: '2'
  },
  {
    name: 'Margate ',
    city: 'Margate',
    country: 'South Africa',
    IATA: 'MGH',
    ICAO: 'FAMG',
    lat: '-30.8574008942',
    lon: '30.343000412',
    timezone: '2'
  },
  {
    name: 'Marble Hall ',
    city: 'Marble Hall',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAMI',
    lat: '-24.989099502563477',
    lon: '29.283100128173828',
    timezone: '2'
  },
  {
    name: 'Majuba Power Station ',
    city: 'Majuba Power Station',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAMJ',
    lat: '-27.079299926799997',
    lon: '29.7784996033',
    timezone: '2'
  },
  {
    name: 'Riverside ',
    city: 'Malalane',
    country: 'South Africa',
    IATA: 'LLE',
    ICAO: 'FAMN',
    lat: '-25.4300003052',
    lon: '31.5767002106',
    timezone: '2'
  },
  {
    name: 'Morningside Farm ',
    city: 'Musina',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAMS',
    lat: '-25.7045001984',
    lon: '26.9090003967',
    timezone: '2'
  },
  {
    name: 'Mkuze ',
    city: 'Mkuze',
    country: 'South Africa',
    IATA: 'MZQ',
    ICAO: 'FAMU',
    lat: '-27.626100540161133',
    lon: '32.0443000793457',
    timezone: '2'
  },
  {
    name: 'Newcastle ',
    city: 'Newcastle',
    country: 'South Africa',
    IATA: 'NCS',
    ICAO: 'FANC',
    lat: '-27.7705993652',
    lon: '29.976900100699996',
    timezone: '2'
  },
  {
    name: 'Nylstroom Airfield',
    city: 'Nylstroom',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FANY',
    lat: '-24.686100006103516',
    lon: '28.434900283813477',
    timezone: '2'
  },
  {
    name: 'Overberg ',
    city: 'Overberg',
    country: 'South Africa',
    IATA: 'OVG',
    ICAO: 'FAOB',
    lat: '-34.554901123',
    lon: '20.250699996900003',
    timezone: '2'
  },
  {
    name: 'Oudtshoorn ',
    city: 'Oudtshoorn',
    country: 'South Africa',
    IATA: 'OUH',
    ICAO: 'FAOH',
    lat: '-33.6069984436',
    lon: '22.188999176',
    timezone: '2'
  },
  {
    name: 'Port Elizabeth ',
    city: 'Port Elizabeth',
    country: 'South Africa',
    IATA: 'PLZ',
    ICAO: 'FAPE',
    lat: '-33.9849014282',
    lon: '25.6173000336',
    timezone: '2'
  },
  {
    name: 'Plettenberg Bay ',
    city: 'Plettenberg Bay',
    country: 'South Africa',
    IATA: 'PBZ',
    ICAO: 'FAPG',
    lat: '-34.0881601675',
    lon: '23.3287234306',
    timezone: '2'
  },
  {
    name: 'Hendrik Van Eck ',
    city: 'Phalaborwa',
    country: 'South Africa',
    IATA: 'PHW',
    ICAO: 'FAPH',
    lat: '-23.937200546299998',
    lon: '31.1553993225',
    timezone: '2'
  },
  {
    name: 'Pietersburg Municipal ',
    city: 'Polokwane',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAPI',
    lat: '-23.9260997772',
    lon: '29.4843997955',
    timezone: '2'
  },
  {
    name: 'Port St Johns ',
    city: 'Port Saint Johns',
    country: 'South Africa',
    IATA: 'JOH',
    ICAO: 'FAPJ',
    lat: '-31.605899810791016',
    lon: '29.519800186157227',
    timezone: '2'
  },
  {
    name: 'Pietermaritzburg ',
    city: 'Pietermaritzburg',
    country: 'South Africa',
    IATA: 'PZB',
    ICAO: 'FAPM',
    lat: '-29.649000167799997',
    lon: '30.3987007141',
    timezone: '2'
  },
  {
    name: 'Pilanesberg Intl ',
    city: 'Pilanesberg',
    country: 'South Africa',
    IATA: 'NTY',
    ICAO: 'FAPN',
    lat: '-25.333799362199997',
    lon: '27.173400878900004',
    timezone: '2'
  },
  {
    name: 'Polokwane Intl ',
    city: 'Potgietersrus',
    country: 'South Africa',
    IATA: 'PTG',
    ICAO: 'FAPP',
    lat: '-23.845269',
    lon: '29.458615',
    timezone: '2'
  },
  {
    name: 'Potchefstroom ',
    city: 'Potchefstroom',
    country: 'South Africa',
    IATA: 'PCF',
    ICAO: 'FAPS',
    lat: '-26.670999527',
    lon: '27.0818996429',
    timezone: '2'
  },
  {
    name: 'Parys ',
    city: 'Parys',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAPY',
    lat: '-26.889299392700195',
    lon: '27.503400802612305',
    timezone: '2'
  },
  {
    name: 'Queenstown ',
    city: 'Queenstown',
    country: 'South Africa',
    IATA: 'UTW',
    ICAO: 'FAQT',
    lat: '-31.92020034790039',
    lon: '26.882200241088867',
    timezone: '2'
  },
  {
    name: 'Richards Bay ',
    city: "Richard's Bay",
    country: 'South Africa',
    IATA: 'RCB',
    ICAO: 'FARB',
    lat: '-28.740999221800003',
    lon: '32.0920982361',
    timezone: '2'
  },
  {
    name: 'Rustenburg ',
    city: 'Rustenburg',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FARG',
    lat: '-25.6443004608',
    lon: '27.271099090599996',
    timezone: '2'
  },
  {
    name: 'Robertson ',
    city: 'Robertson',
    country: 'South Africa',
    IATA: 'ROD',
    ICAO: 'FARS',
    lat: '-33.812198638916016',
    lon: '19.902799606323242',
    timezone: '2'
  },
  {
    name: 'Springbok ',
    city: 'Springbok',
    country: 'South Africa',
    IATA: 'SBU',
    ICAO: 'FASB',
    lat: '-29.689300537109375',
    lon: '17.939599990844727',
    timezone: '2'
  },
  {
    name: 'Secunda ',
    city: 'Secunda',
    country: 'South Africa',
    IATA: 'ZEC',
    ICAO: 'FASC',
    lat: '-26.52409935',
    lon: '29.170099258399997',
    timezone: '2'
  },
  {
    name: 'Saldanha /Vredenburg ',
    city: 'Saldanha',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FASD',
    lat: '-32.964099884',
    lon: '17.9692993164',
    timezone: '2'
  },
  {
    name: 'Springs Airfield',
    city: 'Springs',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FASI',
    lat: '-26.2494004736',
    lon: '28.3982715607',
    timezone: '2'
  },
  {
    name: 'Swartkop Air Force Base',
    city: 'Swartkop',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FASK',
    lat: '-25.8097000122',
    lon: '28.164600372299997',
    timezone: '2'
  },
  {
    name: 'Sishen ',
    city: 'Sishen',
    country: 'South Africa',
    IATA: 'SIS',
    ICAO: 'FASS',
    lat: '-27.6485996246',
    lon: '22.9993000031',
    timezone: '2'
  },
  {
    name: 'Hendrik Swellengrebel ',
    city: 'Swellendam',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FASX',
    lat: '-34.04819869995117',
    lon: '20.474599838256836',
    timezone: '2'
  },
  {
    name: 'Skukuza ',
    city: 'Skukuza',
    country: 'South Africa',
    IATA: 'SZK',
    ICAO: 'FASZ',
    lat: '-24.960899353',
    lon: '31.5886993408',
    timezone: '2'
  },
  {
    name: 'Tommys Field ',
    city: "Tommy's Field",
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FATF',
    lat: '-28.260000228881836',
    lon: '22.993200302124023',
    timezone: '2'
  },
  {
    name: 'New Tempe ',
    city: 'Bloemfontein',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FATP',
    lat: '-29.032899856567383',
    lon: '26.15760040283203',
    timezone: '2'
  },
  {
    name: 'Tutuka Power Station ',
    city: 'Tutuka',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FATT',
    lat: '-26.776599884',
    lon: '29.3388004303',
    timezone: '2'
  },
  {
    name: 'Tzaneen ',
    city: 'Tzaneen',
    country: 'South Africa',
    IATA: 'LTA',
    ICAO: 'FATZ',
    lat: '-23.8243999481',
    lon: '30.329299926799997',
    timezone: '2'
  },
  {
    name: 'Prince Mangosuthu Buthelezi ',
    city: 'Ulundi',
    country: 'South Africa',
    IATA: 'ULD',
    ICAO: 'FAUL',
    lat: '-28.3206005096',
    lon: '31.4165000916',
    timezone: '2'
  },
  {
    name: 'Pierre Van Ryneveld ',
    city: 'Upington',
    country: 'South Africa',
    IATA: 'UTN',
    ICAO: 'FAUP',
    lat: '-28.39909935',
    lon: '21.260200500499998',
    timezone: '2'
  },
  {
    name: 'K. D. Matanzima ',
    city: 'Umtata',
    country: 'South Africa',
    IATA: 'UTT',
    ICAO: 'FAUT',
    lat: '-31.546363184900002',
    lon: '28.6733551025',
    timezone: '2'
  },
  {
    name: 'Vryburg ',
    city: 'Vryburg',
    country: 'South Africa',
    IATA: 'VRU',
    ICAO: 'FAVB',
    lat: '-26.9824008942',
    lon: '24.7287998199',
    timezone: '2'
  },
  {
    name: 'Virginia ',
    city: 'Durban',
    country: 'South Africa',
    IATA: 'VIR',
    ICAO: 'FAVG',
    lat: '-29.770599365234375',
    lon: '31.058399200439453',
    timezone: '2'
  },
  {
    name: 'Vredendal ',
    city: 'Vredendal',
    country: 'South Africa',
    IATA: 'VRE',
    ICAO: 'FAVR',
    lat: '-31.641000747680664',
    lon: '18.5447998046875',
    timezone: '2'
  },
  {
    name: 'Vereeniging ',
    city: 'Vereeniging',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAVV',
    lat: '-26.566400528',
    lon: '27.9608001709',
    timezone: '2'
  },
  {
    name: 'Wonderboom ',
    city: 'Pretoria',
    country: 'South Africa',
    IATA: 'PRY',
    ICAO: 'FAWB',
    lat: '-25.6539',
    lon: '28.224199',
    timezone: '2'
  },
  {
    name: 'Witbank ',
    city: 'Witbank',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAWI',
    lat: '-25.832300186199998',
    lon: '29.1919994354',
    timezone: '2'
  },
  {
    name: 'Waterkloof Air Force Base',
    city: 'Waterkloof',
    country: 'South Africa',
    IATA: 'WKF',
    ICAO: 'FAWK',
    lat: '-25.829999923699997',
    lon: '28.222499847399998',
    timezone: '2'
  },
  {
    name: 'Welkom ',
    city: 'Welkom',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAWM',
    lat: '-27.996824511099998',
    lon: '26.663333892799997',
    timezone: '2'
  },
  {
    name: 'Ysterplaat Air Force Base',
    city: 'Ysterplaat',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAYP',
    lat: '-33.90019989013672',
    lon: '18.498300552368164',
    timezone: '2'
  },
  {
    name: 'Zeerust ',
    city: 'Zeerust',
    country: 'South Africa',
    IATA: '\\N',
    ICAO: 'FAZR',
    lat: '-25.599000930786133',
    lon: '26.042299270629883',
    timezone: '2'
  },
  {
    name: 'Francistown ',
    city: 'Francistown',
    country: 'Botswana',
    IATA: 'FRW',
    ICAO: 'FBFT',
    lat: '-21.15959930419922',
    lon: '27.47450065612793',
    timezone: '2'
  },
  {
    name: 'Jwaneng ',
    city: 'Jwaneng',
    country: 'Botswana',
    IATA: 'JWA',
    ICAO: 'FBJW',
    lat: '-24.6023006439209',
    lon: '24.69099998474121',
    timezone: '2'
  },
  {
    name: 'Kasane ',
    city: 'Kasane',
    country: 'Botswana',
    IATA: 'BBK',
    ICAO: 'FBKE',
    lat: '-17.83289909362793',
    lon: '25.162399291992188',
    timezone: '2'
  },
  {
    name: 'Maun ',
    city: 'Maun',
    country: 'Botswana',
    IATA: 'MUB',
    ICAO: 'FBMN',
    lat: '-19.97260093688965',
    lon: '23.431100845336914',
    timezone: '2'
  },
  {
    name: 'Sir Seretse Khama Intl ',
    city: 'Gaberone',
    country: 'Botswana',
    IATA: 'GBE',
    ICAO: 'FBSK',
    lat: '-24.555201',
    lon: '25.9182',
    timezone: '2'
  },
  {
    name: 'Selebi Phikwe ',
    city: 'Selebi-phikwe',
    country: 'Botswana',
    IATA: 'PKW',
    ICAO: 'FBSP',
    lat: '-22.0583',
    lon: '27.8288',
    timezone: '2'
  },
  {
    name: 'Maya-Maya ',
    city: 'Brazzaville',
    country: 'Congo (Brazzaville)',
    IATA: 'BZV',
    ICAO: 'FCBB',
    lat: '-4.251699924468994',
    lon: '15.253000259399414',
    timezone: '1'
  },
  {
    name: 'Owando ',
    city: 'Owando',
    country: 'Congo (Kinshasa)',
    IATA: 'FTX',
    ICAO: 'FCOO',
    lat: '-0.5313500165939331',
    lon: '15.95009994506836',
    timezone: '1'
  },
  {
    name: 'Ouesso ',
    city: 'Ouesso',
    country: 'Congo (Kinshasa)',
    IATA: 'OUE',
    ICAO: 'FCOU',
    lat: '1.6159900426899998',
    lon: '16.0379009247',
    timezone: '1'
  },
  {
    name: 'Pointe Noire ',
    city: 'Pointe-noire',
    country: 'Congo (Brazzaville)',
    IATA: 'PNR',
    ICAO: 'FCPP',
    lat: '-4.816030025482178',
    lon: '11.88659954071045',
    timezone: '1'
  },
  {
    name: 'Matsapha ',
    city: 'Manzini',
    country: 'Swaziland',
    IATA: 'MTS',
    ICAO: 'FDMS',
    lat: '-26.52899932861328',
    lon: '31.3075008392334',
    timezone: '2'
  },
  {
    name: "Bangui M'Poko Intl ",
    city: 'Bangui',
    country: 'Central African Republic',
    IATA: 'BGF',
    ICAO: 'FEFF',
    lat: '4.39847993850708',
    lon: '18.518800735473633',
    timezone: '1'
  },
  {
    name: 'Berb\u00e9rati ',
    city: 'Berberati',
    country: 'Central African Republic',
    IATA: 'BBT',
    ICAO: 'FEFT',
    lat: '4.2215800285339355',
    lon: '15.786399841308594',
    timezone: '1'
  },
  {
    name: 'Bata ',
    city: 'Bata',
    country: 'Equatorial Guinea',
    IATA: 'BSG',
    ICAO: 'FGBT',
    lat: '1.9054700136184692',
    lon: '9.805680274963379',
    timezone: '1'
  },
  {
    name: 'Malabo ',
    city: 'Malabo',
    country: 'Equatorial Guinea',
    IATA: 'SSG',
    ICAO: 'FGSL',
    lat: '3.755270004272461',
    lon: '8.708720207214355',
    timezone: '1'
  },
  {
    name: 'RAF Ascension Island',
    city: 'Wide Awake',
    country: 'Saint Helena',
    IATA: 'ASI',
    ICAO: 'FHAW',
    lat: '-7.9696',
    lon: '-14.3937',
    timezone: '0'
  },
  {
    name: 'Sir Seewoosagur Ramgoolam Intl ',
    city: 'Plaisance',
    country: 'Mauritius',
    IATA: 'MRU',
    ICAO: 'FIMP',
    lat: '-20.430201',
    lon: '57.683601',
    timezone: '4'
  },
  {
    name: 'Sir Charles Gaetan Duval ',
    city: 'Rodriguez Island',
    country: 'Mauritius',
    IATA: 'RRG',
    ICAO: 'FIMR',
    lat: '-19.7577',
    lon: '63.361',
    timezone: '4'
  },
  {
    name: 'Diego Garcia Naval Support Facility',
    city: 'Diego Garcia Island',
    country: 'British Indian Ocean Territory',
    IATA: 'NKW',
    ICAO: 'FJDG',
    lat: '-7.31327',
    lon: '72.411102',
    timezone: '6'
  },
  {
    name: 'Tiko ',
    city: 'Tiko',
    country: 'Cameroon',
    IATA: 'TKC',
    ICAO: 'FKKC',
    lat: '4.08919000626',
    lon: '9.360529899600001',
    timezone: '1'
  },
  {
    name: 'Douala Intl ',
    city: 'Douala',
    country: 'Cameroon',
    IATA: 'DLA',
    ICAO: 'FKKD',
    lat: '4.0060801506',
    lon: '9.719479560849999',
    timezone: '1'
  },
  {
    name: 'Salak ',
    city: 'Maroua',
    country: 'Cameroon',
    IATA: 'MVR',
    ICAO: 'FKKL',
    lat: '10.451399803161621',
    lon: '14.257399559020996',
    timezone: '1'
  },
  {
    name: 'Foumban Nkounja ',
    city: 'Foumban',
    country: 'Cameroon',
    IATA: 'FOM',
    ICAO: 'FKKM',
    lat: '5.636919975280762',
    lon: '10.750800132751465',
    timezone: '1'
  },
  {
    name: "N'Gaound\u00e9r\u00e9 ",
    city: "N'gaoundere",
    country: 'Cameroon',
    IATA: 'NGE',
    ICAO: 'FKKN',
    lat: '7.3570098876953125',
    lon: '13.559200286865234',
    timezone: '1'
  },
  {
    name: 'Garoua Intl ',
    city: 'Garoua',
    country: 'Cameroon',
    IATA: 'GOU',
    ICAO: 'FKKR',
    lat: '9.33588981628418',
    lon: '13.370100021362305',
    timezone: '1'
  },
  {
    name: 'Bafoussam ',
    city: 'Bafoussam',
    country: 'Cameroon',
    IATA: 'BFX',
    ICAO: 'FKKU',
    lat: '5.536920070650001',
    lon: '10.354599952700001',
    timezone: '1'
  },
  {
    name: 'Bamenda ',
    city: 'Bamenda',
    country: 'Cameroon',
    IATA: 'BPC',
    ICAO: 'FKKV',
    lat: '6.039239883422852',
    lon: '10.122599601745605',
    timezone: '1'
  },
  {
    name: 'Yaound\u00e9 ',
    city: 'Yaounde',
    country: 'Cameroon',
    IATA: 'YAO',
    ICAO: 'FKKY',
    lat: '3.8360400199890137',
    lon: '11.523500442504883',
    timezone: '1'
  },
  {
    name: 'Kasompe ',
    city: 'Kasompe',
    country: 'Zambia',
    IATA: 'CGJ',
    ICAO: 'FLKE',
    lat: '-12.572799682617',
    lon: '27.893899917603',
    timezone: '2'
  },
  {
    name: 'Livingstone ',
    city: 'Livingstone',
    country: 'Zambia',
    IATA: 'LVI',
    ICAO: 'FLLI',
    lat: '-17.821800231933594',
    lon: '25.82270050048828',
    timezone: '2'
  },
  {
    name: 'Kenneth Kaunda Intl  Lusaka',
    city: 'Lusaka',
    country: 'Zambia',
    IATA: 'LUN',
    ICAO: 'FLLS',
    lat: '-15.3308000565',
    lon: '28.4526004791',
    timezone: '2'
  },
  {
    name: 'Mfuwe ',
    city: 'Mfuwe',
    country: 'Zambia',
    IATA: 'MFU',
    ICAO: 'FLMF',
    lat: '-13.258899688720703',
    lon: '31.936599731445312',
    timezone: '2'
  },
  {
    name: 'Mongu ',
    city: 'Mongu',
    country: 'Zambia',
    IATA: 'MNR',
    ICAO: 'FLMG',
    lat: '-15.254500389099121',
    lon: '23.16230010986328',
    timezone: '2'
  },
  {
    name: 'Simon Mwansa Kapwepwe Intl ',
    city: 'Ndola',
    country: 'Zambia',
    IATA: 'NLA',
    ICAO: 'FLND',
    lat: '-12.998100280762',
    lon: '28.66489982605',
    timezone: '2'
  },
  {
    name: 'Southdowns ',
    city: 'Southdowns',
    country: 'Zambia',
    IATA: 'KIW',
    ICAO: 'FLSO',
    lat: '-12.900500297546387',
    lon: '28.149900436401367',
    timezone: '2'
  },
  {
    name: 'Prince Said Ibrahim Intl ',
    city: 'Moroni',
    country: 'Comoros',
    IATA: 'HAH',
    ICAO: 'FMCH',
    lat: '-11.5337',
    lon: '43.2719',
    timezone: '3'
  },
  {
    name: 'Moh\u00e9li Bandar Es Eslam ',
    city: 'Moheli',
    country: 'Comoros',
    IATA: 'NWA',
    ICAO: 'FMCI',
    lat: '-12.298100471496582',
    lon: '43.76639938354492',
    timezone: '3'
  },
  {
    name: 'Ouani ',
    city: 'Anjouan',
    country: 'Comoros',
    IATA: 'AJN',
    ICAO: 'FMCV',
    lat: '-12.131699562072754',
    lon: '44.430301666259766',
    timezone: '3'
  },
  {
    name: 'Dzaoudzi Pamandzi Intl ',
    city: 'Dzaoudzi',
    country: 'Mayotte',
    IATA: 'DZA',
    ICAO: 'FMCZ',
    lat: '-12.804699897766113',
    lon: '45.28110122680664',
    timezone: '3'
  },
  {
    name: 'Roland Garros ',
    city: 'St.-denis',
    country: 'Reunion',
    IATA: 'RUN',
    ICAO: 'FMEE',
    lat: '-20.887100219726562',
    lon: '55.51029968261719',
    timezone: '4'
  },
  {
    name: 'Pierrefonds ',
    city: 'St.-pierre',
    country: 'Reunion',
    IATA: 'ZSE',
    ICAO: 'FMEP',
    lat: '-21.320899963378906',
    lon: '55.42499923706055',
    timezone: '4'
  },
  {
    name: 'Ivato ',
    city: 'Antananarivo',
    country: 'Madagascar',
    IATA: 'TNR',
    ICAO: 'FMMI',
    lat: '-18.7969',
    lon: '47.478802',
    timezone: '3'
  },
  {
    name: 'Miandrivazo ',
    city: 'Miandrivazo',
    country: 'Madagascar',
    IATA: 'ZVA',
    ICAO: 'FMMN',
    lat: '-19.56279945373535',
    lon: '45.450801849365234',
    timezone: '3'
  },
  {
    name: 'Sainte Marie ',
    city: 'Sainte Marie',
    country: 'Madagascar',
    IATA: 'SMS',
    ICAO: 'FMMS',
    lat: '-17.093900680541992',
    lon: '49.815799713134766',
    timezone: '3'
  },
  {
    name: 'Toamasina ',
    city: 'Toamasina',
    country: 'Madagascar',
    IATA: 'TMM',
    ICAO: 'FMMT',
    lat: '-18.109500885009766',
    lon: '49.39250183105469',
    timezone: '3'
  },
  {
    name: 'Morondava ',
    city: 'Morondava',
    country: 'Madagascar',
    IATA: 'MOQ',
    ICAO: 'FMMV',
    lat: '-20.284700393676758',
    lon: '44.31760025024414',
    timezone: '3'
  },
  {
    name: 'Arrachart ',
    city: 'Antsiranana',
    country: 'Madagascar',
    IATA: 'DIE',
    ICAO: 'FMNA',
    lat: '-12.34939956665039',
    lon: '49.29169845581055',
    timezone: '3'
  },
  {
    name: 'Mananara Nord ',
    city: 'Mananara',
    country: 'Madagascar',
    IATA: 'WMR',
    ICAO: 'FMNC',
    lat: '-16.16390037536621',
    lon: '49.773799896240234',
    timezone: '3'
  },
  {
    name: 'Andapa ',
    city: 'Andapa',
    country: 'Madagascar',
    IATA: 'ZWA',
    ICAO: 'FMND',
    lat: '-14.651700019836426',
    lon: '49.620601654052734',
    timezone: '3'
  },
  {
    name: 'Ambilobe ',
    city: 'Ambilobe',
    country: 'Madagascar',
    IATA: 'AMB',
    ICAO: 'FMNE',
    lat: '-13.188400268554688',
    lon: '48.987998962402344',
    timezone: '3'
  },
  {
    name: 'Antsirabato ',
    city: 'Antalaha',
    country: 'Madagascar',
    IATA: 'ANM',
    ICAO: 'FMNH',
    lat: '-14.99940013885498',
    lon: '50.3202018737793',
    timezone: '3'
  },
  {
    name: 'Analalava ',
    city: 'Analalava',
    country: 'Madagascar',
    IATA: 'HVA',
    ICAO: 'FMNL',
    lat: '-14.62969970703125',
    lon: '47.76380157470703',
    timezone: '3'
  },
  {
    name: 'Amborovy ',
    city: 'Mahajanga',
    country: 'Madagascar',
    IATA: 'MJN',
    ICAO: 'FMNM',
    lat: '-15.6668417421',
    lon: '46.351232528699995',
    timezone: '3'
  },
  {
    name: 'Fascene ',
    city: 'Nosy-be',
    country: 'Madagascar',
    IATA: 'NOS',
    ICAO: 'FMNN',
    lat: '-13.3121004105',
    lon: '48.3148002625',
    timezone: '3'
  },
  {
    name: 'Besalampy ',
    city: 'Besalampy',
    country: 'Madagascar',
    IATA: 'BPY',
    ICAO: 'FMNQ',
    lat: '-16.744530296500002',
    lon: '44.4824838638',
    timezone: '3'
  },
  {
    name: 'Maroantsetra ',
    city: 'Maroantsetra',
    country: 'Madagascar',
    IATA: 'WMN',
    ICAO: 'FMNR',
    lat: '-15.436699867248535',
    lon: '49.68830108642578',
    timezone: '3'
  },
  {
    name: 'Sambava ',
    city: 'Sambava',
    country: 'Madagascar',
    IATA: 'SVB',
    ICAO: 'FMNS',
    lat: '-14.278599739074707',
    lon: '50.17470169067383',
    timezone: '3'
  },
  {
    name: 'Vohimarina ',
    city: 'Vohemar',
    country: 'Madagascar',
    IATA: 'VOH',
    ICAO: 'FMNV',
    lat: '-13.375800132751465',
    lon: '50.00279998779297',
    timezone: '3'
  },
  {
    name: 'Ambalabe ',
    city: 'Antsohihy',
    country: 'Madagascar',
    IATA: 'WAI',
    ICAO: 'FMNW',
    lat: '-14.898799896240234',
    lon: '47.993900299072266',
    timezone: '3'
  },
  {
    name: 'Ampampamena ',
    city: 'Ampampamena',
    country: 'Madagascar',
    IATA: 'IVA',
    ICAO: 'FMNZ',
    lat: '-13.484816',
    lon: '48.632702',
    timezone: '3'
  },
  {
    name: 'T\u00f4lanaro ',
    city: 'Tolagnaro',
    country: 'Madagascar',
    IATA: 'FTU',
    ICAO: 'FMSD',
    lat: '-25.03809928894043',
    lon: '46.95610046386719',
    timezone: '3'
  },
  {
    name: 'Fianarantsoa ',
    city: 'Fianarantsoa',
    country: 'Madagascar',
    IATA: 'WFI',
    ICAO: 'FMSF',
    lat: '-21.441600799560547',
    lon: '47.111698150634766',
    timezone: '3'
  },
  {
    name: 'Farafangana ',
    city: 'Farafangana',
    country: 'Madagascar',
    IATA: 'RVA',
    ICAO: 'FMSG',
    lat: '-22.805299758911133',
    lon: '47.82059860229492',
    timezone: '3'
  },
  {
    name: 'Manakara ',
    city: 'Manakara',
    country: 'Madagascar',
    IATA: 'WVK',
    ICAO: 'FMSK',
    lat: '-22.119699478149414',
    lon: '48.02170181274414',
    timezone: '3'
  },
  {
    name: 'Mananjary ',
    city: 'Mananjary',
    country: 'Madagascar',
    IATA: 'MNJ',
    ICAO: 'FMSM',
    lat: '-21.201799392700195',
    lon: '48.358299255371094',
    timezone: '3'
  },
  {
    name: 'Morombe ',
    city: 'Morombe',
    country: 'Madagascar',
    IATA: 'MXM',
    ICAO: 'FMSR',
    lat: '-21.7539005279541',
    lon: '43.3754997253418',
    timezone: '3'
  },
  {
    name: 'Toliara ',
    city: 'Toliara',
    country: 'Madagascar',
    IATA: 'TLE',
    ICAO: 'FMST',
    lat: '-23.383399963378906',
    lon: '43.72850036621094',
    timezone: '3'
  },
  {
    name: 'Mbanza Congo ',
    city: "M'banza-congo",
    country: 'Angola',
    IATA: 'SSY',
    ICAO: 'FNBC',
    lat: '-6.269899845123291',
    lon: '14.246999740600586',
    timezone: '1'
  },
  {
    name: 'Benguela ',
    city: 'Benguela',
    country: 'Angola',
    IATA: 'BUG',
    ICAO: 'FNBG',
    lat: '-12.609000206',
    lon: '13.4036998749',
    timezone: '1'
  },
  {
    name: 'Cabinda ',
    city: 'Cabinda',
    country: 'Angola',
    IATA: 'CAB',
    ICAO: 'FNCA',
    lat: '-5.59699010848999',
    lon: '12.188400268554688',
    timezone: '1'
  },
  {
    name: 'Nova Lisboa ',
    city: 'Huambo',
    country: 'Angola',
    IATA: 'NOV',
    ICAO: 'FNHU',
    lat: '-12.808899879455566',
    lon: '15.760499954223633',
    timezone: '1'
  },
  {
    name: 'Kuito ',
    city: 'Kuito',
    country: 'Angola',
    IATA: 'SVP',
    ICAO: 'FNKU',
    lat: '-12.404600143433',
    lon: '16.947399139404',
    timezone: '1'
  },
  {
    name: 'Lobito ',
    city: 'Lobito',
    country: 'Angola',
    IATA: '\\N',
    ICAO: 'FNLB',
    lat: '-12.371199607849121',
    lon: '13.536600112915039',
    timezone: '1'
  },
  {
    name: 'Quatro de Fevereiro ',
    city: 'Luanda',
    country: 'Angola',
    IATA: 'LAD',
    ICAO: 'FNLU',
    lat: '-8.85837',
    lon: '13.2312',
    timezone: '1'
  },
  {
    name: 'Malanje ',
    city: 'Malanje',
    country: 'Angola',
    IATA: 'MEG',
    ICAO: 'FNMA',
    lat: '-9.525090217590332',
    lon: '16.312400817871094',
    timezone: '1'
  },
  {
    name: 'Menongue ',
    city: 'Menongue',
    country: 'Angola',
    IATA: 'SPP',
    ICAO: 'FNME',
    lat: '-14.657600402832031',
    lon: '17.71980094909668',
    timezone: '1'
  },
  {
    name: 'Negage ',
    city: 'Negage',
    country: 'Angola',
    IATA: 'GXG',
    ICAO: 'FNNG',
    lat: '-7.754509925842285',
    lon: '15.287699699401855',
    timezone: '1'
  },
  {
    name: 'Porto Amboim ',
    city: 'Porto Amboim',
    country: 'Angola',
    IATA: 'PBN',
    ICAO: 'FNPA',
    lat: '-10.722000122070312',
    lon: '13.76550006866455',
    timezone: '1'
  },
  {
    name: 'Saurimo ',
    city: 'Saurimo',
    country: 'Angola',
    IATA: 'VHC',
    ICAO: 'FNSA',
    lat: '-9.689069747924805',
    lon: '20.431900024414062',
    timezone: '1'
  },
  {
    name: 'Soyo ',
    city: 'Soyo',
    country: 'Angola',
    IATA: 'SZA',
    ICAO: 'FNSO',
    lat: '-6.141089916229248',
    lon: '12.371800422668457',
    timezone: '1'
  },
  {
    name: 'Lubango ',
    city: 'Lubango',
    country: 'Angola',
    IATA: 'SDD',
    ICAO: 'FNUB',
    lat: '-14.924699783325195',
    lon: '13.574999809265137',
    timezone: '1'
  },
  {
    name: 'Luena ',
    city: 'Luena',
    country: 'Angola',
    IATA: 'LUO',
    ICAO: 'FNUE',
    lat: '-11.768099784851074',
    lon: '19.8976993560791',
    timezone: '1'
  },
  {
    name: 'Uige ',
    city: 'Uige',
    country: 'Angola',
    IATA: 'UGO',
    ICAO: 'FNUG',
    lat: '-7.60306978225708',
    lon: '15.027799606323242',
    timezone: '1'
  },
  {
    name: 'Xangongo ',
    city: 'Xangongo',
    country: 'Angola',
    IATA: 'XGN',
    ICAO: 'FNXA',
    lat: '-16.755399703979492',
    lon: '14.965299606323242',
    timezone: '1'
  },
  {
    name: 'Oyem ',
    city: 'Oyem',
    country: 'Gabon',
    IATA: 'OYE',
    ICAO: 'FOGO',
    lat: '1.5431100130081177',
    lon: '11.581399917602539',
    timezone: '1'
  },
  {
    name: 'Okondja ',
    city: 'Okondja',
    country: 'Gabon',
    IATA: 'OKN',
    ICAO: 'FOGQ',
    lat: '-0.6652140021324158',
    lon: '13.673100471496582',
    timezone: '1'
  },
  {
    name: 'Lambarene ',
    city: 'Lambarene',
    country: 'Gabon',
    IATA: 'LBQ',
    ICAO: 'FOGR',
    lat: '-0.7043889760971069',
    lon: '10.245699882507324',
    timezone: '1'
  },
  {
    name: 'Bitam ',
    city: 'Bitam',
    country: 'Gabon',
    IATA: 'BMM',
    ICAO: 'FOOB',
    lat: '2.0756399631500244',
    lon: '11.493200302124023',
    timezone: '1'
  },
  {
    name: 'Port Gentil ',
    city: 'Port Gentil',
    country: 'Gabon',
    IATA: 'POG',
    ICAO: 'FOOG',
    lat: '-0.7117390036582947',
    lon: '8.754380226135254',
    timezone: '1'
  },
  {
    name: 'Omboue Hopital ',
    city: 'Omboue Hospial',
    country: 'Gabon',
    IATA: 'OMB',
    ICAO: 'FOOH',
    lat: '-1.5747300386428833',
    lon: '9.262689590454102',
    timezone: '1'
  },
  {
    name: 'Makokou ',
    city: 'Makokou',
    country: 'Gabon',
    IATA: 'MKU',
    ICAO: 'FOOK',
    lat: '0.5792109966278076',
    lon: '12.890899658203125',
    timezone: '1'
  },
  {
    name: "Libreville Leon M'ba Intl ",
    city: 'Libreville',
    country: 'Gabon',
    IATA: 'LBV',
    ICAO: 'FOOL',
    lat: '0.458600014448',
    lon: '9.412280082699999',
    timezone: '1'
  },
  {
    name: "M'Vengue El Hadj Omar Bongo Ondimba Intl ",
    city: 'Franceville',
    country: 'Gabon',
    IATA: 'MVB',
    ICAO: 'FOON',
    lat: '-1.6561599969863892',
    lon: '13.437999725341797',
    timezone: '1'
  },
  {
    name: 'Principe ',
    city: 'Principe',
    country: 'Sao Tome and Principe',
    IATA: 'PCP',
    ICAO: 'FPPR',
    lat: '1.6629400253295898',
    lon: '7.411739826202393',
    timezone: '0'
  },
  {
    name: 'S\u00e3o Tom\u00e9 Intl ',
    city: 'Sao Tome',
    country: 'Sao Tome and Principe',
    IATA: 'TMS',
    ICAO: 'FPST',
    lat: '0.3781749904155731',
    lon: '6.7121500968933105',
    timezone: '0'
  },
  {
    name: 'Beira ',
    city: 'Beira',
    country: 'Mozambique',
    IATA: 'BEW',
    ICAO: 'FQBR',
    lat: '-19.79640007019043',
    lon: '34.90760040283203',
    timezone: '2'
  },
  {
    name: 'Inhambane ',
    city: 'Inhambane',
    country: 'Mozambique',
    IATA: 'INH',
    ICAO: 'FQIN',
    lat: '-23.876399993896484',
    lon: '35.40850067138672',
    timezone: '2'
  },
  {
    name: 'Lichinga ',
    city: 'Lichinga',
    country: 'Mozambique',
    IATA: 'VXC',
    ICAO: 'FQLC',
    lat: '-13.274',
    lon: '35.2663',
    timezone: '2'
  },
  {
    name: 'Lumbo ',
    city: 'Lumbo',
    country: 'Mozambique',
    IATA: 'LFB',
    ICAO: 'FQLU',
    lat: '-15.0331001282',
    lon: '40.671699523899996',
    timezone: '2'
  },
  {
    name: 'Maputo ',
    city: 'Maputo',
    country: 'Mozambique',
    IATA: 'MPM',
    ICAO: 'FQMA',
    lat: '-25.920799',
    lon: '32.572601',
    timezone: '2'
  },
  {
    name: 'Mueda ',
    city: 'Mueda',
    country: 'Mozambique',
    IATA: 'MUD',
    ICAO: 'FQMD',
    lat: '-11.672900199890137',
    lon: '39.5630989074707',
    timezone: '2'
  },
  {
    name: 'Moc\u00edmboa da Praia ',
    city: 'Mocimboa Da Praia',
    country: 'Mozambique',
    IATA: 'MZB',
    ICAO: 'FQMP',
    lat: '-11.361800193786621',
    lon: '40.35490036010742',
    timezone: '2'
  },
  {
    name: 'Marrupa ',
    city: 'Marrupa',
    country: 'Mozambique',
    IATA: '\\N',
    ICAO: 'FQMR',
    lat: '-13.225099563598633',
    lon: '37.552101135253906',
    timezone: '2'
  },
  {
    name: 'Nacala ',
    city: 'Nacala',
    country: 'Mozambique',
    IATA: 'MNC',
    ICAO: 'FQNC',
    lat: '-14.488200187683105',
    lon: '40.71220016479492',
    timezone: '2'
  },
  {
    name: 'Nampula ',
    city: 'Nampula',
    country: 'Mozambique',
    IATA: 'APL',
    ICAO: 'FQNP',
    lat: '-15.105600357055664',
    lon: '39.28179931640625',
    timezone: '2'
  },
  {
    name: 'Pemba ',
    city: 'Pemba',
    country: 'Mozambique',
    IATA: 'POL',
    ICAO: 'FQPB',
    lat: '-12.991762161254883',
    lon: '40.52401351928711',
    timezone: '2'
  },
  {
    name: 'Quelimane ',
    city: 'Quelimane',
    country: 'Mozambique',
    IATA: 'UEL',
    ICAO: 'FQQL',
    lat: '-17.855499267578125',
    lon: '36.86909866333008',
    timezone: '2'
  },
  {
    name: 'Songo ',
    city: 'Songo',
    country: 'Mozambique',
    IATA: '\\N',
    ICAO: 'FQSG',
    lat: '-15.602700233459473',
    lon: '32.77320098876953',
    timezone: '2'
  },
  {
    name: 'Chingozi ',
    city: 'Tete',
    country: 'Mozambique',
    IATA: 'TET',
    ICAO: 'FQTT',
    lat: '-16.104799270629883',
    lon: '33.640201568603516',
    timezone: '2'
  },
  {
    name: 'Ulongwe ',
    city: 'Ulongwe',
    country: 'Mozambique',
    IATA: '\\N',
    ICAO: 'FQUG',
    lat: '-14.70460033416748',
    lon: '34.35240173339844',
    timezone: '2'
  },
  {
    name: 'Vilankulo ',
    city: 'Vilankulu',
    country: 'Mozambique',
    IATA: 'VNX',
    ICAO: 'FQVL',
    lat: '-22.018400192260742',
    lon: '35.31330108642578',
    timezone: '2'
  },
  {
    name: 'Alphonse ',
    city: 'Alphonse',
    country: 'Seychelles',
    IATA: '\\N',
    ICAO: 'FSAL',
    lat: '-7.00478',
    lon: '52.7262',
    timezone: '4'
  },
  {
    name: 'Desroches ',
    city: 'Desroches',
    country: 'Seychelles',
    IATA: 'DES',
    ICAO: 'FSDR',
    lat: '-5.6967',
    lon: '53.6558',
    timezone: '4'
  },
  {
    name: 'Farquhar ',
    city: 'Farquhar',
    country: 'Seychelles',
    IATA: '\\N',
    ICAO: 'FSFA',
    lat: '-10.1096',
    lon: '51.176102',
    timezone: '4'
  },
  {
    name: 'Seychelles Intl ',
    city: 'Mahe',
    country: 'Seychelles',
    IATA: 'SEZ',
    ICAO: 'FSIA',
    lat: '-4.67434',
    lon: '55.521801',
    timezone: '4'
  },
  {
    name: 'Praslin ',
    city: 'Praslin',
    country: 'Seychelles',
    IATA: 'PRI',
    ICAO: 'FSPP',
    lat: '-4.3192901611328125',
    lon: '55.69139862060547',
    timezone: '4'
  },
  {
    name: 'Coetivy ',
    city: 'Coetivy',
    country: 'Seychelles',
    IATA: '\\N',
    ICAO: 'FSSC',
    lat: '-7.13457',
    lon: '56.278198',
    timezone: '4'
  },
  {
    name: 'Abeche ',
    city: 'Abeche',
    country: 'Chad',
    IATA: 'AEH',
    ICAO: 'FTTC',
    lat: '13.847000122070312',
    lon: '20.84429931640625',
    timezone: '1'
  },
  {
    name: 'Moundou ',
    city: 'Moundou',
    country: 'Chad',
    IATA: 'MQQ',
    ICAO: 'FTTD',
    lat: '8.624409675598145',
    lon: '16.071399688720703',
    timezone: '1'
  },
  {
    name: "N'Djamena Intl ",
    city: "N'djamena",
    country: 'Chad',
    IATA: 'NDJ',
    ICAO: 'FTTJ',
    lat: '12.1337',
    lon: '15.034',
    timezone: '1'
  },
  {
    name: 'Faya Largeau ',
    city: 'Faya-largeau',
    country: 'Chad',
    IATA: 'FYT',
    ICAO: 'FTTY',
    lat: '17.91710090637207',
    lon: '19.111099243164062',
    timezone: '1'
  },
  {
    name: 'Joshua Mqabuko Nkomo Intl ',
    city: 'Bulawayo',
    country: 'Zimbabwe',
    IATA: 'BUQ',
    ICAO: 'FVBU',
    lat: '-20.017401',
    lon: '28.617901',
    timezone: '2'
  },
  {
    name: 'Charles Prince ',
    city: 'Harare',
    country: 'Zimbabwe',
    IATA: '\\N',
    ICAO: 'FVCP',
    lat: '-17.75160026550293',
    lon: '30.924699783325195',
    timezone: '2'
  },
  {
    name: 'Buffalo Range ',
    city: 'Chiredzi',
    country: 'Zimbabwe',
    IATA: 'BFO',
    ICAO: 'FVCZ',
    lat: '-21.008101',
    lon: '31.5786',
    timezone: '2'
  },
  {
    name: 'Victoria Falls Intl ',
    city: 'Victoria Falls',
    country: 'Zimbabwe',
    IATA: 'VFA',
    ICAO: 'FVFA',
    lat: '-18.09589958190918',
    lon: '25.839000701904297',
    timezone: '2'
  },
  {
    name: 'Robert Gabriel Mugabe Intl ',
    city: 'Harare',
    country: 'Zimbabwe',
    IATA: 'HRE',
    ICAO: 'FVHA',
    lat: '-17.931801',
    lon: '31.0928',
    timezone: '2'
  },
  {
    name: 'Kariba Intl ',
    city: 'Kariba',
    country: 'Zimbabwe',
    IATA: 'KAB',
    ICAO: 'FVKB',
    lat: '-16.519800186157227',
    lon: '28.885000228881836',
    timezone: '2'
  },
  {
    name: 'Mutoko ',
    city: 'Mutoko',
    country: 'Zimbabwe',
    IATA: '\\N',
    ICAO: 'FVMT',
    lat: '-17.431900024414062',
    lon: '32.18450164794922',
    timezone: '2'
  },
  {
    name: 'Mutare ',
    city: 'Mutare',
    country: 'Zimbabwe',
    IATA: 'UTA',
    ICAO: 'FVMU',
    lat: '-18.997499465942',
    lon: '32.627201080322',
    timezone: '2'
  },
  {
    name: 'Masvingo Intl ',
    city: 'Masvingo',
    country: 'Zimbabwe',
    IATA: 'MVZ',
    ICAO: 'FVMV',
    lat: '-20.055299758911133',
    lon: '30.859100341796875',
    timezone: '2'
  },
  {
    name: 'Zvishavane ',
    city: 'Zvishavane',
    country: 'Zimbabwe',
    IATA: '\\N',
    ICAO: 'FVSH',
    lat: '-20.289499282836914',
    lon: '30.088199615478516',
    timezone: '2'
  },
  {
    name: 'Thornhill Air Base',
    city: 'Gwert',
    country: 'Zimbabwe',
    IATA: 'GWE',
    ICAO: 'FVTL',
    lat: '-19.436399459838867',
    lon: '29.861900329589844',
    timezone: '2'
  },
  {
    name: 'Hwange National Park ',
    city: 'Hwange National Park',
    country: 'Zimbabwe',
    IATA: 'HWN',
    ICAO: 'FVWN',
    lat: '-18.629899978637695',
    lon: '27.020999908447266',
    timezone: '2'
  },
  {
    name: 'Chileka Intl ',
    city: 'Blantyre',
    country: 'Malawi',
    IATA: 'BLZ',
    ICAO: 'FWCL',
    lat: '-15.679100036621094',
    lon: '34.9739990234375',
    timezone: '2'
  },
  {
    name: 'Karonga ',
    city: 'Karonga',
    country: 'Malawi',
    IATA: 'KGJ',
    ICAO: 'FWKA',
    lat: '-9.953570365905762',
    lon: '33.893001556396484',
    timezone: '2'
  },
  {
    name: 'Kasungu ',
    city: 'Kasungu',
    country: 'Malawi',
    IATA: 'KBQ',
    ICAO: 'FWKG',
    lat: '-13.014599800109863',
    lon: '33.46860122680664',
    timezone: '2'
  },
  {
    name: 'Lilongwe Intl ',
    city: 'Lilongwe',
    country: 'Malawi',
    IATA: 'LLW',
    ICAO: 'FWKI',
    lat: '-13.7894001007',
    lon: '33.78099823',
    timezone: '2'
  },
  {
    name: 'Mzuzu ',
    city: 'Mzuzu',
    country: 'Malawi',
    IATA: 'ZZU',
    ICAO: 'FWUU',
    lat: '-11.444700241088867',
    lon: '34.01179885864258',
    timezone: '2'
  },
  {
    name: 'Moshoeshoe I Intl ',
    city: 'Maseru',
    country: 'Lesotho',
    IATA: 'MSU',
    ICAO: 'FXMM',
    lat: '-29.462299346923828',
    lon: '27.552499771118164',
    timezone: '2'
  },
  {
    name: 'Mejametalana Airbase',
    city: 'Maseru',
    country: 'Lesotho',
    IATA: '\\N',
    ICAO: 'FXMU',
    lat: '-29.304100036621094',
    lon: '27.50349998474121',
    timezone: '2'
  },
  {
    name: 'Ndjili Intl ',
    city: 'Kinshasa',
    country: 'Congo (Kinshasa)',
    IATA: 'FIH',
    ICAO: 'FZAA',
    lat: '-4.38575',
    lon: '15.4446',
    timezone: '1'
  },
  {
    name: 'Ndolo ',
    city: 'Kinshasa',
    country: 'Congo (Kinshasa)',
    IATA: 'NLO',
    ICAO: 'FZAB',
    lat: '-4.32666015625',
    lon: '15.327500343323',
    timezone: '1'
  },
  {
    name: 'Muanda ',
    city: 'Muanda',
    country: 'Congo (Kinshasa)',
    IATA: 'MNB',
    ICAO: 'FZAG',
    lat: '-5.9308600425720215',
    lon: '12.351799964904785',
    timezone: '1'
  },
  {
    name: 'Kitona Base ',
    city: 'Kitona Base',
    country: 'Congo (Kinshasa)',
    IATA: '\\N',
    ICAO: 'FZAI',
    lat: '-5.918059825897217',
    lon: '12.447699546813965',
    timezone: '1'
  },
  {
    name: 'Bandundu ',
    city: 'Bandoundu',
    country: 'Congo (Kinshasa)',
    IATA: 'FDU',
    ICAO: 'FZBO',
    lat: '-3.3113200664520264',
    lon: '17.38170051574707',
    timezone: '1'
  },
  {
    name: 'Kikwit ',
    city: 'Kikwit',
    country: 'Congo (Kinshasa)',
    IATA: 'KKW',
    ICAO: 'FZCA',
    lat: '-5.035769939422607',
    lon: '18.785600662231445',
    timezone: '1'
  },
  {
    name: 'Mbandaka ',
    city: 'Mbandaka',
    country: 'Congo (Kinshasa)',
    IATA: 'MDK',
    ICAO: 'FZEA',
    lat: '0.0226000007242',
    lon: '18.2887001038',
    timezone: '1'
  },
  {
    name: 'Gbadolite ',
    city: 'Gbadolite',
    country: 'Congo (Kinshasa)',
    IATA: 'BDT',
    ICAO: 'FZFD',
    lat: '4.253210067749023',
    lon: '20.975299835205078',
    timezone: '1'
  },
  {
    name: 'Gemena ',
    city: 'Gemena',
    country: 'Congo (Kinshasa)',
    IATA: 'GMA',
    ICAO: 'FZFK',
    lat: '3.2353699207299997',
    lon: '19.771299362199997',
    timezone: '1'
  },
  {
    name: 'Kotakoli ',
    city: 'Kotakoli',
    country: 'Congo (Kinshasa)',
    IATA: 'KLI',
    ICAO: 'FZFP',
    lat: '4.157639980316162',
    lon: '21.65089988708496',
    timezone: '1'
  },
  {
    name: 'Lisala ',
    city: 'Lisala',
    country: 'Congo (Kinshasa)',
    IATA: 'LIQ',
    ICAO: 'FZGA',
    lat: '2.17066',
    lon: '21.496901',
    timezone: '1'
  },
  {
    name: 'Bangoka Intl ',
    city: 'Kisangani',
    country: 'Congo (Kinshasa)',
    IATA: 'FKI',
    ICAO: 'FZIC',
    lat: '0.481638997793',
    lon: '25.3379993439',
    timezone: '2'
  },
  {
    name: 'Matari ',
    city: 'Isiro',
    country: 'Congo (Kinshasa)',
    IATA: 'IRP',
    ICAO: 'FZJH',
    lat: '2.8276100158691406',
    lon: '27.588300704956055',
    timezone: '2'
  },
  {
    name: 'Bunia ',
    city: 'Bunia',
    country: 'Congo (Kinshasa)',
    IATA: 'BUX',
    ICAO: 'FZKA',
    lat: '1.5657199621200562',
    lon: '30.220800399780273',
    timezone: '2'
  },
  {
    name: 'Buta Zega ',
    city: 'Buta Zega',
    country: 'Congo (Kinshasa)',
    IATA: 'BZU',
    ICAO: 'FZKJ',
    lat: '2.818350076675415',
    lon: '24.793699264526367',
    timezone: '2'
  },
  {
    name: 'Bukavu Kavumu ',
    city: 'Bukavu/kavumu',
    country: 'Congo (Kinshasa)',
    IATA: 'BKY',
    ICAO: 'FZMA',
    lat: '-2.3089799880981445',
    lon: '28.808799743652344',
    timezone: '2'
  },
  {
    name: 'Goma Intl ',
    city: 'Goma',
    country: 'Congo (Kinshasa)',
    IATA: 'GOM',
    ICAO: 'FZNA',
    lat: '-1.6708099842071533',
    lon: '29.238500595092773',
    timezone: '2'
  },
  {
    name: 'Kindu ',
    city: 'Kindu',
    country: 'Congo (Kinshasa)',
    IATA: 'KND',
    ICAO: 'FZOA',
    lat: '-2.91917991638',
    lon: '25.915399551399997',
    timezone: '2'
  },
  {
    name: 'Lubumbashi Intl ',
    city: 'Lubumashi',
    country: 'Congo (Kinshasa)',
    IATA: 'FBM',
    ICAO: 'FZQA',
    lat: '-11.5913000107',
    lon: '27.5308990479',
    timezone: '2'
  },
  {
    name: 'Kolwezi ',
    city: 'Kolwezi',
    country: 'Congo (Kinshasa)',
    IATA: 'KWZ',
    ICAO: 'FZQM',
    lat: '-10.765899658203125',
    lon: '25.505699157714844',
    timezone: '2'
  },
  {
    name: 'Kalemie ',
    city: 'Kalemie',
    country: 'Congo (Kinshasa)',
    IATA: 'FMI',
    ICAO: 'FZRF',
    lat: '-5.8755598068237305',
    lon: '29.25',
    timezone: '2'
  },
  {
    name: 'Kamina Base ',
    city: 'Kamina Base',
    country: 'Congo (Kinshasa)',
    IATA: 'KMN',
    ICAO: 'FZSA',
    lat: '-8.642020225524902',
    lon: '25.252899169921875',
    timezone: '2'
  },
  {
    name: 'Kananga ',
    city: 'Kananga',
    country: 'Congo (Kinshasa)',
    IATA: 'KGA',
    ICAO: 'FZUA',
    lat: '-5.90005016327',
    lon: '22.4692001343',
    timezone: '2'
  },
  {
    name: 'Mbuji Mayi ',
    city: 'Mbuji-mayi',
    country: 'Congo (Kinshasa)',
    IATA: 'MJM',
    ICAO: 'FZWA',
    lat: '-6.121240139010001',
    lon: '23.569000244099996',
    timezone: '2'
  },
  {
    name: 'Modibo Keita Intl ',
    city: 'Bamako',
    country: 'Mali',
    IATA: 'BKO',
    ICAO: 'GABS',
    lat: '12.5335',
    lon: '-7.94994',
    timezone: '0'
  },
  {
    name: 'Gao ',
    city: 'Gao',
    country: 'Mali',
    IATA: 'GAQ',
    ICAO: 'GAGO',
    lat: '16.24839973449707',
    lon: '-0.005456000100821257',
    timezone: '0'
  },
  {
    name: 'Kayes Dag Dag ',
    city: 'Kayes',
    country: 'Mali',
    IATA: 'KYS',
    ICAO: 'GAKY',
    lat: '14.481200218200684',
    lon: '-11.404399871826172',
    timezone: '0'
  },
  {
    name: 'Mopti ',
    city: 'Mopti',
    country: 'Mali',
    IATA: 'MZI',
    ICAO: 'GAMB',
    lat: '14.5128002167',
    lon: '-4.0795598030099995',
    timezone: '0'
  },
  {
    name: 'Timbuktu ',
    city: 'Tombouctou',
    country: 'Mali',
    IATA: 'TOM',
    ICAO: 'GATB',
    lat: '16.730499267578125',
    lon: '-3.007580041885376',
    timezone: '0'
  },
  {
    name: 'Tessalit ',
    city: 'Tessalit',
    country: 'Mali',
    IATA: '\\N',
    ICAO: 'GATS',
    lat: '20.243000030517578',
    lon: '0.9773079752922058',
    timezone: '0'
  },
  {
    name: 'Banjul Intl ',
    city: 'Banjul',
    country: 'Gambia',
    IATA: 'BJL',
    ICAO: 'GBYD',
    lat: '13.338000297546387',
    lon: '-16.65220069885254',
    timezone: '0'
  },
  {
    name: 'Fuerteventura ',
    city: 'Fuerteventura',
    country: 'Spain',
    IATA: 'FUE',
    ICAO: 'GCFV',
    lat: '28.452699661254883',
    lon: '-13.863800048828125',
    timezone: '0'
  },
  {
    name: 'Hierro ',
    city: 'Hierro',
    country: 'Spain',
    IATA: 'VDE',
    ICAO: 'GCHI',
    lat: '27.814800262451172',
    lon: '-17.887100219726562',
    timezone: '0'
  },
  {
    name: 'La Palma ',
    city: 'Santa Cruz De La Palma',
    country: 'Spain',
    IATA: 'SPC',
    ICAO: 'GCLA',
    lat: '28.626499',
    lon: '-17.7556',
    timezone: '0'
  },
  {
    name: 'Gran Canaria ',
    city: 'Gran Canaria',
    country: 'Spain',
    IATA: 'LPA',
    ICAO: 'GCLP',
    lat: '27.931900024414062',
    lon: '-15.38659954071045',
    timezone: '0'
  },
  {
    name: 'Lanzarote ',
    city: 'Arrecife',
    country: 'Spain',
    IATA: 'ACE',
    ICAO: 'GCRR',
    lat: '28.945499',
    lon: '-13.6052',
    timezone: '0'
  },
  {
    name: 'Tenerife South ',
    city: 'Tenerife',
    country: 'Spain',
    IATA: 'TFS',
    ICAO: 'GCTS',
    lat: '28.044500351',
    lon: '-16.5725002289',
    timezone: '0'
  },
  {
    name: 'Tenerife Norte ',
    city: 'Tenerife',
    country: 'Spain',
    IATA: 'TFN',
    ICAO: 'GCXO',
    lat: '28.4827003479',
    lon: '-16.3414993286',
    timezone: '0'
  },
  {
    name: 'Melilla ',
    city: 'Melilla',
    country: 'Spain',
    IATA: 'MLN',
    ICAO: 'GEML',
    lat: '35.279800415',
    lon: '-2.9562599659',
    timezone: '1'
  },
  {
    name: 'Lungi Intl ',
    city: 'Freetown',
    country: 'Sierra Leone',
    IATA: 'FNA',
    ICAO: 'GFLL',
    lat: '8.61644',
    lon: '-13.1955',
    timezone: '0'
  },
  {
    name: 'Cufar ',
    city: 'Cufar',
    country: 'Guinea-Bissau',
    IATA: '\\N',
    ICAO: 'GGCF',
    lat: '11.2878999710083',
    lon: '-15.180500030517578',
    timezone: '0'
  },
  {
    name: 'Spriggs Payne ',
    city: 'Monrovia',
    country: 'Liberia',
    IATA: 'MLW',
    ICAO: 'GLMR',
    lat: '6.289060115814209',
    lon: '-10.758700370788574',
    timezone: '0'
  },
  {
    name: 'Roberts Intl ',
    city: 'Monrovia',
    country: 'Liberia',
    IATA: 'ROB',
    ICAO: 'GLRB',
    lat: '6.23379',
    lon: '-10.3623',
    timezone: '0'
  },
  {
    name: 'Al Massira ',
    city: 'Agadir',
    country: 'Morocco',
    IATA: 'AGA',
    ICAO: 'GMAD',
    lat: '30.325000762939453',
    lon: '-9.413069725036621',
    timezone: '0'
  },
  {
    name: 'Tan Tan ',
    city: 'Tan Tan',
    country: 'Morocco',
    IATA: 'TTA',
    ICAO: 'GMAT',
    lat: '28.448200225830078',
    lon: '-11.161299705505371',
    timezone: '0'
  },
  {
    name: 'Sa\u00efss ',
    city: 'Fes',
    country: 'Morocco',
    IATA: 'FEZ',
    ICAO: 'GMFF',
    lat: '33.9272994995',
    lon: '-4.977960109709999',
    timezone: '0'
  },
  {
    name: 'Ifrane ',
    city: 'Ifrane',
    country: 'Morocco',
    IATA: '\\N',
    ICAO: 'GMFI',
    lat: '33.50529861450195',
    lon: '-5.152900218963623',
    timezone: '0'
  },
  {
    name: 'Moulay Ali Cherif ',
    city: 'Er-rachidia',
    country: 'Morocco',
    IATA: 'ERH',
    ICAO: 'GMFK',
    lat: '31.9475002289',
    lon: '-4.39833021164',
    timezone: '0'
  },
  {
    name: 'Bassatine ',
    city: 'Meknes',
    country: 'Morocco',
    IATA: 'MEK',
    ICAO: 'GMFM',
    lat: '33.87910079956055',
    lon: '-5.515120029449463',
    timezone: '0'
  },
  {
    name: 'Angads ',
    city: 'Oujda',
    country: 'Morocco',
    IATA: 'OUD',
    ICAO: 'GMFO',
    lat: '34.787200927734375',
    lon: '-1.92399001121521',
    timezone: '0'
  },
  {
    name: 'Ben Slimane ',
    city: 'Ben Slimane',
    country: 'Morocco',
    IATA: 'GMD',
    ICAO: 'GMMB',
    lat: '33.655399',
    lon: '-7.22145',
    timezone: '0'
  },
  {
    name: 'Rabat-Sal\u00e9 ',
    city: 'Rabat',
    country: 'Morocco',
    IATA: 'RBA',
    ICAO: 'GMME',
    lat: '34.051498',
    lon: '-6.75152',
    timezone: '0'
  },
  {
    name: 'Mohammed V Intl ',
    city: 'Casablanca',
    country: 'Morocco',
    IATA: 'CMN',
    ICAO: 'GMMN',
    lat: '33.36750030517578',
    lon: '-7.589970111846924',
    timezone: '0'
  },
  {
    name: 'Menara ',
    city: 'Marrakech',
    country: 'Morocco',
    IATA: 'RAK',
    ICAO: 'GMMX',
    lat: '31.606899261499997',
    lon: '-8.03629970551',
    timezone: '0'
  },
  {
    name: 'Kenitra ',
    city: 'Kentira',
    country: 'Morocco',
    IATA: 'NNA',
    ICAO: 'GMMY',
    lat: '34.29890060424805',
    lon: '-6.595880031585693',
    timezone: '0'
  },
  {
    name: 'Ouarzazate ',
    city: 'Ouarzazate',
    country: 'Morocco',
    IATA: 'OZZ',
    ICAO: 'GMMZ',
    lat: '30.9391002655',
    lon: '-6.909430027010001',
    timezone: '0'
  },
  {
    name: 'Cherif Al Idrissi ',
    city: 'Al Hociema',
    country: 'Morocco',
    IATA: 'AHU',
    ICAO: 'GMTA',
    lat: '35.177101135253906',
    lon: '-3.83951997756958',
    timezone: '0'
  },
  {
    name: "Saniat R'mel ",
    city: 'Tetouan',
    country: 'Morocco',
    IATA: 'TTU',
    ICAO: 'GMTN',
    lat: '35.594299316406',
    lon: '-5.320020198822',
    timezone: '0'
  },
  {
    name: 'Ibn Batouta ',
    city: 'Tanger',
    country: 'Morocco',
    IATA: 'TNG',
    ICAO: 'GMTT',
    lat: '35.726898193400004',
    lon: '-5.91689014435',
    timezone: '0'
  },
  {
    name: 'Ziguinchor ',
    city: 'Ziguinchor',
    country: 'Senegal',
    IATA: 'ZIG',
    ICAO: 'GOGG',
    lat: '12.5556',
    lon: '-16.281799',
    timezone: '0'
  },
  {
    name: 'Cap Skirring ',
    city: 'Cap Skiring',
    country: 'Senegal',
    IATA: 'CSK',
    ICAO: 'GOGS',
    lat: '12.39533',
    lon: '-16.748',
    timezone: '0'
  },
  {
    name: 'Kaolack ',
    city: 'Kaolack',
    country: 'Senegal',
    IATA: 'KLC',
    ICAO: 'GOOK',
    lat: '14.146900177001953',
    lon: '-16.051300048828125',
    timezone: '0'
  },
  {
    name: 'L\u00e9opold S\u00e9dar Senghor Intl ',
    city: 'Dakar',
    country: 'Senegal',
    IATA: 'DKR',
    ICAO: 'GOOY',
    lat: '14.739700317382812',
    lon: '-17.49020004272461',
    timezone: '0'
  },
  {
    name: 'Saint Louis ',
    city: 'St. Louis',
    country: 'Senegal',
    IATA: 'XLS',
    ICAO: 'GOSS',
    lat: '16.050800323486328',
    lon: '-16.463199615478516',
    timezone: '0'
  },
  {
    name: 'Bakel ',
    city: 'Bakel',
    country: 'Senegal',
    IATA: 'BXE',
    ICAO: 'GOTB',
    lat: '14.847299575805664',
    lon: '-12.468299865722656',
    timezone: '0'
  },
  {
    name: 'K\u00e9dougou ',
    city: 'Kedougou',
    country: 'Senegal',
    IATA: 'KGG',
    ICAO: 'GOTK',
    lat: '12.57229995727539',
    lon: '-12.22029972076416',
    timezone: '0'
  },
  {
    name: 'Tambacounda ',
    city: 'Tambacounda',
    country: 'Senegal',
    IATA: 'TUD',
    ICAO: 'GOTT',
    lat: '13.736800193786621',
    lon: '-13.65310001373291',
    timezone: '0'
  },
  {
    name: 'Aioun el Atrouss ',
    city: 'Aioun El Atrouss',
    country: 'Mauritania',
    IATA: 'AEO',
    ICAO: 'GQNA',
    lat: '16.711299896240234',
    lon: '-9.637880325317383',
    timezone: '0'
  },
  {
    name: 'Tidjikja ',
    city: 'Tidjikja',
    country: 'Mauritania',
    IATA: 'TIY',
    ICAO: 'GQND',
    lat: '18.570100784301758',
    lon: '-11.423500061035156',
    timezone: '0'
  },
  {
    name: 'Kiffa ',
    city: 'Kiffa',
    country: 'Mauritania',
    IATA: 'KFA',
    ICAO: 'GQNF',
    lat: '16.59000015258789',
    lon: '-11.406200408935547',
    timezone: '0'
  },
  {
    name: 'N\u00e9ma ',
    city: 'Nema',
    country: 'Mauritania',
    IATA: 'EMN',
    ICAO: 'GQNI',
    lat: '16.621999740600586',
    lon: '-7.3165998458862305',
    timezone: '0'
  },
  {
    name: 'Ka\u00e9di ',
    city: 'Kaedi',
    country: 'Mauritania',
    IATA: 'KED',
    ICAO: 'GQNK',
    lat: '16.159500122070312',
    lon: '-13.507599830627441',
    timezone: '0'
  },
  {
    name: 'Nouakchott\u2013Oumtounsy Intl ',
    city: 'Nouakschott',
    country: 'Mauritania',
    IATA: 'NKC',
    ICAO: 'GQNO',
    lat: '18.31',
    lon: '-15.9697222',
    timezone: '0'
  },
  {
    name: 'S\u00e9libaby ',
    city: 'Selibabi',
    country: 'Mauritania',
    IATA: 'SEY',
    ICAO: 'GQNS',
    lat: '15.179699897766113',
    lon: '-12.207300186157227',
    timezone: '0'
  },
  {
    name: 'Atar Intl ',
    city: 'Atar',
    country: 'Mauritania',
    IATA: 'ATR',
    ICAO: 'GQPA',
    lat: '20.506799697875977',
    lon: '-13.04319953918457',
    timezone: '0'
  },
  {
    name: 'Nouadhibou Intl ',
    city: 'Nouadhibou',
    country: 'Mauritania',
    IATA: 'NDB',
    ICAO: 'GQPP',
    lat: '20.9330997467041',
    lon: '-17.030000686645508',
    timezone: '0'
  },
  {
    name: 'Bir Moghrein ',
    city: 'Bir Moghrein',
    country: 'Mauritania',
    IATA: '\\N',
    ICAO: 'GQPT',
    lat: '25.2367000579834',
    lon: '-11.588700294494629',
    timezone: '0'
  },
  {
    name: 'Fria ',
    city: 'Fira',
    country: 'Guinea',
    IATA: 'FIG',
    ICAO: 'GUFA',
    lat: '10.350600242615',
    lon: '-13.569199562073',
    timezone: '0'
  },
  {
    name: 'Faranah ',
    city: 'Faranah',
    country: 'Guinea',
    IATA: 'FAA',
    ICAO: 'GUFH',
    lat: '10.0354995728',
    lon: '-10.7698001862',
    timezone: '0'
  },
  {
    name: 'Tata ',
    city: 'Labe',
    country: 'Guinea',
    IATA: 'LEK',
    ICAO: 'GULB',
    lat: '11.326100349426',
    lon: '-12.286800384521',
    timezone: '0'
  },
  {
    name: 'Am\u00edlcar Cabral Intl ',
    city: 'Amilcar Cabral',
    country: 'Cape Verde',
    IATA: 'SID',
    ICAO: 'GVAC',
    lat: '16.7414',
    lon: '-22.9494',
    timezone: '-1'
  },
  {
    name: 'Rabil ',
    city: 'Boa Vista',
    country: 'Cape Verde',
    IATA: 'BVC',
    ICAO: 'GVBA',
    lat: '16.136499404907227',
    lon: '-22.888900756835938',
    timezone: '-1'
  },
  {
    name: 'Maio ',
    city: 'Maio',
    country: 'Cape Verde',
    IATA: 'MMO',
    ICAO: 'GVMA',
    lat: '15.155900001525879',
    lon: '-23.213699340820312',
    timezone: '-1'
  },
  {
    name: 'Pregui\u00e7a ',
    city: 'Sao Nocolau Island',
    country: 'Cape Verde',
    IATA: 'SNE',
    ICAO: 'GVSN',
    lat: '16.58839988708496',
    lon: '-24.284700393676758',
    timezone: '-1'
  },
  {
    name: 'S\u00e3o Pedro ',
    city: 'Sao Vicente Island',
    country: 'Cape Verde',
    IATA: 'VXE',
    ICAO: 'GVSV',
    lat: '16.833200454711914',
    lon: '-25.055299758911133',
    timezone: '-1'
  },
  {
    name: 'Addis Ababa Bole Intl ',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    IATA: 'ADD',
    ICAO: 'HAAB',
    lat: '8.97789001465',
    lon: '38.799301147499996',
    timezone: '3'
  },
  {
    name: 'Lideta Army ',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    IATA: '\\N',
    ICAO: 'HAAL',
    lat: '9.003685',
    lon: '38.725498',
    timezone: '3'
  },
  {
    name: 'Arba Minch ',
    city: 'Arba Minch',
    country: 'Ethiopia',
    IATA: 'AMH',
    ICAO: 'HAAM',
    lat: '6.0393900871276855',
    lon: '37.59049987792969',
    timezone: '3'
  },
  {
    name: 'Axum ',
    city: 'Axum',
    country: 'Ethiopia',
    IATA: 'AXU',
    ICAO: 'HAAX',
    lat: '14.14680004119873',
    lon: '38.77280044555664',
    timezone: '3'
  },
  {
    name: 'Bahir Dar ',
    city: 'Bahar Dar',
    country: 'Ethiopia',
    IATA: 'BJR',
    ICAO: 'HABD',
    lat: '11.608099937438965',
    lon: '37.32160186767578',
    timezone: '3'
  },
  {
    name: 'Aba Tenna Dejazmach Yilma Intl ',
    city: 'Dire Dawa',
    country: 'Ethiopia',
    IATA: 'DIR',
    ICAO: 'HADR',
    lat: '9.624699592590332',
    lon: '41.85419845581055',
    timezone: '3'
  },
  {
    name: 'Gambella ',
    city: 'Gambella',
    country: 'Ethiopia',
    IATA: 'GMB',
    ICAO: 'HAGM',
    lat: '8.12876033782959',
    lon: '34.5630989074707',
    timezone: '3'
  },
  {
    name: 'Gonder ',
    city: 'Gondar',
    country: 'Ethiopia',
    IATA: 'GDQ',
    ICAO: 'HAGN',
    lat: '12.51990032196045',
    lon: '37.433998107910156',
    timezone: '3'
  },
  {
    name: 'Jimma ',
    city: 'Jimma',
    country: 'Ethiopia',
    IATA: 'JIM',
    ICAO: 'HAJM',
    lat: '7.66609001159668',
    lon: '36.81660079956055',
    timezone: '3'
  },
  {
    name: 'Lalibella ',
    city: 'Lalibella',
    country: 'Ethiopia',
    IATA: 'LLI',
    ICAO: 'HALL',
    lat: '11.975000381469727',
    lon: '38.97999954223633',
    timezone: '3'
  },
  {
    name: 'Mekele ',
    city: 'Makale',
    country: 'Ethiopia',
    IATA: 'MQX',
    ICAO: 'HAMK',
    lat: '13.467399597167969',
    lon: '39.53350067138672',
    timezone: '3'
  },
  {
    name: 'Asosa ',
    city: 'Asosa',
    country: 'Ethiopia',
    IATA: 'ASO',
    ICAO: 'HASO',
    lat: '10.018500328063965',
    lon: '34.586299896240234',
    timezone: '3'
  },
  {
    name: 'Bujumbura Intl ',
    city: 'Bujumbura',
    country: 'Burundi',
    IATA: 'BJM',
    ICAO: 'HBBA',
    lat: '-3.3240199089050293',
    lon: '29.318500518798828',
    timezone: '2'
  },
  {
    name: 'Egal Intl ',
    city: 'Hargeisa',
    country: 'Somalia',
    IATA: 'HGA',
    ICAO: 'HCMH',
    lat: '9.518170356750488',
    lon: '44.08879852294922',
    timezone: '3'
  },
  {
    name: 'Berbera ',
    city: 'Berbera',
    country: 'Somalia',
    IATA: 'BBO',
    ICAO: 'HCMI',
    lat: '10.389200210571289',
    lon: '44.94110107421875',
    timezone: '3'
  },
  {
    name: 'Kisimayu ',
    city: 'Kismayu',
    country: 'Somalia',
    IATA: 'KMU',
    ICAO: 'HCMK',
    lat: '-0.3773530125617981',
    lon: '42.45920181274414',
    timezone: '3'
  },
  {
    name: 'El Nouzha ',
    city: 'Alexandria',
    country: 'Egypt',
    IATA: 'ALY',
    ICAO: 'HEAX',
    lat: '31.183900833129883',
    lon: '29.94890022277832',
    timezone: '2'
  },
  {
    name: 'Abu Simbel ',
    city: 'Abu Simbel',
    country: 'Egypt',
    IATA: 'ABS',
    ICAO: 'HEBL',
    lat: '22.375999450699997',
    lon: '31.611700058',
    timezone: '2'
  },
  {
    name: 'Cairo Intl ',
    city: 'Cairo',
    country: 'Egypt',
    IATA: 'CAI',
    ICAO: 'HECA',
    lat: '30.12190055847168',
    lon: '31.40559959411621',
    timezone: '2'
  },
  {
    name: 'Cairo West ',
    city: 'Cairo',
    country: 'Egypt',
    IATA: 'CWE',
    ICAO: 'HECW',
    lat: '30.116399765',
    lon: '30.915399551399997',
    timezone: '2'
  },
  {
    name: 'Hurghada Intl ',
    city: 'Hurghada',
    country: 'Egypt',
    IATA: 'HRG',
    ICAO: 'HEGN',
    lat: '27.178300857543945',
    lon: '33.799400329589844',
    timezone: '2'
  },
  {
    name: 'El Gora ',
    city: 'El Gorah',
    country: 'Egypt',
    IATA: 'EGH',
    ICAO: 'HEGR',
    lat: '31.068559',
    lon: '34.129629',
    timezone: '2'
  },
  {
    name: 'Luxor Intl ',
    city: 'Luxor',
    country: 'Egypt',
    IATA: 'LXR',
    ICAO: 'HELX',
    lat: '25.671',
    lon: '32.7066',
    timezone: '2'
  },
  {
    name: 'Mersa Matruh ',
    city: 'Mersa-matruh',
    country: 'Egypt',
    IATA: 'MUH',
    ICAO: 'HEMM',
    lat: '31.3253993988',
    lon: '27.221700668300002',
    timezone: '2'
  },
  {
    name: 'Port Said ',
    city: 'Port Said',
    country: 'Egypt',
    IATA: 'PSD',
    ICAO: 'HEPS',
    lat: '31.279399871826172',
    lon: '32.2400016784668',
    timezone: '2'
  },
  {
    name: 'St Catherine Intl ',
    city: 'St. Catherine',
    country: 'Egypt',
    IATA: 'SKV',
    ICAO: 'HESC',
    lat: '28.685300827',
    lon: '34.0625',
    timezone: '2'
  },
  {
    name: 'Aswan Intl ',
    city: 'Aswan',
    country: 'Egypt',
    IATA: 'ASW',
    ICAO: 'HESN',
    lat: '23.9643993378',
    lon: '32.8199996948',
    timezone: '2'
  },
  {
    name: 'El Tor ',
    city: 'El-tor',
    country: 'Egypt',
    IATA: 'ELT',
    ICAO: 'HETR',
    lat: '28.208999633789062',
    lon: '33.64550018310547',
    timezone: '2'
  },
  {
    name: 'Eldoret Intl ',
    city: 'Eldoret',
    country: 'Kenya',
    IATA: 'EDL',
    ICAO: 'HKEL',
    lat: '0.4044579863548279',
    lon: '35.23889923095703',
    timezone: '3'
  },
  {
    name: 'Kakamega ',
    city: 'Kakamega',
    country: 'Kenya',
    IATA: 'GGM',
    ICAO: 'HKKG',
    lat: '0.271342009306',
    lon: '34.7873001099',
    timezone: '3'
  },
  {
    name: 'Kisumu ',
    city: 'Kisumu',
    country: 'Kenya',
    IATA: 'KIS',
    ICAO: 'HKKI',
    lat: '-0.0861390009522438',
    lon: '34.72890090942383',
    timezone: '3'
  },
  {
    name: 'Kitale ',
    city: 'Kitale',
    country: 'Kenya',
    IATA: 'KTL',
    ICAO: 'HKKT',
    lat: '0.9719889760017395',
    lon: '34.95859909057617',
    timezone: '3'
  },
  {
    name: 'Lodwar ',
    city: 'Lodwar',
    country: 'Kenya',
    IATA: 'LOK',
    ICAO: 'HKLO',
    lat: '3.1219699382781982',
    lon: '35.608699798583984',
    timezone: '3'
  },
  {
    name: 'Manda Airstrip',
    city: 'Lamu',
    country: 'Kenya',
    IATA: 'LAU',
    ICAO: 'HKLU',
    lat: '-2.252419948577881',
    lon: '40.91310119628906',
    timezone: '3'
  },
  {
    name: 'Mombasa Moi Intl ',
    city: 'Mombasa',
    country: 'Kenya',
    IATA: 'MBA',
    ICAO: 'HKMO',
    lat: '-4.034830093383789',
    lon: '39.594200134277344',
    timezone: '3'
  },
  {
    name: 'Naivasha ',
    city: 'Naivasha',
    country: 'Kenya',
    IATA: '\\N',
    ICAO: 'HKNV',
    lat: '-0.787953',
    lon: '36.433494',
    timezone: '3'
  },
  {
    name: 'Nairobi Wilson ',
    city: 'Nairobi',
    country: 'Kenya',
    IATA: 'WIL',
    ICAO: 'HKNW',
    lat: '-1.321720004081726',
    lon: '36.81480026245117',
    timezone: '3'
  },
  {
    name: 'Moi Air Base',
    city: 'Nairobi',
    country: 'Kenya',
    IATA: '\\N',
    ICAO: 'HKRE',
    lat: '-1.2772699594499999',
    lon: '36.8623008728',
    timezone: '3'
  },
  {
    name: 'Wajir ',
    city: 'Wajir',
    country: 'Kenya',
    IATA: 'WJR',
    ICAO: 'HKWJ',
    lat: '1.73324',
    lon: '40.091599',
    timezone: '3'
  },
  {
    name: 'Bu Attifel ',
    city: 'Buattifel',
    country: 'Libya',
    IATA: '\\N',
    ICAO: 'HLFL',
    lat: '28.795400619506836',
    lon: '22.080900192260742',
    timezone: '2'
  },
  {
    name: 'Warehouse 59e ',
    city: 'Giallo',
    country: 'Libya',
    IATA: '\\N',
    ICAO: 'HLGL',
    lat: '28.638500213623047',
    lon: '21.437999725341797',
    timezone: '2'
  },
  {
    name: 'Ghat ',
    city: 'Ghat',
    country: 'Libya',
    IATA: 'GHT',
    ICAO: 'HLGT',
    lat: '25.1455993652',
    lon: '10.142600059500001',
    timezone: '2'
  },
  {
    name: 'Kufra ',
    city: 'Kufra',
    country: 'Libya',
    IATA: 'AKF',
    ICAO: 'HLKF',
    lat: '24.178699493408203',
    lon: '23.31399917602539',
    timezone: '2'
  },
  {
    name: 'Benina Intl ',
    city: 'Benghazi',
    country: 'Libya',
    IATA: 'BEN',
    ICAO: 'HLLB',
    lat: '32.096801757799994',
    lon: '20.2695007324',
    timezone: '2'
  },
  {
    name: 'Sabha ',
    city: 'Sebha',
    country: 'Libya',
    IATA: 'SEB',
    ICAO: 'HLLS',
    lat: '26.98699951171875',
    lon: '14.47249984741211',
    timezone: '2'
  },
  {
    name: 'Tripoli Intl ',
    city: 'Tripoli',
    country: 'Libya',
    IATA: 'TIP',
    ICAO: 'HLLT',
    lat: '32.6635017395',
    lon: '13.1590003967',
    timezone: '2'
  },
  {
    name: 'Marsa Brega ',
    city: 'Marsa Brega',
    country: 'Libya',
    IATA: 'LMQ',
    ICAO: 'HLMB',
    lat: '30.37809944152832',
    lon: '19.576400756835938',
    timezone: '2'
  },
  {
    name: 'Ras Lanuf Oil ',
    city: 'Ras Lanouf V 40',
    country: 'Libya',
    IATA: '\\N',
    ICAO: 'HLNF',
    lat: '30.5',
    lon: '18.52720069885254',
    timezone: '2'
  },
  {
    name: 'Hon ',
    city: 'Hon',
    country: 'Libya',
    IATA: 'HUQ',
    ICAO: 'HLON',
    lat: '29.11009979248047',
    lon: '15.96560001373291',
    timezone: '2'
  },
  {
    name: 'Dahra ',
    city: 'Dahra',
    country: 'Libya',
    IATA: '\\N',
    ICAO: 'HLRA',
    lat: '29.47260093688965',
    lon: '17.934900283813477',
    timezone: '2'
  },
  {
    name: 'Ghadames East ',
    city: 'Ghadames',
    country: 'Libya',
    IATA: 'LTD',
    ICAO: 'HLTD',
    lat: '30.15169906616211',
    lon: '9.715310096740723',
    timezone: '2'
  },
  {
    name: 'Zella 74 ',
    city: 'Zella 74',
    country: 'Libya',
    IATA: '\\N',
    ICAO: 'HLZA',
    lat: '28.58989906311035',
    lon: '17.293899536132812',
    timezone: '2'
  },
  {
    name: 'Gisenyi ',
    city: 'Gisenyi',
    country: 'Rwanda',
    IATA: 'GYI',
    ICAO: 'HRYG',
    lat: '-1.6771999597549438',
    lon: '29.258899688720703',
    timezone: '2'
  },
  {
    name: 'Kigali Intl ',
    city: 'Kigali',
    country: 'Rwanda',
    IATA: 'KGL',
    ICAO: 'HRYR',
    lat: '-1.96863',
    lon: '30.1395',
    timezone: '2'
  },
  {
    name: 'Kamembe ',
    city: 'Kamembe',
    country: 'Rwanda',
    IATA: 'KME',
    ICAO: 'HRZA',
    lat: '-2.462239980697632',
    lon: '28.907899856567383',
    timezone: '2'
  },
  {
    name: 'Dongola ',
    city: 'Dongola',
    country: 'Sudan',
    IATA: 'DOG',
    ICAO: 'HSDN',
    lat: '19.153900146499996',
    lon: '30.430099487299998',
    timezone: '3'
  },
  {
    name: 'Damazin ',
    city: 'Damazin',
    country: 'Sudan',
    IATA: 'RSS',
    ICAO: 'HSDZ',
    lat: '11.7859',
    lon: '34.3367',
    timezone: '3'
  },
  {
    name: 'El Fasher ',
    city: 'El Fasher',
    country: 'Sudan',
    IATA: 'ELF',
    ICAO: 'HSFS',
    lat: '13.614899635314941',
    lon: '25.324600219726562',
    timezone: '3'
  },
  {
    name: 'Kassala ',
    city: 'Kassala',
    country: 'Sudan',
    IATA: 'KSL',
    ICAO: 'HSKA',
    lat: '15.387499809265137',
    lon: '36.328800201416016',
    timezone: '3'
  },
  {
    name: 'Kadugli ',
    city: 'Kadugli',
    country: 'Sudan',
    IATA: 'KDX',
    ICAO: 'HSLI',
    lat: '11.137999534600002',
    lon: '29.7010993958',
    timezone: '3'
  },
  {
    name: 'El Obeid ',
    city: 'El Obeid',
    country: 'Sudan',
    IATA: 'EBD',
    ICAO: 'HSOB',
    lat: '13.153200149536133',
    lon: '30.23270034790039',
    timezone: '3'
  },
  {
    name: 'Juba Intl ',
    city: 'Juba',
    country: 'South Sudan',
    IATA: 'JUB',
    ICAO: 'HSSJ',
    lat: '4.87201023102',
    lon: '31.6011009216',
    timezone: '3'
  },
  {
    name: 'Malakal ',
    city: 'Malakal',
    country: 'Sudan',
    IATA: 'MAK',
    ICAO: 'HSSM',
    lat: '9.55897045135498',
    lon: '31.65220069885254',
    timezone: '3'
  },
  {
    name: 'Khartoum Intl ',
    city: 'Khartoum',
    country: 'Sudan',
    IATA: 'KRT',
    ICAO: 'HSSS',
    lat: '15.589500427246094',
    lon: '32.553199768066406',
    timezone: '3'
  },
  {
    name: 'Arusha ',
    city: 'Arusha',
    country: 'Tanzania',
    IATA: 'ARK',
    ICAO: 'HTAR',
    lat: '-3.3677899837493896',
    lon: '36.63330078125',
    timezone: '3'
  },
  {
    name: 'Julius Nyerere Intl ',
    city: 'Dar Es Salaam',
    country: 'Tanzania',
    IATA: 'DAR',
    ICAO: 'HTDA',
    lat: '-6.87811',
    lon: '39.202599',
    timezone: '3'
  },
  {
    name: 'Dodoma ',
    city: 'Dodoma',
    country: 'Tanzania',
    IATA: 'DOD',
    ICAO: 'HTDO',
    lat: '-6.170440196990967',
    lon: '35.752601623535156',
    timezone: '3'
  },
  {
    name: 'Iringa ',
    city: 'Iringa',
    country: 'Tanzania',
    IATA: 'IRI',
    ICAO: 'HTIR',
    lat: '-7.668630123138428',
    lon: '35.75210189819336',
    timezone: '3'
  },
  {
    name: 'Kilimanjaro Intl ',
    city: 'Kilimanjaro',
    country: 'Tanzania',
    IATA: 'JRO',
    ICAO: 'HTKJ',
    lat: '-3.42940998077',
    lon: '37.0745010376',
    timezone: '3'
  },
  {
    name: 'Lake Manyara ',
    city: 'Lake Manyara',
    country: 'Tanzania',
    IATA: 'LKY',
    ICAO: 'HTLM',
    lat: '-3.376310110092163',
    lon: '35.81829833984375',
    timezone: '3'
  },
  {
    name: 'Mtwara ',
    city: 'Mtwara',
    country: 'Tanzania',
    IATA: 'MYW',
    ICAO: 'HTMT',
    lat: '-10.339099884033203',
    lon: '40.181800842285156',
    timezone: '3'
  },
  {
    name: 'Mwanza ',
    city: 'Mwanza',
    country: 'Tanzania',
    IATA: 'MWZ',
    ICAO: 'HTMW',
    lat: '-2.4444899559020996',
    lon: '32.932701110839844',
    timezone: '3'
  },
  {
    name: 'Pemba ',
    city: 'Pemba',
    country: 'Tanzania',
    IATA: 'PMA',
    ICAO: 'HTPE',
    lat: '-5.257259845733643',
    lon: '39.8114013671875',
    timezone: '3'
  },
  {
    name: 'Tanga ',
    city: 'Tanga',
    country: 'Tanzania',
    IATA: 'TGT',
    ICAO: 'HTTG',
    lat: '-5.092360019683838',
    lon: '39.07120132446289',
    timezone: '3'
  },
  {
    name: 'Abeid Amani Karume Intl ',
    city: 'Zanzibar',
    country: 'Tanzania',
    IATA: 'ZNZ',
    ICAO: 'HTZA',
    lat: '-6.22202',
    lon: '39.224899',
    timezone: '3'
  },
  {
    name: 'Entebbe Intl ',
    city: 'Entebbe',
    country: 'Uganda',
    IATA: 'EBB',
    ICAO: 'HUEN',
    lat: '0.042386',
    lon: '32.443501',
    timezone: '3'
  },
  {
    name: 'Soroti ',
    city: 'Soroti',
    country: 'Uganda',
    IATA: 'SRT',
    ICAO: 'HUSO',
    lat: '1.7276899814605713',
    lon: '33.622798919677734',
    timezone: '3'
  },
  {
    name: 'Tirana Intl  Mother Teresa',
    city: 'Tirana',
    country: 'Albania',
    IATA: 'TIA',
    ICAO: 'LATI',
    lat: '41.4146995544',
    lon: '19.7206001282',
    timezone: '1'
  },
  {
    name: 'Burgas ',
    city: 'Bourgas',
    country: 'Bulgaria',
    IATA: 'BOJ',
    ICAO: 'LBBG',
    lat: '42.56959915161133',
    lon: '27.515199661254883',
    timezone: '2'
  },
  {
    name: 'Gorna Oryahovitsa ',
    city: 'Gorna Orechovica',
    country: 'Bulgaria',
    IATA: 'GOZ',
    ICAO: 'LBGO',
    lat: '43.15140151977539',
    lon: '25.712900161743164',
    timezone: '2'
  },
  {
    name: 'Plovdiv Intl ',
    city: 'Plovdiv',
    country: 'Bulgaria',
    IATA: 'PDV',
    ICAO: 'LBPD',
    lat: '42.067799',
    lon: '24.8508',
    timezone: '2'
  },
  {
    name: 'Sofia ',
    city: 'Sofia',
    country: 'Bulgaria',
    IATA: 'SOF',
    ICAO: 'LBSF',
    lat: '42.696693420410156',
    lon: '23.411436080932617',
    timezone: '2'
  },
  {
    name: 'Stara Zagora ',
    city: 'Stara Zagora',
    country: 'Bulgaria',
    IATA: 'SZR',
    ICAO: 'LBSZ',
    lat: '42.3766667',
    lon: '25.655',
    timezone: '2'
  },
  {
    name: 'Varna ',
    city: 'Varna',
    country: 'Bulgaria',
    IATA: 'VAR',
    ICAO: 'LBWN',
    lat: '43.232101',
    lon: '27.8251',
    timezone: '2'
  },
  {
    name: 'Larnaca Intl ',
    city: 'Larnaca',
    country: 'Cyprus',
    IATA: 'LCA',
    ICAO: 'LCLK',
    lat: '34.875099182128906',
    lon: '33.624900817871094',
    timezone: '2'
  },
  {
    name: 'Paphos Intl ',
    city: 'Paphos',
    country: 'Cyprus',
    IATA: 'PFO',
    ICAO: 'LCPH',
    lat: '34.71799850463867',
    lon: '32.48569869995117',
    timezone: '2'
  },
  {
    name: 'RAF Akrotiri',
    city: 'Akrotiri',
    country: 'Cyprus',
    IATA: 'AKT',
    ICAO: 'LCRA',
    lat: '34.590401',
    lon: '32.9879',
    timezone: '0'
  },
  {
    name: 'Dubrovnik ',
    city: 'Dubrovnik',
    country: 'Croatia',
    IATA: 'DBV',
    ICAO: 'LDDU',
    lat: '42.5614013671875',
    lon: '18.268199920654297',
    timezone: '1'
  },
  {
    name: 'Osijek-\u010cepin Airfield',
    city: 'Cepin',
    country: 'Croatia',
    IATA: '\\N',
    ICAO: 'LDOC',
    lat: '45.5427778',
    lon: '18.6319444',
    timezone: '1'
  },
  {
    name: 'Osijek ',
    city: 'Osijek',
    country: 'Croatia',
    IATA: 'OSI',
    ICAO: 'LDOS',
    lat: '45.46269989013672',
    lon: '18.810199737548828',
    timezone: '1'
  },
  {
    name: 'Pula ',
    city: 'Pula',
    country: 'Croatia',
    IATA: 'PUY',
    ICAO: 'LDPL',
    lat: '44.89350128173828',
    lon: '13.922200202941895',
    timezone: '1'
  },
  {
    name: 'Grobnicko Polje ',
    city: 'Grobnik',
    country: 'Croatia',
    IATA: '\\N',
    ICAO: 'LDRG',
    lat: '45.37950134277344',
    lon: '14.503800392150879',
    timezone: '1'
  },
  {
    name: 'Rijeka ',
    city: 'Rijeka',
    country: 'Croatia',
    IATA: 'RJK',
    ICAO: 'LDRI',
    lat: '45.21689987182617',
    lon: '14.570300102233887',
    timezone: '1'
  },
  {
    name: 'Split ',
    city: 'Split',
    country: 'Croatia',
    IATA: 'SPU',
    ICAO: 'LDSP',
    lat: '43.53889846801758',
    lon: '16.29800033569336',
    timezone: '1'
  },
  {
    name: 'Vara\u017edin ',
    city: 'Varazdin',
    country: 'Croatia',
    IATA: '\\N',
    ICAO: 'LDVA',
    lat: '46.294647216796875',
    lon: '16.382932662963867',
    timezone: '1'
  },
  {
    name: 'Zagreb ',
    city: 'Zagreb',
    country: 'Croatia',
    IATA: 'ZAG',
    ICAO: 'LDZA',
    lat: '45.7429008484',
    lon: '16.0687999725',
    timezone: '1'
  },
  {
    name: 'Zadar ',
    city: 'Zadar',
    country: 'Croatia',
    IATA: 'ZAD',
    ICAO: 'LDZD',
    lat: '44.108299',
    lon: '15.3467',
    timezone: '1'
  },
  {
    name: 'Udbina Air Base',
    city: 'Udbina',
    country: 'Croatia',
    IATA: '\\N',
    ICAO: 'LDZU',
    lat: '44.55759811401367',
    lon: '15.774399757385254',
    timezone: '1'
  },
  {
    name: 'Albacete-Los Llanos ',
    city: 'Albacete',
    country: 'Spain',
    IATA: 'ABC',
    ICAO: 'LEAB',
    lat: '38.9485015869',
    lon: '-1.8635200262099998',
    timezone: '1'
  },
  {
    name: 'Alicante Intl ',
    city: 'Alicante',
    country: 'Spain',
    IATA: 'ALC',
    ICAO: 'LEAL',
    lat: '38.28219985961914',
    lon: '-0.5581560134887695',
    timezone: '1'
  },
  {
    name: 'Almer\u00eda Intl ',
    city: 'Almeria',
    country: 'Spain',
    IATA: 'LEI',
    ICAO: 'LEAM',
    lat: '36.84389877319336',
    lon: '-2.3701000213623047',
    timezone: '1'
  },
  {
    name: 'Asturias ',
    city: 'Aviles',
    country: 'Spain',
    IATA: 'OVD',
    ICAO: 'LEAS',
    lat: '43.5635986328125',
    lon: '-6.0346198081970215',
    timezone: '1'
  },
  {
    name: 'C\u00f3rdoba ',
    city: 'Cordoba',
    country: 'Spain',
    IATA: 'ODB',
    ICAO: 'LEBA',
    lat: '37.84199905395508',
    lon: '-4.848879814147949',
    timezone: '1'
  },
  {
    name: 'Bilbao ',
    city: 'Bilbao',
    country: 'Spain',
    IATA: 'BIO',
    ICAO: 'LEBB',
    lat: '43.30110168457031',
    lon: '-2.9106099605560303',
    timezone: '1'
  },
  {
    name: 'Barcelona Intl ',
    city: 'Barcelona',
    country: 'Spain',
    IATA: 'BCN',
    ICAO: 'LEBL',
    lat: '41.2971',
    lon: '2.07846',
    timezone: '1'
  },
  {
    name: 'Badajoz ',
    city: 'Badajoz',
    country: 'Spain',
    IATA: 'BJZ',
    ICAO: 'LEBZ',
    lat: '38.891300201416016',
    lon: '-6.8213300704956055',
    timezone: '1'
  },
  {
    name: 'A Coru\u00f1a ',
    city: 'La Coruna',
    country: 'Spain',
    IATA: 'LCG',
    ICAO: 'LECO',
    lat: '43.302101',
    lon: '-8.37726',
    timezone: '1'
  },
  {
    name: 'Armilla Air Base',
    city: 'Granada',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LEGA',
    lat: '37.1332016',
    lon: '-3.63568997',
    timezone: '1'
  },
  {
    name: 'Girona ',
    city: 'Gerona',
    country: 'Spain',
    IATA: 'GRO',
    ICAO: 'LEGE',
    lat: '41.901000977',
    lon: '2.7605500221',
    timezone: '1'
  },
  {
    name: 'Federico Garcia Lorca ',
    city: 'Granada',
    country: 'Spain',
    IATA: 'GRX',
    ICAO: 'LEGR',
    lat: '37.18870162963867',
    lon: '-3.777359962463379',
    timezone: '1'
  },
  {
    name: 'Getafe Air Base',
    city: 'Madrid',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LEGT',
    lat: '40.29410171508789',
    lon: '-3.723829984664917',
    timezone: '1'
  },
  {
    name: 'Ibiza ',
    city: 'Ibiza',
    country: 'Spain',
    IATA: 'IBZ',
    ICAO: 'LEIB',
    lat: '38.872898101800004',
    lon: '1.3731199502899998',
    timezone: '1'
  },
  {
    name: 'Jerez ',
    city: 'Jerez',
    country: 'Spain',
    IATA: 'XRY',
    ICAO: 'LEJR',
    lat: '36.744598388671875',
    lon: '-6.060110092163086',
    timezone: '1'
  },
  {
    name: 'San Javier ',
    city: 'Murcia',
    country: 'Spain',
    IATA: 'MJV',
    ICAO: 'LELC',
    lat: '37.775001525878906',
    lon: '-0.8123890161514282',
    timezone: '1'
  },
  {
    name: 'Adolfo Su\u00e1rez Madrid\u2013Barajas ',
    city: 'Madrid',
    country: 'Spain',
    IATA: 'MAD',
    ICAO: 'LEMD',
    lat: '40.471926',
    lon: '-3.56264',
    timezone: '1'
  },
  {
    name: 'M\u00e1laga ',
    city: 'Malaga',
    country: 'Spain',
    IATA: 'AGP',
    ICAO: 'LEMG',
    lat: '36.67490005493164',
    lon: '-4.499110221862793',
    timezone: '1'
  },
  {
    name: 'Menorca ',
    city: 'Menorca',
    country: 'Spain',
    IATA: 'MAH',
    ICAO: 'LEMH',
    lat: '39.86259841918945',
    lon: '4.218649864196777',
    timezone: '1'
  },
  {
    name: 'Moron Air Base',
    city: 'Sevilla',
    country: 'Spain',
    IATA: 'OZP',
    ICAO: 'LEMO',
    lat: '37.17490005493164',
    lon: '-5.615940093994141',
    timezone: '1'
  },
  {
    name: 'Oca\u00f1a ',
    city: 'Ocana',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LEOC',
    lat: '39.9375',
    lon: '-3.5033299922943115',
    timezone: '1'
  },
  {
    name: 'Pamplona ',
    city: 'Pamplona',
    country: 'Spain',
    IATA: 'PNA',
    ICAO: 'LEPP',
    lat: '42.77000045776367',
    lon: '-1.6463299989700317',
    timezone: '1'
  },
  {
    name: 'Alcantarilla Air Base',
    city: 'Murcia',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LERI',
    lat: '37.951099',
    lon: '-1.23032',
    timezone: '1'
  },
  {
    name: 'Reus Air Base',
    city: 'Reus',
    country: 'Spain',
    IATA: 'REU',
    ICAO: 'LERS',
    lat: '41.14739990234375',
    lon: '1.1671700477600098',
    timezone: '1'
  },
  {
    name: 'Rota Naval Station ',
    city: 'Rota',
    country: 'Spain',
    IATA: 'ROZ',
    ICAO: 'LERT',
    lat: '36.645198822',
    lon: '-6.34946012497',
    timezone: '1'
  },
  {
    name: 'Salamanca ',
    city: 'Salamanca',
    country: 'Spain',
    IATA: 'SLM',
    ICAO: 'LESA',
    lat: '40.95209884643555',
    lon: '-5.501989841461182',
    timezone: '1'
  },
  {
    name: 'Son Bonet ',
    city: 'Son Bonet',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LESB',
    lat: '39.598899841308594',
    lon: '2.70278000831604',
    timezone: '1'
  },
  {
    name: 'San Luis ',
    city: 'San Luis',
    country: 'Spain',
    IATA: '\\N',
    ICAO: 'LESL',
    lat: '39.86220169067383',
    lon: '4.25832986831665',
    timezone: '1'
  },
  {
    name: 'San Sebastian ',
    city: 'San Sebastian',
    country: 'Spain',
    IATA: 'EAS',
    ICAO: 'LESO',
    lat: '43.35649871826172',
    lon: '-1.7906099557876587',
    timezone: '1'
  },
  {
    name: 'Santiago de Compostela ',
    city: 'Santiago',
    country: 'Spain',
    IATA: 'SCQ',
    ICAO: 'LEST',
    lat: '42.89630126953125',
    lon: '-8.415140151977539',
    timezone: '1'
  },
  {
    name: "Pirineus - la Seu d'Urgel ",
    city: 'Seo De Urgel',
    country: 'Spain',
    IATA: 'LEU',
    ICAO: 'LESU',
    lat: '42.3386',
    lon: '1.40917',
    timezone: '1'
  },
  {
    name: 'Torrej\u00f3n ',
    city: 'Madrid',
    country: 'Spain',
    IATA: 'TOJ',
    ICAO: 'LETO',
    lat: '40.496700286865234',
    lon: '-3.4458699226379395',
    timezone: '1'
  },
  {
    name: 'Valencia ',
    city: 'Valencia',
    country: 'Spain',
    IATA: 'VLC',
    ICAO: 'LEVC',
    lat: '39.4893',
    lon: '-0.481625',
    timezone: '1'
  },
  {
    name: 'Valladolid ',
    city: 'Valladolid',
    country: 'Spain',
    IATA: 'VLL',
    ICAO: 'LEVD',
    lat: '41.7061004639',
    lon: '-4.85194015503',
    timezone: '1'
  },
  {
    name: 'Vitoria/Foronda ',
    city: 'Vitoria',
    country: 'Spain',
    IATA: 'VIT',
    ICAO: 'LEVT',
    lat: '42.8828010559082',
    lon: '-2.7244699001312256',
    timezone: '1'
  },
  {
    name: 'Vigo ',
    city: 'Vigo',
    country: 'Spain',
    IATA: 'VGO',
    ICAO: 'LEVX',
    lat: '42.2318000793457',
    lon: '-8.62677001953125',
    timezone: '1'
  },
  {
    name: 'Santander ',
    city: 'Santander',
    country: 'Spain',
    IATA: 'SDR',
    ICAO: 'LEXJ',
    lat: '43.427101135253906',
    lon: '-3.82000994682312',
    timezone: '1'
  },
  {
    name: 'Zaragoza Air Base',
    city: 'Zaragoza',
    country: 'Spain',
    IATA: 'ZAZ',
    ICAO: 'LEZG',
    lat: '41.66619873046875',
    lon: '-1.0415500402450562',
    timezone: '1'
  },
  {
    name: 'Sevilla ',
    city: 'Sevilla',
    country: 'Spain',
    IATA: 'SVQ',
    ICAO: 'LEZL',
    lat: '37.417999267578125',
    lon: '-5.8931097984313965',
    timezone: '1'
  },
  {
    name: 'Calais-Dunkerque ',
    city: 'Calais',
    country: 'France',
    IATA: 'CQF',
    ICAO: 'LFAC',
    lat: '50.962100982666016',
    lon: '1.954759955406189',
    timezone: '1'
  },
  {
    name: 'P\u00e9ronne-Saint-Quentin ',
    city: 'Peronne',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFAG',
    lat: '49.8685',
    lon: '3.02958',
    timezone: '1'
  },
  {
    name: 'Nangis-Les Loges ',
    city: 'Nangis',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFAI',
    lat: '48.59619903564453',
    lon: '3.0067899227142334',
    timezone: '1'
  },
  {
    name: "Bagnoles-de-l'Orne-Couterne ",
    city: "Bagnole-de-l'orne",
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFAO',
    lat: '48.545799255371094',
    lon: '-0.38744398951530457',
    timezone: '1'
  },
  {
    name: 'Albert-Bray ',
    city: 'Albert',
    country: 'France',
    IATA: 'BYF',
    ICAO: 'LFAQ',
    lat: '49.9715003967',
    lon: '2.69765996933',
    timezone: '1'
  },
  {
    name: "Le Touquet-C\u00f4te d'Opale ",
    city: 'Le Tourquet',
    country: 'France',
    IATA: 'LTQ',
    ICAO: 'LFAT',
    lat: '50.517398834228516',
    lon: '1.6205899715423584',
    timezone: '1'
  },
  {
    name: 'Valenciennes-Denain ',
    city: 'Valenciennes',
    country: 'France',
    IATA: 'XVS',
    ICAO: 'LFAV',
    lat: '50.325801849365234',
    lon: '3.4612600803375244',
    timezone: '1'
  },
  {
    name: 'Amiens-Glisy ',
    city: 'Amiens',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFAY',
    lat: '49.873004',
    lon: '2.387074',
    timezone: '1'
  },
  {
    name: 'Agen-La Garenne ',
    city: 'Agen',
    country: 'France',
    IATA: 'AGF',
    ICAO: 'LFBA',
    lat: '44.17470169067383',
    lon: '0.5905560255050659',
    timezone: '1'
  },
  {
    name: 'Cazaux (BA 120) Air Base',
    city: 'Cazaux',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFBC',
    lat: '44.53329849243164',
    lon: '-1.125',
    timezone: '1'
  },
  {
    name: 'Bordeaux-M\u00e9rignac ',
    city: 'Bordeaux',
    country: 'France',
    IATA: 'BOD',
    ICAO: 'LFBD',
    lat: '44.828300476100004',
    lon: '-0.715556025505',
    timezone: '1'
  },
  {
    name: 'Bergerac-Roumani\u00e8re ',
    city: 'Bergerac',
    country: 'France',
    IATA: 'EGC',
    ICAO: 'LFBE',
    lat: '44.82529830932617',
    lon: '0.5186110138893127',
    timezone: '1'
  },
  {
    name: 'Toulouse-Francazal (BA 101) Air Base',
    city: 'Toulouse',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFBF',
    lat: '43.54560089111328',
    lon: '1.3674999475479126',
    timezone: '1'
  },
  {
    name: 'Cognac-Ch\u00e2teaubernard (BA 709) Air Base',
    city: 'Cognac',
    country: 'France',
    IATA: 'CNG',
    ICAO: 'LFBG',
    lat: '45.65829849243164',
    lon: '-0.3174999952316284',
    timezone: '1'
  },
  {
    name: 'Poitiers-Biard ',
    city: 'Poitiers',
    country: 'France',
    IATA: 'PIS',
    ICAO: 'LFBI',
    lat: '46.58769989013672',
    lon: '0.30666598677635193',
    timezone: '1'
  },
  {
    name: 'Montlu\u00e7on-Gu\u00e9ret ',
    city: 'Montlucon-gueret',
    country: 'France',
    IATA: 'MCU',
    ICAO: 'LFBK',
    lat: '46.222599029541016',
    lon: '2.363960027694702',
    timezone: '1'
  },
  {
    name: 'Limoges ',
    city: 'Limoges',
    country: 'France',
    IATA: 'LIG',
    ICAO: 'LFBL',
    lat: '45.86280059814453',
    lon: '1.1794400215148926',
    timezone: '1'
  },
  {
    name: 'Mont-de-Marsan (BA 118) Air Base',
    city: 'Mont-de-marsan',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFBM',
    lat: '43.911701',
    lon: '-0.5075',
    timezone: '1'
  },
  {
    name: 'Niort-Souch\u00e9 ',
    city: 'Niort',
    country: 'France',
    IATA: 'NIT',
    ICAO: 'LFBN',
    lat: '46.313477',
    lon: '-0.394529',
    timezone: '1'
  },
  {
    name: 'Toulouse-Blagnac ',
    city: 'Toulouse',
    country: 'France',
    IATA: 'TLS',
    ICAO: 'LFBO',
    lat: '43.629101',
    lon: '1.36382',
    timezone: '1'
  },
  {
    name: 'Pau Pyr\u00e9n\u00e9es ',
    city: 'Pau',
    country: 'France',
    IATA: 'PUF',
    ICAO: 'LFBP',
    lat: '43.380001068115234',
    lon: '-0.41861099004745483',
    timezone: '1'
  },
  {
    name: 'Muret-Lherm ',
    city: 'La Rochelle',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFBR',
    lat: '43.44889831542969',
    lon: '1.2633299827575684',
    timezone: '1'
  },
  {
    name: 'Tarbes-Lourdes-Pyr\u00e9n\u00e9es ',
    city: 'Tarbes',
    country: 'France',
    IATA: 'LDE',
    ICAO: 'LFBT',
    lat: '43.1786994934082',
    lon: '-0.006438999902456999',
    timezone: '1'
  },
  {
    name: 'Angoul\u00eame-Brie-Champniers ',
    city: 'Angouleme',
    country: 'France',
    IATA: 'ANG',
    ICAO: 'LFBU',
    lat: '45.72919845581055',
    lon: '0.22145600616931915',
    timezone: '1'
  },
  {
    name: 'Brive Souillac ',
    city: 'Brive',
    country: 'France',
    IATA: 'BVE',
    ICAO: 'LFSL',
    lat: '45.039722',
    lon: '1.485556',
    timezone: '1'
  },
  {
    name: 'P\u00e9rigueux-Bassillac ',
    city: 'Perigueux',
    country: 'France',
    IATA: 'PGX',
    ICAO: 'LFBX',
    lat: '45.19810104370117',
    lon: '0.815555989742279',
    timezone: '1'
  },
  {
    name: 'Biarritz-Anglet-Bayonne ',
    city: 'Biarritz-bayonne',
    country: 'France',
    IATA: 'BIQ',
    ICAO: 'LFBZ',
    lat: '43.4683333',
    lon: '-1.5311111',
    timezone: '1'
  },
  {
    name: 'Cahors-Lalbenque ',
    city: 'Cahors',
    country: 'France',
    IATA: 'ZAO',
    ICAO: 'LFCC',
    lat: '44.35139846801758',
    lon: '1.4752800464630127',
    timezone: '1'
  },
  {
    name: 'Saint-Girons-Antichan ',
    city: 'St.-girons',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCG',
    lat: '43.0078010559082',
    lon: '1.1031500101089478',
    timezone: '1'
  },
  {
    name: 'Arcachon-La Teste-de-Buch ',
    city: 'Arcachon',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCH',
    lat: '44.596401',
    lon: '-1.11083',
    timezone: '1'
  },
  {
    name: 'Albi-Le S\u00e9questre ',
    city: 'Albi',
    country: 'France',
    IATA: 'LBI',
    ICAO: 'LFCI',
    lat: '43.91389846801758',
    lon: '2.1130599975585938',
    timezone: '1'
  },
  {
    name: 'Castres-Mazamet ',
    city: 'Castres',
    country: 'France',
    IATA: 'DCM',
    ICAO: 'LFCK',
    lat: '43.55630111694336',
    lon: '2.289180040359497',
    timezone: '1'
  },
  {
    name: 'Toulouse-Lasbordes ',
    city: 'Toulouse',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCL',
    lat: '43.58610153198242',
    lon: '1.499169945716858',
    timezone: '1'
  },
  {
    name: 'Millau-Larzac Airfield',
    city: 'Millau',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCM',
    lat: '43.9893',
    lon: '3.183',
    timezone: '1'
  },
  {
    name: 'Graulhet-Montdragon ',
    city: 'Graulhet',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCQ',
    lat: '43.77109909057617',
    lon: '2.0108299255371094',
    timezone: '1'
  },
  {
    name: 'Rodez-Marcillac ',
    city: 'Rodez',
    country: 'France',
    IATA: 'RDZ',
    ICAO: 'LFCR',
    lat: '44.407901763916016',
    lon: '2.4826700687408447',
    timezone: '1'
  },
  {
    name: 'Ussel-Thalamy ',
    city: 'Ussel',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCU',
    lat: '45.534698486328125',
    lon: '2.4238901138305664',
    timezone: '1'
  },
  {
    name: 'Villeneuve-sur-Lot ',
    city: 'Villeneuve-sur-lot',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCW',
    lat: '44.39690017700195',
    lon: '0.7588890194892883',
    timezone: '1'
  },
  {
    name: 'Royan-M\u00e9dis ',
    city: 'Royan',
    country: 'France',
    IATA: 'RYN',
    ICAO: 'LFCY',
    lat: '45.62810134887695',
    lon: '-0.9725000262260437',
    timezone: '1'
  },
  {
    name: 'Mimizan ',
    city: 'Mimizan',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCZ',
    lat: '44.145928',
    lon: '-1.16432',
    timezone: '1'
  },
  {
    name: "Aire-sur-l'Adour ",
    city: "Aire-sur-l'adour",
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFDA',
    lat: '43.70940017700195',
    lon: '-0.245278000831604',
    timezone: '1'
  },
  {
    name: 'Montauban ',
    city: 'Montauban',
    country: 'France',
    IATA: 'XMW',
    ICAO: 'LFDB',
    lat: '44.025699615478516',
    lon: '1.3780399560928345',
    timezone: '1'
  },
  {
    name: 'Auch-Lamothe ',
    city: 'Auch',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFDH',
    lat: '43.687801',
    lon: '0.601667',
    timezone: '1'
  },
  {
    name: 'Libourne-Artigues-de-Lussac ',
    city: 'Libourne',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFDI',
    lat: '44.982498',
    lon: '-0.134722',
    timezone: '1'
  },
  {
    name: 'Pamiers-Les Pujols ',
    city: 'Pamiers',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFDJ',
    lat: '43.090599060058594',
    lon: '1.69582998752594',
    timezone: '1'
  },
  {
    name: 'Marmande-Virazeil ',
    city: 'Marmande',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFDM',
    lat: '44.4989013671875',
    lon: '0.20051400363445282',
    timezone: '1'
  },
  {
    name: 'Rochefort-Saint-Agnant (BA 721) ',
    city: 'Rochefort',
    country: 'France',
    IATA: 'RCO',
    ICAO: 'LFDN',
    lat: '45.88779830932617',
    lon: '-0.9830560088157654',
    timezone: '1'
  },
  {
    name: 'Pontivy ',
    city: 'Pontivy',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFED',
    lat: '48.05849838256836',
    lon: '-2.92182993888855',
    timezone: '1'
  },
  {
    name: 'Aubigny-sur-N\u00e8re ',
    city: 'Aubigny-sur-nere',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFEH',
    lat: '47.480556',
    lon: '2.394167',
    timezone: '1'
  },
  {
    name: 'Guiscriff Scaer ',
    city: 'Guiscriff-scaer',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFES',
    lat: '48.0525016784668',
    lon: '-3.664720058441162',
    timezone: '1'
  },
  {
    name: 'Ancenis ',
    city: 'Ancenis',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFFI',
    lat: '47.40810012817383',
    lon: '-1.1775000095367432',
    timezone: '1'
  },
  {
    name: 'Brienne-le-Ch\u00e2teau ',
    city: 'Brienne-le Chateau',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFFN',
    lat: '48.4297981262207',
    lon: '4.48222017288208',
    timezone: '1'
  },
  {
    name: 'Colmar-Houssen ',
    city: 'Colmar',
    country: 'France',
    IATA: 'CMR',
    ICAO: 'LFGA',
    lat: '48.109901428222656',
    lon: '7.359010219573975',
    timezone: '1'
  },
  {
    name: 'Beaune-Challanges ',
    city: 'Beaune',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFGF',
    lat: '47.005901',
    lon: '4.89342',
    timezone: '1'
  },
  {
    name: 'Dole-Tavaux ',
    city: 'Dole',
    country: 'France',
    IATA: 'DLE',
    ICAO: 'LFGJ',
    lat: '47.042686',
    lon: '5.435063',
    timezone: '1'
  },
  {
    name: 'Joigny ',
    city: 'Joigny',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFGK',
    lat: '47.9921989440918',
    lon: '3.3922200202941895',
    timezone: '1'
  },
  {
    name: 'Verdun-Le Rozelier Airfield',
    city: 'Verdun',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFGW',
    lat: '49.122398',
    lon: '5.46905',
    timezone: '1'
  },
  {
    name: 'Aubenas-Ard\u00e8che M\u00e9ridional ',
    city: 'Aubenas-vals-lanas',
    country: 'France',
    IATA: 'OBS',
    ICAO: 'LFHO',
    lat: '44.544203',
    lon: '4.372192',
    timezone: '1'
  },
  {
    name: 'Le Puy-Loudes ',
    city: 'Le Puy',
    country: 'France',
    IATA: 'LPY',
    ICAO: 'LFHP',
    lat: '45.0806999206543',
    lon: '3.762890100479126',
    timezone: '1'
  },
  {
    name: 'Saint-Flour-Coltines ',
    city: 'St.-flour',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFHQ',
    lat: '45.07640075683594',
    lon: '2.99360990524292',
    timezone: '1'
  },
  {
    name: 'Bourg-Ceyz\u00e9riat ',
    city: 'Bourg',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFHS',
    lat: '46.20090103149414',
    lon: '5.292029857635498',
    timezone: '1'
  },
  {
    name: 'Villefranche-Tarare ',
    city: 'Vilefrance',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFHV',
    lat: '45.919983',
    lon: '4.634931',
    timezone: '1'
  },
  {
    name: 'Moulins-Montbeugny ',
    city: 'Moulins',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFHY',
    lat: '46.53459930419922',
    lon: '3.423719882965088',
    timezone: '1'
  },
  {
    name: 'Saint-Affrique-Belmont ',
    city: 'St.-afrique-belmont',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFIF',
    lat: '43.823299407958984',
    lon: '2.7452800273895264',
    timezone: '1'
  },
  {
    name: 'Cassagnes-B\u00e9gonh\u00e8s ',
    city: 'Cassagnes-beghones',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFIG',
    lat: '44.177799224853516',
    lon: '2.515000104904175',
    timezone: '1'
  },
  {
    name: 'Metz-Nancy-Lorraine ',
    city: 'Metz',
    country: 'France',
    IATA: 'ETZ',
    ICAO: 'LFJL',
    lat: '48.9821014404',
    lon: '6.25131988525',
    timezone: '1'
  },
  {
    name: 'Bastia-Poretta ',
    city: 'Bastia',
    country: 'France',
    IATA: 'BIA',
    ICAO: 'LFKB',
    lat: '42.55270004272461',
    lon: '9.48373031616211',
    timezone: '1'
  },
  {
    name: 'Calvi-Sainte-Catherine ',
    city: 'Calvi',
    country: 'France',
    IATA: 'CLY',
    ICAO: 'LFKC',
    lat: '42.5244444',
    lon: '8.7930556',
    timezone: '1'
  },
  {
    name: 'Figari Sud-Corse ',
    city: 'Figari',
    country: 'France',
    IATA: 'FSC',
    ICAO: 'LFKF',
    lat: '41.5005989074707',
    lon: '9.097780227661133',
    timezone: '1'
  },
  {
    name: 'Ajaccio-Napol\u00e9on Bonaparte ',
    city: 'Ajaccio',
    country: 'France',
    IATA: 'AJA',
    ICAO: 'LFKJ',
    lat: '41.92359924316406',
    lon: '8.8029203414917',
    timezone: '1'
  },
  {
    name: 'Propriano ',
    city: 'Propriano',
    country: 'France',
    IATA: 'PRP',
    ICAO: 'LFKO',
    lat: '41.66059875488281',
    lon: '8.889749526977539',
    timezone: '1'
  },
  {
    name: 'Solenzara (BA 126) Air Base',
    city: 'Solenzara',
    country: 'France',
    IATA: 'SOZ',
    ICAO: 'LFKS',
    lat: '41.924400329589844',
    lon: '9.406000137329102',
    timezone: '1'
  },
  {
    name: 'Corte ',
    city: 'Corte',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFKT',
    lat: '42.29359817504883',
    lon: '9.193059921264648',
    timezone: '1'
  },
  {
    name: 'Auxerre-Branches ',
    city: 'Auxerre',
    country: 'France',
    IATA: 'AUF',
    ICAO: 'LFLA',
    lat: '47.85020065307617',
    lon: '3.497109889984131',
    timezone: '1'
  },
  {
    name: 'Chamb\u00e9ry-Savoie ',
    city: 'Chambery',
    country: 'France',
    IATA: 'CMF',
    ICAO: 'LFLB',
    lat: '45.638099670410156',
    lon: '5.880229949951172',
    timezone: '1'
  },
  {
    name: 'Clermont-Ferrand Auvergne ',
    city: 'Clermont-Ferrand',
    country: 'France',
    IATA: 'CFE',
    ICAO: 'LFLC',
    lat: '45.7867012024',
    lon: '3.1691699028',
    timezone: '1'
  },
  {
    name: 'Bourges ',
    city: 'Bourges',
    country: 'France',
    IATA: 'BOU',
    ICAO: 'LFLD',
    lat: '47.058101654052734',
    lon: '2.3702800273895264',
    timezone: '1'
  },
  {
    name: 'Chamb\u00e9ry-Challes-les-Eaux ',
    city: 'Chambery',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFLE',
    lat: '45.5611000061',
    lon: '5.975759983060001',
    timezone: '1'
  },
  {
    name: 'Chalon-Champforgeuil ',
    city: 'Chalon',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFLH',
    lat: '46.82609939575195',
    lon: '4.817629814147949',
    timezone: '1'
  },
  {
    name: 'Annemasse ',
    city: 'Annemasse',
    country: 'France',
    IATA: 'QNJ',
    ICAO: 'LFLI',
    lat: '46.1920013428',
    lon: '6.268390178680001',
    timezone: '1'
  },
  {
    name: 'Lyon Saint-Exup\u00e9ry ',
    city: 'Lyon',
    country: 'France',
    IATA: 'LYS',
    ICAO: 'LFLL',
    lat: '45.725556',
    lon: '5.081111',
    timezone: '1'
  },
  {
    name: 'M\u00e2con-Charnay ',
    city: 'Macon',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFLM',
    lat: '46.295101',
    lon: '4.79577',
    timezone: '1'
  },
  {
    name: 'Saint-Yan ',
    city: 'St.-yan',
    country: 'France',
    IATA: 'SYT',
    ICAO: 'LFLN',
    lat: '46.412498474121094',
    lon: '4.0132598876953125',
    timezone: '1'
  },
  {
    name: 'Roanne-Renaison ',
    city: 'Roanne',
    country: 'France',
    IATA: 'RNE',
    ICAO: 'LFLO',
    lat: '46.05830001831055',
    lon: '4.001389980316162',
    timezone: '1'
  },
  {
    name: 'Annecy-Haute-Savoie-Mont Blanc ',
    city: 'Annecy',
    country: 'France',
    IATA: 'NCY',
    ICAO: 'LFLP',
    lat: '45.9308333',
    lon: '6.1063889',
    timezone: '1'
  },
  {
    name: 'Grenoble-Is\u00e8re ',
    city: 'Grenoble',
    country: 'France',
    IATA: 'GNB',
    ICAO: 'LFLS',
    lat: '45.36289978027344',
    lon: '5.329370021820068',
    timezone: '1'
  },
  {
    name: 'Montlu\u00e7on-Dom\u00e9rat ',
    city: 'Montlucon',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFLT',
    lat: '46.352501',
    lon: '2.57049',
    timezone: '1'
  },
  {
    name: 'Valence-Chabeuil ',
    city: 'Valence',
    country: 'France',
    IATA: 'VAF',
    ICAO: 'LFLU',
    lat: '44.9216',
    lon: '4.9699',
    timezone: '1'
  },
  {
    name: 'Vichy-Charmeil ',
    city: 'Vichy',
    country: 'France',
    IATA: 'VHY',
    ICAO: 'LFLV',
    lat: '46.169700622558594',
    lon: '3.4037399291992188',
    timezone: '1'
  },
  {
    name: 'Aurillac ',
    city: 'Aurillac',
    country: 'France',
    IATA: 'AUR',
    ICAO: 'LFLW',
    lat: '44.89139938354492',
    lon: '2.4219400882720947',
    timezone: '1'
  },
  {
    name: 'Ch\u00e2teauroux-D\u00e9ols Marcel Dassault ',
    city: 'Chateauroux',
    country: 'France',
    IATA: 'CHR',
    ICAO: 'LFLX',
    lat: '46.860278',
    lon: '1.721111',
    timezone: '1'
  },
  {
    name: 'Lyon-Bron ',
    city: 'Lyon',
    country: 'France',
    IATA: 'LYN',
    ICAO: 'LFLY',
    lat: '45.72719955444336',
    lon: '4.944270133972168',
    timezone: '1'
  },
  {
    name: 'Aix-en-Provence (BA 114) ',
    city: 'Aix-les-milles',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMA',
    lat: '43.5056',
    lon: '5.36778',
    timezone: '1'
  },
  {
    name: 'Le Luc-Le Cannet ',
    city: 'Le Luc',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMC',
    lat: '43.384700775146484',
    lon: '6.387139797210693',
    timezone: '1'
  },
  {
    name: 'Cannes-Mandelieu ',
    city: 'Cannes',
    country: 'France',
    IATA: 'CEQ',
    ICAO: 'LFMD',
    lat: '43.542',
    lon: '6.95348',
    timezone: '1'
  },
  {
    name: 'Saint-\u00c9tienne-Bouth\u00e9on ',
    city: 'St-Etienne',
    country: 'France',
    IATA: 'EBU',
    ICAO: 'LFMH',
    lat: '45.54059982299805',
    lon: '4.296390056610107',
    timezone: '1'
  },
  {
    name: 'Istres Le Tub\u00e9/Istres Air Base (BA 125) ',
    city: 'Istres',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMI',
    lat: '43.522701',
    lon: '4.92384',
    timezone: '1'
  },
  {
    name: 'Carcassonne ',
    city: 'Carcassonne',
    country: 'France',
    IATA: 'CCF',
    ICAO: 'LFMK',
    lat: '43.215999603271484',
    lon: '2.3063199520111084',
    timezone: '1'
  },
  {
    name: 'Marseille Provence ',
    city: 'Marseille',
    country: 'France',
    IATA: 'MRS',
    ICAO: 'LFML',
    lat: '43.439271922',
    lon: '5.22142410278',
    timezone: '1'
  },
  {
    name: "Nice-C\u00f4te d'Azur ",
    city: 'Nice',
    country: 'France',
    IATA: 'NCE',
    ICAO: 'LFMN',
    lat: '43.6584014893',
    lon: '7.215869903560001',
    timezone: '1'
  },
  {
    name: 'Orange-Caritat (BA 115) Air Base',
    city: 'Orange',
    country: 'France',
    IATA: 'XOG',
    ICAO: 'LFMO',
    lat: '44.140499114990234',
    lon: '4.866720199584961',
    timezone: '1'
  },
  {
    name: 'Perpignan-Rivesaltes (Llaban\u00e8re) ',
    city: 'Perpignan',
    country: 'France',
    IATA: 'PGF',
    ICAO: 'LFMP',
    lat: '42.74039840698242',
    lon: '2.8706700801849365',
    timezone: '1'
  },
  {
    name: 'Le Castellet ',
    city: 'Le Castellet',
    country: 'France',
    IATA: 'CTT',
    ICAO: 'LFMQ',
    lat: '43.252498626708984',
    lon: '5.785190105438232',
    timezone: '1'
  },
  {
    name: 'Al\u00e8s-Deaux ',
    city: 'Ales',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMS',
    lat: '44.069698',
    lon: '4.14212',
    timezone: '1'
  },
  {
    name: 'Montpellier-M\u00e9diterran\u00e9e ',
    city: 'Montpellier',
    country: 'France',
    IATA: 'MPL',
    ICAO: 'LFMT',
    lat: '43.57619857788086',
    lon: '3.96301007270813',
    timezone: '1'
  },
  {
    name: 'B\u00e9ziers-Vias ',
    city: 'Beziers',
    country: 'France',
    IATA: 'BZR',
    ICAO: 'LFMU',
    lat: '43.32350158691406',
    lon: '3.3538999557495117',
    timezone: '1'
  },
  {
    name: 'Avignon-Caumont ',
    city: 'Avignon',
    country: 'France',
    IATA: 'AVN',
    ICAO: 'LFMV',
    lat: '43.90729904174805',
    lon: '4.901830196380615',
    timezone: '1'
  },
  {
    name: 'Salon-de-Provence (BA 701) Air Base',
    city: 'Salon',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMY',
    lat: '43.60639953613281',
    lon: '5.109250068664551',
    timezone: '1'
  },
  {
    name: 'L\u00e9zignan-Corbi\u00e8res Airfield',
    city: 'Lezignan-corbieres',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFMZ',
    lat: '43.1758',
    lon: '2.73417',
    timezone: '1'
  },
  {
    name: 'Mende-Brenoux Airfield',
    city: 'Mende',
    country: 'France',
    IATA: 'MEN',
    ICAO: 'LFNB',
    lat: '44.502102',
    lon: '3.53282',
    timezone: '1'
  },
  {
    name: 'Carpentras ',
    city: 'Carpentras',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFNH',
    lat: '44.02980041503906',
    lon: '5.078060150146484',
    timezone: '1'
  },
  {
    name: 'Avord (BA 702) Air Base',
    city: 'Avord',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFOA',
    lat: '47.053299',
    lon: '2.6325',
    timezone: '1'
  },
  {
    name: 'Paris Beauvais Till\u00e9 ',
    city: 'Beauvais',
    country: 'France',
    IATA: 'BVA',
    ICAO: 'LFOB',
    lat: '49.45439910888672',
    lon: '2.1127800941467285',
    timezone: '1'
  },
  {
    name: 'Ch\u00e2teaudun (BA 279) Air Base',
    city: 'Chateaudun',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFOC',
    lat: '48.058102',
    lon: '1.37662',
    timezone: '1'
  },
  {
    name: 'Saumur-Saint-Florent ',
    city: 'Saumur',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFOD',
    lat: '47.256802',
    lon: '-0.115142',
    timezone: '1'
  },
  {
    name: '\u00c9vreux-Fauville (BA 105) Air Base',
    city: 'Evreux',
    country: 'France',
    IATA: 'EVX',
    ICAO: 'LFOE',
    lat: '49.02870178222656',
    lon: '1.2198599576950073',
    timezone: '1'
  },
  {
    name: 'Le Havre Octeville ',
    city: 'Le Havre',
    country: 'France',
    IATA: 'LEH',
    ICAO: 'LFOH',
    lat: '49.53390121459961',
    lon: '0.08805599808692932',
    timezone: '1'
  },
  {
    name: 'Abbeville',
    city: 'Abbeville',
    country: 'France',
    IATA: 'XAB',
    ICAO: 'LFOI',
    lat: '50.143501',
    lon: '1.831891',
    timezone: '1'
  },
  {
    name: 'Orl\u00e9ans-Bricy (BA 123) Air Base',
    city: 'Orleans',
    country: 'France',
    IATA: 'ORE',
    ICAO: 'LFOJ',
    lat: '47.9878005981',
    lon: '1.7605600357100002',
    timezone: '1'
  },
  {
    name: 'Ch\u00e2lons-Vatry ',
    city: 'Chalons',
    country: 'France',
    IATA: 'XCR',
    ICAO: 'LFOK',
    lat: '48.7733333333',
    lon: '4.206111111',
    timezone: '1'
  },
  {
    name: 'Rouen ',
    city: 'Rouen',
    country: 'France',
    IATA: 'URO',
    ICAO: 'LFOP',
    lat: '49.38420104980469',
    lon: '1.1748000383377075',
    timezone: '1'
  },
  {
    name: 'Tours-Val-de-Loire ',
    city: 'Tours',
    country: 'France',
    IATA: 'TUF',
    ICAO: 'LFOT',
    lat: '47.4322013855',
    lon: '0.727605998516',
    timezone: '1'
  },
  {
    name: 'Cholet Le Pontreau ',
    city: 'Cholet',
    country: 'France',
    IATA: 'CET',
    ICAO: 'LFOU',
    lat: '47.08209991455078',
    lon: '-0.8770639896392822',
    timezone: '1'
  },
  {
    name: 'Laval-Entrammes ',
    city: 'Laval',
    country: 'France',
    IATA: 'LVA',
    ICAO: 'LFOV',
    lat: '48.03139877319336',
    lon: '-0.7429860234260559',
    timezone: '1'
  },
  {
    name: "Orl\u00e9ans-Saint-Denis-de-l'H\u00f4tel ",
    city: 'Orleans',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFOZ',
    lat: '47.8969',
    lon: '2.16333',
    timezone: '1'
  },
  {
    name: 'Paris-Le Bourget ',
    city: 'Paris',
    country: 'France',
    IATA: 'LBG',
    ICAO: 'LFPB',
    lat: '48.969398498535156',
    lon: '2.441390037536621',
    timezone: '1'
  },
  {
    name: 'Creil Air Base',
    city: 'Creil',
    country: 'France',
    IATA: 'CSF',
    ICAO: 'LFPC',
    lat: '49.253501892089844',
    lon: '2.5191400051116943',
    timezone: '1'
  },
  {
    name: 'Charles de Gaulle Intl ',
    city: 'Paris',
    country: 'France',
    IATA: 'CDG',
    ICAO: 'LFPG',
    lat: '49.012798',
    lon: '2.55',
    timezone: '1'
  },
  {
    name: 'Coulommiers-Voisins ',
    city: 'Coulommiers',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFPK',
    lat: '48.83769989013672',
    lon: '3.016119956970215',
    timezone: '1'
  },
  {
    name: 'Melun-Villaroche Air Base',
    city: 'Melun',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFPM',
    lat: '48.604698181152344',
    lon: '2.6711199283599854',
    timezone: '1'
  },
  {
    name: 'Toussus-le-Noble ',
    city: 'Toussous-le-noble',
    country: 'France',
    IATA: 'TNF',
    ICAO: 'LFPN',
    lat: '48.75189971923828',
    lon: '2.1061899662017822',
    timezone: '1'
  },
  {
    name: 'Paris-Orly ',
    city: 'Paris',
    country: 'France',
    IATA: 'ORY',
    ICAO: 'LFPO',
    lat: '48.7233333',
    lon: '2.3794444',
    timezone: '1'
  },
  {
    name: 'Pontoise - Cormeilles-en-Vexin ',
    city: 'Pontoise',
    country: 'France',
    IATA: 'POX',
    ICAO: 'LFPT',
    lat: '49.096667',
    lon: '2.040833',
    timezone: '1'
  },
  {
    name: 'Villacoublay-V\u00e9lizy (BA 107) Air Base',
    city: 'Villacoublay',
    country: 'France',
    IATA: 'VIY',
    ICAO: 'LFPV',
    lat: '48.7741667',
    lon: '2.1916667',
    timezone: '1'
  },
  {
    name: 'Reims-Prunay ',
    city: 'Reims',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQA',
    lat: '49.20869827270508',
    lon: '4.156579971313477',
    timezone: '1'
  },
  {
    name: 'Troyes-Barberey ',
    city: 'Troyes',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQB',
    lat: '48.322102',
    lon: '4.0167',
    timezone: '1'
  },
  {
    name: 'Lun\u00e9ville-Croismare ',
    city: 'Luneville',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQC',
    lat: '48.593299865722656',
    lon: '6.543459892272949',
    timezone: '1'
  },
  {
    name: '\u00c9tain-Rouvres Air Base',
    city: 'Etain',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQE',
    lat: '49.226898193359375',
    lon: '5.672220230102539',
    timezone: '1'
  },
  {
    name: 'Autun-Bellevue ',
    city: 'Autun',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQF',
    lat: '46.96730041503906',
    lon: '4.260570049285889',
    timezone: '1'
  },
  {
    name: 'Nevers-Fourchambault ',
    city: 'Nevers',
    country: 'France',
    IATA: 'NVS',
    ICAO: 'LFQG',
    lat: '47.002601623535156',
    lon: '3.1133298873901367',
    timezone: '1'
  },
  {
    name: 'Cambrai-\u00c9pinoy (BA 103) Air Base',
    city: 'Cambrai',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQI',
    lat: '50.221802',
    lon: '3.15424',
    timezone: '1'
  },
  {
    name: 'Maubeuge-\u00c9lesmes ',
    city: 'Maubeuge',
    country: 'France',
    IATA: 'XME',
    ICAO: 'LFQJ',
    lat: '50.31050109863281',
    lon: '4.033120155334473',
    timezone: '1'
  },
  {
    name: 'Besan\u00e7on-La V\u00e8ze ',
    city: 'Besancon-la-veze',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQM',
    lat: '47.2066',
    lon: '6.083681',
    timezone: '1'
  },
  {
    name: 'Phalsbourg-Bourscheid Air Base',
    city: 'Phalsbourg',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQP',
    lat: '48.7680556',
    lon: '7.205',
    timezone: '1'
  },
  {
    name: 'Lille-Lesquin ',
    city: 'Lille',
    country: 'France',
    IATA: 'LIL',
    ICAO: 'LFQQ',
    lat: '50.563332',
    lon: '3.086886',
    timezone: '1'
  },
  {
    name: 'Merville-Calonne ',
    city: 'Merville',
    country: 'France',
    IATA: 'HZB',
    ICAO: 'LFQT',
    lat: '50.61840057373047',
    lon: '2.642240047454834',
    timezone: '1'
  },
  {
    name: 'Charleville-M\u00e9zi\u00e8res ',
    city: 'Charleville',
    country: 'France',
    IATA: 'XCZ',
    ICAO: 'LFQV',
    lat: '49.78390121459961',
    lon: '4.647079944610596',
    timezone: '1'
  },
  {
    name: 'Vesoul-Frotey ',
    city: 'Vesoul-frotey',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFQW',
    lat: '47.6376',
    lon: '6.20392',
    timezone: '1'
  },
  {
    name: 'Brest Bretagne ',
    city: 'Brest',
    country: 'France',
    IATA: 'BES',
    ICAO: 'LFRB',
    lat: '48.447898864746094',
    lon: '-4.418540000915527',
    timezone: '1'
  },
  {
    name: 'Cherbourg-Maupertus ',
    city: 'Cherbourg',
    country: 'France',
    IATA: 'CER',
    ICAO: 'LFRC',
    lat: '49.65010070800781',
    lon: '-1.4702800512313843',
    timezone: '1'
  },
  {
    name: 'Dinard-Pleurtuit-Saint-Malo ',
    city: 'Dinard',
    country: 'France',
    IATA: 'DNR',
    ICAO: 'LFRD',
    lat: '48.58769989013672',
    lon: '-2.0799601078033447',
    timezone: '1'
  },
  {
    name: 'La Baule-Escoublac ',
    city: 'La Baule',
    country: 'France',
    IATA: 'LBY',
    ICAO: 'LFRE',
    lat: '47.289398193359375',
    lon: '-2.3463900089263916',
    timezone: '1'
  },
  {
    name: 'Granville ',
    city: 'Granville',
    country: 'France',
    IATA: 'GFR',
    ICAO: 'LFRF',
    lat: '48.88309860229492',
    lon: '-1.564170002937317',
    timezone: '1'
  },
  {
    name: 'Deauville-Saint-Gatien ',
    city: 'Deauville',
    country: 'France',
    IATA: 'DOL',
    ICAO: 'LFRG',
    lat: '49.3652992249',
    lon: '0.154305994511',
    timezone: '1'
  },
  {
    name: 'Lorient South Brittany (Bretagne Sud) ',
    city: 'Lorient',
    country: 'France',
    IATA: 'LRT',
    ICAO: 'LFRH',
    lat: '47.76060104370117',
    lon: '-3.440000057220459',
    timezone: '1'
  },
  {
    name: 'La Roche-sur-Yon ',
    city: 'La Roche-sur-yon',
    country: 'France',
    IATA: 'EDM',
    ICAO: 'LFRI',
    lat: '46.701900482177734',
    lon: '-1.3786300420761108',
    timezone: '1'
  },
  {
    name: 'Landivisiau Air Base',
    city: 'Landivisiau',
    country: 'France',
    IATA: 'LDV',
    ICAO: 'LFRJ',
    lat: '48.53030014038086',
    lon: '-4.151639938354492',
    timezone: '1'
  },
  {
    name: 'Caen-Carpiquet ',
    city: 'Caen',
    country: 'France',
    IATA: 'CFR',
    ICAO: 'LFRK',
    lat: '49.173301696777344',
    lon: '-0.44999998807907104',
    timezone: '1'
  },
  {
    name: 'Lanv\u00e9oc-Poulmic Air Base',
    city: 'Lanvedoc',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFRL',
    lat: '48.281700134277344',
    lon: '-4.4450201988220215',
    timezone: '1'
  },
  {
    name: 'Le Mans-Arnage ',
    city: 'Le Mans',
    country: 'France',
    IATA: 'LME',
    ICAO: 'LFRM',
    lat: '47.94860076904297',
    lon: '0.20166699588298798',
    timezone: '1'
  },
  {
    name: 'Rennes-Saint-Jacques ',
    city: 'Rennes',
    country: 'France',
    IATA: 'RNS',
    ICAO: 'LFRN',
    lat: '48.069499969499994',
    lon: '-1.73478996754',
    timezone: '1'
  },
  {
    name: 'Lannion-C\u00f4te de Granit ',
    city: 'Lannion',
    country: 'France',
    IATA: 'LAI',
    ICAO: 'LFRO',
    lat: '48.754398',
    lon: '-3.47166',
    timezone: '1'
  },
  {
    name: 'Quimper-Cornouaille ',
    city: 'Quimper',
    country: 'France',
    IATA: 'UIP',
    ICAO: 'LFRQ',
    lat: '47.974998474121094',
    lon: '-4.167789936065674',
    timezone: '1'
  },
  {
    name: 'Nantes Atlantique ',
    city: 'Nantes',
    country: 'France',
    IATA: 'NTE',
    ICAO: 'LFRS',
    lat: '47.153198242200006',
    lon: '-1.61073005199',
    timezone: '1'
  },
  {
    name: 'Saint-Brieuc-Armor ',
    city: 'St.-brieuc Armor',
    country: 'France',
    IATA: 'SBK',
    ICAO: 'LFRT',
    lat: '48.5378',
    lon: '-2.85444',
    timezone: '1'
  },
  {
    name: 'Morlaix-Ploujean ',
    city: 'Morlaix',
    country: 'France',
    IATA: 'MXN',
    ICAO: 'LFRU',
    lat: '48.6031990051',
    lon: '-3.81577992439',
    timezone: '1'
  },
  {
    name: 'Vannes-Meucon ',
    city: 'Vannes',
    country: 'France',
    IATA: 'VNE',
    ICAO: 'LFRV',
    lat: '47.72330093383789',
    lon: '-2.718559980392456',
    timezone: '1'
  },
  {
    name: 'Saint-Nazaire-Montoir ',
    city: 'St.-nazaire',
    country: 'France',
    IATA: 'SNR',
    ICAO: 'LFRZ',
    lat: '47.3105556',
    lon: '-2.1566667',
    timezone: '1'
  },
  {
    name: 'Euro Basel-Mulhouse-Freiburg ',
    city: 'Mulhouse',
    country: 'France',
    IATA: 'BSL',
    ICAO: 'LFSB',
    lat: '47.59',
    lon: '7.5291667',
    timezone: '1'
  },
  {
    name: 'Colmar-Meyenheim Air Base',
    city: 'Colmar',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSC',
    lat: '47.922000885',
    lon: '7.39967012405',
    timezone: '1'
  },
  {
    name: 'Dijon-Bourgogne ',
    city: 'Dijon',
    country: 'France',
    IATA: 'DIJ',
    ICAO: 'LFSD',
    lat: '47.268902',
    lon: '5.09',
    timezone: '1'
  },
  {
    name: 'Metz-Frescaty (BA 128) Air Base',
    city: 'Metz',
    country: 'France',
    IATA: 'MZM',
    ICAO: 'LFSF',
    lat: '49.07170104980469',
    lon: '6.131669998168945',
    timezone: '1'
  },
  {
    name: '\u00c9pinal-Mirecourt ',
    city: 'Epinal',
    country: 'France',
    IATA: 'EPL',
    ICAO: 'LFSG',
    lat: '48.325001',
    lon: '6.06998',
    timezone: '1'
  },
  {
    name: 'Haguenau ',
    city: 'Haguenau',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSH',
    lat: '48.7943000793',
    lon: '7.81760978699',
    timezone: '1'
  },
  {
    name: 'Saint-Dizier-Robinson (BA 113) Air Base',
    city: 'St.-dizier',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSI',
    lat: '48.63600158691406',
    lon: '4.899419784545898',
    timezone: '1'
  },
  {
    name: 'Montb\u00e9liard-Courcelles Airfield',
    city: 'Montbeliard',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSM',
    lat: '47.487',
    lon: '6.79054',
    timezone: '1'
  },
  {
    name: 'Nancy-Essey ',
    city: 'Nancy',
    country: 'France',
    IATA: 'ENC',
    ICAO: 'LFSN',
    lat: '48.692100524902344',
    lon: '6.230460166931152',
    timezone: '1'
  },
  {
    name: 'Nancy-Ochey (BA 133) Air Base',
    city: 'Nancy',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSO',
    lat: '48.583099365234375',
    lon: '5.954999923706055',
    timezone: '1'
  },
  {
    name: 'Pontarlier ',
    city: 'Pontarlier',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSP',
    lat: '46.90399932861328',
    lon: '6.3273701667785645',
    timezone: '1'
  },
  {
    name: 'Reims-Champagne (BA 112) Air Base',
    city: 'Reims',
    country: 'France',
    IATA: 'RHE',
    ICAO: 'LFSR',
    lat: '49.310001',
    lon: '4.05',
    timezone: '1'
  },
  {
    name: 'Strasbourg ',
    city: 'Strasbourg',
    country: 'France',
    IATA: 'SXB',
    ICAO: 'LFST',
    lat: '48.538299560546875',
    lon: '7.628230094909668',
    timezone: '1'
  },
  {
    name: 'Luxeuil-Saint-Sauveur (BA 116) Air Base',
    city: 'Luxeuil',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFSX',
    lat: '47.7830556',
    lon: '6.36416667',
    timezone: '1'
  },
  {
    name: 'Cuers-Pierrefeu ',
    city: 'Cuers',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFTF',
    lat: '43.247798919677734',
    lon: '6.126699924468994',
    timezone: '1'
  },
  {
    name: 'Toulon-Hy\u00e8res ',
    city: 'Hyeres',
    country: 'France',
    IATA: 'TLN',
    ICAO: 'LFTH',
    lat: '43.0973014832',
    lon: '6.14602994919',
    timezone: '1'
  },
  {
    name: 'N\u00eemes-Arles-Camargue ',
    city: 'Nimes',
    country: 'France',
    IATA: 'FNI',
    ICAO: 'LFTW',
    lat: '43.75740051269531',
    lon: '4.4163498878479',
    timezone: '1'
  },
  {
    name: 'Miquelon ',
    city: 'Miquelon',
    country: 'Saint Pierre and Miquelon',
    IATA: 'MQC',
    ICAO: 'LFVM',
    lat: '47.095500946',
    lon: '-56.3802986145',
    timezone: '-3'
  },
  {
    name: 'St Pierre ',
    city: 'St.-pierre',
    country: 'Saint Pierre and Miquelon',
    IATA: 'FSP',
    ICAO: 'LFVP',
    lat: '46.762901306152344',
    lon: '-56.173099517822266',
    timezone: '-3'
  },
  {
    name: 'Amb\u00e9rieu Air Base (BA 278)',
    city: 'Amberieu',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFXA',
    lat: '45.987301',
    lon: '5.32844',
    timezone: '1'
  },
  {
    name: 'Damblain ',
    city: 'Damblain',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFYD',
    lat: '48.086299896240234',
    lon: '5.664060115814209',
    timezone: '1'
  },
  {
    name: 'Andravida Air Base',
    city: 'Andravida',
    country: 'Greece',
    IATA: 'PYR',
    ICAO: 'LGAD',
    lat: '37.9207',
    lon: '21.292601',
    timezone: '2'
  },
  {
    name: 'Agrinion Air Base',
    city: 'Agrinion',
    country: 'Greece',
    IATA: 'AGQ',
    ICAO: 'LGAG',
    lat: '38.602001',
    lon: '21.3512001',
    timezone: '2'
  },
  {
    name: 'Dimokritos ',
    city: 'Alexandroupolis',
    country: 'Greece',
    IATA: 'AXD',
    ICAO: 'LGAL',
    lat: '40.855899810791016',
    lon: '25.956300735473633',
    timezone: '2'
  },
  {
    name: 'Alexandria ',
    city: 'Alexandria',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGAX',
    lat: '40.651100158691406',
    lon: '22.48870086669922',
    timezone: '2'
  },
  {
    name: 'Nea Anchialos ',
    city: 'Nea Anghialos',
    country: 'Greece',
    IATA: 'VOL',
    ICAO: 'LGBL',
    lat: '39.219600677490234',
    lon: '22.794300079345703',
    timezone: '2'
  },
  {
    name: 'Elefsis ',
    city: 'Elefsis',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGEL',
    lat: '38.06380081176758',
    lon: '23.555999755859375',
    timezone: '2'
  },
  {
    name: 'Chios Island National ',
    city: 'Chios',
    country: 'Greece',
    IATA: 'JKH',
    ICAO: 'LGHI',
    lat: '38.34320068359375',
    lon: '26.140600204467773',
    timezone: '2'
  },
  {
    name: 'Ioannina ',
    city: 'Ioannina',
    country: 'Greece',
    IATA: 'IOA',
    ICAO: 'LGIO',
    lat: '39.6963996887207',
    lon: '20.822500228881836',
    timezone: '2'
  },
  {
    name: 'Heraklion Intl Nikos Kazantzakis ',
    city: 'Heraklion',
    country: 'Greece',
    IATA: 'HER',
    ICAO: 'LGIR',
    lat: '35.3396987915',
    lon: '25.180299758900002',
    timezone: '2'
  },
  {
    name: 'Kastoria National ',
    city: 'Kastoria',
    country: 'Greece',
    IATA: 'KSO',
    ICAO: 'LGKA',
    lat: '40.4463005066',
    lon: '21.2821998596',
    timezone: '2'
  },
  {
    name: 'Kithira ',
    city: 'Kithira',
    country: 'Greece',
    IATA: 'KIT',
    ICAO: 'LGKC',
    lat: '36.2742996216',
    lon: '23.0170001984',
    timezone: '2'
  },
  {
    name: 'Kefallinia ',
    city: 'Keffallinia',
    country: 'Greece',
    IATA: 'EFL',
    ICAO: 'LGKF',
    lat: '38.12009811401367',
    lon: '20.500499725341797',
    timezone: '2'
  },
  {
    name: 'Kalamata ',
    city: 'Kalamata',
    country: 'Greece',
    IATA: 'KLX',
    ICAO: 'LGKL',
    lat: '37.06829833984375',
    lon: '22.02549934387207',
    timezone: '2'
  },
  {
    name: 'Amigdhaleon ',
    city: 'Kavala',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGKM',
    lat: '40.972801208496094',
    lon: '24.341400146484375',
    timezone: '2'
  },
  {
    name: 'Kos ',
    city: 'Kos',
    country: 'Greece',
    IATA: 'KGS',
    ICAO: 'LGKO',
    lat: '36.79330062866211',
    lon: '27.091699600219727',
    timezone: '2'
  },
  {
    name: 'Karpathos ',
    city: 'Karpathos',
    country: 'Greece',
    IATA: 'AOK',
    ICAO: 'LGKP',
    lat: '35.4213981628418',
    lon: '27.145999908447266',
    timezone: '2'
  },
  {
    name: 'Ioannis Kapodistrias Intl ',
    city: 'Kerkyra/corfu',
    country: 'Greece',
    IATA: 'CFU',
    ICAO: 'LGKR',
    lat: '39.601898193359375',
    lon: '19.911699295043945',
    timezone: '2'
  },
  {
    name: 'Kasos ',
    city: 'Kasos',
    country: 'Greece',
    IATA: 'KSJ',
    ICAO: 'LGKS',
    lat: '35.4213981628',
    lon: '26.909999847399998',
    timezone: '2'
  },
  {
    name: 'Alexander the Great Intl ',
    city: 'Kavala',
    country: 'Greece',
    IATA: 'KVA',
    ICAO: 'LGKV',
    lat: '40.913299560546875',
    lon: '24.619199752807617',
    timezone: '2'
  },
  {
    name: 'Filippos ',
    city: 'Kozani',
    country: 'Greece',
    IATA: 'KZI',
    ICAO: 'LGKZ',
    lat: '40.28609848022461',
    lon: '21.84079933166504',
    timezone: '2'
  },
  {
    name: 'Leros ',
    city: 'Leros',
    country: 'Greece',
    IATA: 'LRS',
    ICAO: 'LGLE',
    lat: '37.184898',
    lon: '26.800301',
    timezone: '2'
  },
  {
    name: 'Limnos ',
    city: 'Limnos',
    country: 'Greece',
    IATA: 'LXS',
    ICAO: 'LGLM',
    lat: '39.917098999',
    lon: '25.236299514799995',
    timezone: '2'
  },
  {
    name: 'Larisa ',
    city: 'Larissa',
    country: 'Greece',
    IATA: 'LRA',
    ICAO: 'LGLR',
    lat: '39.650253',
    lon: '22.4655',
    timezone: '2'
  },
  {
    name: 'Megara ',
    city: 'Megara',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGMG',
    lat: '37.98109817504883',
    lon: '23.365400314331055',
    timezone: '2'
  },
  {
    name: 'Mikonos ',
    city: 'Mykonos',
    country: 'Greece',
    IATA: 'JMK',
    ICAO: 'LGMK',
    lat: '37.43510055541992',
    lon: '25.348100662231445',
    timezone: '2'
  },
  {
    name: 'Mytilene Intl ',
    city: 'Mytilini',
    country: 'Greece',
    IATA: 'MJT',
    ICAO: 'LGMT',
    lat: '39.0567016602',
    lon: '26.5983009338',
    timezone: '2'
  },
  {
    name: 'Aktion National ',
    city: 'Preveza',
    country: 'Greece',
    IATA: 'PVK',
    ICAO: 'LGPZ',
    lat: '38.925498962402344',
    lon: '20.765300750732422',
    timezone: '2'
  },
  {
    name: 'Maritsa ',
    city: 'Rhodos',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGRD',
    lat: '36.38309860229492',
    lon: '28.10890007019043',
    timezone: '2'
  },
  {
    name: 'Diagoras ',
    city: 'Rhodos',
    country: 'Greece',
    IATA: 'RHO',
    ICAO: 'LGRP',
    lat: '36.405399322509766',
    lon: '28.086200714111328',
    timezone: '2'
  },
  {
    name: 'Araxos ',
    city: 'Patras',
    country: 'Greece',
    IATA: 'GPA',
    ICAO: 'LGRX',
    lat: '38.1511',
    lon: '21.4256',
    timezone: '2'
  },
  {
    name: 'Chania Intl ',
    city: 'Chania',
    country: 'Greece',
    IATA: 'CHQ',
    ICAO: 'LGSA',
    lat: '35.531700134277344',
    lon: '24.149700164794922',
    timezone: '2'
  },
  {
    name: 'Skiathos Island National ',
    city: 'Skiathos',
    country: 'Greece',
    IATA: 'JSI',
    ICAO: 'LGSK',
    lat: '39.177101135253906',
    lon: '23.503700256347656',
    timezone: '2'
  },
  {
    name: 'Samos ',
    city: 'Samos',
    country: 'Greece',
    IATA: 'SMI',
    ICAO: 'LGSM',
    lat: '37.689998626708984',
    lon: '26.911699295043945',
    timezone: '2'
  },
  {
    name: 'Sparti ',
    city: 'Sparti',
    country: 'Greece',
    IATA: 'SPJ',
    ICAO: 'LGSP',
    lat: '36.973899841308594',
    lon: '22.52630043029785',
    timezone: '2'
  },
  {
    name: 'Santorini ',
    city: 'Thira',
    country: 'Greece',
    IATA: 'JTR',
    ICAO: 'LGSR',
    lat: '36.399200439453125',
    lon: '25.479299545288086',
    timezone: '2'
  },
  {
    name: 'Sitia ',
    city: 'Sitia',
    country: 'Greece',
    IATA: 'JSH',
    ICAO: 'LGST',
    lat: '35.21609878540039',
    lon: '26.101299285888672',
    timezone: '2'
  },
  {
    name: 'Stefanovikion Air Base',
    city: 'Stefanovikion',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGSV',
    lat: '39.48',
    lon: '22.7672',
    timezone: '2'
  },
  {
    name: 'Skiros ',
    city: 'Skiros',
    country: 'Greece',
    IATA: 'SKU',
    ICAO: 'LGSY',
    lat: '38.9676017761',
    lon: '24.4871997833',
    timezone: '2'
  },
  {
    name: 'Tanagra Air Base',
    city: 'Tanagra',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGTG',
    lat: '38.339802',
    lon: '23.565001',
    timezone: '2'
  },
  {
    name: 'Kasteli ',
    city: 'Kasteli',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGTL',
    lat: '35.192001',
    lon: '25.327',
    timezone: '2'
  },
  {
    name: 'Tripolis ',
    city: 'Tripolis',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGTP',
    lat: '37.530601501464844',
    lon: '22.403600692749023',
    timezone: '2'
  },
  {
    name: 'Thessaloniki Macedonia Intl ',
    city: 'Thessaloniki',
    country: 'Greece',
    IATA: 'SKG',
    ICAO: 'LGTS',
    lat: '40.51969909667969',
    lon: '22.97089958190918',
    timezone: '2'
  },
  {
    name: 'Tatoi ',
    city: 'Dekelia',
    country: 'Greece',
    IATA: '\\N',
    ICAO: 'LGTT',
    lat: '38.1088981628418',
    lon: '23.78380012512207',
    timezone: '2'
  },
  {
    name: 'Zakynthos Intl  Dionysios Solomos',
    city: 'Zakynthos',
    country: 'Greece',
    IATA: 'ZTH',
    ICAO: 'LGZA',
    lat: '37.7509',
    lon: '20.8843',
    timezone: '2'
  },
  {
    name: 'Budapest Liszt Ferenc Intl ',
    city: 'Budapest',
    country: 'Hungary',
    IATA: 'BUD',
    ICAO: 'LHBP',
    lat: '47.42976',
    lon: '19.261093',
    timezone: '1'
  },
  {
    name: 'Debrecen Intl ',
    city: 'Debrecen',
    country: 'Hungary',
    IATA: 'DEB',
    ICAO: 'LHDC',
    lat: '47.48889923095703',
    lon: '21.615299224853516',
    timezone: '1'
  },
  {
    name: 'Kecskem\u00e9t ',
    city: 'Kecskemet',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHKE',
    lat: '46.91749954223633',
    lon: '19.74920082092285',
    timezone: '1'
  },
  {
    name: 'Ny\u00edregyh\u00e1za ',
    city: 'Nyirregyhaza',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHNY',
    lat: '47.9838981628418',
    lon: '21.69230079650879',
    timezone: '1'
  },
  {
    name: '\u0150cs\u00e9ny ',
    city: 'Ocseny',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHOY',
    lat: '46.30390167236328',
    lon: '18.76919937133789',
    timezone: '1'
  },
  {
    name: 'Szentkir\u00e1lyszabadja ',
    city: 'Azentkilyszabadja',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHSA',
    lat: '47.07789993286133',
    lon: '17.968399047851562',
    timezone: '1'
  },
  {
    name: 'Szolnok Air Base',
    city: 'Szolnok',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHSN',
    lat: '47.122897',
    lon: '20.2355',
    timezone: '1'
  },
  {
    name: 'Amendola Air Base',
    city: 'Amendola',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIBA',
    lat: '41.541401',
    lon: '15.7181',
    timezone: '1'
  },
  {
    name: 'Crotone ',
    city: 'Crotone',
    country: 'Italy',
    IATA: 'CRV',
    ICAO: 'LIBC',
    lat: '38.9972',
    lon: '17.0802',
    timezone: '1'
  },
  {
    name: 'Bari Karol Wojty\u0142a ',
    city: 'Bari',
    country: 'Italy',
    IATA: 'BRI',
    ICAO: 'LIBD',
    lat: '41.138901',
    lon: '16.760599',
    timezone: '1'
  },
  {
    name: 'Foggia Gino Lisa ',
    city: 'Foggia',
    country: 'Italy',
    IATA: 'FOG',
    ICAO: 'LIBF',
    lat: '41.432899',
    lon: '15.535',
    timezone: '1'
  },
  {
    name: 'Taranto-Grottaglie Marcello Arlotta ',
    city: 'Grottaglie',
    country: 'Italy',
    IATA: 'TAR',
    ICAO: 'LIBG',
    lat: '40.517502',
    lon: '17.4032',
    timezone: '1'
  },
  {
    name: 'Lecce Galatina Air Base',
    city: 'Lecce',
    country: 'Italy',
    IATA: 'LCC',
    ICAO: 'LIBN',
    lat: '40.239201',
    lon: '18.133301',
    timezone: '1'
  },
  {
    name: 'Pescara Intl ',
    city: 'Pescara',
    country: 'Italy',
    IATA: 'PSR',
    ICAO: 'LIBP',
    lat: '42.431702',
    lon: '14.1811',
    timezone: '1'
  },
  {
    name: 'Brindisi \u2013 Salento ',
    city: 'Brindisi',
    country: 'Italy',
    IATA: 'BDS',
    ICAO: 'LIBR',
    lat: '40.6576',
    lon: '17.947001',
    timezone: '1'
  },
  {
    name: 'Gioia Del Colle Air Base',
    city: 'Gioia Del Colle',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIBV',
    lat: '40.767799',
    lon: '16.9333',
    timezone: '1'
  },
  {
    name: 'Lamezia Terme ',
    city: 'Lamezia',
    country: 'Italy',
    IATA: 'SUF',
    ICAO: 'LICA',
    lat: '38.905399',
    lon: '16.2423',
    timezone: '1'
  },
  {
    name: 'Catania-Fontanarossa ',
    city: 'Catania',
    country: 'Italy',
    IATA: 'CTA',
    ICAO: 'LICC',
    lat: '37.466801',
    lon: '15.0664',
    timezone: '1'
  },
  {
    name: 'Lampedusa ',
    city: 'Lampedusa',
    country: 'Italy',
    IATA: 'LMP',
    ICAO: 'LICD',
    lat: '35.497898',
    lon: '12.6181',
    timezone: '1'
  },
  {
    name: 'Pantelleria ',
    city: 'Pantelleria',
    country: 'Italy',
    IATA: 'PNL',
    ICAO: 'LICG',
    lat: '36.816502',
    lon: '11.9689',
    timezone: '1'
  },
  {
    name: 'Falcone\u2013Borsellino ',
    city: 'Palermo',
    country: 'Italy',
    IATA: 'PMO',
    ICAO: 'LICJ',
    lat: '38.175999',
    lon: '13.091',
    timezone: '1'
  },
  {
    name: 'Palermo-Boccadifalco ',
    city: 'Palermo',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LICP',
    lat: '38.110802',
    lon: '13.3133',
    timezone: '1'
  },
  {
    name: 'Reggio Calabria ',
    city: 'Reggio Calabria',
    country: 'Italy',
    IATA: 'REG',
    ICAO: 'LICR',
    lat: '38.071201',
    lon: '15.6516',
    timezone: '1'
  },
  {
    name: 'Vincenzo Florio  Trapani-Birgi',
    city: 'Trapani',
    country: 'Italy',
    IATA: 'TPS',
    ICAO: 'LICT',
    lat: '37.9114',
    lon: '12.488',
    timezone: '1'
  },
  {
    name: 'Sigonella Navy Air Base',
    city: 'Sigonella',
    country: 'Italy',
    IATA: 'NSY',
    ICAO: 'LICZ',
    lat: '37.401699',
    lon: '14.9224',
    timezone: '1'
  },
  {
    name: 'Alghero-Fertilia ',
    city: 'Alghero',
    country: 'Italy',
    IATA: 'AHO',
    ICAO: 'LIEA',
    lat: '40.632099',
    lon: '8.29077',
    timezone: '1'
  },
  {
    name: 'Decimomannu Air Base',
    city: 'Decimomannu',
    country: 'Italy',
    IATA: 'DCI',
    ICAO: 'LIED',
    lat: '39.354198',
    lon: '8.97248',
    timezone: '1'
  },
  {
    name: 'Cagliari Elmas ',
    city: 'Cagliari',
    country: 'Italy',
    IATA: 'CAG',
    ICAO: 'LIEE',
    lat: '39.251499',
    lon: '9.05428',
    timezone: '1'
  },
  {
    name: 'Olbia Costa Smeralda ',
    city: 'Olbia',
    country: 'Italy',
    IATA: 'OLB',
    ICAO: 'LIEO',
    lat: '40.898701',
    lon: '9.51763',
    timezone: '1'
  },
  {
    name: 'Tortol\u00ec ',
    city: 'Tortoli',
    country: 'Italy',
    IATA: 'TTB',
    ICAO: 'LIET',
    lat: '39.9188',
    lon: '9.68298',
    timezone: '1'
  },
  {
    name: 'Torino-Aeritalia ',
    city: 'Turin',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIMA',
    lat: '45.086399',
    lon: '7.60337',
    timezone: '1'
  },
  {
    name: 'Milano-Bresso Airfield',
    city: 'Milano',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIMB',
    lat: '45.542198',
    lon: '9.20333',
    timezone: '1'
  },
  {
    name: 'Malpensa Intl ',
    city: 'Milano',
    country: 'Italy',
    IATA: 'MXP',
    ICAO: 'LIMC',
    lat: '45.6306',
    lon: '8.72811',
    timezone: '1'
  },
  {
    name: 'Il Caravaggio Intl ',
    city: 'Bergamo',
    country: 'Italy',
    IATA: 'BGY',
    ICAO: 'LIME',
    lat: '45.673901',
    lon: '9.70417',
    timezone: '1'
  },
  {
    name: 'Turin ',
    city: 'Torino',
    country: 'Italy',
    IATA: 'TRN',
    ICAO: 'LIMF',
    lat: '45.200802',
    lon: '7.64963',
    timezone: '1'
  },
  {
    name: "Villanova D'Albenga Intl ",
    city: 'Albenga',
    country: 'Italy',
    IATA: 'ALL',
    ICAO: 'LIMG',
    lat: '44.050598',
    lon: '8.12743',
    timezone: '1'
  },
  {
    name: 'Genoa Cristoforo Colombo ',
    city: 'Genoa',
    country: 'Italy',
    IATA: 'GOA',
    ICAO: 'LIMJ',
    lat: '44.4133',
    lon: '8.8375',
    timezone: '1'
  },
  {
    name: 'Milano Linate ',
    city: 'Milan',
    country: 'Italy',
    IATA: 'LIN',
    ICAO: 'LIML',
    lat: '45.445099',
    lon: '9.27674',
    timezone: '1'
  },
  {
    name: 'Cameri Air Base [MIL]',
    city: 'Cameri',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIMN',
    lat: '45.529598',
    lon: '8.66922',
    timezone: '1'
  },
  {
    name: 'Parma ',
    city: 'Parma',
    country: 'Italy',
    IATA: 'PMF',
    ICAO: 'LIMP',
    lat: '44.824501',
    lon: '10.2964',
    timezone: '1'
  },
  {
    name: 'Piacenza San Damiano Air Base',
    city: 'Piacenza',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIMS',
    lat: '44.913102',
    lon: '9.723322',
    timezone: '1'
  },
  {
    name: 'Cuneo Intl ',
    city: 'Cuneo',
    country: 'Italy',
    IATA: 'CUF',
    ICAO: 'LIMZ',
    lat: '44.547001',
    lon: '7.62322',
    timezone: '1'
  },
  {
    name: 'Aviano Air Base',
    city: 'Aviano',
    country: 'Italy',
    IATA: 'AVB',
    ICAO: 'LIPA',
    lat: '46.031898',
    lon: '12.596503',
    timezone: '1'
  },
  {
    name: 'Bolzano ',
    city: 'Bolzano',
    country: 'Italy',
    IATA: 'BZO',
    ICAO: 'LIPB',
    lat: '46.460201',
    lon: '11.3264',
    timezone: '1'
  },
  {
    name: 'Cervia Air Base',
    city: 'Cervia',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIPC',
    lat: '44.224201',
    lon: '12.3072',
    timezone: '1'
  },
  {
    name: 'Bologna Guglielmo Marconi ',
    city: 'Bologna',
    country: 'Italy',
    IATA: 'BLQ',
    ICAO: 'LIPE',
    lat: '44.5354',
    lon: '11.2887',
    timezone: '1'
  },
  {
    name: "Treviso-Sant'Angelo ",
    city: 'Treviso',
    country: 'Italy',
    IATA: 'TSF',
    ICAO: 'LIPH',
    lat: '45.648399',
    lon: '12.1944',
    timezone: '1'
  },
  {
    name: 'Rivolto Air Base',
    city: 'Rivolto',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIPI',
    lat: '45.978699',
    lon: '13.0493',
    timezone: '1'
  },
  {
    name: 'Forl\u00ec ',
    city: 'Forli',
    country: 'Italy',
    IATA: 'FRL',
    ICAO: 'LIPK',
    lat: '44.194801',
    lon: '12.0701',
    timezone: '1'
  },
  {
    name: 'Ghedi Air Base',
    city: 'Ghedi',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIPL',
    lat: '45.432201',
    lon: '10.2677',
    timezone: '1'
  },
  {
    name: 'Verona-Boscomantico ',
    city: 'Verona',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIPN',
    lat: '45.472',
    lon: '10.9279',
    timezone: '1'
  },
  {
    name: 'Brescia ',
    city: 'Brescia',
    country: 'Italy',
    IATA: 'VBS',
    ICAO: 'LIPO',
    lat: '45.428902',
    lon: '10.3306',
    timezone: '1'
  },
  {
    name: 'Trieste\u2013Friuli Venezia Giulia ',
    city: 'Ronchi De Legionari',
    country: 'Italy',
    IATA: 'TRS',
    ICAO: 'LIPQ',
    lat: '45.827499',
    lon: '13.4722',
    timezone: '1'
  },
  {
    name: 'Federico Fellini Intl ',
    city: 'Rimini',
    country: 'Italy',
    IATA: 'RMI',
    ICAO: 'LIPR',
    lat: '44.020302',
    lon: '12.6117',
    timezone: '1'
  },
  {
    name: 'Istrana Air Base',
    city: 'Treviso',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIPS',
    lat: '45.684898',
    lon: '12.0829',
    timezone: '1'
  },
  {
    name: 'Vicenza ',
    city: 'Vicenza',
    country: 'Italy',
    IATA: 'VIC',
    ICAO: 'LIPT',
    lat: '45.573399',
    lon: '11.5295',
    timezone: '1'
  },
  {
    name: 'Padova ',
    city: 'Padova',
    country: 'Italy',
    IATA: 'QPA',
    ICAO: 'LIPU',
    lat: '45.395802',
    lon: '11.8479',
    timezone: '1'
  },
  {
    name: 'Verona Villafranca ',
    city: 'Villafranca',
    country: 'Italy',
    IATA: 'VRN',
    ICAO: 'LIPX',
    lat: '45.395699',
    lon: '10.8885',
    timezone: '1'
  },
  {
    name: 'Venice Marco Polo ',
    city: 'Venice',
    country: 'Italy',
    IATA: 'VCE',
    ICAO: 'LIPZ',
    lat: '45.505299',
    lon: '12.3519',
    timezone: '1'
  },
  {
    name: 'Siena-Ampugnano ',
    city: 'Siena',
    country: 'Italy',
    IATA: 'SAY',
    ICAO: 'LIQS',
    lat: '43.256302',
    lon: '11.255',
    timezone: '1'
  },
  {
    name: 'Ciampino\u2013G. B. Pastine Intl ',
    city: 'Rome',
    country: 'Italy',
    IATA: 'CIA',
    ICAO: 'LIRA',
    lat: '41.7994',
    lon: '12.5949',
    timezone: '1'
  },
  {
    name: 'Pratica Di Mare Air Base',
    city: 'Pratica Di Mare',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIRE',
    lat: '41.654499',
    lon: '12.4452',
    timezone: '1'
  },
  {
    name: 'Leonardo da Vinci\u2013Fiumicino ',
    city: 'Rome',
    country: 'Italy',
    IATA: 'FCO',
    ICAO: 'LIRF',
    lat: '41.8002778',
    lon: '12.2388889',
    timezone: '1'
  },
  {
    name: 'Guidonia Air Base',
    city: 'Guidonia',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIRG',
    lat: '41.990299',
    lon: '12.7408',
    timezone: '1'
  },
  {
    name: 'Marina Di Campo ',
    city: 'Marina Di Campo',
    country: 'Italy',
    IATA: 'EBA',
    ICAO: 'LIRJ',
    lat: '42.7603',
    lon: '10.2394',
    timezone: '1'
  },
  {
    name: 'Latina Air Base',
    city: 'Latina',
    country: 'Italy',
    IATA: 'QLT',
    ICAO: 'LIRL',
    lat: '41.5424',
    lon: '12.909',
    timezone: '1'
  },
  {
    name: 'Grazzanise Air Base',
    city: 'Grazzanise',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIRM',
    lat: '41.060799',
    lon: '14.0819',
    timezone: '1'
  },
  {
    name: 'Naples Intl ',
    city: 'Naples',
    country: 'Italy',
    IATA: 'NAP',
    ICAO: 'LIRN',
    lat: '40.886002',
    lon: '14.2908',
    timezone: '1'
  },
  {
    name: 'Pisa Intl ',
    city: 'Pisa',
    country: 'Italy',
    IATA: 'PSA',
    ICAO: 'LIRP',
    lat: '43.683899',
    lon: '10.3927',
    timezone: '1'
  },
  {
    name: 'Peretola ',
    city: 'Florence',
    country: 'Italy',
    IATA: 'FLR',
    ICAO: 'LIRQ',
    lat: '43.810001',
    lon: '11.2051',
    timezone: '1'
  },
  {
    name: 'Grosseto Air Base',
    city: 'Grosseto',
    country: 'Italy',
    IATA: 'GRS',
    ICAO: 'LIRS',
    lat: '42.759701',
    lon: '11.0719',
    timezone: '1'
  },
  {
    name: 'Urbe ',
    city: 'Rome',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIRU',
    lat: '41.9519',
    lon: '12.4989',
    timezone: '1'
  },
  {
    name: 'Viterbo ',
    city: 'Viterbo',
    country: 'Italy',
    IATA: '\\N',
    ICAO: 'LIRV',
    lat: '42.430199',
    lon: '12.0642',
    timezone: '1'
  },
  {
    name: "Perugia San Francesco d'Assisi \u2013 Umbria Intl ",
    city: 'Perugia',
    country: 'Italy',
    IATA: 'PEG',
    ICAO: 'LIRZ',
    lat: '43.095901',
    lon: '12.5132',
    timezone: '1'
  },
  {
    name: 'Cerklje ',
    city: 'Cerklje',
    country: 'Slovenia',
    IATA: '\\N',
    ICAO: 'LJCE',
    lat: '45.900001525879',
    lon: '15.530200004578',
    timezone: '1'
  },
  {
    name: 'Ljubljana Jo\u017ee Pu\u010dnik ',
    city: 'Ljubljana',
    country: 'Slovenia',
    IATA: 'LJU',
    ICAO: 'LJLJ',
    lat: '46.223701',
    lon: '14.4576',
    timezone: '1'
  },
  {
    name: 'Maribor ',
    city: 'Maribor',
    country: 'Slovenia',
    IATA: 'MBX',
    ICAO: 'LJMB',
    lat: '46.47990036010742',
    lon: '15.686100006103516',
    timezone: '1'
  },
  {
    name: 'Portoroz ',
    city: 'Portoroz',
    country: 'Slovenia',
    IATA: 'POW',
    ICAO: 'LJPZ',
    lat: '45.4734001159668',
    lon: '13.614999771118164',
    timezone: '1'
  },
  {
    name: 'Slovenj Gradec ',
    city: 'Slovenj Gradec',
    country: 'Slovenia',
    IATA: '\\N',
    ICAO: 'LJSG',
    lat: '46.47200012207031',
    lon: '15.116999626159668',
    timezone: '1'
  },
  {
    name: '\u010cesk\u00e9 Bud\u011bjovice ',
    city: 'Ceske Budejovice',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKCS',
    lat: '48.9463996887207',
    lon: '14.427499771118164',
    timezone: '1'
  },
  {
    name: '\u010c\u00e1slav Air Base',
    city: 'Caslav',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKCV',
    lat: '49.939701080322266',
    lon: '15.381799697875977',
    timezone: '1'
  },
  {
    name: 'Hradec Kr\u00e1lov\u00e9 ',
    city: 'Hradec Kralove',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKHK',
    lat: '50.253201',
    lon: '15.8452',
    timezone: '1'
  },
  {
    name: 'Ho\u0159ovice ',
    city: 'Horovice',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKHV',
    lat: '49.84809875488281',
    lon: '13.893500328063965',
    timezone: '1'
  },
  {
    name: 'Kbely Air Base',
    city: 'Praha',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKKB',
    lat: '50.12139892578125',
    lon: '14.543600082397461',
    timezone: '1'
  },
  {
    name: 'Kunovice ',
    city: 'Kunovice',
    country: 'Czech Republic',
    IATA: 'UHE',
    ICAO: 'LKKU',
    lat: '49.02939987182617',
    lon: '17.439699172973633',
    timezone: '1'
  },
  {
    name: 'Karlovy Vary Intl ',
    city: 'Karlovy Vary',
    country: 'Czech Republic',
    IATA: 'KLV',
    ICAO: 'LKKV',
    lat: '50.202999114990234',
    lon: '12.914999961853027',
    timezone: '1'
  },
  {
    name: 'Plze\u0148-L\u00edn\u011b ',
    city: 'Line',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKLN',
    lat: '49.675201416016',
    lon: '13.274600028992',
    timezone: '1'
  },
  {
    name: 'Mnichovo Hradi\u0161t\u011b ',
    city: 'Mnichovo Hradiste',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKMH',
    lat: '50.540199279785156',
    lon: '15.006600379943848',
    timezone: '1'
  },
  {
    name: 'Ostrava Leos Jan\u00e1\u010dek ',
    city: 'Ostrava',
    country: 'Czech Republic',
    IATA: 'OSR',
    ICAO: 'LKMT',
    lat: '49.6963005065918',
    lon: '18.111099243164062',
    timezone: '1'
  },
  {
    name: 'N\u00e1m\u011b\u0161\u0165 Air Base',
    city: 'Namest',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKNA',
    lat: '49.16579818725586',
    lon: '16.124900817871094',
    timezone: '1'
  },
  {
    name: 'Pardubice ',
    city: 'Pardubice',
    country: 'Czech Republic',
    IATA: 'PED',
    ICAO: 'LKPD',
    lat: '50.01340103149414',
    lon: '15.73859977722168',
    timezone: '1'
  },
  {
    name: 'Pribram ',
    city: 'Pribram',
    country: 'Czech Republic',
    IATA: '\\N',
    ICAO: 'LKPM',
    lat: '49.7201',
    lon: '14.1006',
    timezone: '1'
  },
  {
    name: 'P\u0159erov Air Base',
    city: 'Prerov',
    country: 'Czech Republic',
    IATA: 'PRV',
    ICAO: 'LKPO',
    lat: '49.42580032348633',
    lon: '17.404699325561523',
    timezone: '1'
  },
  {
    name: 'V\u00e1clav Havel  Prague',
    city: 'Prague',
    country: 'Czech Republic',
    IATA: 'PRG',
    ICAO: 'LKPR',
    lat: '50.1008',
    lon: '14.26',
    timezone: '1'
  },
  {
    name: 'Brno-Tu\u0159any ',
    city: 'Brno',
    country: 'Czech Republic',
    IATA: 'BRQ',
    ICAO: 'LKTB',
    lat: '49.15129852294922',
    lon: '16.694400787353516',
    timezone: '1'
  },
  {
    name: 'Vodochody ',
    city: 'Vodochody',
    country: 'Czech Republic',
    IATA: 'VOD',
    ICAO: 'LKVO',
    lat: '50.216599',
    lon: '14.3958',
    timezone: '1'
  },
  {
    name: 'Ben Gurion Intl ',
    city: 'Tel-aviv',
    country: 'Israel',
    IATA: 'TLV',
    ICAO: 'LLBG',
    lat: '32.01139831542969',
    lon: '34.88669967651367',
    timezone: '2'
  },
  {
    name: 'Beersheba (Teyman) ',
    city: 'Beer-sheba',
    country: 'Israel',
    IATA: 'BEV',
    ICAO: 'LLBS',
    lat: '31.287000656128',
    lon: '34.722999572754',
    timezone: '2'
  },
  {
    name: 'Tel Nof Air Base',
    city: 'Tel-nof',
    country: 'Israel',
    IATA: '\\N',
    ICAO: 'LLEK',
    lat: '31.8395004272',
    lon: '34.8218002319',
    timezone: '2'
  },
  {
    name: 'Ein Shemer Airfield',
    city: 'Eyn-shemer',
    country: 'Israel',
    IATA: '\\N',
    ICAO: 'LLES',
    lat: '32.440799713134766',
    lon: '35.0077018737793',
    timezone: '2'
  },
  {
    name: 'Eilat ',
    city: 'Elat',
    country: 'Israel',
    IATA: 'ETH',
    ICAO: 'LLET',
    lat: '29.56130027770996',
    lon: '34.96009826660156',
    timezone: '2'
  },
  {
    name: 'Ein Yahav Airfield',
    city: 'Eyn-yahav',
    country: 'Israel',
    IATA: 'EIY',
    ICAO: 'LLEY',
    lat: '30.621700286865234',
    lon: '35.20330047607422',
    timezone: '2'
  },
  {
    name: 'Haifa Intl ',
    city: 'Haifa',
    country: 'Israel',
    IATA: 'HFA',
    ICAO: 'LLHA',
    lat: '32.80939865112305',
    lon: '35.04309844970703',
    timezone: '2'
  },
  {
    name: 'Hatzor Air Base',
    city: 'Haztor',
    country: 'Israel',
    IATA: '\\N',
    ICAO: 'LLHS',
    lat: '31.7625007629',
    lon: '34.727199554399995',
    timezone: '2'
  },
  {
    name: "Ben Ya'akov ",
    city: 'Rosh Pina',
    country: 'Israel',
    IATA: 'RPN',
    ICAO: 'LLIB',
    lat: '32.98099899291992',
    lon: '35.5718994140625',
    timezone: '2'
  },
  {
    name: 'Megiddo ',
    city: 'Megido Airstrip',
    country: 'Israel',
    IATA: '\\N',
    ICAO: 'LLMG',
    lat: '32.5973014831543',
    lon: '35.22880172729492',
    timezone: '2'
  },
  {
    name: 'Bar Yehuda Airfield',
    city: 'Metzada',
    country: 'Israel',
    IATA: 'MTZ',
    ICAO: 'LLMZ',
    lat: '31.32819938659668',
    lon: '35.38859939575195',
    timezone: '2'
  },
  {
    name: 'Nevatim Air Base',
    city: 'Nevatim',
    country: 'Israel',
    IATA: 'VTM',
    ICAO: 'LLNV',
    lat: '31.208299636799996',
    lon: '35.012298584',
    timezone: '2'
  },
  {
    name: 'Ovda Intl ',
    city: 'Ovda',
    country: 'Israel',
    IATA: 'VDA',
    ICAO: 'LLOV',
    lat: '29.94029998779297',
    lon: '34.93579864501953',
    timezone: '2'
  },
  {
    name: 'Ramat David Air Base',
    city: 'Ramat David',
    country: 'Israel',
    IATA: '\\N',
    ICAO: 'LLRD',
    lat: '32.66510009765625',
    lon: '35.179500579833984',
    timezone: '2'
  },
  {
    name: 'Ramon Air Base',
    city: 'Ramon',
    country: 'Israel',
    IATA: 'MIP',
    ICAO: 'LLRM',
    lat: '30.776100158691406',
    lon: '34.66669845581055',
    timezone: '2'
  },
  {
    name: 'Sde Dov ',
    city: 'Tel-aviv',
    country: 'Israel',
    IATA: 'SDV',
    ICAO: 'LLSD',
    lat: '32.11470031738281',
    lon: '34.78219985961914',
    timezone: '2'
  },
  {
    name: 'Malta Intl ',
    city: 'Malta',
    country: 'Malta',
    IATA: 'MLA',
    ICAO: 'LMML',
    lat: '35.857498',
    lon: '14.4775',
    timezone: '1'
  },
  {
    name: 'Wiener Neustadt East ',
    city: 'Wiener Neustadt Ost',
    country: 'Austria',
    IATA: '\\N',
    ICAO: 'LOAN',
    lat: '47.843299865722656',
    lon: '16.260099411010742',
    timezone: '1'
  },
  {
    name: 'Wels ',
    city: 'Wels',
    country: 'Austria',
    IATA: '\\N',
    ICAO: 'LOLW',
    lat: '48.18330001831055',
    lon: '14.040900230407715',
    timezone: '1'
  },
  {
    name: 'Graz ',
    city: 'Graz',
    country: 'Austria',
    IATA: 'GRZ',
    ICAO: 'LOWG',
    lat: '46.9911003112793',
    lon: '15.439599990844727',
    timezone: '1'
  },
  {
    name: 'Innsbruck ',
    city: 'Innsbruck',
    country: 'Austria',
    IATA: 'INN',
    ICAO: 'LOWI',
    lat: '47.260201',
    lon: '11.344',
    timezone: '1'
  },
  {
    name: 'Linz H\u00f6rsching ',
    city: 'Linz',
    country: 'Austria',
    IATA: 'LNZ',
    ICAO: 'LOWL',
    lat: '48.2332',
    lon: '14.1875',
    timezone: '1'
  },
  {
    name: 'Salzburg ',
    city: 'Salzburg',
    country: 'Austria',
    IATA: 'SZG',
    ICAO: 'LOWS',
    lat: '47.793300628699996',
    lon: '13.0043001175',
    timezone: '1'
  },
  {
    name: 'Vienna Intl ',
    city: 'Vienna',
    country: 'Austria',
    IATA: 'VIE',
    ICAO: 'LOWW',
    lat: '48.110298156738',
    lon: '16.569700241089',
    timezone: '1'
  },
  {
    name: 'Hinterstoisser Air Base',
    city: 'Zeltweg',
    country: 'Austria',
    IATA: '\\N',
    ICAO: 'LOXZ',
    lat: '47.202801',
    lon: '14.7442',
    timezone: '1'
  },
  {
    name: 'Alverca Air Base',
    city: 'Alverca',
    country: 'Portugal',
    IATA: 'AVR',
    ICAO: 'LPAR',
    lat: '38.883301',
    lon: '-9.0301',
    timezone: '0'
  },
  {
    name: 'Santa Maria ',
    city: 'Santa Maria (island)',
    country: 'Portugal',
    IATA: 'SMA',
    ICAO: 'LPAZ',
    lat: '36.97140121459961',
    lon: '-25.17060089111328',
    timezone: '-1'
  },
  {
    name: 'Bragan\u00e7a ',
    city: 'Braganca',
    country: 'Portugal',
    IATA: 'BGC',
    ICAO: 'LPBG',
    lat: '41.8578',
    lon: '-6.70713',
    timezone: '0'
  },
  {
    name: 'Beja  / Airbase',
    city: 'Beja (madeira)',
    country: 'Portugal',
    IATA: 'BYJ',
    ICAO: 'LPBJ',
    lat: '38.078899',
    lon: '-7.9324',
    timezone: '0'
  },
  {
    name: 'Braga Municipal Aerodrome',
    city: 'Braga',
    country: 'Portugal',
    IATA: 'BGZ',
    ICAO: 'LPBR',
    lat: '41.5871009827',
    lon: '-8.445139884949999',
    timezone: '0'
  },
  {
    name: 'Aerodromo Municipal de Coimbra',
    city: 'Coimba',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPCO',
    lat: '40.158758',
    lon: '-8.470815',
    timezone: '0'
  },
  {
    name: 'Cascais ',
    city: 'Cascais',
    country: 'Portugal',
    IATA: 'CAT',
    ICAO: 'LPCS',
    lat: '38.724998',
    lon: '-9.35523',
    timezone: '0'
  },
  {
    name: 'Coimbra Hospital Cov\u00f5es Heliport',
    city: 'Covilha',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPCV',
    lat: '40.194812',
    lon: '-8.460207',
    timezone: '0'
  },
  {
    name: '\u00c9vora ',
    city: 'Evora',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPEV',
    lat: '38.533501',
    lon: '-7.88964',
    timezone: '0'
  },
  {
    name: 'Flores ',
    city: 'Flores',
    country: 'Portugal',
    IATA: 'FLW',
    ICAO: 'LPFL',
    lat: '39.455299377441406',
    lon: '-31.131399154663086',
    timezone: '-1'
  },
  {
    name: 'Faro ',
    city: 'Faro',
    country: 'Portugal',
    IATA: 'FAO',
    ICAO: 'LPFR',
    lat: '37.0144004822',
    lon: '-7.96590995789',
    timezone: '0'
  },
  {
    name: 'Graciosa ',
    city: 'Graciosa Island',
    country: 'Portugal',
    IATA: 'GRW',
    ICAO: 'LPGR',
    lat: '39.092201232910156',
    lon: '-28.029800415039062',
    timezone: '-1'
  },
  {
    name: 'Horta ',
    city: 'Horta',
    country: 'Portugal',
    IATA: 'HOR',
    ICAO: 'LPHR',
    lat: '38.519901275634766',
    lon: '-28.715900421142578',
    timezone: '-1'
  },
  {
    name: 'Lajes ',
    city: 'Lajes (terceira Island)',
    country: 'Portugal',
    IATA: 'TER',
    ICAO: 'LPLA',
    lat: '38.761799',
    lon: '-27.090799',
    timezone: '-1'
  },
  {
    name: 'Monte Real Air Base',
    city: 'Monte Real',
    country: 'Portugal',
    IATA: 'QLR',
    ICAO: 'LPMR',
    lat: '39.828335',
    lon: '-8.8875',
    timezone: '0'
  },
  {
    name: 'Montijo Air Base',
    city: 'Montijo',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPMT',
    lat: '38.703899',
    lon: '-9.03592',
    timezone: '0'
  },
  {
    name: 'Ovar Air Base',
    city: 'Ovar',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPOV',
    lat: '40.915901',
    lon: '-8.64592',
    timezone: '0'
  },
  {
    name: 'Jo\u00e3o Paulo II ',
    city: 'Ponta Delgada',
    country: 'Portugal',
    IATA: 'PDL',
    ICAO: 'LPPD',
    lat: '37.7411994934',
    lon: '-25.6979007721',
    timezone: '-1'
  },
  {
    name: 'Pico ',
    city: 'Pico',
    country: 'Portugal',
    IATA: 'PIX',
    ICAO: 'LPPI',
    lat: '38.554298',
    lon: '-28.441299',
    timezone: '-1'
  },
  {
    name: 'Portim\u00e3o ',
    city: 'Portimao',
    country: 'Portugal',
    IATA: 'PRM',
    ICAO: 'LPPM',
    lat: '37.1493',
    lon: '-8.58396',
    timezone: '0'
  },
  {
    name: 'Francisco de S\u00e1 Carneiro ',
    city: 'Porto',
    country: 'Portugal',
    IATA: 'OPO',
    ICAO: 'LPPR',
    lat: '41.2481002808',
    lon: '-8.68138980865',
    timezone: '0'
  },
  {
    name: 'Porto Santo ',
    city: 'Porto Santo',
    country: 'Portugal',
    IATA: 'PXO',
    ICAO: 'LPPS',
    lat: '33.0733985901',
    lon: '-16.3500003815',
    timezone: '0'
  },
  {
    name: 'Humberto Delgado  (Lisbon Portela )',
    city: 'Lisbon',
    country: 'Portugal',
    IATA: 'LIS',
    ICAO: 'LPPT',
    lat: '38.7813',
    lon: '-9.13592',
    timezone: '0'
  },
  {
    name: 'S\u00e3o Jorge ',
    city: 'Sao Jorge Island',
    country: 'Portugal',
    IATA: 'SJZ',
    ICAO: 'LPSJ',
    lat: '38.66550064086914',
    lon: '-28.175800323486328',
    timezone: '-1'
  },
  {
    name: 'Sintra Air Base',
    city: 'Sintra',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPST',
    lat: '38.8311',
    lon: '-9.33955',
    timezone: '0'
  },
  {
    name: 'Tancos Airbase',
    city: 'Tancos',
    country: 'Portugal',
    IATA: '\\N',
    ICAO: 'LPTN',
    lat: '39.475101',
    lon: '-8.36458',
    timezone: '0'
  },
  {
    name: 'Vila Real ',
    city: 'Vila Real',
    country: 'Portugal',
    IATA: 'VRL',
    ICAO: 'LPVR',
    lat: '41.2743',
    lon: '-7.72047',
    timezone: '0'
  },
  {
    name: 'Aerodromo Goncalves Lobato (Viseu )',
    city: 'Viseu',
    country: 'Portugal',
    IATA: 'VSE',
    ICAO: 'LPVZ',
    lat: '40.725498',
    lon: '-7.88899',
    timezone: '0'
  },
  {
    name: 'Mostar Intl ',
    city: 'Mostar',
    country: 'Bosnia and Herzegovina',
    IATA: 'OMO',
    ICAO: 'LQMO',
    lat: '43.282901763916016',
    lon: '17.84589958190918',
    timezone: '1'
  },
  {
    name: 'Sarajevo Intl ',
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina',
    IATA: 'SJJ',
    ICAO: 'LQSA',
    lat: '43.82460021972656',
    lon: '18.331499099731445',
    timezone: '1'
  },
  {
    name: 'Arad Intl ',
    city: 'Arad',
    country: 'Romania',
    IATA: 'ARW',
    ICAO: 'LRAR',
    lat: '46.17660140991211',
    lon: '21.261999130249023',
    timezone: '2'
  },
  {
    name: 'Bac\u0103u ',
    city: 'Bacau',
    country: 'Romania',
    IATA: 'BCM',
    ICAO: 'LRBC',
    lat: '46.52190017700195',
    lon: '26.91029930114746',
    timezone: '2'
  },
  {
    name: 'Tautii Magheraus ',
    city: 'Baia Mare',
    country: 'Romania',
    IATA: 'BAY',
    ICAO: 'LRBM',
    lat: '47.65840148925781',
    lon: '23.469999313354492',
    timezone: '2'
  },
  {
    name: 'B\u0103neasa Intl ',
    city: 'Bucharest',
    country: 'Romania',
    IATA: 'BBU',
    ICAO: 'LRBS',
    lat: '44.50320053100586',
    lon: '26.102100372314453',
    timezone: '2'
  },
  {
    name: 'Mihail Kog\u0103lniceanu Intl ',
    city: 'Constanta',
    country: 'Romania',
    IATA: 'CND',
    ICAO: 'LRCK',
    lat: '44.36220169067383',
    lon: '28.488300323486328',
    timezone: '2'
  },
  {
    name: 'Cluj-Napoca Intl ',
    city: 'Cluj-napoca',
    country: 'Romania',
    IATA: 'CLJ',
    ICAO: 'LRCL',
    lat: '46.78519821166992',
    lon: '23.686199188232422',
    timezone: '2'
  },
  {
    name: 'Caransebe\u015f ',
    city: 'Caransebes',
    country: 'Romania',
    IATA: 'CSB',
    ICAO: 'LRCS',
    lat: '45.41999816894531',
    lon: '22.253299713134766',
    timezone: '2'
  },
  {
    name: 'Craiova ',
    city: 'Craiova',
    country: 'Romania',
    IATA: 'CRA',
    ICAO: 'LRCV',
    lat: '44.31809997558594',
    lon: '23.888599395751953',
    timezone: '2'
  },
  {
    name: 'Ia\u015fi ',
    city: 'Iasi',
    country: 'Romania',
    IATA: 'IAS',
    ICAO: 'LRIA',
    lat: '47.17850112915039',
    lon: '27.6205997467041',
    timezone: '2'
  },
  {
    name: 'Oradea Intl ',
    city: 'Oradea',
    country: 'Romania',
    IATA: 'OMR',
    ICAO: 'LROD',
    lat: '47.025299072265625',
    lon: '21.90250015258789',
    timezone: '2'
  },
  {
    name: 'Henri Coand\u0103 Intl ',
    city: 'Bucharest',
    country: 'Romania',
    IATA: 'OTP',
    ICAO: 'LROP',
    lat: '44.5711111',
    lon: '26.085',
    timezone: '2'
  },
  {
    name: 'Sibiu Intl ',
    city: 'Sibiu',
    country: 'Romania',
    IATA: 'SBZ',
    ICAO: 'LRSB',
    lat: '45.78559875488281',
    lon: '24.091299057006836',
    timezone: '2'
  },
  {
    name: 'Satu Mare ',
    city: 'Satu Mare',
    country: 'Romania',
    IATA: 'SUJ',
    ICAO: 'LRSM',
    lat: '47.70330047607422',
    lon: '22.885700225830078',
    timezone: '2'
  },
  {
    name: 'Suceava Stefan cel Mare ',
    city: 'Suceava',
    country: 'Romania',
    IATA: 'SCV',
    ICAO: 'LRSV',
    lat: '47.6875',
    lon: '26.35409927368164',
    timezone: '2'
  },
  {
    name: 'Tulcea ',
    city: 'Tulcea',
    country: 'Romania',
    IATA: 'TCE',
    ICAO: 'LRTC',
    lat: '45.0625',
    lon: '28.71430015563965',
    timezone: '2'
  },
  {
    name: 'Transilvania T\u00e2rgu Mure\u015f Intl ',
    city: 'Tirgu Mures',
    country: 'Romania',
    IATA: 'TGM',
    ICAO: 'LRTM',
    lat: '46.46770095825195',
    lon: '24.412500381469727',
    timezone: '2'
  },
  {
    name: 'Timi\u015foara Traian Vuia ',
    city: 'Timisoara',
    country: 'Romania',
    IATA: 'TSR',
    ICAO: 'LRTR',
    lat: '45.809898376464844',
    lon: '21.337900161743164',
    timezone: '2'
  },
  {
    name: 'Les Eplatures ',
    city: 'Les Eplatures',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSGC',
    lat: '47.083900451699996',
    lon: '6.792840003970001',
    timezone: '1'
  },
  {
    name: 'Geneva Cointrin Intl ',
    city: 'Geneva',
    country: 'Switzerland',
    IATA: 'GVA',
    ICAO: 'LSGG',
    lat: '46.23809814453125',
    lon: '6.108950138092041',
    timezone: '1'
  },
  {
    name: 'Saanen ',
    city: 'Saanen',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSGK',
    lat: '46.4874992371',
    lon: '7.25083017349',
    timezone: '1'
  },
  {
    name: 'Sion ',
    city: 'Sion',
    country: 'Switzerland',
    IATA: 'SIR',
    ICAO: 'LSGS',
    lat: '46.219600677500004',
    lon: '7.326759815220001',
    timezone: '1'
  },
  {
    name: 'Alpnach Air Base',
    city: 'Alpnach',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSMA',
    lat: '46.943901',
    lon: '8.28417',
    timezone: '1'
  },
  {
    name: 'D\u00fcbendorf Air Base',
    city: 'Dubendorf',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSMD',
    lat: '47.398601532',
    lon: '8.648229599',
    timezone: '1'
  },
  {
    name: 'Emmen Air Base',
    city: 'Emmen',
    country: 'Switzerland',
    IATA: 'EML',
    ICAO: 'LSME',
    lat: '47.092444',
    lon: '8.305184',
    timezone: '1'
  },
  {
    name: 'Mollis ',
    city: 'Mollis',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSMF',
    lat: '47.07889938354492',
    lon: '9.06482982635498',
    timezone: '1'
  },
  {
    name: 'Meiringen ',
    city: 'Meiringen',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSMM',
    lat: '46.74330139160156',
    lon: '8.109999656677246',
    timezone: '1'
  },
  {
    name: 'Payerne Air Base',
    city: 'Payerne',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSMP',
    lat: '46.8432',
    lon: '6.91506004333',
    timezone: '1'
  },
  {
    name: 'Lugano ',
    city: 'Lugano',
    country: 'Switzerland',
    IATA: 'LUG',
    ICAO: 'LSZA',
    lat: '46.00429916379999',
    lon: '8.9105796814',
    timezone: '1'
  },
  {
    name: 'Bern Belp ',
    city: 'Bern',
    country: 'Switzerland',
    IATA: 'BRN',
    ICAO: 'LSZB',
    lat: '46.914100647',
    lon: '7.497149944309999',
    timezone: '1'
  },
  {
    name: 'Grenchen ',
    city: 'Grenchen',
    country: 'Switzerland',
    IATA: 'ZHI',
    ICAO: 'LSZG',
    lat: '47.181599',
    lon: '7.41719',
    timezone: '1'
  },
  {
    name: 'Z\u00fcrich ',
    city: 'Zurich',
    country: 'Switzerland',
    IATA: 'ZRH',
    ICAO: 'LSZH',
    lat: '47.464699',
    lon: '8.54917',
    timezone: '1'
  },
  {
    name: 'St Gallen Altenrhein ',
    city: 'Altenrhein',
    country: 'Switzerland',
    IATA: 'ACH',
    ICAO: 'LSZR',
    lat: '47.4850006104',
    lon: '9.560770034789998',
    timezone: '1'
  },
  {
    name: 'Samedan ',
    city: 'Samedan',
    country: 'Switzerland',
    IATA: 'SMV',
    ICAO: 'LSZS',
    lat: '46.53409957885742',
    lon: '9.884110450744629',
    timezone: '1'
  },
  {
    name: 'G\u00fcvercinlik ',
    city: 'Ankara',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTAB',
    lat: '39.9350013733',
    lon: '32.7407989502',
    timezone: '2'
  },
  {
    name: 'Esenbo\u011fa Intl ',
    city: 'Ankara',
    country: 'Turkey',
    IATA: 'ESB',
    ICAO: 'LTAC',
    lat: '40.128101348899996',
    lon: '32.995098114',
    timezone: '3'
  },
  {
    name: 'Etimesgut Air Base',
    city: 'Ankara',
    country: 'Turkey',
    IATA: 'ANK',
    ICAO: 'LTAD',
    lat: '39.949798584',
    lon: '32.6885986328',
    timezone: '3'
  },
  {
    name: 'Ak\u0131nc\u0131 Air Base',
    city: 'Ankara',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTAE',
    lat: '40.078899383499994',
    lon: '32.5656013489',
    timezone: '3'
  },
  {
    name: 'Adana ',
    city: 'Adana',
    country: 'Turkey',
    IATA: 'ADA',
    ICAO: 'LTAF',
    lat: '36.9822006226',
    lon: '35.280399322499996',
    timezone: '3'
  },
  {
    name: '\u0130ncirlik Air Base',
    city: 'Adana',
    country: 'Turkey',
    IATA: 'UAB',
    ICAO: 'LTAG',
    lat: '37.002101898199996',
    lon: '35.4258995056',
    timezone: '3'
  },
  {
    name: 'Afyon ',
    city: 'Afyon',
    country: 'Turkey',
    IATA: 'AFY',
    ICAO: 'LTAH',
    lat: '38.726398468',
    lon: '30.6011009216',
    timezone: '3'
  },
  {
    name: 'Antalya Intl ',
    city: 'Antalya',
    country: 'Turkey',
    IATA: 'AYT',
    ICAO: 'LTAI',
    lat: '36.898701',
    lon: '30.800501',
    timezone: '3'
  },
  {
    name: 'Gaziantep Intl ',
    city: 'Gaziantep',
    country: 'Turkey',
    IATA: 'GZT',
    ICAO: 'LTAJ',
    lat: '36.9472007751',
    lon: '37.4786987305',
    timezone: '3'
  },
  {
    name: '\u0130skenderun ',
    city: 'Iskenderun',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTAK',
    lat: '36.5744552612',
    lon: '36.1534194946',
    timezone: '3'
  },
  {
    name: 'Konya ',
    city: 'Konya',
    country: 'Turkey',
    IATA: 'KYA',
    ICAO: 'LTAN',
    lat: '37.979',
    lon: '32.561901',
    timezone: '3'
  },
  {
    name: 'Malatya Tulga ',
    city: 'Malatya',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTAO',
    lat: '38.353699',
    lon: '38.253899',
    timezone: '3'
  },
  {
    name: 'Amasya Merzifon ',
    city: 'Merzifon',
    country: 'Turkey',
    IATA: 'MZH',
    ICAO: 'LTAP',
    lat: '40.829399',
    lon: '35.521999',
    timezone: '3'
  },
  {
    name: 'Sivas Nuri Demira\u011f ',
    city: 'Sivas',
    country: 'Turkey',
    IATA: 'VAS',
    ICAO: 'LTAR',
    lat: '39.813801',
    lon: '36.9035',
    timezone: '3'
  },
  {
    name: 'Malatya Erha\u00e7 ',
    city: 'Malatya',
    country: 'Turkey',
    IATA: 'MLX',
    ICAO: 'LTAT',
    lat: '38.435298919699996',
    lon: '38.0909996033',
    timezone: '3'
  },
  {
    name: 'Kayseri Erkilet ',
    city: 'Kayseri',
    country: 'Turkey',
    IATA: 'ASR',
    ICAO: 'LTAU',
    lat: '38.770401001',
    lon: '35.4953994751',
    timezone: '3'
  },
  {
    name: 'Sivrihisar ',
    city: 'Sivrihisar',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTAV',
    lat: '39.451499938964844',
    lon: '31.365299224853516',
    timezone: '3'
  },
  {
    name: 'Tokat ',
    city: 'Tokat',
    country: 'Turkey',
    IATA: 'TJK',
    ICAO: 'LTAW',
    lat: '40.307430267333984',
    lon: '36.367408752441406',
    timezone: '3'
  },
  {
    name: '\u00c7ardak ',
    city: 'Denizli',
    country: 'Turkey',
    IATA: 'DNZ',
    ICAO: 'LTAY',
    lat: '37.7855987549',
    lon: '29.7012996674',
    timezone: '3'
  },
  {
    name: 'Atat\u00fcrk Intl ',
    city: 'Istanbul',
    country: 'Turkey',
    IATA: 'ISL',
    ICAO: 'LTBA',
    lat: '40.976898',
    lon: '28.8146',
    timezone: '3'
  },
  {
    name: 'Bal\u0131kesir Merkez ',
    city: 'Balikesir',
    country: 'Turkey',
    IATA: 'BZI',
    ICAO: 'LTBF',
    lat: '39.619300842285156',
    lon: '27.926000595092773',
    timezone: '3'
  },
  {
    name: 'Band\u0131rma ',
    city: 'Bandirma',
    country: 'Turkey',
    IATA: 'BDM',
    ICAO: 'LTBG',
    lat: '40.31800079345703',
    lon: '27.977699279785156',
    timezone: '3'
  },
  {
    name: 'Eski\u015fehir Air Base',
    city: 'Eskisehir',
    country: 'Turkey',
    IATA: 'ESK',
    ICAO: 'LTBI',
    lat: '39.7840995789',
    lon: '30.582099914599997',
    timezone: '3'
  },
  {
    name: 'Adnan Menderes Intl ',
    city: 'Izmir',
    country: 'Turkey',
    IATA: 'ADB',
    ICAO: 'LTBJ',
    lat: '38.2924003601',
    lon: '27.156999588',
    timezone: '3'
  },
  {
    name: 'Gaziemir ',
    city: 'Izmir',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBK',
    lat: '38.31909942626953',
    lon: '27.159400939941406',
    timezone: '3'
  },
  {
    name: '\u00c7i\u011fli ',
    city: 'Izmir',
    country: 'Turkey',
    IATA: 'IGL',
    ICAO: 'LTBL',
    lat: '38.513000488299994',
    lon: '27.010099411',
    timezone: '3'
  },
  {
    name: 'Isparta ',
    city: 'Isparta',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBM',
    lat: '37.78512191772461',
    lon: '30.59001922607422',
    timezone: '3'
  },
  {
    name: 'K\u00fctahya ',
    city: 'Kutahya',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBN',
    lat: '39.426700592041016',
    lon: '30.01689910888672',
    timezone: '3'
  },
  {
    name: 'Yalova ',
    city: 'Yalova',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBP',
    lat: '40.68439865112305',
    lon: '29.375699996948242',
    timezone: '3'
  },
  {
    name: 'Cengiz Topel ',
    city: 'Topel',
    country: 'Turkey',
    IATA: 'KCO',
    ICAO: 'LTBQ',
    lat: '40.73500061035156',
    lon: '30.08329963684082',
    timezone: '3'
  },
  {
    name: 'Dalaman Intl ',
    city: 'Dalaman',
    country: 'Turkey',
    IATA: 'DLM',
    ICAO: 'LTBS',
    lat: '36.7131004333',
    lon: '28.7924995422',
    timezone: '3'
  },
  {
    name: 'Akhisar ',
    city: 'Akhisar',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBT',
    lat: '38.80889892578125',
    lon: '27.833900451660156',
    timezone: '3'
  },
  {
    name: 'Ims\u0131k ',
    city: 'Bodrum',
    country: 'Turkey',
    IATA: 'BXN',
    ICAO: 'LTBV',
    lat: '37.140098571777344',
    lon: '27.669700622558594',
    timezone: '3'
  },
  {
    name: 'Samand\u0131ra Air Base',
    city: 'Istanbul',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTBX',
    lat: '40.99300003051758',
    lon: '29.21649932861328',
    timezone: '3'
  },
  {
    name: 'Elaz\u0131\u011f ',
    city: 'Elazig',
    country: 'Turkey',
    IATA: 'EZS',
    ICAO: 'LTCA',
    lat: '38.6068992615',
    lon: '39.2914009094',
    timezone: '3'
  },
  {
    name: 'Diyarbakir ',
    city: 'Diyabakir',
    country: 'Turkey',
    IATA: 'DIY',
    ICAO: 'LTCC',
    lat: '37.893901825',
    lon: '40.201000213600004',
    timezone: '3'
  },
  {
    name: 'Erzincan ',
    city: 'Erzincan',
    country: 'Turkey',
    IATA: 'ERC',
    ICAO: 'LTCD',
    lat: '39.7102012634',
    lon: '39.527000427199994',
    timezone: '3'
  },
  {
    name: 'Erzurum Intl ',
    city: 'Erzurum',
    country: 'Turkey',
    IATA: 'ERZ',
    ICAO: 'LTCE',
    lat: '39.9565010071',
    lon: '41.17020034789999',
    timezone: '3'
  },
  {
    name: 'Trabzon Intl ',
    city: 'Trabzon',
    country: 'Turkey',
    IATA: 'TZX',
    ICAO: 'LTCG',
    lat: '40.99509811401367',
    lon: '39.78969955444336',
    timezone: '3'
  },
  {
    name: 'Van Ferit Melen ',
    city: 'Van',
    country: 'Turkey',
    IATA: 'VAN',
    ICAO: 'LTCI',
    lat: '38.46820068359375',
    lon: '43.332298278808594',
    timezone: '3'
  },
  {
    name: 'Batman ',
    city: 'Batman',
    country: 'Turkey',
    IATA: 'BAL',
    ICAO: 'LTCJ',
    lat: '37.929000854499996',
    lon: '41.1166000366',
    timezone: '3'
  },
  {
    name: 'Siirt ',
    city: 'Siirt',
    country: 'Turkey',
    IATA: 'SXZ',
    ICAO: 'LTCL',
    lat: '37.97890090942383',
    lon: '41.84040069580078',
    timezone: '3'
  },
  {
    name: 'Kakl\u0131\u00e7 ',
    city: 'Izmir',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTFA',
    lat: '38.517601013183594',
    lon: '26.977399826049805',
    timezone: '3'
  },
  {
    name: 'Sel\u00e7uk Efes ',
    city: 'Izmir',
    country: 'Turkey',
    IATA: '\\N',
    ICAO: 'LTFB',
    lat: '37.95069885253906',
    lon: '27.32900047302246',
    timezone: '3'
  },
  {
    name: 'B\u0103l\u021bi Intl ',
    city: 'Saltsy',
    country: 'Moldova',
    IATA: 'BZY',
    ICAO: 'LUBL',
    lat: '47.843056',
    lon: '27.777222',
    timezone: '2'
  },
  {
    name: 'Chi\u015fin\u0103u Intl ',
    city: 'Chisinau',
    country: 'Moldova',
    IATA: 'KIV',
    ICAO: 'LUKK',
    lat: '46.92770004272461',
    lon: '28.930999755859375',
    timezone: '2'
  },
  {
    name: 'Ohrid St. Paul the Apostle ',
    city: 'Ohrid',
    country: 'Macedonia',
    IATA: 'OHD',
    ICAO: 'LWOH',
    lat: '41.18',
    lon: '20.7423',
    timezone: '1'
  },
  {
    name: 'Skopje Alexander the Great ',
    city: 'Skopje',
    country: 'Macedonia',
    IATA: 'SKP',
    ICAO: 'LWSK',
    lat: '41.961601',
    lon: '21.621401',
    timezone: '1'
  },
  {
    name: 'Gibraltar ',
    city: 'Gibraltar',
    country: 'Gibraltar',
    IATA: 'GIB',
    ICAO: 'LXGB',
    lat: '36.1511993408',
    lon: '-5.3496599197400005',
    timezone: '1'
  },
  {
    name: 'Belgrade Nikola Tesla ',
    city: 'Belgrade',
    country: 'Serbia',
    IATA: 'BEG',
    ICAO: 'LYBE',
    lat: '44.8184013367',
    lon: '20.3090991974',
    timezone: '1'
  },
  {
    name: 'Nis ',
    city: 'Nis',
    country: 'Serbia',
    IATA: 'INI',
    ICAO: 'LYNI',
    lat: '43.337299',
    lon: '21.853701',
    timezone: '1'
  },
  {
    name: 'Podgorica ',
    city: 'Podgorica',
    country: 'Montenegro',
    IATA: 'TGD',
    ICAO: 'LYPG',
    lat: '42.359402',
    lon: '19.2519',
    timezone: '1'
  },
  {
    name: 'Pri\u0161tina Intl ',
    city: 'Pristina',
    country: 'Serbia',
    IATA: 'PRN',
    ICAO: 'BKPR',
    lat: '42.5728',
    lon: '21.035801',
    timezone: '1'
  },
  {
    name: 'Tivat ',
    city: 'Tivat',
    country: 'Montenegro',
    IATA: 'TIV',
    ICAO: 'LYTV',
    lat: '42.404701232910156',
    lon: '18.72330093383789',
    timezone: '1'
  },
  {
    name: 'Vr\u0161ac Intl ',
    city: 'Vrsac',
    country: 'Serbia',
    IATA: '\\N',
    ICAO: 'LYVR',
    lat: '45.1469',
    lon: '21.3099',
    timezone: '1'
  },
  {
    name: 'M. R. \u0160tef\u00e1nik ',
    city: 'Bratislava',
    country: 'Slovakia',
    IATA: 'BTS',
    ICAO: 'LZIB',
    lat: '48.17020034790039',
    lon: '17.21269989013672',
    timezone: '1'
  },
  {
    name: 'Ko\u0161ice ',
    city: 'Kosice',
    country: 'Slovakia',
    IATA: 'KSC',
    ICAO: 'LZKZ',
    lat: '48.66310119628906',
    lon: '21.241100311279297',
    timezone: '1'
  },
  {
    name: 'Kuchy\u0148a Air Base',
    city: 'Malacky',
    country: 'Slovakia',
    IATA: '\\N',
    ICAO: 'LZMC',
    lat: '48.402000427246094',
    lon: '17.11840057373047',
    timezone: '1'
  },
  {
    name: 'Pie\u0161\u0165any ',
    city: 'Piestany',
    country: 'Slovakia',
    IATA: 'PZY',
    ICAO: 'LZPP',
    lat: '48.62519836425781',
    lon: '17.828399658203125',
    timezone: '1'
  },
  {
    name: 'Slia\u010d ',
    city: 'Sliac',
    country: 'Slovakia',
    IATA: 'SLD',
    ICAO: 'LZSL',
    lat: '48.63779830932617',
    lon: '19.13409996032715',
    timezone: '1'
  },
  {
    name: 'Tren\u010d\u00edn ',
    city: 'Trencin',
    country: 'Slovakia',
    IATA: '\\N',
    ICAO: 'LZTN',
    lat: '48.8650016785',
    lon: '17.9923000336',
    timezone: '1'
  },
  {
    name: 'Poprad-Tatry ',
    city: 'Poprad',
    country: 'Slovakia',
    IATA: 'TAT',
    ICAO: 'LZTT',
    lat: '49.073600769',
    lon: '20.2411003113',
    timezone: '1'
  },
  {
    name: 'North Caicos ',
    city: 'North Caicos',
    country: 'Turks and Caicos Islands',
    IATA: 'NCA',
    ICAO: 'MBNC',
    lat: '21.9175',
    lon: '-71.939598',
    timezone: '-4'
  },
  {
    name: 'Providenciales ',
    city: 'Providenciales',
    country: 'Turks and Caicos Islands',
    IATA: 'PLS',
    ICAO: 'MBPV',
    lat: '21.77359962463379',
    lon: '-72.26589965820312',
    timezone: '-4'
  },
  {
    name: 'South Caicos ',
    city: 'South Caicos',
    country: 'Turks and Caicos Islands',
    IATA: 'XSC',
    ICAO: 'MBSC',
    lat: '21.515699386599998',
    lon: '-71.528503418',
    timezone: '-4'
  },
  {
    name: 'Arroyo Barril ',
    city: 'Samana',
    country: 'Dominican Republic',
    IATA: '\\N',
    ICAO: 'MDAB',
    lat: '19.198600769',
    lon: '-69.42980194089999',
    timezone: '-4'
  },
  {
    name: 'Maria Montez Intl ',
    city: 'Barahona',
    country: 'Dominican Republic',
    IATA: 'BRX',
    ICAO: 'MDBH',
    lat: '18.25149917602539',
    lon: '-71.12039947509766',
    timezone: '-4'
  },
  {
    name: 'Cabo Rojo ',
    city: 'Cabo Rojo',
    country: 'Dominican Republic',
    IATA: 'CBJ',
    ICAO: 'MDCR',
    lat: '17.929000854492188',
    lon: '-71.6447982788086',
    timezone: '-4'
  },
  {
    name: 'Casa De Campo Intl ',
    city: 'La Romana',
    country: 'Dominican Republic',
    IATA: 'LRM',
    ICAO: 'MDLR',
    lat: '18.450700759887695',
    lon: '-68.91179656982422',
    timezone: '-4'
  },
  {
    name: 'Punta Cana Intl ',
    city: 'Punta Cana',
    country: 'Dominican Republic',
    IATA: 'PUJ',
    ICAO: 'MDPC',
    lat: '18.567399978599997',
    lon: '-68.36340332030001',
    timezone: '-4'
  },
  {
    name: 'Gregorio Luperon Intl ',
    city: 'Puerto Plata',
    country: 'Dominican Republic',
    IATA: 'POP',
    ICAO: 'MDPP',
    lat: '19.75790023803711',
    lon: '-70.56999969482422',
    timezone: '-4'
  },
  {
    name: 'Las Am\u00e9ricas Intl ',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    IATA: 'SDQ',
    ICAO: 'MDSD',
    lat: '18.42970085144',
    lon: '-69.668899536133',
    timezone: '-4'
  },
  {
    name: 'San Isidro Air Base',
    city: 'San Isidoro',
    country: 'Dominican Republic',
    IATA: '\\N',
    ICAO: 'MDSI',
    lat: '18.503700256347656',
    lon: '-69.76170349121094',
    timezone: '-4'
  },
  {
    name: 'Cibao Intl ',
    city: 'Santiago',
    country: 'Dominican Republic',
    IATA: 'STI',
    ICAO: 'MDST',
    lat: '19.406099319458008',
    lon: '-70.60469818115234',
    timezone: '-4'
  },
  {
    name: 'Bananera ',
    city: 'Bananera',
    country: 'Guatemala',
    IATA: '\\N',
    ICAO: 'MGBN',
    lat: '15.47350025177002',
    lon: '-88.83719635009766',
    timezone: '-6'
  },
  {
    name: 'Coban ',
    city: 'Coban',
    country: 'Guatemala',
    IATA: 'CBV',
    ICAO: 'MGCB',
    lat: '15.468999862670898',
    lon: '-90.40670013427734',
    timezone: '-6'
  },
  {
    name: 'La Aurora ',
    city: 'Guatemala City',
    country: 'Guatemala',
    IATA: 'GUA',
    ICAO: 'MGGT',
    lat: '14.5833',
    lon: '-90.527496',
    timezone: '-6'
  },
  {
    name: 'Retalhuleu ',
    city: 'Retalhuleu',
    country: 'Guatemala',
    IATA: 'RER',
    ICAO: 'MGRT',
    lat: '14.520999908447266',
    lon: '-91.69730377197266',
    timezone: '-6'
  },
  {
    name: 'San Jos\u00e9 ',
    city: 'San Jose',
    country: 'Guatemala',
    IATA: 'GSJ',
    ICAO: 'MGSJ',
    lat: '13.936200141899999',
    lon: '-90.83580017090001',
    timezone: '-6'
  },
  {
    name: 'Goloson Intl ',
    city: 'La Ceiba',
    country: 'Honduras',
    IATA: 'LCE',
    ICAO: 'MHLC',
    lat: '15.7425',
    lon: '-86.852997',
    timezone: '-6'
  },
  {
    name: 'Ram\u00f3n Villeda Morales Intl ',
    city: 'San Pedro Sula',
    country: 'Honduras',
    IATA: 'SAP',
    ICAO: 'MHLM',
    lat: '15.4526',
    lon: '-87.923599',
    timezone: '-6'
  },
  {
    name: 'La Laguna ',
    city: 'Guanaja',
    country: 'Honduras',
    IATA: 'GJA',
    ICAO: 'MHNJ',
    lat: '16.4454',
    lon: '-85.906601',
    timezone: '-6'
  },
  {
    name: 'Juan Manuel Galvez Intl ',
    city: 'Roatan',
    country: 'Honduras',
    IATA: 'RTB',
    ICAO: 'MHRO',
    lat: '16.316799',
    lon: '-86.523003',
    timezone: '-6'
  },
  {
    name: 'Tela ',
    city: 'Tela',
    country: 'Honduras',
    IATA: 'TEA',
    ICAO: 'MHTE',
    lat: '15.7759',
    lon: '-87.4758',
    timezone: '-6'
  },
  {
    name: 'Toncont\u00edn Intl ',
    city: 'Tegucigalpa',
    country: 'Honduras',
    IATA: 'TGU',
    ICAO: 'MHTG',
    lat: '14.06089973449707',
    lon: '-87.21720123291016',
    timezone: '-6'
  },
  {
    name: 'Trujillo ',
    city: 'Trujillo',
    country: 'Honduras',
    IATA: 'TJI',
    ICAO: 'MHTJ',
    lat: '15.9268',
    lon: '-85.938202',
    timezone: '-6'
  },
  {
    name: 'Boscobel Aerodrome',
    city: 'Ocho Rios',
    country: 'Jamaica',
    IATA: 'OCJ',
    ICAO: 'MKBS',
    lat: '18.404199600219727',
    lon: '-76.96900177001953',
    timezone: '-5'
  },
  {
    name: 'Norman Manley Intl ',
    city: 'Kingston',
    country: 'Jamaica',
    IATA: 'KIN',
    ICAO: 'MKJP',
    lat: '17.935699462890625',
    lon: '-76.7874984741211',
    timezone: '-5'
  },
  {
    name: 'Sangster Intl ',
    city: 'Montego Bay',
    country: 'Jamaica',
    IATA: 'MBJ',
    ICAO: 'MKJS',
    lat: '18.503700256347656',
    lon: '-77.91339874267578',
    timezone: '-5'
  },
  {
    name: 'Ken Jones ',
    city: 'Port Antonio',
    country: 'Jamaica',
    IATA: 'POT',
    ICAO: 'MKKJ',
    lat: '18.1987991333',
    lon: '-76.53450012210001',
    timezone: '-5'
  },
  {
    name: 'Tinson Pen ',
    city: 'Kingston',
    country: 'Jamaica',
    IATA: 'KTP',
    ICAO: 'MKTP',
    lat: '17.98859977722168',
    lon: '-76.82379913330078',
    timezone: '-5'
  },
  {
    name: 'General Juan N Alvarez Intl ',
    city: 'Acapulco',
    country: 'Mexico',
    IATA: 'ACA',
    ICAO: 'MMAA',
    lat: '16.757099151611328',
    lon: '-99.75399780273438',
    timezone: '-6'
  },
  {
    name: 'Del Norte Intl ',
    city: 'Monterrey',
    country: 'Mexico',
    IATA: 'NTR',
    ICAO: 'MMAN',
    lat: '25.865601',
    lon: '-100.237',
    timezone: '-6'
  },
  {
    name: 'Jes\u00fas Ter\u00e1n Paredo Intl ',
    city: 'Aguascalientes',
    country: 'Mexico',
    IATA: 'AGU',
    ICAO: 'MMAS',
    lat: '21.705601',
    lon: '-102.318001',
    timezone: '-6'
  },
  {
    name: 'Bah\u00edas de Huatulco Intl ',
    city: 'Huatulco',
    country: 'Mexico',
    IATA: 'HUX',
    ICAO: 'MMBT',
    lat: '15.7753',
    lon: '-96.262604',
    timezone: '-6'
  },
  {
    name: 'General Mariano Matamoros ',
    city: 'Cuernavaca',
    country: 'Mexico',
    IATA: 'CVJ',
    ICAO: 'MMCB',
    lat: '18.834800720214844',
    lon: '-99.26129913330078',
    timezone: '-6'
  },
  {
    name: 'Ciudad Acu\u00f1a New Intl ',
    city: 'Ciudad Acuna',
    country: 'Mexico',
    IATA: 'ACN',
    ICAO: 'MMCC',
    lat: '29.332899',
    lon: '-101.098998',
    timezone: '-6'
  },
  {
    name: 'Ciudad del Carmen Intl ',
    city: 'Ciudad Del Carmen',
    country: 'Mexico',
    IATA: 'CME',
    ICAO: 'MMCE',
    lat: '18.65369987487793',
    lon: '-91.79900360107422',
    timezone: '-6'
  },
  {
    name: 'Nuevo Casas Grandes ',
    city: 'Nuevo Casas Grandes',
    country: 'Mexico',
    IATA: 'NCG',
    ICAO: 'MMCG',
    lat: '30.3974',
    lon: '-107.875',
    timezone: '-7'
  },
  {
    name: 'Chilpancingo ',
    city: 'Chilpancingo',
    country: 'Mexico',
    IATA: '\\N',
    ICAO: 'MMCH',
    lat: '17.574239',
    lon: '-99.515424',
    timezone: '-6'
  },
  {
    name: 'Bachigualato Federal Intl ',
    city: 'Culiacan',
    country: 'Mexico',
    IATA: 'CUL',
    ICAO: 'MMCL',
    lat: '24.7644996643',
    lon: '-107.474998474',
    timezone: '-7'
  },
  {
    name: 'Chetumal Intl ',
    city: 'Chetumal',
    country: 'Mexico',
    IATA: 'CTM',
    ICAO: 'MMCM',
    lat: '18.50469970703125',
    lon: '-88.32679748535156',
    timezone: '-5'
  },
  {
    name: 'Ciudad Obreg\u00f3n Intl ',
    city: 'Ciudad Obregon',
    country: 'Mexico',
    IATA: 'CEN',
    ICAO: 'MMCN',
    lat: '27.39259910583496',
    lon: '-109.83300018310547',
    timezone: '-7'
  },
  {
    name: 'Ingeniero Alberto Acu\u00f1a Ongay Intl ',
    city: 'Campeche',
    country: 'Mexico',
    IATA: 'CPE',
    ICAO: 'MMCP',
    lat: '19.816799163800003',
    lon: '-90.5002975464',
    timezone: '-6'
  },
  {
    name: 'Abraham Gonz\u00e1lez Intl ',
    city: 'Ciudad Juarez',
    country: 'Mexico',
    IATA: 'CJS',
    ICAO: 'MMCS',
    lat: '31.63610076904297',
    lon: '-106.42900085449219',
    timezone: '-7'
  },
  {
    name: 'General Roberto Fierro Villalobos Intl ',
    city: 'Chihuahua',
    country: 'Mexico',
    IATA: 'CUU',
    ICAO: 'MMCU',
    lat: '28.702899932900003',
    lon: '-105.964996338',
    timezone: '-7'
  },
  {
    name: 'General Pedro Jose Mendez Intl ',
    city: 'Ciudad Victoria',
    country: 'Mexico',
    IATA: 'CVM',
    ICAO: 'MMCV',
    lat: '23.7033004761',
    lon: '-98.9564971924',
    timezone: '-6'
  },
  {
    name: 'Cozumel Intl ',
    city: 'Cozumel',
    country: 'Mexico',
    IATA: 'CZM',
    ICAO: 'MMCZ',
    lat: '20.52239990234375',
    lon: '-86.92559814453125',
    timezone: '-5'
  },
  {
    name: 'General Guadalupe Victoria Intl ',
    city: 'Durango',
    country: 'Mexico',
    IATA: 'DGO',
    ICAO: 'MMDO',
    lat: '24.1242008209',
    lon: '-104.527999878',
    timezone: '-6'
  },
  {
    name: 'Amado Nervo National ',
    city: 'Tepic',
    country: 'Mexico',
    IATA: 'TPQ',
    ICAO: 'MMEP',
    lat: '21.4195',
    lon: '-104.843002',
    timezone: '-7'
  },
  {
    name: 'Ensenada Intl ',
    city: 'Ensenada',
    country: 'Mexico',
    IATA: 'ESE',
    ICAO: 'MMES',
    lat: '31.7953',
    lon: '-116.602997',
    timezone: '-8'
  },
  {
    name: 'Don Miguel Hidalgo Y Costilla Intl ',
    city: 'Guadalajara',
    country: 'Mexico',
    IATA: 'GDL',
    ICAO: 'MMGL',
    lat: '20.521799087524414',
    lon: '-103.31099700927734',
    timezone: '-6'
  },
  {
    name: 'General Jos\u00e9 Mar\u00eda Y\u00e1\u00f1ez Intl ',
    city: 'Guaymas',
    country: 'Mexico',
    IATA: 'GYM',
    ICAO: 'MMGM',
    lat: '27.9689998626709',
    lon: '-110.92500305175781',
    timezone: '-7'
  },
  {
    name: 'Tehuacan ',
    city: 'Tehuacan',
    country: 'Mexico',
    IATA: 'TCN',
    ICAO: 'MMHC',
    lat: '18.49720001220703',
    lon: '-97.4198989868164',
    timezone: '-6'
  },
  {
    name: 'General Ignacio P. Garcia Intl ',
    city: 'Hermosillo',
    country: 'Mexico',
    IATA: 'HMO',
    ICAO: 'MMHO',
    lat: '29.095899581900003',
    lon: '-111.047996521',
    timezone: '-7'
  },
  {
    name: 'Licenciado Miguel de la Madrid ',
    city: 'Colima',
    country: 'Mexico',
    IATA: 'CLQ',
    ICAO: 'MMIA',
    lat: '19.277',
    lon: '-103.577002',
    timezone: '-6'
  },
  {
    name: 'Isla Mujeres ',
    city: 'Isla Mujeres',
    country: 'Mexico',
    IATA: 'ISJ',
    ICAO: 'MMIM',
    lat: '21.2450008392334',
    lon: '-86.73999786376953',
    timezone: '-5'
  },
  {
    name: 'Plan De Guadalupe Intl ',
    city: 'Saltillo',
    country: 'Mexico',
    IATA: 'SLW',
    ICAO: 'MMIO',
    lat: '25.54949951171875',
    lon: '-100.92900085449219',
    timezone: '-6'
  },
  {
    name: 'Ixtepec ',
    city: 'Iztepec',
    country: 'Mexico',
    IATA: 'IZT',
    ICAO: 'MMIT',
    lat: '16.449301',
    lon: '-95.093697',
    timezone: '-6'
  },
  {
    name: 'L\u00e1zaro C\u00e1rdenas ',
    city: 'Lazard Cardenas',
    country: 'Mexico',
    IATA: 'LZC',
    ICAO: 'MMLC',
    lat: '18.0016994476',
    lon: '-102.221000671',
    timezone: '-6'
  },
  {
    name: 'Valle del Fuerte Intl ',
    city: 'Los Mochis',
    country: 'Mexico',
    IATA: 'LMM',
    ICAO: 'MMLM',
    lat: '25.6851997375',
    lon: '-109.081001282',
    timezone: '-7'
  },
  {
    name: 'Del Baj\u00edo Intl ',
    city: 'Del Bajio',
    country: 'Mexico',
    IATA: 'BJX',
    ICAO: 'MMLO',
    lat: '20.9935',
    lon: '-101.481003',
    timezone: '-6'
  },
  {
    name: 'Manuel M\u00e1rquez de Le\u00f3n Intl ',
    city: 'La Paz',
    country: 'Mexico',
    IATA: 'LAP',
    ICAO: 'MMLP',
    lat: '24.072700500499998',
    lon: '-110.361999512',
    timezone: '-7'
  },
  {
    name: 'Loreto Intl ',
    city: 'Loreto',
    country: 'Mexico',
    IATA: 'LTO',
    ICAO: 'MMLT',
    lat: '25.989200592041016',
    lon: '-111.3479995727539',
    timezone: '-7'
  },
  {
    name: 'General Servando Canales Intl ',
    city: 'Matamoros',
    country: 'Mexico',
    IATA: 'MAM',
    ICAO: 'MMMA',
    lat: '25.7698993683',
    lon: '-97.5252990723',
    timezone: '-6'
  },
  {
    name: 'Licenciado Manuel Crescencio Rejon Int ',
    city: 'Merida',
    country: 'Mexico',
    IATA: 'MID',
    ICAO: 'MMMD',
    lat: '20.937000274699997',
    lon: '-89.657699585',
    timezone: '-6'
  },
  {
    name: 'General Rodolfo S\u00e1nchez Taboada Intl ',
    city: 'Mexicali',
    country: 'Mexico',
    IATA: 'MXL',
    ICAO: 'MMML',
    lat: '32.6306',
    lon: '-115.241997',
    timezone: '-8'
  },
  {
    name: 'General Francisco J. Mujica Intl ',
    city: 'Morelia',
    country: 'Mexico',
    IATA: 'MLM',
    ICAO: 'MMMM',
    lat: '19.849899292',
    lon: '-101.025001526',
    timezone: '-6'
  },
  {
    name: 'Minatitl\u00e1n/Coatzacoalcos National ',
    city: 'Minatitlan',
    country: 'Mexico',
    IATA: 'MTT',
    ICAO: 'MMMT',
    lat: '18.1033992767',
    lon: '-94.58070373540001',
    timezone: '-6'
  },
  {
    name: 'Monclova Intl ',
    city: 'Monclova',
    country: 'Mexico',
    IATA: 'LOV',
    ICAO: 'MMMV',
    lat: '26.9557',
    lon: '-101.470001',
    timezone: '-6'
  },
  {
    name: 'Licenciado Benito Juarez Intl ',
    city: 'Mexico City',
    country: 'Mexico',
    IATA: 'MEX',
    ICAO: 'MMMX',
    lat: '19.4363',
    lon: '-99.072098',
    timezone: '-6'
  },
  {
    name: 'General Mariano Escobedo Intl ',
    city: 'Monterrey',
    country: 'Mexico',
    IATA: 'MTY',
    ICAO: 'MMMY',
    lat: '25.7784996033',
    lon: '-100.107002258',
    timezone: '-6'
  },
  {
    name: 'General Rafael Buelna Intl ',
    city: 'Mazatlan',
    country: 'Mexico',
    IATA: 'MZT',
    ICAO: 'MMMZ',
    lat: '23.1613998413',
    lon: '-106.26599884',
    timezone: '-7'
  },
  {
    name: 'Nogales Intl ',
    city: 'Nogales',
    country: 'Mexico',
    IATA: 'NOG',
    ICAO: 'MMNG',
    lat: '31.22610092163086',
    lon: '-110.97599792480469',
    timezone: '-7'
  },
  {
    name: 'Quetzalc\u00f3atl Intl ',
    city: 'Nuevo Laredo',
    country: 'Mexico',
    IATA: 'NLD',
    ICAO: 'MMNL',
    lat: '27.4438991547',
    lon: '-99.5705032349',
    timezone: '-6'
  },
  {
    name: 'Xoxocotl\u00e1n Intl ',
    city: 'Oaxaca',
    country: 'Mexico',
    IATA: 'OAX',
    ICAO: 'MMOX',
    lat: '16.9999008179',
    lon: '-96.726600647',
    timezone: '-6'
  },
  {
    name: 'El Taj\u00edn National ',
    city: 'Poza Rico',
    country: 'Mexico',
    IATA: 'PAZ',
    ICAO: 'MMPA',
    lat: '20.6026992798',
    lon: '-97.46080017090001',
    timezone: '-6'
  },
  {
    name: 'Hermanos Serd\u00e1n Intl ',
    city: 'Puebla',
    country: 'Mexico',
    IATA: 'PBC',
    ICAO: 'MMPB',
    lat: '19.1581001282',
    lon: '-98.3713989258',
    timezone: '-6'
  },
  {
    name: 'Ingeniero Juan Guillermo Villasana ',
    city: 'Pachuca',
    country: 'Mexico',
    IATA: '\\N',
    ICAO: 'MMPC',
    lat: '20.0774',
    lon: '-98.782501',
    timezone: '-6'
  },
  {
    name: 'Mar de Cort\u00e9s Intl ',
    city: 'Punta Penasco',
    country: 'Mexico',
    IATA: 'PPE',
    ICAO: 'MMPE',
    lat: '31.351987',
    lon: '-113.305177',
    timezone: '-7'
  },
  {
    name: 'Piedras Negras Intl ',
    city: 'Piedras Negras',
    country: 'Mexico',
    IATA: 'PDS',
    ICAO: 'MMPG',
    lat: '28.627399',
    lon: '-100.535004',
    timezone: '-6'
  },
  {
    name: 'Licenciado y General Ignacio Lopez Rayon ',
    city: 'Uruapan',
    country: 'Mexico',
    IATA: 'UPN',
    ICAO: 'MMPN',
    lat: '19.396699905395508',
    lon: '-102.03900146484375',
    timezone: '-6'
  },
  {
    name: 'Licenciado Gustavo D\u00edaz Ordaz Intl ',
    city: 'Puerto Vallarta',
    country: 'Mexico',
    IATA: 'PVR',
    ICAO: 'MMPR',
    lat: '20.680099487304688',
    lon: '-105.25399780273438',
    timezone: '-6'
  },
  {
    name: 'Puerto Escondido Intl ',
    city: 'Puerto Escondido',
    country: 'Mexico',
    IATA: 'PXM',
    ICAO: 'MMPS',
    lat: '15.8769',
    lon: '-97.089103',
    timezone: '-6'
  },
  {
    name: 'Quer\u00e9taro Intercontinental ',
    city: 'Queretaro',
    country: 'Mexico',
    IATA: 'QRO',
    ICAO: 'MMQT',
    lat: '20.6173',
    lon: '-100.185997',
    timezone: '-6'
  },
  {
    name: 'General Lucio Blanco Intl ',
    city: 'Reynosa',
    country: 'Mexico',
    IATA: 'REX',
    ICAO: 'MMRX',
    lat: '26.0089',
    lon: '-98.2285',
    timezone: '-6'
  },
  {
    name: 'Los Cabos Intl ',
    city: 'San Jose Del Cabo',
    country: 'Mexico',
    IATA: 'SJD',
    ICAO: 'MMSD',
    lat: '23.15180015563965',
    lon: '-109.72100067138672',
    timezone: '-7'
  },
  {
    name: 'San Felipe Intl ',
    city: 'San Filipe',
    country: 'Mexico',
    IATA: 'SFH',
    ICAO: 'MMSF',
    lat: '30.930200576782',
    lon: '-114.80899810791',
    timezone: '-8'
  },
  {
    name: 'Ponciano Arriaga Intl ',
    city: 'San Luis Potosi',
    country: 'Mexico',
    IATA: 'SLP',
    ICAO: 'MMSP',
    lat: '22.254299163800003',
    lon: '-100.930999756',
    timezone: '-6'
  },
  {
    name: 'Tlaxcala ',
    city: 'Tlaxcala',
    country: 'Mexico',
    IATA: '\\N',
    ICAO: 'MMTA',
    lat: '19.537992',
    lon: '-98.173492',
    timezone: '-6'
  },
  {
    name: 'Ter\u00e1n Air Base',
    city: 'Tuxtla Gutierrez',
    country: 'Mexico',
    IATA: '\\N',
    ICAO: 'MMTB',
    lat: '16.739901',
    lon: '-93.173301',
    timezone: '-6'
  },
  {
    name: 'Francisco Sarabia Intl ',
    city: 'Torreon',
    country: 'Mexico',
    IATA: 'TRC',
    ICAO: 'MMTC',
    lat: '25.568300247199996',
    lon: '-103.411003113',
    timezone: '-6'
  },
  {
    name: 'Angel Albino Corzo Intl ',
    city: 'Tuxtla Gutierrez',
    country: 'Mexico',
    IATA: 'TGZ',
    ICAO: 'MMTG',
    lat: '16.5636005402',
    lon: '-93.02249908450001',
    timezone: '-6'
  },
  {
    name: 'General Abelardo L. Rodr\u00edguez Intl ',
    city: 'Tijuana',
    country: 'Mexico',
    IATA: 'TIJ',
    ICAO: 'MMTJ',
    lat: '32.541099548339844',
    lon: '-116.97000122070312',
    timezone: '-8'
  },
  {
    name: 'General Francisco Javier Mina Intl ',
    city: 'Tampico',
    country: 'Mexico',
    IATA: 'TAM',
    ICAO: 'MMTM',
    lat: '22.2964000702',
    lon: '-97.8658981323',
    timezone: '-6'
  },
  {
    name: 'Tamuin ',
    city: 'Tamuin',
    country: 'Mexico',
    IATA: 'TSL',
    ICAO: 'MMTN',
    lat: '22.0383',
    lon: '-98.806502',
    timezone: '-6'
  },
  {
    name: 'Licenciado Adolfo Lopez Mateos Intl ',
    city: 'Toluca',
    country: 'Mexico',
    IATA: 'TLC',
    ICAO: 'MMTO',
    lat: '19.3370990753',
    lon: '-99.56600189210002',
    timezone: '-6'
  },
  {
    name: 'Tapachula Intl ',
    city: 'Tapachula',
    country: 'Mexico',
    IATA: 'TAP',
    ICAO: 'MMTP',
    lat: '14.7943000793',
    lon: '-92.3700027466',
    timezone: '-6'
  },
  {
    name: 'Canc\u00fan Intl ',
    city: 'Cancun',
    country: 'Mexico',
    IATA: 'CUN',
    ICAO: 'MMUN',
    lat: '21.036500930800003',
    lon: '-86.8770980835',
    timezone: '-5'
  },
  {
    name: 'Carlos Rovirosa P\u00e9rez Intl ',
    city: 'Villahermosa',
    country: 'Mexico',
    IATA: 'VSA',
    ICAO: 'MMVA',
    lat: '17.996999740600586',
    lon: '-92.81739807128906',
    timezone: '-6'
  },
  {
    name: 'General Heriberto Jara Intl ',
    city: 'Vera Cruz',
    country: 'Mexico',
    IATA: 'VER',
    ICAO: 'MMVR',
    lat: '19.1459007263',
    lon: '-96.1873016357',
    timezone: '-6'
  },
  {
    name: 'General Leobardo C. Ruiz Intl ',
    city: 'Zacatecas',
    country: 'Mexico',
    IATA: 'ZCL',
    ICAO: 'MMZC',
    lat: '22.8971004486',
    lon: '-102.68699646',
    timezone: '-6'
  },
  {
    name: 'Ixtapa Zihuatanejo Intl ',
    city: 'Zihuatanejo',
    country: 'Mexico',
    IATA: 'ZIH',
    ICAO: 'MMZH',
    lat: '17.601600647',
    lon: '-101.460998535',
    timezone: '-6'
  },
  {
    name: 'Zamora ',
    city: 'Zamora',
    country: 'Mexico',
    IATA: 'ZMM',
    ICAO: 'MMZM',
    lat: '20.045',
    lon: '-102.276001',
    timezone: '-6'
  },
  {
    name: 'Playa De Oro Intl ',
    city: 'Manzanillo',
    country: 'Mexico',
    IATA: 'ZLO',
    ICAO: 'MMZO',
    lat: '19.144800186199998',
    lon: '-104.558998108',
    timezone: '-6'
  },
  {
    name: 'Zapopan ',
    city: 'Zapopan',
    country: 'Mexico',
    IATA: '\\N',
    ICAO: 'MMZP',
    lat: '20.747922',
    lon: '-103.461709',
    timezone: '-6'
  },
  {
    name: 'Bluefields ',
    city: 'Bluefields',
    country: 'Nicaragua',
    IATA: 'BEF',
    ICAO: 'MNBL',
    lat: '11.991000175476074',
    lon: '-83.77410125732422',
    timezone: '-6'
  },
  {
    name: 'Los Brasiles ',
    city: 'Los Brasiles',
    country: 'Nicaragua',
    IATA: '\\N',
    ICAO: 'MNBR',
    lat: '12.1899995803833',
    lon: '-86.35389709472656',
    timezone: '-6'
  },
  {
    name: 'Leon (Fanor Urroz) ',
    city: 'Leon',
    country: 'Nicaragua',
    IATA: '\\N',
    ICAO: 'MNLN',
    lat: '12.429200172424316',
    lon: '-86.90280151367188',
    timezone: '-6'
  },
  {
    name: 'Augusto C. Sandino (Managua) Intl ',
    city: 'Managua',
    country: 'Nicaragua',
    IATA: 'MGA',
    ICAO: 'MNMG',
    lat: '12.141500473022461',
    lon: '-86.16819763183594',
    timezone: '-6'
  },
  {
    name: 'Puerto Cabezas ',
    city: 'Puerto Cabezas',
    country: 'Nicaragua',
    IATA: 'PUZ',
    ICAO: 'MNPC',
    lat: '14.047200202941895',
    lon: '-83.38670349121094',
    timezone: '-6'
  },
  {
    name: 'Bocas Del Toro Intl ',
    city: 'Bocas Del Toro',
    country: 'Panama',
    IATA: 'BOC',
    ICAO: 'MPBO',
    lat: '9.340849876403809',
    lon: '-82.25080108642578',
    timezone: '-5'
  },
  {
    name: 'Cap Manuel Ni\u00f1o Intl ',
    city: 'Changuinola',
    country: 'Panama',
    IATA: 'CHX',
    ICAO: 'MPCH',
    lat: '9.458962',
    lon: '-82.515062',
    timezone: '-5'
  },
  {
    name: 'Enrique Malek Intl ',
    city: 'David',
    country: 'Panama',
    IATA: 'DAV',
    ICAO: 'MPDA',
    lat: '8.390999794006348',
    lon: '-82.43499755859375',
    timezone: '-5'
  },
  {
    name: 'Panama Pacific Intl ',
    city: 'Howard',
    country: 'Panama',
    IATA: 'BLB',
    ICAO: 'MPHO',
    lat: '8.91479',
    lon: '-79.599602',
    timezone: '-5'
  },
  {
    name: 'Marcos A. Gelabert Intl ',
    city: 'Panama',
    country: 'Panama',
    IATA: 'PAC',
    ICAO: 'MPMG',
    lat: '8.973340034484863',
    lon: '-79.55560302734375',
    timezone: '-5'
  },
  {
    name: 'Ruben Cantu ',
    city: 'Santiago',
    country: 'Panama',
    IATA: 'SYP',
    ICAO: 'MPSA',
    lat: '8.085599899291992',
    lon: '-80.94529724121094',
    timezone: '-5'
  },
  {
    name: 'Tocumen Intl ',
    city: 'Panama City',
    country: 'Panama',
    IATA: 'PTY',
    ICAO: 'MPTO',
    lat: '9.0713596344',
    lon: '-79.3834991455',
    timezone: '-5'
  },
  {
    name: 'Buenos Aires ',
    city: 'Buenos Aires',
    country: 'Costa Rica',
    IATA: 'BAI',
    ICAO: 'MRBA',
    lat: '9.163949',
    lon: '-83.330171',
    timezone: '-6'
  },
  {
    name: 'Coto 47 ',
    city: 'Coto 47',
    country: 'Costa Rica',
    IATA: 'OTR',
    ICAO: 'MRCC',
    lat: '8.60155963897705',
    lon: '-82.96859741210938',
    timezone: '-6'
  },
  {
    name: 'Chacarita ',
    city: 'Chacarita',
    country: 'Costa Rica',
    IATA: 'JAP',
    ICAO: 'MRCH',
    lat: '9.98141002655',
    lon: '-84.7726974487',
    timezone: '-6'
  },
  {
    name: 'El Carmen de Siquirres ',
    city: 'El Carmen',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MREC',
    lat: '10.20199966430664',
    lon: '-83.47219848632812',
    timezone: '-6'
  },
  {
    name: 'Finca 10 / Nuevo Palmar Sur ',
    city: 'Finca 10',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MRFI',
    lat: '8.916350364685059',
    lon: '-83.5073013305664',
    timezone: '-6'
  },
  {
    name: 'Golfito ',
    city: 'Golfito',
    country: 'Costa Rica',
    IATA: 'GLF',
    ICAO: 'MRGF',
    lat: '8.654009819030762',
    lon: '-83.18219757080078',
    timezone: '-6'
  },
  {
    name: 'Guapiles ',
    city: 'Guapiles',
    country: 'Costa Rica',
    IATA: 'GPL',
    ICAO: 'MRGP',
    lat: '10.2172002792',
    lon: '-83.79699707030001',
    timezone: '-6'
  },
  {
    name: 'Daniel Oduber Quiros Intl ',
    city: 'Liberia',
    country: 'Costa Rica',
    IATA: 'LIR',
    ICAO: 'MRLB',
    lat: '10.5933',
    lon: '-85.544403',
    timezone: '-6'
  },
  {
    name: 'Los Chiles ',
    city: 'Los Chiles',
    country: 'Costa Rica',
    IATA: 'LSL',
    ICAO: 'MRLC',
    lat: '11.035300254821777',
    lon: '-84.70610046386719',
    timezone: '-6'
  },
  {
    name: 'Limon Intl ',
    city: 'Limon',
    country: 'Costa Rica',
    IATA: 'LIO',
    ICAO: 'MRLM',
    lat: '9.95796012878418',
    lon: '-83.02200317382812',
    timezone: '-6'
  },
  {
    name: 'Nosara ',
    city: 'Nosara Beach',
    country: 'Costa Rica',
    IATA: 'NOB',
    ICAO: 'MRNS',
    lat: '9.976490020750001',
    lon: '-85.65299987790002',
    timezone: '-6'
  },
  {
    name: 'Juan Santamaria Intl ',
    city: 'San Jose',
    country: 'Costa Rica',
    IATA: 'SJO',
    ICAO: 'MROC',
    lat: '9.993860244750977',
    lon: '-84.20880126953125',
    timezone: '-6'
  },
  {
    name: 'Pandora ',
    city: 'Pandora',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MRPD',
    lat: '9.732170104980469',
    lon: '-82.98320007324219',
    timezone: '-6'
  },
  {
    name: 'Palmar Sur ',
    city: 'Palmar Sur',
    country: 'Costa Rica',
    IATA: 'PMZ',
    ICAO: 'MRPM',
    lat: '8.951029777526855',
    lon: '-83.46859741210938',
    timezone: '-6'
  },
  {
    name: 'Quepos Managua ',
    city: 'Quepos',
    country: 'Costa Rica',
    IATA: 'XQP',
    ICAO: 'MRQP',
    lat: '9.443160057067871',
    lon: '-84.12979888916016',
    timezone: '-6'
  },
  {
    name: 'Santa Clara De Guapiles ',
    city: 'Santa Clara',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MRSG',
    lat: '10.288299560546875',
    lon: '-83.7135009765625',
    timezone: '-6'
  },
  {
    name: 'San Vito De Java ',
    city: 'San Vito De Jaba',
    country: 'Costa Rica',
    IATA: 'TOO',
    ICAO: 'MRSV',
    lat: '8.826109886169434',
    lon: '-82.95890045166016',
    timezone: '-6'
  },
  {
    name: 'Monse\u00f1or \u00d3scar Arnulfo Romero Intl ',
    city: 'San Salvador',
    country: 'El Salvador',
    IATA: 'SAL',
    ICAO: 'MSLP',
    lat: '13.4409',
    lon: '-89.055702',
    timezone: '-6'
  },
  {
    name: 'Ilopango Intl ',
    city: 'San Salvador',
    country: 'El Salvador',
    IATA: '\\N',
    ICAO: 'MSSS',
    lat: '13.69950008392334',
    lon: '-89.11990356445312',
    timezone: '-6'
  },
  {
    name: 'Les Cayes ',
    city: 'Cayes',
    country: 'Haiti',
    IATA: 'CYA',
    ICAO: 'MTCA',
    lat: '18.271099090576172',
    lon: '-73.78829956054688',
    timezone: '-5'
  },
  {
    name: 'Cap Haitien Intl ',
    city: 'Cap Haitien',
    country: 'Haiti',
    IATA: 'CAP',
    ICAO: 'MTCH',
    lat: '19.733',
    lon: '-72.194702',
    timezone: '-5'
  },
  {
    name: 'Jacmel ',
    city: 'Jacmel',
    country: 'Haiti',
    IATA: 'JAK',
    ICAO: 'MTJA',
    lat: '18.241100311279297',
    lon: '-72.51850128173828',
    timezone: '-5'
  },
  {
    name: 'Toussaint Louverture Intl ',
    city: 'Port-au-prince',
    country: 'Haiti',
    IATA: 'PAP',
    ICAO: 'MTPP',
    lat: '18.579999923706055',
    lon: '-72.2925033569336',
    timezone: '-5'
  },
  {
    name: 'Gustavo Rizo ',
    city: 'Baracoa Playa',
    country: 'Cuba',
    IATA: 'BCA',
    ICAO: 'MUBA',
    lat: '20.365299224853516',
    lon: '-74.5062026977539',
    timezone: '-5'
  },
  {
    name: 'Carlos Manuel de Cespedes ',
    city: 'Bayamo',
    country: 'Cuba',
    IATA: 'BYM',
    ICAO: 'MUBY',
    lat: '20.396400451660156',
    lon: '-76.62139892578125',
    timezone: '-5'
  },
  {
    name: 'Maximo Gomez ',
    city: 'Ciego De Avila',
    country: 'Cuba',
    IATA: 'AVI',
    ICAO: 'MUCA',
    lat: '22.027099609375',
    lon: '-78.78959655761719',
    timezone: '-5'
  },
  {
    name: 'Jardines Del Rey ',
    city: 'Cunagua',
    country: 'Cuba',
    IATA: 'CCC',
    ICAO: 'MUCC',
    lat: '22.461000442499998',
    lon: '-78.32839965820001',
    timezone: '-5'
  },
  {
    name: 'Jaime Gonzalez ',
    city: 'Cienfuegos',
    country: 'Cuba',
    IATA: 'CFG',
    ICAO: 'MUCF',
    lat: '22.149999618530273',
    lon: '-80.41419982910156',
    timezone: '-5'
  },
  {
    name: 'Vilo Acu\u00f1a Intl ',
    city: 'Cayo Largo del Sur',
    country: 'Cuba',
    IATA: 'CYO',
    ICAO: 'MUCL',
    lat: '21.6165008545',
    lon: '-81.5459976196',
    timezone: '-5'
  },
  {
    name: 'Ignacio Agramonte Intl ',
    city: 'Camaguey',
    country: 'Cuba',
    IATA: 'CMW',
    ICAO: 'MUCM',
    lat: '21.420299530029297',
    lon: '-77.84750366210938',
    timezone: '-5'
  },
  {
    name: 'Antonio Maceo Intl ',
    city: 'Santiago De Cuba',
    country: 'Cuba',
    IATA: 'SCU',
    ICAO: 'MUCU',
    lat: '19.96980094909668',
    lon: '-75.83540344238281',
    timezone: '-5'
  },
  {
    name: 'Florida ',
    city: 'Florida',
    country: 'Cuba',
    IATA: '\\N',
    ICAO: 'MUFL',
    lat: '21.49970054626465',
    lon: '-78.20279693603516',
    timezone: '-5'
  },
  {
    name: 'Leeward Point Field',
    city: 'Guantanamo',
    country: 'Cuba',
    IATA: 'NBW',
    ICAO: 'MUGM',
    lat: '19.906499862671',
    lon: '-75.207099914551',
    timezone: '-5'
  },
  {
    name: 'Mariana Grajales ',
    city: 'Guantanamo',
    country: 'Cuba',
    IATA: 'GAO',
    ICAO: 'MUGT',
    lat: '20.08530044555664',
    lon: '-75.1583023071289',
    timezone: '-5'
  },
  {
    name: 'Jos\u00e9 Mart\u00ed Intl ',
    city: 'Havana',
    country: 'Cuba',
    IATA: 'HAV',
    ICAO: 'MUHA',
    lat: '22.989200592041016',
    lon: '-82.40910339355469',
    timezone: '-5'
  },
  {
    name: 'Frank Pais Intl ',
    city: 'Holguin',
    country: 'Cuba',
    IATA: 'HOG',
    ICAO: 'MUHG',
    lat: '20.785600662231445',
    lon: '-76.31510162353516',
    timezone: '-5'
  },
  {
    name: 'La Coloma ',
    city: 'La Coloma',
    country: 'Cuba',
    IATA: 'LCL',
    ICAO: 'MULM',
    lat: '22.33609962463379',
    lon: '-83.64189910888672',
    timezone: '-5'
  },
  {
    name: 'Orestes Acosta ',
    city: 'Moa',
    country: 'Cuba',
    IATA: 'MOA',
    ICAO: 'MUMO',
    lat: '20.653900146484375',
    lon: '-74.92220306396484',
    timezone: '-5'
  },
  {
    name: 'Sierra Maestra ',
    city: 'Manzanillo',
    country: 'Cuba',
    IATA: 'MZO',
    ICAO: 'MUMZ',
    lat: '20.28809928894043',
    lon: '-77.08920288085938',
    timezone: '-5'
  },
  {
    name: 'Rafael Cabrera ',
    city: 'Nueva Gerona',
    country: 'Cuba',
    IATA: 'GER',
    ICAO: 'MUNG',
    lat: '21.834699630737305',
    lon: '-82.78379821777344',
    timezone: '-5'
  },
  {
    name: 'Playa Baracoa ',
    city: 'Baracoa Playa',
    country: 'Cuba',
    IATA: 'UPB',
    ICAO: 'MUPB',
    lat: '23.032800674399997',
    lon: '-82.5793991089',
    timezone: '-5'
  },
  {
    name: 'Pinar Del Rio ',
    city: 'Pinar Del Rio Norte',
    country: 'Cuba',
    IATA: 'QPD',
    ICAO: 'MUPR',
    lat: '22.42140007019043',
    lon: '-83.67839813232422',
    timezone: '-5'
  },
  {
    name: 'San Antonio De Los Banos ',
    city: 'San Antonio De Banos',
    country: 'Cuba',
    IATA: '\\N',
    ICAO: 'MUSA',
    lat: '22.87150001525879',
    lon: '-82.5093002319336',
    timezone: '-5'
  },
  {
    name: 'Abel Santamaria ',
    city: 'Santa Clara',
    country: 'Cuba',
    IATA: 'SNU',
    ICAO: 'MUSC',
    lat: '22.49220085144043',
    lon: '-79.943603515625',
    timezone: '-5'
  },
  {
    name: 'Joaqu\u00edn de Ag\u00fcero ',
    city: 'Santa Lucia',
    country: 'Cuba',
    IATA: '\\N',
    ICAO: 'MUSL',
    lat: '21.509455906699998',
    lon: '-77.02059745790001',
    timezone: '-5'
  },
  {
    name: 'Siguanea ',
    city: 'Siguanea',
    country: 'Cuba',
    IATA: 'SZJ',
    ICAO: 'MUSN',
    lat: '21.642499923706055',
    lon: '-82.9551010131836',
    timezone: '-5'
  },
  {
    name: 'Sancti Spiritus ',
    city: 'Sancti Spiritus',
    country: 'Cuba',
    IATA: 'USS',
    ICAO: 'MUSS',
    lat: '21.9704',
    lon: '-79.442703',
    timezone: '-5'
  },
  {
    name: 'Juan Gualberto Gomez Intl ',
    city: 'Varadero',
    country: 'Cuba',
    IATA: 'VRA',
    ICAO: 'MUVR',
    lat: '23.034400939941406',
    lon: '-81.435302734375',
    timezone: '-5'
  },
  {
    name: 'Hermanos Ameijeiras ',
    city: 'Las Tunas',
    country: 'Cuba',
    IATA: 'VTU',
    ICAO: 'MUVT',
    lat: '20.987600326538086',
    lon: '-76.93579864501953',
    timezone: '-5'
  },
  {
    name: 'Gerrard Smith Intl ',
    city: 'Cayman Brac',
    country: 'Cayman Islands',
    IATA: 'CYB',
    ICAO: 'MWCB',
    lat: '19.687000274658203',
    lon: '-79.88279724121094',
    timezone: '-5'
  },
  {
    name: 'Owen Roberts Intl ',
    city: 'Georgetown',
    country: 'Cayman Islands',
    IATA: 'GCM',
    ICAO: 'MWCR',
    lat: '19.292800903299998',
    lon: '-81.3576965332',
    timezone: '-5'
  },
  {
    name: 'Clarence A. Bain ',
    city: 'Clarence Bain',
    country: 'Bahamas',
    IATA: 'MAY',
    ICAO: 'MYAB',
    lat: '24.287700653076172',
    lon: '-77.68460083007812',
    timezone: '-5'
  },
  {
    name: 'Andros Town ',
    city: 'Andros Town',
    country: 'Bahamas',
    IATA: 'ASD',
    ICAO: 'MYAF',
    lat: '24.697900772094727',
    lon: '-77.79560089111328',
    timezone: '-5'
  },
  {
    name: 'Leonard M Thompson Intl ',
    city: 'Marsh Harbor',
    country: 'Bahamas',
    IATA: 'MHH',
    ICAO: 'MYAM',
    lat: '26.5114',
    lon: '-77.083503',
    timezone: '-5'
  },
  {
    name: 'San Andros ',
    city: 'San Andros',
    country: 'Bahamas',
    IATA: 'SAQ',
    ICAO: 'MYAN',
    lat: '25.053800582885742',
    lon: '-78.04900360107422',
    timezone: '-5'
  },
  {
    name: 'Spring Point ',
    city: 'Spring Point',
    country: 'Bahamas',
    IATA: 'AXP',
    ICAO: 'MYAP',
    lat: '22.441799163800003',
    lon: '-73.97090148930002',
    timezone: '-5'
  },
  {
    name: 'Sandy Point ',
    city: 'Sandy Point',
    country: 'Bahamas',
    IATA: '\\N',
    ICAO: 'MYAS',
    lat: '26.004600524902344',
    lon: '-77.39550018310547',
    timezone: '-5'
  },
  {
    name: 'Treasure Cay ',
    city: 'Treasure Cay',
    country: 'Bahamas',
    IATA: 'TCB',
    ICAO: 'MYAT',
    lat: '26.745300293',
    lon: '-77.3912963867',
    timezone: '-5'
  },
  {
    name: 'Chub Cay ',
    city: 'Chub Cay',
    country: 'Bahamas',
    IATA: 'CCZ',
    ICAO: 'MYBC',
    lat: '25.41710090637207',
    lon: '-77.88089752197266',
    timezone: '-5'
  },
  {
    name: 'Great Harbour Cay ',
    city: 'Bullocks Harbour',
    country: 'Bahamas',
    IATA: 'GHC',
    ICAO: 'MYBG',
    lat: '25.7383',
    lon: '-77.840103',
    timezone: '-5'
  },
  {
    name: 'South Bimini ',
    city: 'Alice Town',
    country: 'Bahamas',
    IATA: 'BIM',
    ICAO: 'MYBS',
    lat: '25.6998996735',
    lon: '-79.2647018433',
    timezone: '-5'
  },
  {
    name: 'Exuma Intl ',
    city: 'Great Exuma',
    country: 'Bahamas',
    IATA: 'GGT',
    ICAO: 'MYEF',
    lat: '23.5625991821',
    lon: '-75.8779983521',
    timezone: '-5'
  },
  {
    name: 'George Town ',
    city: 'George Town',
    country: 'Bahamas',
    IATA: '\\N',
    ICAO: 'MYEG',
    lat: '23.4666996002',
    lon: '-75.78170013430001',
    timezone: '-5'
  },
  {
    name: 'North Eleuthera ',
    city: 'North Eleuthera',
    country: 'Bahamas',
    IATA: 'ELH',
    ICAO: 'MYEH',
    lat: '25.474899292',
    lon: '-76.6835021973',
    timezone: '-5'
  },
  {
    name: "Governor's Harbour ",
    city: "Governor's Harbor",
    country: 'Bahamas',
    IATA: 'GHB',
    ICAO: 'MYEM',
    lat: '25.2847003937',
    lon: '-76.3310012817',
    timezone: '-5'
  },
  {
    name: 'Normans Cay ',
    city: "Norman's Cay",
    country: 'Bahamas',
    IATA: 'NMC',
    ICAO: 'MYEN',
    lat: '24.59429931640625',
    lon: '-76.82019805908203',
    timezone: '-5'
  },
  {
    name: 'Rock Sound ',
    city: 'Rock Sound',
    country: 'Bahamas',
    IATA: 'RSD',
    ICAO: 'MYER',
    lat: '24.8950787333',
    lon: '-76.1768817902',
    timezone: '-5'
  },
  {
    name: 'Staniel Cay ',
    city: 'Staniel Cay',
    country: 'Bahamas',
    IATA: 'TYM',
    ICAO: 'MYES',
    lat: '24.169099807739258',
    lon: '-76.43910217285156',
    timezone: '-5'
  },
  {
    name: 'Grand Bahama Intl ',
    city: 'Freeport',
    country: 'Bahamas',
    IATA: 'FPO',
    ICAO: 'MYGF',
    lat: '26.5587005615',
    lon: '-78.695602417',
    timezone: '-5'
  },
  {
    name: 'Inagua ',
    city: 'Matthew Town',
    country: 'Bahamas',
    IATA: 'IGA',
    ICAO: 'MYIG',
    lat: '20.975000381469727',
    lon: '-73.66690063476562',
    timezone: '-5'
  },
  {
    name: "Deadman's Cay ",
    city: "Dead Man's Cay",
    country: 'Bahamas',
    IATA: 'LGI',
    ICAO: 'MYLD',
    lat: '23.1790008545',
    lon: '-75.09359741210001',
    timezone: '-5'
  },
  {
    name: 'Stella Maris ',
    city: 'Stella Maris',
    country: 'Bahamas',
    IATA: 'SML',
    ICAO: 'MYLS',
    lat: '23.582317',
    lon: '-75.268621',
    timezone: '-5'
  },
  {
    name: 'Mayaguana ',
    city: 'Mayaguana',
    country: 'Bahamas',
    IATA: 'MYG',
    ICAO: 'MYMM',
    lat: '22.379499',
    lon: '-73.013494',
    timezone: '-5'
  },
  {
    name: 'Lynden Pindling Intl ',
    city: 'Nassau',
    country: 'Bahamas',
    IATA: 'NAS',
    ICAO: 'MYNN',
    lat: '25.0389995575',
    lon: '-77.46620178219999',
    timezone: '-5'
  },
  {
    name: 'Duncan Town ',
    city: 'Duncan Town',
    country: 'Bahamas',
    IATA: 'DCT',
    ICAO: 'MYRD',
    lat: '22.181800842285156',
    lon: '-75.72949981689453',
    timezone: '-5'
  },
  {
    name: 'Rum Cay ',
    city: 'Port Nelson',
    country: 'Bahamas',
    IATA: 'RCY',
    ICAO: 'MYRP',
    lat: '23.68440055847168',
    lon: '-74.83619689941406',
    timezone: '-5'
  },
  {
    name: 'San Salvador ',
    city: 'Cockburn Town',
    country: 'Bahamas',
    IATA: 'ZSA',
    ICAO: 'MYSM',
    lat: '24.06329917907715',
    lon: '-74.52400207519531',
    timezone: '-5'
  },
  {
    name: 'Philip S. W. Goldson Intl ',
    city: 'Belize City',
    country: 'Belize',
    IATA: 'BZE',
    ICAO: 'MZBZ',
    lat: '17.539100646972656',
    lon: '-88.30819702148438',
    timezone: '-6'
  },
  {
    name: 'Aitutaki ',
    city: 'Aitutaki',
    country: 'Cook Islands',
    IATA: 'AIT',
    ICAO: 'NCAI',
    lat: '-18.830900192260742',
    lon: '-159.76400756835938',
    timezone: '-10'
  },
  {
    name: 'Rarotonga Intl ',
    city: 'Avarua',
    country: 'Cook Islands',
    IATA: 'RAR',
    ICAO: 'NCRG',
    lat: '-21.2026996613',
    lon: '-159.805999756',
    timezone: '-10'
  },
  {
    name: 'Nadi Intl ',
    city: 'Nandi',
    country: 'Fiji',
    IATA: 'NAN',
    ICAO: 'NFFN',
    lat: '-17.755399703979492',
    lon: '177.4429931640625',
    timezone: '12'
  },
  {
    name: 'Nausori Intl ',
    city: 'Nausori',
    country: 'Fiji',
    IATA: 'SUV',
    ICAO: 'NFNA',
    lat: '-18.04330062866211',
    lon: '178.5590057373047',
    timezone: '12'
  },
  {
    name: "Fua'amotu Intl ",
    city: 'Tongatapu',
    country: 'Tonga',
    IATA: 'TBU',
    ICAO: 'NFTF',
    lat: '-21.241199493408203',
    lon: '-175.14999389648438',
    timezone: '13'
  },
  {
    name: "Vava'u Intl ",
    city: "Vava'u",
    country: 'Tonga',
    IATA: 'VAV',
    ICAO: 'NFTV',
    lat: '-18.58530044555664',
    lon: '-173.96200561523438',
    timezone: '13'
  },
  {
    name: 'Bonriki Intl ',
    city: 'Tarawa',
    country: 'Kiribati',
    IATA: 'TRW',
    ICAO: 'NGTA',
    lat: '1.3816399574279785',
    lon: '173.14700317382812',
    timezone: '12'
  },
  {
    name: 'Tabiteuea North ',
    city: 'Tabiteuea North',
    country: 'Kiribati',
    IATA: 'TBF',
    ICAO: 'NGTE',
    lat: '-1.2244700193405151',
    lon: '174.7760009765625',
    timezone: '12'
  },
  {
    name: 'Hihifo ',
    city: 'Wallis',
    country: 'Wallis and Futuna',
    IATA: 'WLS',
    ICAO: 'NLWW',
    lat: '-13.2383003235',
    lon: '-176.199005127',
    timezone: '12'
  },
  {
    name: 'Faleolo Intl ',
    city: 'Faleolo',
    country: 'Samoa',
    IATA: 'APW',
    ICAO: 'NSFA',
    lat: '-13.829999923706055',
    lon: '-172.00799560546875',
    timezone: '13'
  },
  {
    name: 'Pago Pago Intl ',
    city: 'Pago Pago',
    country: 'American Samoa',
    IATA: 'PPG',
    ICAO: 'NSTU',
    lat: '-14.3310003281',
    lon: '-170.710006714',
    timezone: '-11'
  },
  {
    name: 'Rurutu ',
    city: 'Rurutu',
    country: 'French Polynesia',
    IATA: 'RUR',
    ICAO: 'NTAR',
    lat: '-22.434099197387695',
    lon: '-151.36099243164062',
    timezone: '-10'
  },
  {
    name: 'Tubuai ',
    city: 'Tubuai',
    country: 'French Polynesia',
    IATA: 'TUB',
    ICAO: 'NTAT',
    lat: '-23.365400314331055',
    lon: '-149.5240020751953',
    timezone: '-10'
  },
  {
    name: 'Anaa ',
    city: 'Anaa',
    country: 'French Polynesia',
    IATA: 'AAA',
    ICAO: 'NTGA',
    lat: '-17.35260009765625',
    lon: '-145.50999450683594',
    timezone: '-10'
  },
  {
    name: 'Fangatau ',
    city: 'Fangatau',
    country: 'French Polynesia',
    IATA: 'FGU',
    ICAO: 'NTGB',
    lat: '-15.819899559020996',
    lon: '-140.88699340820312',
    timezone: '-10'
  },
  {
    name: 'Tikehau ',
    city: 'Tikehau',
    country: 'French Polynesia',
    IATA: 'TIH',
    ICAO: 'NTGC',
    lat: '-15.119600296020508',
    lon: '-148.2310028076172',
    timezone: '-10'
  },
  {
    name: 'Reao ',
    city: 'Reao',
    country: 'French Polynesia',
    IATA: 'REA',
    ICAO: 'NTGE',
    lat: '-18.465900421142578',
    lon: '-136.44000244140625',
    timezone: '-10'
  },
  {
    name: 'Fakarava ',
    city: 'Fakarava',
    country: 'French Polynesia',
    IATA: 'FAV',
    ICAO: 'NTGF',
    lat: '-16.054100036621094',
    lon: '-145.65699768066406',
    timezone: '-10'
  },
  {
    name: 'Manihi ',
    city: 'Manihi',
    country: 'French Polynesia',
    IATA: 'XMH',
    ICAO: 'NTGI',
    lat: '-14.436800003051758',
    lon: '-146.07000732421875',
    timezone: '-10'
  },
  {
    name: 'Totegegie ',
    city: 'Totegegie',
    country: 'French Polynesia',
    IATA: 'GMR',
    ICAO: 'NTGJ',
    lat: '-23.07990074157715',
    lon: '-134.88999938964844',
    timezone: '-9'
  },
  {
    name: 'Kaukura ',
    city: 'Kaukura Atoll',
    country: 'French Polynesia',
    IATA: 'KKR',
    ICAO: 'NTGK',
    lat: '-15.663299560546875',
    lon: '-146.88499450683594',
    timezone: '-10'
  },
  {
    name: 'Makemo ',
    city: 'Makemo',
    country: 'French Polynesia',
    IATA: 'MKP',
    ICAO: 'NTGM',
    lat: '-16.583900451660156',
    lon: '-143.6580047607422',
    timezone: '-10'
  },
  {
    name: 'Puka Puka ',
    city: 'Puka Puka',
    country: 'French Polynesia',
    IATA: 'PKP',
    ICAO: 'NTGP',
    lat: '-14.809499740600586',
    lon: '-138.81300354003906',
    timezone: '-10'
  },
  {
    name: 'Takapoto ',
    city: 'Takapoto',
    country: 'French Polynesia',
    IATA: 'TKP',
    ICAO: 'NTGT',
    lat: '-14.709500312805176',
    lon: '-145.24600219726562',
    timezone: '-10'
  },
  {
    name: 'Arutua ',
    city: 'Arutua',
    country: 'French Polynesia',
    IATA: 'AXR',
    ICAO: 'NTGU',
    lat: '-15.248299598693848',
    lon: '-146.61700439453125',
    timezone: '-10'
  },
  {
    name: 'Mataiva ',
    city: 'Mataiva',
    country: 'French Polynesia',
    IATA: 'MVT',
    ICAO: 'NTGV',
    lat: '-14.8681001663208',
    lon: '-148.7169952392578',
    timezone: '-10'
  },
  {
    name: 'Takaroa ',
    city: 'Takaroa',
    country: 'French Polynesia',
    IATA: 'TKX',
    ICAO: 'NTKR',
    lat: '-14.45580005645752',
    lon: '-145.02499389648438',
    timezone: '-10'
  },
  {
    name: 'Nuku Hiva ',
    city: 'Nuku Hiva',
    country: 'French Polynesia',
    IATA: 'NHV',
    ICAO: 'NTMD',
    lat: '-8.795599937438965',
    lon: '-140.22900390625',
    timezone: '-9.5'
  },
  {
    name: 'Bora Bora ',
    city: 'Bora Bora',
    country: 'French Polynesia',
    IATA: 'BOB',
    ICAO: 'NTTB',
    lat: '-16.444400787353516',
    lon: '-151.75100708007812',
    timezone: '-10'
  },
  {
    name: 'Rangiroa ',
    city: 'Rangiroa',
    country: 'French Polynesia',
    IATA: 'RGI',
    ICAO: 'NTTG',
    lat: '-14.954299926757812',
    lon: '-147.66099548339844',
    timezone: '-10'
  },
  {
    name: 'Huahine-Fare ',
    city: 'Huahine Island',
    country: 'French Polynesia',
    IATA: 'HUH',
    ICAO: 'NTTH',
    lat: '-16.68720054626465',
    lon: '-151.02200317382812',
    timezone: '-10'
  },
  {
    name: 'Moorea ',
    city: 'Moorea',
    country: 'French Polynesia',
    IATA: 'MOZ',
    ICAO: 'NTTM',
    lat: '-17.49',
    lon: '-149.761993',
    timezone: '-10'
  },
  {
    name: 'Hao ',
    city: 'Hao Island',
    country: 'French Polynesia',
    IATA: 'HOI',
    ICAO: 'NTTO',
    lat: '-18.074800491333008',
    lon: '-140.9459991455078',
    timezone: '-10'
  },
  {
    name: 'Maupiti ',
    city: 'Maupiti',
    country: 'French Polynesia',
    IATA: 'MAU',
    ICAO: 'NTTP',
    lat: '-16.42650032043457',
    lon: '-152.24400329589844',
    timezone: '-10'
  },
  {
    name: 'Raiatea ',
    city: 'Raiatea Island',
    country: 'French Polynesia',
    IATA: 'RFP',
    ICAO: 'NTTR',
    lat: '-16.7229',
    lon: '-151.466003',
    timezone: '-10'
  },
  {
    name: 'Bauerfield Intl ',
    city: 'Port-vila',
    country: 'Vanuatu',
    IATA: 'VLI',
    ICAO: 'NVVV',
    lat: '-17.699300765991',
    lon: '168.32000732422',
    timezone: '11'
  },
  {
    name: 'Kon\u00e9 ',
    city: 'Kone',
    country: 'New Caledonia',
    IATA: 'KNQ',
    ICAO: 'NWWD',
    lat: '-21.05430030822754',
    lon: '164.83700561523438',
    timezone: '11'
  },
  {
    name: 'Koumac ',
    city: 'Koumac',
    country: 'New Caledonia',
    IATA: 'KOC',
    ICAO: 'NWWK',
    lat: '-20.546300888061523',
    lon: '164.25599670410156',
    timezone: '11'
  },
  {
    name: 'Lifou ',
    city: 'Lifou',
    country: 'New Caledonia',
    IATA: 'LIF',
    ICAO: 'NWWL',
    lat: '-20.774799346923828',
    lon: '167.24000549316406',
    timezone: '11'
  },
  {
    name: 'Noum\u00e9a Magenta ',
    city: 'Noumea',
    country: 'New Caledonia',
    IATA: 'GEA',
    ICAO: 'NWWM',
    lat: '-22.25830078125',
    lon: '166.47300720214844',
    timezone: '11'
  },
  {
    name: 'Mar\u00e9 ',
    city: 'Mare',
    country: 'New Caledonia',
    IATA: 'MEE',
    ICAO: 'NWWR',
    lat: '-21.481700897216797',
    lon: '168.03799438476562',
    timezone: '11'
  },
  {
    name: 'Touho ',
    city: 'Touho',
    country: 'New Caledonia',
    IATA: 'TOU',
    ICAO: 'NWWU',
    lat: '-20.790000915527344',
    lon: '165.25900268554688',
    timezone: '11'
  },
  {
    name: 'Ouv\u00e9a ',
    city: 'Ouvea',
    country: 'New Caledonia',
    IATA: 'UVE',
    ICAO: 'NWWV',
    lat: '-20.640600204467773',
    lon: '166.572998046875',
    timezone: '11'
  },
  {
    name: 'La Tontouta Intl ',
    city: 'Noumea',
    country: 'New Caledonia',
    IATA: 'NOU',
    ICAO: 'NWWW',
    lat: '-22.01460075378418',
    lon: '166.21299743652344',
    timezone: '11'
  },
  {
    name: 'Auckland Intl ',
    city: 'Auckland',
    country: 'New Zealand',
    IATA: 'AKL',
    ICAO: 'NZAA',
    lat: '-37.008098602299995',
    lon: '174.792007446',
    timezone: '12'
  },
  {
    name: 'Taupo ',
    city: 'Taupo',
    country: 'New Zealand',
    IATA: 'TUO',
    ICAO: 'NZAP',
    lat: '-38.73970031738281',
    lon: '176.08399963378906',
    timezone: '12'
  },
  {
    name: 'Ardmore ',
    city: 'Ardmore',
    country: 'New Zealand',
    IATA: 'AMZ',
    ICAO: 'NZAR',
    lat: '-37.029701232910156',
    lon: '174.97300720214844',
    timezone: '12'
  },
  {
    name: 'Christchurch Intl ',
    city: 'Christchurch',
    country: 'New Zealand',
    IATA: 'CHC',
    ICAO: 'NZCH',
    lat: '-43.48939895629883',
    lon: '172.53199768066406',
    timezone: '12'
  },
  {
    name: 'Chatham Islands-Tuuta ',
    city: 'Chatham Island',
    country: 'New Zealand',
    IATA: 'CHT',
    ICAO: 'NZCI',
    lat: '-43.810001373291016',
    lon: '-176.45700073242188',
    timezone: '12.75'
  },
  {
    name: 'Dunedin ',
    city: 'Dunedin',
    country: 'New Zealand',
    IATA: 'DUD',
    ICAO: 'NZDN',
    lat: '-45.9281005859375',
    lon: '170.197998046875',
    timezone: '12'
  },
  {
    name: 'Gisborne ',
    city: 'Gisborne',
    country: 'New Zealand',
    IATA: 'GIS',
    ICAO: 'NZGS',
    lat: '-38.663299560546875',
    lon: '177.97799682617188',
    timezone: '12'
  },
  {
    name: 'Glentanner ',
    city: 'Glentanner',
    country: 'New Zealand',
    IATA: 'GTN',
    ICAO: 'NZGT',
    lat: '-43.906700134277344',
    lon: '170.1280059814453',
    timezone: '12'
  },
  {
    name: 'Hokitika Airfield',
    city: 'Hokitika',
    country: 'New Zealand',
    IATA: 'HKK',
    ICAO: 'NZHK',
    lat: '-42.713600158691406',
    lon: '170.98500061035156',
    timezone: '12'
  },
  {
    name: 'Hamilton Intl ',
    city: 'Hamilton',
    country: 'New Zealand',
    IATA: 'HLZ',
    ICAO: 'NZHN',
    lat: '-37.8666992188',
    lon: '175.332000732',
    timezone: '12'
  },
  {
    name: 'Hastings Aerodrome',
    city: 'Hastings',
    country: 'New Zealand',
    IATA: '\\N',
    ICAO: 'NZHS',
    lat: '-39.646702',
    lon: '176.766998',
    timezone: '12'
  },
  {
    name: 'Kerikeri ',
    city: 'Kerikeri',
    country: 'New Zealand',
    IATA: 'KKE',
    ICAO: 'NZKK',
    lat: '-35.26279830932617',
    lon: '173.91200256347656',
    timezone: '12'
  },
  {
    name: 'Kaitaia ',
    city: 'Kaitaia',
    country: 'New Zealand',
    IATA: 'KAT',
    ICAO: 'NZKT',
    lat: '-35.06999969482422',
    lon: '173.28500366210938',
    timezone: '12'
  },
  {
    name: 'Alexandra ',
    city: 'Alexandra',
    country: 'New Zealand',
    IATA: 'ALR',
    ICAO: 'NZLX',
    lat: '-45.211700439453125',
    lon: '169.3730010986328',
    timezone: '12'
  },
  {
    name: 'Mount Cook ',
    city: 'Mount Cook',
    country: 'New Zealand',
    IATA: 'MON',
    ICAO: 'NZMC',
    lat: '-43.76499938964844',
    lon: '170.13299560546875',
    timezone: '12'
  },
  {
    name: 'Manapouri ',
    city: 'Manapouri',
    country: 'New Zealand',
    IATA: 'TEU',
    ICAO: 'NZMO',
    lat: '-45.53310012817383',
    lon: '167.64999389648438',
    timezone: '12'
  },
  {
    name: 'Hood ',
    city: 'Masterton',
    country: 'New Zealand',
    IATA: 'MRO',
    ICAO: 'NZMS',
    lat: '-40.97330093383789',
    lon: '175.63400268554688',
    timezone: '12'
  },
  {
    name: 'New Plymouth ',
    city: 'New Plymouth',
    country: 'New Zealand',
    IATA: 'NPL',
    ICAO: 'NZNP',
    lat: '-39.00859832763672',
    lon: '174.1790008544922',
    timezone: '12'
  },
  {
    name: 'Nelson ',
    city: 'Nelson',
    country: 'New Zealand',
    IATA: 'NSN',
    ICAO: 'NZNS',
    lat: '-41.298301696777344',
    lon: '173.2209930419922',
    timezone: '12'
  },
  {
    name: 'Invercargill ',
    city: 'Invercargill',
    country: 'New Zealand',
    IATA: 'IVC',
    ICAO: 'NZNV',
    lat: '-46.41239929199219',
    lon: '168.31300354003906',
    timezone: '12'
  },
  {
    name: 'RNZAF Base Ohakea',
    city: 'Ohakea',
    country: 'New Zealand',
    IATA: 'OHA',
    ICAO: 'NZOH',
    lat: '-40.20600128173828',
    lon: '175.38800048828125',
    timezone: '12'
  },
  {
    name: 'Oamaru ',
    city: 'Oamaru',
    country: 'New Zealand',
    IATA: 'OAM',
    ICAO: 'NZOU',
    lat: '-44.970001220703125',
    lon: '171.08200073242188',
    timezone: '12'
  },
  {
    name: 'Palmerston North ',
    city: 'Palmerston North',
    country: 'New Zealand',
    IATA: 'PMR',
    ICAO: 'NZPM',
    lat: '-40.32059860229492',
    lon: '175.61700439453125',
    timezone: '12'
  },
  {
    name: 'Paraparaumu ',
    city: 'Paraparaumu',
    country: 'New Zealand',
    IATA: 'PPQ',
    ICAO: 'NZPP',
    lat: '-40.904701232910156',
    lon: '174.98899841308594',
    timezone: '12'
  },
  {
    name: 'Queenstown Intl ',
    city: 'Queenstown International',
    country: 'New Zealand',
    IATA: 'ZQN',
    ICAO: 'NZQN',
    lat: '-45.0210990906',
    lon: '168.738998413',
    timezone: '12'
  },
  {
    name: 'Rotorua Regional ',
    city: 'Rotorua',
    country: 'New Zealand',
    IATA: 'ROT',
    ICAO: 'NZRO',
    lat: '-38.10919952392578',
    lon: '176.31700134277344',
    timezone: '12'
  },
  {
    name: 'Waiouru ',
    city: 'Waiouru',
    country: 'New Zealand',
    IATA: '\\N',
    ICAO: 'NZRU',
    lat: '-39.4463996887207',
    lon: '175.6580047607422',
    timezone: '12'
  },
  {
    name: 'South Pole Station ',
    city: "Stephen's Island",
    country: 'Antarctica',
    IATA: '\\N',
    ICAO: 'NZSP',
    lat: '-90',
    lon: '0',
    timezone: '12'
  },
  {
    name: 'Tauranga ',
    city: 'Tauranga',
    country: 'New Zealand',
    IATA: 'TRG',
    ICAO: 'NZTG',
    lat: '-37.67190170288086',
    lon: '176.1959991455078',
    timezone: '12'
  },
  {
    name: 'Timaru ',
    city: 'Timaru',
    country: 'New Zealand',
    IATA: 'TIU',
    ICAO: 'NZTU',
    lat: '-44.302799224853516',
    lon: '171.22500610351562',
    timezone: '12'
  },
  {
    name: 'Pukaki ',
    city: 'Pukaki',
    country: 'New Zealand',
    IATA: 'TWZ',
    ICAO: 'NZUK',
    lat: '-44.2350006104',
    lon: '170.117996216',
    timezone: '12'
  },
  {
    name: 'Woodbourne ',
    city: 'Woodbourne',
    country: 'New Zealand',
    IATA: 'BHE',
    ICAO: 'NZWB',
    lat: '-41.5182991027832',
    lon: '173.8699951171875',
    timezone: '12'
  },
  {
    name: 'Williams Field',
    city: 'Weydon',
    country: 'Antarctica',
    IATA: '\\N',
    ICAO: 'NZWD',
    lat: '-77.86740112304688',
    lon: '167.0570068359375',
    timezone: '12'
  },
  {
    name: 'Wanaka ',
    city: 'Wanaka',
    country: 'New Zealand',
    IATA: 'WKA',
    ICAO: 'NZWF',
    lat: '-44.722198486328',
    lon: '169.24600219727',
    timezone: '12'
  },
  {
    name: 'Wigram ',
    city: 'Wigram',
    country: 'New Zealand',
    IATA: '\\N',
    ICAO: 'NZWG',
    lat: '-43.5511016846',
    lon: '172.552993774',
    timezone: '12'
  },
  {
    name: 'Whakatane ',
    city: 'Whakatane',
    country: 'New Zealand',
    IATA: 'WHK',
    ICAO: 'NZWK',
    lat: '-37.92060089111328',
    lon: '176.91400146484375',
    timezone: '12'
  },
  {
    name: 'Wellington Intl ',
    city: 'Wellington',
    country: 'New Zealand',
    IATA: 'WLG',
    ICAO: 'NZWN',
    lat: '-41.3272018433',
    lon: '174.804992676',
    timezone: '12'
  },
  {
    name: 'Wairoa ',
    city: 'Wairoa',
    country: 'New Zealand',
    IATA: 'WIR',
    ICAO: 'NZWO',
    lat: '-39.006900787353516',
    lon: '177.40699768066406',
    timezone: '12'
  },
  {
    name: 'RNZAF Base Auckland-Whenuapai',
    city: 'Whenuapai',
    country: 'New Zealand',
    IATA: '\\N',
    ICAO: 'NZWP',
    lat: '-36.78779983520508',
    lon: '174.6300048828125',
    timezone: '12'
  },
  {
    name: 'Whangarei ',
    city: 'Whangarei',
    country: 'New Zealand',
    IATA: 'WRE',
    ICAO: 'NZWR',
    lat: '-35.7682991027832',
    lon: '174.36500549316406',
    timezone: '12'
  },
  {
    name: 'Westport ',
    city: 'Westport',
    country: 'New Zealand',
    IATA: 'WSZ',
    ICAO: 'NZWS',
    lat: '-41.73809814453125',
    lon: '171.58099365234375',
    timezone: '12'
  },
  {
    name: 'Wanganui ',
    city: 'Wanganui',
    country: 'New Zealand',
    IATA: 'WAG',
    ICAO: 'NZWU',
    lat: '-39.96220016479492',
    lon: '175.02499389648438',
    timezone: '12'
  },
  {
    name: 'Herat ',
    city: 'Herat',
    country: 'Afghanistan',
    IATA: 'HEA',
    ICAO: 'OAHR',
    lat: '34.209999084472656',
    lon: '62.22829818725586',
    timezone: '4.5'
  },
  {
    name: 'Jalalabad ',
    city: 'Jalalabad',
    country: 'Afghanistan',
    IATA: 'JAA',
    ICAO: 'OAJL',
    lat: '34.39979934692383',
    lon: '70.49859619140625',
    timezone: '4.5'
  },
  {
    name: 'Hamid Karzai Intl ',
    city: 'Kabul',
    country: 'Afghanistan',
    IATA: 'KBL',
    ICAO: 'OAKB',
    lat: '34.565899',
    lon: '69.212303',
    timezone: '4.5'
  },
  {
    name: 'Kandahar ',
    city: 'Kandahar',
    country: 'Afghanistan',
    IATA: 'KDH',
    ICAO: 'OAKN',
    lat: '31.505800247192383',
    lon: '65.8478012084961',
    timezone: '4.5'
  },
  {
    name: 'Maimana ',
    city: 'Maimama',
    country: 'Afghanistan',
    IATA: 'MMZ',
    ICAO: 'OAMN',
    lat: '35.93080139160156',
    lon: '64.76090240478516',
    timezone: '4.5'
  },
  {
    name: 'Mazar I Sharif ',
    city: 'Mazar-i-sharif',
    country: 'Afghanistan',
    IATA: 'MZR',
    ICAO: 'OAMS',
    lat: '36.70690155029297',
    lon: '67.20970153808594',
    timezone: '4.5'
  },
  {
    name: 'Shindand ',
    city: 'Shindand',
    country: 'Afghanistan',
    IATA: 'OAH',
    ICAO: 'OASD',
    lat: '33.3913002014',
    lon: '62.2610015869',
    timezone: '4.5'
  },
  {
    name: 'Sheberghan ',
    city: 'Sheberghan',
    country: 'Afghanistan',
    IATA: '\\N',
    ICAO: 'OASG',
    lat: '36.75080108642578',
    lon: '65.91320037841797',
    timezone: '4.5'
  },
  {
    name: 'Konduz ',
    city: 'Kunduz',
    country: 'Afghanistan',
    IATA: 'UND',
    ICAO: 'OAUZ',
    lat: '36.66510009765625',
    lon: '68.91079711914062',
    timezone: '4.5'
  },
  {
    name: 'Bahrain Intl ',
    city: 'Bahrain',
    country: 'Bahrain',
    IATA: 'BAH',
    ICAO: 'OBBI',
    lat: '26.27079963684082',
    lon: '50.63359832763672',
    timezone: '3'
  },
  {
    name: 'Sheik Isa Air Base',
    city: 'Bahrain',
    country: 'Bahrain',
    IATA: '\\N',
    ICAO: 'OBBS',
    lat: '25.918399810791016',
    lon: '50.590599060058594',
    timezone: '3'
  },
  {
    name: 'Abha Regional ',
    city: 'Abha',
    country: 'Saudi Arabia',
    IATA: 'AHB',
    ICAO: 'OEAB',
    lat: '18.240400314299997',
    lon: '42.65660095210001',
    timezone: '3'
  },
  {
    name: 'Al Ahsa ',
    city: 'Al-ahsa',
    country: 'Saudi Arabia',
    IATA: 'HOF',
    ICAO: 'OEAH',
    lat: '25.28529930114746',
    lon: '49.485198974609375',
    timezone: '3'
  },
  {
    name: 'Al Baha ',
    city: 'El-baha',
    country: 'Saudi Arabia',
    IATA: 'ABT',
    ICAO: 'OEBA',
    lat: '20.2961006165',
    lon: '41.6343002319',
    timezone: '3'
  },
  {
    name: 'Bisha ',
    city: 'Bisha',
    country: 'Saudi Arabia',
    IATA: 'BHH',
    ICAO: 'OEBH',
    lat: '19.984399795532227',
    lon: '42.62089920043945',
    timezone: '3'
  },
  {
    name: 'Abqaiq ',
    city: 'Abqaiq',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEBQ',
    lat: '25.911300659179688',
    lon: '49.59120178222656',
    timezone: '3'
  },
  {
    name: 'King Fahd Intl ',
    city: 'Dammam',
    country: 'Saudi Arabia',
    IATA: 'DMM',
    ICAO: 'OEDF',
    lat: '26.471200942993164',
    lon: '49.79790115356445',
    timezone: '3'
  },
  {
    name: 'King Abdulaziz Air Base',
    city: 'Dhahran',
    country: 'Saudi Arabia',
    IATA: 'DHA',
    ICAO: 'OEDR',
    lat: '26.265399932900003',
    lon: '50.152000427199994',
    timezone: '3'
  },
  {
    name: 'Jizan Regional ',
    city: 'Gizan',
    country: 'Saudi Arabia',
    IATA: 'GIZ',
    ICAO: 'OEGN',
    lat: '16.901100158691406',
    lon: '42.58580017089844',
    timezone: '3'
  },
  {
    name: 'Gassim ',
    city: 'Gassim',
    country: 'Saudi Arabia',
    IATA: 'ELQ',
    ICAO: 'OEGS',
    lat: '26.302799224853516',
    lon: '43.77439880371094',
    timezone: '3'
  },
  {
    name: 'Gurayat Domestic ',
    city: 'Guriat',
    country: 'Saudi Arabia',
    IATA: 'URY',
    ICAO: 'OEGT',
    lat: '31.412413',
    lon: '37.278898',
    timezone: '3'
  },
  {
    name: "Ha'il ",
    city: 'Hail',
    country: 'Saudi Arabia',
    IATA: 'HAS',
    ICAO: 'OEHL',
    lat: '27.437901',
    lon: '41.686298',
    timezone: '3'
  },
  {
    name: 'Jubail ',
    city: 'Jubail',
    country: 'Saudi Arabia',
    IATA: 'QJB',
    ICAO: 'OEJB',
    lat: '27.038999557495117',
    lon: '49.40510177612305',
    timezone: '3'
  },
  {
    name: 'King Faisal Naval Base',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEJF',
    lat: '21.348100662231445',
    lon: '39.17300033569336',
    timezone: '3'
  },
  {
    name: 'King Abdulaziz Intl ',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    IATA: 'JED',
    ICAO: 'OEJN',
    lat: '21.6796',
    lon: '39.156502',
    timezone: '3'
  },
  {
    name: 'King Khaled Military City ',
    city: 'King Khalid Mil.city',
    country: 'Saudi Arabia',
    IATA: 'KMC',
    ICAO: 'OEKK',
    lat: '27.9009',
    lon: '45.528198',
    timezone: '3'
  },
  {
    name: 'Prince Mohammad Bin Abdulaziz ',
    city: 'Madinah',
    country: 'Saudi Arabia',
    IATA: 'MED',
    ICAO: 'OEMA',
    lat: '24.5534',
    lon: '39.705101',
    timezone: '3'
  },
  {
    name: 'Nejran ',
    city: 'Nejran',
    country: 'Saudi Arabia',
    IATA: 'EAM',
    ICAO: 'OENG',
    lat: '17.611400604248047',
    lon: '44.4192008972168',
    timezone: '3'
  },
  {
    name: 'Al Qaisumah/Hafr Al Batin ',
    city: 'Hafr Al-batin',
    country: 'Saudi Arabia',
    IATA: 'AQI',
    ICAO: 'OEPA',
    lat: '28.335199',
    lon: '46.125099',
    timezone: '3'
  },
  {
    name: 'Pump Station 3 ',
    city: 'Petroline 3',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEPC',
    lat: '25.17449951171875',
    lon: '47.488399505615234',
    timezone: '3'
  },
  {
    name: 'Pump Station 6 ',
    city: 'Petroline 6',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEPF',
    lat: '24.71030044555664',
    lon: '44.964500427246094',
    timezone: '3'
  },
  {
    name: 'Pump Station 10 ',
    city: 'Petroline 10',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEPJ',
    lat: '24.1072998046875',
    lon: '41.0359992980957',
    timezone: '3'
  },
  {
    name: 'Rabigh ',
    city: 'Rabigh',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OERB',
    lat: '22.702600479125977',
    lon: '39.069801330566406',
    timezone: '3'
  },
  {
    name: 'Rafha Domestic ',
    city: 'Rafha',
    country: 'Saudi Arabia',
    IATA: 'RAH',
    ICAO: 'OERF',
    lat: '29.626399993896484',
    lon: '43.4906005859375',
    timezone: '3'
  },
  {
    name: 'King Khaled Intl ',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    IATA: 'RUH',
    ICAO: 'OERK',
    lat: '24.957599639892578',
    lon: '46.69879913330078',
    timezone: '3'
  },
  {
    name: 'Ras Mishab ',
    city: 'Rash Mishab',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OERM',
    lat: '28.079599380493164',
    lon: '48.611000061035156',
    timezone: '3'
  },
  {
    name: 'Arar Domestic ',
    city: 'Arar',
    country: 'Saudi Arabia',
    IATA: 'RAE',
    ICAO: 'OERR',
    lat: '30.906600952148438',
    lon: '41.13819885253906',
    timezone: '3'
  },
  {
    name: 'Ras Tanura ',
    city: 'Ras Tanura',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OERT',
    lat: '26.723100662231445',
    lon: '50.030799865722656',
    timezone: '3'
  },
  {
    name: 'Sharurah ',
    city: 'Sharurah',
    country: 'Saudi Arabia',
    IATA: 'SHW',
    ICAO: 'OESH',
    lat: '17.466899871826172',
    lon: '47.12139892578125',
    timezone: '3'
  },
  {
    name: 'Sulayel ',
    city: 'Sulayel',
    country: 'Saudi Arabia',
    IATA: 'SLF',
    ICAO: 'OESL',
    lat: '20.46470069885254',
    lon: '45.619598388671875',
    timezone: '3'
  },
  {
    name: 'Tabuk ',
    city: 'Tabuk',
    country: 'Saudi Arabia',
    IATA: 'TUU',
    ICAO: 'OETB',
    lat: '28.3654',
    lon: '36.6189',
    timezone: '3'
  },
  {
    name: 'Ta\u2019if Regional ',
    city: 'Taif',
    country: 'Saudi Arabia',
    IATA: 'TIF',
    ICAO: 'OETF',
    lat: '21.483001',
    lon: '40.543442',
    timezone: '3'
  },
  {
    name: 'Thumamah ',
    city: 'Thumamah',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OETH',
    lat: '25.21299934387207',
    lon: '46.64099884033203',
    timezone: '3'
  },
  {
    name: 'Ras Tanajib ',
    city: 'Ras Tanajib',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OETN',
    lat: '27.867799758911133',
    lon: '48.769100189208984',
    timezone: '3'
  },
  {
    name: 'Turaif Domestic ',
    city: 'Turaif',
    country: 'Saudi Arabia',
    IATA: 'TUI',
    ICAO: 'OETR',
    lat: '31.692188',
    lon: '38.731544',
    timezone: '3'
  },
  {
    name: 'Al Wajh Domestic ',
    city: 'Wejh',
    country: 'Saudi Arabia',
    IATA: 'EJH',
    ICAO: 'OEWJ',
    lat: '26.19860076904297',
    lon: '36.47639846801758',
    timezone: '3'
  },
  {
    name: 'Prince Abdulmohsin Bin Abdulaziz ',
    city: 'Yenbo',
    country: 'Saudi Arabia',
    IATA: 'YNB',
    ICAO: 'OEYN',
    lat: '24.144199',
    lon: '38.0634',
    timezone: '3'
  },
  {
    name: 'Abadan ',
    city: 'Abadan',
    country: 'Iran',
    IATA: 'ABD',
    ICAO: 'OIAA',
    lat: '30.371099472',
    lon: '48.2282981873',
    timezone: '3.5'
  },
  {
    name: 'Dezful ',
    city: 'Dezful',
    country: 'Iran',
    IATA: 'DEF',
    ICAO: 'OIAD',
    lat: '32.434399',
    lon: '48.397598',
    timezone: '3.5'
  },
  {
    name: 'Aghajari ',
    city: 'Aghajari',
    country: 'Iran',
    IATA: 'AKW',
    ICAO: 'OIAG',
    lat: '30.7444',
    lon: '49.6772',
    timezone: '3.5'
  },
  {
    name: 'Gachsaran ',
    city: 'Gachsaran',
    country: 'Iran',
    IATA: 'GCH',
    ICAO: 'OIAH',
    lat: '30.337600708',
    lon: '50.827999115',
    timezone: '3.5'
  },
  {
    name: 'Shahid Asyaee ',
    city: 'Masjed Soleiman',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIAI',
    lat: '32.00239944458008',
    lon: '49.27040100097656',
    timezone: '3.5'
  },
  {
    name: 'Omidiyeh ',
    city: 'Omidyeh',
    country: 'Iran',
    IATA: 'OMI',
    ICAO: 'OIAJ',
    lat: '30.8351993560791',
    lon: '49.5349006652832',
    timezone: '3.5'
  },
  {
    name: 'Mahshahr ',
    city: 'Bandar Mahshahr',
    country: 'Iran',
    IATA: 'MRX',
    ICAO: 'OIAM',
    lat: '30.55620002746582',
    lon: '49.15190124511719',
    timezone: '3.5'
  },
  {
    name: 'Ahwaz ',
    city: 'Ahwaz',
    country: 'Iran',
    IATA: 'AWZ',
    ICAO: 'OIAW',
    lat: '31.337400436399996',
    lon: '48.7620010376',
    timezone: '3.5'
  },
  {
    name: 'Abu Musa Island ',
    city: 'Abumusa I.',
    country: 'Iran',
    IATA: 'AEU',
    ICAO: 'OIBA',
    lat: '25.8757',
    lon: '55.033001',
    timezone: '3.5'
  },
  {
    name: 'Bushehr ',
    city: 'Bushehr',
    country: 'Iran',
    IATA: 'BUZ',
    ICAO: 'OIBB',
    lat: '28.9447994232',
    lon: '50.8345985413',
    timezone: '3.5'
  },
  {
    name: 'Bastak ',
    city: 'Bastak',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIBH',
    lat: '27.21269989013672',
    lon: '54.318599700927734',
    timezone: '3.5'
  },
  {
    name: 'Asaloyeh ',
    city: 'Golbandi',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIBI',
    lat: '27.4814',
    lon: '52.615501',
    timezone: '3.5'
  },
  {
    name: 'Kish Intl ',
    city: 'Kish Island',
    country: 'Iran',
    IATA: 'KIH',
    ICAO: 'OIBK',
    lat: '26.5261993408',
    lon: '53.980201721200004',
    timezone: '3.5'
  },
  {
    name: 'Bandar Lengeh ',
    city: 'Bandar Lengeh',
    country: 'Iran',
    IATA: 'BDH',
    ICAO: 'OIBL',
    lat: '26.531999588',
    lon: '54.824798584',
    timezone: '3.5'
  },
  {
    name: 'Khark Island ',
    city: 'Khark Island',
    country: 'Iran',
    IATA: 'KHK',
    ICAO: 'OIBQ',
    lat: '29.260299682617188',
    lon: '50.32389831542969',
    timezone: '3.5'
  },
  {
    name: 'Sirri Island ',
    city: 'Siri Island',
    country: 'Iran',
    IATA: 'SXI',
    ICAO: 'OIBS',
    lat: '25.908899307250977',
    lon: '54.539398193359375',
    timezone: '3.5'
  },
  {
    name: 'Lavan Island ',
    city: 'Lavan Island',
    country: 'Iran',
    IATA: 'LVP',
    ICAO: 'OIBV',
    lat: '26.810300827026367',
    lon: '53.356300354003906',
    timezone: '3.5'
  },
  {
    name: 'Shahid Ashrafi Esfahani ',
    city: 'Bakhtaran',
    country: 'Iran',
    IATA: 'KSH',
    ICAO: 'OICC',
    lat: '34.3459014893',
    lon: '47.1581001282',
    timezone: '3.5'
  },
  {
    name: 'Sanandaj ',
    city: 'Sanandaj',
    country: 'Iran',
    IATA: 'SDG',
    ICAO: 'OICS',
    lat: '35.24589920043945',
    lon: '47.00920104980469',
    timezone: '3.5'
  },
  {
    name: 'Hesa ',
    city: 'Daran',
    country: 'Iran',
    IATA: 'IFH',
    ICAO: 'OIFE',
    lat: '32.92890167236328',
    lon: '51.561100006103516',
    timezone: '3.5'
  },
  {
    name: 'Shahid Vatan Pour Air Base',
    city: 'Esfahan',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIFH',
    lat: '32.56700134277344',
    lon: '51.69160079956055',
    timezone: '3.5'
  },
  {
    name: 'Kashan ',
    city: 'Kashan',
    country: 'Iran',
    IATA: 'KKS',
    ICAO: 'OIFK',
    lat: '33.895302',
    lon: '51.577',
    timezone: '3.5'
  },
  {
    name: 'Esfahan Shahid Beheshti Intl ',
    city: 'Esfahan',
    country: 'Iran',
    IATA: 'IFN',
    ICAO: 'OIFM',
    lat: '32.75080108642578',
    lon: '51.86130142211914',
    timezone: '3.5'
  },
  {
    name: 'Badr Air Base',
    city: 'Sepah',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIFP',
    lat: '32.62110137939453',
    lon: '51.696998596191406',
    timezone: '3.5'
  },
  {
    name: 'Sardar-e-Jangal ',
    city: 'Rasht',
    country: 'Iran',
    IATA: 'RAS',
    ICAO: 'OIGG',
    lat: '37.323333',
    lon: '49.617778',
    timezone: '3.5'
  },
  {
    name: 'Arak ',
    city: 'Arak',
    country: 'Iran',
    IATA: 'AJK',
    ICAO: 'OIHR',
    lat: '34.138099670410156',
    lon: '49.8473014831543',
    timezone: '3.5'
  },
  {
    name: 'Ghazvin Azadi ',
    city: 'Abe-ali',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIIA',
    lat: '35.95209884643555',
    lon: '50.450801849365234',
    timezone: '3.5'
  },
  {
    name: 'Kushke Nosrat ',
    city: 'Kushke Nosrat',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIIC',
    lat: '34.98400115966797',
    lon: '50.80619812011719',
    timezone: '3.5'
  },
  {
    name: 'Doshan Tappeh Air Base',
    city: 'Teheran',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIID',
    lat: '35.702999114990234',
    lon: '51.475101470947266',
    timezone: '3.5'
  },
  {
    name: 'Ghale Morghi ',
    city: 'Teheran',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIIG',
    lat: '35.644798278808594',
    lon: '51.380699157714844',
    timezone: '3.5'
  },
  {
    name: 'Mehrabad Intl ',
    city: 'Teheran',
    country: 'Iran',
    IATA: 'THR',
    ICAO: 'OIII',
    lat: '35.68920135498047',
    lon: '51.31340026855469',
    timezone: '3.5'
  },
  {
    name: 'Qazvin ',
    city: 'Ghazvin',
    country: 'Iran',
    IATA: 'GZW',
    ICAO: 'OIIK',
    lat: '36.240101',
    lon: '50.0471',
    timezone: '3.5'
  },
  {
    name: 'Naja ',
    city: 'Khoram Dareh',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIIM',
    lat: '35.77629852294922',
    lon: '50.88100051879883',
    timezone: '3.5'
  },
  {
    name: 'Bandar Abbas Intl ',
    city: 'Bandar Abbas',
    country: 'Iran',
    IATA: 'BND',
    ICAO: 'OIKB',
    lat: '27.218299865722656',
    lon: '56.37779998779297',
    timezone: '3.5'
  },
  {
    name: 'Jiroft ',
    city: 'Jiroft',
    country: 'Iran',
    IATA: 'JYR',
    ICAO: 'OIKJ',
    lat: '28.726900100699996',
    lon: '57.67029953',
    timezone: '3.5'
  },
  {
    name: 'Kerman ',
    city: 'Kerman',
    country: 'Iran',
    IATA: 'KER',
    ICAO: 'OIKK',
    lat: '30.274400711099997',
    lon: '56.9510993958',
    timezone: '3.5'
  },
  {
    name: 'Havadarya ',
    city: 'Bandar Abbas',
    country: 'Iran',
    IATA: 'HDR',
    ICAO: 'OIKP',
    lat: '27.158300399780273',
    lon: '56.17250061035156',
    timezone: '3.5'
  },
  {
    name: 'Dayrestan ',
    city: 'Gheshm I.',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIKQ',
    lat: '26.754600524902344',
    lon: '55.902400970458984',
    timezone: '3.5'
  },
  {
    name: 'Sirjan ',
    city: 'Sirjan',
    country: 'Iran',
    IATA: 'SYJ',
    ICAO: 'OIKY',
    lat: '29.550899505615234',
    lon: '55.672698974609375',
    timezone: '3.5'
  },
  {
    name: 'Birjand ',
    city: 'Birjand',
    country: 'Iran',
    IATA: 'XBJ',
    ICAO: 'OIMB',
    lat: '32.898101806640625',
    lon: '59.2661018371582',
    timezone: '3.5'
  },
  {
    name: 'Sarakhs ',
    city: 'Sarakhs',
    country: 'Iran',
    IATA: 'CKT',
    ICAO: 'OIMC',
    lat: '36.50120162963867',
    lon: '61.06489944458008',
    timezone: '3.5'
  },
  {
    name: 'Shahroud ',
    city: 'Emam Shahr',
    country: 'Iran',
    IATA: 'RUD',
    ICAO: 'OIMJ',
    lat: '36.4253005981',
    lon: '55.104198455799995',
    timezone: '3.5'
  },
  {
    name: 'Tabas ',
    city: 'Tabas',
    country: 'Iran',
    IATA: 'TCX',
    ICAO: 'OIMT',
    lat: '33.6678009033',
    lon: '56.8927001953',
    timezone: '3.5'
  },
  {
    name: 'Kalaleh ',
    city: 'Kalaleh',
    country: 'Iran',
    IATA: 'KLM',
    ICAO: 'OINE',
    lat: '37.3833007812',
    lon: '55.4519996643',
    timezone: '3.5'
  },
  {
    name: 'Ramsar ',
    city: 'Ramsar',
    country: 'Iran',
    IATA: 'RZR',
    ICAO: 'OINR',
    lat: '36.9099006652832',
    lon: '50.67959976196289',
    timezone: '3.5'
  },
  {
    name: 'Fasa ',
    city: 'Fasa',
    country: 'Iran',
    IATA: 'FAZ',
    ICAO: 'OISF',
    lat: '28.891799926757812',
    lon: '53.72330093383789',
    timezone: '3.5'
  },
  {
    name: 'Jahrom ',
    city: 'Jahrom',
    country: 'Iran',
    IATA: 'JAR',
    ICAO: 'OISJ',
    lat: '28.586700439499996',
    lon: '53.5791015625',
    timezone: '3.5'
  },
  {
    name: 'Lamerd ',
    city: 'Lamerd',
    country: 'Iran',
    IATA: 'LFM',
    ICAO: 'OISR',
    lat: '27.3726997375',
    lon: '53.18880081179999',
    timezone: '3.5'
  },
  {
    name: 'Shiraz Shahid Dastghaib Intl ',
    city: 'Shiraz',
    country: 'Iran',
    IATA: 'SYZ',
    ICAO: 'OISS',
    lat: '29.539199829101562',
    lon: '52.58980178833008',
    timezone: '3.5'
  },
  {
    name: 'Khoy ',
    city: 'Khoy',
    country: 'Iran',
    IATA: 'KHY',
    ICAO: 'OITK',
    lat: '38.4275016784668',
    lon: '44.97359848022461',
    timezone: '3.5'
  },
  {
    name: 'Tabriz Intl ',
    city: 'Tabriz',
    country: 'Iran',
    IATA: 'TBZ',
    ICAO: 'OITT',
    lat: '38.1338996887207',
    lon: '46.23500061035156',
    timezone: '3.5'
  },
  {
    name: 'Zanjan ',
    city: 'Zanjan',
    country: 'Iran',
    IATA: 'JWN',
    ICAO: 'OITZ',
    lat: '36.7737007141',
    lon: '48.3594017029',
    timezone: '3.5'
  },
  {
    name: 'Shahid Sadooghi ',
    city: 'Yazd',
    country: 'Iran',
    IATA: 'AZD',
    ICAO: 'OIYY',
    lat: '31.9048995972',
    lon: '54.2765007019',
    timezone: '3.5'
  },
  {
    name: 'Zabol ',
    city: 'Zabol',
    country: 'Iran',
    IATA: 'ACZ',
    ICAO: 'OIZB',
    lat: '31.09830093383789',
    lon: '61.54389953613281',
    timezone: '3.5'
  },
  {
    name: 'Konarak ',
    city: 'Chah Bahar',
    country: 'Iran',
    IATA: 'ZBR',
    ICAO: 'OIZC',
    lat: '25.443300247199996',
    lon: '60.3820991516',
    timezone: '3.5'
  },
  {
    name: 'Zahedan Intl ',
    city: 'Zahedan',
    country: 'Iran',
    IATA: 'ZAH',
    ICAO: 'OIZH',
    lat: '29.47570037841797',
    lon: '60.90620040893555',
    timezone: '3.5'
  },
  {
    name: 'Iran Shahr ',
    city: 'Iran Shahr',
    country: 'Iran',
    IATA: 'IHR',
    ICAO: 'OIZI',
    lat: '27.2360992432',
    lon: '60.7200012207',
    timezone: '3.5'
  },
  {
    name: 'Saravan ',
    city: 'Saravan',
    country: 'Iran',
    IATA: '\\N',
    ICAO: 'OIZS',
    lat: '27.419300079345703',
    lon: '62.315799713134766',
    timezone: '3.5'
  },
  {
    name: 'Queen Alia Intl ',
    city: 'Amman',
    country: 'Jordan',
    IATA: 'AMM',
    ICAO: 'OJAI',
    lat: '31.7226009369',
    lon: '35.9931983948',
    timezone: '2'
  },
  {
    name: 'Amman-Marka Intl ',
    city: 'Amman',
    country: 'Jordan',
    IATA: 'ADJ',
    ICAO: 'OJAM',
    lat: '31.972700119018555',
    lon: '35.991600036621094',
    timezone: '2'
  },
  {
    name: 'Aqaba King Hussein Intl ',
    city: 'Aqaba',
    country: 'Jordan',
    IATA: 'AQJ',
    ICAO: 'OJAQ',
    lat: '29.611600875854492',
    lon: '35.01810073852539',
    timezone: '2'
  },
  {
    name: 'Prince Hassan Air Base',
    city: 'Hotel Four',
    country: 'Jordan',
    IATA: '\\N',
    ICAO: 'OJHF',
    lat: '32.160702',
    lon: '37.149399',
    timezone: '2'
  },
  {
    name: 'Jerusalem ',
    city: 'Jerusalem',
    country: 'West Bank',
    IATA: '\\N',
    ICAO: 'OJJR',
    lat: '31.864700317383',
    lon: '35.219200134277',
    timezone: '2'
  },
  {
    name: 'King Hussein Air College',
    city: 'Mafraq',
    country: 'Jordan',
    IATA: 'OMF',
    ICAO: 'OJMF',
    lat: '32.3564',
    lon: '36.259201',
    timezone: '2'
  },
  {
    name: 'Kuwait Intl ',
    city: 'Kuwait',
    country: 'Kuwait',
    IATA: 'KWI',
    ICAO: 'OKBK',
    lat: '29.226600646972656',
    lon: '47.96889877319336',
    timezone: '3'
  },
  {
    name: 'Beirut Rafic Hariri Intl ',
    city: 'Beirut',
    country: 'Lebanon',
    IATA: 'BEY',
    ICAO: 'OLBA',
    lat: '33.820899963378906',
    lon: '35.488399505615234',
    timezone: '2'
  },
  {
    name: 'Rene Mouawad Air Base',
    city: 'Kleiat',
    country: 'Lebanon',
    IATA: 'KYE',
    ICAO: 'OLKA',
    lat: '34.589298248291016',
    lon: '36.01129913330078',
    timezone: '2'
  },
  {
    name: 'Abu Dhabi Intl ',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    IATA: 'AUH',
    ICAO: 'OMAA',
    lat: '24.433000564575195',
    lon: '54.651100158691406',
    timezone: '4'
  },
  {
    name: 'Bateen ',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    IATA: 'AZI',
    ICAO: 'OMAD',
    lat: '24.428300857543945',
    lon: '54.458099365234375',
    timezone: '4'
  },
  {
    name: 'Al Hamra Aux ',
    city: 'Al Hamra',
    country: 'United Arab Emirates',
    IATA: '\\N',
    ICAO: 'OMAH',
    lat: '24.073999404907227',
    lon: '52.463600158691406',
    timezone: '4'
  },
  {
    name: 'Jebel Dhana ',
    city: 'Jebel Dhana',
    country: 'United Arab Emirates',
    IATA: '\\N',
    ICAO: 'OMAJ',
    lat: '24.187400817871094',
    lon: '52.61399841308594',
    timezone: '4'
  },
  {
    name: 'Al Dhafra Air Base',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    IATA: 'DHF',
    ICAO: 'OMAM',
    lat: '24.248199462900004',
    lon: '54.547698974599996',
    timezone: '4'
  },
  {
    name: 'Arzanah ',
    city: 'Arzana',
    country: 'United Arab Emirates',
    IATA: '\\N',
    ICAO: 'OMAR',
    lat: '24.780500411987305',
    lon: '52.559898376464844',
    timezone: '4'
  },
  {
    name: 'Das Island ',
    city: 'Das Island',
    country: 'United Arab Emirates',
    IATA: '\\N',
    ICAO: 'OMAS',
    lat: '25.14620018005371',
    lon: '52.87369918823242',
    timezone: '4'
  },
  {
    name: 'Zirku ',
    city: 'Zirku',
    country: 'United Arab Emirates',
    IATA: '\\N',
    ICAO: 'OMAZ',
    lat: '24.862491607666016',
    lon: '53.07714080810547',
    timezone: '4'
  },
  {
    name: 'Dubai Intl ',
    city: 'Dubai',
    country: 'United Arab Emirates',
    IATA: 'DXB',
    ICAO: 'OMDB',
    lat: '25.2527999878',
    lon: '55.3643989563',
    timezone: '4'
  },
  {
    name: 'Fujairah Intl ',
    city: 'Fujeirah',
    country: 'United Arab Emirates',
    IATA: 'FJR',
    ICAO: 'OMFJ',
    lat: '25.112199783325195',
    lon: '56.32400131225586',
    timezone: '4'
  },
  {
    name: 'Ras Al Khaimah Intl ',
    city: 'Ras Al Khaimah',
    country: 'United Arab Emirates',
    IATA: 'RKT',
    ICAO: 'OMRK',
    lat: '25.613500595092773',
    lon: '55.93880081176758',
    timezone: '4'
  },
  {
    name: 'Sharjah Intl ',
    city: 'Sharjah',
    country: 'United Arab Emirates',
    IATA: 'SHJ',
    ICAO: 'OMSJ',
    lat: '25.32859992980957',
    lon: '55.5172004699707',
    timezone: '4'
  },
  {
    name: 'Khasab Air Base',
    city: 'Khasab',
    country: 'Oman',
    IATA: 'KHS',
    ICAO: 'OOKB',
    lat: '26.17099952697754',
    lon: '56.2406005859375',
    timezone: '4'
  },
  {
    name: 'Masirah Air Base',
    city: 'Masirah',
    country: 'Oman',
    IATA: 'MSH',
    ICAO: 'OOMA',
    lat: '20.675399780273438',
    lon: '58.890499114990234',
    timezone: '4'
  },
  {
    name: 'Muscat Intl ',
    city: 'Muscat',
    country: 'Oman',
    IATA: 'MCT',
    ICAO: 'OOMS',
    lat: '23.593299865722656',
    lon: '58.284400939941406',
    timezone: '4'
  },
  {
    name: 'Salalah ',
    city: 'Salalah',
    country: 'Oman',
    IATA: 'SLL',
    ICAO: 'OOSA',
    lat: '17.038700103759766',
    lon: '54.09130096435547',
    timezone: '4'
  },
  {
    name: 'Thumrait Air Base',
    city: 'Thumrait',
    country: 'Oman',
    IATA: 'TTH',
    ICAO: 'OOTH',
    lat: '17.666000366210938',
    lon: '54.024600982666016',
    timezone: '4'
  },
  {
    name: 'Bhagatanwala ',
    city: 'Bhagtanwala',
    country: 'Pakistan',
    IATA: 'BHW',
    ICAO: 'OPBG',
    lat: '32.056098938',
    lon: '72.94840240479999',
    timezone: '5'
  },
  {
    name: 'Faisalabad Intl ',
    city: 'Faisalabad',
    country: 'Pakistan',
    IATA: 'LYP',
    ICAO: 'OPFA',
    lat: '31.364999771118164',
    lon: '72.99479675292969',
    timezone: '5'
  },
  {
    name: 'Gwadar Intl ',
    city: 'Gwadar',
    country: 'Pakistan',
    IATA: 'GWD',
    ICAO: 'OPGD',
    lat: '25.233299255371094',
    lon: '62.329498291015625',
    timezone: '5'
  },
  {
    name: 'Gilgit ',
    city: 'Gilgit',
    country: 'Pakistan',
    IATA: 'GIL',
    ICAO: 'OPGT',
    lat: '35.918800354003906',
    lon: '74.33360290527344',
    timezone: '5'
  },
  {
    name: 'Shahbaz Air Base',
    city: 'Jacobsbad',
    country: 'Pakistan',
    IATA: 'JAG',
    ICAO: 'OPJA',
    lat: '28.28420066833496',
    lon: '68.44969940185547',
    timezone: '5'
  },
  {
    name: 'Jinnah Intl ',
    city: 'Karachi',
    country: 'Pakistan',
    IATA: 'KHI',
    ICAO: 'OPKC',
    lat: '24.9065',
    lon: '67.160797',
    timezone: '5'
  },
  {
    name: 'Alama Iqbal Intl ',
    city: 'Lahore',
    country: 'Pakistan',
    IATA: 'LHE',
    ICAO: 'OPLA',
    lat: '31.5216007232666',
    lon: '74.40360260009766',
    timezone: '5'
  },
  {
    name: 'Walton ',
    city: 'Lahore',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPLH',
    lat: '31.494800567626953',
    lon: '74.34619903564453',
    timezone: '5'
  },
  {
    name: 'Mangla ',
    city: 'Mangla',
    country: 'Pakistan',
    IATA: 'XJM',
    ICAO: 'OPMA',
    lat: '33.05009841918945',
    lon: '73.63839721679688',
    timezone: '5'
  },
  {
    name: 'Muzaffarabad ',
    city: 'Muzaffarabad',
    country: 'Pakistan',
    IATA: 'MFG',
    ICAO: 'OPMF',
    lat: '34.3390007019043',
    lon: '73.50859832763672',
    timezone: '5'
  },
  {
    name: 'Mianwali Air Base',
    city: 'Mianwali',
    country: 'Pakistan',
    IATA: 'MWD',
    ICAO: 'OPMI',
    lat: '32.5630989074707',
    lon: '71.5707015991211',
    timezone: '5'
  },
  {
    name: 'Moenjodaro ',
    city: 'Moenjodaro',
    country: 'Pakistan',
    IATA: 'MJD',
    ICAO: 'OPMJ',
    lat: '27.3351993560791',
    lon: '68.14309692382812',
    timezone: '5'
  },
  {
    name: 'Masroor Air Base',
    city: 'Karachi',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPMR',
    lat: '24.893600463867188',
    lon: '66.93879699707031',
    timezone: '5'
  },
  {
    name: 'Multan Intl ',
    city: 'Multan',
    country: 'Pakistan',
    IATA: 'MUX',
    ICAO: 'OPMT',
    lat: '30.20319938659668',
    lon: '71.41909790039062',
    timezone: '5'
  },
  {
    name: 'Shaheed Benazirabad ',
    city: 'Nawabshah',
    country: 'Pakistan',
    IATA: 'WNS',
    ICAO: 'OPNH',
    lat: '26.2194',
    lon: '68.390099',
    timezone: '5'
  },
  {
    name: 'Okara Cantonment Airstrip',
    city: 'Okara',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPOK',
    lat: '30.740999221800003',
    lon: '73.3576965332',
    timezone: '5'
  },
  {
    name: 'Panjgur ',
    city: 'Panjgur',
    country: 'Pakistan',
    IATA: 'PJG',
    ICAO: 'OPPG',
    lat: '26.954500198364258',
    lon: '64.13249969482422',
    timezone: '5'
  },
  {
    name: 'Pasni ',
    city: 'Pasni',
    country: 'Pakistan',
    IATA: 'PSI',
    ICAO: 'OPPI',
    lat: '25.29050064086914',
    lon: '63.34510040283203',
    timezone: '5'
  },
  {
    name: 'Peshawar Intl ',
    city: 'Peshawar',
    country: 'Pakistan',
    IATA: 'PEW',
    ICAO: 'OPPS',
    lat: '33.993900299072266',
    lon: '71.51460266113281',
    timezone: '5'
  },
  {
    name: 'Qasim ',
    city: 'Qasim',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPQS',
    lat: '33.56019973754883',
    lon: '73.033203125',
    timezone: '5'
  },
  {
    name: 'Quetta Intl ',
    city: 'Quetta',
    country: 'Pakistan',
    IATA: 'UET',
    ICAO: 'OPQT',
    lat: '30.251399993896484',
    lon: '66.93779754638672',
    timezone: '5'
  },
  {
    name: 'Shaikh Zaid ',
    city: 'Rahim Yar Khan',
    country: 'Pakistan',
    IATA: 'RYK',
    ICAO: 'OPRK',
    lat: '28.383899688720703',
    lon: '70.27960205078125',
    timezone: '5'
  },
  {
    name: 'Benazir Bhutto Intl ',
    city: 'Islamabad',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPRN',
    lat: '33.616699',
    lon: '73.099197',
    timezone: '5'
  },
  {
    name: 'Risalpur Air Base',
    city: 'Risalpur',
    country: 'Pakistan',
    IATA: '\\N',
    ICAO: 'OPRS',
    lat: '34.08110046386719',
    lon: '71.97260284423828',
    timezone: '5'
  },
  {
    name: 'Rawalakot ',
    city: 'Rawala Kot',
    country: 'Pakistan',
    IATA: 'RAZ',
    ICAO: 'OPRT',
    lat: '33.849700927734375',
    lon: '73.79810333251953',
    timezone: '5'
  },
  {
    name: 'Sukkur ',
    city: 'Sukkur',
    country: 'Pakistan',
    IATA: 'SKZ',
    ICAO: 'OPSK',
    lat: '27.722000122070312',
    lon: '68.79170227050781',
    timezone: '5'
  },
  {
    name: 'Saidu Sharif ',
    city: 'Saidu Sharif',
    country: 'Pakistan',
    IATA: 'SDT',
    ICAO: 'OPSS',
    lat: '34.8135986328125',
    lon: '72.35279846191406',
    timezone: '5'
  },
  {
    name: 'Sui ',
    city: 'Sui',
    country: 'Pakistan',
    IATA: 'SUL',
    ICAO: 'OPSU',
    lat: '28.645099639892578',
    lon: '69.1769027709961',
    timezone: '5'
  },
  {
    name: 'Talhar ',
    city: 'Talhar',
    country: 'Pakistan',
    IATA: 'BDN',
    ICAO: 'OPTH',
    lat: '24.84149932861328',
    lon: '68.8384017944336',
    timezone: '5'
  },
  {
    name: 'Wana ',
    city: 'Wana',
    country: 'Pakistan',
    IATA: 'WAF',
    ICAO: 'OPWN',
    lat: '32.3046989440918',
    lon: '69.57039642333984',
    timezone: '5'
  },
  {
    name: 'Zhob ',
    city: 'Zhob',
    country: 'Pakistan',
    IATA: 'PZH',
    ICAO: 'OPZB',
    lat: '31.358400344848633',
    lon: '69.4636001586914',
    timezone: '5'
  },
  {
    name: 'Basrah Intl ',
    city: 'Basrah',
    country: 'Iraq',
    IATA: 'BSR',
    ICAO: 'ORMM',
    lat: '30.549100875854492',
    lon: '47.66210174560547',
    timezone: '3'
  },
  {
    name: 'Aleppo Intl ',
    city: 'Aleppo',
    country: 'Syria',
    IATA: 'ALP',
    ICAO: 'OSAP',
    lat: '36.18069839477539',
    lon: '37.22439956665039',
    timezone: '2'
  },
  {
    name: 'Damascus Intl ',
    city: 'Damascus',
    country: 'Syria',
    IATA: 'DAM',
    ICAO: 'OSDI',
    lat: '33.4114990234375',
    lon: '36.51559829711914',
    timezone: '2'
  },
  {
    name: 'Deir ez-Zor Air Base',
    city: 'Deire Zor',
    country: 'Syria',
    IATA: 'DEZ',
    ICAO: 'OSDZ',
    lat: '35.2854',
    lon: '40.175999',
    timezone: '2'
  },
  {
    name: 'Bassel Al-Assad Intl ',
    city: 'Latakia',
    country: 'Syria',
    IATA: 'LTK',
    ICAO: 'OSLK',
    lat: '35.401100158691406',
    lon: '35.948699951171875',
    timezone: '2'
  },
  {
    name: 'Palmyra ',
    city: 'Palmyra',
    country: 'Syria',
    IATA: 'PMS',
    ICAO: 'OSPR',
    lat: '34.5574',
    lon: '38.316898',
    timezone: '2'
  },
  {
    name: 'Doha Intl ',
    city: 'Doha',
    country: 'Qatar',
    IATA: 'DIA',
    ICAO: 'OTBD',
    lat: '25.261101',
    lon: '51.565102',
    timezone: '3'
  },
  {
    name: 'Canton Island ',
    city: 'Canton Island',
    country: 'Kiribati',
    IATA: 'CIS',
    ICAO: 'PCIS',
    lat: '-2.7681200504300003',
    lon: '-171.710006714',
    timezone: '13'
  },
  {
    name: 'Rota Intl ',
    city: 'Rota',
    country: 'Northern Mariana Islands',
    IATA: 'ROP',
    ICAO: 'PGRO',
    lat: '14.174300193786621',
    lon: '145.2429962158203',
    timezone: '10'
  },
  {
    name: 'Saipan Intl ',
    city: 'Saipan',
    country: 'Northern Mariana Islands',
    IATA: 'SPN',
    ICAO: 'PGSN',
    lat: '15.119',
    lon: '145.729004',
    timezone: '10'
  },
  {
    name: 'Andersen Air Force Base',
    city: 'Andersen',
    country: 'Guam',
    IATA: 'UAM',
    ICAO: 'PGUA',
    lat: '13.584',
    lon: '144.929998',
    timezone: '10'
  },
  {
    name: 'Antonio B. Won Pat Intl ',
    city: 'Agana',
    country: 'Guam',
    IATA: 'GUM',
    ICAO: 'PGUM',
    lat: '13.4834003448',
    lon: '144.796005249',
    timezone: '10'
  },
  {
    name: 'Tinian Intl ',
    city: 'West Tinian',
    country: 'Northern Mariana Islands',
    IATA: 'TIQ',
    ICAO: 'PGWT',
    lat: '14.999199867248535',
    lon: '145.61900329589844',
    timezone: '10'
  },
  {
    name: 'Marshall Islands Intl ',
    city: 'Majuro',
    country: 'Marshall Islands',
    IATA: 'MAJ',
    ICAO: 'PKMJ',
    lat: '7.064760208129883',
    lon: '171.27200317382812',
    timezone: '12'
  },
  {
    name: 'Dyess Army Air Field',
    city: 'Kwajalein',
    country: 'Marshall Islands',
    IATA: '\\N',
    ICAO: 'PKRO',
    lat: '9.396889686580002',
    lon: '167.470993042',
    timezone: '12'
  },
  {
    name: 'Bucholz Army Air Field',
    city: 'Kwajalein',
    country: 'Marshall Islands',
    IATA: 'KWA',
    ICAO: 'PKWA',
    lat: '8.720120429992676',
    lon: '167.73199462890625',
    timezone: '12'
  },
  {
    name: 'Cassidy Intl ',
    city: 'Kiritimati',
    country: 'Kiribati',
    IATA: 'CXI',
    ICAO: 'PLCH',
    lat: '1.9861600399017334',
    lon: '-157.35000610351562',
    timezone: '-12'
  },
  {
    name: 'Henderson Field',
    city: 'Midway',
    country: 'Midway Islands',
    IATA: 'MDY',
    ICAO: 'PMDY',
    lat: '28.20170021057129',
    lon: '-177.38099670410156',
    timezone: '-11'
  },
  {
    name: 'Chuuk Intl ',
    city: 'Chuuk',
    country: 'Micronesia',
    IATA: 'TKK',
    ICAO: 'PTKK',
    lat: '7.461870193481445',
    lon: '151.84300231933594',
    timezone: '10'
  },
  {
    name: 'Pohnpei Intl ',
    city: 'Pohnpei',
    country: 'Micronesia',
    IATA: 'PNI',
    ICAO: 'PTPN',
    lat: '6.985099792480469',
    lon: '158.20899963378906',
    timezone: '11'
  },
  {
    name: 'Babelthuap ',
    city: 'Babelthuap',
    country: 'Palau',
    IATA: 'ROR',
    ICAO: 'PTRO',
    lat: '7.36731',
    lon: '134.544236',
    timezone: '9'
  },
  {
    name: 'Kosrae Intl ',
    city: 'Kosrae',
    country: 'Micronesia',
    IATA: 'KSA',
    ICAO: 'PTSA',
    lat: '5.35698',
    lon: '162.957993',
    timezone: '11'
  },
  {
    name: 'Yap Intl ',
    city: 'Yap',
    country: 'Micronesia',
    IATA: 'YAP',
    ICAO: 'PTYA',
    lat: '9.49891',
    lon: '138.082993',
    timezone: '10'
  },
  {
    name: 'Kinmen ',
    city: 'Kinmen',
    country: 'Taiwan',
    IATA: 'KNH',
    ICAO: 'RCBS',
    lat: '24.4279',
    lon: '118.359001',
    timezone: '8'
  },
  {
    name: 'Pingtung South ',
    city: 'Pingtung',
    country: 'Taiwan',
    IATA: '\\N',
    ICAO: 'RCDC',
    lat: '22.672399520874023',
    lon: '120.46199798583984',
    timezone: '8'
  },
  {
    name: 'Longtan Air Base',
    city: 'Longtang',
    country: 'Taiwan',
    IATA: '\\N',
    ICAO: 'RCDI',
    lat: '24.855100631713867',
    lon: '121.23799896240234',
    timezone: '8'
  },
  {
    name: 'Taitung ',
    city: 'Fengnin',
    country: 'Taiwan',
    IATA: 'TTT',
    ICAO: 'RCFN',
    lat: '22.7549991607666',
    lon: '121.10199737548828',
    timezone: '8'
  },
  {
    name: 'Lyudao ',
    city: 'Green Island',
    country: 'Taiwan',
    IATA: 'GNI',
    ICAO: 'RCGI',
    lat: '22.673900604248047',
    lon: '121.46600341796875',
    timezone: '8'
  },
  {
    name: 'Kaohsiung Intl ',
    city: 'Kaohsiung',
    country: 'Taiwan',
    IATA: 'KHH',
    ICAO: 'RCKH',
    lat: '22.57710075378418',
    lon: '120.3499984741211',
    timezone: '8'
  },
  {
    name: 'Chiayi ',
    city: 'Chiayi',
    country: 'Taiwan',
    IATA: 'CYI',
    ICAO: 'RCKU',
    lat: '23.46179962158203',
    lon: '120.39299774169922',
    timezone: '8'
  },
  {
    name: 'Lanyu ',
    city: 'Lanyu',
    country: 'Taiwan',
    IATA: 'KYD',
    ICAO: 'RCLY',
    lat: '22.027000427246094',
    lon: '121.53500366210938',
    timezone: '8'
  },
  {
    name: 'Taichung Ching Chuang Kang ',
    city: 'Taichung',
    country: 'Taiwan',
    IATA: 'RMQ',
    ICAO: 'RCMQ',
    lat: '24.264699935913086',
    lon: '120.62100219726562',
    timezone: '8'
  },
  {
    name: 'Tainan ',
    city: 'Tainan',
    country: 'Taiwan',
    IATA: 'TNN',
    ICAO: 'RCNN',
    lat: '22.95039939880371',
    lon: '120.20600128173828',
    timezone: '8'
  },
  {
    name: 'Hsinchu Air Base',
    city: 'Hsinchu',
    country: 'Taiwan',
    IATA: 'HSZ',
    ICAO: 'RCPO',
    lat: '24.8180007935',
    lon: '120.939002991',
    timezone: '8'
  },
  {
    name: 'Makung ',
    city: 'Makung',
    country: 'Taiwan',
    IATA: 'MZG',
    ICAO: 'RCQC',
    lat: '23.568700790405273',
    lon: '119.62799835205078',
    timezone: '8'
  },
  {
    name: 'Chihhang Air Base',
    city: 'Taitung',
    country: 'Taiwan',
    IATA: '\\N',
    ICAO: 'RCQS',
    lat: '22.793100357055664',
    lon: '121.18199920654297',
    timezone: '8'
  },
  {
    name: 'Pingtung North ',
    city: 'Pingtung',
    country: 'Taiwan',
    IATA: 'PIF',
    ICAO: 'RCSQ',
    lat: '22.700199127197266',
    lon: '120.48200225830078',
    timezone: '8'
  },
  {
    name: 'Taipei Songshan ',
    city: 'Taipei',
    country: 'Taiwan',
    IATA: 'TSA',
    ICAO: 'RCSS',
    lat: '25.069400787353516',
    lon: '121.552001953125',
    timezone: '8'
  },
  {
    name: 'Taiwan Taoyuan Intl ',
    city: 'Taipei',
    country: 'Taiwan',
    IATA: 'TPE',
    ICAO: 'RCTP',
    lat: '25.0777',
    lon: '121.233002',
    timezone: '8'
  },
  {
    name: 'Wang-an ',
    city: 'Wang An',
    country: 'Taiwan',
    IATA: 'WOT',
    ICAO: 'RCWA',
    lat: '23.367372512817383',
    lon: '119.50277709960938',
    timezone: '8'
  },
  {
    name: 'Hualien ',
    city: 'Hualien',
    country: 'Taiwan',
    IATA: 'HUN',
    ICAO: 'RCYU',
    lat: '24.023099899291992',
    lon: '121.61799621582031',
    timezone: '8'
  },
  {
    name: 'Narita Intl ',
    city: 'Tokyo',
    country: 'Japan',
    IATA: 'NRT',
    ICAO: 'RJAA',
    lat: '35.7647018433',
    lon: '140.386001587',
    timezone: '9'
  },
  {
    name: 'Matsumoto ',
    city: 'Matsumoto',
    country: 'Japan',
    IATA: 'MMJ',
    ICAO: 'RJAF',
    lat: '36.16680145263672',
    lon: '137.92300415039062',
    timezone: '9'
  },
  {
    name: 'Hyakuri ',
    city: 'Ibaraki',
    country: 'Japan',
    IATA: 'IBR',
    ICAO: 'RJAH',
    lat: '36.181098938',
    lon: '140.414993286',
    timezone: '9'
  },
  {
    name: 'Minami Torishima ',
    city: 'Minami Tori Shima',
    country: 'Japan',
    IATA: 'MUS',
    ICAO: 'RJAM',
    lat: '24.2896995544',
    lon: '153.979003906',
    timezone: '9'
  },
  {
    name: 'Iwo Jima ',
    city: 'Iwojima',
    country: 'Japan',
    IATA: 'IWO',
    ICAO: 'RJAW',
    lat: '24.784000396728516',
    lon: '141.322998046875',
    timezone: '9'
  },
  {
    name: 'Nanki Shirahama ',
    city: 'Nanki-shirahama',
    country: 'Japan',
    IATA: 'SHM',
    ICAO: 'RJBD',
    lat: '33.6622009277',
    lon: '135.363998413',
    timezone: '9'
  },
  {
    name: 'Kohnan ',
    city: 'Kohnan',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJBK',
    lat: '34.59080123901367',
    lon: '133.93299865722656',
    timezone: '9'
  },
  {
    name: 'Tokachi-Obihiro ',
    city: 'Obihiro',
    country: 'Japan',
    IATA: 'OBO',
    ICAO: 'RJCB',
    lat: '42.7332992554',
    lon: '143.216995239',
    timezone: '9'
  },
  {
    name: 'New Chitose ',
    city: 'Sapporo',
    country: 'Japan',
    IATA: 'CTS',
    ICAO: 'RJCC',
    lat: '42.77519989013672',
    lon: '141.69200134277344',
    timezone: '9'
  },
  {
    name: 'Hakodate ',
    city: 'Hakodate',
    country: 'Japan',
    IATA: 'HKD',
    ICAO: 'RJCH',
    lat: '41.7700004578',
    lon: '140.822006226',
    timezone: '9'
  },
  {
    name: 'Chitose Air Base',
    city: 'Chitose',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJCJ',
    lat: '42.79449844359999',
    lon: '141.666000366',
    timezone: '9'
  },
  {
    name: 'Memanbetsu ',
    city: 'Memanbetsu',
    country: 'Japan',
    IATA: 'MMB',
    ICAO: 'RJCM',
    lat: '43.8805999756',
    lon: '144.164001465',
    timezone: '9'
  },
  {
    name: 'Nakashibetsu ',
    city: 'Nakashibetsu',
    country: 'Japan',
    IATA: 'SHB',
    ICAO: 'RJCN',
    lat: '43.5774993896',
    lon: '144.960006714',
    timezone: '9'
  },
  {
    name: 'Tokachi ',
    city: 'Tokachi',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJCT',
    lat: '42.890499114990234',
    lon: '143.1580047607422',
    timezone: '9'
  },
  {
    name: 'Wakkanai ',
    city: 'Wakkanai',
    country: 'Japan',
    IATA: 'WKJ',
    ICAO: 'RJCW',
    lat: '45.4042015076',
    lon: '141.800994873',
    timezone: '9'
  },
  {
    name: 'Iki ',
    city: 'Iki',
    country: 'Japan',
    IATA: 'IKI',
    ICAO: 'RJDB',
    lat: '33.7490005493',
    lon: '129.785003662',
    timezone: '9'
  },
  {
    name: 'Yamaguchi Ube ',
    city: 'Yamaguchi',
    country: 'Japan',
    IATA: 'UBJ',
    ICAO: 'RJDC',
    lat: '33.930000305200004',
    lon: '131.279006958',
    timezone: '9'
  },
  {
    name: 'Tsushima ',
    city: 'Tsushima',
    country: 'Japan',
    IATA: 'TSJ',
    ICAO: 'RJDT',
    lat: '34.2849006653',
    lon: '129.330993652',
    timezone: '9'
  },
  {
    name: 'Monbetsu ',
    city: 'Monbetsu',
    country: 'Japan',
    IATA: 'MBE',
    ICAO: 'RJEB',
    lat: '44.303901672399995',
    lon: '143.404006958',
    timezone: '9'
  },
  {
    name: 'Asahikawa ',
    city: 'Asahikawa',
    country: 'Japan',
    IATA: 'AKJ',
    ICAO: 'RJEC',
    lat: '43.670799255371094',
    lon: '142.44700622558594',
    timezone: '9'
  },
  {
    name: 'Okushiri ',
    city: 'Okushiri',
    country: 'Japan',
    IATA: 'OIR',
    ICAO: 'RJEO',
    lat: '42.0717010498',
    lon: '139.432998657',
    timezone: '9'
  },
  {
    name: 'Rishiri ',
    city: 'Rishiri Island',
    country: 'Japan',
    IATA: 'RIS',
    ICAO: 'RJER',
    lat: '45.2420005798',
    lon: '141.186004639',
    timezone: '9'
  },
  {
    name: 'Ashiya ',
    city: 'Ashiya',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJFA',
    lat: '33.88309860229492',
    lon: '130.6529998779297',
    timezone: '9'
  },
  {
    name: 'Yakushima ',
    city: 'Yakushima',
    country: 'Japan',
    IATA: 'KUM',
    ICAO: 'RJFC',
    lat: '30.3855991364',
    lon: '130.658996582',
    timezone: '9'
  },
  {
    name: 'Fukue ',
    city: 'Fukue',
    country: 'Japan',
    IATA: 'FUJ',
    ICAO: 'RJFE',
    lat: '32.66630172729492',
    lon: '128.83299255371094',
    timezone: '9'
  },
  {
    name: 'Fukuoka ',
    city: 'Fukuoka',
    country: 'Japan',
    IATA: 'FUK',
    ICAO: 'RJFF',
    lat: '33.585899353027344',
    lon: '130.4510040283203',
    timezone: '9'
  },
  {
    name: 'New Tanegashima ',
    city: 'Tanegashima',
    country: 'Japan',
    IATA: 'TNE',
    ICAO: 'RJFG',
    lat: '30.605100631699997',
    lon: '130.990997314',
    timezone: '9'
  },
  {
    name: 'Kagoshima ',
    city: 'Kagoshima',
    country: 'Japan',
    IATA: 'KOJ',
    ICAO: 'RJFK',
    lat: '31.80340003967285',
    lon: '130.718994140625',
    timezone: '9'
  },
  {
    name: 'Miyazaki ',
    city: 'Miyazaki',
    country: 'Japan',
    IATA: 'KMI',
    ICAO: 'RJFM',
    lat: '31.877199173',
    lon: '131.449005127',
    timezone: '9'
  },
  {
    name: 'Nyutabaru ',
    city: 'Nyutabaru',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJFN',
    lat: '32.08359909057617',
    lon: '131.4510040283203',
    timezone: '9'
  },
  {
    name: 'Oita ',
    city: 'Oita',
    country: 'Japan',
    IATA: 'OIT',
    ICAO: 'RJFO',
    lat: '33.479400634799994',
    lon: '131.736999512',
    timezone: '9'
  },
  {
    name: 'Kitaky\u016bsh\u016b ',
    city: 'Kitakyushu',
    country: 'Japan',
    IATA: 'KKJ',
    ICAO: 'RJFR',
    lat: '33.8459014893',
    lon: '131.035003662',
    timezone: '9'
  },
  {
    name: 'Kumamoto ',
    city: 'Kumamoto',
    country: 'Japan',
    IATA: 'KMJ',
    ICAO: 'RJFT',
    lat: '32.83729934692383',
    lon: '130.85499572753906',
    timezone: '9'
  },
  {
    name: 'Nagasaki ',
    city: 'Nagasaki',
    country: 'Japan',
    IATA: 'NGS',
    ICAO: 'RJFU',
    lat: '32.916900634799994',
    lon: '129.914001465',
    timezone: '9'
  },
  {
    name: 'Kanoya ',
    city: 'Kanoya',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJFY',
    lat: '31.367599487304688',
    lon: '130.84500122070312',
    timezone: '9'
  },
  {
    name: 'Tsuiki Air Field',
    city: 'Tsuiki',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJFZ',
    lat: '33.6850013733',
    lon: '131.039993286',
    timezone: '9'
  },
  {
    name: 'Amami ',
    city: 'Amami',
    country: 'Japan',
    IATA: 'ASJ',
    ICAO: 'RJKA',
    lat: '28.430599212646484',
    lon: '129.71299743652344',
    timezone: '9'
  },
  {
    name: 'Okierabu ',
    city: 'Okierabu',
    country: 'Japan',
    IATA: 'OKE',
    ICAO: 'RJKB',
    lat: '27.4255008698',
    lon: '128.701004028',
    timezone: '9'
  },
  {
    name: 'Tokunoshima ',
    city: 'Tokunoshima',
    country: 'Japan',
    IATA: 'TKN',
    ICAO: 'RJKN',
    lat: '27.83639907836914',
    lon: '128.88099670410156',
    timezone: '9'
  },
  {
    name: 'Fukui ',
    city: 'Fukui',
    country: 'Japan',
    IATA: 'FKJ',
    ICAO: 'RJNF',
    lat: '36.1427993774',
    lon: '136.223999023',
    timezone: '9'
  },
  {
    name: 'Gifu ',
    city: 'Gifu',
    country: 'Japan',
    IATA: 'QGU',
    ICAO: 'RJNG',
    lat: '35.394100189208984',
    lon: '136.8699951171875',
    timezone: '9'
  },
  {
    name: 'Hamamatsu ',
    city: 'Hamamatsu',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJNH',
    lat: '34.75019836425781',
    lon: '137.7030029296875',
    timezone: '9'
  },
  {
    name: 'Komatsu ',
    city: 'Kanazawa',
    country: 'Japan',
    IATA: 'KMQ',
    ICAO: 'RJNK',
    lat: '36.39459991455078',
    lon: '136.40699768066406',
    timezone: '9'
  },
  {
    name: 'Oki ',
    city: 'Oki Island',
    country: 'Japan',
    IATA: 'OKI',
    ICAO: 'RJNO',
    lat: '36.18109893798828',
    lon: '133.3249969482422',
    timezone: '9'
  },
  {
    name: 'Toyama ',
    city: 'Toyama',
    country: 'Japan',
    IATA: 'TOY',
    ICAO: 'RJNT',
    lat: '36.64830017089844',
    lon: '137.18800354003906',
    timezone: '9'
  },
  {
    name: 'Shizuhama ',
    city: 'Yaizu',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJNY',
    lat: '34.812801361083984',
    lon: '138.29800415039062',
    timezone: '9'
  },
  {
    name: 'Hiroshima ',
    city: 'Hiroshima',
    country: 'Japan',
    IATA: 'HIJ',
    ICAO: 'RJOA',
    lat: '34.4361000061',
    lon: '132.919006348',
    timezone: '9'
  },
  {
    name: 'Okayama ',
    city: 'Okayama',
    country: 'Japan',
    IATA: 'OKJ',
    ICAO: 'RJOB',
    lat: '34.7569007874',
    lon: '133.854995728',
    timezone: '9'
  },
  {
    name: 'Izumo ',
    city: 'Izumo',
    country: 'Japan',
    IATA: 'IZO',
    ICAO: 'RJOC',
    lat: '35.4136009216',
    lon: '132.88999939',
    timezone: '9'
  },
  {
    name: 'Hofu ',
    city: 'Hofu',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJOF',
    lat: '34.034698486328125',
    lon: '131.5489959716797',
    timezone: '9'
  },
  {
    name: 'Miho Yonago ',
    city: 'Miho',
    country: 'Japan',
    IATA: 'YGJ',
    ICAO: 'RJOH',
    lat: '35.4921989440918',
    lon: '133.23599243164062',
    timezone: '9'
  },
  {
    name: 'K\u014dchi Ry\u014dma ',
    city: 'Kochi',
    country: 'Japan',
    IATA: 'KCZ',
    ICAO: 'RJOK',
    lat: '33.546101',
    lon: '133.669006',
    timezone: '9'
  },
  {
    name: 'Matsuyama ',
    city: 'Matsuyama',
    country: 'Japan',
    IATA: 'MYJ',
    ICAO: 'RJOM',
    lat: '33.82720184326172',
    lon: '132.6999969482422',
    timezone: '9'
  },
  {
    name: 'Osaka Intl ',
    city: 'Osaka',
    country: 'Japan',
    IATA: 'ITM',
    ICAO: 'RJOO',
    lat: '34.785499572753906',
    lon: '135.43800354003906',
    timezone: '9'
  },
  {
    name: 'Tottori ',
    city: 'Tottori',
    country: 'Japan',
    IATA: 'TTJ',
    ICAO: 'RJOR',
    lat: '35.5301017761',
    lon: '134.167007446',
    timezone: '9'
  },
  {
    name: 'Tokushima /JMSDF Air Base',
    city: 'Tokushima',
    country: 'Japan',
    IATA: 'TKS',
    ICAO: 'RJOS',
    lat: '34.132801',
    lon: '134.606995',
    timezone: '9'
  },
  {
    name: 'Takamatsu ',
    city: 'Takamatsu',
    country: 'Japan',
    IATA: 'TAK',
    ICAO: 'RJOT',
    lat: '34.214199066199996',
    lon: '134.01600647',
    timezone: '9'
  },
  {
    name: 'Yao ',
    city: 'Osaka',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJOY',
    lat: '34.59629821777344',
    lon: '135.60299682617188',
    timezone: '9'
  },
  {
    name: 'Ozuki ',
    city: 'Ozuki',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJOZ',
    lat: '34.0452995300293',
    lon: '131.052001953125',
    timezone: '9'
  },
  {
    name: 'Aomori ',
    city: 'Aomori',
    country: 'Japan',
    IATA: 'AOJ',
    ICAO: 'RJSA',
    lat: '40.73469924926758',
    lon: '140.6909942626953',
    timezone: '9'
  },
  {
    name: 'Yamagata ',
    city: 'Yamagata',
    country: 'Japan',
    IATA: 'GAJ',
    ICAO: 'RJSC',
    lat: '38.411899566699994',
    lon: '140.371002197',
    timezone: '9'
  },
  {
    name: 'Sado ',
    city: 'Sado',
    country: 'Japan',
    IATA: 'SDS',
    ICAO: 'RJSD',
    lat: '38.0601997375',
    lon: '138.414001465',
    timezone: '9'
  },
  {
    name: 'Hachinohe ',
    city: 'Hachinoe',
    country: 'Japan',
    IATA: 'HHE',
    ICAO: 'RJSH',
    lat: '40.556400299072266',
    lon: '141.46600341796875',
    timezone: '9'
  },
  {
    name: 'Hanamaki ',
    city: 'Hanamaki',
    country: 'Japan',
    IATA: 'HNA',
    ICAO: 'RJSI',
    lat: '39.4286003112793',
    lon: '141.13499450683594',
    timezone: '9'
  },
  {
    name: 'Akita ',
    city: 'Akita',
    country: 'Japan',
    IATA: 'AXT',
    ICAO: 'RJSK',
    lat: '39.6156005859375',
    lon: '140.218994140625',
    timezone: '9'
  },
  {
    name: 'Misawa Air Base',
    city: 'Misawa',
    country: 'Japan',
    IATA: 'MSJ',
    ICAO: 'RJSM',
    lat: '40.703201293899994',
    lon: '141.367996216',
    timezone: '9'
  },
  {
    name: 'Sendai ',
    city: 'Sendai',
    country: 'Japan',
    IATA: 'SDJ',
    ICAO: 'RJSS',
    lat: '38.1397018433',
    lon: '140.917007446',
    timezone: '9'
  },
  {
    name: 'Matsushima Air Base',
    city: 'Matsushima',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJST',
    lat: '38.4048995972',
    lon: '141.220001221',
    timezone: '9'
  },
  {
    name: 'Atsugi Naval Air Facility',
    city: 'Atsugi',
    country: 'Japan',
    IATA: 'NJA',
    ICAO: 'RJTA',
    lat: '35.4546012878418',
    lon: '139.4499969482422',
    timezone: '9'
  },
  {
    name: 'Tateyama ',
    city: 'Tateyama',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJTE',
    lat: '34.987099',
    lon: '139.828995',
    timezone: '9'
  },
  {
    name: 'Hachijojima ',
    city: 'Hachijojima',
    country: 'Japan',
    IATA: 'HAC',
    ICAO: 'RJTH',
    lat: '33.1150016785',
    lon: '139.785995483',
    timezone: '9'
  },
  {
    name: 'Iruma Air Base',
    city: 'Iruma',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJTJ',
    lat: '35.84189987182617',
    lon: '139.41099548339844',
    timezone: '9'
  },
  {
    name: 'Kisarazu ',
    city: 'Kisarazu',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJTK',
    lat: '35.39830017089844',
    lon: '139.91000366210938',
    timezone: '9'
  },
  {
    name: 'Shimofusa ',
    city: 'Shimofusa',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJTL',
    lat: '35.79890060424805',
    lon: '140.01100158691406',
    timezone: '9'
  },
  {
    name: 'Oshima ',
    city: 'Oshima',
    country: 'Japan',
    IATA: 'OIM',
    ICAO: 'RJTO',
    lat: '34.782001495399996',
    lon: '139.36000061',
    timezone: '9'
  },
  {
    name: 'Kastner Army Heliport',
    city: 'Zama',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RJTR',
    lat: '35.5138015747',
    lon: '139.393997192',
    timezone: '9'
  },
  {
    name: 'Tokyo Haneda Intl ',
    city: 'Tokyo',
    country: 'Japan',
    IATA: 'HND',
    ICAO: 'RJTT',
    lat: '35.552299',
    lon: '139.779999',
    timezone: '9'
  },
  {
    name: 'Yokota Air Base',
    city: 'Yokota',
    country: 'Japan',
    IATA: 'OKO',
    ICAO: 'RJTY',
    lat: '35.74850082397461',
    lon: '139.34800720214844',
    timezone: '9'
  },
  {
    name: 'Gwangju ',
    city: 'Kwangju',
    country: 'South Korea',
    IATA: 'KWJ',
    ICAO: 'RKJJ',
    lat: '35.123173',
    lon: '126.805444',
    timezone: '9'
  },
  {
    name: 'Jeon Ju  (G-703)',
    city: 'Jhunju',
    country: 'South Korea',
    IATA: 'CHN',
    ICAO: 'RKJU',
    lat: '35.87808',
    lon: '127.119112',
    timezone: '9'
  },
  {
    name: 'Yeosu ',
    city: 'Yeosu',
    country: 'South Korea',
    IATA: 'RSU',
    ICAO: 'RKJY',
    lat: '34.84230041503906',
    lon: '127.61699676513672',
    timezone: '9'
  },
  {
    name: 'Sokcho ',
    city: "Sokch'o",
    country: 'South Korea',
    IATA: '\\N',
    ICAO: 'RKND',
    lat: '38.142601013183594',
    lon: '128.5989990234375',
    timezone: '9'
  },
  {
    name: 'Gangneung  (K-18)',
    city: 'Kangnung',
    country: 'South Korea',
    IATA: 'KAG',
    ICAO: 'RKNN',
    lat: '37.753601',
    lon: '128.943915',
    timezone: '9'
  },
  {
    name: 'Jeju Intl ',
    city: 'Cheju',
    country: 'South Korea',
    IATA: 'CJU',
    ICAO: 'RKPC',
    lat: '33.51129913330078',
    lon: '126.49299621582031',
    timezone: '9'
  },
  {
    name: 'Jinhae Airbase/ (G-813/K-10)',
    city: 'Chinhae',
    country: 'South Korea',
    IATA: 'CHF',
    ICAO: 'RKPE',
    lat: '35.140248',
    lon: '128.696229',
    timezone: '9'
  },
  {
    name: 'Gimhae Intl ',
    city: 'Busan',
    country: 'South Korea',
    IATA: 'PUS',
    ICAO: 'RKPK',
    lat: '35.1795005798',
    lon: '128.93800354',
    timezone: '9'
  },
  {
    name: 'Ulsan ',
    city: 'Ulsan',
    country: 'South Korea',
    IATA: 'USN',
    ICAO: 'RKPU',
    lat: '35.59349823',
    lon: '129.352005005',
    timezone: '9'
  },
  {
    name: 'A 511 ',
    city: 'Pyongtaek',
    country: 'South Korea',
    IATA: '\\N',
    ICAO: 'RKSG',
    lat: '36.96220016479492',
    lon: '127.03099822998047',
    timezone: '9'
  },
  {
    name: 'Seoul Air Base (K-16)',
    city: 'Seoul East',
    country: 'South Korea',
    IATA: 'SSN',
    ICAO: 'RKSM',
    lat: '37.444744',
    lon: '127.112718',
    timezone: '9'
  },
  {
    name: 'Osan Air Base',
    city: 'Osan',
    country: 'South Korea',
    IATA: 'OSN',
    ICAO: 'RKSO',
    lat: '37.090599',
    lon: '127.029999',
    timezone: '9'
  },
  {
    name: 'Gimpo Intl ',
    city: 'Seoul',
    country: 'South Korea',
    IATA: 'GMP',
    ICAO: 'RKSS',
    lat: '37.5583',
    lon: '126.791',
    timezone: '9'
  },
  {
    name: 'Suwon ',
    city: 'Suwon',
    country: 'South Korea',
    IATA: 'SWU',
    ICAO: 'RKSW',
    lat: '37.23939895629883',
    lon: '127.00700378417969',
    timezone: '9'
  },
  {
    name: 'Pohang  (G-815/K-3)',
    city: 'Pohang',
    country: 'South Korea',
    IATA: 'KPO',
    ICAO: 'RKTH',
    lat: '35.987955',
    lon: '129.420383',
    timezone: '9'
  },
  {
    name: 'Daegu ',
    city: 'Taegu',
    country: 'South Korea',
    IATA: 'TAE',
    ICAO: 'RKTN',
    lat: '35.896872',
    lon: '128.65531',
    timezone: '9'
  },
  {
    name: 'Yecheon Airbase',
    city: 'Yechon',
    country: 'South Korea',
    IATA: 'YEC',
    ICAO: 'RKTY',
    lat: '36.630373',
    lon: '128.34971',
    timezone: '9'
  },
  {
    name: 'Naha ',
    city: 'Okinawa',
    country: 'Japan',
    IATA: 'OKA',
    ICAO: 'ROAH',
    lat: '26.1958007812',
    lon: '127.646003723',
    timezone: '9'
  },
  {
    name: 'Ie Shima Auxiliary Air Base',
    city: 'Iejima',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'RODE',
    lat: '26.725757598876953',
    lon: '127.76490020751953',
    timezone: '9'
  },
  {
    name: 'Kadena Air Base',
    city: 'Kadena',
    country: 'Japan',
    IATA: 'DNA',
    ICAO: 'RODN',
    lat: '26.3556',
    lon: '127.767998',
    timezone: '9'
  },
  {
    name: 'New Ishigaki ',
    city: 'Ishigaki',
    country: 'Japan',
    IATA: 'ISG',
    ICAO: 'ROIG',
    lat: '24.396389',
    lon: '124.245',
    timezone: '9'
  },
  {
    name: 'Kumejima ',
    city: 'Kumejima',
    country: 'Japan',
    IATA: 'UEO',
    ICAO: 'ROKJ',
    lat: '26.363500595092773',
    lon: '126.71399688720703',
    timezone: '9'
  },
  {
    name: 'Minami-Daito ',
    city: 'Minami Daito',
    country: 'Japan',
    IATA: 'MMD',
    ICAO: 'ROMD',
    lat: '25.8465003967',
    lon: '131.263000488',
    timezone: '9'
  },
  {
    name: 'Miyako ',
    city: 'Miyako',
    country: 'Japan',
    IATA: 'MMY',
    ICAO: 'ROMY',
    lat: '24.782800674399997',
    lon: '125.294998169',
    timezone: '9'
  },
  {
    name: 'Kitadaito ',
    city: 'Kitadaito',
    country: 'Japan',
    IATA: 'KTD',
    ICAO: 'RORK',
    lat: '25.9447002411',
    lon: '131.32699585',
    timezone: '9'
  },
  {
    name: 'Shimojishima ',
    city: 'Shimojishima',
    country: 'Japan',
    IATA: 'SHI',
    ICAO: 'RORS',
    lat: '24.8267002106',
    lon: '125.144996643',
    timezone: '9'
  },
  {
    name: 'Tarama ',
    city: 'Tarama',
    country: 'Japan',
    IATA: 'TRA',
    ICAO: 'RORT',
    lat: '24.653900146499996',
    lon: '124.675003052',
    timezone: '9'
  },
  {
    name: 'Yoron ',
    city: 'Yoron',
    country: 'Japan',
    IATA: 'RNJ',
    ICAO: 'RORY',
    lat: '27.0440006256',
    lon: '128.401992798',
    timezone: '9'
  },
  {
    name: 'Futenma Marine Corps Air Station',
    city: 'Futema',
    country: 'Japan',
    IATA: '\\N',
    ICAO: 'ROTM',
    lat: '26.27429962158203',
    lon: '127.75599670410156',
    timezone: '9'
  },
  {
    name: 'Yonaguni ',
    city: 'Yonaguni Jima',
    country: 'Japan',
    IATA: 'OGN',
    ICAO: 'ROYN',
    lat: '24.466899871826172',
    lon: '122.97799682617188',
    timezone: '9'
  },
  {
    name: 'Ninoy Aquino Intl ',
    city: 'Manila',
    country: 'Philippines',
    IATA: 'MNL',
    ICAO: 'RPLL',
    lat: '14.5086',
    lon: '121.019997',
    timezone: '8'
  },
  {
    name: 'Awang ',
    city: 'Cotabato',
    country: 'Philippines',
    IATA: 'CBO',
    ICAO: 'RPMC',
    lat: '7.1652398109436035',
    lon: '124.20999908447266',
    timezone: '8'
  },
  {
    name: 'Cagayan De Oro ',
    city: 'Ladag',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPML',
    lat: '8.41562',
    lon: '124.611',
    timezone: '8'
  },
  {
    name: 'Pagadian ',
    city: 'Pagadian',
    country: 'Philippines',
    IATA: 'PAG',
    ICAO: 'RPMP',
    lat: '7.83073144787',
    lon: '123.461179733',
    timezone: '8'
  },
  {
    name: 'General Santos Intl ',
    city: 'Romblon',
    country: 'Philippines',
    IATA: 'GES',
    ICAO: 'RPMR',
    lat: '6.05800008774',
    lon: '125.096000671',
    timezone: '8'
  },
  {
    name: 'Zamboanga Intl ',
    city: 'Zamboanga',
    country: 'Philippines',
    IATA: 'ZAM',
    ICAO: 'RPMZ',
    lat: '6.922420024871826',
    lon: '122.05999755859375',
    timezone: '8'
  },
  {
    name: 'Loakan ',
    city: 'Baguio',
    country: 'Philippines',
    IATA: 'BAG',
    ICAO: 'RPUB',
    lat: '16.375099182128906',
    lon: '120.62000274658203',
    timezone: '8'
  },
  {
    name: 'Daet ',
    city: 'Daet',
    country: 'Philippines',
    IATA: 'DTE',
    ICAO: 'RPUD',
    lat: '14.129199981689453',
    lon: '122.9800033569336',
    timezone: '8'
  },
  {
    name: 'Basa Air Base',
    city: 'Floridablanca',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPUF',
    lat: '14.98724',
    lon: '120.492554',
    timezone: '8'
  },
  {
    name: 'Lingayen ',
    city: 'Lingayen',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPUG',
    lat: '16.034799575805664',
    lon: '120.24099731445312',
    timezone: '8'
  },
  {
    name: 'San Jose ',
    city: 'San Jose',
    country: 'Philippines',
    IATA: 'SJI',
    ICAO: 'RPUH',
    lat: '12.361499786399998',
    lon: '121.04699707',
    timezone: '8'
  },
  {
    name: 'Fernando Air Base',
    city: 'Lipa',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPUL',
    lat: '13.954999923706055',
    lon: '121.125',
    timezone: '8'
  },
  {
    name: 'Mamburao ',
    city: 'Mamburao',
    country: 'Philippines',
    IATA: 'MBO',
    ICAO: 'RPUM',
    lat: '13.208100318908691',
    lon: '120.6050033569336',
    timezone: '8'
  },
  {
    name: 'Vigan ',
    city: 'Vigan',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPUQ',
    lat: '17.555299758911133',
    lon: '120.35600280761719',
    timezone: '8'
  },
  {
    name: 'Dr.Juan C. Angara ',
    city: 'Baler',
    country: 'Philippines',
    IATA: 'BQA',
    ICAO: 'RPUR',
    lat: '15.729309',
    lon: '121.500034',
    timezone: '8'
  },
  {
    name: 'Bagabag ',
    city: 'Bagabag',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPUZ',
    lat: '16.6192',
    lon: '121.251999',
    timezone: '8'
  },
  {
    name: 'Daniel Z. Romualdez ',
    city: 'Tacloban',
    country: 'Philippines',
    IATA: 'TAC',
    ICAO: 'RPVA',
    lat: '11.228035',
    lon: '125.027761',
    timezone: '8'
  },
  {
    name: 'Bacolod-Silay ',
    city: 'Bacolod',
    country: 'Philippines',
    IATA: 'BCD',
    ICAO: 'RPVB',
    lat: '10.7764',
    lon: '123.014999',
    timezone: '8'
  },
  {
    name: 'Sibulan ',
    city: 'Dumaguete',
    country: 'Philippines',
    IATA: 'DGT',
    ICAO: 'RPVD',
    lat: '9.3337097168',
    lon: '123.300003052',
    timezone: '8'
  },
  {
    name: 'Godofredo P. Ramos ',
    city: 'Caticlan',
    country: 'Philippines',
    IATA: 'MPH',
    ICAO: 'RPVE',
    lat: '11.9245',
    lon: '121.954002',
    timezone: '8'
  },
  {
    name: 'Guiuan ',
    city: 'Guiuan',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPVG',
    lat: '11.0354995728',
    lon: '125.741996765',
    timezone: '8'
  },
  {
    name: 'Iloilo Intl ',
    city: 'Iloilo',
    country: 'Philippines',
    IATA: 'ILO',
    ICAO: 'RPVI',
    lat: '10.833017',
    lon: '122.493358',
    timezone: '8'
  },
  {
    name: 'Kalibo Intl ',
    city: 'Kalibo',
    country: 'Philippines',
    IATA: 'KLO',
    ICAO: 'RPVK',
    lat: '11.679400444',
    lon: '122.375999451',
    timezone: '8'
  },
  {
    name: 'Puerto Princesa ',
    city: 'Puerto Princesa',
    country: 'Philippines',
    IATA: 'PPS',
    ICAO: 'RPVP',
    lat: '9.742119789123535',
    lon: '118.75900268554688',
    timezone: '8'
  },
  {
    name: 'Evelio Javier ',
    city: 'San Jose',
    country: 'Philippines',
    IATA: 'EUQ',
    ICAO: 'RPVS',
    lat: '10.765999794',
    lon: '121.932998657',
    timezone: '8'
  },
  {
    name: 'Comodoro Pierrestegui ',
    city: 'Concordia',
    country: 'Argentina',
    IATA: 'COC',
    ICAO: 'SAAC',
    lat: '-31.2969',
    lon: '-57.9966',
    timezone: '-3'
  },
  {
    name: 'Gualeguaychu ',
    city: 'Gualeguaychu',
    country: 'Argentina',
    IATA: 'GHU',
    ICAO: 'SAAG',
    lat: '-33.0103',
    lon: '-58.6131',
    timezone: '-3'
  },
  {
    name: 'Junin ',
    city: 'Junin',
    country: 'Argentina',
    IATA: 'JNI',
    ICAO: 'SAAJ',
    lat: '-34.5459',
    lon: '-60.9306',
    timezone: '-3'
  },
  {
    name: 'General Urquiza ',
    city: 'Parana',
    country: 'Argentina',
    IATA: 'PRA',
    ICAO: 'SAAP',
    lat: '-31.7948',
    lon: '-60.4804',
    timezone: '-3'
  },
  {
    name: 'Islas Malvinas ',
    city: 'Rosario',
    country: 'Argentina',
    IATA: 'ROS',
    ICAO: 'SAAR',
    lat: '-32.9036',
    lon: '-60.785',
    timezone: '-3'
  },
  {
    name: 'Sauce Viejo ',
    city: 'Santa Fe',
    country: 'Argentina',
    IATA: 'SFN',
    ICAO: 'SAAV',
    lat: '-31.7117',
    lon: '-60.8117',
    timezone: '-3'
  },
  {
    name: 'Jorge Newbery Airpark',
    city: 'Buenos Aires',
    country: 'Argentina',
    IATA: 'AEP',
    ICAO: 'SABE',
    lat: '-34.5592',
    lon: '-58.4156',
    timezone: '-3'
  },
  {
    name: 'Ingeniero Ambrosio Taravella ',
    city: 'Cordoba',
    country: 'Argentina',
    IATA: 'COR',
    ICAO: 'SACO',
    lat: '-31.323601',
    lon: '-64.208',
    timezone: '-3'
  },
  {
    name: 'Chamical ',
    city: 'Gobernador Gordillo',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SACT',
    lat: '-30.34530067',
    lon: '-66.29360198',
    timezone: '-3'
  },
  {
    name: 'San Fernando ',
    city: 'San Fernando',
    country: 'Argentina',
    IATA: 'FDO',
    ICAO: 'SADF',
    lat: '-34.4532',
    lon: '-58.5896',
    timezone: '-3'
  },
  {
    name: 'Mariano Moreno ',
    city: 'Jose C. Paz',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SADJ',
    lat: '-34.5606',
    lon: '-58.7896',
    timezone: '-3'
  },
  {
    name: 'La Plata ',
    city: 'La Plata',
    country: 'Argentina',
    IATA: 'LPG',
    ICAO: 'SADL',
    lat: '-34.9722',
    lon: '-57.8947',
    timezone: '-3'
  },
  {
    name: 'Moron ',
    city: 'Moron',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SADM',
    lat: '-34.6763',
    lon: '-58.6428',
    timezone: '-3'
  },
  {
    name: 'El Palomar ',
    city: 'El Palomar',
    country: 'Argentina',
    IATA: 'EPA',
    ICAO: 'SADP',
    lat: '-34.6099',
    lon: '-58.6126',
    timezone: '-3'
  },
  {
    name: 'Chos Malal ',
    city: 'Chosmadal',
    country: 'Argentina',
    IATA: 'HOS',
    ICAO: 'SAHC',
    lat: '-37.444698333699996',
    lon: '-70.2225036621',
    timezone: '-3'
  },
  {
    name: 'Dr. Arturo H. Illia ',
    city: 'Fuerte Gral Roca',
    country: 'Argentina',
    IATA: 'GNR',
    ICAO: 'SAHR',
    lat: '-39.0007019043',
    lon: '-67.6204986572',
    timezone: '-3'
  },
  {
    name: 'El Plumerillo ',
    city: 'Mendoza',
    country: 'Argentina',
    IATA: 'MDZ',
    ICAO: 'SAME',
    lat: '-32.8316993713',
    lon: '-68.7929000854',
    timezone: '-3'
  },
  {
    name: 'Comodoro D.R. Salom\u00f3n ',
    city: 'Malargue',
    country: 'Argentina',
    IATA: 'LGS',
    ICAO: 'SAMM',
    lat: '-35.493598938',
    lon: '-69.5743026733',
    timezone: '-3'
  },
  {
    name: 'Suboficial Ay Santiago Germano ',
    city: 'San Rafael',
    country: 'Argentina',
    IATA: 'AFA',
    ICAO: 'SAMR',
    lat: '-34.588299',
    lon: '-68.4039',
    timezone: '-3'
  },
  {
    name: 'Catamarca ',
    city: 'Catamarca',
    country: 'Argentina',
    IATA: 'CTC',
    ICAO: 'SANC',
    lat: '-28.5956001282',
    lon: '-65.751701355',
    timezone: '-3'
  },
  {
    name: 'Vicecomodoro Angel D. La Paz Aragon\u00e9s ',
    city: 'Santiago Del Estero',
    country: 'Argentina',
    IATA: 'SDE',
    ICAO: 'SANE',
    lat: '-27.765556335399996',
    lon: '-64.3099975586',
    timezone: '-3'
  },
  {
    name: 'Tinogasta ',
    city: 'Tinogasta',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SANI',
    lat: '-28.0377998352',
    lon: '-67.5802993774',
    timezone: '-3'
  },
  {
    name: 'Capitan V A Almonacid ',
    city: 'La Rioja',
    country: 'Argentina',
    IATA: 'IRJ',
    ICAO: 'SANL',
    lat: '-29.3815994263',
    lon: '-66.7957992554',
    timezone: '-3'
  },
  {
    name: 'Chilecito ',
    city: 'Chilecito',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SANO',
    lat: '-29.2238998413',
    lon: '-67.4389038086',
    timezone: '-3'
  },
  {
    name: 'Teniente Benjamin Matienzo ',
    city: 'Tucuman',
    country: 'Argentina',
    IATA: 'TUC',
    ICAO: 'SANT',
    lat: '-26.8409',
    lon: '-65.104897',
    timezone: '-3'
  },
  {
    name: 'Domingo Faustino Sarmiento ',
    city: 'San Juan',
    country: 'Argentina',
    IATA: 'UAQ',
    ICAO: 'SANU',
    lat: '-31.571501',
    lon: '-68.418198',
    timezone: '-3'
  },
  {
    name: 'Area De Material ',
    city: 'Rio Cuarto',
    country: 'Argentina',
    IATA: 'RCU',
    ICAO: 'SAOC',
    lat: '-33.0850982666',
    lon: '-64.2612991333',
    timezone: '-3'
  },
  {
    name: 'Villa Dolores ',
    city: 'Villa Dolores',
    country: 'Argentina',
    IATA: 'VDR',
    ICAO: 'SAOD',
    lat: '-31.9451999664',
    lon: '-65.1463012695',
    timezone: '-3'
  },
  {
    name: 'La Quiaca ',
    city: 'Laboulaye',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SAOL',
    lat: '-22.1506004333',
    lon: '-65.57749938959999',
    timezone: '-3'
  },
  {
    name: 'Marcos Juarez ',
    city: 'Marcos Juarez',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SAOM',
    lat: '-32.6836',
    lon: '-62.157801',
    timezone: '-3'
  },
  {
    name: 'Villa Reynolds ',
    city: 'Villa Reynolds',
    country: 'Argentina',
    IATA: 'VME',
    ICAO: 'SAOR',
    lat: '-33.7299003601',
    lon: '-65.3873977661',
    timezone: '-3'
  },
  {
    name: 'Brigadier Mayor D Cesar Raul Ojeda ',
    city: 'San Luis',
    country: 'Argentina',
    IATA: 'LUQ',
    ICAO: 'SAOU',
    lat: '-33.2732009888',
    lon: '-66.3563995361',
    timezone: '-3'
  },
  {
    name: 'Corrientes ',
    city: 'Corrientes',
    country: 'Argentina',
    IATA: 'CNQ',
    ICAO: 'SARC',
    lat: '-27.4455',
    lon: '-58.7619',
    timezone: '-3'
  },
  {
    name: 'Resistencia Intl ',
    city: 'Resistencia',
    country: 'Argentina',
    IATA: 'RES',
    ICAO: 'SARE',
    lat: '-27.45',
    lon: '-59.0561',
    timezone: '-3'
  },
  {
    name: 'Formosa ',
    city: 'Formosa',
    country: 'Argentina',
    IATA: 'FMA',
    ICAO: 'SARF',
    lat: '-26.2127',
    lon: '-58.2281',
    timezone: '-3'
  },
  {
    name: 'Cataratas Del Iguaz\u00fa Intl ',
    city: 'Iguazu Falls',
    country: 'Argentina',
    IATA: 'IGR',
    ICAO: 'SARI',
    lat: '-25.737301',
    lon: '-54.4734',
    timezone: '-3'
  },
  {
    name: 'Paso De Los Libres ',
    city: 'Paso De Los Libres',
    country: 'Argentina',
    IATA: 'AOL',
    ICAO: 'SARL',
    lat: '-29.6894',
    lon: '-57.1521',
    timezone: '-3'
  },
  {
    name: 'Monte Caseros ',
    city: 'Monte Caseros',
    country: 'Argentina',
    IATA: 'MCS',
    ICAO: 'SARM',
    lat: '-30.2719',
    lon: '-57.6402',
    timezone: '-3'
  },
  {
    name: 'Libertador Gral D Jose De San Martin ',
    city: 'Posadas',
    country: 'Argentina',
    IATA: 'PSS',
    ICAO: 'SARP',
    lat: '-27.3858',
    lon: '-55.9707',
    timezone: '-3'
  },
  {
    name: 'Termal ',
    city: 'Presidencia R.s.pena',
    country: 'Argentina',
    IATA: 'PRQ',
    ICAO: 'SARS',
    lat: '-26.753611',
    lon: '-60.492222',
    timezone: '-3'
  },
  {
    name: 'Martin Miguel De Guemes Intl ',
    city: 'Salta',
    country: 'Argentina',
    IATA: 'SLA',
    ICAO: 'SASA',
    lat: '-24.856000900299996',
    lon: '-65.4861984253',
    timezone: '-3'
  },
  {
    name: 'Gobernador Horacio Guzman Intl ',
    city: 'Jujuy',
    country: 'Argentina',
    IATA: 'JUJ',
    ICAO: 'SASJ',
    lat: '-24.392799',
    lon: '-65.097801',
    timezone: '-3'
  },
  {
    name: 'Or\u00e1n ',
    city: 'Oran',
    country: 'Argentina',
    IATA: 'ORA',
    ICAO: 'SASO',
    lat: '-23.1527996063',
    lon: '-64.3292007446',
    timezone: '-3'
  },
  {
    name: 'Laboulaye ',
    city: 'La Quiaca',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SASQ',
    lat: '-34.1353988647',
    lon: '-63.36230087279999',
    timezone: '-3'
  },
  {
    name: 'El Dorado ',
    city: 'El Dorado',
    country: 'Argentina',
    IATA: 'ELO',
    ICAO: 'SATD',
    lat: '-26.3974990845',
    lon: '-54.5746994019',
    timezone: '-3'
  },
  {
    name: 'Goya ',
    city: 'Goya',
    country: 'Argentina',
    IATA: 'OYA',
    ICAO: 'SATG',
    lat: '-29.1058',
    lon: '-59.2189',
    timezone: '-3'
  },
  {
    name: 'Ober\u00e1 ',
    city: 'Obera',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SATO',
    lat: '-27.5181999207',
    lon: '-55.1241989136',
    timezone: '-3'
  },
  {
    name: 'Reconquista ',
    city: 'Reconquista',
    country: 'Argentina',
    IATA: 'RCQ',
    ICAO: 'SATR',
    lat: '-29.2103',
    lon: '-59.68',
    timezone: '-3'
  },
  {
    name: 'Curuzu Cuatia ',
    city: 'Curuzu Cuatia',
    country: 'Argentina',
    IATA: 'UZU',
    ICAO: 'SATU',
    lat: '-29.7706',
    lon: '-57.9789',
    timezone: '-3'
  },
  {
    name: 'El Bolson ',
    city: 'El Bolson',
    country: 'Argentina',
    IATA: 'EHL',
    ICAO: 'SAVB',
    lat: '-41.9431991577',
    lon: '-71.5323028564',
    timezone: '-3'
  },
  {
    name: 'General E. Mosconi ',
    city: 'Comodoro Rivadavia',
    country: 'Argentina',
    IATA: 'CRD',
    ICAO: 'SAVC',
    lat: '-45.7853',
    lon: '-67.4655',
    timezone: '-3'
  },
  {
    name: 'Brigadier Antonio Parodi ',
    city: 'Esquel',
    country: 'Argentina',
    IATA: 'EQS',
    ICAO: 'SAVE',
    lat: '-42.908000946',
    lon: '-71.139503479',
    timezone: '-3'
  },
  {
    name: 'Almirante Marco Andres Zar ',
    city: 'Trelew',
    country: 'Argentina',
    IATA: 'REL',
    ICAO: 'SAVT',
    lat: '-43.2105',
    lon: '-65.2703',
    timezone: '-3'
  },
  {
    name: 'Gobernador Castello ',
    city: 'Viedma',
    country: 'Argentina',
    IATA: 'VDM',
    ICAO: 'SAVV',
    lat: '-40.8692',
    lon: '-63.0004',
    timezone: '-3'
  },
  {
    name: 'El Tehuelche ',
    city: 'Puerto Madryn',
    country: 'Argentina',
    IATA: 'PMY',
    ICAO: 'SAVY',
    lat: '-42.7592',
    lon: '-65.1027',
    timezone: '-3'
  },
  {
    name: 'Marambio Base',
    city: 'Marambio Base',
    country: 'Antarctica',
    IATA: '\\N',
    ICAO: 'SAWB',
    lat: '-64.2382965088',
    lon: '-56.6307983398',
    timezone: '12'
  },
  {
    name: 'Puerto Deseado ',
    city: 'Puerto Deseado',
    country: 'Argentina',
    IATA: 'PUD',
    ICAO: 'SAWD',
    lat: '-47.7353',
    lon: '-65.9041',
    timezone: '-3'
  },
  {
    name: 'Hermes Quijada Intl ',
    city: 'Rio Grande',
    country: 'Argentina',
    IATA: 'RGA',
    ICAO: 'SAWE',
    lat: '-53.7777',
    lon: '-67.7494',
    timezone: '-3'
  },
  {
    name: 'Piloto Civil N. Fern\u00e1ndez ',
    city: 'Rio Gallegos',
    country: 'Argentina',
    IATA: 'RGL',
    ICAO: 'SAWG',
    lat: '-51.6089',
    lon: '-69.3126',
    timezone: '-3'
  },
  {
    name: 'Malvinas Argentinas ',
    city: 'Ushuaia',
    country: 'Argentina',
    IATA: 'USH',
    ICAO: 'SAWH',
    lat: '-54.8433',
    lon: '-68.2958',
    timezone: '-3'
  },
  {
    name: 'Capitan D Daniel Vazquez ',
    city: 'San Julian',
    country: 'Argentina',
    IATA: 'ULA',
    ICAO: 'SAWJ',
    lat: '-49.3068',
    lon: '-67.8026',
    timezone: '-3'
  },
  {
    name: 'Perito Moreno ',
    city: 'Perito Moreno',
    country: 'Argentina',
    IATA: 'PMQ',
    ICAO: 'SAWP',
    lat: '-46.537899',
    lon: '-70.978699',
    timezone: '-3'
  },
  {
    name: 'Santa Cruz ',
    city: 'Santa Cruz',
    country: 'Argentina',
    IATA: 'RZA',
    ICAO: 'SAWU',
    lat: '-50.0165',
    lon: '-68.5792',
    timezone: '-3'
  },
  {
    name: 'Comandante Espora ',
    city: 'Bahia Blanca',
    country: 'Argentina',
    IATA: 'BHI',
    ICAO: 'SAZB',
    lat: '-38.725',
    lon: '-62.1693',
    timezone: '-3'
  },
  {
    name: 'Brigadier D.H.E. Ruiz ',
    city: 'Colonel Suarez',
    country: 'Argentina',
    IATA: 'CSZ',
    ICAO: 'SAZC',
    lat: '-37.446098',
    lon: '-61.889301',
    timezone: '-3'
  },
  {
    name: 'Olavarria ',
    city: 'Olavarria',
    country: 'Argentina',
    IATA: 'OVR',
    ICAO: 'SAZF',
    lat: '-36.8899993896',
    lon: '-60.216598510699995',
    timezone: '-3'
  },
  {
    name: 'General Pico ',
    city: 'General Pico',
    country: 'Argentina',
    IATA: 'GPO',
    ICAO: 'SAZG',
    lat: '-35.6962013245',
    lon: '-63.7583007812',
    timezone: '-3'
  },
  {
    name: 'Tres Arroyos ',
    city: 'Tres Arroyos',
    country: 'Argentina',
    IATA: 'OYO',
    ICAO: 'SAZH',
    lat: '-38.3869',
    lon: '-60.3297',
    timezone: '-3'
  },
  {
    name: 'Bolivar ',
    city: 'Bolivar',
    country: 'Argentina',
    IATA: '\\N',
    ICAO: 'SAZI',
    lat: '-36.1866',
    lon: '-61.0764',
    timezone: '-3'
  },
  {
    name: '\u00c1stor Piazzola Intl ',
    city: 'Mar Del Plata',
    country: 'Argentina',
    IATA: 'MDQ',
    ICAO: 'SAZM',
    lat: '-37.9342',
    lon: '-57.5733',
    timezone: '-3'
  },
  {
    name: 'Presidente Peron ',
    city: 'Neuquen',
    country: 'Argentina',
    IATA: 'NQN',
    ICAO: 'SAZN',
    lat: '-38.949001',
    lon: '-68.155701',
    timezone: '-3'
  },
  {
    name: 'Comodoro Pedro Zanni ',
    city: 'Pehuajo',
    country: 'Argentina',
    IATA: 'PEH',
    ICAO: 'SAZP',
    lat: '-35.8446',
    lon: '-61.8576',
    timezone: '-3'
  },
  {
    name: 'Santa Rosa ',
    city: 'Santa Rosa',
    country: 'Argentina',
    IATA: 'RSA',
    ICAO: 'SAZR',
    lat: '-36.588299',
    lon: '-64.275703',
    timezone: '-3'
  },
  {
    name: 'San Carlos De Bariloche ',
    city: 'San Carlos De Bariloche',
    country: 'Argentina',
    IATA: 'BRC',
    ICAO: 'SAZS',
    lat: '-41.151199',
    lon: '-71.157501',
    timezone: '-3'
  },
  {
    name: 'H\u00e9roes De Malvinas ',
    city: 'Tandil',
    country: 'Argentina',
    IATA: 'TDL',
    ICAO: 'SAZT',
    lat: '-37.2374000549',
    lon: '-59.2279014587',
    timezone: '-3'
  },
  {
    name: 'Villa Gesell ',
    city: 'Villa Gesell',
    country: 'Argentina',
    IATA: 'VLG',
    ICAO: 'SAZV',
    lat: '-37.2354',
    lon: '-57.0292',
    timezone: '-3'
  },
  {
    name: 'Cutral-Co ',
    city: 'Cutralco',
    country: 'Argentina',
    IATA: 'CUT',
    ICAO: 'SAZW',
    lat: '-38.939701080300004',
    lon: '-69.2646026611',
    timezone: '-3'
  },
  {
    name: 'Aviador C. Campos ',
    city: 'San Martin Des Andes',
    country: 'Argentina',
    IATA: 'CPC',
    ICAO: 'SAZY',
    lat: '-40.075401',
    lon: '-71.137299',
    timezone: '-3'
  },
  {
    name: 'Concei\u00e7\u00e3o do Araguaia ',
    city: 'Conceicao Do Araguaia',
    country: 'Brazil',
    IATA: 'CDJ',
    ICAO: 'SBAA',
    lat: '-8.348349571228027',
    lon: '-49.30149841308594',
    timezone: '-3'
  },
  {
    name: 'Campo D\u00e9lio Jardim de Mattos ',
    city: 'Rio De Janeiro',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBAF',
    lat: '-22.875099',
    lon: '-43.384701',
    timezone: '-3'
  },
  {
    name: 'Amap\u00e1 ',
    city: 'Amapa',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBAM',
    lat: '2.07751',
    lon: '-50.8582',
    timezone: '-3'
  },
  {
    name: 'Araraquara ',
    city: 'Araracuara',
    country: 'Brazil',
    IATA: 'AQA',
    ICAO: 'SBAQ',
    lat: '-21.812000274699997',
    lon: '-48.1329994202',
    timezone: '-3'
  },
  {
    name: 'Santa Maria ',
    city: 'Aracaju',
    country: 'Brazil',
    IATA: 'AJU',
    ICAO: 'SBAR',
    lat: '-10.984000206',
    lon: '-37.0703010559',
    timezone: '-3'
  },
  {
    name: 'Piloto Osvaldo Marques Dias ',
    city: 'Alta Floresta',
    country: 'Brazil',
    IATA: 'AFL',
    ICAO: 'SBAT',
    lat: '-9.8663892746',
    lon: '-56.1049995422',
    timezone: '-4'
  },
  {
    name: 'Ara\u00e7atuba ',
    city: 'Aracatuba',
    country: 'Brazil',
    IATA: 'ARU',
    ICAO: 'SBAU',
    lat: '-21.1413002014',
    lon: '-50.4247016907',
    timezone: '-3'
  },
  {
    name: 'Val de Cans/J\u00falio Cezar Ribeiro Intl ',
    city: 'Belem',
    country: 'Brazil',
    IATA: 'BEL',
    ICAO: 'SBBE',
    lat: '-1.3792500495900002',
    lon: '-48.4762992859',
    timezone: '-3'
  },
  {
    name: 'Comandante Gustavo Kraemer ',
    city: 'Bage',
    country: 'Brazil',
    IATA: 'BGX',
    ICAO: 'SBBG',
    lat: '-31.39049911499',
    lon: '-54.112201690674',
    timezone: '-3'
  },
  {
    name: 'Pampulha - Carlos Drummond de Andrade ',
    city: 'Belo Horizonte',
    country: 'Brazil',
    IATA: 'PLU',
    ICAO: 'SBBH',
    lat: '-19.851200103759766',
    lon: '-43.950599670410156',
    timezone: '-3'
  },
  {
    name: 'Bacacheri ',
    city: 'Curitiba',
    country: 'Brazil',
    IATA: 'BFH',
    ICAO: 'SBBI',
    lat: '-25.4050998688',
    lon: '-49.23199844359999',
    timezone: '-3'
  },
  {
    name: 'Major Brigadeiro Doorgal Borges ',
    city: 'Barbacena',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBBQ',
    lat: '-21.2672',
    lon: '-43.761101',
    timezone: '-3'
  },
  {
    name: 'Presidente Juscelino Kubistschek Intl ',
    city: 'Brasilia',
    country: 'Brazil',
    IATA: 'BSB',
    ICAO: 'SBBR',
    lat: '-15.86916732788086',
    lon: '-47.920833587646484',
    timezone: '-3'
  },
  {
    name: 'Bauru ',
    city: 'Bauru',
    country: 'Brazil',
    IATA: 'BAU',
    ICAO: 'SBBU',
    lat: '-22.3449993134',
    lon: '-49.0537986755',
    timezone: '-3'
  },
  {
    name: 'Atlas Brasil Cantanhede ',
    city: 'Boa Vista',
    country: 'Brazil',
    IATA: 'BVB',
    ICAO: 'SBBV',
    lat: '2.84138894081',
    lon: '-60.6922225952',
    timezone: '-4'
  },
  {
    name: 'Barra do Gar\u00e7as ',
    city: 'Barra Do Garcas',
    country: 'Brazil',
    IATA: 'BPG',
    ICAO: 'SBBW',
    lat: '-15.861300468400001',
    lon: '-52.3889007568',
    timezone: '-4'
  },
  {
    name: 'Cascavel ',
    city: 'Cascavel',
    country: 'Brazil',
    IATA: 'CAC',
    ICAO: 'SBCA',
    lat: '-25.0002994537',
    lon: '-53.500801086399996',
    timezone: '-3'
  },
  {
    name: 'Cachimbo ',
    city: 'Itaituba',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBCC',
    lat: '-9.33393955231',
    lon: '-54.9654006958',
    timezone: '-3'
  },
  {
    name: 'Tancredo Neves Intl ',
    city: 'Belo Horizonte',
    country: 'Brazil',
    IATA: 'CNF',
    ICAO: 'SBCF',
    lat: '-19.62444305419922',
    lon: '-43.97194290161133',
    timezone: '-3'
  },
  {
    name: 'Campo Grande ',
    city: 'Campo Grande',
    country: 'Brazil',
    IATA: 'CGR',
    ICAO: 'SBCG',
    lat: '-20.468700408900002',
    lon: '-54.6725006104',
    timezone: '-4'
  },
  {
    name: 'Serafin Enoss Bertaso ',
    city: 'Chapeco',
    country: 'Brazil',
    IATA: 'XAP',
    ICAO: 'SBCH',
    lat: '-27.134199142456',
    lon: '-52.656600952148',
    timezone: '-3'
  },
  {
    name: 'Brig. Lysias Augusto Rodrigues ',
    city: 'Carolina',
    country: 'Brazil',
    IATA: 'CLN',
    ICAO: 'SBCI',
    lat: '-7.32043981552124',
    lon: '-47.45869827270508',
    timezone: '-3'
  },
  {
    name: 'Diom\u00edcio Freitas ',
    city: 'Criciuma',
    country: 'Brazil',
    IATA: 'CCM',
    ICAO: 'SBCM',
    lat: '-28.7244434357',
    lon: '-49.4213905334',
    timezone: '-3'
  },
  {
    name: 'Canoas Air Force Base',
    city: 'Porto Alegre',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBCO',
    lat: '-29.945928',
    lon: '-51.144413',
    timezone: '-3'
  },
  {
    name: 'Bartolomeu Lisandro ',
    city: 'Campos',
    country: 'Brazil',
    IATA: 'CAW',
    ICAO: 'SBCP',
    lat: '-21.698299408',
    lon: '-41.301700592',
    timezone: '-3'
  },
  {
    name: 'Corumb\u00e1 Intl ',
    city: 'Corumba',
    country: 'Brazil',
    IATA: 'CMG',
    ICAO: 'SBCR',
    lat: '-19.0119438171',
    lon: '-57.6713905334',
    timezone: '-4'
  },
  {
    name: 'Afonso Pena ',
    city: 'Curitiba',
    country: 'Brazil',
    IATA: 'CWB',
    ICAO: 'SBCT',
    lat: '-25.5284996033',
    lon: '-49.1758003235',
    timezone: '-3'
  },
  {
    name: 'Caravelas ',
    city: 'Caravelas',
    country: 'Brazil',
    IATA: 'CRQ',
    ICAO: 'SBCV',
    lat: '-17.652299880981',
    lon: '-39.253101348877',
    timezone: '-3'
  },
  {
    name: 'Hugo Cantergiani Regional ',
    city: 'Caxias Do Sul',
    country: 'Brazil',
    IATA: 'CXJ',
    ICAO: 'SBCX',
    lat: '-29.197099685699996',
    lon: '-51.1875',
    timezone: '-3'
  },
  {
    name: 'Marechal Rondon ',
    city: 'Cuiaba',
    country: 'Brazil',
    IATA: 'CGB',
    ICAO: 'SBCY',
    lat: '-15.6528997421',
    lon: '-56.1166992188',
    timezone: '-4'
  },
  {
    name: 'Cruzeiro do Sul ',
    city: 'Cruzeiro do Sul',
    country: 'Brazil',
    IATA: 'CZS',
    ICAO: 'SBCZ',
    lat: '-7.59990978241',
    lon: '-72.7695007324',
    timezone: '-5'
  },
  {
    name: 'Presidente Prudente ',
    city: 'President Prudente',
    country: 'Brazil',
    IATA: 'PPB',
    ICAO: 'SBDN',
    lat: '-22.1751003265',
    lon: '-51.4245986938',
    timezone: '-3'
  },
  {
    name: 'Eduardo Gomes Intl ',
    city: 'Manaus',
    country: 'Brazil',
    IATA: 'MAO',
    ICAO: 'SBEG',
    lat: '-3.0386099815368652',
    lon: '-60.04970169067383',
    timezone: '-4'
  },
  {
    name: 'Jacareacanga ',
    city: 'Jacare-acanga',
    country: 'Brazil',
    IATA: 'JCR',
    ICAO: 'SBEK',
    lat: '-6.233160018920898',
    lon: '-57.77690124511719',
    timezone: '-3'
  },
  {
    name: 'S\u00e3o Pedro da Aldeia ',
    city: 'Sao Pedro Da Aldeia',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBES',
    lat: '-22.81290054321289',
    lon: '-42.09260177612305',
    timezone: '-3'
  },
  {
    name: 'Cataratas Intl ',
    city: 'Foz Do Iguacu',
    country: 'Brazil',
    IATA: 'IGU',
    ICAO: 'SBFI',
    lat: '-25.600278854370117',
    lon: '-54.48500061035156',
    timezone: '-3'
  },
  {
    name: 'Herc\u00edlio Luz Intl ',
    city: 'Florianopolis',
    country: 'Brazil',
    IATA: 'FLN',
    ICAO: 'SBFL',
    lat: '-27.670278549194336',
    lon: '-48.5525016784668',
    timezone: '-3'
  },
  {
    name: 'Fernando de Noronha ',
    city: 'Fernando Do Noronha',
    country: 'Brazil',
    IATA: 'FEN',
    ICAO: 'SBFN',
    lat: '-3.85493',
    lon: '-32.423302',
    timezone: '-3'
  },
  {
    name: 'Furnas ',
    city: 'Alpinopolis',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBFU',
    lat: '-20.702800750732422',
    lon: '-46.33530044555664',
    timezone: '-3'
  },
  {
    name: 'Pinto Martins Intl ',
    city: 'Fortaleza',
    country: 'Brazil',
    IATA: 'FOR',
    ICAO: 'SBFZ',
    lat: '-3.776279926300049',
    lon: '-38.53260040283203',
    timezone: '-3'
  },
  {
    name: 'Rio Gale\u00e3o \u2013 Tom Jobim Intl ',
    city: 'Rio De Janeiro',
    country: 'Brazil',
    IATA: 'GIG',
    ICAO: 'SBGL',
    lat: '-22.8099994659',
    lon: '-43.2505569458',
    timezone: '-3'
  },
  {
    name: 'Guajar\u00e1-Mirim ',
    city: 'Guajara-mirim',
    country: 'Brazil',
    IATA: 'GJM',
    ICAO: 'SBGM',
    lat: '-10.786399841308594',
    lon: '-65.28479766845703',
    timezone: '-4'
  },
  {
    name: 'Santa Genoveva ',
    city: 'Goiania',
    country: 'Brazil',
    IATA: 'GYN',
    ICAO: 'SBGO',
    lat: '-16.631999969482422',
    lon: '-49.220699310302734',
    timezone: '-3'
  },
  {
    name: 'EMBRAER - Unidade Gavi\u00e3o Peixoto ',
    city: 'Macae',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBGP',
    lat: '-21.773700714111328',
    lon: '-48.40510177612305',
    timezone: '-3'
  },
  {
    name: 'Guarulhos - Governador Andr\u00e9 Franco Montoro Intl ',
    city: 'Sao Paulo',
    country: 'Brazil',
    IATA: 'GRU',
    ICAO: 'SBGR',
    lat: '-23.435556411743164',
    lon: '-46.47305679321289',
    timezone: '-3'
  },
  {
    name: 'Guaratinguet\u00e1 ',
    city: 'Guaratingueta',
    country: 'Brazil',
    IATA: 'GUJ',
    ICAO: 'SBGW',
    lat: '-22.79159927368164',
    lon: '-45.20479965209961',
    timezone: '-3'
  },
  {
    name: 'Altamira ',
    city: 'Altamira',
    country: 'Brazil',
    IATA: 'ATM',
    ICAO: 'SBHT',
    lat: '-3.2539100646973',
    lon: '-52.254001617432',
    timezone: '-3'
  },
  {
    name: 'Itacoatiara ',
    city: 'Itaituba',
    country: 'Brazil',
    IATA: 'ITA',
    ICAO: 'SBIC',
    lat: '-3.1272599697113037',
    lon: '-58.481201171875',
    timezone: '-4'
  },
  {
    name: 'Itaituba ',
    city: 'Itaituba',
    country: 'Brazil',
    IATA: 'ITB',
    ICAO: 'SBIH',
    lat: '-4.2423400878906',
    lon: '-56.000701904297',
    timezone: '-3'
  },
  {
    name: 'Bahia - Jorge Amado ',
    city: 'Ilheus',
    country: 'Brazil',
    IATA: 'IOS',
    ICAO: 'SBIL',
    lat: '-14.815999984741',
    lon: '-39.033199310303',
    timezone: '-3'
  },
  {
    name: 'Usiminas ',
    city: 'Ipatinga',
    country: 'Brazil',
    IATA: 'IPN',
    ICAO: 'SBIP',
    lat: '-19.470699310303',
    lon: '-42.487598419189',
    timezone: '-3'
  },
  {
    name: 'Francisco Vilela do Amaral ',
    city: 'Itumbiara',
    country: 'Brazil',
    IATA: 'ITR',
    ICAO: 'SBIT',
    lat: '-18.4447002411',
    lon: '-49.2134017944',
    timezone: '-3'
  },
  {
    name: 'Prefeito Renato Moreira ',
    city: 'Imperatriz',
    country: 'Brazil',
    IATA: 'IMP',
    ICAO: 'SBIZ',
    lat: '-5.53129',
    lon: '-47.459999',
    timezone: '-3'
  },
  {
    name: 'Bel\u00e9m/Brigadeiro Prot\u00e1sio de Oliveira ',
    city: 'Belem',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBJC',
    lat: '-1.4141600132',
    lon: '-48.4607009888',
    timezone: '-3'
  },
  {
    name: 'Francisco de Assis ',
    city: 'Juiz De Fora',
    country: 'Brazil',
    IATA: 'JDF',
    ICAO: 'SBJF',
    lat: '-21.791500091552734',
    lon: '-43.38679885864258',
    timezone: '-3'
  },
  {
    name: 'Presidente Castro Pinto Intl ',
    city: 'Joao Pessoa',
    country: 'Brazil',
    IATA: 'JPA',
    ICAO: 'SBJP',
    lat: '-7.145833015440001',
    lon: '-34.9486122131',
    timezone: '-3'
  },
  {
    name: 'Lauro Carneiro de Loyola ',
    city: 'Joinville',
    country: 'Brazil',
    IATA: 'JOI',
    ICAO: 'SBJV',
    lat: '-26.22450065612793',
    lon: '-48.797401428222656',
    timezone: '-3'
  },
  {
    name: 'Presidente Jo\u00e3o Suassuna ',
    city: 'Campina Grande',
    country: 'Brazil',
    IATA: 'CPV',
    ICAO: 'SBKG',
    lat: '-7.26992',
    lon: '-35.8964',
    timezone: '-3'
  },
  {
    name: 'Viracopos Intl ',
    city: 'Campinas',
    country: 'Brazil',
    IATA: 'VCP',
    ICAO: 'SBKP',
    lat: '-23.0074005127',
    lon: '-47.1344985962',
    timezone: '-3'
  },
  {
    name: 'Lages ',
    city: 'Lajes',
    country: 'Brazil',
    IATA: 'LAJ',
    ICAO: 'SBLJ',
    lat: '-27.782100677499997',
    lon: '-50.28150177',
    timezone: '-3'
  },
  {
    name: 'Lins ',
    city: 'Lins',
    country: 'Brazil',
    IATA: 'LIP',
    ICAO: 'SBLN',
    lat: '-21.663999557495',
    lon: '-49.730499267578',
    timezone: '-3'
  },
  {
    name: 'Governador Jos\u00e9 Richa ',
    city: 'Londrina',
    country: 'Brazil',
    IATA: 'LDB',
    ICAO: 'SBLO',
    lat: '-23.333599090599996',
    lon: '-51.1301002502',
    timezone: '-3'
  },
  {
    name: 'Bom Jesus da Lapa ',
    city: 'Bom Jesus Da Lapa',
    country: 'Brazil',
    IATA: 'LAZ',
    ICAO: 'SBLP',
    lat: '-13.2621002197',
    lon: '-43.4081001282',
    timezone: '-3'
  },
  {
    name: 'Lagoa Santa ',
    city: 'Lagoa Santa',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBLS',
    lat: '-19.66160011291504',
    lon: '-43.896400451660156',
    timezone: '-3'
  },
  {
    name: 'Jo\u00e3o Correa da Rocha ',
    city: 'Maraba',
    country: 'Brazil',
    IATA: 'MAB',
    ICAO: 'SBMA',
    lat: '-5.36858987808',
    lon: '-49.138000488299994',
    timezone: '-3'
  },
  {
    name: 'Monte Dourado ',
    city: 'Almeirim',
    country: 'Brazil',
    IATA: 'MEU',
    ICAO: 'SBMD',
    lat: '-0.889839',
    lon: '-52.6022',
    timezone: '-3'
  },
  {
    name: 'Regional de Maring\u00e1 - S\u00edlvio Nane Junior ',
    city: 'Maringa',
    country: 'Brazil',
    IATA: 'MGF',
    ICAO: 'SBMG',
    lat: '-23.479444503799996',
    lon: '-52.01222229',
    timezone: '-3'
  },
  {
    name: 'M\u00e1rio Ribeiro ',
    city: 'Montes Claros',
    country: 'Brazil',
    IATA: 'MOC',
    ICAO: 'SBMK',
    lat: '-16.706899642899998',
    lon: '-43.818901062',
    timezone: '-3'
  },
  {
    name: 'Ponta Pelada ',
    city: 'Manaus',
    country: 'Brazil',
    IATA: 'PLL',
    ICAO: 'SBMN',
    lat: '-3.1460399627685547',
    lon: '-59.98630142211914',
    timezone: '-4'
  },
  {
    name: 'Zumbi dos Palmares ',
    city: 'Maceio',
    country: 'Brazil',
    IATA: 'MCZ',
    ICAO: 'SBMO',
    lat: '-9.510809898376465',
    lon: '-35.79169845581055',
    timezone: '-3'
  },
  {
    name: 'Alberto Alcolumbre ',
    city: 'Macapa',
    country: 'Brazil',
    IATA: 'MCP',
    ICAO: 'SBMQ',
    lat: '0.0506640002131',
    lon: '-51.0722007751',
    timezone: '-3'
  },
  {
    name: 'Dix-Sept Rosado ',
    city: 'Mocord',
    country: 'Brazil',
    IATA: 'MVF',
    ICAO: 'SBMS',
    lat: '-5.2019200324999995',
    lon: '-37.3642997742',
    timezone: '-3'
  },
  {
    name: 'Campo de Marte ',
    city: 'Sao Paulo',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBMT',
    lat: '-23.5090999603',
    lon: '-46.6377983093',
    timezone: '-3'
  },
  {
    name: 'Manicor\u00e9 ',
    city: 'Manicore',
    country: 'Brazil',
    IATA: 'MNX',
    ICAO: 'SBMY',
    lat: '-5.8113799095154',
    lon: '-61.278301239014',
    timezone: '-4'
  },
  {
    name: 'Ministro Victor Konder Intl ',
    city: 'Navegantes',
    country: 'Brazil',
    IATA: 'NVT',
    ICAO: 'SBNF',
    lat: '-26.879999',
    lon: '-48.651402',
    timezone: '-3'
  },
  {
    name: 'Santo \u00c2ngelo ',
    city: 'Santo Angelo',
    country: 'Brazil',
    IATA: 'GEL',
    ICAO: 'SBNM',
    lat: '-28.2817',
    lon: '-54.169102',
    timezone: '-3'
  },
  {
    name: 'Governador Alu\u00edzio Alves Intl ',
    city: 'Natal',
    country: 'Brazil',
    IATA: 'NAT',
    ICAO: 'SBSG',
    lat: '-5.768056',
    lon: '-35.376111',
    timezone: '-3'
  },
  {
    name: 'Oiapoque ',
    city: 'Oioiapoque',
    country: 'Brazil',
    IATA: 'OYK',
    ICAO: 'SBOI',
    lat: '3.85548996925354',
    lon: '-51.79690170288086',
    timezone: '-3'
  },
  {
    name: 'Salgado Filho ',
    city: 'Porto Alegre',
    country: 'Brazil',
    IATA: 'POA',
    ICAO: 'SBPA',
    lat: '-29.994400024414062',
    lon: '-51.1713981628418',
    timezone: '-3'
  },
  {
    name: 'Prefeito Doutor Jo\u00e3o Silva Filho ',
    city: 'Parnaiba',
    country: 'Brazil',
    IATA: 'PHB',
    ICAO: 'SBPB',
    lat: '-2.89374995232',
    lon: '-41.73199844359999',
    timezone: '-3'
  },
  {
    name: 'Po\u00e7os de Caldas - Embaixador Walther Moreira Salles ',
    city: 'Pocos De Caldas',
    country: 'Brazil',
    IATA: 'POO',
    ICAO: 'SBPC',
    lat: '-21.843000411987',
    lon: '-46.567901611328',
    timezone: '-3'
  },
  {
    name: 'Lauro Kurtz ',
    city: 'Passo Fundo',
    country: 'Brazil',
    IATA: 'PFB',
    ICAO: 'SBPF',
    lat: '-28.243999',
    lon: '-52.326599',
    timezone: '-3'
  },
  {
    name: 'Jo\u00e3o Sim\u00f5es Lopes Neto Intl ',
    city: 'Pelotas',
    country: 'Brazil',
    IATA: 'PET',
    ICAO: 'SBPK',
    lat: '-31.718399',
    lon: '-52.327702',
    timezone: '-3'
  },
  {
    name: 'Senador Nilo Coelho ',
    city: 'Petrolina',
    country: 'Brazil',
    IATA: 'PNZ',
    ICAO: 'SBPL',
    lat: '-9.362409591674805',
    lon: '-40.56909942626953',
    timezone: '-3'
  },
  {
    name: 'Porto Nacional ',
    city: 'Porto Nacional',
    country: 'Brazil',
    IATA: 'PNB',
    ICAO: 'SBPN',
    lat: '-10.719400405883789',
    lon: '-48.39970016479492',
    timezone: '-3'
  },
  {
    name: 'Ponta Por\u00e3 ',
    city: 'Ponta Pora',
    country: 'Brazil',
    IATA: 'PMG',
    ICAO: 'SBPP',
    lat: '-22.54960060119629',
    lon: '-55.702598571777344',
    timezone: '-4'
  },
  {
    name: 'Governador Jorge Teixeira de Oliveira ',
    city: 'Porto Velho',
    country: 'Brazil',
    IATA: 'PVH',
    ICAO: 'SBPV',
    lat: '-8.70928955078125',
    lon: '-63.90230178833008',
    timezone: '-4'
  },
  {
    name: 'Pl\u00e1cido de Castro ',
    city: 'Rio Branco',
    country: 'Brazil',
    IATA: 'RBR',
    ICAO: 'SBRB',
    lat: '-9.868888854980469',
    lon: '-67.89805603027344',
    timezone: '-5'
  },
  {
    name: 'Guararapes - Gilberto Freyre Intl ',
    city: 'Recife',
    country: 'Brazil',
    IATA: 'REC',
    ICAO: 'SBRF',
    lat: '-8.126489639282227',
    lon: '-34.92359924316406',
    timezone: '-3'
  },
  {
    name: 'Santos Dumont ',
    city: 'Rio De Janeiro',
    country: 'Brazil',
    IATA: 'SDU',
    ICAO: 'SBRJ',
    lat: '-22.910499572799996',
    lon: '-43.1631011963',
    timezone: '-3'
  },
  {
    name: 'Leite Lopes ',
    city: 'Ribeirao Preto',
    country: 'Brazil',
    IATA: 'RAO',
    ICAO: 'SBRP',
    lat: '-21.136388778686523',
    lon: '-47.776668548583984',
    timezone: '-3'
  },
  {
    name: 'Santa Cruz Air Force Base',
    city: 'Rio De Janeiro',
    country: 'Brazil',
    IATA: 'SNZ',
    ICAO: 'SBSC',
    lat: '-22.9324',
    lon: '-43.719101',
    timezone: '-3'
  },
  {
    name: 'Professor Urbano Ernesto Stumpf ',
    city: 'Sao Jose Dos Campos',
    country: 'Brazil',
    IATA: 'SJK',
    ICAO: 'SBSJ',
    lat: '-23.22920036315918',
    lon: '-45.86149978637695',
    timezone: '-3'
  },
  {
    name: 'Marechal Cunha Machado Intl ',
    city: 'Sao Luis',
    country: 'Brazil',
    IATA: 'SLZ',
    ICAO: 'SBSL',
    lat: '-2.585360050201416',
    lon: '-44.234100341796875',
    timezone: '-3'
  },
  {
    name: 'Congonhas ',
    city: 'Sao Paulo',
    country: 'Brazil',
    IATA: 'CGH',
    ICAO: 'SBSP',
    lat: '-23.626110076904297',
    lon: '-46.65638732910156',
    timezone: '-3'
  },
  {
    name: 'Prof. Eribelto Manoel Reino State ',
    city: 'Sao Jose Do Rio Preto',
    country: 'Brazil',
    IATA: 'SJP',
    ICAO: 'SBSR',
    lat: '-20.816600799599996',
    lon: '-49.40650177',
    timezone: '-3'
  },
  {
    name: 'Base A\u00e9rea de Santos ',
    city: 'Santos',
    country: 'Brazil',
    IATA: 'SSZ',
    ICAO: 'SBST',
    lat: '-23.928056716918945',
    lon: '-46.299720764160156',
    timezone: '-3'
  },
  {
    name: 'Deputado Luiz Eduardo Magalh\u00e3es Intl ',
    city: 'Salvador',
    country: 'Brazil',
    IATA: 'SSA',
    ICAO: 'SBSV',
    lat: '-12.9086112976',
    lon: '-38.3224983215',
    timezone: '-3'
  },
  {
    name: 'Trombetas ',
    city: 'Oriximina',
    country: 'Brazil',
    IATA: 'TMT',
    ICAO: 'SBTB',
    lat: '-1.489599943161',
    lon: '-56.396800994873',
    timezone: '-3'
  },
  {
    name: 'Senador Petr\u00f4nio Portela ',
    city: 'Teresina',
    country: 'Brazil',
    IATA: 'THE',
    ICAO: 'SBTE',
    lat: '-5.0599398613',
    lon: '-42.8235015869',
    timezone: '-3'
  },
  {
    name: 'Tef\u00e9 ',
    city: 'Tefe',
    country: 'Brazil',
    IATA: 'TFF',
    ICAO: 'SBTF',
    lat: '-3.38294005394',
    lon: '-64.7240982056',
    timezone: '-4'
  },
  {
    name: 'Tarauac\u00e1 ',
    city: 'Tarauaca',
    country: 'Brazil',
    IATA: 'TRQ',
    ICAO: 'SBTK',
    lat: '-8.1552600860596',
    lon: '-70.783302307129',
    timezone: '-5'
  },
  {
    name: 'Tel\u00eamaco Borba ',
    city: 'Telemaco Borba',
    country: 'Brazil',
    IATA: 'TEC',
    ICAO: 'SBTL',
    lat: '-24.317800521850586',
    lon: '-50.6515998840332',
    timezone: '-3'
  },
  {
    name: 'Tiri\u00f3s ',
    city: 'Obidos Tirios',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBTS',
    lat: '2.22347',
    lon: '-55.946098',
    timezone: '-3'
  },
  {
    name: 'Tabatinga ',
    city: 'Tabatinga',
    country: 'Brazil',
    IATA: 'TBT',
    ICAO: 'SBTT',
    lat: '-4.2556700706482',
    lon: '-69.93579864502',
    timezone: '-4'
  },
  {
    name: 'Tucuru\u00ed ',
    city: 'Tucurui',
    country: 'Brazil',
    IATA: 'TUR',
    ICAO: 'SBTU',
    lat: '-3.7860100269318',
    lon: '-49.72029876709',
    timezone: '-3'
  },
  {
    name: 'S\u00e3o Gabriel da Cachoeira ',
    city: 'Sao Gabriel',
    country: 'Brazil',
    IATA: 'SJL',
    ICAO: 'SBUA',
    lat: '-0.14835',
    lon: '-66.9855',
    timezone: '-4'
  },
  {
    name: 'Paulo Afonso ',
    city: 'Paulo Alfonso',
    country: 'Brazil',
    IATA: 'PAV',
    ICAO: 'SBUF',
    lat: '-9.4008798599243',
    lon: '-38.250598907471',
    timezone: '-3'
  },
  {
    name: 'Rubem Berta ',
    city: 'Uruguaiana',
    country: 'Brazil',
    IATA: 'URG',
    ICAO: 'SBUG',
    lat: '-29.7821998596',
    lon: '-57.0382003784',
    timezone: '-3'
  },
  {
    name: 'Ten. Cel. Aviador C\u00e9sar Bombonato ',
    city: 'Uberlandia',
    country: 'Brazil',
    IATA: 'UDI',
    ICAO: 'SBUL',
    lat: '-18.883612',
    lon: '-48.225277',
    timezone: '-3'
  },
  {
    name: 'M\u00e1rio de Almeida Franco ',
    city: 'Uberaba',
    country: 'Brazil',
    IATA: 'UBA',
    ICAO: 'SBUR',
    lat: '-19.764722824097',
    lon: '-47.966110229492',
    timezone: '-3'
  },
  {
    name: 'Major Brigadeiro Trompowsky ',
    city: 'Varginha',
    country: 'Brazil',
    IATA: 'VAG',
    ICAO: 'SBVG',
    lat: '-21.5900993347',
    lon: '-45.4733009338',
    timezone: '-3'
  },
  {
    name: 'Brigadeiro Camar\u00e3o ',
    city: 'Vilhena',
    country: 'Brazil',
    IATA: 'BVH',
    ICAO: 'SBVH',
    lat: '-12.694399833679',
    lon: '-60.098300933838',
    timezone: '-4'
  },
  {
    name: 'Eurico de Aguiar Salles ',
    city: 'Vitoria',
    country: 'Brazil',
    IATA: 'VIX',
    ICAO: 'SBVT',
    lat: '-20.258057',
    lon: '-40.286388',
    timezone: '-3'
  },
  {
    name: 'Iauaret\u00ea ',
    city: 'Iauarete',
    country: 'Brazil',
    IATA: '\\N',
    ICAO: 'SBYA',
    lat: '0.6075000166893',
    lon: '-69.18579864502',
    timezone: '-4'
  },
  {
    name: 'Campo Fontenelle ',
    city: 'Piracununga',
    country: 'Brazil',
    IATA: 'QPS',
    ICAO: 'SBYS',
    lat: '-21.984600067138672',
    lon: '-47.334800720214844',
    timezone: '-3'
  },
  {
    name: 'Chacalluta ',
    city: 'Arica',
    country: 'Chile',
    IATA: 'ARI',
    ICAO: 'SCAR',
    lat: '-18.348499',
    lon: '-70.338699',
    timezone: '-4'
  },
  {
    name: 'Balmaceda ',
    city: 'Balmaceda',
    country: 'Chile',
    IATA: 'BBA',
    ICAO: 'SCBA',
    lat: '-45.916099548339844',
    lon: '-71.68949890136719',
    timezone: '-4'
  },
  {
    name: 'El Bosque ',
    city: 'Santiago',
    country: 'Chile',
    IATA: '\\N',
    ICAO: 'SCBQ',
    lat: '-33.561798095703125',
    lon: '-70.68840026855469',
    timezone: '-4'
  },
  {
    name: 'Chile Chico ',
    city: 'Chile Chico',
    country: 'Chile',
    IATA: 'CCH',
    ICAO: 'SCCC',
    lat: '-46.58330154418945',
    lon: '-71.6874008178711',
    timezone: '-4'
  },
  {
    name: 'El Loa ',
    city: 'Calama',
    country: 'Chile',
    IATA: 'CJC',
    ICAO: 'SCCF',
    lat: '-22.498199462890625',
    lon: '-68.90360260009766',
    timezone: '-4'
  },
  {
    name: 'Gral. Bernardo O\u00b4Higgins ',
    city: 'Chillan',
    country: 'Chile',
    IATA: 'YAI',
    ICAO: 'SCCH',
    lat: '-36.58250045776367',
    lon: '-72.03140258789062',
    timezone: '-4'
  },
  {
    name: 'Pdte. Carlos Iba\u00f1ez del Campo ',
    city: 'Punta Arenas',
    country: 'Chile',
    IATA: 'PUQ',
    ICAO: 'SCCI',
    lat: '-53.002602',
    lon: '-70.854599',
    timezone: '-4'
  },
  {
    name: 'Teniente Vidal ',
    city: 'Coyhaique',
    country: 'Chile',
    IATA: 'GXQ',
    ICAO: 'SCCY',
    lat: '-45.594200134277344',
    lon: '-72.1061019897461',
    timezone: '-4'
  },
  {
    name: 'Diego Aracena ',
    city: 'Iquique',
    country: 'Chile',
    IATA: 'IQQ',
    ICAO: 'SCDA',
    lat: '-20.535200119018555',
    lon: '-70.1812973022461',
    timezone: '-4'
  },
  {
    name: 'Comodoro Arturo Merino Ben\u00edtez Intl ',
    city: 'Santiago',
    country: 'Chile',
    IATA: 'SCL',
    ICAO: 'SCEL',
    lat: '-33.393001556396484',
    lon: '-70.78579711914062',
    timezone: '-4'
  },
  {
    name: 'Andr\u00e9s Sabella G\u00e1lvez Intl ',
    city: 'Antofagasta',
    country: 'Chile',
    IATA: 'ANF',
    ICAO: 'SCFA',
    lat: '-23.444501',
    lon: '-70.445099',
    timezone: '-4'
  },
  {
    name: 'Capitan Fuentes Martinez  ',
    city: 'Porvenir',
    country: 'Chile',
    IATA: 'WPR',
    ICAO: 'SCFM',
    lat: '-53.253700256347656',
    lon: '-70.31919860839844',
    timezone: '-4'
  },
  {
    name: 'Futaleuf\u00fa ',
    city: 'Futaleufu',
    country: 'Chile',
    IATA: 'FFU',
    ICAO: 'SCFT',
    lat: '-43.18920135498047',
    lon: '-71.8510971069336',
    timezone: '-4'
  },
  {
    name: 'Mar\u00eda Dolores ',
    city: 'Los Angeles',
    country: 'Chile',
    IATA: 'LSQ',
    ICAO: 'SCGE',
    lat: '-37.40169906616211',
    lon: '-72.42539978027344',
    timezone: '-4'
  },
  {
    name: 'Guardiamarina Za\u00f1artu ',
    city: 'Puerto Williams',
    country: 'Chile',
    IATA: 'WPU',
    ICAO: 'SCGZ',
    lat: '-54.93109893798828',
    lon: '-67.62629699707031',
    timezone: '-4'
  },
  {
    name: 'Carriel Sur ',
    city: 'Concepcion',
    country: 'Chile',
    IATA: 'CCP',
    ICAO: 'SCIE',
    lat: '-36.772701',
    lon: '-73.063103',
    timezone: '-4'
  },
  {
    name: 'Mataveri ',
    city: 'Easter Island',
    country: 'Chile',
    IATA: 'IPC',
    ICAO: 'SCIP',
    lat: '-27.1648006439',
    lon: '-109.42199707',
    timezone: '-6'
  },
  {
    name: 'Ca\u00f1al Bajo Carlos - Hott Siebert ',
    city: 'Osorno',
    country: 'Chile',
    IATA: 'ZOS',
    ICAO: 'SCJO',
    lat: '-40.61119842529297',
    lon: '-73.06099700927734',
    timezone: '-4'
  },
  {
    name: 'Vallenar ',
    city: 'Vallenar',
    country: 'Chile',
    IATA: 'VLR',
    ICAO: 'SCLL',
    lat: '-28.596399307250977',
    lon: '-70.75599670410156',
    timezone: '-4'
  },
  {
    name: 'De La Independencia ',
    city: 'Rancagua',
    country: 'Chile',
    IATA: 'QRC',
    ICAO: 'SCRG',
    lat: '-34.17369842529297',
    lon: '-70.77570343017578',
    timezone: '-4'
  },
  {
    name: 'Teniente Rodolfo Marsh Martin Base',
    city: 'Isla Rey Jorge',
    country: 'Antarctica',
    IATA: 'TNM',
    ICAO: 'SCRM',
    lat: '-62.1907997131',
    lon: '-58.9866981506',
    timezone: '12'
  },
  {
    name: 'La Florida ',
    city: 'La Serena',
    country: 'Chile',
    IATA: 'LSC',
    ICAO: 'SCSE',
    lat: '-29.916201',
    lon: '-71.199501',
    timezone: '-4'
  },
  {
    name: 'Eulogio S\u00e1nchez ',
    city: 'Santiago',
    country: 'Chile',
    IATA: '\\N',
    ICAO: 'SCTB',
    lat: '-33.456298828125',
    lon: '-70.54669952392578',
    timezone: '-4'
  },
  {
    name: 'Maquehue ',
    city: 'Temuco',
    country: 'Chile',
    IATA: 'PZS',
    ICAO: 'SCTC',
    lat: '-38.766799926758',
    lon: '-72.637100219727',
    timezone: '-4'
  },
  {
    name: 'El Tepual ',
    city: 'Puerto Montt',
    country: 'Chile',
    IATA: 'PMC',
    ICAO: 'SCTE',
    lat: '-41.438899993896484',
    lon: '-73.09400177001953',
    timezone: '-4'
  },
  {
    name: 'Chait\u00e9n ',
    city: 'Chaiten',
    country: 'Chile',
    IATA: 'WCH',
    ICAO: 'SCTN',
    lat: '-42.93280029296875',
    lon: '-72.6990966796875',
    timezone: '-4'
  },
  {
    name: 'Pichoy ',
    city: 'Valdivia',
    country: 'Chile',
    IATA: 'ZAL',
    ICAO: 'SCVD',
    lat: '-39.6500015259',
    lon: '-73.0860977173',
    timezone: '-4'
  },
  {
    name: 'Chacho\u00e1n ',
    city: 'Ambato',
    country: 'Ecuador',
    IATA: 'ATF',
    ICAO: 'SEAM',
    lat: '-1.2120699882507324',
    lon: '-78.57460021972656',
    timezone: '-5'
  },
  {
    name: 'Hacienda Clementina ',
    city: 'Clementia',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SECM',
    lat: '-1.7062699794769287',
    lon: '-79.37889862060547',
    timezone: '-5'
  },
  {
    name: 'Francisco De Orellana ',
    city: 'Coca',
    country: 'Ecuador',
    IATA: 'OCC',
    ICAO: 'SECO',
    lat: '-0.4628860056400299',
    lon: '-76.98680114746094',
    timezone: '-5'
  },
  {
    name: 'Mariscal Lamar ',
    city: 'Cuenca',
    country: 'Ecuador',
    IATA: 'CUE',
    ICAO: 'SECU',
    lat: '-2.88947',
    lon: '-78.984398',
    timezone: '-5'
  },
  {
    name: 'Seymour ',
    city: 'Galapagos',
    country: 'Ecuador',
    IATA: 'GPS',
    ICAO: 'SEGS',
    lat: '-0.45375800132751465',
    lon: '-90.26589965820312',
    timezone: '-6'
  },
  {
    name: 'Jos\u00e9 Joaqu\u00edn de Olmedo Intl ',
    city: 'Guayaquil',
    country: 'Ecuador',
    IATA: 'GYE',
    ICAO: 'SEGU',
    lat: '-2.1574199199699997',
    lon: '-79.88359832760001',
    timezone: '-5'
  },
  {
    name: 'Gualaquiza ',
    city: 'Gualaquiza',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEGZ',
    lat: '-3.4232099056243896',
    lon: '-78.56700134277344',
    timezone: '-5'
  },
  {
    name: 'Atahualpa ',
    city: 'Ibarra',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEIB',
    lat: '0.33841899037361145',
    lon: '-78.13639831542969',
    timezone: '-5'
  },
  {
    name: 'Km 192 ',
    city: 'Km-192',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEKK',
    lat: '0.18420299887657166',
    lon: '-79.39199829101562',
    timezone: '-5'
  },
  {
    name: 'Hacienda La Julia ',
    city: 'La Julia',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SELJ',
    lat: '-1.7043800354003906',
    lon: '-79.55229949951172',
    timezone: '-5'
  },
  {
    name: 'Cotopaxi Intl ',
    city: 'Latacunga',
    country: 'Ecuador',
    IATA: 'LTX',
    ICAO: 'SELT',
    lat: '-0.906833',
    lon: '-78.615799',
    timezone: '-5'
  },
  {
    name: 'Jose Maria Velasco Ibarra ',
    city: 'Macara',
    country: 'Ecuador',
    IATA: 'MRR',
    ICAO: 'SEMA',
    lat: '-4.37823009491',
    lon: '-79.94100189210002',
    timezone: '-5'
  },
  {
    name: 'Coronel E Carvajal ',
    city: 'Macas',
    country: 'Ecuador',
    IATA: 'XMS',
    ICAO: 'SEMC',
    lat: '-2.2991700172424316',
    lon: '-78.12079620361328',
    timezone: '-5'
  },
  {
    name: 'General Manuel Serrano ',
    city: 'Machala',
    country: 'Ecuador',
    IATA: 'MCH',
    ICAO: 'SEMH',
    lat: '-3.2689',
    lon: '-79.961601',
    timezone: '-5'
  },
  {
    name: 'El Carmen ',
    city: 'Montalvo',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEMO',
    lat: '-2.067009925842285',
    lon: '-76.97570037841797',
    timezone: '-5'
  },
  {
    name: 'Eloy Alfaro Intl ',
    city: 'Manta',
    country: 'Ecuador',
    IATA: 'MEC',
    ICAO: 'SEMT',
    lat: '-0.9460780024528503',
    lon: '-80.67880249023438',
    timezone: '-5'
  },
  {
    name: 'Maragrosa ',
    city: 'Maragrosa',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEMX',
    lat: '-2.851099967956543',
    lon: '-79.80359649658203',
    timezone: '-5'
  },
  {
    name: 'Amable Calle Gutierrez ',
    city: 'Pasaje',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEPS',
    lat: '-3.3196699619293213',
    lon: '-79.76920318603516',
    timezone: '-5'
  },
  {
    name: 'Reales Tamarindos ',
    city: 'Portoviejo',
    country: 'Ecuador',
    IATA: 'PVO',
    ICAO: 'SEPV',
    lat: '-1.0416500568389893',
    lon: '-80.47219848632812',
    timezone: '-5'
  },
  {
    name: 'Quevedo ',
    city: 'Quevedo',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SEQE',
    lat: '-0.9894000291824341',
    lon: '-79.46510314941406',
    timezone: '-5'
  },
  {
    name: 'Mariscal Sucre Intl ',
    city: 'Quito',
    country: 'Ecuador',
    IATA: 'UIO',
    ICAO: 'SEQM',
    lat: '-0.129166666667',
    lon: '-78.3575',
    timezone: '-5'
  },
  {
    name: 'Chimborazo ',
    city: 'Riobamba',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SERB',
    lat: '-1.6534299850463867',
    lon: '-78.65609741210938',
    timezone: '-5'
  },
  {
    name: 'Santa Rosa Intl ',
    city: 'Santa Rosa',
    country: 'Ecuador',
    IATA: 'ETR',
    ICAO: 'SERO',
    lat: '-3.441986',
    lon: '-79.996957',
    timezone: '-5'
  },
  {
    name: 'General Ulpiano Paez ',
    city: 'Salinas',
    country: 'Ecuador',
    IATA: 'SNC',
    ICAO: 'SESA',
    lat: '-2.20499',
    lon: '-80.988899',
    timezone: '-5'
  },
  {
    name: 'Santo Domingo de Los Colorados ',
    city: 'Santo Domingo',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SESD',
    lat: '-0.2482219934463501',
    lon: '-79.21440124511719',
    timezone: '-5'
  },
  {
    name: 'Taura ',
    city: 'Taura',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SETA',
    lat: '-2.261039972305298',
    lon: '-79.6801986694336',
    timezone: '-5'
  },
  {
    name: 'Mayor Galo Torres ',
    city: 'Tena',
    country: 'Ecuador',
    IATA: '\\N',
    ICAO: 'SETE',
    lat: '-0.9867669939994812',
    lon: '-77.81950378417969',
    timezone: '-5'
  },
  {
    name: 'Tarapoa ',
    city: 'Tarapoa',
    country: 'Ecuador',
    IATA: 'TPC',
    ICAO: 'SETR',
    lat: '-0.12295600026845932',
    lon: '-76.33779907226562',
    timezone: '-5'
  },
  {
    name: 'Teniente Coronel Luis a Mantilla ',
    city: 'Tulcan',
    country: 'Ecuador',
    IATA: 'TUA',
    ICAO: 'SETU',
    lat: '0.8095059990882874',
    lon: '-77.70809936523438',
    timezone: '-5'
  },
  {
    name: 'Silvio Pettirossi Intl ',
    city: 'Asuncion',
    country: 'Paraguay',
    IATA: 'ASU',
    ICAO: 'SGAS',
    lat: '-25.239999771118164',
    lon: '-57.52000045776367',
    timezone: '-4'
  },
  {
    name: 'Juan De Ayolas ',
    city: 'Ayolas',
    country: 'Paraguay',
    IATA: 'AYO',
    ICAO: 'SGAY',
    lat: '-27.370554',
    lon: '-56.854064',
    timezone: '-4'
  },
  {
    name: 'Teniente Col Carmelo Peralta ',
    city: 'Conception',
    country: 'Paraguay',
    IATA: 'CIO',
    ICAO: 'SGCO',
    lat: '-23.442363',
    lon: '-57.427253',
    timezone: '-4'
  },
  {
    name: 'Itaip\u00fa ',
    city: 'Itaipu',
    country: 'Paraguay',
    IATA: '\\N',
    ICAO: 'SGIB',
    lat: '-25.407519',
    lon: '-54.619377',
    timezone: '-4'
  },
  {
    name: 'Dr. Luis Maria Arga\u00f1a Intl ',
    city: 'Mariscal Estigarribia',
    country: 'Paraguay',
    IATA: 'ESG',
    ICAO: 'SGME',
    lat: '-22.049999237060547',
    lon: '-60.619998931884766',
    timezone: '-4'
  },
  {
    name: 'Carlos Miguel Gimenez ',
    city: 'Pilar',
    country: 'Paraguay',
    IATA: 'PIL',
    ICAO: 'SGPI',
    lat: '-26.881224',
    lon: '-58.318026',
    timezone: '-4'
  },
  {
    name: 'El Eden ',
    city: 'Armenia',
    country: 'Colombia',
    IATA: 'AXM',
    ICAO: 'SKAR',
    lat: '4.45278',
    lon: '-75.7664',
    timezone: '-5'
  },
  {
    name: 'Tres De Mayo ',
    city: 'Puerto Asis',
    country: 'Colombia',
    IATA: 'PUU',
    ICAO: 'SKAS',
    lat: '0.505228',
    lon: '-76.5008',
    timezone: '-5'
  },
  {
    name: 'Las Flores ',
    city: 'El Banco',
    country: 'Colombia',
    IATA: 'ELB',
    ICAO: 'SKBC',
    lat: '9.04554',
    lon: '-73.9749',
    timezone: '-5'
  },
  {
    name: 'Palonegro ',
    city: 'Bucaramanga',
    country: 'Colombia',
    IATA: 'BGA',
    ICAO: 'SKBG',
    lat: '7.1265',
    lon: '-73.1848',
    timezone: '-5'
  },
  {
    name: 'El Dorado Intl ',
    city: 'Bogota',
    country: 'Colombia',
    IATA: 'BOG',
    ICAO: 'SKBO',
    lat: '4.70159',
    lon: '-74.1469',
    timezone: '-5'
  },
  {
    name: 'Ernesto Cortissoz Intl ',
    city: 'Barranquilla',
    country: 'Colombia',
    IATA: 'BAQ',
    ICAO: 'SKBQ',
    lat: '10.8896',
    lon: '-74.7808',
    timezone: '-5'
  },
  {
    name: 'Jos\u00e9 Celestino Mutis ',
    city: 'Bahia Solano',
    country: 'Colombia',
    IATA: 'BSC',
    ICAO: 'SKBS',
    lat: '6.20292',
    lon: '-77.3947',
    timezone: '-5'
  },
  {
    name: 'Gerardo Tobar L\u00f3pez ',
    city: 'Buenaventura',
    country: 'Colombia',
    IATA: 'BUN',
    ICAO: 'SKBU',
    lat: '3.81963',
    lon: '-76.9898',
    timezone: '-5'
  },
  {
    name: 'Camilo Daza Intl ',
    city: 'Cucuta',
    country: 'Colombia',
    IATA: 'CUC',
    ICAO: 'SKCC',
    lat: '7.92757',
    lon: '-72.5115',
    timezone: '-5'
  },
  {
    name: 'Rafael Nu\u00f1ez Intl ',
    city: 'Cartagena',
    country: 'Colombia',
    IATA: 'CTG',
    ICAO: 'SKCG',
    lat: '10.4424',
    lon: '-75.513',
    timezone: '-5'
  },
  {
    name: 'Alfonso Bonilla Aragon Intl ',
    city: 'Cali',
    country: 'Colombia',
    IATA: 'CLO',
    ICAO: 'SKCL',
    lat: '3.54322',
    lon: '-76.3816',
    timezone: '-5'
  },
  {
    name: 'La Florida ',
    city: 'Tumaco',
    country: 'Colombia',
    IATA: 'TCO',
    ICAO: 'SKCO',
    lat: '1.81442',
    lon: '-78.7492',
    timezone: '-5'
  },
  {
    name: 'Las Brujas ',
    city: 'Corozal',
    country: 'Colombia',
    IATA: 'CZU',
    ICAO: 'SKCZ',
    lat: '9.33274',
    lon: '-75.2856',
    timezone: '-5'
  },
  {
    name: 'Yarigu\u00edes ',
    city: 'Barrancabermeja',
    country: 'Colombia',
    IATA: 'EJA',
    ICAO: 'SKEJ',
    lat: '7.02433',
    lon: '-73.8068',
    timezone: '-5'
  },
  {
    name: 'Gustavo Artunduaga Paredes ',
    city: 'Florencia',
    country: 'Colombia',
    IATA: 'FLA',
    ICAO: 'SKFL',
    lat: '1.58919',
    lon: '-75.5644',
    timezone: '-5'
  },
  {
    name: 'Santiago Vila ',
    city: 'Girardot',
    country: 'Colombia',
    IATA: 'GIR',
    ICAO: 'SKGI',
    lat: '4.27624',
    lon: '-74.7967',
    timezone: '-5'
  },
  {
    name: 'Juan Casiano ',
    city: 'Guapi',
    country: 'Colombia',
    IATA: 'GPI',
    ICAO: 'SKGP',
    lat: '2.57013',
    lon: '-77.8986',
    timezone: '-5'
  },
  {
    name: 'Guaymaral ',
    city: 'Guaymaral',
    country: 'Colombia',
    IATA: '\\N',
    ICAO: 'SKGY',
    lat: '4.81233',
    lon: '-74.0649',
    timezone: '-5'
  },
  {
    name: 'Perales ',
    city: 'Ibague',
    country: 'Colombia',
    IATA: 'IBE',
    ICAO: 'SKIB',
    lat: '4.42161',
    lon: '-75.1333',
    timezone: '-5'
  },
  {
    name: 'San Luis ',
    city: 'Ipiales',
    country: 'Colombia',
    IATA: 'IPI',
    ICAO: 'SKIP',
    lat: '0.861925',
    lon: '-77.6718',
    timezone: '-5'
  },
  {
    name: 'Antonio Roldan Betancourt ',
    city: 'Carepa',
    country: 'Colombia',
    IATA: 'APO',
    ICAO: 'SKLC',
    lat: '7.81196',
    lon: '-76.7164',
    timezone: '-5'
  },
  {
    name: 'Jorge Isaac ',
    city: 'La Mina',
    country: 'Colombia',
    IATA: 'MCJ',
    ICAO: 'SKLM',
    lat: '11.2325',
    lon: '-72.4901',
    timezone: '-5'
  },
  {
    name: 'Alfredo V\u00e1squez Cobo Intl ',
    city: 'Leticia',
    country: 'Colombia',
    IATA: 'LET',
    ICAO: 'SKLT',
    lat: '-4.19355',
    lon: '-69.9432',
    timezone: '-5'
  },
  {
    name: 'Enrique Olaya Herrera ',
    city: 'Medellin',
    country: 'Colombia',
    IATA: 'EOH',
    ICAO: 'SKMD',
    lat: '6.220549',
    lon: '-75.590582',
    timezone: '-5'
  },
  {
    name: 'Baracoa ',
    city: 'Magangue',
    country: 'Colombia',
    IATA: 'MGN',
    ICAO: 'SKMG',
    lat: '9.28474',
    lon: '-74.8461',
    timezone: '-5'
  },
  {
    name: 'Los Garzones ',
    city: 'Monteria',
    country: 'Colombia',
    IATA: 'MTR',
    ICAO: 'SKMR',
    lat: '8.82374',
    lon: '-75.8258',
    timezone: '-5'
  },
  {
    name: 'Fabio Alberto Leon Bentley ',
    city: 'Mitu',
    country: 'Colombia',
    IATA: 'MVP',
    ICAO: 'SKMU',
    lat: '1.25366',
    lon: '-70.2339',
    timezone: '-5'
  },
  {
    name: 'La Nubia ',
    city: 'Manizales',
    country: 'Colombia',
    IATA: 'MZL',
    ICAO: 'SKMZ',
    lat: '5.0296',
    lon: '-75.4647',
    timezone: '-5'
  },
  {
    name: 'Benito Salas ',
    city: 'Neiva',
    country: 'Colombia',
    IATA: 'NVA',
    ICAO: 'SKNV',
    lat: '2.95015',
    lon: '-75.294',
    timezone: '-5'
  },
  {
    name: 'Aguas Claras ',
    city: 'Ocana',
    country: 'Colombia',
    IATA: 'OCV',
    ICAO: 'SKOC',
    lat: '8.31506',
    lon: '-73.3583',
    timezone: '-5'
  },
  {
    name: 'Otu ',
    city: 'Otu',
    country: 'Colombia',
    IATA: 'OTU',
    ICAO: 'SKOT',
    lat: '7.01037',
    lon: '-74.7155',
    timezone: '-5'
  },
  {
    name: 'Puerto Bol\u00edvar ',
    city: 'Puerto Bolivar',
    country: 'Colombia',
    IATA: '\\N',
    ICAO: 'SKPB',
    lat: '12.2215',
    lon: '-71.9848',
    timezone: '-5'
  },
  {
    name: 'German Olano ',
    city: 'Puerto Carreno',
    country: 'Colombia',
    IATA: 'PCR',
    ICAO: 'SKPC',
    lat: '6.18472',
    lon: '-67.4932',
    timezone: '-5'
  },
  {
    name: 'Mateca\u00f1a Intl ',
    city: 'Pereira',
    country: 'Colombia',
    IATA: 'PEI',
    ICAO: 'SKPE',
    lat: '4.81267',
    lon: '-75.7395',
    timezone: '-5'
  },
  {
    name: 'Pitalito ',
    city: 'Pitalito',
    country: 'Colombia',
    IATA: 'PTX',
    ICAO: 'SKPI',
    lat: '1.85777',
    lon: '-76.0857',
    timezone: '-5'
  },
  {
    name: 'Guillermo Le\u00f3n Valencia ',
    city: 'Popayan',
    country: 'Colombia',
    IATA: 'PPN',
    ICAO: 'SKPP',
    lat: '2.4544',
    lon: '-76.6093',
    timezone: '-5'
  },
  {
    name: 'Antonio Narino ',
    city: 'Pasto',
    country: 'Colombia',
    IATA: 'PSO',
    ICAO: 'SKPS',
    lat: '1.39625',
    lon: '-77.2915',
    timezone: '-5'
  },
  {
    name: 'El Embrujo ',
    city: 'Providencia',
    country: 'Colombia',
    IATA: 'PVA',
    ICAO: 'SKPV',
    lat: '13.3569',
    lon: '-81.3583',
    timezone: '-5'
  },
  {
    name: 'Mariquita ',
    city: 'Mariquita',
    country: 'Colombia',
    IATA: 'MQU',
    ICAO: 'SKQU',
    lat: '5.21256',
    lon: '-74.8836',
    timezone: '-5'
  },
  {
    name: 'Jose Maria C\u00f3rdova Intl ',
    city: 'Rio Negro',
    country: 'Colombia',
    IATA: 'MDE',
    ICAO: 'SKRG',
    lat: '6.16454',
    lon: '-75.4231',
    timezone: '-5'
  },
  {
    name: 'Almirante Padilla ',
    city: 'Rio Hacha',
    country: 'Colombia',
    IATA: 'RCH',
    ICAO: 'SKRH',
    lat: '11.5262',
    lon: '-72.926',
    timezone: '-5'
  },
  {
    name: 'Jorge E. Gonzalez Torres ',
    city: 'San Jose Del Guaviare',
    country: 'Colombia',
    IATA: 'SJE',
    ICAO: 'SKSJ',
    lat: '2.57969',
    lon: '-72.6394',
    timezone: '-5'
  },
  {
    name: 'Sim\u00f3n Bol\u00edvar Intl ',
    city: 'Santa Marta',
    country: 'Colombia',
    IATA: 'SMR',
    ICAO: 'SKSM',
    lat: '11.1196',
    lon: '-74.2306',
    timezone: '-5'
  },
  {
    name: 'Gustavo Rojas Pinilla Intl ',
    city: 'San Andres Island',
    country: 'Colombia',
    IATA: 'ADZ',
    ICAO: 'SKSP',
    lat: '12.5836',
    lon: '-81.7112',
    timezone: '-5'
  },
  {
    name: 'Eduardo Falla Solano ',
    city: 'San Vincente De Caguan',
    country: 'Colombia',
    IATA: 'SVI',
    ICAO: 'SKSV',
    lat: '2.15217',
    lon: '-74.7663',
    timezone: '-5'
  },
  {
    name: 'Gustavo Vargas ',
    city: 'Tame',
    country: 'Colombia',
    IATA: 'TME',
    ICAO: 'SKTM',
    lat: '6.45108',
    lon: '-71.7603',
    timezone: '-5'
  },
  {
    name: 'Santiago Perez ',
    city: 'Arauca',
    country: 'Colombia',
    IATA: 'AUC',
    ICAO: 'SKUC',
    lat: '7.06888',
    lon: '-70.7369',
    timezone: '-5'
  },
  {
    name: 'El Cara\u00f1o ',
    city: 'Quibdo',
    country: 'Colombia',
    IATA: 'UIB',
    ICAO: 'SKUI',
    lat: '5.69076',
    lon: '-76.6412',
    timezone: '-5'
  },
  {
    name: 'Heriberto G\u00edl Mart\u00ednez ',
    city: 'Tulua',
    country: 'Colombia',
    IATA: 'ULQ',
    ICAO: 'SKUL',
    lat: '4.08836',
    lon: '-76.2351',
    timezone: '-5'
  },
  {
    name: 'Alfonso L\u00f3pez Pumarejo ',
    city: 'Valledupar',
    country: 'Colombia',
    IATA: 'VUP',
    ICAO: 'SKVP',
    lat: '10.435',
    lon: '-73.2495',
    timezone: '-5'
  },
  {
    name: 'Vanguardia ',
    city: 'Villavicencio',
    country: 'Colombia',
    IATA: 'VVC',
    ICAO: 'SKVV',
    lat: '4.16787',
    lon: '-73.6138',
    timezone: '-5'
  },
  {
    name: 'Bermejo ',
    city: 'Bermejo',
    country: 'Bolivia',
    IATA: 'BJO',
    ICAO: 'SLBJ',
    lat: '-22.7733001709',
    lon: '-64.31289672850001',
    timezone: '-4'
  },
  {
    name: 'Jorge Wilsterman Intl ',
    city: 'Cochabamba',
    country: 'Bolivia',
    IATA: 'CBB',
    ICAO: 'SLCB',
    lat: '-17.421100616455078',
    lon: '-66.1771011352539',
    timezone: '-4'
  },
  {
    name: 'Chimore ',
    city: 'Chapacura',
    country: 'Bolivia',
    IATA: 'CCA',
    ICAO: 'SLCH',
    lat: '-16.976834',
    lon: '-65.145568',
    timezone: '-4'
  },
  {
    name: 'Capit\u00e1n An\u00edbal Arab ',
    city: 'Cobija',
    country: 'Bolivia',
    IATA: 'CIJ',
    ICAO: 'SLCO',
    lat: '-11.040399551400002',
    lon: '-68.7829971313',
    timezone: '-4'
  },
  {
    name: 'El Alto Intl ',
    city: 'La Paz',
    country: 'Bolivia',
    IATA: 'LPB',
    ICAO: 'SLLP',
    lat: '-16.5132999420166',
    lon: '-68.19229888916016',
    timezone: '-4'
  },
  {
    name: 'Juan Mendoza ',
    city: 'Oruro',
    country: 'Bolivia',
    IATA: 'ORU',
    ICAO: 'SLOR',
    lat: '-17.962600708',
    lon: '-67.0762023926',
    timezone: '-4'
  },
  {
    name: 'Capitan Nicolas Rojas ',
    city: 'Potosi',
    country: 'Bolivia',
    IATA: 'POI',
    ICAO: 'SLPO',
    lat: '-19.5431003571',
    lon: '-65.72370147710001',
    timezone: '-4'
  },
  {
    name: 'Capit\u00e1n Av. Salvador Ogaya G. airport',
    city: 'Puerto Suarez',
    country: 'Bolivia',
    IATA: 'PSZ',
    ICAO: 'SLPS',
    lat: '-18.975301',
    lon: '-57.820599',
    timezone: '-4'
  },
  {
    name: 'Santa Ana Del Yacuma ',
    city: 'Santa Ana',
    country: 'Bolivia',
    IATA: 'SBL',
    ICAO: 'SLSA',
    lat: '-13.762200355500001',
    lon: '-65.4352035522',
    timezone: '-4'
  },
  {
    name: 'Juana Azurduy De Padilla ',
    city: 'Sucre',
    country: 'Bolivia',
    IATA: 'SRE',
    ICAO: 'SLSU',
    lat: '-19.007099151611328',
    lon: '-65.2886962890625',
    timezone: '-4'
  },
  {
    name: 'Capitan Oriel Lea Plaza ',
    city: 'Tarija',
    country: 'Bolivia',
    IATA: 'TJA',
    ICAO: 'SLTJ',
    lat: '-21.5557003021',
    lon: '-64.7013015747',
    timezone: '-4'
  },
  {
    name: 'Teniente Av. Jorge Henrich Arauz ',
    city: 'Trinidad',
    country: 'Bolivia',
    IATA: 'TDD',
    ICAO: 'SLTR',
    lat: '-14.8186998367',
    lon: '-64.9179992676',
    timezone: '-4'
  },
  {
    name: 'Teniente Coronel Rafael Pab\u00f3n ',
    city: 'Villa Montes',
    country: 'Bolivia',
    IATA: 'VLM',
    ICAO: 'SLVM',
    lat: '-21.255199432399998',
    lon: '-63.4056015015',
    timezone: '-4'
  },
  {
    name: 'Viru Viru Intl ',
    city: 'Santa Cruz',
    country: 'Bolivia',
    IATA: 'VVI',
    ICAO: 'SLVR',
    lat: '-17.6448',
    lon: '-63.135399',
    timezone: '-4'
  },
  {
    name: 'Yacuiba ',
    city: 'Yacuiba',
    country: 'Bolivia',
    IATA: 'BYC',
    ICAO: 'SLYA',
    lat: '-21.960899353027344',
    lon: '-63.65169906616211',
    timezone: '-4'
  },
  {
    name: 'Johan Adolf Pengel Intl ',
    city: 'Zandery',
    country: 'Suriname',
    IATA: 'PBM',
    ICAO: 'SMJP',
    lat: '5.4528298377999995',
    lon: '-55.1878013611',
    timezone: '-3'
  },
  {
    name: 'Cayenne-Rochambeau ',
    city: 'Cayenne',
    country: 'French Guiana',
    IATA: 'CAY',
    ICAO: 'SOCA',
    lat: '4.819809913639999',
    lon: '-52.360401153599994',
    timezone: '-3'
  },
  {
    name: "Saint-Georges-de-l'Oyapock ",
    city: 'St.-georges Oyapock',
    country: 'French Guiana',
    IATA: 'OYP',
    ICAO: 'SOOG',
    lat: '3.89759993553',
    lon: '-51.8041000366',
    timezone: '-3'
  },
  {
    name: 'Huancabamba ',
    city: 'Huancabamba',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPAB',
    lat: '-5.256770133972168',
    lon: '-79.44290161132812',
    timezone: '-5'
  },
  {
    name: 'Alferez FAP Alfredo Vladimir Sara Bauer ',
    city: 'Andoas',
    country: 'Peru',
    IATA: 'AOP',
    ICAO: 'SPAS',
    lat: '-2.79612994194',
    lon: '-76.46659851070001',
    timezone: '-5'
  },
  {
    name: 'Teniente General Gerardo P\u00e9rez Pinedo ',
    city: 'Atalaya',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPAY',
    lat: '-10.7291002274',
    lon: '-73.7665023804',
    timezone: '-5'
  },
  {
    name: 'Iberia ',
    city: 'Iberia',
    country: 'Peru',
    IATA: 'IBP',
    ICAO: 'SPBR',
    lat: '-11.411600112915039',
    lon: '-69.48870086669922',
    timezone: '-5'
  },
  {
    name: 'Cap FAP David Abenzur Rengifo Intl ',
    city: 'Pucallpa',
    country: 'Peru',
    IATA: 'PCL',
    ICAO: 'SPCL',
    lat: '-8.37794017791748',
    lon: '-74.57430267333984',
    timezone: '-5'
  },
  {
    name: 'Teniente FAP Jaime A De Montreuil Morales ',
    city: 'Chimbote',
    country: 'Peru',
    IATA: 'CHM',
    ICAO: 'SPEO',
    lat: '-9.149609565734863',
    lon: '-78.5238037109375',
    timezone: '-5'
  },
  {
    name: 'Puerto Esperanza ',
    city: 'Puerto Esperanza',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPEP',
    lat: '-9.7681303024292',
    lon: '-70.70649719238281',
    timezone: '-5'
  },
  {
    name: 'Cesar Torke Podesta ',
    city: 'Moquegua',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPEQ',
    lat: '-17.179000854492188',
    lon: '-70.93080139160156',
    timezone: '-5'
  },
  {
    name: 'Capitan FAP Jose A Quinones Gonzales Intl ',
    city: 'Chiclayo',
    country: 'Peru',
    IATA: 'CIX',
    ICAO: 'SPHI',
    lat: '-6.787479877471924',
    lon: '-79.8281021118164',
    timezone: '-5'
  },
  {
    name: 'Coronel FAP Alfredo Mendivil Duarte ',
    city: 'Ayacucho',
    country: 'Peru',
    IATA: 'AYP',
    ICAO: 'SPHO',
    lat: '-13.154800415039062',
    lon: '-74.20439910888672',
    timezone: '-5'
  },
  {
    name: 'Andahuaylas ',
    city: 'Andahuaylas',
    country: 'Peru',
    IATA: 'ANS',
    ICAO: 'SPHY',
    lat: '-13.706399917602539',
    lon: '-73.35040283203125',
    timezone: '-5'
  },
  {
    name: 'Comandante FAP German Arias Graziani ',
    city: 'Anta',
    country: 'Peru',
    IATA: 'ATA',
    ICAO: 'SPHZ',
    lat: '-9.347439765930176',
    lon: '-77.59839630126953',
    timezone: '-5'
  },
  {
    name: 'Jorge Ch\u00e1vez Intl ',
    city: 'Lima',
    country: 'Peru',
    IATA: 'LIM',
    ICAO: 'SPIM',
    lat: '-12.0219',
    lon: '-77.114305',
    timezone: '-5'
  },
  {
    name: 'Juanjui ',
    city: 'Juanjui',
    country: 'Peru',
    IATA: 'JJI',
    ICAO: 'SPJI',
    lat: '-7.169099807739258',
    lon: '-76.72859954833984',
    timezone: '-5'
  },
  {
    name: 'Francisco Carle ',
    city: 'Jauja',
    country: 'Peru',
    IATA: 'JAU',
    ICAO: 'SPJJ',
    lat: '-11.7831001282',
    lon: '-75.47339630130001',
    timezone: '-5'
  },
  {
    name: 'Inca Manco Capac Intl ',
    city: 'Juliaca',
    country: 'Peru',
    IATA: 'JUL',
    ICAO: 'SPJL',
    lat: '-15.467100143432617',
    lon: '-70.158203125',
    timezone: '-5'
  },
  {
    name: 'Ilo ',
    city: 'Ilo',
    country: 'Peru',
    IATA: 'ILQ',
    ICAO: 'SPLO',
    lat: '-17.69499969482422',
    lon: '-71.34400177001953',
    timezone: '-5'
  },
  {
    name: 'Las Palmas Air Base',
    city: 'Las Palmas',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPLP',
    lat: '-12.16069984436',
    lon: '-76.998901367188',
    timezone: '-5'
  },
  {
    name: 'Capitan FAP Pedro Canga Rodriguez ',
    city: 'Tumbes',
    country: 'Peru',
    IATA: 'TBP',
    ICAO: 'SPME',
    lat: '-3.55253005027771',
    lon: '-80.38140106201172',
    timezone: '-5'
  },
  {
    name: 'Moises Benzaquen Rengifo ',
    city: 'Yurimaguas',
    country: 'Peru',
    IATA: 'YMS',
    ICAO: 'SPMS',
    lat: '-5.893770217895508',
    lon: '-76.11820220947266',
    timezone: '-5'
  },
  {
    name: 'Collique ',
    city: 'Collique',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPOL',
    lat: '-11.92870044708252',
    lon: '-77.06109619140625',
    timezone: '-5'
  },
  {
    name: 'Chachapoyas ',
    city: 'Chachapoyas',
    country: 'Peru',
    IATA: 'CHH',
    ICAO: 'SPPY',
    lat: '-6.201809883117676',
    lon: '-77.8561019897461',
    timezone: '-5'
  },
  {
    name: 'Coronel FAP Francisco Secada Vignetta Intl ',
    city: 'Iquitos',
    country: 'Peru',
    IATA: 'IQT',
    ICAO: 'SPQT',
    lat: '-3.7847399711608887',
    lon: '-73.30879974365234',
    timezone: '-5'
  },
  {
    name: 'Rodr\u00edguez Ball\u00f3n Intl ',
    city: 'Arequipa',
    country: 'Peru',
    IATA: 'AQP',
    ICAO: 'SPQU',
    lat: '-16.3411006927',
    lon: '-71.5830993652',
    timezone: '-5'
  },
  {
    name: 'Capit\u00e1n FAP Leonardo Alvari\u00f1o Herr ',
    city: 'San Ramon',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPRM',
    lat: '-11.128600120544434',
    lon: '-75.35050201416016',
    timezone: '-5'
  },
  {
    name: 'Capitan FAP Carlos Martinez De Pinillos Intl ',
    city: 'Trujillo',
    country: 'Peru',
    IATA: 'TRU',
    ICAO: 'SPRU',
    lat: '-8.08141040802002',
    lon: '-79.10880279541016',
    timezone: '-5'
  },
  {
    name: 'Capit\u00e1n FAP Ren\u00e1n El\u00edas Olivera Intl ',
    city: 'Pisco',
    country: 'Peru',
    IATA: 'PIO',
    ICAO: 'SPSO',
    lat: '-13.74489974975586',
    lon: '-76.22029876708984',
    timezone: '-5'
  },
  {
    name: 'Cadete FAP Guillermo Del Castillo Paredes ',
    city: 'Tarapoto',
    country: 'Peru',
    IATA: 'TPP',
    ICAO: 'SPST',
    lat: '-6.508739948272705',
    lon: '-76.37319946289062',
    timezone: '-5'
  },
  {
    name: 'Coronel FAP Carlos Ciriani Santa Rosa Intl ',
    city: 'Tacna',
    country: 'Peru',
    IATA: 'TCQ',
    ICAO: 'SPTN',
    lat: '-18.053300857500002',
    lon: '-70.2758026123',
    timezone: '-5'
  },
  {
    name: 'Padre Aldamiz Intl ',
    city: 'Puerto Maldonado',
    country: 'Peru',
    IATA: 'PEM',
    ICAO: 'SPTU',
    lat: '-12.6135997772',
    lon: '-69.2285995483',
    timezone: '-5'
  },
  {
    name: 'Capit\u00e1n FAP Guillermo Concha Iberico Intl ',
    city: 'Piura',
    country: 'Peru',
    IATA: 'PIU',
    ICAO: 'SPUR',
    lat: '-5.20574998856',
    lon: '-80.61640167239999',
    timezone: '-5'
  },
  {
    name: 'Capitan Montes ',
    city: 'Talara',
    country: 'Peru',
    IATA: 'TYL',
    ICAO: 'SPYL',
    lat: '-4.5766401290894',
    lon: '-81.254096984863',
    timezone: '-5'
  },
  {
    name: 'Alejandro Velasco Astete Intl ',
    city: 'Cuzco',
    country: 'Peru',
    IATA: 'CUZ',
    ICAO: 'SPZO',
    lat: '-13.535699844400002',
    lon: '-71.9387969971',
    timezone: '-5'
  },
  {
    name: 'Angel S Adami ',
    city: 'Montevideo',
    country: 'Uruguay',
    IATA: '\\N',
    ICAO: 'SUAA',
    lat: '-34.7892',
    lon: '-56.264702',
    timezone: '-3'
  },
  {
    name: 'Santa Bernardina Intl ',
    city: 'Durazno',
    country: 'Uruguay',
    IATA: 'DZO',
    ICAO: 'SUDU',
    lat: '-33.3588981628418',
    lon: '-56.49919891357422',
    timezone: '-3'
  },
  {
    name: 'Carrasco Intl /General C L Berisso ',
    city: 'Montevideo',
    country: 'Uruguay',
    IATA: 'MVD',
    ICAO: 'SUMU',
    lat: '-34.838402',
    lon: '-56.0308',
    timezone: '-3'
  },
  {
    name: 'Nueva Hesperides Intl ',
    city: 'Salto',
    country: 'Uruguay',
    IATA: 'STY',
    ICAO: 'SUSO',
    lat: '-31.438499450683594',
    lon: '-57.98529815673828',
    timezone: '-3'
  },
  {
    name: 'Oswaldo Guevara Mujica ',
    city: 'Acarigua',
    country: 'Venezuela',
    IATA: 'AGV',
    ICAO: 'SVAC',
    lat: '9.553375244140625',
    lon: '-69.23786926269531',
    timezone: '-4'
  },
  {
    name: 'Anaco ',
    city: 'Anaco',
    country: 'Venezuela',
    IATA: 'AAO',
    ICAO: 'SVAN',
    lat: '9.430225372314453',
    lon: '-64.4707260131836',
    timezone: '-4'
  },
  {
    name: 'San Fernando de Atabapo ',
    city: 'San Fernando Deatabapo',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVAT',
    lat: '4.05104017258',
    lon: '-67.6996994019',
    timezone: '-4'
  },
  {
    name: 'General Jos\u00e9 Antonio Anzoategui Intl ',
    city: 'Barcelona',
    country: 'Venezuela',
    IATA: 'BLA',
    ICAO: 'SVBC',
    lat: '10.111111',
    lon: '-64.692222',
    timezone: '-4'
  },
  {
    name: 'Barinas ',
    city: 'Barinas',
    country: 'Venezuela',
    IATA: 'BNS',
    ICAO: 'SVBI',
    lat: '8.615',
    lon: '-70.21416667',
    timezone: '-4'
  },
  {
    name: 'El Libertador Airbase',
    city: 'Maracaibo',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVBL',
    lat: '10.183375358600001',
    lon: '-67.55731964110001',
    timezone: '-4'
  },
  {
    name: 'Barquisimeto Intl ',
    city: 'Barquisimeto',
    country: 'Venezuela',
    IATA: 'BRM',
    ICAO: 'SVBM',
    lat: '10.042746543884277',
    lon: '-69.3586196899414',
    timezone: '-4'
  },
  {
    name: 'Aeropuerto General Tomas de Heres. Ciudad Bolivar',
    city: 'Ciudad Bolivar',
    country: 'Venezuela',
    IATA: 'CBL',
    ICAO: 'SVCB',
    lat: '8.12216091156',
    lon: '-63.5369567871',
    timezone: '-4'
  },
  {
    name: 'Caicara del Orinoco ',
    city: 'Caicara De Orinoco',
    country: 'Venezuela',
    IATA: 'CXA',
    ICAO: 'SVCD',
    lat: '7.625510215759277',
    lon: '-66.16280364990234',
    timezone: '-4'
  },
  {
    name: 'San Carlos ',
    city: 'San Carlos',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVCJ',
    lat: '9.647720336914062',
    lon: '-68.57469940185547',
    timezone: '-4'
  },
  {
    name: 'Calabozo ',
    city: 'Calabozo',
    country: 'Venezuela',
    IATA: 'CLZ',
    ICAO: 'SVCL',
    lat: '8.92465591430664',
    lon: '-67.4170913696289',
    timezone: '-4'
  },
  {
    name: 'Canaima ',
    city: 'Canaima',
    country: 'Venezuela',
    IATA: 'CAJ',
    ICAO: 'SVCN',
    lat: '6.231988906860352',
    lon: '-62.85443115234375',
    timezone: '-4'
  },
  {
    name: 'Carora ',
    city: 'Carora',
    country: 'Venezuela',
    IATA: 'VCR',
    ICAO: 'SVCO',
    lat: '10.175602912902832',
    lon: '-70.06521606445312',
    timezone: '-4'
  },
  {
    name: 'General Francisco Berm\u00fadez ',
    city: 'Carupano',
    country: 'Venezuela',
    IATA: 'CUP',
    ICAO: 'SVCP',
    lat: '10.660014152526855',
    lon: '-63.261680603027344',
    timezone: '-4'
  },
  {
    name: 'Jos\u00e9 Leonardo Chirinos ',
    city: 'Coro',
    country: 'Venezuela',
    IATA: 'CZE',
    ICAO: 'SVCR',
    lat: '11.41494369506836',
    lon: '-69.68090057373047',
    timezone: '-4'
  },
  {
    name: 'Oscar Machado Zuluaga ',
    city: 'Caracas',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVCS',
    lat: '10.286110877990723',
    lon: '-66.81610870361328',
    timezone: '-4'
  },
  {
    name: 'Cuman\u00e1 (Antonio Jos\u00e9 de Sucre) ',
    city: 'Cumana',
    country: 'Venezuela',
    IATA: 'CUM',
    ICAO: 'SVCU',
    lat: '10.450332641601562',
    lon: '-64.1304702758789',
    timezone: '-4'
  },
  {
    name: 'Capit\u00e1n Manuel R\u00edos Airbase',
    city: 'Carrizal',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVCZ',
    lat: '9.372650146484375',
    lon: '-66.92279815673828',
    timezone: '-4'
  },
  {
    name: 'El Dorado ',
    city: 'El Dorado',
    country: 'Venezuela',
    IATA: 'EOR',
    ICAO: 'SVED',
    lat: '6.733333110809326',
    lon: '-61.58333206176758',
    timezone: '-4'
  },
  {
    name: 'Elorza ',
    city: 'Elorza',
    country: 'Venezuela',
    IATA: 'EOZ',
    ICAO: 'SVEZ',
    lat: '7.0833330154418945',
    lon: '-69.53333282470703',
    timezone: '-4'
  },
  {
    name: 'Guasdalito ',
    city: 'Guasdualito',
    country: 'Venezuela',
    IATA: 'GDO',
    ICAO: 'SVGD',
    lat: '7.233333110809326',
    lon: '-70.80000305175781',
    timezone: '-4'
  },
  {
    name: 'Guiria ',
    city: 'Guiria',
    country: 'Venezuela',
    IATA: 'GUI',
    ICAO: 'SVGI',
    lat: '10.574077606200001',
    lon: '-62.3126678467',
    timezone: '-4'
  },
  {
    name: 'Guanare ',
    city: 'Guanare',
    country: 'Venezuela',
    IATA: 'GUQ',
    ICAO: 'SVGU',
    lat: '9.026944160461426',
    lon: '-69.7551498413086',
    timezone: '-4'
  },
  {
    name: 'Higuerote ',
    city: 'Higuerote',
    country: 'Venezuela',
    IATA: 'HGE',
    ICAO: 'SVHG',
    lat: '10.462474',
    lon: '-66.092779',
    timezone: '-4'
  },
  {
    name: 'Andr\u00e9s Miguel Salazar Marcano ',
    city: 'Isla De Coche',
    country: 'Venezuela',
    IATA: 'ICC',
    ICAO: 'SVIE',
    lat: '10.794432',
    lon: '-63.98159',
    timezone: '-4'
  },
  {
    name: 'Josefa Camejo Intl ',
    city: 'Paraguana',
    country: 'Venezuela',
    IATA: 'LSP',
    ICAO: 'SVJC',
    lat: '11.78077507019043',
    lon: '-70.15149688720703',
    timezone: '-4'
  },
  {
    name: 'San Juan de Los Morros ',
    city: 'San Juan De Los Morros',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVJM',
    lat: '9.906952857971191',
    lon: '-67.379638671875',
    timezone: '-4'
  },
  {
    name: 'La Fria ',
    city: 'La Fria',
    country: 'Venezuela',
    IATA: 'LFR',
    ICAO: 'SVLF',
    lat: '8.239167213439941',
    lon: '-72.27102661132812',
    timezone: '-4'
  },
  {
    name: 'La Orchila ',
    city: 'La Orchila',
    country: 'Venezuela',
    IATA: '\\N',
    ICAO: 'SVLO',
    lat: '11.80720043182373',
    lon: '-66.17960357666016',
    timezone: '-4'
  },
  {
    name: 'La Chinita Intl ',
    city: 'Maracaibo',
    country: 'Venezuela',
    IATA: 'MAR',
    ICAO: 'SVMC',
    lat: '10.5582084656',
    lon: '-71.7278594971',
    timezone: '-4'
  },
  {
    name: 'Alberto Carnevalli ',
    city: 'Merida',
    country: 'Venezuela',
    IATA: 'MRD',
    ICAO: 'SVMD',
    lat: '8.582078',
    lon: '-71.161041',
    timezone: '-4'
  },
  {
    name: 'Del Caribe Santiago Mari\u00f1o Intl ',
    city: 'Porlamar',
    country: 'Venezuela',
    IATA: 'PMV',
    ICAO: 'SVMG',
    lat: '10.912603378295898',
    lon: '-63.96659851074219',
    timezone: '-4'
  },
  {
    name: 'Sim\u00f3n Bol\u00edvar Intl ',
    city: 'Caracas',
    country: 'Venezuela',
    IATA: 'CCS',
    ICAO: 'SVMI',
    lat: '10.601194',
    lon: '-66.991222',
    timezone: '-4'
  },
  {
    name: 'Matur\u00edn ',
    city: 'Maturin',
    country: 'Venezuela',
    IATA: 'MUN',
    ICAO: 'SVMT',
    lat: '9.75452995300293',
    lon: '-63.14739990234375',
    timezone: '-4'
  },
  {
    name: 'Cacique Aramare ',
    city: 'Puerto Ayacucho',
    country: 'Venezuela',
    IATA: 'PYH',
    ICAO: 'SVPA',
    lat: '5.6199898719788',
    lon: '-67.606101989746',
    timezone: '-4'
  },
  {
    name: 'General Bartolome Salom Intl ',
    city: 'Puerto Cabello',
    country: 'Venezuela',
    IATA: 'PBL',
    ICAO: 'SVPC',
    lat: '10.480500221252441',
    lon: '-68.072998046875',
    timezone: '-4'
  },
  {
    name: 'Paramillo ',
    city: 'San Cristobal',
    country: 'Venezuela',
    IATA: 'SCI',
    ICAO: 'SVPM',
    lat: '7.8013200759887695',
    lon: '-72.2029037475586',
    timezone: '-4'
  },
  {
    name: 'General Manuel Carlos Piar Intl ',
    city: 'Guayana',
    country: 'Venezuela',
    IATA: 'PZO',
    ICAO: 'SVPR',
    lat: '8.288530349731445',
    lon: '-62.760398864746094',
    timezone: '-4'
  },
  {
    name: 'Palmarito ',
    city: 'Palmarito',
    country: 'Venezuela',
    IATA: 'PTM',
    ICAO: 'SVPT',
    lat: '7.566669940948486',
    lon: '-70.18329620361328',
    timezone: '-4'
  },
  {
    name: 'San Antonio Del Tachira ',
    city: 'San Antonio',
    country: 'Venezuela',
    IATA: 'SVZ',
    ICAO: 'SVSA',
    lat: '7.840829849243164',
    lon: '-72.439697265625',
    timezone: '-4'
  },
  {
    name: 'Santa B\u00e1rbara de Barinas ',
    city: 'Santa Barbara',
    country: 'Venezuela',
    IATA: 'SBB',
    ICAO: 'SVSB',
    lat: '7.803514003753662',
    lon: '-71.16571807861328',
    timezone: '-4'
  },
  {
    name: 'Santa Elena de Uairen ',
    city: 'Santa Ana De Uairen',
    country: 'Venezuela',
    IATA: 'SNV',
    ICAO: 'SVSE',
    lat: '4.554999828338623',
    lon: '-61.150001525878906',
    timezone: '-4'
  },
  {
    name: 'Mayor Buenaventura Vivas Intl ',
    city: 'Santo Domingo',
    country: 'Venezuela',
    IATA: 'STD',
    ICAO: 'SVSO',
    lat: '7.56538',
    lon: '-72.035103',
    timezone: '-4'
  },
  {
    name: 'Sub Teniente Nestor Arias ',
    city: 'San Felipe',
    country: 'Venezuela',
    IATA: 'SNF',
    ICAO: 'SVSP',
    lat: '10.2787',
    lon: '-68.755203',
    timezone: '-4'
  },
  {
    name: 'San Fernando De Apure ',
    city: 'San Fernando De Apure',
    country: 'Venezuela',
    IATA: 'SFD',
    ICAO: 'SVSR',
    lat: '7.883319854736328',
    lon: '-67.44400024414062',
    timezone: '-4'
  },
  {
    name: 'San Tom\u00e9 ',
    city: 'San Tome',
    country: 'Venezuela',
    IATA: 'SOM',
    ICAO: 'SVST',
    lat: '8.9451465606689',
    lon: '-64.151084899902',
    timezone: '-4'
  },
  {
    name: 'Santa B\u00e1rbara del Zulia ',
    city: 'Santa Barbara',
    country: 'Venezuela',
    IATA: 'STB',
    ICAO: 'SVSZ',
    lat: '8.974550247192383',
    lon: '-71.94325256347656',
    timezone: '-4'
  },
  {
    name: 'Tucupita ',
    city: 'Tucupita',
    country: 'Venezuela',
    IATA: 'TUV',
    ICAO: 'SVTC',
    lat: '9.088994026184082',
    lon: '-62.094173431396484',
    timezone: '-4'
  },
  {
    name: 'Tumeremo ',
    city: 'Tumeremo',
    country: 'Venezuela',
    IATA: 'TMO',
    ICAO: 'SVTM',
    lat: '7.24938',
    lon: '-61.52893',
    timezone: '-4'
  },
  {
    name: 'Arturo Michelena Intl ',
    city: 'Valencia',
    country: 'Venezuela',
    IATA: 'VLN',
    ICAO: 'SVVA',
    lat: '10.14973258972168',
    lon: '-67.92839813232422',
    timezone: '-4'
  },
  {
    name: 'Dr. Antonio Nicol\u00e1s Brice\u00f1o ',
    city: 'Valera',
    country: 'Venezuela',
    IATA: 'VLV',
    ICAO: 'SVVL',
    lat: '9.34047794342041',
    lon: '-70.58406066894531',
    timezone: '-4'
  },
  {
    name: 'Valle de La Pascua ',
    city: 'Valle De La Pascua',
    country: 'Venezuela',
    IATA: 'VDP',
    ICAO: 'SVVP',
    lat: '9.22202777863',
    lon: '-65.9935836792',
    timezone: '-4'
  },
  {
    name: 'Linden ',
    city: 'Linden',
    country: 'Guyana',
    IATA: '\\N',
    ICAO: 'SYLD',
    lat: '5.96592',
    lon: '-58.270302',
    timezone: '-4'
  },
  {
    name: 'Lethem ',
    city: 'Lethem',
    country: 'Guyana',
    IATA: 'LTM',
    ICAO: 'SYLT',
    lat: '3.37276',
    lon: '-59.789398',
    timezone: '-4'
  },
  {
    name: 'V.C. Bird Intl ',
    city: 'Antigua',
    country: 'Antigua and Barbuda',
    IATA: 'ANU',
    ICAO: 'TAPA',
    lat: '17.1367',
    lon: '-61.792702',
    timezone: '-4'
  },
  {
    name: 'Sir Grantley Adams Intl ',
    city: 'Bridgetown',
    country: 'Barbados',
    IATA: 'BGI',
    ICAO: 'TBPB',
    lat: '13.0746002197',
    lon: '-59.4925003052',
    timezone: '-4'
  },
  {
    name: 'Canefield ',
    city: 'Canefield',
    country: 'Dominica',
    IATA: 'DCF',
    ICAO: 'TDCF',
    lat: '15.336700439453125',
    lon: '-61.3922004699707',
    timezone: '-4'
  },
  {
    name: 'Douglas-Charles ',
    city: 'Dominica',
    country: 'Dominica',
    IATA: 'DOM',
    ICAO: 'TDPD',
    lat: '15.547',
    lon: '-61.299999',
    timezone: '-4'
  },
  {
    name: 'Martinique Aim\u00e9 C\u00e9saire Intl ',
    city: 'Fort-de-france',
    country: 'Martinique',
    IATA: 'FDF',
    ICAO: 'TFFF',
    lat: '14.590999603271484',
    lon: '-61.00320053100586',
    timezone: '-4'
  },
  {
    name: "L'Esp\u00e9rance ",
    city: 'St. Martin',
    country: 'Guadeloupe',
    IATA: 'SFG',
    ICAO: 'TFFG',
    lat: '18.099899291992',
    lon: '-63.047199249268',
    timezone: '-4'
  },
  {
    name: 'Pointe-\u00e0-Pitre Le Raizet',
    city: 'Pointe-a-pitre',
    country: 'Guadeloupe',
    IATA: 'PTP',
    ICAO: 'TFFR',
    lat: '16.265301',
    lon: '-61.531799',
    timezone: '-4'
  },
  {
    name: 'Point Salines Intl ',
    city: 'Point Salines',
    country: 'Grenada',
    IATA: 'GND',
    ICAO: 'TGPY',
    lat: '12.004199981689453',
    lon: '-61.78620147705078',
    timezone: '-4'
  },
  {
    name: 'Cyril E. King ',
    city: 'St. Thomas',
    country: 'Virgin Islands',
    IATA: 'STT',
    ICAO: 'TIST',
    lat: '18.337299346923828',
    lon: '-64.97339630126953',
    timezone: '-4'
  },
  {
    name: 'Henry E Rohlsen ',
    city: 'St. Croix Island',
    country: 'Virgin Islands',
    IATA: 'STX',
    ICAO: 'TISX',
    lat: '17.701900482177734',
    lon: '-64.79859924316406',
    timezone: '-4'
  },
  {
    name: 'Rafael Hernandez ',
    city: 'Aguadilla',
    country: 'Puerto Rico',
    IATA: 'BQN',
    ICAO: 'TJBQ',
    lat: '18.49489974975586',
    lon: '-67.12940216064453',
    timezone: '-4'
  },
  {
    name: 'Diego Jimenez Torres ',
    city: 'Fajardo',
    country: 'Puerto Rico',
    IATA: 'FAJ',
    ICAO: 'TJFA',
    lat: '18.308900833129883',
    lon: '-65.66190338134766',
    timezone: '-4'
  },
  {
    name: 'Fernando Luis Ribas Dominicci ',
    city: 'San Juan',
    country: 'Puerto Rico',
    IATA: 'SIG',
    ICAO: 'TJIG',
    lat: '18.45680046081543',
    lon: '-66.09809875488281',
    timezone: '-4'
  },
  {
    name: 'Eugenio Maria De Hostos ',
    city: 'Mayaguez',
    country: 'Puerto Rico',
    IATA: 'MAZ',
    ICAO: 'TJMZ',
    lat: '18.255699157714844',
    lon: '-67.14849853515625',
    timezone: '-4'
  },
  {
    name: 'Mercedita ',
    city: 'Ponce',
    country: 'Puerto Rico',
    IATA: 'PSE',
    ICAO: 'TJPS',
    lat: '18.00830078125',
    lon: '-66.56300354003906',
    timezone: '-4'
  },
  {
    name: 'Luis Munoz Marin Intl ',
    city: 'San Juan',
    country: 'Puerto Rico',
    IATA: 'SJU',
    ICAO: 'TJSJ',
    lat: '18.4393997192',
    lon: '-66.0018005371',
    timezone: '-4'
  },
  {
    name: 'Robert L. Bradshaw Intl ',
    city: 'Basse Terre',
    country: 'Saint Kitts and Nevis',
    IATA: 'SKB',
    ICAO: 'TKPK',
    lat: '17.311199188232422',
    lon: '-62.71870040893555',
    timezone: '-4'
  },
  {
    name: 'George F. L. Charles ',
    city: 'Castries',
    country: 'Saint Lucia',
    IATA: 'SLU',
    ICAO: 'TLPC',
    lat: '14.0202',
    lon: '-60.992901',
    timezone: '-4'
  },
  {
    name: 'Hewanorra Intl ',
    city: 'Hewandorra',
    country: 'Saint Lucia',
    IATA: 'UVF',
    ICAO: 'TLPL',
    lat: '13.7332',
    lon: '-60.952599',
    timezone: '-4'
  },
  {
    name: 'Queen Beatrix Intl ',
    city: 'Oranjestad',
    country: 'Aruba',
    IATA: 'AUA',
    ICAO: 'TNCA',
    lat: '12.5014',
    lon: '-70.015198',
    timezone: '-4'
  },
  {
    name: 'Flamingo Intl ',
    city: 'Kralendijk',
    country: 'Netherlands Antilles',
    IATA: 'BON',
    ICAO: 'TNCB',
    lat: '12.130999565124512',
    lon: '-68.26850128173828',
    timezone: '-4'
  },
  {
    name: 'Hato Intl ',
    city: 'Willemstad',
    country: 'Netherlands Antilles',
    IATA: 'CUR',
    ICAO: 'TNCC',
    lat: '12.1889',
    lon: '-68.959801',
    timezone: '-4'
  },
  {
    name: 'F. D. Roosevelt ',
    city: 'Oranjestad',
    country: 'Netherlands Antilles',
    IATA: 'EUX',
    ICAO: 'TNCE',
    lat: '17.49650001525879',
    lon: '-62.979400634765625',
    timezone: '-4'
  },
  {
    name: 'Princess Juliana Intl ',
    city: 'Philipsburg',
    country: 'Netherlands Antilles',
    IATA: 'SXM',
    ICAO: 'TNCM',
    lat: '18.041000366200002',
    lon: '-63.1088981628',
    timezone: '-4'
  },
  {
    name: 'Clayton J Lloyd Intl ',
    city: 'The Valley',
    country: 'Anguilla',
    IATA: 'AXA',
    ICAO: 'TQPF',
    lat: '18.2048',
    lon: '-63.055099',
    timezone: '-4'
  },
  {
    name: 'Tobago-Crown Point ',
    city: 'Scarborough',
    country: 'Trinidad and Tobago',
    IATA: 'TAB',
    ICAO: 'TTCP',
    lat: '11.149700164794922',
    lon: '-60.83219909667969',
    timezone: '-4'
  },
  {
    name: 'Piarco Intl ',
    city: 'Port-of-spain',
    country: 'Trinidad and Tobago',
    IATA: 'POS',
    ICAO: 'TTPP',
    lat: '10.595399856567383',
    lon: '-61.33720016479492',
    timezone: '-4'
  },
  {
    name: 'Terrance B. Lettsome Intl ',
    city: 'Tortola',
    country: 'British Virgin Islands',
    IATA: 'EIS',
    ICAO: 'TUPJ',
    lat: '18.444799423217773',
    lon: '-64.54299926757812',
    timezone: '-4'
  },
  {
    name: 'Canouan ',
    city: 'Canouan Island',
    country: 'Saint Vincent and the Grenadines',
    IATA: 'CIW',
    ICAO: 'TVSC',
    lat: '12.699',
    lon: '-61.3424',
    timezone: '-4'
  },
  {
    name: 'Mustique ',
    city: 'Mustique',
    country: 'Saint Vincent and the Grenadines',
    IATA: 'MQS',
    ICAO: 'TVSM',
    lat: '12.887900352478027',
    lon: '-61.180198669433594',
    timezone: '-4'
  },
  {
    name: 'Argyle Intl ',
    city: 'Kingstown',
    country: 'Saint Vincent and the Grenadines',
    IATA: 'SVD',
    ICAO: 'TVSA',
    lat: '13.156695',
    lon: '-61.149945',
    timezone: '-4'
  },
  {
    name: 'Almaty ',
    city: 'Alma-ata',
    country: 'Kazakhstan',
    IATA: 'ALA',
    ICAO: 'UAAA',
    lat: '43.35210037231445',
    lon: '77.04049682617188',
    timezone: '6'
  },
  {
    name: 'Balkhash ',
    city: 'Balkhash',
    country: 'Kazakhstan',
    IATA: 'BXH',
    ICAO: 'UAAH',
    lat: '46.8932991027832',
    lon: '75.00499725341797',
    timezone: '6'
  },
  {
    name: 'Astana Intl ',
    city: 'Tselinograd',
    country: 'Kazakhstan',
    IATA: 'TSE',
    ICAO: 'UACC',
    lat: '51.02220153808594',
    lon: '71.46690368652344',
    timezone: '6'
  },
  {
    name: 'Taraz ',
    city: 'Dzhambul',
    country: 'Kazakhstan',
    IATA: 'DMB',
    ICAO: 'UADD',
    lat: '42.853599548339844',
    lon: '71.30359649658203',
    timezone: '6'
  },
  {
    name: 'Manas Intl ',
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    IATA: 'FRU',
    ICAO: 'UAFM',
    lat: '43.0612983704',
    lon: '74.4776000977',
    timezone: '6'
  },
  {
    name: 'Osh ',
    city: 'Osh',
    country: 'Kyrgyzstan',
    IATA: 'OSS',
    ICAO: 'UAFO',
    lat: '40.6090011597',
    lon: '72.793296814',
    timezone: '6'
  },
  {
    name: 'Shymkent ',
    city: 'Chimkent',
    country: 'Kazakhstan',
    IATA: 'CIT',
    ICAO: 'UAII',
    lat: '42.364200592041016',
    lon: '69.47889709472656',
    timezone: '6'
  },
  {
    name: 'Uralsk ',
    city: 'Uralsk',
    country: 'Kazakhstan',
    IATA: 'URA',
    ICAO: 'UARR',
    lat: '51.15079879760742',
    lon: '51.54309844970703',
    timezone: '5'
  },
  {
    name: 'Pavlodar ',
    city: 'Pavlodar',
    country: 'Kazakhstan',
    IATA: 'PWQ',
    ICAO: 'UASP',
    lat: '52.19499969482422',
    lon: '77.07389831542969',
    timezone: '6'
  },
  {
    name: 'Semipalatinsk ',
    city: 'Semiplatinsk',
    country: 'Kazakhstan',
    IATA: 'PLX',
    ICAO: 'UASS',
    lat: '50.351295',
    lon: '80.234398',
    timezone: '6'
  },
  {
    name: 'Aktobe ',
    city: 'Aktyubinsk',
    country: 'Kazakhstan',
    IATA: 'AKX',
    ICAO: 'UATT',
    lat: '50.2458',
    lon: '57.206699',
    timezone: '5'
  },
  {
    name: 'Heydar Aliyev Intl ',
    city: 'Baku',
    country: 'Azerbaijan',
    IATA: 'GYD',
    ICAO: 'UBBB',
    lat: '40.467498779296875',
    lon: '50.04669952392578',
    timezone: '4'
  },
  {
    name: 'Yakutsk ',
    city: 'Yakutsk',
    country: 'Russia',
    IATA: 'YKS',
    ICAO: 'UEEE',
    lat: '62.093299865722656',
    lon: '129.77099609375',
    timezone: '9'
  },
  {
    name: 'Mirny ',
    city: 'Mirnyj',
    country: 'Russia',
    IATA: 'MJZ',
    ICAO: 'UERR',
    lat: '62.534698486328125',
    lon: '114.03900146484375',
    timezone: '9'
  },
  {
    name: 'Ignatyevo ',
    city: 'Blagoveschensk',
    country: 'Russia',
    IATA: 'BQS',
    ICAO: 'UHBB',
    lat: '50.42539978027344',
    lon: '127.41200256347656',
    timezone: '9'
  },
  {
    name: 'Khabarovsk-Novy ',
    city: 'Khabarovsk',
    country: 'Russia',
    IATA: 'KHV',
    ICAO: 'UHHH',
    lat: '48.52799987793',
    lon: '135.18800354004',
    timezone: '10'
  },
  {
    name: 'Provideniya Bay ',
    city: 'Provideniya Bay',
    country: 'Russia',
    IATA: 'PVS',
    ICAO: 'UHMD',
    lat: '64.37809753417969',
    lon: '-173.2429962158203',
    timezone: '12'
  },
  {
    name: 'Sokol ',
    city: 'Magadan',
    country: 'Russia',
    IATA: 'GDX',
    ICAO: 'UHMM',
    lat: '59.9109992980957',
    lon: '150.72000122070312',
    timezone: '11'
  },
  {
    name: 'Pevek ',
    city: 'Pevek',
    country: 'Russia',
    IATA: 'PWE',
    ICAO: 'UHMP',
    lat: '69.783302307129',
    lon: '170.59700012207',
    timezone: '12'
  },
  {
    name: 'Yelizovo ',
    city: 'Petropavlovsk',
    country: 'Russia',
    IATA: 'PKC',
    ICAO: 'UHPP',
    lat: '53.16790008544922',
    lon: '158.45399475097656',
    timezone: '12'
  },
  {
    name: 'Yuzhno-Sakhalinsk ',
    city: 'Yuzhno-sakhalinsk',
    country: 'Russia',
    IATA: 'UUS',
    ICAO: 'UHSS',
    lat: '46.88869857788086',
    lon: '142.71800231933594',
    timezone: '11'
  },
  {
    name: 'Vladivostok Intl ',
    city: 'Vladivostok',
    country: 'Russia',
    IATA: 'VVO',
    ICAO: 'UHWW',
    lat: '43.39899826049805',
    lon: '132.1479949951172',
    timezone: '10'
  },
  {
    name: 'Chita-Kadala ',
    city: 'Chita',
    country: 'Russia',
    IATA: 'HTA',
    ICAO: 'UIAA',
    lat: '52.026299',
    lon: '113.306',
    timezone: '9'
  },
  {
    name: 'Bratsk ',
    city: 'Bratsk',
    country: 'Russia',
    IATA: 'BTK',
    ICAO: 'UIBB',
    lat: '56.370601654052734',
    lon: '101.697998046875',
    timezone: '8'
  },
  {
    name: 'Irkutsk ',
    city: 'Irkutsk',
    country: 'Russia',
    IATA: 'IKT',
    ICAO: 'UIII',
    lat: '52.268001556396',
    lon: '104.38899993896',
    timezone: '8'
  },
  {
    name: 'Ulan-Ude  (Mukhino)',
    city: 'Ulan-ude',
    country: 'Russia',
    IATA: 'UUD',
    ICAO: 'UIUU',
    lat: '51.80780029296875',
    lon: '107.43800354003906',
    timezone: '8'
  },
  {
    name: 'Boryspil Intl ',
    city: 'Kiev',
    country: 'Ukraine',
    IATA: 'KBP',
    ICAO: 'UKBB',
    lat: '50.345001220703125',
    lon: '30.894699096679688',
    timezone: '2'
  },
  {
    name: 'Donetsk Intl ',
    city: 'Donetsk',
    country: 'Ukraine',
    IATA: 'DOK',
    ICAO: 'UKCC',
    lat: '48.07360076904297',
    lon: '37.73970031738281',
    timezone: '2'
  },
  {
    name: 'Dnipropetrovsk Intl ',
    city: 'Dnepropetrovsk',
    country: 'Ukraine',
    IATA: 'DNK',
    ICAO: 'UKDD',
    lat: '48.357200622558594',
    lon: '35.10060119628906',
    timezone: '2'
  },
  {
    name: 'Simferopol Intl ',
    city: 'Simferopol',
    country: 'Ukraine',
    IATA: 'SIP',
    ICAO: 'UKFF',
    lat: '45.05220031738281',
    lon: '33.975101470947266',
    timezone: '3'
  },
  {
    name: 'Kiev Zhuliany Intl ',
    city: 'Kiev',
    country: 'Ukraine',
    IATA: 'IEV',
    ICAO: 'UKKK',
    lat: '50.40194',
    lon: '30.45194',
    timezone: '2'
  },
  {
    name: 'Lviv Intl ',
    city: 'Lvov',
    country: 'Ukraine',
    IATA: 'LWO',
    ICAO: 'UKLL',
    lat: '49.8125',
    lon: '23.956100463867188',
    timezone: '2'
  },
  {
    name: 'Odessa Intl ',
    city: 'Odessa',
    country: 'Ukraine',
    IATA: 'ODS',
    ICAO: 'UKOO',
    lat: '46.42679977416992',
    lon: '30.67650032043457',
    timezone: '2'
  },
  {
    name: 'Pulkovo ',
    city: 'St. Petersburg',
    country: 'Russia',
    IATA: 'LED',
    ICAO: 'ULLI',
    lat: '59.80030059814453',
    lon: '30.262500762939453',
    timezone: '3'
  },
  {
    name: 'Murmansk ',
    city: 'Murmansk',
    country: 'Russia',
    IATA: 'MMK',
    ICAO: 'ULMM',
    lat: '68.78170013427734',
    lon: '32.75080108642578',
    timezone: '3'
  },
  {
    name: 'Gomel ',
    city: 'Gomel',
    country: 'Belarus',
    IATA: 'GME',
    ICAO: 'UMGG',
    lat: '52.527000427246094',
    lon: '31.016700744628906',
    timezone: '3'
  },
  {
    name: 'Vitebsk Vostochny ',
    city: 'Vitebsk',
    country: 'Belarus',
    IATA: 'VTB',
    ICAO: 'UMII',
    lat: '55.126499176025',
    lon: '30.349599838257',
    timezone: '3'
  },
  {
    name: 'Khrabrovo ',
    city: 'Kaliningrad',
    country: 'Russia',
    IATA: 'KGD',
    ICAO: 'UMKK',
    lat: '54.88999938964844',
    lon: '20.592599868774414',
    timezone: '2'
  },
  {
    name: 'Minsk 1 ',
    city: 'Minsk',
    country: 'Belarus',
    IATA: 'MHP',
    ICAO: 'UMMM',
    lat: '53.864498138427734',
    lon: '27.53969955444336',
    timezone: '3'
  },
  {
    name: 'Minsk National ',
    city: 'Minsk 2',
    country: 'Belarus',
    IATA: 'MSQ',
    ICAO: 'UMMS',
    lat: '53.882499694824',
    lon: '28.030700683594',
    timezone: '3'
  },
  {
    name: 'Abakan ',
    city: 'Abakan',
    country: 'Russia',
    IATA: 'ABA',
    ICAO: 'UNAA',
    lat: '53.7400016784668',
    lon: '91.38500213623047',
    timezone: '7'
  },
  {
    name: 'Barnaul ',
    city: 'Barnaul',
    country: 'Russia',
    IATA: 'BAX',
    ICAO: 'UNBB',
    lat: '53.363800048828125',
    lon: '83.53849792480469',
    timezone: '7'
  },
  {
    name: 'Kemerovo ',
    city: 'Kemorovo',
    country: 'Russia',
    IATA: 'KEJ',
    ICAO: 'UNEE',
    lat: '55.27009963989258',
    lon: '86.1072006225586',
    timezone: '7'
  },
  {
    name: 'Omsk Central ',
    city: 'Omsk',
    country: 'Russia',
    IATA: 'OMS',
    ICAO: 'UNOO',
    lat: '54.96699905395508',
    lon: '73.31050109863281',
    timezone: '6'
  },
  {
    name: 'Krasnodar Pashkovsky Intl ',
    city: 'Krasnodar',
    country: 'Russia',
    IATA: 'KRR',
    ICAO: 'URKK',
    lat: '45.034698486328',
    lon: '39.170501708984',
    timezone: '3'
  },
  {
    name: 'Uytash ',
    city: 'Makhachkala',
    country: 'Russia',
    IATA: 'MCX',
    ICAO: 'URML',
    lat: '42.81679916381836',
    lon: '47.65230178833008',
    timezone: '3'
  },
  {
    name: 'Mineralnyye Vody ',
    city: 'Mineralnye Vody',
    country: 'Russia',
    IATA: 'MRV',
    ICAO: 'URMM',
    lat: '44.225101470947266',
    lon: '43.08190155029297',
    timezone: '3'
  },
  {
    name: 'Stavropol Shpakovskoye ',
    city: 'Stavropol',
    country: 'Russia',
    IATA: 'STW',
    ICAO: 'URMT',
    lat: '45.10919952392578',
    lon: '42.11280059814453',
    timezone: '3'
  },
  {
    name: 'Platov Intl ',
    city: 'Rostov',
    country: 'Russia',
    IATA: 'ROV',
    ICAO: 'URRP',
    lat: '47.493888',
    lon: '39.924722',
    timezone: '3'
  },
  {
    name: 'Sochi Intl ',
    city: 'Sochi',
    country: 'Russia',
    IATA: 'AER',
    ICAO: 'URSS',
    lat: '43.449902',
    lon: '39.9566',
    timezone: '3'
  },
  {
    name: 'Astrakhan ',
    city: 'Astrakhan',
    country: 'Russia',
    IATA: 'ASF',
    ICAO: 'URWA',
    lat: '46.2832984924',
    lon: '48.0063018799',
    timezone: '4'
  },
  {
    name: 'Volgograd Intl ',
    city: 'Volgograd',
    country: 'Russia',
    IATA: 'VOG',
    ICAO: 'URWW',
    lat: '48.782501220703125',
    lon: '44.34550094604492',
    timezone: '3'
  },
  {
    name: 'Chelyabinsk Balandino ',
    city: 'Chelyabinsk',
    country: 'Russia',
    IATA: 'CEK',
    ICAO: 'USCC',
    lat: '55.305801',
    lon: '61.5033',
    timezone: '5'
  },
  {
    name: 'Magnitogorsk Intl ',
    city: 'Magnetiogorsk',
    country: 'Russia',
    IATA: 'MQF',
    ICAO: 'USCM',
    lat: '53.39310073852539',
    lon: '58.755699157714844',
    timezone: '5'
  },
  {
    name: 'Nizhnevartovsk ',
    city: 'Nizhnevartovsk',
    country: 'Russia',
    IATA: 'NJC',
    ICAO: 'USNN',
    lat: '60.94929885864258',
    lon: '76.48359680175781',
    timezone: '5'
  },
  {
    name: 'Bolshoye Savino ',
    city: 'Perm',
    country: 'Russia',
    IATA: 'PEE',
    ICAO: 'USPP',
    lat: '57.914501190186',
    lon: '56.021198272705',
    timezone: '5'
  },
  {
    name: 'Surgut ',
    city: 'Surgut',
    country: 'Russia',
    IATA: 'SGC',
    ICAO: 'USRR',
    lat: '61.34370040893555',
    lon: '73.40180206298828',
    timezone: '5'
  },
  {
    name: 'Koltsovo ',
    city: 'Yekaterinburg',
    country: 'Russia',
    IATA: 'SVX',
    ICAO: 'USSS',
    lat: '56.743099212646',
    lon: '60.802700042725',
    timezone: '5'
  },
  {
    name: 'Ashgabat Intl ',
    city: 'Ashkhabad',
    country: 'Turkmenistan',
    IATA: 'ASB',
    ICAO: 'UTAA',
    lat: '37.986801',
    lon: '58.361',
    timezone: '5'
  },
  {
    name: 'Turkmenbashi ',
    city: 'Krasnovodsk',
    country: 'Turkmenistan',
    IATA: 'KRW',
    ICAO: 'UTAK',
    lat: '40.063301',
    lon: '53.007198',
    timezone: '5'
  },
  {
    name: 'Turkmenabat ',
    city: 'Chardzhou',
    country: 'Turkmenistan',
    IATA: 'CRZ',
    ICAO: 'UTAV',
    lat: '39.08330154418945',
    lon: '63.61330032348633',
    timezone: '5'
  },
  {
    name: 'Dushanbe ',
    city: 'Dushanbe',
    country: 'Tajikistan',
    IATA: 'DYU',
    ICAO: 'UTDD',
    lat: '38.543300628699996',
    lon: '68.8249969482',
    timezone: '5'
  },
  {
    name: 'Bukhara ',
    city: 'Bukhara',
    country: 'Uzbekistan',
    IATA: 'BHK',
    ICAO: 'UTSB',
    lat: '39.775001525878906',
    lon: '64.4832992553711',
    timezone: '5'
  },
  {
    name: 'Samarkand ',
    city: 'Samarkand',
    country: 'Uzbekistan',
    IATA: 'SKD',
    ICAO: 'UTSS',
    lat: '39.70050048828125',
    lon: '66.98380279541016',
    timezone: '5'
  },
  {
    name: 'Tashkent Intl ',
    city: 'Tashkent',
    country: 'Uzbekistan',
    IATA: 'TAS',
    ICAO: 'UTTT',
    lat: '41.257900238',
    lon: '69.2811965942',
    timezone: '5'
  },
  {
    name: 'Bryansk ',
    city: 'Bryansk',
    country: 'Russia',
    IATA: 'BZK',
    ICAO: 'UUBP',
    lat: '53.214199',
    lon: '34.176399',
    timezone: '3'
  },
  {
    name: 'Sheremetyevo Intl ',
    city: 'Moscow',
    country: 'Russia',
    IATA: 'SVO',
    ICAO: 'UUEE',
    lat: '55.972599',
    lon: '37.4146',
    timezone: '3'
  },
  {
    name: 'Migalovo Air Base',
    city: 'Tver',
    country: 'Russia',
    IATA: 'KLD',
    ICAO: 'UUEM',
    lat: '56.82469940185547',
    lon: '35.7577018737793',
    timezone: '3'
  },
  {
    name: 'Voronezh Intl ',
    city: 'Voronezh',
    country: 'Russia',
    IATA: 'VOZ',
    ICAO: 'UUOO',
    lat: '51.81420135498047',
    lon: '39.22959899902344',
    timezone: '3'
  },
  {
    name: 'Vnukovo Intl ',
    city: 'Moscow',
    country: 'Russia',
    IATA: 'VKO',
    ICAO: 'UUWW',
    lat: '55.5914993286',
    lon: '37.2615013123',
    timezone: '3'
  },
  {
    name: 'Syktyvkar ',
    city: 'Syktyvkar',
    country: 'Russia',
    IATA: 'SCW',
    ICAO: 'UUYY',
    lat: '61.64699935913086',
    lon: '50.84510040283203',
    timezone: '3'
  },
  {
    name: 'Kazan Intl ',
    city: 'Kazan',
    country: 'Russia',
    IATA: 'KZN',
    ICAO: 'UWKD',
    lat: '55.606201171875',
    lon: '49.278701782227',
    timezone: '3'
  },
  {
    name: 'Orenburg Central ',
    city: 'Orenburg',
    country: 'Russia',
    IATA: 'REN',
    ICAO: 'UWOO',
    lat: '51.795799255371094',
    lon: '55.45669937133789',
    timezone: '5'
  },
  {
    name: 'Ufa Intl ',
    city: 'Ufa',
    country: 'Russia',
    IATA: 'UFA',
    ICAO: 'UWUU',
    lat: '54.557498931885',
    lon: '55.874401092529',
    timezone: '5'
  },
  {
    name: 'Kurumoch Intl ',
    city: 'Samara',
    country: 'Russia',
    IATA: 'KUF',
    ICAO: 'UWWW',
    lat: '53.504901885986',
    lon: '50.16429901123',
    timezone: '4'
  },
  {
    name: 'Sardar Vallabhbhai Patel Intl ',
    city: 'Ahmedabad',
    country: 'India',
    IATA: 'AMD',
    ICAO: 'VAAH',
    lat: '23.0771999359',
    lon: '72.63469696039999',
    timezone: '5.5'
  },
  {
    name: 'Akola ',
    city: 'Akola',
    country: 'India',
    IATA: 'AKD',
    ICAO: 'VAAK',
    lat: '20.698999',
    lon: '77.058601',
    timezone: '5.5'
  },
  {
    name: 'Aurangabad ',
    city: 'Aurangabad',
    country: 'India',
    IATA: 'IXU',
    ICAO: 'VAAU',
    lat: '19.862699508666992',
    lon: '75.39810180664062',
    timezone: '5.5'
  },
  {
    name: 'Chhatrapati Shivaji Intl ',
    city: 'Mumbai',
    country: 'India',
    IATA: 'BOM',
    ICAO: 'VABB',
    lat: '19.0886993408',
    lon: '72.8678970337',
    timezone: '5.5'
  },
  {
    name: 'Bilaspur ',
    city: 'Bilaspur',
    country: 'India',
    IATA: 'PAB',
    ICAO: 'VABI',
    lat: '21.9884',
    lon: '82.111',
    timezone: '5.5'
  },
  {
    name: 'Bhuj ',
    city: 'Bhuj',
    country: 'India',
    IATA: 'BHJ',
    ICAO: 'VABJ',
    lat: '23.2877998352',
    lon: '69.6701965332',
    timezone: '5.5'
  },
  {
    name: 'Belgaum ',
    city: 'Belgaum',
    country: 'India',
    IATA: 'IXG',
    ICAO: 'VABM',
    lat: '15.859299659700001',
    lon: '74.6183013916',
    timezone: '5.5'
  },
  {
    name: 'Vadodara ',
    city: 'Baroda',
    country: 'India',
    IATA: 'BDQ',
    ICAO: 'VABO',
    lat: '22.336201',
    lon: '73.226303',
    timezone: '5.5'
  },
  {
    name: 'Raja Bhoj Intl ',
    city: 'Bhopal',
    country: 'India',
    IATA: 'BHO',
    ICAO: 'VABP',
    lat: '23.2875003815',
    lon: '77.3374023438',
    timezone: '5.5'
  },
  {
    name: 'Bhavnagar ',
    city: 'Bhaunagar',
    country: 'India',
    IATA: 'BHU',
    ICAO: 'VABV',
    lat: '21.752199173',
    lon: '72.1852035522',
    timezone: '5.5'
  },
  {
    name: 'Daman ',
    city: 'Daman',
    country: 'India',
    IATA: 'NMB',
    ICAO: 'VADN',
    lat: '20.43440055847168',
    lon: '72.84320068359375',
    timezone: '5.5'
  },
  {
    name: 'Deesa ',
    city: 'Deesa',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VADS',
    lat: '24.267900466918945',
    lon: '72.20439910888672',
    timezone: '5.5'
  },
  {
    name: 'Guna ',
    city: 'Guna',
    country: 'India',
    IATA: 'GUX',
    ICAO: 'VAGN',
    lat: '24.654699',
    lon: '77.347298',
    timezone: '5.5'
  },
  {
    name: 'Dabolim ',
    city: 'Goa',
    country: 'India',
    IATA: 'GOI',
    ICAO: 'VAGO',
    lat: '15.3808002472',
    lon: '73.8313980103',
    timezone: '5.5'
  },
  {
    name: 'Devi Ahilyabai Holkar ',
    city: 'Indore',
    country: 'India',
    IATA: 'IDR',
    ICAO: 'VAID',
    lat: '22.7217998505',
    lon: '75.8011016846',
    timezone: '5.5'
  },
  {
    name: 'Jabalpur ',
    city: 'Jabalpur',
    country: 'India',
    IATA: 'JLR',
    ICAO: 'VAJB',
    lat: '23.177799224853516',
    lon: '80.052001953125',
    timezone: '5.5'
  },
  {
    name: 'Jamnagar ',
    city: 'Jamnagar',
    country: 'India',
    IATA: 'JGA',
    ICAO: 'VAJM',
    lat: '22.465499877929688',
    lon: '70.01260375976562',
    timezone: '5.5'
  },
  {
    name: 'Kandla ',
    city: 'Kandla',
    country: 'India',
    IATA: 'IXY',
    ICAO: 'VAKE',
    lat: '23.1127',
    lon: '70.100304',
    timezone: '5.5'
  },
  {
    name: 'Khajuraho ',
    city: 'Khajuraho',
    country: 'India',
    IATA: 'HJR',
    ICAO: 'VAKJ',
    lat: '24.817199707',
    lon: '79.91860198970001',
    timezone: '5.5'
  },
  {
    name: 'Kolhapur ',
    city: 'Kolhapur',
    country: 'India',
    IATA: 'KLH',
    ICAO: 'VAKP',
    lat: '16.6646995544',
    lon: '74.2893981934',
    timezone: '5.5'
  },
  {
    name: 'Keshod ',
    city: 'Keshod',
    country: 'India',
    IATA: 'IXK',
    ICAO: 'VAKS',
    lat: '21.317100524902344',
    lon: '70.27040100097656',
    timezone: '5.5'
  },
  {
    name: 'Dr. Babasaheb Ambedkar Intl ',
    city: 'Nagpur',
    country: 'India',
    IATA: 'NAG',
    ICAO: 'VANP',
    lat: '21.092199325561523',
    lon: '79.04720306396484',
    timezone: '5.5'
  },
  {
    name: 'Nashik ',
    city: 'Nasik Road',
    country: 'India',
    IATA: 'ISK',
    ICAO: 'VAOZ',
    lat: '20.119101',
    lon: '73.912903',
    timezone: '5.5'
  },
  {
    name: 'Pune ',
    city: 'Pune',
    country: 'India',
    IATA: 'PNQ',
    ICAO: 'VAPO',
    lat: '18.58209991455078',
    lon: '73.9197006225586',
    timezone: '5.5'
  },
  {
    name: 'Porbandar ',
    city: 'Porbandar',
    country: 'India',
    IATA: 'PBD',
    ICAO: 'VAPR',
    lat: '21.6487007141',
    lon: '69.65720367429999',
    timezone: '5.5'
  },
  {
    name: 'Rajkot ',
    city: 'Rajkot',
    country: 'India',
    IATA: 'RAJ',
    ICAO: 'VARK',
    lat: '22.3092002869',
    lon: '70.77950286869999',
    timezone: '5.5'
  },
  {
    name: 'Raipur ',
    city: 'Raipur',
    country: 'India',
    IATA: 'RPR',
    ICAO: 'VARP',
    lat: '21.180401',
    lon: '81.7388',
    timezone: '5.5'
  },
  {
    name: 'Solapur ',
    city: 'Sholapur',
    country: 'India',
    IATA: 'SSE',
    ICAO: 'VASL',
    lat: '17.6280002594',
    lon: '75.93479919430001',
    timezone: '5.5'
  },
  {
    name: 'Surat ',
    city: 'Surat',
    country: 'India',
    IATA: 'STV',
    ICAO: 'VASU',
    lat: '21.1140995026',
    lon: '72.7417984009',
    timezone: '5.5'
  },
  {
    name: 'Maharana Pratap ',
    city: 'Udaipur',
    country: 'India',
    IATA: 'UDR',
    ICAO: 'VAUD',
    lat: '24.617700576799997',
    lon: '73.89610290530001',
    timezone: '5.5'
  },
  {
    name: 'Bandaranaike Intl Colombo ',
    city: 'Colombo',
    country: 'Sri Lanka',
    IATA: 'CMB',
    ICAO: 'VCBI',
    lat: '7.180759906768799',
    lon: '79.88410186767578',
    timezone: '5.5'
  },
  {
    name: 'Anuradhapura Air Force Base',
    city: 'Anuradhapura',
    country: 'Sri Lanka',
    IATA: 'ACJ',
    ICAO: 'VCCA',
    lat: '8.30148983002',
    lon: '80.42790222170001',
    timezone: '5.5'
  },
  {
    name: 'Batticaloa ',
    city: 'Batticaloa',
    country: 'Sri Lanka',
    IATA: 'BTC',
    ICAO: 'VCCB',
    lat: '7.70576',
    lon: '81.678802',
    timezone: '5.5'
  },
  {
    name: 'Colombo Ratmalana ',
    city: 'Colombo',
    country: 'Sri Lanka',
    IATA: 'RML',
    ICAO: 'VCCC',
    lat: '6.821990013122559',
    lon: '79.88619995117188',
    timezone: '5.5'
  },
  {
    name: 'Ampara ',
    city: 'Galoya',
    country: 'Sri Lanka',
    IATA: 'ADP',
    ICAO: 'VCCG',
    lat: '7.33776',
    lon: '81.62594',
    timezone: '5.5'
  },
  {
    name: 'Kankesanturai ',
    city: 'Jaffna',
    country: 'Sri Lanka',
    IATA: 'JAF',
    ICAO: 'VCCJ',
    lat: '9.792329788208008',
    lon: '80.07009887695312',
    timezone: '5.5'
  },
  {
    name: 'China Bay ',
    city: 'Trinciomalee',
    country: 'Sri Lanka',
    IATA: 'TRR',
    ICAO: 'VCCT',
    lat: '8.5385103225708',
    lon: '81.18190002441406',
    timezone: '5.5'
  },
  {
    name: 'Kampong Chhnang ',
    city: 'Kompong Chnang',
    country: 'Cambodia',
    IATA: 'KZC',
    ICAO: 'VDKH',
    lat: '12.255200386',
    lon: '104.564002991',
    timezone: '7'
  },
  {
    name: 'Phnom Penh Intl ',
    city: 'Phnom-penh',
    country: 'Cambodia',
    IATA: 'PNH',
    ICAO: 'VDPP',
    lat: '11.546600341796875',
    lon: '104.84400177001953',
    timezone: '7'
  },
  {
    name: 'Siem Reap Intl ',
    city: 'Siem-reap',
    country: 'Cambodia',
    IATA: 'REP',
    ICAO: 'VDSR',
    lat: '13.410699844400002',
    lon: '103.81300354',
    timezone: '7'
  },
  {
    name: 'Stung Treng ',
    city: 'Stung Treng',
    country: 'Cambodia',
    IATA: 'TNX',
    ICAO: 'VDST',
    lat: '13.531900405883789',
    lon: '106.01499938964844',
    timezone: '7'
  },
  {
    name: 'Along ',
    city: 'Along',
    country: 'India',
    IATA: 'IXV',
    ICAO: 'VEAN',
    lat: '28.17530059814453',
    lon: '94.802001953125',
    timezone: '5.5'
  },
  {
    name: 'Agartala ',
    city: 'Agartala',
    country: 'India',
    IATA: 'IXA',
    ICAO: 'VEAT',
    lat: '23.8869991302',
    lon: '91.24040222170001',
    timezone: '5.5'
  },
  {
    name: 'Lengpui ',
    city: 'Aizwal',
    country: 'India',
    IATA: 'AJL',
    ICAO: 'VELP',
    lat: '23.840599060099997',
    lon: '92.6196975708',
    timezone: '5.5'
  },
  {
    name: 'Bagdogra ',
    city: 'Baghdogra',
    country: 'India',
    IATA: 'IXB',
    ICAO: 'VEBD',
    lat: '26.68120002746582',
    lon: '88.32859802246094',
    timezone: '5.5'
  },
  {
    name: 'Bokaro ',
    city: 'Bokaro',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEBK',
    lat: '23.64349937438965',
    lon: '86.1489028930664',
    timezone: '5.5'
  },
  {
    name: 'Biju Patnaik ',
    city: 'Bhubaneswar',
    country: 'India',
    IATA: 'BBI',
    ICAO: 'VEBS',
    lat: '20.244400024399997',
    lon: '85.8178024292',
    timezone: '5.5'
  },
  {
    name: 'Netaji Subhash Chandra Bose Intl ',
    city: 'Kolkata',
    country: 'India',
    IATA: 'CCU',
    ICAO: 'VECC',
    lat: '22.654699325561523',
    lon: '88.44670104980469',
    timezone: '5.5'
  },
  {
    name: 'Cooch Behar ',
    city: 'Cooch-behar',
    country: 'India',
    IATA: 'COH',
    ICAO: 'VECO',
    lat: '26.330499649',
    lon: '89.4672012329',
    timezone: '5.5'
  },
  {
    name: 'Dhanbad ',
    city: 'Dhanbad',
    country: 'India',
    IATA: 'DBD',
    ICAO: 'VEDB',
    lat: '23.833999633789062',
    lon: '86.42530059814453',
    timezone: '5.5'
  },
  {
    name: 'Gaya ',
    city: 'Gaya',
    country: 'India',
    IATA: 'GAY',
    ICAO: 'VEGY',
    lat: '24.744300842285156',
    lon: '84.95120239257812',
    timezone: '5.5'
  },
  {
    name: 'Hirakud ',
    city: 'Hirakud',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEHK',
    lat: '21.5802001953125',
    lon: '84.00569915771484',
    timezone: '5.5'
  },
  {
    name: 'Imphal ',
    city: 'Imphal',
    country: 'India',
    IATA: 'IMF',
    ICAO: 'VEIM',
    lat: '24.7600002289',
    lon: '93.896697998',
    timezone: '5.5'
  },
  {
    name: 'Jharsuguda ',
    city: 'Jharsuguda',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEJH',
    lat: '21.91349983215332',
    lon: '84.05039978027344',
    timezone: '5.5'
  },
  {
    name: 'Sonari ',
    city: 'Jamshedpur',
    country: 'India',
    IATA: 'IXW',
    ICAO: 'VEJS',
    lat: '22.8132',
    lon: '86.1688',
    timezone: '5.5'
  },
  {
    name: 'Jorhat ',
    city: 'Jorhat',
    country: 'India',
    IATA: 'JRH',
    ICAO: 'VEJT',
    lat: '26.7315006256',
    lon: '94.1754989624',
    timezone: '5.5'
  },
  {
    name: 'Kailashahar ',
    city: 'Kailashahar',
    country: 'India',
    IATA: 'IXH',
    ICAO: 'VEKR',
    lat: '24.30820083618164',
    lon: '92.0072021484375',
    timezone: '5.5'
  },
  {
    name: 'Silchar ',
    city: 'Silchar',
    country: 'India',
    IATA: 'IXS',
    ICAO: 'VEKU',
    lat: '24.9129009247',
    lon: '92.97869873050001',
    timezone: '5.5'
  },
  {
    name: 'North Lakhimpur ',
    city: 'Lilabari',
    country: 'India',
    IATA: 'IXI',
    ICAO: 'VELR',
    lat: '27.295499801635742',
    lon: '94.09760284423828',
    timezone: '5.5'
  },
  {
    name: 'Dibrugarh ',
    city: 'Mohanbari',
    country: 'India',
    IATA: 'DIB',
    ICAO: 'VEMN',
    lat: '27.4839000702',
    lon: '95.0168991089',
    timezone: '5.5'
  },
  {
    name: 'Muzaffarpur ',
    city: 'Mazuffarpur',
    country: 'India',
    IATA: 'MZU',
    ICAO: 'VEMZ',
    lat: '26.11910057067871',
    lon: '85.3136978149414',
    timezone: '5.5'
  },
  {
    name: 'Nawapara ',
    city: 'Nawapara',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VENP',
    lat: '20.8700008392334',
    lon: '82.51959991455078',
    timezone: '5.5'
  },
  {
    name: 'Panagarh Air Force Station',
    city: 'Panagarh',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEPH',
    lat: '23.474300384499998',
    lon: '87.4274978638',
    timezone: '5.5'
  },
  {
    name: 'Lok Nayak Jayaprakash ',
    city: 'Patina',
    country: 'India',
    IATA: 'PAT',
    ICAO: 'VEPT',
    lat: '25.591299057',
    lon: '85.0879974365',
    timezone: '5.5'
  },
  {
    name: 'Purnea ',
    city: 'Purnea',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEPU',
    lat: '25.759599685668945',
    lon: '87.41000366210938',
    timezone: '5.5'
  },
  {
    name: 'Birsa Munda ',
    city: 'Ranchi',
    country: 'India',
    IATA: 'IXR',
    ICAO: 'VERC',
    lat: '23.314300537100003',
    lon: '85.3217010498',
    timezone: '5.5'
  },
  {
    name: 'Rourkela ',
    city: 'Rourkela',
    country: 'India',
    IATA: 'RRK',
    ICAO: 'VERK',
    lat: '22.256701',
    lon: '84.814598',
    timezone: '5.5'
  },
  {
    name: 'Utkela ',
    city: 'Utkela',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VEUK',
    lat: '20.097400665283203',
    lon: '83.18379974365234',
    timezone: '5.5'
  },
  {
    name: 'Vishakhapatnam ',
    city: 'Vishakhapatnam',
    country: 'India',
    IATA: 'VTZ',
    ICAO: 'VEVZ',
    lat: '17.721200943',
    lon: '83.2245025635',
    timezone: '5.5'
  },
  {
    name: 'Ziro ',
    city: 'Zero',
    country: 'India',
    IATA: 'ZER',
    ICAO: 'VEZO',
    lat: '27.588301',
    lon: '93.828102',
    timezone: '5.5'
  },
  {
    name: "Cox's Bazar ",
    city: "Cox's Bazar",
    country: 'Bangladesh',
    IATA: 'CXB',
    ICAO: 'VGCB',
    lat: '21.452199935913086',
    lon: '91.96389770507812',
    timezone: '6'
  },
  {
    name: 'Shah Amanat Intl ',
    city: 'Chittagong',
    country: 'Bangladesh',
    IATA: 'CGP',
    ICAO: 'VGEG',
    lat: '22.24959945678711',
    lon: '91.81330108642578',
    timezone: '6'
  },
  {
    name: 'Ishurdi ',
    city: 'Ishurdi',
    country: 'Bangladesh',
    IATA: 'IRD',
    ICAO: 'VGIS',
    lat: '24.15250015258789',
    lon: '89.04940032958984',
    timezone: '6'
  },
  {
    name: 'Jessore ',
    city: 'Jessore',
    country: 'Bangladesh',
    IATA: 'JSR',
    ICAO: 'VGJR',
    lat: '23.183799743652344',
    lon: '89.16079711914062',
    timezone: '6'
  },
  {
    name: 'Shah Mokhdum ',
    city: 'Rajshahi',
    country: 'Bangladesh',
    IATA: 'RJH',
    ICAO: 'VGRJ',
    lat: '24.43720054626465',
    lon: '88.61650085449219',
    timezone: '6'
  },
  {
    name: 'Saidpur ',
    city: 'Saidpur',
    country: 'Bangladesh',
    IATA: 'SPD',
    ICAO: 'VGSD',
    lat: '25.759199142456055',
    lon: '88.90889739990234',
    timezone: '6'
  },
  {
    name: 'Osmany Intl ',
    city: 'Sylhet Osmani',
    country: 'Bangladesh',
    IATA: 'ZYL',
    ICAO: 'VGSY',
    lat: '24.963199615478516',
    lon: '91.8667984008789',
    timezone: '6'
  },
  {
    name: 'Tejgaon ',
    city: 'Dhaka',
    country: 'Bangladesh',
    IATA: '\\N',
    ICAO: 'VGTJ',
    lat: '23.778799057006836',
    lon: '90.38269805908203',
    timezone: '6'
  },
  {
    name: 'Hazrat Shahjalal Intl ',
    city: 'Dhaka',
    country: 'Bangladesh',
    IATA: 'DAC',
    ICAO: 'VGZR',
    lat: '23.843347',
    lon: '90.397783',
    timezone: '6'
  },
  {
    name: 'Hong Kong Intl ',
    city: 'Hong Kong',
    country: 'Hong Kong',
    IATA: 'HKG',
    ICAO: 'VHHH',
    lat: '22.308901',
    lon: '113.915001',
    timezone: '8'
  },
  {
    name: 'Shek Kong Air Base',
    city: 'Sek Kong',
    country: 'Hong Kong',
    IATA: '\\N',
    ICAO: 'VHSK',
    lat: '22.436599731445312',
    lon: '114.08000183105469',
    timezone: '8'
  },
  {
    name: 'Agra ',
    city: 'Agra',
    country: 'India',
    IATA: 'AGR',
    ICAO: 'VIAG',
    lat: '27.155799865722656',
    lon: '77.96089935302734',
    timezone: '5.5'
  },
  {
    name: 'Allahabad ',
    city: 'Allahabad',
    country: 'India',
    IATA: 'IXD',
    ICAO: 'VIAL',
    lat: '25.440099716186523',
    lon: '81.73390197753906',
    timezone: '5.5'
  },
  {
    name: 'Sri Guru Ram Dass Jee Intl ',
    city: 'Amritsar',
    country: 'India',
    IATA: 'ATQ',
    ICAO: 'VIAR',
    lat: '31.7096004486',
    lon: '74.7973022461',
    timezone: '5.5'
  },
  {
    name: 'Nal ',
    city: 'Bikaner',
    country: 'India',
    IATA: 'BKB',
    ICAO: 'VIBK',
    lat: '28.070600509643555',
    lon: '73.20719909667969',
    timezone: '5.5'
  },
  {
    name: 'Bakshi Ka Talab Air Force Station',
    city: 'Bakshi Ka Talab',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIBL',
    lat: '26.988300323486328',
    lon: '80.89309692382812',
    timezone: '5.5'
  },
  {
    name: 'Lal Bahadur Shastri ',
    city: 'Varanasi',
    country: 'India',
    IATA: 'VNS',
    ICAO: 'VIBN',
    lat: '25.4524002075',
    lon: '82.8592987061',
    timezone: '5.5'
  },
  {
    name: 'Kullu Manali ',
    city: 'Kulu',
    country: 'India',
    IATA: 'KUU',
    ICAO: 'VIBR',
    lat: '31.876699447631836',
    lon: '77.15440368652344',
    timezone: '5.5'
  },
  {
    name: 'Bhatinda Air Force Station',
    city: 'Bhatinda',
    country: 'India',
    IATA: 'BUP',
    ICAO: 'VIBT',
    lat: '30.270099639892578',
    lon: '74.75579833984375',
    timezone: '5.5'
  },
  {
    name: 'Bhiwani ',
    city: 'Bhiwani',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIBW',
    lat: '28.836999893188477',
    lon: '76.1791000366211',
    timezone: '5.5'
  },
  {
    name: 'Bareilly Air Force Station',
    city: 'Bareilly',
    country: 'India',
    IATA: 'BEK',
    ICAO: 'VIBY',
    lat: '28.4221000671',
    lon: '79.45079803470001',
    timezone: '5.5'
  },
  {
    name: 'Chandigarh ',
    city: 'Chandigarh',
    country: 'India',
    IATA: 'IXC',
    ICAO: 'VICG',
    lat: '30.673500061035156',
    lon: '76.78849792480469',
    timezone: '5.5'
  },
  {
    name: 'Kanpur ',
    city: 'Kanpur',
    country: 'India',
    IATA: 'KNU',
    ICAO: 'VICX',
    lat: '26.404301',
    lon: '80.410103',
    timezone: '5.5'
  },
  {
    name: 'Safdarjung ',
    city: 'Delhi',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIDD',
    lat: '28.58449935913086',
    lon: '77.20580291748047',
    timezone: '5.5'
  },
  {
    name: 'Dehradun ',
    city: 'Dehra Dun',
    country: 'India',
    IATA: 'DED',
    ICAO: 'VIDN',
    lat: '30.189699',
    lon: '78.180298',
    timezone: '5.5'
  },
  {
    name: 'Indira Gandhi Intl ',
    city: 'Delhi',
    country: 'India',
    IATA: 'DEL',
    ICAO: 'VIDP',
    lat: '28.5665',
    lon: '77.103104',
    timezone: '5.5'
  },
  {
    name: 'Gwalior ',
    city: 'Gwalior',
    country: 'India',
    IATA: 'GWL',
    ICAO: 'VIGR',
    lat: '26.29330062866211',
    lon: '78.22779846191406',
    timezone: '5.5'
  },
  {
    name: 'Hissar ',
    city: 'Hissar',
    country: 'India',
    IATA: 'HSS',
    ICAO: 'VIHR',
    lat: '29.179399490356445',
    lon: '75.75530242919922',
    timezone: '5.5'
  },
  {
    name: 'Jhansi ',
    city: 'Jhansi',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIJN',
    lat: '25.491199493408203',
    lon: '78.55840301513672',
    timezone: '5.5'
  },
  {
    name: 'Jodhpur ',
    city: 'Jodhpur',
    country: 'India',
    IATA: 'JDH',
    ICAO: 'VIJO',
    lat: '26.251100540161133',
    lon: '73.04889678955078',
    timezone: '5.5'
  },
  {
    name: 'Jaipur Intl ',
    city: 'Jaipur',
    country: 'India',
    IATA: 'JAI',
    ICAO: 'VIJP',
    lat: '26.8242',
    lon: '75.812202',
    timezone: '5.5'
  },
  {
    name: 'Jaisalmer ',
    city: 'Jaisalmer',
    country: 'India',
    IATA: 'JSA',
    ICAO: 'VIJR',
    lat: '26.888700485229492',
    lon: '70.86499786376953',
    timezone: '5.5'
  },
  {
    name: 'Jammu ',
    city: 'Jammu',
    country: 'India',
    IATA: 'IXJ',
    ICAO: 'VIJU',
    lat: '32.6890983582',
    lon: '74.8374023438',
    timezone: '5.5'
  },
  {
    name: 'Kanpur Civil ',
    city: 'Kanpur',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIKA',
    lat: '26.441401',
    lon: '80.364899',
    timezone: '5.5'
  },
  {
    name: 'Kota ',
    city: 'Kota',
    country: 'India',
    IATA: 'KTU',
    ICAO: 'VIKO',
    lat: '25.160200119',
    lon: '75.84559631350001',
    timezone: '5.5'
  },
  {
    name: 'Ludhiana ',
    city: 'Ludhiaha',
    country: 'India',
    IATA: 'LUH',
    ICAO: 'VILD',
    lat: '30.854700088500977',
    lon: '75.95259857177734',
    timezone: '5.5'
  },
  {
    name: 'Leh Kushok Bakula Rimpochee ',
    city: 'Leh',
    country: 'India',
    IATA: 'IXL',
    ICAO: 'VILH',
    lat: '34.1358985901',
    lon: '77.5465011597',
    timezone: '5.5'
  },
  {
    name: 'Chaudhary Charan Singh Intl ',
    city: 'Lucknow',
    country: 'India',
    IATA: 'LKO',
    ICAO: 'VILK',
    lat: '26.7605991364',
    lon: '80.8892974854',
    timezone: '5.5'
  },
  {
    name: 'Pathankot ',
    city: 'Pathankot',
    country: 'India',
    IATA: 'IXP',
    ICAO: 'VIPK',
    lat: '32.233611',
    lon: '75.634444',
    timezone: '5.5'
  },
  {
    name: 'Patiala ',
    city: 'Patiala',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIPL',
    lat: '30.314800262451172',
    lon: '76.364501953125',
    timezone: '5.5'
  },
  {
    name: 'Pantnagar ',
    city: 'Nainital',
    country: 'India',
    IATA: 'PGH',
    ICAO: 'VIPT',
    lat: '29.03339958190918',
    lon: '79.47370147705078',
    timezone: '5.5'
  },
  {
    name: 'Fursatganj ',
    city: 'Raibarelli',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VIRB',
    lat: '26.24850082397461',
    lon: '81.38050079345703',
    timezone: '5.5'
  },
  {
    name: 'Sarsawa Air Force Station',
    city: 'Saharanpur',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VISP',
    lat: '29.993900299072266',
    lon: '77.42530059814453',
    timezone: '5.5'
  },
  {
    name: 'Sheikh ul Alam ',
    city: 'Srinagar',
    country: 'India',
    IATA: 'SXR',
    ICAO: 'VISR',
    lat: '33.987098693847656',
    lon: '74.77420043945312',
    timezone: '5.5'
  },
  {
    name: 'Satna ',
    city: 'Satna',
    country: 'India',
    IATA: 'TNI',
    ICAO: 'VIST',
    lat: '24.5623',
    lon: '80.854897',
    timezone: '5.5'
  },
  {
    name: 'Luang Phabang Intl ',
    city: 'Luang Prabang',
    country: 'Laos',
    IATA: 'LPQ',
    ICAO: 'VLLB',
    lat: '19.897300720214844',
    lon: '102.16100311279297',
    timezone: '7'
  },
  {
    name: 'Pakse Intl ',
    city: 'Pakse',
    country: 'Laos',
    IATA: 'PKZ',
    ICAO: 'VLPS',
    lat: '15.132100105285645',
    lon: '105.78099822998047',
    timezone: '7'
  },
  {
    name: 'Phonesavanh ',
    city: 'Phong Savanh',
    country: 'Laos',
    IATA: '\\N',
    ICAO: 'VLPV',
    lat: '19.45490074157715',
    lon: '103.21800231933594',
    timezone: '7'
  },
  {
    name: 'Savannakhet ',
    city: 'Savannakhet',
    country: 'Laos',
    IATA: 'ZVK',
    ICAO: 'VLSK',
    lat: '16.55660057067871',
    lon: '104.76000213623047',
    timezone: '7'
  },
  {
    name: 'Sam Neua ',
    city: 'Sam Neua',
    country: 'Laos',
    IATA: 'NEU',
    ICAO: 'VLSN',
    lat: '20.418399810791016',
    lon: '104.06700134277344',
    timezone: '7'
  },
  {
    name: 'Wattay Intl ',
    city: 'Vientiane',
    country: 'Laos',
    IATA: 'VTE',
    ICAO: 'VLVT',
    lat: '17.988300323500003',
    lon: '102.56300354',
    timezone: '7'
  },
  {
    name: 'Macau Intl ',
    city: 'Macau',
    country: 'Macau',
    IATA: 'MFM',
    ICAO: 'VMMC',
    lat: '22.149599',
    lon: '113.592003',
    timezone: '8'
  },
  {
    name: 'Gautam Buddha ',
    city: 'Bhairawa',
    country: 'Nepal',
    IATA: 'BWA',
    ICAO: 'VNBW',
    lat: '27.505685',
    lon: '83.416293',
    timezone: '5.75'
  },
  {
    name: 'Janakpur ',
    city: 'Janakpur',
    country: 'Nepal',
    IATA: 'JKR',
    ICAO: 'VNJP',
    lat: '26.708799362199997',
    lon: '85.9224014282',
    timezone: '5.75'
  },
  {
    name: 'Tribhuvan Intl ',
    city: 'Kathmandu',
    country: 'Nepal',
    IATA: 'KTM',
    ICAO: 'VNKT',
    lat: '27.6966',
    lon: '85.3591',
    timezone: '5.75'
  },
  {
    name: 'Pokhara ',
    city: 'Pokhara',
    country: 'Nepal',
    IATA: 'PKR',
    ICAO: 'VNPK',
    lat: '28.200899124145508',
    lon: '83.98210144042969',
    timezone: '5.75'
  },
  {
    name: 'Simara ',
    city: 'Simara',
    country: 'Nepal',
    IATA: 'SIF',
    ICAO: 'VNSI',
    lat: '27.159500122070312',
    lon: '84.9801025390625',
    timezone: '5.75'
  },
  {
    name: 'Biratnagar ',
    city: 'Biratnagar',
    country: 'Nepal',
    IATA: 'BIR',
    ICAO: 'VNVT',
    lat: '26.48150062561035',
    lon: '87.26399993896484',
    timezone: '5.75'
  },
  {
    name: 'Agatti ',
    city: 'Agatti Island',
    country: 'India',
    IATA: 'AGX',
    ICAO: 'VOAT',
    lat: '10.823699951171875',
    lon: '72.1760025024414',
    timezone: '5.5'
  },
  {
    name: 'Kempegowda Intl ',
    city: 'Bangalore',
    country: 'India',
    IATA: 'BLR',
    ICAO: 'VOBL',
    lat: '13.1979',
    lon: '77.706299',
    timezone: '5.5'
  },
  {
    name: 'Bellary ',
    city: 'Bellary',
    country: 'India',
    IATA: 'BEP',
    ICAO: 'VOBI',
    lat: '15.162799835205078',
    lon: '76.88279724121094',
    timezone: '5.5'
  },
  {
    name: 'Bidar Air Force Station',
    city: 'Bidar',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VOBR',
    lat: '17.908100128173828',
    lon: '77.48709869384766',
    timezone: '5.5'
  },
  {
    name: 'Vijayawada ',
    city: 'Vijayawada',
    country: 'India',
    IATA: 'VGA',
    ICAO: 'VOBZ',
    lat: '16.530399322509766',
    lon: '80.79679870605469',
    timezone: '5.5'
  },
  {
    name: 'Coimbatore Intl ',
    city: 'Coimbatore',
    country: 'India',
    IATA: 'CJB',
    ICAO: 'VOCB',
    lat: '11.029999733',
    lon: '77.0434036255',
    timezone: '5.5'
  },
  {
    name: 'Cochin Intl ',
    city: 'Kochi',
    country: 'India',
    IATA: 'COK',
    ICAO: 'VOCI',
    lat: '10.152',
    lon: '76.401901',
    timezone: '5.5'
  },
  {
    name: 'Calicut Intl ',
    city: 'Calicut',
    country: 'India',
    IATA: 'CCJ',
    ICAO: 'VOCL',
    lat: '11.1367998123',
    lon: '75.95529937740001',
    timezone: '5.5'
  },
  {
    name: 'Kadapa ',
    city: 'Cuddapah',
    country: 'India',
    IATA: 'CDP',
    ICAO: 'VOCP',
    lat: '14.51',
    lon: '78.772778',
    timezone: '5.5'
  },
  {
    name: 'Car Nicobar Air Force Station',
    city: 'Carnicobar',
    country: 'India',
    IATA: 'CBD',
    ICAO: 'VOCX',
    lat: '9.152509689331055',
    lon: '92.8196029663086',
    timezone: '5.5'
  },
  {
    name: 'Dundigul Air Force Academy',
    city: 'Dundigul',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VODG',
    lat: '17.627199173',
    lon: '78.4033966064',
    timezone: '5.5'
  },
  {
    name: 'Begumpet ',
    city: 'Hyderabad',
    country: 'India',
    IATA: 'BPM',
    ICAO: 'VOHY',
    lat: '17.4531002045',
    lon: '78.4675979614',
    timezone: '5.5'
  },
  {
    name: 'Madurai ',
    city: 'Madurai',
    country: 'India',
    IATA: 'IXM',
    ICAO: 'VOMD',
    lat: '9.83450984955',
    lon: '78.09339904790001',
    timezone: '5.5'
  },
  {
    name: 'Mangalore Intl ',
    city: 'Mangalore',
    country: 'India',
    IATA: 'IXE',
    ICAO: 'VOML',
    lat: '12.9612998962',
    lon: '74.8900985718',
    timezone: '5.5'
  },
  {
    name: 'Chennai Intl ',
    city: 'Madras',
    country: 'India',
    IATA: 'MAA',
    ICAO: 'VOMM',
    lat: '12.990005493164062',
    lon: '80.16929626464844',
    timezone: '5.5'
  },
  {
    name: 'Nagarjuna Sagar ',
    city: 'Nagarjunsagar',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VONS',
    lat: '16.542699813842773',
    lon: '79.3187026977539',
    timezone: '5.5'
  },
  {
    name: 'Vir Savarkar Intl ',
    city: 'Port Blair',
    country: 'India',
    IATA: 'IXZ',
    ICAO: 'VOPB',
    lat: '11.641200065612793',
    lon: '92.72969818115234',
    timezone: '5.5'
  },
  {
    name: 'Pondicherry ',
    city: 'Pendicherry',
    country: 'India',
    IATA: 'PNY',
    ICAO: 'VOPC',
    lat: '11.968',
    lon: '79.812',
    timezone: '5.5'
  },
  {
    name: 'Rajahmundry ',
    city: 'Rajahmundry',
    country: 'India',
    IATA: 'RJA',
    ICAO: 'VORY',
    lat: '17.1103992462',
    lon: '81.81819915770001',
    timezone: '5.5'
  },
  {
    name: 'Salem ',
    city: 'Salem',
    country: 'India',
    IATA: 'SXV',
    ICAO: 'VOSM',
    lat: '11.78330039978',
    lon: '78.06559753418',
    timezone: '5.5'
  },
  {
    name: 'Tanjore Air Force Base',
    city: 'Tanjore',
    country: 'India',
    IATA: 'TJV',
    ICAO: 'VOTJ',
    lat: '10.722399711608887',
    lon: '79.10160064697266',
    timezone: '5.5'
  },
  {
    name: 'Tirupati ',
    city: 'Tirupeti',
    country: 'India',
    IATA: 'TIR',
    ICAO: 'VOTP',
    lat: '13.632499694800002',
    lon: '79.543296814',
    timezone: '5.5'
  },
  {
    name: 'Tiruchirapally Civil  ',
    city: 'Tiruchirappalli',
    country: 'India',
    IATA: 'TRZ',
    ICAO: 'VOTR',
    lat: '10.765399932861328',
    lon: '78.70970153808594',
    timezone: '5.5'
  },
  {
    name: 'Trivandrum Intl ',
    city: 'Trivandrum',
    country: 'India',
    IATA: 'TRV',
    ICAO: 'VOTV',
    lat: '8.48211956024',
    lon: '76.9200973511',
    timezone: '5.5'
  },
  {
    name: 'Tambaram Air Force Station',
    city: 'Tambaram',
    country: 'India',
    IATA: '\\N',
    ICAO: 'VOTX',
    lat: '12.90719985961914',
    lon: '80.12190246582031',
    timezone: '5.5'
  },
  {
    name: 'Paro ',
    city: 'Thimphu',
    country: 'Bhutan',
    IATA: 'PBH',
    ICAO: 'VQPR',
    lat: '27.403200149499998',
    lon: '89.42459869380001',
    timezone: '6'
  },
  {
    name: 'Mal\u00e9 Intl ',
    city: 'Male',
    country: 'Maldives',
    IATA: 'MLE',
    ICAO: 'VRMM',
    lat: '4.191830158233643',
    lon: '73.52909851074219',
    timezone: '5'
  },
  {
    name: 'Don Mueang Intl ',
    city: 'Bangkok',
    country: 'Thailand',
    IATA: 'DMK',
    ICAO: 'VTBD',
    lat: '13.9125995636',
    lon: '100.607002258',
    timezone: '7'
  },
  {
    name: 'Kamphaeng Saen ',
    city: 'Nakhon Pathom',
    country: 'Thailand',
    IATA: 'KDT',
    ICAO: 'VTBK',
    lat: '14.1020002365',
    lon: '99.9171981812',
    timezone: '7'
  },
  {
    name: 'Khok Kathiam ',
    city: 'Lop Buri',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTBL',
    lat: '14.8746004105',
    lon: '100.663002014',
    timezone: '7'
  },
  {
    name: 'U-Tapao Intl ',
    city: 'Pattaya',
    country: 'Thailand',
    IATA: 'UTP',
    ICAO: 'VTBU',
    lat: '12.679900169372559',
    lon: '101.00499725341797',
    timezone: '7'
  },
  {
    name: 'Watthana Nakhon ',
    city: 'Prachin Buri',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTBW',
    lat: '13.768799781799316',
    lon: '102.31500244140625',
    timezone: '7'
  },
  {
    name: 'Lampang ',
    city: 'Lampang',
    country: 'Thailand',
    IATA: 'LPT',
    ICAO: 'VTCL',
    lat: '18.27090072631836',
    lon: '99.50420379638672',
    timezone: '7'
  },
  {
    name: 'Phrae ',
    city: 'Phrae',
    country: 'Thailand',
    IATA: 'PRH',
    ICAO: 'VTCP',
    lat: '18.132200241088867',
    lon: '100.16500091552734',
    timezone: '7'
  },
  {
    name: 'Hua Hin ',
    city: 'Prachuap Khiri Khan',
    country: 'Thailand',
    IATA: 'HHQ',
    ICAO: 'VTPH',
    lat: '12.6361999512',
    lon: '99.951499939',
    timezone: '7'
  },
  {
    name: 'Takhli ',
    city: 'Nakhon Sawan',
    country: 'Thailand',
    IATA: 'TKH',
    ICAO: 'VTPI',
    lat: '15.277299881',
    lon: '100.29599762',
    timezone: '7'
  },
  {
    name: 'Sak Long ',
    city: 'Phetchabun',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTPL',
    lat: '16.82430076599121',
    lon: '101.2509994506836',
    timezone: '7'
  },
  {
    name: 'Nakhon Sawan ',
    city: 'Nakhon Sawan',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTPN',
    lat: '15.67300033569336',
    lon: '100.13700103759766',
    timezone: '7'
  },
  {
    name: 'Phitsanulok ',
    city: 'Phitsanulok',
    country: 'Thailand',
    IATA: 'PHS',
    ICAO: 'VTPP',
    lat: '16.782899856567383',
    lon: '100.27899932861328',
    timezone: '7'
  },
  {
    name: 'Khunan Phumipol ',
    city: 'Tak',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTPY',
    lat: '17.23419952392578',
    lon: '99.05789947509766',
    timezone: '7'
  },
  {
    name: 'Khoun Khan ',
    city: 'Satun',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTSA',
    lat: '6.661399841308594',
    lon: '100.08000183105469',
    timezone: '7'
  },
  {
    name: 'Narathiwat ',
    city: 'Narathiwat',
    country: 'Thailand',
    IATA: 'NAW',
    ICAO: 'VTSC',
    lat: '6.5199198722839355',
    lon: '101.74299621582031',
    timezone: '7'
  },
  {
    name: 'Krabi ',
    city: 'Krabi',
    country: 'Thailand',
    IATA: 'KBV',
    ICAO: 'VTSG',
    lat: '8.09912014008',
    lon: '98.9861984253',
    timezone: '7'
  },
  {
    name: 'Songkhla ',
    city: 'Songkhla',
    country: 'Thailand',
    IATA: 'SGZ',
    ICAO: 'VTSH',
    lat: '7.186560153961182',
    lon: '100.60800170898438',
    timezone: '7'
  },
  {
    name: 'Pattani ',
    city: 'Pattani',
    country: 'Thailand',
    IATA: 'PAN',
    ICAO: 'VTSK',
    lat: '6.785459995269775',
    lon: '101.15399932861328',
    timezone: '7'
  },
  {
    name: 'Samui ',
    city: 'Ko Samui',
    country: 'Thailand',
    IATA: 'USM',
    ICAO: 'VTSM',
    lat: '9.547789573669998',
    lon: '100.06199646',
    timezone: '7'
  },
  {
    name: 'Cha Eian ',
    city: 'Nakhon Si Thammarat',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTSN',
    lat: '8.47115039825',
    lon: '99.9555969238',
    timezone: '7'
  },
  {
    name: 'Phuket Intl ',
    city: 'Phuket',
    country: 'Thailand',
    IATA: 'HKT',
    ICAO: 'VTSP',
    lat: '8.1132',
    lon: '98.316902',
    timezone: '7'
  },
  {
    name: 'Ranong ',
    city: 'Ranong',
    country: 'Thailand',
    IATA: 'UNN',
    ICAO: 'VTSR',
    lat: '9.777620315551758',
    lon: '98.58550262451172',
    timezone: '7'
  },
  {
    name: 'Hat Yai Intl ',
    city: 'Hat Yai',
    country: 'Thailand',
    IATA: 'HDY',
    ICAO: 'VTSS',
    lat: '6.93320989609',
    lon: '100.392997742',
    timezone: '7'
  },
  {
    name: 'Trang ',
    city: 'Trang',
    country: 'Thailand',
    IATA: 'TST',
    ICAO: 'VTST',
    lat: '7.508739948272705',
    lon: '99.6166000366211',
    timezone: '7'
  },
  {
    name: 'Udon Thani ',
    city: 'Udon Thani',
    country: 'Thailand',
    IATA: 'UTH',
    ICAO: 'VTUD',
    lat: '17.386400222800003',
    lon: '102.788002014',
    timezone: '7'
  },
  {
    name: 'Sakon Nakhon ',
    city: 'Sakon Nakhon',
    country: 'Thailand',
    IATA: 'SNO',
    ICAO: 'VTUI',
    lat: '17.195100784301758',
    lon: '104.11900329589844',
    timezone: '7'
  },
  {
    name: 'Surin ',
    city: 'Surin',
    country: 'Thailand',
    IATA: 'PXR',
    ICAO: 'VTUJ',
    lat: '14.868300437927',
    lon: '103.49800109863',
    timezone: '7'
  },
  {
    name: 'Loei ',
    city: 'Loei',
    country: 'Thailand',
    IATA: 'LOE',
    ICAO: 'VTUL',
    lat: '17.43910026550293',
    lon: '101.72200012207031',
    timezone: '7'
  },
  {
    name: 'Khorat ',
    city: 'Nakhon Ratchasima',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTUN',
    lat: '14.9344997406',
    lon: '102.07900238',
    timezone: '7'
  },
  {
    name: 'Rob Muang ',
    city: 'Roi Et',
    country: 'Thailand',
    IATA: '\\N',
    ICAO: 'VTUR',
    lat: '16.07040023803711',
    lon: '103.64600372314453',
    timezone: '7'
  },
  {
    name: 'Da Nang Intl ',
    city: 'Danang',
    country: 'Vietnam',
    IATA: 'DAD',
    ICAO: 'VVDN',
    lat: '16.043899536132812',
    lon: '108.1989974975586',
    timezone: '7'
  },
  {
    name: 'Gia Lam Air Base',
    city: 'Hanoi',
    country: 'Vietnam',
    IATA: '\\N',
    ICAO: 'VVGL',
    lat: '21.04050064086914',
    lon: '105.88600158691406',
    timezone: '7'
  },
  {
    name: 'Kep Air Base',
    city: 'Kep',
    country: 'Vietnam',
    IATA: '\\N',
    ICAO: 'VVKP',
    lat: '21.394599914599997',
    lon: '106.261001587',
    timezone: '7'
  },
  {
    name: 'Noi Bai Intl ',
    city: 'Hanoi',
    country: 'Vietnam',
    IATA: 'HAN',
    ICAO: 'VVNB',
    lat: '21.221200942993164',
    lon: '105.80699920654297',
    timezone: '7'
  },
  {
    name: 'Nha Trang Air Base',
    city: 'Nhatrang',
    country: 'Vietnam',
    IATA: 'NHA',
    ICAO: 'VVNT',
    lat: '12.2275',
    lon: '109.192001',
    timezone: '7'
  },
  {
    name: 'Phu Bai ',
    city: 'Hue',
    country: 'Vietnam',
    IATA: 'HUI',
    ICAO: 'VVPB',
    lat: '16.401500701899998',
    lon: '107.70300293',
    timezone: '7'
  },
  {
    name: 'Phu Quoc Intl ',
    city: 'Phuquoc',
    country: 'Vietnam',
    IATA: 'PQC',
    ICAO: 'VVPQ',
    lat: '10.1698',
    lon: '103.9931',
    timezone: '7'
  },
  {
    name: 'Tan Son Nhat Intl ',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    IATA: 'SGN',
    ICAO: 'VVTS',
    lat: '10.8187999725',
    lon: '106.652000427',
    timezone: '7'
  },
  {
    name: 'Ann ',
    city: 'Ann',
    country: 'Burma',
    IATA: 'VBA',
    ICAO: 'VYAN',
    lat: '19.769199',
    lon: '94.0261',
    timezone: '6.5'
  },
  {
    name: 'Anisakan ',
    city: 'Anisakan',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYAS',
    lat: '21.955400466918945',
    lon: '96.40609741210938',
    timezone: '6.5'
  },
  {
    name: 'Bagan ',
    city: 'Bagan',
    country: 'Burma',
    IATA: 'NYU',
    ICAO: 'VYBG',
    lat: '21.178800582885742',
    lon: '94.9301986694336',
    timezone: '6.5'
  },
  {
    name: 'Coco Island ',
    city: 'Coco Island',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYCI',
    lat: '14.141500473022461',
    lon: '93.36849975585938',
    timezone: '6'
  },
  {
    name: 'Heho ',
    city: 'Heho',
    country: 'Burma',
    IATA: 'HEH',
    ICAO: 'VYHH',
    lat: '20.746999740600586',
    lon: '96.79199981689453',
    timezone: '6.5'
  },
  {
    name: 'Hommalinn ',
    city: 'Hommalin',
    country: 'Burma',
    IATA: 'HOX',
    ICAO: 'VYHL',
    lat: '24.899599075317383',
    lon: '94.91400146484375',
    timezone: '6.5'
  },
  {
    name: 'Kengtung ',
    city: 'Kengtung',
    country: 'Burma',
    IATA: 'KET',
    ICAO: 'VYKG',
    lat: '21.301599502563477',
    lon: '99.63600158691406',
    timezone: '6.5'
  },
  {
    name: 'Kyaukpyu ',
    city: 'Kyaukpyu',
    country: 'Burma',
    IATA: 'KYP',
    ICAO: 'VYKP',
    lat: '19.42639923095703',
    lon: '93.53479766845703',
    timezone: '6.5'
  },
  {
    name: 'Lashio ',
    city: 'Lashio',
    country: 'Burma',
    IATA: 'LSH',
    ICAO: 'VYLS',
    lat: '22.9778995513916',
    lon: '97.752197265625',
    timezone: '6.5'
  },
  {
    name: 'Lanywa ',
    city: 'Lanywa',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYLY',
    lat: '20.940399169921875',
    lon: '94.82260131835938',
    timezone: '6.5'
  },
  {
    name: 'Mandalay Intl ',
    city: 'Mandalay',
    country: 'Burma',
    IATA: 'MDL',
    ICAO: 'VYMD',
    lat: '21.702199935913086',
    lon: '95.97789764404297',
    timezone: '6.5'
  },
  {
    name: 'Myeik ',
    city: 'Myeik',
    country: 'Burma',
    IATA: 'MGZ',
    ICAO: 'VYME',
    lat: '12.439800262451172',
    lon: '98.62149810791016',
    timezone: '6.5'
  },
  {
    name: 'Myitkyina ',
    city: 'Myitkyina',
    country: 'Burma',
    IATA: 'MYT',
    ICAO: 'VYMK',
    lat: '25.38360023498535',
    lon: '97.35189819335938',
    timezone: '6.5'
  },
  {
    name: 'Momeik ',
    city: 'Momeik',
    country: 'Burma',
    IATA: 'MOE',
    ICAO: 'VYMO',
    lat: '23.092500686645508',
    lon: '96.64530181884766',
    timezone: '6.5'
  },
  {
    name: 'Mong Hsat ',
    city: 'Mong Hsat',
    country: 'Burma',
    IATA: 'MOG',
    ICAO: 'VYMS',
    lat: '20.516799926757812',
    lon: '99.25679779052734',
    timezone: '6.5'
  },
  {
    name: 'Nampong Air Base',
    city: 'Nampong',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYNP',
    lat: '25.354400634799998',
    lon: '97.2951965332',
    timezone: '6.5'
  },
  {
    name: 'Namsang ',
    city: 'Namsang',
    country: 'Burma',
    IATA: 'NMS',
    ICAO: 'VYNS',
    lat: '20.890499114990234',
    lon: '97.73590087890625',
    timezone: '6.5'
  },
  {
    name: 'Hpa-N ',
    city: 'Hpa-an',
    country: 'Burma',
    IATA: 'PAA',
    ICAO: 'VYPA',
    lat: '16.893699645996094',
    lon: '97.67459869384766',
    timezone: '6.5'
  },
  {
    name: 'Putao ',
    city: 'Putao',
    country: 'Burma',
    IATA: 'PBU',
    ICAO: 'VYPT',
    lat: '27.32990074157715',
    lon: '97.42630004882812',
    timezone: '6.5'
  },
  {
    name: 'Pyay ',
    city: 'Pyay',
    country: 'Burma',
    IATA: 'PRU',
    ICAO: 'VYPY',
    lat: '18.824499130249023',
    lon: '95.26599884033203',
    timezone: '6.5'
  },
  {
    name: 'Shante Air Base',
    city: 'Shante',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYST',
    lat: '20.941699981689453',
    lon: '95.91449737548828',
    timezone: '6.5'
  },
  {
    name: 'Sittwe ',
    city: 'Sittwe',
    country: 'Burma',
    IATA: 'AKY',
    ICAO: 'VYSW',
    lat: '20.132699966430664',
    lon: '92.87259674072266',
    timezone: '6.5'
  },
  {
    name: 'Thandwe ',
    city: 'Thandwe',
    country: 'Burma',
    IATA: 'SNW',
    ICAO: 'VYTD',
    lat: '18.4606990814209',
    lon: '94.30010223388672',
    timezone: '6.5'
  },
  {
    name: 'Tachileik ',
    city: 'Tachilek',
    country: 'Burma',
    IATA: 'THL',
    ICAO: 'VYTL',
    lat: '20.483800888061523',
    lon: '99.9354019165039',
    timezone: '6.5'
  },
  {
    name: 'Taungoo ',
    city: 'Taungoo',
    country: 'Burma',
    IATA: '\\N',
    ICAO: 'VYTO',
    lat: '19.031299591064453',
    lon: '96.40119934082031',
    timezone: '6.5'
  },
  {
    name: 'Yangon Intl ',
    city: 'Yangon',
    country: 'Burma',
    IATA: 'RGN',
    ICAO: 'VYYY',
    lat: '16.907300949099998',
    lon: '96.1332015991',
    timezone: '6.5'
  },
  {
    name: 'Hasanuddin Intl ',
    city: 'Ujung Pandang',
    country: 'Indonesia',
    IATA: 'UPG',
    ICAO: 'WAAA',
    lat: '-5.061629772186279',
    lon: '119.55400085449219',
    timezone: '8'
  },
  {
    name: 'Frans Kaisiepo ',
    city: 'Biak',
    country: 'Indonesia',
    IATA: 'BIK',
    ICAO: 'WABB',
    lat: '-1.190019965171814',
    lon: '136.10800170898438',
    timezone: '9'
  },
  {
    name: 'Nabire ',
    city: 'Nabire',
    country: 'Indonesia',
    IATA: 'NBX',
    ICAO: 'WABI',
    lat: '-3.36818',
    lon: '135.496002',
    timezone: '9'
  },
  {
    name: 'Moses Kilangin ',
    city: 'Timika',
    country: 'Indonesia',
    IATA: 'TIM',
    ICAO: 'WABP',
    lat: '-4.528279781341553',
    lon: '136.88699340820312',
    timezone: '9'
  },
  {
    name: 'Sentani Intl ',
    city: 'Jayapura',
    country: 'Indonesia',
    IATA: 'DJJ',
    ICAO: 'WAJJ',
    lat: '-2.5769500733',
    lon: '140.5160064698',
    timezone: '9'
  },
  {
    name: 'Wamena ',
    city: 'Wamena',
    country: 'Indonesia',
    IATA: 'WMX',
    ICAO: 'WAJW',
    lat: '-4.10251',
    lon: '138.957001',
    timezone: '9'
  },
  {
    name: 'Mopah ',
    city: 'Merauke',
    country: 'Indonesia',
    IATA: 'MKQ',
    ICAO: 'WAKK',
    lat: '-8.52029037475586',
    lon: '140.41799926757812',
    timezone: '9'
  },
  {
    name: 'Jalaluddin ',
    city: 'Gorontalo',
    country: 'Indonesia',
    IATA: 'GTO',
    ICAO: 'WAMG',
    lat: '0.63711899519',
    lon: '122.849998474',
    timezone: '8'
  },
  {
    name: 'Mutiara ',
    city: 'Palu',
    country: 'Indonesia',
    IATA: 'PLW',
    ICAO: 'WAML',
    lat: '-0.9185420274734497',
    lon: '119.91000366210938',
    timezone: '8'
  },
  {
    name: 'Sam Ratulangi ',
    city: 'Manado',
    country: 'Indonesia',
    IATA: 'MDC',
    ICAO: 'WAMM',
    lat: '1.5492600202560425',
    lon: '124.9260025024414',
    timezone: '8'
  },
  {
    name: 'Kasiguncu ',
    city: 'Poso',
    country: 'Indonesia',
    IATA: 'PSJ',
    ICAO: 'WAMP',
    lat: '-1.41674995422',
    lon: '120.657997131',
    timezone: '8'
  },
  {
    name: 'Pitu ',
    city: 'Morotai Island',
    country: 'Indonesia',
    IATA: 'OTI',
    ICAO: 'WAMR',
    lat: '2.0459899902300003',
    lon: '128.324996948',
    timezone: '9'
  },
  {
    name: 'Sultan Khairun Babullah ',
    city: 'Ternate',
    country: 'Indonesia',
    IATA: 'TTE',
    ICAO: 'WAMT',
    lat: '0.831413984298706',
    lon: '127.38099670410156',
    timezone: '9'
  },
  {
    name: 'Syukuran Aminuddin Amir ',
    city: 'Luwuk',
    country: 'Indonesia',
    IATA: 'LUW',
    ICAO: 'WAMW',
    lat: '-1.03892',
    lon: '122.772003',
    timezone: '8'
  },
  {
    name: 'Fakfak ',
    city: 'Fak Fak',
    country: 'Indonesia',
    IATA: 'FKQ',
    ICAO: 'WASF',
    lat: '-2.9201900959014893',
    lon: '132.26699829101562',
    timezone: '9'
  },
  {
    name: 'Kaimana ',
    city: 'Kaimana',
    country: 'Indonesia',
    IATA: 'KNG',
    ICAO: 'WASK',
    lat: '-3.6445200443267822',
    lon: '133.6959991455078',
    timezone: '9'
  },
  {
    name: 'Babo ',
    city: 'Babo',
    country: 'Indonesia',
    IATA: 'BXB',
    ICAO: 'WASO',
    lat: '-2.5322399139404297',
    lon: '133.43899536132812',
    timezone: '9'
  },
  {
    name: 'Rendani ',
    city: 'Manokwari',
    country: 'Indonesia',
    IATA: 'MKW',
    ICAO: 'WASR',
    lat: '-0.8918330073356628',
    lon: '134.0489959716797',
    timezone: '9'
  },
  {
    name: 'Dominique Edward Osok ',
    city: 'Sorong',
    country: 'Indonesia',
    IATA: 'SOQ',
    ICAO: 'WAXX',
    lat: '-0.894',
    lon: '131.287',
    timezone: '9'
  },
  {
    name: 'Bintulu ',
    city: 'Bintulu',
    country: 'Malaysia',
    IATA: 'BTU',
    ICAO: 'WBGB',
    lat: '3.12385010719',
    lon: '113.019996643',
    timezone: '8'
  },
  {
    name: 'Kuching Intl ',
    city: 'Kuching',
    country: 'Malaysia',
    IATA: 'KCH',
    ICAO: 'WBGG',
    lat: '1.4846999645233154',
    lon: '110.34700012207031',
    timezone: '8'
  },
  {
    name: 'Limbang ',
    city: 'Limbang',
    country: 'Malaysia',
    IATA: 'LMN',
    ICAO: 'WBGJ',
    lat: '4.808300018310547',
    lon: '115.01000213623047',
    timezone: '8'
  },
  {
    name: 'Marudi ',
    city: 'Marudi',
    country: 'Malaysia',
    IATA: 'MUR',
    ICAO: 'WBGM',
    lat: '4.178979873657227',
    lon: '114.3290023803711',
    timezone: '8'
  },
  {
    name: 'Miri ',
    city: 'Miri',
    country: 'Malaysia',
    IATA: 'MYY',
    ICAO: 'WBGR',
    lat: '4.322010040283203',
    lon: '113.98699951171875',
    timezone: '8'
  },
  {
    name: 'Sibu ',
    city: 'Sibu',
    country: 'Malaysia',
    IATA: 'SBW',
    ICAO: 'WBGS',
    lat: '2.2616000175476074',
    lon: '111.98500061035156',
    timezone: '8'
  },
  {
    name: 'Lahad Datu ',
    city: 'Lahad Datu',
    country: 'Malaysia',
    IATA: 'LDU',
    ICAO: 'WBKD',
    lat: '5.032249927520752',
    lon: '118.3239974975586',
    timezone: '8'
  },
  {
    name: 'Kota Kinabalu Intl ',
    city: 'Kota Kinabalu',
    country: 'Malaysia',
    IATA: 'BKI',
    ICAO: 'WBKK',
    lat: '5.9372100830078125',
    lon: '116.0510025024414',
    timezone: '8'
  },
  {
    name: 'Labuan ',
    city: 'Labuan',
    country: 'Malaysia',
    IATA: 'LBU',
    ICAO: 'WBKL',
    lat: '5.300680160522461',
    lon: '115.25',
    timezone: '8'
  },
  {
    name: 'Tawau ',
    city: 'Tawau',
    country: 'Malaysia',
    IATA: 'TWU',
    ICAO: 'WBKW',
    lat: '4.320159912109375',
    lon: '118.12799835205078',
    timezone: '8'
  },
  {
    name: 'Brunei Intl ',
    city: 'Bandar Seri Begawan',
    country: 'Brunei',
    IATA: 'BWN',
    ICAO: 'WBSB',
    lat: '4.944200038909912',
    lon: '114.9280014038086',
    timezone: '8'
  },
  {
    name: 'Sultan Syarif Kasim Ii (Simpang Tiga) ',
    city: 'Pekanbaru',
    country: 'Indonesia',
    IATA: 'PKU',
    ICAO: 'WIBB',
    lat: '0.46078601479530334',
    lon: '101.44499969482422',
    timezone: '7'
  },
  {
    name: 'Pinang Kampai ',
    city: 'Dumai',
    country: 'Indonesia',
    IATA: 'DUM',
    ICAO: 'WIBD',
    lat: '1.60919',
    lon: '101.433998',
    timezone: '7'
  },
  {
    name: 'Soekarno-Hatta Intl ',
    city: 'Jakarta',
    country: 'Indonesia',
    IATA: 'CGK',
    ICAO: 'WIII',
    lat: '-6.1255698204',
    lon: '106.65599823',
    timezone: '7'
  },
  {
    name: 'Binaka ',
    city: 'Gunung Sitoli',
    country: 'Indonesia',
    IATA: 'GNS',
    ICAO: 'WIMB',
    lat: '1.16638',
    lon: '97.704697',
    timezone: '7'
  },
  {
    name: 'Aek Godang ',
    city: 'Padang Sidempuan',
    country: 'Indonesia',
    IATA: 'AEG',
    ICAO: 'WIME',
    lat: '1.4001',
    lon: '99.430496',
    timezone: '7'
  },
  {
    name: 'Minangkabau Intl ',
    city: 'Padang',
    country: 'Indonesia',
    IATA: 'PDG',
    ICAO: 'WIPT',
    lat: '-0.786917',
    lon: '100.280998',
    timezone: '7'
  },
  {
    name: 'Soewondo Air Force Base',
    city: 'Medan',
    country: 'Indonesia',
    IATA: 'MES',
    ICAO: 'WIMK',
    lat: '3.559167',
    lon: '98.671111',
    timezone: '7'
  },
  {
    name: 'Dr Ferdinand Lumban Tobing ',
    city: 'Sibolga',
    country: 'Indonesia',
    IATA: 'FLZ',
    ICAO: 'WIMS',
    lat: '1.55594',
    lon: '98.888901',
    timezone: '7'
  },
  {
    name: 'Nanga Pinoh ',
    city: 'Nangapinoh',
    country: 'Indonesia',
    IATA: 'NPO',
    ICAO: 'WIOG',
    lat: '-0.34886899590492',
    lon: '111.74800109863',
    timezone: '7'
  },
  {
    name: 'Ketapang(Rahadi Usman) ',
    city: 'Ketapang',
    country: 'Indonesia',
    IATA: 'KTG',
    ICAO: 'WIOK',
    lat: '-1.816640019416809',
    lon: '109.96299743652344',
    timezone: '7'
  },
  {
    name: 'Supadio ',
    city: 'Pontianak',
    country: 'Indonesia',
    IATA: 'PNK',
    ICAO: 'WIOO',
    lat: '-0.15071099996566772',
    lon: '109.40399932861328',
    timezone: '7'
  },
  {
    name: 'Sultan Thaha ',
    city: 'Jambi',
    country: 'Indonesia',
    IATA: 'DJB',
    ICAO: 'WIPA',
    lat: '-1.6380200386047363',
    lon: '103.64399719238281',
    timezone: '7'
  },
  {
    name: 'Fatmawati Soekarno ',
    city: 'Bengkulu',
    country: 'Indonesia',
    IATA: 'BKS',
    ICAO: 'WIPL',
    lat: '-3.8637',
    lon: '102.338997',
    timezone: '7'
  },
  {
    name: 'Sultan Mahmud Badaruddin II ',
    city: 'Palembang',
    country: 'Indonesia',
    IATA: 'PLM',
    ICAO: 'WIPP',
    lat: '-2.8982501029968',
    lon: '104.69999694824',
    timezone: '7'
  },
  {
    name: 'Japura ',
    city: 'Rengat',
    country: 'Indonesia',
    IATA: 'RGT',
    ICAO: 'WIPR',
    lat: '-0.35280799865722656',
    lon: '102.33499908447266',
    timezone: '7'
  },
  {
    name: 'Lhok Sukon ',
    city: 'Lhok Sukon',
    country: 'Indonesia',
    IATA: 'LSX',
    ICAO: 'WITL',
    lat: '5.069509983062744',
    lon: '97.25920104980469',
    timezone: '7'
  },
  {
    name: 'Sultan Iskandar Muda Intl ',
    city: 'Banda Aceh',
    country: 'Indonesia',
    IATA: 'BTJ',
    ICAO: 'WITT',
    lat: '5.522872024010001',
    lon: '95.42063713070002',
    timezone: '7'
  },
  {
    name: 'Kluang ',
    city: 'Kluang',
    country: 'Malaysia',
    IATA: '\\N',
    ICAO: 'WMAP',
    lat: '2.04138994217',
    lon: '103.306999207',
    timezone: '8'
  },
  {
    name: 'Sultan Abdul Halim ',
    city: 'Alor Setar',
    country: 'Malaysia',
    IATA: 'AOR',
    ICAO: 'WMKA',
    lat: '6.189670085906982',
    lon: '100.39800262451172',
    timezone: '8'
  },
  {
    name: 'Butterworth ',
    city: 'Butterworth',
    country: 'Malaysia',
    IATA: 'BWH',
    ICAO: 'WMKB',
    lat: '5.4659199714660645',
    lon: '100.39099884033203',
    timezone: '8'
  },
  {
    name: 'Sultan Ismail Petra ',
    city: 'Kota Bahru',
    country: 'Malaysia',
    IATA: 'KBR',
    ICAO: 'WMKC',
    lat: '6.1668500900268555',
    lon: '102.29299926757812',
    timezone: '8'
  },
  {
    name: 'Kuantan ',
    city: 'Kuantan',
    country: 'Malaysia',
    IATA: 'KUA',
    ICAO: 'WMKD',
    lat: '3.7753899097442627',
    lon: '103.20899963378906',
    timezone: '8'
  },
  {
    name: 'Kerteh ',
    city: 'Kerteh',
    country: 'Malaysia',
    IATA: 'KTE',
    ICAO: 'WMKE',
    lat: '4.537220001220703',
    lon: '103.427001953125',
    timezone: '8'
  },
  {
    name: 'Simpang ',
    city: 'Simpang',
    country: 'Malaysia',
    IATA: '\\N',
    ICAO: 'WMKF',
    lat: '3.1122500896453857',
    lon: '101.7030029296875',
    timezone: '8'
  },
  {
    name: 'Sultan Azlan Shah ',
    city: 'Ipoh',
    country: 'Malaysia',
    IATA: 'IPH',
    ICAO: 'WMKI',
    lat: '4.567969799041748',
    lon: '101.09200286865234',
    timezone: '8'
  },
  {
    name: 'Senai Intl ',
    city: 'Johor Bahru',
    country: 'Malaysia',
    IATA: 'JHB',
    ICAO: 'WMKJ',
    lat: '1.64131',
    lon: '103.669998',
    timezone: '8'
  },
  {
    name: 'Kuala Lumpur Intl ',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    IATA: 'KUL',
    ICAO: 'WMKK',
    lat: '2.745579957962',
    lon: '101.70999908447',
    timezone: '8'
  },
  {
    name: 'Langkawi Intl ',
    city: 'Langkawi',
    country: 'Malaysia',
    IATA: 'LGK',
    ICAO: 'WMKL',
    lat: '6.329730033874512',
    lon: '99.72869873046875',
    timezone: '8'
  },
  {
    name: 'Malacca ',
    city: 'Malacca',
    country: 'Malaysia',
    IATA: 'MKZ',
    ICAO: 'WMKM',
    lat: '2.2633600235',
    lon: '102.251998901',
    timezone: '8'
  },
  {
    name: 'Sultan Mahmud ',
    city: 'Kuala Terengganu',
    country: 'Malaysia',
    IATA: 'TGG',
    ICAO: 'WMKN',
    lat: '5.3826398849487305',
    lon: '103.10299682617188',
    timezone: '8'
  },
  {
    name: 'Penang Intl ',
    city: 'Penang',
    country: 'Malaysia',
    IATA: 'PEN',
    ICAO: 'WMKP',
    lat: '5.297140121459961',
    lon: '100.2770004272461',
    timezone: '8'
  },
  {
    name: 'Suai ',
    city: 'Suai',
    country: 'East Timor',
    IATA: 'UAI',
    ICAO: 'WPDB',
    lat: '-9.30331039428711',
    lon: '125.28700256347656',
    timezone: '9'
  },
  {
    name: 'Presidente Nicolau Lobato Intl ',
    city: 'Dili',
    country: 'East Timor',
    IATA: 'DIL',
    ICAO: 'WPDL',
    lat: '-8.54640007019',
    lon: '125.526000977',
    timezone: '9'
  },
  {
    name: 'Cakung ',
    city: 'Baucau',
    country: 'East Timor',
    IATA: 'BCH',
    ICAO: 'WPEC',
    lat: '-8.489029884339999',
    lon: '126.401000977',
    timezone: '9'
  },
  {
    name: 'Sembawang Air Base',
    city: 'Sembawang',
    country: 'Singapore',
    IATA: '\\N',
    ICAO: 'WSAG',
    lat: '1.4252599477767944',
    lon: '103.81300354003906',
    timezone: '8'
  },
  {
    name: 'Paya Lebar Air Base',
    city: 'Paya Lebar',
    country: 'Singapore',
    IATA: 'QPG',
    ICAO: 'WSAP',
    lat: '1.3604199886322021',
    lon: '103.91000366210938',
    timezone: '8'
  },
  {
    name: 'Tengah Air Base',
    city: 'Tengah',
    country: 'Singapore',
    IATA: 'TGA',
    ICAO: 'WSAT',
    lat: '1.38725996017',
    lon: '103.708999634',
    timezone: '8'
  },
  {
    name: 'Seletar ',
    city: 'Singapore',
    country: 'Singapore',
    IATA: 'XSP',
    ICAO: 'WSSL',
    lat: '1.416949987411499',
    lon: '103.86799621582031',
    timezone: '8'
  },
  {
    name: 'Singapore Changi ',
    city: 'Singapore',
    country: 'Singapore',
    IATA: 'SIN',
    ICAO: 'WSSS',
    lat: '1.35019',
    lon: '103.994003',
    timezone: '8'
  },
  {
    name: 'Brisbane Archerfield ',
    city: 'Brisbane',
    country: 'Australia',
    IATA: 'ACF',
    ICAO: 'YBAF',
    lat: '-27.5702991486',
    lon: '153.007995605',
    timezone: '10'
  },
  {
    name: 'Northern Peninsula ',
    city: 'Amberley',
    country: 'Australia',
    IATA: 'ABM',
    ICAO: 'YBAM',
    lat: '-10.9508',
    lon: '142.459',
    timezone: '10'
  },
  {
    name: 'Alice Springs ',
    city: 'Alice Springs',
    country: 'Australia',
    IATA: 'ASP',
    ICAO: 'YBAS',
    lat: '-23.806699752807617',
    lon: '133.90199279785156',
    timezone: '9.5'
  },
  {
    name: 'Brisbane Intl ',
    city: 'Brisbane',
    country: 'Australia',
    IATA: 'BNE',
    ICAO: 'YBBN',
    lat: '-27.384199142456055',
    lon: '153.11700439453125',
    timezone: '10'
  },
  {
    name: 'Gold Coast ',
    city: 'Coolangatta',
    country: 'Australia',
    IATA: 'OOL',
    ICAO: 'YBCG',
    lat: '-28.1644001007',
    lon: '153.505004883',
    timezone: '10'
  },
  {
    name: 'Cairns Intl ',
    city: 'Cairns',
    country: 'Australia',
    IATA: 'CNS',
    ICAO: 'YBCS',
    lat: '-16.885799408',
    lon: '145.755004883',
    timezone: '10'
  },
  {
    name: 'Charleville ',
    city: 'Charlieville',
    country: 'Australia',
    IATA: 'CTL',
    ICAO: 'YBCV',
    lat: '-26.4132995605',
    lon: '146.261993408',
    timezone: '10'
  },
  {
    name: 'Mount Isa ',
    city: 'Mount Isa',
    country: 'Australia',
    IATA: 'ISA',
    ICAO: 'YBMA',
    lat: '-20.663900375399997',
    lon: '139.488998413',
    timezone: '10'
  },
  {
    name: 'Sunshine Coast ',
    city: 'Maroochydore',
    country: 'Australia',
    IATA: 'MCY',
    ICAO: 'YBMC',
    lat: '-26.6033',
    lon: '153.091003',
    timezone: '10'
  },
  {
    name: 'Mackay ',
    city: 'Mackay',
    country: 'Australia',
    IATA: 'MKY',
    ICAO: 'YBMK',
    lat: '-21.171699523900003',
    lon: '149.179992676',
    timezone: '10'
  },
  {
    name: 'Proserpine Whitsunday Coast ',
    city: 'Prosserpine',
    country: 'Australia',
    IATA: 'PPP',
    ICAO: 'YBPN',
    lat: '-20.4950008392',
    lon: '148.552001953',
    timezone: '10'
  },
  {
    name: 'Rockhampton ',
    city: 'Rockhampton',
    country: 'Australia',
    IATA: 'ROK',
    ICAO: 'YBRK',
    lat: '-23.3819007874',
    lon: '150.475006104',
    timezone: '10'
  },
  {
    name: 'Townsville ',
    city: 'Townsville',
    country: 'Australia',
    IATA: 'TSV',
    ICAO: 'YBTL',
    lat: '-19.252500534057617',
    lon: '146.76499938964844',
    timezone: '10'
  },
  {
    name: 'Weipa ',
    city: 'Weipa',
    country: 'Australia',
    IATA: 'WEI',
    ICAO: 'YBWP',
    lat: '-12.6786003113',
    lon: '141.925003052',
    timezone: '10'
  },
  {
    name: 'Avalon ',
    city: 'Avalon',
    country: 'Australia',
    IATA: 'AVV',
    ICAO: 'YMAV',
    lat: '-38.039398',
    lon: '144.468994',
    timezone: '10'
  },
  {
    name: 'Albury ',
    city: 'Albury',
    country: 'Australia',
    IATA: 'ABX',
    ICAO: 'YMAY',
    lat: '-36.06779861450195',
    lon: '146.95799255371094',
    timezone: '10'
  },
  {
    name: 'Melbourne Essendon ',
    city: 'Melbourne',
    country: 'Australia',
    IATA: 'MEB',
    ICAO: 'YMEN',
    lat: '-37.7281',
    lon: '144.901993',
    timezone: '10'
  },
  {
    name: 'RAAF Base East Sale',
    city: 'East Sale',
    country: 'Australia',
    IATA: '\\N',
    ICAO: 'YMES',
    lat: '-38.098899841299996',
    lon: '147.149002075',
    timezone: '10'
  },
  {
    name: 'Hobart Intl ',
    city: 'Hobart',
    country: 'Australia',
    IATA: 'HBA',
    ICAO: 'YMHB',
    lat: '-42.836101532',
    lon: '147.509994507',
    timezone: '10'
  },
  {
    name: 'Launceston ',
    city: 'Launceston',
    country: 'Australia',
    IATA: 'LST',
    ICAO: 'YMLT',
    lat: '-41.54529953',
    lon: '147.214004517',
    timezone: '10'
  },
  {
    name: 'Melbourne Moorabbin ',
    city: 'Melbourne',
    country: 'Australia',
    IATA: 'MBW',
    ICAO: 'YMMB',
    lat: '-37.975799560546875',
    lon: '145.1020050048828',
    timezone: '10'
  },
  {
    name: 'Melbourne Intl ',
    city: 'Melbourne',
    country: 'Australia',
    IATA: 'MEL',
    ICAO: 'YMML',
    lat: '-37.673302',
    lon: '144.843002',
    timezone: '10'
  },
  {
    name: 'Adelaide Intl ',
    city: 'Adelaide',
    country: 'Australia',
    IATA: 'ADL',
    ICAO: 'YPAD',
    lat: '-34.945',
    lon: '138.531006',
    timezone: '9.5'
  },
  {
    name: 'RAAF Base Edinburgh',
    city: 'Edinburgh',
    country: 'Australia',
    IATA: '\\N',
    ICAO: 'YPED',
    lat: '-34.70249938964844',
    lon: '138.62100219726562',
    timezone: '9.5'
  },
  {
    name: 'Perth Jandakot ',
    city: 'Perth',
    country: 'Australia',
    IATA: 'JAD',
    ICAO: 'YPJT',
    lat: '-32.09749984741211',
    lon: '115.88099670410156',
    timezone: '8'
  },
  {
    name: 'Karratha ',
    city: 'Karratha',
    country: 'Australia',
    IATA: 'KTA',
    ICAO: 'YPKA',
    lat: '-20.712200164799995',
    lon: '116.773002625',
    timezone: '8'
  },
  {
    name: 'Kalgoorlie Boulder ',
    city: 'Kalgoorlie',
    country: 'Australia',
    IATA: 'KGI',
    ICAO: 'YPKG',
    lat: '-30.789400100699996',
    lon: '121.461997986',
    timezone: '8'
  },
  {
    name: 'Kununurra ',
    city: 'Kununurra',
    country: 'Australia',
    IATA: 'KNX',
    ICAO: 'YPKU',
    lat: '-15.7781000137',
    lon: '128.707992554',
    timezone: '8'
  },
  {
    name: 'Learmonth ',
    city: 'Learmonth',
    country: 'Australia',
    IATA: 'LEA',
    ICAO: 'YPLM',
    lat: '-22.235599517799997',
    lon: '114.088996887',
    timezone: '8'
  },
  {
    name: 'Port Hedland Intl ',
    city: 'Port Hedland',
    country: 'Australia',
    IATA: 'PHE',
    ICAO: 'YPPD',
    lat: '-20.3777999878',
    lon: '118.625999451',
    timezone: '8'
  },
  {
    name: 'Adelaide Parafield ',
    city: 'Adelaide',
    country: 'Australia',
    IATA: '\\N',
    ICAO: 'YPPF',
    lat: '-34.793300628699996',
    lon: '138.632995605',
    timezone: '9.5'
  },
  {
    name: 'Perth Intl ',
    city: 'Perth',
    country: 'Australia',
    IATA: 'PER',
    ICAO: 'YPPH',
    lat: '-31.94029998779297',
    lon: '115.96700286865234',
    timezone: '8'
  },
  {
    name: 'Woomera Airfield',
    city: 'Woomera',
    country: 'Australia',
    IATA: 'UMR',
    ICAO: 'YPWR',
    lat: '-31.14419937133789',
    lon: '136.81700134277344',
    timezone: '9.5'
  },
  {
    name: 'Christmas Island ',
    city: 'Christmas Island',
    country: 'Christmas Island',
    IATA: 'XCH',
    ICAO: 'YPXM',
    lat: '-10.450599670410156',
    lon: '105.69000244140625',
    timezone: '7'
  },
  {
    name: 'Sydney Bankstown ',
    city: 'Sydney',
    country: 'Australia',
    IATA: 'BWU',
    ICAO: 'YSBK',
    lat: '-33.924400329589844',
    lon: '150.98800659179688',
    timezone: '10'
  },
  {
    name: 'Canberra Intl ',
    city: 'Canberra',
    country: 'Australia',
    IATA: 'CBR',
    ICAO: 'YSCB',
    lat: '-35.30690002441406',
    lon: '149.19500732421875',
    timezone: '10'
  },
  {
    name: 'Coffs Harbour ',
    city: "Coff's Harbour",
    country: 'Australia',
    IATA: 'CFS',
    ICAO: 'YSCH',
    lat: '-30.3206005096',
    lon: '153.115997314',
    timezone: '10'
  },
  {
    name: 'Camden ',
    city: 'Camden',
    country: 'Australia',
    IATA: 'CDU',
    ICAO: 'YSCN',
    lat: '-34.04029846191406',
    lon: '150.68699645996094',
    timezone: '10'
  },
  {
    name: 'Dubbo City Regional ',
    city: 'Dubbo',
    country: 'Australia',
    IATA: 'DBO',
    ICAO: 'YSDU',
    lat: '-32.2167015076',
    lon: '148.574996948',
    timezone: '10'
  },
  {
    name: 'Norfolk Island Intl ',
    city: 'Norfolk Island',
    country: 'Norfolk Island',
    IATA: 'NLK',
    ICAO: 'YSNF',
    lat: '-29.04159927368164',
    lon: '167.93899536132812',
    timezone: '11'
  },
  {
    name: 'RAAF Base Richmond',
    city: 'Richmond',
    country: 'Australia',
    IATA: 'XRH',
    ICAO: 'YSRI',
    lat: '-33.600601',
    lon: '150.781006',
    timezone: '10'
  },
  {
    name: 'Sydney Kingsford Smith Intl ',
    city: 'Sydney',
    country: 'Australia',
    IATA: 'SYD',
    ICAO: 'YSSY',
    lat: '-33.94609832763672',
    lon: '151.177001953125',
    timezone: '10'
  },
  {
    name: 'Tamworth ',
    city: 'Tamworth',
    country: 'Australia',
    IATA: 'TMW',
    ICAO: 'YSTW',
    lat: '-31.0839004517',
    lon: '150.847000122',
    timezone: '10'
  },
  {
    name: 'Wagga Wagga City ',
    city: 'Wagga Wagga',
    country: 'Australia',
    IATA: 'WGA',
    ICAO: 'YSWG',
    lat: '-35.1652984619',
    lon: '147.466003418',
    timezone: '10'
  },
  {
    name: 'Beijing Capital Intl ',
    city: 'Beijing',
    country: 'China',
    IATA: 'PEK',
    ICAO: 'ZBAA',
    lat: '40.080101013183594',
    lon: '116.58499908447266',
    timezone: '8'
  },
  {
    name: 'Dongshan ',
    city: 'Hailar',
    country: 'China',
    IATA: 'HLD',
    ICAO: 'ZBLA',
    lat: '49.2050018311',
    lon: '119.824996948',
    timezone: '8'
  },
  {
    name: 'Tianjin Binhai Intl ',
    city: 'Tianjin',
    country: 'China',
    IATA: 'TSN',
    ICAO: 'ZBTJ',
    lat: '39.124401092499994',
    lon: '117.346000671',
    timezone: '8'
  },
  {
    name: 'Taiyuan Wusu ',
    city: 'Taiyuan',
    country: 'China',
    IATA: 'TYN',
    ICAO: 'ZBYN',
    lat: '37.74689865112305',
    lon: '112.62799835205078',
    timezone: '8'
  },
  {
    name: 'Guangzhou Baiyun Intl ',
    city: 'Guangzhou',
    country: 'China',
    IATA: 'CAN',
    ICAO: 'ZGGG',
    lat: '23.39240074157715',
    lon: '113.29900360107422',
    timezone: '8'
  },
  {
    name: 'Changsha Huanghua Intl ',
    city: 'Changcha',
    country: 'China',
    IATA: 'CSX',
    ICAO: 'ZGHA',
    lat: '28.189199447599997',
    lon: '113.220001221',
    timezone: '8'
  },
  {
    name: 'Guilin Liangjiang Intl ',
    city: 'Guilin',
    country: 'China',
    IATA: 'KWL',
    ICAO: 'ZGKL',
    lat: '25.21809959411621',
    lon: '110.03900146484375',
    timezone: '8'
  },
  {
    name: 'Nanning Wuxu ',
    city: 'Nanning',
    country: 'China',
    IATA: 'NNG',
    ICAO: 'ZGNN',
    lat: '22.608299255371094',
    lon: '108.1719970703125',
    timezone: '8'
  },
  {
    name: "Shenzhen Bao'an Intl ",
    city: 'Shenzhen',
    country: 'China',
    IATA: 'SZX',
    ICAO: 'ZGSZ',
    lat: '22.639299392700195',
    lon: '113.81099700927734',
    timezone: '8'
  },
  {
    name: 'Zhengzhou Xinzheng Intl ',
    city: 'Zhengzhou',
    country: 'China',
    IATA: 'CGO',
    ICAO: 'ZHCC',
    lat: '34.519699096699995',
    lon: '113.841003418',
    timezone: '8'
  },
  {
    name: 'Wuhan Tianhe Intl ',
    city: 'Wuhan',
    country: 'China',
    IATA: 'WUH',
    ICAO: 'ZHHH',
    lat: '30.7838',
    lon: '114.208',
    timezone: '8'
  },
  {
    name: 'Pyongyang Sunan Intl ',
    city: 'Pyongyang',
    country: 'North Korea',
    IATA: 'FNJ',
    ICAO: 'ZKPY',
    lat: '39.224098',
    lon: '125.669998',
    timezone: '8.5'
  },
  {
    name: 'Lanzhou Zhongchuan ',
    city: 'Lanzhou',
    country: 'China',
    IATA: 'LHW',
    ICAO: 'ZLLL',
    lat: '36.5152015686',
    lon: '103.620002747',
    timezone: '8'
  },
  {
    name: "Xi'an Xianyang Intl ",
    city: "Xi'an",
    country: 'China',
    IATA: 'XIY',
    ICAO: 'ZLXY',
    lat: '34.447102',
    lon: '108.751999',
    timezone: '8'
  },
  {
    name: 'Chinggis Khaan Intl ',
    city: 'Ulan Bator',
    country: 'Mongolia',
    IATA: 'ULN',
    ICAO: 'ZMUB',
    lat: '47.843102',
    lon: '106.766998',
    timezone: '8'
  },
  {
    name: 'Xishuangbanna Gasa ',
    city: 'Jinghonggasa',
    country: 'China',
    IATA: 'JHG',
    ICAO: 'ZPJH',
    lat: '21.973899841308594',
    lon: '100.76000213623047',
    timezone: '8'
  },
  {
    name: 'Kunming Changshui Intl ',
    city: 'Kunming',
    country: 'China',
    IATA: 'KMG',
    ICAO: 'ZPPP',
    lat: '25.1019444',
    lon: '102.9291667',
    timezone: '8'
  },
  {
    name: 'Xiamen Gaoqi Intl ',
    city: 'Xiamen',
    country: 'China',
    IATA: 'XMN',
    ICAO: 'ZSAM',
    lat: '24.54400062561035',
    lon: '118.12799835205078',
    timezone: '8'
  },
  {
    name: 'Nanchang Changbei Intl ',
    city: 'Nanchang',
    country: 'China',
    IATA: 'KHN',
    ICAO: 'ZSCN',
    lat: '28.864999771118164',
    lon: '115.9000015258789',
    timezone: '8'
  },
  {
    name: 'Fuzhou Changle Intl ',
    city: 'Fuzhou',
    country: 'China',
    IATA: 'FOC',
    ICAO: 'ZSFZ',
    lat: '25.935100555419922',
    lon: '119.66300201416016',
    timezone: '8'
  },
  {
    name: 'Hangzhou Xiaoshan Intl ',
    city: 'Hangzhou',
    country: 'China',
    IATA: 'HGH',
    ICAO: 'ZSHC',
    lat: '30.22949981689453',
    lon: '120.43399810791016',
    timezone: '8'
  },
  {
    name: 'Ningbo Lishe Intl ',
    city: 'Ninbo',
    country: 'China',
    IATA: 'NGB',
    ICAO: 'ZSNB',
    lat: '29.82670021057129',
    lon: '121.46199798583984',
    timezone: '8'
  },
  {
    name: 'Nanjing Lukou ',
    city: 'Nanjing',
    country: 'China',
    IATA: 'NKG',
    ICAO: 'ZSNJ',
    lat: '31.742000579833984',
    lon: '118.86199951171875',
    timezone: '8'
  },
  {
    name: 'Hefei Luogang Intl ',
    city: 'Hefei',
    country: 'China',
    IATA: 'HFE',
    ICAO: 'ZSOF',
    lat: '31.780000686645508',
    lon: '117.2979965209961',
    timezone: '8'
  },
  {
    name: 'Liuting ',
    city: 'Qingdao',
    country: 'China',
    IATA: 'TAO',
    ICAO: 'ZSQD',
    lat: '36.2661018372',
    lon: '120.374000549',
    timezone: '8'
  },
  {
    name: 'Shanghai Hongqiao Intl ',
    city: 'Shanghai',
    country: 'China',
    IATA: 'SHA',
    ICAO: 'ZSSS',
    lat: '31.197900772094727',
    lon: '121.33599853515625',
    timezone: '8'
  },
  {
    name: 'Yantai Laishan ',
    city: 'Yantai',
    country: 'China',
    IATA: 'YNT',
    ICAO: 'ZSYT',
    lat: '37.40169906616211',
    lon: '121.37200164794922',
    timezone: '8'
  },
  {
    name: 'Chongqing Jiangbei Intl ',
    city: 'Chongqing',
    country: 'China',
    IATA: 'CKG',
    ICAO: 'ZUCK',
    lat: '29.719200134277344',
    lon: '106.64199829101562',
    timezone: '8'
  },
  {
    name: 'Longdongbao ',
    city: 'Guiyang',
    country: 'China',
    IATA: 'KWE',
    ICAO: 'ZUGY',
    lat: '26.53849983215332',
    lon: '106.8010025024414',
    timezone: '8'
  },
  {
    name: 'Chengdu Shuangliu Intl ',
    city: 'Chengdu',
    country: 'China',
    IATA: 'CTU',
    ICAO: 'ZUUU',
    lat: '30.578500747680664',
    lon: '103.9469985961914',
    timezone: '8'
  },
  {
    name: 'Xichang Qingshan ',
    city: 'Xichang',
    country: 'China',
    IATA: 'XIC',
    ICAO: 'ZUXC',
    lat: '27.989099502563477',
    lon: '102.18399810791016',
    timezone: '8'
  },
  {
    name: 'Kashgar ',
    city: 'Kashi',
    country: 'China',
    IATA: 'KHG',
    ICAO: 'ZWSH',
    lat: '39.5429000854',
    lon: '76.0199966431',
    timezone: '8'
  },
  {
    name: 'Hotan ',
    city: 'Hotan',
    country: 'China',
    IATA: 'HTN',
    ICAO: 'ZWTN',
    lat: '37.03850173950195',
    lon: '79.86489868164062',
    timezone: '8'
  },
  {
    name: '\u00dcr\u00fcmqi Diwopu Intl ',
    city: 'Urumqi',
    country: 'China',
    IATA: 'URC',
    ICAO: 'ZWWW',
    lat: '43.907100677490234',
    lon: '87.47419738769531',
    timezone: '8'
  },
  {
    name: 'Taiping ',
    city: 'Harbin',
    country: 'China',
    IATA: 'HRB',
    ICAO: 'ZYHB',
    lat: '45.6234016418457',
    lon: '126.25',
    timezone: '8'
  },
  {
    name: 'Mudanjiang Hailang Intl ',
    city: 'Mudanjiang',
    country: 'China',
    IATA: 'MDG',
    ICAO: 'ZYMD',
    lat: '44.5241012573',
    lon: '129.569000244',
    timezone: '8'
  },
  {
    name: 'Zhoushuizi ',
    city: 'Dalian',
    country: 'China',
    IATA: 'DLC',
    ICAO: 'ZYTL',
    lat: '38.9656982421875',
    lon: '121.53900146484375',
    timezone: '8'
  },
  {
    name: 'Shanghai Pudong Intl ',
    city: 'Shanghai',
    country: 'China',
    IATA: 'PVG',
    ICAO: 'ZSPD',
    lat: '31.143400192260742',
    lon: '121.80500030517578',
    timezone: '8'
  },
  {
    name: 'Pulau Tioman ',
    city: 'Tioman',
    country: 'Malaysia',
    IATA: 'TOD',
    ICAO: 'WMBT',
    lat: '2.8181800842285156',
    lon: '104.16000366210938',
    timezone: '8'
  },
  {
    name: 'Sultan Abdul Aziz Shah Intl ',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    IATA: 'SZB',
    ICAO: 'WMSA',
    lat: '3.130579948425293',
    lon: '101.54900360107422',
    timezone: '8'
  },
  {
    name: 'Noto ',
    city: 'Wajima',
    country: 'Japan',
    IATA: 'NTQ',
    ICAO: 'RJNW',
    lat: '37.2930984497',
    lon: '136.962005615',
    timezone: '9'
  },
  {
    name: 'Borg El Arab Intl ',
    city: 'Alexandria',
    country: 'Egypt',
    IATA: 'HBE',
    ICAO: 'HEBA',
    lat: '30.917699813842773',
    lon: '29.696399688720703',
    timezone: '2'
  },
  {
    name: 'Barter Island LRRS ',
    city: 'Barter Island',
    country: 'United States',
    IATA: 'BTI',
    ICAO: 'PABA',
    lat: '70.1340026855',
    lon: '-143.582000732',
    timezone: '-9'
  },
  {
    name: 'Wainwright Air Station',
    city: 'Fort Wainwright',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'PAWT',
    lat: '70.61340332',
    lon: '-159.8600006',
    timezone: '-9'
  },
  {
    name: 'Cape Lisburne LRRS ',
    city: 'Cape Lisburne',
    country: 'United States',
    IATA: 'LUR',
    ICAO: 'PALU',
    lat: '68.87509918',
    lon: '-166.1100006',
    timezone: '-9'
  },
  {
    name: 'Point Lay LRRS ',
    city: 'Point Lay',
    country: 'United States',
    IATA: 'PIZ',
    ICAO: 'PPIZ',
    lat: '69.73290253',
    lon: '-163.0050049',
    timezone: '-9'
  },
  {
    name: 'Hilo Intl ',
    city: 'Hilo',
    country: 'United States',
    IATA: 'ITO',
    ICAO: 'PHTO',
    lat: '19.721399307250977',
    lon: '-155.04800415039062',
    timezone: '-10'
  },
  {
    name: 'Orlando Executive ',
    city: 'Orlando',
    country: 'United States',
    IATA: 'ORL',
    ICAO: 'KORL',
    lat: '28.5455',
    lon: '-81.332901',
    timezone: '-5'
  },
  {
    name: 'Bettles ',
    city: 'Bettles',
    country: 'United States',
    IATA: 'BTT',
    ICAO: 'PABT',
    lat: '66.91390228',
    lon: '-151.529007',
    timezone: '-9'
  },
  {
    name: 'Clear ',
    city: 'Clear Mews',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'PACL',
    lat: '64.301201',
    lon: '-149.119995',
    timezone: '-9'
  },
  {
    name: 'Indian Mountain LRRS ',
    city: 'Indian Mountains',
    country: 'United States',
    IATA: 'UTO',
    ICAO: 'PAIM',
    lat: '65.99279785',
    lon: '-153.7039948',
    timezone: '-9'
  },
  {
    name: 'Fort Yukon ',
    city: 'Fort Yukon',
    country: 'United States',
    IATA: 'FYU',
    ICAO: 'PFYU',
    lat: '66.57150268554688',
    lon: '-145.25',
    timezone: '-9'
  },
  {
    name: 'Sparrevohn LRRS ',
    city: 'Sparrevohn',
    country: 'United States',
    IATA: 'SVW',
    ICAO: 'PASV',
    lat: '61.09740067',
    lon: '-155.5740051',
    timezone: '-9'
  },
  {
    name: 'Bryant Army Heliport',
    city: 'Fort Richardson',
    country: 'United States',
    IATA: 'FRN',
    ICAO: 'PAFR',
    lat: '61.26639938',
    lon: '-149.6529999',
    timezone: '-9'
  },
  {
    name: 'Tatalina LRRS ',
    city: 'Tatalina',
    country: 'United States',
    IATA: 'TLJ',
    ICAO: 'PATL',
    lat: '62.894401550299996',
    lon: '-155.977005005',
    timezone: '-9'
  },
  {
    name: 'Cape Romanzof LRRS ',
    city: 'Cape Romanzof',
    country: 'United States',
    IATA: 'CZF',
    ICAO: 'PACZ',
    lat: '61.78030014',
    lon: '-166.0390015',
    timezone: '-9'
  },
  {
    name: 'Laurence G Hanscom Field',
    city: 'Bedford',
    country: 'United States',
    IATA: 'BED',
    ICAO: 'KBED',
    lat: '42.47000122',
    lon: '-71.28900146',
    timezone: '-5'
  },
  {
    name: 'St Paul Island ',
    city: 'St. Paul Island',
    country: 'United States',
    IATA: 'SNP',
    ICAO: 'PASN',
    lat: '57.167301177978516',
    lon: '-170.22000122070312',
    timezone: '-9'
  },
  {
    name: 'Cape Newenham LRRS ',
    city: 'Cape Newenham',
    country: 'United States',
    IATA: 'EHM',
    ICAO: 'PAEH',
    lat: '58.646400451699996',
    lon: '-162.06300354',
    timezone: '-9'
  },
  {
    name: 'St George ',
    city: 'Point Barrow',
    country: 'United States',
    IATA: 'STG',
    ICAO: 'PAPB',
    lat: '56.578300476100004',
    lon: '-169.662002563',
    timezone: '-9'
  },
  {
    name: 'Iliamna ',
    city: 'Iliamna',
    country: 'United States',
    IATA: 'ILI',
    ICAO: 'PAIL',
    lat: '59.75439835',
    lon: '-154.9109955',
    timezone: '-9'
  },
  {
    name: 'Platinum ',
    city: 'Port Moller',
    country: 'United States',
    IATA: 'PTU',
    ICAO: 'PAPM',
    lat: '59.01139831542969',
    lon: '-161.82000732421875',
    timezone: '-9'
  },
  {
    name: 'Big Mountain ',
    city: 'Big Mountain',
    country: 'United States',
    IATA: 'BMX',
    ICAO: 'PABM',
    lat: '59.3611984253',
    lon: '-155.259002686',
    timezone: '-9'
  },
  {
    name: 'Oscoda Wurtsmith ',
    city: 'Oscoda',
    country: 'United States',
    IATA: 'OSC',
    ICAO: 'KOSC',
    lat: '44.451599',
    lon: '-83.394096',
    timezone: '-5'
  },
  {
    name: 'Marina Municipal ',
    city: 'Fort Ord',
    country: 'United States',
    IATA: 'OAR',
    ICAO: 'KOAR',
    lat: '36.68190002',
    lon: '-121.762001',
    timezone: '-8'
  },
  {
    name: 'Sacramento Mather ',
    city: 'Sacramento',
    country: 'United States',
    IATA: 'MHR',
    ICAO: 'KMHR',
    lat: '38.55390167',
    lon: '-121.2979965',
    timezone: '-8'
  },
  {
    name: 'Bicycle Lake Army Air Field',
    city: 'Fort Irwin',
    country: 'United States',
    IATA: 'BYS',
    ICAO: 'KBYS',
    lat: '35.2804985046',
    lon: '-116.629997253',
    timezone: '-8'
  },
  {
    name: 'Twentynine Palms (Self) ',
    city: 'Twenty Nine Palms',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNXP',
    lat: '34.2961998',
    lon: '-116.1620026',
    timezone: '-8'
  },
  {
    name: 'Fort Smith Regional ',
    city: 'Fort Smith',
    country: 'United States',
    IATA: 'FSM',
    ICAO: 'KFSM',
    lat: '35.33660125732422',
    lon: '-94.36740112304688',
    timezone: '-6'
  },
  {
    name: 'Merrill Field',
    city: 'Anchorage',
    country: 'United States',
    IATA: 'MRI',
    ICAO: 'PAMR',
    lat: '61.2135009765625',
    lon: '-149.843994140625',
    timezone: '-9'
  },
  {
    name: 'Grants-Milan Municipal ',
    city: 'Grants',
    country: 'United States',
    IATA: 'GNT',
    ICAO: 'KGNT',
    lat: '35.167301178',
    lon: '-107.902000427',
    timezone: '-7'
  },
  {
    name: 'Ponca City Regional ',
    city: 'Ponca City',
    country: 'United States',
    IATA: 'PNC',
    ICAO: 'KPNC',
    lat: '36.73199844',
    lon: '-97.09980011',
    timezone: '-6'
  },
  {
    name: 'Hunter Army Air Field',
    city: 'Hunter Aaf',
    country: 'United States',
    IATA: 'SVN',
    ICAO: 'KSVN',
    lat: '32.00999832',
    lon: '-81.14569855',
    timezone: '-5'
  },
  {
    name: 'Grand Forks Intl ',
    city: 'Grand Forks',
    country: 'United States',
    IATA: 'GFK',
    ICAO: 'KGFK',
    lat: '47.949299',
    lon: '-97.176102',
    timezone: '-6'
  },
  {
    name: 'Whiting Field Naval Air Station - North',
    city: 'Milton',
    country: 'United States',
    IATA: 'NSE',
    ICAO: 'KNSE',
    lat: '30.7241993',
    lon: '-87.02189636',
    timezone: '-6'
  },
  {
    name: 'Hana ',
    city: 'Hana',
    country: 'United States',
    IATA: 'HNM',
    ICAO: 'PHHN',
    lat: '20.79560089111328',
    lon: '-156.01400756835938',
    timezone: '-10'
  },
  {
    name: 'Ernest A. Love Field',
    city: 'Prescott',
    country: 'United States',
    IATA: 'PRC',
    ICAO: 'KPRC',
    lat: '34.65449905',
    lon: '-112.4199982',
    timezone: '-7'
  },
  {
    name: 'Trenton Mercer ',
    city: 'Trenton',
    country: 'United States',
    IATA: 'TTN',
    ICAO: 'KTTN',
    lat: '40.27669906616211',
    lon: '-74.8134994506836',
    timezone: '-5'
  },
  {
    name: 'General Edward Lawrence Logan Intl ',
    city: 'Boston',
    country: 'United States',
    IATA: 'BOS',
    ICAO: 'KBOS',
    lat: '42.36429977',
    lon: '-71.00520325',
    timezone: '-5'
  },
  {
    name: 'Travis Air Force Base',
    city: 'Fairfield',
    country: 'United States',
    IATA: 'SUU',
    ICAO: 'KSUU',
    lat: '38.262699127197',
    lon: '-121.92700195312',
    timezone: '-8'
  },
  {
    name: 'Griffiss Intl ',
    city: 'Rome',
    country: 'United States',
    IATA: 'RME',
    ICAO: 'KRME',
    lat: '43.23379898',
    lon: '-75.40699768',
    timezone: '-5'
  },
  {
    name: 'Wendover ',
    city: 'Wendover',
    country: 'United States',
    IATA: 'ENV',
    ICAO: 'KENV',
    lat: '40.7187004089',
    lon: '-114.03099823',
    timezone: '-7'
  },
  {
    name: 'Mobile Downtown ',
    city: 'Mobile',
    country: 'United States',
    IATA: 'BFM',
    ICAO: 'KBFM',
    lat: '30.626800537100003',
    lon: '-88.06809997559999',
    timezone: '-6'
  },
  {
    name: 'Metropolitan Oakland Intl ',
    city: 'Oakland',
    country: 'United States',
    IATA: 'OAK',
    ICAO: 'KOAK',
    lat: '37.721298',
    lon: '-122.221001',
    timezone: '-8'
  },
  {
    name: 'Eppley Airfield',
    city: 'Omaha',
    country: 'United States',
    IATA: 'OMA',
    ICAO: 'KOMA',
    lat: '41.3032',
    lon: '-95.894096',
    timezone: '-6'
  },
  {
    name: 'Port Angeles Cgas ',
    city: 'Port Angeles',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNOW',
    lat: '48.14149856567383',
    lon: '-123.41400146484375',
    timezone: '-8'
  },
  {
    name: 'Kahului ',
    city: 'Kahului',
    country: 'United States',
    IATA: 'OGG',
    ICAO: 'PHOG',
    lat: '20.8986',
    lon: '-156.429993',
    timezone: '-10'
  },
  {
    name: 'Wichita Eisenhower National ',
    city: 'Wichita',
    country: 'United States',
    IATA: 'ICT',
    ICAO: 'KICT',
    lat: '37.649899',
    lon: '-97.433098',
    timezone: '-6'
  },
  {
    name: 'Kansas City Intl ',
    city: 'Kansas City',
    country: 'United States',
    IATA: 'MCI',
    ICAO: 'KMCI',
    lat: '39.2976',
    lon: '-94.713898',
    timezone: '-6'
  },
  {
    name: 'Dane County Regional Truax Field',
    city: 'Madison',
    country: 'United States',
    IATA: 'MSN',
    ICAO: 'KMSN',
    lat: '43.13990020751953',
    lon: '-89.3375015258789',
    timezone: '-6'
  },
  {
    name: 'Dillingham ',
    city: 'Dillingham',
    country: 'United States',
    IATA: 'DLG',
    ICAO: 'PADL',
    lat: '59.04470062',
    lon: '-158.5050049',
    timezone: '-9'
  },
  {
    name: 'Boone County ',
    city: 'Harrison',
    country: 'United States',
    IATA: 'HRO',
    ICAO: 'KHRO',
    lat: '36.26150131225586',
    lon: '-93.15470123291016',
    timezone: '-6'
  },
  {
    name: 'Phoenix Sky Harbor Intl ',
    city: 'Phoenix',
    country: 'United States',
    IATA: 'PHX',
    ICAO: 'KPHX',
    lat: '33.43429946899414',
    lon: '-112.01200103759766',
    timezone: '-7'
  },
  {
    name: 'Bangor Intl ',
    city: 'Bangor',
    country: 'United States',
    IATA: 'BGR',
    ICAO: 'KBGR',
    lat: '44.80739974975586',
    lon: '-68.8281021118164',
    timezone: '-5'
  },
  {
    name: 'Fort Lauderdale Executive ',
    city: 'Fort Lauderdale',
    country: 'United States',
    IATA: 'FXE',
    ICAO: 'KFXE',
    lat: '26.1972999573',
    lon: '-80.1707000732',
    timezone: '-5'
  },
  {
    name: 'East Texas Regional ',
    city: 'Longview',
    country: 'United States',
    IATA: 'GGG',
    ICAO: 'KGGG',
    lat: '32.38399887084961',
    lon: '-94.71150207519531',
    timezone: '-6'
  },
  {
    name: 'Anderson Regional ',
    city: 'Andersen',
    country: 'United States',
    IATA: 'AND',
    ICAO: 'KAND',
    lat: '34.4945983887',
    lon: '-82.70939636230001',
    timezone: '-5'
  },
  {
    name: 'Spokane Intl ',
    city: 'Spokane',
    country: 'United States',
    IATA: 'GEG',
    ICAO: 'KGEG',
    lat: '47.61989974975586',
    lon: '-117.53399658203125',
    timezone: '-8'
  },
  {
    name: 'North Perry ',
    city: 'Hollywood',
    country: 'United States',
    IATA: 'HWO',
    ICAO: 'KHWO',
    lat: '26.0012',
    lon: '-80.2407',
    timezone: '-5'
  },
  {
    name: 'San Francisco Intl ',
    city: 'San Francisco',
    country: 'United States',
    IATA: 'SFO',
    ICAO: 'KSFO',
    lat: '37.61899948120117',
    lon: '-122.375',
    timezone: '-8'
  },
  {
    name: 'Cut Bank Intl ',
    city: 'Cutbank',
    country: 'United States',
    IATA: 'CTB',
    ICAO: 'KCTB',
    lat: '48.6083984375',
    lon: '-112.375999451',
    timezone: '-7'
  },
  {
    name: 'Acadiana Regional ',
    city: 'Louisiana',
    country: 'United States',
    IATA: 'ARA',
    ICAO: 'KARA',
    lat: '30.0378',
    lon: '-91.883904',
    timezone: '-6'
  },
  {
    name: 'Gainesville Regional ',
    city: 'Gainesville',
    country: 'United States',
    IATA: 'GNV',
    ICAO: 'KGNV',
    lat: '29.6900997162',
    lon: '-82.2717971802',
    timezone: '-5'
  },
  {
    name: 'Memphis Intl ',
    city: 'Memphis',
    country: 'United States',
    IATA: 'MEM',
    ICAO: 'KMEM',
    lat: '35.04240036010742',
    lon: '-89.97669982910156',
    timezone: '-6'
  },
  {
    name: 'Bisbee Douglas Intl ',
    city: 'Douglas',
    country: 'United States',
    IATA: 'DUG',
    ICAO: 'KDUG',
    lat: '31.4689998627',
    lon: '-109.603996277',
    timezone: '-7'
  },
  {
    name: 'Allen Army Airfield',
    city: 'Delta Junction',
    country: 'United States',
    IATA: 'BIG',
    ICAO: 'PABI',
    lat: '63.9944992065',
    lon: '-145.722000122',
    timezone: '-9'
  },
  {
    name: 'TSTC Waco ',
    city: 'Waco',
    country: 'United States',
    IATA: 'CNW',
    ICAO: 'KCNW',
    lat: '31.637800216699997',
    lon: '-97.0740966797',
    timezone: '-6'
  },
  {
    name: 'Annette Island ',
    city: 'Annette Island',
    country: 'United States',
    IATA: 'ANN',
    ICAO: 'PANT',
    lat: '55.04240036010742',
    lon: '-131.57200622558594',
    timezone: '-9'
  },
  {
    name: 'Caribou Municipal ',
    city: 'Caribou',
    country: 'United States',
    IATA: 'CAR',
    ICAO: 'KCAR',
    lat: '46.871498107899995',
    lon: '-68.0178985596',
    timezone: '-5'
  },
  {
    name: 'Little Rock Air Force Base',
    city: 'Jacksonville',
    country: 'United States',
    IATA: 'LRF',
    ICAO: 'KLRF',
    lat: '34.916900634799994',
    lon: '-92.14969635010002',
    timezone: '-6'
  },
  {
    name: 'Redstone Army Air Field',
    city: 'Redstone',
    country: 'United States',
    IATA: 'HUA',
    ICAO: 'KHUA',
    lat: '34.67869949',
    lon: '-86.68479919',
    timezone: '-6'
  },
  {
    name: 'Pope Field',
    city: 'Fort Bragg',
    country: 'United States',
    IATA: 'POB',
    ICAO: 'KPOB',
    lat: '35.1708984375',
    lon: '-79.014503479004',
    timezone: '-5'
  },
  {
    name: 'Dalhart Municipal ',
    city: 'Dalhart',
    country: 'United States',
    IATA: 'DHT',
    ICAO: 'KDHT',
    lat: '36.0225982666',
    lon: '-102.54699707',
    timezone: '-6'
  },
  {
    name: 'DLF ',
    city: 'Del Rio',
    country: 'United States',
    IATA: 'DLF',
    ICAO: 'KDLF',
    lat: '29.359501',
    lon: '-100.778002',
    timezone: '-6'
  },
  {
    name: 'Los Angeles Intl ',
    city: 'Los Angeles',
    country: 'United States',
    IATA: 'LAX',
    ICAO: 'KLAX',
    lat: '33.94250107',
    lon: '-118.4079971',
    timezone: '-8'
  },
  {
    name: 'Anniston Regional ',
    city: 'Anniston',
    country: 'United States',
    IATA: 'ANB',
    ICAO: 'KANB',
    lat: '33.5882',
    lon: '-85.8581',
    timezone: '-6'
  },
  {
    name: 'Cleveland Hopkins Intl ',
    city: 'Cleveland',
    country: 'United States',
    IATA: 'CLE',
    ICAO: 'KCLE',
    lat: '41.4117012024',
    lon: '-81.8498001099',
    timezone: '-5'
  },
  {
    name: 'Dover Air Force Base',
    city: 'Dover',
    country: 'United States',
    IATA: 'DOV',
    ICAO: 'KDOV',
    lat: '39.12950134',
    lon: '-75.46600342',
    timezone: '-5'
  },
  {
    name: 'Cincinnati Northern Kentucky Intl ',
    city: 'Cincinnati',
    country: 'United States',
    IATA: 'CVG',
    ICAO: 'KCVG',
    lat: '39.0488014221',
    lon: '-84.6678009033',
    timezone: '-5'
  },
  {
    name: 'Tipton ',
    city: 'Fort Meade',
    country: 'United States',
    IATA: 'FME',
    ICAO: 'KFME',
    lat: '39.08539962769999',
    lon: '-76.7593994141',
    timezone: '-5'
  },
  {
    name: 'China Lake Naws (Armitage Field) ',
    city: 'China Lake',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNID',
    lat: '35.6853981',
    lon: '-117.6920013',
    timezone: '-8'
  },
  {
    name: 'Huron Regional ',
    city: 'Huron',
    country: 'United States',
    IATA: 'HON',
    ICAO: 'KHON',
    lat: '44.38520050048828',
    lon: '-98.22850036621094',
    timezone: '-6'
  },
  {
    name: 'Juneau Intl ',
    city: 'Juneau',
    country: 'United States',
    IATA: 'JNU',
    ICAO: 'PAJN',
    lat: '58.35499954223633',
    lon: '-134.5760040283203',
    timezone: '-9'
  },
  {
    name: 'Lafayette Regional ',
    city: 'Lafayette',
    country: 'United States',
    IATA: 'LFT',
    ICAO: 'KLFT',
    lat: '30.20529938',
    lon: '-91.98760223',
    timezone: '-6'
  },
  {
    name: 'Newark Liberty Intl ',
    city: 'Newark',
    country: 'United States',
    IATA: 'EWR',
    ICAO: 'KEWR',
    lat: '40.692501068115234',
    lon: '-74.168701171875',
    timezone: '-5'
  },
  {
    name: 'Boise Air Terminal/Gowen Field',
    city: 'Boise',
    country: 'United States',
    IATA: 'BOI',
    ICAO: 'KBOI',
    lat: '43.5644',
    lon: '-116.223',
    timezone: '-7'
  },
  {
    name: 'Creech Air Force Base',
    city: 'Indian Springs',
    country: 'United States',
    IATA: 'INS',
    ICAO: 'KINS',
    lat: '36.587200164799995',
    lon: '-115.672996521',
    timezone: '-8'
  },
  {
    name: 'Garden City Regional ',
    city: 'Garden City',
    country: 'United States',
    IATA: 'GCK',
    ICAO: 'KGCK',
    lat: '37.9275016785',
    lon: '-100.723999023',
    timezone: '-6'
  },
  {
    name: 'Minot Intl ',
    city: 'Minot',
    country: 'United States',
    IATA: 'MOT',
    ICAO: 'KMOT',
    lat: '48.2593994140625',
    lon: '-101.27999877929688',
    timezone: '-6'
  },
  {
    name: 'Wheeler Army Airfield',
    city: 'Wahiawa',
    country: 'United States',
    IATA: 'HHI',
    ICAO: 'PHHI',
    lat: '21.48349953',
    lon: '-158.0399933',
    timezone: '-10'
  },
  {
    name: 'Maxwell Air Force Base',
    city: 'Montgomery',
    country: 'United States',
    IATA: 'MXF',
    ICAO: 'KMXF',
    lat: '32.3829',
    lon: '-86.365799',
    timezone: '-6'
  },
  {
    name: 'Robinson Army Air Field',
    city: 'Robinson',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KRBM',
    lat: '34.85010147',
    lon: '-92.30020142',
    timezone: '-6'
  },
  {
    name: 'Dallas Love Field',
    city: 'Dallas',
    country: 'United States',
    IATA: 'DAL',
    ICAO: 'KDAL',
    lat: '32.847099',
    lon: '-96.851799',
    timezone: '-6'
  },
  {
    name: 'Butts AAF (Fort Carson) Air Field',
    city: 'Fort Carson',
    country: 'United States',
    IATA: 'FCS',
    ICAO: 'KFCS',
    lat: '38.67839813',
    lon: '-104.7570038',
    timezone: '-7'
  },
  {
    name: 'Helena Regional ',
    city: 'Helena',
    country: 'United States',
    IATA: 'HLN',
    ICAO: 'KHLN',
    lat: '46.6068000793457',
    lon: '-111.98300170898438',
    timezone: '-7'
  },
  {
    name: 'Miramar Marine Corps Air Station - Mitscher Field',
    city: 'Miramar',
    country: 'United States',
    IATA: 'NKX',
    ICAO: 'KNKX',
    lat: '32.86840057',
    lon: '-117.1429977',
    timezone: '-8'
  },
  {
    name: 'Luke Air Force Base',
    city: 'Phoenix',
    country: 'United States',
    IATA: 'LUF',
    ICAO: 'KLUF',
    lat: '33.534999847399995',
    lon: '-112.383003235',
    timezone: '-7'
  },
  {
    name: 'Hurlburt Field',
    city: 'Mary Esther',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KHRT',
    lat: '30.427799224853516',
    lon: '-86.68930053710938',
    timezone: '-6'
  },
  {
    name: 'Jack Northrop Field Hawthorne Municipal ',
    city: 'Hawthorne',
    country: 'United States',
    IATA: 'HHR',
    ICAO: 'KHHR',
    lat: '33.922798',
    lon: '-118.334999',
    timezone: '-8'
  },
  {
    name: 'Houlton Intl ',
    city: 'Houlton',
    country: 'United States',
    IATA: 'HUL',
    ICAO: 'KHUL',
    lat: '46.1231002808',
    lon: '-67.792098999',
    timezone: '-5'
  },
  {
    name: 'Vance Air Force Base',
    city: 'Enid',
    country: 'United States',
    IATA: 'END',
    ICAO: 'KEND',
    lat: '36.339199066199996',
    lon: '-97.9164962769',
    timezone: '-6'
  },
  {
    name: 'Point Mugu Naval Air Station (Naval Base Ventura Co)',
    city: 'Point Mugu',
    country: 'United States',
    IATA: 'NTD',
    ICAO: 'KNTD',
    lat: '34.120300293',
    lon: '-119.121002197',
    timezone: '-8'
  },
  {
    name: 'Edwards Air Force Base',
    city: 'Edwards Afb',
    country: 'United States',
    IATA: 'EDW',
    ICAO: 'KEDW',
    lat: '34.905399',
    lon: '-117.884003',
    timezone: '-8'
  },
  {
    name: 'Lake Charles Regional ',
    city: 'Lake Charles',
    country: 'United States',
    IATA: 'LCH',
    ICAO: 'KLCH',
    lat: '30.126100540161133',
    lon: '-93.22329711914062',
    timezone: '-6'
  },
  {
    name: 'Ellison Onizuka Kona Intl At Keahole ',
    city: 'Kona',
    country: 'United States',
    IATA: 'KOA',
    ICAO: 'PHKO',
    lat: '19.738783',
    lon: '-156.045603',
    timezone: '-10'
  },
  {
    name: 'Myrtle Beach Intl ',
    city: 'Myrtle Beach',
    country: 'United States',
    IATA: 'MYR',
    ICAO: 'KMYR',
    lat: '33.6796989441',
    lon: '-78.9282989502',
    timezone: '-5'
  },
  {
    name: 'Lemoore Naval Air Station (Reeves Field) ',
    city: 'Lemoore',
    country: 'United States',
    IATA: 'NLC',
    ICAO: 'KNLC',
    lat: '36.33300018',
    lon: '-119.9520035',
    timezone: '-8'
  },
  {
    name: 'Nantucket Memorial ',
    city: 'Nantucket',
    country: 'United States',
    IATA: 'ACK',
    ICAO: 'KACK',
    lat: '41.25310135',
    lon: '-70.06020355',
    timezone: '-5'
  },
  {
    name: 'Felker Army Air Field',
    city: 'Fort Eustis',
    country: 'United States',
    IATA: 'FAF',
    ICAO: 'KFAF',
    lat: '37.132499694799996',
    lon: '-76.60880279540001',
    timezone: '-5'
  },
  {
    name: 'Campbell AAF (Fort Campbell) Air Field',
    city: 'Hopkinsville',
    country: 'United States',
    IATA: 'HOP',
    ICAO: 'KHOP',
    lat: '36.668598175',
    lon: '-87.49620056150002',
    timezone: '-6'
  },
  {
    name: 'Ronald Reagan Washington National ',
    city: 'Washington',
    country: 'United States',
    IATA: 'DCA',
    ICAO: 'KDCA',
    lat: '38.8521',
    lon: '-77.037697',
    timezone: '-5'
  },
  {
    name: 'Patuxent River Naval Air Station (Trapnell Field)',
    city: 'Patuxent River',
    country: 'United States',
    IATA: 'NHK',
    ICAO: 'KNHK',
    lat: '38.285999',
    lon: '-76.411797',
    timezone: '-5'
  },
  {
    name: 'Palacios Municipal ',
    city: 'Palacios',
    country: 'United States',
    IATA: 'PSX',
    ICAO: 'KPSX',
    lat: '28.727500915527',
    lon: '-96.250999450684',
    timezone: '-6'
  },
  {
    name: 'Arkansas Intl ',
    city: 'Blytheville',
    country: 'United States',
    IATA: 'BYH',
    ICAO: 'KBYH',
    lat: '35.9642982483',
    lon: '-89.94400024410001',
    timezone: '-6'
  },
  {
    name: 'Atlantic City Intl ',
    city: 'Atlantic City',
    country: 'United States',
    IATA: 'ACY',
    ICAO: 'KACY',
    lat: '39.45759963989258',
    lon: '-74.57720184326172',
    timezone: '-5'
  },
  {
    name: 'Tinker Air Force Base',
    city: 'Oklahoma City',
    country: 'United States',
    IATA: 'TIK',
    ICAO: 'KTIK',
    lat: '35.414699554443',
    lon: '-97.386596679688',
    timezone: '-6'
  },
  {
    name: 'Elizabeth City Regional  & Coast Guard Air Station',
    city: 'Elizabeth City',
    country: 'United States',
    IATA: 'ECG',
    ICAO: 'KECG',
    lat: '36.26060104',
    lon: '-76.17459869',
    timezone: '-5'
  },
  {
    name: 'Pueblo Memorial ',
    city: 'Pueblo',
    country: 'United States',
    IATA: 'PUB',
    ICAO: 'KPUB',
    lat: '38.289100646972656',
    lon: '-104.49700164794922',
    timezone: '-7'
  },
  {
    name: 'Northern Maine Regional  at Presque Isle',
    city: 'Presque Isle',
    country: 'United States',
    IATA: 'PQI',
    ICAO: 'KPQI',
    lat: '46.68899918',
    lon: '-68.0447998',
    timezone: '-5'
  },
  {
    name: 'Gray Army Air Field',
    city: 'Fort Lewis',
    country: 'United States',
    IATA: 'GRF',
    ICAO: 'KGRF',
    lat: '47.07920074',
    lon: '-122.5810013',
    timezone: '-8'
  },
  {
    name: 'Kodiak ',
    city: 'Kodiak',
    country: 'United States',
    IATA: 'ADQ',
    ICAO: 'PADQ',
    lat: '57.75',
    lon: '-152.4940033',
    timezone: '-9'
  },
  {
    name: 'Upolu ',
    city: 'Opolu',
    country: 'United States',
    IATA: 'UPP',
    ICAO: 'PHUP',
    lat: '20.265300750732422',
    lon: '-155.86000061035156',
    timezone: '-10'
  },
  {
    name: 'Fort Lauderdale Hollywood Intl ',
    city: 'Fort Lauderdale',
    country: 'United States',
    IATA: 'FLL',
    ICAO: 'KFLL',
    lat: '26.072599',
    lon: '-80.152702',
    timezone: '-5'
  },
  {
    name: 'Muskogee-Davis Regional ',
    city: 'Muskogee',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KMKO',
    lat: '35.656502',
    lon: '-95.366699',
    timezone: '-6'
  },
  {
    name: 'Falls Intl ',
    city: 'International Falls',
    country: 'United States',
    IATA: 'INL',
    ICAO: 'KINL',
    lat: '48.566200256347656',
    lon: '-93.4030990600586',
    timezone: '-6'
  },
  {
    name: 'Salt Lake City Intl ',
    city: 'Salt Lake City',
    country: 'United States',
    IATA: 'SLC',
    ICAO: 'KSLC',
    lat: '40.78839874267578',
    lon: '-111.97799682617188',
    timezone: '-7'
  },
  {
    name: 'Childress Municipal ',
    city: 'Childress',
    country: 'United States',
    IATA: 'CDS',
    ICAO: 'KCDS',
    lat: '34.4337997437',
    lon: '-100.288002014',
    timezone: '-6'
  },
  {
    name: 'Keesler Air Force Base',
    city: 'Biloxi',
    country: 'United States',
    IATA: 'BIX',
    ICAO: 'KBIX',
    lat: '30.4104003906',
    lon: '-88.92440032959999',
    timezone: '-6'
  },
  {
    name: 'Lawson Army Air Field (Fort Benning)',
    city: 'Fort Benning',
    country: 'United States',
    IATA: 'LSF',
    ICAO: 'KLSF',
    lat: '32.337299346900004',
    lon: '-84.9913024902',
    timezone: '-5'
  },
  {
    name: 'Kingsville Naval Air Station',
    city: 'Kingsville',
    country: 'United States',
    IATA: 'NQI',
    ICAO: 'KNQI',
    lat: '27.5072002411',
    lon: '-97.8097000122',
    timezone: '-6'
  },
  {
    name: 'Marshall Army Air Field',
    city: 'Fort Riley',
    country: 'United States',
    IATA: 'FRI',
    ICAO: 'KFRI',
    lat: '39.05530167',
    lon: '-96.76450348',
    timezone: '-6'
  },
  {
    name: 'Harrisburg Intl ',
    city: 'Harrisburg',
    country: 'United States',
    IATA: 'MDT',
    ICAO: 'KMDT',
    lat: '40.1935005188',
    lon: '-76.7633972168',
    timezone: '-5'
  },
  {
    name: 'Lincoln ',
    city: 'Lincoln',
    country: 'United States',
    IATA: 'LNK',
    ICAO: 'KLNK',
    lat: '40.85100173950195',
    lon: '-96.75920104980469',
    timezone: '-6'
  },
  {
    name: 'Capital City ',
    city: 'Lansing',
    country: 'United States',
    IATA: 'LAN',
    ICAO: 'KLAN',
    lat: '42.77870178222656',
    lon: '-84.58740234375',
    timezone: '-5'
  },
  {
    name: 'Waimea Kohala ',
    city: 'Kamuela',
    country: 'United States',
    IATA: 'MUE',
    ICAO: 'PHMU',
    lat: '20.001300811767578',
    lon: '-155.66799926757812',
    timezone: '-10'
  },
  {
    name: 'Massena Intl Richards Field',
    city: 'Massena',
    country: 'United States',
    IATA: 'MSS',
    ICAO: 'KMSS',
    lat: '44.93579864501953',
    lon: '-74.84559631347656',
    timezone: '-5'
  },
  {
    name: 'Hickory Regional ',
    city: 'Hickory',
    country: 'United States',
    IATA: 'HKY',
    ICAO: 'KHKY',
    lat: '35.74110031',
    lon: '-81.38950348',
    timezone: '-5'
  },
  {
    name: 'Albert Whitted ',
    city: 'St. Petersburg',
    country: 'United States',
    IATA: 'SPG',
    ICAO: 'KSPG',
    lat: '27.7651',
    lon: '-82.626999',
    timezone: '-5'
  },
  {
    name: 'Page Field',
    city: 'Fort Myers',
    country: 'United States',
    IATA: 'FMY',
    ICAO: 'KFMY',
    lat: '26.58659935',
    lon: '-81.86329650879999',
    timezone: '-5'
  },
  {
    name: 'George Bush Intercontinental Houston ',
    city: 'Houston',
    country: 'United States',
    IATA: 'IAH',
    ICAO: 'KIAH',
    lat: '29.984399795532227',
    lon: '-95.34140014648438',
    timezone: '-6'
  },
  {
    name: 'Millinocket Municipal ',
    city: 'Millinocket',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KMLT',
    lat: '45.64780044555664',
    lon: '-68.68560028076172',
    timezone: '-5'
  },
  {
    name: 'Joint Base Andrews',
    city: 'Camp Springs',
    country: 'United States',
    IATA: 'ADW',
    ICAO: 'KADW',
    lat: '38.810799',
    lon: '-76.866997',
    timezone: '-5'
  },
  {
    name: 'Smith Reynolds ',
    city: 'Winston-salem',
    country: 'United States',
    IATA: 'INT',
    ICAO: 'KINT',
    lat: '36.13370132446289',
    lon: '-80.22200012207031',
    timezone: '-5'
  },
  {
    name: 'Southern California Logistics ',
    city: 'Victorville',
    country: 'United States',
    IATA: 'VCV',
    ICAO: 'KVCV',
    lat: '34.597499847399995',
    lon: '-117.383003235',
    timezone: '-8'
  },
  {
    name: 'Bob Sikes ',
    city: 'Crestview',
    country: 'United States',
    IATA: 'CEW',
    ICAO: 'KCEW',
    lat: '30.778799057',
    lon: '-86.522102356',
    timezone: '-6'
  },
  {
    name: 'Wheeler Sack Army Air Field',
    city: 'Fort Drum',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KGTB',
    lat: '44.05559921',
    lon: '-75.71949768',
    timezone: '-5'
  },
  {
    name: 'St Clair County Intl ',
    city: 'Port Huron',
    country: 'United States',
    IATA: 'PHN',
    ICAO: 'KPHN',
    lat: '42.9109993',
    lon: '-82.52890015',
    timezone: '-5'
  },
  {
    name: 'Meadows Field',
    city: 'Bakersfield',
    country: 'United States',
    IATA: 'BFL',
    ICAO: 'KBFL',
    lat: '35.43360138',
    lon: '-119.0569992',
    timezone: '-8'
  },
  {
    name: 'El Paso Intl ',
    city: 'El Paso',
    country: 'United States',
    IATA: 'ELP',
    ICAO: 'KELP',
    lat: '31.80719948',
    lon: '-106.3779984',
    timezone: '-7'
  },
  {
    name: 'Valley Intl ',
    city: 'Harlingen',
    country: 'United States',
    IATA: 'HRL',
    ICAO: 'KHRL',
    lat: '26.228500366210938',
    lon: '-97.65440368652344',
    timezone: '-6'
  },
  {
    name: 'Columbia Metropolitan ',
    city: 'Columbia',
    country: 'United States',
    IATA: 'CAE',
    ICAO: 'KCAE',
    lat: '33.93880081176758',
    lon: '-81.11949920654297',
    timezone: '-5'
  },
  {
    name: 'Davis Monthan Air Force Base',
    city: 'Tucson',
    country: 'United States',
    IATA: 'DMA',
    ICAO: 'KDMA',
    lat: '32.1665000916',
    lon: '-110.883003235',
    timezone: '-7'
  },
  {
    name: 'Pensacola Naval Air Station/Forrest Sherman Field',
    city: 'Pensacola',
    country: 'United States',
    IATA: 'NPA',
    ICAO: 'KNPA',
    lat: '30.35269928',
    lon: '-87.31860352',
    timezone: '-6'
  },
  {
    name: 'Pensacola Regional ',
    city: 'Pensacola',
    country: 'United States',
    IATA: 'PNS',
    ICAO: 'KPNS',
    lat: '30.473400115967',
    lon: '-87.186599731445',
    timezone: '-6'
  },
  {
    name: 'Grand Forks Air Force Base',
    city: 'Red River',
    country: 'United States',
    IATA: 'RDR',
    ICAO: 'KRDR',
    lat: '47.961101532',
    lon: '-97.4011993408',
    timezone: '-6'
  },
  {
    name: 'William P Hobby ',
    city: 'Houston',
    country: 'United States',
    IATA: 'HOU',
    ICAO: 'KHOU',
    lat: '29.64539909',
    lon: '-95.27890015',
    timezone: '-6'
  },
  {
    name: 'Buckley Air Force Base',
    city: 'Buckley',
    country: 'United States',
    IATA: 'BFK',
    ICAO: 'KBKF',
    lat: '39.701698303200004',
    lon: '-104.751998901',
    timezone: '-7'
  },
  {
    name: 'Northway ',
    city: 'Northway',
    country: 'United States',
    IATA: 'ORT',
    ICAO: 'PAOR',
    lat: '62.9612999',
    lon: '-141.9290009',
    timezone: '-9'
  },
  {
    name: 'Warren Bud Woods Palmer Municipal ',
    city: 'Palmer',
    country: 'United States',
    IATA: 'PAQ',
    ICAO: 'PAAQ',
    lat: '61.594898',
    lon: '-149.08901',
    timezone: '-9'
  },
  {
    name: 'Pittsburgh Intl ',
    city: 'Pittsburgh',
    country: 'United States',
    IATA: 'PIT',
    ICAO: 'KPIT',
    lat: '40.49150085',
    lon: '-80.23290253',
    timezone: '-5'
  },
  {
    name: 'Wiley Post Will Rogers Memorial ',
    city: 'Barrow',
    country: 'United States',
    IATA: 'BRW',
    ICAO: 'PABR',
    lat: '71.285402',
    lon: '-156.766008',
    timezone: '-9'
  },
  {
    name: 'Ellington ',
    city: 'Houston',
    country: 'United States',
    IATA: 'EFD',
    ICAO: 'KEFD',
    lat: '29.607299804700002',
    lon: '-95.1587982178',
    timezone: '-6'
  },
  {
    name: 'Whidbey Island Naval Air Station (Ault Field)',
    city: 'Whidbey Island',
    country: 'United States',
    IATA: 'NUW',
    ICAO: 'KNUW',
    lat: '48.351799',
    lon: '-122.655998',
    timezone: '-8'
  },
  {
    name: 'Alice Intl ',
    city: 'Alice',
    country: 'United States',
    IATA: 'ALI',
    ICAO: 'KALI',
    lat: '27.740900039699998',
    lon: '-98.02690124510002',
    timezone: '-6'
  },
  {
    name: 'Moody Air Force Base',
    city: 'Valdosta',
    country: 'United States',
    IATA: 'VAD',
    ICAO: 'KVAD',
    lat: '30.9678001404',
    lon: '-83.1930007935',
    timezone: '-5'
  },
  {
    name: 'Miami Intl ',
    city: 'Miami',
    country: 'United States',
    IATA: 'MIA',
    ICAO: 'KMIA',
    lat: '25.79319953918457',
    lon: '-80.29060363769531',
    timezone: '-5'
  },
  {
    name: 'Seattle Tacoma Intl ',
    city: 'Seattle',
    country: 'United States',
    IATA: 'SEA',
    ICAO: 'KSEA',
    lat: '47.449001',
    lon: '-122.308998',
    timezone: '-8'
  },
  {
    name: 'Lovell Field',
    city: 'Chattanooga',
    country: 'United States',
    IATA: 'CHA',
    ICAO: 'KCHA',
    lat: '35.035301208496094',
    lon: '-85.20379638671875',
    timezone: '-5'
  },
  {
    name: 'Igor I Sikorsky Memorial ',
    city: 'Stratford',
    country: 'United States',
    IATA: 'BDR',
    ICAO: 'KBDR',
    lat: '41.16350173950195',
    lon: '-73.1261978149414',
    timezone: '-5'
  },
  {
    name: 'Jackson-Medgar Wiley Evers Intl ',
    city: 'Jackson',
    country: 'United States',
    IATA: 'JAN',
    ICAO: 'KJAN',
    lat: '32.3111991882',
    lon: '-90.0758972168',
    timezone: '-6'
  },
  {
    name: 'Scholes Intl At Galveston ',
    city: 'Galveston',
    country: 'United States',
    IATA: 'GLS',
    ICAO: 'KGLS',
    lat: '29.265300750732422',
    lon: '-94.86039733886719',
    timezone: '-6'
  },
  {
    name: 'Long Beach /Daugherty Field/ ',
    city: 'Long Beach',
    country: 'United States',
    IATA: 'LGB',
    ICAO: 'KLGB',
    lat: '33.81769943',
    lon: '-118.1520004',
    timezone: '-8'
  },
  {
    name: 'Dillingham Airfield',
    city: 'Dillingham',
    country: 'United States',
    IATA: 'HDH',
    ICAO: 'PHDH',
    lat: '21.5795001984',
    lon: '-158.197006226',
    timezone: '-10'
  },
  {
    name: 'Williamsport Regional ',
    city: 'Williamsport',
    country: 'United States',
    IATA: 'IPT',
    ICAO: 'KIPT',
    lat: '41.241798400878906',
    lon: '-76.92109680175781',
    timezone: '-5'
  },
  {
    name: 'Indianapolis Intl ',
    city: 'Indianapolis',
    country: 'United States',
    IATA: 'IND',
    ICAO: 'KIND',
    lat: '39.7173',
    lon: '-86.294403',
    timezone: '-5'
  },
  {
    name: 'Whiteman Air Force Base',
    city: 'Knobnoster',
    country: 'United States',
    IATA: 'SZL',
    ICAO: 'KSZL',
    lat: '38.73030090332',
    lon: '-93.547897338867',
    timezone: '-6'
  },
  {
    name: 'Akron Fulton Intl ',
    city: 'Akron',
    country: 'United States',
    IATA: 'AKC',
    ICAO: 'KAKR',
    lat: '41.0374984741',
    lon: '-81.4669036865',
    timezone: '-5'
  },
  {
    name: 'Greenwood\u2013Leflore ',
    city: 'Greenwood',
    country: 'United States',
    IATA: 'GWO',
    ICAO: 'KGWO',
    lat: '33.4943008423',
    lon: '-90.0847015381',
    timezone: '-6'
  },
  {
    name: 'Westchester County ',
    city: 'White Plains',
    country: 'United States',
    IATA: 'HPN',
    ICAO: 'KHPN',
    lat: '41.06700134277344',
    lon: '-73.70760345458984',
    timezone: '-5'
  },
  {
    name: 'Francis S Gabreski ',
    city: 'West Hampton Beach',
    country: 'United States',
    IATA: 'FOK',
    ICAO: 'KFOK',
    lat: '40.8437004089',
    lon: '-72.6317977905',
    timezone: '-5'
  },
  {
    name: 'Jonesboro Municipal ',
    city: 'Jonesboro',
    country: 'United States',
    IATA: 'JBR',
    ICAO: 'KJBR',
    lat: '35.83169937133789',
    lon: '-90.64640045166016',
    timezone: '-6'
  },
  {
    name: 'Tonopah Test Range ',
    city: 'Tonopah',
    country: 'United States',
    IATA: 'XSD',
    ICAO: 'KTNX',
    lat: '37.7988014221',
    lon: '-116.78099823',
    timezone: '-8'
  },
  {
    name: 'Palm Beach County Park ',
    city: 'West Palm Beach',
    country: 'United States',
    IATA: 'LNA',
    ICAO: 'KLNA',
    lat: '26.59300041',
    lon: '-80.08509827',
    timezone: '-5'
  },
  {
    name: 'North Island Naval Air Station-Halsey Field',
    city: 'San Diego',
    country: 'United States',
    IATA: 'NZY',
    ICAO: 'KNZY',
    lat: '32.69919968',
    lon: '-117.2149963',
    timezone: '-8'
  },
  {
    name: 'Biggs Army Air Field (Fort Bliss)',
    city: 'El Paso',
    country: 'United States',
    IATA: 'BIF',
    ICAO: 'KBIF',
    lat: '31.84950066',
    lon: '-106.3799973',
    timezone: '-7'
  },
  {
    name: 'Yuma MCAS/Yuma Intl ',
    city: 'Yuma',
    country: 'United States',
    IATA: 'YUM',
    ICAO: 'KNYL',
    lat: '32.65660095',
    lon: '-114.6060028',
    timezone: '-7'
  },
  {
    name: 'Cavern City Air Terminal',
    city: 'Carlsbad',
    country: 'United States',
    IATA: 'CNM',
    ICAO: 'KCNM',
    lat: '32.337501525878906',
    lon: '-104.26300048828125',
    timezone: '-7'
  },
  {
    name: 'Duluth Intl ',
    city: 'Duluth',
    country: 'United States',
    IATA: 'DLH',
    ICAO: 'KDLH',
    lat: '46.8420982361',
    lon: '-92.19360351559999',
    timezone: '-6'
  },
  {
    name: 'Bethel ',
    city: 'Bethel',
    country: 'United States',
    IATA: 'BET',
    ICAO: 'PABE',
    lat: '60.77980042',
    lon: '-161.8379974',
    timezone: '-9'
  },
  {
    name: 'Bowman Field',
    city: 'Louisville',
    country: 'United States',
    IATA: 'LOU',
    ICAO: 'KLOU',
    lat: '38.2280006409',
    lon: '-85.6636962891',
    timezone: '-5'
  },
  {
    name: 'Sierra Vista Municipal Libby Army Air Field',
    city: 'Fort Huachuca',
    country: 'United States',
    IATA: 'FHU',
    ICAO: 'KFHU',
    lat: '31.588499069213867',
    lon: '-110.34400177001953',
    timezone: '-7'
  },
  {
    name: 'Lihue ',
    city: 'Lihue',
    country: 'United States',
    IATA: 'LIH',
    ICAO: 'PHLI',
    lat: '21.97599983215332',
    lon: '-159.33900451660156',
    timezone: '-10'
  },
  {
    name: 'Havre City County ',
    city: 'Havre',
    country: 'United States',
    IATA: 'HVR',
    ICAO: 'KHVR',
    lat: '48.54299927',
    lon: '-109.762001',
    timezone: '-7'
  },
  {
    name: 'Grant County Intl ',
    city: 'Grant County Airport',
    country: 'United States',
    IATA: 'MWH',
    ICAO: 'KMWH',
    lat: '47.20769882',
    lon: '-119.3199997',
    timezone: '-8'
  },
  {
    name: 'Edward F Knapp State ',
    city: 'Montpelier',
    country: 'United States',
    IATA: 'MPV',
    ICAO: 'KMPV',
    lat: '44.20349884',
    lon: '-72.56230164',
    timezone: '-5'
  },
  {
    name: 'San Nicolas Island Nolf ',
    city: 'San Nicolas Island',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNSI',
    lat: '33.23979949951172',
    lon: '-119.45800018310547',
    timezone: '-8'
  },
  {
    name: 'Richmond Intl ',
    city: 'Richmond',
    country: 'United States',
    IATA: 'RIC',
    ICAO: 'KRIC',
    lat: '37.50519943237305',
    lon: '-77.3197021484375',
    timezone: '-5'
  },
  {
    name: 'Shreveport Regional ',
    city: 'Shreveport',
    country: 'United States',
    IATA: 'SHV',
    ICAO: 'KSHV',
    lat: '32.446602',
    lon: '-93.8256',
    timezone: '-6'
  },
  {
    name: 'Merle K (Mudhole) Smith ',
    city: 'Cordova',
    country: 'United States',
    IATA: 'CDV',
    ICAO: 'PACV',
    lat: '60.4917984',
    lon: '-145.4779968',
    timezone: '-9'
  },
  {
    name: 'Norfolk Intl ',
    city: 'Norfolk',
    country: 'United States',
    IATA: 'ORF',
    ICAO: 'KORF',
    lat: '36.89459991455078',
    lon: '-76.20120239257812',
    timezone: '-5'
  },
  {
    name: 'Southeast Texas Regional ',
    city: 'Beaumont',
    country: 'United States',
    IATA: 'BPT',
    ICAO: 'KBPT',
    lat: '29.9507999420166',
    lon: '-94.02069854736328',
    timezone: '-6'
  },
  {
    name: 'Savannah Hilton Head Intl ',
    city: 'Savannah',
    country: 'United States',
    IATA: 'SAV',
    ICAO: 'KSAV',
    lat: '32.12760162',
    lon: '-81.20210266',
    timezone: '-5'
  },
  {
    name: 'Hill Air Force Base',
    city: 'Ogden',
    country: 'United States',
    IATA: 'HIF',
    ICAO: 'KHIF',
    lat: '41.12403',
    lon: '-111.973086',
    timezone: '-7'
  },
  {
    name: 'Nome ',
    city: 'Nome',
    country: 'United States',
    IATA: 'OME',
    ICAO: 'PAOM',
    lat: '64.51219940185547',
    lon: '-165.44500732421875',
    timezone: '-9'
  },
  {
    name: 'Scappoose Industrial Airpark',
    city: 'San Luis',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KSPB',
    lat: '45.770999908447266',
    lon: '-122.86199951171875',
    timezone: '-8'
  },
  {
    name: 'St Petersburg Clearwater Intl ',
    city: 'St. Petersburg',
    country: 'United States',
    IATA: 'PIE',
    ICAO: 'KPIE',
    lat: '27.91020012',
    lon: '-82.68740082',
    timezone: '-5'
  },
  {
    name: 'Menominee Regional ',
    city: 'Macon',
    country: 'United States',
    IATA: 'MNM',
    ICAO: 'KMNM',
    lat: '45.126701',
    lon: '-87.638397',
    timezone: '-6'
  },
  {
    name: 'Conroe-North Houston Regional ',
    city: 'Conroe',
    country: 'United States',
    IATA: 'CXO',
    ICAO: 'KCXO',
    lat: '30.351801',
    lon: '-95.414497',
    timezone: '-6'
  },
  {
    name: 'Deadhorse ',
    city: 'Deadhorse',
    country: 'United States',
    IATA: 'SCC',
    ICAO: 'PASC',
    lat: '70.19470215',
    lon: '-148.4649963',
    timezone: '-9'
  },
  {
    name: 'San Antonio Intl ',
    city: 'San Antonio',
    country: 'United States',
    IATA: 'SAT',
    ICAO: 'KSAT',
    lat: '29.533700942993164',
    lon: '-98.46980285644531',
    timezone: '-6'
  },
  {
    name: 'Greater Rochester Intl ',
    city: 'Rochester',
    country: 'United States',
    IATA: 'ROC',
    ICAO: 'KROC',
    lat: '43.118900299072266',
    lon: '-77.67240142822266',
    timezone: '-5'
  },
  {
    name: 'Patrick Air Force Base',
    city: 'Coco Beach',
    country: 'United States',
    IATA: 'COF',
    ICAO: 'KCOF',
    lat: '28.2348995209',
    lon: '-80.6100997925',
    timezone: '-5'
  },
  {
    name: 'Teterboro ',
    city: 'Teterboro',
    country: 'United States',
    IATA: 'TEB',
    ICAO: 'KTEB',
    lat: '40.85010147089999',
    lon: '-74.060798645',
    timezone: '-5'
  },
  {
    name: 'Ellsworth Air Force Base',
    city: 'Rapid City',
    country: 'United States',
    IATA: 'RCA',
    ICAO: 'KRCA',
    lat: '44.14500046',
    lon: '-103.1039963',
    timezone: '-7'
  },
  {
    name: 'Raleigh Durham Intl ',
    city: 'Raleigh-durham',
    country: 'United States',
    IATA: 'RDU',
    ICAO: 'KRDU',
    lat: '35.877601623535156',
    lon: '-78.7874984741211',
    timezone: '-5'
  },
  {
    name: 'James M Cox Dayton Intl ',
    city: 'Dayton',
    country: 'United States',
    IATA: 'DAY',
    ICAO: 'KDAY',
    lat: '39.902400970458984',
    lon: '-84.21939849853516',
    timezone: '-5'
  },
  {
    name: 'Kenai Municipal ',
    city: 'Kenai',
    country: 'United States',
    IATA: 'ENA',
    ICAO: 'PAEN',
    lat: '60.57310104370117',
    lon: '-151.2449951171875',
    timezone: '-9'
  },
  {
    name: 'Mc Alester Regional ',
    city: 'Mcalester',
    country: 'United States',
    IATA: 'MLC',
    ICAO: 'KMLC',
    lat: '34.882401',
    lon: '-95.783501',
    timezone: '-6'
  },
  {
    name: 'Niagara Falls Intl ',
    city: 'Niagara Falls',
    country: 'United States',
    IATA: 'IAG',
    ICAO: 'KIAG',
    lat: '43.1072998046875',
    lon: '-78.94619750976562',
    timezone: '-5'
  },
  {
    name: 'Coulter Field',
    city: 'Bryan',
    country: 'United States',
    IATA: 'CFD',
    ICAO: 'KCFD',
    lat: '30.715700149499998',
    lon: '-96.3313980103',
    timezone: '-6'
  },
  {
    name: 'Wright AAF (Fort Stewart)/Midcoast Regional ',
    city: 'Wright',
    country: 'United States',
    IATA: 'LIY',
    ICAO: 'KLHW',
    lat: '31.889099',
    lon: '-81.562303',
    timezone: '-5'
  },
  {
    name: 'Newport News Williamsburg Intl ',
    city: 'Newport News',
    country: 'United States',
    IATA: 'PHF',
    ICAO: 'KPHF',
    lat: '37.13190079',
    lon: '-76.49299622',
    timezone: '-5'
  },
  {
    name: 'Esler Regional ',
    city: 'Alexandria',
    country: 'United States',
    IATA: 'ESF',
    ICAO: 'KESF',
    lat: '31.3948993683',
    lon: '-92.2957992554',
    timezone: '-6'
  },
  {
    name: 'Altus Air Force Base',
    city: 'Altus',
    country: 'United States',
    IATA: 'LTS',
    ICAO: 'KLTS',
    lat: '34.667098999',
    lon: '-99.2667007446',
    timezone: '-6'
  },
  {
    name: 'Tucson Intl ',
    city: 'Tucson',
    country: 'United States',
    IATA: 'TUS',
    ICAO: 'KTUS',
    lat: '32.1161003112793',
    lon: '-110.94100189208984',
    timezone: '-7'
  },
  {
    name: 'Minot Air Force Base',
    city: 'Minot',
    country: 'United States',
    IATA: 'MIB',
    ICAO: 'KMIB',
    lat: '48.4156',
    lon: '-101.358002',
    timezone: '-6'
  },
  {
    name: 'Beale Air Force Base',
    city: 'Marysville',
    country: 'United States',
    IATA: 'BAB',
    ICAO: 'KBAB',
    lat: '39.136100769',
    lon: '-121.43699646',
    timezone: '-8'
  },
  {
    name: 'Greater Kankakee ',
    city: 'Kankakee',
    country: 'United States',
    IATA: 'IKK',
    ICAO: 'KIKK',
    lat: '41.07139968869999',
    lon: '-87.8462982178',
    timezone: '-6'
  },
  {
    name: 'Seymour Johnson Air Force Base',
    city: 'Goldsboro',
    country: 'United States',
    IATA: 'GSB',
    ICAO: 'KGSB',
    lat: '35.33940125',
    lon: '-77.96060181',
    timezone: '-5'
  },
  {
    name: 'Theodore Francis Green State ',
    city: 'Providence',
    country: 'United States',
    IATA: 'PVD',
    ICAO: 'KPVD',
    lat: '41.732601',
    lon: '-71.420403',
    timezone: '-5'
  },
  {
    name: 'Salisbury Ocean City Wicomico Regional ',
    city: 'Salisbury',
    country: 'United States',
    IATA: 'SBY',
    ICAO: 'KSBY',
    lat: '38.34049987792969',
    lon: '-75.51029968261719',
    timezone: '-5'
  },
  {
    name: 'Rancho Murieta ',
    city: 'Rancho Murieta',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KRIU',
    lat: '38.48680114746094',
    lon: '-121.10299682617188',
    timezone: '-8'
  },
  {
    name: 'Bob Hope ',
    city: 'Burbank',
    country: 'United States',
    IATA: 'BUR',
    ICAO: 'KBUR',
    lat: '34.20069885253906',
    lon: '-118.35900115966797',
    timezone: '-8'
  },
  {
    name: 'Detroit Metropolitan Wayne County ',
    city: 'Detroit',
    country: 'United States',
    IATA: 'DTW',
    ICAO: 'KDTW',
    lat: '42.212398529052734',
    lon: '-83.35340118408203',
    timezone: '-5'
  },
  {
    name: 'Tampa Intl ',
    city: 'Tampa',
    country: 'United States',
    IATA: 'TPA',
    ICAO: 'KTPA',
    lat: '27.975500106811523',
    lon: '-82.533203125',
    timezone: '-5'
  },
  {
    name: 'Pembina Municipal ',
    city: 'Pembina',
    country: 'United States',
    IATA: 'PMB',
    ICAO: 'KPMB',
    lat: '48.9425010681',
    lon: '-97.2407989502',
    timezone: '-6'
  },
  {
    name: 'Polk Army Air Field',
    city: 'Fort Polk',
    country: 'United States',
    IATA: 'POE',
    ICAO: 'KPOE',
    lat: '31.0447998',
    lon: '-93.1917038',
    timezone: '-6'
  },
  {
    name: 'Eielson Air Force Base',
    city: 'Fairbanks',
    country: 'United States',
    IATA: 'EIL',
    ICAO: 'PAEI',
    lat: '64.66570282',
    lon: '-147.102005',
    timezone: '-9'
  },
  {
    name: 'Range Regional ',
    city: 'Hibbing',
    country: 'United States',
    IATA: 'HIB',
    ICAO: 'KHIB',
    lat: '47.38660049',
    lon: '-92.83899689',
    timezone: '-6'
  },
  {
    name: 'Angelina County ',
    city: 'Lufkin',
    country: 'United States',
    IATA: 'LFK',
    ICAO: 'KLFK',
    lat: '31.2339992523',
    lon: '-94.75',
    timezone: '-6'
  },
  {
    name: 'Midland Intl ',
    city: 'Midland',
    country: 'United States',
    IATA: 'MAF',
    ICAO: 'KMAF',
    lat: '31.9424991607666',
    lon: '-102.2020034790039',
    timezone: '-6'
  },
  {
    name: 'Austin Straubel Intl ',
    city: 'Green Bay',
    country: 'United States',
    IATA: 'GRB',
    ICAO: 'KGRB',
    lat: '44.48509979248047',
    lon: '-88.12960052490234',
    timezone: '-6'
  },
  {
    name: 'Ardmore Municipal ',
    city: 'Ardmore',
    country: 'United States',
    IATA: 'ADM',
    ICAO: 'KADM',
    lat: '34.30301',
    lon: '-97.0196342',
    timezone: '-6'
  },
  {
    name: 'Mc Guire Air Force Base',
    city: 'Wrightstown',
    country: 'United States',
    IATA: 'WRI',
    ICAO: 'KWRI',
    lat: '40.0155983',
    lon: '-74.59169769',
    timezone: '-5'
  },
  {
    name: 'Cherry Point MCAS /Cunningham Field/',
    city: 'Cherry Point',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNKT',
    lat: '34.90090179',
    lon: '-76.88069916',
    timezone: '-5'
  },
  {
    name: 'Emanuel County ',
    city: 'Santa Barbara',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KSBO',
    lat: '32.609100341796875',
    lon: '-82.36990356445312',
    timezone: '-5'
  },
  {
    name: 'Augusta Regional At Bush Field',
    city: 'Bush Field',
    country: 'United States',
    IATA: 'AGS',
    ICAO: 'KAGS',
    lat: '33.36989974975586',
    lon: '-81.9645004272461',
    timezone: '-5'
  },
  {
    name: 'Sloulin Field Intl ',
    city: 'Williston',
    country: 'United States',
    IATA: 'ISN',
    ICAO: 'KISN',
    lat: '48.177898407',
    lon: '-103.641998291',
    timezone: '-6'
  },
  {
    name: 'Bill & Hillary Clinton National /Adams Field',
    city: 'Little Rock',
    country: 'United States',
    IATA: 'LIT',
    ICAO: 'KLIT',
    lat: '34.729400634799994',
    lon: '-92.2242965698',
    timezone: '-6'
  },
  {
    name: 'Stewart Intl ',
    city: 'Newburgh',
    country: 'United States',
    IATA: 'SWF',
    ICAO: 'KSWF',
    lat: '41.50410079956055',
    lon: '-74.10479736328125',
    timezone: '-5'
  },
  {
    name: 'Baudette Intl ',
    city: 'Baudette',
    country: 'United States',
    IATA: 'BDE',
    ICAO: 'KBDE',
    lat: '48.7284011841',
    lon: '-94.612197876',
    timezone: '-6'
  },
  {
    name: 'Sacramento Executive ',
    city: 'Sacramento',
    country: 'United States',
    IATA: 'SAC',
    ICAO: 'KSAC',
    lat: '38.5125007629',
    lon: '-121.492996216',
    timezone: '-8'
  },
  {
    name: 'Homer ',
    city: 'Homer',
    country: 'United States',
    IATA: 'HOM',
    ICAO: 'PAHO',
    lat: '59.645599365234375',
    lon: '-151.4770050048828',
    timezone: '-9'
  },
  {
    name: 'Waynesville-St. Robert Regional Forney field',
    city: 'Fort Leonardwood',
    country: 'United States',
    IATA: 'TBN',
    ICAO: 'KTBN',
    lat: '37.74160004',
    lon: '-92.14070129',
    timezone: '-6'
  },
  {
    name: 'Dobbins Air Reserve Base',
    city: 'Marietta',
    country: 'United States',
    IATA: 'MGE',
    ICAO: 'KMGE',
    lat: '33.91540146',
    lon: '-84.51629639',
    timezone: '-5'
  },
  {
    name: 'Fairchild Air Force Base',
    city: 'Spokane',
    country: 'United States',
    IATA: 'SKA',
    ICAO: 'KSKA',
    lat: '47.6151008606',
    lon: '-117.65599823',
    timezone: '-8'
  },
  {
    name: 'Roscommon County - Blodgett Memorial ',
    city: 'Houghton Lake',
    country: 'United States',
    IATA: 'HTL',
    ICAO: 'KHTL',
    lat: '44.359798',
    lon: '-84.671095',
    timezone: '-5'
  },
  {
    name: 'Tyndall Air Force Base',
    city: 'Panama City',
    country: 'United States',
    IATA: 'PAM',
    ICAO: 'KPAM',
    lat: '30.0695991516',
    lon: '-85.57540130619999',
    timezone: '-6'
  },
  {
    name: 'Dallas Fort Worth Intl ',
    city: 'Dallas-Fort Worth',
    country: 'United States',
    IATA: 'DFW',
    ICAO: 'KDFW',
    lat: '32.896801',
    lon: '-97.038002',
    timezone: '-6'
  },
  {
    name: 'Melbourne Intl ',
    city: 'Melbourne',
    country: 'United States',
    IATA: 'MLB',
    ICAO: 'KMLB',
    lat: '28.102800369262695',
    lon: '-80.64530181884766',
    timezone: '-5'
  },
  {
    name: 'McChord Air Force Base',
    city: 'Tacoma',
    country: 'United States',
    IATA: 'TCM',
    ICAO: 'KTCM',
    lat: '47.1376991272',
    lon: '-122.475997925',
    timezone: '-8'
  },
  {
    name: 'Austin Bergstrom Intl ',
    city: 'Austin',
    country: 'United States',
    IATA: 'AUS',
    ICAO: 'KAUS',
    lat: '30.194499969482422',
    lon: '-97.6698989868164',
    timezone: '-6'
  },
  {
    name: 'Rickenbacker Intl ',
    city: 'Columbus',
    country: 'United States',
    IATA: 'LCK',
    ICAO: 'KLCK',
    lat: '39.813801',
    lon: '-82.927803',
    timezone: '-5'
  },
  {
    name: 'Sawyer Intl ',
    city: 'Gwinn',
    country: 'United States',
    IATA: 'MQT',
    ICAO: 'KSAW',
    lat: '46.353599548300004',
    lon: '-87.395401001',
    timezone: '-5'
  },
  {
    name: 'McGhee Tyson ',
    city: 'Knoxville',
    country: 'United States',
    IATA: 'TYS',
    ICAO: 'KTYS',
    lat: '35.81100082',
    lon: '-83.9940033',
    timezone: '-5'
  },
  {
    name: 'Hood Army Air Field',
    city: 'Fort Hood',
    country: 'United States',
    IATA: 'HLR',
    ICAO: 'KHLR',
    lat: '31.138700485199998',
    lon: '-97.71450042720001',
    timezone: '-6'
  },
  {
    name: 'St Louis Lambert Intl ',
    city: 'St. Louis',
    country: 'United States',
    IATA: 'STL',
    ICAO: 'KSTL',
    lat: '38.748697',
    lon: '-90.370003',
    timezone: '-6'
  },
  {
    name: 'Millville Municipal ',
    city: 'Millville',
    country: 'United States',
    IATA: 'MIV',
    ICAO: 'KMIV',
    lat: '39.367802',
    lon: '-75.072197',
    timezone: '-5'
  },
  {
    name: 'Sheppard Air Force Base-Wichita Falls Municipal ',
    city: 'Wichita Falls',
    country: 'United States',
    IATA: 'SPS',
    ICAO: 'KSPS',
    lat: '33.9888',
    lon: '-98.491898',
    timezone: '-6'
  },
  {
    name: 'Cincinnati Municipal  Lunken Field',
    city: 'Cincinnati',
    country: 'United States',
    IATA: 'LUK',
    ICAO: 'KLUK',
    lat: '39.10329819',
    lon: '-84.41860199',
    timezone: '-5'
  },
  {
    name: 'Hartsfield Jackson Atlanta Intl ',
    city: 'Atlanta',
    country: 'United States',
    IATA: 'ATL',
    ICAO: 'KATL',
    lat: '33.6367',
    lon: '-84.428101',
    timezone: '-5'
  },
  {
    name: 'Castle ',
    city: 'Merced',
    country: 'United States',
    IATA: 'MER',
    ICAO: 'KMER',
    lat: '37.38050079',
    lon: '-120.5680008',
    timezone: '-8'
  },
  {
    name: 'Mc Clellan Airfield',
    city: 'Sacramento',
    country: 'United States',
    IATA: 'MCC',
    ICAO: 'KMCC',
    lat: '38.66759872',
    lon: '-121.401001',
    timezone: '-8'
  },
  {
    name: 'Gerald R. Ford Intl ',
    city: 'Grand Rapids',
    country: 'United States',
    IATA: 'GRR',
    ICAO: 'KGRR',
    lat: '42.88079834',
    lon: '-85.52279663',
    timezone: '-5'
  },
  {
    name: 'Winkler County ',
    city: 'Wink',
    country: 'United States',
    IATA: 'INK',
    ICAO: 'KINK',
    lat: '31.779600143399996',
    lon: '-103.200996399',
    timezone: '-6'
  },
  {
    name: 'Fresno Yosemite Intl ',
    city: 'Fresno',
    country: 'United States',
    IATA: 'FAT',
    ICAO: 'KFAT',
    lat: '36.77619934082031',
    lon: '-119.71800231933594',
    timezone: '-8'
  },
  {
    name: 'Vero Beach Regional ',
    city: 'Vero Beach',
    country: 'United States',
    IATA: 'VRB',
    ICAO: 'KVRB',
    lat: '27.6556',
    lon: '-80.417901',
    timezone: '-5'
  },
  {
    name: 'Imperial County ',
    city: 'Imperial',
    country: 'United States',
    IATA: 'IPL',
    ICAO: 'KIPL',
    lat: '32.834201812699995',
    lon: '-115.57900238',
    timezone: '-8'
  },
  {
    name: 'Nashville Intl ',
    city: 'Nashville',
    country: 'United States',
    IATA: 'BNA',
    ICAO: 'KBNA',
    lat: '36.1245002746582',
    lon: '-86.6781997680664',
    timezone: '-6'
  },
  {
    name: 'Laredo Intl ',
    city: 'Laredo',
    country: 'United States',
    IATA: 'LRD',
    ICAO: 'KLRD',
    lat: '27.543800354003906',
    lon: '-99.46160125732422',
    timezone: '-6'
  },
  {
    name: 'Elmendorf Air Force Base',
    city: 'Anchorage',
    country: 'United States',
    IATA: 'EDF',
    ICAO: 'PAED',
    lat: '61.250999450683594',
    lon: '-149.8070068359375',
    timezone: '-9'
  },
  {
    name: 'Ralph Wien Memorial ',
    city: 'Kotzebue',
    country: 'United States',
    IATA: 'OTZ',
    ICAO: 'PAOT',
    lat: '66.88469696',
    lon: '-162.598999',
    timezone: '-9'
  },
  {
    name: 'Altoona Blair County ',
    city: 'Altoona',
    country: 'United States',
    IATA: 'AOO',
    ICAO: 'KAOO',
    lat: '40.29639816',
    lon: '-78.31999969',
    timezone: '-5'
  },
  {
    name: 'Dyess Air Force Base',
    city: 'Abilene',
    country: 'United States',
    IATA: 'DYS',
    ICAO: 'KDYS',
    lat: '32.4207992554',
    lon: '-99.854598999',
    timezone: '-6'
  },
  {
    name: 'South Arkansas Regional At Goodwin Field',
    city: 'El Dorado',
    country: 'United States',
    IATA: 'ELD',
    ICAO: 'KELD',
    lat: '33.22100067138672',
    lon: '-92.81330108642578',
    timezone: '-6'
  },
  {
    name: 'La Guardia ',
    city: 'New York',
    country: 'United States',
    IATA: 'LGA',
    ICAO: 'KLGA',
    lat: '40.77719879',
    lon: '-73.87259674',
    timezone: '-5'
  },
  {
    name: 'Tallahassee Regional ',
    city: 'Tallahassee',
    country: 'United States',
    IATA: 'TLH',
    ICAO: 'KTLH',
    lat: '30.396499633789062',
    lon: '-84.35030364990234',
    timezone: '-5'
  },
  {
    name: 'Dupage ',
    city: 'West Chicago',
    country: 'United States',
    IATA: 'DPA',
    ICAO: 'KDPA',
    lat: '41.90779877',
    lon: '-88.24859619',
    timezone: '-6'
  },
  {
    name: 'Waco Regional ',
    city: 'Waco',
    country: 'United States',
    IATA: 'ACT',
    ICAO: 'KACT',
    lat: '31.611299514770508',
    lon: '-97.23049926757812',
    timezone: '-6'
  },
  {
    name: 'Augusta State ',
    city: 'Augusta',
    country: 'United States',
    IATA: 'AUG',
    ICAO: 'KAUG',
    lat: '44.320598602299995',
    lon: '-69.7973022461',
    timezone: '-5'
  },
  {
    name: 'Hillsboro Municipal ',
    city: 'Hillsboro',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KINJ',
    lat: '32.08349991',
    lon: '-97.09719849',
    timezone: '-6'
  },
  {
    name: 'Jacksonville Naval Air Station (Towers Field)',
    city: 'Jacksonville',
    country: 'United States',
    IATA: 'NIP',
    ICAO: 'KNIP',
    lat: '30.2358',
    lon: '-81.680603',
    timezone: '-5'
  },
  {
    name: 'McKellar-Sipes Regional ',
    city: 'Jackson',
    country: 'United States',
    IATA: 'MKL',
    ICAO: 'KMKL',
    lat: '35.599899',
    lon: '-88.915604',
    timezone: '-6'
  },
  {
    name: 'Molokai ',
    city: 'Molokai',
    country: 'United States',
    IATA: 'MKK',
    ICAO: 'PHMK',
    lat: '21.15290069580078',
    lon: '-157.0959930419922',
    timezone: '-10'
  },
  {
    name: 'Godman Army Air Field',
    city: 'Fort Knox',
    country: 'United States',
    IATA: 'FTK',
    ICAO: 'KFTK',
    lat: '37.907100677500004',
    lon: '-85.9720993042',
    timezone: '-5'
  },
  {
    name: 'New River MCAS /H/ /Mccutcheon Fld/ ',
    city: 'Jacksonville',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNCA',
    lat: '34.70840073',
    lon: '-77.43969727',
    timezone: '-5'
  },
  {
    name: 'San Angelo Regional Mathis Field',
    city: 'San Angelo',
    country: 'United States',
    IATA: 'SJT',
    ICAO: 'KSJT',
    lat: '31.35770034790039',
    lon: '-100.49600219726562',
    timezone: '-6'
  },
  {
    name: 'Calexico Intl ',
    city: 'Calexico',
    country: 'United States',
    IATA: 'CXL',
    ICAO: 'KCXL',
    lat: '32.6694984436',
    lon: '-115.513000488',
    timezone: '-8'
  },
  {
    name: 'Chico Municipal ',
    city: 'Chico',
    country: 'United States',
    IATA: 'CIC',
    ICAO: 'KCIC',
    lat: '39.79539871',
    lon: '-121.8580017',
    timezone: '-8'
  },
  {
    name: 'Burlington Intl ',
    city: 'Burlington',
    country: 'United States',
    IATA: 'BTV',
    ICAO: 'KBTV',
    lat: '44.471900939899996',
    lon: '-73.15329742429999',
    timezone: '-5'
  },
  {
    name: 'Jacksonville Intl ',
    city: 'Jacksonville',
    country: 'United States',
    IATA: 'JAX',
    ICAO: 'KJAX',
    lat: '30.49410057067871',
    lon: '-81.68789672851562',
    timezone: '-5'
  },
  {
    name: 'Durango La Plata County ',
    city: 'Durango',
    country: 'United States',
    IATA: 'DRO',
    ICAO: 'KDRO',
    lat: '37.1515007019',
    lon: '-107.753997803',
    timezone: '-7'
  },
  {
    name: 'Washington Dulles Intl ',
    city: 'Washington',
    country: 'United States',
    IATA: 'IAD',
    ICAO: 'KIAD',
    lat: '38.94449997',
    lon: '-77.45580292',
    timezone: '-5'
  },
  {
    name: 'Easterwood Field',
    city: 'College Station',
    country: 'United States',
    IATA: 'CLL',
    ICAO: 'KCLL',
    lat: '30.58860016',
    lon: '-96.36380005',
    timezone: '-6'
  },
  {
    name: 'Felts Field',
    city: 'Spokane',
    country: 'United States',
    IATA: 'SFF',
    ICAO: 'KSFF',
    lat: '47.682800292969',
    lon: '-117.32299804688',
    timezone: '-8'
  },
  {
    name: 'General Mitchell Intl ',
    city: 'Milwaukee',
    country: 'United States',
    IATA: 'MKE',
    ICAO: 'KMKE',
    lat: '42.947200775146484',
    lon: '-87.89659881591797',
    timezone: '-6'
  },
  {
    name: 'Abilene Regional ',
    city: 'Abilene',
    country: 'United States',
    IATA: 'ABI',
    ICAO: 'KABI',
    lat: '32.4113006592',
    lon: '-99.68190002440001',
    timezone: '-6'
  },
  {
    name: 'Columbia Regional ',
    city: 'Columbia',
    country: 'United States',
    IATA: 'COU',
    ICAO: 'KCOU',
    lat: '38.81809997558594',
    lon: '-92.21959686279297',
    timezone: '-6'
  },
  {
    name: 'Portland Intl ',
    city: 'Portland',
    country: 'United States',
    IATA: 'PDX',
    ICAO: 'KPDX',
    lat: '45.58869934',
    lon: '-122.5979996',
    timezone: '-8'
  },
  {
    name: 'Dade Collier Training and Transition ',
    city: 'Miami',
    country: 'United States',
    IATA: 'TNT',
    ICAO: 'KTNT',
    lat: '25.861799240112',
    lon: '-80.897003173828',
    timezone: '-5'
  },
  {
    name: 'Palm Beach Intl ',
    city: 'West Palm Beach',
    country: 'United States',
    IATA: 'PBI',
    ICAO: 'KPBI',
    lat: '26.68320083618164',
    lon: '-80.09559631347656',
    timezone: '-5'
  },
  {
    name: 'Fort Worth Meacham Intl ',
    city: 'Fort Worth',
    country: 'United States',
    IATA: 'FTW',
    ICAO: 'KFTW',
    lat: '32.819801',
    lon: '-97.362396',
    timezone: '-6'
  },
  {
    name: 'Ogdensburg Intl ',
    city: 'Ogdensburg',
    country: 'United States',
    IATA: 'OGS',
    ICAO: 'KOGS',
    lat: '44.6819000244',
    lon: '-75.46549987790002',
    timezone: '-5'
  },
  {
    name: 'Cape Cod Coast Guard Air Station',
    city: 'Falmouth',
    country: 'United States',
    IATA: 'FMH',
    ICAO: 'KFMH',
    lat: '41.6584014893',
    lon: '-70.5214004517',
    timezone: '-5'
  },
  {
    name: 'Boeing Field King County Intl ',
    city: 'Seattle',
    country: 'United States',
    IATA: 'BFI',
    ICAO: 'KBFI',
    lat: '47.529998779296875',
    lon: '-122.302001953125',
    timezone: '-8'
  },
  {
    name: 'Lackland Air Force Base',
    city: 'San Antonio',
    country: 'United States',
    IATA: 'SKF',
    ICAO: 'KSKF',
    lat: '29.38419914',
    lon: '-98.58110046',
    timezone: '-6'
  },
  {
    name: 'Daniel K Inouye Intl ',
    city: 'Honolulu',
    country: 'United States',
    IATA: 'HNL',
    ICAO: 'PHNL',
    lat: '21.32062',
    lon: '-157.924228',
    timezone: '-10'
  },
  {
    name: 'Des Moines Intl ',
    city: 'Des Moines',
    country: 'United States',
    IATA: 'DSM',
    ICAO: 'KDSM',
    lat: '41.534000396728516',
    lon: '-93.66310119628906',
    timezone: '-6'
  },
  {
    name: 'Coastal Carolina Regional ',
    city: 'New Bern',
    country: 'United States',
    IATA: 'EWN',
    ICAO: 'KEWN',
    lat: '35.0730018616',
    lon: '-77.04290008539999',
    timezone: '-5'
  },
  {
    name: 'San Diego Intl ',
    city: 'San Diego',
    country: 'United States',
    IATA: 'SAN',
    ICAO: 'KSAN',
    lat: '32.7336006165',
    lon: '-117.190002441',
    timezone: '-8'
  },
  {
    name: 'Monroe Regional ',
    city: 'Monroe',
    country: 'United States',
    IATA: 'MLU',
    ICAO: 'KMLU',
    lat: '32.51089859008789',
    lon: '-92.0376968383789',
    timezone: '-6'
  },
  {
    name: 'Shaw Air Force Base',
    city: 'Sumter',
    country: 'United States',
    IATA: 'SSC',
    ICAO: 'KSSC',
    lat: '33.97269821',
    lon: '-80.47059631',
    timezone: '-5'
  },
  {
    name: 'Ontario Intl ',
    city: 'Ontario',
    country: 'United States',
    IATA: 'ONT',
    ICAO: 'KONT',
    lat: '34.055999755859375',
    lon: '-117.60099792480469',
    timezone: '-8'
  },
  {
    name: 'Majors ',
    city: 'Greenvile',
    country: 'United States',
    IATA: 'GVT',
    ICAO: 'KGVT',
    lat: '33.0677986145',
    lon: '-96.0652999878',
    timezone: '-6'
  },
  {
    name: 'Roswell Intl Air Center ',
    city: 'Roswell',
    country: 'United States',
    IATA: 'ROW',
    ICAO: 'KROW',
    lat: '33.30160140991211',
    lon: '-104.53099822998047',
    timezone: '-7'
  },
  {
    name: 'Coleman A. Young Municipal ',
    city: 'Detroit',
    country: 'United States',
    IATA: 'DET',
    ICAO: 'KDET',
    lat: '42.40919876',
    lon: '-83.00990295',
    timezone: '-5'
  },
  {
    name: 'Brownsville South Padre Island Intl ',
    city: 'Brownsville',
    country: 'United States',
    IATA: 'BRO',
    ICAO: 'KBRO',
    lat: '25.90679931640625',
    lon: '-97.4259033203125',
    timezone: '-6'
  },
  {
    name: 'Dothan Regional ',
    city: 'Dothan',
    country: 'United States',
    IATA: 'DHN',
    ICAO: 'KDHN',
    lat: '31.321300506591797',
    lon: '-85.44960021972656',
    timezone: '-6'
  },
  {
    name: 'Cape May County ',
    city: 'Wildwood',
    country: 'United States',
    IATA: 'WWD',
    ICAO: 'KWWD',
    lat: '39.008499145500004',
    lon: '-74.9083023071',
    timezone: '-5'
  },
  {
    name: 'Fallon Naval Air Station',
    city: 'Fallon',
    country: 'United States',
    IATA: 'NFL',
    ICAO: 'KNFL',
    lat: '39.41659927',
    lon: '-118.7009964',
    timezone: '-8'
  },
  {
    name: 'Selfridge Air National Guard Base ',
    city: 'Mount Clemens',
    country: 'United States',
    IATA: 'MTC',
    ICAO: 'KMTC',
    lat: '42.613463',
    lon: '-82.836919',
    timezone: '-5'
  },
  {
    name: 'Four Corners Regional ',
    city: 'Farmington',
    country: 'United States',
    IATA: 'FMN',
    ICAO: 'KFMN',
    lat: '36.741199493399996',
    lon: '-108.230003357',
    timezone: '-7'
  },
  {
    name: 'Corpus Christi Intl ',
    city: 'Corpus Christi',
    country: 'United States',
    IATA: 'CRP',
    ICAO: 'KCRP',
    lat: '27.77039909362793',
    lon: '-97.5011978149414',
    timezone: '-6'
  },
  {
    name: 'Syracuse Hancock Intl ',
    city: 'Syracuse',
    country: 'United States',
    IATA: 'SYR',
    ICAO: 'KSYR',
    lat: '43.11119842529297',
    lon: '-76.1063003540039',
    timezone: '-5'
  },
  {
    name: 'Naval Air Station Key West/Boca Chica Field',
    city: 'Key West',
    country: 'United States',
    IATA: 'NQX',
    ICAO: 'KNQX',
    lat: '24.57579994',
    lon: '-81.68890381',
    timezone: '-5'
  },
  {
    name: 'Chicago Midway Intl ',
    city: 'Chicago',
    country: 'United States',
    IATA: 'MDW',
    ICAO: 'KMDW',
    lat: '41.785999',
    lon: '-87.752403',
    timezone: '-6'
  },
  {
    name: 'Norman Y. Mineta San Jose Intl ',
    city: 'San Jose',
    country: 'United States',
    IATA: 'SJC',
    ICAO: 'KSJC',
    lat: '37.362598',
    lon: '-121.929001',
    timezone: '-8'
  },
  {
    name: 'Lea County Regional ',
    city: 'Hobbs',
    country: 'United States',
    IATA: 'HOB',
    ICAO: 'KHOB',
    lat: '32.6875',
    lon: '-103.2170029',
    timezone: '-7'
  },
  {
    name: 'Northeast Philadelphia ',
    city: 'Philadelphia',
    country: 'United States',
    IATA: 'PNE',
    ICAO: 'KPNE',
    lat: '40.081902',
    lon: '-75.010597',
    timezone: '-5'
  },
  {
    name: 'Denver Intl ',
    city: 'Denver',
    country: 'United States',
    IATA: 'DEN',
    ICAO: 'KDEN',
    lat: '39.861698150635',
    lon: '-104.672996521',
    timezone: '-7'
  },
  {
    name: 'Philadelphia Intl ',
    city: 'Philadelphia',
    country: 'United States',
    IATA: 'PHL',
    ICAO: 'KPHL',
    lat: '39.87189865112305',
    lon: '-75.24109649658203',
    timezone: '-5'
  },
  {
    name: 'Sioux Gateway Col. Bud Day Field',
    city: 'Sioux City',
    country: 'United States',
    IATA: 'SUX',
    ICAO: 'KSUX',
    lat: '42.40259933',
    lon: '-96.38439941',
    timezone: '-6'
  },
  {
    name: 'Middle Georgia Regional ',
    city: 'Macon',
    country: 'United States',
    IATA: 'MCN',
    ICAO: 'KMCN',
    lat: '32.69279861450195',
    lon: '-83.64920043945312',
    timezone: '-5'
  },
  {
    name: 'Truth Or Consequences Municipal ',
    city: 'Truth Or Consequences',
    country: 'United States',
    IATA: 'TCS',
    ICAO: 'KTCS',
    lat: '33.2369003296',
    lon: '-107.272003174',
    timezone: '-7'
  },
  {
    name: 'Palmdale Regional/USAF Plant 42 ',
    city: 'Palmdale',
    country: 'United States',
    IATA: 'PMD',
    ICAO: 'KPMD',
    lat: '34.62939835',
    lon: '-118.0849991',
    timezone: '-8'
  },
  {
    name: 'Randolph Air Force Base',
    city: 'San Antonio',
    country: 'United States',
    IATA: 'RND',
    ICAO: 'KRND',
    lat: '29.52969933',
    lon: '-98.27890015',
    timezone: '-6'
  },
  {
    name: 'El Centro NAF  (Vraciu Field)',
    city: 'El Centro',
    country: 'United States',
    IATA: 'NJK',
    ICAO: 'KNJK',
    lat: '32.829201',
    lon: '-115.671996',
    timezone: '-8'
  },
  {
    name: 'John Glenn Columbus Intl ',
    city: 'Columbus',
    country: 'United States',
    IATA: 'CMH',
    ICAO: 'KCMH',
    lat: '39.998001',
    lon: '-82.891899',
    timezone: '-5'
  },
  {
    name: 'Drake Field',
    city: 'Fayetteville',
    country: 'United States',
    IATA: 'FYV',
    ICAO: 'KFYV',
    lat: '36.00510025024414',
    lon: '-94.17009735107422',
    timezone: '-6'
  },
  {
    name: 'Henry Post Army Air Field (Fort Sill)',
    city: 'Fort Sill',
    country: 'United States',
    IATA: 'FSI',
    ICAO: 'KFSI',
    lat: '34.64979935',
    lon: '-98.40219879',
    timezone: '-6'
  },
  {
    name: 'Princeton Municipal ',
    city: 'Princeton',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KPNM',
    lat: '45.55989838',
    lon: '-93.60820007',
    timezone: '-6'
  },
  {
    name: 'Wright-Patterson Air Force Base',
    city: 'Dayton',
    country: 'United States',
    IATA: 'FFO',
    ICAO: 'KFFO',
    lat: '39.8260993958',
    lon: '-84.0483016968',
    timezone: '-5'
  },
  {
    name: 'Edward G. Pitka Sr ',
    city: 'Galena',
    country: 'United States',
    IATA: 'GAL',
    ICAO: 'PAGA',
    lat: '64.73619843',
    lon: '-156.9369965',
    timezone: '-9'
  },
  {
    name: 'Chandler Municipal ',
    city: 'Chandler',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KCHD',
    lat: '33.2691',
    lon: '-111.810997',
    timezone: '-7'
  },
  {
    name: 'Mineral Wells ',
    city: 'Mineral Wells',
    country: 'United States',
    IATA: 'MWL',
    ICAO: 'KMWL',
    lat: '32.7816009521',
    lon: '-98.0602035522',
    timezone: '-6'
  },
  {
    name: 'Mc Connell Air Force Base',
    city: 'Wichita',
    country: 'United States',
    IATA: 'IAB',
    ICAO: 'KIAB',
    lat: '37.62189865',
    lon: '-97.26820374',
    timezone: '-6'
  },
  {
    name: 'New Orleans NAS JRB/Alvin Callender Field',
    city: 'New Orleans',
    country: 'United States',
    IATA: 'NBG',
    ICAO: 'KNBG',
    lat: '29.82530022',
    lon: '-90.03500366',
    timezone: '-6'
  },
  {
    name: 'Beaufort County ',
    city: 'Beaufort',
    country: 'United States',
    IATA: 'BFT',
    ICAO: 'KARW',
    lat: '32.4122009277',
    lon: '-80.6343994141',
    timezone: '-5'
  },
  {
    name: 'Texarkana Regional Webb Field',
    city: 'Texarkana',
    country: 'United States',
    IATA: 'TXK',
    ICAO: 'KTXK',
    lat: '33.45370101928711',
    lon: '-93.99099731445312',
    timezone: '-6'
  },
  {
    name: 'Plattsburgh Intl ',
    city: 'Plattsburgh',
    country: 'United States',
    IATA: 'PBG',
    ICAO: 'KPBG',
    lat: '44.650901794433594',
    lon: '-73.46810150146484',
    timezone: '-5'
  },
  {
    name: 'Phillips Army Air Field',
    city: 'Aberdeen',
    country: 'United States',
    IATA: 'APG',
    ICAO: 'KAPG',
    lat: '39.466202',
    lon: '-76.1688',
    timezone: '-5'
  },
  {
    name: 'Tucumcari Municipal ',
    city: 'Tucumcari',
    country: 'United States',
    IATA: 'TCC',
    ICAO: 'KTCC',
    lat: '35.182800293',
    lon: '-103.602996826',
    timezone: '-7'
  },
  {
    name: 'Ted Stevens Anchorage Intl ',
    city: 'Anchorage',
    country: 'United States',
    IATA: 'ANC',
    ICAO: 'PANC',
    lat: '61.174400329589844',
    lon: '-149.99600219726562',
    timezone: '-9'
  },
  {
    name: 'Robert Gray  Army Air Field ',
    city: 'Killeen',
    country: 'United States',
    IATA: 'GRK',
    ICAO: 'KGRK',
    lat: '31.067199707',
    lon: '-97.82890319820001',
    timezone: '-6'
  },
  {
    name: 'Black Rock ',
    city: 'Zuni Pueblo',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KZUN',
    lat: '35.08319854736328',
    lon: '-108.79199981689453',
    timezone: '-7'
  },
  {
    name: 'Bellingham Intl ',
    city: 'Bellingham',
    country: 'United States',
    IATA: 'BLI',
    ICAO: 'KBLI',
    lat: '48.79280090332031',
    lon: '-122.53800201416016',
    timezone: '-8'
  },
  {
    name: 'Millington-Memphis ',
    city: 'Millington',
    country: 'United States',
    IATA: 'NQA',
    ICAO: 'KNQA',
    lat: '35.356701',
    lon: '-89.8703',
    timezone: '-6'
  },
  {
    name: 'Elkins-Randolph Co-Jennings Randolph Field',
    city: 'Elkins',
    country: 'United States',
    IATA: 'EKN',
    ICAO: 'KEKN',
    lat: '38.88940048',
    lon: '-79.85710144',
    timezone: '-5'
  },
  {
    name: 'Hartford Brainard ',
    city: 'Hartford',
    country: 'United States',
    IATA: 'HFD',
    ICAO: 'KHFD',
    lat: '41.736698150635',
    lon: '-72.649398803711',
    timezone: '-5'
  },
  {
    name: 'North Central State ',
    city: 'Smithfield',
    country: 'United States',
    IATA: 'SFZ',
    ICAO: 'KSFZ',
    lat: '41.9207992554',
    lon: '-71.49140167239999',
    timezone: '-5'
  },
  {
    name: 'Mobile Regional ',
    city: 'Mobile',
    country: 'United States',
    IATA: 'MOB',
    ICAO: 'KMOB',
    lat: '30.691200256348',
    lon: '-88.242797851562',
    timezone: '-6'
  },
  {
    name: 'Moffett Federal Airfield',
    city: 'Mountain View',
    country: 'United States',
    IATA: 'NUQ',
    ICAO: 'KNUQ',
    lat: '37.4161',
    lon: '-122.049004',
    timezone: '-8'
  },
  {
    name: 'Santa Fe Municipal ',
    city: 'Santa Fe',
    country: 'United States',
    IATA: 'SAF',
    ICAO: 'KSAF',
    lat: '35.617099762',
    lon: '-106.088996887',
    timezone: '-7'
  },
  {
    name: 'Barking Sands ',
    city: 'Barking Sands',
    country: 'United States',
    IATA: 'BKH',
    ICAO: 'PHBK',
    lat: '22.022800445599998',
    lon: '-159.785003662',
    timezone: '-10'
  },
  {
    name: 'Beauregard Regional ',
    city: 'Deridder',
    country: 'United States',
    IATA: 'DRI',
    ICAO: 'KDRI',
    lat: '30.8316993713',
    lon: '-93.33989715579999',
    timezone: '-6'
  },
  {
    name: 'Bradshaw Army Airfield',
    city: 'Bradshaw Field',
    country: 'United States',
    IATA: 'BSF',
    ICAO: 'PHSF',
    lat: '19.760099411',
    lon: '-155.554000854',
    timezone: '-10'
  },
  {
    name: 'Nogales Intl ',
    city: 'Nogales',
    country: 'United States',
    IATA: 'OLS',
    ICAO: 'KOLS',
    lat: '31.4177',
    lon: '-110.848',
    timezone: '-7'
  },
  {
    name: 'Mac Dill Air Force Base',
    city: 'Tampa',
    country: 'United States',
    IATA: 'MCF',
    ICAO: 'KMCF',
    lat: '27.84930038',
    lon: '-82.52120209',
    timezone: '-5'
  },
  {
    name: 'Scott AFB/Midamerica ',
    city: 'Belleville',
    country: 'United States',
    IATA: 'BLV',
    ICAO: 'KBLV',
    lat: '38.5452',
    lon: '-89.835197',
    timezone: '-6'
  },
  {
    name: 'Opa-locka Executive ',
    city: 'Miami',
    country: 'United States',
    IATA: 'OPF',
    ICAO: 'KOPF',
    lat: '25.907',
    lon: '-80.278397',
    timezone: '-5'
  },
  {
    name: 'Del Rio Intl ',
    city: 'Del Rio',
    country: 'United States',
    IATA: 'DRT',
    ICAO: 'KDRT',
    lat: '29.3742008209',
    lon: '-100.927001953',
    timezone: '-6'
  },
  {
    name: 'Southwest Florida Intl ',
    city: 'Fort Myers',
    country: 'United States',
    IATA: 'RSW',
    ICAO: 'KRSW',
    lat: '26.53619956970215',
    lon: '-81.75520324707031',
    timezone: '-5'
  },
  {
    name: 'King Salmon ',
    city: 'King Salmon',
    country: 'United States',
    IATA: 'AKN',
    ICAO: 'PAKN',
    lat: '58.67679977',
    lon: '-156.6490021',
    timezone: '-9'
  },
  {
    name: 'Muir Army Air Field (Fort Indiantown Gap) ',
    city: 'Muir',
    country: 'United States',
    IATA: 'MUI',
    ICAO: 'KMUI',
    lat: '40.434799',
    lon: '-76.569397',
    timezone: '-5'
  },
  {
    name: 'Kapalua ',
    city: 'Lahania-kapalua',
    country: 'United States',
    IATA: 'JHM',
    ICAO: 'PHJH',
    lat: '20.962900161743164',
    lon: '-156.67300415039062',
    timezone: '-10'
  },
  {
    name: 'John F Kennedy Intl ',
    city: 'New York',
    country: 'United States',
    IATA: 'JFK',
    ICAO: 'KJFK',
    lat: '40.63980103',
    lon: '-73.77890015',
    timezone: '-5'
  },
  {
    name: 'Homestead ARB ',
    city: 'Homestead',
    country: 'United States',
    IATA: 'HST',
    ICAO: 'KHST',
    lat: '25.48859978',
    lon: '-80.38359833',
    timezone: '-5'
  },
  {
    name: 'Riverside Municipal ',
    city: 'Riverside',
    country: 'United States',
    IATA: 'RAL',
    ICAO: 'KRAL',
    lat: '33.95190048',
    lon: '-117.4449997',
    timezone: '-8'
  },
  {
    name: 'Sherman Army Air Field',
    city: 'Fort Leavenworth',
    country: 'United States',
    IATA: 'FLV',
    ICAO: 'KFLV',
    lat: '39.3683013916',
    lon: '-94.9147033691',
    timezone: '-6'
  },
  {
    name: 'Wallops Flight Facility ',
    city: 'Wallops Island',
    country: 'United States',
    IATA: 'WAL',
    ICAO: 'KWAL',
    lat: '37.9402008057',
    lon: '-75.4664001465',
    timezone: '-5'
  },
  {
    name: 'Holloman Air Force Base',
    city: 'Alamogordo',
    country: 'United States',
    IATA: 'HMN',
    ICAO: 'KHMN',
    lat: '32.8525009155',
    lon: '-106.107002258',
    timezone: '-7'
  },
  {
    name: 'Willow Grove Naval Air Station/Joint Reserve Base',
    city: 'Willow Grove',
    country: 'United States',
    IATA: 'NXX',
    ICAO: 'KNXX',
    lat: '40.19979858',
    lon: '-75.14820099',
    timezone: '-5'
  },
  {
    name: 'Cheyenne Regional Jerry Olson Field',
    city: 'Cheyenne',
    country: 'United States',
    IATA: 'CYS',
    ICAO: 'KCYS',
    lat: '41.15570068',
    lon: '-104.8119965',
    timezone: '-7'
  },
  {
    name: 'Stockton Metropolitan ',
    city: 'Stockton',
    country: 'United States',
    IATA: 'SCK',
    ICAO: 'KSCK',
    lat: '37.894199371338',
    lon: '-121.2379989624',
    timezone: '-8'
  },
  {
    name: 'Charleston Air Force Base-Intl ',
    city: 'Charleston',
    country: 'United States',
    IATA: 'CHS',
    ICAO: 'KCHS',
    lat: '32.89860153',
    lon: '-80.04049683',
    timezone: '-5'
  },
  {
    name: 'Reno Tahoe Intl ',
    city: 'Reno',
    country: 'United States',
    IATA: 'RNO',
    ICAO: 'KRNO',
    lat: '39.49909973144531',
    lon: '-119.76799774169922',
    timezone: '-8'
  },
  {
    name: 'Ketchikan Intl ',
    city: 'Ketchikan',
    country: 'United States',
    IATA: 'KTN',
    ICAO: 'PAKT',
    lat: '55.35559845',
    lon: '-131.7140045',
    timezone: '-9'
  },
  {
    name: 'Willow Run ',
    city: 'Detroit',
    country: 'United States',
    IATA: 'YIP',
    ICAO: 'KYIP',
    lat: '42.23789978',
    lon: '-83.53040314',
    timezone: '-5'
  },
  {
    name: 'Vandenberg Air Force Base',
    city: 'Lompoc',
    country: 'United States',
    IATA: 'VBG',
    ICAO: 'KVBG',
    lat: '34.7373008728',
    lon: '-120.583999634',
    timezone: '-8'
  },
  {
    name: 'Birmingham-Shuttlesworth Intl ',
    city: 'Birmingham',
    country: 'United States',
    IATA: 'BHM',
    ICAO: 'KBHM',
    lat: '33.56290054',
    lon: '-86.75350189',
    timezone: '-6'
  },
  {
    name: 'Lakehurst Maxfield Field ',
    city: 'Lakehurst',
    country: 'United States',
    IATA: 'NEL',
    ICAO: 'KNEL',
    lat: '40.03329849',
    lon: '-74.353302',
    timezone: '-5'
  },
  {
    name: 'Eareckson Air Station',
    city: 'Shemya',
    country: 'United States',
    IATA: 'SYA',
    ICAO: 'PASY',
    lat: '52.71229935',
    lon: '174.1139984',
    timezone: '-10'
  },
  {
    name: 'Nellis Air Force Base',
    city: 'Las Vegas',
    country: 'United States',
    IATA: 'LSV',
    ICAO: 'KLSV',
    lat: '36.2361984253',
    lon: '-115.033996582',
    timezone: '-8'
  },
  {
    name: 'March ARB ',
    city: 'Riverside',
    country: 'United States',
    IATA: 'RIV',
    ICAO: 'KRIV',
    lat: '33.880699',
    lon: '-117.259003',
    timezone: '-8'
  },
  {
    name: 'Modesto City Co-Harry Sham Field',
    city: 'Modesto',
    country: 'United States',
    IATA: 'MOD',
    ICAO: 'KMOD',
    lat: '37.62580109',
    lon: '-120.9540024',
    timezone: '-8'
  },
  {
    name: 'Sacramento Intl ',
    city: 'Sacramento',
    country: 'United States',
    IATA: 'SMF',
    ICAO: 'KSMF',
    lat: '38.69540023803711',
    lon: '-121.59100341796875',
    timezone: '-8'
  },
  {
    name: 'Waukegan National ',
    city: 'Chicago',
    country: 'United States',
    IATA: 'UGN',
    ICAO: 'KUGN',
    lat: '42.422199249268',
    lon: '-87.867897033691',
    timezone: '-6'
  },
  {
    name: 'City of Colorado Springs Municipal ',
    city: 'Colorado Springs',
    country: 'United States',
    IATA: 'COS',
    ICAO: 'KCOS',
    lat: '38.805801',
    lon: '-104.700996',
    timezone: '-7'
  },
  {
    name: 'Buffalo Niagara Intl ',
    city: 'Buffalo',
    country: 'United States',
    IATA: 'BUF',
    ICAO: 'KBUF',
    lat: '42.94049835',
    lon: '-78.73220062',
    timezone: '-5'
  },
  {
    name: 'Griffing Sandusky ',
    city: 'Sandusky',
    country: 'United States',
    IATA: 'SKY',
    ICAO: 'KSKY',
    lat: '41.4333992004',
    lon: '-82.6522979736',
    timezone: '-5'
  },
  {
    name: 'Snohomish County (Paine Field) ',
    city: 'Everett',
    country: 'United States',
    IATA: 'PAE',
    ICAO: 'KPAE',
    lat: '47.90629959',
    lon: '-122.2819977',
    timezone: '-8'
  },
  {
    name: 'Mountain Home Air Force Base',
    city: 'Mountain Home',
    country: 'United States',
    IATA: 'MUO',
    ICAO: 'KMUO',
    lat: '43.043598',
    lon: '-115.872002',
    timezone: '-7'
  },
  {
    name: 'Cedar City Regional ',
    city: 'Cedar City',
    country: 'United States',
    IATA: 'CDC',
    ICAO: 'KCDC',
    lat: '37.70100021362305',
    lon: '-113.0989990234375',
    timezone: '-7'
  },
  {
    name: 'Bradley Intl ',
    city: 'Windsor Locks',
    country: 'United States',
    IATA: 'BDL',
    ICAO: 'KBDL',
    lat: '41.9388999939',
    lon: '-72.68319702149999',
    timezone: '-5'
  },
  {
    name: 'Mc Allen Miller Intl ',
    city: 'Mcallen',
    country: 'United States',
    IATA: 'MFE',
    ICAO: 'KMFE',
    lat: '26.17580032',
    lon: '-98.23860168',
    timezone: '-6'
  },
  {
    name: 'Norfolk Naval Station (Chambers Field)',
    city: 'Norfolk',
    country: 'United States',
    IATA: 'NGU',
    ICAO: 'KNGU',
    lat: '36.937599',
    lon: '-76.289299',
    timezone: '-5'
  },
  {
    name: 'Westover ARB/Metropolitan ',
    city: 'Chicopee Falls',
    country: 'United States',
    IATA: 'CEF',
    ICAO: 'KCEF',
    lat: '42.19400024',
    lon: '-72.53479767',
    timezone: '-5'
  },
  {
    name: 'Lubbock Preston Smith Intl ',
    city: 'Lubbock',
    country: 'United States',
    IATA: 'LBB',
    ICAO: 'KLBB',
    lat: '33.663601',
    lon: '-101.822998',
    timezone: '-6'
  },
  {
    name: "Chicago O'Hare Intl ",
    city: 'Chicago',
    country: 'United States',
    IATA: 'ORD',
    ICAO: 'KORD',
    lat: '41.9786',
    lon: '-87.9048',
    timezone: '-6'
  },
  {
    name: 'Boca Raton ',
    city: 'Boca Raton',
    country: 'United States',
    IATA: 'BCT',
    ICAO: 'KBCT',
    lat: '26.3784999847',
    lon: '-80.1076965332',
    timezone: '-5'
  },
  {
    name: 'Fairbanks Intl ',
    city: 'Fairbanks',
    country: 'United States',
    IATA: 'FAI',
    ICAO: 'PAFA',
    lat: '64.81510162',
    lon: '-147.8560028',
    timezone: '-9'
  },
  {
    name: 'Quantico MCAF /Turner field',
    city: 'Quantico',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNYG',
    lat: '38.50170135',
    lon: '-77.30529785',
    timezone: '-5'
  },
  {
    name: 'Cannon Air Force Base',
    city: 'Clovis',
    country: 'United States',
    IATA: 'CVS',
    ICAO: 'KCVS',
    lat: '34.3828010559',
    lon: '-103.321998596',
    timezone: '-7'
  },
  {
    name: 'Kaneohe Bay MCAS (Marion E. Carl Field) ',
    city: 'Kaneohe Bay',
    country: 'United States',
    IATA: 'NGF',
    ICAO: 'PHNG',
    lat: '21.4505004883',
    lon: '-157.768005371',
    timezone: '-10'
  },
  {
    name: 'Offutt Air Force Base',
    city: 'Omaha',
    country: 'United States',
    IATA: 'OFF',
    ICAO: 'KOFF',
    lat: '41.118301391602',
    lon: '-95.912498474121',
    timezone: '-6'
  },
  {
    name: 'Gulkana ',
    city: 'Gulkana',
    country: 'United States',
    IATA: 'GKN',
    ICAO: 'PAGK',
    lat: '62.1548996',
    lon: '-145.4570007',
    timezone: '-9'
  },
  {
    name: 'Watertown Intl ',
    city: 'Watertown',
    country: 'United States',
    IATA: 'ART',
    ICAO: 'KART',
    lat: '43.99190139770508',
    lon: '-76.02169799804688',
    timezone: '-5'
  },
  {
    name: 'Palm Springs Intl ',
    city: 'Palm Springs',
    country: 'United States',
    IATA: 'PSP',
    ICAO: 'KPSP',
    lat: '33.8297004699707',
    lon: '-116.50700378417969',
    timezone: '-8'
  },
  {
    name: 'Rick Husband Amarillo Intl ',
    city: 'Amarillo',
    country: 'United States',
    IATA: 'AMA',
    ICAO: 'KAMA',
    lat: '35.219398',
    lon: '-101.706001',
    timezone: '-6'
  },
  {
    name: 'Fort Dodge Regional ',
    city: 'Fort Dodge',
    country: 'United States',
    IATA: 'FOD',
    ICAO: 'KFOD',
    lat: '42.55149841',
    lon: '-94.19259644',
    timezone: '-6'
  },
  {
    name: 'Barksdale Air Force Base',
    city: 'Shreveport',
    country: 'United States',
    IATA: 'BAD',
    ICAO: 'KBAD',
    lat: '32.5018005371',
    lon: '-93.6626968384',
    timezone: '-6'
  },
  {
    name: 'Topeka Regional  - Forbes Field',
    city: 'Topeka',
    country: 'United States',
    IATA: 'FOE',
    ICAO: 'KFOE',
    lat: '38.950901031499995',
    lon: '-95.66359710690001',
    timezone: '-6'
  },
  {
    name: 'Cotulla-La Salle County ',
    city: 'Cotulla',
    country: 'United States',
    IATA: 'COT',
    ICAO: 'KCOT',
    lat: '28.45669937',
    lon: '-99.22029877',
    timezone: '-6'
  },
  {
    name: 'Wilmington Intl ',
    city: 'Wilmington',
    country: 'United States',
    IATA: 'ILM',
    ICAO: 'KILM',
    lat: '34.270599365234375',
    lon: '-77.90260314941406',
    timezone: '-5'
  },
  {
    name: 'Baton Rouge Metropolitan ',
    city: 'Baton Rouge',
    country: 'United States',
    IATA: 'BTR',
    ICAO: 'KBTR',
    lat: '30.533199',
    lon: '-91.149597',
    timezone: '-6'
  },
  {
    name: 'Meridian Naval Air Station',
    city: 'Meridian',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KNMM',
    lat: '32.55210114',
    lon: '-88.55560303',
    timezone: '-6'
  },
  {
    name: 'Tyler Pounds Regional ',
    city: 'Tyler',
    country: 'United States',
    IATA: 'TYR',
    ICAO: 'KTYR',
    lat: '32.35409927368164',
    lon: '-95.40239715576172',
    timezone: '-6'
  },
  {
    name: 'Baltimore/Washington Intl Thurgood Marshall ',
    city: 'Baltimore',
    country: 'United States',
    IATA: 'BWI',
    ICAO: 'KBWI',
    lat: '39.1754',
    lon: '-76.668297',
    timezone: '-5'
  },
  {
    name: 'Hobart Regional ',
    city: 'Hobart',
    country: 'United States',
    IATA: 'HBR',
    ICAO: 'KHBR',
    lat: '34.991317',
    lon: '-99.051313',
    timezone: '-6'
  },
  {
    name: 'Lanai ',
    city: 'Lanai',
    country: 'United States',
    IATA: 'LNY',
    ICAO: 'PHNY',
    lat: '20.785600662231445',
    lon: '-156.9510040283203',
    timezone: '-10'
  },
  {
    name: 'Alexandria Intl ',
    city: 'Alexandria',
    country: 'United States',
    IATA: 'AEX',
    ICAO: 'KAEX',
    lat: '31.32740020751953',
    lon: '-92.54979705810547',
    timezone: '-6'
  },
  {
    name: 'Condron Army Air Field',
    city: 'White Sands',
    country: 'United States',
    IATA: 'WSD',
    ICAO: 'KWSD',
    lat: '32.34149933',
    lon: '-106.4029999',
    timezone: '-7'
  },
  {
    name: 'Cold Bay ',
    city: 'Cold Bay',
    country: 'United States',
    IATA: 'CDB',
    ICAO: 'PACD',
    lat: '55.20610046386719',
    lon: '-162.72500610351562',
    timezone: '-9'
  },
  {
    name: 'Tulsa Intl ',
    city: 'Tulsa',
    country: 'United States',
    IATA: 'TUL',
    ICAO: 'KTUL',
    lat: '36.19839859008789',
    lon: '-95.88809967041016',
    timezone: '-6'
  },
  {
    name: 'Sitka Rocky Gutierrez ',
    city: 'Sitka',
    country: 'United States',
    IATA: 'SIT',
    ICAO: 'PASI',
    lat: '57.04710006713867',
    lon: '-135.36199951171875',
    timezone: '-9'
  },
  {
    name: 'Long Island Mac Arthur ',
    city: 'Islip',
    country: 'United States',
    IATA: 'ISP',
    ICAO: 'KISP',
    lat: '40.79520035',
    lon: '-73.10019684',
    timezone: '-5'
  },
  {
    name: 'Minneapolis-St Paul Intl/Wold-Chamberlain ',
    city: 'Minneapolis',
    country: 'United States',
    IATA: 'MSP',
    ICAO: 'KMSP',
    lat: '44.882',
    lon: '-93.221802',
    timezone: '-6'
  },
  {
    name: 'New Castle ',
    city: 'Wilmington',
    country: 'United States',
    IATA: 'ILG',
    ICAO: 'KILG',
    lat: '39.67869949',
    lon: '-75.60649872',
    timezone: '-5'
  },
  {
    name: 'Unalaska ',
    city: 'Unalaska',
    country: 'United States',
    IATA: 'DUT',
    ICAO: 'PADU',
    lat: '53.900100708',
    lon: '-166.544006348',
    timezone: '-9'
  },
  {
    name: 'Louis Armstrong New Orleans Intl ',
    city: 'New Orleans',
    country: 'United States',
    IATA: 'MSY',
    ICAO: 'KMSY',
    lat: '29.99340057373047',
    lon: '-90.25800323486328',
    timezone: '-6'
  },
  {
    name: 'Portland Intl Jetport ',
    city: 'Portland',
    country: 'United States',
    IATA: 'PWM',
    ICAO: 'KPWM',
    lat: '43.64619827',
    lon: '-70.30930328',
    timezone: '-5'
  },
  {
    name: 'Will Rogers World ',
    city: 'Oklahoma City',
    country: 'United States',
    IATA: 'OKC',
    ICAO: 'KOKC',
    lat: '35.39310073852539',
    lon: '-97.60070037841797',
    timezone: '-6'
  },
  {
    name: 'Albany Intl ',
    city: 'Albany',
    country: 'United States',
    IATA: 'ALB',
    ICAO: 'KALB',
    lat: '42.74829864501953',
    lon: '-73.80169677734375',
    timezone: '-5'
  },
  {
    name: 'Valdez Pioneer Field',
    city: 'Valdez',
    country: 'United States',
    IATA: 'VDZ',
    ICAO: 'PAVD',
    lat: '61.13389969',
    lon: '-146.2480011',
    timezone: '-9'
  },
  {
    name: 'Langley Air Force Base',
    city: 'Hampton',
    country: 'United States',
    IATA: 'LFI',
    ICAO: 'KLFI',
    lat: '37.082901001',
    lon: '-76.360496521',
    timezone: '-5'
  },
  {
    name: 'John Wayne -Orange County ',
    city: 'Santa Ana',
    country: 'United States',
    IATA: 'SNA',
    ICAO: 'KSNA',
    lat: '33.67570114',
    lon: '-117.8679962',
    timezone: '-8'
  },
  {
    name: 'Columbus Air Force Base',
    city: 'Colombus',
    country: 'United States',
    IATA: 'CBM',
    ICAO: 'KCBM',
    lat: '33.6437988281',
    lon: '-88.44380187990001',
    timezone: '-6'
  },
  {
    name: 'Kendall-Tamiami Executive ',
    city: 'Kendall-tamiami',
    country: 'United States',
    IATA: 'TMB',
    ICAO: 'KTMB',
    lat: '25.6478996277',
    lon: '-80.432800293',
    timezone: '-5'
  },
  {
    name: 'Oceana Naval Air Station',
    city: 'Oceana',
    country: 'United States',
    IATA: 'NTU',
    ICAO: 'KNTU',
    lat: '36.820702',
    lon: '-76.033501',
    timezone: '-5'
  },
  {
    name: 'Grissom Air Reserve Base',
    city: 'Peru',
    country: 'United States',
    IATA: 'GUS',
    ICAO: 'KGUS',
    lat: '40.648101806599996',
    lon: '-86.1520996094',
    timezone: '-5'
  },
  {
    name: 'Casper-Natrona County Intl ',
    city: 'Casper',
    country: 'United States',
    IATA: 'CPR',
    ICAO: 'KCPR',
    lat: '42.908001',
    lon: '-106.463997',
    timezone: '-7'
  },
  {
    name: 'Destin-Ft Walton Beach ',
    city: 'Valparaiso',
    country: 'United States',
    IATA: 'VPS',
    ICAO: 'KVPS',
    lat: '30.4832',
    lon: '-86.525398',
    timezone: '-6'
  },
  {
    name: 'Craig Field',
    city: 'Selma',
    country: 'United States',
    IATA: 'SEM',
    ICAO: 'KSEM',
    lat: '32.343898773193',
    lon: '-86.987800598145',
    timezone: '-6'
  },
  {
    name: 'Key West Intl ',
    city: 'Key West',
    country: 'United States',
    IATA: 'EYW',
    ICAO: 'KEYW',
    lat: '24.556100845336914',
    lon: '-81.75959777832031',
    timezone: '-5'
  },
  {
    name: 'Charlotte Douglas Intl ',
    city: 'Charlotte',
    country: 'United States',
    IATA: 'CLT',
    ICAO: 'KCLT',
    lat: '35.2140007019043',
    lon: '-80.94309997558594',
    timezone: '-5'
  },
  {
    name: 'McCarran Intl ',
    city: 'Las Vegas',
    country: 'United States',
    IATA: 'LAS',
    ICAO: 'KLAS',
    lat: '36.08010101',
    lon: '-115.1520004',
    timezone: '-8'
  },
  {
    name: 'Orlando Intl ',
    city: 'Orlando',
    country: 'United States',
    IATA: 'MCO',
    ICAO: 'KMCO',
    lat: '28.429399490356445',
    lon: '-81.30899810791016',
    timezone: '-5'
  },
  {
    name: 'Florence Regional ',
    city: 'Florence',
    country: 'United States',
    IATA: 'FLO',
    ICAO: 'KFLO',
    lat: '34.18539810180664',
    lon: '-79.7238998413086',
    timezone: '-5'
  },
  {
    name: 'Great Falls Intl ',
    city: 'Great Falls',
    country: 'United States',
    IATA: 'GTF',
    ICAO: 'KGTF',
    lat: '47.48199844',
    lon: '-111.3710022',
    timezone: '-7'
  },
  {
    name: 'Youngstown Warren Regional ',
    city: 'Youngstown',
    country: 'United States',
    IATA: 'YNG',
    ICAO: 'KYNG',
    lat: '41.26070023',
    lon: '-80.67910004',
    timezone: '-5'
  },
  {
    name: 'Ladd AAF Airfield',
    city: 'Fort Wainwright',
    country: 'United States',
    IATA: 'FBK',
    ICAO: 'PAFB',
    lat: '64.83750153',
    lon: '-147.6139984',
    timezone: '-9'
  },
  {
    name: 'Mc Minnville Municipal ',
    city: 'Mackminnville',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KMMV',
    lat: '45.19440079',
    lon: '-123.1360016',
    timezone: '-8'
  },
  {
    name: 'Robins Air Force Base',
    city: 'Macon',
    country: 'United States',
    IATA: 'WRB',
    ICAO: 'KWRB',
    lat: '32.6400985718',
    lon: '-83.5919036865',
    timezone: '-5'
  },
  {
    name: 'Suvarnabhumi ',
    city: 'Bangkok',
    country: 'Thailand',
    IATA: 'BKK',
    ICAO: 'VTBS',
    lat: '13.681099891662598',
    lon: '100.74700164794922',
    timezone: '7'
  },
  {
    name: 'Naha ',
    city: 'Naha',
    country: 'Indonesia',
    IATA: 'NAH',
    ICAO: 'WAMH',
    lat: '3.6832098960876465',
    lon: '125.52799987792969',
    timezone: '8'
  },
  {
    name: 'Andi Jemma ',
    city: 'Masamba',
    country: 'Indonesia',
    IATA: 'MXB',
    ICAO: 'WAWM',
    lat: '-2.55803',
    lon: '120.323997',
    timezone: '8'
  },
  {
    name: 'Soroako ',
    city: 'Soroako',
    country: 'Indonesia',
    IATA: 'SQR',
    ICAO: 'WAWS',
    lat: '-2.5311999320983887',
    lon: '121.35800170898438',
    timezone: '8'
  },
  {
    name: 'Pongtiku ',
    city: 'Makale',
    country: 'Indonesia',
    IATA: 'TTR',
    ICAO: 'WAWT',
    lat: '-3.0447399616241',
    lon: '119.82199859619',
    timezone: '8'
  },
  {
    name: 'Wolter Monginsidi ',
    city: 'Kendari',
    country: 'Indonesia',
    IATA: 'KDI',
    ICAO: 'WAWW',
    lat: '-4.081610202789307',
    lon: '122.41799926757812',
    timezone: '8'
  },
  {
    name: 'Maimun Saleh ',
    city: 'Sabang',
    country: 'Indonesia',
    IATA: 'SBG',
    ICAO: 'WITB',
    lat: '5.87412977219',
    lon: '95.33969879150001',
    timezone: '7'
  },
  {
    name: 'Cibeureum ',
    city: 'Tasikmalaya',
    country: 'Indonesia',
    IATA: 'TSY',
    ICAO: 'WICM',
    lat: '-7.346600055690001',
    lon: '108.246002197',
    timezone: '7'
  },
  {
    name: 'Iswahyudi ',
    city: 'Madiun',
    country: 'Indonesia',
    IATA: '\\N',
    ICAO: 'WARI',
    lat: '-7.615769863128662',
    lon: '111.43399810791016',
    timezone: '7'
  },
  {
    name: 'Abdul Rachman Saleh ',
    city: 'Malang',
    country: 'Indonesia',
    IATA: 'MLG',
    ICAO: 'WARA',
    lat: '-7.926559925079999',
    lon: '112.714996338',
    timezone: '7'
  },
  {
    name: 'Budiarto ',
    city: 'Tangerang',
    country: 'Indonesia',
    IATA: '\\N',
    ICAO: 'WICB',
    lat: '-6.293171',
    lon: '106.57',
    timezone: '7'
  },
  {
    name: 'Husein Sastranegara Intl ',
    city: 'Bandung',
    country: 'Indonesia',
    IATA: 'BDO',
    ICAO: 'WICC',
    lat: '-6.900629997253418',
    lon: '107.57599639892578',
    timezone: '7'
  },
  {
    name: 'Penggung ',
    city: 'Cirebon',
    country: 'Indonesia',
    IATA: 'CBN',
    ICAO: 'WICD',
    lat: '-6.756140232090001',
    lon: '108.540000916',
    timezone: '7'
  },
  {
    name: 'Adi Sutjipto Intl ',
    city: 'Yogyakarta',
    country: 'Indonesia',
    IATA: 'JOG',
    ICAO: 'WARJ',
    lat: '-7.788179874420166',
    lon: '110.43199920654297',
    timezone: '7'
  },
  {
    name: 'Tunggul Wulung ',
    city: 'Cilacap',
    country: 'Indonesia',
    IATA: 'CXP',
    ICAO: 'WIHL',
    lat: '-7.645060062410001',
    lon: '109.033996582',
    timezone: '7'
  },
  {
    name: 'Pondok Cabe Air Base',
    city: 'Jakarta',
    country: 'Indonesia',
    IATA: 'PCB',
    ICAO: 'WIHP',
    lat: '-6.3369598388671875',
    lon: '106.76499938964844',
    timezone: '7'
  },
  {
    name: 'Achmad Yani ',
    city: 'Semarang',
    country: 'Indonesia',
    IATA: 'SRG',
    ICAO: 'WARS',
    lat: '-6.97273',
    lon: '110.375',
    timezone: '7'
  },
  {
    name: 'Hang Nadim Intl ',
    city: 'Batam',
    country: 'Indonesia',
    IATA: 'BTH',
    ICAO: 'WIDD',
    lat: '1.12102997303',
    lon: '104.119003296',
    timezone: '7'
  },
  {
    name: 'Buluh Tumbang (H A S Hanandjoeddin) ',
    city: 'Tanjung Pandan',
    country: 'Indonesia',
    IATA: 'TJQ',
    ICAO: 'WIOD',
    lat: '-2.74571990967',
    lon: '107.754997253',
    timezone: '7'
  },
  {
    name: 'Pangkal Pinang (Depati Amir) ',
    city: 'Pangkal Pinang',
    country: 'Indonesia',
    IATA: 'PGK',
    ICAO: 'WIPK',
    lat: '-2.16219997406',
    lon: '106.138999939',
    timezone: '7'
  },
  {
    name: 'Raja Haji Fisabilillah Intl ',
    city: 'Tanjung Pinang',
    country: 'Indonesia',
    IATA: 'TNJ',
    ICAO: 'WIDN',
    lat: '0.922683000565',
    lon: '104.531997681',
    timezone: '7'
  },
  {
    name: 'Dabo ',
    city: 'Singkep',
    country: 'Indonesia',
    IATA: 'SIQ',
    ICAO: 'WIDS',
    lat: '-0.47918900847435',
    lon: '104.5790023803711',
    timezone: '7'
  },
  {
    name: 'Syamsudin Noor ',
    city: 'Banjarmasin',
    country: 'Indonesia',
    IATA: 'BDJ',
    ICAO: 'WAOO',
    lat: '-3.4423599243164062',
    lon: '114.76300048828125',
    timezone: '8'
  },
  {
    name: 'Batu Licin ',
    city: 'Batu Licin',
    country: 'Indonesia',
    IATA: 'BTW',
    ICAO: 'WAOC',
    lat: '-3.4124100208300003',
    lon: '115.995002747',
    timezone: '8'
  },
  {
    name: 'Iskandar ',
    city: 'Pangkalan Bun',
    country: 'Indonesia',
    IATA: 'PKN',
    ICAO: 'WAOI',
    lat: '-2.70519995689',
    lon: '111.672996521',
    timezone: '7'
  },
  {
    name: 'Tjilik Riwut ',
    city: 'Palangkaraya',
    country: 'Indonesia',
    IATA: 'PKY',
    ICAO: 'WAOP',
    lat: '-2.22513008118',
    lon: '113.943000793',
    timezone: '7'
  },
  {
    name: 'Maumere(Wai Oti) ',
    city: 'Maumere',
    country: 'Indonesia',
    IATA: 'MOF',
    ICAO: 'WATC',
    lat: '-8.64064979553',
    lon: '122.236999512',
    timezone: '8'
  },
  {
    name: 'Ende (H Hasan Aroeboesman) ',
    city: 'Ende',
    country: 'Indonesia',
    IATA: 'ENE',
    ICAO: 'WATE',
    lat: '-8.8492898941',
    lon: '121.661003113',
    timezone: '8'
  },
  {
    name: 'Frans Sales Lega ',
    city: 'Ruteng',
    country: 'Indonesia',
    IATA: 'RTG',
    ICAO: 'WATG',
    lat: '-8.5970096588135',
    lon: '120.47699737549',
    timezone: '8'
  },
  {
    name: 'El Tari ',
    city: 'Kupang',
    country: 'Indonesia',
    IATA: 'KOE',
    ICAO: 'WATT',
    lat: '-10.171600341796875',
    lon: '123.6709976196289',
    timezone: '8'
  },
  {
    name: 'Komodo ',
    city: 'Labuhan Bajo',
    country: 'Indonesia',
    IATA: 'LBJ',
    ICAO: 'WATO',
    lat: '-8.48666',
    lon: '119.889',
    timezone: '8'
  },
  {
    name: 'Sultan Aji Muhamad Sulaiman ',
    city: 'Balikpapan',
    country: 'Indonesia',
    IATA: 'BPN',
    ICAO: 'WALL',
    lat: '-1.26827001572',
    lon: '116.893997192',
    timezone: '8'
  },
  {
    name: 'Juwata ',
    city: 'Taraken',
    country: 'Indonesia',
    IATA: 'TRK',
    ICAO: 'WALR',
    lat: '3.326667',
    lon: '117.569444',
    timezone: '8'
  },
  {
    name: 'Temindung ',
    city: 'Samarinda',
    country: 'Indonesia',
    IATA: 'SRI',
    ICAO: 'WALS',
    lat: '-0.484530985355',
    lon: '117.156997681',
    timezone: '8'
  },
  {
    name: 'Tanjung Santan ',
    city: 'Tanjung Santan',
    country: 'Indonesia',
    IATA: 'TSX',
    ICAO: 'WALT',
    lat: '-0.0929730013013',
    lon: '117.45300293',
    timezone: '8'
  },
  {
    name: 'Selaparang ',
    city: 'Mataram',
    country: 'Indonesia',
    IATA: 'AMI',
    ICAO: 'WADA',
    lat: '-8.560709953309999',
    lon: '116.095001221',
    timezone: '8'
  },
  {
    name: 'Muhammad Salahuddin ',
    city: 'Bima',
    country: 'Indonesia',
    IATA: 'BMU',
    ICAO: 'WADB',
    lat: '-8.5396499633789',
    lon: '118.68699645996',
    timezone: '8'
  },
  {
    name: 'Umbu Mehang Kunda ',
    city: 'Waingapu',
    country: 'Indonesia',
    IATA: 'WGP',
    ICAO: 'WADW',
    lat: '-9.66922',
    lon: '120.302002',
    timezone: '8'
  },
  {
    name: 'Juanda Intl ',
    city: 'Surabaya',
    country: 'Indonesia',
    IATA: 'SUB',
    ICAO: 'WARR',
    lat: '-7.3798298835754395',
    lon: '112.78700256347656',
    timezone: '7'
  },
  {
    name: 'Adi Sumarmo Wiryokusumo ',
    city: 'Solo City',
    country: 'Indonesia',
    IATA: 'SOC',
    ICAO: 'WARQ',
    lat: '-7.516089916229248',
    lon: '110.75700378417969',
    timezone: '7'
  },
  {
    name: 'Incheon Intl ',
    city: 'Seoul',
    country: 'South Korea',
    IATA: 'ICN',
    ICAO: 'RKSI',
    lat: '37.46910095214844',
    lon: '126.45099639892578',
    timezone: '9'
  },
  {
    name: 'Chiang Mai Intl ',
    city: 'Chiang Mai',
    country: 'Thailand',
    IATA: 'CNX',
    ICAO: 'VTCC',
    lat: '18.766799926799997',
    lon: '98.962600708',
    timezone: '7'
  },
  {
    name: 'Chiang Rai Intl ',
    city: 'Chiang Rai',
    country: 'Thailand',
    IATA: 'CEI',
    ICAO: 'VTCT',
    lat: '19.952299118',
    lon: '99.88289642330001',
    timezone: '7'
  },
  {
    name: 'Nakhon Si Thammarat ',
    city: 'Nakhon Si Thammarat',
    country: 'Thailand',
    IATA: 'NST',
    ICAO: 'VTSF',
    lat: '8.539620399475098',
    lon: '99.9447021484375',
    timezone: '7'
  },
  {
    name: 'Nakhon Ratchasima ',
    city: 'Nakhon Ratchasima',
    country: 'Thailand',
    IATA: 'NAK',
    ICAO: 'VTUQ',
    lat: '14.94950008392334',
    lon: '102.31300354003906',
    timezone: '7'
  },
  {
    name: 'Nakhon Phanom ',
    city: 'Nakhon Phanom',
    country: 'Thailand',
    IATA: 'KOP',
    ICAO: 'VTUW',
    lat: '17.383800506591797',
    lon: '104.64299774169922',
    timezone: '7'
  },
  {
    name: 'Ubon Ratchathani ',
    city: 'Ubon Ratchathani',
    country: 'Thailand',
    IATA: 'UBP',
    ICAO: 'VTUU',
    lat: '15.2512998581',
    lon: '104.870002747',
    timezone: '7'
  },
  {
    name: 'Khon Kaen ',
    city: 'Khon Kaen',
    country: 'Thailand',
    IATA: 'KKC',
    ICAO: 'VTUK',
    lat: '16.466600418099997',
    lon: '102.783996582',
    timezone: '7'
  },
  {
    name: 'Sukhothai ',
    city: 'Sukhothai',
    country: 'Thailand',
    IATA: 'THS',
    ICAO: 'VTPO',
    lat: '17.238000869750977',
    lon: '99.81819915771484',
    timezone: '7'
  },
  {
    name: 'Ngurah Rai (Bali) Intl ',
    city: 'Denpasar',
    country: 'Indonesia',
    IATA: 'DPS',
    ICAO: 'WADD',
    lat: '-8.7481698989868',
    lon: '115.16699981689',
    timezone: '8'
  },
  {
    name: 'Eleftherios Venizelos Intl ',
    city: 'Athens',
    country: 'Greece',
    IATA: 'ATH',
    ICAO: 'LGAV',
    lat: '37.9364013672',
    lon: '23.9444999695',
    timezone: '2'
  },
  {
    name: 'Chubu Centrair Intl ',
    city: 'Nagoya',
    country: 'Japan',
    IATA: 'NGO',
    ICAO: 'RJGG',
    lat: '34.8583984375',
    lon: '136.80499267578125',
    timezone: '9'
  },
  {
    name: 'Kobe ',
    city: 'Kobe',
    country: 'Japan',
    IATA: 'UKB',
    ICAO: 'RJBE',
    lat: '34.6328010559082',
    lon: '135.2239990234375',
    timezone: '9'
  },
  {
    name: 'Pullman Moscow Regional ',
    city: 'Pullman',
    country: 'United States',
    IATA: 'PUW',
    ICAO: 'KPUW',
    lat: '46.7439',
    lon: '-117.110001',
    timezone: '-8'
  },
  {
    name: 'Lewiston Nez Perce County ',
    city: 'Lewiston',
    country: 'United States',
    IATA: 'LWS',
    ICAO: 'KLWS',
    lat: '46.3745002746582',
    lon: '-117.01499938964844',
    timezone: '-8'
  },
  {
    name: 'Elmira Corning Regional ',
    city: 'Elmira',
    country: 'United States',
    IATA: 'ELM',
    ICAO: 'KELM',
    lat: '42.1599006652832',
    lon: '-76.8916015625',
    timezone: '-5'
  },
  {
    name: 'Ithaca Tompkins Regional ',
    city: 'Ithaca',
    country: 'United States',
    IATA: 'ITH',
    ICAO: 'KITH',
    lat: '42.49100112915039',
    lon: '-76.4583969116211',
    timezone: '-5'
  },
  {
    name: 'Monterey Peninsula ',
    city: 'Monterey',
    country: 'United States',
    IATA: 'MRY',
    ICAO: 'KMRY',
    lat: '36.58700180053711',
    lon: '-121.84300231933594',
    timezone: '-8'
  },
  {
    name: 'Santa Barbara Municipal ',
    city: 'Santa Barbara',
    country: 'United States',
    IATA: 'SBA',
    ICAO: 'KSBA',
    lat: '34.42620087',
    lon: '-119.8399963',
    timezone: '-8'
  },
  {
    name: 'Daytona Beach Intl ',
    city: 'Daytona Beach',
    country: 'United States',
    IATA: 'DAB',
    ICAO: 'KDAB',
    lat: '29.179899',
    lon: '-81.058098',
    timezone: '-5'
  },
  {
    name: 'Liep\u0101ja Intl ',
    city: 'Liepaja',
    country: 'Latvia',
    IATA: 'LPX',
    ICAO: 'EVLA',
    lat: '56.51750183105469',
    lon: '21.096900939941406',
    timezone: '2'
  },
  {
    name: 'Riga Intl ',
    city: 'Riga',
    country: 'Latvia',
    IATA: 'RIX',
    ICAO: 'EVRA',
    lat: '56.92359924316406',
    lon: '23.971099853515625',
    timezone: '2'
  },
  {
    name: '\u0160iauliai Intl ',
    city: 'Siauliai',
    country: 'Lithuania',
    IATA: 'SQQ',
    ICAO: 'EYSA',
    lat: '55.89390182495117',
    lon: '23.395000457763672',
    timezone: '2'
  },
  {
    name: 'Barysiai ',
    city: 'Barysiai',
    country: 'Lithuania',
    IATA: 'HLJ',
    ICAO: 'EYSB',
    lat: '56.07059860229492',
    lon: '23.5580997467041',
    timezone: '2'
  },
  {
    name: 'Kaunas Intl ',
    city: 'Kaunas',
    country: 'Lithuania',
    IATA: 'KUN',
    ICAO: 'EYKA',
    lat: '54.96390151977539',
    lon: '24.084800720214844',
    timezone: '2'
  },
  {
    name: 'S. Darius and S. Gir\u0117nas Airfield',
    city: 'Kaunas',
    country: 'Lithuania',
    IATA: '\\N',
    ICAO: 'EYKS',
    lat: '54.879799',
    lon: '23.8815',
    timezone: '2'
  },
  {
    name: 'Palanga Intl ',
    city: 'Palanga',
    country: 'Lithuania',
    IATA: 'PLQ',
    ICAO: 'EYPA',
    lat: '55.973201751708984',
    lon: '21.093900680541992',
    timezone: '2'
  },
  {
    name: 'Vilnius Intl ',
    city: 'Vilnius',
    country: 'Lithuania',
    IATA: 'VNO',
    ICAO: 'EYVI',
    lat: '54.634102',
    lon: '25.285801',
    timezone: '2'
  },
  {
    name: 'Panev\u0117\u017eys Air Base',
    city: 'Panevezys',
    country: 'Lithuania',
    IATA: 'PNV',
    ICAO: 'EYPP',
    lat: '55.729400634765625',
    lon: '24.460800170898438',
    timezone: '2'
  },
  {
    name: 'Erebuni ',
    city: 'Yerevan',
    country: 'Armenia',
    IATA: '\\N',
    ICAO: 'UDYE',
    lat: '40.122100830099996',
    lon: '44.465000152600005',
    timezone: '4'
  },
  {
    name: 'Stepanavan ',
    city: 'Stepanavan',
    country: 'Armenia',
    IATA: '\\N',
    ICAO: 'UDLS',
    lat: '41.048500061',
    lon: '44.337200164799995',
    timezone: '4'
  },
  {
    name: 'Zvartnots Intl ',
    city: 'Yerevan',
    country: 'Armenia',
    IATA: 'EVN',
    ICAO: 'UDYZ',
    lat: '40.1473007202',
    lon: '44.3959007263',
    timezone: '4'
  },
  {
    name: 'Gyumri Shirak ',
    city: 'Gyumri',
    country: 'Armenia',
    IATA: 'LWN',
    ICAO: 'UDSG',
    lat: '40.7504005432',
    lon: '43.859298706100006',
    timezone: '4'
  },
  {
    name: 'Assab Intl ',
    city: 'Assab',
    country: 'Eritrea',
    IATA: 'ASA',
    ICAO: 'HHSB',
    lat: '13.071800231933594',
    lon: '42.64500045776367',
    timezone: '3'
  },
  {
    name: 'Asmara Intl ',
    city: 'Asmara',
    country: 'Eritrea',
    IATA: 'ASM',
    ICAO: 'HHAS',
    lat: '15.291899681091309',
    lon: '38.910701751708984',
    timezone: '3'
  },
  {
    name: 'Massawa Intl ',
    city: 'Massawa',
    country: 'Eritrea',
    IATA: 'MSW',
    ICAO: 'HHMS',
    lat: '15.670000076293945',
    lon: '39.37009811401367',
    timezone: '3'
  },
  {
    name: 'Yasser Arafat Intl ',
    city: 'Gaza',
    country: 'Palestine',
    IATA: 'GZA',
    ICAO: 'LVGZ',
    lat: '31.24640083313',
    lon: '34.276100158691',
    timezone: '2'
  },
  {
    name: 'Batumi Intl ',
    city: 'Batumi',
    country: 'Georgia',
    IATA: 'BUS',
    ICAO: 'UGSB',
    lat: '41.6102981567',
    lon: '41.5997009277',
    timezone: '4'
  },
  {
    name: 'Kopitnari ',
    city: 'Kutaisi',
    country: 'Georgia',
    IATA: 'KUT',
    ICAO: 'UGKO',
    lat: '42.176700592',
    lon: '42.4826011658',
    timezone: '4'
  },
  {
    name: 'Tbilisi Intl ',
    city: 'Tbilisi',
    country: 'Georgia',
    IATA: 'TBS',
    ICAO: 'UGTB',
    lat: '41.6692008972',
    lon: '44.95470047',
    timezone: '4'
  },
  {
    name: 'Mukalla Intl ',
    city: 'Mukalla',
    country: 'Yemen',
    IATA: 'RIY',
    ICAO: 'OYRN',
    lat: '14.662599563598633',
    lon: '49.375',
    timezone: '3'
  },
  {
    name: "Ta'izz Intl ",
    city: 'Taiz',
    country: 'Yemen',
    IATA: 'TAI',
    ICAO: 'OYTZ',
    lat: '13.6859998703',
    lon: '44.139099121099996',
    timezone: '3'
  },
  {
    name: 'Hodeidah Intl ',
    city: 'Hodeidah',
    country: 'Yemen',
    IATA: 'HOD',
    ICAO: 'OYHD',
    lat: '14.753000259399414',
    lon: '42.97629928588867',
    timezone: '3'
  },
  {
    name: 'Aden Intl ',
    city: 'Aden',
    country: 'Yemen',
    IATA: 'ADE',
    ICAO: 'OYAA',
    lat: '12.829500198364258',
    lon: '45.02880096435547',
    timezone: '3'
  },
  {
    name: 'Ataq ',
    city: 'Ataq',
    country: 'Yemen',
    IATA: 'AXK',
    ICAO: 'OYAT',
    lat: '14.551300048828125',
    lon: '46.82619857788086',
    timezone: '3'
  },
  {
    name: 'Al Ghaidah Intl ',
    city: 'Al Ghaidah Intl',
    country: 'Yemen',
    IATA: 'AAY',
    ICAO: 'OYGD',
    lat: '16.191699981689453',
    lon: '52.17499923706055',
    timezone: '3'
  },
  {
    name: "Sana'a Intl ",
    city: 'Sanaa',
    country: 'Yemen',
    IATA: 'SAH',
    ICAO: 'OYSN',
    lat: '15.476300239562988',
    lon: '44.21969985961914',
    timezone: '3'
  },
  {
    name: 'Beihan ',
    city: 'Beihan',
    country: 'Yemen',
    IATA: 'BHN',
    ICAO: 'OYBN',
    lat: '14.781999588012695',
    lon: '45.72010040283203',
    timezone: '3'
  },
  {
    name: 'Socotra Intl ',
    city: 'Socotra',
    country: 'Yemen',
    IATA: 'SCT',
    ICAO: 'OYSQ',
    lat: '12.63070011138916',
    lon: '53.905799865722656',
    timezone: '3'
  },
  {
    name: 'Al Badie ',
    city: 'Al Badie',
    country: 'Yemen',
    IATA: '\\N',
    ICAO: 'OYBA',
    lat: '18.71929931640625',
    lon: '50.83689880371094',
    timezone: '3'
  },
  {
    name: 'Memmingen Allgau ',
    city: 'Memmingen',
    country: 'Germany',
    IATA: 'FMM',
    ICAO: 'EDJA',
    lat: '47.988800048799995',
    lon: '10.2395000458',
    timezone: '1'
  },
  {
    name: 'Nev\u015fehir Kapadokya ',
    city: 'Nevsehir',
    country: 'Turkey',
    IATA: 'NAV',
    ICAO: 'LTAZ',
    lat: '38.7719',
    lon: '34.5345',
    timezone: '3'
  },
  {
    name: 'Ministro Pistarini Intl ',
    city: 'Buenos Aires',
    country: 'Argentina',
    IATA: 'EZE',
    ICAO: 'SAEZ',
    lat: '-34.8222',
    lon: '-58.5358',
    timezone: '-3'
  },
  {
    name: 'Erbil Intl ',
    city: 'Erbil',
    country: 'Iraq',
    IATA: 'EBL',
    ICAO: 'ORER',
    lat: '36.23759841918945',
    lon: '43.963199615478516',
    timezone: '3'
  },
  {
    name: 'Emerald ',
    city: 'Emerald',
    country: 'Australia',
    IATA: 'EMD',
    ICAO: 'YEML',
    lat: '-23.5674991608',
    lon: '148.179000854',
    timezone: '10'
  },
  {
    name: 'Athen Helenikon ',
    city: 'Athens',
    country: 'Greece',
    IATA: 'HEW',
    ICAO: 'LGAT',
    lat: '37.893299',
    lon: '23.726101',
    timezone: '2'
  },
  {
    name: 'Kansai Intl ',
    city: 'Osaka',
    country: 'Japan',
    IATA: 'KIX',
    ICAO: 'RJBB',
    lat: '34.42729949951172',
    lon: '135.24400329589844',
    timezone: '9'
  },
  {
    name: 'Downtown-Manhattan/Wall St Heliport',
    city: 'New York',
    country: 'United States',
    IATA: 'JRB',
    ICAO: 'KJRB',
    lat: '40.70119858',
    lon: '-74.00900269',
    timezone: '-5'
  },
  {
    name: 'Tagbilaran ',
    city: 'Tagbilaran',
    country: 'Philippines',
    IATA: 'TAG',
    ICAO: 'RPVT',
    lat: '9.665442',
    lon: '123.853533',
    timezone: '8'
  },
  {
    name: 'Ilulissat ',
    city: 'Ilulissat',
    country: 'Greenland',
    IATA: 'JAV',
    ICAO: 'BGJN',
    lat: '69.2432022095',
    lon: '-51.0570983887',
    timezone: '-3'
  },
  {
    name: 'Qasigiannguit Heliport',
    city: 'Qasigiannguit',
    country: 'Greenland',
    IATA: 'JCH',
    ICAO: 'BGCH',
    lat: '68.822815547',
    lon: '-51.1734473705',
    timezone: '-3'
  },
  {
    name: 'Aasiaat ',
    city: 'Aasiaat',
    country: 'Greenland',
    IATA: 'JEG',
    ICAO: 'BGAA',
    lat: '68.7218017578',
    lon: '-52.7846984863',
    timezone: '-3'
  },
  {
    name: 'Palma De Mallorca ',
    city: 'Palma de Mallorca',
    country: 'Spain',
    IATA: 'PMI',
    ICAO: 'LEPA',
    lat: '39.551700592',
    lon: '2.73881006241',
    timezone: '1'
  },
  {
    name: 'Darwin Intl ',
    city: 'Darwin',
    country: 'Australia',
    IATA: 'DRW',
    ICAO: 'YPDN',
    lat: '-12.41469955444336',
    lon: '130.8769989013672',
    timezone: '9.5'
  },
  {
    name: 'Surat Thani ',
    city: 'Surat Thani',
    country: 'Thailand',
    IATA: 'URT',
    ICAO: 'VTSB',
    lat: '9.13259983063',
    lon: '99.135597229',
    timezone: '7'
  },
  {
    name: 'Talkeetna ',
    city: 'Talkeetna',
    country: 'United States',
    IATA: 'TKA',
    ICAO: 'PATK',
    lat: '62.320499420166',
    lon: '-150.09399414062',
    timezone: '-9'
  },
  {
    name: 'Xewkija Heliport',
    city: 'Gozo',
    country: 'Malta',
    IATA: 'GZM',
    ICAO: 'LMMG',
    lat: '36.027199',
    lon: '14.2728',
    timezone: '1'
  },
  {
    name: 'Tweed New Haven ',
    city: 'New Haven',
    country: 'United States',
    IATA: 'HVN',
    ICAO: 'KHVN',
    lat: '41.26369858',
    lon: '-72.88680267',
    timezone: '-5'
  },
  {
    name: 'Asheville Regional ',
    city: 'Asheville',
    country: 'United States',
    IATA: 'AVL',
    ICAO: 'KAVL',
    lat: '35.43619918823242',
    lon: '-82.54180145263672',
    timezone: '-5'
  },
  {
    name: 'Piedmont Triad Intl ',
    city: 'Greensboro',
    country: 'United States',
    IATA: 'GSO',
    ICAO: 'KGSO',
    lat: '36.097801208496094',
    lon: '-79.93730163574219',
    timezone: '-5'
  },
  {
    name: 'Joe Foss Field ',
    city: 'Sioux Falls',
    country: 'United States',
    IATA: 'FSD',
    ICAO: 'KFSD',
    lat: '43.582000732400004',
    lon: '-96.741897583',
    timezone: '-6'
  },
  {
    name: 'Ayers Rock Connellan ',
    city: 'Uluru',
    country: 'Australia',
    IATA: 'AYQ',
    ICAO: 'YAYE',
    lat: '-25.1861',
    lon: '130.975998',
    timezone: '9.5'
  },
  {
    name: 'Manchester-Boston Regional ',
    city: 'Manchester NH',
    country: 'United States',
    IATA: 'MHT',
    ICAO: 'KMHT',
    lat: '42.932598',
    lon: '-71.435699',
    timezone: '-5'
  },
  {
    name: 'Naples Municipal ',
    city: 'Naples',
    country: 'United States',
    IATA: 'APF',
    ICAO: 'KAPF',
    lat: '26.1525993347',
    lon: '-81.7752990723',
    timezone: '-5'
  },
  {
    name: 'LTS Pulau Redang ',
    city: 'Redang',
    country: 'Malaysia',
    IATA: 'RDN',
    ICAO: 'WMPR',
    lat: '5.765279769897461',
    lon: '103.00700378417969',
    timezone: '8'
  },
  {
    name: 'Louisville Intl Standiford Field',
    city: 'Louisville',
    country: 'United States',
    IATA: 'SDF',
    ICAO: 'KSDF',
    lat: '38.1744',
    lon: '-85.736',
    timezone: '-5'
  },
  {
    name: 'Charlottesville Albemarle ',
    city: 'Charlottesville VA',
    country: 'United States',
    IATA: 'CHO',
    ICAO: 'KCHO',
    lat: '38.13859939575195',
    lon: '-78.4529037475586',
    timezone: '-5'
  },
  {
    name: 'Roanoke\u2013Blacksburg Regional ',
    city: 'Roanoke VA',
    country: 'United States',
    IATA: 'ROA',
    ICAO: 'KROA',
    lat: '37.3255',
    lon: '-79.975403',
    timezone: '-5'
  },
  {
    name: 'Blue Grass ',
    city: 'Lexington KY',
    country: 'United States',
    IATA: 'LEX',
    ICAO: 'KLEX',
    lat: '38.0364990234375',
    lon: '-84.60590362548828',
    timezone: '-5'
  },
  {
    name: 'Evansville Regional ',
    city: 'Evansville',
    country: 'United States',
    IATA: 'EVV',
    ICAO: 'KEVV',
    lat: '38.0369987488',
    lon: '-87.5324020386',
    timezone: '-6'
  },
  {
    name: 'Albuquerque Intl Sunport',
    city: 'Albuquerque',
    country: 'United States',
    IATA: 'ABQ',
    ICAO: 'KABQ',
    lat: '35.040199',
    lon: '-106.609001',
    timezone: '-7'
  },
  {
    name: 'Gallatin Field',
    city: 'Bozeman',
    country: 'United States',
    IATA: 'BZN',
    ICAO: 'KBZN',
    lat: '45.77750015',
    lon: '-111.1529999',
    timezone: '-7'
  },
  {
    name: 'Billings Logan Intl ',
    city: 'Billings',
    country: 'United States',
    IATA: 'BIL',
    ICAO: 'KBIL',
    lat: '45.807701110839844',
    lon: '-108.54299926757812',
    timezone: '-7'
  },
  {
    name: 'Bert Mooney ',
    city: 'Butte',
    country: 'United States',
    IATA: 'BTM',
    ICAO: 'KBTM',
    lat: '45.95479965209961',
    lon: '-112.49700164794922',
    timezone: '-7'
  },
  {
    name: 'Cherry Capital ',
    city: 'Traverse City',
    country: 'United States',
    IATA: 'TVC',
    ICAO: 'KTVC',
    lat: '44.74140167236328',
    lon: '-85.58219909667969',
    timezone: '-5'
  },
  {
    name: 'Mundo Maya Intl ',
    city: 'Flores',
    country: 'Guatemala',
    IATA: 'FRS',
    ICAO: 'MGTK',
    lat: '16.913799285899998',
    lon: '-89.86640167239999',
    timezone: '-6'
  },
  {
    name: 'Hancock County-Bar Harbor ',
    city: 'Bar Harbor',
    country: 'United States',
    IATA: 'BHB',
    ICAO: 'KBHB',
    lat: '44.45000076',
    lon: '-68.3615036',
    timezone: '-5'
  },
  {
    name: 'Knox County Regional ',
    city: 'Rockland',
    country: 'United States',
    IATA: 'RKD',
    ICAO: 'KRKD',
    lat: '44.06010056',
    lon: '-69.09919739',
    timezone: '-5'
  },
  {
    name: 'Jackson Hole ',
    city: 'Jacksn Hole',
    country: 'United States',
    IATA: 'JAC',
    ICAO: 'KJAC',
    lat: '43.6072998046875',
    lon: '-110.73799896240234',
    timezone: '-7'
  },
  {
    name: 'Chicago Rockford Intl ',
    city: 'Rockford',
    country: 'United States',
    IATA: 'RFD',
    ICAO: 'KRFD',
    lat: '42.19540023803711',
    lon: '-89.09719848632812',
    timezone: '-6'
  },
  {
    name: 'Domodedovo Intl ',
    city: 'Moscow',
    country: 'Russia',
    IATA: 'DME',
    ICAO: 'UUDD',
    lat: '55.40879821777344',
    lon: '37.90629959106445',
    timezone: '3'
  },
  {
    name: 'Sanya Phoenix Intl ',
    city: 'Sanya',
    country: 'China',
    IATA: 'SYX',
    ICAO: 'ZJSY',
    lat: '18.302900314331055',
    lon: '109.41200256347656',
    timezone: '8'
  },
  {
    name: 'Milford Sound ',
    city: 'Milford Sound',
    country: 'New Zealand',
    IATA: 'MFN',
    ICAO: 'NZMF',
    lat: '-44.673301696777344',
    lon: '167.92300415039062',
    timezone: '12'
  },
  {
    name: 'Lijiang ',
    city: 'Lijiang',
    country: 'China',
    IATA: 'LJG',
    ICAO: 'ZPLJ',
    lat: '26.6800003052',
    lon: '100.246002197',
    timezone: '8'
  },
  {
    name: 'Greenville Spartanburg Intl ',
    city: 'Greenville',
    country: 'United States',
    IATA: 'GSP',
    ICAO: 'KGSP',
    lat: '34.8956985474',
    lon: '-82.2189025879',
    timezone: '-5'
  },
  {
    name: 'Central Illinois Regional  at Bloomington-Normal',
    city: 'Bloomington',
    country: 'United States',
    IATA: 'BMI',
    ICAO: 'KBMI',
    lat: '40.47710037',
    lon: '-88.91590118',
    timezone: '-6'
  },
  {
    name: 'Gulfport Biloxi Intl ',
    city: 'Gulfport',
    country: 'United States',
    IATA: 'GPT',
    ICAO: 'KGPT',
    lat: '30.40730094909668',
    lon: '-89.07009887695312',
    timezone: '-6'
  },
  {
    name: 'Kalamazoo Battle Creek Intl ',
    city: 'Kalamazoo',
    country: 'United States',
    IATA: 'AZO',
    ICAO: 'KAZO',
    lat: '42.234901428222656',
    lon: '-85.5521011352539',
    timezone: '-5'
  },
  {
    name: 'Toledo Express ',
    city: 'Toledo',
    country: 'United States',
    IATA: 'TOL',
    ICAO: 'KTOL',
    lat: '41.58679962',
    lon: '-83.80780029',
    timezone: '-5'
  },
  {
    name: 'Fort Wayne Intl ',
    city: 'Fort Wayne',
    country: 'United States',
    IATA: 'FWA',
    ICAO: 'KFWA',
    lat: '40.97850037',
    lon: '-85.19509888',
    timezone: '-5'
  },
  {
    name: 'Decatur ',
    city: 'Decatur',
    country: 'United States',
    IATA: 'DEC',
    ICAO: 'KDEC',
    lat: '39.834598541259766',
    lon: '-88.8656997680664',
    timezone: '-6'
  },
  {
    name: 'The Eastern Iowa ',
    city: 'Cedar Rapids',
    country: 'United States',
    IATA: 'CID',
    ICAO: 'KCID',
    lat: '41.884700775146484',
    lon: '-91.71080017089844',
    timezone: '-6'
  },
  {
    name: 'La Crosse Municipal ',
    city: 'La Crosse',
    country: 'United States',
    IATA: 'LSE',
    ICAO: 'KLSE',
    lat: '43.879002',
    lon: '-91.256699',
    timezone: '-6'
  },
  {
    name: 'Central Wisconsin ',
    city: 'Wassau',
    country: 'United States',
    IATA: 'CWA',
    ICAO: 'KCWA',
    lat: '44.7775993347',
    lon: '-89.6668014526',
    timezone: '-6'
  },
  {
    name: 'General Wayne A. Downing Peoria Intl ',
    city: 'Peoria',
    country: 'United States',
    IATA: 'PIA',
    ICAO: 'KPIA',
    lat: '40.664199829100006',
    lon: '-89.6932983398',
    timezone: '-6'
  },
  {
    name: 'Appleton Intl ',
    city: 'Appleton',
    country: 'United States',
    IATA: 'ATW',
    ICAO: 'KATW',
    lat: '44.258098602299995',
    lon: '-88.5190963745',
    timezone: '-6'
  },
  {
    name: 'Rochester Intl ',
    city: 'Rochester',
    country: 'United States',
    IATA: 'RST',
    ICAO: 'KRST',
    lat: '43.90829849243164',
    lon: '-92.5',
    timezone: '-6'
  },
  {
    name: 'University of Illinois Willard ',
    city: 'Champaign',
    country: 'United States',
    IATA: 'CMI',
    ICAO: 'KCMI',
    lat: '40.03919983',
    lon: '-88.27809906',
    timezone: '-6'
  },
  {
    name: 'Manhattan Regional ',
    city: 'Manhattan',
    country: 'United States',
    IATA: 'MHK',
    ICAO: 'KMHK',
    lat: '39.14099884033203',
    lon: '-96.6707992553711',
    timezone: '-6'
  },
  {
    name: 'Kingscote ',
    city: 'Kingscote',
    country: 'Australia',
    IATA: 'KGC',
    ICAO: 'YKSC',
    lat: '-35.71390151977539',
    lon: '137.52099609375',
    timezone: '9.5'
  },
  {
    name: 'Hervey Bay ',
    city: 'Hervey Bay',
    country: 'Australia',
    IATA: 'HVB',
    ICAO: 'YHBA',
    lat: '-25.3188991547',
    lon: '152.880004883',
    timezone: '10'
  },
  {
    name: 'Dali ',
    city: 'Dali',
    country: 'China',
    IATA: 'DLU',
    ICAO: 'ZPDL',
    lat: '25.649401',
    lon: '100.319',
    timezone: '8'
  },
  {
    name: 'Mulu ',
    city: 'Mulu',
    country: 'Malaysia',
    IATA: 'MZV',
    ICAO: 'WBMU',
    lat: '4.048329830169678',
    lon: '114.80500030517578',
    timezone: '8'
  },
  {
    name: 'Sharm El Sheikh Intl ',
    city: 'Sharm El Sheikh',
    country: 'Egypt',
    IATA: 'SSH',
    ICAO: 'HESH',
    lat: '27.9773006439',
    lon: '34.3950004578',
    timezone: '2'
  },
  {
    name: 'Venango Regional ',
    city: 'Franklin',
    country: 'United States',
    IATA: 'FKL',
    ICAO: 'KFKL',
    lat: '41.3778991699',
    lon: '-79.8603973389',
    timezone: '-5'
  },
  {
    name: 'Jomo Kenyatta Intl ',
    city: 'Nairobi',
    country: 'Kenya',
    IATA: 'NBO',
    ICAO: 'HKJK',
    lat: '-1.31923997402',
    lon: '36.9277992249',
    timezone: '3'
  },
  {
    name: 'Seronera ',
    city: 'Seronera',
    country: 'Tanzania',
    IATA: 'SEU',
    ICAO: 'HTSN',
    lat: '-2.45806',
    lon: '34.822498',
    timezone: '3'
  },
  {
    name: 'El Calafate ',
    city: 'El Calafate',
    country: 'Argentina',
    IATA: 'FTE',
    ICAO: 'SAWC',
    lat: '-50.2803',
    lon: '-72.053101',
    timezone: '-3'
  },
  {
    name: 'Armidale ',
    city: 'Armidale',
    country: 'Australia',
    IATA: 'ARM',
    ICAO: 'YARM',
    lat: '-30.528099060099997',
    lon: '151.617004395',
    timezone: '10'
  },
  {
    name: 'Grand Junction Regional ',
    city: 'Grand Junction',
    country: 'United States',
    IATA: 'GJT',
    ICAO: 'KGJT',
    lat: '39.1223983765',
    lon: '-108.527000427',
    timezone: '-7'
  },
  {
    name: 'St George Municipal ',
    city: 'Saint George',
    country: 'United States',
    IATA: 'SGU',
    ICAO: 'KSGU',
    lat: '37.036389',
    lon: '-113.510306',
    timezone: '-7'
  },
  {
    name: 'David Wayne Hooks Memorial ',
    city: 'Houston',
    country: 'United States',
    IATA: 'DWH',
    ICAO: 'KDWH',
    lat: '30.0618000031',
    lon: '-95.55280303960001',
    timezone: '-6'
  },
  {
    name: "Port O'Connor Private Heliport",
    city: "Port O\\'Connor",
    country: 'United States',
    IATA: '\\N',
    ICAO: 'XS46',
    lat: '28.429725',
    lon: '-96.444419',
    timezone: '-6'
  },
  {
    name: 'Sarasota Bradenton Intl ',
    city: 'Sarasota',
    country: 'United States',
    IATA: 'SRQ',
    ICAO: 'KSRQ',
    lat: '27.39539909362793',
    lon: '-82.55439758300781',
    timezone: '-5'
  },
  {
    name: 'L.F. Wade Intl Intl ',
    city: 'Bermuda',
    country: 'Bermuda',
    IATA: 'BDA',
    ICAO: 'TXKF',
    lat: '32.36399841308594',
    lon: '-64.67870330810547',
    timezone: '-4'
  },
  {
    name: 'Van Nuys ',
    city: 'Van Nuys',
    country: 'United States',
    IATA: 'VNY',
    ICAO: 'KVNY',
    lat: '34.209800720215',
    lon: '-118.48999786377',
    timezone: '-8'
  },
  {
    name: 'Quad City Intl ',
    city: 'Moline',
    country: 'United States',
    IATA: 'MLI',
    ICAO: 'KMLI',
    lat: '41.44850158691406',
    lon: '-90.50749969482422',
    timezone: '-6'
  },
  {
    name: 'Panama City-Bay Co Intl ',
    city: 'Panama City',
    country: 'United States',
    IATA: 'PFN',
    ICAO: 'KPFN',
    lat: '30.212099',
    lon: '-85.6828',
    timezone: '-6'
  },
  {
    name: 'Honiara Intl ',
    city: 'Honiara',
    country: 'Solomon Islands',
    IATA: 'HIR',
    ICAO: 'AGGH',
    lat: '-9.4280004501343',
    lon: '160.05499267578',
    timezone: '11'
  },
  {
    name: "Faa'a Intl ",
    city: 'Papeete',
    country: 'French Polynesia',
    IATA: 'PPT',
    ICAO: 'NTAA',
    lat: '-17.553699',
    lon: '-149.606995',
    timezone: '-10'
  },
  {
    name: 'Nauru Intl ',
    city: 'Nauru',
    country: 'Nauru',
    IATA: 'INU',
    ICAO: 'ANYN',
    lat: '-0.547458',
    lon: '166.919006',
    timezone: '12'
  },
  {
    name: 'Funafuti Intl ',
    city: 'Funafuti',
    country: 'Tuvalu',
    IATA: 'FUN',
    ICAO: 'NGFU',
    lat: '-8.525',
    lon: '179.195999',
    timezone: '12'
  },
  {
    name: 'Tolmachevo ',
    city: 'Novosibirsk',
    country: 'Russia',
    IATA: 'OVB',
    ICAO: 'UNNT',
    lat: '55.012599945068',
    lon: '82.650703430176',
    timezone: '7'
  },
  {
    name: 'Sams\u00f8 ',
    city: 'Samsoe',
    country: 'Denmark',
    IATA: '\\N',
    ICAO: 'EKSS',
    lat: '55.88949966430664',
    lon: '10.613699913024902',
    timezone: '1'
  },
  {
    name: 'Xieng Khouang ',
    city: 'Phon Savan',
    country: 'Laos',
    IATA: 'XKH',
    ICAO: 'VLXK',
    lat: '19.450001',
    lon: '103.157997',
    timezone: '7'
  },
  {
    name: 'Bismarck Municipal ',
    city: 'Bismarck',
    country: 'United States',
    IATA: 'BIS',
    ICAO: 'KBIS',
    lat: '46.772701263427734',
    lon: '-100.74600219726562',
    timezone: '-6'
  },
  {
    name: 'Telluride Regional ',
    city: 'Telluride',
    country: 'United States',
    IATA: 'TEX',
    ICAO: 'KTEX',
    lat: '37.9538002',
    lon: '-107.9079971',
    timezone: '-7'
  },
  {
    name: 'Yinchuan ',
    city: 'Yinchuan',
    country: 'China',
    IATA: '\\N',
    ICAO: 'ZLIC',
    lat: '38.481899',
    lon: '106.009003',
    timezone: '8'
  },
  {
    name: 'Mae Hong Son ',
    city: 'Mae Hong Son',
    country: 'Thailand',
    IATA: 'HGN',
    ICAO: 'VTCH',
    lat: '19.301300048828125',
    lon: '97.97579956054688',
    timezone: '7'
  },
  {
    name: 'Rapid City Regional ',
    city: 'Rapid City',
    country: 'United States',
    IATA: 'RAP',
    ICAO: 'KRAP',
    lat: '44.0452995300293',
    lon: '-103.05699920654297',
    timezone: '-7'
  },
  {
    name: 'Mc Clellan-Palomar ',
    city: 'Carlsbad',
    country: 'United States',
    IATA: 'CLD',
    ICAO: 'KCRQ',
    lat: '33.12829971',
    lon: '-117.2799988',
    timezone: '-8'
  },
  {
    name: 'Bishop Intl ',
    city: 'Flint',
    country: 'United States',
    IATA: 'FNT',
    ICAO: 'KFNT',
    lat: '42.96540069580078',
    lon: '-83.74359893798828',
    timezone: '-5'
  },
  {
    name: 'Francisco Bangoy Intl ',
    city: 'Davao',
    country: 'Philippines',
    IATA: 'DVO',
    ICAO: 'RPMD',
    lat: '7.1255202293396',
    lon: '125.64600372314453',
    timezone: '8'
  },
  {
    name: 'Madeira ',
    city: 'Funchal',
    country: 'Portugal',
    IATA: 'FNC',
    ICAO: 'LPMA',
    lat: '32.697899',
    lon: '-16.7745',
    timezone: '0'
  },
  {
    name: 'Maestro Wilson Fonseca ',
    city: 'Santarem',
    country: 'Brazil',
    IATA: 'STM',
    ICAO: 'SBSN',
    lat: '-2.4247219562530518',
    lon: '-54.785831451416016',
    timezone: '-3'
  },
  {
    name: 'Sihanoukville Intl ',
    city: 'Sihanoukville',
    country: 'Cambodia',
    IATA: 'KOS',
    ICAO: 'VDSV',
    lat: '10.57970047',
    lon: '103.637001038',
    timezone: '7'
  },
  {
    name: 'Ekati ',
    city: 'Ekati',
    country: 'Canada',
    IATA: 'YOA',
    ICAO: 'CYOA',
    lat: '64.6988983154',
    lon: '-110.614997864',
    timezone: '-7'
  },
  {
    name: "Hawke's Bay ",
    city: 'NAPIER',
    country: 'New Zealand',
    IATA: 'NPE',
    ICAO: 'NZNR',
    lat: '-39.465801',
    lon: '176.869995',
    timezone: '12'
  },
  {
    name: 'Levuka Airfield',
    city: 'Levuka',
    country: 'Fiji',
    IATA: 'LEV',
    ICAO: 'NFNB',
    lat: '-17.7110996246',
    lon: '178.759002686',
    timezone: '12'
  },
  {
    name: 'Lhasa Gonggar ',
    city: 'Lhasa',
    country: 'China',
    IATA: 'LXA',
    ICAO: 'ZULS',
    lat: '29.2978000641',
    lon: '90.91190338130001',
    timezone: '8'
  },
  {
    name: 'Redding Municipal ',
    city: 'Redding',
    country: 'United States',
    IATA: 'RDD',
    ICAO: 'KRDD',
    lat: '40.50899887',
    lon: '-122.2929993',
    timezone: '-8'
  },
  {
    name: 'Mahlon Sweet Field',
    city: 'Eugene',
    country: 'United States',
    IATA: 'EUG',
    ICAO: 'KEUG',
    lat: '44.12459945678711',
    lon: '-123.21199798583984',
    timezone: '-8'
  },
  {
    name: 'Idaho Falls Regional ',
    city: 'Idaho Falls',
    country: 'United States',
    IATA: 'IDA',
    ICAO: 'KIDA',
    lat: '43.514599',
    lon: '-112.070999',
    timezone: '-7'
  },
  {
    name: 'Rogue Valley Intl Medford ',
    city: 'Medford',
    country: 'United States',
    IATA: 'MFR',
    ICAO: 'KMFR',
    lat: '42.37419891357422',
    lon: '-122.87300109863281',
    timezone: '-8'
  },
  {
    name: 'Kaikoura ',
    city: 'Kaikoura',
    country: 'New Zealand',
    IATA: 'KBZ',
    ICAO: 'NZKI',
    lat: '-42.42499923706055',
    lon: '173.60499572753906',
    timezone: '12'
  },
  {
    name: 'Roberts Field',
    city: 'Redmond-Bend',
    country: 'United States',
    IATA: 'RDM',
    ICAO: 'KRDM',
    lat: '44.2541008',
    lon: '-121.1500015',
    timezone: '-8'
  },
  {
    name: 'Picton Aerodrome',
    city: 'Picton',
    country: 'New Zealand',
    IATA: 'PCN',
    ICAO: 'NZPN',
    lat: '-41.346099853516',
    lon: '173.95599365234',
    timezone: '12'
  },
  {
    name: 'Hosea Kutako Intl ',
    city: 'Windhoek',
    country: 'Namibia',
    IATA: 'WDH',
    ICAO: 'FYWH',
    lat: '-22.4799',
    lon: '17.4709',
    timezone: '1'
  },
  {
    name: 'Victoria Harbour Seaplane Base',
    city: 'Victoria',
    country: 'Canada',
    IATA: 'YWH',
    ICAO: 'CYWH',
    lat: '48.4249858939',
    lon: '-123.388867378',
    timezone: '-8'
  },
  {
    name: 'Coal Harbour Seaplane Base',
    city: 'Vancouver',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CAQ3',
    lat: '50.5999984741',
    lon: '-127.583000183',
    timezone: '-8'
  },
  {
    name: 'Yaoqiang ',
    city: 'Jinan',
    country: 'China',
    IATA: 'TNA',
    ICAO: 'ZSJN',
    lat: '36.857200622558594',
    lon: '117.21600341796875',
    timezone: '8'
  },
  {
    name: 'Changzhou Benniu ',
    city: 'Changzhou',
    country: 'China',
    IATA: 'CZX',
    ICAO: 'ZSCG',
    lat: '31.919701',
    lon: '119.778999',
    timezone: '8'
  },
  {
    name: 'Yibin Caiba ',
    city: 'Yibin',
    country: 'China',
    IATA: 'YBP',
    ICAO: 'ZUYB',
    lat: '28.8005555556',
    lon: '104.545',
    timezone: '8'
  },
  {
    name: 'Roshchino Intl ',
    city: 'Tyumen',
    country: 'Russia',
    IATA: 'TJM',
    ICAO: 'USTR',
    lat: '57.189601898199996',
    lon: '65.3243026733',
    timezone: '5'
  },
  {
    name: 'Akron Canton Regional ',
    city: 'Akron',
    country: 'United States',
    IATA: 'CAK',
    ICAO: 'KCAK',
    lat: '40.916099548339844',
    lon: '-81.44219970703125',
    timezone: '-5'
  },
  {
    name: 'Huntsville Intl Carl T Jones Field',
    city: 'Huntsville',
    country: 'United States',
    IATA: 'HSV',
    ICAO: 'KHSV',
    lat: '34.637199401855',
    lon: '-86.775100708008',
    timezone: '-6'
  },
  {
    name: 'Mid Ohio Valley Regional ',
    city: 'PARKERSBURG',
    country: 'United States',
    IATA: 'PKB',
    ICAO: 'KPKB',
    lat: '39.34510040283203',
    lon: '-81.43920135498047',
    timezone: '-5'
  },
  {
    name: 'Montgomery Regional (Dannelly Field) ',
    city: 'MONTGOMERY',
    country: 'United States',
    IATA: 'MGM',
    ICAO: 'KMGM',
    lat: '32.30059814',
    lon: '-86.39399719',
    timezone: '-6'
  },
  {
    name: 'Tri-Cities Regional TN/VA ',
    city: 'BRISTOL',
    country: 'United States',
    IATA: 'TRI',
    ICAO: 'KTRI',
    lat: '36.475201',
    lon: '-82.407401',
    timezone: '-5'
  },
  {
    name: 'Barkley Regional ',
    city: 'PADUCAH',
    country: 'United States',
    IATA: 'PAH',
    ICAO: 'KPAH',
    lat: '37.06079864501953',
    lon: '-88.7738037109375',
    timezone: '-6'
  },
  {
    name: 'Djibouti-Ambouli ',
    city: 'Djibouti',
    country: 'Djibouti',
    IATA: 'JIB',
    ICAO: 'HDAM',
    lat: '11.547300338745117',
    lon: '43.15950012207031',
    timezone: '3'
  },
  {
    name: 'Haikou Meilan Intl ',
    city: 'Haikou',
    country: 'China',
    IATA: 'HAK',
    ICAO: 'ZJHK',
    lat: '19.934900283813477',
    lon: '110.45899963378906',
    timezone: '8'
  },
  {
    name: 'Mafia Island ',
    city: 'Mafia Island',
    country: 'Tanzania',
    IATA: 'MFA',
    ICAO: 'HTMA',
    lat: '-7.917478',
    lon: '39.668502',
    timezone: '3'
  },
  {
    name: 'Page Municipal ',
    city: 'Page',
    country: 'United States',
    IATA: 'PGA',
    ICAO: 'KPGA',
    lat: '36.92610168',
    lon: '-111.447998',
    timezone: '-7'
  },
  {
    name: 'Utila ',
    city: 'Utila',
    country: 'Honduras',
    IATA: 'UII',
    ICAO: 'MHUT',
    lat: '16.1131',
    lon: '-86.880302',
    timezone: '-6'
  },
  {
    name: 'Glacier Park Intl ',
    city: 'Kalispell',
    country: 'United States',
    IATA: 'FCA',
    ICAO: 'KGPI',
    lat: '48.31050109863281',
    lon: '-114.25599670410156',
    timezone: '-7'
  },
  {
    name: 'MBS Intl ',
    city: 'Saginaw',
    country: 'United States',
    IATA: 'MBS',
    ICAO: 'KMBS',
    lat: '43.532901763916016',
    lon: '-84.07959747314453',
    timezone: '-5'
  },
  {
    name: 'Greater Binghamton/Edwin A Link field',
    city: 'Binghamton',
    country: 'United States',
    IATA: 'BGM',
    ICAO: 'KBGM',
    lat: '42.20869827',
    lon: '-75.97979736',
    timezone: '-5'
  },
  {
    name: 'Baghdad Intl ',
    city: 'Baghdad',
    country: 'Iraq',
    IATA: 'BGW',
    ICAO: 'ORBI',
    lat: '33.262500762900004',
    lon: '44.2346000671',
    timezone: '3'
  },
  {
    name: 'Nan ',
    city: 'Nan',
    country: 'Thailand',
    IATA: 'NNT',
    ICAO: 'VTCN',
    lat: '18.807899475097656',
    lon: '100.78299713134766',
    timezone: '7'
  },
  {
    name: 'Roi Et ',
    city: 'Roi Et',
    country: 'Thailand',
    IATA: 'ROI',
    ICAO: 'VTUV',
    lat: '16.11680030822754',
    lon: '103.77400207519531',
    timezone: '7'
  },
  {
    name: 'Buri Ram ',
    city: 'Buri Ram',
    country: 'Thailand',
    IATA: 'BFV',
    ICAO: 'VTUO',
    lat: '15.229499816894531',
    lon: '103.25299835205078',
    timezone: '7'
  },
  {
    name: 'Trat ',
    city: 'Trat',
    country: 'Thailand',
    IATA: 'TDX',
    ICAO: 'VTBO',
    lat: '12.274600029',
    lon: '102.319000244',
    timezone: '7'
  },
  {
    name: 'Blythe ',
    city: 'Blythe',
    country: 'United States',
    IATA: 'BLH',
    ICAO: 'KBLH',
    lat: '33.6192016602',
    lon: '-114.717002869',
    timezone: '-8'
  },
  {
    name: 'Al Asad Air Base',
    city: 'Al Asad',
    country: 'Iraq',
    IATA: 'IQA',
    ICAO: 'ORAA',
    lat: '33.7855987549',
    lon: '42.4412002563',
    timezone: '3'
  },
  {
    name: 'Al Taqaddum Air Base',
    city: 'Al Taqaddum',
    country: 'Iraq',
    IATA: 'TQD',
    ICAO: 'ORAT',
    lat: '33.33810043335',
    lon: '43.597099304199',
    timezone: '3'
  },
  {
    name: 'Joint Base Balad',
    city: 'Al Bakr',
    country: 'Iraq',
    IATA: 'XQC',
    ICAO: 'ORBD',
    lat: '33.940200805699995',
    lon: '44.361598968500005',
    timezone: '3'
  },
  {
    name: 'Diosdado Macapagal Intl ',
    city: 'Angeles City',
    country: 'Philippines',
    IATA: 'CRK',
    ICAO: 'RPLC',
    lat: '15.186',
    lon: '120.559998',
    timezone: '8'
  },
  {
    name: 'Sandakan ',
    city: 'Sandakan',
    country: 'Malaysia',
    IATA: 'SDK',
    ICAO: 'WBKS',
    lat: '5.900899887084961',
    lon: '118.05899810791016',
    timezone: '8'
  },
  {
    name: 'Luang Namtha ',
    city: 'Luang Namtha',
    country: 'Laos',
    IATA: 'LXG',
    ICAO: 'VLLN',
    lat: '20.966999',
    lon: '101.400002',
    timezone: '7'
  },
  {
    name: 'Oudomsay ',
    city: 'Muang Xay',
    country: 'Laos',
    IATA: 'ODY',
    ICAO: 'VLOS',
    lat: '20.68269920349121',
    lon: '101.99400329589844',
    timezone: '7'
  },
  {
    name: 'Taoxian ',
    city: 'Shenyang',
    country: 'China',
    IATA: 'SHE',
    ICAO: 'ZYTX',
    lat: '41.639801025390625',
    lon: '123.48300170898438',
    timezone: '8'
  },
  {
    name: 'Dongying Shengli ',
    city: 'Dongying',
    country: 'China',
    IATA: 'DOY',
    ICAO: 'ZSDY',
    lat: '37.5085983276',
    lon: '118.788002014',
    timezone: '8'
  },
  {
    name: 'John A. Osborne ',
    city: 'Geralds',
    country: 'Montserrat',
    IATA: 'MNI',
    ICAO: 'TRPG',
    lat: '16.791400909423828',
    lon: '-62.19329833984375',
    timezone: '-4'
  },
  {
    name: 'Petersburg James A Johnson ',
    city: 'Petersburg',
    country: 'United States',
    IATA: 'PSG',
    ICAO: 'PAPG',
    lat: '56.80170059',
    lon: '-132.9450073',
    timezone: '-9'
  },
  {
    name: 'Luoyang ',
    city: 'Luoyang',
    country: 'China',
    IATA: 'LYA',
    ICAO: 'ZHLY',
    lat: '34.741100311299995',
    lon: '112.388000488',
    timezone: '8'
  },
  {
    name: 'Xuzhou Guanyin ',
    city: 'Xuzhou',
    country: 'China',
    IATA: 'XUZ',
    ICAO: 'ZSXZ',
    lat: '34.059056',
    lon: '117.555278',
    timezone: '8'
  },
  {
    name: 'Magway ',
    city: 'Magwe',
    country: 'Burma',
    IATA: 'MWQ',
    ICAO: 'VYMW',
    lat: '20.1656',
    lon: '94.941399',
    timezone: '6.5'
  },
  {
    name: 'Kanti ',
    city: 'Khamti',
    country: 'Burma',
    IATA: 'KHM',
    ICAO: 'VYKI',
    lat: '25.988300323486328',
    lon: '95.67440032958984',
    timezone: '6.5'
  },
  {
    name: 'Lien Khuong ',
    city: 'Dalat',
    country: 'Vietnam',
    IATA: 'DLI',
    ICAO: 'VVDL',
    lat: '11.75',
    lon: '108.366997',
    timezone: '7'
  },
  {
    name: 'Dong Hoi ',
    city: 'Dong Hoi',
    country: 'Vietnam',
    IATA: 'VDH',
    ICAO: 'VVDH',
    lat: '17.515',
    lon: '106.590556',
    timezone: '7'
  },
  {
    name: 'Rach Gia ',
    city: 'Rach Gia',
    country: 'Vietnam',
    IATA: 'VKG',
    ICAO: 'VVRG',
    lat: '9.95802997234',
    lon: '105.132379532',
    timezone: '7'
  },
  {
    name: 'C\u00e0 Mau ',
    city: 'Ca Mau',
    country: 'Vietnam',
    IATA: 'CAH',
    ICAO: 'VVCM',
    lat: '9.177667',
    lon: '105.177778',
    timezone: '7'
  },
  {
    name: 'Chu Lai Intl ',
    city: 'Chu Lai',
    country: 'Vietnam',
    IATA: 'VCL',
    ICAO: 'VVCA',
    lat: '15.403300285299999',
    lon: '108.706001282',
    timezone: '7'
  },
  {
    name: 'Dong Tac ',
    city: 'Tuy Hoa',
    country: 'Vietnam',
    IATA: 'TBB',
    ICAO: 'VVTH',
    lat: '13.049599647500001',
    lon: '109.333999634',
    timezone: '7'
  },
  {
    name: 'Mae Hong Son ',
    city: 'Pai',
    country: 'Thailand',
    IATA: 'PYY',
    ICAO: 'VTCI',
    lat: '19.3719997406',
    lon: '98.43699646',
    timezone: '7'
  },
  {
    name: 'Bol ',
    city: 'Brac',
    country: 'Croatia',
    IATA: 'BWK',
    ICAO: 'LDSB',
    lat: '43.285701751708984',
    lon: '16.67970085144043',
    timezone: '1'
  },
  {
    name: 'Yaound\u00e9 Nsimalen Intl ',
    city: 'Yaounde',
    country: 'Cameroon',
    IATA: 'NSI',
    ICAO: 'FKYS',
    lat: '3.722559928894043',
    lon: '11.553299903869629',
    timezone: '1'
  },
  {
    name: 'Conakry Intl ',
    city: 'Conakry',
    country: 'Guinea',
    IATA: 'CKY',
    ICAO: 'GUCY',
    lat: '9.57689',
    lon: '-13.612',
    timezone: '0'
  },
  {
    name: 'Aachen-Merzbr\u00fcck ',
    city: 'Aachen',
    country: 'Germany',
    IATA: 'AAH',
    ICAO: 'EDKA',
    lat: '50.823055267333984',
    lon: '6.186388969421387',
    timezone: '1'
  },
  {
    name: 'Karlsruhe Baden-Baden ',
    city: 'Karlsruhe/Baden-Baden',
    country: 'Germany',
    IATA: 'FKB',
    ICAO: 'EDSB',
    lat: '48.7793998718',
    lon: '8.08049964905',
    timezone: '1'
  },
  {
    name: 'Orlando Sanford Intl ',
    city: 'Sanford',
    country: 'United States',
    IATA: 'SFB',
    ICAO: 'KSFB',
    lat: '28.777599334716797',
    lon: '-81.23750305175781',
    timezone: '-5'
  },
  {
    name: 'John Murtha Johnstown Cambria County ',
    city: 'Johnstown',
    country: 'United States',
    IATA: 'JST',
    ICAO: 'KJST',
    lat: '40.31610107421875',
    lon: '-78.83390045166016',
    timezone: '-5'
  },
  {
    name: 'Lukla ',
    city: 'Lukla',
    country: 'Nepal',
    IATA: 'LUA',
    ICAO: 'VNLK',
    lat: '27.686899185180664',
    lon: '86.72969818115234',
    timezone: '5.75'
  },
  {
    name: 'Bhojpur ',
    city: 'Bhojpur',
    country: 'Nepal',
    IATA: 'BHP',
    ICAO: 'VNBJ',
    lat: '27.14739990234375',
    lon: '87.05079650878906',
    timezone: '5.75'
  },
  {
    name: 'Lamidanda ',
    city: 'Lamidanda',
    country: 'Nepal',
    IATA: 'LDN',
    ICAO: 'VNLD',
    lat: '27.25309944152832',
    lon: '86.66999816894531',
    timezone: '5.75'
  },
  {
    name: 'Jomsom ',
    city: 'Jomsom',
    country: 'Nepal',
    IATA: 'JMO',
    ICAO: 'VNJS',
    lat: '28.780426',
    lon: '83.723',
    timezone: '5.75'
  },
  {
    name: 'Manang ',
    city: 'Manang',
    country: 'Nepal',
    IATA: 'NGX',
    ICAO: 'VNMA',
    lat: '28.641399',
    lon: '84.089203',
    timezone: '5.75'
  },
  {
    name: 'Phaplu ',
    city: 'Phaplu',
    country: 'Nepal',
    IATA: 'PPL',
    ICAO: 'VNPL',
    lat: '27.517787',
    lon: '86.584454',
    timezone: '5.75'
  },
  {
    name: 'Rumjatar ',
    city: 'Rumjatar',
    country: 'Nepal',
    IATA: 'RUM',
    ICAO: 'VNRT',
    lat: '27.303499221801758',
    lon: '86.55039978027344',
    timezone: '5.75'
  },
  {
    name: 'Tulsipur ',
    city: 'Dang',
    country: 'Nepal',
    IATA: 'DNP',
    ICAO: 'VNDG',
    lat: '28.111099243164062',
    lon: '82.29419708251953',
    timezone: '5.75'
  },
  {
    name: 'Rukum Chaurjahari ',
    city: 'Rukumkot',
    country: 'Nepal',
    IATA: 'RUK',
    ICAO: 'VNRK',
    lat: '28.627001',
    lon: '82.195',
    timezone: '5.75'
  },
  {
    name: 'Jumla ',
    city: 'Jumla',
    country: 'Nepal',
    IATA: 'JUM',
    ICAO: 'VNJL',
    lat: '29.2742',
    lon: '82.193298',
    timezone: '5.75'
  },
  {
    name: 'Taplejung ',
    city: 'Taplejung',
    country: 'Nepal',
    IATA: 'TPJ',
    ICAO: 'VNTJ',
    lat: '27.3509',
    lon: '87.69525',
    timezone: '5.75'
  },
  {
    name: 'Tumling Tar ',
    city: 'Tumling Tar',
    country: 'Nepal',
    IATA: 'TMI',
    ICAO: 'VNTR',
    lat: '27.315001',
    lon: '87.193298',
    timezone: '5.75'
  },
  {
    name: 'Surkhet ',
    city: 'Surkhet',
    country: 'Nepal',
    IATA: 'SKH',
    ICAO: 'VNSK',
    lat: '28.586',
    lon: '81.636002',
    timezone: '5.75'
  },
  {
    name: 'Simikot ',
    city: 'Simikot',
    country: 'Nepal',
    IATA: 'IMK',
    ICAO: 'VNST',
    lat: '29.971099853515625',
    lon: '81.81890106201172',
    timezone: '5.75'
  },
  {
    name: 'Dolpa ',
    city: 'Dolpa',
    country: 'Nepal',
    IATA: 'DOP',
    ICAO: 'VNDP',
    lat: '28.985700607299805',
    lon: '82.81909942626953',
    timezone: '5.75'
  },
  {
    name: 'Bajhang ',
    city: 'Bajhang',
    country: 'Nepal',
    IATA: 'BJH',
    ICAO: 'VNBG',
    lat: '29.538999557495117',
    lon: '81.1854019165039',
    timezone: '5.75'
  },
  {
    name: 'Dhangarhi ',
    city: 'Dhangarhi',
    country: 'Nepal',
    IATA: 'DHI',
    ICAO: 'VNDH',
    lat: '28.753299713134766',
    lon: '80.58190155029297',
    timezone: '5.75'
  },
  {
    name: 'Muan Intl ',
    city: 'Muan',
    country: 'South Korea',
    IATA: 'MWX',
    ICAO: 'RKJB',
    lat: '34.991406',
    lon: '126.382814',
    timezone: '9'
  },
  {
    name: 'Astypalaia ',
    city: 'Astypalaia',
    country: 'Greece',
    IATA: 'JTY',
    ICAO: 'LGPL',
    lat: '36.5798988342',
    lon: '26.3757991791',
    timezone: '2'
  },
  {
    name: 'Ikaria ',
    city: 'Ikaria',
    country: 'Greece',
    IATA: 'JIK',
    ICAO: 'LGIK',
    lat: '37.6827011108',
    lon: '26.3470993042',
    timezone: '2'
  },
  {
    name: 'Kalymnos ',
    city: 'Kalymnos',
    country: 'Greece',
    IATA: 'JKL',
    ICAO: 'LGKY',
    lat: '36.9632987976',
    lon: '26.9405994415',
    timezone: '2'
  },
  {
    name: 'Milos ',
    city: 'Milos',
    country: 'Greece',
    IATA: 'MLO',
    ICAO: 'LGML',
    lat: '36.696899',
    lon: '24.4769',
    timezone: '2'
  },
  {
    name: 'Naxos ',
    city: 'Cyclades Islands',
    country: 'Greece',
    IATA: 'JNX',
    ICAO: 'LGNX',
    lat: '37.0811004639',
    lon: '25.3680992126',
    timezone: '2'
  },
  {
    name: 'Paros National ',
    city: 'Paros',
    country: 'Greece',
    IATA: 'PAS',
    ICAO: 'LGPA',
    lat: '37.020495',
    lon: '25.113195',
    timezone: '2'
  },
  {
    name: 'Kastelorizo ',
    city: 'Kastelorizo',
    country: 'Greece',
    IATA: 'KZS',
    ICAO: 'LGKJ',
    lat: '36.1417007446',
    lon: '29.576400756799995',
    timezone: '2'
  },
  {
    name: 'Marsa Alam Intl ',
    city: 'Marsa Alam',
    country: 'Egypt',
    IATA: 'RMF',
    ICAO: 'HEMA',
    lat: '25.557100296',
    lon: '34.5836982727',
    timezone: '2'
  },
  {
    name: 'Weeze ',
    city: 'Weeze',
    country: 'Germany',
    IATA: 'NRN',
    ICAO: 'EDLV',
    lat: '51.6024017334',
    lon: '6.14216995239',
    timezone: '1'
  },
  {
    name: 'Francisco B. Reyes ',
    city: 'Busuanga',
    country: 'Philippines',
    IATA: 'USU',
    ICAO: 'RPVV',
    lat: '12.1215000153',
    lon: '120.099998474',
    timezone: '8'
  },
  {
    name: 'Bancasi ',
    city: 'Butuan',
    country: 'Philippines',
    IATA: 'BXU',
    ICAO: 'RPME',
    lat: '8.9515',
    lon: '125.4788',
    timezone: '8'
  },
  {
    name: 'Dipolog ',
    city: 'Dipolog',
    country: 'Philippines',
    IATA: 'DPL',
    ICAO: 'RPMG',
    lat: '8.60198349877',
    lon: '123.341875076',
    timezone: '8'
  },
  {
    name: 'Laoag Intl ',
    city: 'Laoag',
    country: 'Philippines',
    IATA: 'LAO',
    ICAO: 'RPLI',
    lat: '18.1781005859375',
    lon: '120.53199768066406',
    timezone: '8'
  },
  {
    name: 'Legazpi City Intl ',
    city: 'Legazpi',
    country: 'Philippines',
    IATA: 'LGP',
    ICAO: 'RPLP',
    lat: '13.1575',
    lon: '123.735',
    timezone: '8'
  },
  {
    name: 'Labo ',
    city: 'Ozamis',
    country: 'Philippines',
    IATA: 'OZC',
    ICAO: 'RPMO',
    lat: '8.178509712219238',
    lon: '123.84200286865234',
    timezone: '8'
  },
  {
    name: 'Mactan Cebu Intl ',
    city: 'Cebu',
    country: 'Philippines',
    IATA: 'CEB',
    ICAO: 'RPVM',
    lat: '10.307499885559',
    lon: '123.97899627686',
    timezone: '8'
  },
  {
    name: 'Norden-Norddeich ',
    city: 'Norden',
    country: 'Germany',
    IATA: 'NOD',
    ICAO: 'EDWS',
    lat: '53.633056640599996',
    lon: '7.19027805328',
    timezone: '1'
  },
  {
    name: 'Juist ',
    city: 'Juist',
    country: 'Germany',
    IATA: 'JUI',
    ICAO: 'EDWJ',
    lat: '53.68111038208008',
    lon: '7.055832862854004',
    timezone: '1'
  },
  {
    name: 'Porto Seguro ',
    city: 'Porto Seguro',
    country: 'Brazil',
    IATA: 'BPS',
    ICAO: 'SBPS',
    lat: '-16.438601',
    lon: '-39.080898',
    timezone: '-3'
  },
  {
    name: 'Iguatu ',
    city: 'Iguatu',
    country: 'Brazil',
    IATA: 'QIG',
    ICAO: 'SNIG',
    lat: '-6.346640110015869',
    lon: '-39.293800354003906',
    timezone: '-3'
  },
  {
    name: 'Brigadeiro Lysias Rodrigues ',
    city: 'Palmas',
    country: 'Brazil',
    IATA: 'PMW',
    ICAO: 'SBPJ',
    lat: '-10.291500091600001',
    lon: '-48.35699844359999',
    timezone: '-3'
  },
  {
    name: 'Nelson Ribeiro Guimar\u00e3es ',
    city: 'Caldas Novas',
    country: 'Brazil',
    IATA: 'CLV',
    ICAO: 'SBCN',
    lat: '-17.725299835205',
    lon: '-48.607498168945',
    timezone: '-3'
  },
  {
    name: 'Missoula Intl ',
    city: 'Missoula',
    country: 'United States',
    IATA: 'MSO',
    ICAO: 'KMSO',
    lat: '46.91630173',
    lon: '-114.0910034',
    timezone: '-7'
  },
  {
    name: 'Blackall ',
    city: 'Blackall',
    country: 'Australia',
    IATA: 'BKQ',
    ICAO: 'YBCK',
    lat: '-24.427799224900003',
    lon: '145.429000854',
    timezone: '10'
  },
  {
    name: 'Bundaberg ',
    city: 'Bundaberg',
    country: 'Australia',
    IATA: 'BDB',
    ICAO: 'YBUD',
    lat: '-24.903900146499996',
    lon: '152.319000244',
    timezone: '10'
  },
  {
    name: 'Grand Canyon National Park ',
    city: 'Grand Canyon',
    country: 'United States',
    IATA: 'GCN',
    ICAO: 'KGCN',
    lat: '35.95240020751953',
    lon: '-112.14700317382812',
    timezone: '-7'
  },
  {
    name: 'Sugar Land Regional ',
    city: 'Sugar Land',
    country: 'United States',
    IATA: 'SGR',
    ICAO: 'KSGR',
    lat: '29.622299194336',
    lon: '-95.65650177002',
    timezone: '-6'
  },
  {
    name: 'Hayman Island Heliport',
    city: 'Hayman Island',
    country: 'Australia',
    IATA: '\\N',
    ICAO: 'YHYN',
    lat: '-20.0599',
    lon: '148.8834',
    timezone: '10'
  },
  {
    name: 'Centennial ',
    city: 'Denver',
    country: 'United States',
    IATA: 'APA',
    ICAO: 'KAPA',
    lat: '39.57009888',
    lon: '-104.848999',
    timezone: '-7'
  },
  {
    name: 'Clovis Municipal ',
    city: 'Clovis',
    country: 'United States',
    IATA: 'CVN',
    ICAO: 'KCVN',
    lat: '34.4250984192',
    lon: '-103.07900238',
    timezone: '-7'
  },
  {
    name: 'Fort Stockton Pecos County ',
    city: 'Fort Stockton',
    country: 'United States',
    IATA: 'FST',
    ICAO: 'KFST',
    lat: '30.9157009125',
    lon: '-102.916000366',
    timezone: '-6'
  },
  {
    name: 'Las Vegas Municipal ',
    city: 'Las Vegas',
    country: 'United States',
    IATA: 'LVS',
    ICAO: 'KLVS',
    lat: '35.6542015076',
    lon: '-105.141998291',
    timezone: '-7'
  },
  {
    name: 'West Houston ',
    city: 'Houston',
    country: 'United States',
    IATA: 'IWS',
    ICAO: 'KIWS',
    lat: '29.818199157699997',
    lon: '-95.67259979250001',
    timezone: '-6'
  },
  {
    name: 'La Junta Municipal ',
    city: 'La Junta',
    country: 'United States',
    IATA: '\\N',
    ICAO: 'KLHX',
    lat: '38.04970169',
    lon: '-103.5090027',
    timezone: '-7'
  },
  {
    name: 'Las Cruces Intl ',
    city: 'Las Cruces',
    country: 'United States',
    IATA: 'LRU',
    ICAO: 'KLRU',
    lat: '32.289398193359375',
    lon: '-106.9219970703125',
    timezone: '-7'
  },
  {
    name: 'Stephens County ',
    city: 'Breckenridge',
    country: 'United States',
    IATA: 'BKD',
    ICAO: 'KBKD',
    lat: '32.71900177',
    lon: '-98.89099884030001',
    timezone: '-6'
  },
  {
    name: 'Draughon Miller Central Texas Regional ',
    city: 'Temple',
    country: 'United States',
    IATA: 'TPL',
    ICAO: 'KTPL',
    lat: '31.15250015258789',
    lon: '-97.40779876708984',
    timezone: '-6'
  },
  {
    name: 'Ozona Municipal ',
    city: 'Ozona',
    country: 'United States',
    IATA: 'OZA',
    ICAO: 'KOZA',
    lat: '30.735300064087',
    lon: '-101.20300292969',
    timezone: '-6'
  },
  {
    name: 'Kaadedhdhoo ',
    city: 'Kaadedhdhoo',
    country: 'Maldives',
    IATA: 'KDM',
    ICAO: 'VRMT',
    lat: '0.48813098669052124',
    lon: '72.99690246582031',
    timezone: '5'
  },
  {
    name: 'Aklavik/Freddie Carmichael ',
    city: 'Aklavik',
    country: 'Canada',
    IATA: 'LAK',
    ICAO: 'CYKD',
    lat: '68.223297',
    lon: '-135.00599',
    timezone: '-7'
  },
  {
    name: 'D\u00e9line ',
    city: 'Deline',
    country: 'Canada',
    IATA: 'YWJ',
    ICAO: 'CYWJ',
    lat: '65.21109771728516',
    lon: '-123.43599700927734',
    timezone: '-7'
  },
  {
    name: 'Tulita ',
    city: 'Tulita',
    country: 'Canada',
    IATA: 'ZFN',
    ICAO: 'CZFN',
    lat: '64.909697',
    lon: '-125.572998',
    timezone: '-7'
  },
  {
    name: 'Fort Good Hope ',
    city: 'Fort Good Hope',
    country: 'Canada',
    IATA: 'YGH',
    ICAO: 'CYGH',
    lat: '66.24079895019531',
    lon: '-128.6510009765625',
    timezone: '-7'
  },
  {
    name: 'Tanna ',
    city: 'Tanna',
    country: 'Vanuatu',
    IATA: 'TAH',
    ICAO: 'NVVW',
    lat: '-19.45509910583496',
    lon: '169.2239990234375',
    timezone: '11'
  },
  {
    name: 'Paulatuk (Nora Aliqatchialuk Ruben) ',
    city: 'Paulatuk',
    country: 'Canada',
    IATA: 'YPC',
    ICAO: 'CYPC',
    lat: '69.3608381154',
    lon: '-124.075469971',
    timezone: '-7'
  },
  {
    name: 'El Trompillo ',
    city: 'Santa Cruz',
    country: 'Bolivia',
    IATA: 'SRZ',
    ICAO: 'SLET',
    lat: '-17.8115997314',
    lon: '-63.1715011597',
    timezone: '-4'
  },
  {
    name: 'Juancho E. Yrausquin ',
    city: 'Saba',
    country: 'Netherlands Antilles',
    IATA: 'SAB',
    ICAO: 'TNCS',
    lat: '17.645000457763672',
    lon: '-63.220001220703125',
    timezone: '-4'
  },
  {
    name: 'Eagle County Regional ',
    city: 'Vail',
    country: 'United States',
    IATA: 'EGE',
    ICAO: 'KEGE',
    lat: '39.64260101',
    lon: '-106.9179993',
    timezone: '-7'
  },
  {
    name: 'Stokmarknes Skagen ',
    city: 'Stokmarknes',
    country: 'Norway',
    IATA: 'SKN',
    ICAO: 'ENSK',
    lat: '68.578826904297',
    lon: '15.033416748047',
    timezone: '1'
  },
  {
    name: 'Cuyahoga County ',
    city: 'Richmond Heights',
    country: 'United States',
    IATA: 'CGF',
    ICAO: 'KCGF',
    lat: '41.5651016235',
    lon: '-81.4863967896',
    timezone: '-5'
  },
  {
    name: 'Mansfield Lahm Regional ',
    city: 'Mansfield',
    country: 'United States',
    IATA: 'MFD',
    ICAO: 'KMFD',
    lat: '40.82139968869999',
    lon: '-82.5166015625',
    timezone: '-5'
  },
  {
    name: 'Columbus Metropolitan ',
    city: 'Columbus',
    country: 'United States',
    IATA: 'CSG',
    ICAO: 'KCSG',
    lat: '32.516300201416016',
    lon: '-84.93890380859375',
    timezone: '-5'
  },
  {
    name: 'Lawton Fort Sill Regional ',
    city: 'Lawton',
    country: 'United States',
    IATA: 'LAW',
    ICAO: 'KLAW',
    lat: '34.5676994324',
    lon: '-98.4166030884',
    timezone: '-6'
  },
  {
    name: 'Northern Colorado Regional ',
    city: 'Fort Collins',
    country: 'United States',
    IATA: 'FNL',
    ICAO: 'KFNL',
    lat: '40.451804',
    lon: '-105.011',
    timezone: '-7'
  },
  {
    name: 'Flagstaff Pulliam ',
    city: 'Flagstaff',
    country: 'United States',
    IATA: 'FLG',
    ICAO: 'KFLG',
    lat: '35.13850021',
    lon: '-111.6709976',
    timezone: '-7'
  },
  {
    name: 'Lake Tahoe ',
    city: 'South Lake Tahoe',
    country: 'United States',
    IATA: 'TVL',
    ICAO: 'KTVL',
    lat: '38.89390182495117',
    lon: '-119.99500274658203',
    timezone: '-8'
  },
  {
    name: 'Joslin Field Magic Valley Regional ',
    city: 'Twin Falls',
    country: 'United States',
    IATA: 'TWF',
    ICAO: 'KTWF',
    lat: '42.4818',
    lon: '-114.487999',
    timezone: '-7'
  },
  {
    name: "Martha's Vineyard ",
    city: 'Vineyard Haven MA',
    country: 'United States',
    IATA: 'MVY',
    ICAO: 'KMVY',
    lat: '41.3931007385',
    lon: '-70.6143035889',
    timezone: '-5'
  },
  {
    name: 'Concord Municipal ',
    city: 'Concord NH',
    country: 'United States',
    IATA: 'CON',
    ICAO: 'KCON',
    lat: '43.20270157',
    lon: '-71.50229645',
    timezone: '-5'
  },
  {
    name: 'Groton New London ',
    city: 'Groton CT',
    country: 'United States',
    IATA: 'GON',
    ICAO: 'KGON',
    lat: '41.330101013183594',
    lon: '-72.04509735107422',
    timezone: '-5'
  },
  {
    name: 'St Cloud Regional ',
    city: 'Saint Cloud',
    country: 'United States',
    IATA: 'STC',
    ICAO: 'KSTC',
    lat: '45.546600341796875',
    lon: '-94.05989837646484',
    timezone: '-6'
  },
  {
    name: 'Qinhuangdao Beidaihe ',
    city: 'Bagan',
    country: 'Burma',
    IATA: 'BPE',
    ICAO: 'ZBDH',
    lat: '39.666389',
    lon: '119.058889',
    timezone: '8'
  },
  {
    name: 'Golden Triangle Regional ',
    city: 'Columbus Mississippi',
    country: 'United States',
    IATA: 'GTR',
    ICAO: 'KGTR',
    lat: '33.450298309299995',
    lon: '-88.5914001465',
    timezone: '-6'
  },
  {
    name: 'Nizhny Novgorod Strigino Intl ',
    city: 'Nizhniy Novgorod',
    country: 'Russia',
    IATA: 'GOJ',
    ICAO: 'UWGG',
    lat: '56.230098724365',
    lon: '43.784000396729',
    timezone: '3'
  },
  {
    name: 'Bowerman ',
    city: 'Hoquiam',
    country: 'United States',
    IATA: 'HQM',
    ICAO: 'KHQM',
    lat: '46.971199035599994',
    lon: '-123.93699646',
    timezone: '-8'
  },
  {
    name: 'Erie Intl Tom Ridge Field',
    city: 'Erie',
    country: 'United States',
    IATA: 'ERI',
    ICAO: 'KERI',
    lat: '42.0831270134',
    lon: '-80.1738667488',
    timezone: '-5'
  },
  {
    name: 'Barnstable Municipal Boardman Polando Field',
    city: 'Barnstable',
    country: 'United States',
    IATA: 'HYA',
    ICAO: 'KHYA',
    lat: '41.66930008',
    lon: '-70.28040314',
    timezone: '-5'
  },
  {
    name: 'San Pedro ',
    city: 'San Pedro',
    country: 'Belize',
    IATA: 'SPR',
    ICAO: 'MZSP',
    lat: '17.9139',
    lon: '-87.9711',
    timezone: '-6'
  },
  {
    name: 'Sedona ',
    city: 'Sedona',
    country: 'United States',
    IATA: 'SDX',
    ICAO: 'KSEZ',
    lat: '34.848598480225',
    lon: '-111.78800201416',
    timezone: '-7'
  },
  {
    name: 'Morgantown Municipal Walter L. Bill Hart Field',
    city: 'Morgantown',
    country: 'United States',
    IATA: 'MGW',
    ICAO: 'KMGW',
    lat: '39.64289856',
    lon: '-79.91629791',
    timezone: '-5'
  },
  {
    name: 'Yeager ',
    city: 'Charleston',
    country: 'United States',
    IATA: 'CRW',
    ICAO: 'KCRW',
    lat: '38.37310028076172',
    lon: '-81.59320068359375',
    timezone: '-5'
  },
  {
    name: 'Wilkes Barre Scranton Intl ',
    city: 'Scranton',
    country: 'United States',
    IATA: 'AVP',
    ICAO: 'KAVP',
    lat: '41.338500976599995',
    lon: '-75.72339630130001',
    timezone: '-5'
  },
  {
    name: 'Bemidji Regional ',
    city: 'Bemidji',
    country: 'United States',
    IATA: 'BJI',
    ICAO: 'KBJI',
    lat: '47.50939941',
    lon: '-94.93370056',
    timezone: '-6'
  },
  {
    name: 'Thangool ',
    city: 'Biloela',
    country: 'Australia',
    IATA: 'THG',
    ICAO: 'YTNG',
    lat: '-24.493900299072266',
    lon: '150.5760040283203',
    timezone: '10'
  },
  {
    name: "Fagali'i ",
    city: 'Apia',
    country: 'Samoa',
    IATA: 'FGI',
    ICAO: 'NSFI',
    lat: '-13.848699569699999',
    lon: '-171.740005493',
    timezone: '13'
  },
  {
    name: 'Ballina Byron Gateway ',
    city: 'Ballina Byron Bay',
    country: 'Australia',
    IATA: 'BNK',
    ICAO: 'YBNA',
    lat: '-28.8339004517',
    lon: '153.56199646',
    timezone: '10'
  },
  {
    name: 'Hector Intl ',
    city: 'Fargo',
    country: 'United States',
    IATA: 'FAR',
    ICAO: 'KFAR',
    lat: '46.92070007324219',
    lon: '-96.81580352783203',
    timezone: '-6'
  },
  {
    name: 'Charles B. Wheeler Downtown ',
    city: 'Kansas City',
    country: 'United States',
    IATA: 'MKC',
    ICAO: 'KMKC',
    lat: '39.123199462890625',
    lon: '-94.5927963256836',
    timezone: '-6'
  },
  {
    name: 'Ratanakiri ',
    city: 'Ratanakiri',
    country: 'Cambodia',
    IATA: 'RBE',
    ICAO: 'VDRK',
    lat: '13.729999542236328',
    lon: '106.98699951171875',
    timezone: '7'
  },
  {
    name: 'Gillette Campbell County ',
    city: 'Gillette',
    country: 'United States',
    IATA: 'GCC',
    ICAO: 'KGCC',
    lat: '44.348899841299996',
    lon: '-105.539001465',
    timezone: '-7'
  },
  {
    name: 'Bogashevo ',
    city: 'Tomsk',
    country: 'Russia',
    IATA: 'TOF',
    ICAO: 'UNTT',
    lat: '56.380298614502',
    lon: '85.208297729492',
    timezone: '7'
  },
  {
    name: 'El Toro Marine Corps Air Station',
    city: 'Santa Ana',
    country: 'United States',
    IATA: 'NZJ',
    ICAO: 'KNZJ',
    lat: '33.67610168457031',
    lon: '-117.73100280761719',
    timezone: '-8'
  },
  {
    name: 'Phetchabun ',
    city: 'Phetchabun',
    country: 'Thailand',
    IATA: 'PHY',
    ICAO: 'VTPB',
    lat: '16.6760005951',
    lon: '101.194999695',
    timezone: '7'
  },
  {
    name: 'Chumphon ',
    city: 'Chumphon',
    country: 'Thailand',
    IATA: 'CJM',
    ICAO: 'VTSE',
    lat: '10.711199760437012',
    lon: '99.36170196533203',
    timezone: '7'
  },
  {
    name: 'Jiuzhai Huanglong ',
    city: 'Jiuzhaigou',
    country: 'China',
    IATA: 'JZH',
    ICAO: 'ZUJZ',
    lat: '32.8533333333',
    lon: '103.682222222',
    timezone: '8'
  },
  {
    name: 'Jieyang Chaoshan Intl ',
    city: 'Shantou',
    country: 'China',
    IATA: 'SWA',
    ICAO: 'ZGOW',
    lat: '23.552',
    lon: '116.5033',
    timezone: '8'
  },
  {
    name: 'Enghien Moisselles Airfield',
    city: 'Enghien-moisselles',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFFE',
    lat: '49.046398',
    lon: '2.35306',
    timezone: '1'
  },
  {
    name: 'Cheddi Jagan Intl ',
    city: 'Georgetown',
    country: 'Guyana',
    IATA: 'GEO',
    ICAO: 'SYCJ',
    lat: '6.498549938201904',
    lon: '-58.25410079956055',
    timezone: '-4'
  },
  {
    name: 'Guarani Intl ',
    city: 'Ciudad del Este',
    country: 'Paraguay',
    IATA: 'AGT',
    ICAO: 'SGES',
    lat: '-25.454516',
    lon: '-54.842682',
    timezone: '-4'
  },
  {
    name: 'Eugene F. Correira Intl ',
    city: 'Georgetown',
    country: 'Guyana',
    IATA: 'OGL',
    ICAO: 'SYGO',
    lat: '6.80628',
    lon: '-58.1059',
    timezone: '-4'
  },
  {
    name: 'Kaieteur Intl ',
    city: 'Kaieteur',
    country: 'Guyana',
    IATA: 'KAI',
    ICAO: 'PKSA',
    lat: '5.17275476456',
    lon: '-59.491481781',
    timezone: '-4'
  },
  {
    name: 'Dunhuang ',
    city: 'Dunhuang',
    country: 'China',
    IATA: 'DNH',
    ICAO: 'ZLDH',
    lat: '40.16109848022461',
    lon: '94.80919647216797',
    timezone: '8'
  },
  {
    name: 'Ancona Falconara ',
    city: 'Ancona',
    country: 'Italy',
    IATA: 'AOI',
    ICAO: 'LIPY',
    lat: '43.616299',
    lon: '13.3623',
    timezone: '1'
  },
  {
    name: 'Chamonate ',
    city: 'Copiapo',
    country: 'Chile',
    IATA: '\\N',
    ICAO: 'SCHA',
    lat: '-27.2968997955',
    lon: '-70.4131011963',
    timezone: '-4'
  },
  {
    name: 'Taba Intl ',
    city: 'Taba',
    country: 'Egypt',
    IATA: 'TCP',
    ICAO: 'HETB',
    lat: '29.587799072299998',
    lon: '34.7780990601',
    timezone: '2'
  },
  {
    name: 'Edward Bodden Airfield',
    city: 'Little Cayman',
    country: 'Cayman Islands',
    IATA: 'LYB',
    ICAO: 'MWCL',
    lat: '19.660161',
    lon: '-80.088826',
    timezone: '-5'
  },
  {
    name: 'Milas Bodrum Intl ',
    city: 'Bodrum',
    country: 'Turkey',
    IATA: 'BJV',
    ICAO: 'LTFE',
    lat: '37.25059890749999',
    lon: '27.6643009186',
    timezone: '3'
  },
  {
    name: 'Tabarka 7 Novembre ',
    city: 'Tabarka',
    country: 'Tunisia',
    IATA: 'TBJ',
    ICAO: 'DTKA',
    lat: '36.97999954223633',
    lon: '8.87693977355957',
    timezone: '1'
  },
  {
    name: 'Sabiha G\u00f6k\u00e7en Intl ',
    city: 'Istanbul',
    country: 'Turkey',
    IATA: 'SAW',
    ICAO: 'LTFJ',
    lat: '40.898601532',
    lon: '29.3092002869',
    timezone: '3'
  },
  {
    name: 'University Park ',
    city: 'State College Pennsylvania',
    country: 'United States',
    IATA: 'SCE',
    ICAO: 'KUNV',
    lat: '40.8493003845',
    lon: '-77.84870147710001',
    timezone: '-5'
  },
  {
    name: 'Broome Intl ',
    city: 'Broome',
    country: 'Australia',
    IATA: 'BME',
    ICAO: 'YBRM',
    lat: '-17.944700241088867',
    lon: '122.23200225830078',
    timezone: '8'
  },
  {
    name: 'Newcastle ',
    city: 'Newcastle',
    country: 'Australia',
    IATA: 'NTL',
    ICAO: 'YWLM',
    lat: '-32.79499816894531',
    lon: '151.83399963378906',
    timezone: '10'
  },
  {
    name: 'Bakki ',
    city: 'Bakki',
    country: 'Iceland',
    IATA: '\\N',
    ICAO: 'BIBA',
    lat: '63.55609893798828',
    lon: '-20.137500762939453',
    timezone: '0'
  },
  {
    name: 'Klagenfurt ',
    city: 'Klagenfurt',
    country: 'Austria',
    IATA: 'KLU',
    ICAO: 'LOWK',
    lat: '46.642502',
    lon: '14.3377',
    timezone: '1'
  },
  {
    name: 'Hammerfest ',
    city: 'Hammerfest',
    country: 'Norway',
    IATA: 'HFT',
    ICAO: 'ENHF',
    lat: '70.679702758789',
    lon: '23.668600082397',
    timezone: '1'
  },
  {
    name: 'Valan ',
    city: 'Honningsvag',
    country: 'Norway',
    IATA: 'HVG',
    ICAO: 'ENHV',
    lat: '71.009696960449',
    lon: '25.983600616455',
    timezone: '1'
  },
  {
    name: 'Mehamn ',
    city: 'Mehamn',
    country: 'Norway',
    IATA: 'MEH',
    ICAO: 'ENMH',
    lat: '71.02970123291',
    lon: '27.826700210571',
    timezone: '1'
  },
  {
    name: 'Vads\u00f8 ',
    city: 'Vads\u00f8',
    country: 'Norway',
    IATA: 'VDS',
    ICAO: 'ENVD',
    lat: '70.065299987793',
    lon: '29.844699859619',
    timezone: '1'
  },
  {
    name: 'Imam Khomeini Intl ',
    city: 'Tehran',
    country: 'Iran',
    IATA: 'IKA',
    ICAO: 'OIIE',
    lat: '35.416099548339844',
    lon: '51.152198791503906',
    timezone: '3.5'
  },
  {
    name: 'Mashhad Intl ',
    city: 'Mashhad',
    country: 'Iran',
    IATA: 'MHD',
    ICAO: 'OIMM',
    lat: '36.235198974609375',
    lon: '59.64099884033203',
    timezone: '3.5'
  },
  {
    name: 'Ust-Ilimsk ',
    city: 'Ust Ilimsk',
    country: 'Russia',
    IATA: 'UIK',
    ICAO: 'UIBS',
    lat: '58.13610076904297',
    lon: '102.56500244140625',
    timezone: '8'
  },
  {
    name: 'Key Field',
    city: 'Meridian',
    country: 'United States',
    IATA: 'MEI',
    ICAO: 'KMEI',
    lat: '32.33259963989258',
    lon: '-88.75189971923828',
    timezone: '-6'
  },
  {
    name: 'Abraham Lincoln Capital ',
    city: 'Springfield',
    country: 'United States',
    IATA: 'SPI',
    ICAO: 'KSPI',
    lat: '39.84410095',
    lon: '-89.67790222',
    timezone: '-6'
  },
  {
    name: 'Cortez Municipal ',
    city: 'Cortez',
    country: 'United States',
    IATA: 'CEZ',
    ICAO: 'KCEZ',
    lat: '37.3030014038',
    lon: '-108.627998352',
    timezone: '-7'
  },
  {
    name: 'Yampa Valley ',
    city: 'Hayden',
    country: 'United States',
    IATA: 'HDN',
    ICAO: 'KHDN',
    lat: '40.48120117',
    lon: '-107.2180023',
    timezone: '-7'
  },
  {
    name: 'Gallup Municipal ',
    city: 'Gallup',
    country: 'United States',
    IATA: 'GUP',
    ICAO: 'KGUP',
    lat: '35.511100769',
    lon: '-108.789001465',
    timezone: '-7'
  },
  {
    name: 'Liberal Mid-America Regional ',
    city: 'Liberal',
    country: 'United States',
    IATA: 'LBL',
    ICAO: 'KLBL',
    lat: '37.0442009',
    lon: '-100.9599991',
    timezone: '-6'
  },
  {
    name: 'Lamar Municipal ',
    city: 'Lamar',
    country: 'United States',
    IATA: 'LAA',
    ICAO: 'KLAA',
    lat: '38.069698333699996',
    lon: '-102.68800354',
    timezone: '-7'
  },
  {
    name: 'Renner Field-Goodland Municipal ',
    city: 'Goodland',
    country: 'United States',
    IATA: 'GLD',
    ICAO: 'KGLD',
    lat: '39.37060165',
    lon: '-101.6989975',
    timezone: '-7'
  },
  {
    name: 'Yellowstone Regional ',
    city: 'Cody',
    country: 'United States',
    IATA: 'COD',
    ICAO: 'KCOD',
    lat: '44.520198822',
    lon: '-109.024002075',
    timezone: '-7'
  },
  {
    name: "St. Mary's ",
    city: "ST MARY\\'S",
    country: 'United Kingdom',
    IATA: 'ISC',
    ICAO: 'EGHE',
    lat: '49.913299560546875',
    lon: '-6.291669845581055',
    timezone: '0'
  },
  {
    name: 'Springfield Branson National ',
    city: 'Springfield',
    country: 'United States',
    IATA: 'SGF',
    ICAO: 'KSGF',
    lat: '37.24570084',
    lon: '-93.38860321',
    timezone: '-6'
  },
  {
    name: 'Narvik Framnes ',
    city: 'Narvik',
    country: 'Norway',
    IATA: 'NVK',
    ICAO: 'ENNK',
    lat: '68.436897277832',
    lon: '17.386699676514',
    timezone: '1'
  },
  {
    name: 'Berlev\u00e5g ',
    city: 'Berlevag',
    country: 'Norway',
    IATA: 'BVG',
    ICAO: 'ENBV',
    lat: '70.871399',
    lon: '29.034201',
    timezone: '1'
  },
  {
    name: 'Norilsk-Alykel ',
    city: 'Norilsk',
    country: 'Russia',
    IATA: 'NSK',
    ICAO: 'UOOO',
    lat: '69.31109619140625',
    lon: '87.33219909667969',
    timezone: '7'
  },
  {
    name: 'Anapa Vityazevo ',
    city: 'Anapa',
    country: 'Russia',
    IATA: 'AAQ',
    ICAO: 'URKA',
    lat: '45.002101898193',
    lon: '37.347301483154',
    timezone: '3'
  },
  {
    name: 'Joplin Regional ',
    city: 'Joplin',
    country: 'United States',
    IATA: 'JLN',
    ICAO: 'KJLN',
    lat: '37.151798248291016',
    lon: '-94.49829864501953',
    timezone: '-6'
  },
  {
    name: 'Lehigh Valley Intl ',
    city: 'Allentown',
    country: 'United States',
    IATA: 'ABE',
    ICAO: 'KABE',
    lat: '40.652099609375',
    lon: '-75.44080352783203',
    timezone: '-5'
  },
  {
    name: 'Northwest Arkansas Regional ',
    city: 'Bentonville',
    country: 'United States',
    IATA: 'XNA',
    ICAO: 'KXNA',
    lat: '36.281898',
    lon: '-94.306801',
    timezone: '-6'
  },
  {
    name: 'Atyrau ',
    city: 'Atyrau',
    country: 'Kazakhstan',
    IATA: 'GUW',
    ICAO: 'UATG',
    lat: '47.12189865112305',
    lon: '51.8213996887207',
    timezone: '5'
  },
  {
    name: 'Kzyl-Orda Southwest ',
    city: 'Kzyl-Orda',
    country: 'Kazakhstan',
    IATA: 'KZO',
    ICAO: 'UAOO',
    lat: '44.706902',
    lon: '65.592499',
    timezone: '6'
  },
  {
    name: 'South Bend Regional ',
    city: 'South Bend',
    country: 'United States',
    IATA: 'SBN',
    ICAO: 'KSBN',
    lat: '41.70869827270508',
    lon: '-86.31729888916016',
    timezone: '-5'
  },
  {
    name: 'Bykovo ',
    city: 'Moscow',
    country: 'Russia',
    IATA: 'BKA',
    ICAO: 'UUBB',
    lat: '55.6171989441',
    lon: '38.0600013733',
    timezone: '3'
  },
  {
    name: 'Talagi ',
    city: 'Arkhangelsk',
    country: 'Russia',
    IATA: 'ARH',
    ICAO: 'ULAA',
    lat: '64.60030364990234',
    lon: '40.71670150756836',
    timezone: '3'
  },
  {
    name: 'Saratov Central ',
    city: 'Saratov',
    country: 'Russia',
    IATA: 'RTW',
    ICAO: 'UWSS',
    lat: '51.564998626708984',
    lon: '46.04669952392578',
    timezone: '3'
  },
  {
    name: 'Novy Urengoy ',
    city: 'Novy Urengoy',
    country: 'Russia',
    IATA: 'NUX',
    ICAO: 'USMU',
    lat: '66.06939697265625',
    lon: '76.52030181884766',
    timezone: '5'
  },
  {
    name: 'Noyabrsk ',
    city: 'Noyabrsk',
    country: 'Russia',
    IATA: 'NOJ',
    ICAO: 'USRO',
    lat: '63.18330001831055',
    lon: '75.2699966430664',
    timezone: '5'
  },
  {
    name: 'Aktau ',
    city: 'Aktau',
    country: 'Kazakhstan',
    IATA: 'SCO',
    ICAO: 'UATE',
    lat: '43.8601',
    lon: '51.091999',
    timezone: '5'
  },
  {
    name: 'Ukhta ',
    city: 'Ukhta',
    country: 'Russia',
    IATA: 'UCT',
    ICAO: 'UUYH',
    lat: '63.566898345947266',
    lon: '53.8046989440918',
    timezone: '3'
  },
  {
    name: 'Usinsk ',
    city: 'Usinsk',
    country: 'Russia',
    IATA: 'USK',
    ICAO: 'UUYS',
    lat: '66.00469970703125',
    lon: '57.3671989440918',
    timezone: '3'
  },
  {
    name: 'Pechora ',
    city: 'Pechora',
    country: 'Russia',
    IATA: 'PEX',
    ICAO: 'UUYP',
    lat: '65.12110137939453',
    lon: '57.13079833984375',
    timezone: '3'
  },
  {
    name: 'Naryan Mar ',
    city: 'Naryan-Mar',
    country: 'Russia',
    IATA: 'NNM',
    ICAO: 'ULAM',
    lat: '67.63999938964844',
    lon: '53.12189865112305',
    timezone: '3'
  },
  {
    name: 'Pskov ',
    city: 'Pskov',
    country: 'Russia',
    IATA: 'PKV',
    ICAO: 'ULOO',
    lat: '57.78390121459961',
    lon: '28.395599365234375',
    timezone: '3'
  },
  {
    name: 'Kogalym Intl ',
    city: 'Kogalym',
    country: 'Russia',
    IATA: 'KGP',
    ICAO: 'USRK',
    lat: '62.190399169921875',
    lon: '74.53379821777344',
    timezone: '5'
  },
  {
    name: 'Yemelyanovo ',
    city: 'Krasnoyarsk',
    country: 'Russia',
    IATA: 'KJA',
    ICAO: 'UNKL',
    lat: '56.172901',
    lon: '92.493301',
    timezone: '7'
  },
  {
    name: 'Sary-Arka ',
    city: 'Karaganda',
    country: 'Kazakhstan',
    IATA: 'KGF',
    ICAO: 'UAKK',
    lat: '49.670799255371094',
    lon: '73.33439636230469',
    timezone: '6'
  },
  {
    name: 'Novosibirsk North ',
    city: 'Novosibirsk',
    country: 'Russia',
    IATA: '\\N',
    ICAO: 'UNCC',
    lat: '55.09170150756836',
    lon: '82.90670013427734',
    timezone: '7'
  },
  {
    name: 'Uray ',
    city: 'Uraj',
    country: 'Russia',
    IATA: 'URJ',
    ICAO: 'USHU',
    lat: '60.10329818725586',
    lon: '64.82669830322266',
    timezone: '5'
  },
  {
    name: 'Ivanovo South ',
    city: 'Ivanovo',
    country: 'Russia',
    IATA: 'IWA',
    ICAO: 'UUBI',
    lat: '56.93939971923828',
    lon: '40.940799713134766',
    timezone: '3'
  },
  {
    name: 'Longjia ',
    city: 'Changchun',
    country: 'China',
    IATA: 'CGQ',
    ICAO: 'ZYCC',
    lat: '43.9962005615',
    lon: '125.684997559',
    timezone: '8'
  },
  {
    name: 'Niigata ',
    city: 'Niigata',
    country: 'Japan',
    IATA: 'KIJ',
    ICAO: 'RJSN',
    lat: '37.9558982849',
    lon: '139.121002197',
    timezone: '9'
  },
  {
    name: 'Johnston Atoll ',
    city: 'Johnston Island',
    country: 'Johnston Atoll',
    IATA: 'JON',
    ICAO: 'PJON',
    lat: '16.7285995483',
    lon: '-169.533996582',
    timezone: '-10'
  },
  {
    name: 'Smith Field',
    city: 'Fort Wayne IN',
    country: 'United States',
    IATA: 'SMD',
    ICAO: 'KSMD',
    lat: '41.14339828',
    lon: '-85.15280151',
    timezone: '-5'
  },
  {
    name: 'California Redwood Coast-Humboldt County ',
    city: 'Arcata CA',
    country: 'United States',
    IATA: 'ACV',
    ICAO: 'KACV',
    lat: '40.978101',
    lon: '-124.109',
    timezone: '-8'
  },
  {
    name: 'Albert J Ellis ',
    city: 'Jacksonville NC',
    country: 'United States',
    IATA: 'OAJ',
    ICAO: 'KOAJ',
    lat: '34.8292007446',
    lon: '-77.61209869380001',
    timezone: '-5'
  },
  {
    name: 'Tuscaloosa Regional ',
    city: 'Tuscaloosa AL',
    country: 'United States',
    IATA: 'TCL',
    ICAO: 'KTCL',
    lat: '33.220600128174',
    lon: '-87.611396789551',
    timezone: '-6'
  },
  {
    name: 'Dubuque Regional ',
    city: 'Dubuque IA',
    country: 'United States',
    IATA: 'DBQ',
    ICAO: 'KDBQ',
    lat: '42.40200043',
    lon: '-90.70950317',
    timezone: '-6'
  },
  {
    name: 'Shun Tak Heliport',
    city: 'Hong Kong',
    country: 'Hong Kong',
    IATA: 'HHP',
    ICAO: 'VHST',
    lat: '22.2893714905',
    lon: '114.152153015',
    timezone: '8'
  },
  {
    name: 'Uru Harbour ',
    city: 'Atoifi',
    country: 'Solomon Islands',
    IATA: 'ATD',
    ICAO: 'AGAT',
    lat: '-8.87333',
    lon: '161.011002',
    timezone: '11'
  },
  {
    name: "Gwaunaru'u ",
    city: 'Auki',
    country: 'Solomon Islands',
    IATA: 'AKS',
    ICAO: 'AGGA',
    lat: '-8.70257',
    lon: '160.682007',
    timezone: '11'
  },
  {
    name: 'Ballalae ',
    city: 'Ballalae',
    country: 'Solomon Islands',
    IATA: 'BAS',
    ICAO: 'AGGE',
    lat: '-6.990745',
    lon: '155.886656',
    timezone: '11'
  },
  {
    name: 'Fera/Maringe ',
    city: 'Fera Island',
    country: 'Solomon Islands',
    IATA: 'FRE',
    ICAO: 'AGGF',
    lat: '-8.1075',
    lon: '159.576996',
    timezone: '11'
  },
  {
    name: 'Babanakira ',
    city: 'Mbambanakira',
    country: 'Solomon Islands',
    IATA: 'MBU',
    ICAO: 'AGGI',
    lat: '-9.7475004196167',
    lon: '159.83900451660156',
    timezone: '11'
  },
  {
    name: 'Ngorangora ',
    city: 'Kirakira',
    country: 'Solomon Islands',
    IATA: 'IRA',
    ICAO: 'AGGK',
    lat: '-10.449700355500001',
    lon: '161.897994995',
    timezone: '11'
  },
  {
    name: 'Santa Cruz/Graciosa Bay/Luova ',
    city: 'Santa Cruz/Graciosa Bay/Luova',
    country: 'Solomon Islands',
    IATA: 'SCZ',
    ICAO: 'AGGL',
    lat: '-10.72029972076416',
    lon: '165.7949981689453',
    timezone: '11'
  },
  {
    name: 'Munda ',
    city: 'Munda',
    country: 'Solomon Islands',
    IATA: 'MUA',
    ICAO: 'AGGM',
    lat: '-8.327969551086426',
    lon: '157.26300048828125',
    timezone: '11'
  },
  {
    name: 'Nusatupe ',
    city: 'Gizo',
    country: 'Solomon Islands',
    IATA: 'GZO',
    ICAO: 'AGGN',
    lat: '-8.09778022766',
    lon: '156.863998413',
    timezone: '11'
  },
  {
    name: 'Mono ',
    city: 'Stirling Island',
    country: 'Solomon Islands',
    IATA: 'MNY',
    ICAO: 'AGGO',
    lat: '-7.416940212249756',
    lon: '155.56500244140625',
    timezone: '11'
  },
  {
    name: 'Rennell/Tingoa ',
    city: 'Rennell Island',
    country: 'Solomon Islands',
    IATA: 'RNL',
    ICAO: 'AGGR',
    lat: '-11.533900260925293',
    lon: '160.06300354003906',
    timezone: '11'
  },
  {
    name: 'Marau ',
    city: 'Marau',
    country: 'Solomon Islands',
    IATA: 'RUS',
    ICAO: 'AGGU',
    lat: '-9.861669540409999',
    lon: '160.824996948',
    timezone: '11'
  },
  {
    name: 'Suavanao ',
    city: 'Suavanao',
    country: 'Solomon Islands',
    IATA: 'VAO',
    ICAO: 'AGGV',
    lat: '-7.585559844970703',
    lon: '158.7310028076172',
    timezone: '11'
  },
  {
    name: 'Kaghau ',
    city: 'Kagau Island',
    country: 'Solomon Islands',
    IATA: 'KGE',
    ICAO: 'AGKG',
    lat: '-7.3305',
    lon: '157.585',
    timezone: '11'
  },
  {
    name: 'Ramata ',
    city: 'Ramata',
    country: 'Solomon Islands',
    IATA: 'RBV',
    ICAO: 'AGRM',
    lat: '-8.168060302734375',
    lon: '157.64300537109375',
    timezone: '11'
  },
  {
    name: 'Buka ',
    city: 'Buka Island',
    country: 'Papua New Guinea',
    IATA: 'BUA',
    ICAO: 'AYBK',
    lat: '-5.4223198890686035',
    lon: '154.67300415039062',
    timezone: '10'
  },
  {
    name: 'Chimbu ',
    city: 'Kundiawa',
    country: 'Papua New Guinea',
    IATA: 'CMU',
    ICAO: 'AYCH',
    lat: '-6.024290084838867',
    lon: '144.9709930419922',
    timezone: '10'
  },
  {
    name: 'Daru ',
    city: 'Daru',
    country: 'Papua New Guinea',
    IATA: 'DAU',
    ICAO: 'AYDU',
    lat: '-9.08675956726',
    lon: '143.207992554',
    timezone: '10'
  },
  {
    name: 'Gurney ',
    city: 'Gurney',
    country: 'Papua New Guinea',
    IATA: 'GUR',
    ICAO: 'AYGN',
    lat: '-10.3114995956',
    lon: '150.333999634',
    timezone: '10'
  },
  {
    name: 'Girua ',
    city: 'Girua',
    country: 'Papua New Guinea',
    IATA: 'PNP',
    ICAO: 'AYGR',
    lat: '-8.80453968048',
    lon: '148.309005737',
    timezone: '10'
  },
  {
    name: 'Kimbe ',
    city: 'Hoskins',
    country: 'Papua New Guinea',
    IATA: 'HKN',
    ICAO: 'AYHK',
    lat: '-5.462170124053955',
    lon: '150.40499877929688',
    timezone: '10'
  },
  {
    name: 'Kiunga ',
    city: 'Kiunga',
    country: 'Papua New Guinea',
    IATA: 'UNG',
    ICAO: 'AYKI',
    lat: '-6.1257100105285645',
    lon: '141.28199768066406',
    timezone: '10'
  },
  {
    name: 'Kikori ',
    city: 'Kikori',
    country: 'Papua New Guinea',
    IATA: 'KRI',
    ICAO: 'AYKK',
    lat: '-7.424379825592041',
    lon: '144.2500762939453',
    timezone: '10'
  },
  {
    name: 'Kerema ',
    city: 'Kerema',
    country: 'Papua New Guinea',
    IATA: 'KMA',
    ICAO: 'AYKM',
    lat: '-7.96361017227',
    lon: '145.770996094',
    timezone: '10'
  },
  {
    name: 'Kavieng ',
    city: 'Kavieng',
    country: 'Papua New Guinea',
    IATA: 'KVG',
    ICAO: 'AYKV',
    lat: '-2.57940006256',
    lon: '150.807998657',
    timezone: '10'
  },
  {
    name: 'Mendi ',
    city: 'Mendi',
    country: 'Papua New Guinea',
    IATA: 'MDU',
    ICAO: 'AYMN',
    lat: '-6.14774',
    lon: '143.656998',
    timezone: '10'
  },
  {
    name: 'Momote ',
    city: 'Momote',
    country: 'Papua New Guinea',
    IATA: 'MAS',
    ICAO: 'AYMO',
    lat: '-2.06189',
    lon: '147.423996',
    timezone: '10'
  },
  {
    name: 'Moro ',
    city: 'Moro',
    country: 'Papua New Guinea',
    IATA: 'MXH',
    ICAO: 'AYMR',
    lat: '-6.36332988739',
    lon: '143.238006592',
    timezone: '10'
  },
  {
    name: 'Misima Island ',
    city: 'Misima Island',
    country: 'Papua New Guinea',
    IATA: 'MIS',
    ICAO: 'AYMS',
    lat: '-10.689200401299999',
    lon: '152.837997437',
    timezone: '10'
  },
  {
    name: 'Tari ',
    city: 'Tari',
    country: 'Papua New Guinea',
    IATA: 'TIZ',
    ICAO: 'AYTA',
    lat: '-5.84499979019',
    lon: '142.947998047',
    timezone: '10'
  },
  {
    name: 'Tabubil ',
    city: 'Tabubil',
    country: 'Papua New Guinea',
    IATA: 'TBG',
    ICAO: 'AYTB',
    lat: '-5.27861',
    lon: '141.225998',
    timezone: '10'
  },
  {
    name: 'Tokua ',
    city: 'Tokua',
    country: 'Papua New Guinea',
    IATA: 'RAB',
    ICAO: 'AYTK',
    lat: '-4.34045982361',
    lon: '152.380004883',
    timezone: '10'
  },
  {
    name: 'Vanimo ',
    city: 'Vanimo',
    country: 'Papua New Guinea',
    IATA: 'VAI',
    ICAO: 'AYVN',
    lat: '-2.6926',
    lon: '141.3028',
    timezone: '10'
  },
  {
    name: 'Wapenamanda ',
    city: 'Wapenamanda',
    country: 'Papua New Guinea',
    IATA: 'WBM',
    ICAO: 'AYWD',
    lat: '-5.6433000564575195',
    lon: '143.89500427246094',
    timezone: '10'
  },
  {
    name: 'Alluitsup Paa Heliport',
    city: 'Alluitsup Paa',
    country: 'Greenland',
    IATA: 'LLU',
    ICAO: 'BGAP',
    lat: '60.46445',
    lon: '-45.56917',
    timezone: '-3'
  },
  {
    name: 'Neerlerit Inaat ',
    city: 'Neerlerit Inaat',
    country: 'Greenland',
    IATA: 'CNP',
    ICAO: 'BGCO',
    lat: '70.7431030273',
    lon: '-22.6504993439',
    timezone: '-1'
  },
  {
    name: 'Paamiut Heliport',
    city: 'Paamiut',
    country: 'Greenland',
    IATA: 'JFR',
    ICAO: 'BGFH',
    lat: '61.9921989441',
    lon: '-49.6624984741',
    timezone: '-3'
  },
  {
    name: 'Qeqertarsuaq Heliport',
    city: 'Qeqertarsuaq Airport',
    country: 'Greenland',
    IATA: 'JGO',
    ICAO: 'BGGN',
    lat: '69.251181993',
    lon: '-53.5148763657',
    timezone: '-3'
  },
  {
    name: 'Qaqortoq Heliport',
    city: 'Qaqortoq',
    country: 'Greenland',
    IATA: 'JJU',
    ICAO: 'BGJH',
    lat: '60.715684155299996',
    lon: '-46.0299186409',
    timezone: '-3'
  },
  {
    name: 'Maniitsoq ',
    city: 'Maniitsoq',
    country: 'Greenland',
    IATA: 'JSU',
    ICAO: 'BGMQ',
    lat: '65.4124984741',
    lon: '-52.9393997192',
    timezone: '-3'
  },
  {
    name: 'Nanortalik Heliport',
    city: 'Nanortalik',
    country: 'Greenland',
    IATA: 'JNN',
    ICAO: 'BGNN',
    lat: '60.141883975899994',
    lon: '-45.232976675',
    timezone: '-3'
  },
  {
    name: 'Narsaq Heliport',
    city: 'Narsaq',
    country: 'Greenland',
    IATA: 'JNS',
    ICAO: 'BGNS',
    lat: '60.9172827256',
    lon: '-46.059923172',
    timezone: '-3'
  },
  {
    name: 'Qaanaaq ',
    city: 'Qaanaaq',
    country: 'Greenland',
    IATA: 'NAQ',
    ICAO: 'BGQQ',
    lat: '77.4886016846',
    lon: '-69.3887023926',
    timezone: '-4'
  },
  {
    name: 'Sisimiut ',
    city: 'Sisimiut',
    country: 'Greenland',
    IATA: 'JHS',
    ICAO: 'BGSS',
    lat: '66.9513015747',
    lon: '-53.7293014526',
    timezone: '-3'
  },
  {
    name: 'Upernavik ',
    city: 'Upernavik',
    country: 'Greenland',
    IATA: 'JUV',
    ICAO: 'BGUK',
    lat: '72.7901992798',
    lon: '-56.1305999756',
    timezone: '-3'
  },
  {
    name: 'Qaarsut ',
    city: 'Uummannaq',
    country: 'Greenland',
    IATA: 'JQA',
    ICAO: 'BGUQ',
    lat: '70.7341995239',
    lon: '-52.6962013245',
    timezone: '-3'
  },
  {
    name: 'Gr\u00edmsey ',
    city: 'Gr\u00edmsey',
    country: 'Iceland',
    IATA: 'GRY',
    ICAO: 'BIGR',
    lat: '66.5458',
    lon: '-18.0173',
    timezone: '0'
  },
  {
    name: 'Thorshofn ',
    city: 'Thorshofn',
    country: 'Iceland',
    IATA: 'THO',
    ICAO: 'BITN',
    lat: '66.21849822998047',
    lon: '-15.335599899291992',
    timezone: '0'
  },
  {
    name: 'Vopnafj\u00f6r\u00f0ur ',
    city: 'Vopnafj\u00f6r\u00f0ur',
    country: 'Iceland',
    IATA: 'VPN',
    ICAO: 'BIVO',
    lat: '65.72059631347656',
    lon: '-14.850600242614746',
    timezone: '0'
  },
  {
    name: 'Whistler/Green Lake Water Aerodrome',
    city: 'Whistler',
    country: 'Canada',
    IATA: 'YWS',
    ICAO: 'CAE5',
    lat: '50.1436004639',
    lon: '-122.948997498',
    timezone: '-8'
  },
  {
    name: 'Anahim Lake ',
    city: 'Anahim Lake',
    country: 'Canada',
    IATA: 'YAA',
    ICAO: 'CAJ4',
    lat: '52.45249938964844',
    lon: '-125.3030014038086',
    timezone: '-8'
  },
  {
    name: 'Williams Harbour ',
    city: 'Williams Harbour',
    country: 'Canada',
    IATA: 'YWM',
    ICAO: 'CCA6',
    lat: '52.566898345947266',
    lon: '-55.784698486328125',
    timezone: '-3.5'
  },
  {
    name: 'St. Lewis (Fox Harbour) ',
    city: 'St. Lewis',
    country: 'Canada',
    IATA: 'YFX',
    ICAO: 'CCK4',
    lat: '52.372798919677734',
    lon: '-55.67390060424805',
    timezone: '-3.5'
  },
  {
    name: 'Port Hope Simpson ',
    city: 'Port Hope Simpson',
    country: 'Canada',
    IATA: 'YHA',
    ICAO: 'CCP4',
    lat: '52.528099060058594',
    lon: '-56.28609848022461',
    timezone: '-3.5'
  },
  {
    name: 'Rigolet ',
    city: 'Rigolet',
    country: 'Canada',
    IATA: 'YRG',
    ICAO: 'CCZ2',
    lat: '54.1796989440918',
    lon: '-58.45750045776367',
    timezone: '-4'
  },
  {
    name: 'Colville Lake ',
    city: 'Colville Lake',
    country: 'Canada',
    IATA: 'YCK',
    ICAO: 'CEB3',
    lat: '67.0392',
    lon: '-126.08',
    timezone: '-7'
  },
  {
    name: 'What\u00ec ',
    city: 'What\u00ec',
    country: 'Canada',
    IATA: 'YLE',
    ICAO: 'CEM3',
    lat: '63.13169860839844',
    lon: '-117.24600219726562',
    timezone: '-7'
  },
  {
    name: 'Summer Beaver ',
    city: 'Summer Beaver',
    country: 'Canada',
    IATA: 'SUR',
    ICAO: 'CJV7',
    lat: '52.70859909057617',
    lon: '-88.54190063476562',
    timezone: '-5'
  },
  {
    name: 'Wapekeka ',
    city: 'Angling Lake',
    country: 'Canada',
    IATA: 'YAX',
    ICAO: 'CKB6',
    lat: '53.84920120239258',
    lon: '-89.57939910888672',
    timezone: '-6'
  },
  {
    name: 'Wunnumin Lake ',
    city: 'Wunnumin Lake',
    country: 'Canada',
    IATA: 'WNN',
    ICAO: 'CKL3',
    lat: '52.89390182495117',
    lon: '-89.28919982910156',
    timezone: '-5'
  },
  {
    name: 'North Spirit Lake ',
    city: 'North Spirit Lake',
    country: 'Canada',
    IATA: 'YNO',
    ICAO: 'CKQ3',
    lat: '52.4900016784668',
    lon: '-92.97109985351562',
    timezone: '-6'
  },
  {
    name: 'Bearskin Lake ',
    city: 'Bearskin Lake',
    country: 'Canada',
    IATA: 'XBE',
    ICAO: 'CNE3',
    lat: '53.965599060058594',
    lon: '-91.0271987915039',
    timezone: '-6'
  },
  {
    name: 'Kingfisher Lake ',
    city: 'Kingfisher Lake',
    country: 'Canada',
    IATA: 'KIF',
    ICAO: 'CNM5',
    lat: '53.01250076293945',
    lon: '-89.85530090332031',
    timezone: '-5'
  },
  {
    name: 'Ogoki Post ',
    city: 'Ogoki Post',
    country: 'Canada',
    IATA: 'YOG',
    ICAO: 'CNT3',
    lat: '51.6585998535',
    lon: '-85.9017028809',
    timezone: '-5'
  },
  {
    name: 'Poplar Hill ',
    city: 'Poplar Hill',
    country: 'Canada',
    IATA: 'YHP',
    ICAO: 'CPV7',
    lat: '52.1133',
    lon: '-94.2556',
    timezone: '-6'
  },
  {
    name: 'Chisasibi ',
    city: 'Chisasibi',
    country: 'Canada',
    IATA: 'YKU',
    ICAO: 'CSU2',
    lat: '53.805599212646484',
    lon: '-78.91690063476562',
    timezone: '-5'
  },
  {
    name: 'T\u00eate-\u00e0-la-Baleine ',
    city: 'T\u00eate-\u00e0-la-Baleine',
    country: 'Canada',
    IATA: 'ZTB',
    ICAO: 'CTB6',
    lat: '50.674400329589844',
    lon: '-59.38359832763672',
    timezone: '-4'
  },
  {
    name: 'La Tabati\u00e8re ',
    city: 'La Tabati\u00e8re',
    country: 'Canada',
    IATA: 'ZLT',
    ICAO: 'CTU5',
    lat: '50.8307991027832',
    lon: '-58.97560119628906',
    timezone: '-4'
  },
  {
    name: 'Cat Lake ',
    city: 'Cat Lake',
    country: 'Canada',
    IATA: 'YAC',
    ICAO: 'CYAC',
    lat: '51.72719955444336',
    lon: '-91.82440185546875',
    timezone: '-6'
  },
  {
    name: 'Fort Frances Municipal ',
    city: 'Fort Frances',
    country: 'Canada',
    IATA: 'YAG',
    ICAO: 'CYAG',
    lat: '48.65420150756836',
    lon: '-93.439697265625',
    timezone: '-6'
  },
  {
    name: 'Kasabonika ',
    city: 'Kasabonika',
    country: 'Canada',
    IATA: 'XKS',
    ICAO: 'CYAQ',
    lat: '53.52470016479492',
    lon: '-88.6427993774414',
    timezone: '-5'
  },
  {
    name: 'Kangirsuk ',
    city: 'Kangirsuk',
    country: 'Canada',
    IATA: 'YKG',
    ICAO: 'CYAS',
    lat: '60.027198791503906',
    lon: '-69.99919891357422',
    timezone: '-5'
  },
  {
    name: 'Attawapiskat ',
    city: 'Attawapiskat',
    country: 'Canada',
    IATA: 'YAT',
    ICAO: 'CYAT',
    lat: '52.9275016784668',
    lon: '-82.43190002441406',
    timezone: '-5'
  },
  {
    name: 'Lac Du Bonnet ',
    city: 'Lac Du Bonnet',
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYAX',
    lat: '50.2943992615',
    lon: '-96.0100021362',
    timezone: '-6'
  },
  {
    name: 'Uranium City ',
    city: 'Uranium City',
    country: 'Canada',
    IATA: 'YBE',
    ICAO: 'CYBE',
    lat: '59.5614013671875',
    lon: '-108.48100280761719',
    timezone: '-6'
  },
  {
    name: 'Lourdes de Blanc Sablon ',
    city: 'Lourdes-De-Blanc-Sablon',
    country: 'Canada',
    IATA: 'YBX',
    ICAO: 'CYBX',
    lat: '51.443599700899995',
    lon: '-57.185298919699996',
    timezone: '-4'
  },
  {
    name: 'Cartwright ',
    city: 'Cartwright',
    country: 'Canada',
    IATA: 'YRF',
    ICAO: 'CYCA',
    lat: '53.68280029296875',
    lon: '-57.041900634765625',
    timezone: '-4'
  },
  {
    name: 'Chesterfield Inlet ',
    city: 'Chesterfield Inlet',
    country: 'Canada',
    IATA: 'YCS',
    ICAO: 'CYCS',
    lat: '63.346900939899996',
    lon: '-90.73110198970001',
    timezone: '-6'
  },
  {
    name: 'Nain ',
    city: 'Nain',
    country: 'Canada',
    IATA: 'YDP',
    ICAO: 'CYDP',
    lat: '56.549198150634766',
    lon: '-61.680301666259766',
    timezone: '-4'
  },
  {
    name: 'Fort Severn ',
    city: 'Fort Severn',
    country: 'Canada',
    IATA: 'YER',
    ICAO: 'CYER',
    lat: '56.01890182495117',
    lon: '-87.67610168457031',
    timezone: '-5'
  },
  {
    name: 'Fort Albany ',
    city: 'Fort Albany',
    country: 'Canada',
    IATA: 'YFA',
    ICAO: 'CYFA',
    lat: '52.20140075683594',
    lon: '-81.6968994140625',
    timezone: '-5'
  },
  {
    name: 'Fort Hope ',
    city: 'Fort Hope',
    country: 'Canada',
    IATA: 'YFH',
    ICAO: 'CYFH',
    lat: '51.5619010925293',
    lon: '-87.90779876708984',
    timezone: '-5'
  },
  {
    name: 'Makkovik ',
    city: 'Makkovik',
    country: 'Canada',
    IATA: 'YMN',
    ICAO: 'CYFT',
    lat: '55.076900482177734',
    lon: '-59.1864013671875',
    timezone: '-4'
  },
  {
    name: 'Texada Gillies Bay ',
    city: 'Texada',
    country: 'Canada',
    IATA: 'YGB',
    ICAO: 'CYGB',
    lat: '49.69419860839844',
    lon: '-124.51799774169922',
    timezone: '-8'
  },
  {
    name: 'Gods Lake Narrows ',
    city: 'Gods Lake Narrows',
    country: 'Canada',
    IATA: 'YGO',
    ICAO: 'CYGO',
    lat: '54.55889892578125',
    lon: '-94.49140167236328',
    timezone: '-6'
  },
  {
    name: 'Igloolik ',
    city: 'Igloolik',
    country: 'Canada',
    IATA: 'YGT',
    ICAO: 'CYGT',
    lat: '69.3647003174',
    lon: '-81.8161010742',
    timezone: '-5'
  },
  {
    name: 'Kuujjuarapik ',
    city: 'Kuujjuarapik',
    country: 'Canada',
    IATA: 'YGW',
    ICAO: 'CYGW',
    lat: '55.281898498535156',
    lon: '-77.76529693603516',
    timezone: '-5'
  },
  {
    name: 'Gillam ',
    city: 'Gillam',
    country: 'Canada',
    IATA: 'YGX',
    ICAO: 'CYGX',
    lat: '56.35749816894531',
    lon: '-94.71060180664062',
    timezone: '-6'
  },
  {
    name: 'Grise Fiord ',
    city: 'Grise Fiord',
    country: 'Canada',
    IATA: 'YGZ',
    ICAO: 'CYGZ',
    lat: '76.4261016846',
    lon: '-82.90920257570001',
    timezone: '-5'
  },
  {
    name: 'Quaqtaq ',
    city: 'Quaqtaq',
    country: 'Canada',
    IATA: 'YQC',
    ICAO: 'CYHA',
    lat: '61.0463981628418',
    lon: '-69.6177978515625',
    timezone: '-5'
  },
  {
    name: 'Vancouver Harbour Water Aerodrome',
    city: 'Vancouver',
    country: 'Canada',
    IATA: 'CXH',
    ICAO: 'CYHC',
    lat: '49.2943992615',
    lon: '-123.111000061',
    timezone: '-8'
  },
  {
    name: 'Nemiscau ',
    city: 'Nemiscau',
    country: 'Canada',
    IATA: 'YNS',
    ICAO: 'CYHH',
    lat: '51.69110107421875',
    lon: '-76.1355972290039',
    timezone: '-5'
  },
  {
    name: 'Hopedale ',
    city: 'Hopedale',
    country: 'Canada',
    IATA: 'YHO',
    ICAO: 'CYHO',
    lat: '55.448299407958984',
    lon: '-60.228599548339844',
    timezone: '-4'
  },
  {
    name: 'Chevery ',
    city: 'Chevery',
    country: 'Canada',
    IATA: 'YHR',
    ICAO: 'CYHR',
    lat: '50.46889877319336',
    lon: '-59.63669967651367',
    timezone: '-4'
  },
  {
    name: 'Ivujivik ',
    city: 'Ivujivik',
    country: 'Canada',
    IATA: 'YIK',
    ICAO: 'CYIK',
    lat: '62.417301177978516',
    lon: '-77.92530059814453',
    timezone: '-5'
  },
  {
    name: 'Island Lake ',
    city: 'Island Lake',
    country: 'Canada',
    IATA: 'YIV',
    ICAO: 'CYIV',
    lat: '53.857200622558594',
    lon: '-94.65360260009766',
    timezone: '-6'
  },
  {
    name: 'Akulivik ',
    city: 'Akulivik',
    country: 'Canada',
    IATA: 'AKV',
    ICAO: 'CYKO',
    lat: '60.818599700927734',
    lon: '-78.14859771728516',
    timezone: '-5'
  },
  {
    name: 'Waskaganish ',
    city: 'Waskaganish',
    country: 'Canada',
    IATA: 'YKQ',
    ICAO: 'CYKQ',
    lat: '51.47330093383789',
    lon: '-78.75830078125',
    timezone: '-5'
  },
  {
    name: 'Aupaluk ',
    city: 'Aupaluk',
    country: 'Canada',
    IATA: 'YPJ',
    ICAO: 'CYLA',
    lat: '59.29669952392578',
    lon: '-69.59970092773438',
    timezone: '-5'
  },
  {
    name: 'Kimmirut ',
    city: 'Kimmirut',
    country: 'Canada',
    IATA: 'YLC',
    ICAO: 'CYLC',
    lat: '62.8499984741',
    lon: '-69.88330078119999',
    timezone: '-5'
  },
  {
    name: 'Lansdowne House ',
    city: 'Lansdowne House',
    country: 'Canada',
    IATA: 'YLH',
    ICAO: 'CYLH',
    lat: '52.19559860229492',
    lon: '-87.93419647216797',
    timezone: '-5'
  },
  {
    name: 'St Georges ',
    city: "Lutselk'e",
    country: 'Canada',
    IATA: '\\N',
    ICAO: 'CYSG',
    lat: '46.096401',
    lon: '-70.714699',
    timezone: '-5'
  },
  {
    name: 'Kangiqsualujjuaq (Georges River) ',
    city: 'Kangiqsualujjuaq',
    country: 'Canada',
    IATA: 'XGR',
    ICAO: 'CYLU',
    lat: '58.71139907836914',
    lon: '-65.9927978515625',
    timezone: '-5'
  },
  {
    name: "Mary's Harbour ",
    city: "Mary's Harbour",
    country: 'Canada',
    IATA: 'YMH',
    ICAO: 'CYMH',
    lat: '52.302799224853516',
    lon: '-55.847198486328125',
    timezone: '-3.5'
  },
  {
    name: 'Chapais ',
    city: 'Chibougamau',
    country: 'Canada',
    IATA: 'YMT',
    ICAO: 'CYMT',
    lat: '49.77190017700195',
    lon: '-74.5280990600586',
    timezone: '-5'
  },
  {
    name: 'Umiujaq ',
    city: 'Umiujaq',
    country: 'Canada',
    IATA: 'YUD',
    ICAO: 'CYMU',
    lat: '56.53609848022461',
    lon: '-76.51830291748047',
    timezone: '-5'
  },
  {
    name: 'Wemindji ',
    city: 'Wemindji',
    country: 'Canada',
    IATA: 'YNC',
    ICAO: 'CYNC',
    lat: '53.01060104370117',
    lon: '-78.83110046386719',
    timezone: '-5'
  },
  {
    name: 'Norway House ',
    city: 'Norway House',
    country: 'Canada',
    IATA: 'YNE',
    ICAO: 'CYNE',
    lat: '53.95830154418945',
    lon: '-97.84420013427734',
    timezone: '-6'
  },
  {
    name: 'Points North Landing ',
    city: 'Points North Landing',
    country: 'Canada',
    IATA: 'YNL',
    ICAO: 'CYNL',
    lat: '58.27669906616211',
    lon: '-104.08200073242188',
    timezone: '-6'
  },
  {
    name: 'Oxford House ',
    city: 'Oxford House',
    country: 'Canada',
    IATA: 'YOH',
    ICAO: 'CYOH',
    lat: '54.93330001831055',
    lon: '-95.27890014648438',
    timezone: '-6'
  },
  {
    name: 'Inukjuak ',
    city: 'Inukjuak',
    country: 'Canada',
    IATA: 'YPH',
    ICAO: 'CYPH',
    lat: '58.471900939941406',
    lon: '-78.07689666748047',
    timezone: '-5'
  },
  {
    name: 'Pikangikum ',
    city: 'Pikangikum',
    country: 'Canada',
    IATA: 'YPM',
    ICAO: 'CYPM',
    lat: '51.819698333740234',
    lon: '-93.97329711914062',
    timezone: '-6'
  },
  {
    name: 'Peawanuck ',
    city: 'Peawanuck',
    country: 'Canada',
    IATA: 'YPO',
    ICAO: 'CYPO',
    lat: '54.98809814453125',
    lon: '-85.44329833984375',
    timezone: '-5'
  },
  {
    name: 'Powell River ',
    city: 'Powell River',
    country: 'Canada',
    IATA: 'YPW',
    ICAO: 'CYPW',
    lat: '49.83420181274414',
    lon: '-124.5',
    timezone: '-8'
  },
  {
    name: 'The Pas ',
    city: 'The Pas',
    country: 'Canada',
    IATA: 'YQD',
    ICAO: 'CYQD',
    lat: '53.97140121459961',
    lon: '-101.09100341796875',
    timezone: '-6'
  },
  {
    name: 'Nakina ',
    city: 'Nakina',
    country: 'Canada',
    IATA: 'YQN',
    ICAO: 'CYQN',
    lat: '50.18280029296875',
    lon: '-86.69640350341797',
    timezone: '-5'
  },
  {
    name: 'Rae Lakes ',
    city: 'Gam\u00e8t\u00ec',
    country: 'Canada',
    IATA: 'YRA',
    ICAO: 'CYRA',
    lat: '64.11609649658203',
    lon: '-117.30999755859375',
    timezone: '-7'
  },
  {
    name: 'Red Lake ',
    city: 'Red Lake',
    country: 'Canada',
    IATA: 'YRL',
    ICAO: 'CYRL',
    lat: '51.066898345947266',
    lon: '-93.79309844970703',
    timezone: '-6'
  },
  {
    name: 'Stony Rapids ',
    city: 'Stony Rapids',
    country: 'Canada',
    IATA: 'YSF',
    ICAO: 'CYSF',
    lat: '59.250301361083984',
    lon: '-105.84100341796875',
    timezone: '-6'
  },
  {
    name: 'Sanikiluaq ',
    city: 'Sanikiluaq',
    country: 'Canada',
    IATA: 'YSK',
    ICAO: 'CYSK',
    lat: '56.5377998352',
    lon: '-79.2466964722',
    timezone: '-5'
  },
  {
    name: 'St. Theresa Point ',
    city: 'St. Theresa Point',
    country: 'Canada',
    IATA: 'YST',
    ICAO: 'CYST',
    lat: '53.84560012817383',
    lon: '-94.85189819335938',
    timezone: '-6'
  },
  {
    name: 'Big Trout Lake ',
    city: 'Big Trout Lake',
    country: 'Canada',
    IATA: 'YTL',
    ICAO: 'CYTL',
    lat: '53.81779861450195',
    lon: '-89.89689636230469',
    timezone: '-6'
  },
  {
    name: 'Deer Lake ',
    city: 'Deer Lake',
    country: 'Canada',
    IATA: 'YVZ',
    ICAO: 'CYVZ',
    lat: '52.655799865722656',
    lon: '-94.0614013671875',
    timezone: '-6'
  },
  {
    name: 'Webequie ',
    city: 'Webequie',
    country: 'Canada',
    IATA: 'YWP',
    ICAO: 'CYWP',
    lat: '52.9593933975',
    lon: '-87.3748683929',
    timezone: '-5'
  },
  {
    name: 'Whale Cove ',
    city: 'Whale Cove',
    country: 'Canada',
    IATA: 'YXN',
    ICAO: 'CYXN',
    lat: '62.24000167849999',
    lon: '-92.59809875490001',
    timezone: '-6'
  },
  {
    name: 'Salluit ',
    city: 'Salluit',
    country: 'Canada',
    IATA: 'YZG',
    ICAO: 'CYZG',
    lat: '62.17940139770508',
    lon: '-75.66719818115234',
    timezone: '-5'
  },
  {
    name: 'York Landing ',
    city: 'York Landing',
    country: 'Canada',
    IATA: 'ZAC',
    ICAO: 'CZAC',
    lat: '56.08940124511719',
    lon: '-96.08920288085938',
    timezone: '-6'
  },
  {
    name: 'Ilford ',
    city: 'Ilford',
    country: 'Canada',
    IATA: 'ILF',
    ICAO: 'CZBD',
    lat: '56.0614013672',
    lon: '-95.613899231',
    timezone: '-6'
  },
  {
    name: 'Bathurst ',
    city: 'Bathurst',
    country: 'Canada',
    IATA: 'ZBF',
    ICAO: 'CZBF',
    lat: '47.629699707',
    lon: '-65.738899231',
    timezone: '-4'
  },
  {
    name: 'Eastmain River ',
    city: 'Eastmain River',
    country: 'Canada',
    IATA: 'ZEM',
    ICAO: 'CZEM',
    lat: '52.22639846801758',
    lon: '-78.52249908447266',
    timezone: '-5'
  },
  {
    name: 'Fond-Du-Lac ',
    city: 'Fond-Du-Lac',
    country: 'Canada',
    IATA: 'ZFD',
    ICAO: 'CZFD',
    lat: '59.33440017700195',
    lon: '-107.18199920654297',
    timezone: '-6'
  },
  {
    name: 'Gods River ',
    city: 'Gods River',
    country: 'Canada',
    IATA: 'ZGI',
    ICAO: 'CZGI',
    lat: '54.839698791503906',
    lon: '-94.07859802246094',
    timezone: '-6'
  },
  {
    name: 'Swan River ',
    city: 'Swan River',
    country: 'Canada',
    IATA: 'ZJN',
    ICAO: 'CZJN',
    lat: '52.120601654052734',
    lon: '-101.23600006103516',
    timezone: '-6'
  },
  {
    name: 'Kashechewan ',
    city: 'Kashechewan',
    country: 'Canada',
    IATA: 'ZKE',
    ICAO: 'CZKE',
    lat: '52.282501220703125',
    lon: '-81.67780303955078',
    timezone: '-5'
  },
  {
    name: 'Muskrat Dam ',
    city: 'Muskrat Dam',
    country: 'Canada',
    IATA: 'MSA',
    ICAO: 'CZMD',
    lat: '53.44139862060547',
    lon: '-91.76280212402344',
    timezone: '-6'
  },
  {
    name: 'Masset ',
    city: 'Masset',
    country: 'Canada',
    IATA: 'ZMT',
    ICAO: 'CZMT',
    lat: '54.02750015258789',
    lon: '-132.125',
    timezone: '-8'
  },
  {
    name: 'Sachigo Lake ',
    city: 'Sachigo Lake',
    country: 'Canada',
    IATA: 'ZPB',
    ICAO: 'CZPB',
    lat: '53.8911018371582',
    lon: '-92.19640350341797',
    timezone: '-6'
  },
  {
    name: 'Round Lake (Weagamow Lake) ',
    city: 'Round Lake',
    country: 'Canada',
    IATA: 'ZRJ',
    ICAO: 'CZRJ',
    lat: '52.943599700927734',
    lon: '-91.31279754638672',
    timezone: '-6'
  },
  {
    name: 'Sandy Lake ',
    city: 'Sandy Lake',
    country: 'Canada',
    IATA: 'ZSJ',
    ICAO: 'CZSJ',
    lat: '53.06420135498047',
    lon: '-93.34439849853516',
    timezone: '-6'
  },
  {
    name: 'Shamattawa ',
    city: 'Shamattawa',
    country: 'Canada',
    IATA: 'ZTM',
    ICAO: 'CZTM',
    lat: '55.8656005859375',
    lon: '-92.0813980102539',
    timezone: '-6'
  },
  {
    name: 'Churchill Falls ',
    city: 'Churchill Falls',
    country: 'Canada',
    IATA: 'ZUM',
    ICAO: 'CZUM',
    lat: '53.5619010925293',
    lon: '-64.10639953613281',
    timezone: '-4'
  },
  {
    name: 'Wollaston Lake ',
    city: 'Wollaston Lake',
    country: 'Canada',
    IATA: 'ZWL',
    ICAO: 'CZWL',
    lat: '58.10689926147461',
    lon: '-103.1719970703125',
    timezone: '-6'
  },
  {
    name: 'Batna ',
    city: 'Batna',
    country: 'Algeria',
    IATA: 'BLJ',
    ICAO: 'DABT',
    lat: '35.752101898199996',
    lon: '6.308589935300001',
    timezone: '1'
  },
  {
    name: 'B\u00e9char Boudghene Ben Ali Lotfi ',
    city: 'B\u00e9char',
    country: 'Algeria',
    IATA: 'CBH',
    ICAO: 'DAOR',
    lat: '31.645700454711914',
    lon: '-2.269860029220581',
    timezone: '1'
  },
  {
    name: 'Bordj Badji Mokhtar ',
    city: 'Bordj Badji Mokhtar',
    country: 'Algeria',
    IATA: 'BMW',
    ICAO: 'DATM',
    lat: '21.375',
    lon: '0.923888981342',
    timezone: '1'
  },
  {
    name: 'Guemar ',
    city: 'Guemar',
    country: 'Algeria',
    IATA: 'ELU',
    ICAO: 'DAUO',
    lat: '33.5113983154',
    lon: '6.77679014206',
    timezone: '1'
  },
  {
    name: 'Kumasi ',
    city: 'Kumasi',
    country: 'Ghana',
    IATA: 'KMS',
    ICAO: 'DGSI',
    lat: '6.714560031890869',
    lon: '-1.5908199548721313',
    timezone: '0'
  },
  {
    name: 'Heringsdorf ',
    city: 'Heringsdorf',
    country: 'Germany',
    IATA: 'HDF',
    ICAO: 'EDAH',
    lat: '53.8787002563',
    lon: '14.152299881',
    timezone: '1'
  },
  {
    name: 'Heide-B\u00fcsum ',
    city: 'B\u00fcsum',
    country: 'Germany',
    IATA: 'HEI',
    ICAO: 'EDXB',
    lat: '54.153331756600004',
    lon: '8.90166664124',
    timezone: '1'
  },
  {
    name: 'Helgoland-D\u00fcne ',
    city: 'Helgoland',
    country: 'Germany',
    IATA: 'HGL',
    ICAO: 'EDXH',
    lat: '54.185279846200004',
    lon: '7.91583299637',
    timezone: '1'
  },
  {
    name: 'Sein\u00e4joki ',
    city: 'Sein\u00e4joki / Ilmajoki',
    country: 'Finland',
    IATA: 'SJY',
    ICAO: 'EFSI',
    lat: '62.692101',
    lon: '22.8323',
    timezone: '2'
  },
  {
    name: 'Nottingham ',
    city: 'Nottingham',
    country: 'United Kingdom',
    IATA: 'NQT',
    ICAO: 'EGBN',
    lat: '52.91999816894531',
    lon: '-1.0791699886322021',
    timezone: '0'
  },
  {
    name: 'Campbeltown ',
    city: 'Campbeltown',
    country: 'United Kingdom',
    IATA: 'CAL',
    ICAO: 'EGEC',
    lat: '55.437198638916016',
    lon: '-5.686389923095703',
    timezone: '0'
  },
  {
    name: 'Eday ',
    city: 'Eday',
    country: 'United Kingdom',
    IATA: 'EOI',
    ICAO: 'EGED',
    lat: '59.19060134887695',
    lon: '-2.7722198963165283',
    timezone: '0'
  },
  {
    name: 'Fair Isle ',
    city: 'Fair Isle',
    country: 'United Kingdom',
    IATA: 'FIE',
    ICAO: 'EGEF',
    lat: '59.53580093383789',
    lon: '-1.628059983253479',
    timezone: '0'
  },
  {
    name: 'North Ronaldsay ',
    city: 'North Ronaldsay',
    country: 'United Kingdom',
    IATA: 'NRL',
    ICAO: 'EGEN',
    lat: '59.3675003052',
    lon: '-2.43443989754',
    timezone: '0'
  },
  {
    name: 'Papa Westray ',
    city: 'Papa Westray',
    country: 'United Kingdom',
    IATA: 'PPW',
    ICAO: 'EGEP',
    lat: '59.351699829100006',
    lon: '-2.9002799987800003',
    timezone: '0'
  },
  {
    name: 'Stronsay ',
    city: 'Stronsay',
    country: 'United Kingdom',
    IATA: 'SOY',
    ICAO: 'EGER',
    lat: '59.1553001404',
    lon: '-2.64139008522',
    timezone: '0'
  },
  {
    name: 'Sanday ',
    city: 'Sanday',
    country: 'United Kingdom',
    IATA: 'NDY',
    ICAO: 'EGES',
    lat: '59.250301361083984',
    lon: '-2.576669931411743',
    timezone: '0'
  },
  {
    name: 'Lerwick / Tingwall ',
    city: 'Lerwick',
    country: 'United Kingdom',
    IATA: 'LWK',
    ICAO: 'EGET',
    lat: '60.192199707',
    lon: '-1.24361002445',
    timezone: '0'
  },
  {
    name: 'Westray ',
    city: 'Westray',
    country: 'United Kingdom',
    IATA: 'WRY',
    ICAO: 'EGEW',
    lat: '59.3502998352',
    lon: '-2.95000004768',
    timezone: '0'
  },
  {
    name: "Land's End ",
    city: "Land's End",
    country: 'United Kingdom',
    IATA: 'LEQ',
    ICAO: 'EGHC',
    lat: '50.102798',
    lon: '-5.67056',
    timezone: '0'
  },
  {
    name: 'Penzance Heliport',
    city: 'Penzance',
    country: 'United Kingdom',
    IATA: 'PZE',
    ICAO: 'EGHK',
    lat: '50.128101',
    lon: '-5.51845',
    timezone: '0'
  },
  {
    name: 'Anglesey ',
    city: 'Angelsey',
    country: 'United Kingdom',
    IATA: 'VLY',
    ICAO: 'EGOV',
    lat: '53.2481002808',
    lon: '-4.53533983231',
    timezone: '0'
  },
  {
    name: 'Barra ',
    city: 'Barra',
    country: 'United Kingdom',
    IATA: 'BRR',
    ICAO: 'EGPR',
    lat: '57.0228',
    lon: '-7.44306',
    timezone: '0'
  },
  {
    name: 'Donegal ',
    city: 'Dongloe',
    country: 'Ireland',
    IATA: 'CFN',
    ICAO: 'EIDL',
    lat: '55.0442008972168',
    lon: '-8.340999603271484',
    timezone: '0'
  },
  {
    name: 'Weston ',
    city: 'Leixlip',
    country: 'Ireland',
    IATA: '\\N',
    ICAO: 'EIWT',
    lat: '53.3521995544',
    lon: '-6.48611021042',
    timezone: '0'
  },
  {
    name: 'Sindal ',
    city: 'Sindal',
    country: 'Denmark',
    IATA: 'CNL',
    ICAO: 'EKSN',
    lat: '57.503502',
    lon: '10.2294',
    timezone: '1'
  },
  {
    name: 'Leknes ',
    city: 'Leknes',
    country: 'Norway',
    IATA: 'LKN',
    ICAO: 'ENLK',
    lat: '68.152496337891',
    lon: '13.609399795532',
    timezone: '1'
  },
  {
    name: 'Namsos H\u00f8knes\u00f8ra ',
    city: 'Namsos',
    country: 'Norway',
    IATA: 'OSY',
    ICAO: 'ENNM',
    lat: '64.472198486328',
    lon: '11.57859992981',
    timezone: '1'
  },
  {
    name: 'R\u00f8st ',
    city: 'R\u00f8st',
    country: 'Norway',
    IATA: 'RET',
    ICAO: 'ENRS',
    lat: '67.527801513672',
    lon: '12.103300094604',
    timezone: '1'
  },
  {
    name: 'Sandane  (Anda)',
    city: 'Sandane',
    country: 'Norway',
    IATA: 'SDN',
    ICAO: 'ENSD',
    lat: '61.830001831055',
    lon: '6.1058301925659',
    timezone: '1'
  },
  {
    name: 'Sogndal ',
    city: 'Sogndal',
    country: 'Norway',
    IATA: 'SOG',
    ICAO: 'ENSG',
    lat: '61.156101',
    lon: '7.13778',
    timezone: '1'
  },
  {
    name: 'Svolv\u00e6r Helle ',
    city: 'Svolv\u00e6r',
    country: 'Norway',
    IATA: 'SVJ',
    ICAO: 'ENSH',
    lat: '68.243301391602',
    lon: '14.669199943542',
    timezone: '1'
  },
  {
    name: 'S\u00f8rkjosen ',
    city: 'Sorkjosen',
    country: 'Norway',
    IATA: 'SOJ',
    ICAO: 'ENSR',
    lat: '69.786796569824',
    lon: '20.959400177002',
    timezone: '1'
  },
  {
    name: 'V\u00e6r\u00f8y Heliport',
    city: 'V\u00e6r\u00f8y',
    country: 'Norway',
    IATA: 'VRY',
    ICAO: 'ENVR',
    lat: '67.654555',
    lon: '12.727257',
    timezone: '1'
  },
  {
    name: 'Bydgoszcz Ignacy Jan Paderewski ',
    city: 'Bydgoszcz',
    country: 'Poland',
    IATA: 'BZG',
    ICAO: 'EPBY',
    lat: '53.096801757799994',
    lon: '17.9776992798',
    timezone: '1'
  },
  {
    name: '\u0141\u00f3d\u017a W\u0142adys\u0142aw Reymont ',
    city: 'Lodz',
    country: 'Poland',
    IATA: 'LCJ',
    ICAO: 'EPLL',
    lat: '51.721900939899996',
    lon: '19.3980998993',
    timezone: '1'
  },
  {
    name: '\u00c5re \u00d6stersund ',
    city: '\u00d6stersund',
    country: 'Sweden',
    IATA: 'OSD',
    ICAO: 'ESNZ',
    lat: '63.194400787354',
    lon: '14.50030040741',
    timezone: '1'
  },
  {
    name: 'Hagfors ',
    city: 'Hagfors',
    country: 'Sweden',
    IATA: 'HFS',
    ICAO: 'ESOH',
    lat: '60.02009963989258',
    lon: '13.578900337219238',
    timezone: '1'
  },
  {
    name: 'Karlstad ',
    city: 'Karlstad',
    country: 'Sweden',
    IATA: 'KSD',
    ICAO: 'ESOK',
    lat: '59.444698333699996',
    lon: '13.337400436400001',
    timezone: '1'
  },
  {
    name: 'Torsby ',
    city: 'Torsby',
    country: 'Sweden',
    IATA: 'TYF',
    ICAO: 'ESST',
    lat: '60.1576004028',
    lon: '12.991299629199998',
    timezone: '1'
  },
  {
    name: '\u00c4ngelholm-Helsingborg ',
    city: '\u00c4ngelholm',
    country: 'Sweden',
    IATA: 'AGH',
    ICAO: 'ESTA',
    lat: '56.29610061645508',
    lon: '12.847100257873535',
    timezone: '1'
  },
  {
    name: 'Storuman ',
    city: 'Mohed',
    country: 'Sweden',
    IATA: 'SQO',
    ICAO: 'ESUD',
    lat: '64.96089935302734',
    lon: '17.69659996032715',
    timezone: '1'
  },
  {
    name: 'Hemavan ',
    city: 'Hemavan',
    country: 'Sweden',
    IATA: 'HMV',
    ICAO: 'ESUT',
    lat: '65.80609893798828',
    lon: '15.082799911499023',
    timezone: '1'
  },
  {
    name: 'Ventspils Intl ',
    city: 'Ventspils',
    country: 'Latvia',
    IATA: 'VNT',
    ICAO: 'EVVA',
    lat: '57.35779953',
    lon: '21.5442008972',
    timezone: '2'
  },
  {
    name: 'Rand ',
    city: 'Johannesburg',
    country: 'South Africa',
    IATA: 'QRA',
    ICAO: 'FAGM',
    lat: '-26.2425003052',
    lon: '28.1511993408',
    timezone: '2'
  },
  {
    name: 'Kruger Mpumalanga Intl ',
    city: 'Mpumalanga',
    country: 'South Africa',
    IATA: 'MQP',
    ICAO: 'FAKN',
    lat: '-25.3831996918',
    lon: '31.1056003571',
    timezone: '2'
  },
  {
    name: 'Malamala ',
    city: 'Malamala',
    country: 'South Africa',
    IATA: 'AAM',
    ICAO: 'FAMD',
    lat: '-24.818099975585938',
    lon: '31.544599533081055',
    timezone: '2'
  },
  {
    name: 'Mmabatho Intl ',
    city: 'Mafeking',
    country: 'South Africa',
    IATA: 'MBD',
    ICAO: 'FAMM',
    lat: '-25.798400878900004',
    lon: '25.548000335699996',
    timezone: '2'
  },
  {
    name: 'Ghanzi ',
    city: 'Ghanzi',
    country: 'Botswana',
    IATA: 'GNZ',
    ICAO: 'FBGZ',
    lat: '-21.6924991607666',
    lon: '21.658100128173828',
    timezone: '2'
  },
  {
    name: 'Orapa ',
    city: 'Orapa',
    country: 'Botswana',
    IATA: 'ORP',
    ICAO: 'FBOR',
    lat: '-21.266701',
    lon: '25.3167',
    timezone: '2'
  },
  {
    name: 'Shakawe ',
    city: 'Shakawe',
    country: 'Botswana',
    IATA: 'SWX',
    ICAO: 'FBSW',
    lat: '-18.373899459838867',
    lon: '21.832599639892578',
    timezone: '2'
  },
  {
    name: 'Limpopo Valley ',
    city: 'Tuli Lodge',
    country: 'Botswana',
    IATA: 'TLD',
    ICAO: 'FBTL',
    lat: '-22.189199447599997',
    lon: '29.126899719199997',
    timezone: '2'
  },
  {
    name: 'Ngot Nzoungou ',
    city: 'Loubomo',
    country: 'Congo (Brazzaville)',
    IATA: 'DIS',
    ICAO: 'FCPL',
    lat: '-4.20635',
    lon: '12.6599',
    timezone: '1'
  },
  {
    name: 'Chipata ',
    city: 'Chipata',
    country: 'Zambia',
    IATA: 'CIP',
    ICAO: 'FLCP',
    lat: '-13.558300018310547',
    lon: '32.58720016479492',
    timezone: '2'
  },
  {
    name: 'Los Alamitos Army Air Field',
    city: 'Solwesi',
    country: 'Zambia',
    IATA: '\\N',
    ICAO: 'KSLI',
    lat: '33.79000092',
    lon: '-118.052002',
    timezone: '-8'
  },
  {
    name: 'Iconi ',
    city: 'Moroni',
    country: 'Comoros',
    IATA: 'YVA',
    ICAO: 'FMCN',
    lat: '-11.710800170899999',
    lon: '43.2439002991',
    timezone: '3'
  },
  {
    name: 'Antsalova ',
    city: 'Antsalova',
    country: 'Madagascar',
    IATA: 'WAQ',
    ICAO: 'FMMG',
    lat: '-18.701273',
    lon: '44.614921',
    timezone: '3'
  },
  {
    name: 'Ankavandra ',
    city: 'Ankavandra',
    country: 'Madagascar',
    IATA: 'JVA',
    ICAO: 'FMMK',
    lat: '-18.80501',
    lon: '45.273467',
    timezone: '3'
  },
  {
    name: 'Belo sur Tsiribihina ',
    city: 'Belo sur Tsiribihina',
    country: 'Madagascar',
    IATA: 'BMD',
    ICAO: 'FMML',
    lat: '-19.6867008209',
    lon: '44.541900634799994',
    timezone: '3'
  },
  {
    name: 'Maintirano ',
    city: 'Maintirano',
    country: 'Madagascar',
    IATA: 'MXT',
    ICAO: 'FMMO',
    lat: '-18.049999',
    lon: '44.033001',
    timezone: '3'
  },
  {
    name: 'Morafenobe ',
    city: 'Morafenobe',
    country: 'Madagascar',
    IATA: 'TVA',
    ICAO: 'FMMR',
    lat: '-17.850083',
    lon: '44.920467',
    timezone: '3'
  },
  {
    name: 'Tambohorano ',
    city: 'Tambohorano',
    country: 'Madagascar',
    IATA: 'WTA',
    ICAO: 'FMMU',
    lat: '-17.47610092163086',
    lon: '43.972801208496094',
    timezone: '3'
  },
  {
    name: 'Tsiroanomandidy ',
    city: 'Tsiroanomandidy',
    country: 'Madagascar',
    IATA: 'WTS',
    ICAO: 'FMMX',
    lat: '-18.759677',
    lon: '46.054065',
    timezone: '3'
  },
  {
    name: 'Ambatondrazaka ',
    city: 'Ambatondrazaka',
    country: 'Madagascar',
    IATA: 'WAM',
    ICAO: 'FMMZ',
    lat: '-17.795378',
    lon: '48.442583',
    timezone: '3'
  },
  {
    name: 'Port Berg\u00e9 ',
    city: 'Port Berg\u00e9',
    country: 'Madagascar',
    IATA: 'WPB',
    ICAO: 'FMNG',
    lat: '-15.584286',
    lon: '47.623587',
    timezone: '3'
  },
  {
    name: 'Ambanja ',
    city: 'Ambanja',
    country: 'Madagascar',
    IATA: '\\N',
    ICAO: 'FMNJ',
    lat: '-13.645705',
    lon: '48.459427',
    timezone: '3'
  },
  {
    name: 'Soalala ',
    city: 'Soalala',
    country: 'Madagascar',
    IATA: 'DWB',
    ICAO: 'FMNO',
    lat: '-16.10169',
    lon: '45.358837',
    timezone: '3'
  },
  {
    name: 'Mampikony ',
    city: 'Mampikony',
    country: 'Madagascar',
    IATA: 'WMP',
    ICAO: 'FMNP',
    lat: '-16.0722693402',
    lon: '47.644164562200004',
    timezone: '3'
  },
  {
    name: 'Nasa Shuttle Landing Facility ',
    city: 'Tsaratanana',
    country: 'Madagascar',
    IATA: '\\N',
    ICAO: 'KTTS',
    lat: '28.614999771118164',
    lon: '-80.69450378417969',
    timezone: '-5'
  },
  {
    name: 'Mandritsara ',
    city: 'Mandritsara',
    country: 'Madagascar',
    IATA: 'WMA',
    ICAO: 'FMNX',
    lat: '-15.833049',
    lon: '48.833284',
    timezone: '3'
  },
  {
    name: 'Manja ',
    city: 'Manja',
    country: 'Madagascar',
    IATA: 'MJA',
    ICAO: 'FMSJ',
    lat: '-21.426105',
    lon: '44.316509',
    timezone: '3'
  },
  {
    name: 'Catumbela ',
    city: 'Catumbela',
    country: 'Angola',
    IATA: 'CBT',
    ICAO: 'FNCT',
    lat: '-12.4792',
    lon: '13.4869',
    timezone: '1'
  },
  {
    name: 'Dundo ',
    city: 'Dundo',
    country: 'Angola',
    IATA: 'DUE',
    ICAO: 'FNDU',
    lat: '-7.400889873504639',
    lon: '20.818500518798828',
    timezone: '1'
  },
  {
    name: 'Ngjiva Pereira ',
    city: 'Ondjiva',
    country: 'Angola',
    IATA: 'VPE',
    ICAO: 'FNGI',
    lat: '-17.0435009003',
    lon: '15.683799743700002',
    timezone: '1'
  },
  {
    name: 'Namibe ',
    city: 'Mocamedes',
    country: 'Angola',
    IATA: 'MSZ',
    ICAO: 'FNMO',
    lat: '-15.261199951171875',
    lon: '12.14680004119873',
    timezone: '1'
  },
  {
    name: 'Koulamoutou Mabimbi ',
    city: 'Koulamoutou',
    country: 'Gabon',
    IATA: 'KOU',
    ICAO: 'FOGK',
    lat: '-1.1846100091934',
    lon: '12.441300392151',
    timezone: '1'
  },
  {
    name: 'Mouilla Ville ',
    city: 'Mouila',
    country: 'Gabon',
    IATA: 'MJL',
    ICAO: 'FOGM',
    lat: '-1.845139980316162',
    lon: '11.056699752807617',
    timezone: '1'
  },
  {
    name: 'Tchibanga ',
    city: 'Tchibanga',
    country: 'Gabon',
    IATA: 'TCH',
    ICAO: 'FOOT',
    lat: '-2.8499999046325684',
    lon: '11.017000198364258',
    timezone: '1'
  },
  {
    name: 'Chimoio ',
    city: 'Chimoio',
    country: 'Mozambique',
    IATA: 'VPY',
    ICAO: 'FQCH',
    lat: '-19.15130043029785',
    lon: '33.42900085449219',
    timezone: '2'
  },
  {
    name: 'Sarh ',
    city: 'Sarh',
    country: 'Chad',
    IATA: 'SRH',
    ICAO: 'FTTA',
    lat: '9.14444',
    lon: '18.374399',
    timezone: '1'
  },
  {
    name: 'Club Makokola ',
    city: 'Club Makokola',
    country: 'Malawi',
    IATA: 'CMK',
    ICAO: 'FWCM',
    lat: '-14.306900024414062',
    lon: '35.13249969482422',
    timezone: '2'
  },
  {
    name: 'Luderitz ',
    city: 'Luderitz',
    country: 'Namibia',
    IATA: 'LUD',
    ICAO: 'FYLZ',
    lat: '-26.687400817871094',
    lon: '15.242899894714355',
    timezone: '1'
  },
  {
    name: 'Ondangwa ',
    city: 'Ondangwa',
    country: 'Namibia',
    IATA: 'OND',
    ICAO: 'FYOA',
    lat: '-17.878201',
    lon: '15.9526',
    timezone: '1'
  },
  {
    name: 'Oranjemund ',
    city: 'Oranjemund',
    country: 'Namibia',
    IATA: 'OMD',
    ICAO: 'FYOG',
    lat: '-28.5847',
    lon: '16.446699',
    timezone: '1'
  },
  {
    name: 'Swakopmund ',
    city: 'Swakopmund',
    country: 'Namibia',
    IATA: 'SWP',
    ICAO: 'FYSM',
    lat: '-22.66189956665',
    lon: '14.568099975586',
    timezone: '1'
  },
  {
    name: 'Eros ',
    city: 'Windhoek',
    country: 'Namibia',
    IATA: 'ERS',
    ICAO: 'FYWE',
    lat: '-22.612199783325195',
    lon: '17.080400466918945',
    timezone: '1'
  },
  {
    name: 'Boma ',
    city: 'Boma',
    country: 'Congo (Kinshasa)',
    IATA: 'BOA',
    ICAO: 'FZAJ',
    lat: '-5.854000091552734',
    lon: '13.064000129699707',
    timezone: '1'
  },
  {
    name: 'Tshimpi ',
    city: 'Matadi',
    country: 'Congo (Kinshasa)',
    IATA: 'MAT',
    ICAO: 'FZAM',
    lat: '-5.799610137939453',
    lon: '13.440400123596191',
    timezone: '1'
  },
  {
    name: 'Inongo ',
    city: 'Inongo',
    country: 'Congo (Kinshasa)',
    IATA: 'INO',
    ICAO: 'FZBA',
    lat: '-1.947219967842102',
    lon: '18.28580093383789',
    timezone: '1'
  },
  {
    name: 'Nioki ',
    city: 'Nioki',
    country: 'Congo (Kinshasa)',
    IATA: 'NIO',
    ICAO: 'FZBI',
    lat: '-2.7174999713897705',
    lon: '17.68470001220703',
    timezone: '1'
  },
  {
    name: 'Basango Mboliasa ',
    city: 'Kiri',
    country: 'Congo (Kinshasa)',
    IATA: 'KRZ',
    ICAO: 'FZBT',
    lat: '-1.434999942779541',
    lon: '19.02400016784668',
    timezone: '1'
  },
  {
    name: 'Basankusu ',
    city: 'Basankusu',
    country: 'Congo (Kinshasa)',
    IATA: 'BSU',
    ICAO: 'FZEN',
    lat: '1.2247200012207031',
    lon: '19.78890037536621',
    timezone: '1'
  },
  {
    name: 'Tshikapa ',
    city: 'Tshikapa',
    country: 'Congo (Kinshasa)',
    IATA: 'TSH',
    ICAO: 'FZUK',
    lat: '-6.43833',
    lon: '20.794701',
    timezone: '2'
  },
  {
    name: 'Lodja ',
    city: 'Lodja',
    country: 'Congo (Kinshasa)',
    IATA: 'LJA',
    ICAO: 'FZVA',
    lat: '-3.4170000553131104',
    lon: '23.450000762939453',
    timezone: '2'
  },
  {
    name: 'Ilebo ',
    city: 'Ilebo',
    country: 'Congo (Kinshasa)',
    IATA: 'PFR',
    ICAO: 'FZVS',
    lat: '-4.329919',
    lon: '20.590124',
    timezone: '2'
  },
  {
    name: 'Outer Skerries ',
    city: 'Outer Skerries',
    country: 'United Kingdom',
    IATA: 'OUK',
    ICAO: 'EGOU',
    lat: '60.4252',
    lon: '-0.75',
    timezone: '0'
  },
  {
    name: 'La Gomera ',
    city: 'La Gomera',
    country: 'Spain',
    IATA: 'GMZ',
    ICAO: 'GCGM',
    lat: '28.029600143432617',
    lon: '-17.214599609375',
    timezone: '0'
  },
  {
    name: 'Sherbro Intl ',
    city: 'Bonthe',
    country: 'Sierra Leone',
    IATA: 'BTE',
    ICAO: 'GFBN',
    lat: '7.5324201583862305',
    lon: '-12.518899917602539',
    timezone: '0'
  },
  {
    name: 'Bo ',
    city: 'Bo',
    country: 'Sierra Leone',
    IATA: 'KBS',
    ICAO: 'GFBO',
    lat: '7.944399833679199',
    lon: '-11.76099967956543',
    timezone: '0'
  },
  {
    name: 'Kenema ',
    city: 'Kenema',
    country: 'Sierra Leone',
    IATA: 'KEN',
    ICAO: 'GFKE',
    lat: '7.891290187835693',
    lon: '-11.176600456237793',
    timezone: '0'
  },
  {
    name: 'Osvaldo Vieira Intl ',
    city: 'Bissau',
    country: 'Guinea-Bissau',
    IATA: 'OXB',
    ICAO: 'GGOV',
    lat: '11.894800186157227',
    lon: '-15.65369987487793',
    timezone: '0'
  },
  {
    name: 'Smara ',
    city: 'Smara',
    country: 'Western Sahara',
    IATA: 'SMW',
    ICAO: 'GMMA',
    lat: '26.7318',
    lon: '-11.6847',
    timezone: '0'
  },
  {
    name: 'Dakhla ',
    city: 'Dakhla',
    country: 'Western Sahara',
    IATA: 'VIL',
    ICAO: 'GMMH',
    lat: '23.7183',
    lon: '-15.932',
    timezone: '0'
  },
  {
    name: 'Mogador ',
    city: 'Essadouira',
    country: 'Morocco',
    IATA: 'ESU',
    ICAO: 'GMMI',
    lat: '31.3974990845',
    lon: '-9.6816701889',
    timezone: '0'
  },
  {
    name: 'Hassan I ',
    city: 'El Aai\u00fan',
    country: 'Western Sahara',
    IATA: 'EUN',
    ICAO: 'GMML',
    lat: '27.151699',
    lon: '-13.2192',
    timezone: '0'
  },
  {
    name: 'Nador Intl ',
    city: 'El Aroui',
    country: 'Morocco',
    IATA: 'NDR',
    ICAO: 'GMMW',
    lat: '34.988800048799995',
    lon: '-3.0282099247',
    timezone: '0'
  },
  {
    name: 'Baco ',
    city: 'Baco',
    country: 'Ethiopia',
    IATA: 'BCO',
    ICAO: 'HABC',
    lat: '5.78287',
    lon: '36.562',
    timezone: '3'
  },
  {
    name: 'Beica ',
    city: 'Beica',
    country: 'Ethiopia',
    IATA: 'BEI',
    ICAO: 'HABE',
    lat: '9.38638973236084',
    lon: '34.52190017700195',
    timezone: '3'
  },
  {
    name: 'Combolcha ',
    city: 'Dessie',
    country: 'Ethiopia',
    IATA: 'DSE',
    ICAO: 'HADC',
    lat: '11.082500457763672',
    lon: '39.71139907836914',
    timezone: '3'
  },
  {
    name: 'Dembidollo ',
    city: 'Dembidollo',
    country: 'Ethiopia',
    IATA: 'DEM',
    ICAO: 'HADD',
    lat: '8.553999900817871',
    lon: '34.858001708984375',
    timezone: '3'
  },
  {
    name: 'Gode ',
    city: 'Gode',
    country: 'Ethiopia',
    IATA: 'GDE',
    ICAO: 'HAGO',
    lat: '5.93513011932',
    lon: '43.5786018372',
    timezone: '3'
  },
  {
    name: 'Gore ',
    city: 'Gore',
    country: 'Ethiopia',
    IATA: 'GOR',
    ICAO: 'HAGR',
    lat: '8.1614',
    lon: '35.5529',
    timezone: '3'
  },
  {
    name: 'Kabri Dehar ',
    city: 'Kabri Dehar',
    country: 'Ethiopia',
    IATA: 'ABK',
    ICAO: 'HAKD',
    lat: '6.734',
    lon: '44.252998',
    timezone: '3'
  },
  {
    name: 'Mizan Teferi ',
    city: 'Mizan Teferi',
    country: 'Ethiopia',
    IATA: 'MTF',
    ICAO: 'HAMT',
    lat: '6.9571',
    lon: '35.5547',
    timezone: '3'
  },
  {
    name: 'Tippi ',
    city: 'Tippi',
    country: 'Ethiopia',
    IATA: 'TIE',
    ICAO: 'HATP',
    lat: '7.2024',
    lon: '35.415',
    timezone: '3'
  },
  {
    name: 'Alula ',
    city: 'Alula',
    country: 'Somalia',
    IATA: 'ALU',
    ICAO: 'HCMA',
    lat: '11.9582',
    lon: '50.748',
    timezone: '3'
  },
  {
    name: 'Bosaso ',
    city: 'Bosaso',
    country: 'Somalia',
    IATA: 'BSA',
    ICAO: 'HCMF',
    lat: '11.275300025939941',
    lon: '49.14939880371094',
    timezone: '3'
  },
  {
    name: 'Aden Adde Intl ',
    city: 'Mogadishu',
    country: 'Somalia',
    IATA: 'MGQ',
    ICAO: 'HCMM',
    lat: '2.0144400596618652',
    lon: '45.3046989440918',
    timezone: '3'
  },
  {
    name: 'Galcaio ',
    city: 'Galcaio',
    country: 'Somalia',
    IATA: 'GLK',
    ICAO: 'HCMR',
    lat: '6.78082990646',
    lon: '47.45470047',
    timezone: '3'
  },
  {
    name: 'Burao ',
    city: 'Burao',
    country: 'Somalia',
    IATA: 'BUO',
    ICAO: 'HCMV',
    lat: '9.5275',
    lon: '45.5549',
    timezone: '3'
  },
  {
    name: 'El Arish Intl ',
    city: 'El Arish',
    country: 'Egypt',
    IATA: 'AAC',
    ICAO: 'HEAR',
    lat: '31.073299408',
    lon: '33.8358001709',
    timezone: '2'
  },
  {
    name: 'Assiut Intl ',
    city: 'Asyut',
    country: 'Egypt',
    IATA: 'ATZ',
    ICAO: 'HEAT',
    lat: '27.0464992523',
    lon: '31.0119991302',
    timezone: '2'
  },
  {
    name: 'Amboseli ',
    city: 'Amboseli National Park',
    country: 'Kenya',
    IATA: 'ASV',
    ICAO: 'HKAM',
    lat: '-2.645050048828125',
    lon: '37.25310134887695',
    timezone: '3'
  },
  {
    name: 'Lokichoggio ',
    city: 'Lokichoggio',
    country: 'Kenya',
    IATA: 'LKG',
    ICAO: 'HKLK',
    lat: '4.20412015914917',
    lon: '34.348201751708984',
    timezone: '3'
  },
  {
    name: 'Malindi ',
    city: 'Malindi',
    country: 'Kenya',
    IATA: 'MYD',
    ICAO: 'HKML',
    lat: '-3.2293100357055664',
    lon: '40.10169982910156',
    timezone: '3'
  },
  {
    name: 'Nanyuki ',
    city: 'Nanyuki',
    country: 'Kenya',
    IATA: 'NYK',
    ICAO: 'HKNY',
    lat: '-0.06239889934659004',
    lon: '37.04100799560547',
    timezone: '3'
  },
  {
    name: 'Gardabya ',
    city: 'Sirt',
    country: 'Libya',
    IATA: 'SRX',
    ICAO: 'HLGD',
    lat: '31.063499450699997',
    lon: '16.5949993134',
    timezone: '2'
  },
  {
    name: 'Gamal Abdel Nasser ',
    city: 'Tobruk',
    country: 'Libya',
    IATA: 'TOB',
    ICAO: 'HLGN',
    lat: '31.861',
    lon: '23.907',
    timezone: '2'
  },
  {
    name: 'Mitiga ',
    city: 'Tripoli',
    country: 'Libya',
    IATA: 'MJI',
    ICAO: 'HLLM',
    lat: '32.894100189208984',
    lon: '13.276000022888184',
    timezone: '2'
  },
  {
    name: 'La Abraq ',
    city: "Al Bayda'",
    country: 'Libya',
    IATA: 'LAQ',
    ICAO: 'HLLQ',
    lat: '32.788700103759766',
    lon: '21.96430015563965',
    timezone: '2'
  },
  {
    name: 'Atbara ',
    city: 'Atbara',
    country: 'Sudan',
    IATA: 'ATB',
    ICAO: 'HSAT',
    lat: '17.710344314575195',
    lon: '34.0570182800293',
    timezone: '3'
  },
  {
    name: 'Nyala ',
    city: 'Nyala',
    country: 'Sudan',
    IATA: 'UYL',
    ICAO: 'HSNN',
    lat: '12.053500175476074',
    lon: '24.956199645996094',
    timezone: '3'
  },
  {
    name: 'Port Sudan New Intl ',
    city: 'Port Sudan',
    country: 'Sudan',
    IATA: 'PZU',
    ICAO: 'HSPN',
    lat: '19.4335994720459',
    lon: '37.234100341796875',
    timezone: '3'
  },
  {
    name: 'Bukoba ',
    city: 'Bukoba',
    country: 'Tanzania',
    IATA: 'BKZ',
    ICAO: 'HTBU',
    lat: '-1.332',
    lon: '31.8212',
    timezone: '3'
  },
  {
    name: 'Kigoma ',
    city: 'Kigoma',
    country: 'Tanzania',
    IATA: 'TKQ',
    ICAO: 'HTKA',
    lat: '-4.8862',
    lon: '29.6709',
    timezone: '3'
  },
  {
    name: 'Lindi ',
    city: 'Lindi',
    country: 'Tanzania',
    IATA: 'LDI',
    ICAO: 'HTLI',
    lat: '-9.85111',
    lon: '39.757801',
    timezone: '3'
  },
  {
    name: 'Musoma ',
    city: 'Musoma',
    country: 'Tanzania',
    IATA: 'MUZ',
    ICAO: 'HTMU',
    lat: '-1.503',
    lon: '33.8021',
    timezone: '3'
  },
  {
    name: 'Shinyanga ',
    city: 'Shinyanga',
    country: 'Tanzania',
    IATA: 'SHY',
    ICAO: 'HTSY',
    lat: '-3.6093',
    lon: '33.5035',
    timezone: '3'
  },
  {
    name: 'Tabora ',
    city: 'Tabora',
    country: 'Tanzania',
    IATA: 'TBO',
    ICAO: 'HTTB',
    lat: '-5.076389789581299',
    lon: '32.83330154418945',
    timezone: '3'
  },
  {
    name: 'Arua ',
    city: 'Arua',
    country: 'Uganda',
    IATA: 'RUA',
    ICAO: 'HUAR',
    lat: '3.049999952316284',
    lon: '30.91699981689453',
    timezone: '3'
  },
  {
    name: 'Gulu ',
    city: 'Gulu',
    country: 'Uganda',
    IATA: 'ULU',
    ICAO: 'HUGU',
    lat: '2.8055601119995117',
    lon: '32.27180099487305',
    timezone: '3'
  },
  {
    name: 'Diu ',
    city: 'Diu',
    country: 'India',
    IATA: 'DIU',
    ICAO: 'VA1P',
    lat: '20.71310043334961',
    lon: '70.92109680175781',
    timezone: '5.5'
  },
  {
    name: 'Aberdeen Regional ',
    city: 'Aberdeen',
    country: 'United States',
    IATA: 'ABR',
    ICAO: 'KABR',
    lat: '45.449100494384766',
    lon: '-98.42179870605469',
    timezone: '-6'
  },
  {
    name: 'Southwest Georgia Regional ',
    city: 'Albany',
    country: 'United States',
    IATA: 'ABY',
    ICAO: 'KABY',
    lat: '31.535499572753906',
    lon: '-84.19450378417969',
    timezone: '-5'
  },
  {
    name: 'Athens Ben Epps ',
    city: 'Athens',
    country: 'United States',
    IATA: 'AHN',
    ICAO: 'KAHN',
    lat: '33.94860076904297',
    lon: '-83.32630157470703',
    timezone: '-5'
  },
  {
    name: 'Alamogordo White Sands Regional ',
    city: 'Alamogordo',
    country: 'United States',
    IATA: 'ALM',
    ICAO: 'KALM',
    lat: '32.8399009705',
    lon: '-105.990997314',
    timezone: '-7'
  },
  {
    name: 'Waterloo Regional ',
    city: 'Waterloo',
    country: 'United States',
    IATA: 'ALO',
    ICAO: 'KALO',
    lat: '42.557098388671875',
    lon: '-92.40029907226562',
    timezone: '-6'
  },
  {
    name: 'Walla Walla Regional ',
    city: 'Walla Walla',
    country: 'United States',
    IATA: 'ALW',
    ICAO: 'KALW',
    lat: '46.09489822',
    lon: '-118.288002',
    timezone: '-8'
  },
  {
    name: 'Alpena County Regional ',
    city: 'Alpena',
    country: 'United States',
    IATA: 'APN',
    ICAO: 'KAPN',
    lat: '45.0780983',
    lon: '-83.56030273',
    timezone: '-5'
  },
  {
    name: 'Watertown Regional ',
    city: 'Watertown',
    country: 'United States',
    IATA: 'ATY',
    ICAO: 'KATY',
    lat: '44.91400146',
    lon: '-97.15470123',
    timezone: '-6'
  },
  {
    name: 'Bradford Regional ',
    city: 'Bradford',
    country: 'United States',
    IATA: 'BFD',
    ICAO: 'KBFD',
    lat: '41.8031005859375',
    lon: '-78.64009857177734',
    timezone: '-5'
  },
  {
    name: 'Western Neb. Rgnl/William B. Heilig ',
    city: 'Scottsbluff',
    country: 'United States',
    IATA: 'BFF',
    ICAO: 'KBFF',
    lat: '41.87400055',
    lon: '-103.5960007',
    timezone: '-7'
  },
  {
    name: 'Raleigh County Memorial ',
    city: 'Beckley',
    country: 'United States',
    IATA: 'BKW',
    ICAO: 'KBKW',
    lat: '37.787300109899995',
    lon: '-81.1241989136',
    timezone: '-5'
  },
  {
    name: 'Brunswick Golden Isles ',
    city: 'Brunswick',
    country: 'United States',
    IATA: 'BQK',
    ICAO: 'KBQK',
    lat: '31.258800506591797',
    lon: '-81.46649932861328',
    timezone: '-5'
  },
  {
    name: 'Southeast Iowa Regional ',
    city: 'Burlington',
    country: 'United States',
    IATA: 'BRL',
    ICAO: 'KBRL',
    lat: '40.783199310302734',
    lon: '-91.12550354003906',
    timezone: '-6'
  },
  {
    name: 'Jack Mc Namara Field ',
    city: 'Crescent City',
    country: 'United States',
    IATA: 'CEC',
    ICAO: 'KCEC',
    lat: '41.78020096',
    lon: '-124.2369995',
    timezone: '-8'
  },
  {
    name: 'Cape Girardeau Regional ',
    city: 'Cape Girardeau',
    country: 'United States',
    IATA: 'CGI',
    ICAO: 'KCGI',
    lat: '37.22529983520508',
    lon: '-89.57080078125',
    timezone: '-6'
  },
  {
    name: 'Chippewa County Intl ',
    city: 'Sault Ste Marie',
    country: 'United States',
    IATA: 'CIU',
    ICAO: 'KCIU',
    lat: '46.25080108642578',
    lon: '-84.47239685058594',
    timezone: '-5'
  },
  {
    name: 'North Central West Virginia ',
    city: 'Clarksburg',
    country: 'United States',
    IATA: 'CKB',
    ICAO: 'KCKB',
    lat: '39.2966003418',
    lon: '-80.2281036377',
    timezone: '-5'
  },
  {
    name: 'William R Fairchild Intl ',
    city: 'Port Angeles',
    country: 'United States',
    IATA: 'CLM',
    ICAO: 'KCLM',
    lat: '48.120201110839844',
    lon: '-123.5',
    timezone: '-8'
  },
  {
    name: 'Houghton County Memorial ',
    city: 'Hancock',
    country: 'United States',
    IATA: 'CMX',
    ICAO: 'KCMX',
    lat: '47.168399810791016',
    lon: '-88.48909759521484',
    timezone: '-5'
  },
  {
    name: 'Dodge City Regional ',
    city: 'Dodge City',
    country: 'United States',
    IATA: 'DDC',
    ICAO: 'KDDC',
    lat: '37.76340103149414',
    lon: '-99.9655990600586',
    timezone: '-6'
  },
  {
    name: 'DuBois Regional ',
    city: 'Du Bois',
    country: 'United States',
    IATA: 'DUJ',
    ICAO: 'KDUJ',
    lat: '41.17829895',
    lon: '-78.8986969',
    timezone: '-5'
  },
  {
    name: 'Chippewa Valley Regional ',
    city: 'Eau Claire',
    country: 'United States',
    IATA: 'EAU',
    ICAO: 'KEAU',
    lat: '44.86579895019531',
    lon: '-91.48429870605469',
    timezone: '-6'
  },
  {
    name: 'Elko Regional ',
    city: 'Elko',
    country: 'United States',
    IATA: 'EKO',
    ICAO: 'KEKO',
    lat: '40.82490158081055',
    lon: '-115.79199981689453',
    timezone: '-8'
  },
  {
    name: 'New Bedford Regional ',
    city: 'New Bedford',
    country: 'United States',
    IATA: 'EWB',
    ICAO: 'KEWB',
    lat: '41.67610168457031',
    lon: '-70.95690155029297',
    timezone: '-5'
  },
  {
    name: 'Fayetteville Regional Grannis Field',
    city: 'Fayetteville',
    country: 'United States',
    IATA: 'FAY',
    ICAO: 'KFAY',
    lat: '34.9911994934082',
    lon: '-78.88030242919922',
    timezone: '-5'
  },
  {
    name: 'Wokal Field Glasgow Intl ',
    city: 'Glasgow',
    country: 'United States',
    IATA: 'GGW',
    ICAO: 'KGGW',
    lat: '48.212502',
    lon: '-106.614998',
    timezone: '-7'
  },
  {
    name: 'Central Nebraska Regional ',
    city: 'Grand Island',
    country: 'United States',
    IATA: 'GRI',
    ICAO: 'KGRI',
    lat: '40.967498779296875',
    lon: '-98.30960083007812',
    timezone: '-6'
  },
  {
    name: 'Memorial Field',
    city: 'Hot Springs',
    country: 'United States',
    IATA: 'HOT',
    ICAO: 'KHOT',
    lat: '34.47800064086914',
    lon: '-93.09619903564453',
    timezone: '-6'
  },
  {
    name: 'Tri-State/Milton J. Ferguson Field',
    city: 'Huntington',
    country: 'United States',
    IATA: 'HTS',
    ICAO: 'KHTS',
    lat: '38.36669922',
    lon: '-82.55799866',
    timezone: '-5'
  },
  {
    name: 'Kili ',
    city: 'Kili Island',
    country: 'Marshall Islands',
    IATA: 'KIO',
    ICAO: 'Q51',
    lat: '5.644515',
    lon: '169.119507',
    timezone: '12'
  },
  {
    name: 'Kirksville Regional ',
    city: 'Kirksville',
    country: 'United States',
    IATA: 'IRK',
    ICAO: 'KIRK',
    lat: '40.09349822998047',
    lon: '-92.5448989868164',
    timezone: '-6'
  },
  {
    name: 'Jamestown Regional ',
    city: 'Jamestown',
    country: 'United States',
    IATA: 'JMS',
    ICAO: 'KJMS',
    lat: '46.92969894',
    lon: '-98.67819977',
    timezone: '-6'
  },
  {
    name: 'Laramie Regional ',
    city: 'Laramie',
    country: 'United States',
    IATA: 'LAR',
    ICAO: 'KLAR',
    lat: '41.31209945678711',
    lon: '-105.67500305175781',
    timezone: '-7'
  },
  {
    name: 'Arnold Palmer Regional ',
    city: 'Latrobe',
    country: 'United States',
    IATA: 'LBE',
    ICAO: 'KLBE',
    lat: '40.27590179',
    lon: '-79.40480042',
    timezone: '-5'
  },
  {
    name: 'North Platte Regional  Lee Bird Field',
    city: 'North Platte',
    country: 'United States',
    IATA: 'LBF',
    ICAO: 'KLBF',
    lat: '41.12620163',
    lon: '-100.6839981',
    timezone: '-6'
  },
  {
    name: 'Lebanon Municipal ',
    city: 'Lebanon',
    country: 'United States',
    IATA: 'LEB',
    ICAO: 'KLEB',
    lat: '43.626098632799994',
    lon: '-72.30419921880001',
    timezone: '-5'
  },
  {
    name: 'Crater Lake-Klamath Regional ',
    city: 'Klamath Falls',
    country: 'United States',
    IATA: 'LMT',
    ICAO: 'KLMT',
    lat: '42.156101',
    lon: '-121.733002',
    timezone: '-8'
  },
  {
    name: 'Lancaster ',
    city: 'Lancaster',
    country: 'United States',
    IATA: 'LNS',
    ICAO: 'KLNS',
    lat: '40.121700286865234',
    lon: '-76.29609680175781',
    timezone: '-5'
  },
  {
    name: 'Lewistown Municipal ',
    city: 'Lewistown',
    country: 'United States',
    IATA: 'LWT',
    ICAO: 'KLWT',
    lat: '47.04930114746094',
    lon: '-109.46700286865234',
    timezone: '-7'
  },
  {
    name: 'Lynchburg Regional Preston Glenn Field',
    city: 'Lynchburg',
    country: 'United States',
    IATA: 'LYH',
    ICAO: 'KLYH',
    lat: '37.326698303222656',
    lon: '-79.20040130615234',
    timezone: '-5'
  },
  {
    name: 'Muskegon County ',
    city: 'Muskegon',
    country: 'United States',
    IATA: 'MKG',
    ICAO: 'KMKG',
    lat: '43.16949844',
    lon: '-86.23819733',
    timezone: '-5'
  },
  {
    name: 'Frank Wiley Field',
    city: 'Miles City',
    country: 'United States',
    IATA: 'MLS',
    ICAO: 'KMLS',
    lat: '46.428001403808594',
    lon: '-105.88600158691406',
    timezone: '-7'
  },
  {
    name: 'Northwest Alabama Regional ',
    city: 'Muscle Shoals',
    country: 'United States',
    IATA: 'MSL',
    ICAO: 'KMSL',
    lat: '34.74530029',
    lon: '-87.61019897',
    timezone: '-6'
  },
  {
    name: 'Southwest Oregon Regional ',
    city: 'North Bend',
    country: 'United States',
    IATA: 'OTH',
    ICAO: 'KOTH',
    lat: '43.41709899902344',
    lon: '-124.24600219726562',
    timezone: '-8'
  },
  {
    name: 'Owensboro Daviess County ',
    city: 'Owensboro',
    country: 'United States',
    IATA: 'OWB',
    ICAO: 'KOWB',
    lat: '37.74010086',
    lon: '-87.16680145',
    timezone: '-6'
  },
  {
    name: 'Hattiesburg Laurel Regional ',
    city: 'Hattiesburg/Laurel',
    country: 'United States',
    IATA: 'PIB',
    ICAO: 'KPIB',
    lat: '31.467100143432617',
    lon: '-89.33709716796875',
    timezone: '-6'
  },
  {
    name: 'Pocatello Regional ',
    city: 'Pocatello',
    country: 'United States',
    IATA: 'PIH',
    ICAO: 'KPIH',
    lat: '42.9098014831543',
    lon: '-112.59600067138672',
    timezone: '-7'
  },
  {
    name: 'Pierre Regional ',
    city: 'Pierre',
    country: 'United States',
    IATA: 'PIR',
    ICAO: 'KPIR',
    lat: '44.38270187',
    lon: '-100.2860031',
    timezone: '-6'
  },
  {
    name: 'Pellston Regional  of Emmet County ',
    city: 'Pellston',
    country: 'United States',
    IATA: 'PLN',
    ICAO: 'KPLN',
    lat: '45.57089996',
    lon: '-84.79669952',
    timezone: '-5'
  },
  {
    name: 'Portsmouth Intl at Pease ',
    city: 'Portsmouth',
    country: 'United States',
    IATA: 'PSM',
    ICAO: 'KPSM',
    lat: '43.0778999329',
    lon: '-70.8233032227',
    timezone: '-5'
  },
  {
    name: 'Reading Regional Carl A Spaatz Field',
    city: 'Reading',
    country: 'United States',
    IATA: 'RDG',
    ICAO: 'KRDG',
    lat: '40.378501892089844',
    lon: '-75.96520233154297',
    timezone: '-5'
  },
  {
    name: 'Rhinelander Oneida County ',
    city: 'Rhinelander',
    country: 'United States',
    IATA: 'RHI',
    ICAO: 'KRHI',
    lat: '45.63119888305664',
    lon: '-89.46749877929688',
    timezone: '-6'
  },
  {
    name: 'Southwest Wyoming Regional ',
    city: 'Rock Springs',
    country: 'United States',
    IATA: 'RKS',
    ICAO: 'KRKS',
    lat: '41.5942',
    lon: '-109.065001',
    timezone: '-7'
  },
  {
    name: 'Rutland - Southern Vermont Regional ',
    city: 'Rutland',
    country: 'United States',
    IATA: 'RUT',
    ICAO: 'KRUT',
    lat: '43.52939987',
    lon: '-72.94960022',
    timezone: '-5'
  },
  {
    name: 'San Luis County Regional ',
    city: 'San Luis Obispo',
    country: 'United States',
    IATA: 'SBP',
    ICAO: 'KSBP',
    lat: '35.236801147499996',
    lon: '-120.641998291',
    timezone: '-8'
  },
  {
    name: 'Sheridan County ',
    city: 'Sheridan',
    country: 'United States',
    IATA: 'SHR',
    ICAO: 'KSHR',
    lat: '44.76919937133789',
    lon: '-106.9800033569336',
    timezone: '-7'
  },
  {
    name: 'Adirondack Regional ',
    city: 'Saranac Lake',
    country: 'United States',
    IATA: 'SLK',
    ICAO: 'KSLK',
    lat: '44.38529968261719',
    lon: '-74.2061996459961',
    timezone: '-5'
  },
  {
    name: 'Salina Municipal ',
    city: 'Salina',
    country: 'United States',
    IATA: 'SLN',
    ICAO: 'KSLN',
    lat: '38.79100036621094',
    lon: '-97.6521987915039',
    timezone: '-6'
  },
  {
    name: 'Santa Maria Pub/Capt G Allan Hancock Field',
    city: 'Santa Maria',
    country: 'United States',
    IATA: 'SMX',
    ICAO: 'KSMX',
    lat: '34.89889908',
    lon: '-120.4570007',
    timezone: '-8'
  },
  {
    name: 'Tupelo Regional ',
    city: 'Tupelo',
    country: 'United States',
    IATA: 'TUP',
    ICAO: 'KTUP',
    lat: '34.26810073852539',
    lon: '-88.7698974609375',
    timezone: '-6'
  },
  {
    name: 'Quincy Regional Baldwin Field',
    city: 'Quincy',
    country: 'United States',
    IATA: 'UIN',
    ICAO: 'KUIN',
    lat: '39.94269943',
    lon: '-91.19460297',
    timezone: '-6'
  },
  {
    name: 'Victoria Regional ',
    city: 'Victoria',
    country: 'United States',
    IATA: 'VCT',
    ICAO: 'KVCT',
    lat: '28.85260009765625',
    lon: '-96.91850280761719',
    timezone: '-6'
  },
  {
    name: 'Valdosta Regional ',
    city: 'Valdosta',
    country: 'United States',
    IATA: 'VLD',
    ICAO: 'KVLD',
    lat: '30.782499313354492',
    lon: '-83.27670288085938',
    timezone: '-5'
  },
  {
    name: 'Worland Municipal ',
    city: 'Worland',
    country: 'United States',
    IATA: 'WRL',
    ICAO: 'KWRL',
    lat: '43.9656982421875',
    lon: '-107.95099639892578',
    timezone: '-7'
  },
  {
    name: 'Yakima Air Terminal McAllister Field',
    city: 'Yakima',
    country: 'United States',
    IATA: 'YKM',
    ICAO: 'KYKM',
    lat: '46.56819916',
    lon: '-120.5439987',
    timezone: '-8'
  },
  {
    name: 'Ercan Intl ',
    city: 'Nicosia',
    country: 'Cyprus',
    IATA: 'ECN',
    ICAO: 'LCEN',
    lat: '35.154701232910156',
    lon: '33.49610137939453',
    timezone: '2'
  },
  {
    name: 'Logro\u00f1o-Agoncillo ',
    city: 'Logro\u00f1o-Agoncillo',
    country: 'Spain',
    IATA: 'RJL',
    ICAO: 'LELO',
    lat: '42.4609534888',
    lon: '-2.32223510742',
    timezone: '1'
  },
  {
    name: "\u00cele d'Yeu ",
    city: "\u00cele d'Yeu",
    country: 'France',
    IATA: 'IDY',
    ICAO: 'LFEY',
    lat: '46.71860122680664',
    lon: '-2.3911099433898926',
    timezone: '1'
  },
  {
    name: 'Angers-Loire ',
    city: 'Angers/Marc\u00e9',
    country: 'France',
    IATA: 'ANE',
    ICAO: 'LFJR',
    lat: '47.560299',
    lon: '-0.312222',
    timezone: '1'
  },
  {
    name: 'La M\u00f4le ',
    city: 'La M\u00f4le',
    country: 'France',
    IATA: 'LTT',
    ICAO: 'LFTZ',
    lat: '43.205399',
    lon: '6.482',
    timezone: '1'
  },
  {
    name: 'Syros ',
    city: 'Syros Island',
    country: 'Greece',
    IATA: 'JSY',
    ICAO: 'LGSO',
    lat: '37.4227981567',
    lon: '24.950899124099998',
    timezone: '2'
  },
  {
    name: 'P\u00e9cs-Pog\u00e1ny ',
    city: 'P\u00e9cs-Pog\u00e1ny',
    country: 'Hungary',
    IATA: 'PEV',
    ICAO: 'LHPP',
    lat: '45.990898',
    lon: '18.240996',
    timezone: '1'
  },
  {
    name: 'Gy\u0151r-P\u00e9r Intl ',
    city: 'Gy\u0151r',
    country: 'Hungary',
    IATA: '\\N',
    ICAO: 'LHPR',
    lat: '47.624401',
    lon: '17.813601',
    timezone: '1'
  },
  {
    name: 'S\u00e1rmell\u00e9k Intl ',
    city: 'S\u00e1rmell\u00e9k',
    country: 'Hungary',
    IATA: 'SOB',
    ICAO: 'LHSM',
    lat: '46.686391',
    lon: '17.159084',
    timezone: '1'
  },
  {
    name: 'Aosta ',
    city: 'Aosta',
    country: 'Italy',
    IATA: 'AOT',
    ICAO: 'LIMW',
    lat: '45.738499',
    lon: '7.36872',
    timezone: '1'
  },
  {
    name: "Salerno Costa d'Amalfi ",
    city: 'Salerno',
    country: 'Italy',
    IATA: 'QSR',
    ICAO: 'LIRI',
    lat: '40.620399',
    lon: '14.9113',
    timezone: '1'
  },
  {
    name: 'Corvo ',
    city: 'Corvo',
    country: 'Portugal',
    IATA: 'CVU',
    ICAO: 'LPCR',
    lat: '39.671501',
    lon: '-31.1136',
    timezone: '-1'
  },
  {
    name: 'Banja Luka Intl ',
    city: 'Banja Luka',
    country: 'Bosnia and Herzegovina',
    IATA: 'BNX',
    ICAO: 'LQBK',
    lat: '44.94139862060547',
    lon: '17.297500610351562',
    timezone: '1'
  },
  {
    name: 'U\u015fak ',
    city: 'Usak',
    country: 'Turkey',
    IATA: 'USQ',
    ICAO: 'LTBO',
    lat: '38.68149948120117',
    lon: '29.47170066833496',
    timezone: '3'
  },
  {
    name: 'Kars ',
    city: 'Kars',
    country: 'Turkey',
    IATA: 'KSY',
    ICAO: 'LTCF',
    lat: '40.562198638916016',
    lon: '43.1150016784668',
    timezone: '3'
  },
  {
    name: '\u015eanl\u0131urfa ',
    city: 'Sanliurfa',
    country: 'Turkey',
    IATA: 'SFQ',
    ICAO: 'LTCH',
    lat: '37.09429931640625',
    lon: '38.84709930419922',
    timezone: '3'
  },
  {
    name: 'Kahramanmara\u015f ',
    city: 'Kahramanmaras',
    country: 'Turkey',
    IATA: 'KCM',
    ICAO: 'LTCN',
    lat: '37.5388259888',
    lon: '36.9535217285',
    timezone: '3'
  },
  {
    name: 'A\u011fr\u0131 ',
    city: 'Agri',
    country: 'Turkey',
    IATA: 'AJI',
    ICAO: 'LTCO',
    lat: '39.654541015625',
    lon: '43.025978088378906',
    timezone: '3'
  },
  {
    name: 'Ad\u0131yaman ',
    city: 'Adiyaman',
    country: 'Turkey',
    IATA: 'ADF',
    ICAO: 'LTCP',
    lat: '37.7313995361',
    lon: '38.4688987732',
    timezone: '3'
  },
  {
    name: 'S\u00fcleyman Demirel Intl ',
    city: 'Isparta',
    country: 'Turkey',
    IATA: 'ISE',
    ICAO: 'LTFC',
    lat: '37.8554000854',
    lon: '30.368400573699997',
    timezone: '3'
  },
  {
    name: 'Bal\u0131kesir K\u00f6rfez ',
    city: 'Balikesir Korfez',
    country: 'Turkey',
    IATA: 'EDO',
    ICAO: 'LTFD',
    lat: '39.554599762',
    lon: '27.0137996674',
    timezone: '3'
  },
  {
    name: 'Samsun \u00c7ar\u015famba ',
    city: 'Samsun',
    country: 'Turkey',
    IATA: 'SZF',
    ICAO: 'LTFH',
    lat: '41.254501',
    lon: '36.567101',
    timezone: '3'
  },
  {
    name: '\u017dilina ',
    city: '\u017dilina',
    country: 'Slovakia',
    IATA: 'ILZ',
    ICAO: 'LZZI',
    lat: '49.231498718299996',
    lon: '18.6135005951',
    timezone: '1'
  },
  {
    name: 'JAGS McCartney Intl ',
    city: 'Cockburn Town',
    country: 'Turks and Caicos Islands',
    IATA: 'GDT',
    ICAO: 'MBGT',
    lat: '21.444499969482422',
    lon: '-71.14230346679688',
    timezone: '-4'
  },
  {
    name: 'Middle Caicos ',
    city: 'Middle Caicos',
    country: 'Turks and Caicos Islands',
    IATA: 'MDS',
    ICAO: 'MBMC',
    lat: '21.82602',
    lon: '-71.8025',
    timezone: '-4'
  },
  {
    name: 'Salt Cay ',
    city: 'Salt Cay',
    country: 'Turks and Caicos Islands',
    IATA: 'SLX',
    ICAO: 'MBSY',
    lat: '21.333000183099998',
    lon: '-71.1999969482',
    timezone: '-4'
  },
  {
    name: 'Saman\u00e1 El Catey Intl ',
    city: 'Samana',
    country: 'Dominican Republic',
    IATA: 'AZS',
    ICAO: 'MDCY',
    lat: '19.2670001984',
    lon: '-69.7419967651',
    timezone: '-4'
  },
  {
    name: 'La Isabela Intl ',
    city: 'La Isabela',
    country: 'Dominican Republic',
    IATA: 'JBQ',
    ICAO: 'MDJB',
    lat: '18.572500228881836',
    lon: '-69.98560333251953',
    timezone: '-4'
  },
  {
    name: 'Puerto Barrios ',
    city: 'Puerto Barrios',
    country: 'Guatemala',
    IATA: 'PBR',
    ICAO: 'MGPB',
    lat: '15.7309',
    lon: '-88.583801',
    timezone: '-6'
  },
  {
    name: 'Quezaltenango ',
    city: 'Quezaltenango',
    country: 'Guatemala',
    IATA: 'AAZ',
    ICAO: 'MGQZ',
    lat: '14.8656',
    lon: '-91.501999',
    timezone: '-6'
  },
  {
    name: 'Utirik ',
    city: 'Utirik Island',
    country: 'Marshall Islands',
    IATA: 'UTK',
    ICAO: '03N',
    lat: '11.222',
    lon: '169.852005',
    timezone: '12'
  },
  {
    name: 'Ahuas ',
    city: 'Ahuas',
    country: 'Honduras',
    IATA: 'AHS',
    ICAO: 'MHAH',
    lat: '15.4722',
    lon: '-84.352203',
    timezone: '-6'
  },
  {
    name: 'Puerto Lempira ',
    city: 'Puerto Lempira',
    country: 'Honduras',
    IATA: 'PEU',
    ICAO: 'MHPL',
    lat: '15.2622',
    lon: '-83.781197',
    timezone: '-6'
  },
  {
    name: 'Mili Island ',
    city: 'Mili Island',
    country: 'Marshall Islands',
    IATA: 'MIJ',
    ICAO: 'MLIP',
    lat: '6.08333',
    lon: '171.733002',
    timezone: '12'
  },
  {
    name: 'Captain Rogelio Castillo National ',
    city: 'Celaya',
    country: 'Mexico',
    IATA: 'CYW',
    ICAO: 'MMCY',
    lat: '20.546',
    lon: '-100.887001',
    timezone: '-6'
  },
  {
    name: 'Ciudad Constituci\u00f3n ',
    city: 'Ciudad Constituci\u00f3n',
    country: 'Mexico',
    IATA: 'CUA',
    ICAO: 'MMDA',
    lat: '25.053800582886',
    lon: '-111.61499786377',
    timezone: '-7'
  },
  {
    name: 'Guerrero Negro ',
    city: 'Guerrero Negro',
    country: 'Mexico',
    IATA: 'GUB',
    ICAO: 'MMGR',
    lat: '28.0261',
    lon: '-114.024002',
    timezone: '-8'
  },
  {
    name: 'El Lencero ',
    city: 'Jalapa',
    country: 'Mexico',
    IATA: 'JAL',
    ICAO: 'MMJA',
    lat: '19.4750995636',
    lon: '-96.7975006104',
    timezone: '-6'
  },
  {
    name: 'Alonso Valderrama ',
    city: 'Chitr\u00e9',
    country: 'Panama',
    IATA: 'CTD',
    ICAO: 'MPCE',
    lat: '7.987840175628662',
    lon: '-80.40969848632812',
    timezone: '-5'
  },
  {
    name: 'Enrique Adolfo Jimenez ',
    city: 'Col\u00f3n',
    country: 'Panama',
    IATA: 'ONX',
    ICAO: 'MPEJ',
    lat: '9.356639862060547',
    lon: '-79.86740112304688',
    timezone: '-5'
  },
  {
    name: 'Jaqu\u00e9 ',
    city: 'Jaqu\u00e9',
    country: 'Panama',
    IATA: 'JQE',
    ICAO: 'MPJE',
    lat: '7.51777982711792',
    lon: '-78.1572036743164',
    timezone: '-5'
  },
  {
    name: 'Captain Ramon Xatruch ',
    city: 'La Palma',
    country: 'Panama',
    IATA: 'PLP',
    ICAO: 'MPLP',
    lat: '8.406669616699219',
    lon: '-78.1417007446289',
    timezone: '-5'
  },
  {
    name: 'Aerotortuguero ',
    city: 'Roxana',
    country: 'Costa Rica',
    IATA: 'TTQ',
    ICAO: 'MRAO',
    lat: '10.42',
    lon: '-83.6095',
    timezone: '-6'
  },
  {
    name: 'Barra del Colorado ',
    city: 'Pococi',
    country: 'Costa Rica',
    IATA: 'BCL',
    ICAO: 'MRBC',
    lat: '10.768699645996094',
    lon: '-83.58560180664062',
    timezone: '-6'
  },
  {
    name: 'Cabo Velas ',
    city: 'Nicoya',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MRCV',
    lat: '10.355699539185',
    lon: '-85.852897644043',
    timezone: '-6'
  },
  {
    name: 'Islita ',
    city: 'Nandayure',
    country: 'Costa Rica',
    IATA: 'PBP',
    ICAO: 'MRIA',
    lat: '9.856109619140625',
    lon: '-85.37079620361328',
    timezone: '-6'
  },
  {
    name: 'Puerto Jimenez ',
    city: 'Puerto Jimenez',
    country: 'Costa Rica',
    IATA: 'PJM',
    ICAO: 'MRPJ',
    lat: '8.533329963684082',
    lon: '-83.30000305175781',
    timezone: '-6'
  },
  {
    name: 'Tobias Bolanos Intl ',
    city: 'San Jose',
    country: 'Costa Rica',
    IATA: 'SYQ',
    ICAO: 'MRPV',
    lat: '9.957050323486328',
    lon: '-84.13980102539062',
    timezone: '-6'
  },
  {
    name: '(Duplicate) Playa Samara ',
    city: 'Playa Samara',
    country: 'Costa Rica',
    IATA: '\\N',
    ICAO: 'MRSR',
    lat: '9.87',
    lon: '-85.48',
    timezone: '-6'
  },
  {
    name: 'J\u00e9r\u00e9mie ',
    city: 'Jeremie',
    country: 'Haiti',
    IATA: 'JEE',
    ICAO: 'MTJE',
    lat: '18.66309928894043',
    lon: '-74.17030334472656',
    timezone: '-5'
  },
  {
    name: 'Port-de-Paix ',
    city: 'Port-de-Paix',
    country: 'Haiti',
    IATA: 'PAX',
    ICAO: 'MTPX',
    lat: '19.9335994720459',
    lon: '-72.84860229492188',
    timezone: '-5'
  },
  {
    name: 'Cayo Coco ',
    city: 'Cayo Coco',
    country: 'Cuba',
    IATA: '\\N',
    ICAO: 'MUOC',
    lat: '22.513200759900002',
    lon: '-78.51100158690001',
    timezone: '-5'
  },
  {
    name: 'Alberto Delgado ',
    city: 'Trinidad',
    country: 'Cuba',
    IATA: 'TND',
    ICAO: 'MUTD',
    lat: '21.788299560546875',
    lon: '-79.99720001220703',
    timezone: '-5'
  },
  {
    name: 'Congo Town ',
    city: 'Andros',
    country: 'Bahamas',
    IATA: 'COX',
    ICAO: 'MYAK',
    lat: '24.158701',
    lon: '-77.589798',
    timezone: '-5'
  },
  {
    name: "Arthur's Town ",
    city: "Arthur's Town",
    country: 'Bahamas',
    IATA: 'ATC',
    ICAO: 'MYCA',
    lat: '24.6294',
    lon: '-75.673797',
    timezone: '-5'
  },
  {
    name: 'New Bight ',
    city: 'Cat Island',
    country: 'Bahamas',
    IATA: 'TBI',
    ICAO: 'MYCB',
    lat: '24.3153',
    lon: '-75.452301',
    timezone: '-5'
  },
  {
    name: 'Colonel Hill ',
    city: 'Colonel Hill',
    country: 'Bahamas',
    IATA: 'CRI',
    ICAO: 'MYCI',
    lat: '22.745599746699998',
    lon: '-74.1824035645',
    timezone: '-5'
  },
  {
    name: 'Nassau Paradise Island ',
    city: 'Nassau',
    country: 'Bahamas',
    IATA: 'PID',
    ICAO: 'MYPI',
    lat: '25.08300018310547',
    lon: '-77.30000305175781',
    timezone: '-5'
  },
  {
    name: 'Enua ',
    city: 'Atiu Island',
    country: 'Cook Islands',
    IATA: 'AIU',
    ICAO: 'NCAT',
    lat: '-19.96780014038086',
    lon: '-158.11900329589844',
    timezone: '-10'
  },
  {
    name: 'Mangaia Island ',
    city: 'Mangaia Island',
    country: 'Cook Islands',
    IATA: 'MGS',
    ICAO: 'NCMG',
    lat: '-21.895986557006836',
    lon: '-157.9066619873047',
    timezone: '-10'
  },
  {
    name: 'Manihiki Island ',
    city: 'Manihiki Island',
    country: 'Cook Islands',
    IATA: 'MHX',
    ICAO: 'NCMH',
    lat: '-10.376700401306152',
    lon: '-161.0019989013672',
    timezone: '-10'
  },
  {
    name: 'Mauke ',
    city: 'Mauke Island',
    country: 'Cook Islands',
    IATA: 'MUK',
    ICAO: 'NCMK',
    lat: '-20.13610076904297',
    lon: '-157.34500122070312',
    timezone: '-10'
  },
  {
    name: 'Mitiaro Island ',
    city: 'Mitiaro Island',
    country: 'Cook Islands',
    IATA: 'MOI',
    ICAO: 'NCMR',
    lat: '-19.842500686645508',
    lon: '-157.7030029296875',
    timezone: '-10'
  },
  {
    name: 'Tongareva ',
    city: 'Penrhyn Island',
    country: 'Cook Islands',
    IATA: 'PYE',
    ICAO: 'NCPY',
    lat: '-9.01436996459961',
    lon: '-158.03240966796875',
    timezone: '-10'
  },
  {
    name: 'Cicia ',
    city: 'Cicia',
    country: 'Fiji',
    IATA: 'ICI',
    ICAO: 'NFCI',
    lat: '-17.7432994843',
    lon: '-179.341995239',
    timezone: '12'
  },
  {
    name: 'Malolo Lailai Island ',
    city: 'Malolo Lailai Island',
    country: 'Fiji',
    IATA: 'PTF',
    ICAO: 'NFFO',
    lat: '-17.7779006958',
    lon: '177.197006226',
    timezone: '12'
  },
  {
    name: 'Vunisea ',
    city: 'Vunisea',
    country: 'Fiji',
    IATA: 'KDV',
    ICAO: 'NFKD',
    lat: '-19.058099746699998',
    lon: '178.156997681',
    timezone: '12'
  },
  {
    name: 'Mana Island ',
    city: 'Mana Island',
    country: 'Fiji',
    IATA: 'MNF',
    ICAO: 'NFMA',
    lat: '-17.6730995178',
    lon: '177.098007202',
    timezone: '12'
  },
  {
    name: 'Moala ',
    city: 'Moala',
    country: 'Fiji',
    IATA: 'MFJ',
    ICAO: 'NFMO',
    lat: '-18.566699981699998',
    lon: '179.951004028',
    timezone: '12'
  },
  {
    name: 'Ngau ',
    city: 'Ngau',
    country: 'Fiji',
    IATA: 'NGI',
    ICAO: 'NFNG',
    lat: '-18.115600585899998',
    lon: '179.339996338',
    timezone: '12'
  },
  {
    name: 'Lakeba Island ',
    city: 'Lakeba Island',
    country: 'Fiji',
    IATA: 'LKB',
    ICAO: 'NFNK',
    lat: '-18.1991996765',
    lon: '-178.817001343',
    timezone: '12'
  },
  {
    name: 'Labasa ',
    city: 'Lambasa',
    country: 'Fiji',
    IATA: 'LBS',
    ICAO: 'NFNL',
    lat: '-16.466699600219727',
    lon: '179.33999633789062',
    timezone: '12'
  },
  {
    name: 'Matei ',
    city: 'Matei',
    country: 'Fiji',
    IATA: 'TVU',
    ICAO: 'NFNM',
    lat: '-16.6905994415',
    lon: '-179.876998901',
    timezone: '12'
  },
  {
    name: 'Koro Island ',
    city: 'Koro Island',
    country: 'Fiji',
    IATA: 'KXF',
    ICAO: 'NFNO',
    lat: '-17.3458003998',
    lon: '179.42199707',
    timezone: '12'
  },
  {
    name: 'Rotuma ',
    city: 'Rotuma',
    country: 'Fiji',
    IATA: 'RTA',
    ICAO: 'NFNR',
    lat: '-12.482500076293945',
    lon: '177.0709991455078',
    timezone: '12'
  },
  {
    name: 'Savusavu ',
    city: 'Savusavu',
    country: 'Fiji',
    IATA: 'SVU',
    ICAO: 'NFNS',
    lat: '-16.8027992249',
    lon: '179.341003418',
    timezone: '12'
  },
  {
    name: 'Kaufana ',
    city: 'Eua Island',
    country: 'Tonga',
    IATA: 'EUA',
    ICAO: 'NFTE',
    lat: '-21.378299713100002',
    lon: '-174.957992554',
    timezone: '13'
  },
  {
    name: 'Lifuka Island ',
    city: 'Lifuka',
    country: 'Tonga',
    IATA: 'HPA',
    ICAO: 'NFTL',
    lat: '-19.777000427246094',
    lon: '-174.34100341796875',
    timezone: '13'
  },
  {
    name: 'Kuini Lavenia ',
    city: 'Niuatoputapu',
    country: 'Tonga',
    IATA: 'NTT',
    ICAO: 'NFTP',
    lat: '-15.977297',
    lon: '-173.791089',
    timezone: '13'
  },
  {
    name: 'Vanua Balavu ',
    city: 'Vanua Balavu',
    country: 'Fiji',
    IATA: 'VBV',
    ICAO: 'NFVB',
    lat: '-17.268999099731445',
    lon: '-178.9759979248047',
    timezone: '12'
  },
  {
    name: 'Niue Intl ',
    city: 'Alofi',
    country: 'Niue',
    IATA: 'IUE',
    ICAO: 'NIUE',
    lat: '-19.079030990600586',
    lon: '-169.92559814453125',
    timezone: '-11'
  },
  {
    name: 'Pointe Vele ',
    city: 'Futuna Island',
    country: 'Wallis and Futuna',
    IATA: 'FUT',
    ICAO: 'NLWF',
    lat: '-14.3114004135',
    lon: '-178.065994263',
    timezone: '12'
  },
  {
    name: 'Maota ',
    city: 'Savaii Island',
    country: 'Samoa',
    IATA: 'MXS',
    ICAO: 'NSMA',
    lat: '-13.742300033569336',
    lon: '-172.25799560546875',
    timezone: '13'
  },
  {
    name: 'Apataki ',
    city: 'Apataki',
    country: 'French Polynesia',
    IATA: 'APK',
    ICAO: 'NTGD',
    lat: '-15.5736',
    lon: '-146.414993',
    timezone: '-10'
  },
  {
    name: 'Ahe ',
    city: 'Ahe',
    country: 'French Polynesia',
    IATA: 'AHE',
    ICAO: 'NTHE',
    lat: '-14.428099632263184',
    lon: '-146.2570037841797',
    timezone: '-10'
  },
  {
    name: 'Hiva Oa-Atuona ',
    city: 'Hiva-oa',
    country: 'French Polynesia',
    IATA: 'AUQ',
    ICAO: 'NTMN',
    lat: '-9.76879024506',
    lon: '-139.011001587',
    timezone: '-9.5'
  },
  {
    name: 'Ua Pou ',
    city: 'Ua Pou',
    country: 'French Polynesia',
    IATA: 'UAP',
    ICAO: 'NTMP',
    lat: '-9.35167',
    lon: '-140.078003',
    timezone: '-9.5'
  },
  {
    name: 'Ua Huka ',
    city: 'Ua Huka',
    country: 'French Polynesia',
    IATA: 'UAH',
    ICAO: 'NTMU',
    lat: '-8.93611',
    lon: '-139.552002',
    timezone: '-9.5'
  },
  {
    name: 'Mota Lava ',
    city: 'Ablow',
    country: 'Vanuatu',
    IATA: 'MTV',
    ICAO: 'NVSA',
    lat: '-13.6660003662',
    lon: '167.712005615',
    timezone: '11'
  },
  {
    name: 'Sola ',
    city: 'Sola',
    country: 'Vanuatu',
    IATA: 'SLH',
    ICAO: 'NVSC',
    lat: '-13.8516998291',
    lon: '167.537002563',
    timezone: '11'
  },
  {
    name: 'Torres Airstrip',
    city: 'Loh/Linua',
    country: 'Vanuatu',
    IATA: 'TOH',
    ICAO: 'NVSD',
    lat: '-13.3280000687',
    lon: '166.638000488',
    timezone: '11'
  },
  {
    name: 'Siwo ',
    city: 'Sangafa',
    country: 'Vanuatu',
    IATA: 'EAE',
    ICAO: 'NVSE',
    lat: '-17.0902996063',
    lon: '168.343002319',
    timezone: '11'
  },
  {
    name: 'Craig Cove ',
    city: 'Craig Cove',
    country: 'Vanuatu',
    IATA: 'CCV',
    ICAO: 'NVSF',
    lat: '-16.264999',
    lon: '167.923996',
    timezone: '11'
  },
  {
    name: 'Longana ',
    city: 'Longana',
    country: 'Vanuatu',
    IATA: 'LOD',
    ICAO: 'NVSG',
    lat: '-15.3066997528',
    lon: '167.966995239',
    timezone: '11'
  },
  {
    name: 'Sara ',
    city: 'Pentecost Island',
    country: 'Vanuatu',
    IATA: 'SSR',
    ICAO: 'NVSH',
    lat: '-15.4708003998',
    lon: '168.151992798',
    timezone: '11'
  },
  {
    name: 'Tavie ',
    city: 'Paama Island',
    country: 'Vanuatu',
    IATA: 'PBJ',
    ICAO: 'NVSI',
    lat: '-16.438999176',
    lon: '168.257003784',
    timezone: '11'
  },
  {
    name: 'Lamap ',
    city: 'Lamap',
    country: 'Vanuatu',
    IATA: 'LPM',
    ICAO: 'NVSL',
    lat: '-16.4611228',
    lon: '167.829253',
    timezone: '11'
  },
  {
    name: 'Lamen Bay ',
    city: 'Lamen Bay',
    country: 'Vanuatu',
    IATA: 'LNB',
    ICAO: 'NVSM',
    lat: '-16.584199905400002',
    lon: '168.158996582',
    timezone: '11'
  },
  {
    name: 'Maewo-Naone ',
    city: 'Maewo Island',
    country: 'Vanuatu',
    IATA: 'MWF',
    ICAO: 'NVSN',
    lat: '-15',
    lon: '168.082992554',
    timezone: '11'
  },
  {
    name: 'Lonorore ',
    city: 'Lonorore',
    country: 'Vanuatu',
    IATA: 'LNE',
    ICAO: 'NVSO',
    lat: '-15.865599632299999',
    lon: '168.17199707',
    timezone: '11'
  },
  {
    name: 'Norsup ',
    city: 'Norsup',
    country: 'Vanuatu',
    IATA: 'NUS',
    ICAO: 'NVSP',
    lat: '-16.0797',
    lon: '167.401001',
    timezone: '11'
  },
  {
    name: 'Gaua Island ',
    city: 'Gaua Island',
    country: 'Vanuatu',
    IATA: 'ZGU',
    ICAO: 'NVSQ',
    lat: '-14.218099594099998',
    lon: '167.587005615',
    timezone: '11'
  },
  {
    name: 'Redcliffe ',
    city: 'Redcliffe',
    country: 'Vanuatu',
    IATA: 'RCL',
    ICAO: 'NVSR',
    lat: '-15.472000122099999',
    lon: '167.835006714',
    timezone: '11'
  },
  {
    name: 'Santo Pekoa Intl ',
    city: 'Santo',
    country: 'Vanuatu',
    IATA: 'SON',
    ICAO: 'NVSS',
    lat: '-15.505000114399998',
    lon: '167.220001221',
    timezone: '11'
  },
  {
    name: 'Tongoa ',
    city: 'Tongoa Island',
    country: 'Vanuatu',
    IATA: 'TGH',
    ICAO: 'NVST',
    lat: '-16.8910999298',
    lon: '168.550994873',
    timezone: '11'
  },
  {
    name: 'Ul\u00e9i ',
    city: 'Ambryn Island',
    country: 'Vanuatu',
    IATA: 'ULB',
    ICAO: 'NVSU',
    lat: '-16.3297',
    lon: '168.3011',
    timezone: '11'
  },
  {
    name: 'Valesdir ',
    city: 'Valesdir',
    country: 'Vanuatu',
    IATA: 'VLS',
    ICAO: 'NVSV',
    lat: '-16.796100616500002',
    lon: '168.177001953',
    timezone: '11'
  },
  {
    name: 'Southwest Bay ',
    city: 'Malekula Island',
    country: 'Vanuatu',
    IATA: 'SWJ',
    ICAO: 'NVSX',
    lat: '-16.4864',
    lon: '167.4472',
    timezone: '11'
  },
  {
    name: 'North West Santo ',
    city: 'Olpoi',
    country: 'Vanuatu',
    IATA: 'OLJ',
    ICAO: 'NVSZ',
    lat: '-14.881699562099998',
    lon: '166.557998657',
    timezone: '11'
  },
  {
    name: 'Aneityum ',
    city: 'Anelghowhat',
    country: 'Vanuatu',
    IATA: 'AUY',
    ICAO: 'NVVA',
    lat: '-20.2492008209',
    lon: '169.770996094',
    timezone: '11'
  },
  {
    name: 'Aniwa ',
    city: 'Aniwa',
    country: 'Vanuatu',
    IATA: 'AWD',
    ICAO: 'NVVB',
    lat: '-19.2346',
    lon: '169.6009',
    timezone: '11'
  },
  {
    name: "Dillon's Bay ",
    city: "Dillon's Bay",
    country: 'Vanuatu',
    IATA: 'DLY',
    ICAO: 'NVVD',
    lat: '-18.7693996429',
    lon: '169.00100708',
    timezone: '11'
  },
  {
    name: 'Futuna ',
    city: 'Futuna Island',
    country: 'Vanuatu',
    IATA: 'FTA',
    ICAO: 'NVVF',
    lat: '-19.516399383499998',
    lon: '170.231994629',
    timezone: '11'
  },
  {
    name: 'Ipota ',
    city: 'Ipota',
    country: 'Vanuatu',
    IATA: 'IPA',
    ICAO: 'NVVI',
    lat: '-18.856389',
    lon: '169.283333',
    timezone: '11'
  },
  {
    name: 'Tiga ',
    city: 'Tiga',
    country: 'New Caledonia',
    IATA: 'TGJ',
    ICAO: 'NWWA',
    lat: '-21.096099853515625',
    lon: '167.8040008544922',
    timezone: '11'
  },
  {
    name: '\u00cele Art - Waala ',
    city: 'Waala',
    country: 'New Caledonia',
    IATA: 'BMY',
    ICAO: 'NWWC',
    lat: '-19.720600128173828',
    lon: '163.66099548339844',
    timezone: '11'
  },
  {
    name: '\u00cele des Pins ',
    city: '\u00cele des Pins',
    country: 'New Caledonia',
    IATA: 'ILP',
    ICAO: 'NWWE',
    lat: '-22.588899612426758',
    lon: '167.45599365234375',
    timezone: '11'
  },
  {
    name: 'Fayzabad ',
    city: 'Faizabad',
    country: 'Afghanistan',
    IATA: 'FBD',
    ICAO: 'OAFZ',
    lat: '37.121101',
    lon: '70.518097',
    timezone: '4.5'
  },
  {
    name: 'Dawadmi Domestic ',
    city: 'Dawadmi',
    country: 'Saudi Arabia',
    IATA: '\\N',
    ICAO: 'OEDW',
    lat: '24.5',
    lon: '44.400001525878906',
    timezone: '3'
  },
  {
    name: 'Al-Jawf Domestic ',
    city: 'Al-Jawf',
    country: 'Saudi Arabia',
    IATA: 'AJF',
    ICAO: 'OESK',
    lat: '29.78510093688965',
    lon: '40.099998474121094',
    timezone: '3'
  },
  {
    name: 'Wadi Al Dawasir ',
    city: 'Wadi-al-dawasir',
    country: 'Saudi Arabia',
    IATA: 'WAE',
    ICAO: 'OEWD',
    lat: '20.504299163800003',
    lon: '45.199600219699995',
    timezone: '3'
  },
  {
    name: 'Khoram Abad ',
    city: 'Khorram Abad',
    country: 'Iran',
    IATA: 'KHD',
    ICAO: 'OICK',
    lat: '33.43539810180664',
    lon: '48.282901763916016',
    timezone: '3.5'
  },
  {
    name: 'Bam ',
    city: 'Bam',
    country: 'Iran',
    IATA: 'BXR',
    ICAO: 'OIKM',
    lat: '29.084199905395508',
    lon: '58.45000076293945',
    timezone: '3.5'
  },
  {
    name: 'Rafsanjan ',
    city: 'Rafsanjan',
    country: 'Iran',
    IATA: 'RJN',
    ICAO: 'OIKR',
    lat: '30.297700881958008',
    lon: '56.05110168457031',
    timezone: '3.5'
  },
  {
    name: 'Bojnord ',
    city: 'Bojnourd',
    country: 'Iran',
    IATA: 'BJB',
    ICAO: 'OIMN',
    lat: '37.49300003051758',
    lon: '57.30820083618164',
    timezone: '3.5'
  },
  {
    name: 'Sabzevar National ',
    city: 'Sabzevar',
    country: 'Iran',
    IATA: 'AFZ',
    ICAO: 'OIMS',
    lat: '36.16809844970703',
    lon: '57.59519958496094',
    timezone: '3.5'
  },
  {
    name: 'Noshahr ',
    city: 'Noshahr',
    country: 'Iran',
    IATA: 'NSH',
    ICAO: 'OINN',
    lat: '36.663299560546875',
    lon: '51.464698791503906',
    timezone: '3.5'
  },
  {
    name: 'Dasht-e Naz ',
    city: 'Dasht-e-naz',
    country: 'Iran',
    IATA: 'SRY',
    ICAO: 'OINZ',
    lat: '36.635799408',
    lon: '53.193599700899995',
    timezone: '3.5'
  },
  {
    name: 'Lar ',
    city: 'Lar',
    country: 'Iran',
    IATA: 'LRR',
    ICAO: 'OISL',
    lat: '27.6746997833',
    lon: '54.3833007812',
    timezone: '3.5'
  },
  {
    name: 'Ardabil ',
    city: 'Ardabil',
    country: 'Iran',
    IATA: 'ADU',
    ICAO: 'OITL',
    lat: '38.3256988525',
    lon: '48.4244003296',
    timezone: '3.5'
  },
  {
    name: 'Urmia ',
    city: 'Uromiyeh',
    country: 'Iran',
    IATA: 'OMH',
    ICAO: 'OITR',
    lat: '37.6680984497',
    lon: '45.0686988831',
    timezone: '3.5'
  },
  {
    name: 'Al Ain Intl ',
    city: 'Al Ain',
    country: 'United Arab Emirates',
    IATA: 'AAN',
    ICAO: 'OMAL',
    lat: '24.261699676513672',
    lon: '55.60919952392578',
    timezone: '4'
  },
  {
    name: 'Bannu ',
    city: 'Bannu',
    country: 'Pakistan',
    IATA: 'BNP',
    ICAO: 'OPBN',
    lat: '32.9729',
    lon: '70.527901',
    timezone: '5'
  },
  {
    name: 'Bahawalpur ',
    city: 'Bahawalpur',
    country: 'Pakistan',
    IATA: 'BHV',
    ICAO: 'OPBW',
    lat: '29.348100662231445',
    lon: '71.71800231933594',
    timezone: '5'
  },
  {
    name: 'Chitral ',
    city: 'Chitral',
    country: 'Pakistan',
    IATA: 'CJL',
    ICAO: 'OPCH',
    lat: '35.886600494384766',
    lon: '71.80059814453125',
    timezone: '5'
  },
  {
    name: 'Dalbandin ',
    city: 'Dalbandin',
    country: 'Pakistan',
    IATA: 'DBA',
    ICAO: 'OPDB',
    lat: '28.878299713100002',
    lon: '64.3998031616',
    timezone: '5'
  },
  {
    name: 'Dera Ghazi Khan ',
    city: 'Dera Ghazi Khan',
    country: 'Pakistan',
    IATA: 'DEA',
    ICAO: 'OPDG',
    lat: '29.961000442504883',
    lon: '70.48590087890625',
    timezone: '5'
  },
  {
    name: 'Dera Ismael Khan ',
    city: 'Dera Ismael Khan',
    country: 'Pakistan',
    IATA: 'DSK',
    ICAO: 'OPDI',
    lat: '31.909400939941406',
    lon: '70.89659881591797',
    timezone: '5'
  },
  {
    name: 'Jiwani ',
    city: 'Jiwani',
    country: 'Pakistan',
    IATA: 'JIW',
    ICAO: 'OPJI',
    lat: '25.067800521900004',
    lon: '61.8054008484',
    timezone: '5'
  },
  {
    name: 'Hyderabad ',
    city: 'Hyderabad',
    country: 'Pakistan',
    IATA: 'HDD',
    ICAO: 'OPKD',
    lat: '25.3181',
    lon: '68.366096',
    timezone: '5'
  },
  {
    name: 'Khuzdar ',
    city: 'Khuzdar',
    country: 'Pakistan',
    IATA: 'KDD',
    ICAO: 'OPKH',
    lat: '27.790599823',
    lon: '66.6473007202',
    timezone: '5'
  },
  {
    name: 'Ormara ',
    city: 'Ormara Raik',
    country: 'Pakistan',
    IATA: 'ORW',
    ICAO: 'OPOR',
    lat: '25.274700164799995',
    lon: '64.58599853519999',
    timezone: '5'
  },
  {
    name: 'Parachinar ',
    city: 'Parachinar',
    country: 'Pakistan',
    IATA: 'PAJ',
    ICAO: 'OPPC',
    lat: '33.902099609400004',
    lon: '70.0716018677',
    timezone: '5'
  },
  {
    name: 'Skardu ',
    city: 'Skardu',
    country: 'Pakistan',
    IATA: 'KDU',
    ICAO: 'OPSD',
    lat: '35.33549880981445',
    lon: '75.53600311279297',
    timezone: '5'
  },
  {
    name: 'Sehwan Sharif ',
    city: 'Sehwan Sharif',
    country: 'Pakistan',
    IATA: 'SYW',
    ICAO: 'OPSN',
    lat: '26.473100662231445',
    lon: '67.71720123291016',
    timezone: '5'
  },
  {
    name: 'Turbat Intl ',
    city: 'Turbat',
    country: 'Pakistan',
    IATA: 'TUK',
    ICAO: 'OPTU',
    lat: '25.986400604248047',
    lon: '63.03020095825195',
    timezone: '5'
  },
  {
    name: 'Sulaymaniyah Intl ',
    city: 'Sulaymaniyah',
    country: 'Iraq',
    IATA: 'ISU',
    ICAO: 'ORSU',
    lat: '35.5617485046',
    lon: '45.316738128699996',
    timezone: '3'
  },
  {
    name: 'Kamishly ',
    city: 'Kamishly',
    country: 'Syria',
    IATA: 'KAC',
    ICAO: 'OSKL',
    lat: '37.020599365234375',
    lon: '41.19139862060547',
    timezone: '2'
  },
  {
    name: 'Sayun Intl ',
    city: 'Sayun Intl',
    country: 'Yemen',
    IATA: 'GXF',
    ICAO: 'OYSY',
    lat: '15.9660997391',
    lon: '48.78829956049999',
    timezone: '3'
  },
  {
    name: 'Adak ',
    city: 'Adak Island',
    country: 'United States',
    IATA: 'ADK',
    ICAO: 'PADK',
    lat: '51.87799835205078',
    lon: '-176.64599609375',
    timezone: '-10'
  },
  {
    name: 'Gustavus ',
    city: 'Gustavus',
    country: 'United States',
    IATA: 'GST',
    ICAO: 'PAGS',
    lat: '58.4253006',
    lon: '-135.7070007',
    timezone: '-9'
  },
  {
    name: 'Skagway ',
    city: 'Skagway',
    country: 'United States',
    IATA: 'SGY',
    ICAO: 'PAGY',
    lat: '59.46009826660156',
    lon: '-135.3159942626953',
    timezone: '-9'
  },
  {
    name: 'Holy Cross ',
    city: 'Holy Cross',
    country: 'United States',
    IATA: 'HCR',
    ICAO: 'PAHC',
    lat: '62.18830108642578',
    lon: '-159.77499389648438',
    timezone: '-9'
  },
  {
    name: 'Haines ',
    city: 'Haines',
    country: 'United States',
    IATA: 'HNS',
    ICAO: 'PAHN',
    lat: '59.24380111694336',
    lon: '-135.5240020751953',
    timezone: '-9'
  },
  {
    name: 'Kalskag ',
    city: 'Kalskag',
    country: 'United States',
    IATA: 'KLG',
    ICAO: 'PALG',
    lat: '61.53630065917969',
    lon: '-160.34100341796875',
    timezone: '-9'
  },
  {
    name: 'McGrath ',
    city: 'Mcgrath',
    country: 'United States',
    IATA: 'MCG',
    ICAO: 'PAMC',
    lat: '62.95289993',
    lon: '-155.6060028',
    timezone: '-9'
  },
  {
    name: 'Mountain Village ',
    city: 'Mountain Village',
    country: 'United States',
    IATA: 'MOU',
    ICAO: 'PAMO',
    lat: '62.095401763916016',
    lon: '-163.6820068359375',
    timezone: '-9'
  },
  {
    name: 'Aniak ',
    city: 'Aniak',
    country: 'United States',
    IATA: 'ANI',
    ICAO: 'PANI',
    lat: '61.581600189208984',
    lon: '-159.54299926757812',
    timezone: '-9'
  },
  {
    name: 'Chevak ',
    city: 'Chevak',
    country: 'United States',
    IATA: 'VAK',
    ICAO: 'PAVA',
    lat: '61.5409',
    lon: '-165.6005',
    timezone: '-9'
  },
  {
    name: 'Wrangell ',
    city: 'Wrangell',
    country: 'United States',
    IATA: 'WRG',
    ICAO: 'PAWG',
    lat: '56.48429871',
    lon: '-132.3699951',
    timezone: '-9'
  },
  {
    name: 'Balimo ',
    city: 'Balimo',
    country: 'Papua New Guinea',
    IATA: 'OPU',
    ICAO: 'AYBM',
    lat: '-8.05000019073',
    lon: '142.932998657',
    timezone: '10'
  },
  {
    name: 'Baimuru ',
    city: 'Baimuru',
    country: 'Papua New Guinea',
    IATA: 'VMU',
    ICAO: 'AYBA',
    lat: '-7.49686002731',
    lon: '144.819900513',
    timezone: '10'
  },
  {
    name: 'Kalaupapa ',
    city: 'Molokai',
    country: 'United States',
    IATA: 'LUP',
    ICAO: 'PHLU',
    lat: '21.21100044',
    lon: '-156.973999',
    timezone: '-10'
  },
  {
    name: 'Eniwetok ',
    city: 'Eniwetok Atoll',
    country: 'Marshall Islands',
    IATA: 'ENT',
    ICAO: 'PKMA',
    lat: '11.340700149536133',
    lon: '162.3280029296875',
    timezone: '12'
  },
  {
    name: 'Matsu Nangan ',
    city: 'Matsu Islands',
    country: 'Taiwan',
    IATA: 'LZN',
    ICAO: 'RCFG',
    lat: '26.1598',
    lon: '119.958',
    timezone: '8'
  },
  {
    name: 'Hengchun ',
    city: 'Hengchun',
    country: 'Taiwan',
    IATA: 'HCN',
    ICAO: 'RCKW',
    lat: '22.041099548339844',
    lon: '120.7300033569336',
    timezone: '8'
  },
  {
    name: 'Matsu Beigan ',
    city: 'Matsu Islands',
    country: 'Taiwan',
    IATA: 'MFK',
    ICAO: 'RCMT',
    lat: '26.224199',
    lon: '120.002998',
    timezone: '8'
  },
  {
    name: 'Kushiro ',
    city: 'Kushiro',
    country: 'Japan',
    IATA: 'KUH',
    ICAO: 'RJCK',
    lat: '43.041000366199995',
    lon: '144.192993164',
    timezone: '9'
  },
  {
    name: 'Okadama ',
    city: 'Sapporo',
    country: 'Japan',
    IATA: 'OKD',
    ICAO: 'RJCO',
    lat: '43.117447',
    lon: '141.38134',
    timezone: '9'
  },
  {
    name: 'Saga ',
    city: 'Saga',
    country: 'Japan',
    IATA: 'HSG',
    ICAO: 'RJFS',
    lat: '33.149700164799995',
    lon: '130.302001953',
    timezone: '9'
  },
  {
    name: 'Nagoya ',
    city: 'Nagoya',
    country: 'Japan',
    IATA: 'NKM',
    ICAO: 'RJNA',
    lat: '35.255001068115234',
    lon: '136.9239959716797',
    timezone: '9'
  },
  {
    name: 'Iwami ',
    city: 'Iwami',
    country: 'Japan',
    IATA: 'IWJ',
    ICAO: 'RJOW',
    lat: '34.676399231',
    lon: '131.789993286',
    timezone: '9'
  },
  {
    name: 'Fukushima ',
    city: 'Fukushima',
    country: 'Japan',
    IATA: 'FKS',
    ICAO: 'RJSF',
    lat: '37.22740173339844',
    lon: '140.43099975585938',
    timezone: '9'
  },
  {
    name: 'Odate Noshiro ',
    city: 'Odate Noshiro',
    country: 'Japan',
    IATA: 'ONJ',
    ICAO: 'RJSR',
    lat: '40.1918983459',
    lon: '140.371002197',
    timezone: '9'
  },
  {
    name: 'Shonai ',
    city: 'Shonai',
    country: 'Japan',
    IATA: 'SYO',
    ICAO: 'RJSY',
    lat: '38.81219863889999',
    lon: '139.787002563',
    timezone: '9'
  },
  {
    name: 'Miyakejima ',
    city: 'Miyakejima',
    country: 'Japan',
    IATA: 'MYE',
    ICAO: 'RJTQ',
    lat: '34.073600769',
    lon: '139.559997559',
    timezone: '9'
  },
  {
    name: 'Kunsan Air Base',
    city: 'Kunsan',
    country: 'South Korea',
    IATA: 'KUV',
    ICAO: 'RKJK',
    lat: '35.90380096435547',
    lon: '126.61599731445312',
    timezone: '9'
  },
  {
    name: 'Mokpo Heliport',
    city: 'Mokpo',
    country: 'South Korea',
    IATA: 'MPK',
    ICAO: 'RKJM',
    lat: '34.7588996887',
    lon: '126.379997253',
    timezone: '9'
  },
  {
    name: 'Wonju/Hoengseong Air Base (K-38/K-46)',
    city: 'Wonju',
    country: 'South Korea',
    IATA: 'WJU',
    ICAO: 'RKNW',
    lat: '37.441201',
    lon: '127.963858',
    timezone: '9'
  },
  {
    name: 'Yangyang Intl ',
    city: 'Sokcho / Gangneung',
    country: 'South Korea',
    IATA: 'YNY',
    ICAO: 'RKNY',
    lat: '38.061298',
    lon: '128.669006',
    timezone: '9'
  },
  {
    name: 'Sacheon Air Base/',
    city: 'Sacheon',
    country: 'South Korea',
    IATA: 'HIN',
    ICAO: 'RKPS',
    lat: '35.088591',
    lon: '128.071747',
    timezone: '9'
  },
  {
    name: 'Cheongju Intl /Cheongju Air Base (K-59/G-513)',
    city: 'Chongju',
    country: 'South Korea',
    IATA: 'CJJ',
    ICAO: 'RKTU',
    lat: '36.717008',
    lon: '127.498741',
    timezone: '9'
  },
  {
    name: 'Subic Bay Intl ',
    city: 'Olongapo City',
    country: 'Philippines',
    IATA: 'SFS',
    ICAO: 'RPLB',
    lat: '14.794400215148926',
    lon: '120.27100372314453',
    timezone: '8'
  },
  {
    name: 'Cuyo ',
    city: 'Cuyo',
    country: 'Philippines',
    IATA: 'CYU',
    ICAO: 'RPLO',
    lat: '10.858099937438965',
    lon: '121.06900024414062',
    timezone: '8'
  },
  {
    name: 'Rajah Buayan Air Base',
    city: 'General Santos City',
    country: 'Philippines',
    IATA: '\\N',
    ICAO: 'RPMB',
    lat: '6.10644006729',
    lon: '125.23500061',
    timezone: '8'
  },
  {
    name: 'Camiguin ',
    city: 'Camiguin',
    country: 'Philippines',
    IATA: 'CGM',
    ICAO: 'RPMH',
    lat: '9.253520011901855',
    lon: '124.70700073242188',
    timezone: '8'
  },
  {
    name: 'Jolo ',
    city: 'Jolo',
    country: 'Philippines',
    IATA: 'JOL',
    ICAO: 'RPMJ',
    lat: '6.0536699295043945',
    lon: '121.01100158691406',
    timezone: '8'
  },
  {
    name: 'Sanga Sanga ',
    city: 'Sanga Sanga',
    country: 'Philippines',
    IATA: 'TWT',
    ICAO: 'RPMN',
    lat: '5.046991',
    lon: '119.742996',
    timezone: '8'
  },
  {
    name: 'Surigao ',
    city: 'Sangley Point',
    country: 'Philippines',
    IATA: 'SUG',
    ICAO: 'RPMS',
    lat: '9.755838325629998',
    lon: '125.480947495',
    timezone: '8'
  },
  {
    name: 'Tandag ',
    city: 'Tandag',
    country: 'Philippines',
    IATA: 'TDG',
    ICAO: 'RPMW',
    lat: '9.072110176086426',
    lon: '126.1709976196289',
    timezone: '8'
  },
  {
    name: 'Naga ',
    city: 'Naga',
    country: 'Philippines',
    IATA: 'WNP',
    ICAO: 'RPUN',
    lat: '13.58489990234375',
    lon: '123.2699966430664',
    timezone: '8'
  },
  {
    name: 'Basco ',
    city: 'Basco',
    country: 'Philippines',
    IATA: 'BSO',
    ICAO: 'RPUO',
    lat: '20.4513',
    lon: '121.980003',
    timezone: '8'
  },
  {
    name: 'San Fernando ',
    city: 'San Fernando',
    country: 'Philippines',
    IATA: 'SFE',
    ICAO: 'RPUS',
    lat: '16.595600128173828',
    lon: '120.3030014038086',
    timezone: '8'
  },
  {
    name: 'Tuguegarao ',
    city: 'Tuguegarao',
    country: 'Philippines',
    IATA: 'TUG',
    ICAO: 'RPUT',
    lat: '17.6433676823',
    lon: '121.733150482',
    timezone: '8'
  },
  {
    name: 'Virac ',
    city: 'Virac',
    country: 'Philippines',
    IATA: 'VRC',
    ICAO: 'RPUV',
    lat: '13.576399803161621',
    lon: '124.20600128173828',
    timezone: '8'
  },
  {
    name: 'Calbayog ',
    city: 'Calbayog City',
    country: 'Philippines',
    IATA: 'CYP',
    ICAO: 'RPVC',
    lat: '12.072699546813965',
    lon: '124.54499816894531',
    timezone: '8'
  },
  {
    name: 'Catarman National ',
    city: 'Catarman',
    country: 'Philippines',
    IATA: 'CRM',
    ICAO: 'RPVF',
    lat: '12.502400398254395',
    lon: '124.63600158691406',
    timezone: '8'
  },
  {
    name: 'Moises R. Espinosa ',
    city: 'Masbate',
    country: 'Philippines',
    IATA: 'MBT',
    ICAO: 'RPVJ',
    lat: '12.369682',
    lon: '123.630095',
    timezone: '8'
  },
  {
    name: 'Roxas ',
    city: 'Roxas City',
    country: 'Philippines',
    IATA: 'RXS',
    ICAO: 'RPVR',
    lat: '11.597700119018555',
    lon: '122.75199890136719',
    timezone: '8'
  },
  {
    name: 'General Enrique Mosconi ',
    city: 'Tartagal',
    country: 'Argentina',
    IATA: 'TTG',
    ICAO: 'SAST',
    lat: '-22.619600296',
    lon: '-63.7937011719',
    timezone: '-3'
  },
  {
    name: 'Las Heras ',
    city: 'Las Heras',
    country: 'Argentina',
    IATA: 'LHS',
    ICAO: 'SAVH',
    lat: '-46.53829956049999',
    lon: '-68.9653015137',
    timezone: '-3'
  },
  {
    name: 'Antoine de Saint Exup\u00e9ry ',
    city: 'San Antonio Oeste',
    country: 'Argentina',
    IATA: 'OES',
    ICAO: 'SAVN',
    lat: '-40.7512',
    lon: '-65.0343',
    timezone: '-3'
  },
  {
    name: 'Lago Argentino ',
    city: 'El Calafate',
    country: 'Argentina',
    IATA: 'ING',
    ICAO: 'SAWA',
    lat: '-50.336102',
    lon: '-72.248596',
    timezone: '-3'
  },
  {
    name: 'Gobernador Gregores ',
    city: 'Gobernador Gregores',
    country: 'Argentina',
    IATA: 'GGS',
    ICAO: 'SAWR',
    lat: '-48.7831',
    lon: '-70.150002',
    timezone: '-3'
  },
  {
    name: 'Santa Teresita ',
    city: 'Santa Teresita',
    country: 'Argentina',
    IATA: 'SST',
    ICAO: 'SAZL',
    lat: '-36.5423',
    lon: '-56.7218',
    timezone: '-3'
  },
  {
    name: 'Necochea ',
    city: 'Necochea',
    country: 'Argentina',
    IATA: 'NEC',
    ICAO: 'SAZO',
    lat: '-38.4831',
    lon: '-58.8172',
    timezone: '-3'
  },
  {
    name: 'Orlando Bezerra de Menezes ',
    city: 'Juazeiro Do Norte',
    country: 'Brazil',
    IATA: 'JDO',
    ICAO: 'SBJU',
    lat: '-7.21895980835',
    lon: '-39.270099639899996',
    timezone: '-3'
  },
  {
    name: 'Coronel Hor\u00e1cio de Mattos ',
    city: 'Len\u00e7\u00f3is',
    country: 'Brazil',
    IATA: 'LEC',
    ICAO: 'SBLE',
    lat: '-12.4822998047',
    lon: '-41.2770004272',
    timezone: '-3'
  },
  {
    name: 'Maca\u00e9 ',
    city: 'Maca\u00e9',
    country: 'Brazil',
    IATA: 'MEA',
    ICAO: 'SBME',
    lat: '-22.343000412',
    lon: '-41.7659988403',
    timezone: '-3'
  },
  {
    name: 'Frank Miloye Milenkowichi\u2013Mar\u00edlia State ',
    city: 'Mar\u00edlia',
    country: 'Brazil',
    IATA: 'MII',
    ICAO: 'SBML',
    lat: '-22.1968994141',
    lon: '-49.926399231',
    timezone: '-3'
  },
  {
    name: 'Vit\u00f3ria da Conquista ',
    city: 'Vit\u00f3ria Da Conquista',
    country: 'Brazil',
    IATA: 'VDC',
    ICAO: 'SBQV',
    lat: '-14.8627996445',
    lon: '-40.8630981445',
    timezone: '-3'
  },
  {
    name: 'Santa Maria ',
    city: 'Santa Maria',
    country: 'Brazil',
    IATA: 'RIA',
    ICAO: 'SBSM',
    lat: '-29.711399',
    lon: '-53.688202',
    timezone: '-3'
  },
  {
    name: 'Toledo ',
    city: 'Toledo',
    country: 'Brazil',
    IATA: 'TOW',
    ICAO: 'SBTD',
    lat: '-24.6863',
    lon: '-53.697498',
    timezone: '-3'
  },
  {
    name: 'Ricardo Garc\u00eda Posada ',
    city: 'El Salvador',
    country: 'Chile',
    IATA: 'ESR',
    ICAO: 'SCES',
    lat: '-26.311100006103516',
    lon: '-69.76519775390625',
    timezone: '-4'
  },
  {
    name: 'Puc\u00f3n ',
    city: 'Pucon',
    country: 'Chile',
    IATA: 'ZPC',
    ICAO: 'SCPC',
    lat: '-39.29280090332031',
    lon: '-71.91590118408203',
    timezone: '-4'
  },
  {
    name: 'Sorocaba ',
    city: 'Sorocaba',
    country: 'Brazil',
    IATA: 'SOD',
    ICAO: 'SDCO',
    lat: '-23.478001',
    lon: '-47.490002',
    timezone: '-3'
  },
  {
    name: 'San Crist\u00f3bal ',
    city: 'San Crist\u00f3bal',
    country: 'Ecuador',
    IATA: 'SCY',
    ICAO: 'SEST',
    lat: '-0.910206',
    lon: '-89.617401',
    timezone: '-6'
  },
  {
    name: 'Camilo Ponce Enriquez ',
    city: 'La Toma (Catamayo)',
    country: 'Ecuador',
    IATA: 'LOH',
    ICAO: 'SETM',
    lat: '-3.99589',
    lon: '-79.371902',
    timezone: '-5'
  },
  {
    name: 'General Rivadeneira ',
    city: 'Esmeraldas',
    country: 'Ecuador',
    IATA: 'ESM',
    ICAO: 'SETN',
    lat: '0.9785190224647522',
    lon: '-79.62660217285156',
    timezone: '-5'
  },
  {
    name: 'Port Stanley ',
    city: 'Stanley',
    country: 'Falkland Islands',
    IATA: 'PSY',
    ICAO: 'SFAL',
    lat: '-51.685699462891',
    lon: '-57.777599334717',
    timezone: '-3'
  },
  {
    name: 'Santa Ana ',
    city: 'Cartago',
    country: 'Colombia',
    IATA: 'CRC',
    ICAO: 'SKGO',
    lat: '4.75818',
    lon: '-75.9557',
    timezone: '-5'
  },
  {
    name: 'La Jagua ',
    city: 'Garz\u00f3n',
    country: 'Colombia',
    IATA: '\\N',
    ICAO: 'SKGZ',
    lat: '2.1464',
    lon: '-75.6944',
    timezone: '-5'
  },
  {
    name: 'Caucaya ',
    city: 'Puerto Legu\u00edzamo',
    country: 'Colombia',
    IATA: 'LQM',
    ICAO: 'SKLG',
    lat: '-0.182278',
    lon: '-74.7708',
    timezone: '-5'
  },
  {
    name: 'La Pedrera ',
    city: 'La Pedrera',
    country: 'Colombia',
    IATA: 'LPD',
    ICAO: 'SKLP',
    lat: '-1.32861',
    lon: '-69.5797',
    timezone: '-5'
  },
  {
    name: 'Reyes Murillo ',
    city: 'Nuqu\u00ed',
    country: 'Colombia',
    IATA: 'NQU',
    ICAO: 'SKNQ',
    lat: '5.6964',
    lon: '-77.2806',
    timezone: '-5'
  },
  {
    name: 'Obando ',
    city: 'Puerto In\u00edrida',
    country: 'Colombia',
    IATA: 'PDA',
    ICAO: 'SKPD',
    lat: '3.85353',
    lon: '-67.9062',
    timezone: '-5'
  },
  {
    name: 'El Yopal ',
    city: 'Yopal',
    country: 'Colombia',
    IATA: 'EYP',
    ICAO: 'SKYP',
    lat: '5.31911',
    lon: '-72.384',
    timezone: '-5'
  },
  {
    name: 'Capit\u00e1n de Av. Emilio Beltr\u00e1n ',
    city: 'Guayaramer\u00edn',
    country: 'Bolivia',
    IATA: 'GYA',
    ICAO: 'SLGY',
    lat: '-10.820599556',
    lon: '-65.3455963135',
    timezone: '-4'
  },
  {
    name: 'Puerto Rico ',
    city: 'Puerto Rico/Manuripi',
    country: 'Bolivia',
    IATA: 'PUR',
    ICAO: 'SLPR',
    lat: '-11.107663',
    lon: '-67.551155',
    timezone: '-4'
  },
  {
    name: 'Capit\u00e1n Av. Selin Zeitun Lopez ',
    city: 'Riberalta',
    country: 'Bolivia',
    IATA: 'RIB',
    ICAO: 'SLRI',
    lat: '-11',
    lon: '-66',
    timezone: '-4'
  },
  {
    name: 'Reyes ',
    city: 'Reyes',
    country: 'Bolivia',
    IATA: 'REY',
    ICAO: 'SLRY',
    lat: '-14.3044',
    lon: '-67.353401',
    timezone: '-4'
  },
  {
    name: 'Capit\u00e1n Av. German Quiroga G. ',
    city: 'San Borja',
    country: 'Bolivia',
    IATA: 'SRJ',
    ICAO: 'SLSB',
    lat: '-14.859199523925781',
    lon: '-66.73750305175781',
    timezone: '-4'
  },
  {
    name: 'Zorg en Hoop ',
    city: 'Paramaribo',
    country: 'Suriname',
    IATA: 'ORG',
    ICAO: 'SMZO',
    lat: '5.81108',
    lon: '-55.190701',
    timezone: '-3'
  },
  {
    name: 'Mucuri ',
    city: 'Mucuri',
    country: 'Brazil',
    IATA: 'MVS',
    ICAO: 'SNMU',
    lat: '-18.048900604248047',
    lon: '-39.864200592041016',
    timezone: '-3'
  },
  {
    name: 'Caballococha ',
    city: 'Caballococha',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPBC',
    lat: '-3.91686010361',
    lon: '-70.5082015991',
    timezone: '-5'
  },
  {
    name: 'Mayor General FAP Armando Revoredo Iglesias ',
    city: 'Cajamarca',
    country: 'Peru',
    IATA: 'CJA',
    ICAO: 'SPJR',
    lat: '-7.1391801834106445',
    lon: '-78.4894027709961',
    timezone: '-5'
  },
  {
    name: 'Alferez Fap David Figueroa Fernandini ',
    city: 'Hu\u00e1nuco',
    country: 'Peru',
    IATA: 'HUU',
    ICAO: 'SPNC',
    lat: '-9.878809928894043',
    lon: '-76.20480346679688',
    timezone: '-5'
  },
  {
    name: 'Maria Reiche Neuman ',
    city: 'Nazca',
    country: 'Peru',
    IATA: 'NZC',
    ICAO: 'SPZA',
    lat: '-14.854000091600001',
    lon: '-74.9615020752',
    timezone: '-5'
  },
  {
    name: 'Santa Rosa ',
    city: 'Santa Rosa',
    country: 'Brazil',
    IATA: 'SRA',
    ICAO: 'SSZR',
    lat: '-27.9067',
    lon: '-54.520401',
    timezone: '-3'
  },
  {
    name: 'El Jag\u00fcel / Punta del Este ',
    city: 'Maldonado',
    country: 'Uruguay',
    IATA: '\\N',
    ICAO: 'SUPE',
    lat: '-34.9169998169',
    lon: '-54.916999816899995',
    timezone: '-3'
  },
  {
    name: 'Escuela Mariscal Sucre ',
    city: 'Maracay',
    country: 'Venezuela',
    IATA: 'MYC',
    ICAO: 'SVBS',
    lat: '10.249978065490723',
    lon: '-67.64942169189453',
    timezone: '-4'
  },
  {
    name: 'Juan Pablo P\u00e9rez Alfonso ',
    city: 'El Vig\u00eda',
    country: 'Venezuela',
    IATA: 'VIG',
    ICAO: 'SVVG',
    lat: '8.624139',
    lon: '-71.672668',
    timezone: '-4'
  },
  {
    name: 'Ji-Paran\u00e1 ',
    city: 'Ji-Paran\u00e1',
    country: 'Brazil',
    IATA: 'JPR',
    ICAO: 'SWJI',
    lat: '-10.870800018299999',
    lon: '-61.8465003967',
    timezone: '-4'
  },
  {
    name: 'Codrington ',
    city: 'Codrington',
    country: 'Antigua and Barbuda',
    IATA: 'BBQ',
    ICAO: 'TAPH',
    lat: '17.635799',
    lon: '-61.828602',
    timezone: '-4'
  },
  {
    name: 'La D\u00e9sirade ',
    city: 'Grande Anse',
    country: 'Guadeloupe',
    IATA: 'DSD',
    ICAO: 'TFFA',
    lat: '16.296902',
    lon: '-61.0844',
    timezone: '-4'
  },
  {
    name: 'Baillif ',
    city: 'Basse Terre',
    country: 'Guadeloupe',
    IATA: 'BBR',
    ICAO: 'TFFB',
    lat: '16.0132999420166',
    lon: '-61.7421989440918',
    timezone: '-4'
  },
  {
    name: 'St-Fran\u00e7ois ',
    city: 'St-Fran\u00e7ois',
    country: 'Guadeloupe',
    IATA: 'SFC',
    ICAO: 'TFFC',
    lat: '16.25779914855957',
    lon: '-61.26250076293945',
    timezone: '-4'
  },
  {
    name: 'Les Bases ',
    city: 'Grand Bourg',
    country: 'Guadeloupe',
    IATA: 'GBJ',
    ICAO: 'TFFM',
    lat: '15.86870002746582',
    lon: '-61.27000045776367',
    timezone: '-4'
  },
  {
    name: 'Vance W. Amory Intl ',
    city: 'Charlestown',
    country: 'Saint Kitts and Nevis',
    IATA: 'NEV',
    ICAO: 'TKPN',
    lat: '17.205699920654297',
    lon: '-62.589900970458984',
    timezone: '-4'
  },
  {
    name: 'Virgin Gorda ',
    city: 'Spanish Town',
    country: 'British Virgin Islands',
    IATA: 'VIJ',
    ICAO: 'TUPW',
    lat: '18.446399688720703',
    lon: '-64.42749786376953',
    timezone: '-4'
  },
  {
    name: 'J F Mitchell ',
    city: 'Bequia',
    country: 'Saint Vincent and the Grenadines',
    IATA: 'BQU',
    ICAO: 'TVSB',
    lat: '12.9884004593',
    lon: '-61.2620010376',
    timezone: '-4'
  },
  {
    name: 'Union Island Intl ',
    city: 'Union Island',
    country: 'Saint Vincent and the Grenadines',
    IATA: 'UNI',
    ICAO: 'TVSU',
    lat: '12.60013484954834',
    lon: '-61.41194534301758',
    timezone: '-4'
  },
  {
    name: 'Kokshetau ',
    city: 'Kokshetau',
    country: 'Kazakhstan',
    IATA: 'KOV',
    ICAO: 'UACK',
    lat: '53.329102',
    lon: '69.594597',
    timezone: '6'
  },
  {
    name: 'Petropavlosk South ',
    city: 'Petropavlosk',
    country: 'Kazakhstan',
    IATA: 'PPK',
    ICAO: 'UACP',
    lat: '54.77470016479492',
    lon: '69.18389892578125',
    timezone: '6'
  },
  {
    name: 'Zhezkazgan ',
    city: 'Zhezkazgan',
    country: 'Kazakhstan',
    IATA: 'DZN',
    ICAO: 'UAKD',
    lat: '47.708302',
    lon: '67.733299',
    timezone: '6'
  },
  {
    name: 'Ust-Kamennogorsk ',
    city: 'Ust Kamenogorsk',
    country: 'Kazakhstan',
    IATA: 'UKK',
    ICAO: 'UASK',
    lat: '50.036598205566406',
    lon: '82.49420166015625',
    timezone: '6'
  },
  {
    name: 'Kostanay West ',
    city: 'Kostanay',
    country: 'Kazakhstan',
    IATA: 'KSN',
    ICAO: 'UAUU',
    lat: '53.20690155029297',
    lon: '63.55030059814453',
    timezone: '6'
  },
  {
    name: 'Ganja ',
    city: 'Ganja',
    country: 'Azerbaijan',
    IATA: 'KVD',
    ICAO: 'UBBG',
    lat: '40.737701416015625',
    lon: '46.31760025024414',
    timezone: '4'
  },
  {
    name: 'Nakhchivan ',
    city: 'Nakhchivan',
    country: 'Azerbaijan',
    IATA: 'NAJ',
    ICAO: 'UBBN',
    lat: '39.18880081176758',
    lon: '45.45840072631836',
    timezone: '4'
  },
  {
    name: 'Chulman ',
    city: 'Neryungri',
    country: 'Russia',
    IATA: 'NER',
    ICAO: 'UELL',
    lat: '56.913898468018',
    lon: '124.91400146484',
    timezone: '9'
  },
  {
    name: 'Polyarny ',
    city: 'Yakutia',
    country: 'Russia',
    IATA: 'PYJ',
    ICAO: 'UERP',
    lat: '66.4003982544',
    lon: '112.029998779',
    timezone: '9'
  },
  {
    name: 'Chokurdakh ',
    city: 'Chokurdah',
    country: 'Russia',
    IATA: 'CKH',
    ICAO: 'UESO',
    lat: '70.62310028076172',
    lon: '147.90199279785156',
    timezone: '11'
  },
  {
    name: 'Cherskiy ',
    city: 'Cherskiy',
    country: 'Russia',
    IATA: 'CYX',
    ICAO: 'UESS',
    lat: '68.7406005859375',
    lon: '161.33799743652344',
    timezone: '11'
  },
  {
    name: 'Tiksi ',
    city: 'Tiksi',
    country: 'Russia',
    IATA: 'IKS',
    ICAO: 'UEST',
    lat: '71.697700500488',
    lon: '128.90299987793',
    timezone: '9'
  },
  {
    name: 'Komsomolsk-on-Amur ',
    city: 'Komsomolsk-on-Amur',
    country: 'Russia',
    IATA: 'KXK',
    ICAO: 'UHKK',
    lat: '50.409000396728516',
    lon: '136.9340057373047',
    timezone: '10'
  },
  {
    name: 'Ugolny ',
    city: 'Anadyr',
    country: 'Russia',
    IATA: 'DYR',
    ICAO: 'UHMA',
    lat: '64.734902',
    lon: '177.740997',
    timezone: '12'
  },
  {
    name: 'Okhotsk ',
    city: 'Okhotsk',
    country: 'Russia',
    IATA: 'OHO',
    ICAO: 'UHOO',
    lat: '59.410064697265625',
    lon: '143.05650329589844',
    timezone: '10'
  },
  {
    name: 'Ujae Atoll ',
    city: 'Ujae Atoll',
    country: 'Marshall Islands',
    IATA: 'UJE',
    ICAO: 'UJAP',
    lat: '8.92805957794',
    lon: '165.761993408',
    timezone: '12'
  },
  {
    name: 'Mariupol Intl ',
    city: 'Mariupol International',
    country: 'Ukraine',
    IATA: 'MPW',
    ICAO: 'UKCM',
    lat: '47.07609939575195',
    lon: '37.44960021972656',
    timezone: '2'
  },
  {
    name: 'Luhansk Intl ',
    city: 'Lugansk',
    country: 'Ukraine',
    IATA: 'VSG',
    ICAO: 'UKCW',
    lat: '48.4174003601',
    lon: '39.3740997314',
    timezone: '2'
  },
  {
    name: 'Zaporizhzhia Intl ',
    city: 'Zaporozhye',
    country: 'Ukraine',
    IATA: 'OZH',
    ICAO: 'UKDE',
    lat: '47.867000579833984',
    lon: '35.31570053100586',
    timezone: '2'
  },
  {
    name: 'Kryvyi Rih Intl ',
    city: 'Krivoy Rog',
    country: 'Ukraine',
    IATA: 'KWG',
    ICAO: 'UKDR',
    lat: '48.04330062866211',
    lon: '33.209999084472656',
    timezone: '2'
  },
  {
    name: 'Kharkiv Intl ',
    city: 'Kharkov',
    country: 'Ukraine',
    IATA: 'HRK',
    ICAO: 'UKHH',
    lat: '49.924800872802734',
    lon: '36.290000915527344',
    timezone: '2'
  },
  {
    name: 'Ivano-Frankivsk Intl ',
    city: 'Ivano-Frankivsk',
    country: 'Ukraine',
    IATA: 'IFO',
    ICAO: 'UKLI',
    lat: '48.88420104980469',
    lon: '24.686100006103516',
    timezone: '2'
  },
  {
    name: 'Chernivtsi Intl ',
    city: 'Chernovtsk',
    country: 'Ukraine',
    IATA: 'CWC',
    ICAO: 'UKLN',
    lat: '48.259300231933594',
    lon: '25.98080062866211',
    timezone: '2'
  },
  {
    name: 'Rivne Intl ',
    city: 'Rivne',
    country: 'Ukraine',
    IATA: 'RWN',
    ICAO: 'UKLR',
    lat: '50.60710144042969',
    lon: '26.141599655151367',
    timezone: '2'
  },
  {
    name: 'Uzhhorod Intl ',
    city: 'Uzhgorod',
    country: 'Ukraine',
    IATA: 'UDJ',
    ICAO: 'UKLU',
    lat: '48.634300231933594',
    lon: '22.263399124145508',
    timezone: '2'
  },
  {
    name: 'Solovki ',
    city: 'Solovetsky Islands',
    country: 'Russia',
    IATA: 'CSH',
    ICAO: 'ULAS',
    lat: '65.0299987793',
    lon: '35.7333335876',
    timezone: '3'
  },
  {
    name: 'Cherepovets ',
    city: 'Cherepovets',
    country: 'Russia',
    IATA: 'CEE',
    ICAO: 'ULBC',
    lat: '59.273601532',
    lon: '38.015800476100004',
    timezone: '3'
  },
  {
    name: 'Amderma ',
    city: 'Amderma',
    country: 'Russia',
    IATA: 'AMV',
    ICAO: 'ULDD',
    lat: '69.76329803466797',
    lon: '61.556400299072266',
    timezone: '3'
  },
  {
    name: 'Kotlas ',
    city: 'Kotlas',
    country: 'Russia',
    IATA: 'KSZ',
    ICAO: 'ULKK',
    lat: '61.235801696777344',
    lon: '46.6974983215332',
    timezone: '3'
  },
  {
    name: 'Petrozavodsk ',
    city: 'Petrozavodsk',
    country: 'Russia',
    IATA: 'PES',
    ICAO: 'ULPB',
    lat: '61.88520050048828',
    lon: '34.154701232910156',
    timezone: '3'
  },
  {
    name: 'Hrodna ',
    city: 'Hrodna',
    country: 'Belarus',
    IATA: 'GNA',
    ICAO: 'UMMG',
    lat: '53.60200119018555',
    lon: '24.053800582885742',
    timezone: '3'
  },
  {
    name: 'Mogilev ',
    city: 'Mogilev',
    country: 'Belarus',
    IATA: 'MVQ',
    ICAO: 'UMOO',
    lat: '53.954898834228516',
    lon: '30.09510040283203',
    timezone: '3'
  },
  {
    name: 'Yeniseysk ',
    city: 'Yeniseysk',
    country: 'Russia',
    IATA: 'EIE',
    ICAO: 'UNII',
    lat: '58.47420120239258',
    lon: '92.11250305175781',
    timezone: '7'
  },
  {
    name: 'Kyzyl ',
    city: 'Kyzyl',
    country: 'Russia',
    IATA: 'KYZ',
    ICAO: 'UNKY',
    lat: '51.66939926147461',
    lon: '94.40059661865234',
    timezone: '7'
  },
  {
    name: 'Spichenkovo ',
    city: 'Novokuznetsk',
    country: 'Russia',
    IATA: 'NOZ',
    ICAO: 'UNWW',
    lat: '53.811401',
    lon: '86.877197',
    timezone: '7'
  },
  {
    name: 'Khatanga ',
    city: 'Khatanga',
    country: 'Russia',
    IATA: 'HTG',
    ICAO: 'UOHH',
    lat: '71.97810363769531',
    lon: '102.49099731445312',
    timezone: '7'
  },
  {
    name: 'Igarka ',
    city: 'Igarka',
    country: 'Russia',
    IATA: 'IAA',
    ICAO: 'UOII',
    lat: '67.43720245361328',
    lon: '86.62190246582031',
    timezone: '7'
  },
  {
    name: 'Khankala Air Base',
    city: 'Grozny',
    country: 'Russia',
    IATA: '\\N',
    ICAO: 'URMG',
    lat: '43.298099517822266',
    lon: '45.78409957885742',
    timezone: '3'
  },
  {
    name: 'Nalchik ',
    city: 'Nalchik',
    country: 'Russia',
    IATA: 'NAL',
    ICAO: 'URMN',
    lat: '43.512901306152344',
    lon: '43.636600494384766',
    timezone: '3'
  },
  {
    name: 'Beslan ',
    city: 'Beslan',
    country: 'Russia',
    IATA: 'OGZ',
    ICAO: 'URMO',
    lat: '43.2051010132',
    lon: '44.6066017151',
    timezone: '3'
  },
  {
    name: 'Elista ',
    city: 'Elista',
    country: 'Russia',
    IATA: 'ESL',
    ICAO: 'URWI',
    lat: '46.3739013671875',
    lon: '44.33089828491211',
    timezone: '3'
  },
  {
    name: 'Aleknagik / New ',
    city: 'Aleknagik',
    country: 'United States',
    IATA: 'WKK',
    ICAO: '5A8',
    lat: '59.2826004028',
    lon: '-158.617996216',
    timezone: '-9'
  },
  {
    name: 'Mercer County ',
    city: 'Bluefield',
    country: 'United States',
    IATA: 'BLF',
    ICAO: 'KBLF',
    lat: '37.295799255371094',
    lon: '-81.20770263671875',
    timezone: '-5'
  },
  {
    name: 'Mid Delta Regional ',
    city: 'Greenville',
    country: 'United States',
    IATA: 'GLH',
    ICAO: 'KGLH',
    lat: '33.4828987121582',
    lon: '-90.98560333251953',
    timezone: '-6'
  },
  {
    name: 'Tri Cities ',
    city: 'Pasco',
    country: 'United States',
    IATA: 'PSC',
    ICAO: 'KPSC',
    lat: '46.26470184326172',
    lon: '-119.11900329589844',
    timezone: '-8'
  },
  {
    name: 'Akutan Seaplane Base',
    city: 'Akutan',
    country: 'United States',
    IATA: 'KQA',
    ICAO: 'KQA',
    lat: '54.1337704415',
    lon: '-165.778895617',
    timezone: '-9'
  },
  {
    name: 'Lopez Island ',
    city: 'Lopez',
    country: 'United States',
    IATA: 'LPS',
    ICAO: 'S31',
    lat: '48.4838981628418',
    lon: '-122.93800354003906',
    timezone: '-8'
  },
  {
    name: 'Salekhard ',
    city: 'Salekhard',
    country: 'Russia',
    IATA: 'SLY',
    ICAO: 'USDD',
    lat: '66.5907974243164',
    lon: '66.61100006103516',
    timezone: '5'
  },
  {
    name: 'Khanty Mansiysk ',
    city: 'Khanty-Mansiysk',
    country: 'Russia',
    IATA: 'HMA',
    ICAO: 'USHH',
    lat: '61.028499603271484',
    lon: '69.08609771728516',
    timezone: '5'
  },
  {
    name: 'Nyagan ',
    city: 'Nyagan',
    country: 'Russia',
    IATA: 'NYA',
    ICAO: 'USHN',
    lat: '62.110001',
    lon: '65.614998',
    timezone: '5'
  },
  {
    name: 'Sovetskiy ',
    city: 'Sovetskiy',
    country: 'Russia',
    IATA: 'OVS',
    ICAO: 'USHS',
    lat: '61.326622009277344',
    lon: '63.60191345214844',
    timezone: '5'
  },
  {
    name: 'Izhevsk ',
    city: 'Izhevsk',
    country: 'Russia',
    IATA: 'IJK',
    ICAO: 'USII',
    lat: '56.82809829711914',
    lon: '53.45750045776367',
    timezone: '4'
  },
  {
    name: 'Pobedilovo ',
    city: 'Kirov',
    country: 'Russia',
    IATA: 'KVX',
    ICAO: 'USKK',
    lat: '58.503299713135',
    lon: '49.348300933838',
    timezone: '3'
  },
  {
    name: 'Nadym ',
    city: 'Nadym',
    country: 'Russia',
    IATA: 'NYM',
    ICAO: 'USMM',
    lat: '65.48090362548828',
    lon: '72.69889831542969',
    timezone: '5'
  },
  {
    name: 'Raduzhny ',
    city: 'Raduzhnyi',
    country: 'Russia',
    IATA: 'RAT',
    ICAO: 'USNR',
    lat: '62.1585998535',
    lon: '77.32890319820001',
    timezone: '5'
  },
  {
    name: 'Nefteyugansk ',
    city: 'Nefteyugansk',
    country: 'Russia',
    IATA: 'NFG',
    ICAO: 'USRN',
    lat: '61.108299255371094',
    lon: '72.6500015258789',
    timezone: '5'
  },
  {
    name: 'Kurgan ',
    city: 'Kurgan',
    country: 'Russia',
    IATA: 'KRO',
    ICAO: 'USUU',
    lat: '55.47529983520508',
    lon: '65.41560363769531',
    timezone: '5'
  },
  {
    name: 'Khudzhand ',
    city: 'Khudzhand',
    country: 'Tajikistan',
    IATA: 'LBD',
    ICAO: 'UTDL',
    lat: '40.21540069580078',
    lon: '69.6947021484375',
    timezone: '5'
  },
  {
    name: 'Andizhan ',
    city: 'Andizhan',
    country: 'Uzbekistan',
    IATA: 'AZN',
    ICAO: 'UTKA',
    lat: '40.7276992798',
    lon: '72.2939987183',
    timezone: '5'
  },
  {
    name: 'Fergana Intl ',
    city: 'Fergana',
    country: 'Uzbekistan',
    IATA: 'FEG',
    ICAO: 'UTKF',
    lat: '40.358798980699994',
    lon: '71.7450027466',
    timezone: '5'
  },
  {
    name: 'Namangan ',
    city: 'Namangan',
    country: 'Uzbekistan',
    IATA: 'NMA',
    ICAO: 'UTKN',
    lat: '40.9846000671',
    lon: '71.5567016602',
    timezone: '5'
  },
  {
    name: 'Nukus ',
    city: 'Nukus',
    country: 'Uzbekistan',
    IATA: 'NCU',
    ICAO: 'UTNN',
    lat: '42.488399505615234',
    lon: '59.62329864501953',
    timezone: '5'
  },
  {
    name: 'Urgench ',
    city: 'Urgench',
    country: 'Uzbekistan',
    IATA: 'UGC',
    ICAO: 'UTNU',
    lat: '41.58430099487305',
    lon: '60.641700744628906',
    timezone: '5'
  },
  {
    name: 'Karshi Khanabad ',
    city: 'Khanabad',
    country: 'Uzbekistan',
    IATA: 'KSQ',
    ICAO: 'UTSL',
    lat: '38.8335990906',
    lon: '65.9215011597',
    timezone: '5'
  },
  {
    name: 'Termez ',
    city: 'Termez',
    country: 'Uzbekistan',
    IATA: 'TMJ',
    ICAO: 'UTST',
    lat: '37.28670120239258',
    lon: '67.30999755859375',
    timezone: '5'
  },
  {
    name: 'Staroselye ',
    city: 'Rybinsk',
    country: 'Russia',
    IATA: 'RYB',
    ICAO: 'UUBK',
    lat: '58.10419845581055',
    lon: '38.92940139770508',
    timezone: '3'
  },
  {
    name: 'Belgorod Intl ',
    city: 'Belgorod',
    country: 'Russia',
    IATA: 'EGO',
    ICAO: 'UUOB',
    lat: '50.643798828125',
    lon: '36.5900993347168',
    timezone: '3'
  },
  {
    name: 'Kursk East ',
    city: 'Kursk',
    country: 'Russia',
    IATA: 'URS',
    ICAO: 'UUOK',
    lat: '51.7505989074707',
    lon: '36.29560089111328',
    timezone: '3'
  },
  {
    name: 'Lipetsk ',
    city: 'Lipetsk',
    country: 'Russia',
    IATA: 'LPK',
    ICAO: 'UUOL',
    lat: '52.70280075073242',
    lon: '39.53779983520508',
    timezone: '3'
  },
  {
    name: 'Vorkuta ',
    city: 'Vorkuta',
    country: 'Russia',
    IATA: 'VKT',
    ICAO: 'UUYW',
    lat: '67.48860168457031',
    lon: '63.993099212646484',
    timezone: '3'
  },
  {
    name: 'Bugulma ',
    city: 'Bugulma',
    country: 'Russia',
    IATA: 'UUA',
    ICAO: 'UWKB',
    lat: '54.63999938964844',
    lon: '52.801700592041016',
    timezone: '3'
  },
  {
    name: 'Yoshkar-Ola ',
    city: 'Yoshkar-Ola',
    country: 'Russia',
    IATA: 'JOK',
    ICAO: 'UWKJ',
    lat: '56.700599670410156',
    lon: '47.904701232910156',
    timezone: '3'
  },
  {
    name: 'Cheboksary ',
    city: 'Cheboksary',
    country: 'Russia',
    IATA: 'CSY',
    ICAO: 'UWKS',
    lat: '56.090301513671875',
    lon: '47.3473014831543',
    timezone: '3'
  },
  {
    name: 'Ulyanovsk East ',
    city: 'Ulyanovsk',
    country: 'Russia',
    IATA: 'ULY',
    ICAO: 'UWLW',
    lat: '54.4010009765625',
    lon: '48.80270004272461',
    timezone: '4'
  },
  {
    name: 'Orsk ',
    city: 'Orsk',
    country: 'Russia',
    IATA: 'OSW',
    ICAO: 'UWOR',
    lat: '51.0724983215332',
    lon: '58.59560012817383',
    timezone: '5'
  },
  {
    name: 'Penza ',
    city: 'Penza',
    country: 'Russia',
    IATA: 'PEZ',
    ICAO: 'UWPP',
    lat: '53.110599517822266',
    lon: '45.02109909057617',
    timezone: '3'
  },
  {
    name: 'Saransk ',
    city: 'Saransk',
    country: 'Russia',
    IATA: 'SKX',
    ICAO: 'UWPS',
    lat: '54.12512969970703',
    lon: '45.212257385253906',
    timezone: '3'
  },
  {
    name: 'Balakovo ',
    city: 'Balakovo',
    country: 'Russia',
    IATA: 'BWO',
    ICAO: 'UWSB',
    lat: '51.8582992554',
    lon: '47.7456016541',
    timezone: '3'
  },
  {
    name: 'Hubli ',
    city: 'Hubli',
    country: 'India',
    IATA: 'HBX',
    ICAO: 'VAHB',
    lat: '15.361700058',
    lon: '75.08489990230001',
    timezone: '5.5'
  },
  {
    name: 'Koggala ',
    city: 'Koggala',
    country: 'Sri Lanka',
    IATA: 'KCT',
    ICAO: 'VCCK',
    lat: '5.993680000305176',
    lon: '80.32029724121094',
    timezone: '5.5'
  },
  {
    name: 'Weerawila ',
    city: 'Wirawila',
    country: 'Sri Lanka',
    IATA: 'WRZ',
    ICAO: 'VCCW',
    lat: '6.25448989868',
    lon: '81.23519897460001',
    timezone: '5.5'
  },
  {
    name: 'Battambang ',
    city: 'Battambang',
    country: 'Cambodia',
    IATA: 'BBM',
    ICAO: 'VDBG',
    lat: '13.095600128173828',
    lon: '103.2239990234375',
    timezone: '7'
  },
  {
    name: 'Shillong ',
    city: 'Shillong',
    country: 'India',
    IATA: 'SHL',
    ICAO: 'VEBI',
    lat: '25.70359992980957',
    lon: '91.97869873046875',
    timezone: '5.5'
  },
  {
    name: 'Lokpriya Gopinath Bordoloi Intl ',
    city: 'Guwahati',
    country: 'India',
    IATA: 'GAU',
    ICAO: 'VEGT',
    lat: '26.10610008239746',
    lon: '91.58589935302734',
    timezone: '5.5'
  },
  {
    name: 'Dimapur ',
    city: 'Dimapur',
    country: 'India',
    IATA: 'DMU',
    ICAO: 'VEMR',
    lat: '25.883899688699998',
    lon: '93.77110290530001',
    timezone: '5.5'
  },
  {
    name: 'Tezpur ',
    city: 'Tezpur',
    country: 'India',
    IATA: 'TEZ',
    ICAO: 'VETZ',
    lat: '26.7091007232666',
    lon: '92.78469848632812',
    timezone: '5.5'
  },
  {
    name: 'Barisal ',
    city: 'Barisal',
    country: 'Bangladesh',
    IATA: 'BZL',
    ICAO: 'VGBR',
    lat: '22.801000595092773',
    lon: '90.30120086669922',
    timezone: '6'
  },
  {
    name: 'Ban Huoeisay ',
    city: 'Huay Xai',
    country: 'Laos',
    IATA: 'HOE',
    ICAO: 'VLHS',
    lat: '20.2572994232',
    lon: '100.43699646',
    timezone: '7'
  },
  {
    name: 'Bharatpur ',
    city: 'Bharatpur',
    country: 'Nepal',
    IATA: 'BHR',
    ICAO: 'VNBP',
    lat: '27.678101',
    lon: '84.429398',
    timezone: '5.75'
  },
  {
    name: 'Bhadrapur ',
    city: 'Chandragarhi',
    country: 'Nepal',
    IATA: 'BDP',
    ICAO: 'VNCG',
    lat: '26.5708007812',
    lon: '88.07959747310001',
    timezone: '5.75'
  },
  {
    name: 'Meghauli ',
    city: 'Meghauli',
    country: 'Nepal',
    IATA: 'MEY',
    ICAO: 'VNMG',
    lat: '27.5774',
    lon: '84.22875',
    timezone: '5.75'
  },
  {
    name: 'Nepalgunj ',
    city: 'Nepalgunj',
    country: 'Nepal',
    IATA: 'KEP',
    ICAO: 'VNNG',
    lat: '28.103599548339844',
    lon: '81.66699981689453',
    timezone: '5.75'
  },
  {
    name: 'Gan Intl ',
    city: 'Gan Island',
    country: 'Maldives',
    IATA: 'GAN',
    ICAO: 'VRMG',
    lat: '-0.693342',
    lon: '73.155602',
    timezone: '5'
  },
  {
    name: 'Hanimaadhoo ',
    city: 'Haa Dhaalu Atoll',
    country: 'Maldives',
    IATA: 'HAQ',
    ICAO: 'VRMH',
    lat: '6.744229793548584',
    lon: '73.17050170898438',
    timezone: '5'
  },
  {
    name: 'Kadhdhoo ',
    city: 'Laamu Atoll',
    country: 'Maldives',
    IATA: 'KDO',
    ICAO: 'VRMK',
    lat: '1.8591699600219727',
    lon: '73.52189636230469',
    timezone: '5'
  },
  {
    name: 'Mae Sot ',
    city: 'Tak',
    country: 'Thailand',
    IATA: 'MAQ',
    ICAO: 'VTPM',
    lat: '16.699899673461914',
    lon: '98.54509735107422',
    timezone: '7'
  },
  {
    name: 'Buon Ma Thuot ',
    city: 'Buonmethuot',
    country: 'Vietnam',
    IATA: 'BMV',
    ICAO: 'VVBM',
    lat: '12.668299675',
    lon: '108.120002747',
    timezone: '7'
  },
  {
    name: 'Cat Bi Intl ',
    city: 'Haiphong',
    country: 'Vietnam',
    IATA: 'HPH',
    ICAO: 'VVCI',
    lat: '20.819400787353516',
    lon: '106.7249984741211',
    timezone: '7'
  },
  {
    name: 'Cam Ranh ',
    city: 'Nha Trang',
    country: 'Vietnam',
    IATA: 'CXR',
    ICAO: 'VVCR',
    lat: '11.998200416564941',
    lon: '109.21900177001953',
    timezone: '7'
  },
  {
    name: 'Co Ong ',
    city: 'Conson',
    country: 'Vietnam',
    IATA: 'VCS',
    ICAO: 'VVCS',
    lat: '8.73183',
    lon: '106.633003',
    timezone: '7'
  },
  {
    name: 'Can Tho Intl ',
    city: 'Can Tho',
    country: 'Vietnam',
    IATA: 'VCA',
    ICAO: 'VVCT',
    lat: '10.085100174',
    lon: '105.711997986',
    timezone: '7'
  },
  {
    name: 'Dien Bien Phu ',
    city: 'Dienbienphu',
    country: 'Vietnam',
    IATA: 'DIN',
    ICAO: 'VVDB',
    lat: '21.3974990845',
    lon: '103.008003235',
    timezone: '7'
  },
  {
    name: 'Phu Cat ',
    city: 'Phucat',
    country: 'Vietnam',
    IATA: 'UIH',
    ICAO: 'VVPC',
    lat: '13.955',
    lon: '109.042',
    timezone: '7'
  },
  {
    name: 'Pleiku ',
    city: 'Pleiku',
    country: 'Vietnam',
    IATA: 'PXU',
    ICAO: 'VVPK',
    lat: '14.004500389099121',
    lon: '108.01699829101562',
    timezone: '7'
  },
  {
    name: 'Vinh ',
    city: 'Vinh',
    country: 'Vietnam',
    IATA: 'VII',
    ICAO: 'VVVH',
    lat: '18.7376003265',
    lon: '105.67099762',
    timezone: '7'
  },
  {
    name: 'Banmaw ',
    city: 'Banmaw',
    country: 'Burma',
    IATA: 'BMO',
    ICAO: 'VYBM',
    lat: '24.268999099731445',
    lon: '97.24620056152344',
    timezone: '6.5'
  },
  {
    name: 'Dawei ',
    city: 'Dawei',
    country: 'Burma',
    IATA: 'TVY',
    ICAO: 'VYDW',
    lat: '14.103899955749512',
    lon: '98.20359802246094',
    timezone: '6.5'
  },
  {
    name: 'Kawthoung ',
    city: 'Kawthoung',
    country: 'Burma',
    IATA: 'KAW',
    ICAO: 'VYKT',
    lat: '10.049300193786621',
    lon: '98.53800201416016',
    timezone: '6.5'
  },
  {
    name: 'Loikaw ',
    city: 'Loikaw',
    country: 'Burma',
    IATA: 'LIW',
    ICAO: 'VYLK',
    lat: '19.691499710083008',
    lon: '97.21479797363281',
    timezone: '6.5'
  },
  {
    name: 'Mawlamyine ',
    city: 'Mawlamyine',
    country: 'Burma',
    IATA: 'MNU',
    ICAO: 'VYMM',
    lat: '16.444700241088867',
    lon: '97.66069793701172',
    timezone: '6.5'
  },
  {
    name: 'Pathein ',
    city: 'Pathein',
    country: 'Burma',
    IATA: 'BSX',
    ICAO: 'VYPN',
    lat: '16.815201',
    lon: '94.7799',
    timezone: '6.5'
  },
  {
    name: 'Pakhokku ',
    city: 'Pakhokku',
    country: 'Burma',
    IATA: 'PKK',
    ICAO: 'VYPU',
    lat: '21.4043',
    lon: '95.11125',
    timezone: '6.5'
  },
  {
    name: 'Sumbawa Besar ',
    city: 'Sumbawa Island',
    country: 'Indonesia',
    IATA: 'SWQ',
    ICAO: 'WADS',
    lat: '-8.48904037475586',
    lon: '117.41200256347656',
    timezone: '8'
  },
  {
    name: 'Tambolaka ',
    city: 'Waikabubak-Sumba Island',
    country: 'Indonesia',
    IATA: 'TMC',
    ICAO: 'WADT',
    lat: '-9.40972',
    lon: '119.244003',
    timezone: '8'
  },
  {
    name: 'Bokondini ',
    city: 'Bokondini-Papua Island',
    country: 'Indonesia',
    IATA: 'BUI',
    ICAO: 'WAJB',
    lat: '-3.6822',
    lon: '138.6755',
    timezone: '9'
  },
  {
    name: 'Senggeh ',
    city: 'Senggeh-Papua Island',
    country: 'Indonesia',
    IATA: 'SEH',
    ICAO: 'WAJS',
    lat: '-3.45',
    lon: '140.779',
    timezone: '9'
  },
  {
    name: 'Tanjung Harapan ',
    city: 'Tanjung Selor-Borneo Island',
    country: 'Indonesia',
    IATA: 'TJS',
    ICAO: 'WALG',
    lat: '2.83583333333',
    lon: '117.373611111',
    timezone: '8'
  },
  {
    name: 'Datadawai ',
    city: 'Datadawai-Borneo Island',
    country: 'Indonesia',
    IATA: 'DTD',
    ICAO: 'WALJ',
    lat: '0.8106',
    lon: '114.5306',
    timezone: '8'
  },
  {
    name: 'Kalimarau ',
    city: 'Tanjung Redep-Borneo Island',
    country: 'Indonesia',
    IATA: 'BEJ',
    ICAO: 'WALK',
    lat: '2.1555',
    lon: '117.431999',
    timezone: '8'
  },
  {
    name: 'Warukin ',
    city: 'Tanjung-Borneo Island',
    country: 'Indonesia',
    IATA: 'TJG',
    ICAO: 'WAON',
    lat: '-2.21655988693',
    lon: '115.435997009',
    timezone: '8'
  },
  {
    name: 'Sampit(Hasan) ',
    city: 'Sampit-Borneo Island',
    country: 'Indonesia',
    IATA: 'SMQ',
    ICAO: 'WAOS',
    lat: '-2.49919009209',
    lon: '112.974998474',
    timezone: '7'
  },
  {
    name: 'Dumatumbun ',
    city: 'Langgur-Kei Islands',
    country: 'Indonesia',
    IATA: 'LUV',
    ICAO: 'WAPL',
    lat: '-5.661620140075684',
    lon: '132.7310028076172',
    timezone: '9'
  },
  {
    name: 'Mali ',
    city: 'Alor Island',
    country: 'Indonesia',
    IATA: 'ARD',
    ICAO: 'WATM',
    lat: '-8.132340431213379',
    lon: '124.59700012207031',
    timezone: '8'
  },
  {
    name: 'Belaga ',
    city: 'Belaga',
    country: 'Malaysia',
    IATA: 'BLG',
    ICAO: 'WBGC',
    lat: '2.65000009537',
    lon: '113.766998291',
    timezone: '8'
  },
  {
    name: 'Long Lellang ',
    city: 'Long Datih',
    country: 'Malaysia',
    IATA: 'LGL',
    ICAO: 'WBGF',
    lat: '3.4210000038099997',
    lon: '115.153999329',
    timezone: '8'
  },
  {
    name: 'Long Seridan ',
    city: 'Long Seridan',
    country: 'Malaysia',
    IATA: 'ODN',
    ICAO: 'WBGI',
    lat: '3.9670000076293945',
    lon: '115.05000305175781',
    timezone: '8'
  },
  {
    name: 'Mukah ',
    city: 'Mukah',
    country: 'Malaysia',
    IATA: 'MKM',
    ICAO: 'WBGK',
    lat: '2.90639',
    lon: '112.080002',
    timezone: '8'
  },
  {
    name: 'Bakalalan ',
    city: 'Bakalalan',
    country: 'Malaysia',
    IATA: 'BKM',
    ICAO: 'WBGQ',
    lat: '3.9739999771118164',
    lon: '115.61799621582031',
    timezone: '8'
  },
  {
    name: 'Lawas ',
    city: 'Lawas',
    country: 'Malaysia',
    IATA: 'LWY',
    ICAO: 'WBGW',
    lat: '4.84917',
    lon: '115.407997',
    timezone: '8'
  },
  {
    name: 'Bario ',
    city: 'Bario',
    country: 'Malaysia',
    IATA: 'BBN',
    ICAO: 'WBGZ',
    lat: '3.7338900566101074',
    lon: '115.47899627685547',
    timezone: '8'
  },
  {
    name: 'Tomanggong ',
    city: 'Tomanggong',
    country: 'Malaysia',
    IATA: 'TMG',
    ICAO: 'WBKM',
    lat: '5.40257',
    lon: '118.65763',
    timezone: '8'
  },
  {
    name: 'Kudat ',
    city: 'Kudat',
    country: 'Malaysia',
    IATA: 'KUD',
    ICAO: 'WBKT',
    lat: '6.922500133514404',
    lon: '116.83599853515625',
    timezone: '8'
  },
  {
    name: 'Radin Inten II (Branti) ',
    city: 'Bandar Lampung-Sumatra Island',
    country: 'Indonesia',
    IATA: 'TKG',
    ICAO: 'WIAT',
    lat: '-5.240556',
    lon: '105.175556',
    timezone: '7'
  },
  {
    name: 'Halim Perdanakusuma Intl ',
    city: 'Jakarta',
    country: 'Indonesia',
    IATA: 'HLP',
    ICAO: 'WIHH',
    lat: '-6.266610145568848',
    lon: '106.89099884033203',
    timezone: '7'
  },
  {
    name: 'Ranai ',
    city: 'Ranai-Natuna Besar Island',
    country: 'Indonesia',
    IATA: 'NTX',
    ICAO: 'WION',
    lat: '3.90871',
    lon: '108.388',
    timezone: '7'
  },
  {
    name: 'Pangsuma ',
    city: 'Putussibau-Borneo Island',
    country: 'Indonesia',
    IATA: 'PSU',
    ICAO: 'WIOP',
    lat: '0.8355780243873596',
    lon: '112.93699645996094',
    timezone: '7'
  },
  {
    name: 'Sintang(Susilo) ',
    city: 'Sintang-Borneo Island',
    country: 'Indonesia',
    IATA: 'SQG',
    ICAO: 'WIOS',
    lat: '0.06361900269985199',
    lon: '111.4729995727539',
    timezone: '7'
  },
  {
    name: 'Pendopo ',
    city: 'Talang Gudang-Sumatra Island',
    country: 'Indonesia',
    IATA: 'PDO',
    ICAO: 'WIPQ',
    lat: '-3.2860701084136963',
    lon: '103.87999725341797',
    timezone: '7'
  },
  {
    name: 'Malikus Saleh ',
    city: 'Lhok Seumawe-Sumatra Island',
    country: 'Indonesia',
    IATA: 'LSW',
    ICAO: 'WITM',
    lat: '5.226679801940918',
    lon: '96.95030212402344',
    timezone: '7'
  },
  {
    name: 'Pulau Pangkor ',
    city: 'Pangkor Island',
    country: 'Malaysia',
    IATA: 'PKG',
    ICAO: 'WMPA',
    lat: '4.244719982147217',
    lon: '100.5530014038086',
    timezone: '8'
  },
  {
    name: 'Long Bawan ',
    city: 'Long Bawan-Borneo Island',
    country: 'Indonesia',
    IATA: 'LBW',
    ICAO: 'WRLB',
    lat: '3.9028',
    lon: '115.6921',
    timezone: '8'
  },
  {
    name: 'Nunukan ',
    city: 'Nunukan-Nunukan Island',
    country: 'Indonesia',
    IATA: 'NNX',
    ICAO: 'WRLF',
    lat: '4.13333333333',
    lon: '117.666666667',
    timezone: '8'
  },
  {
    name: 'Long Apung ',
    city: 'Long Apung-Borneo Island',
    country: 'Indonesia',
    IATA: 'LPU',
    ICAO: 'WRLP',
    lat: '1.704486',
    lon: '114.970297',
    timezone: '8'
  },
  {
    name: 'Albany ',
    city: 'Albany',
    country: 'Australia',
    IATA: 'ALH',
    ICAO: 'YABA',
    lat: '-34.94329833984375',
    lon: '117.80899810791016',
    timezone: '8'
  },
  {
    name: 'Argyle ',
    city: 'Argyle',
    country: 'Australia',
    IATA: 'GYL',
    ICAO: 'YARG',
    lat: '-16.6369',
    lon: '128.451004',
    timezone: '8'
  },
  {
    name: 'Aurukun ',
    city: 'Aurukun',
    country: 'Australia',
    IATA: 'AUU',
    ICAO: 'YAUR',
    lat: '-13.354067',
    lon: '141.72065',
    timezone: '10'
  },
  {
    name: 'Barcaldine ',
    city: 'Barcaldine',
    country: 'Australia',
    IATA: 'BCI',
    ICAO: 'YBAR',
    lat: '-23.5652999878',
    lon: '145.307006836',
    timezone: '10'
  },
  {
    name: 'Badu Island ',
    city: 'Badu Island',
    country: 'Australia',
    IATA: 'BDD',
    ICAO: 'YBAU',
    lat: '-10.149999618499999',
    lon: '142.1734',
    timezone: '10'
  },
  {
    name: 'Birdsville ',
    city: 'Birdsville',
    country: 'Australia',
    IATA: 'BVI',
    ICAO: 'YBDV',
    lat: '-25.897499084472656',
    lon: '139.34800720214844',
    timezone: '10'
  },
  {
    name: 'Broken Hill ',
    city: 'Broken Hill',
    country: 'Australia',
    IATA: 'BHQ',
    ICAO: 'YBHI',
    lat: '-32.0013999939',
    lon: '141.472000122',
    timezone: '9.5'
  },
  {
    name: 'Hamilton Island ',
    city: 'Hamilton Island',
    country: 'Australia',
    IATA: 'HTI',
    ICAO: 'YBHM',
    lat: '-20.3581008911',
    lon: '148.95199585',
    timezone: '10'
  },
  {
    name: 'Bedourie ',
    city: 'Bedourie',
    country: 'Australia',
    IATA: 'BEU',
    ICAO: 'YBIE',
    lat: '-24.346099853515625',
    lon: '139.4600067138672',
    timezone: '10'
  },
  {
    name: 'Bourke ',
    city: 'Bourke',
    country: 'Australia',
    IATA: 'BRK',
    ICAO: 'YBKE',
    lat: '-30.039199829101562',
    lon: '145.95199584960938',
    timezone: '10'
  },
  {
    name: 'Burketown ',
    city: 'Burketown',
    country: 'Australia',
    IATA: 'BUC',
    ICAO: 'YBKT',
    lat: '-17.748600006103516',
    lon: '139.53399658203125',
    timezone: '10'
  },
  {
    name: 'Boigu ',
    city: 'Boigu',
    country: 'Australia',
    IATA: 'GIC',
    ICAO: 'YBOI',
    lat: '-9.23278045654',
    lon: '142.218002319',
    timezone: '10'
  },
  {
    name: 'Oakey ',
    city: 'Oakey',
    country: 'Australia',
    IATA: 'OKY',
    ICAO: 'YBOK',
    lat: '-27.411399841308594',
    lon: '151.73500061035156',
    timezone: '10'
  },
  {
    name: 'Boulia ',
    city: 'Boulia',
    country: 'Australia',
    IATA: 'BQL',
    ICAO: 'YBOU',
    lat: '-22.913299560546875',
    lon: '139.89999389648438',
    timezone: '10'
  },
  {
    name: 'Bathurst ',
    city: 'Bathurst',
    country: 'Australia',
    IATA: 'BHS',
    ICAO: 'YBTH',
    lat: '-33.4094009399',
    lon: '149.651992798',
    timezone: '10'
  },
  {
    name: 'Blackwater ',
    city: 'Blackwater',
    country: 'Australia',
    IATA: 'BLT',
    ICAO: 'YBTR',
    lat: '-23.603099822998047',
    lon: '148.8070068359375',
    timezone: '10'
  },
  {
    name: 'Carnarvon ',
    city: 'Carnarvon',
    country: 'Australia',
    IATA: 'CVQ',
    ICAO: 'YCAR',
    lat: '-24.880211',
    lon: '113.67174',
    timezone: '8'
  },
  {
    name: 'Cobar ',
    city: 'Cobar',
    country: 'Australia',
    IATA: 'CAZ',
    ICAO: 'YCBA',
    lat: '-31.538299560546875',
    lon: '145.79400634765625',
    timezone: '10'
  },
  {
    name: 'Coober Pedy ',
    city: 'Coober Pedy',
    country: 'Australia',
    IATA: 'CPD',
    ICAO: 'YCBP',
    lat: '-29.040000915527344',
    lon: '134.7209930419922',
    timezone: '9.5'
  },
  {
    name: 'Coconut Island ',
    city: 'Coconut Island',
    country: 'Australia',
    IATA: 'CNC',
    ICAO: 'YCCT',
    lat: '-10.050000190734863',
    lon: '143.07000732421875',
    timezone: '10'
  },
  {
    name: 'Cloncurry ',
    city: 'Cloncurry',
    country: 'Australia',
    IATA: 'CNJ',
    ICAO: 'YCCY',
    lat: '-20.668600082399998',
    lon: '140.503997803',
    timezone: '10'
  },
  {
    name: 'Ceduna ',
    city: 'Ceduna',
    country: 'Australia',
    IATA: 'CED',
    ICAO: 'YCDU',
    lat: '-32.13059997558594',
    lon: '133.7100067138672',
    timezone: '9.5'
  },
  {
    name: 'Cooktown ',
    city: 'Cooktown',
    country: 'Australia',
    IATA: 'CTN',
    ICAO: 'YCKN',
    lat: '-15.444700241088867',
    lon: '145.1840057373047',
    timezone: '10'
  },
  {
    name: 'Cunnamulla ',
    city: 'Cunnamulla',
    country: 'Australia',
    IATA: 'CMA',
    ICAO: 'YCMU',
    lat: '-28.030000686645508',
    lon: '145.6219940185547',
    timezone: '10'
  },
  {
    name: 'Coonamble ',
    city: 'Coonamble',
    country: 'Australia',
    IATA: 'CNB',
    ICAO: 'YCNM',
    lat: '-30.983299255371094',
    lon: '148.37600708007812',
    timezone: '10'
  },
  {
    name: 'Coen ',
    city: 'Coen',
    country: 'Australia',
    IATA: 'CUQ',
    ICAO: 'YCOE',
    lat: '-13.761133',
    lon: '143.113311',
    timezone: '10'
  },
  {
    name: 'Cooma Snowy Mountains ',
    city: 'Cooma',
    country: 'Australia',
    IATA: 'OOM',
    ICAO: 'YCOM',
    lat: '-36.3005981445',
    lon: '148.973999023',
    timezone: '10'
  },
  {
    name: 'Doomadgee ',
    city: 'Doomadgee',
    country: 'Australia',
    IATA: 'DMD',
    ICAO: 'YDMG',
    lat: '-17.9403',
    lon: '138.822006',
    timezone: '10'
  },
  {
    name: 'Darnley Island ',
    city: 'Darnley Island',
    country: 'Australia',
    IATA: 'NLF',
    ICAO: 'YDNI',
    lat: '-9.583330154418945',
    lon: '143.76699829101562',
    timezone: '10'
  },
  {
    name: 'Devonport ',
    city: 'Devonport',
    country: 'Australia',
    IATA: 'DPO',
    ICAO: 'YDPO',
    lat: '-41.1697006226',
    lon: '146.429992676',
    timezone: '10'
  },
  {
    name: 'Elcho Island ',
    city: 'Elcho Island',
    country: 'Australia',
    IATA: 'ELC',
    ICAO: 'YELD',
    lat: '-12.019399642899998',
    lon: '135.570999146',
    timezone: '9.5'
  },
  {
    name: 'Esperance ',
    city: 'Esperance',
    country: 'Australia',
    IATA: 'EPR',
    ICAO: 'YESP',
    lat: '-33.684399',
    lon: '121.822998',
    timezone: '8'
  },
  {
    name: 'Flinders Island ',
    city: 'Flinders Island',
    country: 'Australia',
    IATA: 'FLS',
    ICAO: 'YFLI',
    lat: '-40.0917015076',
    lon: '147.992996216',
    timezone: '10'
  },
  {
    name: 'Geraldton ',
    city: 'Geraldton',
    country: 'Australia',
    IATA: 'GET',
    ICAO: 'YGEL',
    lat: '-28.796101',
    lon: '114.707001',
    timezone: '8'
  },
  {
    name: 'Gladstone ',
    city: 'Gladstone',
    country: 'Australia',
    IATA: 'GLT',
    ICAO: 'YGLA',
    lat: '-23.869699',
    lon: '151.223007',
    timezone: '10'
  },
  {
    name: 'Groote Eylandt ',
    city: 'Groote Eylandt',
    country: 'Australia',
    IATA: 'GTE',
    ICAO: 'YGTE',
    lat: '-13.975000381500001',
    lon: '136.460006714',
    timezone: '9.5'
  },
  {
    name: 'Griffith ',
    city: 'Griffith',
    country: 'Australia',
    IATA: 'GFF',
    ICAO: 'YGTH',
    lat: '-34.2508010864',
    lon: '146.067001343',
    timezone: '10'
  },
  {
    name: 'Horn Island ',
    city: 'Horn Island',
    country: 'Australia',
    IATA: 'HID',
    ICAO: 'YHID',
    lat: '-10.586400032',
    lon: '142.289993286',
    timezone: '10'
  },
  {
    name: 'Hooker Creek ',
    city: 'Hooker Creek',
    country: 'Australia',
    IATA: 'HOK',
    ICAO: 'YHOO',
    lat: '-18.3367004395',
    lon: '130.638000488',
    timezone: '9.5'
  },
  {
    name: 'Mount Hotham ',
    city: 'Mount Hotham',
    country: 'Australia',
    IATA: 'MHU',
    ICAO: 'YHOT',
    lat: '-37.0475006104',
    lon: '147.333999634',
    timezone: '10'
  },
  {
    name: 'Hughenden ',
    city: 'Hughenden',
    country: 'Australia',
    IATA: 'HGD',
    ICAO: 'YHUG',
    lat: '-20.815000534057617',
    lon: '144.22500610351562',
    timezone: '10'
  },
  {
    name: 'Julia Creek ',
    city: 'Julia Creek',
    country: 'Australia',
    IATA: 'JCK',
    ICAO: 'YJLC',
    lat: '-20.66830062866211',
    lon: '141.72300720214844',
    timezone: '10'
  },
  {
    name: 'Kalbarri ',
    city: 'Kalbarri',
    country: 'Australia',
    IATA: 'KAX',
    ICAO: 'YKBR',
    lat: '-27.692813',
    lon: '114.259169',
    timezone: '8'
  },
  {
    name: 'King Island ',
    city: 'King Island',
    country: 'Australia',
    IATA: 'KNS',
    ICAO: 'YKII',
    lat: '-39.877498626708984',
    lon: '143.8780059814453',
    timezone: '10'
  },
  {
    name: 'Kalkgurung ',
    city: 'Kalkgurung',
    country: 'Australia',
    IATA: 'KFG',
    ICAO: 'YKKG',
    lat: '-17.431900024414062',
    lon: '130.80799865722656',
    timezone: '9.5'
  },
  {
    name: 'Karumba ',
    city: 'Karumba',
    country: 'Australia',
    IATA: 'KRB',
    ICAO: 'YKMB',
    lat: '-17.45669937133789',
    lon: '140.8300018310547',
    timezone: '10'
  },
  {
    name: 'Kowanyama ',
    city: 'Kowanyama',
    country: 'Australia',
    IATA: 'KWM',
    ICAO: 'YKOW',
    lat: '-15.485600471496582',
    lon: '141.75100708007812',
    timezone: '10'
  },
  {
    name: 'Kubin ',
    city: 'Kubin',
    country: 'Australia',
    IATA: 'KUG',
    ICAO: 'YKUB',
    lat: '-10.225000381500001',
    lon: '142.218002319',
    timezone: '10'
  },
  {
    name: 'Leonora ',
    city: 'Leonora',
    country: 'Australia',
    IATA: 'LNO',
    ICAO: 'YLEO',
    lat: '-28.87809944152832',
    lon: '121.31500244140625',
    timezone: '8'
  },
  {
    name: 'Lake Evella ',
    city: 'Lake Evella',
    country: 'Australia',
    IATA: 'LEL',
    ICAO: 'YLEV',
    lat: '-12.498900413513184',
    lon: '135.80599975585938',
    timezone: '9.5'
  },
  {
    name: 'Lord Howe Island ',
    city: 'Lord Howe Island',
    country: 'Australia',
    IATA: 'LDH',
    ICAO: 'YLHI',
    lat: '-31.5382995605',
    lon: '159.07699585',
    timezone: '10.5'
  },
  {
    name: 'Lockhart River ',
    city: 'Lockhart River',
    country: 'Australia',
    IATA: 'IRG',
    ICAO: 'YLHR',
    lat: '-12.7869',
    lon: '143.304993',
    timezone: '10'
  },
  {
    name: 'Lismore ',
    city: 'Lismore',
    country: 'Australia',
    IATA: 'LSY',
    ICAO: 'YLIS',
    lat: '-28.8302993774',
    lon: '153.259994507',
    timezone: '10'
  },
  {
    name: 'Lightning Ridge ',
    city: 'Lightning Ridge',
    country: 'Australia',
    IATA: 'LHG',
    ICAO: 'YLRD',
    lat: '-29.45669937133789',
    lon: '147.98399353027344',
    timezone: '10'
  },
  {
    name: 'Longreach ',
    city: 'Longreach',
    country: 'Australia',
    IATA: 'LRE',
    ICAO: 'YLRE',
    lat: '-23.4342002869',
    lon: '144.279998779',
    timezone: '10'
  },
  {
    name: 'Leinster ',
    city: 'Leinster',
    country: 'Australia',
    IATA: 'LER',
    ICAO: 'YLST',
    lat: '-27.843299865722656',
    lon: '120.7030029296875',
    timezone: '8'
  },
  {
    name: 'Laverton ',
    city: 'Laverton',
    country: 'Australia',
    IATA: 'LVO',
    ICAO: 'YLTN',
    lat: '-28.61359977722168',
    lon: '122.42400360107422',
    timezone: '8'
  },
  {
    name: 'Mabuiag Island ',
    city: 'Mabuiag Island',
    country: 'Australia',
    IATA: 'UBB',
    ICAO: 'YMAA',
    lat: '-9.949999809265137',
    lon: '142.18299865722656',
    timezone: '10'
  },
  {
    name: 'Meekatharra ',
    city: 'Meekatharra',
    country: 'Australia',
    IATA: 'MKR',
    ICAO: 'YMEK',
    lat: '-26.6117000579834',
    lon: '118.5479965209961',
    timezone: '8'
  },
  {
    name: 'Merimbula ',
    city: 'Merimbula',
    country: 'Australia',
    IATA: 'MIM',
    ICAO: 'YMER',
    lat: '-36.9085998535',
    lon: '149.901000977',
    timezone: '10'
  },
  {
    name: 'Milingimbi ',
    city: 'Milingimbi',
    country: 'Australia',
    IATA: 'MGT',
    ICAO: 'YMGB',
    lat: '-12.0944004059',
    lon: '134.893997192',
    timezone: '9.5'
  },
  {
    name: 'Maningrida ',
    city: 'Maningrida',
    country: 'Australia',
    IATA: 'MNG',
    ICAO: 'YMGD',
    lat: '-12.0560998917',
    lon: '134.23399353',
    timezone: '9.5'
  },
  {
    name: 'McArthur River Mine ',
    city: 'McArthur River Mine',
    country: 'Australia',
    IATA: 'MCV',
    ICAO: 'YMHU',
    lat: '-16.4424991608',
    lon: '136.083999634',
    timezone: '9.5'
  },
  {
    name: 'Mildura ',
    city: 'Mildura',
    country: 'Australia',
    IATA: 'MQL',
    ICAO: 'YMIA',
    lat: '-34.229198455799995',
    lon: '142.085998535',
    timezone: '10'
  },
  {
    name: 'Mount Magnet ',
    city: 'Mount Magnet',
    country: 'Australia',
    IATA: 'MMG',
    ICAO: 'YMOG',
    lat: '-28.116100311279297',
    lon: '117.84200286865234',
    timezone: '8'
  },
  {
    name: 'Moree ',
    city: 'Moree',
    country: 'Australia',
    IATA: 'MRZ',
    ICAO: 'YMOR',
    lat: '-29.498899459799997',
    lon: '149.845001221',
    timezone: '10'
  },
  {
    name: 'Moranbah ',
    city: 'Moranbah',
    country: 'Australia',
    IATA: 'MOV',
    ICAO: 'YMRB',
    lat: '-22.057800293',
    lon: '148.07699585',
    timezone: '10'
  },
  {
    name: 'Moruya ',
    city: 'Moruya',
    country: 'Australia',
    IATA: 'MYA',
    ICAO: 'YMRY',
    lat: '-35.8978004456',
    lon: '150.143997192',
    timezone: '10'
  },
  {
    name: 'Mount Gambier ',
    city: 'Mount Gambier',
    country: 'Australia',
    IATA: 'MGB',
    ICAO: 'YMTG',
    lat: '-37.745601654052734',
    lon: '140.78500366210938',
    timezone: '9.5'
  },
  {
    name: 'Mornington Island ',
    city: 'Mornington Island',
    country: 'Australia',
    IATA: 'ONG',
    ICAO: 'YMTI',
    lat: '-16.662500381469727',
    lon: '139.17799377441406',
    timezone: '10'
  },
  {
    name: 'Murray Island ',
    city: 'Murray Island',
    country: 'Australia',
    IATA: 'MYI',
    ICAO: 'YMUI',
    lat: '-9.91666984558',
    lon: '144.054992676',
    timezone: '10'
  },
  {
    name: 'Maryborough ',
    city: 'Maryborough',
    country: 'Australia',
    IATA: 'MBH',
    ICAO: 'YMYB',
    lat: '-25.5133',
    lon: '152.714996',
    timezone: '10'
  },
  {
    name: 'Narrandera ',
    city: 'Narrandera',
    country: 'Australia',
    IATA: 'NRA',
    ICAO: 'YNAR',
    lat: '-34.7022018433',
    lon: '146.511993408',
    timezone: '10'
  },
  {
    name: 'Narrabri ',
    city: 'Narrabri',
    country: 'Australia',
    IATA: 'NAA',
    ICAO: 'YNBR',
    lat: '-30.3192005157',
    lon: '149.82699585',
    timezone: '10'
  },
  {
    name: 'Normanton ',
    city: 'Normanton',
    country: 'Australia',
    IATA: 'NTN',
    ICAO: 'YNTN',
    lat: '-17.68409',
    lon: '141.069664',
    timezone: '10'
  },
  {
    name: 'Newman ',
    city: 'Newman',
    country: 'Australia',
    IATA: 'ZNE',
    ICAO: 'YNWN',
    lat: '-23.417800903299998',
    lon: '119.803001404',
    timezone: '8'
  },
  {
    name: 'Olympic Dam ',
    city: 'Olympic Dam',
    country: 'Australia',
    IATA: 'OLP',
    ICAO: 'YOLD',
    lat: '-30.485000610399997',
    lon: '136.876998901',
    timezone: '9.5'
  },
  {
    name: 'Port Augusta ',
    city: 'Argyle',
    country: 'Australia',
    IATA: 'PUG',
    ICAO: 'YPAG',
    lat: '-32.506900787353516',
    lon: '137.7169952392578',
    timezone: '9.5'
  },
  {
    name: 'Palm Island ',
    city: 'Palm Island',
    country: 'Australia',
    IATA: 'PMK',
    ICAO: 'YPAM',
    lat: '-18.755300521850586',
    lon: '146.58099365234375',
    timezone: '10'
  },
  {
    name: 'Paraburdoo ',
    city: 'Paraburdoo',
    country: 'Australia',
    IATA: 'PBO',
    ICAO: 'YPBO',
    lat: '-23.1711006165',
    lon: '117.745002747',
    timezone: '8'
  },
  {
    name: 'Cocos (Keeling) Islands ',
    city: 'Cocos Keeling Island',
    country: 'Cocos (Keeling) Islands',
    IATA: 'CCK',
    ICAO: 'YPCC',
    lat: '-12.1883001328',
    lon: '96.8339004517',
    timezone: '6.5'
  },
  {
    name: 'Gove ',
    city: 'Gove',
    country: 'Australia',
    IATA: 'GOV',
    ICAO: 'YPGV',
    lat: '-12.269399642899998',
    lon: '136.817993164',
    timezone: '9.5'
  },
  {
    name: 'Parkes ',
    city: 'Parkes',
    country: 'Australia',
    IATA: 'PKE',
    ICAO: 'YPKS',
    lat: '-33.131401062',
    lon: '148.238998413',
    timezone: '10'
  },
  {
    name: 'Port Lincoln ',
    city: 'Port Lincoln',
    country: 'Australia',
    IATA: 'PLO',
    ICAO: 'YPLC',
    lat: '-34.6053009033',
    lon: '135.880004883',
    timezone: '9.5'
  },
  {
    name: 'Pormpuraaw ',
    city: 'Pormpuraaw',
    country: 'Australia',
    IATA: 'EDR',
    ICAO: 'YPMP',
    lat: '-14.896451',
    lon: '141.60908',
    timezone: '10'
  },
  {
    name: 'Port Macquarie ',
    city: 'Port Macquarie',
    country: 'Australia',
    IATA: 'PQQ',
    ICAO: 'YPMQ',
    lat: '-31.4358005524',
    lon: '152.863006592',
    timezone: '10'
  },
  {
    name: 'Portland ',
    city: 'Portland',
    country: 'Australia',
    IATA: 'PTJ',
    ICAO: 'YPOD',
    lat: '-38.31809997558594',
    lon: '141.4709930419922',
    timezone: '10'
  },
  {
    name: 'Quilpie ',
    city: 'Quilpie',
    country: 'Australia',
    IATA: 'ULP',
    ICAO: 'YQLP',
    lat: '-26.612199783325195',
    lon: '144.2530059814453',
    timezone: '10'
  },
  {
    name: 'Ramingining ',
    city: 'Ramingining',
    country: 'Australia',
    IATA: 'RAM',
    ICAO: 'YRNG',
    lat: '-12.356399536132812',
    lon: '134.8979949951172',
    timezone: '9.5'
  },
  {
    name: 'Roma ',
    city: 'Roma',
    country: 'Australia',
    IATA: 'RMA',
    ICAO: 'YROM',
    lat: '-26.545000076300003',
    lon: '148.774993896',
    timezone: '10'
  },
  {
    name: 'St George ',
    city: 'St George',
    country: 'Australia',
    IATA: 'SGO',
    ICAO: 'YSGE',
    lat: '-28.049699783325195',
    lon: '148.59500122070312',
    timezone: '10'
  },
  {
    name: 'Shark Bay ',
    city: 'Shark Bay',
    country: 'Australia',
    IATA: 'MJK',
    ICAO: 'YSHK',
    lat: '-25.8938999176',
    lon: '113.577003479',
    timezone: '8'
  },
  {
    name: 'Saibai Island ',
    city: 'Saibai Island',
    country: 'Australia',
    IATA: 'SBR',
    ICAO: 'YSII',
    lat: '-9.378330230710002',
    lon: '142.625',
    timezone: '10'
  },
  {
    name: 'Strahan ',
    city: 'Strahan',
    country: 'Australia',
    IATA: 'SRN',
    ICAO: 'YSRN',
    lat: '-42.154998779296875',
    lon: '145.29200744628906',
    timezone: '10'
  },
  {
    name: 'Thargomindah ',
    city: 'Thargomindah',
    country: 'Australia',
    IATA: 'XTG',
    ICAO: 'YTGM',
    lat: '-27.986400604248047',
    lon: '143.81100463867188',
    timezone: '10'
  },
  {
    name: 'Tennant Creek ',
    city: 'Tennant Creek',
    country: 'Australia',
    IATA: 'TCA',
    ICAO: 'YTNK',
    lat: '-19.6343994140625',
    lon: '134.18299865722656',
    timezone: '9.5'
  },
  {
    name: 'Victoria River Downs ',
    city: 'Victoria River Downs',
    country: 'Australia',
    IATA: 'VCD',
    ICAO: 'YVRD',
    lat: '-16.402124404907227',
    lon: '131.00497436523438',
    timezone: '9.5'
  },
  {
    name: 'Warraber Island ',
    city: 'Sue Islet',
    country: 'Australia',
    IATA: 'SYU',
    ICAO: 'YWBS',
    lat: '-10.20829963684082',
    lon: '142.8249969482422',
    timezone: '10'
  },
  {
    name: 'Windorah ',
    city: 'Windorah',
    country: 'Australia',
    IATA: 'WNR',
    ICAO: 'YWDH',
    lat: '-25.41309928894043',
    lon: '142.66700744628906',
    timezone: '10'
  },
  {
    name: 'Whyalla ',
    city: 'Whyalla',
    country: 'Australia',
    IATA: 'WYA',
    ICAO: 'YWHA',
    lat: '-33.05889892578125',
    lon: '137.51400756835938',
    timezone: '9.5'
  },
  {
    name: 'Wiluna ',
    city: 'Wiluna',
    country: 'Australia',
    IATA: 'WUN',
    ICAO: 'YWLU',
    lat: '-26.629199981689453',
    lon: '120.22100067138672',
    timezone: '8'
  },
  {
    name: 'Wollongong ',
    city: 'Wollongong',
    country: 'Australia',
    IATA: 'WOL',
    ICAO: 'YWOL',
    lat: '-34.561100006103516',
    lon: '150.78900146484375',
    timezone: '10'
  },
  {
    name: 'Winton ',
    city: 'Winton',
    country: 'Australia',
    IATA: 'WIN',
    ICAO: 'YWTN',
    lat: '-22.36359977722168',
    lon: '143.08599853515625',
    timezone: '10'
  },
  {
    name: 'Wynyard ',
    city: 'Burnie',
    country: 'Australia',
    IATA: 'BWT',
    ICAO: 'YWYY',
    lat: '-40.9989013671875',
    lon: '145.7310028076172',
    timezone: '10'
  },
  {
    name: 'Yorke Island ',
    city: 'Yorke Island',
    country: 'Australia',
    IATA: 'OKR',
    ICAO: 'YYKI',
    lat: '-9.752801',
    lon: '143.405673',
    timezone: '10'
  },
  {
    name: 'Yam Island ',
    city: 'Yam Island',
    country: 'Australia',
    IATA: 'XMY',
    ICAO: 'YYMI',
    lat: '-9.90110969543457',
    lon: '142.7760009765625',
    timezone: '10'
  },
  {
    name: 'Beijing Nanyuan ',
    city: 'Beijing',
    country: 'China',
    IATA: 'NAY',
    ICAO: 'ZBNY',
    lat: '39.782798767089844',
    lon: '116.38800048828125',
    timezone: '8'
  },
  {
    name: 'Chifeng ',
    city: 'Chifeng',
    country: 'China',
    IATA: 'CIF',
    ICAO: 'ZBCF',
    lat: '42.23500061035156',
    lon: '118.90799713134766',
    timezone: '8'
  },
  {
    name: 'Changzhi ',
    city: 'Changzhi',
    country: 'China',
    IATA: 'CIH',
    ICAO: 'ZBCZ',
    lat: '36.247501',
    lon: '113.125999',
    timezone: '8'
  },
  {
    name: 'Datong ',
    city: 'Datong',
    country: 'China',
    IATA: 'DAT',
    ICAO: 'ZBDT',
    lat: '40.060299',
    lon: '113.482002',
    timezone: '8'
  },
  {
    name: 'Baita Intl ',
    city: 'Hohhot',
    country: 'China',
    IATA: 'HET',
    ICAO: 'ZBHH',
    lat: '40.851398',
    lon: '111.823997',
    timezone: '8'
  },
  {
    name: 'Baotou ',
    city: 'Baotou',
    country: 'China',
    IATA: 'BAV',
    ICAO: 'ZBOW',
    lat: '40.560001373291016',
    lon: '109.99700164794922',
    timezone: '8'
  },
  {
    name: 'Shijiazhuang Daguocun Intl ',
    city: 'Shijiazhuang',
    country: 'China',
    IATA: 'SJW',
    ICAO: 'ZBSJ',
    lat: '38.28070068359375',
    lon: '114.6969985961914',
    timezone: '8'
  },
  {
    name: 'Tongliao ',
    city: 'Tongliao',
    country: 'China',
    IATA: 'TGO',
    ICAO: 'ZBTL',
    lat: '43.556702',
    lon: '122.199997',
    timezone: '8'
  },
  {
    name: 'Ulanhot ',
    city: 'Ulanhot',
    country: 'China',
    IATA: 'HLH',
    ICAO: 'ZBUL',
    lat: '46.195333',
    lon: '122.008333',
    timezone: '8'
  },
  {
    name: 'Xilinhot ',
    city: 'Xilinhot',
    country: 'China',
    IATA: 'XIL',
    ICAO: 'ZBXH',
    lat: '43.91559982299805',
    lon: '115.96399688720703',
    timezone: '8'
  },
  {
    name: 'Beihai ',
    city: 'Beihai',
    country: 'China',
    IATA: 'BHY',
    ICAO: 'ZGBH',
    lat: '21.5394',
    lon: '109.293999',
    timezone: '8'
  },
  {
    name: 'Changde ',
    city: 'Changde',
    country: 'China',
    IATA: 'CGD',
    ICAO: 'ZGCD',
    lat: '28.9188995361',
    lon: '111.63999939',
    timezone: '8'
  },
  {
    name: 'Dayong ',
    city: 'Dayong',
    country: 'China',
    IATA: 'DYG',
    ICAO: 'ZGDY',
    lat: '29.1028',
    lon: '110.443001',
    timezone: '8'
  },
  {
    name: 'Meixian ',
    city: 'Meixian',
    country: 'China',
    IATA: 'MXZ',
    ICAO: 'ZGMX',
    lat: '24.350000381469727',
    lon: '116.13300323486328',
    timezone: '8'
  },
  {
    name: 'Zhuhai Jinwan ',
    city: 'Zhuhai',
    country: 'China',
    IATA: 'ZUH',
    ICAO: 'ZGSD',
    lat: '22.006399',
    lon: '113.375999',
    timezone: '8'
  },
  {
    name: 'Liuzhou Bailian ',
    city: 'Liuzhou',
    country: 'China',
    IATA: 'LZH',
    ICAO: 'ZGZH',
    lat: '24.2075',
    lon: '109.390999',
    timezone: '8'
  },
  {
    name: 'Zhanjiang ',
    city: 'Zhanjiang',
    country: 'China',
    IATA: 'ZHA',
    ICAO: 'ZGZJ',
    lat: '21.214399',
    lon: '110.358002',
    timezone: '8'
  },
  {
    name: 'Enshi ',
    city: 'Enshi',
    country: 'China',
    IATA: 'ENH',
    ICAO: 'ZHES',
    lat: '30.3202991486',
    lon: '109.48500061',
    timezone: '8'
  },
  {
    name: 'Nanyang Jiangying ',
    city: 'Nanyang',
    country: 'China',
    IATA: 'NNY',
    ICAO: 'ZHNY',
    lat: '32.980801',
    lon: '112.614998',
    timezone: '8'
  },
  {
    name: 'Xiangyang Liuji ',
    city: 'Xiangfan',
    country: 'China',
    IATA: 'XFN',
    ICAO: 'ZHXF',
    lat: '32.1506',
    lon: '112.291',
    timezone: '8'
  },
  {
    name: 'Yichang Sanxia ',
    city: 'Yichang',
    country: 'China',
    IATA: 'YIH',
    ICAO: 'ZHYC',
    lat: '30.55655',
    lon: '111.479988',
    timezone: '8'
  },
  {
    name: 'Ankang Wulipu ',
    city: 'Ankang',
    country: 'China',
    IATA: 'AKA',
    ICAO: 'ZLAK',
    lat: '32.708099',
    lon: '108.931',
    timezone: '8'
  },
  {
    name: 'Golmud ',
    city: 'Golmud',
    country: 'China',
    IATA: 'GOQ',
    ICAO: 'ZLGM',
    lat: '36.4006',
    lon: '94.786102',
    timezone: '8'
  },
  {
    name: 'Hanzhong Chenggu ',
    city: 'Hanzhong',
    country: 'China',
    IATA: 'HZG',
    ICAO: 'ZLHZ',
    lat: '33.134136',
    lon: '107.206014',
    timezone: '8'
  },
  {
    name: 'Qingyang ',
    city: 'Qingyang',
    country: 'China',
    IATA: 'IQN',
    ICAO: 'ZLQY',
    lat: '35.799702',
    lon: '107.602997',
    timezone: '8'
  },
  {
    name: 'Xining Caojiabu ',
    city: 'Xining',
    country: 'China',
    IATA: 'XNN',
    ICAO: 'ZLXN',
    lat: '36.5275',
    lon: '102.042999',
    timezone: '8'
  },
  {
    name: "Yan'an Ershilipu ",
    city: "Yan'an",
    country: 'China',
    IATA: 'ENY',
    ICAO: 'ZLYA',
    lat: '36.636902',
    lon: '109.554001',
    timezone: '8'
  },
  {
    name: 'Yulin Yuyang ',
    city: 'Yulin',
    country: 'China',
    IATA: 'UYN',
    ICAO: 'ZLYL',
    lat: '38.35971',
    lon: '109.590927',
    timezone: '8'
  },
  {
    name: 'Arvaikheer ',
    city: 'Arvaikheer',
    country: 'Mongolia',
    IATA: 'AVK',
    ICAO: 'ZMAH',
    lat: '46.250301361083984',
    lon: '102.802001953125',
    timezone: '8'
  },
  {
    name: 'Altai ',
    city: 'Altai',
    country: 'Mongolia',
    IATA: 'LTI',
    ICAO: 'ZMAT',
    lat: '46.376399993896484',
    lon: '96.22109985351562',
    timezone: '8'
  },
  {
    name: 'Bayankhongor ',
    city: 'Bayankhongor',
    country: 'Mongolia',
    IATA: 'BYN',
    ICAO: 'ZMBH',
    lat: '46.163299560546875',
    lon: '100.7040023803711',
    timezone: '8'
  },
  {
    name: 'Dalanzadgad ',
    city: 'Dalanzadgad',
    country: 'Mongolia',
    IATA: 'DLZ',
    ICAO: 'ZMDZ',
    lat: '43.59170150756836',
    lon: '104.43000030517578',
    timezone: '8'
  },
  {
    name: 'Khovd ',
    city: 'Khovd',
    country: 'Mongolia',
    IATA: 'HVD',
    ICAO: 'ZMKD',
    lat: '47.9541015625',
    lon: '91.6281967163086',
    timezone: '7'
  },
  {
    name: 'M\u00f6r\u00f6n ',
    city: 'Muren',
    country: 'Mongolia',
    IATA: 'MXV',
    ICAO: 'ZMMN',
    lat: '49.663299560546875',
    lon: '100.0989990234375',
    timezone: '8'
  },
  {
    name: 'Diqing ',
    city: 'Shangri-La',
    country: 'China',
    IATA: 'DIG',
    ICAO: 'ZPDQ',
    lat: '27.7936',
    lon: '99.6772',
    timezone: '8'
  },
  {
    name: 'Mangshi ',
    city: 'Luxi',
    country: 'China',
    IATA: 'LUM',
    ICAO: 'ZPLX',
    lat: '24.4011',
    lon: '98.5317',
    timezone: '8'
  },
  {
    name: "Pu'er Simao ",
    city: 'Simao',
    country: 'China',
    IATA: 'SYM',
    ICAO: 'ZPSM',
    lat: '22.793301',
    lon: '100.959',
    timezone: '8'
  },
  {
    name: 'Zhaotong ',
    city: 'Zhaotong',
    country: 'China',
    IATA: 'ZAT',
    ICAO: 'ZPZT',
    lat: '27.325599670410156',
    lon: '103.75499725341797',
    timezone: '8'
  },
  {
    name: 'Ganzhou ',
    city: 'Ganzhou',
    country: 'China',
    IATA: 'KOW',
    ICAO: 'ZSGZ',
    lat: '25.853333',
    lon: '114.778889',
    timezone: '8'
  },
  {
    name: 'Jingdezhen ',
    city: 'Jingdezhen',
    country: 'China',
    IATA: 'JDZ',
    ICAO: 'ZSJD',
    lat: '29.3386001587',
    lon: '117.176002502',
    timezone: '8'
  },
  {
    name: 'Jiujiang Lushan ',
    city: 'Jiujiang',
    country: 'China',
    IATA: 'JIU',
    ICAO: 'ZSJJ',
    lat: '29.476944',
    lon: '115.801111',
    timezone: '8'
  },
  {
    name: 'Quzhou ',
    city: 'Quzhou',
    country: 'China',
    IATA: 'JUZ',
    ICAO: 'ZSJU',
    lat: '28.965799',
    lon: '118.899002',
    timezone: '8'
  },
  {
    name: 'Lianyungang ',
    city: 'Lianyungang',
    country: 'China',
    IATA: 'LYG',
    ICAO: 'ZSLG',
    lat: '34.571667',
    lon: '118.873611',
    timezone: '8'
  },
  {
    name: 'Huangyan Luqiao ',
    city: 'Huangyan',
    country: 'China',
    IATA: 'HYN',
    ICAO: 'ZSLQ',
    lat: '28.56220054626465',
    lon: '121.42900085449219',
    timezone: '8'
  },
  {
    name: 'Shubuling ',
    city: 'Linyi',
    country: 'China',
    IATA: 'LYI',
    ICAO: 'ZSLY',
    lat: '35.04610061645508',
    lon: '118.41200256347656',
    timezone: '8'
  },
  {
    name: 'Quanzhou Jinjiang Intl ',
    city: 'Quanzhou',
    country: 'China',
    IATA: 'JJN',
    ICAO: 'ZSQZ',
    lat: '24.7964',
    lon: '118.589996',
    timezone: '8'
  },
  {
    name: 'Tunxi Intl ',
    city: 'Huangshan',
    country: 'China',
    IATA: 'TXN',
    ICAO: 'ZSTX',
    lat: '29.733299255371094',
    lon: '118.25599670410156',
    timezone: '8'
  },
  {
    name: 'Weifang ',
    city: 'Weifang',
    country: 'China',
    IATA: 'WEF',
    ICAO: 'ZSWF',
    lat: '36.646702',
    lon: '119.119003',
    timezone: '8'
  },
  {
    name: 'Weihai ',
    city: 'Weihai',
    country: 'China',
    IATA: 'WEH',
    ICAO: 'ZSWH',
    lat: '37.18709945678711',
    lon: '122.22899627685547',
    timezone: '8'
  },
  {
    name: 'Sunan Shuofang Intl ',
    city: 'Wuxi',
    country: 'China',
    IATA: 'WUX',
    ICAO: 'ZSWX',
    lat: '31.494400024399997',
    lon: '120.429000854',
    timezone: '8'
  },
  {
    name: 'Nanping Wuyishan ',
    city: 'Wuyishan',
    country: 'China',
    IATA: 'WUS',
    ICAO: 'ZSWY',
    lat: '27.7019',
    lon: '118.000999',
    timezone: '8'
  },
  {
    name: 'Wenzhou Longwan Intl ',
    city: 'Wenzhou',
    country: 'China',
    IATA: 'WNZ',
    ICAO: 'ZSWZ',
    lat: '27.912201',
    lon: '120.851997',
    timezone: '8'
  },
  {
    name: 'Yancheng ',
    city: 'Yancheng',
    country: 'China',
    IATA: 'YNZ',
    ICAO: 'ZSYN',
    lat: '33.425833',
    lon: '120.203056',
    timezone: '8'
  },
  {
    name: 'Yiwu ',
    city: 'Yiwu',
    country: 'China',
    IATA: 'YIW',
    ICAO: 'ZSYW',
    lat: '29.3446998596',
    lon: '120.031997681',
    timezone: '8'
  },
  {
    name: 'Zhoushan ',
    city: 'Zhoushan',
    country: 'China',
    IATA: 'HSN',
    ICAO: 'ZSZS',
    lat: '29.9342002869',
    lon: '122.361999512',
    timezone: '8'
  },
  {
    name: 'Qamdo Bangda ',
    city: 'Bangda',
    country: 'China',
    IATA: 'BPX',
    ICAO: 'ZUBD',
    lat: '30.553600311279297',
    lon: '97.1082992553711',
    timezone: '8'
  },
  {
    name: 'Dachuan ',
    city: 'Dazhou',
    country: 'China',
    IATA: 'DAX',
    ICAO: 'ZUDX',
    lat: '31.1302',
    lon: '107.4295',
    timezone: '8'
  },
  {
    name: 'Guangyuan ',
    city: 'Guangyuan',
    country: 'China',
    IATA: 'GYS',
    ICAO: 'ZUGU',
    lat: '32.3911018371582',
    lon: '105.7020034790039',
    timezone: '8'
  },
  {
    name: 'Luzhou ',
    city: 'Luzhou',
    country: 'China',
    IATA: 'LZO',
    ICAO: 'ZULZ',
    lat: '28.85219955444336',
    lon: '105.39299774169922',
    timezone: '8'
  },
  {
    name: 'Mianyang ',
    city: 'Mianyang',
    country: 'China',
    IATA: 'MIG',
    ICAO: 'ZUMY',
    lat: '31.4281005859375',
    lon: '104.74099731445312',
    timezone: '8'
  },
  {
    name: 'Nanchong ',
    city: 'Nanchong',
    country: 'China',
    IATA: 'NAO',
    ICAO: 'ZUNC',
    lat: '30.79545',
    lon: '106.1626',
    timezone: '8'
  },
  {
    name: 'Nyingchi ',
    city: 'Nyingchi',
    country: 'China',
    IATA: 'LZY',
    ICAO: 'ZUNZ',
    lat: '29.303300857543945',
    lon: '94.33529663085938',
    timezone: '8'
  },
  {
    name: 'Wanxian ',
    city: 'Wanxian',
    country: 'China',
    IATA: 'WXN',
    ICAO: 'ZUWX',
    lat: '30.8017',
    lon: '108.433',
    timezone: '8'
  },
  {
    name: 'Aksu ',
    city: 'Aksu',
    country: 'China',
    IATA: 'AKU',
    ICAO: 'ZWAK',
    lat: '41.262501',
    lon: '80.291702',
    timezone: '8'
  },
  {
    name: 'Qiemo Yudu ',
    city: 'Qiemo',
    country: 'China',
    IATA: 'IQM',
    ICAO: 'ZWCM',
    lat: '38.233611',
    lon: '85.465556',
    timezone: '8'
  },
  {
    name: 'Kuqa ',
    city: 'Kuqa',
    country: 'China',
    IATA: 'KCA',
    ICAO: 'ZWKC',
    lat: '41.677856',
    lon: '82.872917',
    timezone: '8'
  },
  {
    name: 'Korla ',
    city: 'Korla',
    country: 'China',
    IATA: 'KRL',
    ICAO: 'ZWKL',
    lat: '41.69779968261719',
    lon: '86.12889862060547',
    timezone: '8'
  },
  {
    name: 'Karamay ',
    city: 'Karamay',
    country: 'China',
    IATA: 'KRY',
    ICAO: 'ZWKM',
    lat: '45.46655',
    lon: '84.9527',
    timezone: '8'
  },
  {
    name: 'Yining ',
    city: 'Yining',
    country: 'China',
    IATA: 'YIN',
    ICAO: 'ZWYN',
    lat: '43.955799',
    lon: '81.330299',
    timezone: '8'
  },
  {
    name: 'Heihe ',
    city: 'Heihe',
    country: 'China',
    IATA: 'HEK',
    ICAO: 'ZYHE',
    lat: '50.1716209371',
    lon: '127.308883667',
    timezone: '8'
  },
  {
    name: 'Jiamusi ',
    city: 'Jiamusi',
    country: 'China',
    IATA: 'JMU',
    ICAO: 'ZYJM',
    lat: '46.84339904789999',
    lon: '130.464996338',
    timezone: '8'
  },
  {
    name: 'Jinzhou ',
    city: 'Jinzhou',
    country: 'China',
    IATA: 'JNZ',
    ICAO: 'ZYJZ',
    lat: '41.10139846801758',
    lon: '121.06199645996094',
    timezone: '8'
  },
  {
    name: 'Qiqihar Sanjiazi ',
    city: 'Qiqihar',
    country: 'China',
    IATA: 'NDG',
    ICAO: 'ZYQQ',
    lat: '47.239601135253906',
    lon: '123.91799926757812',
    timezone: '8'
  },
  {
    name: 'Yanji Chaoyangchuan ',
    city: 'Yanji',
    country: 'China',
    IATA: 'YNJ',
    ICAO: 'ZYYJ',
    lat: '42.8828010559',
    lon: '129.451004028',
    timezone: '8'
  },
  {
    name: 'Waikoloa Heliport',
    city: 'Waikoloa Village',
    country: 'United States',
    IATA: 'WKL',
    ICAO: 'HI07',
    lat: '19.9205',
    lon: '-155.8607',
    timezone: '-10'
  },
  {
    name: 'Mount Keith ',
    city: 'Mount Keith',
    country: 'Australia',
    IATA: 'WME',
    ICAO: 'YMNE',
    lat: '-27.286399841308594',
    lon: '120.55500030517578',
    timezone: '8'
  },
  {
    name: 'Los Roques ',
    city: 'Los Roques',
    country: 'Venezuela',
    IATA: 'LRV',
    ICAO: 'SVRS',
    lat: '11.9499998093',
    lon: '-66.66999816890001',
    timezone: '-4'
  },
  {
    name: 'Inishmore Aerodrome',
    city: 'Inis Mor',
    country: 'Ireland',
    IATA: 'IOR',
    ICAO: 'EIIM',
    lat: '53.1067008972168',
    lon: '-9.653610229492188',
    timezone: '0'
  },
  {
    name: 'Connemara Regional ',
    city: 'Indreabhan',
    country: 'Ireland',
    IATA: 'NNR',
    ICAO: 'EICA',
    lat: '53.23030090332031',
    lon: '-9.467780113220215',
    timezone: '0'
  },
  {
    name: 'R\u00fcgen ',
    city: 'Ruegen',
    country: 'Germany',
    IATA: 'GTI',
    ICAO: 'EDCG',
    lat: '54.3833312988',
    lon: '13.3255558014',
    timezone: '1'
  },
  {
    name: 'Berezovo ',
    city: 'Berezovo',
    country: 'Russia',
    IATA: 'EZV',
    ICAO: 'USHB',
    lat: '63.92100143432617',
    lon: '65.03050231933594',
    timezone: '5'
  },
  {
    name: 'Szczecin-D\u0105bie ',
    city: 'Szczecin',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPSD',
    lat: '53.3921012878418',
    lon: '14.63379955291748',
    timezone: '1'
  },
  {
    name: 'Worcester Regional ',
    city: 'Worcester',
    country: 'United States',
    IATA: 'ORH',
    ICAO: 'KORH',
    lat: '42.26729965209961',
    lon: '-71.87570190429688',
    timezone: '-5'
  },
  {
    name: 'Anqing Tianzhushan ',
    city: 'Anqing',
    country: 'China',
    IATA: 'AQG',
    ICAO: 'ZSAQ',
    lat: '30.582199',
    lon: '117.050003',
    timezone: '8'
  },
  {
    name: 'Shanhaiguan ',
    city: 'Qinhuangdao',
    country: 'China',
    IATA: 'SHP',
    ICAO: 'ZBSH',
    lat: '39.968102',
    lon: '119.731003',
    timezone: '8'
  },
  {
    name: 'Yuncheng Guangong ',
    city: 'Yuncheng',
    country: 'China',
    IATA: 'YCU',
    ICAO: 'ZBYC',
    lat: '35.116391',
    lon: '111.031388889',
    timezone: '8'
  },
  {
    name: 'Lanzhou City ',
    city: 'Lanzhou',
    country: 'China',
    IATA: '\\N',
    ICAO: 'ZLAN',
    lat: '36.033333',
    lon: '103.86667',
    timezone: '8'
  },
  {
    name: 'Jiayuguan ',
    city: 'Jiayuguan',
    country: 'China',
    IATA: 'JGN',
    ICAO: 'ZLJQ',
    lat: '39.856899',
    lon: '98.3414',
    timezone: '8'
  },
  {
    name: 'Dandong ',
    city: 'Dandong',
    country: 'China',
    IATA: 'DDG',
    ICAO: 'ZYDD',
    lat: '40.0247',
    lon: '124.286003',
    timezone: '8'
  },
  {
    name: 'Ordos Ejin Horo ',
    city: 'Dongsheng',
    country: 'China',
    IATA: 'DSN',
    ICAO: 'ZBDS',
    lat: '39.49',
    lon: '109.861388889',
    timezone: '8'
  },
  {
    name: "Bao'anying ",
    city: 'Panzhihua',
    country: 'China',
    IATA: 'PZI',
    ICAO: 'ZUZH',
    lat: '26.54',
    lon: '101.79852',
    timezone: '8'
  },
  {
    name: 'Bremerton National ',
    city: 'Bremerton',
    country: 'United States',
    IATA: 'PWT',
    ICAO: 'KPWT',
    lat: '47.490200042725',
    lon: '-122.76499938965',
    timezone: '-8'
  },
  {
    name: 'Spencer Municipal ',
    city: 'Spencer',
    country: 'United States',
    IATA: 'SPW',
    ICAO: 'KSPW',
    lat: '43.165500640869',
    lon: '-95.202796936035',
    timezone: '-6'
  },
  {
    name: 'Jefferson City Memorial ',
    city: 'Jefferson City',
    country: 'United States',
    IATA: 'JEF',
    ICAO: 'KJEF',
    lat: '38.5912017822',
    lon: '-92.15609741210001',
    timezone: '-6'
  },
  {
    name: 'Tannheim Airfield',
    city: 'Tannheim',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDMT',
    lat: '48.009998',
    lon: '10.098611',
    timezone: '1'
  },
  {
    name: 'Unst ',
    city: 'Unst',
    country: 'United Kingdom',
    IATA: 'UNT',
    ICAO: 'EGPW',
    lat: '60.74720001220703',
    lon: '-0.8538500070571899',
    timezone: '0'
  },
  {
    name: 'Berkley Structures Heliport',
    city: 'Pagerungan',
    country: 'Indonesia',
    IATA: '\\N',
    ICAO: 'WA19',
    lat: '47.682043',
    lon: '-122.148456',
    timezone: '-8'
  },
  {
    name: 'Provincetown Municipal ',
    city: 'Provincetown',
    country: 'United States',
    IATA: 'PVC',
    ICAO: 'KPVC',
    lat: '42.0718994141',
    lon: '-70.2213973999',
    timezone: '-5'
  },
  {
    name: 'Anduki ',
    city: 'Seria',
    country: 'Brunei',
    IATA: '\\N',
    ICAO: 'WBAK',
    lat: '4.637000083920001',
    lon: '114.382003784',
    timezone: '8'
  },
  {
    name: 'Gustaf III ',
    city: 'Gustavia',
    country: 'France',
    IATA: 'SBH',
    ICAO: 'TFFJ',
    lat: '17.904399871826172',
    lon: '-62.84360122680664',
    timezone: '-4'
  },
  {
    name: 'Kostroma Sokerkino ',
    city: 'Kostroma',
    country: 'Russia',
    IATA: 'KMW',
    ICAO: 'UUBA',
    lat: '57.7969017029',
    lon: '41.019401550299996',
    timezone: '3'
  },
  {
    name: 'Sukhumi Dranda ',
    city: 'Sukhumi',
    country: 'Georgia',
    IATA: 'SUI',
    ICAO: 'UGSS',
    lat: '42.8582000732',
    lon: '41.128101348899996',
    timezone: '4'
  },
  {
    name: 'Donskoye ',
    city: 'Tambow',
    country: 'Russia',
    IATA: 'TBW',
    ICAO: 'UUOT',
    lat: '52.806098937988',
    lon: '41.482799530029',
    timezone: '3'
  },
  {
    name: 'Oban ',
    city: 'North Connel',
    country: 'United Kingdom',
    IATA: 'OBN',
    ICAO: 'EGEO',
    lat: '56.4635009765625',
    lon: '-5.399670124053955',
    timezone: '0'
  },
  {
    name: 'Erechim ',
    city: 'Erechim',
    country: 'Brazil',
    IATA: 'ERM',
    ICAO: 'SSER',
    lat: '-27.66189956665039',
    lon: '-52.2682991027832',
    timezone: '-3'
  },
  {
    name: 'La C\u00f4te ',
    city: 'Prangins',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSGP',
    lat: '46.40639877319336',
    lon: '6.258059978485107',
    timezone: '1'
  },
  {
    name: 'Courchevel ',
    city: 'Courcheval',
    country: 'France',
    IATA: 'CVF',
    ICAO: 'LFLJ',
    lat: '45.39670181274414',
    lon: '6.6347198486328125',
    timezone: '1'
  },
  {
    name: 'Fullerton Municipal ',
    city: 'Fullerton',
    country: 'United States',
    IATA: 'FUL',
    ICAO: 'KFUL',
    lat: '33.8720016479',
    lon: '-117.980003357',
    timezone: '-8'
  },
  {
    name: 'Concord-Padgett Regional ',
    city: 'Concord',
    country: 'United States',
    IATA: 'USA',
    ICAO: 'KJQF',
    lat: '35.387798',
    lon: '-80.709099',
    timezone: '-5'
  },
  {
    name: 'Isle of Wight / Sandown ',
    city: 'Isle Of Wight',
    country: 'United Kingdom',
    IATA: '\\N',
    ICAO: 'EGHN',
    lat: '50.653099',
    lon: '-1.18221998',
    timezone: '0'
  },
  {
    name: 'Navoi ',
    city: 'Navoi',
    country: 'Uzbekistan',
    IATA: 'NVI',
    ICAO: 'UTSA',
    lat: '40.1171989440918',
    lon: '65.1707992553711',
    timezone: '5'
  },
  {
    name: 'Andernos Les Bains ',
    city: 'Andernos-Les-Bains',
    country: 'France',
    IATA: '\\N',
    ICAO: 'LFCD',
    lat: '44.7561',
    lon: '-1.06333',
    timezone: '1'
  },
  {
    name: 'Bienenfarm ',
    city: 'Nauen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDOI',
    lat: '52.661667',
    lon: '12.745833',
    timezone: '1'
  },
  {
    name: 'Ain Arnat ',
    city: 'Setif',
    country: 'Algeria',
    IATA: 'QSF',
    ICAO: 'DAAS',
    lat: '36.178100585900005',
    lon: '5.3244900703399995',
    timezone: '1'
  },
  {
    name: 'La Rochelle-\u00cele de R\u00e9 ',
    city: 'La Rochelle',
    country: 'France',
    IATA: 'LRH',
    ICAO: 'LFBH',
    lat: '46.17919921875',
    lon: '-1.1952799558639526',
    timezone: '1'
  },
  {
    name: 'Friedman Memorial ',
    city: 'Hailey',
    country: 'United States',
    IATA: 'SUN',
    ICAO: 'KSUN',
    lat: '43.50439835',
    lon: '-114.2959976',
    timezone: '-7'
  },
  {
    name: 'Yverdon-les-Bains ',
    city: 'Yverdon-Les-Bains',
    country: 'Switzerland',
    IATA: '\\N',
    ICAO: 'LSGY',
    lat: '46.7619018555',
    lon: '6.61332988739',
    timezone: '1'
  },
  {
    name: 'Bielsko Biala ',
    city: 'Bielsko-Biala',
    country: 'Poland',
    IATA: '\\N',
    ICAO: 'EPBA',
    lat: '49.80500030517578',
    lon: '19.00189971923828',
    timezone: '1'
  },
  {
    name: 'Mason City Municipal ',
    city: 'Mason City',
    country: 'United States',
    IATA: 'MCW',
    ICAO: 'KMCW',
    lat: '43.157798767100005',
    lon: '-93.3312988281',
    timezone: '-6'
  },
  {
    name: 'Phoenix-Mesa-Gateway ',
    city: 'Mesa',
    country: 'United States',
    IATA: 'AZA',
    ICAO: 'KIWA',
    lat: '33.30780029',
    lon: '-111.6549988',
    timezone: '-7'
  },
  {
    name: 'Sa\u00fal ',
    city: 'Saul',
    country: 'French Guiana',
    IATA: 'XAU',
    ICAO: 'SOOS',
    lat: '3.61361',
    lon: '-53.204201',
    timezone: '-3'
  },
  {
    name: 'Tekapo Aerodrome',
    city: 'Lake Tekapo',
    country: 'New Zealand',
    IATA: '\\N',
    ICAO: 'NZTL',
    lat: '-44.0052986145',
    lon: '170.444000244',
    timezone: '12'
  },
  {
    name: 'Niederoeblarn ',
    city: 'Niederoeblarn',
    country: 'Austria',
    IATA: '\\N',
    ICAO: 'LOGO',
    lat: '47.478298',
    lon: '14.0083',
    timezone: '1'
  },
  {
    name: 'V\u00f6slau ',
    city: 'Bad Voeslau',
    country: 'Austria',
    IATA: '\\N',
    ICAO: 'LOAV',
    lat: '47.96500015258789',
    lon: '16.260000228881836',
    timezone: '1'
  },
  {
    name: 'Uetersen/Heist ',
    city: 'Uetersen',
    country: 'Germany',
    IATA: '\\N',
    ICAO: 'EDHE',
    lat: '53.64638900756836',
    lon: '9.704167366027832',
    timezone: '1'
  },
  {
    name: 'Anaktuvuk Pass ',
    city: 'Anaktuvuk Pass',
    country: 'United States',
    IATA: 'AKP',
    ICAO: 'PAKP',
    lat: '68.13359833',
    lon: '-151.7429962',
    timezone: '-9'
  },
  {
    name: 'Anvik ',
    city: 'Anvik',
    country: 'United States',
    IATA: 'ANV',
    ICAO: 'PANV',
    lat: '62.646702',
    lon: '-160.190994',
    timezone: '-9'
  },
  {
    name: 'Atqasuk Edward Burnell Sr Memorial ',
    city: 'Atqasuk',
    country: 'United States',
    IATA: 'ATK',
    ICAO: 'PATQ',
    lat: '70.46730041503906',
    lon: '-157.43600463867188',
    timezone: '-9'
  },
  {
    name: 'Gambell ',
    city: 'Gambell',
    country: 'United States',
    IATA: 'GAM',
    ICAO: 'PAGM',
    lat: '63.76679992675781',
    lon: '-171.73300170898438',
    timezone: '-9'
  },
  {
    name: 'Hooper Bay ',
    city: 'Hooper Bay',
    country: 'United States',
    IATA: 'HPB',
    ICAO: 'PAHP',
    lat: '61.52389908',
    lon: '-166.1470032',
    timezone: '-9'
  },
  {
    name: 'Kaltag ',
    city: 'Kaltag',
    country: 'United States',
    IATA: 'KAL',
    ICAO: 'PAKV',
    lat: '64.31909943',
    lon: '-158.7409973',
    timezone: '-9'
  },
  {
    name: "St Mary's ",
    city: "St Mary's",
    country: 'United States',
    IATA: 'KSM',
    ICAO: 'PASM',
    lat: '62.0605011',
    lon: '-163.302002',
    timezone: '-9'
  },
  {
    name: 'Kivalina ',
    city: 'Kivalina',
    country: 'United States',
    IATA: 'KVL',
    ICAO: 'PAVL',
    lat: '67.73619842529297',
    lon: '-164.56300354003906',
    timezone: '-9'
  },
  {
    name: 'Mekoryuk ',
    city: 'Mekoryuk',
    country: 'United States',
    IATA: 'MYU',
    ICAO: 'PAMY',
    lat: '60.37139892578125',
    lon: '-166.27099609375',
    timezone: '-9'
  },
  {
    name: 'Ruby ',
    city: 'Ruby',
    country: 'United States',
    IATA: 'RBY',
    ICAO: 'PARY',
    lat: '64.72720337',
    lon: '-155.4700012',
    timezone: '-9'
  },
  {
    name: 'Shishmaref ',
    city: 'Shishmaref',
    country: 'United States',
    IATA: 'SHH',
    ICAO: 'PASH',
    lat: '66.249604',
    lon: '-166.089112',
    timezone: '-9'
  },
  {
    name: 'Savoonga ',
    city: 'Savoonga',
    country: 'United States',
    IATA: 'SVA',
    ICAO: 'PASA',
    lat: '63.6864013671875',
    lon: '-170.4929962158203',
    timezone: '-9'
  },
  {
    name: 'Noatak ',
    city: 'Noatak',
    country: 'United States',
    IATA: 'WTK',
    ICAO: 'PAWN',
    lat: '67.56610107421875',
    lon: '-162.97500610351562',
    timezone: '-9'
  },
  {
    name: 'Ormoc ',
    city: 'Ormoc City',
    country: 'Philippines',
    IATA: 'OMC',
    ICAO: 'RPVO',
    lat: '11.057999610900879',
    lon: '124.56500244140625',
    timezone: '8'
  },
  {
    name: 'Puvirnituq ',
    city: 'Puvirnituq',
    country: 'Canada',
    IATA: 'YPX',
    ICAO: 'CYPX',
    lat: '60.05059814453125',
    lon: '-77.28690338134766',
    timezone: '-5'
  },
  {
    name: 'Tasiujaq ',
    city: 'Tasiujaq',
    country: 'Canada',
    IATA: 'YTQ',
    ICAO: 'CYTQ',
    lat: '58.66780090332031',
    lon: '-69.95580291748047',
    timezone: '-5'
  },
  {
    name: 'Arctic Village ',
    city: 'Arctic Village',
    country: 'United States',
    IATA: 'ARC',
    ICAO: 'PARC',
    lat: '68.1147',
    lon: '-145.578995',
    timezone: '-9'
  },
  {
    name: 'Sam Mbakwe Intl ',
    city: 'Imo',
    country: 'Nigeria',
    IATA: 'QOW',
    ICAO: 'DNIM',
    lat: '5.427060127258301',
    lon: '7.206029891967773',
    timezone: '1'
  },
  {
    name: 'Arenal ',
    city: 'La Fortuna/San Carlos',
    country: 'Costa Rica',
    IATA: 'FON',
    ICAO: 'MRAN',
    lat: '10.478',
    lon: '-84.634499',
    timezone: '-6'
  },
  {
    name: 'Tambor ',
    city: 'Nicoya',
    country: 'Costa Rica',
    IATA: 'TMU',
    ICAO: 'MRTR',
    lat: '9.73852',
    lon: '-85.013802',
    timezone: '-6'
  },
  {
    name: 'Cauayan ',
    city: 'Cauayan',
    country: 'Philippines',
    IATA: 'CYZ',
    ICAO: 'RPUY',
    lat: '16.9298992157',
    lon: '121.752998352',
    timezone: '8'
  },
  {
    name: 'Kirovsk-Apatity ',
    city: 'Apatity',
    country: 'Russia',
    IATA: 'KVK',
    ICAO: 'ULMK',
    lat: '67.46330261230469',
    lon: '33.58829879760742',
    timezone: '3'
  },
  {
    name: 'Coronel Altino Machado de Oliveira ',
    city: 'Governador Valadares',
    country: 'Brazil',
    IATA: 'GVR',
    ICAO: 'SBGV',
    lat: '-18.89520072937',
    lon: '-41.982200622559',
    timezone: '-3'
  },
  {
    name: 'Port Clarence Coast Guard Station',
    city: 'Port Clarence',
    country: 'United States',
    IATA: 'KPC',
    ICAO: 'PAPC',
    lat: '65.2537002563',
    lon: '-166.85899353',
    timezone: '-9'
  },
  {
    name: 'Pajala ',
    city: 'Pajala',
    country: 'Sweden',
    IATA: 'PJA',
    ICAO: 'ESUP',
    lat: '67.24559783935547',
    lon: '23.068899154663086',
    timezone: '1'
  },
  {
    name: 'Bella Coola ',
    city: 'Bella Coola',
    country: 'Canada',
    IATA: 'QBC',
    ICAO: 'CYBD',
    lat: '52.387501',
    lon: '-126.596001',
    timezone: '-8'
  },
  {
    name: 'Hagerstown Regional Richard A Henson Field',
    city: 'Hagerstown',
    country: 'United States',
    IATA: 'HGR',
    ICAO: 'KHGR',
    lat: '39.707901',
    lon: '-77.72949982',
    timezone: '-5'
  },
  {
    name: 'Araracuara ',
    city: 'Araracuara',
    country: 'Colombia',
    IATA: 'ACR',
    ICAO: 'SKAC',
    lat: '-0.5833',
    lon: '-72.4083',
    timezone: '-5'
  },
  {
    name: 'Gorakhpur ',
    city: 'Gorakhpur',
    country: 'India',
    IATA: 'GOP',
    ICAO: 'VEGK',
    lat: '26.739700317399997',
    lon: '83.4496994019',
    timezone: '5.5'
  },
  {
    name: 'Sand Point ',
    city: 'Sand Point',
    country: 'United States',
    IATA: 'SDP',
    ICAO: 'PASD',
    lat: '55.314998626708984',
    lon: '-160.5229949951172',
    timezone: '-9'
  },
  {
    name: 'Hami ',
    city: 'Hami',
    country: 'China',
    IATA: 'HMI',
    ICAO: 'ZWHM',
    lat: '42.8414',
    lon: '93.669197',
    timezone: '8'
  },
  {
    name: 'Wuzhou Changzhoudao ',
    city: 'Wuzhou',
    country: 'China',
    IATA: 'WUZ',
    ICAO: 'ZGWZ',
    lat: '23.456699',
    lon: '111.248001',
    timezone: '8'
  },
  {
    name: 'Tugdan ',
    city: 'Romblon',
    country: 'Philippines',
    IATA: 'TBH',
    ICAO: 'RPVU',
    lat: '12.3109998703',
    lon: '122.084999084',
    timezone: '8'
  },
  {
    name: 'Sahand ',
    city: 'Maragheh',
    country: 'Iran',
    IATA: 'ACP',
    ICAO: 'OITM',
    lat: '37.347999572753906',
    lon: '46.127899169921875',
    timezone: '3.5'
  },
  {
    name: 'Gorgan ',
    city: 'Gorgan',
    country: 'Iran',
    IATA: 'GBT',
    ICAO: 'OING',
    lat: '36.909400939899996',
    lon: '54.4012985229',
    timezone: '3.5'
  },
  {
    name: 'Ilam ',
    city: 'Ilam',
    country: 'Iran',
    IATA: 'IIL',
    ICAO: 'OICI',
    lat: '33.58660125732422',
    lon: '46.40480041503906',
    timezone: '3.5'
  },
  {
    name: 'Parsabade Moghan ',
    city: 'Parsabad',
    country: 'Iran',
    IATA: 'PFQ',
    ICAO: 'OITP',
    lat: '39.60359954834',
    lon: '47.881500244141',
    timezone: '3.5'
  },
  {
    name: 'Tocache ',
    city: 'Tocache',
    country: 'Peru',
    IATA: '\\N',
    ICAO: 'SPCH',
    lat: '-8.1829996109',
    lon: '-76.516998291',
    timezone: '-5'
  },
  {
    name: 'Tacheng ',
    city: 'Tacheng',
    country: 'China',
    IATA: 'TCG',
    ICAO: 'ZWTC',
    lat: '46.67250061035156',
    lon: '83.3407974243164',
    timezone: '8'
  },
  {
