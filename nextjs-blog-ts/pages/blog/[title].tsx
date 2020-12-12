
import {GetStaticPaths, GetStaticProps} from 'next'
import * as path from 'path'
import * as fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'  //jsxに変換する
import hydrate from 'next-mdx-remote/hydrate'


interface Props {
    source: Parameters<hydrate>[0];  // ???
    data: PostData;
}

interface PostData {
    title: string;
    data: string;
    spoiler: string;
}


// クライアントサイドではdefaultのfunctionしかバンドルされないので
// クライアント側に余計なコードが入らないのが良い点
export default function Post({ source, data }:  Props) {
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {hydrate(source)}
        </>
    )
}

// dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getPostAll().map((post) => ({
            params: {
                title: post.data.title
            },
        })),
        fallback: false
    }
}

// getStaticPathsでreturnしたtitleがgetStaticPropsに渡されてpropsとして返される
// そして返された値がdefaultのPostコンポーネントに渡される

// 本質的には、getStaticProps を使うことで Next.js にこう伝えることができるということです。
// 「このページにはいくつか外部に依存しているデータがあるよ。だからビルド時にこのページをプリレンダリングするときは、まずその依存関係をしっかり解決してよ！」

export const getStaticProps: GetStaticProps = async ({ params: { title } }) => {
    const { content, data } = getPostAll().find(m => m.data.title === title)
    const source = await renderToString(content)
    return {
      props: {source, data},
    }
};

const blogDirPath = path.join('pages', 'blog');

// 記事をとってくるfunction
function getPostAll() {
    return fs
        // blog以下のディレクトリ全部をとってくる & readdirSyncではディレクトリとファイルを両方とってくる
        // 今回はディレクトリのみ必要 withFileTypes:trueにしておくとfilterするときにそれがディレクトリなのかファイルなのかを判断するメソッドも返ってくる
        .readdirSync(blogDirPath, { withFileTypes: true })  
        .filter((dirEnt) => dirEnt.isDirectory())　// isDirectory = もしtrueだったら[]の中に残る
        .flatMap(dirEnt => {
            const dirPath = path.join(blogDirPath, dirEnt.name);
            return fs
                .readdirSync(dirPath)
                .map((fileName) => fs.readFileSync(path.join(dirPath, fileName)))
        }).map(fileBuffer => {
            const { orig, ...post } = matter(fileBuffer);
            return post;
        });
}