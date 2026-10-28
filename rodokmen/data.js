/*
 * Údaje rodokmeňa — vetvy Koňařík a Knap.
 *
 * Sem dopĺňajte iba overené údaje (ideálne s odkazom na konkrétny matričný
 * zápis: archív, fara, kniha, folio). Každá osoba je objekt v poli `osoby`:
 *
 *   {
 *     id: "konarik-jan-1850",          // jedinečný identifikátor
 *     vetva: "konarik",                 // "konarik" | "knap"
 *     meno: "Jan",
 *     priezvisko: "Koňařík",
 *     rodne: "",                        // rodné priezvisko (pri ženách)
 *     narodenie: { datum: "1850-03-12", miesto: "…" },
 *     krst:      { datum: "", miesto: "", fara: "" },
 *     sobas:     { datum: "", miesto: "", s: "id-manzela" },
 *     umrtie:    { datum: "", miesto: "" },
 *     povolanie: "",
 *     otec: "id-otca",                  // odkaz na inú osobu (alebo "")
 *     matka: "id-matky",
 *     poznamka: "",
 *     zdroje: [ { popis: "SOA …, fara …, N 1840–1860, fol. 12", url: "https://…" } ]
 *   }
 *
 * `koren` určuje osobu, od ktorej sa pre danú vetvu kreslí vývod predkov.
 * `stopy` sú neoverené indície na ďalší výskum — nie sú to osoby rodokmeňa,
 * kým sa nepotvrdia v matrike.
 * Dátumy možno zapísať aj neúplne ("1850", "asi 1720", "1850-03").
 */
(function () {
  var WEB = "https://rodokmen1.webnode.cz/";
  var AMERIKA = {
    popis: "rodokmen1.webnode.cz — „Juraj a Ján Ropják v Amerike“ (2. 11. 2011); článok cituje zoznamy pasažierov Ellis Island, census USA 1930 (ancestry.com) a úmrtné záznamy (familysearch.org)",
    url: WEB + "news/juraj-a-jan-ropjak-v-amerike/"
  };
  var MLAKA = {
    popis: "rodokmen1.webnode.cz — „Ropjákovci a Gregovci za veľkou mlákou“ (2. 11. 2011); článok cituje zoznamy pasažierov (ellisisland.org)",
    url: WEB + "news/ropjakovci-a-gregovci-za-velkou-mlakou/"
  };
  var RODINA = { popis: "Údaj od rodiny (zadané 28. 10. 2026)" };
  var PREVZATE = "Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike.";

  window.RODOKMEN = {
    vetvy: {
      konarik: {
        nazov: "Koňařík",
        koren: "konarik-ludek-1958",
        poznamka: "Pôvodný web rodokmen1.webnode.cz uvádza len to, že mená Koňařík a Češek sa vyskytujú v okolí Hošťálkovej a Halenkova na Vsetínsku. Žiadnu konkrétnu osobu z tejto vetvy na webe nezverejnil.",
        stopy: [
          { popis: "rodokmen1.webnode.cz, úvodná stránka — vetvy Koňařík a Češek: okolie Hošťálkovej a Halenkova (okr. Vsetín)", url: WEB },
          { popis: "Rodinná kronika „Rod Chrástecký“ (lumirkral.estranky.cz): pri sčítaní ľudu na Halenkove v roku 1857 bolo priezvisko Koňařík druhé najčastejšie (14 domov). Konkrétna väzba na našu rodinu nie je známa.", url: "https://lumirkral.estranky.cz/clanky/rod-chrastecky.html" },
          { popis: "Matriky farností Hošťálková a Halenkov uchováva Zemský archiv v Opavě (digitalizované matriky). Ďalej treba začať od najmladšieho známeho Koňaříka v rodine.", url: "https://matriky.archives.cz/" }
        ]
      },
      knap: {
        nazov: "Knap",
        koren: "ropjak-jan-1899",
        poznamka: "Podľa rodokmen1.webnode.cz patria k tejto časti rodokmeňa mená Ropják, Knap a Grega z okolia Bardejova (Tarnov, Mokroluh). Web zverejnil len osoby z rodín Ropják a Grega; nikoho s priezviskom Knap neuvádza.",
        stopy: [
          { popis: "rodokmen1.webnode.cz — „História Tarnova a mien: Ropjak, Knap, Grega po roku 1700“: priezvisko Knap sa podľa sčítania z roku 1715 nevyskytuje v Tarnove; článok ho uvádza napr. v Šandale, Osadě, Trstenej, Prietrži či Perneku. Najstaršia matrika v Mokroluhu je z roku 1788.", url: WEB + "news/historia-tarnova-a-mien-ropjak-knap-grega-po-roku-1700/" },
          { popis: "Rodičia Juraja Ropjáka (* 1874) a Zuzany Gregovej (* 1879) nie sú známi. Ďalší krok: krstné zápisy z Tarnova (Sáros, maď. Tarnó) v zbierke FamilySearch „Slovakia, Church and Synagogue Books, 1592–1935“ (prístup vyžaduje bezplatné prihlásenie).", url: "https://www.familysearch.org/en/wiki/Slovakia_Church_and_Synagogue_Books_-_FamilySearch_Historical_Records" },
          { popis: "Neoverená indícia (index Ancestry): George (Juraj) Kovály, * 6. 5. 1850 Tarnov, † 25. 1. 1892 Tarnov, rodičia Andreas Kovály a Mária Ropjak. Či ide o príbuznú našich Ropjákovcov, nie je známe.", url: "https://www.ancestry.com/genealogy/records/results?firstName=george&lastName=kovary" },
          { popis: "Neoverená indícia (návrh WikiTree, nie overený profil): Anna Delej, rod. Ropjak, * 12. 6. 1869 Tarnov. Väzba na našu rodinu nie je známa.", url: "https://plus.wikitree.com/Profiles/Suggestions/CZE/777_1800-1899_1.htm" }
        ]
      }
    },
    osoby: [
      {
        id: "konarik-ludek-1958", vetva: "konarik", meno: "Luděk", priezvisko: "Koňařík",
        narodenie: { datum: "1958-07-27" },
        sobas: { s: "knapova-anna" },
        poznamka: "Východisková osoba vetvy Koňařík.",
        zdroje: [RODINA]
      },
      {
        id: "knapova-anna", vetva: "knap", meno: "Anna", priezvisko: "Koňaříková", rodne: "Knapová",
        sobas: { s: "konarik-ludek-1958" },
        poznamka: "Väzba na rodiny Ropják a Grega z Tarnova zatiaľ nie je známa.",
        zdroje: [RODINA]
      },
      {
        id: "ropjak-juraj-1874", vetva: "knap", meno: "Juraj", priezvisko: "Ropják",
        narodenie: { datum: "1874", miesto: "Tarnov" },
        sobas: { s: "gregova-zuzana-1879" },
        povolanie: "",
        poznamka: "V maďarských záznamoch Gyorgy. V USA bol dvakrát a neusadil sa tam: 16. 3. 1899 pricestoval z Brém loďou Bremen (cieľ Pittsburgh) a 18. 9. 1910 z Hamburgu loďou SS Pennsylvania (výška 1,65 m). Súrodenci: Georg (zrejme zomrel mladý), Mária (vydatá Gaľanová), Anna (vydatá Gregová) a Zuzana. Bratranec: Andreas Ropják (* 1858). " + PREVZATE,
        zdroje: [AMERIKA, MLAKA]
      },
      {
        id: "gregova-zuzana-1879", vetva: "knap", meno: "Zuzana", priezvisko: "Gregová",
        narodenie: { datum: "1879" },
        sobas: { s: "ropjak-juraj-1874" },
        poznamka: "Bratia: Ján Grega a Adam Grega (* 1893), obaja v Mansfielde v Ohiu. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjak-jan-1899", vetva: "knap", meno: "Ján", priezvisko: "Ropják",
        narodenie: { datum: "1899-06-16", miesto: "Tarnov č. 47, okr. Bardejov" },
        sobas: { datum: "1926", s: "safcakova-anna-1906" },
        umrtie: { datum: "1940-08-26", miesto: "USA (pochovaný na Calvary Cemetery v Clevelande 28. 8. 1940)" },
        otec: "ropjak-juraj-1874", matka: "gregova-zuzana-1879",
        poznamka: "7. 9. 1923 pricestoval z Cherbourgu loďou Aquitania na Ellis Island (24-ročný) k ujovi Adamovi Gregovi, 151 Daisy Street, Mansfield, Ohio. Census 1930: Dowd Street, Lakewood, Ohio, bez práce, nehovoril po anglicky. Zomrel vo veku 41 rokov, 2 mesiacov a 9 dní; príčina smrti spinálna skleróza (prvé príznaky v roku 1931). " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjak-juraj-1902", vetva: "knap", meno: "Juraj", priezvisko: "Ropják",
        narodenie: { datum: "1902-12-18" },
        sobas: { datum: "asi 1925", s: "fornadelova-mary-1903" },
        umrtie: { datum: "1944-04-17", miesto: "Bath, okres Allen, Ohio" },
        povolanie: "robotník, neskôr mechanik (Bolt Works)",
        otec: "ropjak-juraj-1874", matka: "gregova-zuzana-1879",
        poznamka: "V USA George Ropjak. 17. 9. 1921 pricestoval z Le Havre loďou SS France do New Yorku (19-ročný, výška 1,65 m) k ujovi Johnovi Gregovi, Lily Street, Mansfield, Ohio. Census 1930: 2068 Quail Avenue, Lakewood, Ohio. Zomrel na obojstranný lobárny zápal pľúc (tuberkulóza); pohreb 21. 4. 1944 z kostola sv. Cyrila a Metoda v Lakewoode, pochovaný na Calvary Cemetery v Clevelande. Rozpor v prameni: vek pri úmrtí sa uvádza 38 rokov, 3 mesiace a 29 dní, čo nezodpovedá narodeniu v roku 1902 — treba overiť v úmrtnom zázname. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "fornadel-andrew", vetva: "knap", meno: "Andrew", priezvisko: "Fornadel",
        poznamka: "Otec Mary Fornadelovej. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "fornadelova-mary-1903", vetva: "knap", meno: "Mary", priezvisko: "Ropjaková", rodne: "Fornadelová",
        narodenie: { datum: "1903-03-30", miesto: "Pennsylvánia (v prameni „Soaf“)" },
        sobas: { datum: "asi 1925", s: "ropjak-juraj-1902" },
        umrtie: { datum: "1989-09-15", miesto: "Garfield Heights, Cuyahoga County, Ohio" },
        otec: "fornadel-andrew",
        poznamka: "Narodila sa slovenským rodičom už v Amerike (v prameni Mary Fornadela). " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjakova-helen-1927", vetva: "knap", meno: "Helen Jane", priezvisko: "Ropjaková",
        narodenie: { datum: "1927-06-25", miesto: "Cuyahoga County, Ohio" },
        umrtie: { datum: "2001-03-31" },
        otec: "ropjak-juraj-1902", matka: "fornadelova-mary-1903",
        poznamka: "Manžel Evo Francescangeli. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjak-john-1929", vetva: "knap", meno: "John", priezvisko: "Ropják",
        narodenie: { datum: "1929", miesto: "Cuyahoga County, Ohio" },
        otec: "ropjak-juraj-1902", matka: "fornadelova-mary-1903",
        poznamka: "Ďalší osud nie je známy. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "safcak-john", vetva: "knap", meno: "Ján", priezvisko: "Šafčák",
        poznamka: "V USA John Safcak; manželka rod. Harňaková (Harnyak), krstné meno neuvedené. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "safcakova-anna-1906", vetva: "knap", meno: "Anna C.", priezvisko: "Ropjaková", rodne: "Šafčáková",
        narodenie: { datum: "1906-05-06", miesto: "Pennsylvánia" },
        sobas: { datum: "1926", s: "ropjak-jan-1899" },
        umrtie: { datum: "2001-02-21" },
        povolanie: "triedička (census 1930)",
        otec: "safcak-john",
        poznamka: "V USA Anna C. Safcak. Sestra Mary C. Safcak (* asi 1906) bývala s nimi v roku 1930. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjakova-josephine-1927", vetva: "knap", meno: "Josephine Marianne", priezvisko: "Oelkerová", rodne: "Ropjaková",
        narodenie: { datum: "1927-09-11", miesto: "Cuyahoga County, Ohio" },
        sobas: { datum: "1950-09-18", miesto: "Allen, Indiana", s: "oelker-thomas-1923" },
        otec: "ropjak-jan-1899", matka: "safcakova-anna-1906",
        poznamka: "Iný prameň uvádza stredné meno C. Manželia zrejme bývali v Berea, Ohio; mali syna, ktorého meno nie je známe. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "oelker-thomas-1923", vetva: "knap", meno: "Thomas Leslie", priezvisko: "Oelker",
        narodenie: { datum: "1923-09-23", miesto: "Cincinnati, Hamilton County, Ohio" },
        sobas: { datum: "1950-09-18", miesto: "Allen, Indiana", s: "ropjakova-josephine-1927" },
        umrtie: { datum: "1960" },
        povolanie: "pilot",
        poznamka: "Pilot bombardéra B-17; zostrelený nad Heidelbergom, vojnový zajatec. Počas kórejskej vojny opäť povolaný k letectvu. " + PREVZATE,
        zdroje: [AMERIKA]
      },
      {
        id: "ropjakova-maria", vetva: "knap", meno: "Mária", priezvisko: "Gaľanová", rodne: "Ropjaková",
        sobas: { s: "galan-peter-1858" },
        poznamka: "Sestra Juraja Ropjáka (* 1874). Podľa zoznamu pasažierov bola v USA už v rokoch 1889–1894. V roku 1901 pricestovala z Antverp loďou SS Friesland s deťmi Máriou (* 1892), Jánom (* 1895) a Annou (* 1899) za manželom do Pittsburghu. V USA zostala natrvalo. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "galan-peter-1858", vetva: "knap", meno: "Peter", priezvisko: "Gaľan",
        narodenie: { datum: "1858" },
        sobas: { s: "ropjakova-maria" },
        poznamka: "Do USA prvýkrát v roku 1886, v roku 1897 sa vrátil domov, v roku 1898 znova do USA (Pittsburgh), zrejme natrvalo. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "ropjakova-anna", vetva: "knap", meno: "Anna", priezvisko: "Gregová", rodne: "Ropjaková",
        sobas: { s: "grega-jan" },
        poznamka: "Sestra Juraja Ropjáka (* 1874). V roku 1920 sa s deťmi Jánom (* 1902), Annou (* 1907), Zuzanou (* 1909) a Jurajom (* 1911) plavila loďou SS France za manželom do Mansfieldu, Ohio (100 Daisy Street). V USA zostala natrvalo. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "grega-jan", vetva: "knap", meno: "Ján", priezvisko: "Grega",
        sobas: { s: "ropjakova-anna" },
        poznamka: "Brat Zuzany Gregovej (* 1879) a Adama Gregu (* 1893). Do USA prvýkrát v roku 1899 (16. 3. 1899 loďou Bremen spolu s Jurajom Ropjákom; v tom istom zozname je aj Jan Grega * 1875 z Mokroluhu — či ide o neho, prameň neuvádza). Naposledy pricestoval 30. 11. 1911 z Brém loďou König Albert s bratom Adamom; výška 1,7 m. Žil v Mansfielde, Ohio. " + PREVZATE,
        zdroje: [MLAKA, AMERIKA]
      },
      {
        id: "grega-adam-1893", vetva: "knap", meno: "Adam", priezvisko: "Grega",
        narodenie: { datum: "1893" },
        poznamka: "Brat Jána Gregu a Zuzany Gregovej. Do USA pricestoval 30. 11. 1911 (König Albert, z Brém); výška 1,8 m. V roku 1923 býval na 151 Daisy Street v Mansfielde, Ohio. " + PREVZATE,
        zdroje: [MLAKA, AMERIKA]
      },
      {
        id: "grega-jan-1902", vetva: "knap", meno: "Ján", priezvisko: "Grega",
        narodenie: { datum: "1902" },
        otec: "grega-jan", matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France); výška 1,7 m. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "gregova-anna-1907", vetva: "knap", meno: "Anna", priezvisko: "Gregová",
        narodenie: { datum: "1907" },
        otec: "grega-jan", matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France). " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "gregova-zuzana-1909", vetva: "knap", meno: "Zuzana", priezvisko: "Gregová",
        narodenie: { datum: "1909" },
        otec: "grega-jan", matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France); výška 1,67 m. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "grega-juraj-1911", vetva: "knap", meno: "Juraj", priezvisko: "Grega",
        narodenie: { datum: "1911" },
        otec: "grega-jan", matka: "ropjakova-anna",
        poznamka: "V USA Georg Grega; do USA v roku 1920 (SS France). " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "ropjakova-zuzana-1881", vetva: "knap", meno: "Zuzana", priezvisko: "Ropjaková",
        narodenie: { datum: "1881", miesto: "Tarnov č. 47" },
        poznamka: "Sestra Juraja Ropjáka (* 1874). Emigrovala 8. 12. 1899 cez Brémy za bratom (ktorým, nie je známe); zrejme sa usadila v USA. " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "ropjak-andreas-1858", vetva: "knap", meno: "Andreas", priezvisko: "Ropják",
        narodenie: { datum: "1858" },
        poznamka: "Bratranec Juraja Ropjáka (* 1874). V USA bol v roku 1901; znova pricestoval 8. 11. 1906 so synom Jánom (* 1889). " + PREVZATE,
        zdroje: [MLAKA]
      },
      {
        id: "ropjak-jan-1889", vetva: "knap", meno: "Ján", priezvisko: "Ropják",
        narodenie: { datum: "1889" },
        otec: "ropjak-andreas-1858",
        poznamka: "Do USA pricestoval s otcom 8. 11. 1906; neskôr si zmenil meno na John Ropyak. " + PREVZATE,
        zdroje: [MLAKA]
      }
    ]
  };
})();
