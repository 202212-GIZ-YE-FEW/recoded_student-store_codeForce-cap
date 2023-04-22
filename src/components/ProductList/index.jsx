import Image from "next/image"

import { withTranslation } from "next-i18next"

import Products from "./products"

function ProductList({ selectedFilter, t }) {
  // Remove duplicates from the products array
  const uniqueProducts = [
    ...new Set(Products({ t }).map((product) => JSON.stringify(product))),
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
          <div
            key={product.id}
            className='mx-3 mb-10 border rounded-lg shadow-lg'
          >
            <Image
              src={product.images}
              alt={product.name}
              width={258}
              height={211.41}
              className='rounded-t-lg shadow-lg w-full'
            />
            <div className='mx-3 text-center'>
              <div className='info flex justify-between my-4 mx-3'>
                <div className='text-left'>
                  <h2 className='font-semibold'>{product.name}</h2>
                  <p className='font-extralight text-xs'>{product.category}</p>
                </div>
                <div>
                  <h2 className='font-extrabold text-xl'>${product.price}</h2>
                  <p className='font-extralight text-xs'>{product.made_city}</p>
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
