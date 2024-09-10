// @ts-check
const engine = require('cz-conventional-changelog/engine')

/** @typedef {{ title: string, description: string, emoji?: string } } CommitType */

// ref: https://github.com/pvdlg/conventional-commit-types/blob/master/index.js#L93
/** @type {{ [K: string]: CommitType }} */
const commitTypes = {
  feat: {
    description: '新しい機能を追加する',
    title: 'Features',
    emoji: '✨',
  },
  fix: {
    description: 'バグを修正する',
    title: 'Bug Fixes',
    emoji: '🐛',
  },
  docs: {
    description: 'ドキュメントのみを変更する',
    title: 'Documentation',
    emoji: '📚',
  },
  style: {
    description: 'コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）',
    title: 'Styles',
    emoji: '💎',
  },
  refactor: {
    description: 'バグを修正したり機能を追加したりしないコードの変更',
    title: 'Code Refactoring',
    emoji: '📦',
  },
  perf: {
    description: 'パフォーマンスを向上させるコードの変更',
    title: 'Performance Improvements',
    emoji: '🚀',
  },
  test: {
    description: 'テストの追加や既存のテストの修正',
    title: 'Tests',
    emoji: '🚨',
  },
  build: {
    description: 'ビルドシステムや外部依存関係に影響を与える変更（スコープの例：gulp、broccoli、npm）',
    title: 'Builds',
    emoji: '🛠',
  },
  ci: {
    description: 'CI設定ファイルとスクリプトの変更（スコープの例：Travis、Circle、BrowserStack、SauceLabs）',
    title: 'Continuous Integrations',
    emoji: '⚙️',
  },
  chore: {
    description: 'ソースコードやテストファイルを変更しないその他の変更',
    title: 'Chores',
    emoji: '♻️',
  },
  revert: {
    description: '以前のコミットを元に戻す',
    title: 'Reverts',
    emoji: '🗑',
  }
}

module.exports = engine({
  types: commitTypes,
  defaultType: undefined,
  defaultScope: undefined,
  defaultSubject: undefined,
  defaultBody: undefined,
  defaultIssues: undefined,
  disableScopeLowerCase: undefined,
  disableSubjectLowerCase: undefined,
  maxHeaderWidth: 100,
  maxLineWidth: 100,
})