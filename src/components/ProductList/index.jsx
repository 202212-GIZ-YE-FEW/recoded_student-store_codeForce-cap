import Image from "next/image"
import Link from "next/link"
import { withTranslation } from "next-i18next"
import { AiOutlineHeart } from "react-icons/ai"

import { useGeneralListings } from "@/utils/store"

import Spinner from "../Spinner/Spinner"

function ProductList({ selectedFilter, priceFilter, t }) {
  const { data, error, loading } = useGeneralListings()
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (loading) {
    return <Spinner text='Loading best product for you ...' />
  }
  if (data.length === 0) {
    return <h1>No data</h1>
  }
  const uniqueProducts =
    data && Array.isArray(data)
      ? [...new Set(data.map((product) => JSON.stringify(product)))].map(
          (product) => JSON.parse(product)
        )
      : []

  // Filter the products based on the selected filter (if any)
  const categoryFilter = selectedFilter
    ? uniqueProducts.filter((product) =>
        product.category.includes(selectedFilter)
      )
    : uniqueProducts

  const priceFilteredProducts = categoryFilter.filter((product) => {
    const price = parseFloat(product.price)
    const min = parseFloat(priceFilter.min)
    const max = parseFloat(priceFilter.max)
    return (isNaN(min) || price >= min) && (isNaN(max) || price <= max)
  })

  return (
    <div>
      <div
        className='sm:grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'
        dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        {priceFilteredProducts.map((product) => (
          <div
            key={product?.uid}
            className='mx-3 mb-10 border rounded-lg cart-animation flex flex-col justify-between'
          >
            <div className='relative overflow-hidden'>
              <Link href={`products/${product?.id}`}>
                <Image
                  src={product?.primaryImage.url || "/images/emptyImage.png"}
                  alt={product?.productName || "No Image"}
                  width={258}
                  height={250}
                  className='rounded-t-lg shadow-lg w-full bg-white max-h-[250px] min-h-[250px]'
                />
              </Link>
              <div className='absolute bottom-2 right-2 z-10'>
                <button className='flex items-center justify-center w-8 h-8 bg-white text-red-500 rounded-full shadow-md hover:text-red-500 transition-colors duration-300 ease-in-out'>
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            <div className='mx-3 text-center'>
              <div className='info flex justify-between my-4 mx-3'>
                <div className='text-left w-[70%] overflow-hidden'>
                  <h2 className='font-semibold truncate'>
                    {product?.productName || "No name"}
                  </h2>
                  <p className='font-extralight text-xs rtl:text-right'>
                    {product?.category || "No category"}
                  </p>
                </div>
                <div>
                  <h2 className='font-extrabold text-xl'>
                    ${product?.price || "No price"}
                  </h2>
                  <p className='font-extralight text-xs'>
                    {product?.location || "No price"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withTranslation("index")(ProductList)
