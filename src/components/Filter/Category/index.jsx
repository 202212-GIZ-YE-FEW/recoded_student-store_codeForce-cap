import { useState } from "react"

import ProductList from "@/components/ProductList"

import { useGeneralListings } from "@/utils/store"

import Buttons from "../Buttons"

export default function CategoryFilter() {
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

  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" })

  const handlePriceFilter = (min, max) => {
    setPriceFilter({ min, max })
  }

  return (
    <div>
      <Buttons
        filters={filters}
        handleCategoryFilter={handleCategoryFilter}
        handlePriceFilter={handlePriceFilter}
      />
      <ProductList
        selectedFilter={selectedFilter}
        products={data}
        priceFilter={priceFilter}
      />
    </div>
  )
}
