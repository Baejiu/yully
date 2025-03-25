'use client';
import React from 'react';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import './Testimonial.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
function SampleNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div className={`testimonial-arrow-next`} onClick={onClick}>
      <FaArrowRight size={20} />
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div className={`testimonial-arrow-prev`} onClick={onClick}>
      <FaArrowLeft size={20} />
    </div>
  );
}

function Testimonial() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  };
  const reviews = [
    {
      id: 1,
      content:
        '정성스러운 후기를 간력하게 작성해 주세요.\n이 화면을 누르시면 블로그로 이동합니다.\n정성스러운 후기를 간력하게 작성해 주세요.\n이 회면을 누르시면 블로그로 이동합니다.\n정성스러운 후기를 간택하게 작성해 주세요.\n이 화면을 누드시면 북도로도 이것합니다\n점성스러운 후기를 간력하게 작심해 주세요.',
    },
    {
      id: 2,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 3,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 4,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 5,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 6,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 7,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
    {
      id: 8,
      content: '정성스러운 후기를 간력하게 작성해 주세요.',
    },
  ];
  return (
    <div className="testimonial-container">
      <div className="testimonial-banner">
        <Image
          src="/images/contact_icon.png"
          alt="상담"
          width={60}
          height={60}
        />
        <p>
          장애 접수 및 상담
          <br />
          010-9925-4519
        </p>
      </div>

      <div className="slider-container testimonial-content">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`testimonial-item slide_${review.id % 8}`}
            >
              <p className="testimonial-item-content">{review.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
