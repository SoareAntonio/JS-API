/* Exercițiul 1: Creează o funcție care construiește URL-uri cu query parameters pentru un API de căutare. Funcția să accepte parametri precum search, page, limit, sortBy.*/
function buildSearchURL(baseURL, { search = '', page = 1, limit = 10, sortBy = 'relevance' } = {} ) {
  const params = new URLSearchParams();
  
  if(search) params.append('search',search);
  if(page) params.append('page',page);
  if(limit) params.append('limit',limit);
  if(sortBy) params.append('sortBy',sortBy);

  return `${baseURL}?${params.toString()}`;
}

/*Acesta este doar un string obligatoriu (fără valoare implicită). Ex: "https://api.example.com/search".
Punem valori implicite pentru fiecare câmp – dacă utilizatorul nu trimite un anumit câmp, se folosește valoarea default:
= {} – foarte important: dacă utilizatorul nu trimite deloc al doilea parametru, funcția tot funcționează, pentru că îl înlocuiește cu un obiect gol.


Diferență față de set():
append() ➜ adaugă o valoare în plus (chiar dacă cheia există deja)
Adaugă o pereche cheie=valoare în șirul de parametri.

Dacă cheia există deja, NU o suprascrie, ci o adaugă din nou (poți avea mai multe instanțe ale aceleiași chei).

set() ➜ înlocuiește valoarea pentru o cheie deja existentă

Ce este URLSearchParams
Este o clasă nativă în JavaScript (în browser și în Node.js) care te ajută să creezi, editezi și encodezi automat query string-uri (adică partea aia după ? în URL).
Creează un obiect gol, în care poți adăuga parametri unul câte unul, ca într-un dicționar, dar cu encode automat:
Pentru că:

îți scapă de grijile legate de &, =, ? etc. – totul e gestionat corect și automat

face encode automat pentru caractere speciale: spații, diacritice, &, = etc.
*/


const url=buildSearchURL('https://api.example.com/search',{
  search:'javascript',
  page:2,
  limit:20,
  sortBy:'date'
});

console.log(url);
// https://api.example.com/search?search=javascript&page=2&limit=20&sortBy=date



/*Exercițiul 2: Implementează o funcție care analizează un răspuns HTTP și returnează informații structurate despre status, headers și corp. */
async function analyzeResponse(response) {
  const contentType = response.headers.get('Content-Type') || '';

  let body;
  try {
    if (contentType.includes('application/json')) {
      body = await response.json();
    } else if (contentType.includes('text/')) {
      body = await response.text();
    } else {
      body = await response.blob(); // fallback pentru imagini, PDF etc.
    }
  } catch (err) {
    body = null;
  }

  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body
  };
}

async function test() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const result = await analyzeResponse(response);
  console.log(result);
}

test();
/*Cum funcționează:
Extrage tipul conținutului (Content-Type)
Verifică header-ul Content-Type pentru a decide cum să proceseze body.
Parsează body-ul în funcție de tip:
JSON (application/json) → folosește response.json().
Text (text/plain, text/html) → folosește response.text().
Alt tip (e.g., imagini, PDF) → folosește response.blob().
Returnează un obiect structurat cu:
status: Codul HTTP (e.g., 200).
headers: Toate headerele (convertite din Headers la obiect JS).
body: Conținutul parsat (sau null dacă există eroare). */


/*Exercițiul 3: Creează un mic sistem de cache pentru cererile HTTP care: 
Salvează răspunsurile pe baza URL-ului
Respectă header-ul Cache-Control
Invalidează cache-ul după expirare */

/* Cum funcționează
Map = memorie locală, rapidă, cu cheie url.

Cache-Control: max-age=10 => salvează în cache timp de 10 secunde.

response.clone() = obligatoriu, deoarece un Response poate fi citit o singură dată.

Verificăm Date.now() < expiration => validăm că entry-ul este "viu". */


const httpCache = new Map();

async function fetchWithCache(url) {
  const now = Date.now();
  const cached = httpCache.get(url);

  // Verificăm dacă există în cache și dacă nu a expirat
  if (cached && cached.expires > now) {
    return cached.response.clone();
  }

  // Dacă nu e în cache sau a expirat: facem fetch
  const response = await fetch(url);
  const cloned = response.clone();// copiem pentru a putea salva și returna

  // Extragem din header directiva `max-age`
  const $headers = response.headers;
  const cacheControl = $headers.get('Cache-Control');

  let maxAge = 0;

  if (cacheControl) {
    const match = cacheControl.match(/max-age=(\d+)/);
    if (match) {
      maxAge = parseInt(match[1], 10);
    }
  }

  if(maxAge>0){
    httpCache.set(url, {
    response: cloned,
    expires: now + maxAge * 1000,
  });
    console.log(`[CACHE STORE] ${url} (exp: ${maxAge}s)`);
  } else {
    console.log(`[NO CACHE] ${url}`);
  }
  

  return response;
}

//ecemplu de folosire:
(async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  const res1 = await cachedFetch(url);
  const data1 = await res1.json();

  const res2 = await cachedFetch(url); // dacă nu a expirat, vine din cache
  const data2 = await res2.json();

  console.log(data1, data2);
})();

/*Exercițiul 4: Implementează o funcție care convertește diferite formate de date (query string, form data, JSON) între ele. */
function convertData(input, fromType, toType) {
  let obj;

  // Parsăm în obiect JS
  switch (fromType) {
    case 'query':
      obj = Object.fromEntries(new URLSearchParams(input));
      break;
    case 'form':
      obj = Object.fromEntries(new FormData(input)); // input e un <form> element
      break;
    case 'json':
      obj = JSON.parse(input);
      break;
    default:
      throw new Error('Format de intrare necunoscut');
  }

  // Convertim din obiect JS în formatul dorit
  switch (toType) {
    case 'query':
      return new URLSearchParams(obj).toString();
    case 'form':
      const form = new FormData();
      for (let key in obj) form.append(key, obj[key]);
      return form;
    case 'json':
      return JSON.stringify(obj, null, 2);
    default:
      throw new Error('Format de ieșire necunoscut');
  }
}

// Query string -> JSON
let query = "name=Antonio&age=21";
console.log(convertData(query, "query", "json"));

// JSON -> Query string
let json = '{"name":"Ana","job":"Dev"}';
console.log(convertData(json, "json", "query"));

// Form element -> JSON
let formEl = document.querySelector('form');
let jsonFromForm = convertData(formEl, "form", "json");

