// Cache system implementation
const cache = {
    store: new Map(),
    get(key) {
        const item = this.store.get(key);
        if (item && item.expires > Date.now()) {
            console.log(`Cache hit for ${key}`);
            return item.value;
        }
        console.log(`Cache miss for ${key}`);
        return null;
    },
    set(key, value, ttl = 60000) {
        this.store.set(key, {
            value,
            expires: Date.now() + ttl
        });
    },
    clear() {
        this.store.clear();
    }
};

// Authentication functions with cache
async function authenticateUser(username, password) {
    const cacheKey = `auth_${username}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        console.log(`  Autentificare pentru ${username}...`);
        const user = await validateCredentials(username, password);
        console.log(' Credentiale valide:', user.name);
        const token = await generateToken(user);
        console.log(' Token generat:', token);
        const profile = await getUserProfile(token);
        console.log(' Profil utilizator încărcat:', profile.name);
        
        const result = { user, token, profile };
        cache.set(cacheKey, result);
        return result;
    } catch (error) {
        console.error(' X Eroare autentificare:', error.message);
        throw error;
    }
}

// Dashboard loading function with cache
async function loadDashboardModern() {
    const cacheKey = 'dashboard_data';
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        console.log(' Începe încărcarea dashboard-ului modern...');
        // Load independent data in parallel
        const [users, products, orders] = await Promise.all([
            retryOperation(() => loadWithCache('users', loadUsers)),
            retryOperation(() => loadWithCache('products', loadProducts)),
            retryOperation(() => loadWithCache('orders', loadOrders))
        ]);
        
        console.log(' Date de bază încărcate cu succes');
        const data = { users, products, orders };
        
        // Calculate statistics
        const statistics = await calculateStatistics(users, products, orders);
        console.log(' Statistici calculate');
        
        // Generate report
        const report = await generateReport(data, statistics);
        console.log(' Raport generat');
        
        cache.set(cacheKey, report);
        return report;
    } catch(error) {
        console.error('X Eroare la încărcarea dashboard-ului:', error.message);
        throw error;
    }
}

// Helper function for cached loading
async function loadWithCache(key, loader) {
    const cached = cache.get(key);
    if (cached) return cached;
    
    const data = await loader();
    cache.set(key, data);
    return data;
}

// Progress tracker
function createProgressTracker(steps) {
    let currentStep = 0;
    return {
        nextStep(stepName) {
            currentStep++;
            const percentage = Math.round((currentStep / steps.length) * 100);
            console.log(` Progress: ${percentage}% - ${stepName}`);
        },
        complete() {
            console.log(' Operațiune completată');
        },
    };
}

// Main function with progress tracking
async function loadDataWithProgress() {
    const steps = [
        'Validare',
        'Autentificare',
        'Încărcare date',
        'Calcul statistici',
        'Generare raport',
    ];
    const progress = createProgressTracker(steps);

    try {
        progress.nextStep('Validare credentiale');
        const authResult = await authenticateUser('ana', 'parola123');

        progress.nextStep('Autentificare completă');
        await new Promise(resolve => setTimeout(resolve, 500));

        progress.nextStep('Încărcare date dashboard');
        const dashboard = await loadDashboardModern();

        progress.nextStep('Calcul statistici finale');
        await new Promise(resolve => setTimeout(resolve, 300));

        progress.nextStep('Generare raport final');
        await new Promise(resolve => setTimeout(resolve, 200));

        progress.complete();

        return {
            auth: authResult,
            dashboard: dashboard,
        };
    } catch (error) {
        console.error('X_Eroare:', error.message);
        throw error;
    }
}

// Test function
async function runTests() {
    console.log('=== Test Autentificare Async/Await ===');
    try {
        await authenticateUser('ana', 'parola123');
    } catch (error) {
        console.error('Test autentificare eșuat:', error.message);
    }

    console.log('\n=== Test Dashboard Modern ===');
    try {
        const dashboard = await loadDashboardModern();
        console.log('Dashboard Încărcat:', dashboard.summary);
    } catch (error) {
        console.error('Test dashboard eșuat:', error.message);
    }

    console.log('\n=== Test Progress Tracking ===');
    try {
        const result = await loadDataWithProgress();
        console.log('Proces complet finalizat pentru:', result.auth.profile.name);
    } catch (error) {
        console.error('Test progress eșuat:', error.message);
    }
}

// Run tests
runTests();

// Helper functions implementations
async function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'ana' && password === 'parola123') {
                resolve({ id: 1, name: 'Ana Popescu' });
            } else {
                reject(new Error('Credentiale invalide'));
            }
        }, 1000);
    });
}

async function generateToken(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`token-${user.id}-${Date.now()}`);
        }, 500);
    });
}

async function getUserProfile(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Ana Popescu', role: 'admin', token });
        }, 800);
    });
}

function retryOperation(operation, maxRetries = 3) {
    return new Promise((resolve, reject) => {
        let attempt = 0;
        function tryAgain() {
            attempt++;
            operation()
                .then(resolve)
                .catch(error => {
                    if (attempt < maxRetries) {
                        console.warn(`Eșec la încercarea ${attempt}. Reîncerc în ${attempt} secunde...`);
                        setTimeout(tryAgain, 1000 * attempt);
                    } else {
                        reject(new Error(`Operațiune eșuată după ${maxRetries} încercări: ${error.message}`));
                    }
                });
        }
        tryAgain();
    });
}

async function loadUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve([
                    { id: 1, name: 'Ana Popescu' },
                    { id: 2, name: 'Ion Ionescu' },
                    { id: 3, name: 'Maria Dumitrescu' },
                ]);
            } else {
                reject(new Error('Eroare la încărcarea utilizatorilor'));
            }
        }, 1000);
    });
}

async function loadProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.15) {
                resolve([
                    { id: 1, name: 'Laptop', price: 3500 },
                    { id: 2, name: 'Telefon', price: 2000 },
                    { id: 3, name: 'Tabletă', price: 1200 },
                ]);
            } else {
                reject(new Error('Eroare la încărcarea produselor'));
            }
        }, 1000);
    });
}

async function loadOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve([
                    { id: 1, userId: 1, productId: 1, quantity: 1 },
                    { id: 2, userId: 2, productId: 2, quantity: 2 },
                    { id: 3, userId: 3, productId: 3, quantity: 1 },
                ]);
            } else {
                reject(new Error('Eroare la încărcarea comenzilor'));
            }
        }, 1000);
    });
}

async function calculateStatistics(users, products, orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const totalOrderValue = orders.reduce((sum, order) => {
                const product = products.find(p => p.id === order.productId);
                return sum + (product ? product.price * order.quantity : 0);
            }, 0);

            const stats = {
                totalUsers: users.length,
                totalProducts: products.length,
                totalOrders: orders.length,
                averageOrderValue: orders.length ? totalOrderValue / orders.length : 0,
                totalRevenue: totalOrderValue
            };
            resolve(stats);
        }, 800);
    });
}

async function generateReport(data, statistics) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const report = {
                generatedAt: new Date().toISOString(),
                data,
                statistics,
                summary: `Dashboard: ${data.users.length} utilizatori, ` +
                          `${data.products.length} produse, ` +
                          `${data.orders.length} comenzi. ` +
                          `Venit total: ${statistics.totalRevenue} RON.`
            };
            resolve(report);
        }, 500);
    });
}