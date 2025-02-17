import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "./Testimonial.module.scss";

interface TestimonialProps {
  text: string;
  image: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  image,
  name,
  role,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialText}>
        <p className={styles.icon}>
          <FormatQuoteIcon sx={{ fontSize: 40 }} />
        </p>
        <p className={styles.text}>{text}</p>
      </div>
      <hr />
      <div className={styles.user}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.userInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
