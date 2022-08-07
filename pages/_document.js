import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Fonts go here */}
      </Head>
      <body className='bg-white text-gray-900 dark:bg-slate-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}