// import React from "react";
// import useFetch from "./usefetch";

// function Posts() {
//   const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

//   return (
//     <div>
//       <h2>Posts</h2>
//       {posts?.map((post) => (
//         <p key={post.id}>{post.title}</p>
//       ))}
//     </div>
//   );
// }

// export default Posts;



import React from "react";
import useFetch from "./usefetch";

function Posts() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto border border-gray-700">
      <h2 className="text-3xl font-bold text-blue-400 text-center mb-4">📝 Latest Posts</h2>
      <div className="space-y-4">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-md shadow-md border border-gray-600">
              <p className="text-lg font-semibold text-yellow-400">{post.title}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">Loading posts...</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
