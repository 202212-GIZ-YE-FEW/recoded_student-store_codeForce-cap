// Repeated
const img = "bg-[url('/images/Highlighter.png')] bg-bottom bg-no-repeat"
const text = "text-purple-light text-center font-bold tracking-[-1px]"
const block = "block"

const HIGHLIGHTER = {
  category: `${img} ${text} ${block} bg-[length:70%_70%] text-[200%] md:text-[400%]`,
  priceFilter: `${img} ${text} hidden lg:${block} lg:bg-[length:70%_70%] text-[400%]`,
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
