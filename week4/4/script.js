//✅ Exercițiul 1: Recreează exemplul de gestionare a utilizatorilor și comenzilor din lecția
//despre Promises, dar folosind async/await.
function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'Ana' });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, item: 'Laptop' },
        { id: 2, item: 'Mouse' }
      ]);
    }, 1000);
  });
}

async function showUserAndOrders(userId) {
  try {
    const user = await getUser(userId);
    console.log('👤 Utilizator:', user);

    const orders = await getOrders(user.id);
    console.log('📦 Comenzi:', orders);
  } catch (err) {
    console.error('❌ Eroare:', err.message);
  }
}

showUserAndOrders(101);

//✅ Exercițiul 2: Implementează un sistem de cache pentru operațiuni asincrone
//wrapper care memoreaza rezultatele functiilor asincrone pentru a evita apeluri redundante pt aceeiasi parametri
function createAsyncCache(asyncFunction) {
    const cache = new Map();
    
    return async function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const promise = asyncFunction(...args);
        cache.set(key, promise);
        
        try {
            const result = await promise;
            return result;
        } catch (error) {
            cache.delete(key);
            throw error;
        }
    };
}

// Funcție helper pentru simularea întârzierii
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Exemplu de utilizare
const cacheGetData = createAsyncCache(async (id) => {
    console.log(`Fetching data for id: ${id}`);
    await delay(1000); // Simulează o operaţie lentă
    return { id, data: `Data for ${id}` };
});

// Test cache
async function testCache() {
    console.time('Prima cerere');
    await cacheGetData(42);
    console.timeEnd('Prima cerere');

    console.time('Cerere din cache');
    await cacheGetData(42); // Ar trebui să fie instant
    console.timeEnd('Cerere din cache');

    console.time('Cerere diferită');
    await cacheGetData(43); // Ar trebui să fie lentă din nou
    console.timeEnd('Cerere diferită');
}

testCache();


//✅ Exercițiul 3: Implementează o funcție care execută operațiuni asincrone în serie, limitând
//numărul de operațiuni concurente.

async function processQueue(items, processfn, concurrencyLimit = 2) {
    const results = [];
    const activeTasks = [];
    
    for (const item of items) {
        // Dacă am atins limita de concurență, așteptăm să se elibereze un slot
        if (activeTasks.length >= concurrencyLimit) {
            await Promise.race(activeTasks);
        }
        
        const task = Promise.resolve(processfn(item))
            .then(result => {
                // Eliminăm task-ul din lista de activeTasks când se termină
                activeTasks.splice(activeTasks.indexOf(task), 1);
                return result;
            });
        
        activeTasks.push(task);
        results.push(task);
    }
    
    // Așteptăm finalizarea tuturor task-urilor
    return Promise.all(results);
}

/* Funcție helper pentru simularea întârzierii
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/

// Utilizare
async function testProcessQueue() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    // Simulează o operaţiune asincronă care durează un timp variabil
    async function processItem(item) {
        console.log(`Începe procesarea pentru ${item}`);
        await delay(item * 500); // Durata variază în funcţie de item
        console.log(`Procesare finalizată pentru ${item}`);
        return item * 2;
    }

    const results = await processQueue(items, processItem, 3);
    console.log('Rezultate:', results);
}

testProcessQueue();