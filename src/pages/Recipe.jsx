import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`

  const { data: recipe, error, loading } = useFetch(url)

  if (loading) {
    return <h1>Loading ... </h1>
  }
  if (error) {
    return <h1>Error occured {error.message}</h1>
  }

  return (
    <>
      {recipe && (
        <div className='recipe'>
          <h1>{recipe.title}</h1>
          <div className='recipe-info'>
            <p>Cooking time: {recipe.cookingTime}</p>
            <ul>
              {recipe.ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
            </ul>
          </div>
          <p>{recipe.method}</p>
        </div>
      )}
    </>
  )
}
