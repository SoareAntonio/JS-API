
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import path from 'path'

// Diferența între abordări:
// 1. Callback-style (tradițional)
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Eroare la citire:', err)
    return
  }
  console.log('Date:', data)
})

// 2. Promise-based (modern)
const readFileAsync = async () => {
  try {
    const data = await fsPromises.readFile('data.txt', 'utf8')
    console.log('Date:', data)
  } catch (error) {
    console.error('Eroare:', error.message)
  }
}

const processData = async () => {
  try {
    const [a, b] = await Promise.all([
      fsPromises.readFile('a.txt', 'utf8'),
      fsPromises.readFile('b.txt', 'utf8')
    ])
    await fsPromises.writeFile('c.txt', a + b)
  } catch (e) {
    console.error('Eroare în procesare:', e.message)
  }
}


// 3. Sync (folosit rar)
try {
  const data = fs.readFileSync('data.txt', 'utf8')
  console.log(data)
} catch (error) {
  console.error('Eroare:', error.message)
}

