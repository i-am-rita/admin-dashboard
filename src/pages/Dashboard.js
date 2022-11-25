import React, { useState } from "react";

import "./Dashboard.css";
import Logo from "../assets/logo.svg";
import JT from "../assets/JT.svg";
import downarrow from "../assets/downarrow.svg";
import notification from "../assets/notification.svg";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";

import polaris from "../assets/Polaris.svg";
import copy from "../assets/copy.svg";
import dodo from "../assets/dodo.svg";
import more from "../assets/more.svg";
import Gtco from "../assets/Gtco.svg";
import providus from "../assets/providus.svg";
import firstbank from "../assets/firstbank.svg";

const bankDetails = [
  {
    bankImg: polaris,
    bankName: "Polaris Bank Limited",
    bankNum: "08023221144",
    copy: copy,
    dodo: dodo,
    money: "NGN 100,000.00",
    options: more,
    bankHandle: 'PO Bank'
  },
  {
    bankImg: Gtco,
    bankName: "Guaranty Trust Bank",
    bankNum: "209630**883",
    copy: copy,
    dodo: dodo,
    money: "NGN 77, 823.00",
    options: more,
    bankHandle: 'GT Bank'

  },
  {
    bankImg: providus,
    bankName: "Providus Bank PLC",
    bankNum: "08023221144",
    copy: copy,
    dodo: dodo,
    money: "NGN 100,000.00",
    options: more,
    bankHandle: 'PR Bank'

  },
  {
    bankImg: firstbank,
    bankName: "First Bank of Nigeria",
    bankNum: "08023221144",
    copy: copy,
    dodo: dodo,
    money: "NGN 100,000.00",
    options: more,
    bankHandle: 'FI Bank'

  },
];
const Dashboard = () => {
  const [banking, setBanking] = useState({});

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
        <Center bankDetails={bankDetails} setBanking={setBanking} />
        <Rightbar banking={banking} />
      </div>
    </div>
  );
};

export default Dashboard;
