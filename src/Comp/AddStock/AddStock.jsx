import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { stock, products } from "../../Data/index";
import { Link } from "react-router-dom";

const AddStock = () => {
  const [productVal, setProductVal] = useState();
  const [item, setItem] = useState();
  const [itemprice, setItemPrice] = useState();
  // validation usestates
  const [isproductVal, setIsProductVal] = useState(true);
  const [isitem, seIstItem] = useState(true);
  const [isitemprice, setIsItemPrice] = useState(true);
  const [varified, SetVarified] = useState(true);

  const ValidateItemNum = (num) => {
    if (num) {
      seIstItem(true);
      SetVarified(true);
    } else {
      seIstItem(false);
      SetVarified(false);
    }
  };
  const ValidatePrice = (price) => {
    if (price) {
      setIsItemPrice(true);
      SetVarified(true);
    } else {
      setIsItemPrice(false);
      SetVarified(false);
    }
  };

  const AddStock = () => {
    if (varified&&productVal&&productVal!=='---select---') {
      stock.push({
        id: stock.length + 1,
        productcode: productVal,
        itemsCode: productVal + "Item",
        itemNum: item,
        price: itemprice,
      });
      setItem('')
      setItemPrice('')
      console.log("added new stock--->", stock);
    } else {
      if (!productVal||productVal==='default') {
        setIsProductVal(false);
      }
    }
  };
console.log('-->',productVal)
  return (
    <div className="addContainer">
      <div className="addCard">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Stock</h2>
        <div className="inputContainer">
          <h3>Select a Product Code</h3>
          <select
            onChange={(e) => setProductVal(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          >
            <option value='default'>---select---</option>

            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
          {!isproductVal && <p className="error">Select a Product Code</p>}
        </div>
        <div className="inputContainer">
          <h3>Items Received</h3>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="numeric"
            placeholder="Items Received"
            onChange={(e) => setItem(Number(e.target.value))}
            onBlur={(e) => ValidateItemNum(e.target.value)}
            value={item}
          />
          {!isitem && (
            <p className="error">Enter Number of item in numeric form</p>
          )}
        </div>
        <div className="inputContainer">
          <h3>Price per Item Received</h3>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="number"
            placeholder="Price per Item Received"
            onChange={(e) => setItemPrice(Number(e.target.value))}
            onBlur={(e) => ValidatePrice(e.target.value)}
            value={itemprice}
          />
          {!isitemprice && (
            <p className="error">Enter Number of item in numeric form</p>
          )}
        </div>
        <div
          style={{
            width: "100%",
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            to='/'
            onClick={() => AddStock()}
            style={{
              background: "#0275d8",
              color: "white",
              width: "100%",
            }}
          >
            Add Stock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
