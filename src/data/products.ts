export const products = [
  {
    slug: 'zap',
    name: 'Zap',
    category: 'Database explorer',
    color: '#b8aff0',
    headline: 'Your data.\nWithin reach.',
    description:
      'Explore your databases, edit a few rows, and get on with your day. A clear workspace for PostgreSQL, MySQL, and SQLite.',
    short: 'A little clarity for your databases.',
    features: [
      [
        'Three databases. One workspace.',
        'Connect to PostgreSQL and MySQL, directly or over SSH, or open a local SQLite file.'
      ],
      [
        'From question to query.',
        'Write SQL with syntax highlighting and suggestions. Save queries per connection and come back to them later.'
      ],
      [
        'Follow the data.',
        'Browse tables, inspect structure and indexes, and follow foreign keys without losing your place.'
      ],
      [
        'Changes on your terms.',
        'Edit cells and stage changes before saving. Import and export SQL when you need to move data.'
      ]
    ]
  },
  {
    slug: 'bud',
    name: 'Bud',
    category: 'Git manager',
    color: '#b9d9ae',
    headline: 'Good changes.\nLess friction.',
    description:
      'A calmer place for your repositories. Follow your history, review your changes, and keep your branches in order.',
    short: 'A fresh perspective on your repositories.',
    features: [
      [
        'See the whole story.',
        'Follow a colourful commit graph across branches, with authors, dates, refs, and merge connections.'
      ],
      [
        'Make every commit count.',
        'Review your changes, stage files, and write your next commit in one focused workspace.'
      ],
      ['Your repositories, together.', 'Open or clone repositories and return to them from a searchable grid or list.'],
      ['Stay connected.', 'Fetch and push when you choose. Select a remote and SSH identity for each repository.']
    ]
  },
  {
    slug: 'piw',
    name: 'Piw',
    category: 'Notes & tasks',
    color: '#efc794',
    headline: 'Small thoughts.\nRoom to grow.',
    description:
      'Catch a thought before it disappears. Turn it into a note, a task, or something bigger. Everything stays on your computer.',
    short: 'A home for the things on your mind.',
    features: [
      ['Catch it in the moment.', 'Open Quick Capture from another app and save a note or task in seconds.'],
      [
        'Let your ideas grow.',
        'Start with a Markdown-friendly note, then grow it into a document with rich text, code blocks, and checklists.'
      ],
      ['Keep the next step close.', 'Plan tasks with subtasks and due dates, or pin a sticky to your desktop.'],
      [
        'Yours, locally.',
        'Notes, documents, and tasks live in a local SQLite file. No account, cloud, or telemetry. Export Markdown, JSON, and CSV.'
      ]
    ]
  }
] as const
export type Product = (typeof products)[number]

export const upcomingProducts = [
  { slug: 'tst', name: 'tst' },
  { slug: 'gem', name: 'gem' }
] as const
