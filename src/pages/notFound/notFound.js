import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../asset/404notFound.png'
import './notFound.css'

const NotFound = () => (
  <div className="NotFound">
    <img
      src={notFound}
      alt="not-found"
    />
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
);

export default NotFound;