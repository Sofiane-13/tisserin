import Document, { Html, Head, Main, NextScript } from "next/document"
import { CssBaseline } from "@nextui-org/react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
