import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "./Modal";
import "./admincourses.css";
function Row({ item, coursedetailshandler, deletebuttonhandler }) {
  return (
    <tr>
      <td>{item._id}</td>
      <td>
        <img src={item.poster.url} className="a-c-img-prev" />
      </td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.createdby}</td>
      <td>{item.views}</td>
      <td>{item.numofvideos}</td>

      <td>
        <button
          className="a-c-bt"
          onClick={() => coursedetailshandler(item._id)}
        >
          View Lectures
        </button>
        <button
          className="a-c-bt"
          onClick={() => deletebuttonhandler(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
const AdminCourses = () => {
  const [modal, setmodal] = useState(false);
  const close = () => {
    setmodal(false);
  };
  const courses = [
    {
      _id: "ssds",
      title: "course",
      category: "web dev",
      poster: {
        url: "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      createdby: "a",
      views: 444444,
      numofvideos: 878,
    },
    {
      _id: "sss",
      title: "course",
      category: "web dev",
      poster: {
        url: "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      createdby: "a",
      views: 444444,
      numofvideos: 878,
    },
    {
      _id: "sss",
      title: "course",
      category: "web dev",
      poster: {
        url: "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      createdby: "a",
      views: 444444,
      numofvideos: 878,
    },
  ];
  const coursedetailshandler = (userid) => {
    console.log(userid);
    setmodal(true);
  };
  const deletebuttonhandler = (userid) => {
    console.log(userid);
  };
  const deletelecturehandler = (courseid, lectureid) => {
    console.log(courseid);
    console.log(lectureid);
  };
  const addlecturehandler = (e, courseid, title, description, video) => {
    e.preventDefault();
  };
  return (
    <section className="admincourses">
      <Navbar />
      <div className="admin-main">
        <div className="admin-main-one">
          <div className="a-c-con">
            <table>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Poster</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Creator</th>
                  <th>Views</th>
                  <th>Lectures</th>
                  <th>Action</th>
                </tr>

                {courses.map((item) => (
                  <Row
                    key={item._id}
                    item={item}
                    deletebuttonhandler={deletebuttonhandler}
                    coursedetailshandler={coursedetailshandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-main-two">
          <Sidebar />
        </div>
      </div>
      {modal && (
        <Modal
          close={close}
          id={88888}
          coursetitle={"React Course"}
          addlecturehandler={addlecturehandler}
          deletebuttonhandler={deletelecturehandler}
        />
      )}
    </section>
  );
};

export default AdminCourses;
