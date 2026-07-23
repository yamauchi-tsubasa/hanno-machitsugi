# 飯能まち継ぎプロジェクト ウェブサイト試作版

ビルド作業不要の静的ウェブサイトです。HTML・CSS・JavaScriptのみで構成しているため、GitHub Pagesにそのまま公開できます。

## 写真について

この試作版には、人物・店舗・イベントの実写写真を含めていません。
写真を掲載する場所には、次の差し替え用SVG画像を使用しています。

- `assets/images/placeholder-machimaki.svg`
- `assets/images/placeholder-machitsugi.svg`

そのため、写真がない状態でもレイアウトを確認でき、GitHub Pagesでの表示も崩れません。
実写写真を追加する際は、撮影者の著作権、被写体の肖像権、店舗・団体の掲載許可を確認してください。

## まず確認する方法

1. フォルダ内の `index.html` をダブルクリックします。
2. ブラウザで各ページを確認します。

一部のブラウザでローカル表示に制限がある場合：

```bash
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開きます。

## 主なファイル

- `index.html`：トップページ
- `about.html`：プロジェクトについて
- `history.html`：活動の歩み
- `objects.html`：景観オブジェ紹介
- `events.html`：イベント報告
- `team.html`：メンバー・連携団体
- `contact.html`：お問い合わせ
- `assets/js/site-data.js`：店舗・イベント等の更新データ
- `assets/css/style.css`：色・レイアウト・スマホ表示
- `assets/images/`：写真・ロゴ

## 学生が更新する際の基本手順

### 景観オブジェを追加する

`assets/js/site-data.js` の `objects` に次を追加します。

```javascript
{
  year: "2025",
  shop: "店舗名",
  theme: "オブジェのテーマ",
  description: "短い説明",
  image: "assets/images/写真ファイル名.jpg"
}
```

### イベントを追加する

`events.html` のカードをコピーして、日付・見出し・本文・画像を変更します。
将来的にはイベントも `site-data.js` から自動表示する形へ拡張可能です。

### 写真を差し替える

1. 写真を `assets/images/` に入れます。
2. HTMLまたは `site-data.js` の画像パスを変更します。
3. ファイル名は英数字とハイフンを推奨します。例：`2025-hanno-festival-01.jpg`

## GitHub Pagesで無料公開する方法

### 1. GitHubアカウントを作る

GitHubのウェブサイトから無料アカウントを作成します。

### 2. 新しいリポジトリを作る

- Repository name：例 `hanno-machitsugi`
- Publicを選択
- `Create repository`

### 3. ファイルをアップロードする

作成したリポジトリで `Add file` → `Upload files` を選び、このフォルダの中身をすべてアップロードします。
`hanno-machitsugi-site-prototype` フォルダ自体ではなく、`index.html` が最上位に来るようにしてください。

### 4. Pagesを有効にする

1. `Settings`
2. 左メニューの `Pages`
3. Source：`Deploy from a branch`
4. Branch：`main`、フォルダ：`/ (root)`
5. `Save`

数分後、次のようなURLが発行されます。

`https://ユーザー名.github.io/hanno-machitsugi/`

## 更新方法

小規模な修正はGitHub上でファイルを開き、鉛筆アイコンから直接編集できます。
写真の追加は `Add file` → `Upload files` です。

より更新を簡単にしたい場合、次の段階で以下を導入できます。

- Decap CMS：ブラウザ上の管理画面から更新
- Googleスプレッドシート連携：店舗情報を表から反映
- Astro / Eleventy：記事や年度ページをMarkdownで管理

現段階では、管理コストが低く壊れにくい「HTML＋1つのデータファイル」を採用しています。

## 公開前の確認事項

- プロジェクト用問い合わせメールアドレス
- 掲載する学生・関係者の氏名と写真の同意
- 店舗写真・インタビュー内容のウェブ掲載許可
- 後援団体ロゴの使用許可
- 写真の撮影者・クレジット
- プライバシーポリシーまたは個人情報の取り扱い
- 2026年度以降の運営責任者と更新ルール

## リポジトリ公開時の注意

- `.env` などの秘密情報を含むファイルは公開しないでください。
- この試作版には、APIキー、パスワード、個人メールアドレスは含まれていません。
- 公開URLが決まったら `sitemap.xml` にURLを記入してください。
- コードや画像の再利用条件を示す場合は、方針に合った `LICENSE` ファイルを追加してください。
