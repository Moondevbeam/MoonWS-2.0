import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from '../api/FirebaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false); // Aggiungi lo stato di autenticazione

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setAuthenticated(true); // Imposta lo stato a true quando l'utente è autenticato
      } else {
        setUser(null);
        setAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
