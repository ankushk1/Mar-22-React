import React from "react";
import { useTheme } from "../CustomHooks/CustomHooks";

const ThemeToggle = () => {
  const { theme, onThemeChangeHandler } = useTheme();

  console.log(theme);
  return (
    <div>
      <div className="mt-3" onClick={onThemeChangeHandler}>
        {theme === "dark" ? (
          <div className="btn btn-warning">
            <i className="fa-regular fa-sun "></i>
          </div>
        ) : (
          <div className="btn btn-secondary">
            <i className="fa-regular fa-moon  "></i>
          </div>
        )}
      </div>
      <div
        className="text-box mt-4"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          height: " 100vh"
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        tempore enim odio non eveniet voluptate magni facere quidem laborum eum!
        Dolore corporis facilis, error libero ipsam consectetur cupiditate atque
        assumenda quisquam praesentium hic at! Necessitatibus, quas laudantium,
        culpa accusamus odit ratione error sed sapiente odio quasi aperiam
        corrupti porro delectus?
      </div>
    </div>
  );
};

export default ThemeToggle;
