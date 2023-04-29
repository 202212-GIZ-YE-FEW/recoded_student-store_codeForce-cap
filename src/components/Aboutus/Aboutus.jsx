import Highlighter from "../highlighter"
import OurTeam from "../OurTeam"

function Aboutus() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text='Mission' />
        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          Our companies mission is to create a student-friendly marketplace that
          provides an affordable and convenient platform for students to buy,
          sell, and borrow various types of products. We aim to help students
          save money by providing them access to affordable used products while
          also helping them earn money by allowing them to sell their own items.
        </p>
      </div>
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text='History' />
        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          Our company was founded by a group of students who recognized the need
          for a platform that caters to the specific needs of students. They
          observed that students often struggle to find affordable used products
          or a reliable platform to sell their own items. The company was
          established with the idea of providing a safe and efficient platform
          for students to buy, sell, and borrow products.
        </p>
      </div>
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text='Goals' />

        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          Our primary goal is to become the go-to marketplace for students
          across the country. We aim to build a strong reputation as a trusted
          platform that offers a wide range of affordable and high-quality
          products. We also aim to continuously improve our platform to ensure
          that it remains easy to use, reliable, and secure for all users.
          Additionally, we strive to create a community of students who can
          share their experiences and insights about products and services,
          creating a more connected and supportive student network. Ultimately,
          we want to help students save money, earn money, and have a better
          experience as they navigate their academic journeys.
        </p>
        <br />
      </div>
      <OurTeam />
    </div>
  )
}

export default Aboutus
