import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class AddApps extends Component {
  constructor() {
    super();
    this.state = {
      appName: "",
      appdesc: "",
      appSize: "",
      appImg: {},
      aptApk: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempApt = {
      appName: this.state.appName,
      appdesc: this.state.appdesc,
      appSize: this.state.appSize,
      aapImg: this.state.aapImg,
      appApk: this.state.appApk,
    };

    this.props.addApp(tempApt);

    this.setState({
      appName: "",
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
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <FaPlus /> Add New App
        </div>

        <div>
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div>
              <label htmlFor="appName">App Name</label>
              <div>
                <input
                  type="text"
                  name="appName"
                  placeholder="App name"
                  value={this.state.appName}
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
                  id="appSize"
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
                  id="appApk"
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
                  id="appImg"
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
