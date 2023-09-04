import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { routes } from "./routing/routes";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Main = () => {
  const [data, setData] = useState(null);
  const [reactTheme, setReactTheme] = useState(lightTheme);

  const handleThemeSetupCallback = (themeValue) => {
    if (themeValue) {
      setReactTheme(lightTheme);
    } else {
      setReactTheme(darkTheme);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <ThemeProvider theme={reactTheme}>
        <CssBaseline />
        <Navbar setThemeCallBack={handleThemeSetupCallback} />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element}></Route>
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default Main;
