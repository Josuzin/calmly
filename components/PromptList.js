// pages/index.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const HomePage = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('/api/prompts');
        setPrompts(response.data);
      } catch (error) {
        console.error('Failed to fetch prompts:', error);
      }
    };
    fetchPrompts();
  }, []);

  return (
    <div>
      <h1>Prompts</h1>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt._id}>
            <Link href={`/prompt/${prompt._id}`}>
              <a>{prompt.prompt}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
