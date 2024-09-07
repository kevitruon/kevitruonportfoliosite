import React from "react";
import { useTheme } from "../ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      id="About"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-primary"
          }`}
        >
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300`}
          >
            <h3
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-primary" : "text-primary"
              }`}
            >
              Education
            </h3>
            <div>
              <h4
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Advance Software Engineering Certificate
              </h4>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } mb-2`}
              >
                Hack Reactor (Nov 2023 - Apr 2024)
              </p>
              <ul
                className={`list-disc pl-5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li>
                  Completed an immersive 19-week full-stack software engineering
                  program covering a comprehensive curriculum, including
                  JavaScript, React, Node.js, databases, data structures,
                  algorithms, and modern web development practices.
                </li>
                <li>
                  Gained hands-on experience building complex web applications
                  from ideation to deployment, collaborating in an Agile
                  environment, and working with industry-standard tools and
                  technologies.
                </li>
                <li>
                  Received personalized instruction and mentorship from
                  experienced software engineers from top technology companies,
                  ensuring a deep understanding of best practices and real-world
                  software engineering methodologies.
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300`}
          >
            <h3
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-primary" : "text-primary"
              }`}
            >
              Experience
            </h3>
            <div>
              <h4
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Software Engineering Fellow
              </h4>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } mb-2`}
              >
                Headstarter (July 2024 - Present)
              </p>
              <ul
                className={`list-disc pl-5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li>
                  Participating in an intensive 7-week program focused on
                  building practical software engineering skills and gaining
                  real-world experience.
                </li>
                <li>
                  Working on building AI-powered applications leveraging
                  technologies like OpenAI, Pinecone, and Stripe API.
                </li>
                <li>
                  Actively participating in weekly hackathons, IRL meetups, and
                  receiving personalized feedback from experienced software
                  engineers.
                </li>
                <li>
                  Working in a team-based environment, following Agile
                  methodologies and adhering to strict deadlines to simulate a
                  real-world software development lifecycle.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/1QRO1wlbH7bksqrQdlGolohtV0XUO5Q2e/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${
              theme === "dark"
                ? "bg-primary text-white"
                : "bg-accent text-white"
            } font-semibold py-3 px-8 rounded-full transition duration-300`}
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
