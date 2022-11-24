import React from "react";
import "./Center.css"
const Center = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "20px" }}>Virtual Account Dashboard</h2>

      <div className="total__field">
        <div>
          <p>Total Credits</p>
          <p>NGN 3,287,902.00</p>
        </div>
        <div>
          <p>Total Transfer Settlememts</p>
          <p>81 Settlement</p>
        </div>
        <div>
          <p>Generated Accounts</p>
          <p>12 Accounts</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
