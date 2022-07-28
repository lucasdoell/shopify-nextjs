import Head from 'next/head'
import Image from 'next/image'
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

export default function Home({ products }) {

  return (
    <div className='bg-white dark:bg-slate-900'>
      <SEO 
        title="Modern Ecommerce Site"
        description="Modern Ecommerce site using Shopify, Next.js, Tailwind CSS, and GraphQL."
        image="share.png" 
      />
      
      <Hero />

      <a id="products" />
      <ProductList products={products} />
        
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  }
}