import RootLayout from "@/layout/root/RootLayout"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <RootLayout>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-purple'>404</h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            We could not find the page you are looking for.
          </p>
          <p className='mt-4 mb-8 font-semibold'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            href='/'
            className='px-8 py-3 font-bold rounded bg-orange-500 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </RootLayout>
  )
}
