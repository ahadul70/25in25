import React, { useContext } from "react";
import Light_dark from "../lights/Light_dark.jsx"
import Tic from "../tictacteo/Tic.jsx"
import ColoorRoundTwo from"../colorgen/ColoorRoundTwo.jsx"
import { FeatureFlagsContext } from "./Contextflag_index.jsx";

const componentsToRender = [
  {
    key: "showTic",
    component: <Tic />,
  },
  {
    key: "showLightAndDarkMode",
    component: <Light_dark />,
  },

  {
    key: "showcolortitle",
    component: <ColoorRoundTwo />,
  },
];

const FeatureFlag_index = () => {
  const { loading, enabled } = useContext(FeatureFlagsContext);

  function checkEnabledFlags(getCurrentKey) {
    return enabled[getCurrentKey];
  }

  if (loading) return <h1>Loading data! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={componentItem.key}>{componentItem.component}</div>
        ) : null
      )}
    </div>
  );
};

export default FeatureFlag_index;
