//Convertește for-ul de mai jos la map + join pentru a crea un string cu numele produselor separate prin virgulă.

const items = ['mere', 'pere', 'banane']
let result = ''
for (let i = 0; i < items.length; i++) {
  result += items[i] + (i < items.length - 1 ? ', ' : '')
}

const result2 = items.map(item => item.toUpperCase()).join(', ');
console.log(result2);

//Folosește reduce pentru a calcula suma totală a cantităților din: 

const cart = [
  { id: 1, qty: 2 },
  { id: 2, qty: 1 },
  { id: 3, qty: 4 },
]

const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
console.log(totalQty); 

//Scrie o funcție groupByStatus(orders) folosind reduce care întoarce un obiect cu cheile pending și completed.
const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'pending' },
];

function groupByStatus(orders) {
  return orders.reduce((acc, order) => {
    const { status } = order;
    acc[status] = [...(acc[status] ?? []), order];
    return acc;
  }, {
    pending: [],
    completed: []
  });
}

const grouped = groupByStatus(orders);
console.log(grouped);

//Operatorul ?? în JavaScript este numit nullish coalescing operator și este folosit pentru a oferi o valoare implicită doar dacă valoarea din stânga este null sau undefined.
