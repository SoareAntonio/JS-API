/***Ce face acest pattern:**

- Garantează că o clasă are doar o singură instanță în întreaga aplicație
- Oferă un punct global de acces la configurația aplicației
- Încarcă configurația o singură dată la prima utilizare

**Când să-l folosești:**

- Pentru configurația aplicației (database settings, API keys, etc.)
- Pentru conexiuni la baza de date (connection pools)
- Pentru cache-uri globale sau state management
- Când ai nevoie de un obiect unic shared între module */
class AppConfig {
  constructor() {
    if (AppConfig.instance) {
      return AppConfig.instance
    }

    this.config = {
      database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
      },
      api: {
        baseUrl: process.env.API_URL || '<http://localhost:3000>',
      },
    }

    AppConfig.instance = this
  }

  get(key, defaultValue) {
    const keys = key.split('.')
    let value = this.config

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return defaultValue
    }

    return value
  }

  set(key, value) {
    const keys = key.split('.')
    const lastKey = keys.pop()
    let target = this.config

    for (const k of keys) {
      if (!target[k]) target[k] = {}
      target = target[k]
    }

    target[lastKey] = value
  }
}

// Folosire: AppConfig va fi mereu aceeași instanță
const config1 = new AppConfig()
const config2 = new AppConfig()
console.log(config1 === config2) // true
