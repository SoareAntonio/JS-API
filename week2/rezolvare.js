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