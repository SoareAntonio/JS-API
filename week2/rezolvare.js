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