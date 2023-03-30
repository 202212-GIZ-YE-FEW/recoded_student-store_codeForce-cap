import { useState } from "react"

import { SectionWrapper } from "@/hoc"

import ProductList from "../ProductList"
import products from "../ProductList/products"

const filters = ["Books", "Furniture", "Electronics", "Two-wheeler"]

function ProductFilter() {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleFilterClick = (filter) => setSelectedFilter(filter)

  const FilterButton = ({ filter }) => (
    <button onClick={() => handleFilterClick(filter)}>{filter}</button>
  )

  return (
    <div>
      <label>Filter by:</label>
      <div>
        <button onClick={() => handleFilterClick("")}>All</button>
        {filters.map((filter) => (
          <FilterButton key={filter} filter={filter} />
        ))}
      </div>

      <ProductList selectedFilter={selectedFilter} products={products} />
    </div>
  )
}

export default SectionWrapper(ProductFilter)
