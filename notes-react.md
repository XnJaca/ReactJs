# Notas sobre Curso de React

- [Notas sobre Curso de React](#notas-sobre-curso-de-react)
- [Que es react?](#que-es-react)
- [Que son los componentes?](#que-son-los-componentes)
- [Crear una app en React](#crear-una-app-en-react)
- [Hola Mundo](#hola-mundo)
- [Ejecutar nuestra aplicacion](#ejecutar-nuestra-aplicacion)
  - [``` yarn dev --host ```](#yarn-dev---host)



# Que es react?
- Es una libreria que nos permite crear aplicaciones.
- Es declarativa
- Eficiente
- Predecible
- Usa Componentes

# Que son los componentes?
Es una pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no.

# Crear una app en React
- Abrir el la terminal, podemos crear la app con dos comandos:
    ```
    yarn create vite
    //Yarn es mas rapido porque instala menos dependecias
    ```
    ``` 
    npx create-react-app
    //Es mas lento porque configura mas dependecias que vite.
    ```

# Hola Mundo
Borramos todo de la carpeta src, y creamos un archivo **main.jsx** y pegamos el siguiente codigo.
```
import React from 'react';
import ReactDom from 'react-dom/client';


//Creamos un componente
function App(){
    return (<h1>Hola Mundo</h1>)
}

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
```

# Ejecutar nuestra aplicacion
``` yarn dev --host ```
---
