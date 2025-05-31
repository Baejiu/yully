'use client';
import React from 'react';
import './FloatingButtons.css';

function FloatingButtons() {
  const handleClick = (type: string) => {
    if (type === 'kakao') {
      window.open('https://open.kakao.com/me/ollylove', '_blank');
    } else if (type === 'phone') {
      window.open('tel:010-2141-4519', '_blank');
    }
  };

  return (
    <div className="floating-buttons">
      <button className="floating-button" onClick={() => handleClick('kakao')}>
        카톡
      </button>
      <button className="floating-button" onClick={() => handleClick('phone')}>
        전화
      </button>
    </div>
  );
}

export default FloatingButtons;
