// Dropdown 컴포넌트
import React, { useState } from "react";
import styles from "../css/Dropdown.module.css";

const Dropdown = ({ onSelect }) => {
  const options = [
    "전체",
    "Java",
    "Kotlin",
    "JavaScript",
    "Python",
    "React",
    "Vue",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className={styles.dropdown}>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
