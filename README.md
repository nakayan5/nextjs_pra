This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### 1. Next.jsで環境構築するメリット
・Babel＆Webpackの複雑な環境設定が不要　<br />
・Code Splittingのような最適化設定が不要 <br />
・パフォーマンスやSEOのためのPre-render設定が不要 <br />
・Renderringのタイミングを選択できる <br />
・サーバサイドレンダリングの処理を簡単に実装できる <br />

### 2. 環境構築
`npx create-next-app プロジェクト名` <br />

### 3. ルーティング処理
pagesディレクレリにファイルを作成すると、そのファイルがWebサイトの1ページになる <br />
・`pages/index.js` => '/' つまりroute <br />
・`pages/posts/first-post.js` => '/posts/first-post' <br />
素のReactではreact-routerを使用するのが一般的であるが、記述が大変だった。Next.jsではその煩わしさがない。<br />
・Linkコンポーネントの使用する （client-side navigationの役割を担う) <br />
`<Link href="/posts/first-post"> <a>クリック</a> </Link>`

#### Client-Side Navigation
・JavaScriptのよってページを切り替える仕組み　<br />
・URLを切り替えてもページの再読み込みが不要　<br />
・ブラウザのページ遷移よりも高速　<br />
・クライアントの状態を保ってページ遷移

### 4. 画像&メタデータ&CSS
#### 静的ファイルを追加する
・publicディレクレリのファイルを参照可能 <br />
・publicをルートとしたルートパスで記述する　<br />
　ex) publicディレクレリの直下にvercel.svgがある場合　<br />
`<img src="/vercel.svg" alt="vercel logo" className="logo" />`

#### メタデータを編集する
通常のReactアプリケーションでは基本的にheadタグを直接編集することができない(ライブラリを使用すれば可能)。<br />
つまりページごとにheadタグを設定することができない。<br />
=> SEO的に不利　<br />
Next.jsではheadタグではなく、Headコンポーネントの使用する　<br />
・Headコンポーネントをimport　<br />
・Headコンポーネントは<head>に変換される <br />
・ページごとにメタデータを設定できる <br />

### 5. Pre-rendering
・Next.jsはデフォルトで全ページをPre-renderする。<br /
・Pre-renderingとは事前にHTMLを生成すること。 <br />
=> ユーザーがアクセスした時に事前に生成してあるHTMLファイルを表示するやり方。 <br />
=> 結果的にブラウザの負荷を下げて、表示を高速化する。<br />
=> 検索エンジンのクローラーにコンテンツを見せることができる。<br/>
(通常のReactのアプリケーションではクライアントサイドレンダリングでHTMLを生成する。<br />
クライアントサイドレンダリングではユーザーがWebページにアクセスして、Webページを表示しようとしている時にブラウザ側でHTMLを生成するやり方。) <br />
また、Pre-renderingの中で①Static Generation と ②Server-side Rendering の2種類があり、１つのアプリケーションの中でページごとにStatic Generation か Server-side Rendering を選択することができる。<br/>

#### ■Static Generation
ユーザーがアクセスした時ではなく、開発者がbuildした時にHTMLを生成する。<br />
`$ next build` <br />
最適なページは更新頻度が低く、user:contents = 1:N <br/>
ex) ブログ、ECサイト、LP、問い合わせ

##### 外部データが無い場合
1．ビルド時にHTMLをレンダリングする。<br/>
##### 外部データがある場合
1. ビルド時にDBや外部APIからデータを取得する。この時,__getStaticProps()__ を使う。<br/>
2. 取得したデータを使ってHTMLをレンダリングする。<br/>
getStaticProps()<br/>
・async/awaitを使って非同期処理を制御できる。 <br/>
・開発環境ではリクエストごとに実行される。<br/>
・本番環境ではビルド時に実行される関数  
・**pageコンポーネントでのみ使用可**　<br/>

#### ■Server-side Rendering
ユーザーがアクセスした時にサーバサイド側でHTMLを生成する。<br/>
最適なページは更新頻度が高く、user:contents = N:N <br/>
ex) SNS、チャット、動画配信
