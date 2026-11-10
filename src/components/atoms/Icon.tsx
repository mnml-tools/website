export type IconName = 'grid' | 'chevron-right' | 'github' | 'download' | 'home'
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'grid' && (
        <>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </>
      )}
      {name === 'chevron-right' && <path d="m9 5 7 7-7 7" />}
      {name === 'download' && (
        <>
          <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
        </>
      )}
      {name === 'home' && (
        <>
          <path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3Z" />
        </>
      )}
      {name === 'github' && (
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.7-.5-2.3 3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12 12 0 0 0-6.8 0C6.1 1.9 5 2.2 5 2.2a4.6 4.6 0 0 0-.1 3.5 5 5 0 0 0-1.4 3.5c0 5 3 6.2 6 6.5-.6.6-.6 1.4-.5 2.3v4" />
      )}
    </svg>
  )
}
