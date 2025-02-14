import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import NavbarPublic from "@/components/landing/navbar-public";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: Props) => {
  return (
    <>
      <div className="absolute h-full w-full bg-[radial-gradient(#777c_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#777,transparent_100%)]" />
      <NavbarPublic />
      <main className="relative z-40 mx-auto w-full">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default LandingLayout;
