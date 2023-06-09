// Repeated styles
const img = "bg-[url('/images/Highlighter.png')] bg-bottom bg-no-repeat"
const textStyle =
  "text-purple-light font-poppins text-center font-bold tracking-[-1px]"
const lgSize = "lg:bg-[length:290px_38px] lg:text-[38px]"
const mdSize = "md:bg-[length:313.92px_27.28px] md:text-[27.28px]"
const smSize = "bg-[length:233.67px_20.31px] text-[21px]"

// Highlighter Styles
const HIGHLIGHTER = {
  category: `${img} block bg-[length:70%_70%] text-[200%] md:text-[400%]`,
  priceFilter: `${img} hidden lg:block lg:bg-[length:70%_70%] text-[400%]`,
  singleProduct: `${img} block lg:bg-[length:250.65px_38px] lg:text-[38px] md:bg-[length:197.35px_30px] md:text-[30px] bg-[length:140px_21px] text-[21px]`,
  productListing: `${img} ${lgSize} hidden md:block md:bg-[length:334.85px_30px] md:text-[30px]`,
  donate: `${img} block lg:bg-[length:699.31px_65.38px] lg:text-[50px] md:bg-[length:400.2px_53.2px] md:text-[35px] bg-[length:298.4px_39.67px] text-[26px]`,
  donating: `${img} block lg:bg-[length:820.72px_76.43px] lg:text-[49px] md:bg-[length:571.49px_53.22px] md:text-[34.2499px] bg-[length:339.1px_31.58px] text-[21px]`,
  ordersPage: `${img} block ${lgSize} ${mdSize} ${smSize} lg:text-[38px]`,
  listingPage: `${img} block ${lgSize} ${mdSize} ${smSize} lg:text-[40px]`,
  editProfile: `${img} block ${mdSize} ${smSize} lg:bg-[length:240px_38px] lg:text-[30px]`,
  aboutus: `${img} block ${mdSize} ${smSize} bg-[length:400px_80px] text-[55px] lg:bg-[length:400px_80px] lg:text-[55px]`,
}

export default function Highlighter({
  highlighterStyle = "category",
  text = "Student store",
  highlighterClassName = "",
  textClassName = "",
}) {
  return (
    <span>
      <span
        className={`${HIGHLIGHTER[highlighterStyle]} ${highlighterClassName}`}
      >
        <h2 className={`${textStyle} ${textClassName}`}>{text}</h2>
      </span>
    </span>
  )
}
