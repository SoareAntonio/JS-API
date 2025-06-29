import path from 'path'
import { promises as fs,constants } from 'fs'

// Path operations - cross-platform
const workWithPaths = () => {
  // Construirea path-urilor sigure
  const dataDir = path.join(__dirname, 'data')
  const configFile = path.join(dataDir, 'config.json')
  const filePath = __dirname + '/data/config.json'

  // ✅ De ce folosești path.join în loc de concatenare manuală?
  // -> Pentru că asigură separatorul corect (\ sau /) în funcție de OS și normalizează path-ul.

  // ✅ Ce probleme rezolvă pe diferite OS-uri?
  // -> Elimină erori de path invalid (de ex. Windows folosește '\', Linux '/'),
  //    și evită erori la citirea fișierelor.

  console.log('Directory separators:', path.sep)
  console.log('Current directory:', __dirname)
  console.log('Script filename:', __filename)

  // Analiza path-urilor
  console.log('Dirname:', path.dirname(configFile))
  console.log('Basename:', path.basename(configFile))
  console.log('Extension:', path.extname(configFile))

  // ✅ Cum folosești aceste informații în aplicații reale?
  // -> Pentru validarea tipului de fișier (ex. .json, .jpg), extragerea doar a numelui fișierului,
  //    navigarea către directoare părinte sau logare/debug.
  const ext = path.extname(file.name).toLowerCase()
  if (ext !== '.jpg' && ext !== '.png') {
    throw new Error('Doar imagini .jpg sau .png sunt permise.')
  }

}

// Crearea și gestionarea directoriilor
const manageDirectories = async () => {
  const baseDir = path.join(__dirname, 'workspace')
  const subDirs = ['uploads', 'logs', 'temp', 'backup']

  try {
    // Crearea directorului principal
    await fs.mkdir(baseDir, { recursive: true })

    // Crearea subdirectoriilor
    for (const subDir of subDirs) {
      const fullPath = path.join(baseDir, subDir)

      // Cum verifici dacă directorul există deja?
      try {
        await fs.access(fullPath, constants.F_OK)
        console.log(`Directorul există deja: ${fullPath}`)
      } catch {
        await fs.mkdir(fullPath, { mode: 0o755 })
        console.log(`Am creat directorul: ${fullPath}`)
      }

      // ✅ Ce opțiuni folosești pentru mkdir?
      // -> recursive (pentru a crea și directoare intermediare),
      //    mode (permisiuni implicite, de ex. 755 = rwxr-xr-x)
    }

    // Listarea conținutului unui director
    const contents = await fs.readdir(baseDir)
    console.log('Conținutul directorului:', contents)

    // Cum obții informații detaliate despre fiecare element?
    for (const name of contents) {
      const fullPath = path.join(baseDir, name)
      const stats = await fs.stat(fullPath)

      if (stats.isDirectory()) {
        console.log(`${name} → folder`)
      } else if (stats.isFile()) {
        console.log(`${name} → fișier`)
      } else {
        console.log(`${name} → alt tip`)
      }
    }

  } catch (error) {
    console.error('Eroare la crearea directoriilor:', error.message)
  }
}
