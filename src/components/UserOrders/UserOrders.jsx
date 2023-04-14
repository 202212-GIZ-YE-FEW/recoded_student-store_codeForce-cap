import Image from "next/image"

import { SectionWrapper } from "@/components/hoc"

import products from "../ProductList/products"

function UserOrders() {
  return (
    <section className='flex flex-col lg:flex-row'>
      <div className='lg:bg-gradient-to-l from-zinc-800 to-slate-300 lg:py-16 h-[947px] overflow-y-auto w-full'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-20 px-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='lg:bg-white rounded-lg pb-7 shadow-2xl'
            >
              <Image
                className='rounded-t-lg shadow-lg w-full'
                src='/productImg.png'
                alt='...'
                width={1920}
                height={1080}
              />
              <div className='mx-2'>
                <div className='flex justify-between my-4'>
                  <div className='text-left'>
                    <h2 className='font-semibold'>{product.name}</h2>
                    <p className='font-extralight text-xs'>
                      {product.category}
                    </p>
                  </div>
                  <div>
                    <h2 className='font-extrabold text-xl text-right'>
                      ${product.price}
                    </h2>
                    <p className='font-extralight text-xs'>
                      {product.made_city}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    <span className='font-extrabold'>Order Date:</span>{" "}
                    {product.order_date}
                  </p>
                  <p>
                    <span className='font-extrabold'>Delivery Address:</span>
                    <br />
                    <span className='font-extralight text-xs'>
                      {product.delivery_address}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(UserOrders)
