import styles from "./page.module.scss";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import FaqSection from "@/containers/homePage/FaqSection/FaqSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
