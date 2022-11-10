import React from 'react'
import WalletButton from "../WalletButton/WalletButton";
import styles from "../Nav/Nav.module.css";

const Nav = () => {
  return (
    <header>

      <h1>Jellyfish Dreams NFT</h1>

      <ul>
        <li>About</li>
        <li>Collection</li>
        <li className={styles.btn}>{ <WalletButton />}</li>
      </ul>

    </header>
  )
}

export default Nav