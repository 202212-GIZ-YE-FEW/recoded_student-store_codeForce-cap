import Image from "next/image"

import LogoImg from "../../../public/Logo.png"
function Logo() {
  return (
    <div className='w-[130px]'>
      <Image src={LogoImg} alt='logo' />
    </div>
  )
}

export default Logo
