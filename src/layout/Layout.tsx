import * as React from "react";
import Seo from "../components/Seo";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Seo
        title="Software Engineer"
        description="’I am passionate about using my skills to help solve problems for others and allow them to achieve their goals."
      />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
