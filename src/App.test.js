import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('search the page title (h1)', () => {
    render(<App />);
    const title = screen.getByText('Prueba de testing');
    expect(title).toBeInTheDocument();
  });
});
