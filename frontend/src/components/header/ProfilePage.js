import React from "react";
import "./ProfilePage.css";

import DashHeader from "./DashHeader";
import ProfileContent from "./ProfileContent";

export default function ProfilePage() {
  return (
    <div className="searchpage__body">
      <DashHeader />
      <ProfileContent />
    </div>
  );
}
