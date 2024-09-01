import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PublicPostsPage from './pages/PublicPostsPage';
import LandingPage from './pages/LandingPage';

const a = ['jyoti', 'buddu', 'sampu'];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/public-posts' element={<PublicPostsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App