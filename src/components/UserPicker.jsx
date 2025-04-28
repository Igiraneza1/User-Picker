// UserPicker.jsx
import React, { useState, useEffect, useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

function UserPicker() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFavoriteUser } = useContext(FavoriteUserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (

    <div>
      <h2>Pick Your Favorite User</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setFavoriteUser({ name: user.name, email: user.email })}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPicker;
