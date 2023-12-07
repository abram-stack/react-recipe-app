import { Link } from 'react-router-dom'
import './RecipeList.css'

import React from 'react'

export default function RecipeList({ recipes }) {

  if(recipes.length === 0){
    return (
      <div className='container'>
        <h1>No recipes to load...</h1>
      </div>
    )
  }
  return (
    <>
      <div className='recipe-list'>
        {recipes.map(recipe => (
          <div className='card' key={recipe.id}> 
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} cooking time</p>
            <div>{recipe.method.substring(0, 100)} ...</div>
            <Link to={`recipe/${recipe.id}`} className='btn'>Cook this </Link>
          </div>
        ))}
      </div>
    </>
  )
}
