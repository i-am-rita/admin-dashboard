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

        <div className="lower__sidebar">
          <hr
            style={{
              border: "0.5px solid #e1e1e1",
              width: "100%",
              padding: "0",
            }}
          />

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
