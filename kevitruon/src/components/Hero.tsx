import React from "react";
import { useTheme } from '../ThemeContext';

const Hero: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`hero min-h-screen flex items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-primary to-secondary text-white'}`} id="Home">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Welcome to my portfolio!</h1>
                        <p className="text-xl mb-6 animate-fade-in-up animation-delay-300">
                            I'm a recent Hack Reactor graduate with expertise in Full-Stack web development.
                            Proficient in React, Redux, Express, PostgreSQL, and modern development workflows.
                        </p>
<a
                        href="#About"
                        className={`bg-accent text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300 animate-fade-in-up animation-delay-600 ${theme === 'dark' ? 'bg-primary text-white' : 'bg-accent text-white'}`}
                        >
                        Learn More
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center animate-fade-in-up animation-delay-900">
                    <div className="w-64 h-64 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition duration-300">
                        <img
                            src= {require("../assets/profilepicture.jpeg")}
                            alt="Kevin Truong"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
</div>
);
};

export default Hero;
