import Head from "next/head";
import Image from "next/image";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Script from "next/script";

export default function Home({ products }) {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-900">
        <SEO
          title="Modern Ecommerce Site"
          description="Modern Ecommerce site using Shopify, Next.js, Tailwind CSS, and GraphQL."
          image="share.png"
        />

        <Script
          async
          defer
          data-website-id="c45a9bfe-52f9-40e3-836e-9086389d8e9d"
          src="https://analytics.lucasdoell.com/umami.js"
        ></Script>

        <Hero />

        <a id="products" />
        <ProductList products={products} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
