import React, { useState } from "react";
import styles from "../css/SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // 검색 로직을 이곳에 추가
    console.log("Search term:", searchTerm);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="프로젝트 이름으로 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
