import React from "react";
import styles from "../css/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Banner;
