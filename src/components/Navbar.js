import React from 'react';
import styles from "../css/Nav_bar.module.css"
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={styles.container}>
           <img src={process.env.PUBLIC_URL + 'images/SDM_logo.png'} alt='sdm_logo'></img>
           <div className={styles.pages_link}>
                <text><Link to="/mainpage" className={styles.links}>홈</Link></text> 
                <text><Link to="/" className={styles.links}>프로젝트 검색</Link></text>
                <text><Link to="/" className={styles.links}>동료 찾기</Link></text>
                <text><Link to="/mypage" className={styles.links}>마이페이지</Link></text>
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

export default Navbar;