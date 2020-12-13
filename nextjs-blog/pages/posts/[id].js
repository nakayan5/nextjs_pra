import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  // console.log(postData);
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
    )
}

// getStaticPathsとgetStaticProps内のコードはサーバサイド側のコード
// なので内のコードはサーバサイドで動いている

// getStaticPathsでどんなページを表示する可能性があるかを判断する
export async function getStaticPaths() {
    // pathsは配列
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

// console.log(paths);
//     [ 
//       { params: { id: 'pre-rendering' } }, 
//       { params: { id: 'ssg-ssr' } } 
//     ]


// 最後に、ここでまた getStaticProps を実装します。
// 今回は、受け取ったidに基づいて必要なデータを取得します。
// getStaticProps は params を受け取りますが、そこには id が含まれています。
// getStaticPropsでデータを取得する
export async function getStaticProps({ params }) {
  console.log(params);
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

