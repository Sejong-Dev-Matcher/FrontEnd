import React, { useState } from "react";
import styles from "../css/Nav_bar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
const links = [
  { to: "/home", text: "홈" },
  { to: "/projects", text: "프로젝트 검색" },
  { to: "/fellows", text: "동료 찾기" },
  { to: "/mypage", text: "마이페이지" },
];
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const isActiveLink = (index) => index === activeLink || location.pathname === links[index].to;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Link to="/home">
        <img
          src={process.env.PUBLIC_URL + "/images/SDM_logo.png"}
          alt="sdm_logo"
        ></img>
      </Link>
      <div className={styles.pages_link}>
        {links.map((link, index) => (
          <text key={index}>
            <Link
              to={link.to}
              className={`${styles.links} ${isActiveLink(index) ? styles.active : ""}`}
              onClick={() => handleLinkClick(index)}
            >
              {link.text}
            </Link>
          </text>
        ))}
      </div>
      <div className={styles.alarm_box}>
        <img
          src={process.env.PUBLIC_URL + "/images/icon_bell_.png"}
          alt="bell"
        ></img>
        <div className={styles.number_box}>0</div> {/* 실제론 0대신 알람개수*/}
      </div>
      <div className={styles.info_box}>
        <div className={styles.student_info}>
          {" "}
          {/* 실제론 stdent ID + name*/}
          student ID Name
        </div>
        <div className={styles.logout_btn} onClick={()=>navigate("/")}>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
