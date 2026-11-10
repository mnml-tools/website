import { Icon } from '../atoms/Icon'
import { useEffect, useRef, useState } from 'react'
import { products, upcomingProducts } from '../../data/products'
export function Header() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Minimal Tools home">
        <img className="brand-logo" src="/images/minimal-tools-logo.svg" width="32" height="32" alt="" />
        <span>
          minimal<span className="brand-light">tools</span>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <div
          className="product-nav"
          ref={root}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false)
              trigger.current?.focus()
            }
          }}
        >
          <button ref={trigger} aria-expanded={open} aria-controls="products-menu" onClick={() => setOpen(!open)}>
            <span>Products</span>
            <svg
              className={open ? 'chevron open' : 'chevron'}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m4 6 4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div id="products-menu" className="product-menu" hidden={!open}>
            <span className="eyebrow">Meet your everyday tools</span>
            {products.map((p) => (
              <a key={p.slug} href={`/products/${p.slug}/`}>
                <img src={`/images/${p.slug}-icon.png`} width="44" height="44" alt="" />
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.category}</small>
                </span>
                <Icon name="chevron-right" />
              </a>
            ))}
            {upcomingProducts.map((p) => (
              <a key={p.slug} href={`/products/${p.slug}/`}>
                <img src={`/images/${p.slug}-icon.png`} width="44" height="44" alt="" />
                <span>
                  <strong>{p.name}</strong>
                  <small>Coming soon</small>
                </span>
                <Icon name="chevron-right" />
              </a>
            ))}
          </div>
        </div>
        <a href="/#story">Our story</a>
        <a className="github-link" href="https://github.com/mnml-tools">
          GitHub <Icon name="github" />
        </a>
      </nav>
    </header>
  )
}
