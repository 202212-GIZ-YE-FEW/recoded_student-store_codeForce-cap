import { AiOutlineSearch } from "react-icons/ai"

import styles from "./Navbar.module.css"

import Input from "../input"

function SearchInput({ t }) {
  return (
    <div className=' flex-1 border flex items-center py-2 px-4 rounded-3xl'>
      {/*  */}
      <Input
        type='text'
        placeholder={t("search-here")}
        className={`${styles.search} ${styles.input} w-full text-sm placeholder:text-gray-300 placeholder:capitalize text-gray-600`}
      />
      <div className=''>
        <AiOutlineSearch />
      </div>
    </div>
  )
}

export default SearchInput
