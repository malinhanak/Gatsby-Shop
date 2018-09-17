import React from "react";

const ProductContainer = ({ children }) => (
  <div style={{
    margin:"1rem 1rem",
    padding: "1rem 1rem",
    width: 300,
    background:"#FFFDFD",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)",
    borderRadius:"5px 5px",
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }}>{children}</div>
);

export default ProductContainer;
