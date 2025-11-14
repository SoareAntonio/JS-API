function theBiggest(a,b,c)
{
  return Math.max(a,b,c)
}

console.log(theBiggest(239,24,32));

function reverse(str){
  let reverseStr="";
  for(let i=str.length-1;i>=0;i--){
    reverseStr+=str[i];
  }
  return reverseStr;
}

console.log(reverse("programare"));

function filterEven(numbersArray){
  return numbersArray.filter(number => {
    return number % 2 ===0;
  })
}
const mixedNumbers = [15, 22, 31, 40, 55, 66];
console.log("Numere pare din al doilea array:", filterEven(mixedNumbers));

function repeat(str,times){
  return str.repeat(times);
}

function fibonacci(n){
  if(n<=1)return n;
  return fibonacci(n-1)+fibonacci(n-2);
}

function sumaPare(array){
  let suma=0;
  for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
      suma+=array[i];
    }
  }
  return suma;
}

function filtreazaCuvinteLungi(cuvinte) {
  return cuvinte.filter(cuvant => cuvant.length > 5);
}
const lista = ["floare", "pisică", "elefant", "soare", "cai", "avion"];
const result = filtreazaCuvinteLungi(lista);

function inmultesteCuIndex(array) {
  return array.map((numar, index) => numar * index);
}
const num = [5, 10, 15, 20];
const rezultat3 = inmultesteCuIndex(num);
console.log(rezultat3); // [0, 10, 30, 60]

function elementeComune(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const rezultat4 = elementeComune(array1, array2);
console.log(rezultat4); // [3, 4]

function calculeazaVarstaMedie(persoane) {
  if (persoane.length === 0) return 0; // evităm împărțirea la 0

  const sumaVarstelor = persoane.reduce((total, persoana) => total + persoana.age, 0);
  return sumaVarstelor / persoane.length;
}

const car={
  brand:"Toyota",
  model:"Corolla",
  year:2020,
  color:"albastru",

  displayDetails:function(){
    return `Masina este un ${this.brand} ${this.model},fabricat in ${this.year},culoare ${this.color}`;
  }
};

console.log(car.displayDetails());

const person = {
  name: 'Ion Popescu',
  weight: 80, // kg
  height: 1.8, // m

  calculateBMI: function() {
    return this.weight / (this.height * this.height);
  }
};

console.log(`${person.name} are un BMI de ${person.calculateBMI().toFixed(2)}`);


function mergePeople(person1,person2){
  const merged={...person1};//Creezi o copie a primului obiect (shallow copy) în merged
  for(const key in person2){
    if(merged.hasOwnProperty(key)){//Dacă merged are deja acea proprietate, atunci
      merged[key]=[merged[key],person2[key]];//Creezi un array cu ambele valori [person1[key], person2[key]] pentru a nu pierde niciuna.
    }else{
      merged[key]=person2[key];//Dacă cheia nu există deja, adaug-o direct
    }
  }
  return merged;
}
const personA={name:"Ana",age:25,city:"Cluj"};
const personB={name:"Ion",age:30,city:"Engineer"};
console.log(mergePeople(personA,personB));

const deepCopy = JSON.parse(JSON.stringify(original));
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // returnează valoarea dacă nu este obiect
  }

  // Clonare pentru array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  // Clonare pentru obiect
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]); // apel recursiv
    }
  }
  return clone;
}

const bankAccount = {
  owner: "Ion Popescu",
  balance: 1000,

  deposit: function(amount) {
    if (amount <= 0) {
      return "Suma depusă trebuie să fie mai mare decât 0.";
    }
    this.balance += amount;
    return `Depunere reușită: +${amount} RON. Sold curent: ${this.balance} RON.`;
  },

  withdraw: function(amount) {
    if (amount <= 0) {
      return "Suma retrasă trebuie să fie mai mare decât 0.";
    }
    if (amount > this.balance) {
      return `Fonduri insuficiente. Sold disponibil: ${this.balance} RON.`;
    }
    this.balance -= amount;
    return `Retragere reușită: -${amount} RON. Sold curent: ${this.balance} RON.`;
  },

  checkBalance: function() {
    return `Soldul contului pentru ${this.owner} este: ${this.balance} RON.`;
  }
};
console.log(bankAccount.checkBalance());
// Soldul contului pentru Ion Popescu este: 1000 RON.

console.log(bankAccount.deposit(500));
// Depunere reușită: +500 RON. Sold curent: 1500 RON.

console.log(bankAccount.withdraw(200));
// Retragere reușită: -200 RON. Sold curent: 1300 RON.

console.log(bankAccount.withdraw(2000));
// Fonduri insuficiente. Sold disponibil: 1300 RON.

function divideNumbers(a, b) {
  // Verifică dacă ambele argumente sunt numere
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Ambele argumente trebuie să fie numere.");
  }

  // Verifică dacă al doilea argument nu este zero
  if (b === 0) {
    throw new Error("Împărțirea la zero nu este permisă.");
  }

  // Returnează rezultatul împărțirii
  return a / b;
}

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Eroare la parsarea JSON:", error.message);
    return {}; // returnează obiect gol în caz de eroare
  }
}

class FormValidation {
  static validateEmail(email) {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Email invalid: trebuie să conțină '@' și un domeniu valid.");
      }
      return { success: true, message: "Email valid." };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  static validatePhone(phone) {
    try {
      const phoneRegex = /^(?:\+40|0)?7\d{8}$/;
      if (!phoneRegex.test(phone)) {
        throw new Error("Număr de telefon invalid: trebuie să fie în format românesc (ex: +40712345678 sau 0712345678).");
      }
      return { success: true, message: "Număr de telefon valid." };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  static validatePostalCode(code) {
    try {
      const postalCodeRegex = /^\d{6}$/;
      if (!postalCodeRegex.test(code)) {
        throw new Error("Cod poștal invalid: trebuie să conțină exact 6 cifre.");
      }
      return { success: true, message: "Cod poștal valid." };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
console.log(FormValidation.validateEmail("test@exemplu.ro"));
// { success: true, message: 'Email valid.' }

console.log(FormValidation.validatePhone("0712345678"));
// { success: true, message: 'Număr de telefon valid.' }

console.log(FormValidation.validatePostalCode("12345a"));
// { success: false, message: 'Cod poștal invalid: trebuie să conțină exact 6 cifre.' }

async function loadData(url) {
  try {
    const response = await fetch(url);

    // Verifică dacă răspunsul este ok (status 200-299)
    if (!response.ok) {
      throw new Error(`Eroare de rețea: ${response.status} ${response.statusText}`);
    }

    // Încearcă să parseze JSON-ul
    const data = await response.json();
    return data;

  } catch (error) {
    // Dacă e o eroare de rețea sau parsare JSON
    throw new Error(`Nu s-au putut încărca datele: ${error.message}`);
  }
}
loadData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log("Date încărcate:", data);
  })
  .catch(err => {
    console.error("Eroare:", err.message);
  });

  class Logger {
  constructor(storageKey = "logHistory") {
    this.storageKey = storageKey;
    this.maxLogs = 10;
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const entry = { timestamp, level, message };

    // Obține logurile curente din localStorage
    const logs = JSON.parse(localStorage.getItem(this.storageKey)) || [];

    // Adaugă noul log
    logs.push(entry);

    // Păstrează doar ultimele 10 mesaje
    const recentLogs = logs.slice(-this.maxLogs);

    // Salvează înapoi în localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(recentLogs));

    // Afișează în consolă (opțional)
    console[level === "info" ? "log" : level === "warning" ? "warn" : "error"](
      `[${level.toUpperCase()}] ${timestamp} - ${message}`
    );
  }

  info(message) {
    this.log("info", message);
  }

  warning(message) {
    this.log("warning", message);
  }

  error(message) {
    this.log("error", message);
  }

  fatal(message) {
    this.log("fatal", message);
  }

  getLogs() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  clearLogs() {
    localStorage.removeItem(this.storageKey);
  }
}
const logger = new Logger();

logger.info("Aplicația a pornit.");
logger.warning("Memorie aproape plină.");
logger.error("Eroare la încărcarea datelor.");
logger.fatal("Sistemul s-a blocat.");

console.log("Ultimele loguri:", logger.getLogs());

//promises exemple
function walkDog(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const dogWalked=true;
      if(dogWalked){
        resolve("You walk the dog");
      }
      else {
        reject("You didn't walk the dog");
      }
    },2500);
  });
}

function cleanKitchen(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const kitchenCleaned=true;
      if(kitchenCleaned){
        resolve("You clean the kitchen");
      }
      else {
        reject("You didn't clean the kitchen");
      }
    },1500);
  });
}

function takeOutTrash(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const trashTakenOut=false;
      if(trashTakenOut){
        resolve("You take the trash out");
      }
      else {
        reject("You didn't take the trash out");
      }
    },500);
  });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return takeOutTrash()})
          .then(value => {console.log(value); console.log("bravo")})
          .catch(error => console.error(error));

//2.
const inventory=[
  {id:1,name:'Laptop',price:2500,quantity:5},
  {id:2,name:'Telefon',price:1200,quantity:10},
  {id:3,name:'Tableta',price:800,quantity:8},
]
// Adaugă un produs nou în inventar
function addProduct(inventory, product) {
  const existingProduct=inventory.find(p => p.id === product.id)
  if(existingProduct){
    throw new Error(`Produsul cu ID ${product.id} exista deja in inventar`)
  }
  inventory.push(product);
  return inventory;
}

// Găsește un produs după ID
function findProduct(inventory, id) {
  const product= inventory.find(p => p.id === id)
  if(!product){
    return null;
  }
  return product
}

// Actualizează cantitatea unui produs
function updateQuantity(inventory, id, newQuantity) {
  const product = findProduct(inventory, id);
  if (!product) {
    throw new Error(`Produsul cu ID ${id} nu a fost gasit`)
  } 
  product.quantity=newQuantity
  return inventory
}

// Calculează valoarea totală a inventarului
function calculateTotalValue(inventory) {
  return inventory.reduce
    ((total, item) => total + item.price * item.quantity, 0);
}

function deleteProduct(inventory, id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error (`Produsul cu ID-ul ${id} a fost șters.`);
  }
  inventory.splice(productIndex,1)
  return inventory
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

//4.
class ValidationError extends Error{
  constructor(message,field){
    super(message)
    this.name='ValidationError'
    this.field=field
  }
}

function validateUser(user){
  if(!user.name|| user.name.length<3){
    throw new ValidationError(
      'Numele trebuie sa aiba cel putin 3 caractere',
      'name'
    )
  }

  if(typeof user.age !== 'number'){
    throw new ValidationError('Varsta trebuie sa fie un numar','age')
  }

  if(user.age<18 || user.age > 120){
    throw new ValidationError('Varsta trebuie sa fie intre 18 si 20','age')
  }

  return true;
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

//5
const taskManager = {
  tasks: [],
  currentId: 0,

  addTask(title, description, priority) {
    if (!title || title.trim()==='') {
      throw new Error("Titlul sarcinii nu poate fi gol");
    }

    if(priority<1 || priority>3 || !Number.isInteger(priority)){
      throw new Error('Prioritatea trebuie sa fie intre 1 si 3')
    }
    const id=++this.currentId;
  const task = {
      id,
      title,
      description,
      priority,
      completed: false,
      dateCreated:new Date(),
    };

    this.tasks.push(task);
    return newTask
  },

  deleteTask(id) {
  const index = this.tasks.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error(`Nu există nicio sarcină cu ID-ul ${id}.`);
  }

  const deletedTask=this.tasks[index]
  this.tasks.splice(index, 1);
  return deletedTask
  },

  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) 
      throw new Error(`Sarcina cu ID-ul ${id} nu există.`);
    task.completed = true;
    return task;
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

