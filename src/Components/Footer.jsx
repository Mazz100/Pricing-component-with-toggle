import React from "react";

const Footer = () => {
  return (
    <div className="desktop:m-0 mt-6 text-balance bg-white p-3 text-center text-sm">
      Challenge by{" "}
      <a
        className="font-semibold text-link-text-color"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="font-semibold text-link-text-color"
        href="http://github.com/mazz100"
      >
        Mazen Hassan
      </a>
      .
    </div>
  );
};

export default Footer;
