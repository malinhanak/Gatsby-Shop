import React from "react";

const NavComponent = ({ children }) => (
  <div style={{
    margin:"5px 5px",
    padding:"8px 8px",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
    textDecoration: "none"
  }}>{children}</div>
);
export default NavComponent;
