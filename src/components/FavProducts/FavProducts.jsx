import Image from "next/image"
import { withTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { AiFillHeart } from "react-icons/ai"
import { HiOutlineChip, HiOutlineX } from "react-icons/hi"
import { MdTwoWheeler } from "react-icons/md"
import { TbBook, TbSofa } from "react-icons/tb"

import { useGeneralListings } from "@/utils/store"

import Highlighter from "../highlighter"

function FavProducts({ t }) {
  const { data } = useGeneralListings()
  // Define state variables for favorite products and selected category test
  const [FavProducts, setFavoriteProducts] = useState([])
  useEffect(() => {
    if (data) {
      setFavoriteProducts(data)
    }
  }, [data])

  const [selectedCategory, setSelectedCategory] = useState("All")

  // Function to remove a product from the favorite products list
  const handleRemoveProduct = (id) => {
    // Filter the favorite products list to exclude the product with the specified id
    const updatedProducts = FavProducts.filter((product) => product.id !== id)
    // Set the state of the favorite products list to the updated list
    setFavoriteProducts(updatedProducts)
  }

  // Function to handle changes to the selected category
  const handleCategoryChange = (category) => {
    // Set the state of the selected category to the new category value
    setSelectedCategory(category)
    if (category === "All") {
      // If the new category is "All", set the state of the favorite products list to the original list of products
      setFavoriteProducts(data)
    } else {
      // Otherwise, filter the original list of products to include only those in the selected category
      const filteredProducts = data.filter(
        (product) => product.category === category
      )
      // Set the state of the favorite products list to the filtered list of products
      setFavoriteProducts(filteredProducts)
    }
  }

  return (
    <div
      className='container mx-auto py-8 px-4 sm:px-8'
      dir={t("language") === "ar" ? "rtl" : "ltr"}
    >
      <Highlighter highlighterStyle='aboutus' text={t("favorite-products")} />
      <div className='container mx-auto mt-8'>
        <h2 className='text-lg font-bold mb-2 text-center py-5'>
          {t("filter-category")}
        </h2>
        <div className='flex flex-wrap justify-center py-4'>
          <button
            onClick={() => handleCategoryChange("All")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out  focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-around items-center w-16 shadow-md  ${
              selectedCategory === "All" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            {t("all")}
          </button>
          <button
            onClick={() => handleCategoryChange("Electronics")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-around items-center w-36 shadow-md min-w-[130px] max-xs:flex-col ${
              selectedCategory === "Electronics" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            {t("filter-three")}
            <HiOutlineChip className='text-2xl' />
          </button>
          {/* <button
            onClick={() => handleCategoryChange("Cloth")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-around items-center w-32 shadow-md min-w-[110px] max-xs:flex-col ${
              selectedCategory === "Cloth" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            Clothes <GiClothes className='text-2xl' />
          </button> */}
          <button
            onClick={() => handleCategoryChange("Books")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex  justify-around items-center w-32 shadow-md min-w-[110px] ${
              selectedCategory === "Books" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            {t("filter-one")}
            <TbBook className='text-2xl' />
          </button>
          <button
            onClick={() => handleCategoryChange("Two-wheeler")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-around items-center w-44 shadow-md min-w-[150px] max-xs:flex-col
            ${
              selectedCategory === "Two-wheeler" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            {t("filter-four")} <MdTwoWheeler className='text-2xl' />
          </button>
          <button
            onClick={() => handleCategoryChange("Furniture")}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mr-4 mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-around items-center w-40 shadow-md min-w-[150px]
            ${
              selectedCategory === "Furniture" &&
              " bg-purple !text-white hover:!bg-violet-800"
            }`}
          >
            {t("filter-two")} <TbSofa className='text-2xl' />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {FavProducts.map((product) => (
          <div
            key={product.id}
            className='relative flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-md group transform transition-all duration-300 ease-in-out hover:scale-95'
          >
            <div className='relative overflow-hidden'>
              <Image
                src={product.primaryImage.url}
                alt={product.productName}
                width={258}
                height={250}
                className='h-48 sm:h-56 md:h-64 w-full object-cover'
              />
              <div className='absolute top-2 right-2 z-10'>
                <button
                  className='flex items-center justify-center w-8 h-8 bg-white text-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out'
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <HiOutlineX className='' />
                </button>
              </div>
              <div className='absolute bottom-2 right-2 z-10'>
                <button className='flex items-center justify-center w-8 h-8 bg-white text-red-500 rounded-full shadow-md hover:text-red-500 transition-colors duration-300 ease-in-out'>
                  <AiFillHeart />
                </button>
              </div>
            </div>
            <div className='mx-3 text-center'>
              <div className='info flex justify-between my-4 mx-3'>
                <div className='text-left'>
                  <h2 className='font-semibold'>{product.productName}</h2>
                  <p className='font-extralight text-xs rtl:text-right'>
                    {product.category}
                  </p>
                </div>
                <div>
                  <h2 className='font-extrabold text-xl'>${product.price}</h2>
                  <p className='font-extralight text-xs'>{product.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// export default FavProducts
export default withTranslation("index")(FavProducts)
