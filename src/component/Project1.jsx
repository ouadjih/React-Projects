import React from "react";
import "./project1.css";
import photgrid from "../photogrid.jpg";
import { FaAirbnb } from "react-icons/fa";
import Project3 from "./Project3.jsx";
import { data } from "./data";
export default function Project1() {
  return (
    <div className="container">
      <div className="top">
        <div className="navbaro">
          <div className="logoo">
            <FaAirbnb /> airbnb
          </div>
        </div>
        <div className="photogrid">
          <img className="adv" src={photgrid} alt="" />
        </div>
        <div className="phrase">
          <h1>Online Experiences</h1>
          <h4>
            join unque interactive activities led by one-of-kind hosts--all
            without leaving home.
          </h4>
        </div>
        <div className="carousal">
          {data.map((e) => (
            <Project3
              key={e.id}
              {...e}
              //item={e}
              //spread syntaxe {...item} (takes propriety of data and creates seprate props... exp : img={item.img}...)
            />
          ))}
        </div>
      </div>
    </div>
  );
}
