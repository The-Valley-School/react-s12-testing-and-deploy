import Note from '../components/Note/Note';
import React from 'react';
import { SAMPLE_NOTES } from '../sample-notes';

const NotesPages = () => {
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
    <div>
      <h2>Notes:</h2>
      {notes.map((note) => (
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
      ))}
    </div>
  );
};

export default NotesPages;
