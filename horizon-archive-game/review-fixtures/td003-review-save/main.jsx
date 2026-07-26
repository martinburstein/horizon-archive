import React from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import { ReviewSaveFixture } from "./ReviewSaveFixture.jsx";
import { createReviewSaveScenario } from "./scenarios.js";

const DEFAULT_SCENARIO = "cm40-five-conjunct-ready";
const requestedScenario =
  import.meta.env.VITE_TD003_REVIEW_SCENARIO || DEFAULT_SCENARIO;
const scenario = createReviewSaveScenario(requestedScenario);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReviewSaveFixture scenario={scenario} />
  </React.StrictMode>,
);
