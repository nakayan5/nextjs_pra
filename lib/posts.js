import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// postディレクレリの中にあるpre-rendering.md と ssg-ssr.mdのパスを
// 定数postsDirectoryに代入する
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
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
  const fileNames = fs.readdirSync(postsDirectory)

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

  // fileNamesは配列なのでmapでイテレートするできる
  // イテレートの結果が上記の配列
  return fileNames.map(fileName => {
    return {
        params: {
            id: fileName.replace(/\.md$/, '')　　//拡張子.mdを削る
        }
    }
  })
}

// ファイルの中身を読み込んでgray-matterでパースする
// remarkメソッドを非同期処理で使用したいのでasync/awaitを使用する
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}