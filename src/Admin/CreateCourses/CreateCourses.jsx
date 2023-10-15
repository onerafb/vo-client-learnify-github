import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./createcourses.css";
import Navbar from "../../components/Navbar/Navbar";

const CreateCourse = () => {
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimageprev(reader.result);
      setimage(file);
    };
  };
  const categories = [
    "Web Dev",
    "Web Dev",
    "Web Dev",
    "Web Dev",
    "Web Dev",
    "Web Dev",
  ];

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [createdby, setcreatedby] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [imageprev, setimageprev] = useState("");
  return (
    <section className="c-courses">
      <Navbar/>
      <div className="c-courses-main">
        <div className="c-courses-main-one">
          <form className="c-courses-form">
            <input
              type="text"
              onChange={(e) => settitle(e.target.value)}
              placeholder="Enter Title"
              value={title}
              className="c-courses-input"
              required
            />
            <input
              type="text"
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
              value={description}
              className="c-courses-input"
              required
            />
            <input
              type="text"
              onChange={(e) => setcreatedby(e.target.value)}
              placeholder="Creator name"
              value={createdby}
              className="c-courses-input"
              required
            />
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="c-courses-select"
            >
              <option value="">Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={changeImageHandler}
              className="c-courses-choose"
            />
            {imageprev && (
              <div className="c-courses-img-prev-div">
                <img src={imageprev} className="c-courses-imgprev" />
              </div>
            )}
            <button type="submit" className="c-courses-bt">
              Create
            </button>
          </form>
        </div>
        <div className="c-courses-main-two">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default CreateCourse;
