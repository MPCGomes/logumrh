import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

interface FooterLink {
  name: string;
  href?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Links",
    links: [
      { name: "Início", href: "/" },
      { name: "Vagas", href: "/jobs" },
    ],
  },
  {
    title: "Sobre Nós",
    links: [
      { name: "Caraguatatuba, SP" },
      { name: "contato@logumrh.com" },
      { name: "+55 (12) 97409-6393" },
    ],
  },
  {
    title: "Redes Sociais",
    links: [
      {
        name: "@logumrh",
        href: "https://www.instagram.com/logumrh/",
        external: true,
      },
      {
        name: "linkedin.com/LogumRH",
        href: "https://www.linkedin.com/company/logumrh/posts/?feedView=all",
        external: true,
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <img
            className={styles.logo}
            src="/assets/logo_horizontal.png"
            alt="Logum RH Logo"
          />

          {footerLinks.map(({ title, links }, index) => (
            <div key={index} className={styles.group}>
              <p className={styles.title}>{title}</p>
              <ul>
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      link.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className={styles.hr} />

        <div className={styles.copyright}>
          <p>© 2025 Todos os direitos reservados.</p>
          <p>
            Desenvolvido por {""}
            <Link href="https://niloware.com.br/" target="_blank">
              <strong>Niloware</strong>
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
