import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between ">
      <div className="flex">
        <div className="mt-8">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <button onClick={() => navigate("/")} className="w-40">
          <img src="/thumbnails/ytLogo.png"></img>
        </button>
      </div>
      <SearchBar />
      <div className="flex">
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
