import React, { useState } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { createPost } from '../actions/postActions'

function PostForm(props) {
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

    props.createPost(post);
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

PostForm.propTypes = {
  createPost : PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
