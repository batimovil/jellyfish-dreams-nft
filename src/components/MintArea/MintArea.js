import { React, useState, useEffect } from "react";
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
import Web3 from "web3";
import {
  useAddress,
  useWalletProvider,
  useBalance,
} from "../../contexts/OnboardContext";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";

const MintArea = () => {
  const [counter, setCounter] = useState(1);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const address = useAddress();
  const balance = useBalance();
  const [userBalance, setUserBalance] = useState(0);
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setTotal(counter * tokenPrice);
  }, [counter, tokenPrice]);

  useEffect(() => {
    const getContract = async () => {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });
      console.log(price);
      //const valueEth = web3.utils.fromWei(String(price));
      setTokenPrice(price);
    };

    getContract();
  }, [address]);

  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);

  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      setTokenPrice(price);

      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);

      const count = 1;

      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        count: counter,
      };

      const total = parseInt(counter) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
        .send({ from: address, value: total })
        .once("transactionHash", function (hash) {
          // setUserConfirmation(`success`);
          // setHash(hash);
          console.log("Transaction Hash", hash);
        })
        .once("receipt", function (receipt) {
          // setBlChainConfirmation(`success`);
          // setTimeout(() => {
          //   setSuccess(true);
          // }, 1000);
          console.log("Transaction Confirmed", receipt);
        })
        .on("error", function (error, receipt) {
          // handleError(error);
          console.log("Error", error);
        });
    } catch (error) {}
  };

  return (
    <>
      <div className={styles.marqueeBox}>
        <Marquee
          className={styles.marquee}
          direction={"left"}
          loop={0}
          speed={40}
          gradient={false}
        >
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

      <section id="mint" className={styles.startMint}>
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
              <span>price per jellyfish</span><p>5 ETH</p>
            </div>
          </div>

          <div className={styles.mintCounter}>
            <button
              className={styles.btn}
              disabled={!address}
              onClick={handleDecrement}
            >
              -
            </button>
            <span>{counter}</span>
            <button
              className={styles.btn}
              disabled={!address}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className={styles.okMint}>
            <div className={styles.totalCounter}>
              <p>Total</p>
              <span>{total}ETH</span>
            </div>
            <button className={styles.btn} onClick={handleMint}>
              Mint now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintArea;
