import React, { useState } from "react";
import "./ProfileContent.css";
import AddApp from "./AddApp";

// To update profile
import { useAuth } from "./../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";

export default function ProfileContent() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const email = useAuth.currentUser;

  async function handleLogout() {
    setError("");
    if (currentUser) {
      await logout(currentUser);
      history.push("/login");
    } else {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <div className="subbody__search">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/456/456212.svg"
          alt=""
          height="200px"
        />
        <div>
          <div>
            <h2>Profile</h2>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          <p>{email}</p>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <div className="w-100 text-center mt-2">
            <Button
              onClick={handleLogout}
              style={{
                borderRadius: "30px",
                backgroundColor: "rgb(139, 106, 168)",
              }}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
      <hr className="hr__" />
      <div className="subbody__search">
        <AddApp />
      </div>
    </>
  );
}
