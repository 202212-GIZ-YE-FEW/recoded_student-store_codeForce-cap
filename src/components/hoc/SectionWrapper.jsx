export default function SectionWrapper(Component) {
  return function HOC() {
    return (
      <section className='lg:max-w-[1250px] max-w-[800px] mx-auto my-[50px]'>
        <Component />
      </section>
    )
  }
}
