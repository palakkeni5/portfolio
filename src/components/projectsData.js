import weatherAppImage from "../assets/project-images/weather-app.png";
import pokedexAppImage from "../assets/project-images/pokedex-app.png";
import portfolioImage from "../assets/project-images/screen-capture-mp4.gif";
import brickBreakerImage from "../assets/project-images/brick-breaker.png";

export const data = {
  projects: [
    {
      projectImage: weatherAppImage,
      projectName: "Weather App",
      projectDescription:
        " A single page application to display weather information based on location",
      projectTech: ["React", "Javascript", "HTML", "CSS"],
      projectLink: "https://github.com/palakkeni5/Weather-App",
      liveDemo: "https://palakkeni5.github.io/Weather-App/",
    },
    {
      projectImage: pokedexAppImage,
      projectName: "Pokedex App",
      projectDescription:
        " A progressive web app in angular for pokedex to show pokemon info",
      projectTech: ["Angular", "Javascript", "HTML", "CSS"],
      projectLink: "https://github.com/palakkeni5/Pokedex-App",
      liveDemo: "https://palakkeni5.github.io/Pokedex-App/",
    },
    {
      projectImage: portfolioImage,
      projectName: "Portfolio",
      projectDescription:
        "A portfolio website project in react which contains information regarding me",
      projectTech: ["React", "Javascript", "HTML", "CSS"],
      projectLink: "https://github.com/palakkeni5/portfolio",
      liveDemo: "https://palakkeni5.github.io/portfolio/",
    },
    {
      projectImage: brickBreakerImage,
      projectName: "Brick Breaker Game",
      projectDescription: "A simple brick breaker game developed in java",
      projectTech: ["React", "Javascript", "HTML", "CSS"],
      projectLink: "https://github.com/palakkeni5/brick-breaker-game-in-java",
    },
  ],
};
