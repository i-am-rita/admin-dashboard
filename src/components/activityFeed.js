import React from "react";
import gtco from "../assets/Gtco.svg";


const activityFeed = () => {
  return (
    <div>
      {/* Activity feed */}
      <div>
        <h4>Activity Feed</h4>
        <p>GT Bank</p>
        <div>
          <p>Active</p>
          <p>Created 16days ago</p>
        </div>
      </div>
      {/* empty div */}
      <div />
      <div>
        <img src={gtco} alt="Gt bank's logo" />
      </div>
      {/* bank name */}
      <div>
        <div>
          <p>Guaranty Trust Bank</p>
          <p>209630**83</p>
        </div>
        <button>Got to Account View &gt; </button>
      </div>
      <hr style={{ width: "100%" }} />

      {/* inflow */}

      <div className="total__inflow">
        <div className="total__content">
          <p>Total inflow</p>
          <h4>NGN 3,287,902.00</h4>
        </div>
        <div className="total__content">
          <p>Last Activity Date</p>
          <h4>81 Settlement</h4>
        </div>
        <div className="total__content">
          <p>Linked Branch</p>
          <h4>12 Accounts</h4>
        </div>
      </div>
      <hr style={{ width: "100%" }} />

      {/* Transaction details */}
      <div>
        <h3>Transaction Details</h3>
        <h3>Amount</h3>
        <h3>Date</h3>
      </div>

      <div>
        <p>Olaoluwa S.</p>
        <p>#6,720.00</p>
        <p>Today, 8mins ago</p>
        <p>Ola</p>
      </div>
    </div>
  );
};

export default activityFeed;
