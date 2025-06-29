// Traversarea recursivă a directoriilor
const walkDirectory = async (dirPath, callback, visited = new Set()) => {
  try {
    // Evită cicluri în symlink-uri sau acces repetat
    const realPath = await fs.realpath(dirPath)
    if (visited.has(realPath)) {
      console.warn(`Ciclu detectat: ${realPath} (ignorat)`)
      return
    }
    visited.add(realPath)

    const items = await fs.readdir(dirPath)

    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stats = await fs.lstat(fullPath) // folosește lstat pentru a detecta symlink-uri

      if (stats.isDirectory()) {
        // ✅ Cum continui recursiv?
        await walkDirectory(fullPath, callback, visited)

        // ✅ Ce protecții adaugi împotriva buclelor infinite?
        // -> 1. Urmărești directoarele deja vizitate prin `realpath`
        // -> 2. Folosești `lstat` ca să nu urmezi symlink-uri periculoase
      } else if (stats.isFile()) {
        // Procesează fișierul
        await callback(fullPath, stats)
      }
    }
  } catch (error) {
    // ✅ Cum gestionezi erorile în recursie?
    // -> Le afișezi cu detalii, dar nu oprești toată traversarea
    console.error(`Eroare la procesarea ${dirPath}: ${error.message}`)
  }
}

const findLargeFiles = async (directory, minSize = 1024 * 1024) => {
  const largeFiles = []

  await walkDirectory(directory, async (filePath, stats) => {
    if (stats.size > minSize) {
      largeFiles.push({
        path: filePath,
        size: stats.size,
        modified: stats.mtime,     // ✅ Data ultimei modificări
        created: stats.birthtime,  // ✅ Data creării fișierului
        extension: path.extname(filePath), // ✅ Extensia fișierului
      })
    }
  })

  return largeFiles
}
