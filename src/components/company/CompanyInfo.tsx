import Link from 'next/link';
import './CompanyInfo.css';

export default function CompanyInfo() {
  return (
    <div className="company-info">
      <div className="info-section">
        <h3 className="info-title">정책 정보</h3>
        <Link href="/" className="info-link">
          <span>정책 정보</span>
          <span className="view-more">view more</span>
        </Link>
      </div>

      <div className="info-section">
        <h3 className="info-title">상품 정보</h3>
        <Link href="/" className="info-link">
          <span>상품 정보</span>
          <span className="view-more">view more</span>
        </Link>
      </div>

      <div className="info-section">
        <h3 className="info-title">제품을 찾아보세요</h3>
        <Link href="/" className="info-link">
          <span>제품을 찾아보세요</span>
          <span className="view-more">view more</span>
        </Link>
      </div>
    </div>
  );
}
