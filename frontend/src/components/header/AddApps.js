import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

import { useAuth } from "./../../contexts/AuthContext";
const { currentUser } = useAuth();
const email = useAuth.currentUser;

// const Uid = useAuth.currentUser.uid;
// const email = useAuth.currentUser.email;

class AddApps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appUid: "",
      appName: "",
      appEmail: "",
      appdesc: "",
      appSize: "",
      appImg: null,
      aptApk: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("");
    let tempApt = {
      appUid: this.state.appUid,
      appName: this.state.appName,
      //appEmail: this.state.appEmail,
      appdesc: this.state.appdesc,
      appSize: this.state.appSize,
      aapImg: this.state.aapImg,
      appApk: this.state.appApk,
    };

    this.props.addApp(tempApt);

    this.setState({
      appUid: "",
      appName: "",
      //appEmail: "",
      appdesc: "",
      appSize: "",
      appImg: {},
      aptApk: {},
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const file = target.file;

    this.setState({
      appUid: currentUser.uid,
      appName: value,
      //appEmail: useAuth.currentUser.email,
      appdesc: value,
      appSize: value,
      appImg: file,
      aptApk: file,
    });
  }

  render() {
    return (
      <div>
        <div>
          <FaPlus /> Add New App
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="appUid">UID</label>
              <div>
                <input
                  type="text"
                  name="appUid"
                  placeholder="User ID"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="appName">App Name</label>
              <div>
                <input
                  type="text"
                  name="appName"
                  placeholder="App name"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="appdesc">App Description</label>
              <div>
                <input
                  type="text"
                  name="appdesc"
                  placeholder="App description"
                  value={this.state.appdesc}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="appSize">App Size</label>
              <div>
                <input
                  type="text"
                  name="appSize"
                  placeholder="App Size"
                  value={this.state.appSize}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="appApk">Upload APK</label>
              <div>
                <input
                  type="file"
                  name="appApk"
                  placeholder="Upload Apk file"
                  file={this.state.appApk}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="appImg">Upload App Img</label>
              <div>
                <input
                  type="file"
                  name="appImg"
                  placeholder="Upload Apk Img"
                  file={this.state.appImg}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div>
                <button className="btn btn-primary w-100 mt-3" type="submit">
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddApps;
