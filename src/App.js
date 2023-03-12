import './App.scss';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import TogglablePage from './pages/TogglablePage';

function App() {
  return (
    <div className='App'>
      <h1>Prueba de testing</h1>

      <BrowserRouter>
        <div className='links'>
          <Link to='/'>HomePage</Link>
          <br />
          <Link to='/notes'>NotesPage</Link>
          <br />
          <Link to='/toggles'>TogglablePage</Link>
          <br />
        </div>

        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/notes' element={<NotesPage></NotesPage>}></Route>
          <Route path='/toggles' element={<TogglablePage></TogglablePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
