import React from "react";

import "./Dashboard.css";

import DashSidebar from "./sidebar/DashSidebar";
import DashBody from "./body/DashBody";

export default function Dashboard() {
  return (
    <div className="player">
      <div className="player__body">
        <DashSidebar />
        <DashBody />
      </div>
    </div>
  );
}
