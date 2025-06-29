// src/formatter.js
export function formatForConsole(level, message, meta) {
  const timestamp = new Date().toISOString()
  const levelColors = {
    DEBUG: '\x1b[34m',  // blue
    INFO: '\x1b[32m',   // green
    WARN: '\x1b[33m',   // yellow
    ERROR: '\x1b[31m',  // red
  }
  const reset = '\x1b[0m'

  let metaStr = ''
  if (meta && Object.keys(meta).length > 0) {
    metaStr = ` | meta: ${JSON.stringify(meta)}`
  }

  return `${levelColors[level] || ''}[${timestamp}] [${level}]${reset} ${message}${metaStr}`
}

export function formatForFile(level, message, meta) {
  const timestamp = new Date().toISOString()
  const metaStr = meta && Object.keys(meta).length > 0 ? JSON.stringify(meta) : ''
  return `${timestamp}|${level}|${message}|${metaStr}\n`
}
