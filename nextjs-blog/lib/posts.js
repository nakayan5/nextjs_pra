// ファイルシステムからデータを取得するための簡単なライブラリ

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// postディレクレリの中にあるpre-rendering.md と ssg-ssr.mdのパスを
// 定数postsDirectoryに代入する
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // /posts　配下のファイル名を取得する
    const fileNames = fs.readdirSync(postsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]
    const allPostsData = fileNames.map(fileName => {
        // id を取得するためにファイル名から ".md" を削除する
        const id = fileName.replace(/\.md$/, '')

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName)
          // C:\Users\中村友哉\practice\nextjs-blog\nextjs-blog\posts\pre-rendering.md
          // C:\Users\中村友哉\practice\nextjs-blog\nextjs-blog\posts\ssg-ssr.md
        const fileContents = fs.readFileSync(fullPath, 'utf8')
          // そのままのファイルの内容

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
          id,
          ...matterResult.data
        }
    })
    // 投稿を日付でソートする
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

export function getAllPostIds() {
    // pre-rendering と ssg-ssr.mdのファイル名を取得する
    const fileNames = fs.readdirSync(postsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

    //  Returns an array that looks like this:
    //  [
    //    {
    //      params: {
    //        id: 'ssg-ssr'
    //       }
    //     },
    //     {
    //      params: {
    //         id: 'pre-rendering'
    //       }
    //    }
    //  ]

    // fileNamesは配列なのでmapでイテレートすることができる
    // イテレートの結果が上記の配列
    return fileNames.map(fileName => {
      return {
          params: {
              id: fileName.replace(/\.md$/, '')　　//拡張子.mdを削る
          }
      }
    })

    // return されるリストはただの文字列の配列では ありません。
    // 上記でコメントアウトされているようなオブジェクトの配列でなければなりません。
    // 各オブジェクトには params キーが存在して、id キーを持ったオブジェクトを含んでいなくてはなりません（ファイル名で [id] を使用するため）。
    // そうしなければ、getStaticPaths は失敗します。
}


// id に基づいてブログの投稿データを返します。
// ファイルの中身を読み込んでgray-matterでパースする
// remarkメソッドを非同期処理で使用したいのでasync/awaitを使用する
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

     // 投稿のメタデータ部分を解析するために gray-matter を使う
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

     // データを id と組み合わせる
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
}