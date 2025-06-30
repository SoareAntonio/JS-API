import dotenv from 'dotenv'
dotenv.config()

export default {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_TO_FILE: process.env.LOG_TO_FILE === 'true',
  LOG_DIR: process.env.LOG_DIR || 'logs',
  MAX_LOG_SIZE: parseInt(process.env.MAX_LOG_SIZE) || 10 * 1024 * 1024, // 10 MB
}
