import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import HeroBannerImage from "../assets/images/background.png";

const HeroBanner = () => (
  <Box sx={{ position: "relative", width: "min(100vw,1920px)",top: { xs: "-80px", sm: "-230px" } }}>
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        pl: { sm: "40px" },
        zIndex: 2,
        top: { xs: "-80px", sm: "0px" },
        height: {xs: '',sm: '1266px'}
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#1a1a1a"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "35px", sm: "70px" },
          top: "200px",
          left: "575px",
        }}
      >
        Wake up!
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="700"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "69px", sm: "138px" },
          top: "135px",
          left: "785px",
        }}
      >
        It's Time
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "28px", sm: "56px" },
          top: "280px",
          left: "960px",
        }}
      >
        To Take The
      </Typography>

      <Typography
        color="#1a1a1a"
        position={"absolute"}
        fontWeight="700"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "145px", sm: "290px" },
          top: "200px",
          left: "540px",
        }}
      >
        Action
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "22px", sm: "44px" },
          top: "530px",
          left: "710px",
        }}
      >
        Begin Your Personalized Fitness
      </Typography>

      <Typography
        color="#1a1a1a"
        position={"absolute"}
        fontWeight="700"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "36px", sm: "72px" },
          top: "570px",
          left: "810px",
        }}
      >
        Journey
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="700"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "36px", sm: "72px" },
          top: "570px",
          left: "1020px",
        }}
      >
        Here
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "36px", sm: "72px" },
          top: "710px",
          left: "715px",
        }}
      >
        Choose From
      </Typography>

      <Typography
        color="#e3502e"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "36px", sm: "72px" },
          top: "790px",
          left: "830px",
        }}
      >
        1000+ Exercises
      </Typography>

      <Typography
        color="white"
        position={"absolute"}
        fontWeight="400"
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        sx={{
          fontSize: { xs: "40px", sm: "80px" },
          top: "700px",
          left: "96px",
        }}
      >
        Get Fit,Get Strong
      </Typography>

      <Typography
        fontWeight={"400"}
        position={"absolute"}
        fontStyle={"italic"}
        fontFamily={"Kenyan Coffee, sans-serif"}
        color={"#e3502e"}
        sx={{
          fontSize: { xs: "22px", sm: "44px" },
          top: "765px",
          left: "96px",
        }}
        mb="23px"
        mt="30px"
      >
        Explore Exercises at Your Fingertips
      </Typography>
      <button
        style={{
          position: 'absolute',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 'none',
          cursor: 'pointer',
          top: "870px",
          left: "96px",
          borderRadius: '15px',
          background: 'transparent'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "102px",
            height: "78px",
            borderRadius: '15px 0 0 15px',
            background: 'white'
          }}
        >
          <ArrowForwardOutlinedIcon sx={{ width: "40px", height: "40px" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "78px",
            borderRadius: '0 15px 15px 0',
            background: "#f04f16",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            EXPLORE
          </p>
        </div>
      </button>
    </Box>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
