import React from "react";
import "../../index.css";

export const About: React.FC = props => {
  return (
    <div id="about" className="about-me-container p-5 text-light">
      <h1 className="text-center">About Me</h1>
      <div className="d-flex mt-5 justify-content-md-around flex-column flex-md-row">
        <div className="profile-picture-container"></div>
        <div className="personal-info px-md-5 mx-md-5 px-2 mx-2 py-5 py-md-0">
          <h3>예비기자ㅣ허지혜</h3>
          <p>이름 ㅣ허지혜</p>
          <p>생년월일 ㅣ1997/05/12</p>
          <p>연락처ㅣ 010.2357.6205</p>
          <p>이메일 ㅣooiffyoff@gmail.com</p>
          <p>
            학력사항 ㅣ2022.02 건국대학교 현대미술학과 졸업 리빙디자인학과
            부전공
          </p>
          <p>활동사항 ㅣ2022.10 한국잡지협회 취재기자 양성과정 25기 수료</p>
        </div>
      </div>
    </div>
  );
};
