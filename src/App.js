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
