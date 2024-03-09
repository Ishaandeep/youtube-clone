import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { YoutubeCard } from "./components/YoutubeCard";
import { TopBar } from "./components/TopBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <YoutubeCard />
    </>
  );
}

export default App;
