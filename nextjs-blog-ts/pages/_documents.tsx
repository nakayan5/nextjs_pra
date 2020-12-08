import Documents, {Html, Head, Main, NextScript} from 'next/document'
import {InitializeColorMode} from 'theme-ui'


// _documents.tsxではAppコンポーネントより一階層上でHtmlやbodyタグを設定できる
// documentコンポーネントはサーバサイドでしかrenderされないため
// Appコンポーネントのようにイベントハンドラーを設定できない
// Documentsはclassコンポーネントでインポートされているためclassでextendsする

// カラーモードをenableするためのInitializeColorModeをrenderするためにDocumentsコンポーネントが必要
// InitializeColorModeを入れておくことでダークモード切り替え時のフラッシュをなくすことができる


export default class extends Documents {
    render() {
        return (
            <Html>
                <Head>
                    <body>
                        <InitializeColorMode />
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}