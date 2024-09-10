# Project Name

## セットアップ

1. リポジトリをクローンします：
   ```bash
   gh repo clone R1013-T/lefthook-dockercompose
   cd lefthook-dockercompose
   ```

2. 依存関係をインストールします：
   ```bash
   pnpm install
   ```

3. 環境変数を設定します：
   ```bash
   cp packages/web/.env.development.example packages/web/.env.development
   cp packages/web/.env.production.example packages/web/.env.production
   ```
   必要に応じて、`.env.development` と `.env.production` ファイルを編集してください。

## 開発

### ローカルで開発する手順

1. 開発用 Docker コンテナを起動します：
   ```bash
   docker compose -f compose.development.yaml up --build
   ```

   本番環境用の Docker コンテナを起動する場合は：
   ```bash
   docker compose -f compose.production.yaml up --build
   ```

2. ブラウザで `http://localhost:3000` を開きます。


## Git

このプロジェクトは Lefthook を使用して Git フックを管理し、commitlint を使用してコミットメッセージの規約を強制しています。

### コミットリント
コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) の規約に従う必要があります。

ステージング後、以下のコマンドを実行してコミットメッセージを生成することができます。
```bash
pnpm cz
```