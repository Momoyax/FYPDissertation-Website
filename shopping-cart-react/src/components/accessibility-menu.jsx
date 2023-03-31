import React, { useContext } from "react";
import { AccessibilityContext } from "../context/accessibility-context";

export const AccessibilityMenu = () => {
  const {
    dyslexiaFriendly,
    setDyslexiaFriendly,
    contrast,
    setContrast,
    fontSize,
    setFontSize,
  } = useContext(AccessibilityContext);

  return (
    <div>
      <label>
        Dyslexia Friendly Text
        <input
          type="checkbox"
          checked={dyslexiaFriendly}
          onChange={() => setDyslexiaFriendly(!dyslexiaFriendly)}
        />
      </label>
      <label>
        Contrast
        <select value={contrast} onChange={(e) => setContrast(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Font Size
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
      </label>
    </div>
  );
};