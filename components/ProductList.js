import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
  return (
    <div className="bg-white px-10">
      <div className="mx-auto pt-16 pb-0 px-4 sm:py-24 sm:px-6 lg:px-8 lg:pt-48 lg:pb-4">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Products
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products.map(product => (
            <ProductCard key={product.node.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList