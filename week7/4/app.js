
import * as math from './math-utils.js'

console.log('🧮 Testing Math Utils Module\\n')

// Testare operații de bază
try {
  console.log('Addition:', math.add(5, 3))
  console.log('Subtraction:', math.subtract(10, 4))
} catch (error) {
  console.error('Error in basic operations:', error.message)
}

// Testare validări
console.log('\\nTesting Error Handling:')
try {
  math.add(5, 'hello') // Ar trebui să arunce eroare
} catch (error) {
  console.log('✅ Type validation works:', error.message)
}
