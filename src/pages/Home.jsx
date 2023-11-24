import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export default function Home() {
  const [url, setUrl] = useState('http://localhost:3000/recipes')

  const {data:recipes, isLoading, error } = useFetch(url)

  if (isLoading) {
    return <h1>Loading the recipes...</h1>
  }
  if (error) {
    return <h1>Error: {error.message }</h1>
  }

  return (
    <>
      <div className="homepage container">
        {recipes && recipes.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )) }
      </div>
    </>
  )
}