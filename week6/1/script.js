function sum(a,b){
  return a+b;
}

let sum2=(a,b) => a+b


function isPositive(number){
  return number >=0
}

let isPositive2 = number =>{
  return number >=0
}

function randomNumber() {
  return Math.random
}

let randomNumber2=() => {
  return Math.random
}

document.addEventListener('click',function(){
  console.log('Click')
})

document.addEventListener('click',() =>{
  console.log('Click')
})

class Person{
  constructor(name){
    this.name=name
  }

  printNameArrow(){
    setTimeout(()=>{
      console.log('Arrow:' + this.name)
    },100)
  }

  printNameFunction(){
    setTimeout(function(){
      console.log('Function:' + this.name)
    },100)
  }
}

let person=new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name);

function multiply(x,y){
  return x*y
}

let multiply2=(x,y)=> x*y;


function isEven(number){
  if(number % 2 === 0){
    return true;
  }else {
    return false;
  }
}

let isEven2= number => number % 2 === 0;


function createPerson(name,age){
  return {
    name:name,
    age:age,
    greet:function(){
      return `Salut , sunt ${this.name}`
    },
  }
}

const createPerson2 = (name, age) => ({
  name,
  age,
  greet() {
    return `Salut , sunt ${this.name}`;
  },
});

//greet nu este arrow function, pentru că are nevoie de propriul this.
//Dacă l-ai face arrow (greet: () => ...), this.name ar fi undefined.

const product = {
  name:'Laptop',
  price:2500,
  currency:'RON',
  isStock:true,
}

let  mesajProdus = `${product.name} costa ${product.price} ${product.currency} si este ${product.isStock ? 'in stoc' : 'indisponibil'}`;

console.log(message);

//creaza un string html care sa contina toate informatiile
const htmlString = `
  <div class="product">
    <h2>${product.name}</h2>
    <p>Pret: ${product.price} ${product.currency}</p>
    <p>Status: ${product.isStock ? 'In stoc' : 'Indisponibil'}</p>
  </div>
`;

console.log(htmlString);

//mesaj conditionat "Laptop (2500 RON) - Disponibil" sau "Laptop (2500 RON) - Indisponibil"
const mesaj = `${product.name} (${product.price} ${product.currency}) - ${product.isStock ? 'Disponibil' : 'Indisponibil'}`;

console.log(mesaj); // "Laptop (2500 RON) - Disponibil"

//Creează o funcție arrow care să folosească template literals pentru formatarea unei liste de cumpărături:
const shoppingList = [
  {item: 'mere',quantity:5 ,price:3.5},
  {item: 'paine',quantity:2 ,price:2.0},
  {item: 'lapte',quantity:1 ,price:4.5},
]

/*functia should return 
lista de cumparaturi
5x mere (3.50 RON fiecare)
2x paine (2.00 RON fiecare)
1x lapte (4.50 RON fiecare)
total :27.50 RON */

const formatSHlist = list =>{
  const lines=list.map(product =>
    `${product.quantity}x ${product.item} (${product.price.toFixed(2)} RON fiecare)`
  );

  const total= list.reduce((sum,p) => sum + p.quantity * p.price , 0).toFixed(2);

  return `Lista de cumparaturi\n${lines.join('\n')}\nTotal :${total} RON`;
}

console.log(formatSHlist(shoppingList));