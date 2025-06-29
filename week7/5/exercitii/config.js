// config.js
import dotenv from 'dotenv'
dotenv.config()

const config = {
  port: parseInt(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
}

export const validateConfig = () => {
  const required = ['DATABASE_URL', 'API_KEY']
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`❌ Missing required env var: ${key}`)
    }
  }

  if (!/^postgres(?:ql)?:\/\/[^:]+:[^@]+@[^:]+:[0-9]+\/.+$/.test(config.databaseUrl)) {
    console.warn('⚠️ Warning: DATABASE_URL does not seem valid')
  }

  const validEnvs = ['development', 'production', 'test']
  if (!validEnvs.includes(config.nodeEnv)) {
    throw new Error(`❌ NODE_ENV must be one of ${validEnvs.join(', ')}`)
  }

  if (isNaN(config.port)) {
    throw new Error('❌ PORT must be a number')
  }
}

export default config
