import { useSearchParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch';
import RecipeList from "../components/RecipeList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryFilter = searchParams.get('q')
  
  // json-server for full-text search is using q
  const url = `http://localhost:3000/recipes?q=${queryFilter}` 
  const {data:recipes, isLoading, error } = useFetch(url)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error occured: {error.message}</h1>
  }
  return (
    <>
      <div className="container dark">
        <h1>Search Result for: {queryFilter}</h1>
        { recipes && <RecipeList recipes={recipes}/>}
      </div>
    </>
  )
}