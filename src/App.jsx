import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { YoutubeCard } from "./components/YoutubeCard";
import { TopBar } from "./components/TopBar";
import { YoutubeCards } from "./components/YoutubeCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loadingHome.."}>
                <TopBar />
                <YoutubeCards />
              </Suspense>
            }
          />
          <Route
            path="/video"
            element={
              <Suspense fallback={"loadingHome.."}>
                <TopBar />
                <VideoPlayer />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
