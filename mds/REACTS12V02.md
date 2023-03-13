# Video 02 - Primer test y coverage

En este vídeo hemos realizado algunos test para el componente Note.js:

```jsx
import './Note.scss';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';

  return (
    <div className={note.important ? 'note note--important' : 'note'}>
      <p className='note__text'>{note.content}</p>
      <button onClick={toggleImportance}>{label}</button>
    </div>
  );
};

export default Note;
```

Los test (Note.test.js) han quedado así:

```jsx
import { render } from '@testing-library/react';
import Note from './Note';

describe('Note component', () => {
  let component;
  let mockNote;
  let mockFunction;

  beforeEach(() => {
    mockNote = {
      id: 1,
      content: 'Poner una lavadora',
      important: false,
    };
    mockFunction = () => console.log('Mock');
    component = render(<Note note={mockNote} toggleImportance={mockFunction}></Note>);
  });

  test('Component render content received in props', () => {
    expect(component.container).toHaveTextContent(mockNote.content);
  });

  test('Button should show make important text', () => {
    expect(component.container).toHaveTextContent('make important');
  });

  test('Button should show make NOT important text', () => {
    mockNote.important = true;
    component = render(<Note note={mockNote} toggleImportance={mockFunction}></Note>);
    expect(component.container).toHaveTextContent('make not important');
  });
});
```

También hemos creado un comando en el package.json que nos permite ver la cobertura de nuestros tests:

```jsx
"test:coverage": "react-scripts test --watchAll=false --coverage",
```

En consola:

![Untitled](/mds/assets/Untitled.png)

Y también en el fichero ./coverage/lcov-report/index.html:

![Untitled](/mds/assets/Untitled%201.png)

