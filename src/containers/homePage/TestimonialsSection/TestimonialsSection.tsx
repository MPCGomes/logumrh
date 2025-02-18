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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend ligula ut leo cursus, ut interdum nisl lobortis."
          }
          image={
            "https://s2.glbimg.com/KpzbDutodg_CHzXGzvvN79974fw=/e.glbimg.com/og/ed/f/original/2017/01/02/benedict-cumberbatch_destaque.jpg"
          }
          name={"SHERLOCK HOLMES"}
          role={"Lorem ipsum dolor"}
        />
        <Testimonial
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend ligula ut leo cursus, ut interdum nisl lobortis."
          }
          image={
            "https://s2.glbimg.com/KpzbDutodg_CHzXGzvvN79974fw=/e.glbimg.com/og/ed/f/original/2017/01/02/benedict-cumberbatch_destaque.jpg"
          }
          name={"SHERLOCK HOLMES"}
          role={"Lorem ipsum dolor"}
        />
        <Testimonial
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend ligula ut leo cursus, ut interdum nisl lobortis."
          }
          image={
            "https://s2.glbimg.com/KpzbDutodg_CHzXGzvvN79974fw=/e.glbimg.com/og/ed/f/original/2017/01/02/benedict-cumberbatch_destaque.jpg"
          }
          name={"SHERLOCK HOLMES"}
          role={"Lorem ipsum dolor"}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
