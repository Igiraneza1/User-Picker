
import React, { useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

function UserDisplay() {
  const { favoriteUser, setFavoriteUser } = useContext(FavoriteUserContext);

  if (!favoriteUser) {
    return <p className='font-bold'>No favorite user selected yet.</p>;
  }

  return (
    <div >
      <h3>Your Favorite User:</h3>
      <p><strong>Id:</strong> {favoriteUser.id}</p>
      <p><strong>Name:</strong> {favoriteUser.name}</p>
      <p><strong>Email:</strong> {favoriteUser.email}</p>
      
      <button className='bg-slate-400 p-3 m-3 rounded-md' onClick={() => setFavoriteUser(null)}>
        Clear Favorite
      </button>
    </div>
  );
}

export default UserDisplay;
