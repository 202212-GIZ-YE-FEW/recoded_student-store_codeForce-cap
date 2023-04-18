import Image from "next/image"
import Link from "next/link"

import RootLayout from "@/layout/root/RootLayout"

export default function NotFoundPage() {
  return (
    <RootLayout>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <Image
            src='/images/empty-box.png'
            height={1000}
            width={1000}
            alt='Error 404'
            className='w-52 m-auto mt-5'
          />
          <h2 className='mb-8 font-extrabold text-9xl text-purple'>404</h2>
          <p className='text-2xl font-bold'>We could not find the page.</p>
          <p className='mt-4 mb-8 font-semibold'>
            Do not worry, you can find plenty of other things at home.
          </p>
          <Link
            href='/'
            className='px-8 py-3 font-bold rounded bg-orange-500 text-white'
          >
            Back to Home
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </RootLayout>
  )
}
