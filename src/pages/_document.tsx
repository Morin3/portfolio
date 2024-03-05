import data from '@/data';
import { Head, Html, Main, NextScript } from 'next/document';
import { FrameMetadata } from '@coinbase/onchainkit';

const Document = () => {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://avneesh.tech';

  return (
    <Html lang="en">
      <Head>
        <FrameMetadata
          buttons={[
            {
              label: 'About',
              action: 'post',
            },
            {
              label: 'Past Works',
              action: 'post',
            },
            {
              label: 'Blog',
              action: 'link',
              target: 'https://blog.avneesh.tech',
            },
            {
              label: 'Socials',
              action: 'post',
            },
          ]}
          image={{
            src: `${URL}/About.png`,
            aspectRatio: '1.91:1',
          }}
          input={{
            text: 'enter...',
          }}
          postUrl={`${URL}/api/frame`}
        />

        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link href="/logo.svg" rel="icon" />
        <link
          href="/rss.xml"
          rel="alternate"
          title="RSS"
          type="application/rss+xml"
        />
        <meta content="/About.png" property="og:image" />
        <meta content={data.keywords} name="keywords" />
        <link href="/manifest.json" rel="manifest" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${URL}/About.png`} />
        <meta property="fc:frame:post_url" content={`${URL}/api/frame`} />

        <link href="/icon.png" rel="apple-touch-icon" />

        <meta content="#fff" name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
