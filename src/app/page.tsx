import Image from "next/image";
import { Signin } from "./pages/Signin";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>
        Hello
        <Signin />
      </h1>
    </>
  );
}
