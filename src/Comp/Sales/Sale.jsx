import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Customers, stock } from "../../Data/index";
import validator from "validator";

const Sales = ({ products }) => {

  const [productVal, setProductVal] = useState();
  const [buyerEmail, setBuyerEmail] = useState();
  const [itemsBought, setItemsBought] = useState();
  const [emailError, setEmailError] = useState("Enter valid email");
  const [exist, setExist] = useState(false);
  //validation
  const [isproductVal, setIsProductVal] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [itemsValidation, setItemsValidation] = useState(true);



  const validateItems = (items) => {
    if (items) {
      setItemsValidation(true);
    } else {
      setItemsValidation(false);
    }
  };
  const EmailValidation = (email) => {
    if (email) {
      CustomerValidation(email);
    } else {
      setEmailError("Enter Valid email!");
      setEmailValidation(false);
    }
  };
  const CustomerValidation = (_email) => {
    if (validator.isEmail(_email)) {
      setEmailValidation(true);
      setBuyerEmail(_email);
    } else {
      setEmailError("email must be in correct format(e.g test@gmail.com)");
      setEmailValidation(false);
    }
  };

  const removeStock = () => {

      const i = Customers.findIndex((c) => c.email === buyerEmail);
      const cus=Customers[i];
      if (i>=0) {
        var cusIndex = cus.purchases.findIndex((prod) => prod === productVal);
        if (cusIndex >= 0) {
          setEmailError("User already has purchased this product");
          setEmailValidation(false);
        } else {

          var store = cus.purchases;
          store.push(productVal);
          Customers[i] = {
            id: cus.id,
            email: cus.email,
            purchases: store,
          };
          setBuyerEmail('')
          setItemsBought('')
          setEmailValidation(true);

        }
      } else if(emailValidation) {

        const tempArr = [];
        tempArr.push(productVal);
        Customers.push({
          id: Customers.length + 1,
          email: buyerEmail,
          purchases: tempArr,
        });
        setBuyerEmail('')
          setItemsBought('')

      }
  };

  return (
    <div className="addContainer">
      <div className="addCard">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Remove Stock
        </h2>
        <form>
        <div className="inputContainer">
          <h3>Select a Product Code</h3>
          <select
            onChange={(e) => setProductVal(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          >
            <option>---select---</option>

            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
          {!isproductVal && <p className="error">Select a Product Code</p>}
        </div>
        <div className="inputContainer">
          <h3>Buyer Email Address</h3>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="email"
            placeholder="Buyer Email Address"
            onChange={(e) => setBuyerEmail(e.target.value)}
            onBlur={(e) => EmailValidation(e.target.value)}
            value={buyerEmail}
          />
          {!emailValidation && <p className="error">{emailError}</p>}
        </div>
        <div className="inputContainer">
          <h3>Items Bought</h3>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="numeric"
            placeholder="Items Bought"
            onChange={(e) => setItemsBought(Number(e.target.value))}
            onBlur={(e) => validateItems(e.target.value)}
            value={itemsBought}
          />
          {!itemsValidation && (
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
            onClick={() => removeStock()}
            style={{
              background: "#0275d8",
              color: "white",
              width: "100%",
            }}
          >
            Item Shipped
          </Button>
        </div>
     
     
        </form>
      </div>
    </div>
  );
};

export default Sales;
