var locations = [
  {
    lat: 4.225614628,
    lng: 96.91052174,
    provinsi: `Aceh`,
    tanggal: `9/9/2021`,
    kasus: 35327,
    sembuh: 27375,
    kematian: 1636,
    popup: `<b>Aceh</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 5247257<br/>
Total Kasus: 35327<br/>
Sembuh: 27375<br/>
Kematian: 1636`,
  },
  {
    lat: -8.369471688,
    lng: 115.1317136,
    provinsi: `Bali`,
    tanggal: `9/9/2021`,
    kasus: 109612,
    sembuh: 101100,
    kematian: 3690,
    popup: `<b>Bali</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 4216171<br/>
Total Kasus: 109612<br/>
Sembuh: 101100<br/>
Kematian: 3690`,
  },
  {
    lat: -6.456736388,
    lng: 106.1090043,
    provinsi: `Banten`,
    tanggal: `9/9/2021`,
    kasus: 130191,
    sembuh: 125569,
    kematian: 2640,
    popup: `<b>Banten</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 10722374<br/>
Total Kasus: 130191<br/>
Sembuh: 125569<br/>
Kematian: 2640`,
  },
  {
    lat: -3.533583627,
    lng: 102.3384213,
    provinsi: `Bengkulu`,
    tanggal: `9/9/2021`,
    kasus: 22815,
    sembuh: 21668,
    kematian: 453,
    popup: `<b>Bengkulu</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1999539<br/>
Total Kasus: 22815<br/>
Sembuh: 21668<br/>
Kematian: 453`,
  },
  {
    lat: -6.204698991,
    lng: 106.8361183,
    provinsi: `DKI Jakarta`,
    tanggal: `9/9/2021`,
    kasus: 853907,
    sembuh: 836135,
    kematian: 13418,
    popup: `<b>DKI Jakarta</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 10846145<br/>
Total Kasus: 853907<br/>
Sembuh: 836135<br/>
Kematian: 13418`,
  },
  {
    lat: -7.89450185,
    lng: 110.4448783,
    provinsi: `Daerah Istimewa Yogyakarta`,
    tanggal: `9/9/2021`,
    kasus: 152510,
    sembuh: 140847,
    kematian: 5024,
    popup: `<b>Daerah Istimewa Yogyakarta</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 3631015<br/>
Total Kasus: 152510<br/>
Sembuh: 140847<br/>
Kematian: 5024`,
  },
  {
    lat: 0.687002604,
    lng: 122.3760581,
    provinsi: `Gorontalo`,
    tanggal: `9/9/2021`,
    kasus: 11482,
    sembuh: 10533,
    kematian: 445,
    popup: `<b>Gorontalo</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1180651<br/>
Total Kasus: 11482<br/>
Sembuh: 10533<br/>
Kematian: 445`,
  },
  {
    lat: -0.789275,
    lng: 113.921327,
    provinsi: `Indonesia`,
    tanggal: `9/9/2021`,
    kasus: 4153355,
    sembuh: 3887410,
    kematian: 138116,
    popup: `<b>Indonesia</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 265185520<br/>
Total Kasus: 4153355<br/>
Sembuh: 3887410<br/>
Kematian: 138116`,
  },
  {
    lat: -1.69769766,
    lng: 102.7236404,
    provinsi: `Jambi`,
    tanggal: `9/9/2021`,
    kasus: 28917,
    sembuh: 26581,
    kematian: 741,
    popup: `<b>Jambi</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 3493357<br/>
Total Kasus: 28917<br/>
Sembuh: 26581<br/>
Kematian: 741`,
  },
  {
    lat: -6.920432083,
    lng: 107.6037083,
    provinsi: `Jawa Barat`,
    tanggal: `9/9/2021`,
    kasus: 697102,
    sembuh: 674503,
    kematian: 14435,
    popup: `<b>Jawa Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 45161325<br/>
Total Kasus: 697102<br/>
Sembuh: 674503<br/>
Kematian: 14435`,
  },
  {
    lat: -7.259097177,
    lng: 110.2011149,
    provinsi: `Jawa Tengah`,
    tanggal: `9/9/2021`,
    kasus: 476235,
    sembuh: 428330,
    kematian: 29373,
    popup: `<b>Jawa Tengah</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 36364072<br/>
Total Kasus: 476235<br/>
Sembuh: 428330<br/>
Kematian: 29373`,
  },
  {
    lat: -7.723345579,
    lng: 112.7329414,
    provinsi: `Jawa Timur`,
    tanggal: `9/9/2021`,
    kasus: 389193,
    sembuh: 354031,
    kematian: 28963,
    popup: `<b>Jawa Timur</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 40479023<br/>
Total Kasus: 389193<br/>
Sembuh: 354031<br/>
Kematian: 28963`,
  },
  {
    lat: -0.086474572,
    lng: 111.1211776,
    provinsi: `Kalimantan Barat`,
    tanggal: `9/9/2021`,
    kasus: 37951,
    sembuh: 36142,
    kematian: 999,
    popup: `<b>Kalimantan Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 5422814<br/>
Total Kasus: 37951<br/>
Sembuh: 36142<br/>
Kematian: 999`,
  },
  {
    lat: -2.993594979,
    lng: 115.4385783,
    provinsi: `Kalimantan Selatan`,
    tanggal: `9/9/2021`,
    kasus: 67921,
    sembuh: 62793,
    kematian: 2256,
    popup: `<b>Kalimantan Selatan</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 4023049<br/>
Total Kasus: 67921<br/>
Sembuh: 62793<br/>
Kematian: 2256`,
  },
  {
    lat: -1.602484653,
    lng: 113.4176536,
    provinsi: `Kalimantan Tengah`,
    tanggal: `9/9/2021`,
    kasus: 44197,
    sembuh: 39542,
    kematian: 1345,
    popup: `<b>Kalimantan Tengah</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 2570289<br/>
Total Kasus: 44197<br/>
Sembuh: 39542<br/>
Kematian: 1345`,
  },
  {
    lat: 0.45385803,
    lng: 116.4684405,
    provinsi: `Kalimantan Timur`,
    tanggal: `9/9/2021`,
    kasus: 153941,
    sembuh: 144526,
    kematian: 5230,
    popup: `<b>Kalimantan Timur</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 3552191<br/>
Total Kasus: 153941<br/>
Sembuh: 144526<br/>
Kematian: 5230`,
  },
  {
    lat: 2.891012621,
    lng: 116.2188791,
    provinsi: `Kalimantan Utara`,
    tanggal: `9/9/2021`,
    kasus: 33381,
    sembuh: 29856,
    kematian: 722,
    popup: `<b>Kalimantan Utara</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 648407<br/>
Total Kasus: 33381<br/>
Sembuh: 29856<br/>
Kematian: 722`,
  },
  {
    lat: -2.447444127,
    lng: 106.5499324,
    provinsi: `Kepulauan Bangka Belitung`,
    tanggal: `9/9/2021`,
    kasus: 49244,
    sembuh: 44517,
    kematian: 1305,
    popup: `<b>Kepulauan Bangka Belitung</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1379767<br/>
Total Kasus: 49244<br/>
Sembuh: 44517<br/>
Kematian: 1305`,
  },
  {
    lat: 3.916346,
    lng: 108.261746,
    provinsi: `Kepulauan Riau`,
    tanggal: `9/9/2021`,
    kasus: 52880,
    sembuh: 50253,
    kematian: 1685,
    popup: `<b>Kepulauan Riau</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1929400<br/>
Total Kasus: 52880<br/>
Sembuh: 50253<br/>
Kematian: 1685`,
  },
  {
    lat: -4.916792975,
    lng: 105.0214366,
    provinsi: `Lampung`,
    tanggal: `9/9/2021`,
    kasus: 47848,
    sembuh: 41658,
    kematian: 3651,
    popup: `<b>Lampung</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 9095591<br/>
Total Kasus: 47848<br/>
Sembuh: 41658<br/>
Kematian: 3651`,
  },
  {
    lat: -3.192572,
    lng: 129.576792,
    provinsi: `Maluku`,
    tanggal: `9/9/2021`,
    kasus: 14389,
    sembuh: 13827,
    kematian: 256,
    popup: `<b>Maluku</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1847097<br/>
Total Kasus: 14389<br/>
Sembuh: 13827<br/>
Kematian: 256`,
  },
  {
    lat: 0.212036949,
    lng: 127.5391072,
    provinsi: `Maluku Utara`,
    tanggal: `9/9/2021`,
    kasus: 11857,
    sembuh: 11382,
    kematian: 301,
    popup: `<b>Maluku Utara</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1307803<br/>
Total Kasus: 11857<br/>
Sembuh: 11382<br/>
Kematian: 301`,
  },
  {
    lat: -8.606998866,
    lng: 117.5086257,
    provinsi: `Nusa Tenggara Barat`,
    tanggal: `9/9/2021`,
    kasus: 26605,
    sembuh: 25102,
    kematian: 758,
    popup: `<b>Nusa Tenggara Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 5270247<br/>
Total Kasus: 26605<br/>
Sembuh: 25102<br/>
Kematian: 758`,
  },
  {
    lat: -8.682205,
    lng: 121.592271,
    provinsi: `Nusa Tenggara Timur`,
    tanggal: `9/9/2021`,
    kasus: 61009,
    sembuh: 57697,
    kematian: 1246,
    popup: `<b>Nusa Tenggara Timur</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 5411321<br/>
Total Kasus: 61009<br/>
Sembuh: 57697<br/>
Kematian: 1246`,
  },
  {
    lat: -4.66620953,
    lng: 138.69603,
    provinsi: `Papua`,
    tanggal: `9/9/2021`,
    kasus: 32994,
    sembuh: 21210,
    kematian: 525,
    popup: `<b>Papua</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 4340348<br/>
Total Kasus: 32994<br/>
Sembuh: 21210<br/>
Kematian: 525`,
  },
  {
    lat: -2.045160182,
    lng: 132.9762624,
    provinsi: `Papua Barat`,
    tanggal: `9/9/2021`,
    kasus: 22684,
    sembuh: 22120,
    kematian: 346,
    popup: `<b>Papua Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1140701<br/>
Total Kasus: 22684<br/>
Sembuh: 22120<br/>
Kematian: 346`,
  },
  {
    lat: 0.511647851,
    lng: 101.8051092,
    provinsi: `Riau`,
    tanggal: `9/9/2021`,
    kasus: 125687,
    sembuh: 118841,
    kematian: 3906,
    popup: `<b>Riau</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 6074100<br/>
Total Kasus: 125687<br/>
Sembuh: 118841<br/>
Kematian: 3906`,
  },
  {
    lat: -2.461746053,
    lng: 119.3450194,
    provinsi: `Sulawesi Barat`,
    tanggal: `9/9/2021`,
    kasus: 11842,
    sembuh: 10831,
    kematian: 321,
    popup: `<b>Sulawesi Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 1559984<br/>
Total Kasus: 11842<br/>
Sembuh: 10831<br/>
Kematian: 321`,
  },
  {
    lat: -3.731080714,
    lng: 120.1620559,
    provinsi: `Sulawesi Selatan`,
    tanggal: `9/9/2021`,
    kasus: 106595,
    sembuh: 101296,
    kematian: 2119,
    popup: `<b>Sulawesi Selatan</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 9426885<br/>
Total Kasus: 106595<br/>
Sembuh: 101296<br/>
Kematian: 2119`,
  },
  {
    lat: -1.00413668,
    lng: 121.2010927,
    provinsi: `Sulawesi Tengah`,
    tanggal: `9/9/2021`,
    kasus: 44407,
    sembuh: 39757,
    kematian: 1461,
    popup: `<b>Sulawesi Tengah</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 2955567<br/>
Total Kasus: 44407<br/>
Sembuh: 39757<br/>
Kematian: 1461`,
  },
  {
    lat: -4.124688793,
    lng: 122.070311,
    provinsi: `Sulawesi Tenggara`,
    tanggal: `9/9/2021`,
    kasus: 19848,
    sembuh: 18561,
    kematian: 511,
    popup: `<b>Sulawesi Tenggara</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 2635461<br/>
Total Kasus: 19848<br/>
Sembuh: 18561<br/>
Kematian: 511`,
  },
  {
    lat: 1.259638212,
    lng: 124.5212396,
    provinsi: `Sulawesi Utara`,
    tanggal: `9/9/2021`,
    kasus: 33312,
    sembuh: 30409,
    kematian: 990,
    popup: `<b>Sulawesi Utara</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 2641884<br/>
Total Kasus: 33312<br/>
Sembuh: 30409<br/>
Kematian: 990`,
  },
  {
    lat: -0.850253225,
    lng: 100.4650624,
    provinsi: `Sumatera Barat`,
    tanggal: `9/9/2021`,
    kasus: 87935,
    sembuh: 82353,
    kematian: 2043,
    popup: `<b>Sumatera Barat</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 5519245<br/>
Total Kasus: 87935<br/>
Sembuh: 82353<br/>
Kematian: 2043`,
  },
  {
    lat: -3.216211808,
    lng: 104.1694647,
    provinsi: `Sumatera Selatan`,
    tanggal: `9/9/2021`,
    kasus: 58738,
    sembuh: 54308,
    kematian: 2969,
    popup: `<b>Sumatera Selatan</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 8217551<br/>
Total Kasus: 58738<br/>
Sembuh: 54308<br/>
Kematian: 2969`,
  },
  {
    lat: 2.191894453,
    lng: 99.05196442,
    provinsi: `Sumatera Utara`,
    tanggal: `9/9/2021`,
    kasus: 100748,
    sembuh: 82991,
    kematian: 2573,
    popup: `<b>Sumatera Utara</b><br/>
Tanggal: 9/9/2021<br/>
Populasi: 14874889<br/>
Total Kasus: 100748<br/>
Sembuh: 82991<br/>
Kematian: 2573`,
  },
];
