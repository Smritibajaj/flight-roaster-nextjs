import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-5 text-center mt-5 bg-gray-100 border-t border-gray-300 fixed bottom-0">
      <p className="m-0">
        {`© ${new Date().getFullYear()}
        All Rights Reserved. Content owned by
        Simmy Bajaj.`}
      </p>
    </footer>
  );
};

export default Footer;
