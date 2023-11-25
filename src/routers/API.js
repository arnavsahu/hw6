import React, { useState, useEffect } from 'react';

export default function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
      })
  }, []);

  return (
    <div>
      <h1>API Consumption Page</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

