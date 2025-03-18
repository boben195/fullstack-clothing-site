import React from "react";
import Hero from "../../components/Hero/Hero";
import BestSeller from "../../components/LastestCollecion/BestSeller";
import HomeCollection from "../../components/HomeCollection/HomeCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <HomeCollection />
    </div>
  );
};

export default Home;
