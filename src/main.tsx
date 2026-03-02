// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GiftApp } from "./GiftApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiftApp />
  </StrictMode>,
);
