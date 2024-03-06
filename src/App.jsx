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
import CustomIndex from "./compoments/useFetvhhook/CustomIndex";
import UseOutside from "./compoments/useOnclickoutside/UseOnclickOutside";
import DoubleParent from "./exersice/double/DoubleParent";
import Test from "./compoments/usewindowresize/Test";
import Scrolltothetop from "./compoments/scroll_to the_top/Scrolltothetop";
import Scrolltopart from "./compoments/Scroll_to_sections/Scrolltopart";

function App() {
  return (
    <div>
   <Scrolltopart/>
    </div>
  );
}

export default App;
