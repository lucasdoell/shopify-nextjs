import Head from 'next/head'
import Image from 'next/image'
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

export default function Home({ products }) {

  return (
    <div className=''>
      <SEO 
        title="Modern eCommerce Site"
        description="Modern eCommerce site using Shopify, Next.js, Tailwind CSS, and GraphQL."
        image="share.png" 
      />
      
      <Hero />
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