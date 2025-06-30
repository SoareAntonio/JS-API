import chalk from 'chalk'

export const formatForConsole = (level, message, metadata) => {
  const timestamp = new Date().toISOString()
  const meta = metadata ? JSON.stringify(metadata) : ''
  const output = `[${timestamp}] [${level.toUpperCase()}]: ${message} ${meta}`

  switch (level) {
    case 'error': return chalk.red(output)
    case 'warn': return chalk.yellow(output)
    case 'info': return chalk.blue(output)
    case 'debug': return chalk.gray(output)
    default: return output
  }
}

export const formatForFile = (level, message, metadata) => {
  const timestamp = new Date().toISOString()
  const meta = metadata ? JSON.stringify(metadata) : ''
  return `[${timestamp}] [${level.toUpperCase()}]: ${message} ${meta}\n`
}
