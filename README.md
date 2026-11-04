# github_public_pr

Pull Request を色々試すためのサンプルリポジトリです。

## 構成

- `app/`: Vite で作成した React + TypeScript の hello world アプリ
- `website/`: Docusaurus で作成したドキュメントサイト
- `.github/workflows/pages.yml`: テスト・ビルド・GitHub Pages 公開用の workflow

## ローカル実行

### React アプリ

```bash
cd app
npm install
npm run dev
```

### React アプリのテスト

```bash
cd app
npm test
```

### Docusaurus ドキュメント

```bash
cd website
npm install
npm run start
```
