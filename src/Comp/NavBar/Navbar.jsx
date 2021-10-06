import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

const Navigation = () => {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
        background: "grey",
        color: "white",
        alignItems:'center'
      }}
    >
      <Link to="/">
        <h3 style={{ color: "white", fontWeight: "bold" }}>Home</h3>
      </Link>
      <div>
        {location.pathname !== "/sales" && (
          <Button
            style={{ marginRight: "10px", color: "yellow" }}
            component={Link}
            to="/sales"
          >
            +New Order
          </Button>
        )}

        {location.pathname !== "/addstock" && (
          <Button
            style={{ color: "white", background: "#0275d8" }}
            component={Link}
            to="/addstock"
          >
            +add stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
