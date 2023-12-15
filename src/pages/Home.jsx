import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import RecipeList from "../components/RecipeList"
import { useTheme } from "../hooks/useTheme"

export default function Home() {
  const [url, setUrl] = useState('http://localhost:3000/recipes')
  const {data:recipes, isLoading, error } = useFetch(url)
  const { mode } = useTheme()
  
  const modeClass = mode === 'dark' ? 'dark' : ''

  if (isLoading) {
    return <h1>Loading the recipes...</h1>
  }
  if (error) {
    return <h1>Error: {error.message }</h1>
  }

  return (
    <>
      <div className={`homepage container ${modeClass}`}>
        {recipes && <RecipeList recipes={recipes} />
        }
      </div>
    </>
  )
}