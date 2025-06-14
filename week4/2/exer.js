//ex1
function timer(message, milliseconds) {
  setTimeout(() => {
    console.log(message);
  }, milliseconds);
}

// Testare
timer('Salut după 2 secunde', 2000);
console.log('Acest mesaj apare imediat');

//ex2
function registerUser(email, password, callback) {
  console.log('Se înregistrează utilizatorul...');
  setTimeout(() => {
    console.log('Utilizator înregistrat cu succes!');
    callback({ email, id: Date.now() }); // simulăm un obiect user
  }, 1500);
}

function authenticateUser(email, password, callback) {
  console.log('Se autentifică utilizatorul...');
  setTimeout(() => {
    const token = 'fake-jwt-token-' + Math.random().toString(36).substr(2, 10);
    console.log('Autentificare reușită!');
    callback(token);
  }, 1000);
}

function loadProfile(token, callback) {
  console.log('Se încarcă profilul...');
  setTimeout(() => {
    const profile = {
      name: 'Ion Popescu',
      age: 25,
      email: 'ion@example.com',
      token: token
    };
    console.log('Profil încărcat!');
    callback(profile);
  }, 1500);
}

// Secvența de apeluri (callback hell style)
registerUser('ion@example.com', 'parola123', (user) => {
  authenticateUser(user.email, 'parola123', (token) => {
    loadProfile(token, (profile) => {
      console.log('Profilul utilizatorului:', profile);
    });
  });
});

/*Un token (în acest context) este un șir de caractere unic folosit pentru a identifica și autoriza un utilizator după ce s-a autentificat cu succes.După ce utilizatorul se autentifică, serverul îi trimite un token de autentificare, pe care clientul îl folosește în cererile ulterioare în locul utilizatorului/parolei.
Ce face codul:

Math.random() → generează un număr aleator (ex: 0.123456).

.toString(36) → convertește numărul în bază 36 (cifre + litere minuscule).

.substr(2, 10) → elimină „0.” de la început și ia următoarele 10 caractere.

'fake-jwt-token-' + ... → prefixează șirul cu un text pentru a simula un token.
fake-jwt-token-9kdh3f0p2z
🔒 În realitate:
Tokenii reali arată ca niște șiruri criptate, cum ar fi JWT (JSON Web Token):

Copiază
Editează
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOjEyMywiZW1haWwiOiJpb25AZXhhbXBsZS5jb20ifQ.
uJ5XL1UJcOPmDY8OExmO0FkXyN3ZftFZk5eYxvmsxdg
*/