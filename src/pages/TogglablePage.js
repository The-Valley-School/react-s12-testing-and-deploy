import Togglable from '../components/Togglable/Togglable';

const TogglablePage = () => {
  return (
    <div>
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
};

export default TogglablePage;
