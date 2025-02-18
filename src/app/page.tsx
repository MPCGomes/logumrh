import FaqSection from "@/containers/homePage/FaqSection/FaqSection";
import styles from "./page.module.scss";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import FeaturesSection from "@/containers/homePage/FeaturesSection/FeaturesSection";
import HeroSection from "@/containers/homePage/HeroSection/HeroSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";
import JobSection from "@/containers/homePage/JobsSection/JobsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ProcessSection />
      <JobSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
