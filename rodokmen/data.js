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
  var MH = { popis: "MyHeritage — rodokmeň „Konarik Family Tree“ (Koňařík Web Site, autor Luděk Koňařík), export GEDCOM z 28. 10. 2026; bez odkazu na matričný zápis" };
  var MH_ID = { popis: "MyHeritage — rodokmeň „Konarik Family Tree“, export GEDCOM z 28. 10. 2026; údaj pridaný 30. 6. 2015 funkciou Instant Discovery™, t. j. prevzatý z iného stromu MyHeritage, bez odkazu na matričný zápis" };
  var MH_SM = { popis: "MyHeritage — rodokmeň „Konarik Family Tree“, export GEDCOM z 28. 10. 2026; údaj pridaný 21. 1. 2019 cez Smart Match zo stromu „Smiga - Muschalek Web Site“ (Amy Smiga Kreis)" };
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
        koren: "knapova-anna",
        poznamka: "Podľa rodokmen1.webnode.cz patria k tejto časti rodokmeňa mená Ropják, Knap a Grega z okolia Bardejova (Tarnov, Mokroluh). Web zverejnil len osoby z rodín Ropják a Grega; nikoho s priezviskom Knap neuvádza. Podľa rodokmeňa na MyHeritage je Agnesa Ropjaková (* 1908), dcéra Juraja Ropjáka a Zuzany Gregovej, stará mama Anny Koňaříkovej, rod. Knapovej.",
        stopy: [
          { popis: "rodokmen1.webnode.cz — „História Tarnova a mien: Ropjak, Knap, Grega po roku 1700“: priezvisko Knap sa podľa sčítania z roku 1715 nevyskytuje v Tarnove; článok ho uvádza napr. v Šandale, Osadě, Trstenej, Prietrži či Perneku. Najstaršia matrika v Mokroluhu je z roku 1788.", url: WEB + "news/historia-tarnova-a-mien-ropjak-knap-grega-po-roku-1700/" },
          { popis: "Údaje z MyHeritage (rodičia Juraja Ropjáka a Zuzany Gregovej, najstarší Martin Ropják * 1793) treba overiť v krstných zápisoch z Tarnova a Mokroluhu (Sáros, maď. Tarnó, Sárpatak) v zbierke FamilySearch „Slovakia, Church and Synagogue Books, 1592–1935“ (prístup vyžaduje bezplatné prihlásenie).", url: "https://www.familysearch.org/en/wiki/Slovakia_Church_and_Synagogue_Books_-_FamilySearch_Historical_Records" },
          { popis: "Neoverená indícia (index Ancestry): George (Juraj) Kovály, * 6. 5. 1850 Tarnov, † 25. 1. 1892 Tarnov, rodičia Andreas Kovály a Mária Ropjak. Či ide o príbuznú našich Ropjákovcov, nie je známe.", url: "https://www.ancestry.com/genealogy/records/results?firstName=george&lastName=kovary" },
          { popis: "Neoverená indícia (návrh WikiTree, nie overený profil): Anna Delej, rod. Ropjak, * 12. 6. 1869 Tarnov. Väzba na našu rodinu nie je známa.", url: "https://plus.wikitree.com/Profiles/Suggestions/CZE/777_1800-1899_1.htm" }
        ]
      }
    },
    osoby: [
      {
        id: "konarik-ludek-1958", vetva: "konarik", meno: "Luděk", priezvisko: "Koňařík",
        narodenie: { datum: "1958-07-27", miesto: "Vsetín" },
        sobas: { datum: "1984-02-25", miesto: "Tarnov", s: "knapova-anna" },
        otec: "konarik-josef-1930", matka: "ceskova-vera-1929",
        poznamka: "Východisková osoba vetvy Koňařík.",
        zdroje: [RODINA, MH]
      },
      {
        id: "konarik-josef-1930", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík",
        narodenie: { datum: "1930-09-20", miesto: "Halenkov" },
        sobas: { s: "ceskova-vera-1929" },
        umrtie: { datum: "2013-03-28", miesto: "Halenkov (tam aj pochovaný)" },
        otec: "konarik-frantisek-1905", matka: "hrnova-antonie-1906",
        zdroje: [RODINA, MH]
      },
      {
        id: "ceskova-vera-1929", vetva: "konarik", meno: "Věra", priezvisko: "Koňaříková", rodne: "Češková",
        narodenie: { datum: "1929-02-28", miesto: "Držková" },
        sobas: { s: "konarik-josef-1930" },
        umrtie: { datum: "2007-02-05", miesto: "Vsetín" },
        otec: "cesek-tomas-1874", matka: "uhrikova-anna",
        poznamka: "Rod Češek uvádza aj pôvodný web rodokmen1.webnode.cz spolu s Koňaříkmi v okolí Hošťálkovej a Halenkova.",
        zdroje: [RODINA, MH]
      },
      {
        id: "knapova-anna", vetva: "knap", meno: "Anna", priezvisko: "Koňaříková", rodne: "Knapová",
        narodenie: { datum: "1959" },
        sobas: { datum: "1984-02-25", miesto: "Tarnov", s: "konarik-ludek-1958" },
        otec: "knap-gustav-1934", matka: "juhas-duda-margita-1935",
        poznamka: "Východisková osoba vetvy Knap. Pri žijúcej osobe uvádzame len rok narodenia.",
        zdroje: [RODINA, MH]
      },
      // — Predkovia vetvy Koňařík podľa rodokmeňa na MyHeritage —
      {
        id: "konarik-frantisek-1905", vetva: "konarik", meno: "František", priezvisko: "Koňařík",
        narodenie: { datum: "1905-06-30" },
        sobas: { datum: "1927-05-16", s: "hrnova-antonie-1906" },
        umrtie: { datum: "1989" },
        otec: "konarik-josef-1883", matka: "kocurkova-frantiska-1884",
        zdroje: [MH]
      },
      {
        id: "hrnova-antonie-1906", vetva: "konarik", meno: "Antonie", priezvisko: "Koňaříková", rodne: "Hrňová",
        narodenie: { datum: "1906" },
        sobas: { datum: "1927-05-16", s: "konarik-frantisek-1905" },
        umrtie: { datum: "1964" },
        otec: "hrna-michal-1868", matka: "andryskova-veronika-1868",
        zdroje: [MH]
      },
      {
        id: "konarik-josef-1883", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík",
        narodenie: { datum: "1883-02-12" },
        sobas: { s: "kocurkova-frantiska-1884" },
        umrtie: { datum: "1923", miesto: "Halenkov" },
        otec: "konarik-pavel-1857", matka: "vaculova-anna-1854",
        zdroje: [MH]
      },
      {
        id: "kocurkova-frantiska-1884", vetva: "konarik", meno: "Františka", priezvisko: "Koňaříková", rodne: "Kocurková",
        narodenie: { datum: "1884-10-22" },
        sobas: { s: "konarik-josef-1883" },
        poznamka: "Rodičia sú v strome len ako „Kocurek“ a „Kocurková“, bez krstných mien.",
        zdroje: [MH]
      },
      {
        id: "konarik-pavel-1857", vetva: "konarik", meno: "Pavel", priezvisko: "Koňařík",
        narodenie: { datum: "1857" },
        sobas: { s: "vaculova-anna-1854" },
        otec: "konarik-josef-1819", matka: "marianna-1821",
        zdroje: [MH]
      },
      {
        id: "vaculova-anna-1854", vetva: "konarik", meno: "Anna", priezvisko: "Koňaříková", rodne: "Vaculová",
        narodenie: { datum: "1854" },
        sobas: { s: "konarik-pavel-1857" },
        zdroje: [MH]
      },
      {
        id: "konarik-josef-1819", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík",
        narodenie: { datum: "1819-08-24" },
        sobas: { s: "marianna-1821" },
        otec: "konarik-jan-1791",
        zdroje: [MH]
      },
      {
        id: "marianna-1821", vetva: "konarik", meno: "Marianna", priezvisko: "Koňaříková",
        narodenie: { datum: "1821" },
        sobas: { s: "konarik-josef-1819" },
        poznamka: "Rodné priezvisko v strome chýba.",
        zdroje: [MH]
      },
      {
        id: "konarik-jan-1791", vetva: "konarik", meno: "Jan", priezvisko: "Koňařík",
        narodenie: { datum: "1791-05-04" },
        poznamka: "Najstarší známy Koňařík v priamej línii. Manželka v strome chýba.",
        zdroje: [MH]
      },
      {
        id: "hrna-michal-1868", vetva: "konarik", meno: "Michal", priezvisko: "Hrňa",
        narodenie: { datum: "1868-09-16" },
        sobas: { datum: "1895-08-12", s: "andryskova-veronika-1868" },
        otec: "hrna-michal", matka: "korenkova-rosina",
        zdroje: [MH]
      },
      {
        id: "andryskova-veronika-1868", vetva: "konarik", meno: "Veronika", priezvisko: "Hrňová", rodne: "Andrýsková",
        narodenie: { datum: "1868-07-12" },
        sobas: { datum: "1895-08-12", s: "hrna-michal-1868" },
        umrtie: { miesto: "pochovaná v Halenkove" },
        otec: "andrysek-josef", matka: "cernotova-marie",
        zdroje: [MH_SM]
      },
      {
        id: "hrna-michal", vetva: "konarik", meno: "Michal", priezvisko: "Hrňa",
        sobas: { s: "korenkova-rosina" },
        zdroje: [MH]
      },
      {
        id: "korenkova-rosina", vetva: "konarik", meno: "Rosina", priezvisko: "Hrňová", rodne: "Kořenková",
        sobas: { s: "hrna-michal" },
        zdroje: [MH]
      },
      {
        id: "andrysek-josef", vetva: "konarik", meno: "Josef", priezvisko: "Andrýsek",
        sobas: { s: "cernotova-marie" },
        zdroje: [MH]
      },
      {
        id: "cernotova-marie", vetva: "konarik", meno: "Marie", priezvisko: "Andrýsková", rodne: "Černotová",
        sobas: { s: "andrysek-josef" },
        otec: "cernota-jan",
        zdroje: [MH]
      },
      {
        id: "cernota-jan", vetva: "konarik", meno: "Jan", priezvisko: "Černota",
        zdroje: [MH]
      },
      {
        id: "cesek-tomas-1874", vetva: "konarik", meno: "Tomáš", priezvisko: "Češek",
        narodenie: { datum: "1874", miesto: "Držková č. 47, Hošťálková" },
        sobas: { s: "uhrikova-anna" },
        umrtie: { datum: "1939" },
        poznamka: "Syn Ladislav (* 24. 6. 1925, Držková č. 47) podľa stromu zahynul 10. 4. 1945 v koncentračnom tábore Mauthausen.",
        zdroje: [MH_ID]
      },
      {
        id: "uhrikova-anna", vetva: "konarik", meno: "Anna", priezvisko: "Češková", rodne: "Uhříková",
        sobas: { s: "cesek-tomas-1874" },
        zdroje: [MH_ID]
      },
      // — Predkovia vetvy Knap podľa rodokmeňa na MyHeritage —
      {
        id: "knap-gustav-1934", vetva: "knap", meno: "Gustav", priezvisko: "Knap",
        narodenie: { datum: "1934-06-15", miesto: "Tarnov" },
        sobas: { s: "juhas-duda-margita-1935" },
        umrtie: { datum: "1971-05-20", miesto: "Tarnov (tam aj pochovaný)" },
        otec: "knap-jozef-1908", matka: "ropjakova-agnesa-1908",
        zdroje: [MH_ID]
      },
      {
        id: "juhas-duda-margita-1935", vetva: "knap", meno: "Margita", priezvisko: "Knapová", rodne: "Juhás-Duda",
        narodenie: { datum: "1935-05-14" },
        sobas: { s: "knap-gustav-1934" },
        umrtie: { datum: "1980-08-02", miesto: "Tarnov (tam aj pochovaná)" },
        otec: "juhas-duda-jan", matka: "hiscar-agnesa",
        zdroje: [MH_ID]
      },
      {
        id: "knap-jozef-1908", vetva: "knap", meno: "Jozef", priezvisko: "Knap",
        narodenie: { datum: "1908-02-18" },
        sobas: { s: "ropjakova-agnesa-1908" },
        umrtie: { datum: "1978-10-19" },
        otec: "knap-peter-1870", matka: "chovancova-maria-1874",
        zdroje: [MH_ID]
      },
      {
        id: "ropjakova-agnesa-1908", vetva: "knap", meno: "Agnesa", priezvisko: "Knapová", rodne: "Ropjaková",
        narodenie: { datum: "1908-02-08" },
        sobas: { s: "knap-jozef-1908" },
        umrtie: { datum: "1994-08-10", miesto: "Tarnov" },
        otec: "ropjak-juraj-1874", matka: "gregova-zuzana-1879",
        poznamka: "Spája vetvu Knap s rodinami Ropják a Grega z pôvodného webu.",
        zdroje: [MH_ID]
      },
      {
        id: "knap-peter-1870", vetva: "knap", meno: "Peter", priezvisko: "Knap",
        narodenie: { datum: "1870" },
        sobas: { s: "chovancova-maria-1874" },
        poznamka: "Starší syn Jan Knap, * 27. 11. 1895 Tarnov, † 20. 2. 1971.",
        zdroje: [MH_ID]
      },
      {
        id: "chovancova-maria-1874", vetva: "knap", meno: "Mária", priezvisko: "Knapová", rodne: "Chovancová",
        narodenie: { datum: "1874" },
        sobas: { s: "knap-peter-1870" },
        zdroje: [MH_ID]
      },
      {
        id: "juhas-duda-jan", vetva: "knap", meno: "Ján", priezvisko: "Juhás-Duda",
        sobas: { s: "hiscar-agnesa" },
        zdroje: [MH_ID]
      },
      {
        id: "hiscar-agnesa", vetva: "knap", meno: "Agnesa", priezvisko: "Juhás-Duda", rodne: "Hiščar",
        sobas: { s: "juhas-duda-jan" },
        zdroje: [MH_ID]
      },
      {
        id: "ropjak-georgius-1837", vetva: "knap", meno: "Georgius (Juraj)", priezvisko: "Ropják",
        narodenie: { datum: "1837-03-11", miesto: "Tarnov č. 47" },
        sobas: { s: "holda-zuzana-1837" },
        otec: "ropjak-martin-1793", matka: "chovancova-anna",
        poznamka: "Deti podľa stromu: Georg (Gregor) * 21. 3. 1869 † 11. 4. 1870, Mária * 28. 3. 1871, Juraj * 22. 2. 1874, Anna * 3. 5. 1878, Zuzana * 8. 5. 1881, Katarína * 25. 2. 1884.",
        zdroje: [MH_ID]
      },
      {
        id: "holda-zuzana-1837", vetva: "knap", meno: "Zuzana", priezvisko: "Ropjaková", rodne: "Holda",
        narodenie: { datum: "1837-11-08", miesto: "Mokroluh (maď. Sárpatak)" },
        sobas: { s: "ropjak-georgius-1837" },
        otec: "holda-andras-1807",
        zdroje: [MH_ID]
      },
      {
        id: "ropjak-martin-1793", vetva: "knap", meno: "Martin", priezvisko: "Ropják",
        narodenie: { datum: "1793" },
        sobas: { s: "chovancova-anna" },
        poznamka: "Najstarší známy Ropják v priamej línii.",
        zdroje: [MH_ID]
      },
      {
        id: "chovancova-anna", vetva: "knap", meno: "Anna", priezvisko: "Ropjaková", rodne: "Chovancová",
        sobas: { s: "ropjak-martin-1793" },
        zdroje: [MH_ID]
      },
      {
        id: "holda-andras-1807", vetva: "knap", meno: "Andras (Ondrej)", priezvisko: "Holda",
        narodenie: { datum: "1807-08-04" },
        zdroje: [MH_ID]
      },
      {
        id: "grega-martin-1845", vetva: "knap", meno: "Martin", priezvisko: "Grega",
        narodenie: { datum: "1845-11-14" },
        sobas: { s: "gregova-anna-matka" },
        zdroje: [MH_ID]
      },
      {
        id: "gregova-anna-matka", vetva: "knap", meno: "Anna", priezvisko: "Gregová",
        sobas: { s: "grega-martin-1845" },
        poznamka: "Matka Zuzany Gregovej (* 1879); rodné priezvisko v strome chýba.",
        zdroje: [MH_ID]
      },
      // — Rodiny Ropják a Grega podľa pôvodného webu rodokmen1.webnode.cz —
      {
        id: "ropjak-juraj-1874", vetva: "knap", meno: "Juraj", priezvisko: "Ropják",
        narodenie: { datum: "1874-02-22", miesto: "Tarnov č. 47" },
        sobas: { datum: "1898-06-13", miesto: "Tarnov", s: "gregova-zuzana-1879" },
        otec: "ropjak-georgius-1837", matka: "holda-zuzana-1837",
        povolanie: "",
        poznamka: "V maďarských záznamoch Gyorgy. V USA bol dvakrát a neusadil sa tam: 16. 3. 1899 pricestoval z Brém loďou Bremen (cieľ Pittsburgh) a 18. 9. 1910 z Hamburgu loďou SS Pennsylvania (výška 1,65 m). Súrodenci: Georg (zrejme zomrel mladý), Mária (vydatá Gaľanová), Anna (vydatá Gregová) a Zuzana. Bratranec: Andreas Ropják (* 1858). V MyHeritage je ako dátum druhej plavby uvedené 18. 2. 1910 (Hamburg), web uvádza príchod 18. 9. 1910. Údaje prevzaté z rodokmen1.webnode.cz a MyHeritage, zatiaľ neoverené v matrike.",
        zdroje: [AMERIKA, MLAKA, MH_ID]
      },
      {
        id: "gregova-zuzana-1879", vetva: "knap", meno: "Zuzana", priezvisko: "Gregová",
        narodenie: { datum: "1879-04-13", miesto: "Mokroluh (maď. Sárpatak), okr. Bardejov" },
        sobas: { datum: "1898-06-13", miesto: "Tarnov", s: "ropjak-juraj-1874" },
        otec: "grega-martin-1845", matka: "gregova-anna-matka",
        poznamka: "Bratia: Ján Grega a Adam Grega (* 1893), obaja v Mansfielde v Ohiu. Údaje prevzaté z rodokmen1.webnode.cz a MyHeritage, zatiaľ neoverené v matrike.",
        zdroje: [AMERIKA, MH_ID]
      },
      {
        id: "ropjak-jan-1899", vetva: "knap", meno: "Ján", priezvisko: "Ropják",
        narodenie: { datum: "1899-06-16", miesto: "Tarnov č. 47, okr. Bardejov" },
        sobas: { datum: "1926", s: "safcakova-anna-1906" },
        umrtie: { datum: "1940-08-26", miesto: "USA (pochovaný na Calvary Cemetery v Clevelande 28. 8. 1940)" },
        otec: "ropjak-juraj-1874", matka: "gregova-zuzana-1879",
        poznamka: "7. 9. 1923 pricestoval z Cherbourgu loďou Aquitania na Ellis Island (24-ročný) k ujovi Adamovi Gregovi, 151 Daisy Street, Mansfield, Ohio. Census 1930: Dowd Street, Lakewood, Ohio, bez práce, nehovoril po anglicky. Zomrel vo veku 41 rokov, 2 mesiacov a 9 dní; príčina smrti spinálna skleróza (prvé príznaky v roku 1931). Rozpor: MyHeritage uvádza úmrtie 24. 8. 1940 v Cuyahoga County, Ohio. " + PREVZATE,
        zdroje: [AMERIKA, MH_ID]
      },
      {
        id: "ropjak-juraj-1902", vetva: "knap", meno: "Juraj", priezvisko: "Ropják",
        narodenie: { datum: "1902-12-18", miesto: "Tarnov" },
        sobas: { datum: "asi 1925", s: "fornadelova-mary-1903" },
        umrtie: { datum: "1944-04-17", miesto: "Bath, okres Allen, Ohio" },
        povolanie: "robotník, neskôr mechanik (Bolt Works)",
        otec: "ropjak-juraj-1874", matka: "gregova-zuzana-1879",
        poznamka: "V USA George Ropjak. 17. 9. 1921 pricestoval z Le Havre loďou SS France do New Yorku (19-ročný, výška 1,65 m) k ujovi Johnovi Gregovi, Lily Street, Mansfield, Ohio. Census 1930: 2068 Quail Avenue, Lakewood, Ohio. Zomrel na obojstranný lobárny zápal pľúc (tuberkulóza); pohreb 21. 4. 1944 z kostola sv. Cyrila a Metoda v Lakewoode, pochovaný na Calvary Cemetery v Clevelande. Rozpor v prameňoch: web uvádza úmrtie 17. 4. 1944, MyHeritage 20. 4. 1941. Vek pri úmrtí, ktorý cituje web (38 rokov, 3 mesiace a 29 dní), zodpovedá skôr roku 1941 — treba overiť v úmrtnom zázname. " + PREVZATE,
        zdroje: [AMERIKA, MH_ID]
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
        narodenie: { datum: "1871-03-28" },
        sobas: { s: "galan-peter-1858" },
        otec: "ropjak-georgius-1837", matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). Podľa zoznamu pasažierov bola v USA už v rokoch 1889–1894. V roku 1901 pricestovala z Antverp loďou SS Friesland s deťmi Máriou (* 1892), Jánom (* 1895) a Annou (* 1899) za manželom do Pittsburghu. V USA zostala natrvalo. Dátum narodenia a rodičia podľa MyHeritage; že ide o tú istú Máriu, nie je v strome výslovne uvedené. " + PREVZATE,
        zdroje: [MLAKA, MH_ID]
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
        narodenie: { datum: "1878-05-03", miesto: "Tarnov č. 47" },
        sobas: { s: "grega-jan" },
        umrtie: { datum: "1949-06-24" },
        otec: "ropjak-georgius-1837", matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). V roku 1920 sa s deťmi Jánom (* 1902), Annou (* 1907), Zuzanou (* 1909) a Jurajom (* 1911) plavila loďou SS France za manželom do Mansfieldu, Ohio (100 Daisy Street). V USA zostala natrvalo. Dátumy a rodičia podľa MyHeritage. " + PREVZATE,
        zdroje: [MLAKA, MH_ID]
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
        narodenie: { datum: "1881-05-08", miesto: "Tarnov č. 47" },
        umrtie: { datum: "1972-01" },
        otec: "ropjak-georgius-1837", matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). Emigrovala 8. 12. 1899 cez Brémy za bratom (ktorým, nie je známe); zrejme sa usadila v USA. Dátumy a rodičia podľa MyHeritage. " + PREVZATE,
        zdroje: [MLAKA, MH_ID]
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
