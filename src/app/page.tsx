import styles from "./page.module.scss";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";

export default function Home() {
  return <div className={styles.page}>
    <ProcessSection />
    <CtaSection />
  </div>;
}