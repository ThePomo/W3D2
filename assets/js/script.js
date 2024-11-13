/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
const changetitle = document.getElementById("title");
const changeTitle = function () {
  return (title.innerText = "EPICODE");
};
changeTitle();

/* esercizio corretto 
const changeTitle = function (){
const title = document.querySelector('h1');
title.innerText = 'titolo';
};
changeTitle();

/* ESERCIZIO 2
   Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
const addClass = document.getElementById("title");
const addClassToTitle = function () {
  addClass.classList.add("myHeading");
};
addClassToTitle();

/*esercizio corretto
const addClassToTitle = function () {
const title=  document.querySelector ('h1');
title.classList.add('myHeading');


/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
const changePcontent = function () {
  document.querySelectorAll(".change").forEach((element) => {
    element.innerText = " Ciao mi chiamo Giuseppe";
  });
};
changePcontent();

/* ESERCIZIO 4
   Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
  */

const changeUrls = function () {
  const link = document.querySelectorAll("a:not(footer a)");

  link.forEach((element) => {
    element.href = "https://www.google.com/";
  });
};
changeUrls();

/* ESERCIZIO 5
   Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const secondList = document.getElementById("secondList");
  const newList = document.createElement("li");
  newList.innerText = "esercizio 5";
  secondList.appendChild(newList);
};
addToTheSecond();

/* ESERCIZIO 6
   Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/
const addParagraph = function () {
  const firstDiv = document.querySelectorAll("div")[0];
  let newParagraph = document.createElement("p");
  newParagraph.innerText = "nuovo pragrafo";
  firstDiv.appendChild(newParagraph);
};
addParagraph(); /*chiedere al prof perché non va

/* ESERCIZIO 7
   Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  const firstUl = document.querySelector("#firstList");
  if (firstUl) {
  }
};
hideFirstUl();

/* ESERCIZIO 8 
   Scrivi una funzione che renda verde il background di ogni lista non ordinata
  */

const paintItGreen = function () {};

/* ESERCIZIO 9
   Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
  */

const makeItClickable = function () {};

/* ESERCIZIO 10
   Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
  */

const revealFooterLink = function () {};

/* ESERCIZIO 11
   Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
   La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {};

/* ESERCIZIO 12
   Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {};

/* ESERCIZIO 14
  Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
  Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
  Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {};
