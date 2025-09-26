import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomepageRevised } from "./screens/HomepageRevised/HomepageRevised";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HomepageRevised />
  </StrictMode>,
);
