// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.prompts.map((prompt) => (
                <li key={prompt._id}>
                  <Link to={`/journal/${prompt._id}`}>{prompt.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
