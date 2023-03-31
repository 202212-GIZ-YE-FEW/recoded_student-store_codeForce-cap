import Image from "next/image"
//import Link from "next/link";
export default function Donation() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <div className=' border-4 '>
        <Image
          src='/images/unsplash_1.jpg'
          alt='donation image'
          width={1124}
          height={524}
        ></Image>
      </div>
      <div className='flex flex-col mt-14 max-w-[825px] items-center gap-12'>
        <div className='relative h-12 text-center text-purple text-5xl font-bold w-[700px]'>
          <span className='absolute left-0 -z-10 text-2xl'>
            <Image
              src='highlighter.svg'
              alt='highlighter icon'
              width={700}
              height={117}
            />
          </span>
          <h2>Why Donate?</h2>
        </div>
        <p className='text-purple-dark p-3 text-4xl leading-relaxed text-center'>
          Life is busy, and it can sometimes be easy to forget to show your
          gratitude for all that you’ve been given. Students have low budgets
          and they’re in need of financial support. When you are ready to give
          and are researching groups of people to support, this can remind us of
          all that we have, and the act of donating to charity is a way to
          express our feelings gratitude. Inspire others to give by posting your
          kind action on social media to inspire others to give generously.
        </p>
      </div>
      <div className='relative mt-14 text-5xl'>
        <span className='absolute left-0 -z-10'>
          <Image
            src='highlighter.svg'
            alt='currency icon'
            width={888}
            height={117}
          />
        </span>
        <h2 className='font-bold text-purple text-center'>
          Make a Difference by Donating!
        </h2>
      </div>

      <div className='flexing flex flex-row flex-wrap items-center justify-around gap-12 p-10'>
        <div className='mt-8 flex h-64 w-72 flex-col justify-center rounded-lg bg-white shadow-lg'>
          <div className='flex flex-col items-center p-10'>
            <span className='text-xl'>Small Help</span>
            <div className='relative flex items-center'>
              <span className='absolute text-2xl -left-2 top-6'>
                <Image
                  src='currency.svg'
                  alt='currency icon'
                  width={8}
                  height={12}
                />
              </span>
              <span className='mt-3 text-3xl font-bold'>10</span>
            </div>
          </div>
          <div className='justify-center flex px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
        <div className='mt-8 flex h-72 w-72 flex-col justify-center rounded-lg bg-white shadow-lg '>
          <div className='flex flex-col items-center p-10 '>
            <span className=' text-2xl'>Some Help</span>
            <div className='relative flex items-center'>
              <span className='absolute text-2xl -left-3 top-6'>
                <Image
                  src='currency.svg'
                  alt='currency icon'
                  width={10}
                  height={12}
                />
              </span>
              <span className='mt-3 text-4xl font-bold'>25</span>
            </div>
          </div>
          <div className='justify-center flex px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
        <div className='mt-8 flex h-80 w-72 flex-col justify-center rounded-lg bg-white shadow-lg '>
          <div className='flex flex-col items-center p-10'>
            <span className='text-3xl'>Big Help</span>
            <div className='relative flex items-center'>
              <span className='absolute text-3xl -left-3 top-6'>
                <Image
                  src='currency.svg'
                  alt='currency icon'
                  width={12}
                  height={12}
                />
              </span>
              <span className='mt-3 text-5xl text font-bold'>50</span>
            </div>
          </div>
          <div className='flex justify-center px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
