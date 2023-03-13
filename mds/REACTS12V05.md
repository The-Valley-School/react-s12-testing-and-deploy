# Video 05 - HashRouter para despliegues

En este vídeo hemos añadido un router a nuestra aplicación:

```jsx
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
```

Y hemos comprobado que esto nos puede causar errores a la hora de desplegar, ya que nuestro servidor (github pages) no es capaz de resolver correctamente las rutas.

Para resolverlo hemos cambiado el BrowserRouter por un HashRouter:

<https://reactrouter.com/en/main/router-components/hash-router>

El cual genera las rutas con una almohadilla # para que podamos solventar el problema.

