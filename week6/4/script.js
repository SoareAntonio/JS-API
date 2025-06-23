class Person {
  constructor (name,age){
    this.name = name;
    this.age =age;
  }

//Este o metodă a instanței (nu statică), adică poate fi apelată doar pe un obiect creat din clasă.
  greet() {
    return `Salut,sunt ${this.name}`
  }

//Este o metodă statică, deci se apelează pe clasă, nu pe obiecte (Person.fromObject(...)).
//Primește un obiect cu proprietăți name și age și creează un nou Person.
  static fromObject({name,age}){
    return new Person (name,age)
  }
}

//super(...) apelează constructorul clasei părinte (Person).
//Cu alte cuvinte, spune: „Execută codul din Person pentru a inițializa name și age
class Student extends Person {
  constructor(name,age,university){
    super(name,age);
    this.university=university;
  }

  info(){
    return `${this.name} studiaza la ${this.university}`
  }
}

const ion= new Student('Ion',21,'UPB');
const ana=new Person ('Ana',26);

console.log(ana.greet());
console.log(ion.greet());


/* Când apeși pe buton, se declanșează o funcție async (asynchronous).
2. Import dinamic (dynamic import)
await import('https://cdn.skypack.dev/canvas-confetti') încarcă la cerere (la runtime, când apeși) librăria canvas-confetti de pe Skypack (un CDN pentru module ES).
Aceasta nu este încărcată la început, ci doar când e nevoie (click pe buton), ceea ce optimizează performanța.

3. Destructurare și redenumire
Din modulul importat, extrage exportul default și îl redenumește local în confetti.

canvas-confetti exportă o funcție default pe care vrem să o folosim.

*/

button.addEventListener('click',async()=>{
  const {default:confetti} = await import(
    '<https://cdn.skypack.dev/canvas-confetti>'
  )
  confetti();
})

//Closures si Lexical Scoping
function createCounter(){
  let count=0
  return () => ++count
  //Returnează o funcție anonimă (arrow function) care la fiecare apel crește și returnează count.
}

const counter=createCounter()
counter()
counter()

//IIFE
const module = (() => {
  const secret='lock'
  return {
    reveal:() => secret,
  }
})()

console.log(module.reveal());

/*Ce se întâmplă?
(() => { ... })() — asta e un IIFE.

Se definește o funcție arrow fără nume.

Se execută imediat prin () de la final.

În interiorul funcției:

Se definește o constantă privată secret = 'lock'.

Se returnează un obiect cu o metodă reveal, care returnează valoarea lui secret.

Rezultatul returnat de funcția imediată e salvat în const module.

🔐 Ce face module.reveal()?
Accesează funcția reveal care știe valoarea lui secret chiar dacă este în afara funcției.

Asta e posibil datorită unui closure — reveal() “ține minte” mediul în care a fost creată */