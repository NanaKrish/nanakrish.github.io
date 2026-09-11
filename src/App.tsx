import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Education from './pages/Education'
import Research from './pages/Research'
import Experience from './pages/Experience'
import Miscellaneous from './pages/Miscellaneous'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/research" element={<Research />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
      </Routes>
    </Layout>
  )
}

export default App