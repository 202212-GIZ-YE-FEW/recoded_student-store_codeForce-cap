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
      <div className='mt-14 flex max-w-4xl flex-col items-center gap-12'>
        <div className='h-12 text-center text-_primary text-5xl font-bold'>
          <h2>Why Donate?</h2>
        </div>
        <p className='text-_secondary p-3 text-4xl leading-loose'>
          Life is busy, and it can sometimes be easy to forget to show your
          gratitude for all that you’ve been given. Students have low budgets
          and they’re in need of financial support. When you are ready to give
          and are researching groups of people to support, this can remind us of
          all that we have, and the act of donating to charity is a way to
          express our feelings gratitude. Inspire others to give by posting your
          kind action on social media to inspire others to give generously.
        </p>
      </div>
      <div className='mt-14 text-center text-5xl font-bold text-_primary'>
        <h2>Make a Difference by Donating!</h2>
      </div>

      <div className='flexing flex flex-row flex-wrap items-center justify-around gap-12 p-10'>
        <div className='donationCard donationCardPhone mt-8 flex h-64 w-72 flex-col justify-center rounded-lg bg-white shadow-lg '>
          <div className='flex flex-col items-center p-10 '>
            <span className='text-xl font-semibold'>Help</span>
            <div className='flex items-center'>
              <span className='text-3xl'>$</span>
              <span className='mt-3 text-6xl font-bold'>10</span>
            </div>
          </div>
          <div className='justify-center flex px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
        <div className='  donationCard donationCardPhone mt-8 flex h-72 w-72 flex-col justify-center rounded-lg bg-white shadow-lg '>
          <div className='flex flex-col items-center p-10 '>
            <span className='text-xl font-semibold'>Some Help</span>
            <div className='flex items-center'>
              <span className='text-3xl'>$</span>
              <span className='mt-3 text-6xl font-bold'>25</span>
            </div>
          </div>
          <div className='justify-center flex px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
        <div className='donationCard donationCardPhone mt-8 flex h-80 w-72 flex-col justify-center rounded-lg bg-white shadow-lg '>
          <div className='flex flex-col items-center p-10 '>
            <span className='text-xl font-semibold'>BIG HELP</span>
            <div className='flex items-center'>
              <span className='text-3xl'>$</span>
              <span className='mt-3 text-6xl font-bold'>50</span>
            </div>
          </div>
          <div className='justify-center flex px-10 pb-10'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
              Donate now !
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
