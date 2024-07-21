import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {
  return (
    <nav>
      <Link to="/headlines">Headlines </Link>
      <Link to="/business">Business</Link>
      <Link to="/entertainment">Entertainment</Link>
      <Link to="/general">General</Link>
      <Link to="/sports">Sports</Link>
    </nav>
  );
};

export default Nav;
