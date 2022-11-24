import React from "react";
import { SidebarData, SidebarDataII } from "../Data/SidebarData";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {SidebarData.map((item, index) => {
          return (
            <div className="sidebar__items content" key="index">
              {/* <h3>Business</h3> */}

              <img src={item.icon} alt="description" />
              <p>{item.heading}</p>
            </div>
          );
        })}
        {/* <hr style={{ border: "1px solid red", width: "100%", margin: "0!important" }} /> */}
        <div className="lower__sidebar">
          {SidebarDataII.map((item) => {
            return (
              <div className="lower__content">
                <img src={item.icon} alt="description" />
                <p>{item.heading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
