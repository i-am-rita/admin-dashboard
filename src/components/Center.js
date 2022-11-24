import React from "react";
import "./Center.css";
import hamburg from "../assets/hamburg.svg";
import hamburg2 from "../assets/hamburg2.svg";
const Center = () => {
  return (
    <div style={{ width: "55%" }}>
      <h2 style={{ marginLeft: "20px" }}>Virtual Account Dashboard</h2>

      <div className="total__field">
        <div className="total__content">
          <p>Total Credits</p>
          <h4>NGN 3,287,902.00</h4>
        </div>
        <div className="total__content">
          <p>Total Transfer Settlememts</p>
          <h4>81 Settlement</h4>
        </div>
        <div className="total__content">
          <p>Generated Accounts</p>
          <h4>12 Accounts</h4>
        </div>
      </div>

      <div className="user__transactions">
        <div
          className="virtual__control"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <h3 style={{ color: "#000" }}>Your Virtual Accounts</h3>
          <div style={{ display: "flex", gap: "5px" }}>
            <img src={hamburg} alt="menu" />
            <img src={hamburg2} alt="menu" />
          </div>
        </div>
        <hr style={{ border: "0.5px solid #e1e1e1" }} />

        <div className="branch__search">
          <button
            style={{
              borderRadius: "25%",
              border: "none",
              padding: "10px 20px",
              background: "blue",
            }}
          >
            Branch
          </button>
          <div className="button__search">
            <input type="email" placeholder="Search for virtual account" />
          </div>
        </div>
        <hr style={{ border: "0.5px solid #e1e1e1" }} />
      </div>
    </div>
  );
};

export default Center;
