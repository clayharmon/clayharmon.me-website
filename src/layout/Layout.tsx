import * as React from "react";
import Header from "./Header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
