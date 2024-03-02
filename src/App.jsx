import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Colorgen from "./compoments/colorgen/colorgen";
import Stars from "./compoments/stars/stars";
import ColoorRoundTwo from "./compoments/colorgen/ColoorRoundTwo";
import ImageSlider from "./compoments/imageslider/ImageSlider";
import FeatureFlag_index from "./compoments/FeatureFlag/FeatureFlag_index";
import FeatureFlagGlobalState from "./compoments/FeatureFlag/Contextflag_index";
import Parent from "./exersice/Contextex1/Parent";

function App() {
  return (
    <div>
      <FeatureFlagGlobalState>
      <FeatureFlag_index/>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
