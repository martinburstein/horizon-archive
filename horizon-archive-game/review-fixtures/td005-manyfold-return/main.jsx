import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import { ReviewManyfoldReturnFixture } from "./ReviewManyfoldReturnFixture.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReviewManyfoldReturnFixture />
  </StrictMode>,
);
