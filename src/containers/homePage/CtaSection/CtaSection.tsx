import { FC } from "react";
import styles from "./CtaSection.module.scss";
import Button from "@/components/common/Button/Button";

const CtaSection: FC = () => (
  <section className={styles.ctaSection}>
    <div className="container">
      <p>
        Toque no botão para falar conosco por WhatsApp e agende um atendimento
        agora mesmo!
      </p>
      <Button variant="outlined">Fale Conosco</Button>
    </div>
  </section>
);

export default CtaSection;
