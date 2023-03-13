import './App.scss';
import React, { useEffect } from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import TogglablePage from './pages/TogglablePage';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [images, setImages] = React.useState([]);

  // Ask the api images
  useEffect(() => {
    const options = { headers: { Authorization: API_KEY } };
    const finalUrl = API_URL + '?query=car';
    fetch(finalUrl, options)
      .then((data) => data.json())
      .then((dataParsed) => {
        setImages(dataParsed.photos);
      });
  }, []);

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

      <p>Imágenes:</p>
      {images.map((image) => (
        <img key={image.id} src={image.src.small} />
      ))}
    </div>
  );
}

export default App;
