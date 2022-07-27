import ProductCard from "./ProductCard"

const RecommendedList = ({ products, current }) => {
  return (
    <div className="bg-white px-10">
      <div className=" mx-auto pt-16 pb-0 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Recommended Products
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products.map(product => (
            product.node.id === current ? null : <ProductCard key={product.node.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default RecommendedList