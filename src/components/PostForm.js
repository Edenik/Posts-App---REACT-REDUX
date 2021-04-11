import React, { useState } from "react";

const API_URL = `https://jsonplaceholder.typicode.com/posts`;

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function onChangeText(e, target) {
    if (target === "title") {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  }

  function onSubmitForm(e) {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <div>
          <label>Title: </label> <br />
          <input
            type="text"
            name="title"
            onChange={(e) => onChangeText(e, "title")}
            value={title}
          />
        </div>

        <div>
          <label>Body: </label> <br />
          <textarea
            name="body"
            value={body}
            onChange={(e) => onChangeText(e, "body")}
          />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
