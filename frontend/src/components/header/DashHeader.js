import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./DashHeader.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function DashHeader() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <input
          placeholder="Search for applications "
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon />
        </Link>
      </div>
      <div className="header__right">
        <Link to={`/profile`}>
          <Avatar alt="" src="" />
        </Link>
        <h5>Profile</h5>
      </div>
    </div>
  );
}

export default DashHeader;
