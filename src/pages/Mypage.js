import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../css/Mypage.module.css";
const Mypage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Mypage}>
        <div className={styles.my_infos}>
          <div className={styles.my_resume}>내 이력서</div>
          <div className={styles.resume_box}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
