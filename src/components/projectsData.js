import weatherAppImage from "../assets/project-images/weather-app.png";
import pokedexAppImage from "../assets/project-images/pokedex-app.png";
import portfolioImage from "../assets/project-images/screen-capture-mp4.gif";
import oneRoomChatAppImage from "../assets/project-images/one-room-chat-app.png";
import awesomeSuperstoreAppImage from "../assets/project-images/awesome-super-store.png";
import wallpaperAppImage from "../assets/project-images/wallpaper-app-feature-graphic.png";

export const data = {
  projects: [
    {
      projectImage: wallpaperAppImage,
      projectName: "Wallpaper App",
      projectDescription:
        "An app developed in React Native to search, view and set wallpapers for Android and IOS devices.",
      projectTech: [
        "React Native",
        "Kotlin",
        "Gradle",
        "Github Actions",
        "Google Play Store",
      ],
      projectLink: "https://github.com/palakkeni5/wallpaper-app",
      playStoreLink:
        "https://play.google.com/apps/testing/com.palakkeni5.wallpaper.app",
    },
    {
      projectImage: oneRoomChatAppImage,
      projectName: "One Room Chat App",
      projectDescription:
        "A real-time multi-user chat application with a single chat room that allows users to communicate with each other.",
      projectTech: ["Java", "React", "PostgreSQL", "Docker"],
      projectLink: "https://github.com/palakkeni5/one-room-chat-app",
    },
    {
      projectImage: awesomeSuperstoreAppImage,
      projectName: "Awesome Superstore App",
      projectDescription:
        "This project contains the web application, database and ETL components for a business use case to develop an e-commerce web application for Awesome Superstore Inc.",
      projectTech: ["React", "Node JS", "Oracle SQL", "MySQL"],
      projectLink: "https://github.com/palakkeni5/awesome-superstore-app",
    },
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
  ],
};
