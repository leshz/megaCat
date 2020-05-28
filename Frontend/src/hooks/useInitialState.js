// This is a Custom Hooks, separating the logic of the components to this function
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [dataInfo, setDataInfo] = useState({
    users: [],
    exams: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setDataInfo(data));
  }, []);
  console.log(dataInfo);
  return dataInfo;
};

export default useInitialState;
