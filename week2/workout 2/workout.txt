/*1.Creează un array cu minim 10 numere.
2. Implementează următoarele funcții:
○ calculateAverage(numbers) - returnează media numerelor
○ findMax(numbers) - returnează cel mai mare număr
○ findMin(numbers) - returnează cel mai mic număr
○ calculateSum(numbers) - returnează suma numerelor
3. Apelează funcțiile și afișează rezultatele în consolă.
Adaugă o funcție suplimentară filterEven(numbers) care returnează un nou array
conținând doar numerele pare.*/
const numbers=[12,7,19,23,8,10,17,22,14,9]

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function findMax(numbers) {
  return Math.max(...numbers);
}

function findMin(numbers) {
  return Math.min(...numbers);
}

function calculateSum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function filterEven(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log('Statistici pentru array-ul:',numbers);
console.log('Media:',calculateAverage(numbers));
console.log('Maximul:',findMax(numbers));
console.log('Minimul:',findMin(numbers));
console.log('Suma:',calculateSum(numbers));
console.log("Numere pare:", filterEven(numbers));

/*Creează un array de obiecte, fiecare reprezentând un produs cu proprietățile: id, name,
price, quantity.
2. Implementează următoarele funcții:
○ addProduct(inventory, product) - adaugă un produs nou în inventar
○ findProduct(inventory, id) - găsește un produs după ID
○ updateQuantity(inventory, id, newQuantity) - actualizează
cantitatea unui produs
○ calculateTotalValue(inventory) - calculează valoarea totală a
inventarului (sumă de price \* quantity)
Adaugă funcționalitatea de a șterge un produs din inventar folosind funcția
deleteProduct(inventory, id).*/

const inventory=[
  {id:1,name:'Laptop',price:2500,quantity:5},
  {id:2,name:'Telefon',price:1200,quantity:10},
  {id:3,name:'Tableta',price:800,quantity:8},
]
// Adaugă un produs nou în inventar
function addProduct(inventory, product) {
  inventory.push(product);
}

// Găsește un produs după ID
function findProduct(inventory, id) {
  return inventory.find(item => item.id === id);
}

// Actualizează cantitatea unui produs
function updateQuantity(inventory, id, newQuantity) {
  const product = findProduct(inventory, id);
  if (product) {
    product.quantity = newQuantity;
  } else {
    console.warn(`Produsul cu ID-ul ${id} nu a fost găsit.`);
  }
}

// Calculează valoarea totală a inventarului
function calculateTotalValue(inventory) {
  return inventory.reduce((total, item) => total + item.price * item.quantity, 0);
}

function deleteProduct(inventory, id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index !== -1) {
    inventory.splice(index, 1);
    console.log(`Produsul cu ID-ul ${id} a fost șters.`);
  } else {
    console.warn(`Produsul cu ID-ul ${id} nu a fost găsit.`);
  }
}

console.log('Inventarul initial:',inventory);

const newProduct={id:4,name:'Monitor',price:700,quantity:3}
addProduct(inventory,newProduct);
console.log('Inventar dupa adaugare:',inventory);

console.log('Produsul cu ID 2:',findProduct(inventory,2));

updateQuantity(inventory,3,12);
console.log('Inventar dupa actualizare:',inventory);

deleteProduct(inventory, 2);
console.log("Inventar după ștergere:", inventory);
console.log('Valoarea totala a inventarului',calculateTotalValue(inventory));

/*3.Ai un array de obiecte reprezentând studenți.
2. Folosind metode de array precum map, filter, reduce, și sort, realizează următoarele
operații:
○ Filtrează studenții care au note de trecere (peste 5)
○ Sortează studenții după medie, în ordine descrescătoare
○ Transformă array-ul pentru a include doar numele și media fiecărui student
○ Calculează media generală a tuturor studenților*/
const students=[
  {name:'Ana Ionescu',age:21,average:9.5},
  {name:'Mihai Popescu',age:22,average:8.3},
  {name:'Elena Dumitrescu',age:20,average:7.8},
  {name:'Andrei Stanescu',age:23,average:6.4},
  {name:'Maria Constantinescu',age:21,average:9.1},
  {name:'Ion Vasilescu',age:22,average:5.2},
  {name:'Ioana Munteanu',age:20,average:4.9},
  
]

const passingStudents = students.filter(student => student.average > 5);

const sortedStudents = [...students].sort((a, b) => b.average - a.average);

const nameAndAverage = students.map(student => ({
  name: student.name,
  average: student.average
}));

const overallAverage = students.reduce((suma, student) => suma + student.average, 0) / students.length;


console.log('Studenti cu note de trecere:',passingStudents)
console.log("Studenți sortați dupa medie:", sortedStudents);
console.log("Nume și medie:", nameAndAverage);
console.log("Media generală:", overallAverage);

/*4.
1. Creează o funcție validateUser(user) care verifică dacă un obiect utilizator este
valid.
2. Verifică următoarele reguli folosind gestionarea erorilor:
○ Numele trebuie să aibă cel puțin 3 caractere
○ Email-ul trebuie să conțină caracterul '@'
○ Vârsta trebuie să fie un număr între 18 și 120
3. Aruncă erori personalizate pentru fiecare condiție neîndeplinită.
4. Tratează erorile folosind un bloc try-catch.*/

class ValidationError extends Error{
  constructor(message,field){
    super(message)
    this.name='ValidationError'
    this.field=field
  }
}

function validateUser(user) {
  if (typeof user.name !== 'string' || user.name.length < 3) {
    throw new ValidationError('name', 'Numele trebuie să aibă cel puțin 3 caractere.');
  }

  if (typeof user.email !== 'string' || !user.email.includes('@')) {
    throw new ValidationError('email', 'Email-ul trebuie să conțină caracterul "@"');
  }

  if (typeof user.age !== 'number' || user.age < 18 || user.age > 120) {
    throw new ValidationError('age', 'Vârsta trebuie să fie un număr între 18 și 120');
  }
}
  

const users = [
  { name: 'Ana Popescu', email: 'ana@example.com', age: 25 },
  { name: 'Io', email: 'ion-example.com', age: 17 },
  { name: 'Maria Ionescu', email: 'maria@example.com', age: 130 },
  { name: 'Gheorghe Popa', email: 'gheorghe@example.com', age: 'treizeci' }
];

// Verifică fiecare utilizator
users.forEach((user, index) => {
  console.log(`\nVerificare utilizator ${index + 1}:`, user);
  try {
    validateUser(user);
    console.log('✅ Utilizator valid!');
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`❌ Eroare de validare pentru câmpul ${error.field}: ${error.message}`);
    } else {
      console.log(`❌ Eroare neașteptată: ${error.message}`);
    }
  }
});

/*5.
Creează o mini-aplicație pentru gestionarea sarcinilor (to-do list) care să folosească toate
conceptele învățate.
Cerințe:
1. Creează un obiect taskManager care să aibă următoarele funcționalități:
○ Adăugarea unei sarcini noi (cu proprietățile: id, title, description, priority,
completed)
○ Marcarea unei sarcini ca terminată
○ Ștergerea unei sarcini
○ Filtrarea sarcinilor după stare (completed/uncompleted)
○ Sortarea sarcinilor după prioritate
○ Calcularea procentajului de sarcini finalizate
2. Implementează gestionarea erorilor pentru cazuri precum:
○ ID duplicat
○ Sarcină inexistentă
○ Date invalide*/
const taskManager = {
  tasks: [],
  currentId: 1,

  addTask(title, description, priority) {
    if (!title || !description || typeof priority !== 'number') {
      throw new Error("Date invalide pentru sarcină.");
    }

  const task = {
      id: this.currentId++,
      title,
      description,
      priority,
      completed: false
    };

    this.tasks.push(task);
  },

  deleteTask(id) {
  const index = this.tasks.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error(`Nu există nicio sarcină cu ID-ul ${id}.`);
  }
  this.tasks.splice(index, 1);
  },

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new Error(`Sarcina cu ID-ul ${id} nu există.`);
    task.completed = true;
  },

  sortByPriority() {
    return [...this.tasks].sort((a, b) => a.priority - b.priority);
  },

  filterTasks(completed=true) {
    return this.tasks.filter(t => t.completed === completed);
  },

  completionPercentage() {
    if (this.tasks.length === 0) return 0;
    const completedCount = this.tasks.filter(t => t.completed).length;
    return Math.round((completedCount / this.tasks.length) * 100);
  }
};



try {
  // Adaugă sarcini
  taskManager.addTask('Învață JavaScript', 'Studiază funcțiile, array-urile și obiectele', 2);
  taskManager.addTask('Cumpărături', 'Lapte, pâine, ouă', 1);
  taskManager.addTask('Plimbare', '30 de minute în parc', 3);

  console.log('Sarcini inițiale:', taskManager.tasks);

  // Marchează sarcina ca terminată
  taskManager.completeTask(2);
  console.log('După completare:', taskManager.tasks);

  // Sortează după prioritate
  const sortedTasks = taskManager.sortByPriority();
  console.log('Sarcini sortate după prioritate:', sortedTasks);

  // Filtrează sarcinile completate
  const completedTasks = taskManager.filterTasks(true);
  console.log('Sarcini finalizate:', completedTasks);

  taskManager.deleteTask(1);
  console.log('După ștergerea sarcinii cu ID 1:', taskManager.tasks);
  
  // Procentaj de completare
  console.log(
    'Procent de sarcini finalizate:', taskManager.completionPercentage() + '%'
  );
} catch (error) {
  console.error('A apărut o eroare:', error.message);
}




