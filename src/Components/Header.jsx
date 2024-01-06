import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">As Sunnah</button>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/Register'>Register</Link>
      </div>
    </div>
  );
};

export default Header;
