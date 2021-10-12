import { AnchorLink as Link } from "gatsby-plugin-anchor-links";
import * as React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-accent z-50">
      <div className="grid grid-cols-1 max-w-screen-lg mx-auto w-full text-white font-mono font-light px-4 py-2 items-center sm:grid-cols-2">
        <div>
          <h1 className="text-center sm:text-left">
            <Link to="/#hero" stripHash>
              <span className="inline-block w-5 h-5 bg-white rounded-full mr-2"></span>
              <span className="text-2xl font-sans">clay harmon</span>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="flex justify-center sm:justify-end">
            <li className="navlink">
              <Link to="/#about">About</Link>
            </li>
            <li className="navlink">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="navlink">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
