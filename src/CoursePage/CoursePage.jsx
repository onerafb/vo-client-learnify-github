import React, { useState } from "react";
import supreme from "../assets/videos/supreme.mp4";
import Navbar from "../components/Navbar/Navbar";
import "./coursepage.css";
const CoursePage = () => {
  const [lectureNumber, setlecturenumber] = useState(0);
  const lectures = [
    {
      _id: "xxx",
      title: "sample1",
      description: "sample description",
      video: {
        url: "video url",
      },
    },
    {
      _id: "xxx2",
      title: "sample2",
      description: "sample description2",
      video: {
        url: "video url",
      },
    },
    {
      _id: "xxx3",
      title: "sample3",
      description: "sample description3",
      video: {
        url: "video url",
      },
    },
  ];
  return (
    <section className="course-page-sec">
      <Navbar />
      <div className="c-p-main">
        <div className="c-p-vid">
          <video
            src={supreme}
            className="c-p-vid-div"
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            disablePictureInPicture
            disableRemotePlayback
          ></video>
          <h2>
            <span>No.{`${lectureNumber + 1}`}</span>
            {`  ${lectures[lectureNumber].title}  `}
          </h2>
          <h3 className="c-p-h3">Description</h3>
          <p>{`  ${lectures[lectureNumber].description}  `}</p>
        </div>
        <div className="c-p-two">
          {lectures.map((element, index) => (
            <button key={element._id} onClick={() => setlecturenumber(index)}>
              {index + 1}{`)`} {element.title}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="c-p-third">
     
      </div> */}
    </section>
  );
};

export default CoursePage;
