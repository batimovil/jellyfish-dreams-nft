import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Faqs from "../components/Faqs/Faqs";
import MintArea from "../components/MintArea/MintArea";
import Footer from "../components/Footer/Footer";

const Home = () => {

  return (
    <>
      <Nav />
      <Hero />
      <MintArea />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
