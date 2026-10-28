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
 * Dátumy možno zapísať aj neúplne ("1850", "asi 1720", "1850-03").
 */
window.RODOKMEN = {
  vetvy: {
    konarik: { nazov: "Koňařík", koren: "" },
    knap: { nazov: "Knap", koren: "" }
  },
  osoby: []
};
