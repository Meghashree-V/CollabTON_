// src/components/ExploreProjects.js
import React, { useState, useEffect } from 'react';

function ExploreProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from smart contract or backend
    const fetchProjects = async () => {
      const fetchedProjects = [
        { id: 1, title: 'Project A', description: 'A description of project A' },
        { id: 2, title: 'Project B', description: 'A description of project B' },
      ];
      setProjects(fetchedProjects);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Explore Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available currently. Please check back later.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExploreProjects;

