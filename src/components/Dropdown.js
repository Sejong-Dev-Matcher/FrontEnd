import React, { useState } from "react";
import styles from "../css/MakeProject.module.css";
import Navbar from "../components/Navbar";

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
  const [selectedStack, setSelectedStack] = useState([]);

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

  const handleInit = () => {
    setSelectedStack([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main_div}>
        <div className={styles.project_stacklist}>
          <div className={styles.project_stacklist_main}>
            <text className={styles.proj_texts}>기술스택 필터</text>
            <select
              className={styles.stack_select_bar}
              value={"select"}
              onChange={handleSelect}
            >
              <option defaultValue="">원하는 스택만 고르세요!</option>
              {stack_list.map((stack) => (
                <option value={stack.value} key={stack.value}>
                  {stack.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedStack.length > 0 && (
          <div className={styles.project_stacklist_seletecd}>
            <div className={styles.selected_bar}>
              {selectedStack.map((s_stack) => (
                <div className={styles.stacks} key={s_stack}>
                  <img src={s_stack} alt="stacks" />
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedStack.length > 0 && (
          <div className={styles.init_btn_container}>
            <button className={styles.init_btn} onClick={handleInit}>
              스택 초기화
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeProject;
