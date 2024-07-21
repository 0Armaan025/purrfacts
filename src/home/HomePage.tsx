import Navbar from "@/components/navbar/Navbar";
import React from "react";
import MiddlePart from "./middle/MiddlePart";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MiddlePart />
    </>
  );
};

export default HomePage;
