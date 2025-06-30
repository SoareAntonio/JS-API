import config from './config.js'
import { writeLog } from './file-writer.js'
import { formatForConsole, formatForFile } from './formatter.js'

const levels = ['debug', 'info', 'warn', 'error']
const levelPriority = levels.indexOf(config.LOG_LEVEL)

class Logger {
  log(level, message, metadata) {
    if (levels.indexOf(level) < levelPriority) return

    const formattedConsole = formatForConsole(level, message, metadata)
    const formattedFile = formatForFile(level, message, metadata)

    console.log(formattedConsole)
    writeLog(level, formattedFile)
  }

  debug(msg, meta) { this.log('debug', msg, meta) }
  info(msg, meta) { this.log('info', msg, meta) }
  warn(msg, meta) { this.log('warn', msg, meta) }
  error(msg, meta) { this.log('error', msg, meta) }
}

export default new Logger()
