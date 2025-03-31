import React from "react";
import styles from "./BackToTop.module.scss";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Link from "next/link";

const BackToTop = () => {
  return (
    <Link className={styles.backToTop} href={"#header"}>
      <ExpandLessRoundedIcon sx={{ fontSize: 45 }} />
    </Link>
  );
};

export default BackToTop;
