import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = ({children}) => (
      <Box
        sx={{
          display:"flex",
          justifyContent: 'start',
          alignItems: 'center',
          zIndex: 5,
          position: "relative",
          width: 'min(100vw,1920px)',
          height:{xs:'5rem', sm: '8rem'},
          pl: {xs: '10px',sm:'20px'},
        }}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </Box>
);

export default Navbar;