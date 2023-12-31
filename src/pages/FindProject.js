import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../css/Findproject.module.css";
import ProjectCard from "../components/ProjectCard";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const FindProject = () => {
  const itemsPerPage = 10; // 페이지 당 보여줄 프로젝트 수
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  // 가상의 프로젝트 데이터
  const allProjects = Array.from({ length: 52 }, (_, index) => ({
    id: index + 1,
    name: `프로젝트 ${index + 1}`,
  }));

  // 현재 페이지에 따른 프로젝트 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToShow = allProjects.slice(startIndex, endIndex);

  // 전체 페이지 수 계산
  useEffect(() => {
    setTotalPages(Math.ceil(allProjects.length / itemsPerPage));
  }, [allProjects.length, itemsPerPage]);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <div className={styles.space}></div>

      <SearchBar
        searchbar="프로젝트 이름으로 검색"
        className={styles.searchbar}
      />
      <Dropdown className={styles.dropdown} />

      <div className={styles.space}></div>

      <div className={styles.projectGrid}>
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.space}></div>
      <div className={styles.space}></div>
      <div className={styles.space}></div>
      <Footer></Footer>
    </div>
  );
};

export default FindProject;
