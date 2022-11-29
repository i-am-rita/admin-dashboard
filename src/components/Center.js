import React from "react";
import "./Center.css";
import hamburg from "../assets/hamburg.svg";
import hamburg2 from "../assets/hamburg2.svg";
import settings from "../assets/settings.svg";
import search from "../assets/search.svg";

const Center = ({ bankDetails, setBanking }) => {
  // console.log(banking);
  // const [showDetails, setShowDetails] = useState(false);

  // const handleDetails = (index) => {
  //   if (showDetails === index) {
  //     setShowDetails("");
  //   } else {
  //     setShowDetails(index);
  //   }
  // };
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
            padding: "2px 20px",
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
              borderRadius: "100px",
              border: "none",
              padding: "8px 11px",
              background: "#F4F3FF",
              color: "#5444F2",
              fontSize: "16px",
            }}
          >
            Branch
          </button>
          <div className="button__search">
            <input type="email" placeholder="Search for virtual account" />
            <img src={search} alt="search icon" />
          </div>
        </div>
        <hr style={{ border: "0.5px solid #e1e1e1" }} />
        {/* lekki and manage */}
        <div
          className="virtual__control"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 20px",
            marginBottom: "-10px",
          }}
        >
          <h3 style={{ color: "#000" }}>Lekki II</h3>
          <div style={{ display: "flex", gap: "5px" }}>
            <p style={{ color: "#5444f2" }}>Manage</p>
            <img src={settings} alt="menu" style={{ color: "#5444f2" }} />
          </div>
        </div>

        <div className="bank__inflow">
          <div className="bank__titles">
            <p>Bank Name</p>
            <p>Account number</p>
            <p>Total inflow</p>
          </div>
          <hr style={{ border: "0.5px solid #e1e1e1" }} />

          <div className="bank__details">
            {bankDetails.map((detail, index) => {
              return (
                <>
                  {/* onClick={handleDetails("0")} */}
                  <div
                    className="details"
                    onClick={() => setBanking(detail)}
                    key="index"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                        marginRight: "50px",
                      }}
                    >
                      <img src={detail.bankImg} alt="banks logo" />
                      <p style={{ color: "#000" }}>{detail.bankName}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",

                        gap: "20px",
                        marginRight: "40px",
                      }}
                    >
                      <p style={{ color: "#000" }}>{detail.bankNum}</p>
                      <img src={detail.copy} alt="copy icon" />
                      <img src={detail.dodo} alt="dodo icon" />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "40px",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "#000",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                      >
                        {detail.money}
                      </p>
                      <img src={detail.options} alt="options icon" />
                    </div>
                  </div>
                  <hr
                    style={{ border: "0.5px solid #e1e1e1", width: "100%" }}
                  />
                </>
              );
            })}
          </div>
          {/* <Rightbar banking={banking} /> */}
        </div>
      </div>
    </div>
  );
};

export default Center;
