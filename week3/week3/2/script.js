//a) Modifică conținutul textual al titlului (h1) în "Manipulare DOM în JavaScript".
const title=document.querySelector('title');
title.innerText=`Manipulare DOM în JavaScript`;

//b) Modifică conținutul HTML al div-ului cu id="content" pentru a include un titlu h2 cu textul "Secțiune modificată" și un paragraf nou.

const specific=document.querySelector('#content')
specific.innerHTML=` <h2>Secțiune modificată</h2>
  <p>Acesta este un paragraf nou adăugat.</p>>`;

/*c) Schimbă atributele imaginii:
    
    - Modifică src pentru a indica către "https://placekitten.com/200/300"
    - Schimbă alt în "O pisică drăguță"
    - Setează lățimea la 300px*/

const img=document.querySelector('#image');
img.src = "https://placekitten.com/200/300";
img.alt = "O pisică drăguță";
img.width = 300;

/* d) Modifică atributele link-ului:
    
    - Schimbă href în "[https://www.example.org](https://www.example.org/)"
    - Adaugă un atribut target cu valoarea "\_blank"
    - Adaugă un atribut title cu textul "Vizitează [example.org](http://example.org/)"*/

const link=document.querySelector('#link');
link.href = "https://www.example.org";
link.target = "_blank";
link.title = "Vizitează example.org";

/*e) Manipulează clasele elementului cu id="classes-demo":
    
    - Adaugă clasa "highlight"
    - Verifică dacă are clasa "box" și afișează rezultatul în consolă
    - Elimină clasa "box"
    - Comută clasa "hidden" (adaugă și elimină prin apăsări repetate) */

const el=document.querySelector('#classes-demo');
el.classList.add("highlight");
console.log("Are clasa 'box'?",el.classList.contains('box'));
el.classList.remove("box");
el.classList.toggle("hidden");

/*  f) Modifică stilurile inline ale elementului cu id="styles-demo":
    
    - Setează culoarea textului la albastru
    - Adaugă o bordură punctată de 2px
    - Schimbă font-size la 18px
    - Adaugă un padding de 10px*/

const styleDemo=document.querySelector("#styles-demo");
styleDemo.style.color = "blue";
styleDemo.style.border = "2px dotted black";
styleDemo.style.fontSize = "18px";
styleDemo.style.padding = "10px";

/* g) Interacționează cu formularul:
    
    - Populează câmpul de nume cu "Ion Popescu"
    - Setează emailul la "[ion.popescu@example.com](mailto:ion.popescu@example.com)"
    - Bifează checkbox-ul de abonare
    - Selectează "România" din dropdown
    - Adaugă un event listener pentru butonul "Trimite" care afișează un mesaj de succes*/

// Completează câmpurile formularului
document.querySelector("input[name='name']").value = "Ion Popescu";
document.querySelector("input[type='email']").value = "ion.popescu@example.com";
document.querySelector("input[type='checkbox'][name='subscribe']").checked = true;
document.querySelector("select[name='country']").value = "ro";

// Event listener pe butonul "Trimite"
document.querySelector("button[type='submit']").addEventListener("click", function (e) {
  e.preventDefault(); // previne trimiterea reală a formularului
  alert("Formular trimis cu succes!");
});

/*  h) Manipulează lista de elemente:
    
    - Adaugă 3 elemente noi la lista existentă
    - Șterge primul element al listei
    - Clonează ultimul element și adaugă-l la sfârșitul listei */

const lista=document.querySelector("ul");

for(let i=1;i<=3;i++){
  const li =document.createElement("li");
  li.textContent=`Element nou ${i}`;
  lista.appendChild(li);
}

lista.removeChild(lista.firstElementChild);

const ultimul = lista.lastElementChild;
const clonat = ultimul.cloneNode(true); // true = clonează și conținutul
lista.appendChild(clonat);

//Bonus: Creează dinamic un tabel cu 3 coloane și 4 rânduri, populează-l cu date și adaugă-l în div-ul cu id="manipulation-container".

const container = document.querySelector("#manipulation-container");

// Creează tabelul
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";

// Creează antetul
const headerRow = document.createElement("tr");
["Nume", "Prenume", "Vârstă"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "5px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Creează 3 rânduri de date (total: 4 cu tot cu antet)
const date = [
  ["Popescu", "Ion", "25"],
  ["Ionescu", "Maria", "30"],
  ["Georgescu", "Ana", "22"]
];

date.forEach(linie => {
  const tr = document.createElement("tr");
  linie.forEach(valoare => {
    const td = document.createElement("td");
    td.textContent = valoare;
    td.style.border = "1px solid black";
    td.style.padding = "5px";
    tr.appendChild(td);
  });
  table.appendChild(tr);
});

// Adaugă tabelul în container
container.appendChild(table);
