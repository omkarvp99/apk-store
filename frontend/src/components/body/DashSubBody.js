import React, { Component } from "react";
import "./DashSubBody.css";

import axios from "axios";
import ApkCard from "./ApkCard";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

// componentDidMount() {

//   fetch("http://localhost:5000/", {
//     method: "POST",
//     body: formData,
//   }).then((r) => {
//     console.log(r);
//   });

//   document
//     .getElementById("appImg")
//     .setAttribute("src", `http://localhost:5000/${file[0].name}`)
// }

class DashSubBody extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  componentDidMount = () => {
    this.getDataFromDb();
  };

  getDataFromDb = () => {
    axios
      .get("http://localhost:5000/files", config)
      .then((res) => {
        const data = res.data;
        this.setState({ files: data });
      })
      .catch(() => {
        alert("Error!!! No data");
      });
  };

  displayData = (files) => {
    return files.map((file, index) => (
      <div key={file._id}>
        <ApkCard
          file={file}
          filename={file.filename}
          _id={file._id}
          appName={file.appName}
          appDev={file.appDev}
          appSize={file.appSize}
          appCategory={file.appCategory}
          appImg={file.appImg}
          appFile={file.appFile}
        />
      </div>
    ));
  };

  // fetchImage = (filename) =>{
  //   axios
  //   .get("http://localhost:5000/image/:filename")
  //   .then((res) => {
  //     const data = res.data;
  //   })
  // }

  render() {
    return (
      <div className="subbody__main">
        <div>
          <div className="recommendvideos__videos">
            {this.displayData(this.state.files)}
          </div>
        </div>
      </div>
    );
  }
}
export default DashSubBody;
