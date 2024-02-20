import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Filter />
      <Card />
    </>
  );
};

export default Home;
