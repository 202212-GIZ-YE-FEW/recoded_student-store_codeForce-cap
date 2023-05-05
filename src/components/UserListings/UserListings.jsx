import { withTranslation } from "next-i18next"
import Image from "next/image"
import { Link } from "react-router-dom"

import { useUserListings } from "@/utils/store"

function UserListings({ t }) {
  const { data, loading } = useUserListings()
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (data.length === 0) {
    return (
      <h1>
        Ohh u did not list anything till now why do not u go to{" "}
        <Link href='/listing'>List a new item</Link>{" "}
      </h1>
    )
  }
  console.log(data)
  return (
    <section
      className='flex flex-col lg:flex-row h-[617px] md:h-[784px] lg:h-[100%] overflow-y-auto lg:bg-gradient-to-l from-zinc-800 to-slate-300'
      dir={t("language") === "ar" ? "rtl" : "ltr"}
    >
      <div className=' w-full mx-10'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8 py-16'>
          {data.map((product) => (
            <div
              key={product.id}
              className='lg:bg-white rounded-lg pb-7 cart-animation'
            >
              <Image
                className='rounded-t-lg shadow-lg w-full'
                src={product.primaryImage.url}
                alt={product.productName}
                width={1920}
                height={1080}
              />
              <div className='mx-2'>
                <div className='flex justify-between my-4'>
                  <div className='text-left'>
                    <h2 className='font-semibold'>{product.productName}</h2>
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
                    <span className='font-extrabold'>{t("listing-date")}</span>{" "}
                    {product.order_date}
                  </p>
                  <p>
                    <span className='font-extrabold'>{t("category")}</span>{" "}
                    <span className='font-extralight text-xs'>
                      {product.category}
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

export default withTranslation("index")(UserListings)
