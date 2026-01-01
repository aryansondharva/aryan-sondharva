"use client";

import {
  Header,
  ScrollIndicatior,
  WorkExperience,
  MyProjects,
  ContactMe,
  IKnow,
  Footer,
} from "@/components/index.js";
import "@/assets/scss/common.scss";
import LenisScroll from "@/lib/LenisScroll.js";
import { ScrollBasedText } from "@/components/private/ScrollBasedText";
import MaskedAbout from "@/components/MaskedAbout";
import NavigationBar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <LenisScroll />
      <ScrollIndicatior />
      <div className="overflow-x-hidden">
        <Header />
        <MaskedAbout />
        <IKnow />
        <ScrollBasedText />
        <WorkExperience />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
