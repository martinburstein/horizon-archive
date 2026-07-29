import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import "./fixture.css";
import { ReviewIntervalWorksFixture } from "./ReviewIntervalWorksFixture.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReviewIntervalWorksFixture />
  </StrictMode>,
);
