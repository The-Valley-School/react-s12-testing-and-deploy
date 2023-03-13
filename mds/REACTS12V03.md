# Video 03 - Test con eventos de usuario y precommit

Ahora hemos añadido algunos test que hacen uso de eventos de usuario como click, para ello haremos uso de fireEvent de react testing library:

<https://testing-library.com/docs/dom-testing-library/api-events/>

En nuestro componente Note.js hemos añadido este test:

```jsx
test('call the toggleImportance function when click the button', () => {
  const button = component.getByText('make important');
  fireEvent.click(button);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
```

Y posteriormente, para el componente Togglable.js:

```jsx
import React from 'react';
import './Togglable.scss';

const Togglable = (props) => {
  const [visible, setVisible] = React.useState(false);
  const hideWhenVisible = { display: visible ? 'none' : 'block' };
  const showWhenVisible = { display: visible ? 'block' : 'none' };
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className='togglable'>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className='togglableContent'>
        {props.children}
        <button onClick={toggleVisibility}>Cerrar</button>
      </div>
    </div>
  );
};

export default Togglable;
```

Hemos añadido este este test (Togglable.test.js)

```jsx
import { fireEvent, render } from '@testing-library/react';
import Togglable from './Togglable';

describe('Togglable component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel='SHOW'>
        <p>Hola</p>
      </Togglable>
    );
  });

  test('checks the component is rendering the button', () => {
    expect(component.container).toHaveTextContent('SHOW');
  });

  test('children is hidden on start', () => {
    const div = component.container.querySelector('.togglableContent');
    expect(div).toHaveStyle('display: none');
  });

  test('children is visible when click the button', () => {
    const div = component.container.querySelector('.togglableContent');
    const button = component.getByText('SHOW');

    fireEvent.click(button);

    expect(div).toHaveStyle('display: block');
  });
});
```

