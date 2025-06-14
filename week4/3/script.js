//Transformă următoarea funcție bazată pe callback într-una bazată pe Promise. 
function checkPassword(user, password, callback) {
  setTimeout(() => {
    if (!user || !password) {
      callback(new Error('Credențiale lipsă'))
      return
    }

    if (password === 'parola123') {
      callback(null, { succes: true, mesaj: 'Autentificare reușită' })
    } else {
      callback(new Error('Parolă incorectă'))
    }
  }, 1000)
}

function checkPasswordAsync(user,password){
  return new Promise ((resolve, reject)=>{
    setTimeout(() =>{
      if(! user || ! password){
        reject(new Error('Credentiale lipsa'));
        return;
      }

      if(password=== 'parola123'){
        resolve({
          succes:true,
          mesaj:'Autentificare reusita'
        });
      } else {
        reject(new Error('Parolă incorectă'));
      }
    }, 1000);
  });
}

checkPasswordAsync('antonio', 'parola123')
  .then(result => {
    console.log('✅ SUCCES:', result);
  })
  .catch(err => {
    console.error('❌ EROARE:', err.message);
  });

// Caz cu parolă greșită
checkPasswordAsync('antonio', 'gresita')
  .then(result => {
    console.log('✅ SUCCES:', result);
  })
  .catch(err => {
    console.error('❌ EROARE:', err.message);
  });

// Caz cu user lipsă
checkPasswordAsync(null, 'parola123')
  .catch(err => {
    console.error('❌ EROARE:', err.message);
  });

///2.Implementează o secvență de operațiuni asincrone utilizând Promises care simulează:
// Verificarea disponibilității unui produs (după ID)
// Adăugarea produsului în coș
// Calcularea totalului coșului

function checkAvailability(productId) {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const available=Math.random() > 0.2;
      if(available){
        resolve({
          id:productId,
          name:'Product Test',
          price:50
        });
      } else {
        reject(new Error('Produsul nu este disponibil'));
      }
    },1000);
  });
}

function addToCart(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cart = [product]; // simulăm un coș cu un singur produs
      resolve(cart);
    }, 1000);
  });
}

function calculateCartTotal(cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      resolve(total);
    }, 500);
  });
}

// Implementează înlănțuirea Promises pentru a simula procesul complet
const productId = 101;

checkAvailability(productId)
  .then(product => {
    console.log('✅ Produs disponibil:', product.name);
    return addToCart(product);
  })
  .then(cart => {
    console.log('🛒 Produs adăugat în coș:', cart);
    return calculateCartTotal(cart);
  })
  .then(total => {
    console.log('💰 Total coș:', total + ' RON');
  })
  .catch(error => {
    console.error('❌ Eroare:', error.message);
  });

  //async
async function procesCumparare(productId) {
  try {
    const produs = await checkAvailability(productId);
    console.log('✅ Produs găsit:', produs.name);

    const cos = await addToCart(produs);
    console.log('🛒 Coș:', cos);

    const total = await calculateCartTotal(cos);
    console.log('💰 Total de plată:', total + ' RON');
  } catch (err) {
    console.error('❌ Eroare:', err.message);
  }
}

procesCumparare(202);


//3.Utilizează Promise.all() pentru a simula încărcarea paralelă a mai multor resurse pentru o pagină web (imagini, date utilizator, comentarii) și afișează un mesaj când toate sunt gata. 
function loadImages() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('🖼️ Imagini încărcate');
      resolve('Imagini');
    }, 1000);
  });
}

function loadUserData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('👤 Date utilizator încărcate');
      resolve('Utilizator');
    }, 1500);
  });
}

function loadComments() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('💬 Comentarii încărcate');
      resolve('Comentarii');
    }, 1200);
  });
}
Promise.all([loadImages(), loadUserData(), loadComments()])
  .then(results => {
    console.log('✅ Toate resursele au fost încărcate:', results);
    console.log('🚀 Pagina este gata de afișat!');
  })
  .catch(err => {
    console.error('❌ Eroare la încărcarea resurselor:', err);
  });
