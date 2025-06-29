// src/app.js
import logger from './core.js'

async function testLogging() {
  await logger.debug('Debug message', { requestId: 123 })
  await logger.info('Info message', { user: 'Anton' })
  await logger.warn('Warning message', { warningCode: 456 })
  await logger.error('Error message', { errorCode: 789 })

  // Test scriere intensiva
  for (let i = 0; i < 500; i++) {
    await logger.info(`Bulk log #${i}`, { batch: true })
  }

  console.log('Logging test finished')
}

testLogging()
