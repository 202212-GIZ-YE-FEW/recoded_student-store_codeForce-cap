import Image from "next/image"

function Aboutus() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <div className='flex flex-col mt-20 items-center justify-center max-w-screen-md'>
        <div className='flex flex-col justify-center items-center relative text-purple text-5xl font-bold'>
          {/* Rotates the Highlighter icon */}
          <div className=' -rotate-3'>
            <Image
              src='/images/Highlighter.png'
              alt='highlighter icon'
              width={578}
              height={180}
            />
          </div>

          <div className='absolute mb-[57px] text-center'>
            <h2>Mission</h2>
          </div>
        </div>
        <p className='text-purple-dark w-[700px] p-3 text-2xl leading-relaxed text-center'>
          Our companys mission is to create a student-friendly marketplace that
          provides an affordable and convenient platform for students to buy,
          sell, and borrow various types of products. We aim to help students
          save money by providing them access to affordable used products while
          also helping them earn money by allowing them to sell their own items.
        </p>
      </div>
    </div>
  )
}

export default Aboutus
