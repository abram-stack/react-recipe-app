import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import RecipeList from "../components/RecipeList"

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
        {recipes && <RecipeList recipes={recipes} />
        }
      </div>
    </>
  )
}