export const products = [
  {
    slug: 'zap',
    name: 'Zap',
    category: 'Database explorer',
    color: '#e9b923',
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
      'Catch a thought before it disappears. Keep it as plain Markdown, with its tasks close by. Everything stays in a folder on your computer.',
    short: 'A home for the things on your mind.',
    features: [
      [
        'Catch it in the moment.',
        'Open Quick Capture from another app and drop a note or task into your Inbox in seconds.'
      ],
      [
        'Plain Markdown. Your files.',
        'Notes are .md files in a folder you choose, readable by any editor. Link, tag, and organise them in folders.'
      ],
      [
        'Tasks where they belong.',
        'A task is a checkbox line in any note. Give it a due date with @tomorrow, then see Today and Upcoming across every note.'
      ],
      [
        'Keep the next step close.',
        'Pin a note or a task list to your desktop as a sticky, in its own colour. No account, cloud, or telemetry.'
      ]
    ]
  }
] as const
export type Product = (typeof products)[number]

export const upcomingProducts = [
  { slug: 'tst', name: 'tst' },
  { slug: 'gem', name: 'gem' }
] as const
