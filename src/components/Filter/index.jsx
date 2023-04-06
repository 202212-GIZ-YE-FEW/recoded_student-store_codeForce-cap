import Category from "./Category"

export default function Filter({ handleCategoryFilter }) {
  return (
    <div>
      <Category handleCategoryFilter={handleCategoryFilter} />
    </div>
  )
}
