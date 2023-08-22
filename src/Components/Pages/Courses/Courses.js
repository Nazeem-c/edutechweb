import React from "react";
import "./Courses.css";
import ai from "../../../assets/img/ai.png";
import sd from "../../../assets/img/sd.png";
import dg from "../../../assets/img/dg.png";
import hacking from "../../../assets/img/hacking.png";

function Courses() {
  const course_data = [
    {
      title: "AI development",
      desc: "master AI development",
      img: ai,
    },
    {
      title: "Software development",
      desc: "master software development",
      img: sd,
    },
    {
      title: "Digital Marketing",
      desc: "master D M",
      img: dg,
    },
    {
      title: "Cyber Security",
      desc: "master Cyber Security",
      img: hacking,
    },
  ];
  return (
    <div className="container_course_container">
      <div className="course_top">
        <h2 className="section_title">Our free courses</h2>
        <p>Top trending courses on free</p>
        <div className="course_wrapper">
          {course_data.map((obj, index) => {
            return (
              <div className="course_item" key={index}>
                <span className="class_icon">
                  <img src={obj.img} alt="img" />
                </span>
                <div className="course_content">
                  <h4>{obj.title}</h4>
                  <p>{obj.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
