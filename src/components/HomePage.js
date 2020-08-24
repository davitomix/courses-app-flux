import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, FLuc, and React Router fro ulta-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
