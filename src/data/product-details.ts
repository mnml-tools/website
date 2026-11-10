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
      'A local desktop app for notes and tasks, kept as plain Markdown files in a folder you choose. Quick Capture and sticky notes work on the same files as the main window.',
    features: [
      {
        title: 'A vault of Markdown notes',
        description: 'Notes are .md files in your vault: ~/Piw by default, or any folder you pick in Settings → Data.',
        capabilities: [
          'Edit the files in any other app; Piw follows external changes through a file watcher.',
          'The top-level folders are spaces. The space filter in the title bar narrows the tree, search, and tasks to one of them.',
          'Notes, task views, Trash, and Settings open as tabs, and the open tabs are remembered.'
        ]
      },
      {
        title: 'One live editor',
        description: 'A single live Markdown editor shows headings, emphasis, code, quotes, and lists as you type.',
        capabilities: [
          'Markdown markers appear only on the line you are editing.',
          'Link notes with [[Note]] and tag them with #tag. Renaming a note updates the links to it.',
          'Front matter is kept byte for byte; Piw reads its tags and never adds front matter on its own.'
        ]
      },
      {
        title: 'Tasks inside notes',
        description: 'A task is a - [ ] line in any note. There is no separate task database to keep in sync.',
        capabilities: [
          'Type @today, @tomorrow, @friday, or a date to set a due date. Dates show as chips and stay plain text in the note.',
          'A panel beside each note lists its tasks by heading, with progress, due dates, and the note’s outline.',
          'Today (with Overdue), Upcoming, and All collect tasks across every note or one space. Ticking a task there edits its line in the note.'
        ]
      },
      {
        title: 'Quick Capture and stickies',
        description:
          'Capture from any app with a global shortcut, the tray menu, or the --quick-note and --quick-task flags.',
        capabilities: [
          'A captured note or task is appended to the chosen space’s Inbox.md. The popup closes only after saving, and drafts survive an accidental close.',
          'Pin a note or a task view to your desktop as a sticky, each in its own colour, kept on top or hidden. Position and size are remembered.',
          'Create sticky from selection turns selected text into a new note, linked back to the original, and pins it.'
        ]
      },
      {
        title: 'Safe writes and search',
        description: 'The Rust core writes every file atomically and never overwrites edits it has not seen.',
        capabilities: [
          'Each write carries the hash of the content it was based on. If the file changed in the meantime, the write is refused as a conflict.',
          'Deleted notes and folders move to the vault’s Trash and can be restored. Piw never deletes anything outside it on its own.',
          'Search every note with highlighted matches, from a rebuildable SQLite FTS5 index kept outside the vault.'
        ]
      },
      {
        title: 'Privacy and Piw 0.1',
        description: 'No account, cloud, telemetry, or network requests. Back up or sync the vault like any folder.',
        capabilities: [
          'Each native window has scoped capabilities; a sticky window can reach only its own note or view. Vault paths are validated in Rust.',
          'Notes, documents, sections, and tasks from a Piw 0.1 database are imported into the vault on first start. The old database is left untouched.',
          'The vault is plain text and not encrypted. Device or full-disk encryption protects data at rest.'
        ]
      }
    ],
    runtime: [
      ['Application', 'Tauri 2, React, TypeScript, and Rust; CodeMirror for the live Markdown editor.'],
      [
        'Data location',
        'Notes live in the vault (~/Piw by default). Settings, sticky positions, and the search index live in the OS app-data directory; Settings → Data shows both.'
      ],
      [
        'Window model',
        'Main window, Quick Capture popup, and separate sticky windows, all reading and writing the same vault.'
      ]
    ],
    shortcuts: [
      ['Ctrl + Shift + Space / ⌘ + Shift + Space', 'Open Quick Capture (configurable)'],
      ['Ctrl / ⌘ + Enter', 'Save the captured note or task'],
      ['Ctrl / ⌘ + K', 'Search every note'],
      ['Ctrl / ⌘ + N', 'Create a note'],
      ['Ctrl / ⌘ + D', 'Set a task’s due date'],
      ['Ctrl / ⌘ + Shift + P', 'Pin the note to your desktop'],
      ['Ctrl / ⌘ + Shift + S', 'Create a sticky from the selection']
    ],
    limitations: [
      'Pre-release. Verified daily on Linux with KDE Plasma; Windows and macOS build in CI but have not been tested by hand. GNOME and X11 are untested.',
      'On Wayland, Piw defaults to XWayland for sticky positioning and always-on-top behavior. Native Wayland does not provide those sticky features.',
      'A note renamed outside Piw loses its sticky, because the file watcher sees a delete and a create.',
      'Published builds are not signed. macOS Gatekeeper and Windows SmartScreen ask for approval on first open.'
    ]
  }
}
