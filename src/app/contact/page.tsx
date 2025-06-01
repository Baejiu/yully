'use client';
import Image from 'next/image';
import './contact.css';
import { useState } from 'react';
import { sendContactEmail } from '@/service/sendmail';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name && !phone && !message) {
      alert('문의 내용을 입력해주세요.');
      setIsLoading(false);
      return;
    }

    try {
      await sendContactEmail({
        subject: `[${name}] ${phone}`,
        sender: name,
        text: message,
      });
      alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    } catch (error) {
      alert('문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">성함</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="phone">연락처</label>
          <input id="phone" name="phone" type="text" />
          <label htmlFor="message">문의내용</label>
          <textarea id="message" name="message" rows={6} />
          <button type="submit" className="contact-submit" disabled={isLoading}>
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
