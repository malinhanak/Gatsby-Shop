import React from "react";

const FlexRow = ({ children }) => (
  <div style={{
    width:"100%",
    display:"flex",
    flexDirection: "row",
  }}>{children}</div>
);
export default FlexRow;
