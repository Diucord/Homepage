// src/components/Term/Term.tsx
import "./Term.css";

export default function Term() {
  return (
    <section className="term-section">
      {/* Header /03 */}
      <div className="term-header">
        <p>/03</p>
        <p>Terminology</p>
      </div>

      <div className="term-body">
        {/* 왼쪽 텍스트 */}
        <div className="term-left">
          <h1 className="term-title wow fadeInUp" data-wow-delay="0.2s">
            Matrix &amp; AI
          </h1>

          <p className="term-desc wow fadeInUp" data-wow-delay="0.35s">
            머신러닝과 딥러닝의 근본은 <br />
            결국 수학적 모델에 의해 성능이 결정됩니다.
          </p>

          <p className="term-desc wow fadeInUp" data-wow-delay="0.55s">
            복잡한 데이터 속 패턴을 찾아내고,<br />
            그 기반 위에서 의미를 해석하는 과정이<br />
            인공지능 시스템의 핵심입니다.
          </p>

          <p className="term-desc wow fadeInUp" data-wow-delay="0.75s">
            우리는 이를 기반으로,<br />
            더 스마트한 의사결정을 가능하게 합니다.
          </p>
        </div>

        {/* 오른쪽 3D / 그래프 이미지 */}
        <div className="term-right wow fadeIn" data-wow-delay="0.3s">
          <div className="term-graph-box">
            <img
              src="/images/graph3d.png"
              alt="graph"
              className="term-graph-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
