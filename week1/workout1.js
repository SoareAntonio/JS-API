const number1=10;
const number2=0;
const operator='/';
let result;
switch(operator)
{ case '+':
  result=number1+number2;
  break;
  case '-':
  result=number1-number2;
  break;
  case '*':
  result=number1*number2;
  break;
  case '/':
  if(number2!=0)
  result=number1/number2;
  else {
    result="Eroare:impartire la zero";
  }
  break;
  default :
  result="Operator necunoscut";
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

const number=-17;
let semn;
if(number<0)
{
  semn=`negativ`;
}
else if(number>0){
  semn=`pozitiv`;
}
else {
  semn=`zero`;
}

let paritate=(number%2==0)?"par":"impar";
let prim="prim";
if(number>0)
{
for(let i=2;i<=number/2;i++){
  if(number%2==0){
    prim="nu prim"
  }
}
}
else prim="nu prim";

console.log(`Numarul ${number} este ${semn} , ${paritate} , ${prim}`);

let temperature=23;
let unity='C';
let convertedTemperature;
let destinationUnit;
switch(unity){
  case 'C':
  convertedTemperature=temperature*9/5 +32;
  destinationUnit='F';
  break;
  case 'F':
  convertedTemperature=(temperature-32)*5/9;
  destinationUnit='C';
  break;
  
}

console.log(
  `${temperature} ${unity} este echivalent cu ${convertedTemperature.toFixed(2)} ${destinationUnit}`
);


console.log(`Tabelul de înmulțire pentru ${number}:`);

for (let i = 1; i <= 10; i++) {
  const produs = number * i;
  console.log(`${number} x ${i} = ${produs}`);
}

const secretNumber=Math.floor(Math.random() * 100) +1;
const guesses=[50,75,62,68,67];
let attempts=0;
let guessed=false;

console.log('Bine ai venit la Jocul de Ghicit Numarul!');
console.log('Incerc sa ghicesc un numar intre 1 si 100');

for(const guess of guesses){
  attempts++;
  console.log(`Încercarea ${attempts}: ai ghicit ${guess}`);
}