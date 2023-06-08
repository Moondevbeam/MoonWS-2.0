import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="navbar code border border-primary">
      {!showContacts ? (
        <>
          <Link to="/" className="nav-item btn btn-primary white" aria-label="Home" aria-current={location.pathname === '/' ? 'page' : undefined}>
            Home
          </Link>
          <Link
            to="/projects"
            className="nav-item btn btn-primary white"
            aria-label="Projects"
            aria-current={location.pathname === '/projects' ? 'page' : undefined}
          >
            Projects
          </Link>
          <button onClick={() => setShowContacts(true)} className="nav-item btn btn-primary white" aria-label="Show Contacts">
          Contacts
          </button>
        </>
      ) : (
        <>
          <a href="https://github.com/Moondevbeam" className="nav-item btn btn-primary white" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/moonbeam-dev/" className="nav-item btn btn-primary white" aria-label="LinkedIn">
            LinkedIn
          </a>
          <button onClick={() => setShowContacts(false)} className="nav-item btn btn-primary white" aria-label="Back">
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default BottomNav;





