import RootLayout from "@/layout/root/RootLayout"

export default function NotFoundPage() {
  return (
    <RootLayout>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl'>
            <span className='sr-only'>Error</span>404
          </h2>
        </div>
      </div>
    </RootLayout>
  )
}
