import { SectionWrapper } from "@/hoc"

function OurTeam() {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-white'>
      <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
          Our Team
        </h2>
        <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
          CodeForce team is built on trust and mutual respect, with each member
          holding themselves accountable for their actions and decisions.
        </p>
      </div>
      <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'></div>
    </div>
  )
}

export default SectionWrapper(OurTeam)
