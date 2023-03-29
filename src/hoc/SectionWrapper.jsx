export default function SectionWrapper(Component) {
  return function HOC() {
    return (
      <section className='max-w-[1250px] mx-auto my-[50px]'>
        <Component />
      </section>
    )
  }
}
