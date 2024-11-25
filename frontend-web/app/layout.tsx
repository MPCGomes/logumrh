import { ReactNode } from "react";
import "../styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import BackToTop from "@/components/BackToTop/BackToTop";
import WppFloating from "@/components/WppFloating/WppFloating";
import CustomThemeProvider from "@/components/CustomThemeProvider/CustomThemeProvider";

export const metadata = {
  title: "Logum RH",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <Navbar />
          <BackToTop />
          <WppFloating />
          {children}
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
