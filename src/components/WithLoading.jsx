// import React from 'react'

// const WithLoading = (WrappedComponent) => {
//     return function EnhancedComponent({ isLoading, ...props }) {
//         if (isLoading) {
//           return <h2>Loading...</h2>;
//         }
//         return <WrappedComponent {...props} />
//       };
// }

// export default WithLoading


import React from "react";

const WithLoading = (WrappedComponent) => {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="flex flex-col items-center space-y-3">
            {/* Loading Spinner */}
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-lg font-semibold text-gray-300">Loading...</h2>
          </div>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;
