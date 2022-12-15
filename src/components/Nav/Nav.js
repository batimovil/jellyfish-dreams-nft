import React from 'react'
import WalletButton from "../WalletButton/WalletButton";
import styles from "../Nav/Nav.module.css";

const Nav = () => {
  return (
    <header>

      <h1>Jellyfish Dreams NFT</h1>

      <ul>
        <li> <a href='#mint'>🐚 Mint</a> </li>
        <li> <a href='#faqs'>ℹ️ Faqs</a></li>
        <li className={styles.btn}>{ <WalletButton />}</li>
      </ul>

    </header>
  )
}

export default Nav