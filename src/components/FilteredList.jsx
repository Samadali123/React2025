// import React from 'react'

// const FilteredList = ({items}) => {
//     const filteredItems = items.filter((item) => item !== "Banana");
//   return (
//     <div>
//         FilteredList
//         <ul>
//       {filteredItems.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </div>

//   )
// }

// export default FilteredList


import React from 'react';

const FilteredList = ({ items }) => {
  const filteredItems = items.filter((item) => item !== "Banana");

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">Filtered List</h2>
      <ul className="list-disc pl-5 space-y-2">
        {filteredItems.map((item, index) => (
          <li key={index} className="text-gray-300 text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
