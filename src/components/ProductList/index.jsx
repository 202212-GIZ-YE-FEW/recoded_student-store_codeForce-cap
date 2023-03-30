// disable the img error
/* eslint-disable @next/next/no-img-element */

//Import Image next component
import Image from "next/image"

// Import Resources
import products from "./products"

export default function ProductList() {
  return (
    //* Fetch The Products
    <div className=''>
      <div className='carts grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 m-auto w-full'>
        {products.map((product) => (
          <div
            key={product.id}
            className='cart mx-3 mb-10 border rounded-lg shadow-lg'
          >
            <Image
              src={product.image.src}
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
