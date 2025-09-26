import React from "react";
import { ContractorsFooterSection } from "./sections/ContractorsFooterSection/ContractorsFooterSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const HomepageRevised = () => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-center relative bg-white-bg-40 overflow-x-hidden"
      data-model-id="510:5775"
    >
      <NavbarSection />
      <MainContentSection />
      <ContractorsFooterSection />
    </div>
  );
};
