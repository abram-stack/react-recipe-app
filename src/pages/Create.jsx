import { useEffect, useRef, useState } from 'react'
import './create.css'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Create() {
  const [title, setTitle] = useState('')
  const [newIngredients, setNewIngredients] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState('')
  const [time, setTime] = useState('')

  const ingredientInput = useRef(null)
  const navigate = useNavigate()

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const { mode } = useTheme()

  const modeClass = mode === 'dark' ? 'dark' : '' 

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])
  
   function handleSubmit(e) {
     e.preventDefault()

     // postData(returned from useFetch) will trigger useEffect (set the options state)
     postData({ title, ingredients, method, cookingTime: time + ' minutes' })
     setTitle('')
     setNewIngredients('')
     setIngredients([])
     setMethod('')
     setTime('')
   }
  
  function handleAddIngredients(e) {
    e.preventDefault()
    const ing = newIngredients.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
      setNewIngredients('') 
    } else (
      console.log('already there')
    )

    ingredientInput.current.focus()
  }
  return (
    <>
      <div className={`create-container ${modeClass}`}>
        <h2>Create Recipe</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Title:</span>
            <input
              type='text'
              placeholder='enter title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            <span>Insert Ingredients:</span>
            <div className='ingredients-container'>
              <input
                type='text'
                placeholder='add ingredients'
                value={newIngredients}
                onChange={(e) => setNewIngredients(e.target.value)}
                ref={ingredientInput}
              />
              <button onClick={handleAddIngredients} className='btn'>
                add
              </button>
            </div>
            <p>current ingredients:
              {ingredients.map((ing) => <em key={ing}>  {ing}, </em>) }
            </p>
          </label>

          <label>
            <span>Cooking Time:</span>
            <input
              type='number'
              placeholder='enter in minutes'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>

          <label>
            <span>Method:</span>
            <textarea
              value={method}
              placeholder='preparation and how to cook'
              onChange={(e) => setMethod(e.target.value)}
            />
          </label>

          <button className='btn btn-submit'>Create Recipe</button>
        </form>
      </div>
    </>
  )  
}
