import type { ReactNode } from 'react'
import { Icon, type IconName } from './Icon'
export function LinkButton({
  href,
  children,
  secondary = false,
  icon
}: {
  href: string
  children: ReactNode
  secondary?: boolean
  icon?: IconName
}) {
  return (
    <a className={`button ${secondary ? 'secondary' : ''}`} href={href}>
      {children}
      <Icon name={icon ?? (href.startsWith('https://github.com') ? 'github' : 'chevron-right')} />
    </a>
  )
}
