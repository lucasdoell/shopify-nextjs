import Head from 'next/head'

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
        <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
        <meta httpEquiv='Content-Type' content="text/html; charset=ISO-8859-1" />
        <meta name='description' content='Modern eCommerce site using Shopify, Next.js, Tailwind CSS, and GraphQL.' />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ds2.lucasdoell.dev" />
        <meta property="og:image" content={`https://ds2.lucasdoell.dev/images/${image}`} />
        <meta property="og:description" 
          content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={title} />
    </Head>
  )
}