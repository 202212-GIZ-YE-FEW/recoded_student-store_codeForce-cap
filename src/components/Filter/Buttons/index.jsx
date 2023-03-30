export default function Buttons({ filters = [], handleFilterClick }) {
  const FilterButton = ({ filter }) => (
    <button
      className={`filter-${filter}`}
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
