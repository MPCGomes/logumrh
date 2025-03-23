import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

interface FooterLink {
  name: React.ReactNode;
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
      { name: (
        <>
          <LocationOnIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
          Caraguatatuba, SP
        </>
      ), },
      { name: (
        <>
          <EmailIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
          contato@logumrh.com
        </>
      ), },
      { name: (
        <>
          <LocalPhoneIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
          +55 (12) 97409-6393
        </>
      ), },
    ],
  },
  {
    title: "Redes Sociais",
    links: [
      {
        name: (
          <>
            <InstagramIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
            @logumrh
          </>
        ),
        href: "https://www.instagram.com/logumrh/",
        external: true,
      },
      {
        name: (
          <>
            <LinkedInIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
            linkedin.com/LogumRH
          </>
        ),
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
          <Image
            className={styles.logo}
            src="/assets/logo_horizontal_light.png"
            alt="Logum RH Logo"
            width={300}
            height={0}
            sizes="auto"
            style={{ width: "300px", height: "auto" }}
            draggable="false"
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
