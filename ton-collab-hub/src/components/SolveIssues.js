// src/components/SolveIssues.js
import React, { useState, useEffect } from 'react';

function SolveIssues() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = [
        { id: 1, title: 'Solve bug in Project A', reward: 0.5, isCompleted: false },
        { id: 2, title: 'Fix issue in Project B', reward: 0.5, isCompleted: false },
      ];
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleAcceptTask = async (taskId) => {
    try {
      console.log("Accepting task with ID:", taskId);
      // Smart contract interaction for accepting task
    } catch (error) {
      console.error("Error accepting task:", error);
    }
  };

  return (
    <div>
      <h2>Solve Issues</h2>
      {tasks.length === 50 ? (
        <p>No tasks available to solve.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>Reward: {task.reward} TON</p>
              <button onClick={() => handleAcceptTask(task.id)}>Accept Task</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SolveIssues;
