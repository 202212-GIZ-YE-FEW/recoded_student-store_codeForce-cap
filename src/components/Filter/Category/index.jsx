import { useState } from "react"

import ProductList from "@/components/ProductList"
import products from "@/components/ProductList/products"

import { SectionWrapper } from "@/hoc"

import Buttons from "../Buttons"

const filters = ["Books", "Furniture", "Electronics", "Two-wheeler"]

function CategoryFilter() {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleFilterClick = (filter) => setSelectedFilter(filter)

  return (
    <div>
      <label>Filter by:</label>
      <Buttons filters={filters} handleFilterClick={handleFilterClick} />
      <ProductList selectedFilter={selectedFilter} products={products} />
    </div>
  )
}

export default SectionWrapper(CategoryFilter)
