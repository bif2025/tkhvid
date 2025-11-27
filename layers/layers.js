ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1373801.419863, 7478690.372803, 1394963.260248, 7493579.146112]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_lokalplanvedtaget_1 = new ol.format.GeoJSON();
var features_lokalplanvedtaget_1 = format_lokalplanvedtaget_1.readFeatures(json_lokalplanvedtaget_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplanvedtaget_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplanvedtaget_1.addFeatures(features_lokalplanvedtaget_1);
var lyr_lokalplanvedtaget_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplanvedtaget_1, 
                style: style_lokalplanvedtaget_1,
                popuplayertitle: 'lokalplanvedtaget',
                interactive: true,
    title: 'lokalplanvedtaget<br />\
    <img src="styles/legend/lokalplanvedtaget_1_0.png" /> Areal ved Hvidovregårds Allé, Bjergagervej og Hjørnagervej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_1.png" /> Areal ved Hvidovrevej / Svendebjergvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_2.png" /> Arealer ved Hvidovre Enghavevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_3.png" /> AV Miljø<br />\
    <img src="styles/legend/lokalplanvedtaget_1_4.png" /> Avedøre Kloakværk<br />\
    <img src="styles/legend/lokalplanvedtaget_1_5.png" /> Avedøre Landsby<br />\
    <img src="styles/legend/lokalplanvedtaget_1_6.png" /> Avedøre Stationbys friarealer langs Avedøre Tværvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_7.png" /> Avedøre Stationsby<br />\
    <img src="styles/legend/lokalplanvedtaget_1_8.png" /> Avedøre Stationsby - Store Hus og Centerstrøget<br />\
    <img src="styles/legend/lokalplanvedtaget_1_9.png" /> Avedøregård Villaby, Storegårdens Villaby og Vesterkær<br />\
    <img src="styles/legend/lokalplanvedtaget_1_10.png" /> Avedørelejren<br />\
    <img src="styles/legend/lokalplanvedtaget_1_11.png" /> Avedøreværket<br />\
    <img src="styles/legend/lokalplanvedtaget_1_12.png" /> Badmintonhal og friluftsbad ved Præstemosen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_13.png" /> Baunevangen - Bevarende best. for tæt-lav boligbebyggelse samt opførelse af ældreboliger<br />\
    <img src="styles/legend/lokalplanvedtaget_1_14.png" /> Bevarende bestemmelser for rækkehusene Kløverprisvej 15-61 og 24-70<br />\
    <img src="styles/legend/lokalplanvedtaget_1_15.png" /> Blandet bolig- og erhvervsområde ved Holmelundsvej, Hvidovrevej og Landlystvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_16.png" /> Blandet byområde ved Gungevej og Arnold Nielsens Boulevard<br />\
    <img src="styles/legend/lokalplanvedtaget_1_17.png" /> Bolig- og butiksbebyggelse på Gl. Køge Landevej 256-260<br />\
    <img src="styles/legend/lokalplanvedtaget_1_18.png" /> Bolig- og erhvervsområde ved Hvidovre Station<br />\
    <img src="styles/legend/lokalplanvedtaget_1_19.png" /> Boligbebyggelse på Langkildevej 5<br />\
    <img src="styles/legend/lokalplanvedtaget_1_20.png" /> Boligbyggeri ved Vojensvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_21.png" /> Boliger for ældre - Claus Petersens Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_22.png" /> Boliger i Filmbyen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_23.png" /> Boliger i tagetager i Lejerbos Afd. 2 / Hvidovrevej - Høvedstensvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_24.png" /> Boliger mv. ved Frihedens Butikscenter<br />\
    <img src="styles/legend/lokalplanvedtaget_1_25.png" /> Boliger på Avedøre Tværvej 60-66<br />\
    <img src="styles/legend/lokalplanvedtaget_1_26.png" /> Boliger på Landlystvej 42<br />\
    <img src="styles/legend/lokalplanvedtaget_1_27.png" /> Boliger på Langkildevej 1<br />\
    <img src="styles/legend/lokalplanvedtaget_1_28.png" /> Boliger på Risbjergvej 22<br />\
    <img src="styles/legend/lokalplanvedtaget_1_29.png" /> Boligområde mellem Femagervej og Rebæk Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_30.png" /> Boligområde ved Hvidovregade, Hvidovre Álle og Åstrupgårdsvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_31.png" /> Boligområde ved Hvidovrevej og Landlystvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_32.png" /> Boligområde ved Landlystvej og Femagervej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_33.png" /> Boligområde ved Vojensvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_34.png" /> Boligområdet Toftegården<br />\
    <img src="styles/legend/lokalplanvedtaget_1_35.png" /> Bredalsparken - bevarende lokalplan for etageboligbebyggelse<br />\
    <img src="styles/legend/lokalplanvedtaget_1_36.png" /> Byggecenter på Gammel Køge Landevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_37.png" /> Center- og boligbebyggelse ved Frihedens Butikscenter<br />\
    <img src="styles/legend/lokalplanvedtaget_1_38.png" /> Centerformål og bypark ved Hjulmagerporten<br />\
    <img src="styles/legend/lokalplanvedtaget_1_39.png" /> Copenhagen Business Park på Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_40.png" /> En skole på Gungevej 1 og 2<br />\
    <img src="styles/legend/lokalplanvedtaget_1_41.png" /> Energianlæg ved rideskolen på Avedøre Slettevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_42.png" /> Erhvervsareal ved Åmarkens Station<br />\
    <img src="styles/legend/lokalplanvedtaget_1_43.png" /> Erhvervsområde ved Vojensvej/Hvidovrevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_44.png" /> Erhvervsområdet Arnold Nielsens Boulevard 124-144<br />\
    <img src="styles/legend/lokalplanvedtaget_1_45.png" /> Erhvervsområdet Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_46.png" /> Et område tiloffentlige formål omkring Rådhuset<br />\
    <img src="styles/legend/lokalplanvedtaget_1_47.png" /> Etageboligbebyggelse i 2 etager ved Strandmarkshave<br />\
    <img src="styles/legend/lokalplanvedtaget_1_48.png" /> Etageboliger på Landlystvej - Samsonparken II<br />\
    <img src="styles/legend/lokalplanvedtaget_1_49.png" /> Etageboliger ved Landlystvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_50.png" /> Etagehuse ved Spurvehøjvej og Risbjerg Kirkegård<br />\
    <img src="styles/legend/lokalplanvedtaget_1_51.png" /> Filmbyen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_52.png" /> For \'Råhavnen\' ved Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_53.png" /> For arealerne mellem Mågevej og motorvejen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_54.png" /> for byudviklingsområde ved Tårnfalkevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_55.png" /> for center- og boligformål på Hvidovrevej 59A-83A, Landlystvej 44-46A og Holmelundsvej 2A<br />\
    <img src="styles/legend/lokalplanvedtaget_1_56.png" /> for den nordlige del af Strandmarkskvarteret<br />\
    <img src="styles/legend/lokalplanvedtaget_1_57.png" /> for et bofællesskab på Parallelvej 47<br />\
    <img src="styles/legend/lokalplanvedtaget_1_58.png" /> For et bolig- og erhvervsområde i Avedøre<br />\
    <img src="styles/legend/lokalplanvedtaget_1_59.png" /> For et boligområde i Avedøre<br />\
    <img src="styles/legend/lokalplanvedtaget_1_60.png" /> For et boligområde i Avedøre, Gl. Køge Landevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_61.png" /> for et boligområde mellem Hvidovrevej og Vigerslevparken<br />\
    <img src="styles/legend/lokalplanvedtaget_1_62.png" /> for et boligområde mellem Hvidovrevej, Brostykkevej og Gammel Køge Landevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_63.png" /> for et natur- og byområde øst for Byvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_64.png" /> For et område i Avedøre<br />\
    <img src="styles/legend/lokalplanvedtaget_1_65.png" /> For et område i Avedøre Stationsby<br />\
    <img src="styles/legend/lokalplanvedtaget_1_66.png" /> For et område ved Byvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_67.png" /> For et område ved Gammel Køge Landevej og Catherine Boothsvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_68.png" /> For et område ved Risbjerg Kirke<br />\
    <img src="styles/legend/lokalplanvedtaget_1_69.png" /> for etageboliger og butikker ved Kløverprisvej og Hvidovrevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_70.png" /> for Grækerkvarteret<br />\
    <img src="styles/legend/lokalplanvedtaget_1_71.png" /> for Hvidovre Stadion<br />\
    <img src="styles/legend/lokalplanvedtaget_1_72.png" /> for Hvidovre Torv og den nordlige del af Hvidovregade<br />\
    <img src="styles/legend/lokalplanvedtaget_1_73.png" /> for offentlige formål på Bibliotekvej 50-52<br />\
    <img src="styles/legend/lokalplanvedtaget_1_74.png" /> for offentlige formål på Hvidovregade 20 og 47-51<br />\
    <img src="styles/legend/lokalplanvedtaget_1_75.png" /> for seniorbofælleskab på Hvidovrevej 80<br />\
    <img src="styles/legend/lokalplanvedtaget_1_76.png" /> for Strandvang (forbud mod tagterrasser)<br />\
    <img src="styles/legend/lokalplanvedtaget_1_77.png" /> Gl. Køge Landevej 280<br />\
    <img src="styles/legend/lokalplanvedtaget_1_78.png" /> Holmegårdsskolen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_79.png" /> Hvidborg<br />\
    <img src="styles/legend/lokalplanvedtaget_1_80.png" /> Hvidovre Havn<br />\
    <img src="styles/legend/lokalplanvedtaget_1_81.png" /> Hvidovre Hospital<br />\
    <img src="styles/legend/lokalplanvedtaget_1_82.png" /> Hvidovre Stationscenter<br />\
    <img src="styles/legend/lokalplanvedtaget_1_83.png" /> Hvidovregade og Bytoften<br />\
    <img src="styles/legend/lokalplanvedtaget_1_84.png" /> Hvidovregade og Toft Sørensens Vænge<br />\
    <img src="styles/legend/lokalplanvedtaget_1_85.png" /> Hvidovrevejs Butikstorv<br />\
    <img src="styles/legend/lokalplanvedtaget_1_86.png" /> Idrætsvej / Cathrine Booths Vej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_87.png" /> Industrikvarteret Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_88.png" /> Klubbygning i Kystagerparken<br />\
    <img src="styles/legend/lokalplanvedtaget_1_89.png" /> Klubhus ved Rebæk Søpark<br />\
    <img src="styles/legend/lokalplanvedtaget_1_90.png" /> Kolonihaveområde ved Bredholtvej - H/F Dahlia<br />\
    <img src="styles/legend/lokalplanvedtaget_1_91.png" /> Kolonihaveområde ved Kettevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_92.png" /> Kolonihaveområdet Præstemosen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_93.png" /> Krogsholtsbjerg<br />\
    <img src="styles/legend/lokalplanvedtaget_1_94.png" /> Krogstenshaveområdet - område til off. formål og boliger<br />\
    <img src="styles/legend/lokalplanvedtaget_1_95.png" /> Langhusene og Dybenskærhave<br />\
    <img src="styles/legend/lokalplanvedtaget_1_96.png" /> Lav boligbebyggelse \'Byholmene\' ved Kettevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_97.png" /> Lokalcenter Hvidovrevej 85-95<br />\
    <img src="styles/legend/lokalplanvedtaget_1_98.png" /> Lokalcenter på Hvidovrevej 94-110A og Kløverprisvej 3-3A<br />\
    <img src="styles/legend/lokalplanvedtaget_1_99.png" /> Lokalcenter ved Kettevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_100.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/lokalplanvedtaget_1_101.png" /> Lokalplan for facader og skiltning langs Hvidovrevej og område<br />\
    <img src="styles/legend/lokalplanvedtaget_1_102.png" /> Matr. nr. 11e, Strandby Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_103.png" /> Menighedshus Tårnfalkevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_104.png" /> Ny boligbebyggelse Hvidovrevej 135 og Baunebakkevej 8<br />\
    <img src="styles/legend/lokalplanvedtaget_1_105.png" /> Nyt menighedshus ved Hvidovre Kirke<br />\
    <img src="styles/legend/lokalplanvedtaget_1_106.png" /> Offentlige formål ved Bødkerporten<br />\
    <img src="styles/legend/lokalplanvedtaget_1_107.png" /> Offentlige formål ved Næsborgvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_108.png" /> Område for etageboligbebyggelse i 2 etager ved Strandhavevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_109.png" /> Område for tæt-lav boligbebyggelse - \'Pagegøjehusene\'<br />\
    <img src="styles/legend/lokalplanvedtaget_1_110.png" /> Område langs Hvidovrevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_111.png" /> Område nord for Køgebugtbanen og øst for Byvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_112.png" /> Område omkring "Beringgård"<br />\
    <img src="styles/legend/lokalplanvedtaget_1_113.png" /> Område omkring Hvidovre Strandvej, Hvidovre Enghavevej, Strandby Allé, Strandmarksvej m.fl.<br />\
    <img src="styles/legend/lokalplanvedtaget_1_114.png" /> Område omkring Hvidovregade og Hvidovre Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_115.png" /> Område omkring Klardam, Kærmark, M. Bechs Allé, Allingvej m.fl.<br />\
    <img src="styles/legend/lokalplanvedtaget_1_116.png" /> Område omkring Sønderkær og Vestkærs Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_117.png" /> Område til boligformål ved Holmelundsvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_118.png" /> Område til erhvervsformål m.v. ved Vigerslev Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_119.png" /> Område ved Avedøre Havnevej, Præstemosen og jernbanen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_120.png" /> Område ved Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_121.png" /> Område ved Brostykkevej og Risbjergvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_122.png" /> Område ved Brostykkevej, Gl. Køge Landevej, Idrætsvej  og Hvidovrevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_123.png" /> Område ved Byvej og Gl. Køge Landevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_124.png" /> Område ved Byvej, Køge Bugt Banen og Frydenhøjskolen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_125.png" /> Område ved Egevolden og Frydenhøjparken<br />\
    <img src="styles/legend/lokalplanvedtaget_1_126.png" /> Område ved Frydenhøjparken og Gl. Køge Landevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_127.png" /> Område ved Gl. Køge Landevej og Mågevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_128.png" /> Område ved Hvidovrevej og Bjeverskov Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_129.png" /> Område ved Hvidovrevej og Ketilstorp Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_130.png" /> Område ved Høvedstensvej, Arnold Nielsens Boulevard, Biblioteksvej og Gungevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_131.png" /> Område ved Idrætsvej, Brostykkevej, Sydkærsvej og Karise Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_132.png" /> Område ved Kettegård Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_133.png" /> Område ved Kettevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_134.png" /> Område ved Krogstens Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_135.png" /> Område ved Lodsvej og Strandmarksvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_136.png" /> Område ved Menelaos Boulevard og Ketilstorp Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_137.png" /> Område ved Nordkærvej, Hvidovrevej og Holmelundsvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_138.png" /> Område ved Præstemosen og M. Bechs Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_139.png" /> Områder ved Hvidovrevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_140.png" /> Phønixhusene<br />\
    <img src="styles/legend/lokalplanvedtaget_1_141.png" /> Præstemoseskolen mv.<br />\
    <img src="styles/legend/lokalplanvedtaget_1_142.png" /> Redningsstationer m.v.<br />\
    <img src="styles/legend/lokalplanvedtaget_1_143.png" /> Rekreativt landskab ved Brøndby Havnevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_144.png" /> Risbjerggård, Hvidovre Bymidte<br />\
    <img src="styles/legend/lokalplanvedtaget_1_145.png" /> Risbjergkvarteret<br />\
    <img src="styles/legend/lokalplanvedtaget_1_146.png" /> Rækkehusbebyggelse ved Krebsevej og Strandholms Allé<br />\
    <img src="styles/legend/lokalplanvedtaget_1_147.png" /> Rækkehusbebyggelsen Christiansdalparken<br />\
    <img src="styles/legend/lokalplanvedtaget_1_148.png" /> Rækkehuse i Engstrupgaards Ejerlaug<br />\
    <img src="styles/legend/lokalplanvedtaget_1_149.png" /> Skole- og institutionsområde ved Kirkegade<br />\
    <img src="styles/legend/lokalplanvedtaget_1_150.png" /> Skøjtetræningshal og curlinghal ved Frihedens Idrætscenter<br />\
    <img src="styles/legend/lokalplanvedtaget_1_151.png" /> Skårupvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_152.png" /> Strandhaven II<br />\
    <img src="styles/legend/lokalplanvedtaget_1_153.png" /> Strandhaven, tæt-lav boligbebyggelse<br />\
    <img src="styles/legend/lokalplanvedtaget_1_154.png" /> Støjafskærmning nord for Amagermotorvejen, øst for Avedøre Havnevej.<br />\
    <img src="styles/legend/lokalplanvedtaget_1_155.png" /> Sønderkærhave<br />\
    <img src="styles/legend/lokalplanvedtaget_1_156.png" /> Sønderkærskolen<br />\
    <img src="styles/legend/lokalplanvedtaget_1_157.png" /> Tæt lav boligbebyggelse på Lodsvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_158.png" /> Tæt-lav boligbebyggelse ved Langkildevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_159.png" /> Tæt-lav boligbebyggelsen "Kettehuse"<br />\
    <img src="styles/legend/lokalplanvedtaget_1_160.png" /> Vindmøller på Avedøre Holme<br />\
    <img src="styles/legend/lokalplanvedtaget_1_161.png" /> Ældreboliger på Arnold Nielsens Boulevard<br />\
    <img src="styles/legend/lokalplanvedtaget_1_162.png" /> Ældreboliger ved Bredalsparken på Brostykkevej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_163.png" /> Ældreboliger ved plejehjemmet Strandmarkshave<br />\
    <img src="styles/legend/lokalplanvedtaget_1_164.png" /> Ændring af anvendelse fra erhverv til boligformål<br />\
    <img src="styles/legend/lokalplanvedtaget_1_165.png" /> Åben-lav boligbebyggelsen "Rødkløver"<br />\
    <img src="styles/legend/lokalplanvedtaget_1_166.png" /> Åben-lave boliger på Vojensvej<br />\
    <img src="styles/legend/lokalplanvedtaget_1_167.png" /> <br />' });
var format_lokalplanforslag_2 = new ol.format.GeoJSON();
var features_lokalplanforslag_2 = format_lokalplanforslag_2.readFeatures(json_lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplanforslag_2.addFeatures(features_lokalplanforslag_2);
var lyr_lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplanforslag_2, 
                style: style_lokalplanforslag_2,
                popuplayertitle: 'lokalplanforslag',
                interactive: true,
    title: 'lokalplanforslag<br />\
    <img src="styles/legend/lokalplanforslag_2_0.png" /> 153<br />\
    <img src="styles/legend/lokalplanforslag_2_1.png" /> 242<br />\
    <img src="styles/legend/lokalplanforslag_2_2.png" /> <br />' });
var format_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3 = new ol.format.GeoJSON();
var features_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3 = format_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.readFeatures(json_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.addFeatures(features_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3);
var lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3, 
                style: style_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3,
                popuplayertitle: 'strandbeskyttelse — Strandbeskyttelse-temakort — strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.png" /> strandbeskyttelse — Strandbeskyttelse-temakort — strandbeskyttelse'
            });
var format_SSsamletlayerfrededeomrder_4 = new ol.format.GeoJSON();
var features_SSsamletlayerfrededeomrder_4 = format_SSsamletlayerfrededeomrder_4.readFeatures(json_SSsamletlayerfrededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerfrededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerfrededeomrder_4.addFeatures(features_SSsamletlayerfrededeomrder_4);
var lyr_SSsamletlayerfrededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerfrededeomrder_4, 
                style: style_SSsamletlayerfrededeomrder_4,
                popuplayertitle: 'SS-samlet-layer — frededeområder',
                interactive: false,
    title: 'SS-samlet-layer — frededeområder<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_4_5.png" /> <br />' });
var format_SSsamletlayerkommuneplan_5 = new ol.format.GeoJSON();
var features_SSsamletlayerkommuneplan_5 = format_SSsamletlayerkommuneplan_5.readFeatures(json_SSsamletlayerkommuneplan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerkommuneplan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerkommuneplan_5.addFeatures(features_SSsamletlayerkommuneplan_5);
var lyr_SSsamletlayerkommuneplan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerkommuneplan_5, 
                style: style_SSsamletlayerkommuneplan_5,
                popuplayertitle: 'SS-samlet-layer — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerkommuneplan_5.png" /> SS-samlet-layer — kommuneplan'
            });
var format_SSsamletlayerBibliotek_6 = new ol.format.GeoJSON();
var features_SSsamletlayerBibliotek_6 = format_SSsamletlayerBibliotek_6.readFeatures(json_SSsamletlayerBibliotek_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBibliotek_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBibliotek_6.addFeatures(features_SSsamletlayerBibliotek_6);
var lyr_SSsamletlayerBibliotek_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBibliotek_6, 
                style: style_SSsamletlayerBibliotek_6,
                popuplayertitle: 'SS-samlet-layer — Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBibliotek_6.png" /> SS-samlet-layer — Bibliotek'
            });
var format_CM_temakort3Banker_7 = new ol.format.GeoJSON();
var features_CM_temakort3Banker_7 = format_CM_temakort3Banker_7.readFeatures(json_CM_temakort3Banker_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_temakort3Banker_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_temakort3Banker_7.addFeatures(features_CM_temakort3Banker_7);
var lyr_CM_temakort3Banker_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_temakort3Banker_7, 
                style: style_CM_temakort3Banker_7,
                popuplayertitle: 'CM_temakort (3) — Banker',
                interactive: true,
                title: '<img src="styles/legend/CM_temakort3Banker_7.png" /> CM_temakort (3) — Banker'
            });
var format_Togstationer_8 = new ol.format.GeoJSON();
var features_Togstationer_8 = format_Togstationer_8.readFeatures(json_Togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_8.addFeatures(features_Togstationer_8);
var lyr_Togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_8, 
                style: style_Togstationer_8,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_8.png" /> Togstationer'
            });
var format_Shoppingcenter_9 = new ol.format.GeoJSON();
var features_Shoppingcenter_9 = format_Shoppingcenter_9.readFeatures(json_Shoppingcenter_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoppingcenter_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoppingcenter_9.addFeatures(features_Shoppingcenter_9);
var lyr_Shoppingcenter_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoppingcenter_9, 
                style: style_Shoppingcenter_9,
                popuplayertitle: 'Shoppingcenter',
                interactive: true,
                title: '<img src="styles/legend/Shoppingcenter_9.png" /> Shoppingcenter'
            });
var format_Folkeskoler_10 = new ol.format.GeoJSON();
var features_Folkeskoler_10 = format_Folkeskoler_10.readFeatures(json_Folkeskoler_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_10.addFeatures(features_Folkeskoler_10);
var lyr_Folkeskoler_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_10, 
                style: style_Folkeskoler_10,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_10.png" /> Folkeskoler'
            });
var format_Supermarkeder_11 = new ol.format.GeoJSON();
var features_Supermarkeder_11 = format_Supermarkeder_11.readFeatures(json_Supermarkeder_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_11.addFeatures(features_Supermarkeder_11);
var lyr_Supermarkeder_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_11, 
                style: style_Supermarkeder_11,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_11.png" /> Supermarkeder'
            });
var format_Fitness_12 = new ol.format.GeoJSON();
var features_Fitness_12 = format_Fitness_12.readFeatures(json_Fitness_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fitness_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fitness_12.addFeatures(features_Fitness_12);
var lyr_Fitness_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fitness_12, 
                style: style_Fitness_12,
                popuplayertitle: 'Fitness',
                interactive: true,
                title: '<img src="styles/legend/Fitness_12.png" /> Fitness'
            });
var format_SSsamletlayerBorgerservice_13 = new ol.format.GeoJSON();
var features_SSsamletlayerBorgerservice_13 = format_SSsamletlayerBorgerservice_13.readFeatures(json_SSsamletlayerBorgerservice_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBorgerservice_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBorgerservice_13.addFeatures(features_SSsamletlayerBorgerservice_13);
var lyr_SSsamletlayerBorgerservice_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBorgerservice_13, 
                style: style_SSsamletlayerBorgerservice_13,
                popuplayertitle: 'SS-samlet-layer — Borgerservice',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBorgerservice_13.png" /> SS-samlet-layer — Borgerservice'
            });
var format_SSsamletlayerBrandstation_14 = new ol.format.GeoJSON();
var features_SSsamletlayerBrandstation_14 = format_SSsamletlayerBrandstation_14.readFeatures(json_SSsamletlayerBrandstation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBrandstation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBrandstation_14.addFeatures(features_SSsamletlayerBrandstation_14);
var lyr_SSsamletlayerBrandstation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBrandstation_14, 
                style: style_SSsamletlayerBrandstation_14,
                popuplayertitle: 'SS-samlet-layer — Brandstation',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBrandstation_14.png" /> SS-samlet-layer — Brandstation'
            });
var format_Supermarked_15 = new ol.format.GeoJSON();
var features_Supermarked_15 = format_Supermarked_15.readFeatures(json_Supermarked_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarked_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarked_15.addFeatures(features_Supermarked_15);
var lyr_Supermarked_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarked_15, 
                style: style_Supermarked_15,
                popuplayertitle: 'Supermarked',
                interactive: true,
                title: '<img src="styles/legend/Supermarked_15.png" /> Supermarked'
            });
var format_Idrt_16 = new ol.format.GeoJSON();
var features_Idrt_16 = format_Idrt_16.readFeatures(json_Idrt_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idrt_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idrt_16.addFeatures(features_Idrt_16);
var lyr_Idrt_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Idrt_16, 
                style: style_Idrt_16,
                popuplayertitle: 'Idræt',
                interactive: true,
                title: '<img src="styles/legend/Idrt_16.png" /> Idræt'
            });
var format_SSsamletlayerDagpleje_17 = new ol.format.GeoJSON();
var features_SSsamletlayerDagpleje_17 = format_SSsamletlayerDagpleje_17.readFeatures(json_SSsamletlayerDagpleje_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerDagpleje_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerDagpleje_17.addFeatures(features_SSsamletlayerDagpleje_17);
var lyr_SSsamletlayerDagpleje_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerDagpleje_17, 
                style: style_SSsamletlayerDagpleje_17,
                popuplayertitle: 'SS-samlet-layer — Dagpleje',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerDagpleje_17.png" /> SS-samlet-layer — Dagpleje'
            });
var format_SSsamletlayerHavn_18 = new ol.format.GeoJSON();
var features_SSsamletlayerHavn_18 = format_SSsamletlayerHavn_18.readFeatures(json_SSsamletlayerHavn_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerHavn_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerHavn_18.addFeatures(features_SSsamletlayerHavn_18);
var lyr_SSsamletlayerHavn_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerHavn_18, 
                style: style_SSsamletlayerHavn_18,
                popuplayertitle: 'SS-samlet-layer — Havn',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerHavn_18.png" /> SS-samlet-layer — Havn'
            });
var format_SSsamletlayerHoteller_19 = new ol.format.GeoJSON();
var features_SSsamletlayerHoteller_19 = format_SSsamletlayerHoteller_19.readFeatures(json_SSsamletlayerHoteller_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerHoteller_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerHoteller_19.addFeatures(features_SSsamletlayerHoteller_19);
var lyr_SSsamletlayerHoteller_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerHoteller_19, 
                style: style_SSsamletlayerHoteller_19,
                popuplayertitle: 'SS-samlet-layer — Hoteller',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerHoteller_19.png" /> SS-samlet-layer — Hoteller'
            });
var format_SSsamletlayerLegeplads_20 = new ol.format.GeoJSON();
var features_SSsamletlayerLegeplads_20 = format_SSsamletlayerLegeplads_20.readFeatures(json_SSsamletlayerLegeplads_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerLegeplads_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerLegeplads_20.addFeatures(features_SSsamletlayerLegeplads_20);
var lyr_SSsamletlayerLegeplads_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerLegeplads_20, 
                style: style_SSsamletlayerLegeplads_20,
                popuplayertitle: 'SS-samlet-layer — Legeplads',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerLegeplads_20.png" /> SS-samlet-layer — Legeplads'
            });
var format_SSsamletlayerLge_21 = new ol.format.GeoJSON();
var features_SSsamletlayerLge_21 = format_SSsamletlayerLge_21.readFeatures(json_SSsamletlayerLge_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerLge_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerLge_21.addFeatures(features_SSsamletlayerLge_21);
var lyr_SSsamletlayerLge_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerLge_21, 
                style: style_SSsamletlayerLge_21,
                popuplayertitle: 'SS-samlet-layer — Læge',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerLge_21.png" /> SS-samlet-layer — Læge'
            });
var format_SSsamletlayerParker_22 = new ol.format.GeoJSON();
var features_SSsamletlayerParker_22 = format_SSsamletlayerParker_22.readFeatures(json_SSsamletlayerParker_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerParker_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerParker_22.addFeatures(features_SSsamletlayerParker_22);
var lyr_SSsamletlayerParker_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerParker_22, 
                style: style_SSsamletlayerParker_22,
                popuplayertitle: 'SS-samlet-layer — Parker',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerParker_22.png" /> SS-samlet-layer — Parker'
            });
var format_SSsamletlayerStrand_23 = new ol.format.GeoJSON();
var features_SSsamletlayerStrand_23 = format_SSsamletlayerStrand_23.readFeatures(json_SSsamletlayerStrand_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerStrand_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerStrand_23.addFeatures(features_SSsamletlayerStrand_23);
var lyr_SSsamletlayerStrand_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerStrand_23, 
                style: style_SSsamletlayerStrand_23,
                popuplayertitle: 'SS-samlet-layer — Strand',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerStrand_23.png" /> SS-samlet-layer — Strand'
            });
var format_SSsamletlayerSFO_24 = new ol.format.GeoJSON();
var features_SSsamletlayerSFO_24 = format_SSsamletlayerSFO_24.readFeatures(json_SSsamletlayerSFO_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerSFO_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerSFO_24.addFeatures(features_SSsamletlayerSFO_24);
var lyr_SSsamletlayerSFO_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerSFO_24, 
                style: style_SSsamletlayerSFO_24,
                popuplayertitle: 'SS-samlet-layer — SFO',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerSFO_24.png" /> SS-samlet-layer — SFO'
            });
var format_SSsamletlayerTandlge_25 = new ol.format.GeoJSON();
var features_SSsamletlayerTandlge_25 = format_SSsamletlayerTandlge_25.readFeatures(json_SSsamletlayerTandlge_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerTandlge_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerTandlge_25.addFeatures(features_SSsamletlayerTandlge_25);
var lyr_SSsamletlayerTandlge_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerTandlge_25, 
                style: style_SSsamletlayerTandlge_25,
                popuplayertitle: 'SS-samlet-layer — Tandlæge',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerTandlge_25.png" /> SS-samlet-layer — Tandlæge'
            });
var format_CM_temakort3Barer_26 = new ol.format.GeoJSON();
var features_CM_temakort3Barer_26 = format_CM_temakort3Barer_26.readFeatures(json_CM_temakort3Barer_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_temakort3Barer_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_temakort3Barer_26.addFeatures(features_CM_temakort3Barer_26);
var lyr_CM_temakort3Barer_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_temakort3Barer_26, 
                style: style_CM_temakort3Barer_26,
                popuplayertitle: 'CM_temakort (3) — Barer',
                interactive: true,
                title: '<img src="styles/legend/CM_temakort3Barer_26.png" /> CM_temakort (3) — Barer'
            });
var format_CM_temakort3Hospitaler_27 = new ol.format.GeoJSON();
var features_CM_temakort3Hospitaler_27 = format_CM_temakort3Hospitaler_27.readFeatures(json_CM_temakort3Hospitaler_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_temakort3Hospitaler_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_temakort3Hospitaler_27.addFeatures(features_CM_temakort3Hospitaler_27);
var lyr_CM_temakort3Hospitaler_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_temakort3Hospitaler_27, 
                style: style_CM_temakort3Hospitaler_27,
                popuplayertitle: 'CM_temakort (3) — Hospitaler',
                interactive: true,
                title: '<img src="styles/legend/CM_temakort3Hospitaler_27.png" /> CM_temakort (3) — Hospitaler'
            });
var format_CM_temakort3Religisebygninger_28 = new ol.format.GeoJSON();
var features_CM_temakort3Religisebygninger_28 = format_CM_temakort3Religisebygninger_28.readFeatures(json_CM_temakort3Religisebygninger_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_temakort3Religisebygninger_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_temakort3Religisebygninger_28.addFeatures(features_CM_temakort3Religisebygninger_28);
var lyr_CM_temakort3Religisebygninger_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_temakort3Religisebygninger_28, 
                style: style_CM_temakort3Religisebygninger_28,
                popuplayertitle: 'CM_temakort (3) — Religiøse bygninger',
                interactive: true,
                title: '<img src="styles/legend/CM_temakort3Religisebygninger_28.png" /> CM_temakort (3) — Religiøse bygninger'
            });
var format_CM_temakort3Restauranter_29 = new ol.format.GeoJSON();
var features_CM_temakort3Restauranter_29 = format_CM_temakort3Restauranter_29.readFeatures(json_CM_temakort3Restauranter_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_temakort3Restauranter_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_temakort3Restauranter_29.addFeatures(features_CM_temakort3Restauranter_29);
var lyr_CM_temakort3Restauranter_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_temakort3Restauranter_29, 
                style: style_CM_temakort3Restauranter_29,
                popuplayertitle: 'CM_temakort (3) — Restauranter',
                interactive: true,
                title: '<img src="styles/legend/CM_temakort3Restauranter_29.png" /> CM_temakort (3) — Restauranter'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_lokalplanvedtaget_1.setVisible(true);lyr_lokalplanforslag_2.setVisible(true);lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.setVisible(true);lyr_SSsamletlayerfrededeomrder_4.setVisible(true);lyr_SSsamletlayerkommuneplan_5.setVisible(true);lyr_SSsamletlayerBibliotek_6.setVisible(true);lyr_CM_temakort3Banker_7.setVisible(true);lyr_Togstationer_8.setVisible(true);lyr_Shoppingcenter_9.setVisible(true);lyr_Folkeskoler_10.setVisible(true);lyr_Supermarkeder_11.setVisible(true);lyr_Fitness_12.setVisible(true);lyr_SSsamletlayerBorgerservice_13.setVisible(true);lyr_SSsamletlayerBrandstation_14.setVisible(true);lyr_Supermarked_15.setVisible(true);lyr_Idrt_16.setVisible(true);lyr_SSsamletlayerDagpleje_17.setVisible(true);lyr_SSsamletlayerHavn_18.setVisible(true);lyr_SSsamletlayerHoteller_19.setVisible(true);lyr_SSsamletlayerLegeplads_20.setVisible(true);lyr_SSsamletlayerLge_21.setVisible(true);lyr_SSsamletlayerParker_22.setVisible(true);lyr_SSsamletlayerStrand_23.setVisible(true);lyr_SSsamletlayerSFO_24.setVisible(true);lyr_SSsamletlayerTandlge_25.setVisible(true);lyr_CM_temakort3Barer_26.setVisible(true);lyr_CM_temakort3Hospitaler_27.setVisible(true);lyr_CM_temakort3Religisebygninger_28.setVisible(true);lyr_CM_temakort3Restauranter_29.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_lokalplanvedtaget_1,lyr_lokalplanforslag_2,lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3,lyr_SSsamletlayerfrededeomrder_4,lyr_SSsamletlayerkommuneplan_5,lyr_SSsamletlayerBibliotek_6,lyr_CM_temakort3Banker_7,lyr_Togstationer_8,lyr_Shoppingcenter_9,lyr_Folkeskoler_10,lyr_Supermarkeder_11,lyr_Fitness_12,lyr_SSsamletlayerBorgerservice_13,lyr_SSsamletlayerBrandstation_14,lyr_Supermarked_15,lyr_Idrt_16,lyr_SSsamletlayerDagpleje_17,lyr_SSsamletlayerHavn_18,lyr_SSsamletlayerHoteller_19,lyr_SSsamletlayerLegeplads_20,lyr_SSsamletlayerLge_21,lyr_SSsamletlayerParker_22,lyr_SSsamletlayerStrand_23,lyr_SSsamletlayerSFO_24,lyr_SSsamletlayerTandlge_25,lyr_CM_temakort3Barer_26,lyr_CM_temakort3Hospitaler_27,lyr_CM_temakort3Religisebygninger_28,lyr_CM_temakort3Restauranter_29];
lyr_lokalplanvedtaget_1.set('fieldAliases', {'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_lokalplanforslag_2.set('fieldAliases', {'lp_plannr': 'lp_plannr', 'lp_plannav': 'lp_plannav', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'anvendelse': 'anvendelse', 'doklink': 'doklink', });
lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_SSsamletlayerfrededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_SSsamletlayerkommuneplan_5.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_SSsamletlayerBibliotek_6.set('fieldAliases', {'fid': 'fid', 'Bibliotekn': 'Bibliotekn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_CM_temakort3Banker_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Shoppingcenter_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_10.set('fieldAliases', {'skolenavn': 'skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Supermarkeder_11.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Fitness_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SSsamletlayerBorgerservice_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerBrandstation_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Supermarked_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Idrt_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SSsamletlayerDagpleje_17.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Aldersgrup': 'Aldersgrup', 'Telefon': 'Telefon', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerHavn_18.set('fieldAliases', {'fid': 'fid', 'Havnnavn': 'Havnnavn', 'adresse': 'adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerHoteller_19.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerLegeplads_20.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerLge_21.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerParker_22.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Parkerings': 'Parkerings', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerStrand_23.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Parkerings': 'Parkerings', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerSFO_24.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerTandlge_25.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_CM_temakort3Barer_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CM_temakort3Hospitaler_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CM_temakort3Religisebygninger_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CM_temakort3Restauranter_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_lokalplanvedtaget_1.set('fieldImages', {'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_lokalplanforslag_2.set('fieldImages', {'lp_plannr': 'TextEdit', 'lp_plannav': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'anvendelse': 'TextEdit', 'doklink': 'TextEdit', });
lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_SSsamletlayerfrededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_SSsamletlayerkommuneplan_5.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_SSsamletlayerBibliotek_6.set('fieldImages', {'fid': 'TextEdit', 'Bibliotekn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_CM_temakort3Banker_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Shoppingcenter_9.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_10.set('fieldImages', {'skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Supermarkeder_11.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Fitness_12.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SSsamletlayerBorgerservice_13.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerBrandstation_14.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Supermarked_15.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Idrt_16.set('fieldImages', {'id': 'Hidden', 'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SSsamletlayerDagpleje_17.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Aldersgrup': 'TextEdit', 'Telefon': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerHavn_18.set('fieldImages', {'fid': 'TextEdit', 'Havnnavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerHoteller_19.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerLegeplads_20.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerLge_21.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerParker_22.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Parkerings': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerStrand_23.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Parkerings': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerSFO_24.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerTandlge_25.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_CM_temakort3Barer_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CM_temakort3Hospitaler_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CM_temakort3Religisebygninger_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CM_temakort3Restauranter_29.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_lokalplanvedtaget_1.set('fieldLabels', {'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_lokalplanforslag_2.set('fieldLabels', {'lp_plannr': 'no label', 'lp_plannav': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'anvendelse': 'no label', 'doklink': 'no label', });
lyr_strandbeskyttelseStrandbeskyttelsetemakortstrandbeskyttelse_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_SSsamletlayerfrededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_SSsamletlayerkommuneplan_5.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_SSsamletlayerBibliotek_6.set('fieldLabels', {'fid': 'no label', 'Bibliotekn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_CM_temakort3Banker_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Togstationer_8.set('fieldLabels', {'Name': 'hidden field', });
lyr_Shoppingcenter_9.set('fieldLabels', {'Name': 'no label', });
lyr_Folkeskoler_10.set('fieldLabels', {'skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Supermarkeder_11.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_Fitness_12.set('fieldLabels', {'Name': 'no label', });
lyr_SSsamletlayerBorgerservice_13.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerBrandstation_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Supermarked_15.set('fieldLabels', {'Name': 'no label', });
lyr_Idrt_16.set('fieldLabels', {});
lyr_SSsamletlayerDagpleje_17.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Aldersgrup': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Mail': 'inline label - always visible', });
lyr_SSsamletlayerHavn_18.set('fieldLabels', {'fid': 'no label', 'Havnnavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerHoteller_19.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_SSsamletlayerLegeplads_20.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_SSsamletlayerLge_21.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerParker_22.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Parkerings': 'no label', });
lyr_SSsamletlayerStrand_23.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Parkerings': 'no label', });
lyr_SSsamletlayerSFO_24.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', });
lyr_SSsamletlayerTandlge_25.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_CM_temakort3Barer_26.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CM_temakort3Hospitaler_27.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CM_temakort3Religisebygninger_28.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CM_temakort3Restauranter_29.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CM_temakort3Restauranter_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});