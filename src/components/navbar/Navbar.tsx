import Link from "next/link";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className=" text-white p-1 flex justify-center items-center shadow-sm shadow-gray-500">
      <div className="flex items-center" style={{ fontFamily: "Poppins" }}>
        <Link href="/">
          <img
            src="/logo.png"
            width={120}
            alt="logo"
            className="mix-blend-multiply"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
