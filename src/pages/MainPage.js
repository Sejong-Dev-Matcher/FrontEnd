import React from "react";
import styles from "../css/Mainpage.module.css";
import Navbar from "../components/Navbar";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.banner}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/project_img.png"}
              alt="project_img"
              className={styles.proj_image}
            />
          </div>
          <div className={styles.proj_text}>
            <p>당신의 프로젝트를 찾고 만들어보세요!</p>
          </div>
          <div className={styles.proj_find}>
            <p>프로젝트 찾으러가기</p>
          </div>
        </div>
        <div className={styles.show_cards}>
          <div className={styles.more_proj}>
            <p>More Project</p>
            {/* 프로젝트 카드 컴포넌트 list 생성 */}
          </div>
          <div className={styles.more_dev}>
            <p>More Fellows</p>
            {/* 개발자 카드 컴포넌트 list 생성 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
