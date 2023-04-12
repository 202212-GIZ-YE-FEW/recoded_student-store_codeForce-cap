// Repeated styles
const img = "bg-[url('/images/Highlighter.png')] bg-bottom bg-no-repeat"
const text =
  "text-purple-light font-poppins text-center font-bold tracking-[-1px]"
const lgSize = "lg:bg-[length:437.27px_38px] lg:text-[38px]"
const mdSize = "md:bg-[length:313.92px_27.28px] md:text-[27.28px]"
const smSize = "bg-[length:233.67px_20.31px] text-[21px]"

// Highlighter Styles
const HIGHLIGHTER = {
  category: `${img} ${text} block bg-[length:70%_70%] text-[200%] md:text-[400%]`,
  priceFilter: `${img} ${text} hidden lg:block lg:bg-[length:70%_70%] text-[400%]`,
  singleProduct: `${img} ${text} block lg:bg-[length:250.65px_38px] lg:text-[38px] md:bg-[length:197.35px_30px] md:text-[30px] bg-[length:140px_21px] text-[21px]`,
  productListing: `${img} ${text} ${lgSize} hidden md:block md:bg-[length:334.85px_30px] md:text-[30px]`,
  donate: `${img} ${text} block lg:bg-[length:699.31px_65.38px] lg:text-[50px] md:bg-[length:400.2px_53.2px] md:text-[35px] bg-[length:298.4px_39.67px] text-[26px]`,
  donating: `${img} ${text} block lg:bg-[length:820.72px_76.43px] lg:text-[49px] md:bg-[length:571.49px_53.22px] md:text-[34.2499px] bg-[length:339.1px_31.58px] text-[21px]`,
  ordersPage: `${img} ${text} block ${lgSize} ${mdSize} ${smSize}`,
  listingPage: `${img} ${text} block ${mdSize} ${smSize} lg:bg-[length:200px_38px] lg:text-[38px]`,
  editProfile: `${img} ${text} block ${mdSize} ${smSize} lg:bg-[length:200px_38px] lg:text-[30px]`,
  aboutus: `${img} ${text} block ${mdSize} ${smSize} bg-[length:400px_80px] text-[55px] lg:bg-[length:400px_80px] lg:text-[55px]`,
}

export default function Highlighter({
  highlighterStyle = "category",
  text = "Student store",
  className = "",
}) {
  return (
    <span>
      <span className={`${HIGHLIGHTER[highlighterStyle]} ${className}`}>
        <h2>{text}</h2>
      </span>
    </span>
  )
}
