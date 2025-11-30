// src/components/Next/Next.tsx
import "./Next.css";

export default function Next() {
  return (
    <section className="next">
      <ul className="next-logos">
        <li>
          <img src="/images/sung.png" alt="sung" />
          <img src="/images/sangsang.png" alt="sangsang" />
          <img src="/images/seoulUniversity.png" alt="seoulU" />
          <img src="/images/hodooLabs.png" alt="hodooLabs" />
          <img src="/images/nipa.png" alt="nipa" />
          <img src="/images/bigstar.png" alt="bigstar" />
        </li>
      </ul>

      <div className="next-footer">
        <img
          className="footer-logo"
          src="/images/predictionlogonew@4x.png"
          alt="prediction"
        />
        <p className="footer-info">
          (주)프리딕션 | 대표이사 이인섭 | 사업자 등록번호 529.88.01546
          <br />
          서울특별시 중구 을지로50 을지한국빌딩 17층 1722호 | 전화
          010.5643.3601
          <br />
          사업 제휴 및 투자 제안 support@bansonglee.com
        </p>

        <p className="footer-copy">ⓒ 2020 Prediction Inc. All rights reserved.</p>
      </div>
    </section>
  );
}
