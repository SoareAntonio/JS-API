// Implementare practică
const browserCapabilities = () => {
  console.log('🌐 În browser pot:')
  console.log('✅ Manipula DOM-ul (document.getElementById)')
  console.log('✅ Răspunde la evenimente (click, scroll, resize)')
  console.log('✅ Face cereri HTTP (fetch, XMLHttpRequest)')
  console.log('✅ Stoca date local (localStorage, sessionStorage)')
  console.log('✅ Accesa API-uri Web (geolocation, camera)')
  console.log('❌ Nu pot accesa sistemul de fișiere')
  console.log('❌ Nu pot rula servere')
  console.log('❌ Limitări CORS pentru cereri')
}

const nodeCapabilities = () => {
  console.log('⚙️  În Node.js pot:')
  console.log('✅ Accesa informații despre sistem (os.platform())')
  console.log('✅ Crea servere HTTP (http.createServer())')
  console.log('✅ Rula scripturi de automatizare')
  console.log('✅ Procesa argumente din linia de comandă')
  console.log('✅ Accesa sistemul de fișiere complet')
  console.log('✅ Conecta la baze de date')
  console.log('❌ Nu pot manipula DOM-ul')
  console.log('❌ Nu pot gestiona evenimente UI')
}

// Demonstrație practică
if (typeof window !== 'undefined') {
  browserCapabilities()
} else {
  nodeCapabilities()
}

// Instrumentele Node.js
console.log('=== Informații Node.js ===')
console.log('Versiunea Node.js:', process.version)
console.log('Versiunea V8:', process.versions.v8)
console.log('Toate versiunile:', process.versions)

// Variabile de mediu
console.log('=== Mediul de Execuție ===')
console.log('NODE_ENV:', process.env.NODE_ENV || 'nesetată')
console.log('PATH:', process.env.PATH) // Calea către executabile
console.log('HOME/USERPROFILE:', process.env.HOME || process.env.USERPROFILE)

// Argumentele scriptului
console.log('=== Execuție ===')
console.log('Fișierul curent:', __filename) // Path-ul complet al fișierului
console.log('Directorul curent:', __dirname) // Path-ul directorului
console.log('Working directory:', process.cwd()) // Directorul de unde rulează scriptul
console.log('Toate argumentele:', process.argv)
console.log('Doar argumentele utilizatorului:', process.argv.slice(2))

// Exemple de folosire:
// - Construirea de path-uri relative
// - Citirea configurației din environment variables
// - Procesarea parametrilor din linia de comandă

