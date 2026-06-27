# AIデキ過ぎ君 会社ホームページ

Cloudflare Pagesで公開するための静的サイトです。

## 構成

- `index.html`: サイト本体
- `styles.css`: デザイン
- `script.js`: メニュー開閉とLINEリンク設定
- `assets/`: favicon、OGP画像、背景SVG
- `_headers`: Cloudflare Pages用セキュリティヘッダー
- `_redirects`: SPA風のフォールバック設定
- `scripts/git-first-push.ps1`: GitHubリポジトリ作成後の初回push補助

## 公開前に差し替える項目

1. `script.js` の `LINE_URL` に問い合わせ先LINEのURLを設定
2. `index.html` フッターの運営会社、所在地
3. 必要に応じて電話番号、メール、会社概要、代表者名

## Cloudflare Pages設定

- Framework preset: `None`
- Build command: 空欄
- Output directory: `/`
- 公開URL: `.pages.dev`

## ローカル確認

PowerShellで以下を実行してください。

```powershell
python -m http.server 8788
```

ブラウザで `http://localhost:8788` を開きます。

## GitHub初回push

GitHubで空のリポジトリを作成したあと、表示されるHTTPS URLを使って以下を実行します。

```powershell
.\scripts\git-first-push.ps1 -RepoUrl "https://github.com/USER/REPO.git"
```

CodexでGitHubログイン後に操作できる状態になったら、この作業はCodexが実行できます。
