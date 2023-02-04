import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChangeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return {
    theme,
    onThemeChangeHandler
  };
};
