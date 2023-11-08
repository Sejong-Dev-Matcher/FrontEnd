import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import styles from "../css/Mypage.module.css";
import Stacklist from "../components/Stack_list.js";
const Mypage = () => {
  const [selectedImg, setSelectedImg] = useState([]);
  // console.log(selectedImg);
  const handleStackDelete = (stack) => {
    const nextStacks = selectedImg.filter(selectedImg_each => selectedImg_each !== stack)
    setSelectedImg(nextStacks);
  }
  return (
    <div className={styles.Mypage}>
      <Navbar />
      <div className={styles.my_infos}>
        <div className={styles.my_resume}>내 이력서</div>
        <div className={styles.resume_box}>
          <div className={styles.stacks}>
            기술 스택
            <Stacklist
              setSelectedImg={setSelectedImg}
              selectedImg={selectedImg}
              className={styles.stacklist}
            />
          </div>
          <div className={styles.my_stacks}>
            내 스택 ( 다시눌러 삭제할 수 있습니다. )
            <div className={styles.stack_grid}>
              {selectedImg.map((stackimg) => (
                <img src={stackimg.img} alt="" className={styles.selected_img} onClick={() => {handleStackDelete(stackimg)}}/>
              ))}
            </div>
          </div>
          <div className={styles.self_intro}>
            자신을 소개하는 글을 500자 이내로 써주세요.
            <textarea
              className={styles.intro_texts}
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
        <button className={styles.btn_save} onClick={()=>{
          alert("저장되었습니다!");
        }}>저장</button>
      </div>
    </div>
  );
};

export default Mypage;
