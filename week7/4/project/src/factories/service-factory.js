/* **Ce face acest pattern:**

- Creează obiecte fără să specifici clasa exactă în cod
- Centralizează logica de creare a obiectelor similare
- Poate implementa caching pentru a reutiliza instanțele

**Când să-l folosești:**

- Când ai multe clase similare (EmailService, SMSService, etc.)
- Pentru plugin systems sau extensibility
- Când vrei să ascunzi complexitatea creării obiectelor
- Pentru dependency injection și testare mai ușoară*/
import EmailService from '../services/email-service.js'
import SMSService from '../services/sms-service.js'
import PushNotificationService from '../services/push-service.js'

class ServiceFactory {
  static services = new Map()

  static createService(type, config) {
    switch (type) {
      case 'email':
        return new EmailService(config)
      case 'sms':
        return new SMSService(config)
      case 'push':
        return new PushNotificationService(config)
      default:
        throw new Error(`Unknown service type: ${type}`)
    }
  }

  static getService(type, config) {
    // Cache pattern: returnează instanța existentă sau creează una nouă
    if (!this.services.has(type)) {
      const service = this.createService(type, config)
      this.services.set(type, service)
    }
    return this.services.get(type)
  }

  static clearCache() {
    this.services.clear()
  }
}

// Folosire:
const emailService = ServiceFactory.getService('email', { apiKey: 'xxx' })
const smsService = ServiceFactory.getService('sms', { provider: 'twilio' })
