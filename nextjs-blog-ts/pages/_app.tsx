import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import { theme } from "src/logic/styles";
import styled from "@emotion/styled";
import { Header } from "src/components";
import Link from 'next/link'


// この App コンポーネントは、すべてのページに共通するトップレベルのコンポーネントです。
// たとえば、ページ間を移動するときに状態（state）を保持するために App コンポーネントを使用することができます。

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next.js Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/unicorn-face_1f984.png"
        />
      </Head>

      <Container>
        <Header />
        <main>
          <Component {...pageProps} />
          <Link href={`/blog/${title}`}>
              <a>次のページ</a>
          </Link>
        </main>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;