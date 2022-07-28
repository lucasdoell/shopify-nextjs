import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';

export default function Nav() {

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="border-b dark:border-slate-700 sticky top-0 z-20 bg-white dark:bg-slate-900">
      <div className="w-full flex items-center justify-between max-w-6xl pt-4 pb-2 px-16 mx-auto lg:max-w-full">
        <Link href="/" passHref>
          <a className='cursor-pointer'>
            <span className='text-lg pt-1 font-bold text-left dark:text-white'>
              🚀 Shopify + Next.js
            </span>
          </a>
        </Link>
        <a 
          className='text-md font-bold cursor-pointer dark:text-white'
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>

    </header>
  )
}
