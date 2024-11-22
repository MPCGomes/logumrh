import { ReactNode } from "react";
import "../styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import BackToTop from "@/components/BackToTop/BackToTop";
import WppFloating from "@/components/WppFloating/WppFloating";

export const metadata = {
  title: "Logum RH",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ],
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BackToTop />
        <WppFloating />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
