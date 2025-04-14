'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Header.css';

const basePath = process.env.NODE_ENV === 'production' ? '/yully' : '';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 체크
    checkScreenSize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', checkScreenSize);

    // 클린업 함수
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: '회사 소개', path: '/' },
    { name: '상품', path: '/' },
    { name: '장례 후기', path: '/' },
    { name: '장례 정보', path: '/' },
    { name: '문의 게시판', path: '/' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image
            src={`${basePath}/images/logo.png`}
            alt="올리사랑 로고"
            width={60}
            height={60}
          />
        </Link>
      </div>

      {!isMobile && (
        <nav className="desktop-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {isMobile && (
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      {/* 사이드바 메뉴 */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>
        </div>
        <nav className="sidebar-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path} onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}
