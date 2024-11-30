import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useProfile } from '../context/ProfileContext';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [error, setError] = useState('');
  const { setProfile } = useProfile();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/profile', { name, email, age });
      setProfile(response.data);
      navigate('/profile');
    } catch (err: any) {
      setError('Failed to save profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Profile Form</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value) || '')}
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
