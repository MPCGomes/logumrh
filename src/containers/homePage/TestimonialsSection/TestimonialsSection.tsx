import { FC } from "react";
import styles from "./TestimonialsSection.module.scss";
import clsx from "clsx";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Testimonial from "@/components/homePage/Testimonial/Testimonial";

const defaultProfileImage = "/assets/profile-placeholder.jpg";

const testimonials = [
  {
    text: "A Logum nos ajudou a encontrar candidatos altamente qualificados para nossas franquias. O processo de recrutamento foi ágil e eficiente, permitindo-nos focar no crescimento da Caraguá Shake sem preocupações com contratações.",
    image: defaultProfileImage,
    name: "Adriana Scotti",
    role: "Proprietária Caraguá Shake",
  },
  {
    text: "A Logum foi essencial para encontrar estagiários qualificados para a Menconi Contabilidade. Tive dificuldades em acessar currículos por meio das universidades, mas a Logum cuidou de todo o processo, desde o contato com as instituições até a seleção dos candidatos. Recebi quatro perfis muito qualificados e consegui contratar o estagiário ideal. Excelente suporte e eficiência!",
    image: defaultProfileImage,
    name: "Olivia Menconi",
    role: "Proprietária Menconi Contabilidade",
  },
  {
    text: "Com a Logum, conseguimos recrutar desenvolvedores com precisão e rapidez. A triagem e os testes técnicos foram conduzidos com excelência, garantindo contratações certeiras para nossa equipe.",
    image: defaultProfileImage,
    name: "Marcos Paulo",
    role: "Proprietário Niloware",
  },
];

const TestimonialsSection: FC = () => (
  <section className="primaryBackground">
    <div className={clsx(styles.testimonialsContainer, "container section")}>
      <SectionHeading
        headingColor="lightHeading"
        subHeadingColor="lightSubHeading"
        variant="center"
        subheading="O que dizem sobre nós"
        heading="Depoimentos de nossos clientes"
      />
      <div className={styles.gridContainer}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
