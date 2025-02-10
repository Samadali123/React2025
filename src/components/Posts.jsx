import React from "react";
import useFetch from "./usefetch";

function Posts() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h2>Posts</h2>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Posts;
