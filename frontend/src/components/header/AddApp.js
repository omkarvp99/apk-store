import React from "react";
import { FaPlus } from "react-icons/fa";

class AddApp extends React.Component {
  Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("appImg").files;
    // const file1 = document.getElementById("appFile").files;

    const formData = new FormData();
    formData.append("appName", "appName");
    formData.append("appDev", "appDev");
    formData.append("appSize", "appSize");
    formData.append("appCategory", "appCategory");
    formData.append("appImg", file[0]);
    //formData.append("appFile", file1[0]);

    fetch("http://localhost:5000/", {
      method: "POST",
      body: formData,
    }).then((r) => {
      console.log(r);
    });

    document
      .getElementById("appImg")
      .setAttribute("src", `http://localhost:5000/${file[0].name}`);
    // document
    //   .getElementById("appFile")
    //   .setAttribute("src", `http://localhost:5000/${file0[0].name}`);
  };

  render() {
    return (
      <div>
        <div>
          <FaPlus /> Add New App
        </div>

        <div className="mt-4 mx-2">
          <input
            className="w-40"
            type="text"
            name="appName"
            placeholder="Application Name"
          />
        </div>
        <div className="mt-4 mx-2">
          <input
            className="w-40"
            type="text"
            name="appDev"
            placeholder="Enter app's developer name"
          />
        </div>
        <div className="mt-4 mx-2">
          <input
            className="w-40"
            type="number"
            name="appSize"
            placeholder="Enter app Size (in mb) "
          />
        </div>

        <div className="mt-4 mx-2">
          <input
            className="w-40"
            type="text"
            name="appCategory"
            placeholder="Enter Category"
          />
        </div>

        <div className="custom-file w-100 mt-4 mx-2 flex-row">
          <label>Upload Image</label>
          <input
            className="w-50 mx-4"
            type="file"
            id="appImg"
            name="appImg"
            aria-describedby="appImg"
            placeholder="Upload Apk Img"
          />
        </div>

        {/* <div className="custom-file w-100 mt-4 mx-2 flex-row">
          <label>Upload File</label>
          <input
            className="w-50 mx-4"
            type="file"
            id="appFile"
            name="appFile"
            aria-describedby="appFile"
            placeholder="Upload Apk File"
          />
        </div> */}

        <button
          type="button"
          className="btn btn-primary w-20 mt-2 mx-2"
          style={{ borderRadius: "30px" }}
          onClick={this.Post}
        >
          Upload
        </button>
        <img
          id="appImg"
          style={{
            display: "block",
          }}
        ></img>
      </div>
    );
  }
}

export default AddApp;
