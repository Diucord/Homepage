// src/components/Intro/Intro.tsx
import "./Intro.css";
import CanvasRain from "../CanvasRain/CanvasRain"; // 배경 효과 넣을 경우 (옵션)

export default function Intro() {
  return (
    <section className="intro-section">
      {/* 배경 음악 */}
      <audio src="/images/backgroundmusic.mp3" autoPlay loop />

      {/* 상단 데코 요소 */}
      <div className="logoimg" />
      <div className="logobox" />
      <div className="category" />
      <div className="vl" />

      <div className="intro-content">
        {/* 왼쪽 제목 영역 */}
        <div className="intro-left">
          <div className="semi-title">
            <p>/01</p>
            <p>AI Championship 2020</p>

            <div className="vlvl" />
            <div className="vl2" />
          </div>

          <div className="main-title">
            <h1 className="wow fadeInRight" data-wow-delay="0.4s">
              Experience tells
            </h1>
            <h1 className="wow fadeInRight" data-wow-delay="1s">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We know through
            </h1>
            <h1 className="wow fadeInRight" data-wow-delay="0.7s">
              &nbsp;&nbsp;Experience.
            </h1>

            <p className="wow fadeInUp" data-wow-delay="0.8s">
              It is generally consoling to say that ‘unusual human
              characteristics can never be imitated by machines.’
            </p>
            <p className="wow fadeInUp" data-wow-delay="1s">
              I can’t give such comfort.
            </p>
            <p className="wow fadeInUp" data-wow-delay="1.2s">
              It is because I believe that such a limit cannot be set.
            </p>
          </div>
        </div>

        {/* 오른쪽 캔버스 또는 이미지 */}
        <div className="intro-right">
          {/*
            옵션 1) React CanvasRain 효과
            <CanvasRain />

            옵션 2) GIF or PNG로 대체
            <img src="/images/servevideo2_2.gif" alt="intro-gif" />
          */}
          <CanvasRain />
        </div>
      </div>
    </section>
  );
}
