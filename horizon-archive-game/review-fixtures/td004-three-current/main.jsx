import React from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles.css";
import { ThreeCurrentReach } from "../../src/ThreeCurrentReach.jsx";
import {
  createThreeCurrentScenario,
  threeCurrentScenarioNames,
} from "./scenarios.js";

const requested =
  import.meta.env.VITE_TD004_THREE_CURRENT_SCENARIO
  || threeCurrentScenarioNames[0];
const scenario = createThreeCurrentScenario(requested);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThreeCurrentReach
      state={scenario.state}
      onAction={() => {}}
      onFieldChange={() => {}}
    />
  </React.StrictMode>,
);
