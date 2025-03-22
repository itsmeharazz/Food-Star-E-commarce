import React from 'react'
import {category} from '../../assets/assets';

const Category = ({categoryes,setCategory}) => {
  return (
    <div className='container my-10 '>
      <div className=' flex w-full h-[9em]  justify-between items-center gap-4 '>
        {category.map((items, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === items.name ? "All" : items.name))
            }
            className='rounded-full w-[7.5em] h-[10em]  text-center cursor-pointer'>
            <div className='w-[100%] h-[80%] file:cover  rounded-full '>
              <img
                src={items.image}
                className={`rounded-full  object-cover transition-all duration-300 ${
                  categoryes === items.name
                    ? "active p-1"
                    : ""
                }`}
                alt=''
              />
            </div>
            <p>{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category