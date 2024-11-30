import React, { useEffect, useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import api from '../services/api';

const ProfileDisplay: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const [data, setData] = useState(profile);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!profile) {
      const fetchProfile = async () => {
        try {
          const response = await api.get('/profile');
          setProfile(response.data);
          setData(response.data);
        } catch (err) {
          setError('Failed to load profile.');
        }
      };

      fetchProfile();
    }
  }, [profile, setProfile]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No profile found. Please create one.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Age: {data.age || 'N/A'}</p>
    </div>
  );
};

export default ProfileDisplay;
