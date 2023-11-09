import React, { useState } from 'react';
import styles from '../css/Projectcard.module.css';

const ProjectCard = () => {
    const [neededStacks,setNeededStacks] = useState([]); 
    return (
        <div className={styles.container}>
            <div className={styles.backboard}></div>
            <div className={styles.info_field}>
                <div>프로젝트 명</div>{/*실제 프로젝트명 받기 */}
                <div className={styles.info_field_partificiant}>
                    <div className={styles.iconWrapper}>
                        <img src={process.env.PUBLIC_URL + "/images/icon_person_.png"} alt='icon'/>
                        <span>1/5</span>{/*나중에 실제 팀원 데이터값을 받아야함 */}
                    </div>
                </div>
            </div>
            <div className={styles.stacks_icon}>
                <div>필요 스택</div>
                <div className={styles.stack_box}>  {/*나중에 map으로 실제 데이터 비교후 상태에서 꺼내 아이콘 img  출력*/}
                    <img src={process.env.PUBLIC_URL+"/images/Java_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/Kotlin_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/MySQL_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/Python_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/Spring_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/Swift_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/Vue_icon.png"} alt="icons"/>
                    <img src={process.env.PUBLIC_URL+"/images/React_icon.png"} alt="icons"/>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
