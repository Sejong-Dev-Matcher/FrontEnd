import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.js";
import styles from "../css/Mypage.module.css";
import Stacklist from "../components/Stack_list.js";

const Mypage = () => {
  const [selectedImg, setSelectedImg] = useState([]);
  const [introText, setIntroText] = useState("");

  const handleStackDelete = (stack) => {
    const nextStacks = selectedImg.filter(
      (selectedImg_each) => selectedImg_each !== stack
    );
    setSelectedImg(nextStacks);
  };

  const handleSave = async () => {
    try {
      // 서버에 전송할 데이터 형식에 맞게 구성
      const requestData = {
        title: "새로운 게시글",
        content: introText,
        memberBoardId: 1,
        stackInfoList: selectedImg.map((stack) => ({
          stackId: stack.stackId,
          isDeleted: false,
          isNew: true,
        })),
      };

      // Axios를 사용하여 PUT 요청 전송
      const response = await axios.put(
        "http://3.39.21.137:8080/memberboard/update/1",
        requestData
      );

      console.log("Data updated successfully:", response.data);
      alert("저장되었습니다!");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

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
              {selectedImg.map((stackimg, index) => (
                <img
                  key={index}
                  src={stackimg.img}
                  alt=""
                  className={styles.selected_img}
                  onClick={() => {
                    handleStackDelete(stackimg);
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.self_intro}>
            자신을 소개하는 글을 500자 이내로 써주세요.
            <textarea
              className={styles.intro_texts}
              placeholder="내용을 입력해주세요."
              value={introText}
              onChange={(e) => setIntroText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className={styles.btn_save} onClick={handleSave}>
          저장
        </button>
      </div>
    </div>
  );
};

export default Mypage;