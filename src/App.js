// App.jsx
import React from 'react';
import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div >
        <UserPicker />
        <UserDisplay />
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
