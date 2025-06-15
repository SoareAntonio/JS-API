function saveSettings() {
  const theme = document.getElementById('theme').value;
  const language = document.getElementById('language').value;
  const fontSize = document.getElementById('fontSize').value;
  const notifications = document.getElementById('notifications').checked;

  const settings = {
    theme,
    language,
    fontSize,
    notifications
  };

  localStorage.setItem('userSettings', JSON.stringify(settings));
  applySettings(settings);
  alert('Setările au fost salvate!');
}

function applySettings(settings) {
  document.body.className = settings.theme;
  document.body.style.fontSize = settings.fontSize + 'px';
}

function loadSettings() {
  const data = localStorage.getItem('userSettings');
  if (!data) return;

  const settings = JSON.parse(data);
  document.getElementById('theme').value = settings.theme;
  document.getElementById('language').value = settings.language;
  document.getElementById('fontSize').value = settings.fontSize;
  document.getElementById('notifications').checked = settings.notifications;

  applySettings(settings);
}

window.onload = loadSettings;
