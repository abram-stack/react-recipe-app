import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container'>
        <Link to='/' className='site-logo'>#Cooking App</Link>
      <nav>
        <Link to='create' className='create-btn'>Create Recipe</Link>
      </nav>
    </header>
  )
}
