import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileForm from './components/ProfileForm';
import './App.css';

const App = () => {
  const [profileData, setProfileData] = useState({
    name: 'Default Profile Name',
    image: 'https://spng.pngfind.com/pngs/s/19-195264_business-professional-png-black-man-business-png-transparent.png',
    bio: 'This is your bio',
  });

  const handleFormSubmit = (data) => {
    setProfileData(data);
  };

  return (
    <div className="app-container">
      <h1>User Profile Card</h1>
      <ProfileCard {...profileData} />
      <ProfileForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
