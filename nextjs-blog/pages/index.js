import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// getStaticProps は サーバサイドでのみ 実行される

// 本質的には、getStaticProps を使うことで Next.js にこう伝えることができるということです。
// 「このページにはいくつか外部に依存しているデータがあるよ。だからビルド時にこのページをプリレンダリングするときは、まずその依存関係をしっかり解決してよ！」

// getStaticPropsはページからのみexportできます。
// ページではないファイルから export することはできません。
// この制約の理由のひとつは、React では、ページがレンダリングされる前に、必要なデータがすべて揃っている必要があるからです。

// 関数を呼び出した結果は props キーの内部で返す必要があります。
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}

// console.log(allPostsData);
//       [
//         {
//           id: 'ssg-ssr',
//           title: 'When to Use Static Generation v.s. Server-side Rendering',
//           date: '2020-01-02'
//         },
//         {
//           id: 'pre-rendering',
//           title: 'Two Forms of Pre-rendering',
//           date: '2020-01-01'
//         }
//       ]

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
              ))}
          </ul>
      </section>
    </Layout>
  )
} 
