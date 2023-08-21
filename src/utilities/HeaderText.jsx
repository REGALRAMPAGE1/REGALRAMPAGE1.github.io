import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import BoxUnderHeader from "./BoxUnderHeader";
import "./HeaderText.css";
import { Link, useLocation } from "react-router-dom";

export default function HeaderText({ Text, redirectUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const isActive = location.pathname === redirectUrl;

  const handleMouseIn = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  };

  const typographyStyle = {
    fontFamily: "Poppins-Regular",
  };

  return (
    <div style={{ flexGrow: 1, textAlign: "center", display: "flex", justifyContent: "center" }}>
      <Link to={redirectUrl}>
        <div
          className={isActive ? "ActiveHeaderText" : "HeaderText"}
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          style={wrapperStyle}
        >
          <Typography
            noWrap
            component="div"
            style={typographyStyle}
          >
            {Text}
          </Typography>
          {isHovered && !isActive && <BoxUnderHeader width={"1.5em"} hoverColor={"#00C2B5"} />}
          {isActive && <BoxUnderHeader width={"1.5em"} hoverColor={"#00C2B5"} />}
        </div>
      </Link>
    </div>
  );
}
