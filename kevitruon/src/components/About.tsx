import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="About">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">2023-2024</h3>
            <p className="text-gray-700">
              Hack Reactor (Galvanize) - Advance Software Engineering Certificate
              <br />
              To further hone my skills and prepare for a career in software engineering, I recently graduated from
              Hack Reactor's Advance Coding Bootcamp. This program provided me with real-world training in Full-
              Stack web development using cutting-edge technologies and frameworks. Through projects and immersive
              learning experiences, it became proficient in tools like React, Redux, Express, PostgreSQL, and modern
              development workflows. Hack Reactor's intensive allowed me to translate my theoretical
              knowledge into practical real-world applications, enabling me to hit the ground running and deliver user-
              friendly software solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2020-2023</h3>
            <p className="text-gray-700">
              UC Santa Cruz - Computer Science: Game Design
              <br />
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
      </div>
    </div>
  );
};

export default About;
