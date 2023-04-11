import Image from "next/image"

function CardView() {
  return (
    <div className='items-center bg-gray-50 rounded-lg shadow sm:flex'>
      <a href='#'>
        <Image
          className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
          src='cat-photo.svg'
          alt=''
          width={100}
          height={100}
        />
      </a>

      <div className='p-5'>
        <h3 className='text-xl font-bold tracking-tight text-black'>
          Full Name
        </h3>

        <span className='text-gray-500'>Web Developer</span>

        <p className='mt-3 mb-4 font-semibold text-gray-500'>describe</p>

        <ul className='flex space-x-4 sm:mt-0'>
          <li>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <Image
                src='facebook-circle.svg'
                width={60}
                height={70}
                alt='Facebook'
              />
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <Image
                src='twitter.svg'
                width={60}
                height={70}
                alt='twitter logo'
              />
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <Image
                src='github.svg'
                width={60}
                height={70}
                alt='github logo'
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardView
