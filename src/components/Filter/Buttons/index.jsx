import Image from "next/image"

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
      <div className='grid grid-cols-2 gap-x-10 text-[7vw] md:text-[5vw] lg:text-[3vw] text-bubble-gum font-bold py-5 text-center lg:text-left ml-[28vw] md:ml-[26vw] lg:ml-0 w-full'>
        <span className='bg-high-lighter bg-[length:45vw_100%] md:bg-[length:32vw_100%] lg:bg-[length:50%_100%] bg-no-repeat md:bg-center lg:bg-left-bottom'>
          <button className='lg:ml-9' onClick={() => handleCategoryFilter("")}>
            Categories
          </button>
        </span>
        <span className='bg-high-lighter bg-[length:50%_100%] bg-[center] bg-no-repeat hidden lg:block text-center'>
          <h2>Price Filter</h2>
        </span>
      </div>
      <div className='flex flex-col lg:flex-row justify-between shadow-2xl rounded-[8vw] lg:rounded-full items-center lg:pr-20 py-10'>
        <span className='grid grid-cols-4 gap-4 md:gap-28 lg:gap-4 pb-10 lg:pb-0 mx-auto pr-4 lg:px-0'>
          {filters.map(({ filter, image, alt }) => (
            <CategoryFilter
              key={filter}
              filter={filter}
              image={image}
              alt={alt}
            />
          ))}
        </span>
        <span className='w-[70vw] md:w-[40vw] lg:w-[400px]'>
          <Image
            src='/Images/Price-Filter.png'
            alt='...'
            width={400}
            height={400}
          />
        </span>
      </div>
    </div>
  )
}
