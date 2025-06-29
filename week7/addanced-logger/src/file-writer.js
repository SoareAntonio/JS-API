// src/file-writer.js
import fs from 'fs/promises'
import path from 'path'

class FileWriter {
  constructor(logDir, maxSize) {
    this.logDir = logDir
    this.maxSize = maxSize
    this.streams = new Map()  // level -> file handle
  }

  async init() {
    try {
      await fs.mkdir(this.logDir, { recursive: true })
    } catch (err) {
      console.error(`Failed to create log directory ${this.logDir}:`, err)
    }
  }

  async _getLogFilePath(level) {
    return path.join(this.logDir, `${level.toLowerCase()}.log`)
  }

  async _checkRotate(level) {
    try {
      const filePath = await this._getLogFilePath(level)
      const stats = await fs.stat(filePath).catch(() => null)
      if (stats && stats.size >= this.maxSize) {
        // Rotate: rename current file with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const rotatedName = `${level.toLowerCase()}-${timestamp}.log`
        await fs.rename(filePath, path.join(this.logDir, rotatedName))
      }
    } catch (err) {
      console.error(`Error during log rotation for ${level}:`, err)
    }
  }

  async write(level, message) {
    try {
      await this._checkRotate(level)
      const filePath = await this._getLogFilePath(level)
      // Append message async (atomic append)
      await fs.appendFile(filePath, message)
    } catch (err) {
      console.error(`Failed to write log for ${level}:`, err)
    }
  }
}

export default FileWriter
