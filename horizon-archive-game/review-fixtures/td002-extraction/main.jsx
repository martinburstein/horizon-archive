import React from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import { ReviewExtractionFixture } from "./ReviewExtractionFixture.jsx";
import { createExtractionReviewScenario } from "./scenarios.js";

const DEFAULT_SCENARIO = "blank-primary";
const requestedScenario =
  import.meta.env.VITE_TD002_REVIEW_SCENARIO || DEFAULT_SCENARIO;
const state = createExtractionReviewScenario(requestedScenario);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReviewExtractionFixture state={state} />
  </React.StrictMode>,
);
