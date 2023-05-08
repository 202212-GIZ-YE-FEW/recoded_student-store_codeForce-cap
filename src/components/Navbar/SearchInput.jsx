import { AiOutlineSearch } from "react-icons/ai"

import styles from "./Navbar.module.css"

import Input from "../input"

import { useCallback, useRef, useState } from "react"
import Link from "next/link"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { db } from "@/utils/firebase/config"

function SearchInput({ t }) {
  const searchRef = useRef(null)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback(async (event) => {
    const query = event.target.value
    setQuery(query)
    if (query.length) {
      const snapshot = await getDocs(collection(db, "documents")) // get documents from Firestore collection
      const results = snapshot.docs.filter((doc) =>
        doc.data().title.toLowerCase().includes(query.toLowerCase())
      ) // filter documents by title
      setResults(results)
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener("click", onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener("click", onClick)
    }
  }, [])

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
