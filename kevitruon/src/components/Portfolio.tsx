import React from "react";
import { useTheme } from "../ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FiChevronRight className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FiChevronLeft className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
  </div>
);

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Flashcard-SaaS - Flashcard Web Application",
      description:
        "A flashcard web application built with React, Next.js, GeminiAI, Clerk, and Stripe.",
      image: require("../assets/flashcard.png"),
      repoLink: "https://github.com/KJBRHeadstarter/flashcard-saas",
    },
    {
      title: "Pantry Manager AI",
      description: "A pantry manager application that uses AI to suggest recipes based on the ingredients you have.",
      image: require("../assets/pantry.png"),
      repoLink: "https://github.com/kevitruon/Pantry-Tracker",
    },
    {
      title: "FitConnect - Social Media Workout Tracker",
      description:
        "A social media workout tracker built with React, FastAPI, and PostgreSQL.",
      image: require("../assets/fitconnect.png"),
      repoLink: "https://github.com/kevitruon/FitConnect",
    },
    {
      title: "CarCarDealer - Car Dealership Management App",
      description:
        "A car dealership management application built with React, Django, and PostgreSQL.",
      image: require("../assets/carcardealership.png"),
      repoLink: "https://github.com/kevitruon/CarCarDealership",
    },
    {
      title: "Computer Graphics",
      description: "Rendered 3D Models using Three.js, WebGL, and HTML",
      image: require("../assets/computergraphics.png"),
      repoLink: "https://github.com/kevitruon/ComputerGraphics-WebGL",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      id="Portfolio"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-primary"
          }`}>
          My Projects
        </h2>
        <Slider {...settings} className="relative">
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className={`flex flex-col justify-between h-full ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 flex-grow" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{project.description}</p>
                  <div className="mt-auto">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={`inline-block px-4 py-2 ${
                      theme === "dark" ? "bg-primary text-white" : "bg-accent text-white"
                    } rounded-md hover:bg-opacity-80 transition duration-300`}>View Repo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
