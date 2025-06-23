const alphabet=['A','B','C','D','E','F'];
const numbers=['1','2','3','4','5','6'];

// const a=alphabet[0];
// const b=alphabet[1];

const [a,, c, ...rest]=alphabet;
//const newArray = [...alphabet,...numbers];
const newArray=alphabet.concat(numbers);//pentru a le pune pe ambele intr una

console.log(a)
console.log(c)
console.log(rest);

function sumAndMultiply(a,b){
  return [a+b,a*b]
}

//le separam in variabile diferite
const [sum,multiply] = sumAndMultiply(2,3);

const array=sumAndMultiply(2,3);

console.log(sum);
console.log(array);

const personOne={
  name:'Kyle',
  age:24,
  address:{
    city:'Somewhere',
    state:'One of them'
  }
}

const personTwo={
  name:'Sally',
  age:32,
  address:{
    city:'Somewhere else',
    state:'Another one of them'
  }
}

const {name:firstName, age, address:{ city } } = personTwo;
const personThree={...personOne,...personTwo};//pentru a combina doua obiecte

console.log(firstName);
console.log(age);

function printUser({name,age}){
  console.log(`Name is: ${name}. Age is ${age}`);
}

printUser(personOne);

const product={name:'Laptop',price:2500}
const updated={...product,price:2300,stock:5}

console.log(product);
console.log(updated);

const [todos,setTodos]=useState([
  {id:1,text:'Learn React',completed:false},
]);

const toggleTodo = (id) =>{
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? {...todo,completed:!todo.completed} : todo
    )
  )
}

const suma=(...numbers) => numbers.reduce((acc,n)=> acc+n,0);
console.log(sum(1,2,3,4));