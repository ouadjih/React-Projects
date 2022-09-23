import React from "react";
import "./project3.css";
import { AiFillStar } from "react-icons/ai";

export default function Project3(props) {
  return (
    <>
      <div className="card">
        <div className="card--badge">
          {" "}
          {props.openSpots === 0 ? "SOLD OUT" : "ONLINE"}{" "}
        </div>
        <img src={props.img} alt="pro" className="prof" />
        <div className="rating">
          <div className="star">
            <AiFillStar />
          </div>
          <span className="bold">{props.rate}</span>({props.num}).
          {props.country}
        </div>
        <div className="desc">{props.desc}</div>
        <div className="price">
          <b>From {props.price}</b>{" "}
          <span style={{ color: "#a1a1a1" }}>/person</span>
        </div>
      </div>
    </>
  );
}
