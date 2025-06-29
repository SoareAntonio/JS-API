
import config, { validateConfig } from './config.js'

try {
  validateConfig()
  console.log('✅ Configurație validă:', config)
} catch (error) {
  console.error('💥 Configurație invalidă:', error.message)
  process.exit(1)
}
