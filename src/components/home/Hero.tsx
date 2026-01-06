'use client';
import Image from 'next/image';
import styled from 'styled-components';
import './Hero.css';

const HeroContainer = styled.div`
  background-color: #000;
  height: calc(100vh - 120px);

  color: white;
  padding: 20px 80px;
  text-align: center;
  background-image: url('/images/main.jpeg');

  width: 100%;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 80vh;

  @media (max-width: 768px) {
    height: calc(100vh - 100px);
    background-size: 70vh;
    padding: 20px 20px 10px;
    background-position: left bottom;
  }

  @media (max-width: 600px) {
    background-size: 90vw;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h1 className="hero-title hidden">
        <span className="small-text">부모님을 향한 사랑의 마음</span>
        <span className="main-text">올리 사랑</span>
      </h1>
      <div className="hero-content">
        <Image
          className="hero-image"
          src={`/images/main_impact.png`}
          alt="logo"
          width={480}
          height={280}
        />

        <div className="hero-contact">
          <p>24시간 장례상담 1555-3755</p>
        </div>
      </div>
    </HeroContainer>
  );
}
