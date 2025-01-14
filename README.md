# Pokemon-Game
- [Pokemon-Game](#pokemon-game)
  - [Reto 1](#reto-1)
    - [1. Crea y configura tu repositorio de Github para la aplicación](#1-crea-y-configura-tu-repositorio-de-github-para-la-aplicación)
    - [2. Crea un proyecto en VueJS](#2-crea-un-proyecto-en-vuejs)
      - [¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?](#para-qué-sirve-vue-router-pinia-vitest-eslint-y-prettier)
      - [Para continuar, ejecutamos los comandos y comprobamos que nuestra aplicación VueJS funciona correctamente.](#para-continuar-ejecutamos-los-comandos-y-comprobamos-que-nuestra-aplicación-vuejs-funciona-correctamente)
      - [¿Qué es Composition API y en qué se diferencia de Option API en VueJS?](#qué-es-composition-api-y-en-qué-se-diferencia-de-option-api-en-vuejs)
      - [¿Qué es screaming architecture y qué ventajas tiene?](#qué-es-screaming-architecture-y-qué-ventajas-tiene)
    - [Ahora, vamos a modificar y borrar todo lo que no necesitamos que nos ha creado de forma automática VueJS](#ahora-vamos-a-modificar-y-borrar-todo-lo-que-no-necesitamos-que-nos-ha-creado-de-forma-automática-vuejs)
      - [Vaciar App.vue](#vaciar-appvue)
      - [Recuerda que vamos a utilizar TS en lugar de JS, ¿cómo se lo indicamos a Vue?](#recuerda-que-vamos-a-utilizar-ts-en-lugar-de-js-cómo-se-lo-indicamos-a-vue)
      - [Añade un mensaje de Hola mundo en App.vue](#añade-un-mensaje-de-hola-mundo-en-appvue)
      - [En la carpeta de assets, borra los archivos base.css y logo.svg](#en-la-carpeta-de-assets-borra-los-archivos-basecss-y-logosvg)
      - [Cambia el nombre de main.css de la carpeta assets a styles.css y modifica la ruta en el archivo main.ts para que funcione correctamente nuestra hoja de estilo](#cambia-el-nombre-de-maincss-de-la-carpeta-assets-a-stylescss-y-modifica-la-ruta-en-el-archivo-maints-para-que-funcione-correctamente-nuestra-hoja-de-estilo)
      - [Ejecuta el comando npm run dev y muestra el resultado](#ejecuta-el-comando-npm-run-dev-y-muestra-el-resultado)
    - [Para realizar nuestra aplicación en lugar del framework de CSS Bootstrap, vamos a usar Tailwind CSS, ¿lo conoces?](#para-realizar-nuestra-aplicación-en-lugar-del-framework-de-css-bootstrap-vamos-a-usar-tailwind-css-lo-conoces)
      - [Configura el proyecto para hacer uso de Tailwind CSS.](#configura-el-proyecto-para-hacer-uso-de-tailwind-css)
      - [Muestra el nuevo resultado del mensaje Hola mundo que creamos anteriormente, ¿se parece a esto?](#muestra-el-nuevo-resultado-del-mensaje-hola-mundo-que-creamos-anteriormente-se-parece-a-esto)
  - [Reto 2](#reto-2)
    - [Anteriormente, ya habíamos borrado y modificado un par de archivos, pero, ¿cumplimos con la filosofía de screaming architecture? Te digo la respuesta, no. Por tanto, vamos a seguir modificando nuestra estructura del proyecto:](#anteriormente-ya-habíamos-borrado-y-modificado-un-par-de-archivos-pero-cumplimos-con-la-filosofía-de-screaming-architecture-te-digo-la-respuesta-no-por-tanto-vamos-a-seguir-modificando-nuestra-estructura-del-proyecto)
      - [Sin miedo, borramos por completo la carpeta de components.](#sin-miedo-borramos-por-completo-la-carpeta-de-components)
      - [Crea una nueva carpeta dentro de src llamada modules, y dentro de esta una llamada pokemon, de tal forma que tendríamos src/modules/pokemon.](#crea-una-nueva-carpeta-dentro-de-src-llamada-modules-y-dentro-de-esta-una-llamada-pokemon-de-tal-forma-que-tendríamos-srcmodulespokemon)
    - [Dentro de la carpeta de pokemon vamos a tener todos los archivos que estén relacionados con nuestro juego de pokemon. La mayor parte de nuestro código irá dentro de esta carpeta.](#dentro-de-la-carpeta-de-pokemon-vamos-a-tener-todos-los-archivos-que-estén-relacionados-con-nuestro-juego-de-pokemon-la-mayor-parte-de-nuestro-código-irá-dentro-de-esta-carpeta)
      - [Creamos una nueva carpeta llamada composables, ¿qué es un composable en VueJS y cual es la nomenclatura común que se utiliza en los ficheros que contiene?](#creamos-una-nueva-carpeta-llamada-composables-qué-es-un-composable-en-vuejs-y-cual-es-la-nomenclatura-común-que-se-utiliza-en-los-ficheros-que-contiene)
      - [Creamos una nueva carpeta llamada components.](#creamos-una-nueva-carpeta-llamada-components)
      - [Creamos una carpeta de views.](#creamos-una-carpeta-de-views)
    - [Dentro de la carpeta de views, vamos a crear el archivo PokemonGame.vue, ¿cuál crees que será la lógica que irá dentro de este archivo?](#dentro-de-la-carpeta-de-views-vamos-a-crear-el-archivo-pokemongamevue-cuál-crees-que-será-la-lógica-que-irá-dentro-de-este-archivo)
      - [Genera la estructura básica de vue dentro de este archivo. Recuerda que estamos trabajando con Typescript y Composition API.](#genera-la-estructura-básica-de-vue-dentro-de-este-archivo-recuerda-que-estamos-trabajando-con-typescript-y-composition-api)
      - [¿Conoces algún atajo para generar esta estructura de forma automática? ¿Con qué extensión y cuál?](#conoces-algún-atajo-para-generar-esta-estructura-de-forma-automática-con-qué-extensión-y-cuál)

## Reto 1

### 1. Crea y configura tu repositorio de Github para la aplicación

![RepositoriGithub](img/ImageRepository.png)

### 2. Crea un proyecto en VueJS

![CreandoProyecto](img/CreatingProject.png)

#### ¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?
- Vue Router: Permite la creacion de aplicaciones de pagina unica (SAP), añadiendo un router que permite cambiar entre componentes.
  
- Pinia: Es un similar al contexto en react, te permite compartir informacion entre componentes o paginas(usando SAP).
  
- Vitest: Te permite la creacion de tests.

- ESLint: Ayuda a mejorar la calidad del codigo, creando recomendaciones en zonas de codigo basura, para mejorarlo.

- Prettier: Ayuda con el formateo de documentos de vue.

#### Para continuar, ejecutamos los comandos y comprobamos que nuestra aplicación VueJS funciona correctamente.

![FirstStart](img/first_start_image.png)

#### ¿Qué es Composition API y en qué se diferencia de Option API en VueJS?

Composition API es mas novedoso, y es una manera de usar VueJS funcional, similar a como en otros frameworks, como react, usando referencias en memoria o objetos reactivos.

Mientras que Option API es la manera tradicional de VueJS, esta mas estrcuturado, pero tiene algunas limitaciones respecto a Composition API.

#### ¿Qué es screaming architecture y qué ventajas tiene?

La "screaming architecture", signficaria como estructuras que gritan su significado, estas estan divididas de una manera que cada parte "grita" (o dice) lo que es. Un ejemplo, seria en VueJS, el paquete components, grita lo que es, que tiene componentes.

Esta architectura es muy util, ya que permite, sin mucho esfuerzo, entender la estructura de un proyecto.

### Ahora, vamos a modificar y borrar todo lo que no necesitamos que nos ha creado de forma automática VueJS

#### Vaciar App.vue
![AppVueVacia](img/vueAppClean.png)

#### Recuerda que vamos a utilizar TS en lugar de JS, ¿cómo se lo indicamos a Vue?
Como vemos en la foto anterior, podemos observar que donde pone lang, tenemos igualado a "ts", eso significa que usara TypeScript para los scripts.

#### Añade un mensaje de Hola mundo en App.vue
![HellowWorld!](img/helloWorld.png)

#### En la carpeta de assets, borra los archivos base.css y logo.svg

![AssestsClean](img/cleanAssests.png)

#### Cambia el nombre de main.css de la carpeta assets a styles.css y modifica la ruta en el archivo main.ts para que funcione correctamente nuestra hoja de estilo
![styles.css](img/styles-preview.png)

#### Ejecuta el comando npm run dev y muestra el resultado
![HelloWorld2](img/helloWorld2.png)

### Para realizar nuestra aplicación en lugar del framework de CSS Bootstrap, vamos a usar Tailwind CSS, ¿lo conoces?
Si, es como bootstrap, un framework que ayuda a crear el css de la pagina.

#### Configura el proyecto para hacer uso de Tailwind CSS.
Instalar Tailwind Css:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
![TailwindConfig](img/tailwind-configuration-screenshot.png)

Crear css ./src/index.css y añadir
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

E importarlo a src/main.js
main.js:
```ts
import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
createApp(App).mount('#app')
```

Modificar la configuracion de tailwind en tailwind.config.js
```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,vue,ts}',
    './index.html',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Muestra el nuevo resultado del mensaje Hola mundo que creamos anteriormente, ¿se parece a esto?
Sí, igualito
![Reto1Final](img/reto_1.png)

## Reto 2
 
### Anteriormente, ya habíamos borrado y modificado un par de archivos, pero, ¿cumplimos con la filosofía de screaming architecture? Te digo la respuesta, no. Por tanto, vamos a seguir modificando nuestra estructura del proyecto:

#### Sin miedo, borramos por completo la carpeta de components.
![DeletedComponents](img/deletedComponents.png)

#### Crea una nueva carpeta dentro de src llamada modules, y dentro de esta una llamada pokemon, de tal forma que tendríamos src/modules/pokemon.
![CreateModule](img/createModules.png)

### Dentro de la carpeta de pokemon vamos a tener todos los archivos que estén relacionados con nuestro juego de pokemon. La mayor parte de nuestro código irá dentro de esta carpeta.

#### Creamos una nueva carpeta llamada composables, ¿qué es un composable en VueJS y cual es la nomenclatura común que se utiliza en los ficheros que contiene?
Los composables son utilidades que van a ser reutilizadas en distitnas partes del codigo, un ejemplo serian las llamadas a la API.

![CreateComposables](img/createComposable.png)

#### Creamos una nueva carpeta llamada components.
![CreateComponents](img/createComponents.png)

#### Creamos una carpeta de views.
![CreateViews](img/createViews.png)

### Dentro de la carpeta de views, vamos a crear el archivo PokemonGame.vue, ¿cuál crees que será la lógica que irá dentro de este archivo?
Dentro de este archivo estara la vista principal, que consinstira de cada componente.

![CreateView](img/createView.png)
#### Genera la estructura básica de vue dentro de este archivo. Recuerda que estamos trabajando con Typescript y Composition API.
![BasicStructure](img/basicStructure.png)
#### ¿Conoces algún atajo para generar esta estructura de forma automática? ¿Con qué extensión y cuál?
Si, poniendo "vbase-3-ts-setup" generara la estructura basica usando typescript y poniendo el setup.