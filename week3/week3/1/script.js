//Folosind JavaScript, rezolvă următoarele sarcini:
//- Selectează elementul header folosind ID-ul său
const header=document.querySelector('#main-header');
console.log("Header:", header);

//Selectează toate link-urile de navigare folosind clasa lor
const links=document.querySelectorAll('.nav-link');
console.log("Link-uri de navigare:", links);

//- Selectează toate titlurile de secțiuni (h2) folosind clasa lor
const sectionTitles = document.querySelectorAll(".section-title");
console.log("Titluri secțiuni:", sectionTitles);

//- Selectează al doilea paragraf din secțiunea intro
const secondIntroParagraph = document.querySelector("#intro p:nth-of-type(2)");
console.log("Al doilea paragraf din 'intro':", secondIntroParagraph);

//- Selectează toate elementele de listă din info-list
const infoListItems = document.querySelectorAll(".info-list li");
console.log("Elemente din info-list:", infoListItems);

// - Selectează ultimul paragraf din document (cel din footer)*/
const lastParagraph = document.querySelector("footer p");
console.log("Ultimul paragraf (footer):", lastParagraph);


// Creează un script care verifică câte paragrafe cu clasa "important" există în document și afișează acest număr în consolă.
const important=document.querySelectorAll("p.important");
console.log("Număr de paragrafe cu clasa 'important':", important.length);

//Creează un script care să parcurgă toate link-urile din navigare și să afișeze textul lor în consolă.

const navLinks=document.querySelectorAll(".nav-link");   
navLinks.forEach (link =>{
  console.log("Text link:", link.textContent.trim());
});

const body=document.body;
const diver=document.createElement("div");
diver.innerText = "Hello World";
//diver.textContent="Hello World"; asta arata si spatiile

body.append(diver);//adauga continut