import Image from "next/image"

export default function Buttons({ filters = [], handleFilterClick }) {
  const FilterButton = ({ filter, image, alt }) => (
    <button className='ml-6' onClick={() => handleFilterClick(filter)}>
      <Image
        className='rounded-lg w-[20]'
        src={image}
        alt={alt}
        width={120}
        height={120}
      />
    </button>
  )

  return (
    <div className='my-6 flex flex-col'>
      <div className='my-6 flex justify-between mx-8 font-poppins font-bold text-bubble-gum'>
        <button
          className='text-[38px] bg-High-lighter'
          onClick={() => handleFilterClick("")}
        >
          Categories
        </button>
        <h2 className='text-[38px] bg-High-lighter mr-52 hidden sm:block md:hidden lg:block'>
          Price Filter
        </h2>
      </div>
      <div className='flex justify-between shadow-2xl py-4 rounded-full'>
        <span>
          {filters.map(({ filter, image, alt }) => (
            <FilterButton
              key={filter}
              filter={filter}
              image={image}
              alt={alt}
            />
          ))}
        </span>
        <h1>HI</h1>
      </div>
    </div>
  )
}
