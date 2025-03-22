"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./ClientCarousel.module.scss";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const clientLogos = [
  "/client-logos/caragua-shake.webp",
  "/client-logos/jesse-aluguel.webp",
  "/client-logos/jj-shoes.webp",
  "/client-logos/menconi.webp",
  "/client-logos/niloware.webp",
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  fade: false,
  centerMode: true,
  variableWidth: true,
};

const ClientCarousel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.gradientLeft}></span>
      <span className={styles.gradientRight}></span>
      <Slider {...settings} className={styles.carousel}>
        {clientLogos.map((src) => (
          <div key={src} className={styles.imageWrapper}>
            <Image
              src={src}
              alt="Client Logo"
              className={styles.image}
              width={0}
              height={24}
              sizes="auto"
              style={{ width: "auto", height: "24px" }}
              draggable="false"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
