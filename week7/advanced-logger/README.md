# 📘 Advanced Logger

> Un sistem avansat de logare în Node.js, dezvoltat pentru a integra cele mai bune practici de organizare modulară, scriere asincronă în fișiere, configurare dinamică prin variabile de mediu și rotație automată a fișierelor de log.

---

## 🧠 Context educațional

Acest proiect este o extindere a unui logger de bază, care afișa mesaje color în consolă. Obiectivul este să îl transformăm într-un **instrument robust**, care:

- scrie logurile în fișiere organizate pe nivele (INFO, ERROR, ALL)
- gestionează volume mari de loguri prin rotație automată
- este controlabil prin variabile de mediu
- poate fi integrat în aplicații reale fără impact de performanță

---

## ✅ Funcționalități cheie

### 1. 🔐 **Persistență în fișiere**
- Scrie mesaje în:
  - `info.log` – doar INFO și WARN
  - `error.log` – doar ERROR
  - `all.log` – toate mesajele
- Scriere asincronă pentru performanță
- Rotează fișierele automat dacă depășesc `MAX_LOG_SIZE`
- Creează directorul `logs/` dacă nu există

### 2. ⚙️ **Configurare prin `.env`**
Poți controla comportamentul loggerului prin variabile de mediu:

| Variabilă      | Descriere                                             | Implicit |
|----------------|--------------------------------------------------------|----------|
| `LOG_LEVEL`     | Nivel minim acceptat: `DEBUG`, `INFO`, `WARN`, `ERROR` | `INFO`   |
| `LOG_TO_FILE`   | Scrie și în fișiere (`true` / `false`)                | `true`   |
| `LOG_DIR`       | Directorul unde se salvează logurile                  | `logs`   |
| `MAX_LOG_SIZE`  | Dimensiunea maximă a unui fișier log (în bytes)       | `100000` |

### 3. 🚀 **Funcționalități avansate**
- Formatare diferită pentru consolă (color) și fișiere (simplu)
- Suport pentru metadate (ex: `{module: 'auth', userId: 123}`) incluse în log
- Gestionarea erorilor la scriere fără oprirea aplicației

---


## 🧪 Scenarii testate

- ✅ Logger-ul funcționează fără `.env` (folosește valori default)
- ✅ Scrie logurile în fișiere corespunzătoare
- ✅ Rotează fișierele la atingerea `MAX_LOG_SIZE`
- ✅ Filtrarea după `LOG_LEVEL` este corectă
- ✅ Creează `logs/` automat dacă lipsește
- ✅ Aplicația nu se oprește la erori de scriere
- ✅ Performanța e menținută la logare intensivă (bulk logs)

---

## ▶️ Cum îl folosești

### 1. Instalează dependențele
```bash
npm install
