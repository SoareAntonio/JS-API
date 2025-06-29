import path from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class ConfigManager {
  constructor() {
    this.config = this.loadConfig()
  }

  loadConfig() {
    const env = process.env.NODE_ENV || 'development'

    const baseConfig = {
      port: parseInt(process.env.PORT) || 3000,
      logLevel: process.env.LOG_LEVEL || 'info'
    }

    const envConfig = this.loadEnvironmentConfig(env)
    return { ...baseConfig, ...envConfig }
  }

  loadEnvironmentConfig(env) {
    try {
      const configPath = path.join(__dirname, `${env}.json`)

      const configData = readFileSync(configPath, 'utf8')
      return JSON.parse(configData)
    } catch (error) {
      console.warn(`No config file found for environment: ${env}`)
      return {}
    }
  }

  get(key, defaultValue) {
    return key.split('.').reduce((acc, part) => {
      if (acc && acc[part] !== undefined) return acc[part]
      return defaultValue
    }, this.config)
  }

  validate() {
    const required = ['database.host', 'database.port']
    const missing = required.filter((key) => this.get(key) === undefined)

    if (missing.length > 0) {
      throw new Error(`❌ Config validation failed: Missing keys: ${missing.join(', ')}`)
    }

    console.log('✅ Config validated successfully')
  }
}

export default new ConfigManager()
