import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="About">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">2023-2024</h3>
            <p className="text-gray-700 mb-4">
              <strong>Hack Reactor (Galvanize) - Advanced Software Engineering Certificate</strong>
            </p>
            <p className="text-gray-600">
              To further hone my skills and prepare for a career in software engineering, I recently graduated from
              Hack Reactor's Advanced Coding Bootcamp. This program provided me with real-world training in Full-
              Stack web development using cutting-edge technologies and frameworks. Through projects and immersive
              learning experiences, I became proficient in tools like React, Redux, Express, PostgreSQL, and modern
              development workflows. Hack Reactor's intensive program allowed me to translate my theoretical
              knowledge into practical real-world applications, enabling me to hit the ground running and deliver user-
              friendly software solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2020-2023</h3>
            <p className="text-gray-700 mb-4">
              <strong>UC Santa Cruz - Computer Science: Game Design</strong>
            </p>
            <p className="text-gray-600">
              My academic journey began at UC Santa Cruz, where
              I immersed myself in a wide range of computer science
              courses. Though I had to separate from the
              university due to personal circumstances,
              I completed 134 credits and earned invaluable
              knowledge through classes such as
              Programming Abstraction, Computer Graphics,
              Data Structures &amp; Algorithms, and Embedded/Systems
              Programming. These courses instilled in me a strong
              foundation in core concepts, algorithmic thinking,
              data organization, computer graphics, and low-level
              systems programming, igniting my passion for creating
              innovative digital experiences.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1a0HkPt7o8huH0teJ2JKWuWO-JmYSBqeh/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
