import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calc from "../../Data/CalcAPI";
import { stock } from "../../Data/index";

const EmptyStock = () => <div >Empty Stock!</div>;

const View = () => (
  <div className="secContainer">
    
    <div>
      {Calc.avarage().map((items, index) => {
        return (
          <Link key={index} to="/">
            <div
              style={{
                border: "1px solid rgba(0,0,0.2)",
                padding: "20px",
                marginBottom: "5px",
                background: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <h3>{items.productcode}</h3>
                <p>{items.item}</p>
              </div>
              <p>{items.ave}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

const ViewStock = () => {
  console.log("my stock", stock);
  return (
    <div className="viewContainer">
      <h2 style={{textAlign:'center'}}>Stock Levels</h2>
      {stock.length !== 0 ? <View /> : <EmptyStock />}
    </div>
  );
};

export default ViewStock;
