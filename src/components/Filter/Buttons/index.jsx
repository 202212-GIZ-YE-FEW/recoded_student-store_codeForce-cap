import Image from "next/image"

import Highlighter from "@/components/highlighter"

import PriceFilter from "../Price"

export default function Buttons({ filters = [], handleCategoryFilter }) {
  const CategoryFilter = ({ filter, image, alt }) => (
    <button className='ml-4' onClick={() => handleCategoryFilter(filter)}>
      <Image
        className='rounded-full cart-animation'
        src={image}
        alt={alt}
        width={150}
        height={150}
      />
    </button>
  )

  return (
    <div className='flex flex-col mb-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-5 lg:ml-0'>
        <button
          className='transition hover:scale-105'
          onClick={() => handleCategoryFilter("")}
        >
          <Highlighter highlighterStyle='category' text='Categories' />
        </button>
        <Highlighter highlighterStyle='priceFilter' text='Price Filter' />
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
