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
    console.log("in themeValue" + themeValue);
    if (JSON.parse(themeValue)) {
      setReactTheme(darkTheme);
    } else {
      setReactTheme(lightTheme);
    }
  };

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
