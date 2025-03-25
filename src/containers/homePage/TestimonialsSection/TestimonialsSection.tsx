"use client";

import { FC } from "react";
import Slider from "react-slick";
import Testimonial from "@/components/homePage/Testimonial/Testimonial";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import clsx from "clsx";
import styles from "./TestimonialsSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Tive o privilégio de acompanhar de perto o desenvolvimento da Logum, desde sua concepção inicial, passando pelos primeiros processos de recrutamento e seleção, até sua entrada no mercado. E posso afirmar com confiança que a qualidade dos serviços prestados reflete um compromisso genuíno com a excelência, sempre alinhado aos mais altos padrões de atendimento e dedicação ao cliente.",
    image: "/testimonial-avatars/bragantin.webp",
    name: "Tcharla Bragantin",
    role: "Proprietária Bragantin Soluções em Gestão Empresarial",
  },
  {
    text: "A Logum nos ajudou a encontrar candidatos altamente qualificados para nossas franquias. O processo de recrutamento foi ágil e eficiente, permitindo-nos focar no crescimento da Caraguá Shake sem preocupações com contratações.",
    image: "/testimonial-avatars/caragua-shake.webp",
    name: "Adriana Scotti",
    role: "Proprietária Caraguá Shake",
  },
  {
    text: "A Logum foi essencial para encontrar estagiários qualificados para a Menconi Contabilidade. Tive dificuldades em acessar currículos por meio das universidades, mas a Logum cuidou de todo o processo, desde o contato com as instituições até a seleção dos candidatos. Excelente suporte e eficiência!",
    image: "/testimonial-avatars/menconi.webp",
    name: "Olivia Menconi",
    role: "Proprietária Menconi Contabilidade",
  },
  {
    text: "Com a Logum, conseguimos recrutar desenvolvedores com precisão e rapidez. A triagem e os testes técnicos foram conduzidos com excelência, garantindo contratações certeiras para nossa equipe.",
    image: "/testimonial-avatars/niloware.webp",
    name: "Júlia Miosso",
    role: "Co-Proprietária Niloware",
  },
];

const TestimonialsSection: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
    <section className="primaryBackground">
      <div className={clsx(styles.testimonialsContainer, "container section")}>
        <SectionHeading
          headingColor="lightHeading"
          subHeadingColor="lightSubHeading"
          variant="center"
          subheading="O que dizem sobre nós"
          heading="Depoimentos"
        />
        <Slider {...settings} className={styles.gridContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialWrapper}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
