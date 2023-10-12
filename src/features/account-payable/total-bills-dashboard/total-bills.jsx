import React from "react";
import "./totalBills.scss";

function TotalBills({title, number ,price, color}) {
  return (
    <div className="bill-card">
      <div
        className="bill-heading"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span className="bill-title">{title}</span>
        <span className="bill-number">{number}</span>
      </div>
    <div className="bill-foter">
      <span className="bill-price" style={{color: color}}>{price}</span>
    </div>
  </div>
  );
}

export default TotalBills;
