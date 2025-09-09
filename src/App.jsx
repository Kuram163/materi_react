import Header from '../component/header'
import Hero from '../component/Hero'
import Footer from '../component/footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Tabel from '../component/tabel'
import { StrictMode } from 'react'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Tabel/>}/>
    </Routes>
  )
}

export default App
