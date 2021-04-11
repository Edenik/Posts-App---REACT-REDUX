import React, { useEffect, useState } from "react";

const API_URL = `https://jsonplaceholder.typicode.com/posts`;

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    console.log("hello");
  }, []);
  const postItems = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Posts</h1>
      <hr></hr>
      {postItems}
    </div>
  );
}

export default Posts;
