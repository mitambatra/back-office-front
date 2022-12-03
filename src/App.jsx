import './App.css';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import AddLaw from './components/AddLaw';
import RemoveLaw from './components/RemoveLaw';
import UpdateLaw from './components/UpdateLaw';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/add-law' element={<AddLaw />} />
            <Route path='/update-law' element={<UpdateLaw />} />
            <Route path='/remove-law' element={<RemoveLaw />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div >
  )
}

export default App