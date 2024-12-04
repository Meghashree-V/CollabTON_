import React from 'react';

function ExploreProjects() {
  return (
    <div>
      <h2>Explore Projects</h2>
      {/* Your project display code here */}
    </div>
  );
}

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
