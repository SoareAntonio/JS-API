/***Ce face acest pattern:**

- Extinde funcționalitatea EventEmitter-ului built-in din Node.js
- Adaugă metode custom pentru evenimente asincrone și cu timeout
- Păstrează toate funcționalitățile originale (on, emit, off, etc.)

**Când să-l folosești:**

- Când ai nevoie de comunicare event-driven în aplicație
- Pentru decuplarea componentelor (publisher-subscriber pattern)
- În aplicații real-time (chat, notificări, streaming)
- Când vrei să adaugi funcționalitate extra la evenimente standard */
import EventEmitter from 'events'

class CustomEventEmitter extends EventEmitter {
  constructor() {
    super()
    this.setMaxListeners(20) // Previne memory leaks
  }

  emitAsync(event, ...args) {
    return new Promise((resolve) => {
      this.emit(event, ...args)
      resolve()
    })
  }

  emitWithTimeout(event, timeout, ...args) {
    setTimeout(() => {
      this.emit(event, ...args)
    }, timeout)
  }
}
