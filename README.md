This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Next.js

### Next.jsで環境構築するメリット
・Babel＆Webpackの複雑な環境設定が不要　<br />
・Code Splittingのような最適化設定が不要 <br />
・パフォーマンスやSEOのためのPre-render設定が不要 <br />
・Renderringのタイミングを選択できる <br />
・サーバサイドレンダの処理を簡単に実装できる <br />

### 環境構築
`npx create-next-app プロジェクト名` <br />

### ルーティング処理
pagesディレクレリにファイルを作成すると、そのファイルがWebサイトの1ページになる <br />
・`pages/index.js` => '/' つまりroute <br />
・`pages/posts/first-post.js` => '/posts/first-post' <br />
素のReactではreact-routerを使用するのが一般的であるが、記述が大変だった。Next.jsではその煩わしさがない<br />
・Linkコンポーネントの使用する （client-side navigationの役割を担う) <br />
`<Link href="/posts/first-post"> <a>クリック</a> </Link>`

#### Client-Side Navigation
・JavaScriptのよってページを切り替える仕組み　<br />
・URLを切り替えてもページの再読み込みが不要　<br />
・ブラウザのページ遷移よりも高速　<br />
・クライアントの状態を保ってページ遷移

### 画像 メタデータ CSS
#### 静的ファイルを追加する
・publicディレクレリのファイルを参照可能 <br />
・publicをルートとしたルートパスで記述する　<br />
ex) publicディレクレリの直下にvercel.svgがある場合　<br />
`<img src="/vercel.svg" alt="vercel logo" className="logo" />`
