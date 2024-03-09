import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export function TopBar() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    alert("hi");
  }
  return (
    <div className="flex">
      <div className="mt-8">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <button className="flex-none w-40">
        <img src="/thumbnails/ytLogo.png" onClick={handleClick}></img>
      </button>
      <SearchBar />
      <div className="ml-80 mt-8">
        <button className="mr-6 w-10">
          <img src="/thumbnails/video-camera.png" />
        </button>
        <button className="mr-6 w-10">
          <img src="/thumbnails/bell.png" />
        </button>
        <button className="mr-6 w-10">
          <img src="/thumbnails/user.png" alt="userButton" />
        </button>
      </div>
    </div>
  );
}
