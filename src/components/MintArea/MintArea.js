import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/jellyfish-1.png";
import image2 from "../../assets/jellyfish-2.png";
import image3 from "../../assets/jellyfish-3.png";
import image4 from "../../assets/jellyfish-4.png";
import image5 from "../../assets/jellyfish-5.png";
import image6 from "../../assets/jellyfish-6.png";
import image7 from "../../assets/jellyfish-7.png";
import image8 from "../../assets/jellyfish-8.png";
import image9 from "../../assets/jellyfish-9.png";
import image10 from "../../assets/jellyfish-10.png";
import styles from "../MintArea/MintArea.module.css";
import WalletClient from "../WalletClient/WalletClient";

const MintArea = () => {
  return (
    <>
      <div className={styles.marqueeBox}>
        <Marquee className={styles.marquee} direction={"left"} loop={0} speed={40} gradient={false}>
          {/* {[image1, image2, image3, image4,image5,image6,image7,image8,image9,image10].map((image, index) => {
          return (
            <img
              key={index}
              className={styles.marqueeSize}
              alt={`a sneak preview of one of the nft jellyfish dreams`}
              src={image}
            />
          );
        })} */}
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image1}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image2}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image3}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image4}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image5}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image6}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image7}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image8}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image9}
          />
          <img
            className={styles.marqueeSize}
            alt={`a sneak preview of one of the nft jellyfish dreams`}
            src={image10}
          />
        </Marquee>
      </div>
      {/* <WalletClient /> */}

      <section className={styles.startMint}>
        <div className={styles.goDeep}>
          <div className={styles.goDeepText}>
            <h3>Wanna go deep?</h3>
            <span>Mint your Jellyfish</span>
          </div>
        </div>

        <div className={styles.mintForm}>
          <h3>How deep is your love?</h3>
          <hr />

          <div>
            <i></i>
            <div>
              {" "}
              <span>price per jellyfish</span> <p>0.01 ETH</p>{" "}
            </div>
          </div>

          <div className={styles.mintCounter}>
            <button className={styles.btn}>-</button>
            <span>1</span>
            <button className={styles.btn}>+</button>
          </div>

          <div className={styles.okMint}>
            <div className={styles.totalCounter}>
              <p>Total</p>
              <span>0.01 ETH</span>
            </div>
            <button className={styles.btn}>Mint now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintArea;
