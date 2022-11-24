import React from "react";

import "./Dashboard.css";
import Logo from "../assets/logo.svg";
import JT from "../assets/JT.svg";
import downarrow from "../assets/downarrow.svg";
import notification from "../assets/notification.svg";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";
const Dashboard = () => {
  return (
    <div className="main__content">
      <div className="user__details">
        <img src={Logo} alt="logo" />
        <div className="flex__end">
          <img src={notification} alt="notification bell" className="notify" />

          <div className="user__industry">
            <img src={JT} alt="JT logo" />
            <div className="industry">
              <h3>JT Industry Limit..</h3>
              <p> JamesT@gmail.com</p>
            </div>
            <img src={downarrow} alt="down arrow" />
          </div>
        </div>
      </div>
      <div className="contents">
        <Sidebar />
        <Center />
        <Rightbar/>
      </div>
    </div>
  );
};

export default Dashboard;
