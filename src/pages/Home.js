import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import Footer from "../components/Footer";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box sx={{background: 'f0f0f0'}} width="1920px" style={{overflowX: 'hidden'}}>
      <Navbar />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Footer/>
      
    </Box>
  );
};

export default Home;
