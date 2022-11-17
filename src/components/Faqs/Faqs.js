import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <h1 className={styles.title}>FAQs</h1>

      <details className={styles.faqItem}>
      <summary> What is the collection about?</summary>
        <p>
          The collection is about the beauty of the ocean and the creatures that
          live in it. Jellyfish are one of the most beautiful creatures in the
          ocean and they are also one of the most mysterious. They are 95% water
          and 5% jelly. They are also the only animal that has no brain. So with this
          in mind we decided to create a collection of jellyfish that are related with
          humans and their dreams.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary> What is the collection called? </summary>
        <p>The collection is called Jellyfish Dreams. </p>
      </details>

      <details className={styles.faqItem}>
        <summary>What is the purpose of the collection?</summary>
        <p>
          The purpose of the collection is to celebrate deep down the sea,
          the combination of humans and AI through the beauty of jellyfish. 
          </p>
      </details>

      <details className={styles.faqItem}>
        <summary>Whats an nft? </summary>
        <p>
          An nft is a non-fungible token, which is a type of cryptocurrency.
          NFTs are unique and cannot be replicated, which makes them valuable.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>How many nfts are in the collection? </summary>
        <p>There are 50 nfts in the collection.</p>
      </details>

      <details className={styles.faqItem}>
        <summary>What makes each nft unique?</summary>
        <p>Each nft is unique because it is hand-painted by one human.</p>
      </details>

      <details className={styles.faqItem}>
        <summary>How much does each nft cost?</summary>
        <p>
          The value of each nft depends on the market. But it starts at 0.05
          ethereum.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary>How do I buy an nft?</summary>
        <p>
          Click on the mint button on the home page, and follow the
          instructions.
        </p>
      </details>
      
      <details className={styles.faqItem}>
        <summary>Will the collection be available for a limited time?</summary>
        <p> Yes, the collection will be available for a limited time.</p>
      </details>

    </section>
  );
};

export default Faqs;
