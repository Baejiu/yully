'use client';
import Image from 'next/image';
import styled from 'styled-components';
import './Hero.css';
const basePath = process.env.NODE_ENV === 'production' ? '/yully' : '';

const HeroContainer = styled.div`
  background-color: #000;
  height: calc(100vh - 120px);
  color: white;
  padding: 40px 20px;
  text-align: center;
  background-image: url('${basePath}/images/main.jpeg');
  background-size: contain;
  width: 100%;
  background-position: left center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-size: 40vh;
    background-position: center 0px;
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
        {/* <Image
          src={`${basePath}/images/main.jpeg`}
          alt="하얀 국화"
          width={600}
          height={600}
          className="hero-image"
        /> */}
        <Image
          src={`${basePath}/images/main_impact.png`}
          alt="logo"
          width={380}
          height={240}
        />
      </div>
      <div className="hero-contact">
        <p>24시간 장례상담 010-9925-4519</p>
      </div>
    </HeroContainer>
  );
}
