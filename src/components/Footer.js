import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 SDM Website. All rights reserved.</p>
        <p>Designed by Jeremy & BeomSu </p>
        <p>BackEnd by 수민, 승억, 태헌 </p>
      </div>
    </footer>
  );
};

export default Footer;
