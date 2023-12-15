import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../hooks/useTheme'

export default function Header() {

  const { mode, changeMode } = useTheme()


  function toggleMode() {
    changeMode( mode === 'light' ? 'dark' : 'light')
  }

  return (
    <header className='container'>
      <Link to='/' className='site-logo'>#Cooking App</Link>
      <nav>
        <button onClick={ toggleMode }>{mode}</button>
        <SearchBar/>
        <Link to='create' className='create-btn'>Create Recipe</Link>
      </nav>
    </header>
  )
}
