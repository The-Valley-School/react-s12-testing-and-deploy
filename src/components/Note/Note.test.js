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
