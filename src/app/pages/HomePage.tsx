import React from "react";
import { Navbar } from "../components/Navbar";
import Deperture from "../components/deperture";

const HomePage = () => {
  return (
    <div>
      <Navbar title={"Ticket App"}/>
      <Deperture placeofdeparture={"Şehir Seçiniz"} cityfirst={"İstanbul"} citysecond={"İzmir"}/>
    </div>
  );
};

export { HomePage };
