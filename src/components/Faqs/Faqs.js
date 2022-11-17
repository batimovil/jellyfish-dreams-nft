import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <h1 className={styles.title}>FAQs</h1>

      <div className={styles.faqItem}>
        <h2> What is the collection about? </h2>
        <p>
          The collection is about the beauty of the ocean and the creatures that
          live in it. Jellyfish are one of the most beautiful creatures in the
          ocean and they are also one of the most mysterious. They are 95% water
          and 5% jelly. They are also the only animal that has no brain. So with this
          in mind we decided to create a collection of jellyfish that are related with
          humans and their dreams.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2> What is the collection called? </h2>
        <p>The collection is called Jellyfish Dreams. </p>
      </div>

      <div className={styles.faqItem}>
        <h2>What is the purpose of the collection?</h2>
        <p>
          The purpose of the collection is to celebrate deep down the sea,
          the combination of humans and AI through the beauty of jellyfish. 
          </p>
      </div>

      <div className={styles.faqItem}>
        <h2>Whats an nft? </h2>
        <p>
          An nft is a non-fungible token, which is a type of cryptocurrency.
          NFTs are unique and cannot be replicated, which makes them valuable.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2>How many nfts are in the collection? </h2>
        <p>There are 50 nfts in the collection.</p>
      </div>

      <div className={styles.faqItem}>
        <h2>What makes each nft unique?</h2>
        <p>Each nft is unique because it is hand-painted by one human.</p>
      </div>

      <div className={styles.faqItem}>
        <h2>How much does each nft cost?</h2>
        <p>
          The value of each nft depends on the market. But it starts at 0.05
          ethereum.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2>How do I buy an nft?</h2>
        <p>
          Click on the mint button on the home page, and follow the
          instructions.
        </p>
      </div>
      
      <div className={styles.faqItem}>
        <h2>Will the collection be available for a limited time?</h2>
        <p> Yes, the collection will be available for a limited time.</p>
      </div>

    </section>
  );
};

export default Faqs;
