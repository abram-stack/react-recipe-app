import { Link } from 'react-router-dom'
import './RecipeList.css'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function RecipeList({ recipes }) {

  const { mode } = useTheme()

  const modeClass = mode === 'dark' ? 'dark' : ''

  if(recipes.length === 0){
    return (
      <div className='container'>
        <h1>No recipes to load...</h1>
      </div>
    )
  }

  return (
    <>
      <div className={`recipe-list ${modeClass}`}>
        {recipes.map(recipe => (
          <div className='card' key={recipe.id}> 
            <h3 className='recipe--title'>{recipe.title}</h3>
            <p>{recipe.cookingTime} cooking time</p>
            <div className='recipe--info'>{recipe.method.substring(0, 100)} ...</div>
            <Link to={`recipe/${recipe.id}`} className='btn'>Cook this </Link>
          </div>
        ))}
      </div>
    </>
  )
}
