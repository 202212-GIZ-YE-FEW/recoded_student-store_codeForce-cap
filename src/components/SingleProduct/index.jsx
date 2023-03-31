import Image from "next/image"

function SingleProduct() {
  return (
    <section className='py-12 sm:py-16'>
      <div className='container mx-auto px-4'>
        <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
          <div className='lg:col-span-3 lg:row-end-1'>
            <div className='lg:flex lg:items-start'>
              <div className='lg:order-2 lg:ml-5'>
                <div className='max-w-xl overflow-hidden rounded-lg'>
                  <Image
                    className='h-full w-full max-w-full object-cover'
                    src=''
                    alt=''
                  />
                </div>
              </div>
              <div className='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                <div className='flex flex-row items-start lg:flex-col'>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src=''
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src=''
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src=''
                      alt=''
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 className='sm: text-2xl font-bold text-gray-900 sm:text-3xl'>
              Afro-Brazillian Coffee
              {/* add Background */}
            </h1>
            <div className='mt-5 flex items-center'></div>
            <h2 className='mt-8 text-base text-gray-900'>Coffee Type</h2>
            <div className='mt-3 flex select-none flex-wrap items-center gap-1'></div>
            <h2 className='mt-8 text-base text-gray-900'>
              Choose subscription
            </h2>
            <div className='mt-3 flex select-none flex-wrap items-center gap-1'></div>
            <div className='mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
