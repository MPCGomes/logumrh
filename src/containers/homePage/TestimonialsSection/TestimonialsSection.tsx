import React from "react";
import styles from "./TestimonialsSection.module.scss";
import clsx from "clsx";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Testimonial from "@/components/homePage/Testimonial/Testimonial";

const TestimonialsSection = () => {
  return (
    <section className={clsx(styles.heroContainer, "container section")}>
      <SectionHeading
        variant="center"
        subheading="O que dizem sobre nós"
        heading="Depoimentos de nossos clientes"
      />
      <div className={styles.gridContainer}>
        <Testimonial
          text={
            "A Logum foi essencial para encontrar estagiários qualificados para a Minconi Contabilidade. Tive dificuldades em acessar currículos por meio das universidades, mas a Logum cuidou de todo o processo, desde o contato com as instituições até a seleção dos candidatos. Recebi quatro perfis muito qualificados e consegui contratar o estagiário ideal. Excelente suporte e eficiência!"
          }
          image={
            "https://s2.glbimg.com/KpzbDutodg_CHzXGzvvN79974fw=/e.glbimg.com/og/ed/f/original/2017/01/02/benedict-cumberbatch_destaque.jpg"
          }
          name={"Olivia Menconi"}
          role={"Proprietária da Menconi Contabilidade"}
        />
        <Testimonial
          text={
            "A Logum foi essencial para encontrar estagiários qualificados para a Minconi Contabilidade. Tive dificuldades em acessar currículos por meio das universidades, mas a Logum cuidou de todo o processo, desde o contato com as instituições até a seleção dos candidatos. Recebi quatro perfis muito qualificados e consegui contratar o estagiário ideal. Excelente suporte e eficiência!"
          }
          image={
            "https://s2.glbimg.com/KpzbDutodg_CHzXGzvvN79974fw=/e.glbimg.com/og/ed/f/original/2017/01/02/benedict-cumberbatch_destaque.jpg"
          }
          name={"Olivia Menconi"}
          role={"Proprietária da Menconi Contabilidade"}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
