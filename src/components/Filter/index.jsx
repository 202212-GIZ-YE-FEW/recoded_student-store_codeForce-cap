import Category from "./Category"
import { SectionWrapper } from "../hoc"

function Filter({ handleCategoryFilter }) {
  return (
    <div>
      <Category handleCategoryFilter={handleCategoryFilter} />
    </div>
  )
}
export default SectionWrapper(Filter)
