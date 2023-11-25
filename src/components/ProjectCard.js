import React, { useState } from "react";
import styles from "../css/Projectcard.module.css";
import ProjectModal from "./ProjectModal";
import { Box, Button, Paper, Typography } from "@mui/material";
import stacks from "../components/Stacks_img";

const ProjectCard = () => {
  const [neededStacks, setNeededStacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className={styles.container} onClick={() => openModal()}>
        <div className={styles.backboard}></div>
        <div className={styles.info_field}>
          <div>프로젝트 명</div>
          {/*실제 프로젝트명 받기 */}
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
          <div>필요 스택</div>
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
      <ProjectModal
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
            <div className={styles.m_name}>
              <h1>000프로젝트</h1>
            </div>
            <div className={styles.m_stacks}>
              <div className={styles.m_stacks_mystacks}>
                000에서 필요한 기술스택 {/*데이터 파싱 */}
              </div>
              <div className={styles.m_stacks_stackimg}>
                {stacks.map((stack) => (
                  <img src={stack.img} alt={stack.name} />
                ))}
              </div>
            </div>
            <div className={styles.m_intro}>
              <div className={styles.m_intro_1}>프로젝트 소개</div>
              <div className={styles.m_intro_2}>
                {/*프로젝트별 소개 데이터 파싱 */}
                <textarea className={styles.m_intro_textarea} readOnly>
                  {/* 소개글 파싱 */}
                  project introduce project introduce project introduce project
                </textarea>
              </div>
            </div>
          </Box>
          <button className={styles.invite_btn}>신청하기</button>
        </Paper>
      </ProjectModal>
    </div>
  );
};

export default ProjectCard;
