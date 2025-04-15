import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <LikeButton />
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      💖 {count}
    </span>
  );
}

export default App;
