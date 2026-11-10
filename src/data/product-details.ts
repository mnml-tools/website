interface FeatureDetail {
  title: string
  description: string
  capabilities: string[]
}
interface ProductDetails {
  summary: string
  features: FeatureDetail[]
  runtime: [string, string][]
  shortcuts: [string, string][]
  limitations: string[]
}
export const productDetails: Record<'zap' | 'bud' | 'piw', ProductDetails> = {
  zap: {
    summary:
      'A desktop database client for PostgreSQL, MySQL, and SQLite. Browse schema and records, run SQL, and stage data edits in a tabbed workspace.',
    features: [
      {
        title: 'Connections and credentials',
        description: 'Connect to a database server or open an existing SQLite file from the desktop app.',
        capabilities: [
          'PostgreSQL and MySQL connections support direct access or SSH tunnels.',
          'Saved passwords use the operating system’s credential store.',
          'Create, edit, test, and save connection profiles before opening a workspace.'
        ]
      },
      {
        title: 'Schema and record inspection',
        description: 'Open tables in independent tabs with Data, Structure, and Indexes views.',
        capabilities: [
          'Paginate, filter, and sort records; select which columns appear.',
          'Views and materialized views are grouped separately and open read-only. The backend also rejects edits to them.',
          'Rename tables and add fields from Structure where supported by the driver and database permissions.'
        ]
      },
      {
        title: 'SQL editor and saved queries',
        description: 'Write SQL with syntax highlighting and context-aware completion.',
        capabilities: [
          'Completion suggests tables, columns, and keywords; column metadata is loaded for tables referenced by the query.',
          'Save queries per connection and reopen them in their own tabs.',
          'Query editors preserve local drafts while you move between workspace tabs.'
        ]
      },
      {
        title: 'Staged data editing',
        description: 'Edit cells locally and review pending changes before saving them to the database.',
        capabilities: [
          'Save or revert pending edits explicitly.',
          'Moving between pages, filters, or sort orders stages the active cell before navigation.',
          'Workspace-level discard prompts protect unsaved work when leaving the connection.'
        ]
      },
      {
        title: 'Foreign-key navigation',
        description: 'Inspect related records without replacing the table you are working in.',
        capabilities: [
          'Open a referenced row from a foreign-key cell with its relation icon or Ctrl/Command-click.',
          'Follow additional references in a side panel with a back stack.',
          'Open the referenced row in its own filtered table tab.'
        ]
      },
      {
        title: 'Navigation and SQL transfer',
        description: 'Jump between schema objects and queries, or move table definitions and data using SQL files.',
        capabilities: [
          'Go To searches tables, views, and saved queries in the current connection, including word-start abbreviations.',
          'The recent-tab switcher previews cached table pages and query drafts without making database requests.',
          'Import SQL from the sidebar menu. Export one table or a selection, with rows or structure only.'
        ]
      }
    ],
    runtime: [
      ['Application', 'Tauri desktop shell, React and TypeScript UI, Rust backend.'],
      [
        'Database access',
        'Native desktop runtime; the browser development preview does not perform real database operations.'
      ],
      ['Appearance', 'Light and dark themes, five accent colours, persisted sidebar width and window size.']
    ],
    shortcuts: [
      ['Ctrl / ⌘ + N', 'Find tables, views, and saved queries'],
      ['Ctrl + Tab', 'Switch between recently used workspace tabs'],
      ['Ctrl / ⌘ + click', 'Follow a foreign-key reference']
    ],
    limitations: [
      'Schema edits depend on the selected database driver and your database permissions.',
      'Views and materialized views are read-only in the workspace.',
      'Published macOS builds are not Developer ID signed or notarized and may require approval in macOS security settings.'
    ]
  },
  bud: {
    summary:
      'A desktop Git client that uses your installed Git executable. Inspect history across refs, switch branches, stage changes, commit, and run explicit fetch and push operations.',
    features: [
      {
        title: 'Repository management',
        description: 'Open local repositories or clone a remote, then return to them from a searchable grid or list.',
        capabilities: [
          'Switch saved repositories from the header and assign repository avatar colours.',
          'Removing a saved repository removes its shortcut; repository files remain on disk.',
          'Opening a repository does not automatically fetch from the remote.'
        ]
      },
      {
        title: 'Commit graph and branches',
        description: 'Browse topologically ordered history across all refs and a valid HEAD.',
        capabilities: [
          'History loads in batches of 300; virtualized rows avoid mounting the entire history.',
          'Coloured lanes show parent relationships, merges, and shared ancestors.',
          'Search highlights matching commits while preserving graph topology. Branch selection jumps to its loaded tip; local branches can be checked out.'
        ]
      },
      {
        title: 'Review, stage, and commit',
        description: 'Review working changes and stage files before creating a commit.',
        capabilities: [
          'Write the commit subject and description in the workspace.',
          'Optional AI generation fills an editable conventional commit draft; it does not stage, commit, or push.',
          'An existing draft requires an explicit replacement action before generated text overwrites it.'
        ]
      },
      {
        title: 'Remote operations',
        description: 'Fetch and push use the remote and SSH identity selected for the repository.',
        capabilities: [
          'Network operations run when requested. Push asks for confirmation, targets the current branch, and does not force-push.',
          'Git runs off the UI thread with a two-minute operation timeout and terminal prompts disabled.',
          'HTTPS authentication uses your existing Git credential helpers.'
        ]
      },
      {
        title: 'SSH identities',
        description: 'Register existing private keys and choose a default or a per-repository identity.',
        capabilities: [
          'Key labels and paths are stored in local preferences; private key contents are not returned to the UI.',
          'Optional passphrases use the operating system’s credential store. Keys without a saved passphrase can use your SSH agent.',
          'Selected identities use IdentitiesOnly and strict host verification. Verify unknown hosts through SSH in a terminal first.'
        ]
      },
      {
        title: 'Opt-in commit drafting',
        description: 'AI is disabled by default and requires an explicitly configured OpenAI-compatible provider.',
        capabilities: [
          'Only an explicit Generate action sends the staged diff to the configured endpoint. Empty diffs and diffs over 120 KB are rejected.',
          'Remote endpoints require HTTPS; loopback model servers can use HTTP. The optional API key is stored in the OS credential store.',
          'Requests time out after 60 seconds and do not follow redirects. Review the generated message before committing.'
        ]
      }
    ],
    runtime: [
      ['Application', 'Tauri, React, TypeScript, and Rust; Git must be installed and available on PATH.'],
      [
        'Local configuration',
        'Saved repository shortcuts, identity labels and paths, and appearance preferences persist locally.'
      ],
      ['Appearance', 'Light and dark themes with five accent colours; green is the default.']
    ],
    shortcuts: [
      ['Ctrl / ⌘ + P', 'Switch saved repositories'],
      ['Ctrl / ⌘ + O', 'Open a local repository'],
      ['Ctrl / ⌘ + N', 'Clone a repository'],
      ['Ctrl / ⌘ + Shift + K', 'Manage SSH identities'],
      ['Ctrl / ⌘ + R', 'Refresh the repository'],
      ['Ctrl / ⌘ + F or double Shift', 'Focus commit search']
    ],
    limitations: [
      'SSH identity management registers existing keys; it does not generate keys or upload public keys.',
      'Server-password prompts and interactive host-confirmation prompts are rejected by the native Git integration.',
      'AI drafting sends staged source changes to the provider you configure when you explicitly request generation.',
      'Published macOS builds are not Developer ID signed or notarized and may require approval in macOS security settings.'
    ]
  },
  piw: {
    summary:
      'A local desktop workspace for notes, documents, and tasks, backed by one SQLite database. Quick Capture and sticky windows share the same records as the main workspace.',
    features: [
      {
        title: 'Quick Capture and notes',
        description: 'Capture a note or task from another app with a global shortcut, tray action, or CLI flag.',
        capabilities: [
          'The popup closes only after saving succeeds; capture drafts persist across accidental closes.',
          'Write Markdown-friendly notes, use a split list/editor layout, add tags, and archive finished notes.',
          'The --quick-note and --quick-task flags open capture in the already running app.'
        ]
      },
      {
        title: 'Documents and linked tasks',
        description: 'Convert a note into a tabbed document while preserving its identity.',
        capabilities: [
          'Content tabs store rich text, code blocks, and checklists; Tasks tabs are live filtered task views.',
          'Convert a line into a task with Ctrl/Command + T. Completion updates all views of the same task.',
          'Tasks support one level of subtasks, due dates, manual ordering, and Today, Upcoming, All, and Completed views.'
        ]
      },
      {
        title: 'Spaces, search, and stickies',
        description: 'Filter work by space and find content across notes, documents, and tasks.',
        capabilities: [
          'Work and Personal are included; create additional spaces and triage new items from Inbox.',
          'SQLite FTS5 indexes content with highlighted search matches.',
          'Pin a note, task, or document task list as a sticky. Window position, size, and on-top preference are remembered where supported.'
        ]
      },
      {
        title: 'Storage and concurrent edits',
        description: 'The Rust core owns writes to piw.sqlite3 in the application-data directory.',
        capabilities: [
          'SQLite uses WAL, synchronous=FULL, foreign keys, and transactional versioned migrations. Upgrades create a database backup first.',
          'Debounced autosaves check an expected revision. A stale text save reports a conflict instead of overwriting a newer edit.',
          'Change events refresh affected queries across windows; each task remains one record regardless of how many views show it.'
        ]
      },
      {
        title: 'Backup and export',
        description: 'Settings → Data shows the database path and provides separate backup and export actions.',
        capabilities: [
          'Backup uses VACUUM INTO to create a consistent SQLite copy while the app runs.',
          'Export writes Markdown notes and document tabs, JSON and CSV tasks, plus canonical data.json and a versioned manifest.',
          'Export creates a new folder without overwriting files and skips Trash. Exports are not a database restore mechanism.'
        ]
      },
      {
        title: 'Privacy and window boundaries',
        description: 'No account, cloud, telemetry, or network access is required or built into the app.',
        capabilities: [
          'Each native window has scoped capabilities. Sticky windows can access commands for their own item only.',
          'The Rust layer validates export paths and opens native file dialogs; pasted rich content is rebuilt from the editor schema.',
          'Notes use soft deletion with Trash and undo. The SQLite database is not encrypted at rest.'
        ]
      }
    ],
    runtime: [
      ['Application', 'Tauri 2, React, TypeScript, and Rust; local SQLite with FTS5.'],
      [
        'Data location',
        'piw.sqlite3 in the OS app-data directory; inspect the path in Settings → Data. PIW_DATA_DIR can select another directory.'
      ],
      [
        'Window model',
        'Main workspace, Quick Capture popup, and separate sticky windows, with changes synchronized locally.'
      ]
    ],
    shortcuts: [
      ['Ctrl + Shift + Space / ⌘ + Shift + Space', 'Open Quick Capture (configurable)'],
      ['Ctrl / ⌘ + Enter', 'Save the captured note or task'],
      ['Ctrl / ⌘ + K', 'Search notes, documents, and tasks'],
      ['Ctrl / ⌘ + T', 'Convert a document line into a task']
    ],
    limitations: [
      'Pre-release. Verified daily on Linux with KDE Plasma; Windows and macOS build in CI but have not been tested by hand. GNOME and X11 are untested.',
      'On Wayland, Piw defaults to XWayland for sticky positioning and always-on-top behavior. Native Wayland does not provide those sticky features.',
      'There is no in-app restore yet. Restoring a SQLite backup requires quitting Piw and replacing the database as described in the repository documentation.',
      'The database is not encrypted. Device or full-disk encryption provides protection for data at rest.'
    ]
  }
}
