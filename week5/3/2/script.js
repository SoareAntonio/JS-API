/* Exercițiul 2: Coș de cumpărături

Implementează un sistem de shopping cart care:

Salvează produsele în localStorage
Persistă datele între sesiuni
Calculează totalul
Permite modificarea cantităților*/


let cart = {};

function loadCart() {
  const saved = localStorage.getItem("cart");
  cart = saved ? JSON.parse(saved) : {};
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(button) {
  const productEl = button.closest(".product");
  const id = productEl.dataset.id;
  const name = productEl.dataset.name;
  const price = parseFloat(productEl.dataset.price);

  if (!cart[id]) {
    cart[id] = { name, price, quantity: 1 };
  } else {
    cart[id].quantity += 1;
  }

  saveCart();
  renderCart();
}

function updateQuantity(id, newQty) {
  if (newQty <= 0) {
    delete cart[id];
  } else {
    cart[id].quantity = newQty;
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const tbody = document.querySelector("#cart tbody");
  const grandTotalEl = document.querySelector("#grandTotal");
  tbody.innerHTML = "";

  let total = 0;

  for (const id in cart) {
    const item = cart[id];
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" min="1" value="${item.quantity}"
              onchange="updateQuantity('${id}', this.value)">
      </td>
      <td>${item.price} RON</td>
      <td>${itemTotal} RON</td>
      <td><button onclick="removeItem('${id}')">Șterge</button></td>
    `;
    tbody.appendChild(row);
  }

  grandTotalEl.textContent = total.toFixed(2);
}

function removeItem(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

window.onload = loadCart;
