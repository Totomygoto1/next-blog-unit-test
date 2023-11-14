import { recipeData } from './recipeData.js';
import { useState } from 'react';

const Recipe2 = () => {
  const [posts, setPosts] = useState(recipeData);

  return (
    <>
      <h3>
        <strong>Recipe 2</strong>
      </h3>

      {posts.map((post, index) => (
        <p key={index}>
          {post.strMeasure1} {post.strIngredient1}
          {post.strInstructions}
        </p>
      ))}
    </>
  );
};

export default Recipe2;
