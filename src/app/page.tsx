import FaqSection from "@/containers/homePage/FaqSection/FaqSection";
import styles from "./page.module.scss";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import FeaturesSection from "@/containers/homePage/FeaturesSection/FeaturesSection";
import HeroSection from "@/containers/homePage/HeroSection/HeroSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";
import TestimonialsSection from "@/containers/homePage/TestimonialsSection/TestimonialsSection";
import ServicesSection from "@/containers/homePage/ServicesSection/ServicesSection";
import JobCard from "@/components/common/JobCard/JobCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <JobCard
        id={"undefined"}
        jobTitle={"undefined"}
        company={"undefined"}
        location={"undefined"}
        salary={"undefined"}
        benefits={"undefined"}
        schedule={"undefined"}
        workDays={"undefined"}
      />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
