import Image from "next/image"
import { withTranslation } from "next-i18next"
import { AiOutlineHeart } from "react-icons/ai"

import Products from "./products"
import Link from "next/link"

function ProductList({ selectedFilter, t }) {
  // Remove duplicates from the products array
  const uniqueProducts = [
    ...new Set(Products().map((product) => JSON.stringify(product))),
  ].map((product) => JSON.parse(product))

  // Filter the products based on the selected filter (if any)
  const categoryFilter = selectedFilter
    ? uniqueProducts.filter((product) =>
        product.category.includes(selectedFilter)
      )
    : uniqueProducts

  return (
    <div>
      <div
        className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 m-auto w-full'
        dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        {categoryFilter.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className='mx-3 mb-10 border rounded-lg cart-animation'>
              <div className='relative overflow-hidden'>
                <Image
                  src={product.images}
                  alt={product.name}
                  width={258}
                  height={211.41}
                  className='rounded-t-lg shadow-lg w-full '
                />
                <div className='absolute bottom-2 right-2 z-10'>
                  <button className='flex items-center justify-center w-8 h-8 bg-white text-red-500 rounded-full shadow-md hover:text-red-500 transition-colors duration-300 ease-in-out'>
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
              <div className='mx-3 text-center'>
                <div className='info flex justify-between my-4 mx-3'>
                  <div className='text-left'>
                    <h2 className='font-semibold'>{product.name}</h2>
                    <p className='font-extralight text-xs rtl:text-right'>
                      {product.category}
                    </p>
                  </div>
                  <div>
                    <h2 className='font-extrabold text-xl'>${product.price}</h2>
                    <p className='font-extralight text-xs'>
                      {product.made_city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default withTranslation("index")(ProductList)
