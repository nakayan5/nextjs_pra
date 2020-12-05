import Head from 'next/head'
import {GetStaticProps} from 'next'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tomoya</title>
        <link 
          rel="icon" 
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/unicorn_1f984.png"
          />
      </Head>
      <main>welcome</main>
    </div>
  )
}


// getStaticPropsをexportしておくことでbuild時にページを生成してくれる
// defaultでexportしているHomeコンポーネントにpropsを渡すことができる
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
};