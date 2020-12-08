import React from "react";
import "./SearchPage.css";

// import TuneIcon from "@material-ui/icons/Tune";
import DashHeader from "./DashHeader";
import SearchContent from "./SearchContent";

function SearchPage() {
  return (
    <div className="searchpage__body">
      <DashHeader />
      <SearchContent />
    </div>
  );
}
export default SearchPage;
