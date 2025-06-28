
// Funcții utilitare pentru prelucrarea string-urilor

export const capitalize = (str) => {
  // Validarea input-ului
  if (!str || typeof str !== 'string') {
    return ''
  }

  // Capitalizarea primei litere
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const camelCase = (str) => {
  if (!str || typeof str !== 'string') {
    return ''
  }

  // Împarte string-ul după separatori și convertește în camelCase
  return str
    .toLowerCase()
    .split(/[\\s\\-_]+/) // Împarte după spații, cratime, underscore
    .filter((word) => word.length > 0) // Elimină cuvintele goale
    .map((word, index) => {
      // Prima cuvânt rămâne cu litere mici, restul se capitalizează
      return index === 0 ? word : capitalize(word)
    })
    .join('')
}

export const slugify = (str) => {
  if (!str || typeof str !== 'string') {
    return ''
  }

  return (
    str
      .toLowerCase()
      .trim()
      // Înlocuiește diacriticele cu echivalentele ASCII
      .normalize('NFD')
      .replace(/[\\u0300-\\u036f]/g, '')
      // Păstrează doar litere, cifre și spații
      .replace(/[^a-z0-9\\s]/g, '')
      // Înlocuiește spațiile multiple cu un singur spațiu
      .replace(/\\s+/g, ' ')
      .trim()
      // Înlocuiește spațiile cu cratime
      .replace(/\\s/g, '-')
  )
}
