import styles from "@/components/Filter/Buttons/Buttons.module.css"

export default function Buttons({ filters = [], handleFilterClick }) {
  const FilterButton = ({ filter }) => (
    <button
      className={`${styles.filter} ${styles[filter]}`}
      onClick={() => handleFilterClick(filter)}
    >
      {filter}
    </button>
  )

  return (
    <div>
      <button onClick={() => handleFilterClick("")}>All</button>
      {filters.map((filter) => (
        <FilterButton key={filter} filter={filter} />
      ))}
    </div>
  )
}
