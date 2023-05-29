import React, { useState } from 'react';
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    const [showContacts, setShowContacts] = useState(false);
    return (
        <div className="navbar code border border-primary">
          {!showContacts ? (
        <>
        <Link to="/" className="nav-item btn btn-primary white tc">Home</Link>
        <Link to="/stack" className="nav-item btn btn-primary white tc">Projects</Link>
        <button onClick={() => setShowContacts(true)} className="nav-item btn btn-primary white tc">Contacts</button>
      </>
          ) : (
            <>
              <a href="https://github.com/Moondevbeam" className="nav-item btn btn-primary white tc">Github</a>
              <a href="https://www.linkedin.com/in/moonbeam-dev/" className="nav-item btn btn-primary white tc">Linkedin</a>
              <button onClick={() => setShowContacts(false)} className="nav-item btn btn-primary white tc">Back</button>
            </>
          )}
        </div>
      );
  };
  

export default BottomNav;




