import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'; 
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';
const Navbar = () => {
    const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleLeave = () => {
    setShowDropdown(false);
  };

  const handleLogOut = (navigate) => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User logged out successfully');
      navigate('/');
    }).catch((error) => {
      // An error happened.
      console.error('Error during logout:', error);
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="left">
        <div className="logo">S.P.A.R.K</div>
       
      </div>
      <div className="right">
      <div className="iiitn">IIITN</div>
        <div className="crispr">CRISPR</div>
        <div className="notices">Notices</div>
        <div
          className="dropdown"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Profile
          {showDropdown && (
            <div className="dropdown-content" onMouseEnter={handleHover}>
              <div>Settings</div>
              <div onClick={() => handleLogOut(navigate)}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
