// Componente mici și focalizate
export function ProductImage({ src, alt }) {
  return <img src={src} alt={alt} className="product-image" />
}

export function ProductTitle({ title }) {
  return <h2 className="product-title">{title}</h2>
}

export function Rating({ score, maxScore = 5 }) {
  const stars = Array.from({ length: maxScore }, (_, i) => (
    <span key={i} className={i < score ? 'star filled' : 'star'}>
      ★
    </span>
  ))
  return <div className="rating">{stars}</div>
}

export function Price({ amount, currency = '$' }) {
  return (
    <span className="price">
      {currency}
      {amount}
    </span>
  )
}

export function AddToCartButton({ onAdd, disabled = false }) {
  return (
    <button onClick={onAdd} disabled={disabled} className="add-to-cart-btn">
      Add to Cart
    </button>
  )
}

// Componenta principală care combină totul
export function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <ProductImage src={product.image} alt={product.name} />
      <ProductTitle title={product.name} />
      <Rating score={product.rating} />
      <Price amount={product.price} />
      <AddToCartButton onAdd={() => onAddToCart(product)} />
    </div>
  )
}

