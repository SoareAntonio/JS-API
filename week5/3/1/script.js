/* Exercițiul 1: Manager de setări

Creează o aplicație care salvează și încarcă setările utilizatorului:

Tema (light/dark)
Limba (ro/en)
Mărimea fontului
Setări de notificări*/

function saveSettings() {
  const settings = {
    theme: document.querySelector('#theme').value,
    language: document.querySelector('#language').value,
    fontSize: document.querySelector('#fontSize').value,
    notifications: document.querySelector('#notifications').checked
  };

  localStorage.setItem('userSettings', JSON.stringify(settings));
  applySettings(settings);
  alert("Setările au fost salvate!");
}

function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('userSettings'));
  if (!settings) return;

  document.querySelector('#theme').value = settings.theme;
  document.querySelector('#language').value = settings.language;
  document.querySelector('#fontSize').value = settings.fontSize;
  document.querySelector('#notifications').checked = settings.notifications;

  applySettings(settings);
}

function applySettings(settings) {
  document.body.style.fontSize = `${settings.fontSize}px`;

  if (settings.theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function resetSettings() {
  localStorage.removeItem('userSettings');
  location.reload();
}

window.onload = loadSettings;
