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