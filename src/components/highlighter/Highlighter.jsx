// Repeated
const img = "bg-[url('/images/Highlighter.png')] bg-bottom bg-no-repeat"
const text = "text-purple-light text-center font-bold tracking-[-1px]"
const block = "block"

const HIGHLIGHTER = {
  category: `${img} ${text} ${block} bg-[length:70%_70%] text-[200%] md:text-[400%]`,
  priceFilter: `${img} ${text} lg:${block} hidden lg:bg-[length:70%_70%] text-[400%]`,
  singleProduct: `${img} ${text} ${block} lg:bg-[length:250.65px_38px] lg:text-[38px] md:bg-[length:197.35px_30px] md:text-[30px] bg-[length:140px_21px] text-[21px]`,
  productListing: `${img} ${text} md:${block} hidden md:bg-[length:334.85px_30px] lg:bg-[length:437.27px_38px] md:text-[30px] lg:text-[38px]`,
}

export default function Highlighter({
  highlighterStyle = "category",
  text = "Student store",
}) {
  return (
    <span className={HIGHLIGHTER[highlighterStyle]}>
      <h2>{text}</h2>
    </span>
  )
}
