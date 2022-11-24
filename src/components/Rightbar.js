import React from "react";

import "./Rightbar.css";
import gtco from "../assets/Gtco.svg";
import dodoo from "../assets/dodoo.svg";
import { rightbarData } from "../Data/SidebarData";
const Rightbar = () => {
  return (
    <div>
      {/* Blue and white button */}
      <div className="right__button">
        <button>Create New Branch</button>
        <button> + Create Virtual Account</button>
      </div>

      {/* Activity feed */}
      <div className="activity">
        <div className="activity__feed">
          <h4>
            Activity Feed - <span>GT Bank</span>
          </h4>
          <div className="active-date">
            <p>Active</p>
            <li>Created 16days ago</li>
          </div>
        </div>

        {/* empty div */}
        <div className="empty__div" />
        <div className="bank__logo">
          <img src={gtco} alt="Gt bank's logo" />
        </div>

        {/* bank name */}
        <div className="account__view">
          <div>
            <h4>Guaranty Trust Bank</h4>
            <p>209630**83</p>
          </div>
          <button>Go to Account View &gt; </button>
        </div>
        <hr style={{ border: "0.5px solid #e1e1e1" }} />

        {/* inflow */}
        <div className="total__inflow">
          <div className="inflow__content">
            <p>Total inflow</p>
            <h4>NGN 77,823.00</h4>
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

        <div className="details__transact"></div>
      </div>
    </div>
  );
};

export default Rightbar;
