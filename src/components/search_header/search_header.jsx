import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img className={styles.img} src="/images/loona-icon.ico" alt="logo" />
      <h1 className={styles.title}>Loona</h1>
    </div>
    <input
      className={styles.input}
      type="search"
      placeholder="Search for video"
    />
    <button className={styles.button} type="submit">
      <img
        className={styles.buttonimg}
        src="/images/research1.png"
        alt="search"
      />
    </button>
  </header>
);
export default SearchHeader;
