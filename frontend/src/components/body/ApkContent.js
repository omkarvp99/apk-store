// import React, { Component } from "react";
// import "../header/ProfileContent.css";
// import axios from "axios";

// const _ = require("lodash");

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
// };

// const url = window.location.pathname;

// const productkey = url.substring(url.lastIndexOf("/") + 1);

// // import ApkPage from "./ApkPage";
// // import ApkCard from "./ApkCard";

// class ApkContent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: [],
//       userData: [],
//     };
//   }

//   componentDidMount = () => {
//     this.getDataFromDb();
//     this.getValues();
//   };

//   getDataFromDb = () => {
//     axios
//       .get("http://localhost:5000/files", config)
//       .then((res) => {
//         const data = res.data;
//         this.setState({ files: data });
//       })
//       .catch(() => {
//         alert("Error!!! No data");
//       });
//   };

//   // displayData = (files) => {
//   //   return files.map((file, index) => {
//   //     if (file[index] == productkey) {
//   //       this.setState({ userData: file });
//   //     }
//   //   });
//   // };

//   getValues(files) {
//     for (let file in files) {
//       for (let key in file) {
//         if (file[key] === "productkey") {
//           this.setState({ userData: file });
//         }
//       }
//     }
//     let d1 = _.files.find({}, [(_id = productkey)], [(fromIndex = 0)]);
//   }

//   render() {
//     const config = {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       },
//     };

//     const url = window.location.pathname;

//     const productkey = url.substring(url.lastIndexOf("/") + 1);
//     const { _id } = this.props;

//     return (
//       <div>
//         <div className="subbody__search">
//           <img src="" alt="" height="200px" />
//         </div>
//         <div className="videocard__text" key={_id}>
//           <div>
//             <p>Lets check :</p>
//             <p>{productkey} :</p>
//             <p>{this.state.userData}:</p>
//           </div>
//         </div>
//         <hr className="hr__" />
//         <div className="subbody__search"></div>
//       </div>
//     );
//   }
// }
// export default ApkContent;
