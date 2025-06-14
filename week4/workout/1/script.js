/* Cerințe:
1. Creează o funcție sendNotification(message, delay, callback) care
simulează trimiterea unei notificări după un anumit timp.
2. Implementează o funcție processNotificationQueue(notifications,
callback) care procesează o listă de notificări în secvență.
3. Adaugă gestionarea erorilor pentru cazul în care mesajul este vid sau delay-ul este
invalid.

Extindere:
Adaugă suport pentru notificări cu prioritate care să fie procesate mai întâi, indiferent de ordinea
lor din coadă.*/



// Exemplu de utilizare / testare
// Array de notificări pentru procesare
const notifications = [
    { message: 'Bine ați venit', delay: 1000 },
    { message: 'Ați primit un mesaj nou', delay: 2000, priority: true },
    { message: 'Actualizare disponibilă', delay: 1500 },
    { message: '', delay: 500 },
    { message: 'Notificare urgentă', delay: 800, priority: true },
    { message: 'Reamintire', delay: -100 },
    { message: 'Oferta specială', delay: 1200 }
];

// Funcția pentru trimiterea unei notificări
function sendNotification(message, delay, callback) {
    // Validare parametrii
    if (!message || message.trim() === '') {
        callback(new Error('Mesajul nu poate fi vid'));
        return;
    }

    if (!delay || delay < 0) {
        callback(new Error('Delay-ul trebuie să fie un număr pozitiv'));
        return;
    }

    setTimeout(() => {
        callback(null, message);
    }, delay);
}

// Funcția care se apelează când o notificare este trimisă
function onNotificationSent(message) {
    console.log(`✓ Notificare trimisă: ${message}`);
}

// Funcția care se apelează când toate notificările sunt procesate
function onAllNotificationsProcessed() {
    console.log('✈ Toate notificările au fost procesate!');
}

// Funcția pentru procesarea cozii de notificări cu suport pentru prioritate
function processNotificationQueue(notifications, callback) {
    if (!notifications || notifications.length === 0) {
        callback();
        return;
    }

    // Separam notificarile prioritare de cele normale
    const priorityNotifications = notifications.filter(n => n.priority);
    const normalNotifications = notifications.filter(n => !n.priority);
    
    // Combinam notificarile (prioritarele primele)
    const sortedNotifications = [...priorityNotifications, ...normalNotifications];
    
    let index = 0;

    function processNext() {
        if (index >= sortedNotifications.length) {
            callback();
            return;
        }
        
        const notification = sortedNotifications[index];
        sendNotification(
            notification.message,
            notification.delay,
            (error, message) => {
                if (error) {
                    console.error(`X Eroare la notificarea ${index + 1}: ${error.message}`);
                } else {
                    onNotificationSent(message);
                }
                index++;
                processNext();
            }
        );
    }

    processNext();
}

// Testare
console.log('Începe procesarea notificărilor...');
processNotificationQueue(notifications, onAllNotificationsProcessed);