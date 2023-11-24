import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Create from './pages/Create'
import Search from './pages/Search';
import Recipe from './pages/Recipe'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='create' element={<Create/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='recipe/:id' element={<Recipe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
