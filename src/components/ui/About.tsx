import React from "react";
import "../../index.css";

export const About: React.FC = props => {
  return (
    <div id="about" className="about-me-container p-5">
      <h1 className="text-center text-light">About Me</h1>
      <div className="d-flex mt-5 flex-column justify-content-center align-items-center">
        <div className="profile-picture-container"></div>
        <div className="personal-info px-md-5 mx-md-5 px-2 mx-2 py-5">
          <h3 className="text-center">예비기자ㅣ허지혜</h3>
          <div className="row mt-5">
            <div className="col-12 col-md-6 text-md-start text-center">
              이름
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">허지혜</label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-md-6 text-md-start text-center">
              생년월일
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">1997/05/12</label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-md-6 text-md-start text-center">
              연락처
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">010-2357-6205</label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-md-6 text-md-start text-center">
              이메일
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">ooiffyoff@gmail.com</label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-md-6 text-md-start text-center">
              학력사항
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">
                2022.02 건국대학교 현대미술학과 졸업｜리빙디자인학과 부전공
              </label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-md-6 text-md-start text-center">
              활동사항
            </div>
            <div className="col-12 col-md-6 text-md-start text-center">
              <label className="fw-bold">
                2023.10 한국잡지협회 취재기자 양성과정 25기 수료 예정
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
