const { useState } = require("react")

const items=[
  {name:'Bike', price:100 },
  {name:'TV' , price:200 },
  {name:'Album', price:10 },
  {name:'Book' , price:5 },
  {name:'Phone', price:500 },
  {name:'Computer' , price:1000 },
  {name:'Keyboard', price:25 },
  
]

const filteredItems = items.filter((item) =>{
  return item.price <= 100
})

const itemNames = items.map((item) => {
  return item.name
})

const foundItem = items.find((item) => {
  return item.price===1000
})

items.forEach((item) => {
  console.log(item.price)
})

const hasInexpensiveItems = items.some((item) =>{
  return item.price <=100
})

const hasInexpensiveItems2 = items.every((item) =>{
  return item.price <=100
})

//currentTotal e folosit pentru iteratia
const total= items.reduce((currentTotal ,item) => {
  return item.price + currentTotal
},0);

const iteme=[1,2,3,4,5];

const includesTwo= iteme.includes(2);

const users=[
  {id:1,name:'Ana',age:25},
  {id:2,name:'Ion',age:17},
  {id:3,name:'Maria',age:30},
]

const namesOfAdults= users
  .filter(({ age }) => age >= 18)
  .map(({ name }) => name)
  .join(',')

console.log(filteredItems);
console.log(itemNames);
console.log(foundItem);
console.log(hasInexpensiveItems);
console.log(total);
console.log(namesOfAdults);

//Pattern comun:Group By
const orders=[
  {id:1,status: 'pending'},
  {id:2,status: 'shipped'},
  {id:3,status: 'pending'},
]

const grouped= orders.reduce((acc,order) =>{
  const {status} = order
  acc[status]=[...(acc[status] ?? []),order];
  return acc;
}, {});

console.log(grouped);


/*🧠 Explicație pas cu pas:
🔁 reduce()
Parcurge fiecare element din orders.

acc (accumulator) e obiectul în care adunăm grupările.

order este comanda curentă.

{} este valoarea inițială a acc.

🧩 const { status } = order
Destructuring: extragem direct status din obiectul order.

🔧 acc[status] = [...(acc[status] ?? []), order]
Ne asigurăm că acc[status] este un array:

Dacă există deja, îl copiem: acc[status]

Dacă nu există, folosim [] ca valoare implicită: acc[status] ?? []

Adăugăm comanda curentă (order) la acel array.

Rezultă un nou array cu toate comenzile pentru acel status.
Este valoarea inițială a lui acc, adică:

„La început, acc este un obiect gol {}. Apoi, pentru fiecare order, îl completăm cu grupări.”

Fără acel {}:

reduce() n-ar ști ce tip de valoare să folosească la început.

Ar folosi implicit primul element din array (orders[0]), ceea ce ar strica complet logica de grupare. */


//useState în React
const [todos,setTodos]= useState([{id:1 ,text:'Learn JS',done:false}]);

const addTodo=(text) =>
  setTodos((t) => [...t,{id:Date.now(), text ,done:false}])

const toggleTodo=(id)=>
  setTodos((t)=>
    t.map((todo) => (todo.id===id ? {...todo,done:!todo.done} :todo ))
);

const clearCompleted=() => setTodos((t) => t.filter((todo) => !todo.done));


/*Perfect! Ai aici un exemplu foarte clar de folosire a useState în React pentru a gestiona o listă de sarcini (to-do list). Hai să explicăm pe înțelesul tău, pas cu pas, ce face fiecare linie:

🔧 1. Inițializarea stării:
js
Copiază
Editează
const [todos, setTodos] = useState([
  { id: 1, text: 'Learn JS', done: false }
]);
Ce face:
Creează o stare todos, care este un array de obiecte.

Fiecare obiect e o sarcină (todo) cu:

id: identificator unic

text: descrierea sarcinii

done: dacă e bifată (completată) sau nu

setTodos este funcția care modifică starea.

➕ 2. Adăugarea unei sarcini:
js
Copiază
Editează
const addTodo = (text) =>
  setTodos((t) => [...t, { id: Date.now(), text, done: false }]);
Explicație:
Primește un text nou de la utilizator.

Folosește setTodos() pentru a actualiza lista.

t este vechiul array (todos).

Creează un nou array cu:

toate elementele vechi: ...t

plus un nou todo generat:

id unic (cu Date.now())

text din argument

done: false implicit

✅ 3. Toggle (bifare/debifare):
js
Copiază
Editează
const toggleTodo = (id) =>
  setTodos((t) =>
    t.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
Explicație:
Primește id-ul unei sarcini.

Parcurge lista cu .map():

Dacă găsește todo cu acel id, întoarce o copie cu done inversat (bifare/debifare).

Altfel, întoarce todo nemodificat.

setTodos() înlocuiește lista veche cu cea nouă.

🧹 4. Ștergerea celor completate:
js
Copiază
Editează
const clearCompleted = () =>
  setTodos((t) => t.filter((todo) => !todo.done));
Explicație:
Păstrează doar sarcinile nebifate.

.filter() elimină toate elementele cu done === true. */