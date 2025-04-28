
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
      <h2 className='bg-orange-500 p-3 text-center font-bold text-xl'>Pick Your Favorite User</h2>
      <ul className='list-disc list-inside p-3'>
        {users.length === 0 && <p>No users found.</p>}
        {users.length > 0 && <p className='font-bold m-5'>Click on a user to select your favorite:</p>} 
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setFavoriteUser({ id:user.id, name: user.name, email: user.email })}
          >
            <strong>Id: </strong> {user.id}<br/> 
            <strong>Name:</strong> {user.name}<br/> 
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPicker;
