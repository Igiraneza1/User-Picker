// FavoriteUserContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const FavoriteUserContext = createContext();

export function FavoriteUserProvider({ children }) {
  const [favoriteUser, setFavoriteUser] = useState(null);

  // Load from localStorage on start
  useEffect(() => {
    const storedUser = localStorage.getItem('favoriteUser');
    if (storedUser) {
      setFavoriteUser(JSON.parse(storedUser));
    }
  }, []);

  // Save to localStorage when favoriteUser changes
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem('favoriteUser');
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
}
