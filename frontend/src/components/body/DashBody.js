import React from "react";
//import { useAuth } from "../contexts/AuthContext";
//import { Link, useHistory } from "react-router-dom";

import DashHeader from "../header/DashHeader";
import "./DashBody.css";

import DashSubBody from "./DashSubBody";

export default function Dash__body() {
  return (
    <div className="body">
      <DashHeader />
      <DashSubBody />
    </div>
  );
}
