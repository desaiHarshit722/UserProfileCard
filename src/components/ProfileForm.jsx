// src/components/ProfileForm.js
import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, image: image || 'https://spng.pngfind.com/pngs/s/19-195264_business-professional-png-black-man-business-png-transparent.png', bio });
    setName('');
    setImage('');
    setBio('');
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Profile Picture URL: (upload it from internet.)</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
