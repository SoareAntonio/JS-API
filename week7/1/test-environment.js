// Testează mediul de execuție
console.log('=== Test Mediu de Execuție ===');

if (typeof window !== 'undefined') {
  console.log('Rulez în browser!');
  console.log('User Agent:', navigator.userAgent);
} else if (typeof global !== 'undefined') {
  console.log('Rulez în Node.js!');
  console.log('Versiunea Node.js:', process.version);
  console.log('Platforma:', process.platform);

  // Testează accesul la fișiere
  try {
    const fs = require('fs');
    const path = require('path');

    // Creează un fișier de test
    const filePath = path.join(__dirname, 'test.txt');
    fs.writeFileSync(filePath, 'Hello din Node.js!');

    // Citește conținutul
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('Conținut citit:', data);

    // Șterge fișierul
    fs.unlinkSync(filePath);
    console.log('Fișierul test a fost șters.');
  } catch (error) {
    console.log('Eroare la accesul fișierelor:', error.message);
  }
}
console.log('------------');
// Node.js îți oferă acces la:
const os = require('os')

// Informații despre sistem
console.log('=== Informații Sistem ===')
console.log('Platforma:', os.platform()) // 'win32', 'darwin', 'linux'
console.log('Arhitectura:', os.arch()) // 'x64', 'arm64'
console.log('Memoria liberă:', Math.round(os.freemem() / 1024 / 1024), 'MB')
console.log('Memoria totală:', Math.round(os.totalmem() / 1024 / 1024), 'MB')
console.log('CPU-uri:', os.cpus().length)

// Informații despre proces
console.log('=== Proces ===')
console.log('Process ID:', process.pid)
console.log('Memoria folosită:', process.memoryUsage())
console.log('Timpul de execuție:', Math.round(process.uptime()), 'secunde')

// Argumentele din linia de comandă
console.log('=== Argumente ===')
console.log('Toate argumentele:', process.argv)
console.log('Argumentele utilizatorului:', process.argv.slice(2))


