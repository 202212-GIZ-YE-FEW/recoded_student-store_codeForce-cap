import { withTranslation } from "next-i18next"
import { useState } from "react"

import ProductList from "@/components/ProductList"

import { useGeneralCollection } from "@/utils/store"

// import products from "@/components/ProductList/products"
import Buttons from "../Buttons"

function CategoryFilter({ t }) {
  const { data } = useGeneralCollection()
  const filters = [
    {
      filter: t("filter-one"),
      image: "/images/Book.png",
      alt: "Book",
    },
    {
      filter: t("filter-two"),
      image: "/images/Furniture.png",
      alt: "Furniture",
    },
    {
      filter: t("filter-three"),
      image: "/images/Electronic.png",
      alt: "Electronics",
    },
    {
      filter: t("filter-four"),
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
