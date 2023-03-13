# Video 07 - Variables de entorno

En este vídeo trabajaremos con variables de entorno. Las variables de entornos nos permiten tener variables privadas en nuestro repositorio como por ejemplo el Api Key de acceso a una API.

<https://create-react-app.dev/docs/adding-custom-environment-variables/>

Para añadirlas creamos un fichero .env.local que contendrá nuestras variables y no quedará subido a github:

```jsx
REACT_APP_API_KEY="XXXXXXXXXXXX"
REACT_APP_API_URL="XXXXXXXXXXXX"
```

Añadiremos un fichero .env.template que subiremos a github y contendrá un template con la estructura que deben seguir los desarrolladores a la hora de crear sus .env

```jsx
REACT_APP_API_KEY="PUT HERE YOUR API KEY"
REACT_APP_API_URL="PUT HERE THE API URL"
```

Ahora debemos recuperar el valor de nuestras variables con el objeto proccess.env:

```jsx
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;
```

Como estas variables no quedan subidas al repositorio debemos ir a nuestra plataforma de despliegue, en este caso netlify e indicarle los valores que tendrán:

![Untitled](/mds/assets/Untitled%207.png)

Podrás encontrar la configuración en General → Environment Variables

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s12-testing-and-deploy>

