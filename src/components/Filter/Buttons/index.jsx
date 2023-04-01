import Image from "next/image"

export default function Buttons({ filters = [], handleCategoryFilter }) {
  const CategoryFilter = ({ filter, image, alt }) => (
    <button className='ml-6' onClick={() => handleCategoryFilter(filter)}>
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
      <div className='my-6 flex w-full justify-between mx-8 font-poppins font-bold text-bubble-gum'>
        <span className='bg-high-lighter px-7 bg-[center_top_0.7rem] mx-10 bg-[length:97%_50px]  bg-no-repeat'>
          <button
            className='text-[38px]'
            onClick={() => handleCategoryFilter("")}
          >
            Categories
          </button>
        </span>
        <span className='bg-high-lighter px-7 bg-[center_top_0.9rem] mx-10 bg-[length:110%_50px] bg-no-repeat  mr-52'>
          <h2 className='text-[38px] hidden sm:block md:hidden lg:block'>
            Price Filter
          </h2>
        </span>
      </div>
      <div className='flex justify-between shadow-2xl py-4 rounded-full'>
        <span>
          {filters.map(({ filter, image, alt }) => (
            <CategoryFilter
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
