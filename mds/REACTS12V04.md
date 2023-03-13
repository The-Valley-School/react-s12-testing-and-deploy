# Video 04 - Desplegando build en Github Pages

En este vídeo hemos utilizado github pages para desplegar nuestro proyecto.

Para ellos, en primer lugar hemos hecho un build de nuestro proyecto con el comando:

```jsx
npm run build
```

Esto nos crea una carpeta build en la raíz de nuestro proyecto, la cual hemos renombrado por /docs para poder usarlo en github pages:

![Untitled](/mds/assets/Untitled%202.png)

Como hemos visto, esto nos causa problemas ya que github pages no despliega en la raíz del dominio, sino en una subcarpeta, en nuestro caso:

<https://the-valley-school.github.io/react-s12-testing-and-deploy/>

Para que todo funcione correctamente debemos añadir la propiedad homepage en el package.json:

```jsx
{
  "name": "react-s12-testing-and-deploy",
  "version": "0.1.0",
  "private": true,
  "homepage": ".",
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
...
```

Y volver a realzar un build, re-nombrar por docs, realizamos un commit y un push para que github pages lo despliegue de nuevo.

