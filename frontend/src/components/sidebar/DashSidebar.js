import React from "react";

import "./DashSidebar.css";

import DashSidebaroptions from "./DashSidebaroptions";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function DashSidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.flaticon.com/svg/static/icons/svg/2991/2991203.svg"
        alt=""
      />
      <hr />
      <DashSidebaroptions Icon={HomeIcon} title="Home" />
      <DashSidebaroptions Icon={SearchIcon} title="Search" />
      <DashSidebaroptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <hr />
      <DashSidebaroptions Icon={HomeIcon} title="My apps & games" />
      <DashSidebaroptions Icon={HomeIcon} title="Wishlist" />
      <hr />
      <DashSidebaroptions title="Settings" />
      <DashSidebaroptions title="Help & feedback" />
      <DashSidebaroptions title="About Apk Store" />
    </div>
  );
}

export default DashSidebar;
