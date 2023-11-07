import React from "react";
import styles from "../css/StackList.module.css";
const stacks = [
  {
    name: "React",
    img: process.env.PUBLIC_URL + "/images/React.png",
  },
  {
    name: "Java",
    img: process.env.PUBLIC_URL + "/images/Java.png",
  },
  {
    name: "Kotlin",
    img: process.env.PUBLIC_URL + "/images/Kotlin.png",
  },
  {
    name: "Mysql",
    img: process.env.PUBLIC_URL + "/images/Mysql.png",
  },
  {
    name: "Python",
    img: process.env.PUBLIC_URL + "/images/Python.png",
  },
  {
    name: "Spring",
    img: process.env.PUBLIC_URL + "/images/Spring.png",
  },
  {
    name: "Swift",
    img: process.env.PUBLIC_URL + "/images/Swift.png",
  },
  {
    name: "Vue",
    img: process.env.PUBLIC_URL + "/images/Vue.png",
  },
];

const StackList = (props) => {
  const handleStackAdd = (stack) => {
    if (!props.selectedImg.includes(stack)) {
      props.setSelectedImg(props.selectedImg.concat(stack));
    }
  };
  return (
    <div className={styles.grid}>
      {stacks.map((stack, index) => (
        <button
          key={index}
          className={styles.gridItem}
          onClick={() => {handleStackAdd(stack)}}
        >
          <img src={stack.img} alt={stack.name} />
        </button>
      ))}
    </div>
  );
};

export default StackList;
