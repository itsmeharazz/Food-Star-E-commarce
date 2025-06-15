import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({
  products,
  currentPage,
  selectedCategory,
  pageSize,
  selectedBrand,
}) => {
  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        !selectedCategory || product.category === selectedCategory;
      const brandMatch = !selectedBrand || product.brandName === selectedBrand;
      return categoryMatch && brandMatch;
    })
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
      {filteredProducts.map((product) => (
        <Link
          to={`/productsDetails/${product.id}`}
          key={product.id}
          className='p-5 shadow-lg rounded cursor-pointer'>
          <div className='img'>
            <img src={product.image} className='w-full' alt={product.name} />
          </div>
          <h3 className='mt-4 mb-2 font-bold text-xl hover:text-blue-600 cursor-pointer'>
            {product.name}
          </h3>
          <h3 className='mt-4 mb-2 text-xl font-medium cursor-pointer'>
            $ {product.price}
          </h3>
          <h3 className='mt-4 mb-2 font-normal cursor-pointer'>
            {product.description?.length > 25
              ? `${product.description.slice(0, 25)}...`
              : product.description}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCard;
