import dotenv from 'dotenv'
dotenv.config()

import config from './config/index.js'

config.validate()

console.log('✅ Server running on port:', config.get('port'))
console.log('✅ DB host:', config.get('database.host'))
console.log('✅ Caching enabled:', config.get('featureFlags.useCaching'))
