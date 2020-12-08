import React from "react";
import "./DashSidebaroptions.css";

function DashSidebaroptions({ Icon, title = "test" }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default DashSidebaroptions;
