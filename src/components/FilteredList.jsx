import React from 'react'

const FilteredList = ({items}) => {
    const filteredItems = items.filter((item) => item !== "Banana");
  return (
    <div>
        FilteredList
        <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>

  )
}

export default FilteredList