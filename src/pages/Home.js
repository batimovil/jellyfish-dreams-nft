import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Faqs from "../components/Faqs/Faqs";
import MintArea from "../components/MintArea/MintArea";
import Footer from "../components/Footer/Footer";
import video from "../assets/Water.mp4";

const Home = () => {

  return (
    <>
      <video autoPlay muted loop id="waterVideo">
        <source src={video} type="video/mp4" />
      </video>

      <Nav />
      <Hero />
      <MintArea />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
