import fs from 'fs'
import path from 'path'
import config from './config.js'

const ensureLogDirExists = () => {
  if (!fs.existsSync(config.LOG_DIR)) {
    fs.mkdirSync(config.LOG_DIR, { recursive: true })
  }
}

const rotateIfNeeded = (filePath) => {
  if (fs.existsSync(filePath)) {
    const { size } = fs.statSync(filePath)
    if (size >= config.MAX_LOG_SIZE) {
      const backupPath = `${filePath}.${Date.now()}`
      fs.renameSync(filePath, backupPath)
    }
  }
}

export const writeLog = (level, content) => {
  if (!config.LOG_TO_FILE) return
  try {
    ensureLogDirExists()
    const fileMap = {
      error: 'error.log',
      info: 'info.log',
      debug: 'all.log',
      warn: 'all.log'
    }

    const filename = fileMap[level] || 'all.log'
    const filePath = path.join(config.LOG_DIR, filename)

    rotateIfNeeded(filePath)

    fs.appendFile(filePath, content, (err) => {
      if (err) console.error('[File Write Error]', err)
    })
  } catch (e) {
    console.error('[Log File Error]', e)
  }
}
