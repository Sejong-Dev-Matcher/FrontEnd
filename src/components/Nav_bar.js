import React from 'react';
import styles from "../css/Nav_bar.module.css"
const Nav_bar = () => {
    return (
        <div className={styles.container}>
           <img src={process.env.PUBLIC_URL + 'images/SDM_logo.png'} alt='sdm_logo'></img>
           <div className={styles.pages_link}>
                <text className={styles.texts}>홈</text>
                <text className={styles.texts}>마이페이지</text>
                <text className={styles.texts}>프로젝트 검색</text>
                <text className={styles.texts}>동료 찾기</text>
           </div>
           <div className={styles.alarm_box}>
                <img src={process.env.PUBLIC_URL + 'images/icon_bell_.png'} alt='bell'></img>
                <div className={styles.number_box}>
                   0 
                </div>  {/* 실제론 0대신 알람개수*/}
           </div>
           <div className={styles.info_box}>
                <div className={styles.student_info}>   {/* 실제론 stdent ID + name*/}
                   student ID Name
                </div>
                <div className={styles.logout_btn}>     
                    Logout
                </div>
           </div>
        </div>
    );
};

export default Nav_bar;