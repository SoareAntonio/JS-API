// Exercițiul 1: Destructuring Basics
// Extrage valoarea `price` și `inStock` din obiectul `product` de mai jos folosind destructuring.

const product = {
  id: 1,
  name: 'Telefon',
  price: 2000,
  currency: 'RON',
  inStock: true,
}

const {price:priceP, inStock:valueP} = product;

console.log(priceP);
console.log(valueP);

// 1. Creează o funcție `mergeArrays(a, b)` care întoarce un nou array ce conține elementele din `a` urmate de `b`.

const mergeArrays = (a, b) => [...a, ...b];
console.log(mergeArrays([1, 2], [3, 4]) );

// 2. Creează o funcție `removeFirst(...items)` care întoarce toate elementele în afară de primul.

const removeFirst = (...items) => items.slice(1);
console.log(removeFirst(10, 20, 30));

//Implementează o funcție incrementQty(cart, id) care primește array-ul cart și un id, și returnează un nou array în care produsul cu id dat are qty mărit cu 1 (fără a modifica array-ul sau obiectele originale). 

const cart = [
  { id: 1, name: 'Mouse', qty: 1 },
  { id: 2, name: 'Keyboard', qty: 1 },
]

const incrementQty = (cart, id) => {
  return cart.map(item =>
    item.id === id ? { ...item, qty: item.qty + 1 } : item
  );
};

const newCart = incrementQty(cart, 2);
console.log(newCart);

/* map() parcurge fiecare produs din cart.

Dacă item.id === id, atunci:

returnăm un nou obiect cu proprietățile originale, dar cu qty crescut cu 1 ({ ...item, qty: item.qty + 1 }).

Altfel, returnăm obiectul exact cum e (item).

Nu se modifică array-ul sau obiectele inițiale – se construiește un array nou cu obiecte noi doar pentru cele modificate.*/
