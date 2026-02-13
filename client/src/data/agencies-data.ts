export interface Agency {
    id: number;
    prefecture: string;
    name: string;
    location: string;
    phone: string;
    isHq: boolean;
    city?: string;
    address?: string; // mapping location to address for compatibility
}

export const AGENCIES_DATA: Agency[] = [
    {
        "prefecture": "Beyla",
        "name": "ST BOLA",
        "location": "À l'ancien Crédit Rural",
        "phone": "660-497-939 / 628-859-225",
        "id": 1,
        "isHq": false
    },
    {
        "prefecture": "Beyla",
        "name": "ST Beyla",
        "location": "Centre ville, en face du Bureau de l'office Véterinnaire",
        "phone": "664-178-052/628-841-530",
        "id": 2,
        "isHq": false
    },
    {
        "prefecture": "Beyla",
        "name": "ST DBACKEDOU",
        "location": "Au grand rond-point",
        "phone": "623664949 / 622566940",
        "id": 3,
        "isHq": false
    },
    {
        "prefecture": "Boké",
        "name": "ST Boké",
        "location": "À c^té de l'immeuble Alpha Barry en face de la place des martyres",
        "phone": "660-372-252 -/ 622-409-380",
        "id": 4,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST Coyah",
        "location": "En face du cinema",
        "phone": "660-926-280 / 622-521-711",
        "id": 5,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST BONFI",
        "location": "En face de la pharmacie Mme Kaba/Conakry",
        "phone": "626-077-961/626-077-961",
        "id": 6,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KAGBELEN",
        "location": "Carrefour, Même Étage que Vista Bank",
        "phone": "660-926-282/622-465-492",
        "id": 7,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST TINO EXPRESS",
        "location": "Entag Plaque",
        "phone": "628805656",
        "id": 8,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST HAMDALLAYE",
        "location": "Carrefour, Concasseur à côté de l'usine Matela",
        "phone": "622653985",
        "id": 9,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST GOMBOYAH",
        "location": "Avant le Rond Point Sodefa à gauche en allant de Conakry vers Coyah",
        "phone": "660-926-282/620-787-760",
        "id": 10,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KALOUM",
        "location": "Salle de l'ancien Cinema le Vox",
        "phone": "660-432-257/622-012-276",
        "id": 11,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KM-36",
        "location": "Après le Carrefour 36 en allant de Conakry vers Coyah à Gauche",
        "phone": "669-312-258/622-613-072",
        "id": 12,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST LAGUI",
        "location": "Bentouraya Carrefour et Kaloum",
        "phone": "628053202",
        "id": 13,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST Kamsar",
        "location": "Marché Sahara à côté de la boucherie",
        "phone": "660-372-251 / 624-665-329",
        "id": 14,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KISSOSSO",
        "location": "Kissosso Carrefour en face de la station TOTAL",
        "phone": "625-977-878 / 628-856-576",
        "id": 15,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST kindia",
        "location": "Marché yenkema centre Boubacar Bowal",
        "phone": "664-389-444 / 620-897-962",
        "id": 16,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST CASSE",
        "location": "Casse Madina",
        "phone": "669-312-258 /628-289-706",
        "id": 17,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST INIPRA",
        "location": "Madina Inipra",
        "phone": "622016604",
        "id": 18,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KENIEN",
        "location": "Casse Kenien, Kankan Coura",
        "phone": "669312258-622089858",
        "id": 19,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MADINA",
        "location": "Bordo Centre Sory Kaba",
        "phone": "622-321-241/ 628-031-600",
        "id": 20,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MAFANCO",
        "location": "Centre Bayo sur la route du Niger",
        "phone": "660-926-282/622-214-321",
        "id": 21,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MATAM",
        "location": "Garre Routière Matam",
        "phone": "660-926-282/621-528-320",
        "id": 22,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST AEROPORT",
        "location": "Marché Tanènè",
        "phone": "669-312-258 /628-110-702",
        "id": 23,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST DAPOMPA",
        "location": "Auto-Route Tamisso",
        "phone": "669312258",
        "id": 24,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST Dabondy",
        "location": "Grand marché, Bloc A112, C/Matoto",
        "phone": "660-566-152/620-666-651",
        "id": 25,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST ENTAG",
        "location": "Auto-Route, Marché Entag",
        "phone": "669-312-258/ 628-212-290",
        "id": 26,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST ETS DIANE",
        "location": "Madina Bordo à côté du magasin de Salian Sacko",
        "phone": "622433130",
        "id": 27,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST GBESSIA",
        "location": "Rond Point Marché en face de l'Auto-Route",
        "phone": "620882408",
        "id": 28,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KANTE SERVICES",
        "location": "Matin; centre Dubaï l'ancienne Salle de Mathyla",
        "phone": "622248096",
        "id": 29,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST LANSANAYA BARRAGE",
        "location": "Auto-Route Barrage marché",
        "phone": "660-926-282/622-266-620",
        "id": 30,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MADINA CENTRE",
        "location": "Boussoura, à la gare routière de gros Camion de Dabola",
        "phone": "666-470-144/623-840-112",
        "id": 31,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST TANNERIE",
        "location": "Tannerie Marché",
        "phone": "621297908",
        "id": 32,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST YINBAYA",
        "location": "Auto-Route, Camp Carrefour",
        "phone": "669-312-258/ 620-762-958",
        "id": 33,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST Cosa",
        "location": "Cosa, Gendarmerie ECO18",
        "phone": "669-312-258/ 622-520-125",
        "id": 34,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KASSIM SERVICES",
        "location": "Madina, centre Elhadj Moussa",
        "phone": "622260865",
        "id": 35,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MADINA CANAL",
        "location": "Madina, immeuble Bobo Hongkong",
        "phone": "628693899",
        "id": 36,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST TOMBOLIA",
        "location": "Auto-Route, Carrefour Tombolia",
        "phone": "",
        "id": 37,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST MATOTO",
        "location": "Auto-Route, Carrefour keneka,",
        "phone": "669-312-258/620-204-935",
        "id": 38,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST BAMBETO",
        "location": "Garre Routière Bambéto",
        "phone": "660-926-282/621-231-480",
        "id": 39,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST BELLE VUE",
        "location": "Route le Prince, Rond-Point belle vus",
        "phone": "660-926-282/621-621-848",
        "id": 40,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST CIMENTERIE",
        "location": "Au Carrefour de la Cimentérie à côté de la Station TMI",
        "phone": "660-926-282/ 622-004-496",
        "id": 41,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST COBAYAH",
        "location": "Marché Cobayah",
        "phone": "669-312-258/622-463-971",
        "id": 42,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST ENCO 5",
        "location": "Route le Prince À Côté de CMIS",
        "phone": "669-312-258/621-612-766",
        "id": 43,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KIPÉ",
        "location": "Restaurant Namassé",
        "phone": "622-441-177 /661-609-666",
        "id": 44,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST KOLOMA",
        "location": "Route le Prince, Marché Koloma",
        "phone": "",
        "id": 45,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST LAMBAYI",
        "location": "En face du Bureau de l'EDG",
        "phone": "",
        "id": 46,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST SANGOYA",
        "location": "Sangria pharmacie Rond-Point",
        "phone": "628562541",
        "id": 47,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST SONFONIA",
        "location": "Marché Sonfonia en face de la mosqué",
        "phone": "669-312-258/628-123-563",
        "id": 48,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST T6",
        "location": "Yattaya T6 Rond-Point",
        "phone": "624353567",
        "id": 49,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST TAOUYA",
        "location": "Taouya marché",
        "phone": "660-926-282/621-670-175",
        "id": 50,
        "isHq": false
    },
    {
        "prefecture": "Conakry",
        "name": "ST SONFONIA TRANSFERT",
        "location": "Sanoyah en face de l'usine Diamond Ciment",
        "phone": "625281818",
        "id": 51,
        "isHq": false
    },
    {
        "prefecture": "Dabola",
        "name": "ST Ar-Famoussayah",
        "location": "À côté de la sous-préfecture",
        "phone": "627-987-402 / 620-434-409",
        "id": 52,
        "isHq": false
    },
    {
        "prefecture": "Dabola",
        "name": "ST BISKIRIMA",
        "location": "En face de la garre routière",
        "phone": "662-473-825 / 622-978-154",
        "id": 53,
        "isHq": false
    },
    {
        "prefecture": "Dalaba",
        "name": "ST Dalaba",
        "location": "Centre ville, Bordos Immeuble Mr Karim",
        "phone": "627-762-130 / 621-163-122",
        "id": 54,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST Albadaria",
        "location": "En face de la mosquée au Centre ville",
        "phone": "624-642-941",
        "id": 55,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST Banora",
        "location": "Au centre ville",
        "phone": "626-172-129 / 62704-784",
        "id": 56,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST DIATEFERE",
        "location": "Au centre ville/ Dinguiraye",
        "phone": "660-133-271 / 620-876-549",
        "id": 57,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST DOUNET(Balet)",
        "location": "Centre ville/Marché",
        "phone": "628939807 / 628939807",
        "id": 58,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST DINGUIRAYE",
        "location": "Centre ville, l'ex gendarmerie au Rond-Point",
        "phone": "660-133-271 /622-257-070",
        "id": 59,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST Dialakoro Dinguiraye",
        "location": "Centre ville/ Dinguiraye Dialakoro",
        "phone": "627-678-346 / 625-237-960",
        "id": 60,
        "isHq": false
    },
    {
        "prefecture": "Dinguiraye",
        "name": "ST DIAN-MALALIA",
        "location": "Dans le marche/ Sp de Kalinko/Dinguiraye",
        "phone": "660-133-271 / 622-503-632",
        "id": 61,
        "isHq": false
    },
    {
        "prefecture": "Dubréka",
        "name": "ST Dubréka",
        "location": "KM5 Rond-Point",
        "phone": "660-926-282",
        "id": 62,
        "isHq": false
    },
    {
        "prefecture": "Faranah",
        "name": "ST Bagna",
        "location": "En face de la gendarmerie de Bagna",
        "phone": "625-511-686 / 622-296-206",
        "id": 63,
        "isHq": false
    },
    {
        "prefecture": "Faranah",
        "name": "ST FARANAH",
        "location": "Tonkolonko chez Wanda Oulare",
        "phone": "669-184-341/ 628-102-621",
        "id": 64,
        "isHq": false
    },
    {
        "prefecture": "Forékariah",
        "name": "ST DOGOME",
        "location": "Centre ville en face du garage Tely",
        "phone": "621572766 / 622207945",
        "id": 65,
        "isHq": false
    },
    {
        "prefecture": "Forékariah",
        "name": "ST Forékariah",
        "location": "Garre Routière Forékariah",
        "phone": "669-312-258 / 623-246-213",
        "id": 66,
        "isHq": false
    },
    {
        "prefecture": "Fria",
        "name": "ST FRIA",
        "location": "Rond-point Dja-Fodeyah en bas de la clinique Bah Lamarana",
        "phone": "660-402-254 / 628-137-071",
        "id": 67,
        "isHq": false
    },
    {
        "prefecture": "Gueckedou",
        "name": "ST DJENDE",
        "location": "À coté de la gendarmerie",
        "phone": "626-332-438 / 622-420-121",
        "id": 68,
        "isHq": false
    },
    {
        "prefecture": "Gueckedou",
        "name": "ST DJIMBALA",
        "location": "Centre ville en face du marché",
        "phone": "626474035 / 623744904",
        "id": 69,
        "isHq": false
    },
    {
        "prefecture": "Gueckedou",
        "name": "ST GUEKEDOU",
        "location": "Garre Routière Sandia, immeuble hadja Saran",
        "phone": "626-332-438/ 628-942-860",
        "id": 70,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST GBEREGBE",
        "location": "Centre ville",
        "phone": "660372254 / 628484140",
        "id": 71,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST GNALEYAH",
        "location": "Centre ville",
        "phone": "623763873 / 622923856",
        "id": 72,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KALANKALAN",
        "location": "Au centre ville",
        "phone": "620191438 / 622536286",
        "id": 73,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST Baro",
        "location": "Au centre ville Baro",
        "phone": "624-875-271/ 621-739-436",
        "id": 74,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST GBEREDOU BARANAMA",
        "location": "Centre ville",
        "phone": "625381773 / 628144822",
        "id": 75,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST DABOLA",
        "location": "Centre ville au centre commerial",
        "phone": "660-372-253/ 622-424-093",
        "id": 76,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST DANDANO",
        "location": "Au centre ville/ à côté du magasin guindo",
        "phone": "666-022-677 / 628-288-722",
        "id": 77,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST DIANKANA",
        "location": "En face de la grande mosquée",
        "phone": "664-385-688 / 622-165-658",
        "id": 78,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST DJELIBAKORO",
        "location": "Centre ville au marché",
        "phone": "664-385-688 / 628-817-263",
        "id": 79,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST FARABANAH",
        "location": "Centre ville/ dans la Sous préfecture de Komodou",
        "phone": "622985004",
        "id": 80,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST GNAKO",
        "location": "Au centre ville",
        "phone": "623500709",
        "id": 81,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST IRIE",
        "location": "Au centre ville sur la route de N'zérékoré",
        "phone": "623508435 / 622614381",
        "id": 82,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KANKAN",
        "location": "Marché Sogbè,Immeuble Boulaie Nabé",
        "phone": "627-675-050/629-232-302",
        "id": 83,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KARIFAMORIAH",
        "location": "Au centre ville",
        "phone": "622623973",
        "id": 84,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST Kissidougou",
        "location": "Centre ville immeuble Elh Balla",
        "phone": "626-332-438/ 655-676-067",
        "id": 85,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOLABOUGNY",
        "location": "Au centre ville",
        "phone": "664389444 / 620897962",
        "id": 86,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOMAH",
        "location": "Au centre ville",
        "phone": "624698366",
        "id": 87,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KONIDOU",
        "location": "En face du marché",
        "phone": "624051041 / 622827017",
        "id": 88,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KONKOI",
        "location": "Au centre ville Chez(Doumbouya Prestation)",
        "phone": "666019245 / 622 85 01 80",
        "id": 89,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KONSANKORO",
        "location": "Centre ville",
        "phone": "627686628 / 628 69 59 63",
        "id": 90,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KONSO",
        "location": "Centre ville",
        "phone": "660372254 / 622069717",
        "id": 91,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUMBAN",
        "location": "Au centre ville",
        "phone": "664385688 / 620952020",
        "id": 92,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUNDJAN",
        "location": "Au centre ville",
        "phone": "628814716 / 628814716",
        "id": 93,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUNDOU",
        "location": "Au centre ville à côté de la mairie",
        "phone": "627987401 / 628868962",
        "id": 94,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUROUDOU",
        "location": "AU centre ville à côté de la mosquée peule",
        "phone": "666448997 / 622704466",
        "id": 95,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUROUKORO",
        "location": "En face du marché de Kouroukoro",
        "phone": "623291809 / 623291797",
        "id": 96,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOYAMA",
        "location": "Centre ville",
        "phone": "623357930 / 628624286",
        "id": 97,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KONDIANANKORO",
        "location": "Centre ville",
        "phone": "628328014 / 625974050",
        "id": 98,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST KOUANKAN",
        "location": "Au centre ville (Grand roua-point sur la route de gbonodou)",
        "phone": "625353493 / 621080888",
        "id": 99,
        "isHq": false
    },
    {
        "prefecture": "Kankan",
        "name": "ST Nafadji",
        "location": "Au centre ville de Nafadji",
        "phone": "622-165-658 / 622-165-658",
        "id": 100,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST Babila",
        "location": "Au centre ville",
        "phone": "623-703-641 / 623-703-641",
        "id": 101,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST Banfelè",
        "location": "Au centre ville Banfele-Kouroussa",
        "phone": "662-473-827 / 624-961-217",
        "id": 102,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST BANDJOUGOULA",
        "location": "Au centre ville",
        "phone": "626-444-808 / 620-763-666",
        "id": 103,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST Banko",
        "location": "Au centre ville Bank Oulada",
        "phone": "660-497-984",
        "id": 104,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST KIGNERO",
        "location": "Au centre ville/ Kignero Kouroussa",
        "phone": "666356490 / 622154024",
        "id": 105,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST KINGNEKOUDA",
        "location": "Centre ville chez Doumbouya à côté des orpailleures",
        "phone": "622950696 / 628991913",
        "id": 106,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST KINIERAN",
        "location": "Au centre ville",
        "phone": "628433733",
        "id": 107,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST KOUMANA AMANA",
        "location": "Au centre ville à côté de la maison des jeunes",
        "phone": "660133136 / 628569905",
        "id": 108,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST KOUROUSSA",
        "location": "Kouroukan, chez Sory Doumbouya",
        "phone": "662-473-827 / 621-312-594",
        "id": 109,
        "isHq": false
    },
    {
        "prefecture": "Kouroussa",
        "name": "ST Banko Nafadji",
        "location": "À côté de l'antenne Areba de Banko",
        "phone": "662-187-437 / 628-349-378",
        "id": 110,
        "isHq": false
    },
    {
        "prefecture": "Kérouane",
        "name": "ST Boula",
        "location": "Au carefour, centre ville Boula",
        "phone": "627-280-741",
        "id": 111,
        "isHq": false
    },
    {
        "prefecture": "Kérouane",
        "name": "ST DAMARO",
        "location": "Centre ville/ Damaro dans Kérouane",
        "phone": "623731729",
        "id": 112,
        "isHq": false
    },
    {
        "prefecture": "Kérouane",
        "name": "ST KEROUANE",
        "location": "Centre ville en face de la mosquée Elh Lonceny",
        "phone": "662-473-824 / 622-280-529",
        "id": 113,
        "isHq": false
    },
    {
        "prefecture": "Kérouane",
        "name": "ST KOMODOU",
        "location": "Au centre ville chez (Bailo Prestation)",
        "phone": "",
        "id": 114,
        "isHq": false
    },
    {
        "prefecture": "Labé",
        "name": "ST Labé central",
        "location": "Centre ville, l'ex Cinema le Range",
        "phone": "660-372-258 / 623-383-356",
        "id": 115,
        "isHq": false
    },
    {
        "prefecture": "Labé",
        "name": "ST LAINE",
        "location": "Centre ville",
        "phone": "660372254 / 628856765",
        "id": 116,
        "isHq": false
    },
    {
        "prefecture": "Lola",
        "name": "ST Lola",
        "location": "Centre ville, en face de l'ex hôpital préfectoral",
        "phone": "622-065-245/621-971-861",
        "id": 117,
        "isHq": false
    },
    {
        "prefecture": "Lola",
        "name": "ST FOUMBADOU",
        "location": "En face du marché",
        "phone": "621983904 / 628959898",
        "id": 118,
        "isHq": false
    },
    {
        "prefecture": "Lola",
        "name": "ST GAMA BREMA",
        "location": "Au centre ville",
        "phone": "621276606 / 626727163",
        "id": 119,
        "isHq": false
    },
    {
        "prefecture": "Lola",
        "name": "ST KOULE",
        "location": "Au centre ville à côté du télecentre Anjou",
        "phone": "627514967 / 624424064",
        "id": 120,
        "isHq": false
    },
    {
        "prefecture": "Macenta",
        "name": "ST Macenta",
        "location": "Centre ville, en face du palais de la justice",
        "phone": "621-625-831/622-868-139",
        "id": 121,
        "isHq": false
    },
    {
        "prefecture": "Macenta",
        "name": "BOFOSSOU",
        "location": "Au carrefour au bord du goudron",
        "phone": "623-787-842 / 623-055-934",
        "id": 122,
        "isHq": false
    },
    {
        "prefecture": "Macenta",
        "name": "ST BOWE",
        "location": "En face du bureau d'orange/macenta",
        "phone": "666-448-997 / 621-860-389",
        "id": 123,
        "isHq": false
    },
    {
        "prefecture": "Macenta",
        "name": "ST KABOUKARIA",
        "location": "Au centre ville",
        "phone": "620291710 / 622567157",
        "id": 124,
        "isHq": false
    },
    {
        "prefecture": "Mamou",
        "name": "ST Mamou Central",
        "location": "Centre ville Rue commerciale à côté de labo photo Tudor",
        "phone": "660-133-272/ 622-040-940",
        "id": 125,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST GNATANINA",
        "location": "Centre ville en face du marché",
        "phone": "622950696 / 622416983",
        "id": 126,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KODJOU",
        "location": "Au centre ville / BANKON Kodjou",
        "phone": "628349378",
        "id": 127,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST Bankoumana",
        "location": "Au centre ville, près de la grande mosquée de Bankoumana",
        "phone": "627-644-153 / 622-445-253",
        "id": 128,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST BOUGOULA",
        "location": "Auprès de la Douane dans le marché",
        "phone": "621-828-329",
        "id": 129,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST DIALAKORO",
        "location": "En face du marché/ Dialakoro Mandiana",
        "phone": "662-187-437 / 621-745-076",
        "id": 130,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST DOUAKO",
        "location": "Au centre ville",
        "phone": "",
        "id": 131,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST FARALAKO",
        "location": "Centre ville",
        "phone": "622950696 / 621512449",
        "id": 132,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST FARANWALEYAH",
        "location": "Centre ville",
        "phone": "666019245 / 628250884",
        "id": 133,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KALAFILILA",
        "location": "AU centre ville",
        "phone": "624114149 / 628216901",
        "id": 134,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KALINKO",
        "location": "En face de la gendarmerie",
        "phone": "627988760 / 628333053",
        "id": 135,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KANSEREYAH",
        "location": "Au centre ville",
        "phone": "664385688 / 628585879",
        "id": 136,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KANTEDOU BALANDOU",
        "location": "Au centre ville",
        "phone": "666356490 / 622536750",
        "id": 137,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KANTOUGOUMA",
        "location": "Au centre ville",
        "phone": "620191438 / 628536788",
        "id": 138,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KANTOUMANINA",
        "location": "En face du marché/ Kantoumanina Mandiana",
        "phone": "660372255 / 622940166",
        "id": 139,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KARAKO",
        "location": "Au centre ville",
        "phone": "",
        "id": 140,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KOBREDA",
        "location": "Au centre ville",
        "phone": "662473824 / 622280529",
        "id": 141,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KODIARAN",
        "location": "AU centre ville grand carrefour",
        "phone": "620615060 / 622124186",
        "id": 142,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KOLENDA",
        "location": "Au centre ville en face de l'hôpital",
        "phone": "629591198 / 628820724",
        "id": 143,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST KOROMADOU",
        "location": "Centre ville",
        "phone": "622950696 / 628462860",
        "id": 144,
        "isHq": false
    },
    {
        "prefecture": "Mandiana",
        "name": "ST MANDIANA",
        "location": "Centre ville en face de la grande Mosquée",
        "phone": "622950696",
        "id": 145,
        "isHq": false
    },
    {
        "prefecture": "N’zérékoré",
        "name": "ST N'zérékoré central",
        "location": "Garre Routière Samana",
        "phone": "666-448-997/622-643-866",
        "id": 146,
        "isHq": false
    },
    {
        "prefecture": "Pita",
        "name": "ST BASSARA",
        "location": "Bassara dans Koubia",
        "phone": "621-469-969",
        "id": 147,
        "isHq": false
    },
    {
        "prefecture": "Pita",
        "name": "ST Pita",
        "location": "Centre ville à côté de la maison des jeunes",
        "phone": "621-456-500 / 628-634-175",
        "id": 148,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST Balandougouba",
        "location": "En face de l'école Primaire",
        "phone": "624-283-022 / 622-166-389",
        "id": 149,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST Balimana-Fodekariah",
        "location": "Sur la Route Nationale en face du marché",
        "phone": "621-373-069 / 622-524-945",
        "id": 150,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST Bembeta",
        "location": "Sur la Route International Guinée-Mali en face de la station (Shel)",
        "phone": "660-372-254 / 628-942-241",
        "id": 151,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST BOUKARIA",
        "location": "À la gare routière Fatoya au Centre ville",
        "phone": "666-019-245 / 622-446-597",
        "id": 152,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST BALATO",
        "location": "Au centre ville",
        "phone": "660-498-342 / 628-404-334",
        "id": 153,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST Boure fatoya",
        "location": "Au centre ville",
        "phone": "666-019-245 / 620-982-599",
        "id": 154,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST KOFILANY",
        "location": "Au centre ville",
        "phone": "666-019-245 / 622-850-180",
        "id": 155,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST KOUROUDA",
        "location": "Au grand rond-point",
        "phone": "666-019-245 / 628-867-304",
        "id": 156,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST BOUNOUMA",
        "location": "À côté de maison des jeunes",
        "phone": "666-448-997 / 621-788-112",
        "id": 157,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST BOURE DIDI",
        "location": "À côté de la boutique de Bakary Koro/Siguiri",
        "phone": "666-019-245 / 628-269-188",
        "id": 158,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST BOURE KINTINIA",
        "location": "En face de la gare routière au centre ville",
        "phone": "666-019-245 / 622-308-283",
        "id": 159,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST DOKO",
        "location": "Centre ville derrière l'hôpital",
        "phone": "624990490 / 621325759",
        "id": 160,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST KOUREMALE",
        "location": "En face de la garre routière",
        "phone": "624606675 / 628595133",
        "id": 161,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST AMINA",
        "location": "Au centre ville",
        "phone": "623-320-219 / 628-570-658",
        "id": 162,
        "isHq": false
    },
    {
        "prefecture": "Siguiri",
        "name": "ST SIGUIRI",
        "location": "Pommada, Immeuble Baba Ann",
        "phone": "662-187-437 / 628-236-682",
        "id": 163,
        "isHq": false
    },
    {
        "prefecture": "Télémilé",
        "name": "ST Telemilé",
        "location": "Centre ville, Rond-point Nonkoyé",
        "phone": "664-389-444 / 628-701-054",
        "id": 164,
        "isHq": false
    },
    {
        "prefecture": "Yomou",
        "name": "ST BIGNAMOU",
        "location": "À côté de la gendarmerie",
        "phone": "666-448-997 / 625-470-159",
        "id": 165,
        "isHq": false
    },
    {
        "prefecture": "Yomou",
        "name": "ST DIECKE",
        "location": "En face de la station Total/Sp Yomou",
        "phone": "666-448-997 / 622-747-043",
        "id": 166,
        "isHq": false
    },
    {
        "prefecture": "Yomou",
        "name": "ST Yomou",
        "location": "Centre ville château l'an 2000",
        "phone": "666-448-997/ 627-863-828",
        "id": 167,
        "isHq": false
    }
];
