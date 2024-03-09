import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { YoutubeCard } from "./components/YoutubeCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <YoutubeCard />
    </>
  );
}

export default App;
