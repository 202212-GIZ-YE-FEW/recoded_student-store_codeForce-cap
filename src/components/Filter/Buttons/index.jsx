import Image from "next/image"

import PriceFilter from "../Price"

export default function Buttons({ filters = [], handleCategoryFilter }) {
  const CategoryFilter = ({ filter, image, alt }) => (
    <button className='ml-4' onClick={() => handleCategoryFilter(filter)}>
      <Image
        className='rounded-lg'
        src={image}
        alt={alt}
        width={150}
        height={150}
      />
    </button>
  )

  return (
    <div className='flex flex-col font-poppins mb-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-5 lg:ml-0'>
        <span className='block bg-[url("/images/Highlighter.png")] bg-[bottom] bg-[length:70%_70%] bg-no-repeat text-center text-[200%] md:text-[400%] text-bubble-gum font-bold'>
          <button onClick={() => handleCategoryFilter("")}>Categories</button>
        </span>
        <span className='hidden lg:block bg-[url("/images/Highlighter.png")] bg-[bottom] lg:bg-[length:70%_70%] bg-no-repeat text-center text-[400%] text-bubble-gum font-bold'>
          <h2>Price Filter</h2>
        </span>
      </div>
      <div className='flex flex-col lg:flex-row justify-between shadow-2xl rounded-[8vw] lg:rounded-full items-center lg:pr-20 py-10'>
        <span className='grid grid-cols-4 gap-4 md:gap-20 lg:gap-4 pb-10 lg:pb-0 mx-auto pr-4 lg:px-0'>
          {filters.map(({ filter, image, alt }) => (
            <CategoryFilter
              key={filter}
              filter={filter}
              image={image}
              alt={alt}
            />
          ))}
        </span>
        <span className='w-[70vw] md:w-[40vw] lg:w-[400px] lg:mb-[3vw]'>
          <PriceFilter />
        </span>
      </div>
    </div>
  )
}
