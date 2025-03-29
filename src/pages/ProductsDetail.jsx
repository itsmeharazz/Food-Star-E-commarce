import React from "react";
import { useParams } from "react-router-dom";
import {products} from "../assets/assets"; 
import { FaPlus, FaWindowMinimize } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
const ProductsDetail = () => {
 const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);
  if (!product) {
    return <p className='text-center mt-12 text-6xl font-extrabold text-red-500'>Product not found</p>;
  }
  return (
    <div className='max-w-7xl mx-auto my-30 flex flex-col md:flex-row gap-12'>
      <div className='lg:w-3/4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <img src={product.image} alt={product.image} />
          <div className='text'>
            <h2 className='text-2xl font-bold'>{product.name}</h2>
            <div className='mt-10 flex gap-10 items-center'>
              <p className='text-2xl'>
                Price <br />৳{product.price}
              </p>
              <div className='w-[130px] h-[40px] p-3 rounded-4xl  border border-gray-400 flex justify-between items-center '>
                <FaWindowMinimize className='mb-3' />
                <span>0</span>
                <FaPlus />
              </div>
            </div>
              <button className="flex justify-around items-center gap-3 mt-10">
                <MdShoppingCartCheckout />
                Add to Cart
              </button>
          </div>
        </div>
        <p className="mt-20 text-2xl ">{product.description}</p>
        <p className="mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorum error voluptatibus laborum temporibus eius reiciendis dolorem vitae pariatur minima obcaecati laudantium illum fugit, consectetur, totam accusantium aperiam sint dolor facere officia ducimus, quos a odit. Magni dolor doloremque perspiciatis natus esse facilis alias reprehenderit sed itaque similique nemo explicabo numquam, necessitatibus nulla deleniti a assumenda. Dolores iure molestias quas temporibus pariatur! Eligendi possimus a numquam obcaecati laboriosam. Architecto earum, enim perferendis voluptas eligendi facilis exercitationem. Deleniti numquam, non harum maiores at dolorem ea, aut nisi quas iusto temporibus repudiandae eius corrupti est doloremque dolore placeat reprehenderit assumenda cumque dolor soluta exercitationem iure! Quidem ipsa error ex, nobis voluptatum quis dicta doloremque consequuntur nostrum perspiciatis a distinctio provident beatae magni. Expedita, perspiciatis? Dolore maxime rerum accusantium deserunt officiis facilis temporibus quibusdam porro provident facere! Et nostrum soluta quae nobis praesentium quas ipsum unde. Explicabo inventore perferendis pariatur asperiores commodi corporis?</p>
      </div>
    </div>
  );
};

export default ProductsDetail;
