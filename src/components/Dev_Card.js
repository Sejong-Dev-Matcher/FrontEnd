import React, { useState } from "react";
import styles from "../css/Devcard.module.css";
import DevModal from "./DevModal";
import { Box, Button, Paper, Typography } from "@mui/material";
import stacks from "../components/Stacks_img";
const DevCard = () => {
  const [usingStacks, setUsingStacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className={styles.container} onClick={() => openModal()}>
        <div className={styles.backboard_dev}>
          <div>개발자 장*문</div> {/*실제 이름 데이터 받기 */}
        </div>
        <div className={styles.info_field}>
          <div>이름</div>
          <div className={styles.info_field_partificiant}>
            <div className={styles.iconWrapper}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_person_.png"}
                alt="icon"
              />
              <span>1/5</span>
              {/*나중에 실제 팀원 데이터값을 받아야함 */}
            </div>
          </div>
        </div>
        <div className={styles.stacks_icon}>
          <div>가능 스택</div>
          <div className={styles.stack_box}>
            {" "}
            {/*나중에 map으로 실제 데이터 비교후 상태에서 꺼내 아이콘 img  출력*/}
            <img
              src={process.env.PUBLIC_URL + "/images/Java_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Kotlin_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/MySQL_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Python_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Spring_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Swift_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Vue_icon.png"}
              alt="icons"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/React_icon.png"}
              alt="icons"
            />
          </div>
        </div>
      </div>
      <DevModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        style={{ display: "block" }}
      >
        <Paper>
          <Button
            onClick={() => {
              setIsModalOpen(false);
            }}
            style={{
              border: "none",
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#B93234",
              fontWeight: "bold",
            }}
          >
            X
          </Button>
          <Box className={styles.m_box}>
            <div className={styles.m_stacks}>
              <div className={styles.m_stacks_mystacks}>
                000님이 사용하는 기술스택 {/*데이터 파싱 */}
              </div>
              <div className={styles.m_stacks_stackimg}>
                {stacks.map((stack) => (
                  <img src={stack.img} alt={stack.name} />
                ))}
              </div>
            </div>
            <div className={styles.m_intro}>
              <div className={styles.m_intro_1}>자기소개서</div>
              <div className={styles.m_intro_2}>
                {/*회원별 자기소개 데이터 파싱 */}
                <textarea className={styles.m_intro_textarea} readOnly>
                  {/* 소개글 파싱 */}
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                  sample intro sample intro sample intro sample intro sample
                  intro sample intro sample intro sample intro sample intro
                </textarea>
              </div>
            </div>
          </Box>
          <button className={styles.invite_btn}>초대하기</button>
        </Paper>
      </DevModal>
    </div>
  );
};

export default DevCard;
