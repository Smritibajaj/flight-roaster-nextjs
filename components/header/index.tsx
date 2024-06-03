import React from "react";
import { IHeader } from "./types";

const Header = ({ title }: IHeader) => {
  return (
    <header className="w-full p-5 h-20 bg-gray-100 border-b border-gray-300 fixed top-0 z-10">
      <h1 className="text-center">{title}</h1>
    </header>
  );
};

export default Header;
