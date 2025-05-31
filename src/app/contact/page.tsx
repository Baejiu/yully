'use client';
import Image from 'next/image';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-title">무료상담 및 접수</div>
        <div className="contact-phone">010-2141-4519</div>
        <p className="mobile-contents">
          슬픔과 어려움 속. 저희 올리사랑상조가 곁이 되어드리겠습니다.
          <br />
          장례에 대한 모든 궁금중, 언제든 편하게 문의하세요.
          <br />
          <span className="highlight">24시간</span> 언제나 따뜻한 마음으로
          정성을 다해 <span className="highlight">상담</span>해 드립니다.
          <br />
          소중한 이별을 위한 모든 과정을 함께 준비하겠습니다.
        </p>
        <form className="contact-form">
          <label htmlFor="name">성함</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="phone">연락처</label>
          <input id="phone" name="phone" type="text" required />
          <label htmlFor="message">문의내용</label>
          <textarea id="message" name="message" rows={6} required />
          <button type="submit" className="contact-submit">
            문의하기
          </button>
        </form>
      </div>
      <div className="contact-right">
        <Image
          className="hero-image"
          src={`/images/main_impact.png`}
          alt="logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
        />
      </div>
    </div>
  );
}
