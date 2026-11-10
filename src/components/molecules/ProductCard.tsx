import { Icon } from '../atoms/Icon'
import type { Product } from '../../data/products'
export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <a
      className={`product-card ${product.slug}`}
      href={`/products/${product.slug}/`}
      style={{ '--accent': product.color } as React.CSSProperties}
    >
      <div className="card-top">
        <span className="eyebrow">
          0{index + 1} / {product.category}
        </span>
      </div>
      <div className="card-icon">
        <img src={`/images/${product.slug}-icon.${product.slug === 'zap' ? 'svg' : 'png'}`} alt="" width="128" height="128" loading="lazy" />
      </div>
      <h3>
        {product.name}
        <Icon name="chevron-right" />
      </h3>
      <p>{product.short}</p>
      <div className="card-preview">
        <img
          src={`/images/${product.slug}-light.png`}
          alt={`${product.name} desktop workspace`}
          loading="lazy"
          width="1440"
          height="900"
        />
      </div>
    </a>
  )
}
