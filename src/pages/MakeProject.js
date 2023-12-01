import React, { useState } from "react";
import styles from "../css/MakeProject.module.css";
import Navbar from "../components/Navbar";
import axios from "axios";

const stack_list = [
  { value: process.env.PUBLIC_URL + "/images/React.png", name: "React" },
  { value: process.env.PUBLIC_URL + "/images/Vue.png", name: "Vue" },
  { value: process.env.PUBLIC_URL + "/images/Swift.png", name: "Swift" },
  { value: process.env.PUBLIC_URL + "/images/Java.png", name: "Java" },
  { value: process.env.PUBLIC_URL + "/images/Mysql.png", name: "MySQL" },
  { value: process.env.PUBLIC_URL + "/images/Spring.png", name: "Spring" },
  { value: process.env.PUBLIC_URL + "/images/Python.png", name: "Python" },
  { value: process.env.PUBLIC_URL + "/images/Kotlin.png", name: "Kotlin" },
];
const MakeProject = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedMem, setSelectedMem] = useState(0);
  const [intro, setIntro] = useState("");

  const handleSelect = (e) => {
    const selectedValue = e.target.value;

    if (!selectedStack.includes(selectedValue)) {
      setSelectedStack((prevSelectedStack) => [
        ...prevSelectedStack,
        selectedValue,
      ]);
    }
  };

  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const handleMem = (e) => {
    setSelectedMem(e.target.value);
  };

  const handleIntro = (e) => {
    setIntro(e.target.value);
  };

  const handleInit = () => {
    setSelectedStack([]);
  };

  const handleProjectRegister = () => {
    // 실제 서버의 API 엔드포인트와 요청 형식에 맞게 수정해야 합니다.
    const apiUrl = "http://3.39.21.137:8080/projectboard/post";
    const projectData = {
      title: projectName,
      content: intro,
      maxpeople: selectedMem,
      stackInfoList: selectedStack.map((stack) => {
        return {
          stackId: stack_list.findIndex((item) => item.value === stack) + 1,
          name: stack_list.find((item) => item.value === stack).name,
          img: stack,
        };
      }),
    };

    axios
      .post(apiUrl, projectData)
      .then((response) => {
        console.log("프로젝트 등록 성공:", response.data);
        console.log(projectData, response.data);
        // 프로젝트 등록 성공 후 필요한 작업 수행
      })
      .catch((error) => {
        console.error("프로젝트 등록 오류:", error);
        // 오류 발생 시 처리
      });
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main_div}>
        <div className={styles.making_project}>프로젝트 생성하기</div>
        <div className={styles.project_name}>
          <text className={styles.proj_texts}>프로젝트 이름</text>
          <input
            type="text"
            placeholder="프로젝트명을 입력해주세요."
            className={styles.project_name_input}
            onInput={handleProjectName}
          />
        </div>
        <div className={styles.project_people_num}>
          <text className={styles.proj_texts}>인원 수</text>
          <select className={styles.stack_select_bar} onChange={handleMem}>
            <option value="" defaultValue="인원 선택">
              인원 선택
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className={styles.project_stacklist}>
          <div className={styles.project_stacklist_main}>
            <text className={styles.proj_texts}>필요 기술 스택</text>
            <select
              className={styles.stack_select_bar}
              value={"select"}
              onChange={handleSelect}
            >
              <option defaultValue="">Pick up Stacks!</option>
              {stack_list.map((stack) => {
                return (
                  <option value={stack.value} key={stack.value}>
                    {stack.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles.project_stacklist_seletecd}>
          <div className={styles.selected_bar}>
            {selectedStack.map((s_stack) => {
              return (
                <div className={styles.stacks}>
                  <img src={s_stack} alt="stacks" />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button className={styles.init_btn} onClick={handleInit}>
            스택 초기화
          </button>
        </div>
        <div className={styles.project_intro}>
          <text className={styles.proj_texts}>프로젝트 소개글</text>
          <textarea
            className={styles.proj_intro_texts}
            placeholder="500자 이내로 내용을 입력해주세요."
            onChange={handleIntro}
          ></textarea>
        </div>
        <button
          className={styles.project_register_btn}
          onClick={handleProjectRegister}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default MakeProject;
