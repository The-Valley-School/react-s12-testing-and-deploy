import './App.scss';
import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import TogglablePage from './pages/TogglablePage';

function App() {
  return (
    <div className='App'>
      <h1>Hola amigos!</h1>

      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
