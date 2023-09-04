import { Navigate } from "react-router-dom";
import Skills from "../components/Skills";
import Home from "../components/Home";
import Education from "../components/Education";
import Experience from "../components/Experience";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/skills", element: <Skills /> },
  { path: "/education", element: <Education /> },
  { path: "/experience", element: <Experience /> },
  { path: "/portfolio", element: <Home /> },
  { path: "/portfolio/skills", element: <Skills /> },
  { path: "/portfolio/education", element: <Education /> },
  { path: "/portfolio/experience", element: <Experience /> },
  { path: "*", element: <Navigate to="/" /> },
];
