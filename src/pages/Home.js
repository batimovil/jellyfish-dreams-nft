import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Collection from "../components/Collection/Collection";
import MintArea from "../components/MintArea/MintArea";
import Footer from "../components/Footer/Footer";

const Home = () => {

  return (
    <>
    
      <Nav />
      <Hero />
      <MintArea />
      <About />
      <Collection />
      <Footer />

    </>
  );
};

export default Home;
