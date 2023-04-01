import Image from "next/image"

function SingleProduct() {
  return (
    <section className='py-12 sm:py-16'>
      <div className='container mx-auto px-4'>
        <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-4 lg:gap-16 justify-items-center'>
          <div className='lg:col-span-2 lg:row-end-1'>
            <div className='md:row'>
              <div className='md:col-span-1 lg:order-2 lg:ml-5'>
                <div className='overflow-hidden rounded-lg'>
                  <Image
                    className='h-full w-full max-w-full object-cover'
                    src='photo-one.svg'
                    width={500}
                    height={500}
                    alt=''
                  />
                </div>
              </div>
              <div className='md:col-span-1 mt-2 w-full lg:order-1 lg:w-full justify-between'>
                <div className='flex lg:flex-row lg:items-start lg:w-full md:flex-none sm:flex-row sm:items-start sm:w-full'>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-32 w-full overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src='photo-two.svg'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-32 w-full overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src='photo-three.svg'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    className='flex-0 aspect-square mb-3 h-32 w-full overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <Image
                      className='h-full w-full object-cover'
                      src='photo-four.svg'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 className='text-2xl font-bold text-[#7874F2] bg-background-title bg-no-repeat sm:text-3xl'>
              3-Seat Sofa, Gray
            </h1>
            <div className='mt-5 items-center font-poppins pl-4'>
              <p className='text-1xl text-[#585785]'>
                <span className='font-bold'>Category: </span>Furniture
              </p>
              <p className='text-1xl text-[#585785]'>
                <span className='font-bold'>Condition: </span>Used
              </p>
            </div>
            <h2 className='mt-8 font-poppins text-[#585785] text-2xl pl-4'>
              Details:
            </h2>
            <hr className='border-2 ml-4 bg-[#7874F2]' />
            <div className='flex flex-col text-[#585785] items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0'></div>
            <div className='font-poppins text-[#585785] text-1xl pl-4'>
              <p>
                I’ve been scratching this sofa for 2 years. Selling due to
                boredom. Bought it from Ikea, model name is : EKTORP. No
                bedbugs, cleaned it.
              </p>
              <p>
                <span className='block'>Dimensions:</span> Width: 218 cm ,Depth:
                88 cm, Height: 88 cm, Seat depth: 49 cm, Seat height: 45 cm.
              </p>
            </div>
            <div className='mt-10 flex select-none flex-wrap items-center gap-1'>
              <div className='flex flex-row bg-[#585785] w-96 h-36 rounded-l-full -mx-1 border-r-4 border-dashed'>
                <div className='m-2'>
                  <Image src='cat-photo.svg' width={130} height={100} alt='' />
                </div>
                <div className='m-auto mx-0 font-poppins text-white'>
                  <h1 className='font-semibold text-2xl'>Rifik Haspolat</h1>
                  <h2>
                    <span className='font-bold'>email:</span> miyav@gmail.com
                  </h2>
                  <h2>
                    <span className='font-bold'>Location:</span> istanbul/turkey
                  </h2>
                </div>
              </div>
              <div className='grid justify-items-center bg-orange-500 w-36 h-36'>
                <h1 className='font-poppins text-white font-semibold text-3xl m-auto'>
                  150<span>$</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 w-full object-cover grid justify-items-center'>
          <Image src='map.svg' width={1400} height={350} alt='' />
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
