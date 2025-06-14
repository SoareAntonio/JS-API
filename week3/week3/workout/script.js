/*  a) Traversare simplă:
    
    - Selectează elementul h1 și afișează textul său în consolă
    - Găsește toate link-urile din meniu și afișează textul lor
    - Afișează numărul total de paragrafe din document
    - Găsește părintele elementului cu id="itemList" și afișează tagName-ul său*/
  
  // 1. Selectează elementul h1 și afișează textul său în consolă
const h1Element = document.querySelector("h1");
console.log("Titlul h1:", h1Element.textContent);

// 2. Găsește toate link-urile din meniu și afișează textul lor
const menuLinks = document.querySelectorAll("#menu .menu-link");
menuLinks.forEach((link, index) => {
  console.log(`Link ${index + 1}:`, link.textContent);
});

// 3. Afișează numărul total de paragrafe din document
const allParagraphs = document.querySelectorAll("p");
console.log("Număr total de paragrafe:", allParagraphs.length);

// 4. Găsește părintele elementului cu id="itemList" și afișează tagName-ul său
const itemList = document.getElementById("itemList");
const parentOfItemList = itemList.parentElement;
console.log("Tag-ul părintelui lui #itemList:", parentOfItemList.tagName);

/*b) Traversare complexă:
    
    - Pornind de la primul element li din secțiunea 2, navighează până la elementul footer
    - Găsește toate secțiunile care sunt copii direcți ai elementului main
    - Identifică primul și ultimul element copil al elementului cu id="container"
    - Găsește toate elementele li care sunt precedate de un alt element li */

// 1. Pornind de la primul element li din secțiunea 2, navighează până la elementul footer
const firstLi = document.querySelector("#section2 li");
const footer = firstLi.closest("#container").querySelector("#footer");
console.log("Elementul footer găsit pornind de la primul li:", footer);

// 2. Găsește toate secțiunile care sunt copii direcți ai elementului main
const directSections = document.querySelectorAll("main > section");
console.log("Secțiuni copii direcți ai <main>:");
directSections.forEach(sec => console.log(sec.id));

// 3. Identifică primul și ultimul element copil al elementului cu id="container"
const container = document.getElementById("container");
const firstChild = container.firstElementChild;
const lastChild = container.lastElementChild;
console.log("Primul copil al #container:", firstChild.tagName);
console.log("Ultimul copil al #container:", lastChild.tagName);

// 4. Găsește toate elementele li care sunt precedate de un alt element li
const precededLi = document.querySelectorAll("li + li");
console.log("Elemente <li> precedate de un alt <li>:");
precededLi.forEach(li => console.log(li.textContent));

/* c) Modificarea DOM-ului:
    
    - La click pe butonul "Adaugă element", adaugă un nou paragraf în secțiunea 1
    - La click pe butonul "Elimină ultimul element", elimină ultimul element li din lista
    - La click pe butonul "Mută elementul", mută div-ul cu id="moveTarget" în div-ul cu id="destination"
    - La click pe butonul "Clonează elementul", creează o copie a div-ului cu id="moveTarget" și adaug-o în div-ul cu id="destination" */

  // 1. Adaugă un nou paragraf în secțiunea 1 la click pe "Adaugă element"
document.getElementById("addButton").addEventListener("click", () => {
  const section1 = document.getElementById("section1");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Paragraf adăugat dinamic.";
  section1.appendChild(newParagraph);
});

// 2. Elimină ultimul <li> din listă la click pe "Elimină ultimul element"
document.getElementById("removeButton").addEventListener("click", () => {
  const list = document.getElementById("itemList");
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
});

// 3. Mută div-ul cu id="moveTarget" în div-ul cu id="destination"
document.getElementById("moveButton").addEventListener("click", () => {
  const target = document.getElementById("moveTarget");
  const destination = document.getElementById("destination");
  destination.appendChild(target);
});

// 4. Clonează div-ul cu id="moveTarget" și adaugă-l în div-ul cu id="destination"
document.getElementById("cloneButton").addEventListener("click", () => {
  const target = document.getElementById("moveTarget");
  const destination = document.getElementById("destination");
  const clone = target.cloneNode(true); // true = clonare profundă (cu tot conținutul)
  destination.appendChild(clone);
});

/* d) Funcționalitate avansată:
    
    - Implementează o funcție care creează un "breadcrumb" (navigare ierarhică) pentru orice element dat, afișând calea sa în arborele DOM
    (de exemplu, pentru un element li din meniu: "html > body > div#container > header > nav > ul#menu > li")
    - Adaugă un nou buton "Generează breadcrumb" care, când este apăsat, afișează breadcrumb-ul pentru elementul cu id="moveTarget" */

function generateBreadcrumb(element) {
  const path = [];

  while (element) {
    let name = element.tagName.toLowerCase();

    if (element.id) {
      name += `#${element.id}`;
    } else if (element.className) {
      const classes = element.className.trim().split(/\s+/).join('.');
      name += `.${classes}`;
    }

    path.unshift(name); // adaugă la început pentru a construi calea de sus în jos
    element = element.parentElement;
  }

  return path.join(" > ");
}
//handler pt buton
document.getElementById("breadcrumbButton").addEventListener("click", () => {
  const target = document.getElementById("moveTarget");
  const breadcrumb = generateBreadcrumb(target);
  document.getElementById("breadcrumbOutput").textContent = breadcrumb;
});

/* Bonus: Implementează o funcționalitate drag & drop simplă pentru elementul cu id="moveTarget":
    - La mousedown pe element, pregătește-l pentru a fi mutat
    - La mousemove, actualizează poziția elementului
    - La mouseup, fixează elementul în noua poziție
    - Adaugă un buton "Resetează poziția" care readuce elementul la poziția inițială
*/
const box = document.getElementById('moveTarget');
const resetBtn = document.getElementById('resetBtn');

// Salvăm poziția inițială
const initialPosition = {
  top: box.offsetTop,
  left: box.offsetLeft
};

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

box.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
  box.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  box.style.left = `${e.clientX - offsetX}px`;
  box.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    box.classList.remove('dragging');
  }
});

resetBtn.addEventListener('click', () => {
  box.style.top = `${initialPosition.top}px`;
  box.style.left = `${initialPosition.left}px`;
});
