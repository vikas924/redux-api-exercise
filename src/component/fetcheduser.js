import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='container'>
      <h1>Users</h1>
    <div className='users'>
      {users.map((user) => (
        <div key={user.id.value}>
          <img src={user.picture.large} alt="" />
          <div>
          {user.name.title} {user.name.first} {user.name.last}

          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FetchedUsers;