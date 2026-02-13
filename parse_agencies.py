import json

data = """Region	Prefecture	Commune	S/P, Village, Commune	Agency Name	Nom Agence	Chef d'Agence	Location	Localisation	No. Telephone
	Beyla	BOLA	BOLA	ST BOLA	ST BOLA		À l'ancien Crédit Rural	À l'ancien Crédit Rural	660-497-939 / 628-859-225
	Beyla	Centre ville		ST Beyla	ST Beyla		Centre ville, en face du Bureau de l'office Véterinnaire	Centre ville, en face du Bureau de l'office Véterinnaire	664-178-052/628-841-530
	Beyla	Gbackedou	Gbackedou	ST DBACKEDOU	ST DBACKEDOU		Au grand rond-point		623664949 / 622566940
	Boké	Boké	Boké	ST Boké	ST Boké		À c^té de l'immeuble Alpha Barry en face de la place des martyres	À c^té de l'immeuble Alpha Barry en face de la place des martyres	660-372-252 -/ 622-409-380
Conakry	Conakry	Coyah	Coyah	ST Coyah	ST Coyah		En face du cinema	En face du cinema	660-926-280 / 622-521-711
	Conakry	DUBREKA		ST BONFI	ST BONFI		En face de la pharmacie Mme Kaba/Conakry	En face de la pharmacie Mme Kaba/Conakry	626-077-961/626-077-961
	Conakry	DUBREKA	DUBREKA	ST KAGBELEN	ST KAGBELEN	B5	Carrefour, Même Étage que Vista Bank	Carrefour, Même Étage que Vista Bank	660-926-282/622-465-492
	Conakry	ENTAG	ENTAG	ST TINO EXPRESS	ST TINO EXPRESS		Entag Plaque	Entag Plaque	628805656
	Conakry	HAMDALLAY	HAMDALLAY	ST HAMDALLAYE	ST HAMDALLAYE		Carrefour, Concasseur à côté de l'usine Matela	Carrefour, Concasseur à côté de l'usine Matela	622653985
	Conakry	KALOUM		ST GOMBOYAH	ST GOMBOYAH	Amara Conde	Avant le Rond Point Sodefa à gauche en allant de Conakry vers Coyah	Avant le Rond Point Sodefa à gauche en allant de Conakry vers Coyah	660-926-282/620-787-760
	Conakry	KALOUM	KALOUM	ST KALOUM	ST KALOUM		Salle de l'ancien Cinema le Vox	Salle de l'ancien Cinema le Vox	660-432-257/622-012-276
	Conakry	KALOUM		ST KM-36	ST KM-36		Après le Carrefour 36 en allant de Conakry vers Coyah à Gauche	Après le Carrefour 36 en allant de Conakry vers Coyah à Gauche	669-312-258/622-613-072
	Conakry	KALOUM		ST LAGUI	ST LAGUI		Bentouraya Carrefour et Kaloum	Bentouraya Carrefour et Kaloum	628053202
	Conakry	Kamsar	Kamsar	ST Kamsar	ST Kamsar		Marché Sahara à côté de la boucherie	Marché Sahara à côté de la boucherie	660-372-251 / 624-665-329
	Conakry	KiSSOSSO	KiSSOSSO	ST KISSOSSO	ST KISSOSSO	B	Kissosso Carrefour en face de la station TOTAL	Kissosso Carrefour en face de la station TOTAL	625-977-878 / 628-856-576
Kindia	Conakry	Kindia	Kindia	ST kindia	ST kindia		Marché yenkema centre Boubacar Bowal	Marché yenkema centre Boubacar Bowal	664-389-444 / 620-897-962
	Conakry	MATAM		ST CASSE	ST CASSE		Casse Madina	Casse Madina	669-312-258 /628-289-706
	Conakry	MATAM		ST INIPRA	ST INIPRA		Madina Inipra	Madina Inipra	622016604
	Conakry	MATAM		ST KENIEN	ST KENIEN		Casse Kenien, Kankan Coura	Casse Kenien, Kankan Coura	669312258-622089858
	Conakry	MATAM		ST MADINA	ST MADINA		Bordo Centre Sory Kaba	Bordo Centre Sory Kaba	622-321-241/ 628-031-600
	Conakry	MATAM	MATAM	ST MAFANCO	ST MAFANCO	B3	Centre Bayo sur la route du Niger	Centre Bayo sur la route du Niger	660-926-282/622-214-321
	Conakry	MATAM		ST MATAM	ST MATAM		Garre Routière Matam	Garre Routière Matam	660-926-282/621-528-320
	Conakry	MATOTO		ST AEROPORT	ST AEROPORT		Marché Tanènè	Marché Tanènè	669-312-258 /628-110-702
	Conakry	MATOTO	MATOTO	ST DAPOMPA	ST DAPOMPA	B1	Auto-Route Tamisso	Auto-Route Tamisso	669312258
	Conakry	MATOTO		ST Dabondy	ST Dabondy		Grand marché, Bloc A112, C/Matoto	Grand marché, Bloc A112, C/Matoto	660-566-152/620-666-651
	Conakry	MATOTO		ST ENTAG	ST ENTAG		Auto-Route, Marché Entag	Auto-Route, Marché Entag	669-312-258/ 628-212-290
	Conakry	MATOTO		ST ETS DIANE	ST ETS DIANE		Madina Bordo à côté du magasin de Salian Sacko	Madina Bordo à côté du magasin de Salian Sacko	622433130
	Conakry	MATOTO		ST GBESSIA	ST GBESSIA	B4	Rond Point Marché en face de l'Auto-Route	Rond Point Marché en face de l'Auto-Route	620882408
	Conakry	MATOTO		ST KANTE SERVICES	ST KANTE SERVICES		Matin; centre Dubaï l'ancienne Salle de Mathyla	Matin; centre Dubaï l'ancienne Salle de Mathyla	622248096
	Conakry	MATOTO		ST LANSANAYA BARRAGE	ST LANSANAYA BARRAGE		Auto-Route Barrage marché	Auto-Route Barrage marché	660-926-282/622-266-620
	Conakry	MATOTO		ST MADINA CENTRE	ST MADINA CENTRE		Boussoura, à la gare routière de gros Camion de Dabola	Boussoura, à la gare routière de gros Camion de Dabola	666-470-144/623-840-112
	Conakry	MATOTO		ST TANNERIE	ST TANNERIE		Tannerie Marché	Tannerie Marché	621297908
	Conakry	MATOTO		ST YINBAYA	ST YINBAYA		Auto-Route, Camp Carrefour	Auto-Route, Camp Carrefour	669-312-258/ 620-762-958
	Conakry	MaTOTO	MaTOTO	ST Cosa	ST Cosa		Cosa, Gendarmerie ECO18	Cosa, Gendarmerie ECO18	669-312-258/ 622-520-125
	Conakry	MaTOTO		ST KASSIM SERVICES	ST KASSIM SERVICES		Madina, centre Elhadj Moussa	Madina, centre Elhadj Moussa	622260865
	Conakry	MaTOTO		ST MADINA CANAL	ST MADINA CANAL		Madina, immeuble Bobo Hongkong	Madina, immeuble Bobo Hongkong	628693899
	Conakry	MaTOTO		ST TOMBOLIA	ST TOMBOLIA		Auto-Route, Carrefour Tombolia	Auto-Route, Carrefour Tombolia	
	Conakry	Matoto	Matoto	ST MATOTO	ST MATOTO		Auto-Route, Carrefour keneka,	Auto-Route, Carrefour keneka,	669-312-258/620-204-935
	Conakry	RATOMA		ST BAMBETO	ST BAMBETO		Garre Routière Bambéto	Garre Routière Bambéto	660-926-282/621-231-480
	Conakry	RATOMA	RATOMA	ST BELLE VUE	ST BELLE VUE		Route le Prince, Rond-Point belle vus	Route le Prince, Rond-Point belle vus	660-926-282/621-621-848
	Conakry	RATOMA		ST CIMENTERIE	ST CIMENTERIE		Au Carrefour de la Cimentérie à côté de la Station TMI	Au Carrefour de la Cimentérie à côté de la Station TMI	660-926-282/ 622-004-496
	Conakry	RATOMA		ST COBAYAH	ST COBAYAH		Marché Cobayah	Marché Cobayah	669-312-258/622-463-971
	Conakry	RATOMA		ST ENCO 5	ST ENCO 5		Route le Prince À Côté de CMIS	Route le Prince À Côté de CMIS	669-312-258/621-612-766
	Conakry	RATOMA		ST KIPÉ	ST KIPÉ		Restaurant Namassé	Restaurant Namassé	622-441-177 /661-609-666
	Conakry	RATOMA		ST KOLOMA	ST KOLOMA		Route le Prince, Marché Koloma	Route le Prince, Marché Koloma	
	Conakry	RATOMA		ST LAMBAYI	ST LAMBAYI		En face du Bureau de l'EDG	En face du Bureau de l'EDG	
	Conakry	RATOMA		ST SANGOYA	ST SANGOYA		Sangria pharmacie Rond-Point	Sangria pharmacie Rond-Point	628562541
	Conakry	RATOMA		ST SONFONIA	ST SONFONIA		Marché Sonfonia en face de la mosqué	Marché Sonfonia en face de la mosqué	669-312-258/628-123-563
	Conakry	RATOMA		ST T6	ST T6		Yattaya T6 Rond-Point	Yattaya T6 Rond-Point	624353567
	Conakry	RATOMA		ST TAOUYA	ST TAOUYA		Taouya marché	Taouya marché	660-926-282/621-670-175
	Conakry	SONFONIA	SONFONIA	ST SONFONIA TRANSFERT	ST SONFONIA TRANSFERT		Sanoyah en face de l'usine Diamond Ciment	Sanoyah en face de l'usine Diamond Ciment	625281818
Faranah	Dabola	AR-FAMOUSSAYAH	AR-FAMOUSSAYAH	ST Ar-Famoussayah	ST Ar-Famoussayah		À côté de la sous-préfecture	À côté de la sous-préfecture	627-987-402 / 620-434-409
	Dabola	BISSIKIMA	BISSIKIMA	ST BISKIRIMA	ST BISKIRIMA		En face de la garre routière	En face de la garre routière	662-473-825 / 622-978-154
	Dalaba	Dalaba centre ville	Dalaba centre ville	ST Dalaba	ST Dalaba		Centre ville, Bordos Immeuble Mr Karim	Centre ville, Bordos Immeuble Mr Karim	627-762-130 / 621-163-122
	Dinguiraye	ALBADARIA	ALBADARIA	ST Albadaria	ST Albadaria		En face de la mosquée au Centre ville	En face de la mosquée au Centre ville	624-642-941
	Dinguiraye	BANORA	BANORA	ST Banora	ST Banora		Au centre ville		626-172-129 / 62704-784
	Dinguiraye	DIATEFERE	DIATEFERE	ST DIATEFERE	ST DIATEFERE		Au centre ville/ Dinguiraye	Au centre ville/ Dinguiraye	660-133-271 / 620-876-549
	Dinguiraye	DOUNET(Balet)	DOUNET(Balet)	ST DOUNET(Balet)	ST DOUNET(Balet)		Centre ville/Marché	Centre ville/Marché	628939807 / 628939807
	Dinguiraye	Dinguiraye	Dinguiraye	ST DINGUIRAYE	ST DINGUIRAYE		Centre ville, l'ex gendarmerie au Rond-Point	Centre ville, l'ex gendarmerie au Rond-Point	660-133-271 /622-257-070
	Dinguiraye	Dinguiraye Dialakoro	Dinguiraye Dialakoro	ST Dialakoro Dinguiraye	ST Dialakoro Dinguiraye	ST	Centre ville/ Dinguiraye Dialakoro	Centre ville/ Dinguiraye Dialakoro	627-678-346 / 625-237-960
	Dinguiraye	Kalinko	Kalinko	ST DIAN-MALALIA	ST DIAN-MALALIA		Dans le marche/ Sp de Kalinko/Dinguiraye	Dans le marche/ Sp de Kalinko/Dinguiraye	660-133-271 / 622-503-632
	Dubréka	Dubréka	Dubréka	ST Dubréka	ST Dubréka		KM5 Rond-Point	KM5 Rond-Point	660-926-282
	Faranah	BAGNA	BAGNA	ST Bagna	ST Bagna		En face de la gendarmerie de Bagna	En face de la gendarmerie de Bagna	625-511-686 / 622-296-206
	Faranah	FARANAH	FARANAH	ST FARANAH	ST FARANAH		Tonkolonko chez Wanda Oulare	Tonkolonko chez Wanda Oulare	669-184-341/ 628-102-621
	Forékariah	Dogome	Dogome	ST DOGOME	ST DOGOME		Centre ville en face du garage Tely	Centre ville en face du garage Tely	621572766 / 622207945
	Forékariah	Forékariah	Forékariah	ST Forékariah	ST Forékariah		Garre Routière Forékariah	Garre Routière Forékariah	669-312-258 / 623-246-213
	Fria	Fria	Fria	ST FRIA	ST FRIA		Rond-point Dja-Fodeyah en bas de la clinique Bah Lamarana	Rond-point Dja-Fodeyah en bas de la clinique Bah Lamarana	660-402-254 / 628-137-071
	Gueckedou	Djende	Djende	ST DJENDE	ST DJENDE		À coté de la gendarmerie	À coté de la gendarmerie	626-332-438 / 622-420-121
	Gueckedou	Djimbala	Djimbala	ST DJIMBALA	ST DJIMBALA		Centre ville en face du marché	Centre ville en face du marché	626474035 / 623744904
	Gueckedou	Guékédou	Guékédou	ST GUEKEDOU	ST GUEKEDOU		Garre Routière Sandia, immeuble hadja Saran	Garre Routière Sandia, immeuble hadja Saran	626-332-438/ 628-942-860
	Kankan	BARANAMA	BARANAMA	ST GBEREGBE	ST GBEREGBE		Centre ville		660372254 / 628484140
	Kankan	BARANAMA		ST GNALEYAH	ST GNALEYAH		Centre ville		623763873 / 622923856
	Kankan	BARANAMA(Kalankalan)	BARANAMA(Kalankalan)	ST KALANKALAN	ST KALANKALAN		Au centre ville		620191438 / 622536286
	Kankan	BARO	BARO	ST Baro	ST Baro		Au centre ville Baro	Au centre ville Baro	624-875-271/ 621-739-436
	Kankan	Baranama	Baranama	ST GBEREDOU BARANAMA	ST GBEREDOU BARANAMA		Centre ville	Centre ville	625381773 / 628144822
	Kankan	Dabola	Dabola	ST DABOLA	ST DABOLA		Centre ville au centre commerial	Centre ville au centre commerial	660-372-253/ 622-424-093
	Kankan	Dandano	Dandano	ST DANDANO	ST DANDANO		Au centre ville/ à côté du magasin guindo	Au centre ville/ à côté du magasin guindo	666-022-677 / 628-288-722
	Kankan	Diankana	Diankana	ST DIANKANA	ST DIANKANA		En face de la grande mosquée	En face de la grande mosquée	664-385-688 / 622-165-658
	Kankan	Djelibakoro	Djelibakoro	ST DJELIBAKORO	ST DJELIBAKORO		Centre ville au marché	Centre ville au marché	664-385-688 / 628-817-263
	Kankan	Farabanah(Komodou)	Farabanah(Komodou)	ST FARABANAH	ST FARABANAH		Centre ville/ dans la Sous préfecture de Komodou	Centre ville/ dans la Sous préfecture de Komodou	622985004
	Kankan	GNAKO	GNAKO	ST GNAKO	ST GNAKO		Au centre ville		623500709
	Kankan	IRIE	IRIE	ST IRIE	ST IRIE		Au centre ville sur la route de N'zérékoré	Au centre ville sur la route de N'zérékoré	623508435 / 622614381
Kankan	Kankan	KANKAN	KANKAN	ST KANKAN	ST KANKAN		Marché Sogbè,Immeuble Boulaie Nabé	Marché Sogbè,Immeuble Boulaie Nabé	627-675-050/629-232-302
	Kankan	KARIFAMORIAH	KARIFAMORIAH	ST KARIFAMORIAH	ST KARIFAMORIAH		Au centre ville		622623973
	Kankan	KISSIDOUGOU	KISSIDOUGOU	ST Kissidougou	ST Kissidougou		Centre ville immeuble Elh Balla	Centre ville immeuble Elh Balla	626-332-438/ 655-676-067
	Kankan	KOLABOUGNY	KOLABOUGNY	ST KOLABOUGNY	ST KOLABOUGNY		Au centre ville		664389444 / 620897962
	Kankan	KOMAH Sp(BARANAMA)	KOMAH Sp(BARANAMA)	ST KOMAH	ST KOMAH		Au centre ville		624698366
	Kankan	KONIDOU	KONIDOU	ST KONIDOU	ST KONIDOU		En face du marché	En face du marché	624051041 / 622827017
	Kankan	KONKOI	KONKOI	ST KONKOI	ST KONKOI		Au centre ville Chez(Doumbouya Prestation)	Au centre ville Chez(Doumbouya Prestation)	666019245 / 622 85 01 80
	Kankan	KONSANKORO	KONSANKORO	ST KONSANKORO	ST KONSANKORO	ST	Centre ville		627686628 / 628 69 59 63
	Kankan	KONSO	KONSO	ST KONSO	ST KONSO		Centre ville		660372254 / 622069717
	Kankan	KOUMBAN	KOUMBAN	ST KOUMBAN	ST KOUMBAN		Au centre ville		664385688 / 620952020
	Kankan	KOUNDJAN	KOUNDJAN	ST KOUNDJAN	ST KOUNDJAN		Au centre ville		628814716 / 628814716
	Kankan	KOUNDOU	KOUNDOU	ST KOUNDOU	ST KOUNDOU		Au centre ville à côté de la mairie	Au centre ville à côté de la mairie	627987401 / 628868962
	Kankan	KOUROUDOU	KOUROUDOU	ST KOUROUDOU	ST KOUROUDOU		AU centre ville à côté de la mosquée peule	AU centre ville à côté de la mosquée peule	666448997 / 622704466
	Kankan	KOUROUKORO	KOUROUKORO	ST KOUROUKORO	ST KOUROUKORO		En face du marché de Kouroukoro	En face du marché de Kouroukoro	623291809 / 623291797
	Kankan	KOYAMA	KOYAMA	ST KOYAMA	ST KOYAMA		Centre ville		623357930 / 628624286
	Kankan	Kondianankoro	Kondianankoro	ST KONDIANANKORO	ST KONDIANANKORO		Centre ville		628328014 / 625974050
	Kankan	Kouankan	Kouankan	ST KOUANKAN	ST KOUANKAN		Au centre ville (Grand roua-point sur la route de gbonodou)	Au centre ville (Grand roua-point sur la route de gbonodou)	625353493 / 621080888
	Kankan	NAFADJI	NAFADJI	ST Nafadji	ST Nafadji		Au centre ville de Nafadji	Au centre ville de Nafadji	622-165-658 / 622-165-658
	Kouroussa	BABILA	BABILA	ST Babila	ST Babila		Au centre ville		623-703-641 / 623-703-641
	Kouroussa	BANFELÈ	BANFELÈ	ST Banfelè	ST Banfelè		Au centre ville Banfele-Kouroussa	Au centre ville Banfele-Kouroussa	662-473-827 / 624-961-217
	Kouroussa	Bandjougoula	Bandjougoula	ST BANDJOUGOULA	ST BANDJOUGOULA		Au centre ville		626-444-808 / 620-763-666
	Kouroussa	Banko Oulada	Banko Oulada	ST Banko	ST Banko		Au centre ville Bank Oulada	Au centre ville Bank Oulada	660-497-984
	Kouroussa	KIGNERO	KIGNERO	ST KIGNERO	ST KIGNERO		Au centre ville/ Kignero Kouroussa	Au centre ville/ Kignero Kouroussa	666356490 / 622154024
	Kouroussa	KINGNEKOUDA	KINGNEKOUDA	ST KINGNEKOUDA	ST KINGNEKOUDA		Centre ville chez Doumbouya à côté des orpailleures	Centre ville chez Doumbouya à côté des orpailleures	622950696 / 628991913
	Kouroussa	KINIERAN	KINIERAN	ST KINIERAN	ST KINIERAN		Au centre ville		628433733
	Kouroussa	KOUMANA AMANA	KOUMANA AMANA	ST KOUMANA AMANA	ST KOUMANA AMANA		Au centre ville à côté de la maison des jeunes	Au centre ville à côté de la maison des jeunes	660133136 / 628569905
	Kouroussa	KOUROUSSA	KOUROUSSA	ST KOUROUSSA	ST KOUROUSSA		Kouroukan, chez Sory Doumbouya	Kouroukan, chez Sory Doumbouya	662-473-827 / 621-312-594
	Kouroussa	Nafadji Banko	Nafadji Banko	ST Banko Nafadji	ST Banko Nafadji		À côté de l'antenne Areba de Banko	À côté de l'antenne Areba de Banko	662-187-437 / 628-349-378
	Kérouane	BOULA	BOULA	ST Boula	ST Boula		Au carefour, centre ville Boula	Au carefour, centre ville Boula	627-280-741
	Kérouane	Damaro	Damaro	ST DAMARO	ST DAMARO		Centre ville/ Damaro dans Kérouane	Centre ville/ Damaro dans Kérouane	623731729
	Kérouane	KEROUANE	KEROUANE	ST KEROUANE	ST KEROUANE		Centre ville en face de la mosquée Elh Lonceny	Centre ville en face de la mosquée Elh Lonceny	662-473-824 / 622-280-529
	Kérouane	KOMODOU	KOMODOU	ST KOMODOU	ST KOMODOU		Au centre ville chez (Bailo Prestation)	Au centre ville chez (Bailo Prestation)	
Labé	Labé	Centre ville	Centre ville	ST Labé central	ST Labé central		Centre ville, l'ex Cinema le Range	Centre ville, l'ex Cinema le Range	660-372-258 / 623-383-356
	Labé	LAINE	LAINE	ST LAINE	ST LAINE		Centre ville		660372254 / 628856765
	Lola	Centre ville		ST Lola	ST Lola		Centre ville, en face de l'ex hôpital préfectoral	Centre ville, en face de l'ex hôpital préfectoral	622-065-245/621-971-861
	Lola	Foumbadou	Foumbadou	ST FOUMBADOU	ST FOUMBADOU	St	En face du marché		621983904 / 628959898
	Lola	GAMA	GAMA	ST GAMA BREMA	ST GAMA BREMA		Au centre ville		621276606 / 626727163
	Lola	Koulé	Koulé	ST KOULE	ST KOULE		Au centre ville à côté du télecentre Anjou	Au centre ville à côté du télecentre Anjou	627514967 / 624424064
	Macenta	Centre ville		ST Macenta	ST Macenta		Centre ville, en face du palais de la justice	Centre ville, en face du palais de la justice	621-625-831/622-868-139
	Macenta	BOFOSSOU	BOFOSSOU	BOFOSSOU	BOFOSSOU		Au carrefour au bord du goudron	Au carrefour au bord du goudron	623-787-842 / 623-055-934
	Macenta	Bowe	Bowe	ST BOWE	ST BOWE		En face du bureau d'orange/macenta	En face du bureau d'orange/macenta	666-448-997 / 621-860-389
	Macenta	KABOUKARIA	KABOUKARIA	ST KABOUKARIA	ST KABOUKARIA		Au centre ville		620291710 / 622567157
Mamou	Mamou	Centre ville		ST Mamou Central	ST Mamou Central		Centre ville Rue commerciale à côté de labo photo Tudor	Centre ville Rue commerciale à côté de labo photo Tudor	660-133-272/ 622-040-940
	Mandiana	Baranama		ST GNATANINA	ST GNATANINA		Centre ville en face du marché		622950696 / 622416983
	Mandiana	BANKON KODJOU	BANKON KODJOU	ST KODJOU	ST KODJOU		Au centre ville / BANKON Kodjou	Au centre ville / BANKON Kodjou	628349378
	Mandiana	BANKOUMANA	BANKOUMANA	ST Bankoumana	ST Bankoumana		Au centre ville, près de la grande mosquée de Bankoumana	Au centre ville, près de la grande mosquée de Bankoumana	627-644-153 / 622-445-253
	Mandiana	BOUGOULA	BOUGOULA	ST BOUGOULA	ST BOUGOULA		Auprès de la Douane dans le marché	Auprès de la Douane dans le marché	621-828-329
	Mandiana	Dialakoro	Dialakoro	ST DIALAKORO	ST DIALAKORO		En face du marché/ Dialakoro Mandiana	En face du marché/ Dialakoro Mandiana	662-187-437 / 621-745-076
	Mandiana	Douako	Douako	ST DOUAKO	ST DOUAKO		Au centre ville		
	Mandiana	Faralako	Faralako	ST FARALAKO	ST FARALAKO		Centre ville	Centre ville	622950696 / 621512449
	Mandiana	Faranwaleya	Faranwaleya	ST FARANWALEYAH	ST FARANWALEYAH		Centre ville		666019245 / 628250884
	Mandiana	KALAFILILA	KALAFILILA	ST KALAFILILA	ST KALAFILILA		AU centre ville	AU centre ville	624114149 / 628216901
	Mandiana	KALINKO	KALINKO	ST KALINKO	ST KALINKO		En face de la gendarmerie	En face de la gendarmerie	627988760 / 628333053
	Mandiana	KANSEREYAH	KANSEREYAH	ST KANSEREYAH	ST KANSEREYAH		Au centre ville		664385688 / 628585879
	Mandiana	KANTEDOU Balandou	KANTEDOU Balandou	ST KANTEDOU BALANDOU	ST KANTEDOU BALANDOU		Au centre ville		666356490 / 622536750
	Mandiana	KANTOUGOUMA	KANTOUGOUMA	ST KANTOUGOUMA	ST KANTOUGOUMA		Au centre ville		620191438 / 628536788
	Mandiana	KANTOUMANINA	KANTOUMANINA	ST KANTOUMANINA	ST KANTOUMANINA		En face du marché/ Kantoumanina Mandiana	En face du marché/ Kantoumanina Mandiana	660372255 / 622940166
	Mandiana	KARAKO	KARAKO	ST KARAKO	ST KARAKO		Au centre ville		
	Mandiana	KOBEDRA	KOBEDRA	ST KOBREDA	ST KOBREDA		Au centre ville		662473824 / 622280529
	Mandiana	KODIARAN	KODIARAN	ST KODIARAN	ST KODIARAN		AU centre ville grand carrefour	AU centre ville grand carrefour	620615060 / 622124186
	Mandiana	KOLENDA	KOLENDA	ST KOLENDA	ST KOLENDA		Au centre ville en face de l'hôpital	Au centre ville en face de l'hôpital	629591198 / 628820724
	Mandiana	KOROMADOU	KOROMADOU	ST KOROMADOU	ST KOROMADOU		Centre ville		622950696 / 628462860
	Mandiana	MANDIANA	MANDIANA	ST MANDIANA	ST MANDIANA		Centre ville en face de la grande Mosquée	Centre ville en face de la grande Mosquée	622950696
N’zérékoré	N’zérékoré	Samana	Samana	ST N'zérékoré central	ST N'zérékoré central		Garre Routière Samana	Garre Routière Samana	666-448-997/622-643-866
	Pita	BASSARA_Koubia	BASSARA_Koubia	ST BASSARA	ST BASSARA		Bassara dans Koubia	Bassara dans Koubia	621-469-969
	Pita	Pita centre ville	Pita centre ville	ST Pita	ST Pita		Centre ville à côté de la maison des jeunes	Centre ville à côté de la maison des jeunes	621-456-500 / 628-634-175
	Siguiri	BALANDOUGOUBA	BALANDOUGOUBA	ST Balandougouba	ST Balandougouba		En face de l'école Primaire	En face de l'école Primaire	624-283-022 / 622-166-389
	Siguiri	BALIMANA-FODEKARIAH	BALIMANA-FODEKARIAH	ST Balimana-Fodekariah	ST Balimana-Fodekariah		Sur la Route Nationale en face du marché	Sur la Route Nationale en face du marché	621-373-069 / 622-524-945
	Siguiri	BEMBETA	BEMBETA	ST Bembeta	ST Bembeta		Sur la Route International Guinée-Mali en face de la station (Shel)	Sur la Route International Guinée-Mali en face de la station (Shel)	660-372-254 / 628-942-241
	Siguiri	BOUKARIA	BOUKARIA	ST BOUKARIA	ST BOUKARIA		À la gare routière Fatoya au Centre ville	À la gare routière Fatoya au Centre ville	666-019-245 / 622-446-597
	Siguiri	BOURE BALATO	BOURE BALATO	ST BALATO	ST BALATO		Au centre ville		660-498-342 / 628-404-334
	Siguiri	BOURE FATOYA	BOURE FATOYA	ST Boure fatoya	ST Boure fatoya		Au centre ville		666-019-245 / 620-982-599
	Siguiri	BOURE KOFILANY	BOURE KOFILANY	ST KOFILANY	ST KOFILANY		Au centre ville		666-019-245 / 622-850-180
	Siguiri	BOURE KOUROUDA	BOURE KOUROUDA	ST KOUROUDA	ST KOUROUDA		Au grand rond-point	Au grand rond-point	666-019-245 / 628-867-304
	Siguiri	Bounouma	Bounouma	ST BOUNOUMA	ST BOUNOUMA		À côté de maison des jeunes	À côté de maison des jeunes	666-448-997 / 621-788-112
	Siguiri	Bouré Didi	Bouré Didi	ST BOURE DIDI	ST BOURE DIDI		À côté de la boutique de Bakary Koro/Siguiri	À côté de la boutique de Bakary Koro/Siguiri	666-019-245 / 628-269-188
	Siguiri	Bouré Kintinia	Bouré Kintinia	ST BOURE KINTINIA	ST BOURE KINTINIA		En face de la gare routière au centre ville	En face de la gare routière au centre ville	666-019-245 / 622-308-283
	Siguiri	DOKO	DOKO	ST DOKO	ST DOKO		Centre ville derrière l'hôpital	Centre ville derrière l'hôpital	624990490 / 621325759
	Siguiri	KOUREMALE	KOUREMALE	ST KOUREMALE	ST KOUREMALE		En face de la garre routière		624606675 / 628595133
	Siguiri	Léro	Léro	ST AMINA	ST AMINA		Au centre ville	Au centre ville	623-320-219 / 628-570-658
	Siguiri	SIGUIRI	SIGUIRI	ST SIGUIRI	ST SIGUIRI		Pommada, Immeuble Baba Ann	Pommada, Immeuble Baba Ann	662-187-437 / 628-236-682
	Télémilé	Centre ville		ST Telemilé	ST Telemilé		Centre ville, Rond-point Nonkoyé	Centre ville, Rond-point Nonkoyé	664-389-444 / 628-701-054
	Yomou	BIGNAMOU	BIGNAMOU	ST BIGNAMOU	ST BIGNAMOU		À côté de la gendarmerie	À côté de la gendarmerie	666-448-997 / 625-470-159
	Yomou	Diecké	Diecké	ST DIECKE	ST DIECKE		En face de la station Total/Sp Yomou	En face de la station Total/Sp Yomou	666-448-997 / 622-747-043
	Yomou	Yomou	Yomou	ST Yomou	ST Yomou		Centre ville château l'an 2000	Centre ville château l'an 2000	666-448-997/ 627-863-828
"""

lines = data.split("\n")
data_rows = []
for line in lines:
    if not line.strip(): continue
    parts = line.split("\t")
    # clean parts
    parts = [p.strip() for p in parts]
    if len(parts) > 2:
        data_rows.append(parts)

# Skip header
agencies = []
for parts in data_rows[1:]:
        
    prefecture = parts[1]
    
    # Name is at index 4 (Agency Name) or 5 (Nom Agence)
    name = ""
    if len(parts) > 5 and parts[5]:
        name = parts[5]
    elif len(parts) > 4:
        name = parts[4]
        
    # Location is at index 8 (Localisation) or 7 (Location)
    location = ""
    if len(parts) > 8 and parts[8]:
        location = parts[8]
    elif len(parts) > 7:
        location = parts[7]
        
    phone = ""
    if len(parts) > 9:
        phone = parts[9]
        
    if name:
        agencies.append({
            "prefecture": prefecture,
            "name": name,
            "location": location,
            "phone": phone,
            "id": len(agencies) + 1,
            "isHq": False 
        })

print(json.dumps(agencies, indent=2, ensure_ascii=False))
