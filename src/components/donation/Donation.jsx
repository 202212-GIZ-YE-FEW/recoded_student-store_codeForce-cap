import Image from "next/image"

import { SectionWrapper } from "@/hoc"
//import Link from "next/link";
function Donation() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <div className=''>
        <Image
          className='rounded'
          src='/images/unsplash_1.jpg'
          alt='donation image'
          width={1124}
          height={524}
        ></Image>
      </div>
      <div className='p-10 flex flex-col mt-14 items-center justify-center gap-12 max-w-screen-md'>
        <div className='relative justify-center items-center h-12 text-center text-purple text-5xl font-bold lg:w-[700px] p-0 md:p-5'>
          <Image
            className='absolute left-28'
            src='highlighter.svg'
            alt='highlighter icon'
            width={480}
            height={380}
          />
          <span className=' absolute top-0 left-1/4'>
            <h2>Why Donate?</h2>
          </span>
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
            src='highlighted.svg'
            alt='currency icon'
            width={888}
            height={117}
          />
        </span>
        <h2 className='font-bold text-purple text-center'>
          Make a Difference by Donating!
        </h2>
      </div>

      <div className='flex flex-row flex-wrap items-center justify-around gap-12 p-10'>
        <div className='mt-20 h-[240px] w-[280px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <div className='mt-8 flex flex-col items-center gap-2'>
            <span className='text-xl'>Small Help</span>
            <div className='relative flex items-center'>
              <span className='absolute text-2xl -left-3 top-6'>
                <Image
                  src='currency.svg'
                  alt='currency icon'
                  width={8}
                  height={12}
                />
              </span>
              <span className='font-bold text-[44px]'>10</span>
            </div>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-14 text-sm text-white  transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            Donate
          </button>
        </div>
        <div className='mt-10 h-[280px] w-[320px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <div className='mt-6 flex flex-col items-center'>
            <span className='mb-4 text-2xl'>Some Help</span>
            <div className='relative flex items-center'>
              <span className='absolute text-2xl -left-3 top-8'>
                <Image
                  src='currency.svg'
                  alt='currency icon'
                  width={12}
                  height={12}
                />
              </span>
              <span className='font-bold text-[58px]'>25</span>
            </div>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-[70px] text-sm  text-white transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            Donate
          </button>
        </div>
        <div className='h-[320px] w-[380px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <span className='text-3xl'>Big Help</span>
          <div className='relative flex items-center'>
            <span className='absolute text-3xl -left-4 top-18'>
              <Image
                src='currency.svg'
                alt='currency icon'
                width={16}
                height={16}
              />
            </span>
            <span className='text-[69px] font-bold'>50</span>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-20 text-xl text-white transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            Donate!
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Donation)
