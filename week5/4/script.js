//1. Verificarea suportului:

const BrowserAPIDetector = {
  geolocation: 'geolocation' in navigator,
  notifications: 'Notification' in window,
  speechRecognition: !!(
    window.SpeechRecognition || window.webkitSpeechRecognition
  ),
  speechSynthesis: 'speechSynthesis' in window,
  vibration: 'vibrate' in navigator,
  fullscreen: !!(
    document.fullscreenEnabled || document.webkitFullscreenEnabled
  ),
  intersectionObserver: 'IntersectionObserver' in window,
  webWorkers: 'Worker' in window,
  clipboard: 'clipboard' in navigator,

  // Raport complet
  getReport() {
    const report = {}
    for (const [api, supported] of Object.entries(this)) {
      if (typeof supported === 'boolean') {
        report[api] = supported
      }
    }
    return report
  },
}

console.log('Browser API Support:', BrowserAPIDetector.getReport())

 //2. Graceful degradation:

// Exemplu de funcție care folosește multiple APIs cu fallback
async function showLocationBasedNotification() {
  // 1. Verifică suportul pentru geolocation
  if (!navigator.geolocation) {
    console.log('Geolocation not supported')
    return
  }

  // 2. Obține locația
  try {
    const position = await getCurrentLocation()
    const { latitude, longitude } = position.coords

    // 3. Verifică suportul pentru notificări
    if ('Notification' in window) {
      const hasPermission = await setupNotifications()

      if (hasPermission) {
        showNotification('Location updated', {
          body: `Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(
            4
          )}`,
          icon: '/location-icon.png',
        })

        // 4. Opțional: vibrează dacă este suportat
        if ('vibrate' in navigator) {
          navigator.vibrate([100, 50, 100])
        }
      }
    } else {
      // Fallback: afișează în pagină
      alert(`Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`)
    }
  } catch (error) {
    console.error('Location error:', error)
  }
}