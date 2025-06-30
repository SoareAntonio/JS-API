import logger from './core.js'

logger.debug('Debugging app init', { user: 'anton' })
logger.info('Server started')
logger.warn('API latency high', { latency: '900ms' })
logger.error('DB connection failed', { retrying: true })

// Test log flooding + rotație
for (let i = 0; i < 1000; i++) {
  logger.debug(`Bulk log line ${i}`)
}
