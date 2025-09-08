import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email) => {
    console.log('Logging in with email:', email);
    setEmail(email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log('Logging out');
    setEmail('');
    setIsLoggedIn(false);
  };

  // Log state untuk debugging
  useEffect(() => {
    console.log('Auth state:', { email, isLoggedIn });
  }, [email, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ email, setEmail, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);