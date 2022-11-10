import React from "react";
import styles from "../Hero/Hero.module.css";
import image1 from "../../assets/jellyfish-1.png";
import image2 from "../../assets/jellyfish-2.png";
import image3 from "../../assets/jellyfish-3.png";
import image4 from "../../assets/jellyfish-4.png";

const Hero = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.welcome}>
        <h2>Welcome to Jellyfish Dreams</h2>
        <p>A deep world in which several AI and one human act as one.</p>
        <button className={styles.btn}>Check on Opeansea</button>
      </div>

      <div className={styles.sneakPeek}>
        {[image1, image2, image3, image4].map((image,index) => {
          return (
            <img
              key={index}
              alt={`a sneak preview of one of the nft jellyfish dreams`}
              src={image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
