import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <Link to="/profile-form">Go Back to Profile Form</Link>
  </div>
);

export default NotFound;
