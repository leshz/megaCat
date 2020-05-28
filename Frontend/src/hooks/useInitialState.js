// This is a Custom Hooks, separating the logic of the components to this function
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [listUsers, setUsers] = useState({
    users: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return listUsers;
};

export default useInitialState;
