import { Icon } from '../atoms/Icon'
export function Footer() {
  return (
    <footer>
      <a className="brand" href="/" aria-label="Minimal Tools home">
        <img className="brand-logo" src="/images/minimal-tools-logo.svg" width="32" height="32" alt="" />
        <span>
          minimal<span className="brand-light">tools</span>
        </span>
      </a>
      <p>A little less. A lot more focus.</p>
      <a className="footer-github" href="https://github.com/mnml-tools">
        <Icon name="github" />
        Find us on GitHub
      </a>
      <span className="footer-note">Made with care. Built for the everyday.</span>
    </footer>
  )
}
