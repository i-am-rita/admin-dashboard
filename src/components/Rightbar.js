import React from "react";

import "./Rightbar.css";
import "./Rightbar.css"
import dodoo from "../assets/dodoo.svg";
import Gtco from "../assets/Gtco.svg";
import arrow from "../assets/arrow-right.svg"
import { rightbarData } from "../Data/SidebarData";

const Rightbar = ({banking}) => {
  return (
    <div className="rightbar__container">
      {/* Blue and white button */}
      <div className="right__button">
        <button>Create New Branch</button>
        <button> + Create Virtual Account</button>
      </div>

      {/* Activity feed */}
      <div className="activity">
      <div className="activity__feed">
        <h4>
          Activity Feed - <span>{banking?.bankHandle}</span>
        </h4>
        <div className="active-date">
          <p style={{color: "#02ba81"}}>Active</p>
          <li>Created 16days ago</li>
        </div>
      </div>

      <div className="empty__div" />
      <div className="bank__logo">
        <img src={banking?.bankImg} alt="Bank's logo" />
      </div>

      {/* bank name */}
      <div className="account__view">
        <div>
          <h4>{banking?.bankName}</h4>
          <p>{banking.bankNum}</p>
        </div>
        <button>Go to Account View <img src={arrow} alt="right-arrow"/> </button>
      </div>
      <hr style={{ border: "0.5px solid #e1e1e1" }} />

      {/* inflow */}
      <div className="total__inflow">
        <div className="inflow__content">
          <p>Total inflow</p>
          <h4>{banking.money}</h4>
        </div>
        <div className="inflow__content">
          <p>Last Activity Date</p>
          <h4>13th Sept. 2022</h4>
        </div>
        <div className="inflow__content">
          <p>Linked Branch</p>
          <img src={dodoo} alt="dodo lekki" />
        </div>
      </div>
      <hr style={{ border: "0.5px solid #e1e1e1" }} />

      {/* Transaction details */}
      <div className="transaction__details">
        <div className="detail-transact">
          <p>Transaction Details</p>
          <p>Amount</p>
          <p>Date</p>
        </div>
        {rightbarData.map((data) => {
          return (
            <>
              <div className="transacting">
                <h5>{data.name}</h5>
                <h5>{data.amount}</h5>
                <h5>{data.day}</h5>
                <img src={data.icon} alt="arro" />
              </div>
              <hr style={{ border: "0.5px solid #e1e1e1" }} />
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Rightbar;
