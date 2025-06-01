'use client';
import { usePathname } from 'next/navigation';
import './Footer.css';
import { useEffect, useState } from 'react';

const DARK_COLOR = '#222220';
const LIGHT_COLOR = '#D1D1D1';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [footerBackgroundColor, setFooterBackgroundColor] = useState('#222220');
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const isContactPage = pathname.startsWith('/contact');
    const isMainPage = pathname.includes('/');
    if ((isContactPage && !isMobile) || isMainPage) {
      setFooterBackgroundColor(DARK_COLOR);
    } else {
      setFooterBackgroundColor(LIGHT_COLOR);
    }
  }, [pathname, isMobile]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 900);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <footer
      className={
        footerBackgroundColor === LIGHT_COLOR ? 'light-footer' : 'dark-footer'
      }
    >
      <div className="footer-contents">
        <ul className="footer-content">
          <li>올리사랑 상조</li>
          <li>대표 번호 : 010-2141-4519</li>
          <li>사업자등국번호 : 514-94-18274</li>
          <li>개임정보책임자성명 : 임은혁</li>
          <li>이메일 : sincuva@naver.com</li>
        </ul>
        <p className="footer-copyright">
          @CCPYRIGHT 2025 올리사랑. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
