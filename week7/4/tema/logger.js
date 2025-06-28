
import { formatMessage } from './formatter.js'

const colors = {
  INFO: '\x1b[32m',  // verde
  WARN: '\x1b[33m',  // galben
  ERROR: '\x1b[31m', // roșu
  reset: '\x1b[0m',  // reset
}

export const log = (level, message) => {
  if (!colors[level]) {
    throw new Error(`Nivel necunoscut: ${level}`)
  }

  const color = colors[level]
  const formatted = formatMessage(level, message)
  console.log(`${color}${formatted}${colors.reset}`)
}

