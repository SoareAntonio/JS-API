/* Cerințe:
1. Creează o funcție validateCredentials(username, password) care returnează
un Promise.
2. Implementează generateToken(user) care returnează un Promise cu un token de
autentificare.
3. Creează getUserProfile(token) care returnează profilul utilizatorului pe baza
token-ului.
4. Toate funcțiile trebuie să includă simulări de erori și validări.
Cod de pornire: vezi pag 2

Extindere:
Implementează un sistem de expirare pentru token-uri și o funcție de refresh pentru token-uri
expirate.*/


// Bază de date de utilizatori
const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        name: 'Ion Popescu',
        role: 'admin'
    },
    {
        id: 2,
        username: 'maria',
        password: 'user1234',
        name: 'Maria Ionescu',
        role: 'user'
    },
    {
        id: 3,
        username: 'vasi',
        password: 'guest123',
        name: 'Vasile Georgescu',
        role: 'user'
    }
];

// Obiect pentru stocarea token-urilor generate
const tokenStore = {};

// Funcția de validare a credentialelor
function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (!username || !password) {
            reject(new Error('Username și parola sunt obligatorii'));
            return;
        }

        // Căutare utilizator
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            resolve(user);
        } else {
            reject(new Error('Credențiale invalide'));
        }
      }, 1000)
    });
}

// Funcția de generare a token-ului
function generateToken(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (!user || !user.id) {
            reject(new Error('Utilizator invalid'));
            return;
        }

        // Generare token (simplificat)
        const token = `token_${user.id}_${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`;

        // Setare expirare la 30 de minute
        const expirationTime = Date.now() + 30 * 60 * 1000;
        
        // Stocare token
        tokenStore[token] = {
            userId: user.id,
            expiresAt: expirationTime
        };

        resolve(token);
      },500)
        
    });
}

// Funcția de refresh token
function refreshToken(oldToken) {
    return new Promise((resolve, reject) => {
        if (!oldToken || !tokenStore[oldToken]) {
            reject(new Error('Token invalid pentru refresh'));
            return;
        }

        const tokenData = tokenStore[oldToken];
        
        // Ștergem vechiul token
        delete tokenStore[oldToken];

        // Generăm noul token
        const user = users.find(u => u.id === tokenData.userId);
        generateToken(user)
            .then(newToken => resolve(newToken))
            .catch(err => reject(err));
    });
}

// Funcția de obținere a profilului utilizatorului
function getUserProfile(token) {
    return new Promise((resolve, reject) => {
        
      setTimeout(()=>{
        if (!token || !tokenStore[token]) {
            reject(new Error('Token invalid'));
            return;
        }

        const tokenData = tokenStore[token];
        
        // Verificare expirare
        if (Date.now() > tokenData.expiresAt) {
            reject(new Error('Token expirat'));
            return;
        }

        // Căutare utilizator
        const userId=parseInt(token.split('-')[0]);
        const user = users.find(u => u.id === tokenData.userId);
        
        if (user) {
            // Returnăm doar informațiile necesare
            resolve({
                id: user.id,
                name: user.name,
                role: user.role,
                tokenExpiresAt: new Date(tokenData.expiresAt).toISOString(),
                lastLogin:new Date().toISOString,
            });
        } else {
            reject(new Error('Utilizatorul asociat token-ului nu a fost găsit'));
        }
      },800)
        
    });
}

// Exemplu de utilizare
console.log('Început proces autentificare...');

validateCredentials('admin', 'admin123')
    .then(user => {
        console.log('Autentificare reușită pentru:', user.name);
        return generateToken(user);
    })
    .then(token => {
        console.log('Token generat:', token);
        return getUserProfile(token);
    })
    .then(profile => {
        console.log('Profil utilizator:', profile);
        
        // Simulăm expirarea token-ului
        const oldToken = Object.keys(tokenStore)[0];
        if (oldToken) {
            tokenStore[oldToken].expiresAt = Date.now() - 1000; // Forțăm expirarea
            
            return getUserProfile(oldToken)
                .catch(err => {
                    console.log('Eroare așteptată (token expirat):', err.message);
                    return refreshToken(oldToken);
                });
        }
    })
    .then(newToken => {
        if (newToken) {
            console.log('Token refresh-uit:', newToken);
            return getUserProfile(newToken);
        }
    })
    .then(refreshedProfile => {
        if (refreshedProfile) {
            console.log('Profil după refresh:', refreshedProfile);
        }
    })
    .catch(error => {
        console.error('Eroare în procesul de autentificare:', error.message);
    });