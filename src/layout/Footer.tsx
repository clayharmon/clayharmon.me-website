import * as React from "react";
import IconButton from "../components/IconButton";
import { FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="bg-accent text-white py-32 md:pb-56 md:pt-32 relative z-10"
      >
        <div className="grid grid-cols-1 max-w-lg mx-auto text-center px-4">
          <h1 className="pb-4 text-5xl text-shadow">Get in Touch</h1>
          <p className="block text-black">
            <IconButton
              className="footer-link"
              url="mailto:clay@clayharmon.me"
              label="clay@clayharmon.me"
              siIcon={FaEnvelope}
              bgColor="white"
              iconBgColor="#375ca6"
            />
          </p>
          <p className="block text-black">
            <IconButton
              className="footer-link"
              url="https://twitter.com/messages/compose?recipient_id=380615587"
              label="@clayhermon"
              siIcon={FaTwitter}
              bgColor="white"
              iconBgColor="#375ca6"
            />
          </p>
        </div>
      </div>
      <div className="bg-accent text-white py-8 font-mono text-center text-sm">
        <p>
          Copyright {new Date().getFullYear()} clayharmon.me{" "}
          <a className="underline" href="#">
            View Source-&gt;
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
