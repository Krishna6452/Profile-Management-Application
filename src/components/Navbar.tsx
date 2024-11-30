import React from 'react';
import { useProfile } from '../context/ProfileContext';

const Navbar: React.FC = () => {
  const { profile } = useProfile();

  return (
    <nav>
      <h1>Profile Management</h1>
      {profile ? (
        <p>
          Welcome, {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
        </p>
      ) : (
        <p>Welcome, Guest</p>
      )}
    </nav>
  );
};

export default Navbar;
