"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

interface Testimonial {
  photo: string;
  name: string;
  title: string;
  rating: number;
  testimonial: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <div className="testimonialText">
            <p className="text">{testimonial.testimonial}</p>
          </div>
          <hr />
          <div className="user">
            <Image
              className="image"
              src={testimonial.photo}
              alt={testimonial.name}
              width={60}
              height={60}
            />
            <div className="userInfo">
              <h3 className="name">{testimonial.name}</h3>
              <p className="role">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsCarousel;
