// src/config.js
import dotenv from 'dotenv'
dotenv.config()

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL?.toUpperCase() || 'INFO',
  LOG_TO_FILE: process.env.LOG_TO_FILE === 'true',
  LOG_DIR: process.env.LOG_DIR || './logs',
  MAX_LOG_SIZE: parseInt(process.env.MAX_LOG_SIZE) || 10 * 1024 * 1024, // 10 MB
}

function validateConfig() {
  const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR']
  if (!levels.includes(config.LOG_LEVEL)) {
    throw new Error(`Invalid LOG_LEVEL: ${config.LOG_LEVEL}`)
  }
  if (isNaN(config.MAX_LOG_SIZE) || config.MAX_LOG_SIZE <= 0) {
    throw new Error(`Invalid MAX_LOG_SIZE: ${config.MAX_LOG_SIZE}`)
  }
}

validateConfig()

export default config
