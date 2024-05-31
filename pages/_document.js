import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Author: Alex personal website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/svg+xml" href="favicon.png" />
          <link rel="stylesheet" href="css/devicon.min.css" />
          <link rel="stylesheet" href="css/all.min.css" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/swiper-bundle.min.css" />
          <link rel="stylesheet" href="css/animate.min.css" />
          <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
          {/* CSS Skin File */}
          <link rel="stylesheet" href="css/skins/yellow.css" />
          {/* Live Style Switcher - demo only */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
