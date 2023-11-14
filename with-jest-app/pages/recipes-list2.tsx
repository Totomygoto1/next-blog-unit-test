import { recipeList } from './recipeList.js';
import { useState } from 'react';

const Recipes2 = () => {
  const [posts, setPosts] = useState(recipeList);

  return (
    <>
      <h3>
        <strong>Recipes 2</strong>
      </h3>
      const [posts, setPosts] = useState([]);
      {posts.map((post, index) => (
        <p key={index}>
          {post.idMeal} {post.strMeal}
        </p>
      ))}
    </>
  );
};

export default Recipes2;
