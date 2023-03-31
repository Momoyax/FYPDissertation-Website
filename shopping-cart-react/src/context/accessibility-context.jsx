import { createContext, useState } from "react";

export const AccessibilityContext = createContext(null);

export const AccessibilityProvider = (props) => {
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);
  const [contrast, setContrast] = useState("normal");
  const [fontSize, setFontSize] = useState("normal");

  const contextValue = {
    dyslexiaFriendly,
    setDyslexiaFriendly,
    contrast,
    setContrast,
    fontSize,
    setFontSize,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {props.children}
    </AccessibilityContext.Provider>
  );
};