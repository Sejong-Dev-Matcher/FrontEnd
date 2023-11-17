import React, { useState } from "react";
import styles from "../css/MakeProject.module.css";
import Navbar from "../components/Navbar";
const stack_list = [
  { value: process.env.PUBLIC_URL+"/images/React.png", name: "React" },
  { value:process.env.PUBLIC_URL+"/images/Vue.png", name: "Vue" },
  { value: process.env.PUBLIC_URL+"/images/Swift.png", name: "Swift" },
  { value: process.env.PUBLIC_URL+"/images/Java.png", name: "Java" },
  { value: process.env.PUBLIC_URL+"/images/Mysql.png", name: "MySQL" },
  { value: process.env.PUBLIC_URL+"/images/Spring.png", name: "Spring" },
  { value: process.env.PUBLIC_URL+"/images/Python.png", name: "Python" },
  { value: process.env.PUBLIC_URL+"/images/Kotlin.png", name: "Kotlin" },
];
const MakeProject = () => {
  const [projectName, setProjectName] = useState(""); //프로젝트이름
  const [selectedStack, setSelectedStack] = useState([]); //선택된 스택
  const [selectedMem, setSelectedMem] = useState(0); //선택된  멤버수
  const [intro, setIntro] = useState(""); //프로젝트 소개글
  const handleSelect = (e) => {
    const selectedValue = e.target.value;

    if (!selectedStack.includes(selectedValue)) {
      setSelectedStack((prevSelectedStack) => [
        ...prevSelectedStack,
        selectedValue,
      ]);
    }

    console.log(selectedStack);
  };
  const handleProjectName = (e) => {
    setProjectName(e.target.value);
    // console.log(projectName);
  };
  const handleMem = (e) => {
    setSelectedMem(e.target.value);
    // console.log("Selected Member: ",selectedMem);
  };
  const handleIntro = (e) => {
    setIntro(e.target.value);
    // console.log("Intro...: ",intro);
  };
  const handleInit = () => {
    setSelectedStack([]);
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
              return <div className={styles.stacks}>
                <img src={s_stack} alt="stacks"/>
              </div>;
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
        <button className={styles.project_register_btn}>등록</button>
      </div>
    </div>
  );
};

export default MakeProject;
