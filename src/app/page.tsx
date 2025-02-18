import styles from "./page.module.scss";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import FeaturesSection from "@/containers/homePage/FeaturesSection/FeaturesSection";
import HeroSection from "@/containers/homePage/HeroSection/HeroSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";
import TestimonialsSection from "@/containers/homePage/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return <div className={styles.page}>
    <HeroSection />
    <ProcessSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CtaSection />
  </div>;
}