import { FC } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "./Testimonial.module.scss";

interface TestimonialProps {
  text: string;
  image: string;
  name: string;
  role: string;
}

const Testimonial: FC<TestimonialProps> = ({ text, image, name, role }) => (
  <div className={styles.testimonial}>
    <blockquote className={styles.testimonialText}>
      <FormatQuoteIcon className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </blockquote>
    <hr />
    <div className={styles.user}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.userInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
