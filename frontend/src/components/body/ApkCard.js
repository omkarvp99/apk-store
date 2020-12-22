import "./ApkCard.css";
import React from "react";
// import Axios from "axios";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
// };

export default function ApkCard({
  file,
  filename,
  _id,
  appName,
  appDev,
  appSize,
  appCategory,
  appImg,
  appFile,
}) {
  // const [Image, setImage] = useState({});
  //   useEffect(() => {
  //     getImage();
  //     console.log(Image);
  //   });

  //   const getImage = () => {
  //     Axios.get(("http://localhost:5000/files/:file={image}", config))
  //       .then((res) => {
  //         const data = res.data;
  //         setImage({ data });
  //       })
  //       .catch(() => {
  //         alert("No Data!!!!");
  //       });
  //   };

  //   id   title   by   filesize   data
  return (
    <div className="videocard mx-5" value={_id}>
      <img className="videocard__thumbnail " id={_id} src={filename} alt="" />
      <div className="videocard__info">
        <p>Download</p>
        <div className="videocard__text">
          <h4 className="videocard__avatar">{appName}</h4>
          <p>
            By {file.appDev} . FileSize {file.appSize}
          </p>
          <p>{appCategory}</p>
        </div>
      </div>
    </div>
  );
}
