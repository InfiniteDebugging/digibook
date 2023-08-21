import React from "react";

const Footer = ({ copyOwner }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-lg p-4">
      {copyOwner} {year}
    </footer>
  );
};

export default Footer;
