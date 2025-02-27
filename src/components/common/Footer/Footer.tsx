import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img
            className={styles.logo}
            src="./assets/logo_horizontal.png"
            alt="logum-recursos-humanos-logo"
          />

          <div className={styles.groupContainer}>
            <p className={styles.title}>Links</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} href={"/"}>
                  Início
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href={"/jobs"}>
                  Vagas
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.groupContainer}>
            <p className={styles.title}>Sobre Nós</p>
            <ul className={styles.list}>
              <li className={styles.item}>Caraguatatuba, SP</li>
              <li className={styles.item}>contato@logumrh.com</li>
              <li className={styles.item}>+55 (12) 97409-6393</li>
            </ul>
          </div>

          <div className={styles.groupContainer}>
            <p className={styles.title}>Redes Sociais</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={"https://www.instagram.com/logumrh/"}
                  target="_blank"
                >
                  @logumrh
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={
                    "https://www.linkedin.com/company/logumrh/posts/?feedView=all"
                  }
                  target="_blank"
                >
                  linkedin.com/LogumRH
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.copyrightContainer}>
          <p>© 2025 Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <Link
              className={styles.link}
              href={"https://niloware.com.br/"}
              target="_blank"
            >
              <strong>Niloware</strong>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
