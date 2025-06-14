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

