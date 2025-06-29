import fs from 'fs'
import { promises as fsPromises } from 'fs'

const experimentWithFiles = async () => {
  const fileName = 'experiment.txt'
  const defaultContent = 'Fallback content'

  try {
    // 3.Verificare asincronă: fișierul există?
    try {
      await fsPromises.access(fileName)
      console.log('✅ Fișierul există (verificat async).')

      const content = await fsPromises.readFile(fileName, 'utf8')
      console.log('Conținut citit:', content)
    } catch (err) {
      console.warn('⚠️ Fișierul lipsește. Se creează fallback...')
      await fsPromises.writeFile(fileName, defaultContent)
      console.log('✅ Fișier creat cu conținut fallback.')
    }

    // Verificare sincronă (doar pentru demonstrație)
    if (fs.existsSync(fileName)) {
      console.log('✅ Fișierul există (verificat sincron).')
    }

    // 1.Scriere nou conținut (suprascriere)
    const contentToWrite = 'Hello from Node.js!'
    await fsPromises.writeFile(fileName, contentToWrite)
    console.log('📝 Fișier suprascris cu succes!')

    // 2.Citire din nou
    const readContent = await fsPromises.readFile(fileName, 'utf8')
    console.log('📖 Conținut actual:', readContent)

    //4. Informații despre fișier
    const stats = await fsPromises.stat(fileName)
    console.log('📦 Dimensiune:', stats.size, 'bytes')
    console.log('📂 Este fișier?', stats.isFile())
    console.log('📅 Data creării:', stats.birthtime)
    console.log('🕒 Ultima modificare:', stats.mtime)

  } catch (error) {
    console.error('❌ Eroare:', error.message)
  }
}

experimentWithFiles()
