const HIGHLIGHTER = {
  category: `block bg-[url("/images/Highlighter.png")] bg-[bottom] bg-[length:70%_70%] bg-no-repeat text-center text-[200%] md:text-[400%] text-bubble-gum font-bold`,
  priceFilter:
    'hidden lg:block bg-[url("/images/Highlighter.png")] bg-[bottom] lg:bg-[length:70%_70%] bg-no-repeat text-center text-[400%] text-bubble-gum font-bold',
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
