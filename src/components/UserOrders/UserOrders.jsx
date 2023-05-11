import Link from "next/link"
import { withTranslation } from "next-i18next"

function UserOrders() {
  return (
    // <section
    //   className='flex flex-col lg:flex-row h-[617px] md:h-[784px] lg:h-[100%] overflow-y-auto lg:bg-gradient-to-l from-zinc-800 to-slate-300'
    //   dir={t("language") === "ar" ? "rtl" : "ltr"}
    // >
    //   {/* <div className=' w-full'>
    //     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8 py-16'>
    //       {products({ t }).map((product) => (
    //         <div
    //           key={product.id}
    //           className='lg:bg-white rounded-lg pb-7 cart-animation'
    //         >
    //           <Image
    //             className='rounded-t-lg shadow-lg w-full'
    //             src='/images/productImg.png'
    //             alt='...'
    //             width={1920}
    //             height={1080}
    //           />
    //           <div className='mx-2'>
    //             <div className='flex justify-between my-4'>
    //               <div className='text-left'>
    //                 <h2 className='font-semibold'>{product.name}</h2>
    //                 <p className='font-extralight text-xs'>
    //                   {product.category}
    //                 </p>
    //               </div>
    //               <div>
    //                 <h2 className='font-extrabold text-xl text-right'>
    //                   ${product.price}
    //                 </h2>
    //                 <p className='font-extralight text-xs'>
    //                   {product.made_city}
    //                 </p>
    //               </div>
    //             </div>
    //             <div>
    //               <p>
    //                 <span className='font-extrabold'>{t("order-date")}</span>{" "}
    //                 {product.order_date}
    //               </p>
    //               <p>
    //                 <span className='font-extrabold'>
    //                   {t("delivery-address")}
    //                 </span>
    //                 <br />
    //                 <span className='font-extralight text-xs'>
    //                   {product.delivery_address}
    //                 </span>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}
    //   <h1>Hi</h1>
    // </section>

    <section className='relative flex flex-col lg:flex-row h-[617px] md:h-[784px] lg:h-[100%] overflow-x-hidden lg:bg-gradient-to-l from-zinc-800 to-slate-300'>
      <h1 className='lg:text-white font-extrabold flex flex-col text-center gap-5 absolute lg:top-96 top-48 sm:right-36 lg:right-96 cursor-pointer'>
        Ohh you didn&apos;t list anything ?, don&apos;t worry you can{" "}
        <span className='underline text-2xl lg:text-slate-200 font-poppins cart-animation hover:underline-offset-8'>
          <Link href='/listing'>List a new item</Link>{" "}
        </span>
      </h1>
    </section>
  )
}

export default withTranslation("index")(UserOrders)
