# Sesión 12 - Testing y despliegues

# VIDEO 01 - Jest configuración

Jest es un marco de pruebas (testing framework) popular para aplicaciones de JavaScript, incluyendo proyectos de React. Jest está desarrollado y mantenido por Facebook, y se utiliza habitualmente en proyectos hechos con React aunque también puede usarse para proyectos Vue, Angular o javascript vanilla.

<https://jestjs.io/es-ES/>

Por otro lado, React Testing Library es una biblioteca de pruebas para React que ayuda a escribir pruebas unitarias y de integración para sus componentes de React de una manera más accesible y amigable para el usuario.

En lugar de interactuar directamente con el DOM, React Testing Library se centra en simular las interacciones del usuario con su aplicación en un entorno de prueba, como si se estuvieran utilizando en un navegador web real. Esto significa que las pruebas se centran en los comportamientos y resultados esperados de los componentes de React, en lugar de en los detalles de implementación.

<https://testing-library.com/docs/react-testing-library/intro/>

Ambas librerías vienen configuradas por defecto en un proyecto creado con Create React App, y para ejecutar los test tendríamos que lanzar este comando por consola:

```jsx
npm run test
```

En este vídeo hemos realizado tests para el componente App.js:

```jsx
import './App.scss';
import React from 'react';
import Note from './components/Note/Note';
import { SAMPLE_NOTES } from './sample-notes';
import Togglable from './components/Togglable/Togglable';

function App() {
  const [notes, setNotes] = React.useState(SAMPLE_NOTES);

  const toggleImportanceOf = (noteId) => {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          important: !note.important,
        };
      }
      return note;
    });

    setNotes(newNotes);
  };

  return (
    <div className='App'>
      <h1>Prueba de testing</h1>

      <h2>Notes:</h2>
      {notes.map((note) => (
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
      ))}

      <h2>Togglable:</h2>
      <Togglable buttonLabel='Oculto'>
        <p>Este es un contenido oculto!</p>
      </Togglable>

      <Togglable buttonLabel='También oculto'>
        <p>Hola amigos</p>
        <p>Esto también es un contenido oculto...</p>
      </Togglable>
    </div>
  );
}

export default App;
```

Los test (App.test.js) han quedado así:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('search the page title (h1)', () => {
    render(<App />);
    const title = screen.getByText('Prueba de testing');
    expect(title).toBeInTheDocument();
  });

  test('search notes title', () => {
    render(<App />);
    const title = screen.getByText('Notes:');
    expect(title).toBeInTheDocument();
  });

  // test can be called IT
  it('search the togglable title', () => {
    render(<App />);
    const title = screen.getByText('Togglable:');
    expect(title).toBeInTheDocument();
  });
});
```

Hemos creado dos comandos en el package.json para que podamos lanzar los test con watch y sin watch:

```jsx
"test": "react-scripts test --watchAll=false",
"test:watch": "react-scripts test",
```

