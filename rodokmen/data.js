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
 *     pohlavie: "m",                    // "m" | "z"
 *     zijuci: true,                     // žijúca osoba — uvádza sa len meno a rok narodenia
 *     narodenie: { datum: "1850-03-12", miesto: "…" },
 *     krst:      { datum: "", miesto: "", fara: "" },
 *     sobas:     { datum: "", miesto: "", s: "id-manzela" },
 *     umrtie:    { datum: "", miesto: "" },
 *     povolanie: "",
 *     otec: "id-otca",                  // odkaz na inú osobu (alebo "")
 *     matka: "id-matky",
 *     poznamka: "",
 *     zdroje: [ Z.mh_b, { popis: "SOA …, fara …, N 1840–1860, fol. 12", url: "https://…" } ]
 *   }
 *
 * `koren` určuje osobu, od ktorej sa pre danú vetvu kreslí vývod predkov.
 * `stopy` sú neoverené indície na ďalší výskum — nie sú to osoby rodokmeňa,
 * kým sa nepotvrdia v matrike.
 * Dátumy možno zapísať aj neúplne ("1850", "asi 1720", "1850-03").
 * Spoločné pramene sú v objekte `Z` nižšie.
 */
(function () {
  // Pramene — na každý sa odkazuje z poľa `zdroje` pri osobe.
  var Z = {
    rodina: { popis: "Údaj od rodiny (zadané 28. 10. 2026)" },
    web_amerika: { popis: "rodokmen1.webnode.cz — „Juraj a Ján Ropják v Amerike“ (2. 11. 2011); článok cituje zoznamy pasažierov Ellis Island, census USA 1930 (ancestry.com) a úmrtné záznamy (familysearch.org)", url: "https://rodokmen1.webnode.cz/news/juraj-a-jan-ropjak-v-amerike/" },
    web_mlaka: { popis: "rodokmen1.webnode.cz — „Ropjákovci a Gregovci za veľkou mlákou“ (2. 11. 2011); článok cituje zoznamy pasažierov (ellisisland.org)", url: "https://rodokmen1.webnode.cz/news/ropjakovci-a-gregovci-za-velkou-mlakou/" },
    mh_a: { popis: "MyHeritage — rodokmeň „Konarik Family Tree“ (Konarik Web Site, autor Luděk Koňařík), export GEDCOM z 28. 10. 2026; bez odkazu na matričný zápis" },
    mh_a_id: { popis: "MyHeritage — rodokmeň „Konarik Family Tree“, export GEDCOM z 28. 10. 2026; údaj pridaný 30. 6. 2015 funkciou Instant Discovery™ z rodokmeňa „Koňařík Family Tree“ (Koňařík Web Site, č. 70611712-1), bez odkazu na matričný zápis" },
    mh_a_sm: { popis: "MyHeritage — rodokmeň „Konarik Family Tree“, export GEDCOM z 28. 10. 2026; údaj pridaný 21. 1. 2019 cez Smart Match zo stromu „Smiga - Muschalek Web Site“ (Amy Smiga Kreis)" },
    mh_b: { popis: "MyHeritage — rodokmeň „Koňařík Family Tree“ (Koňařík Web Site, č. 70611712, autor Luděk Koňařík), export GEDCOM z 28. 10. 2026; bez odkazu na matričný zápis" }
  };

  window.RODOKMEN = {
    vetvy: {
      "konarik": {
        "nazov": "Koňařík",
        "koren": "konarik-ludek-1958",
        "poznamka": "Pôvodný web rodokmen1.webnode.cz uvádza len to, že mená Koňařík a Češek sa vyskytujú v okolí Hošťálkovej a Halenkova na Vsetínsku. Žiadnu konkrétnu osobu z tejto vetvy na webe nezverejnil.",
        "stopy": [
          {
            "popis": "rodokmen1.webnode.cz, úvodná stránka — vetvy Koňařík a Češek: okolie Hošťálkovej a Halenkova (okr. Vsetín)",
            "url": "https://rodokmen1.webnode.cz/"
          },
          {
            "popis": "Rodinná kronika „Rod Chrástecký“ (lumirkral.estranky.cz): pri sčítaní ľudu na Halenkove v roku 1857 bolo priezvisko Koňařík druhé najčastejšie (14 domov). Konkrétna väzba na našu rodinu nie je známa.",
            "url": "https://lumirkral.estranky.cz/clanky/rod-chrastecky.html"
          },
          {
            "popis": "Matriky farností Hošťálková a Halenkov uchováva Zemský archiv v Opavě (digitalizované matriky). Ďalej treba začať od najmladšieho známeho Koňaříka v rodine.",
            "url": "https://matriky.archives.cz/"
          }
        ]
      },
      "knap": {
        "nazov": "Knap",
        "koren": "knapova-anna",
        "poznamka": "Podľa rodokmen1.webnode.cz patria k tejto časti rodokmeňa mená Ropják, Knap a Grega z okolia Bardejova (Tarnov, Mokroluh). Web zverejnil len osoby z rodín Ropják a Grega; nikoho s priezviskom Knap neuvádza. Podľa rodokmeňa na MyHeritage je Agnesa Ropjaková (* 1908), dcéra Juraja Ropjáka a Zuzany Gregovej, stará mama Anny Koňaříkovej, rod. Knapovej.",
        "stopy": [
          {
            "popis": "rodokmen1.webnode.cz — „História Tarnova a mien: Ropjak, Knap, Grega po roku 1700“: priezvisko Knap sa podľa sčítania z roku 1715 nevyskytuje v Tarnove; článok ho uvádza napr. v Šandale, Osadě, Trstenej, Prietrži či Perneku. Najstaršia matrika v Mokroluhu je z roku 1788.",
            "url": "https://rodokmen1.webnode.cz/news/historia-tarnova-a-mien-ropjak-knap-grega-po-roku-1700/"
          },
          {
            "popis": "Údaje z MyHeritage (rodičia Juraja Ropjáka a Zuzany Gregovej, najstarší Mathias Ropják * 1761) treba overiť v krstných zápisoch z Tarnova a Mokroluhu (Sáros, maď. Tarnó, Sárpatak) v zbierke FamilySearch „Slovakia, Church and Synagogue Books, 1592–1935“ (prístup vyžaduje bezplatné prihlásenie).",
            "url": "https://www.familysearch.org/en/wiki/Slovakia_Church_and_Synagogue_Books_-_FamilySearch_Historical_Records"
          },
          {
            "popis": "Neoverená indícia (index Ancestry): George (Juraj) Kovály, * 6. 5. 1850 Tarnov, † 25. 1. 1892 Tarnov, rodičia Andreas Kovály a Mária Ropjak. Či ide o príbuznú našich Ropjákovcov, nie je známe.",
            "url": "https://www.ancestry.com/genealogy/records/results?firstName=george&lastName=kovary"
          },
          {
            "popis": "Neoverená indícia (návrh WikiTree, nie overený profil): Anna Delej, rod. Ropjak, * 12. 6. 1869 Tarnov. Väzba na našu rodinu nie je známa.",
            "url": "https://plus.wikitree.com/Profiles/Suggestions/CZE/777_1800-1899_1.htm"
          }
        ]
      }
    },
    osoby: [
      // — Vetva Koňařík —
      {
        id: "konarik-ludek-1958", vetva: "konarik", meno: "Luděk", priezvisko: "Koňařík", pohlavie: "m",
        narodenie: { datum: "1958-07-27", miesto: "Vsetín" },
        sobas: { datum: "1984-02-25", miesto: "Tarnov", s: "knapova-anna" },
        otec: "konarik-josef-1930",
        matka: "ceskova-vera-1929",
        poznamka: "Východisková osoba vetvy Koňařík.",
        zdroje: [Z.rodina, Z.mh_a, Z.mh_b]
      },
      {
        id: "konarik-josef-1930", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík", pohlavie: "m",
        narodenie: { datum: "1930-09-20", miesto: "Halenkov" },
        sobas: { s: "ceskova-vera-1929" },
        umrtie: { datum: "2013-03-28", miesto: "Halenkov (tam aj pochovaný)" },
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.rodina, Z.mh_a, Z.mh_b]
      },
      {
        id: "ceskova-vera-1929", vetva: "konarik", meno: "Věra", priezvisko: "Koňaříková", rodne: "Češková", pohlavie: "z",
        narodenie: { datum: "1929-02-28", miesto: "Držková" },
        sobas: { s: "konarik-josef-1930" },
        umrtie: { datum: "2007-02-05", miesto: "Vsetín" },
        otec: "cesek-tomas-1874",
        matka: "uhrikova-anna",
        poznamka: "Rod Češek uvádza aj pôvodný web rodokmen1.webnode.cz spolu s Koňaříkmi v okolí Hošťálkovej a Halenkova.",
        zdroje: [Z.rodina, Z.mh_a, Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000027_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/v%C4%9Bra-ko%C5%88a%C5%99ikova-rozena-%C4%8De%C5%A1kova" }]
      },
      {
        id: "konarik-frantisek-1905", vetva: "konarik", meno: "František", priezvisko: "Koňařík", pohlavie: "m",
        narodenie: { datum: "1905-06-30", miesto: "Halenkov" },
        sobas: { datum: "1927-05-16", s: "hrnova-antonie-1906" },
        umrtie: { datum: "1989", miesto: "Jesenik nad Odrou" },
        otec: "konarik-josef-1883",
        matka: "kocurkova-frantiska-1884",
        zdroje: [Z.mh_a, Z.mh_b]
      },
      {
        id: "hrnova-antonie-1906", vetva: "konarik", meno: "Antonie", priezvisko: "Koňaříková", rodne: "Hrňová", pohlavie: "z",
        narodenie: { datum: "1906" },
        sobas: { datum: "1927-05-16", s: "konarik-frantisek-1905" },
        umrtie: { datum: "1964" },
        otec: "hrna-michal-1868",
        matka: "andryskova-veronika-1868",
        zdroje: [Z.mh_a, Z.mh_b]
      },
      {
        id: "konarik-josef-1883", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík", pohlavie: "m",
        narodenie: { datum: "1883-02-12" },
        sobas: { s: "kocurkova-frantiska-1884" },
        umrtie: { datum: "1923", miesto: "Halenkov" },
        otec: "konarik-pavel-1857",
        matka: "vaculova-anna-1854",
        poznamka: "Rozpor: rodokmeň „Koňařík Family Tree“ uvádza úmrtie 1920.",
        zdroje: [Z.mh_a, Z.mh_b]
      },
      {
        id: "kocurkova-frantiska-1884", vetva: "konarik", meno: "Františka", priezvisko: "Koňaříková", rodne: "Kocurková", pohlavie: "z",
        narodenie: { datum: "1884-10-22" },
        sobas: { s: "konarik-josef-1883" },
        poznamka: "Rodičia sú v strome len ako „Kocurek“ a „Kocurková“, bez krstných mien.",
        zdroje: [Z.mh_a, Z.mh_b]
      },
      {
        id: "konarik-pavel-1857", vetva: "konarik", meno: "Pavel", priezvisko: "Koňařík",
        narodenie: { datum: "1857" },
        sobas: { s: "vaculova-anna-1854" },
        otec: "konarik-josef-1819",
        matka: "marianna-1821",
        zdroje: [Z.mh_a]
      },
      {
        id: "vaculova-anna-1854", vetva: "konarik", meno: "Anna", priezvisko: "Koňaříková", rodne: "Vaculová",
        narodenie: { datum: "1854" },
        sobas: { s: "konarik-pavel-1857" },
        zdroje: [Z.mh_a]
      },
      {
        id: "konarik-josef-1819", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík",
        narodenie: { datum: "1819-08-24" },
        sobas: { s: "marianna-1821" },
        otec: "konarik-jan-1791",
        zdroje: [Z.mh_a]
      },
      {
        id: "marianna-1821", vetva: "konarik", meno: "Marianna", priezvisko: "Koňaříková",
        narodenie: { datum: "1821" },
        sobas: { s: "konarik-josef-1819" },
        poznamka: "Rodné priezvisko v strome chýba.",
        zdroje: [Z.mh_a]
      },
      {
        id: "konarik-jan-1791", vetva: "konarik", meno: "Jan", priezvisko: "Koňařík",
        narodenie: { datum: "1791-05-04" },
        poznamka: "Najstarší známy Koňařík v priamej línii. Manželka v strome chýba.",
        zdroje: [Z.mh_a]
      },
      {
        id: "hrna-michal-1868", vetva: "konarik", meno: "Michal", priezvisko: "Hrňa",
        narodenie: { datum: "1868-09-16" },
        sobas: { datum: "1895-08-12", s: "andryskova-veronika-1868" },
        otec: "hrna-michal",
        matka: "korenkova-rosina",
        zdroje: [Z.mh_a]
      },
      {
        id: "andryskova-veronika-1868", vetva: "konarik", meno: "Veronika", priezvisko: "Hrňová", rodne: "Andrýsková",
        narodenie: { datum: "1868-07-12" },
        sobas: { datum: "1895-08-12", s: "hrna-michal-1868" },
        umrtie: { miesto: "pochovaná v Halenkove" },
        otec: "andrysek-josef",
        matka: "cernotova-marie",
        zdroje: [Z.mh_a_sm]
      },
      {
        id: "hrna-michal", vetva: "konarik", meno: "Michal", priezvisko: "Hrňa",
        sobas: { s: "korenkova-rosina" },
        zdroje: [Z.mh_a]
      },
      {
        id: "korenkova-rosina", vetva: "konarik", meno: "Rosina", priezvisko: "Hrňová", rodne: "Kořenková",
        sobas: { s: "hrna-michal" },
        zdroje: [Z.mh_a]
      },
      {
        id: "andrysek-josef", vetva: "konarik", meno: "Josef", priezvisko: "Andrýsek",
        sobas: { s: "cernotova-marie" },
        zdroje: [Z.mh_a]
      },
      {
        id: "cernotova-marie", vetva: "konarik", meno: "Marie", priezvisko: "Andrýsková", rodne: "Černotová",
        sobas: { s: "andrysek-josef" },
        otec: "cernota-jan",
        zdroje: [Z.mh_a]
      },
      {
        id: "cernota-jan", vetva: "konarik", meno: "Jan", priezvisko: "Černota",
        zdroje: [Z.mh_a]
      },
      {
        id: "cesek-tomas-1874", vetva: "konarik", meno: "Tomáš", priezvisko: "Češek", pohlavie: "m",
        narodenie: { datum: "1874-04-01", miesto: "Držková č. 47, Hošťálková" },
        sobas: { s: "uhrikova-anna" },
        umrtie: { datum: "1939" },
        poznamka: "Syn Ladislav (* 24. 6. 1925, Držková č. 47) podľa stromu zahynul 10. 4. 1945 v koncentračnom tábore Mauthausen.",
        zdroje: [Z.mh_a_id, Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000019_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/toma%C5%A1-%C4%8De%C5%A1ek" }]
      },
      {
        id: "uhrikova-anna", vetva: "konarik", meno: "Anna", priezvisko: "Češková", rodne: "Uhříková", pohlavie: "z",
        sobas: { s: "cesek-tomas-1874" },
        zdroje: [Z.mh_a_id, Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000020_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/anna-%C4%8De%C5%A1kova-rozena-uh%C5%99ikova" }]
      },
      {
        id: "cesek-jiri-1915", vetva: "konarik", meno: "Jiří", priezvisko: "Češek", pohlavie: "m",
        narodenie: { datum: "1915-11-25" },
        umrtie: { datum: "1992-02-25" },
        otec: "cesek-tomas-1874",
        matka: "uhrikova-anna",
        zdroje: [Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000016_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/ji%C5%99i-%C4%8De%C5%A1ek" }]
      },
      {
        id: "cesek-ladislav-1925", vetva: "konarik", meno: "Ladislav", priezvisko: "Češek", pohlavie: "m",
        narodenie: { datum: "1925-06-24", miesto: "Držková 47" },
        umrtie: { datum: "1945-04-10", miesto: "Mauthausen, Koncentrační tábor" },
        otec: "cesek-tomas-1874",
        matka: "uhrikova-anna",
        poznamka: "K úmrtiu: Umučený. Zatknutý 9. 3. 1945 vo Vsetíne.",
        zdroje: [Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000021_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/ladislav-%C4%8De%C5%A1ek" }]
      },
      {
        id: "lustig-jiri-1927", vetva: "konarik", meno: "Jiří", priezvisko: "Lustig", pohlavie: "m",
        narodenie: { datum: "1927-10-06" },
        sobas: { s: "piterakova-vlasta-1930" },
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-matulova-bozena-1928", vetva: "konarik", meno: "Božena", priezvisko: "Koňařík Matulová", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1928" },
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "piterakova-vlasta-1930", vetva: "konarik", meno: "Vlasta", priezvisko: "Piteráková", pohlavie: "z",
        narodenie: { datum: "1930-05-30" },
        sobas: { s: "lustig-jiri-1927" },
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-alois-1939", vetva: "konarik", meno: "Alois", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1939" },
        sobas: { s: "tomcakova-danuse-1948" },
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-jarmila-1948", vetva: "konarik", meno: "Jarmila", priezvisko: "Koňaříková", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1948" },
        sobas: { s: "konecny-ladislav-1948" },
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecny-ladislav-1948", vetva: "konarik", meno: "Ladislav", priezvisko: "Konečný", pohlavie: "m",
        narodenie: { datum: "1948-05-25" },
        sobas: { datum: "1969-02-22", s: "konarikova-jarmila-1948" },
        umrtie: { datum: "2018-07-20" },
        poznamka: "Pochovaný/á: Nový Jičín.",
        zdroje: [Z.mh_b]
      },
      {
        id: "tomcakova-danuse-1948", vetva: "konarik", meno: "Danuše", priezvisko: "Tomčáková", pohlavie: "z",
        narodenie: { datum: "1948-12-20" },
        sobas: { s: "konarik-alois-1939" },
        umrtie: { datum: "2013-03-02" },
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-josef-1955", vetva: "konarik", meno: "Josef", priezvisko: "Koňařík", pohlavie: "m",
        narodenie: { datum: "1955-01-07", miesto: "vsetin" },
        sobas: { s: "konarikova-dagmar" },
        umrtie: { datum: "2017-11-18", miesto: "Halenkov" },
        otec: "konarik-josef-1930",
        matka: "ceskova-vera-1929",
        poznamka: "Pochovaný/á: Halenkov.",
        zdroje: [Z.mh_b]
      },
      {
        id: "lustig-jiri-1958", vetva: "konarik", meno: "Jiří", priezvisko: "Lustig", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1958" },
        otec: "lustig-jiri-1927",
        matka: "piterakova-vlasta-1930",
        zdroje: [Z.mh_b]
      },
      {
        id: "lustig-ivo-1961", vetva: "konarik", meno: "Ivo", priezvisko: "Lustig", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1961" },
        sobas: { s: "lustigova-konarikova-vera-1964" },
        otec: "lustig-jiri-1927",
        matka: "piterakova-vlasta-1930",
        zdroje: [Z.mh_b]
      },
      {
        id: "lustigova-konarikova-vera-1964", vetva: "konarik", meno: "Věra", priezvisko: "Lustigová-Koňaříková", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1964" },
        sobas: { s: "lustig-ivo-1961" },
        otec: "konarik-josef-1930",
        matka: "ceskova-vera-1929",
        zdroje: [Z.mh_b]
      },
      {
        id: "divoky-pavel-1966", vetva: "konarik", meno: "Pavel", priezvisko: "Divoký", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1966" },
        sobas: { s: "konecna-jana-1969" },
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-nadezda-1968", vetva: "konarik", meno: "Naděžda", priezvisko: "Koňařík", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1968" },
        sobas: { s: "konarik" },
        otec: "konarik-alois-1939",
        matka: "tomcakova-danuse-1948",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecna-jana-1969", vetva: "konarik", meno: "Jana", priezvisko: "Konečná", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1969" },
        sobas: { s: "divoky-pavel-1966" },
        otec: "konecny-ladislav-1948",
        matka: "konarikova-jarmila-1948",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-jiri-1970", vetva: "konarik", meno: "Jiří", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1970" },
        otec: "konarik-alois-1939",
        matka: "tomcakova-danuse-1948",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecny-ladislav-1973", vetva: "konarik", meno: "Ladislav", priezvisko: "Konečný", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1973" },
        sobas: { s: "betesova-olga-1977" },
        otec: "konecny-ladislav-1948",
        matka: "konarikova-jarmila-1948",
        zdroje: [Z.mh_b]
      },
      {
        id: "betesova-olga-1977", vetva: "konarik", meno: "Olga", priezvisko: "Betešova", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1977" },
        sobas: { s: "konecny-ladislav-1973" },
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-ludek-1984", vetva: "konarik", meno: "Luděk", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1984" },
        otec: "konarik-ludek-1958",
        matka: "knapova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-dagmar-1985", vetva: "konarik", meno: "Dagmar", priezvisko: "Koňaříková", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1985" },
        otec: "konarik-josef-1955",
        matka: "konarikova-dagmar",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-marek-1986", vetva: "konarik", meno: "Marek", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1986" },
        otec: "konarik-ludek-1958",
        matka: "knapova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-michaela-1986", vetva: "konarik", meno: "Michaela", priezvisko: "Koňaříková", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1986" },
        otec: "konarik-ludek-1958",
        matka: "knapova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-lenka-1988", vetva: "konarik", meno: "Lenka", priezvisko: "Koňaříková", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1988" },
        otec: "konarik-josef-1955",
        matka: "konarikova-dagmar",
        zdroje: [Z.mh_b]
      },
      {
        id: "divoka-jana-1988", vetva: "konarik", meno: "Jana", priezvisko: "Divoká", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1988" },
        otec: "divoky-pavel-1966",
        matka: "konecna-jana-1969",
        zdroje: [Z.mh_b]
      },
      {
        id: "gabrhelik-tomas-1988", vetva: "konarik", meno: "Tomáš", priezvisko: "Gabrhelík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1988" },
        otec: "konarik",
        matka: "konarik-nadezda-1968",
        zdroje: [Z.mh_b]
      },
      {
        id: "lustigova-adela-1989", vetva: "konarik", meno: "Adéla", priezvisko: "Lustigová", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1989" },
        otec: "lustig-ivo-1961",
        matka: "lustigova-konarikova-vera-1964",
        zdroje: [Z.mh_b]
      },
      {
        id: "lustigova-lucie-1991", vetva: "konarik", meno: "Lucie", priezvisko: "Lustigová", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1991" },
        otec: "lustig-ivo-1961",
        matka: "lustigova-konarikova-vera-1964",
        zdroje: [Z.mh_b]
      },
      {
        id: "divoky-pavel-1992", vetva: "konarik", meno: "Pavel", priezvisko: "Divoký", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1992" },
        otec: "divoky-pavel-1966",
        matka: "konecna-jana-1969",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-rostik-1994", vetva: "konarik", meno: "Rostik", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1994" },
        otec: "konarik-josef-1955",
        matka: "konarikova-dagmar",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecny-ondrej-1995", vetva: "konarik", meno: "Ondřej", priezvisko: "Konečný", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1995" },
        otec: "konecny-ladislav-1973",
        matka: "betesova-olga-1977",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecna-katerina-2002", vetva: "konarik", meno: "Kateřina", priezvisko: "Konečná", pohlavie: "z", zijuci: true,
        narodenie: { datum: "2002" },
        otec: "konecny-ladislav-1973",
        matka: "betesova-olga-1977",
        zdroje: [Z.mh_b]
      },
      {
        id: "konecny-simon-2007", vetva: "konarik", meno: "Šimon", priezvisko: "Konečný", pohlavie: "m", zijuci: true,
        narodenie: { datum: "2007" },
        otec: "konecny-ladislav-1973",
        matka: "betesova-olga-1977",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-dagmar", vetva: "konarik", meno: "Dagmar", priezvisko: "Koňaříková", pohlavie: "z",
        sobas: { s: "konarik-josef-1955" },
        zdroje: [Z.mh_b]
      },
      {
        id: "cesek-jan", vetva: "konarik", meno: "Jan", priezvisko: "Češek", pohlavie: "m",
        otec: "cesek-tomas-1874",
        matka: "uhrikova-anna",
        zdroje: [Z.mh_b, { popis: "MyHeritage — údaj v rodokmeni „Koňařík Family Tree“ potvrdený cez Smart Match s iným stromom MyHeritage, bez odkazu na matričný zápis", url: "https://www.myheritage.cz/person-1000018_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y_OYYV6BHTTN5A7IC67OPYOFI4BBPLK5Y/jan-%C4%8De%C5%A1ek" }]
      },
      {
        id: "cesek-jaroslav", vetva: "konarik", meno: "Jaroslav", priezvisko: "Češek", pohlavie: "m",
        otec: "cesek-tomas-1874",
        matka: "uhrikova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-frantisek", vetva: "konarik", meno: "František", priezvisko: "Koňařík", pohlavie: "m",
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-karel", vetva: "konarik", meno: "Karel", priezvisko: "Koňařík", pohlavie: "m",
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-emil", vetva: "konarik", meno: "Emil", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik-ludvik", vetva: "konarik", meno: "Ludvík", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarikova-marta", vetva: "konarik", meno: "Marta", priezvisko: "Koňaříková", pohlavie: "z", zijuci: true,
        otec: "konarik-frantisek-1905",
        matka: "hrnova-antonie-1906",
        zdroje: [Z.mh_b]
      },
      {
        id: "konarik", vetva: "konarik", priezvisko: "Koňařík", pohlavie: "m", zijuci: true,
        sobas: { s: "konarik-nadezda-1968" },
        zdroje: [Z.mh_b]
      },
      // — Vetva Knap —
      {
        id: "knapova-anna", vetva: "knap", meno: "Anna", priezvisko: "Koňaříková", rodne: "Knapová", pohlavie: "z",
        narodenie: { datum: "1959" },
        sobas: { datum: "1984-02-25", miesto: "Tarnov", s: "konarik-ludek-1958" },
        otec: "knap-gustav-1934",
        matka: "juhas-duda-margita-1935",
        poznamka: "Východisková osoba vetvy Knap. Pri žijúcej osobe uvádzame len rok narodenia.",
        zdroje: [Z.rodina, Z.mh_a, Z.mh_b]
      },
      {
        id: "knap-gustav-1934", vetva: "knap", meno: "Gustav", priezvisko: "Knap", pohlavie: "m",
        narodenie: { datum: "1934-06-15", miesto: "Tarnov" },
        sobas: { s: "juhas-duda-margita-1935" },
        umrtie: { datum: "1971-05-20", miesto: "Tarnov (tam aj pochovaný)" },
        otec: "knap-jozef-1908",
        matka: "ropjakova-agnesa-1908",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "juhas-duda-margita-1935", vetva: "knap", meno: "Margita", priezvisko: "Knapová", rodne: "Juhás-Duda", pohlavie: "z",
        narodenie: { datum: "1935-05-14" },
        sobas: { s: "knap-gustav-1934" },
        umrtie: { datum: "1980-08-02", miesto: "Tarnov (tam aj pochovaná)" },
        otec: "juhas-duda-jan",
        matka: "hiscar-agnesa",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "knap-jozef-1908", vetva: "knap", meno: "Jozef", priezvisko: "Knap", pohlavie: "m",
        narodenie: { datum: "1908-02-18" },
        sobas: { s: "ropjakova-agnesa-1908" },
        umrtie: { datum: "1978-10-19" },
        otec: "knap-peter-1870",
        matka: "chovancova-maria-1874",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjakova-agnesa-1908", vetva: "knap", meno: "Agnesa", priezvisko: "Knapová", rodne: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1908-02-08" },
        sobas: { s: "knap-jozef-1908" },
        umrtie: { datum: "1994-08-10", miesto: "Tarnov" },
        otec: "ropjak-juraj-1874",
        matka: "gregova-zuzana-1879",
        poznamka: "Spája vetvu Knap s rodinami Ropják a Grega z pôvodného webu. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza úmrtie 2. 8. 1994.",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "knap-peter-1870", vetva: "knap", meno: "Peter", priezvisko: "Knap", pohlavie: "m",
        narodenie: { datum: "1870" },
        sobas: { s: "chovancova-maria-1874" },
        poznamka: "Starší syn Jan Knap, * 27. 11. 1895 Tarnov, † 20. 2. 1971.",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "chovancova-maria-1874", vetva: "knap", meno: "Mária", priezvisko: "Knapová", rodne: "Chovancová", pohlavie: "z",
        narodenie: { datum: "1874" },
        sobas: { s: "knap-peter-1870" },
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "juhas-duda-jan", vetva: "knap", meno: "Ján", priezvisko: "Juhás-Duda", pohlavie: "m",
        sobas: { s: "hiscar-agnesa" },
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "hiscar-agnesa", vetva: "knap", meno: "Agnesa", priezvisko: "Juhás-Duda", rodne: "Hiščar", pohlavie: "z",
        sobas: { s: "juhas-duda-jan" },
        otec: "nezname-meno-2",
        matka: "nezname-meno-3",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-georgius-1837", vetva: "knap", meno: "Georgius (Juraj)", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1837-03-11", miesto: "Tarnov č. 47" },
        sobas: { s: "holda-zuzana-1837" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        poznamka: "Deti podľa stromu: Georg (Gregor) * 21. 3. 1869 † 11. 4. 1870, Mária * 28. 3. 1871, Juraj * 22. 2. 1874, Anna * 3. 5. 1878, Zuzana * 8. 5. 1881, Katarína * 25. 2. 1884.",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "holda-zuzana-1837", vetva: "knap", meno: "Zuzana", priezvisko: "Ropjaková", rodne: "Holda", pohlavie: "z",
        narodenie: { datum: "1837-11-08", miesto: "Mokroluh (maď. Sárpatak)" },
        sobas: { s: "ropjak-georgius-1837" },
        otec: "holda-andras-1807",
        matka: "harnyak-zuzana",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-martin-1793", vetva: "knap", meno: "Martin", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1793" },
        sobas: { s: "chovancova-anna" },
        otec: "ropjak-mathias-1761",
        matka: "ropjak-anna",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "chovancova-anna", vetva: "knap", meno: "Anna", priezvisko: "Ropjaková", rodne: "Chovancová", pohlavie: "z",
        sobas: { s: "ropjak-martin-1793" },
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "holda-andras-1807", vetva: "knap", meno: "Andras (Ondrej)", priezvisko: "Holda", pohlavie: "m",
        narodenie: { datum: "1807-08-04" },
        sobas: { s: "harnyak-zuzana" },
        otec: "holda-johanes",
        matka: "holda-maria",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "grega-martin-1845", vetva: "knap", meno: "Martin", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1845-11-14" },
        sobas: { s: "gregova-anna-matka" },
        otec: "grega-peter-1812",
        matka: "keczer-anna",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "gregova-anna-matka", vetva: "knap", meno: "Anna", priezvisko: "Gregová", pohlavie: "z",
        sobas: { s: "grega-martin-1845" },
        poznamka: "Matka Zuzany Gregovej (* 1879); rodné priezvisko v strome chýba.",
        zdroje: [Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-juraj-1874", vetva: "knap", meno: "Juraj", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1874-02-22", miesto: "Tarnov č. 47" },
        sobas: { datum: "1898-06-13", miesto: "Tarnov", s: "gregova-zuzana-1879" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        poznamka: "V maďarských záznamoch Gyorgy. V USA bol dvakrát a neusadil sa tam: 16. 3. 1899 pricestoval z Brém loďou Bremen (cieľ Pittsburgh) a 18. 9. 1910 z Hamburgu loďou SS Pennsylvania (výška 1,65 m). Súrodenci: Georg (zrejme zomrel mladý), Mária (vydatá Gaľanová), Anna (vydatá Gregová) a Zuzana. Bratranec: Andreas Ropják (* 1858). V MyHeritage je ako dátum druhej plavby uvedené 18. 2. 1910 (Hamburg), web uvádza príchod 18. 9. 1910. Údaje prevzaté z rodokmen1.webnode.cz a MyHeritage, zatiaľ neoverené v matrike. Ďalší manžel/manželka podľa stromu: Maria Ropjak. Plavba podľa stromu: 18. 2. 1910, loď Pensylvania, Hamburg. Plavba podľa stromu: 16. 3. 1899, Loď Bremen, Bremen.",
        zdroje: [Z.web_amerika, Z.web_mlaka, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "gregova-zuzana-1879", vetva: "knap", meno: "Zuzana", priezvisko: "Gregová", pohlavie: "z",
        narodenie: { datum: "1879-04-13", miesto: "Mokroluh (maď. Sárpatak), okr. Bardejov" },
        sobas: { datum: "1898-06-13", miesto: "Tarnov", s: "ropjak-juraj-1874" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        poznamka: "Bratia: Ján Grega a Adam Grega (* 1893), obaja v Mansfielde v Ohiu. Údaje prevzaté z rodokmen1.webnode.cz a MyHeritage, zatiaľ neoverené v matrike.",
        zdroje: [Z.web_amerika, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-jan-1899", vetva: "knap", meno: "Ján", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1899-06-16", miesto: "Tarnov č. 47, okr. Bardejov" },
        sobas: { datum: "1926", s: "safcakova-anna-1906" },
        umrtie: { datum: "1940-08-26", miesto: "USA (pochovaný na Calvary Cemetery v Clevelande 28. 8. 1940)" },
        otec: "ropjak-juraj-1874",
        matka: "gregova-zuzana-1879",
        poznamka: "7. 9. 1923 pricestoval z Cherbourgu loďou Aquitania na Ellis Island (24-ročný) k ujovi Adamovi Gregovi, 151 Daisy Street, Mansfield, Ohio. Census 1930: Dowd Street, Lakewood, Ohio, bez práce, nehovoril po anglicky. Zomrel vo veku 41 rokov, 2 mesiacov a 9 dní; príčina smrti spinálna skleróza (prvé príznaky v roku 1931). Rozpor: MyHeritage uvádza úmrtie 24. 8. 1940 v Cuyahoga County, Ohio. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza úmrtie 24. 8. 1940. Plavba podľa stromu: 7. 9. 1923, Aquitania, Cherbourg. Príčina smrti: Spinal sclerosis od 1931.",
        zdroje: [Z.web_amerika, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-juraj-1902", vetva: "knap", meno: "Juraj", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1902-12-18", miesto: "Tarnov" },
        sobas: { datum: "asi 1925", s: "fornadelova-mary-1903" },
        umrtie: { datum: "1944-04-17", miesto: "Bath, okres Allen, Ohio" },
        povolanie: "robotník, neskôr mechanik (Bolt Works)",
        otec: "ropjak-juraj-1874",
        matka: "gregova-zuzana-1879",
        poznamka: "V USA George Ropjak. 17. 9. 1921 pricestoval z Le Havre loďou SS France do New Yorku (19-ročný, výška 1,65 m) k ujovi Johnovi Gregovi, Lily Street, Mansfield, Ohio. Census 1930: 2068 Quail Avenue, Lakewood, Ohio. Zomrel na obojstranný lobárny zápal pľúc (tuberkulóza); pohreb 21. 4. 1944 z kostola sv. Cyrila a Metoda v Lakewoode, pochovaný na Calvary Cemetery v Clevelande. Rozpor v prameňoch: web uvádza úmrtie 17. 4. 1944, MyHeritage 20. 4. 1941. Vek pri úmrtí, ktorý cituje web (38 rokov, 3 mesiace a 29 dní), zodpovedá skôr roku 1941 — treba overiť v úmrtnom zázname. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza úmrtie 20. 4. 1941. Plavba podľa stromu: 17. 9. 1921, France, Le Haver. Príčina smrti: Tuberkulóza od 1935.",
        zdroje: [Z.web_amerika, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "fornadel-andrew", vetva: "knap", meno: "Andrew", priezvisko: "Fornadel", pohlavie: "m",
        poznamka: "Otec Mary Fornadelovej. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "fornadelova-mary-1903", vetva: "knap", meno: "Mary", priezvisko: "Ropjaková", rodne: "Fornadelová", pohlavie: "z",
        narodenie: { datum: "1903-03-30", miesto: "Pennsylvánia (v prameni „Soaf“)" },
        sobas: { datum: "asi 1925", s: "ropjak-juraj-1902" },
        umrtie: { datum: "1989-09-15", miesto: "Garfield Heights, Cuyahoga County, Ohio" },
        otec: "fornadel-andrew",
        poznamka: "Narodila sa slovenským rodičom už v Amerike (v prameni Mary Fornadela). Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. V strome „Koňařík Family Tree“ zapísané ako Maria Fornadela. K úmrtiu: Žila: Garfield Heights.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "ropjakova-helen-1927", vetva: "knap", meno: "Helen Jane", priezvisko: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1927-06-25", miesto: "Cuyahoga County, Ohio" },
        sobas: { s: "francescangeli-evo-1920" },
        umrtie: { datum: "2001-03-31" },
        otec: "ropjak-juraj-1902",
        matka: "fornadelova-mary-1903",
        poznamka: "Manžel Evo Francescangeli. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza narodenie 25. 7. 1927.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "ropjak-john-1929", vetva: "knap", meno: "John", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1929", miesto: "Cuyahoga County, Ohio" },
        otec: "ropjak-juraj-1902",
        matka: "fornadelova-mary-1903",
        poznamka: "Ďalší osud nie je známy. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "safcak-john", vetva: "knap", meno: "Ján", priezvisko: "Šafčák", pohlavie: "m",
        narodenie: { miesto: "Tarnov" },
        sobas: { s: "harnak" },
        poznamka: "V USA John Safcak; manželka rod. Harňaková (Harnyak), krstné meno neuvedené. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "safcakova-anna-1906", vetva: "knap", meno: "Anna C.", priezvisko: "Ropjaková", rodne: "Šafčáková", pohlavie: "z",
        narodenie: { datum: "1906-05-06", miesto: "Pennsylvánia" },
        sobas: { datum: "1926", s: "ropjak-jan-1899" },
        umrtie: { datum: "2001-02-21" },
        povolanie: "triedička (census 1930)",
        otec: "safcak-john",
        matka: "harnak",
        poznamka: "V USA Anna C. Safcak. Sestra Mary C. Safcak (* asi 1906) bývala s nimi v roku 1930. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. V strome „Koňařík Family Tree“ zapísané ako Mary Safcak. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza úmrtie 21. 4. 1970. Ďalší manžel/manželka podľa stromu: Martin Joseph Vrsansky (sobáš 25. 10. 1941, Lakewood, Cuyahoga, Ohio, United States of America).",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "ropjakova-josephine-1927", vetva: "knap", meno: "Josephine Marianne", priezvisko: "Oelkerová", rodne: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1927-09-11", miesto: "Cuyahoga County, Ohio" },
        sobas: { datum: "1950-09-18", miesto: "Allen, Indiana", s: "oelker-thomas-1923" },
        otec: "ropjak-jan-1899",
        matka: "safcakova-anna-1906",
        poznamka: "Iný prameň uvádza stredné meno C. Manželia zrejme bývali v Berea, Ohio; mali syna, ktorého meno nie je známe. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Ďalší manžel/manželka podľa stromu: Meredith.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "oelker-thomas-1923", vetva: "knap", meno: "Thomas Leslie", priezvisko: "Oelker", pohlavie: "m",
        narodenie: { datum: "1923-09-23", miesto: "Cincinnati, Hamilton County, Ohio" },
        sobas: { datum: "1950-09-18", miesto: "Allen, Indiana", s: "ropjakova-josephine-1927" },
        umrtie: { datum: "1960" },
        povolanie: "pilot",
        otec: "oelker-leslie-1899",
        matka: "simon-nellie",
        poznamka: "Pilot bombardéra B-17; zostrelený nad Heidelbergom, vojnový zajatec. Počas kórejskej vojny opäť povolaný k letectvu. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Rozpor: rodokmeň „Koňařík Family Tree“ uvádza narodenie 23. 3. 1923.",
        zdroje: [Z.web_amerika, Z.mh_b]
      },
      {
        id: "ropjakova-maria", vetva: "knap", meno: "Mária", priezvisko: "Gaľanová", rodne: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1871-03-28" },
        sobas: { s: "galan-peter-1858" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). Podľa zoznamu pasažierov bola v USA už v rokoch 1889–1894. V roku 1901 pricestovala z Antverp loďou SS Friesland s deťmi Máriou (* 1892), Jánom (* 1895) a Annou (* 1899) za manželom do Pittsburghu. V USA zostala natrvalo. Dátum narodenia a rodičia podľa MyHeritage; že ide o tú istú Máriu, nie je v strome výslovne uvedené. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 27. 3. 1901.",
        zdroje: [Z.web_mlaka, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "galan-peter-1858", vetva: "knap", meno: "Peter", priezvisko: "Gaľan", pohlavie: "m",
        narodenie: { datum: "1858" },
        sobas: { s: "ropjakova-maria" },
        poznamka: "Do USA prvýkrát v roku 1886, v roku 1897 sa vrátil domov, v roku 1898 znova do USA (Pittsburgh), zrejme natrvalo. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 27. 3. 1901.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "ropjakova-anna", vetva: "knap", meno: "Anna", priezvisko: "Gregová", rodne: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1878-05-03", miesto: "Tarnov č. 47" },
        sobas: { s: "grega-jan" },
        umrtie: { datum: "1949-06-24" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). V roku 1920 sa s deťmi Jánom (* 1902), Annou (* 1907), Zuzanou (* 1909) a Jurajom (* 1911) plavila loďou SS France za manželom do Mansfieldu, Ohio (100 Daisy Street). V USA zostala natrvalo. Dátumy a rodičia podľa MyHeritage. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 17. 7. 1920, loď France, Le Haver.",
        zdroje: [Z.web_mlaka, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "grega-jan", vetva: "knap", meno: "Ján", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1875-12-12" },
        sobas: { s: "ropjakova-anna" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        poznamka: "Brat Zuzany Gregovej (* 1879) a Adama Gregu (* 1893). Do USA prvýkrát v roku 1899 (16. 3. 1899 loďou Bremen spolu s Jurajom Ropjákom; v tom istom zozname je aj Jan Grega * 1875 z Mokroluhu — či ide o neho, prameň neuvádza). Naposledy pricestoval 30. 11. 1911 z Brém loďou König Albert s bratom Adamom; výška 1,7 m. Žil v Mansfielde, Ohio. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 30. 11. 1911, Z Bremen loď Konig Albert. Plavba podľa stromu: 16. 3. 1899, Loď Bremen, Bremen.",
        zdroje: [Z.web_mlaka, Z.web_amerika, Z.mh_b]
      },
      {
        id: "grega-adam-1893", vetva: "knap", meno: "Adam", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1893-06-16" },
        sobas: { s: "grega-suzan" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        poznamka: "Brat Jána Gregu a Zuzany Gregovej. Do USA pricestoval 30. 11. 1911 (König Albert, z Brém); výška 1,8 m. V roku 1923 býval na 151 Daisy Street v Mansfielde, Ohio. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. V strome „Koňařík Family Tree“ zapísané ako Adamus Grega. Plavba podľa stromu: 30. 11. 1911, Konig Albert, Bremen spolu s Jan Grega.",
        zdroje: [Z.web_mlaka, Z.web_amerika, Z.mh_b]
      },
      {
        id: "grega-jan-1902", vetva: "knap", meno: "Ján", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1902" },
        sobas: { s: "grega-mary" },
        otec: "grega-jan",
        matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France); výška 1,7 m. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. V strome „Koňařík Family Tree“ zapísané ako John Grega. Plavba podľa stromu: 17. 7. 1920, Loď France, Le Haver.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "gregova-anna-1907", vetva: "knap", meno: "Anna", priezvisko: "Gregová", pohlavie: "z",
        narodenie: { datum: "1907-09-11" },
        sobas: { s: "vrabel-john" },
        umrtie: { datum: "1925-08-20" },
        otec: "grega-jan",
        matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France). Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 17. 7. 1920, loď France, Le Haver.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "gregova-zuzana-1909", vetva: "knap", meno: "Zuzana", priezvisko: "Gregová", pohlavie: "z",
        narodenie: { datum: "1909-12-16", miesto: "Mokroluh (Sarpata)" },
        sobas: { s: "whisler-gerome-1904" },
        umrtie: { datum: "1994-11-16", miesto: "Mansfield, Ohio" },
        otec: "grega-jan",
        matka: "ropjakova-anna",
        poznamka: "Do USA v roku 1920 (SS France); výška 1,67 m. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 17. 7. 1920, loď France, Le HAver. K úmrtiu: St. Peters Catholic.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "grega-juraj-1911", vetva: "knap", meno: "Juraj", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1911" },
        umrtie: { datum: "1967-08-02", miesto: "Richland, Ohio" },
        otec: "grega-jan",
        matka: "ropjakova-anna",
        poznamka: "V USA Georg Grega; do USA v roku 1920 (SS France). Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 17. 7. 1920, loď France, Le Haver.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "ropjakova-zuzana-1881", vetva: "knap", meno: "Zuzana", priezvisko: "Ropjaková", pohlavie: "z",
        narodenie: { datum: "1881-05-08", miesto: "Tarnov č. 47" },
        sobas: { s: "biadacz" },
        umrtie: { datum: "1972-01" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        poznamka: "Sestra Juraja Ropjáka (* 1874). Emigrovala 8. 12. 1899 cez Brémy za bratom (ktorým, nie je známe); zrejme sa usadila v USA. Dátumy a rodičia podľa MyHeritage. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 8. 12. 1881, loď Willehad, Bremen (rok sa zhoduje s rokom narodenia — v strome zrejme chyba).",
        zdroje: [Z.web_mlaka, Z.mh_a_id, Z.mh_b]
      },
      {
        id: "ropjak-andreas-1858", vetva: "knap", meno: "Andreas", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1858-08-04", miesto: "Tarnov 10" },
        sobas: { s: "holda-katarina-1863" },
        otec: "ropjak-andreas-1838",
        matka: "delejova-anna",
        poznamka: "Bratranec Juraja Ropjáka (* 1874). V USA bol v roku 1901; znova pricestoval 8. 11. 1906 so synom Jánom (* 1889). Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 8. 11. 1906, loď The Bremen, Bremen. Plavba podľa stromu: 16. 3. 1901, loď Barbarossa, Bremen.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "ropjak-jan-1889", vetva: "knap", meno: "Ján", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1889-05-11", miesto: "Tarnov" },
        sobas: { s: "litavic-elizabeth-1895", datum: "1916-08-13" },
        umrtie: { datum: "1954-11-13", miesto: "Renovo, Pa" },
        otec: "ropjak-andreas-1858",
        matka: "holda-katarina-1863",
        poznamka: "Do USA pricestoval s otcom 8. 11. 1906; neskôr si zmenil meno na John Ropyak. Prevzaté z rodokmen1.webnode.cz, zatiaľ neoverené v matrike. Plavba podľa stromu: 8. 11. 1906, loď The Bremen, Bremen.",
        zdroje: [Z.web_mlaka, Z.mh_b]
      },
      {
        id: "ropjak-mathias-1761", vetva: "knap", meno: "Mathias", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1761" },
        sobas: { s: "ropjak-anna" },
        umrtie: { datum: "1821-02-20" },
        poznamka: "Najstarší známy Ropják v priamej línii.",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-johanes-1790", vetva: "knap", meno: "Johanes", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1790-05-16" },
        otec: "ropjak-mathias-1761",
        matka: "ropjak-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-mathias-1797", vetva: "knap", meno: "Mathias", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1797-06-09" },
        otec: "ropjak-mathias-1761",
        matka: "ropjak-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-peter-1812", vetva: "knap", meno: "Peter", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1812-08-20", miesto: "Mokroluh (Sarpata)" },
        sobas: { s: "keczer-anna" },
        otec: "grega-petrus",
        matka: "grega-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-anna-1822", vetva: "knap", meno: "Anna", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1822-08-04" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-zuzana-1829", vetva: "knap", meno: "Zuzana", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1829-09-08" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-anna-1832", vetva: "knap", meno: "Anna", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1832-08-27" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-bohus-1834", vetva: "knap", meno: "Bohus", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1834-02-20" },
        otec: "grega-peter-1812",
        matka: "keczer-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-adamus-1834", vetva: "knap", meno: "Adamus", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1834-01-08" },
        otec: "grega-peter-1812",
        matka: "keczer-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-catherine-1835", vetva: "knap", meno: "Catherine", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1835" },
        sobas: { s: "kelecsov-georg" },
        umrtie: { datum: "1892-01-19", miesto: "Tarnov" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-andreas-1838", vetva: "knap", meno: "Andreas", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1838-10-06" },
        sobas: { s: "delejova-anna" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-petreus-1841", vetva: "knap", meno: "Petreus", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1841-10-16" },
        otec: "ropjak-martin-1793",
        matka: "chovancova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-georg-1849", vetva: "knap", meno: "Georg", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1849-09-12" },
        otec: "grega-peter-1812",
        matka: "keczer-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-anna-1854", vetva: "knap", meno: "Anna", priezvisko: "Holda", pohlavie: "z",
        narodenie: { datum: "1854-06-17" },
        otec: "holda-georgius",
        matka: "szatok-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-georgius-1858", vetva: "knap", meno: "Georgius", priezvisko: "Holda", pohlavie: "m",
        narodenie: { datum: "1858-10-04" },
        otec: "holda-georgius",
        matka: "szatok-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-johanes-1860", vetva: "knap", meno: "Johanes", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1860-12-24" },
        sobas: { datum: "1889-01-12", miesto: "Allegheny,​ Pennsylvania,​ United States", s: "pustinger-mary" },
        otec: "ropjak-andreas-1838",
        matka: "delejova-anna",
        poznamka: "Plavba podľa stromu: 1906, Bremen.",
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-maria-1861", vetva: "knap", meno: "Mária", priezvisko: "Holda", pohlavie: "z",
        narodenie: { datum: "1861-10-22" },
        otec: "holda-georgius",
        matka: "szatok-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-katarina-1863", vetva: "knap", meno: "Katarína", priezvisko: "Holda", pohlavie: "z",
        narodenie: { datum: "1863-05-26" },
        sobas: { s: "ropjak-andreas-1858" },
        otec: "holda-georgius",
        matka: "szatok-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-maria-1868", vetva: "knap", meno: "Mária", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1868-08-15", miesto: "Tarnov 10" },
        otec: "ropjak-andreas-1838",
        matka: "delejova-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-petrus-1868", vetva: "knap", meno: "Petrus", priezvisko: "Holda", pohlavie: "m",
        narodenie: { datum: "1868-01-24" },
        otec: "holda-georgius",
        matka: "szatok-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-georg-1869", vetva: "knap", meno: "Georg (Gregor)", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1869-03-21" },
        umrtie: { datum: "1870-04-11" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        zdroje: [Z.mh_b]
      },
      {
        id: "kelecsov-andreas-1869", vetva: "knap", meno: "Andreas", priezvisko: "Kelecsov", pohlavie: "m",
        narodenie: { datum: "1869-03-23" },
        otec: "kelecsov-georg",
        matka: "ropjak-catherine-1835",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-amelia-1869", vetva: "knap", meno: "Amelia M.", priezvisko: "Whisler", pohlavie: "z",
        narodenie: { datum: "1869" },
        otec: "whisler-nicolas",
        matka: "mueller-frances",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-joseph-1870", vetva: "knap", meno: "Joseph T.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1870" },
        umrtie: { datum: "1951" },
        otec: "whisler-nicolas",
        matka: "mueller-frances",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-maria-1871", vetva: "knap", meno: "Mária", priezvisko: "Grega", pohlavie: "z",
        narodenie: { datum: "1871-02" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-anna-1872", vetva: "knap", meno: "Anna", priezvisko: "Grega", pohlavie: "z",
        narodenie: { datum: "1872-01-07" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-martin-1873", vetva: "knap", meno: "Martin", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1873-03-10" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        zdroje: [Z.mh_b]
      },
      {
        id: "kelecsov-josef-1873", vetva: "knap", meno: "Josef", priezvisko: "Kelecsov", pohlavie: "m",
        narodenie: { datum: "1873-03-24" },
        otec: "kelecsov-georg",
        matka: "ropjak-catherine-1835",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-sarah-1873", vetva: "knap", meno: "Sarah M.", priezvisko: "Whisler", pohlavie: "z",
        narodenie: { datum: "1873" },
        umrtie: { datum: "1946" },
        otec: "whisler-nicolas",
        matka: "mueller-frances",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-ida-1876", vetva: "knap", meno: "Ida G.", priezvisko: "Whisler", pohlavie: "z",
        narodenie: { datum: "1876" },
        umrtie: { datum: "1965" },
        otec: "whisler-nicolas",
        matka: "mueller-frances",
        zdroje: [Z.mh_b]
      },
      {
        id: "kelecsov-maria-1877", vetva: "knap", meno: "Mária", priezvisko: "Kelecsov", pohlavie: "z",
        narodenie: { datum: "1877-02-21" },
        otec: "kelecsov-georg",
        matka: "ropjak-catherine-1835",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-charles-1877", vetva: "knap", meno: "Charles A", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1877-07-06" },
        sobas: { s: "miller-marry-1880" },
        umrtie: { datum: "1935-12-19", miesto: "Richland, Ohio" },
        otec: "whisler-nicolas",
        matka: "mueller-frances",
        zdroje: [Z.mh_b]
      },
      {
        id: "miller-marry-1880", vetva: "knap", meno: "Marry M.", priezvisko: "Miller", pohlavie: "z",
        narodenie: { datum: "1880-04-02" },
        sobas: { s: "whisler-charles-1877" },
        umrtie: { datum: "1944-01-04", miesto: "Mansfield, Richland Ohio" },
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-petreus-1884", vetva: "knap", meno: "Petreus", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1884-12-03" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-katarina-1884", vetva: "knap", meno: "Katarina", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1884-02-25" },
        otec: "ropjak-georgius-1837",
        matka: "holda-zuzana-1837",
        zdroje: [Z.mh_b]
      },
      {
        id: "galan-maria-1892", vetva: "knap", meno: "Mária", priezvisko: "Gaľan", pohlavie: "m",
        narodenie: { datum: "1892" },
        otec: "galan-peter-1858",
        matka: "ropjakova-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "vrsansky-martin-1892", vetva: "knap", meno: "Martin Joseph", priezvisko: "Vrsansky", pohlavie: "m",
        narodenie: { datum: "1892-11-11", miesto: "Czechoslovakia" },
        sobas: { datum: "1941-10-25", miesto: "Lakewood, Cuyahoga, Ohio, United States of America", s: "safcakova-anna-1906" },
        umrtie: { datum: "1976-12-30", miesto: "Cleveland" },
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-andreas-1895", vetva: "knap", meno: "Andreas", priezvisko: "Grega", pohlavie: "m",
        narodenie: { datum: "1895-03-17" },
        otec: "grega-martin-1845",
        matka: "gregova-anna-matka",
        zdroje: [Z.mh_b]
      },
      {
        id: "litavic-elizabeth-1895", vetva: "knap", meno: "Elizabeth Jane", priezvisko: "Litavic", pohlavie: "z",
        narodenie: { datum: "1895-12-13", miesto: "Richvald" },
        sobas: { datum: "1916-08-13", s: "ropjak-jan-1889" },
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-jan-1895", vetva: "knap", meno: "Jan", priezvisko: "Knap", pohlavie: "m",
        narodenie: { datum: "1895-11-27", miesto: "Tarnov" },
        sobas: { s: "repiasova-maria" },
        umrtie: { datum: "1971-02-20" },
        otec: "knap-peter-1870",
        matka: "chovancova-maria-1874",
        zdroje: [Z.mh_b]
      },
      {
        id: "galan-jan-1895", vetva: "knap", meno: "Ján", priezvisko: "Gaľan", pohlavie: "m",
        narodenie: { datum: "1895" },
        otec: "galan-peter-1858",
        matka: "ropjakova-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-katarina-1896", vetva: "knap", meno: "Katarína", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1896-01-19" },
        otec: "ropjak-andreas-1858",
        matka: "holda-katarina-1863",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-peter-1898", vetva: "knap", meno: "Peter", priezvisko: "Ropják", pohlavie: "m",
        narodenie: { datum: "1898" },
        sobas: { s: "mezik-anna" },
        otec: "ropjak-andreas-1858",
        matka: "holda-katarina-1863",
        poznamka: "Plavba podľa stromu: 10. 7. 1922, Renovo, pa.",
        zdroje: [Z.mh_b]
      },
      {
        id: "galan-anna-1899", vetva: "knap", meno: "Anna", priezvisko: "Gaľan", pohlavie: "z",
        narodenie: { datum: "1899" },
        otec: "galan-peter-1858",
        matka: "ropjakova-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "oelker-leslie-1899", vetva: "knap", meno: "Leslie Louis", priezvisko: "Oelker", pohlavie: "m",
        narodenie: { datum: "1899" },
        sobas: { s: "simon-nellie" },
        umrtie: { datum: "1928" },
        otec: "oelker-louis",
        matka: "oelker-elizabeth",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-gerome-1904", vetva: "knap", meno: "Gerome Leo", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1904-10-16" },
        sobas: { s: "gregova-zuzana-1909" },
        umrtie: { datum: "1958-03-14" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-charles-1910", vetva: "knap", meno: "Charles H.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1910-07-04" },
        umrtie: { datum: "1983-09" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-robert-1912", vetva: "knap", meno: "Robert K.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1912" },
        umrtie: { datum: "1960" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-irvin-1915", vetva: "knap", meno: "Irvin J.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1915-09-24" },
        umrtie: { datum: "1987-05-30" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-john-1917", vetva: "knap", meno: "John Ferdinand", priezvisko: "Ropyak", pohlavie: "m",
        narodenie: { datum: "1917-05-30", miesto: "Renovo PA" },
        sobas: { s: "cobb-nadine-1917" },
        umrtie: { datum: "1986-02-07", miesto: "Oklahoma city, Oklahoma" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        poznamka: "Vojenská služba (John F Ropyak).",
        zdroje: [Z.mh_b]
      },
      {
        id: "cobb-nadine-1917", vetva: "knap", meno: "Nadine Akin", priezvisko: "Cobb", pohlavie: "z",
        narodenie: { datum: "1917-01-22" },
        sobas: { s: "ropyak-john-1917" },
        umrtie: { datum: "2007" },
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-dodson-mary-1917", vetva: "knap", meno: "Mary M", priezvisko: "Whisler (Dodson)", pohlavie: "z",
        narodenie: { datum: "1917" },
        umrtie: { datum: "1982" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-joseph-1918", vetva: "knap", meno: "Joseph Andrew", priezvisko: "Ropyak", pohlavie: "m",
        narodenie: { datum: "1918-10-25", miesto: "Renovo PA" },
        sobas: { s: "ropyak-mary" },
        umrtie: { datum: "2012" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-stephen-1920", vetva: "knap", meno: "Stephen J.", priezvisko: "Ropyak", pohlavie: "m",
        narodenie: { datum: "1920-07-29", miesto: "Renovo PA" },
        umrtie: { datum: "1946-07-14" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        poznamka: "Príčina smrti: Tuberkuloza. Vojenská služba (Stephen J Ropyak).",
        zdroje: [Z.mh_b]
      },
      {
        id: "francescangeli-evo-1920", vetva: "knap", meno: "Evo", priezvisko: "Francescangeli", pohlavie: "m",
        narodenie: { datum: "1920-09-19" },
        sobas: { s: "ropjakova-helen-1927" },
        umrtie: { datum: "2017-05-26", miesto: "Ohio Parma" },
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-anna-1920", vetva: "knap", meno: "Anna", priezvisko: "Ropják", pohlavie: "z",
        narodenie: { datum: "1920" },
        otec: "ropjak-andreas-1858",
        matka: "holda-katarina-1863",
        poznamka: "Plavba podľa stromu: 29. 11. 1920, Renovo, pa (rok sa zhoduje s rokom narodenia — v strome zrejme chyba).",
        zdroje: [Z.mh_b]
      },
      {
        id: "moerschbacher-ralph-1921", vetva: "knap", meno: "Ralph Charles", priezvisko: "Moerschbacher", pohlavie: "m",
        narodenie: { datum: "1921-11-28", miesto: "Belfonte PA" },
        sobas: { s: "ropyak-anna-1922" },
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-anna-1922", vetva: "knap", meno: "Anna Elizabeth", priezvisko: "Ropyak", pohlavie: "z",
        narodenie: { datum: "1922-08-08", miesto: "Renovo PA" },
        sobas: { s: "moerschbacher-ralph-1921" },
        umrtie: { datum: "2006-04-27" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        poznamka: "Pochovaný/á: Gate Of Heaven Cemetery, Pennsylvania, USA.",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-keneth-1923", vetva: "knap", meno: "Keneth E.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1923-10-31" },
        otec: "whisler-charles-1877",
        matka: "miller-marry-1880",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-francis-1924", vetva: "knap", meno: "Francis Thomas", priezvisko: "Ropyak", pohlavie: "m",
        narodenie: { datum: "1924-05-31", miesto: "Renovo PA" },
        umrtie: { datum: "1944-06-25" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        poznamka: "Príčina smrti: Florencia Italy, padol v boji.",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-mary-1928", vetva: "knap", meno: "Mary Catherine", priezvisko: "Ropyak", pohlavie: "z",
        narodenie: { datum: "1928-09-14" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-john-1929", vetva: "knap", meno: "John R", priezvisko: "Grega", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1929" },
        otec: "grega-jan-1902",
        matka: "grega-mary",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-jerome-1930", vetva: "knap", meno: "Jerome I.", priezvisko: "Whisler", pohlavie: "m",
        narodenie: { datum: "1930-04-01" },
        umrtie: { datum: "1994-12-20" },
        otec: "gregova-zuzana-1909",
        matka: "whisler-gerome-1904",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-charles-1932", vetva: "knap", meno: "Charles H.", priezvisko: "Whisler", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1932" },
        otec: "gregova-zuzana-1909",
        matka: "whisler-gerome-1904",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-elizabeth-1932", vetva: "knap", meno: "Elizabeth Jane", priezvisko: "Ropyak", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1932" },
        sobas: { s: "douglas-william" },
        otec: "ropjak-jan-1889",
        matka: "litavic-elizabeth-1895",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-strip-marcia-1937", vetva: "knap", meno: "Marcia A.", priezvisko: "Whisler (Strip)", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1937" },
        otec: "gregova-zuzana-1909",
        matka: "whisler-gerome-1904",
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-jozef-1946", vetva: "knap", meno: "Jozef", priezvisko: "Knap", pohlavie: "m",
        narodenie: { datum: "1946-02-02", miesto: "Tarnov" },
        sobas: { s: "kaminska-maria-1950" },
        umrtie: { datum: "2005-07-06", miesto: "červenica pri Sabinove (17:00)" },
        otec: "knap-jozef-1908",
        matka: "ropjakova-agnesa-1908",
        zdroje: [Z.mh_b]
      },
      {
        id: "kaminska-maria-1950", vetva: "knap", meno: "Mária", priezvisko: "Kaminska", pohlavie: "z",
        narodenie: { datum: "1950-06-12" },
        sobas: { s: "knap-jozef-1946" },
        umrtie: { datum: "2004-08-06" },
        zdroje: [Z.mh_b]
      },
      {
        id: "oelker-meredith-thomas-1951", vetva: "knap", meno: "Thomas Leslie", priezvisko: "Oelker Meredith", pohlavie: "m",
        narodenie: { datum: "1951-11-21", miesto: "Lakewood, Cuyahoga, Ohio, United States of America" },
        umrtie: { datum: "2011-01-19", miesto: "Cuyahoga Cunty, Ohio" },
        otec: "oelker-thomas-1923",
        matka: "ropjakova-josephine-1927",
        zdroje: [Z.mh_b]
      },
      {
        id: "bachleda-jozef-1958", vetva: "knap", meno: "Jozef", priezvisko: "Bachleda", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1958" },
        sobas: { s: "knapova-margita-1960" },
        zdroje: [Z.mh_b]
      },
      {
        id: "cisarik-ladislav-1959", vetva: "knap", meno: "Ladislav", priezvisko: "Čisárik", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1959" },
        sobas: { s: "knapova-daniela-1967" },
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-margita-1960", vetva: "knap", meno: "Margita", priezvisko: "Knapová", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1960" },
        sobas: { s: "bachleda-jozef-1958" },
        otec: "knap-gustav-1934",
        matka: "juhas-duda-margita-1935",
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-magdalena-1961", vetva: "knap", meno: "Magdalena", priezvisko: "Knapová", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1961" },
        sobas: { s: "gajdos-miroslav-1961" },
        otec: "knap-gustav-1934",
        matka: "juhas-duda-margita-1935",
        zdroje: [Z.mh_b]
      },
      {
        id: "gajdos-miroslav-1961", vetva: "knap", meno: "Miroslav", priezvisko: "Gajdoš", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1961" },
        sobas: { s: "knapova-magdalena-1961" },
        zdroje: [Z.mh_b]
      },
      {
        id: "douglas-stephen-1961", vetva: "knap", meno: "Stephen", priezvisko: "Douglas", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1961" },
        otec: "douglas-william",
        matka: "ropyak-elizabeth-1932",
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-vladimir-1962", vetva: "knap", meno: "Vladimír", priezvisko: "Knap", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1962" },
        sobas: { s: "knapova-zdenka" },
        otec: "knap-gustav-1934",
        matka: "juhas-duda-margita-1935",
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-daniela-1967", vetva: "knap", meno: "Daniela", priezvisko: "Knapova", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1967" },
        sobas: { s: "cisarik-ladislav-1959" },
        otec: "knap-gustav-1934",
        matka: "juhas-duda-margita-1935",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-marian-1979", vetva: "knap", meno: "Marián", priezvisko: "Ropják", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1979" },
        sobas: { s: "gajdos-miroslava-1985" },
        zdroje: [Z.mh_b]
      },
      {
        id: "bachleda-daniel-1984", vetva: "knap", meno: "Daniel", priezvisko: "Bachleda", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1984" },
        otec: "bachleda-jozef-1958",
        matka: "knapova-margita-1960",
        zdroje: [Z.mh_b]
      },
      {
        id: "gajdos-miroslava-1985", vetva: "knap", meno: "Miroslava", priezvisko: "Gajdoš", pohlavie: "z", zijuci: true,
        narodenie: { datum: "1985" },
        sobas: { s: "ropjak-marian-1979" },
        otec: "gajdos-miroslav-1961",
        matka: "knapova-magdalena-1961",
        zdroje: [Z.mh_b]
      },
      {
        id: "nezname-meno-1987", vetva: "knap", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1987" },
        otec: "bachleda-jozef-1958",
        matka: "knapova-margita-1960",
        zdroje: [Z.mh_b]
      },
      {
        id: "gajdos-gabriel-1987", vetva: "knap", meno: "Gabriel", priezvisko: "Gajdoš", pohlavie: "m", zijuci: true,
        narodenie: { datum: "1987" },
        otec: "gajdos-miroslav-1961",
        matka: "knapova-magdalena-1961",
        zdroje: [Z.mh_b]
      },
      {
        id: "keczer-anna", vetva: "knap", meno: "Anna", priezvisko: "Keczer", pohlavie: "z",
        sobas: { s: "grega-peter-1812" },
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-zdenka", vetva: "knap", meno: "Zdenka", priezvisko: "Knapová", pohlavie: "z", zijuci: true,
        sobas: { s: "knap-vladimir-1962" },
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-maria", vetva: "knap", meno: "Mária", priezvisko: "Ropják", pohlavie: "z",
        sobas: { s: "demsky-michal" },
        otec: "ropjak-juraj-1874",
        matka: "gregova-zuzana-1879",
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-margita", vetva: "knap", meno: "Margita", priezvisko: "Knapová", pohlavie: "z", zijuci: true,
        sobas: { s: "kulka-imrich" },
        otec: "knap-jozef-1908",
        matka: "ropjakova-agnesa-1908",
        zdroje: [Z.mh_b]
      },
      {
        id: "knapova-jolana", vetva: "knap", meno: "Jolana", priezvisko: "Knapová", pohlavie: "z",
        sobas: { s: "harnak-andrej" },
        otec: "knap-jozef-1908",
        matka: "ropjakova-agnesa-1908",
        zdroje: [Z.mh_b]
      },
      {
        id: "kulka-imrich", vetva: "knap", meno: "Imrich", priezvisko: "Kuľka", pohlavie: "m",
        sobas: { s: "knapova-margita" },
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-petrus", vetva: "knap", meno: "Petrus", priezvisko: "Grega", pohlavie: "m",
        sobas: { s: "grega-maria" },
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-maria", vetva: "knap", meno: "Mária", priezvisko: "Grega", pohlavie: "z",
        sobas: { s: "grega-petrus" },
        zdroje: [Z.mh_b]
      },
      {
        id: "harnyak-zuzana", vetva: "knap", meno: "Zuzana", priezvisko: "Harnyak", pohlavie: "z",
        sobas: { s: "holda-andras-1807" },
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-johanes", vetva: "knap", meno: "Johanes", priezvisko: "Holda", pohlavie: "m",
        sobas: { s: "holda-maria" },
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-maria", vetva: "knap", meno: "Mária", priezvisko: "Holda", pohlavie: "z",
        sobas: { s: "holda-johanes" },
        zdroje: [Z.mh_b]
      },
      {
        id: "biadacz", vetva: "knap", priezvisko: "Biadacz", pohlavie: "m",
        sobas: { s: "ropjakova-zuzana-1881" },
        poznamka: "Krstné meno v strome nie je uvedené.",
        zdroje: [Z.mh_b]
      },
      {
        id: "harnak-andrej", vetva: "knap", meno: "Andrej", priezvisko: "Harňak", pohlavie: "m", zijuci: true,
        sobas: { s: "knapova-jolana" },
        zdroje: [Z.mh_b]
      },
      {
        id: "delejova-anna", vetva: "knap", meno: "Anna", priezvisko: "Delejova", pohlavie: "z",
        sobas: { s: "ropjak-andreas-1838" },
        zdroje: [Z.mh_b]
      },
      {
        id: "douglas-william", vetva: "knap", meno: "William Wasley", priezvisko: "Douglas", pohlavie: "m",
        sobas: { datum: "1955-04-23", s: "ropyak-elizabeth-1932" },
        zdroje: [Z.mh_b]
      },
      {
        id: "holda-georgius", vetva: "knap", meno: "Georgius", priezvisko: "Holda", pohlavie: "m",
        sobas: { s: "szatok-anna" },
        zdroje: [Z.mh_b]
      },
      {
        id: "szatok-anna", vetva: "knap", meno: "Anna", priezvisko: "Szátok", pohlavie: "z",
        sobas: { s: "holda-georgius" },
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-anna", vetva: "knap", meno: "Anna", priezvisko: "Ropják", pohlavie: "z",
        sobas: { s: "ropjak-mathias-1761" },
        zdroje: [Z.mh_b]
      },
      {
        id: "kelecsov-georg", vetva: "knap", meno: "Georg", priezvisko: "Kelecsov", pohlavie: "m",
        sobas: { s: "ropjak-catherine-1835" },
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-zdenka", vetva: "knap", meno: "Zdenka", priezvisko: "Knap", pohlavie: "z", zijuci: true,
        sobas: { s: "dostal-petr" },
        otec: "knap-vladimir-1962",
        matka: "knapova-zdenka",
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-katka", vetva: "knap", meno: "Katka", priezvisko: "Knap", pohlavie: "z", zijuci: true,
        otec: "knap-vladimir-1962",
        matka: "knapova-zdenka",
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-julka", vetva: "knap", meno: "Julka", priezvisko: "Knap", pohlavie: "z", zijuci: true,
        otec: "knap-vladimir-1962",
        matka: "knapova-zdenka",
        zdroje: [Z.mh_b]
      },
      {
        id: "cisarik-ivana", vetva: "knap", meno: "Ivana", priezvisko: "Čisárik", pohlavie: "z", zijuci: true,
        otec: "cisarik-ladislav-1959",
        matka: "knapova-daniela-1967",
        zdroje: [Z.mh_b]
      },
      {
        id: "cisarik-daniela", vetva: "knap", meno: "Daniela", priezvisko: "Čisárik", pohlavie: "z", zijuci: true,
        otec: "cisarik-ladislav-1959",
        matka: "knapova-daniela-1967",
        zdroje: [Z.mh_b]
      },
      {
        id: "whisler-nicolas", vetva: "knap", meno: "Nicolas", priezvisko: "Whisler", pohlavie: "m",
        sobas: { s: "mueller-frances" },
        zdroje: [Z.mh_b]
      },
      {
        id: "mueller-frances", vetva: "knap", meno: "Frances", priezvisko: "Mueller", pohlavie: "z",
        sobas: { s: "whisler-nicolas" },
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-suzan", vetva: "knap", meno: "Suzan", priezvisko: "Grega", pohlavie: "z",
        sobas: { s: "grega-adam-1893" },
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-michal", vetva: "knap", meno: "Michal", priezvisko: "Demsky", pohlavie: "m",
        sobas: { s: "ropjak-maria" },
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-olga", vetva: "knap", meno: "Olga", priezvisko: "Demsky", pohlavie: "z", zijuci: true,
        sobas: { s: "pituch-michal" },
        otec: "demsky-michal",
        matka: "ropjak-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "pituch-michal", vetva: "knap", meno: "Michal", priezvisko: "Pituch", pohlavie: "m", zijuci: true,
        sobas: { s: "demsky-olga" },
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-vladimir", vetva: "knap", meno: "Vladimir", priezvisko: "Demsky", pohlavie: "m", zijuci: true,
        sobas: { s: "nezname-meno" },
        otec: "demsky-michal",
        matka: "ropjak-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "pituch-katarina", vetva: "knap", meno: "Katarina", priezvisko: "Pituch", pohlavie: "z", zijuci: true,
        otec: "pituch-michal",
        matka: "demsky-olga",
        zdroje: [Z.mh_b]
      },
      {
        id: "pituch-martina", vetva: "knap", meno: "Martina", priezvisko: "Pituch", pohlavie: "z", zijuci: true,
        otec: "pituch-michal",
        matka: "demsky-olga",
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-vladimir-2", vetva: "knap", meno: "Vladimir", priezvisko: "Demsky", pohlavie: "m", zijuci: true,
        otec: "demsky-vladimir",
        matka: "nezname-meno",
        zdroje: [Z.mh_b]
      },
      {
        id: "nezname-meno", vetva: "knap", pohlavie: "z", zijuci: true,
        sobas: { s: "demsky-vladimir" },
        poznamka: "Meno v strome nie je uvedené.",
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-peter", vetva: "knap", meno: "Peter", priezvisko: "Demsky", pohlavie: "m", zijuci: true,
        otec: "demsky-vladimir",
        matka: "nezname-meno",
        zdroje: [Z.mh_b]
      },
      {
        id: "pituch-marek", vetva: "knap", meno: "Marek", priezvisko: "Pituch", pohlavie: "m", zijuci: true,
        matka: "pituch-katarina",
        zdroje: [Z.mh_b]
      },
      {
        id: "pituch-michaela", vetva: "knap", meno: "Michaela", priezvisko: "Pituch", pohlavie: "z", zijuci: true,
        matka: "pituch-katarina",
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-peter", vetva: "knap", meno: "Peter", priezvisko: "Knap", pohlavie: "m",
        otec: "knap-peter-1870",
        matka: "chovancova-maria-1874",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-maria-2", vetva: "knap", meno: "Maria", priezvisko: "Ropjak", pohlavie: "z",
        sobas: { s: "ropjak-juraj-1874" },
        poznamka: "Ďalší manžel/manželka podľa stromu: Michal Demský.",
        zdroje: [Z.mh_b]
      },
      {
        id: "ropjak-anna-2", vetva: "knap", meno: "Anna", priezvisko: "Ropják", pohlavie: "z",
        sobas: { s: "galik-jan" },
        otec: "ropjak-juraj-1874",
        matka: "ropjak-maria-2",
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-jan", vetva: "knap", meno: "Jan", priezvisko: "Galik", pohlavie: "m",
        sobas: { s: "ropjak-anna-2" },
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-jozef", vetva: "knap", meno: "Jozef", priezvisko: "Galik", pohlavie: "m", zijuci: true,
        otec: "galik-jan",
        matka: "ropjak-anna-2",
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-frantisek", vetva: "knap", meno: "Frantisek", priezvisko: "Galik", pohlavie: "m", zijuci: true,
        sobas: { s: "galik-maria" },
        otec: "galik-jan",
        matka: "ropjak-anna-2",
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-marta", vetva: "knap", meno: "Marta", priezvisko: "Galik", pohlavie: "z", zijuci: true,
        sobas: { s: "spisak-joszef" },
        otec: "galik-jan",
        matka: "ropjak-anna-2",
        zdroje: [Z.mh_b]
      },
      {
        id: "spisak-joszef", vetva: "knap", meno: "Joszef", priezvisko: "Spisak", pohlavie: "m", zijuci: true,
        sobas: { s: "galik-marta" },
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-maria", vetva: "knap", meno: "Maria", priezvisko: "Galik", pohlavie: "z", zijuci: true,
        sobas: { s: "galik-frantisek" },
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-peter", vetva: "knap", meno: "Peter", priezvisko: "Galik", pohlavie: "m", zijuci: true,
        otec: "galik-frantisek",
        matka: "galik-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "galik-lenka", vetva: "knap", meno: "Lenka", priezvisko: "Galik", pohlavie: "z", zijuci: true,
        otec: "galik-frantisek",
        matka: "galik-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "hiscar-anna", vetva: "knap", meno: "Anna", priezvisko: "Hiščar", pohlavie: "z",
        sobas: { s: "zamborsky-jan" },
        otec: "nezname-meno-2",
        matka: "nezname-meno-3",
        zdroje: [Z.mh_b]
      },
      {
        id: "nezname-meno-2", vetva: "knap", pohlavie: "m",
        sobas: { s: "nezname-meno-3" },
        poznamka: "Meno v strome nie je uvedené.",
        zdroje: [Z.mh_b]
      },
      {
        id: "nezname-meno-3", vetva: "knap", pohlavie: "z",
        sobas: { s: "nezname-meno-2" },
        poznamka: "Meno v strome nie je uvedené.",
        zdroje: [Z.mh_b]
      },
      {
        id: "zamborsky-jan", vetva: "knap", meno: "Jan", priezvisko: "Zamborsky", pohlavie: "m",
        sobas: { s: "hiscar-anna" },
        zdroje: [Z.mh_b]
      },
      {
        id: "zamborsky-andrej", vetva: "knap", meno: "Andrej", priezvisko: "Zamborsky", pohlavie: "m", zijuci: true,
        otec: "zamborsky-jan",
        matka: "hiscar-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "zamborsky-jozef", vetva: "knap", meno: "Jozef", priezvisko: "Zamborsky", pohlavie: "m", zijuci: true,
        otec: "zamborsky-jan",
        matka: "hiscar-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "zamborsky-irena", vetva: "knap", meno: "Irena", priezvisko: "Zamborsky", pohlavie: "z", zijuci: true,
        otec: "zamborsky-jan",
        matka: "hiscar-anna",
        zdroje: [Z.mh_b]
      },
      {
        id: "demsky-michal-2", vetva: "knap", meno: "Michal", priezvisko: "Demský", pohlavie: "m",
        sobas: { s: "ropjak-maria-2" },
        zdroje: [Z.mh_b]
      },
      {
        id: "dostal-petr", vetva: "knap", meno: "Petr", priezvisko: "Dostál", pohlavie: "m", zijuci: true,
        sobas: { s: "knap-zdenka" },
        zdroje: [Z.mh_b]
      },
      {
        id: "dostal-petr-2", vetva: "knap", meno: "Petr", priezvisko: "Dostál", pohlavie: "m", zijuci: true,
        otec: "dostal-petr",
        matka: "knap-zdenka",
        zdroje: [Z.mh_b]
      },
      {
        id: "kulka-stanislav", vetva: "knap", meno: "Stanislav", priezvisko: "Kuľka", pohlavie: "m", zijuci: true,
        otec: "kulka-imrich",
        matka: "knapova-margita",
        zdroje: [Z.mh_b]
      },
      {
        id: "kulka-jan", vetva: "knap", meno: "Ján", priezvisko: "Kuľka", pohlavie: "m", zijuci: true,
        otec: "kulka-imrich",
        matka: "knapova-margita",
        zdroje: [Z.mh_b]
      },
      {
        id: "harnak", vetva: "knap", priezvisko: "Harňak", pohlavie: "z",
        sobas: { s: "safcak-john" },
        poznamka: "Krstné meno v strome nie je uvedené.",
        zdroje: [Z.mh_b]
      },
      {
        id: "grega-mary", vetva: "knap", meno: "Mary", priezvisko: "Grega", pohlavie: "z",
        sobas: { s: "grega-jan-1902" },
        zdroje: [Z.mh_b]
      },
      {
        id: "ropyak-mary", vetva: "knap", meno: "Mary", priezvisko: "Ropyak", pohlavie: "z",
        sobas: { s: "ropyak-joseph-1918" },
        zdroje: [Z.mh_b]
      },
      {
        id: "simon-nellie", vetva: "knap", meno: "Nellie", priezvisko: "Simon", pohlavie: "z",
        sobas: { s: "oelker-leslie-1899" },
        zdroje: [Z.mh_b]
      },
      {
        id: "oelker-louis", vetva: "knap", meno: "Louis S.", priezvisko: "Oelker", pohlavie: "m",
        sobas: { s: "oelker-elizabeth" },
        zdroje: [Z.mh_b]
      },
      {
        id: "oelker-elizabeth", vetva: "knap", meno: "Elizabeth", priezvisko: "Oelker", pohlavie: "z",
        sobas: { s: "oelker-louis" },
        zdroje: [Z.mh_b]
      },
      {
        id: "vrabel-john", vetva: "knap", meno: "John", priezvisko: "Vrabel", pohlavie: "m",
        sobas: { s: "gregova-anna-1907" },
        zdroje: [Z.mh_b]
      },
      {
        id: "vrabel-anna", vetva: "knap", meno: "Anna A", priezvisko: "Vrabel", pohlavie: "z", zijuci: true,
        otec: "vrabel-john",
        matka: "gregova-anna-1907",
        zdroje: [Z.mh_b]
      },
      {
        id: "mezik-anna", vetva: "knap", meno: "Anna", priezvisko: "Mezik", pohlavie: "z",
        sobas: { s: "ropjak-peter-1898" },
        otec: "mezik-mike",
        matka: "mezik-susie",
        zdroje: [Z.mh_b]
      },
      {
        id: "mezik-mike", vetva: "knap", meno: "Mike", priezvisko: "Mezik", pohlavie: "m",
        sobas: { s: "mezik-susie" },
        zdroje: [Z.mh_b]
      },
      {
        id: "mezik-susie", vetva: "knap", meno: "Susie", priezvisko: "Mezik", pohlavie: "z",
        sobas: { s: "mezik-mike" },
        zdroje: [Z.mh_b]
      },
      {
        id: "mezik-pauline", vetva: "knap", meno: "Pauline", priezvisko: "Mezik", pohlavie: "z",
        otec: "mezik-mike",
        matka: "mezik-susie",
        zdroje: [Z.mh_b]
      },
      {
        id: "repiasova-maria", vetva: "knap", meno: "Maria", priezvisko: "Repiasova", pohlavie: "z",
        sobas: { s: "knap-jan-1895" },
        zdroje: [Z.mh_b]
      },
      {
        id: "knap-ondrej", vetva: "knap", meno: "Ondrej", priezvisko: "Knap", pohlavie: "m",
        otec: "knap-jan-1895",
        matka: "repiasova-maria",
        zdroje: [Z.mh_b]
      },
      {
        id: "pustinger-mary", vetva: "knap", meno: "Mary", priezvisko: "Pustinger", pohlavie: "z",
        sobas: { datum: "1889-01-12", miesto: "Allegheny,​ Pennsylvania,​ United States", s: "ropjak-johanes-1860" },
        zdroje: [Z.mh_b]
      },
      {
        id: "meredith", vetva: "knap", priezvisko: "Meredith", pohlavie: "m", zijuci: true,
        sobas: { s: "ropjakova-josephine-1927" },
        zdroje: [Z.mh_b]
      }
    ]
  };
})();
