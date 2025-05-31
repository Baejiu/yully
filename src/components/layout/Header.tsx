'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
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
    { name: '장례상품', path: '/product' },
    {
      name: '장례 후기',
      path: 'https://blog.naver.com/PostList.naver?blogId=sincuva&from=postList&categoryNo=3',
      target: '_blank',
    },
    {
      name: '장례 정보',
      path: 'https://blog.naver.com/PostList.naver?blogId=sincuva&from=postList&categoryNo=4',
      target: '_blank',
    },
    { name: '장례문의', path: '/contact' },
  ];

  return (
    <header className="header">
      {!isMobile ? (
        <nav className="desktop-menu">
          <div className="left-menu">
            {menuItems.slice(0, 2).map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="menu-item"
                target={item.target || '_self'}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="logo">
            <Link href="/">
              <Image
                src={`/images/header_logo.png`}
                alt="올리사랑 로고"
                width={154}
                height={50}
              />
            </Link>
          </div>

          <div className="right-menu">
            {menuItems.slice(2, 4).map((item, index) => (
              <Link key={index} href={item.path} className="menu-item">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      ) : (
        <>
          <div className="mobile-header">
            <div className="logo">
              <Link href="/">
                <Image
                  src={`/images/header_logo.png`}
                  alt="올리사랑 로고"
                  width={154}
                  height={50}
                />
              </Link>
            </div>
            <div className="menu-button" onClick={toggleMenu}>
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

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
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      target={item.target || '_self'}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </>
      )}
    </header>
  );
}
