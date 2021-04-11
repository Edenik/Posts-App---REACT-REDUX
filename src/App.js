import "./App.css";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr></hr>
      <Posts />
    </div>
  );
}

export default App;
