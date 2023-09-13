import { Navigate } from "react-router-dom";
import Skills from "../components/Skills";
import Home from "../components/Home";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/skills", element: <Skills /> },
  { path: "/education", element: <Education /> },
  { path: "/experience", element: <Experience /> },
  { path: "/projects", element: <Projects /> },
  { path: "/portfolio", element: <Home /> },
  { path: "/portfolio/skills", element: <Skills /> },
  { path: "/portfolio/education", element: <Education /> },
  { path: "/portfolio/experience", element: <Experience /> },
  { path: "/portfolio/projects", element: <Projects /> },
  { path: "*", element: <Navigate to="/" /> },
];
