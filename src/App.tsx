import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
import sum from "./assets/sun.svg";
import moon from "./assets/moon.svg";
const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div data-theme={isClicked ? "sun" : "moon"} className="container">
      <img
        onClick={handleClick}
        className="theme"
        src={isClicked ? sum : moon}
        alt="Sum"
      />
      <Header />
      <Content />
    </div>
  );
};

export default App;
