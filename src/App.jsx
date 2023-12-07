import React, { useEffect, useState } from 'react';
import client from './lib/api/client';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('/projectboard/viewAll');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Project Board</h1>
      {data.map((datas)=>(
        datas.title
      ))}
    </div>
  );
};

export default App;