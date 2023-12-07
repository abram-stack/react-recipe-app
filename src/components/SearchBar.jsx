import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    navigate(`search?q=${query}`)
    setQuery('')
  }


  return (
    <>
      <div className='search-bar--container'>
        <form onSubmit={handleSearch} className='search-bar'>
          <label htmlFor='search'>search:</label>
          <input
            type='text'
            id='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            
          />
        </form>
      </div>
    </>
  )
}
