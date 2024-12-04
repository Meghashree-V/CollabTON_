// src/components/UploadProjects.js
import React, { useState } from 'react';

function UploadProjects() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState(0);
  const [name, setName] = useState('');

  const handleUpload = async () => {
    try {
      console.log("Uploading project:", title);
      console.log("Description:", description);
      console.log("Reward:", reward);
      // Smart contract interaction for uploading project goes here
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  return (
    <div>
      <h2>Upload Project</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Publisher Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Project Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Reward (in TON):</label>
          <input type="number" value={reward} onChange={(e) => setReward(Number(e.target.value))} />
        </div>
        <button type="button" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
}

export default UploadProjects;