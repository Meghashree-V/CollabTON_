// src/components/SolveIssues.js
import React, { useState } from 'react';

function SolveIssues() {
  const [issues, setIssues] = useState([
    { id: 1, title: 'Bug in AI Algorithm', description: 'The AI algorithm throws errors when processing large datasets.' },
    { id: 2, title: 'UI Bug in Landing Page', description: 'The buttons on the landing page are misaligned on mobile devices.' },
  ]);

  const solveIssue = (id) => {
    setIssues(issues.filter(issue => issue.id !== id));  // Remove the solved issue from the list
  };

  return (
    <div>
      <h2>Solve Issues</h2>
      {issues.length === 0 ? (
        <p>There are no issues to solve right now. Check back later!</p>
      ) : (
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              <button onClick={() => solveIssue(issue.id)}>Solve</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SolveIssues;
