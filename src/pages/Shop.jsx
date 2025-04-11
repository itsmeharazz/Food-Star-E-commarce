import React, { useState, useEffect } from 'react'
import CategorySelection from '../components/CategorySelection/CategorySelection';
import ProductsCard from '../components/ProductsCard/ProductsCard';
import Pagination from '../components/Pagination/Pagination';

const Shop = () => {
     const [products, setProducts]= useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = 9;
     const [selectedCategory, setSelectedCategory] = useState(null);
     const [activeCategory, setActiveCategory] = useState(null);

     useEffect(() => {
       async function fetchproducts() {
         let url =
           "http://localhost:5000/products?page=${currentPage}&limit=${pageSize}";
         if (selectedCategory) {
           url += `&category=${selectedCategory}`;
         }
         const response = await fetch(url);
         const data = await response.json();
         setProducts(data);
       }
       fetchproducts();
     }, [currentPage, pageSize, selectedCategory]);
     const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
     };
const handleCategoryChange = (category) => {
  setSelectedCategory(category);
  setCurrentPage(1);
  setActiveCategory(category);
};

  return (
    <div>
      <div className='container mt-25 px-12 flex justify-between items-start gap-10'>

        {/* Sid bar */}
          <div className='sidevar w-[23%]'>
            {/* Display Category */}
            <div className='w-full h-[360px] shadow-md rounded-xl border border-[#d9d9d9] mb-10 py-5 px-4'>
              <h2 className='text-2xl font-extrabold text-[#383636] mb-2'>
                Category
              </h2>
              <div className=' overflow-y-school '>
                
                <CategorySelection
                  onSelectCategory={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  activeCategory={activeCategory}
                />
              </div>
            </div>
            {/* Display Brand */}
            <div className='w-full h-[360px] shadow-md rounded-xl border border-[#d9d9d9] mb-10 py-5 px-4'>
              <h2 className='text-2xl font-bold text-[#383636] mb-2'>Brands</h2>
              <div className=' overflow-y-school '></div>
            </div>
          </div>

          {/* Display Products  */}
          <div className='w-[75%]'>
            <ProductsCard
              products={products}
              currentPage={currentPage}
              selectedCategory={selectedCategory}
              pageSize={pageSize}
            />
          </div>
      </div>

      {/* Display Pagination */}
      <div className='my-10 '>
        <Pagination
          onPageChange={handlePageChange}
          products={products}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
 
}

export default Shop