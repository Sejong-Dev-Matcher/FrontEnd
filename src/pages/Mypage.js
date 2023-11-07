import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../css/Mypage.module.css";
const Mypage = () => {
  return (
    <div className={styles.Mypage}>
      <Navbar />
      <div className={styles.my_infos}>
        <div className={styles.my_resume}>내 이력서</div>
        <div className={styles.resume_box}>
          <div className={styles.stacks}>기술 스택</div>
          <div className={styles.my_stacks}>내 스택</div>
          <div className={styles.self_intro}>
            자신을 소개하는 글을 500자 이내로 써주세요.
            <textarea
              className={styles.intro_texts}
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
        <button className={styles.btn_save}>저장</button>
      </div>
    </div>
  );
};

export default Mypage;
