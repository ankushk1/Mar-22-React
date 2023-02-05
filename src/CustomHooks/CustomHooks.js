import { useEffect } from "react";
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

export const useFetch = (url, filter) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${url}/${filter}`);
    const data = await res.json();
    setData(filter === "products" ? data.products : data.users);
  };

  useEffect(() => {
    setData([])
    fetchData();
  }, [url, filter]);

  return { data };
};
