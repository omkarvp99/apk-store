import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import DashSidebar from "./sidebar/DashSidebar";
import "./Dashboard.css";
import SearchPage from "./header/SearchPage";
import "./Dashboard.css";
import ProfilePage from "./header/ProfilePage";
import "./header/ProfilePage.css";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/search/:searchTerm">
              <div className="player">
                <div className="player__body">
                  <DashSidebar />
                  <SearchPage />
                </div>
              </div>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <div className="player">
                <div className="player__body">
                  <DashSidebar />
                  <ProfilePage />
                </div>
              </div>
            </PrivateRoute>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
