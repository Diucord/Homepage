// src/components/Serve/Serve.tsx
import "./Serve.css";

export default function Serve() {
  return (
    <section className="serve-section">
      {/* --- 배경 이미지 + 영상/움짤 박스 --- */}
      <div className="serve-background">
        <div className="gladbox1-1"></div>
        <div className="gladbox1-2"></div>

        <div className="serve-video">
          {/* 원본 servevideo2_2.gif */}
          <img src="/images/servevideo2_2.gif" alt="serve-video" />
        </div>
      </div>

      {/* --- Math & AI 설명 --- */}
      <div className="math-box">
        <div className="math-header">
          <p>/02</p>
          <p>Math &amp; AI</p>
        </div>

        <div className="math-contents">
          <div
            className="math-text wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <p>
              인공지능(AI)이란,<br />
              인간의 사고, 학습능력 등을 컴퓨터가<br />
              학습하여 다양한 문제를 해결하는 기술입니다.
            </p>
            <br />
            <p>
              특정 분야에서의 성능을<br />
              기존 시스템과 비교하여 평가하고,<br />
              더 좋은 방식을 찾아 나가는 과정이 중요합니다.
            </p>
          </div>

          <div
            className="math-images wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <img src="/images/math2.jpg" className="math-img" />
            <img src="/images/math1.jpg" className="math-img delay" />
          </div>
        </div>
      </div>

      {/* --- 세 가지 서비스 개념 (Patterns / Context / Personalization) --- */}
      <div className="serve-items">
        <div className="serve-item wow fadeIn">
          <div className="serve-item-header wow fadeInUp" data-wow-delay="0.2s">
            Patterns
          </div>
          <div className="serve-item-body wow fadeInUp" data-wow-delay="0.3s">
            기존 시스템의 한계를 넘어서는<br />
            새로운 패턴을 발견하고 분석합니다.
          </div>
          <div className="serve-vline" />
        </div>

        <div className="serve-item wow fadeIn">
          <div className="serve-item-header wow fadeInUp" data-wow-delay="0.2s">
            Context
          </div>
          <div className="serve-item-body wow fadeInUp" data-wow-delay="0.3s">
            실제 환경 속에서 데이터를<br />
            맥락적으로 이해하고 해석합니다.
          </div>
          <div className="serve-vline" />
        </div>

        <div className="serve-item wow fadeIn">
          <div className="serve-item-header wow fadeInUp" data-wow-delay="0.2s">
            Personalization
          </div>
          <div className="serve-item-body wow fadeInUp" data-wow-delay="0.3s">
            사용자의 취향과 행동을 반영한<br />
            맞춤형 서비스를 제공합니다.
          </div>
          <div className="serve-vline last" />
        </div>
      </div>
    </section>
  );
}
