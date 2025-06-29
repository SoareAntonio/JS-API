// src/core.js
import config from './config.js'
import FileWriter from './file-writer.js'
import { formatForConsole, formatForFile } from './formatter.js'

const LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
}

class Logger {
  constructor() {
    this.levelThreshold = LEVELS[config.LOG_LEVEL]
    this.fileWriter = null
    if (config.LOG_TO_FILE) {
      this.fileWriter = new FileWriter(config.LOG_DIR, config.MAX_LOG_SIZE)
      this.fileWriter.init()
    }
  }

  async log(level, message, meta = {}) {
    const levelVal = LEVELS[level]
    if (levelVal === undefined) throw new Error(`Unknown log level: ${level}`)

    if (levelVal < this.levelThreshold) return // filtrare nivel

    // Consola
    console.log(formatForConsole(level, message, meta))

    // Dacă salvăm în fișiere
    if (this.fileWriter) {
      const formatted = formatForFile(level, message, meta)
      await this.fileWriter.write(level, formatted)
    }
  }

  debug(msg, meta) {
    return this.log('DEBUG', msg, meta)
  }

  info(msg, meta) {
    return this.log('INFO', msg, meta)
  }

  warn(msg, meta) {
    return this.log('WARN', msg, meta)
  }

  error(msg, meta) {
    return this.log('ERROR', msg, meta)
  }
}

export default new Logger()
