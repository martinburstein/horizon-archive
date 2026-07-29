import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import "./fixture.css";
import { ReviewBraidedVergeFixture } from "./ReviewBraidedVergeFixture.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReviewBraidedVergeFixture />
  </StrictMode>,
);
