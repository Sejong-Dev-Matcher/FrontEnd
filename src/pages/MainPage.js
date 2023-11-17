import React from "react";
import styles from "../css/Mainpage.module.css";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "../components/ProjectCard";
import DevCard from "../components/Dev_Card";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.banner}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/project_img.png"}
              alt="project_img"
              className={styles.proj_image}
            />
          </div>
          <div className={styles.proj_text}>
            <p>당신의 프로젝트를 찾고 만들어보세요!</p>
          </div>
          <div className={styles.proj_find}>
            <p><Link to="/projects" className={styles.proj_link}>프로젝트 찾으러가기</Link></p>
          </div>
        </div>
        <div className={styles.show_cards}>
          <div className={styles.more_proj}>
            <p>More Project</p>
            {/* 프로젝트 카드 컴포넌트 list 생성 */}
            <Swiper
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 400,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 350,
                },
                1300: {
                  slidesPerView: 5,
                  spaceBetween: 300,
                },
              }}
              slidesPerView={4}
              slidesOffsetAfter={100}
              slidesOffsetBefore={100}
              spaceBetween={320}
              grabCursor={true}
              navigation
              modules={[Pagination, Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 2300 }}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                {/*데이터가  아직  없어서 임의로 UI만 구성하게 해놓음 나중에 map함수를 통해 데이터 시각화 필요 */}
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.more_dev}>
            <p>More Fellows</p>
            {/* 개발자 카드 컴포넌트 list 생성 */}
            <Swiper
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 400,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 350,
                },
                1300: {
                  slidesPerView: 5,
                  spaceBetween: 300,
                },
              }}
              slidesPerView={4}
              slidesOffsetAfter={100}
              slidesOffsetBefore={100}
              spaceBetween={320}
              grabCursor={true}
              navigation
              modules={[Pagination, Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 2900 }}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                {/*데이터가  아직  없어서 임의로 UI만 구성하게 해놓음 나중에 map함수를 통해 데이터 시각화 필요 */}
                <DevCard />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
