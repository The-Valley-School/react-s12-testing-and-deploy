# Video 08 - Ejercicio: Testing y despliegue:

En el siguiente ejercicio deberás crear un proyecto en blanco y añadirle un router que tenga al menos dos páginas:

- Home
- Slides

Recuerda usar en HashRouter para que al desplegar no tengamos problemas.

En la home pintaremos dos valores (usuario y contraseña) que recuperaremos de variables de entorno (.env.local)

![Untitled](/mds/assets/Untitled%208.png)

Y en la página slides pintaremos un slider:

![Untitled](/mds/assets/Untitled%209.png)

Por aquí te dejamos el código del componente Slider:

```jsx
import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className='slider' data-testid='slider-component'>
      <div className='slider__image-container'>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={`slider__image ${index === currentImage ? 'slider__image--visible' : ''}`} />
        ))}
      </div>
      <div className='slider__text-container'>
        <h2 className='slider__title'>{images[currentImage].title}</h2>
        <p className='slider__description'>{images[currentImage].description}</p>
      </div>
      <div className='slider__button-container'>
        <button onClick={handlePrevClick} className='slider__button slider__button--prev'>
          Anterior
        </button>
        <button onClick={handleNextClick} className='slider__button slider__button--next'>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Slider;
```

Y el CSS del componente Slider:

```css
.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.slider__image-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.slider__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slider__image--visible {
  opacity: 1;
}

.slider__text-container {
  margin: 1rem 0;
  text-align: center;
}

.slider__title {
  font-size: 1.5;
}
```

Y unas imágenes para que lo pruebes, puedes usar estas imágenes también para los tests:

```jsx
const images = [
  {
    src: 'https://via.placeholder.com/800x300/FF0000/FFFFFF',
    alt: 'Imagen 1',
    title: 'Título de la imagen 1',
    description: 'Descripción de la imagen 1',
  },
  {
    src: 'https://via.placeholder.com/800x300/00FF00/FFFFFF',
    alt: 'Imagen 2',
    title: 'Título de la imagen 2',
    description: 'Descripción de la imagen 2',
  },
  {
    src: 'https://via.placeholder.com/800x300/0000FF/FFFFFF',
    alt: 'Imagen 3',
    title: 'Título de la imagen 3',
    description: 'Descripción de la imagen 3',
  },
];
```

Debes realizar test para el componente Slider, al menos los siguientes:

```jsx
  test('renders without crashing', () => {
    // TODO
  });

  test('displays the first image on initial render', () => {
    // TODO
  });

  test('changes the displayed image when the "Siguiente" button is clicked', () => {
    // TODO
  });

  test('changes the displayed image when the "Anterior" button is clicked', () => {
    // TODO
  });

  test('displays images with the correct src', () => {
    // TODO
  });
```

Recuerda que debes añadir un describe, un beforeEach con un render… etc

Una vez lo termines debes desplegar la web en Netlify, no olvides añadir las variables de entorno :)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s12-testing-and-deploy>

