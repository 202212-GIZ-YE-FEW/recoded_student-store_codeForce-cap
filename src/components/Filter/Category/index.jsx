import { withTranslation } from "next-i18next"
import { useState } from "react"

import ProductList from "@/components/ProductList"

import { useGeneralListings } from "@/utils/store"

// import products from "@/components/ProductList/products"
import Buttons from "../Buttons"

function CategoryFilter() {
  const { data } = useGeneralListings()
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

  const [selectedFilter, setSelectedFilter] = useState("")

  const handleCategoryFilter = (filter) => setSelectedFilter(filter)

  return (
    <div>
      <Buttons filters={filters} handleCategoryFilter={handleCategoryFilter} />
      <ProductList selectedFilter={selectedFilter} products={data} />
    </div>
  )
}

export default withTranslation("index")(CategoryFilter)
