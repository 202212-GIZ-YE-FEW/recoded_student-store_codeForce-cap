import { useState } from "react"

import ProductList from "@/components/ProductList"
import products from "@/components/ProductList/products"

import { SectionWrapper } from "@/hoc"

import Buttons from "../Buttons"

const filters = [
  {
    filter: "Book",
    image: "/images/Book.png",
    alt: "Book",
  },
  {
    filter: "Furniture",
    image: "/images/Furniture.png",
    alt: "Furniture",
  },
  {
    filter: "Electronics",
    image: "/images/Electronic.png",
    alt: "Electronics",
  },
  {
    filter: "Two-wheeler",
    image: "/images/Two-wheeler.png",
    alt: "Two-wheeler",
  },
]

function CategoryFilter() {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleFilterClick = (filter) => setSelectedFilter(filter)

  return (
    <div>
      <Buttons filters={filters} handleFilterClick={handleFilterClick} />
      <ProductList selectedFilter={selectedFilter} products={products} />
    </div>
  )
}

export default SectionWrapper(CategoryFilter)