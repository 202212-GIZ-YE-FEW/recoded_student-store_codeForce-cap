import Image from "next/image"

import products from "../ProductList/products"
import SideBar from "../SideBar"

const gradient = "lg:bg-gradient-to-l from-zinc-800 to-slate-300"

export default function userOrder() {
  return (
    <section className='flex flex-col lg:flex-row'>
      <div>
        <SideBar currentPage='ordersPage' highlighterText='My Orders' />
      </div>
      <div className={`${gradient} lg:pt-16 h-[947px] overflow-y-auto block`}>
        <div className='flex flex-wrap gap-5 lg:pl-16'>
          {products.map((product) => (
            <div key={product.id} className=''>
              <Image src='/productImg.png' alt='...' height={295} width={242} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
