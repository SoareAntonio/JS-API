/*Exercițiul 3: Istoric navigare

Creează un sistem care:

Salvează istoricul paginilor vizitate
Limitează numărul de intrări (max 50)
Oferă funcționalitate de căutare în istoric
Permite ștergerea istoricului */
const MAX_ENTRIES = 50;

function saveVisit() {
  const history = JSON.parse(localStorage.getItem("visitHistory")) || [];

  const page = {
    title: document.title,
    url: window.location.href,
    time: new Date().toLocaleString()
  };

  history.unshift(page); // adaugă la început
  if (history.length > MAX_ENTRIES) {
    history.pop(); // șterge cel mai vechi
  }

  localStorage.setItem("visitHistory", JSON.stringify(history));
}

function displayHistory(filter = "") {
  const history = JSON.parse(localStorage.getItem("visitHistory")) || [];
  const list = document.querySelector("#historyList");
  list.innerHTML = "";

  history
    .filter(entry => entry.title.toLowerCase().includes(filter.toLowerCase()) || entry.url.toLowerCase().includes(filter.toLowerCase()))
    .forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${entry.title}</strong><br><a href="${entry.url}">${entry.url}</a><br><small>${entry.time}</small>`;
      list.appendChild(li);
    });
}

function clearHistory() {
  localStorage.removeItem("visitHistory");
  displayHistory();
}

document.querySelector("#searchInput").addEventListener("input", (e) => {
  displayHistory(e.target.value);
});

window.onload = () => {
  saveVisit();
  displayHistory();
};
