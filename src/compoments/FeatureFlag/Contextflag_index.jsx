// FeatureFlagGlobalState.js
import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./Data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState({});

  async function FetchFeatureFlags() {
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabled(response);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    FetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabled }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
