let cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  // 1. actualizezi lista de produse
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - ' + item.price;
    cartList.appendChild(li);
  });

  // 2. actualizezi numărul de produse
  document.getElementById('cart-count').textContent = cartItems.length;

  // 3. actualizezi prețul total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  document.getElementById('cart-total').textContent = total + ' RON';

  // 4. alte efecte (ex: afișează/ascunde butoane)
  const btn = document.getElementById('checkout-button');
  btn.style.display = cartItems.length ? 'block' : 'none';
}
