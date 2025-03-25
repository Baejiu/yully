import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title hidden">
        <span className="small-text">부모님을 향한 사랑의 마음</span>
        <span className="main-text">올리 사랑</span>
      </h1>
      <div className="hero-content">
        {/* <Image
          src="/images/main.jpeg"
          alt="하얀 국화"
          width={600}
          height={600}
          className="hero-image"
        /> */}
        <Image
          src="/images/main_impact.png"
          alt="logo"
          width={380}
          height={240}
        />
      </div>
      <div className="hero-contact">
        <p>24시간 장례상담 010-9925-4519</p>
      </div>
    </div>
  );
}
