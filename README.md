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
    - [Usando la etiqueta  de HTML, vamos a dividir nuestro template. Tendremos:](#usando-la-etiqueta--de-html-vamos-a-dividir-nuestro-template-tendremos)
      - [Una sección que tenga un mensaje que indique al usuario que: Espere por favor y Cargando Pokémons. De tal manera que:](#una-sección-que-tenga-un-mensaje-que-indique-al-usuario-que-espere-por-favor-y-cargando-pokémons-de-tal-manera-que)
      - [¿Para qué sirven las clases que hemos añadido?](#para-qué-sirven-las-clases-que-hemos-añadido)
    - [Saca una captura de como se ve actualmente nuestra aplicación. ¿No ves los cambios? Algo se te olvida... ¿qué es? Indica los archivos que has tenido que modificar.](#saca-una-captura-de-como-se-ve-actualmente-nuestra-aplicación-no-ves-los-cambios-algo-se-te-olvida-qué-es-indica-los-archivos-que-has-tenido-que-modificar)
      - [Si todo ha ido bien, tu aplicación tendría que verse tal que así:](#si-todo-ha-ido-bien-tu-aplicación-tendría-que-verse-tal-que-así)
      - [Utilizando una directiva de VueJS, ¿cómo ocultaríamos esta sección por completo?](#utilizando-una-directiva-de-vuejs-cómo-ocultaríamos-esta-sección-por-completo)
    - [Ahora, vamos a crear otra nueva sección igual a la anterior pero que muestre al usuario el mensaje: ¿Cuál es este Pokémon?](#ahora-vamos-a-crear-otra-nueva-sección-igual-a-la-anterior-pero-que-muestre-al-usuario-el-mensaje-cuál-es-este-pokémon)
      - [Añade las mismas clases que utilizamos en la sección anterior.](#añade-las-mismas-clases-que-utilizamos-en-la-sección-anterior)
      - [En esta sección añadiremos dos componentes: Pokemon Picture y Pokemon Options, ¿para qué crees que sirven? ¿Te aventuras a intentar averiguar cual será la lógica que implementemos en ellos?](#en-esta-sección-añadiremos-dos-componentes-pokemon-picture-y-pokemon-options-para-qué-crees-que-sirven-te-aventuras-a-intentar-averiguar-cual-será-la-lógica-que-implementemos-en-ellos)
  - [Reto 3](#reto-3)
    - [PokemonPicture.vue](#pokemonpicturevue)
      - [Lo que vamos a hacer en este componente es importar directamente desde PokeApi una imagen de un pokemon (Ditto para ser más exactos).](#lo-que-vamos-a-hacer-en-este-componente-es-importar-directamente-desde-pokeapi-una-imagen-de-un-pokemon-ditto-para-ser-más-exactos)
      - [Siguiendo la misma forma que en PokemonGame.vue de las secciones, en este componente nos crearemos una sección que contendrá una imagen del pokemon Ditto. (No es necesario realizar la conexión directamente a la API, copia y pega la url de la imagen y muéstrala).](#siguiendo-la-misma-forma-que-en-pokemongamevue-de-las-secciones-en-este-componente-nos-crearemos-una-sección-que-contendrá-una-imagen-del-pokemon-ditto-no-es-necesario-realizar-la-conexión-directamente-a-la-api-copia-y-pega-la-url-de-la-imagen-y-muéstrala)
      - [El resultado de todos los pasos anteriores debe ser el siguiente:](#el-resultado-de-todos-los-pasos-anteriores-debe-ser-el-siguiente)
      - [Ahora bien, nosotros queremos que inicialmente la imagen de nuestro Pokémon esté completamente oculta como en la imagen del resultado final, ¿cómo hacemos esto? utilizando una clase de Tailwind CSS llamada brightness-0. Comprueba que la imagen de tu Pokémon ahora mismo esté completamente negra. Añade también la clase h-\[200px\], ¿para qué sirve?](#ahora-bien-nosotros-queremos-que-inicialmente-la-imagen-de-nuestro-pokémon-esté-completamente-oculta-como-en-la-imagen-del-resultado-final-cómo-hacemos-esto-utilizando-una-clase-de-tailwind-css-llamada-brightness-0-comprueba-que-la-imagen-de-tu-pokémon-ahora-mismo-esté-completamente-negra-añade-también-la-clase-h-200px-para-qué-sirve)
    - [PokemonOptions.vue](#pokemonoptionsvue)
      - [En una nueva sección vamos a "simular" lo que serían las opciones de los Pokémon. Esto lo vas a hacer creando una lista de HTML tal y como se muestra en la imagen final.](#en-una-nueva-sección-vamos-a-simular-lo-que-serían-las-opciones-de-los-pokémon-esto-lo-vas-a-hacer-creando-una-lista-de-html-tal-y-como-se-muestra-en-la-imagen-final)
      - [Ahora, mediante clases css de tailwind, dale aspecto de botones a esa lista. Recuerda que para aplicar clases de Tailwind desde la etiqueta de styles tendrás que usar @apply. ¿Lo conseguiste?](#ahora-mediante-clases-css-de-tailwind-dale-aspecto-de-botones-a-esa-lista-recuerda-que-para-aplicar-clases-de-tailwind-desde-la-etiqueta-de-styles-tendrás-que-usar-apply-lo-conseguiste)
    - [El color de fondo de nuestra aplicación es: #f1f1f1, para aplicarlo, ¿dónde debes colocar el código css correspondiente? aplícalo y muestra los cambios.](#el-color-de-fondo-de-nuestra-aplicación-es-f1f1f1-para-aplicarlo-dónde-debes-colocar-el-código-css-correspondiente-aplícalo-y-muestra-los-cambios)
  - [Reto 4](#reto-4)
    - [Animations.css](#animationscss)
      - [Copiamos las cosas](#copiamos-las-cosas)
    - [Vamos a hacer que nuestro juego funcione. Empecemos la lógica de nuestra aplicación:](#vamos-a-hacer-que-nuestro-juego-funcione-empecemos-la-lógica-de-nuestra-aplicación)
      - [En primer lugar vamos a crear un archivo que vamos a llamar usePokemonGame.ts dentro de la carpeta de composables.](#en-primer-lugar-vamos-a-crear-un-archivo-que-vamos-a-llamar-usepokemongamets-dentro-de-la-carpeta-de-composables)
      - [Crear el enum](#crear-el-enum)
      - [Crear el archivo barril](#crear-el-archivo-barril)
      - [Volvemos a nuestro archivo usePokemonGame.ts:](#volvemos-a-nuestro-archivo-usepokemongamets)
      - [¿Qué es lo que estamos haciendo con el código hasta ahora?](#qué-es-lo-que-estamos-haciendo-con-el-código-hasta-ahora)
      - [Ahora, vamos a conectarnos con nuestra PokeApi para poder recuperar una lista con los pokemons que vamos a usar en nuestro juego. Para ello, vamos a utilizar Axios. ¿Qué es Axios? ¿Lo has usado antes?](#ahora-vamos-a-conectarnos-con-nuestra-pokeapi-para-poder-recuperar-una-lista-con-los-pokemons-que-vamos-a-usar-en-nuestro-juego-para-ello-vamos-a-utilizar-axios-qué-es-axios-lo-has-usado-antes)
      - [Instalamos Axios](#instalamos-axios)
      - [Creamos PokemonAPI](#creamos-pokemonapi)
      - [Modificamos usePokemonGame](#modificamos-usepokemongame)
      - [Lo añadimos a pokemonGame](#lo-añadimos-a-pokemongame)
      - [Creamos el tipo de la respuesta](#creamos-el-tipo-de-la-respuesta)
      - [Modificamos usePokemonGame para tipar el objeto](#modificamos-usepokemongame-para-tipar-el-objeto)
      - [Cambiamos el log a el results](#cambiamos-el-log-a-el-results)
  - [Reto 5](#reto-5)
    - [Vamos a modificar el método getPokemons que hemos creado en el archivo usePokemonGame.ts para quedarnos solo con el nombre y el id de la respuesta:](#vamos-a-modificar-el-método-getpokemons-que-hemos-creado-en-el-archivo-usepokemongamets-para-quedarnos-solo-con-el-nombre-y-el-id-de-la-respuesta)
      - [¿Recuerdas que habíamos tipado esta respuesta? Bien, pues vamos a crear un nuevo archivo dentro de la carpeta interfaces que se va a llamar pokemon.interface.ts y crea una interfaz para Pokemon que contenga el id de tipo number y name de tipo string.](#recuerdas-que-habíamos-tipado-esta-respuesta-bien-pues-vamos-a-crear-un-nuevo-archivo-dentro-de-la-carpeta-interfaces-que-se-va-a-llamar-pokemoninterfacets-y-crea-una-interfaz-para-pokemon-que-contenga-el-id-de-tipo-number-y-name-de-tipo-string)
      - [Volvamos a usePokemonGame.ts. Importamos la interfaz que acabamos de crear:](#volvamos-a-usepokemongamets-importamos-la-interfaz-que-acabamos-de-crear)
      - [Y modificamos el método getPokemons de la siguiente forma:](#y-modificamos-el-método-getpokemons-de-la-siguiente-forma)
      - [¿Qué es lo que estamos haciendo? ¿Para qué sirve la línea de código: const id = urlParts\[urlParts.length - 2\] ?? 0;?](#qué-es-lo-que-estamos-haciendo-para-qué-sirve-la-línea-de-código-const-id--urlpartsurlpartslength---2--0)
      - [Ahora vamos a llamar a nuestro método modificando el onMounted() que habíamos creado anteriormente de la siguiente manera:](#ahora-vamos-a-llamar-a-nuestro-método-modificando-el-onmounted-que-habíamos-creado-anteriormente-de-la-siguiente-manera)
      - [Muestra el resultado de la consola.](#muestra-el-resultado-de-la-consola)
    - [El resultado ahora nos muestra una lista de los 151 pokemons ordenados según su id. Nosotros NO queremos que estén ordenados los pokemons, por tanto, vamos a hacer que nuestra lista nos la devuelva de forma aleatoria, ¿se te ocurre cómo?](#el-resultado-ahora-nos-muestra-una-lista-de-los-151-pokemons-ordenados-según-su-id-nosotros-no-queremos-que-estén-ordenados-los-pokemons-por-tanto-vamos-a-hacer-que-nuestra-lista-nos-la-devuelva-de-forma-aleatoria-se-te-ocurre-cómo)
      - [Modifica el return del método getPokemons usando la función sort de javascript junto con Math.random() para devolver la lista de Pokemons desordenada. ¿Lo conseguiste?](#modifica-el-return-del-método-getpokemons-usando-la-función-sort-de-javascript-junto-con-mathrandom-para-devolver-la-lista-de-pokemons-desordenada-lo-conseguiste)
      - [Muestra los resultados por la consola.](#muestra-los-resultados-por-la-consola)
  - [Reto 6](#reto-6)
    - [¿Qué es una propiedad computada?](#qué-es-una-propiedad-computada)
    - [En usePokemonGame.ts crea una nueva propiedad computada llamada isLoading de la siguiente forma:](#en-usepokemongamets-crea-una-nueva-propiedad-computada-llamada-isloading-de-la-siguiente-forma)
      - [Mostrar en PokemonGame.vue el mensaje de "Espere por favor" y "Cargando Pokemons":](#mostrar-en-pokemongamevue-el-mensaje-de-espere-por-favor-y-cargando-pokemons)
    - [Al probar lo anterior, notarás que el cambio es prácticamente imperceptible. Por tanto:](#al-probar-lo-anterior-notarás-que-el-cambio-es-prácticamente-imperceptible-por-tanto)
      - [Añade una promesa en onMounted() del archivo usePokemonGame usando la función setTimeout para que al cargar la respuesta, tarde 1000 milésimas de segundo.](#añade-una-promesa-en-onmounted-del-archivo-usepokemongame-usando-la-función-settimeout-para-que-al-cargar-la-respuesta-tarde-1000-milésimas-de-segundo)
      - [Comprueba que ahora se modifica el componente.](#comprueba-que-ahora-se-modifica-el-componente)
    - [Ahora vamos a crear otra propiedad reactiva a la que vamos a llamar pokemonOptions:](#ahora-vamos-a-crear-otra-propiedad-reactiva-a-la-que-vamos-a-llamar-pokemonoptions)
      - [Estos pokemonOption van a ser las opciones de los Pokemons que vamos a mostrar, y por tanto, tenemos que crear una nueva función para manejarlas.](#estos-pokemonoption-van-a-ser-las-opciones-de-los-pokemons-que-vamos-a-mostrar-y-por-tanto-tenemos-que-crear-una-nueva-función-para-manejarlas)
      - [En usePokemonGame añade:](#en-usepokemongame-añade)
      - [¿Cómo funciona este fragmento de código? Muestra por consola pokemonOptions.value para comprobar que efectivamente nos está devolviendo 4 pokemons como propiedades reactivas.](#cómo-funciona-este-fragmento-de-código-muestra-por-consola-pokemonoptionsvalue-para-comprobar-que-efectivamente-nos-está-devolviendo-4-pokemons-como-propiedades-reactivas)
    - [¿Cómo determinamos cuál es el Pokemon correcto?](#cómo-determinamos-cuál-es-el-pokemon-correcto)
      - [Tenemos que ser capaces de determinar cual es el Pokemon correcto. Vamos a hacerlo mediante una propiedad computada. Para ello vamos a crear:](#tenemos-que-ser-capaces-de-determinar-cual-es-el-pokemon-correcto-vamos-a-hacerlo-mediante-una-propiedad-computada-para-ello-vamos-a-crear)
      - [Vamos a añadirlo en nuestro componente:](#vamos-a-añadirlo-en-nuestro-componente)
      - [Comprueba que el Pokémon que aparece está en la lista que aparece por consola y no que siempre ocupa la primera posición.](#comprueba-que-el-pokémon-que-aparece-está-en-la-lista-que-aparece-por-consola-y-no-que-siempre-ocupa-la-primera-posición)
    - [Ahora lo que debemos hacer es saber cual es la imagen correspondiente con ese Pokémon.](#ahora-lo-que-debemos-hacer-es-saber-cual-es-la-imagen-correspondiente-con-ese-pokémon)
      - [¿Qué estamos haciendo aquí?](#qué-estamos-haciendo-aquí)
    - [Vamos a PokemonPicture.vue y lo que tenemos que hacer es:](#vamos-a-pokemonpicturevue-y-lo-que-tenemos-que-hacer-es)
      - [Muestra el resultado y comprueba que es correcto.](#muestra-el-resultado-y-comprueba-que-es-correcto)
      - [Ahora necesitamos crear otra propiedad que se encargue de mostrar la imagen original si se ha seleccionado la opción correcta. De la misma forma que lo anterior, hacemos:](#ahora-necesitamos-crear-otra-propiedad-que-se-encargue-de-mostrar-la-imagen-original-si-se-ha-seleccionado-la-opción-correcta-de-la-misma-forma-que-lo-anterior-hacemos)
      - [En PokemonPicture.vue:](#en-pokemonpicturevue)
      - [Comprueba que ahora se visualiza la imagen del Pokémon original.](#comprueba-que-ahora-se-visualiza-la-imagen-del-pokémon-original)
      - [En v-else, añade la clase que tenemos en animations.css para que se aplique cuando se visualice la imagen original.](#en-v-else-añade-la-clase-que-tenemos-en-animationscss-para-que-se-aplique-cuando-se-visualice-la-imagen-original)
    - [Siguiendo con nuestro PokemonGame, nosotros ya podemos determinar cuando se debe visualizar la imagen correcta. ¿Cómo? Pues usando la propiedad que ya habíamos creado llamada GameStatus. Teníamos 3 estados: 'Playing', 'Won', y 'Lost'. Por tanto, modificamos el código:](#siguiendo-con-nuestro-pokemongame-nosotros-ya-podemos-determinar-cuando-se-debe-visualizar-la-imagen-correcta-cómo-pues-usando-la-propiedad-que-ya-habíamos-creado-llamada-gamestatus-teníamos-3-estados-playing-won-y-lost-por-tanto-modificamos-el-código)
    - [Mostrar las posibles opciones:](#mostrar-las-posibles-opciones)
      - [Nosotros ya tenemos creado nuestras opciones en pokemonOpcions, por tanto, en PokemonGame.vue:](#nosotros-ya-tenemos-creado-nuestras-opciones-en-pokemonopcions-por-tanto-en-pokemongamevue)
      - [Ahora, en PokemonOptions.vue, borramos la lista que teniamos de ejemplo y la sustituimos por botones:](#ahora-en-pokemonoptionsvue-borramos-la-lista-que-teniamos-de-ejemplo-y-la-sustituimos-por-botones)
      - [Explica el funcionamiento del componente hasta ahora y muestra el resultado de la aplicación.](#explica-el-funcionamiento-del-componente-hasta-ahora-y-muestra-el-resultado-de-la-aplicación)
      - [Ahora tenemos que saber, cuando el usuario haga click sobre un botón, emitir cual es esa opción, para ello creamos defineEmits:](#ahora-tenemos-que-saber-cuando-el-usuario-haga-click-sobre-un-botón-emitir-cual-es-esa-opción-para-ello-creamos-defineemits)
      - [y en PokemonGame.vue:](#y-en-pokemongamevue)
      - [Ahora, en la consola debería aparecer el id del Pokemon al que estamos haciendo click.](#ahora-en-la-consola-debería-aparecer-el-id-del-pokemon-al-que-estamos-haciendo-click)
    - [Ahora vamos a centrarnos en saber cuando el jugador gana.](#ahora-vamos-a-centrarnos-en-saber-cuando-el-jugador-gana)
      - [La lógica es muy sencilla. Será true cuando el id de la imagen del Pokemon sea igual al id que se emite cuando el usuario hace click sobre una opción.](#la-lógica-es-muy-sencilla-será-true-cuando-el-id-de-la-imagen-del-pokemon-sea-igual-al-id-que-se-emite-cuando-el-usuario-hace-click-sobre-una-opción)
      - [En nuestro composable, vamos a crear una nueva función llamada checkAnswer. Esta función recibe el id de la opción que el usuario está pulsando y tendremos que verificar si ese id es igual el id del Pokemon.](#en-nuestro-composable-vamos-a-crear-una-nueva-función-llamada-checkanswer-esta-función-recibe-el-id-de-la-opción-que-el-usuario-está-pulsando-y-tendremos-que-verificar-si-ese-id-es-igual-el-id-del-pokemon)
      - [Si gana, el gameStatus cambia de valor. Pasará de Playing a Won.](#si-gana-el-gamestatus-cambia-de-valor-pasará-de-playing-a-won)
      - [Cuando el usuario gana, vamos a lanzar una animación. Para ello:](#cuando-el-usuario-gana-vamos-a-lanzar-una-animación-para-ello)
        - [https://www.npmjs.com/package/canvas-confetti](#httpswwwnpmjscompackagecanvas-confetti)
        - [Instala el paquete en el proyecto.](#instala-el-paquete-en-el-proyecto)
        - [Importa el paquete en el composable. (Vale, aquí nos va a saltar un error ya que el paquete está pensado para javascript y no typescript. Para arreglarlo tendremos que ejecutar otro comando: npm i --save-dev @types/canvas-confetti, lo que estamos haciendo con este comando es instalar el paquete DT (archivo de definición) y eso debería hacer que el error desaparezca).](#importa-el-paquete-en-el-composable-vale-aquí-nos-va-a-saltar-un-error-ya-que-el-paquete-está-pensado-para-javascript-y-no-typescript-para-arreglarlo-tendremos-que-ejecutar-otro-comando-npm-i---save-dev-typescanvas-confetti-lo-que-estamos-haciendo-con-este-comando-es-instalar-el-paquete-dt-archivo-de-definición-y-eso-debería-hacer-que-el-error-desaparezca)
        - [Ahora, si la persona gana, vamos a lanzar la animación.](#ahora-si-la-persona-gana-vamos-a-lanzar-la-animación)
        - [Una vez que se determine que el usuario perdió, hay que bloquear los botones restantes para evitar que el usuario haga click hasta encontrar la respuesta correcta.](#una-vez-que-se-determine-que-el-usuario-perdió-hay-que-bloquear-los-botones-restantes-para-evitar-que-el-usuario-haga-click-hasta-encontrar-la-respuesta-correcta)
      - [Como tarea, ¿serías capaz de mostrar la opción correcta al usuario una vez pierda el juego? Impleméntalo.](#como-tarea-serías-capaz-de-mostrar-la-opción-correcta-al-usuario-una-vez-pierda-el-juego-impleméntalo)
      - [Como extra, podrías intentar implementar un botón para volver a reiniciar el juego, ¿eres capaz?](#como-extra-podrías-intentar-implementar-un-botón-para-volver-a-reiniciar-el-juego-eres-capaz)

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
Dentro de este archivo estara las vistas principales, que consinstira de cada pantalla.

![CreateView](img/createView.png)
#### Genera la estructura básica de vue dentro de este archivo. Recuerda que estamos trabajando con Typescript y Composition API.
![BasicStructure](img/basicStructure.png)
#### ¿Conoces algún atajo para generar esta estructura de forma automática? ¿Con qué extensión y cuál?
Si, poniendo "vbase-3-ts-setup" generara la estructura basica usando typescript y poniendo el setup.

### Usando la etiqueta <section> de HTML, vamos a dividir nuestro template. Tendremos:

#### Una sección que tenga un mensaje que indique al usuario que: Espere por favor y Cargando Pokémons. De tal manera que:
![FirstSection](img/first-Section.png)

#### ¿Para qué sirven las clases que hemos añadido?

Son los estilos de tailwind:
los primeros ponene que es flex y el tipo, despues que la altura y la anchura se ajuste a la pantalla.
En h1, poneemos que el texto sea grande.
Y en el h3, que tenga una animacion.

### Saca una captura de como se ve actualmente nuestra aplicación. ¿No ves los cambios? Algo se te olvida... ¿qué es? Indica los archivos que has tenido que modificar.

Hay que añadir el component a App.vue

![App.vue Add PokemonGame](img/add-Pokemon-game.png)

#### Si todo ha ido bien, tu aplicación tendría que verse tal que así:
![ShowFirstScreen](img/showFirstScreen.png)

#### Utilizando una directiva de VueJS, ¿cómo ocultaríamos esta sección por completo?
Usando un v-show, a una referencia que podemos cambiar a nuestro gusto.

![v-show](img/v-show.png)

### Ahora, vamos a crear otra nueva sección igual a la anterior pero que muestre al usuario el mensaje: ¿Cuál es este Pokémon?
![WhatIsThatPokemon](img/pokemon_image.png)
#### Añade las mismas clases que utilizamos en la sección anterior.
#### En esta sección añadiremos dos componentes: Pokemon Picture y Pokemon Options, ¿para qué crees que sirven? ¿Te aventuras a intentar averiguar cual será la lógica que implementemos en ellos?
Uno sera la imagen del pokemon y otra las opciones a elegir 

## Reto 3

### PokemonPicture.vue

#### Lo que vamos a hacer en este componente es importar directamente desde PokeApi una imagen de un pokemon (Ditto para ser más exactos).

#### Siguiendo la misma forma que en PokemonGame.vue de las secciones, en este componente nos crearemos una sección que contendrá una imagen del pokemon Ditto. (No es necesario realizar la conexión directamente a la API, copia y pega la url de la imagen y muéstrala).

#### El resultado de todos los pasos anteriores debe ser el siguiente:
![PomemonPicture](img/imagePokemonPicture.png)

#### Ahora bien, nosotros queremos que inicialmente la imagen de nuestro Pokémon esté completamente oculta como en la imagen del resultado final, ¿cómo hacemos esto? utilizando una clase de Tailwind CSS llamada brightness-0. Comprueba que la imagen de tu Pokémon ahora mismo esté completamente negra. Añade también la clase h-[200px], ¿para qué sirve?
Mantiene a 200px la altura

![PokemonPicture](img/imagePokemonPictureBlack.png)

![CodePokemonPicture](img/pokemonPicutreReto3.png)
### PokemonOptions.vue

#### En una nueva sección vamos a "simular" lo que serían las opciones de los Pokémon. Esto lo vas a hacer creando una lista de HTML tal y como se muestra en la imagen final. 

#### Ahora, mediante clases css de tailwind, dale aspecto de botones a esa lista. Recuerda que para aplicar clases de Tailwind desde la etiqueta de styles tendrás que usar @apply. ¿Lo conseguiste?
Si, asi:

![Code](img/code-pokemonOptions.png)
### El color de fondo de nuestra aplicación es: #f1f1f1, para aplicarlo, ¿dónde debes colocar el código css correspondiente? aplícalo y muestra los cambios.

Hay que aplicarlo al body del archivo index que contiene la app, aqui:

![Body](img/body.png)

## Reto 4

### Animations.css
#### Copiamos las cosas
![Animation.css](img/animations.css.png)

### Vamos a hacer que nuestro juego funcione. Empecemos la lógica de nuestra aplicación:

#### En primer lugar vamos a crear un archivo que vamos a llamar usePokemonGame.ts dentro de la carpeta de composables.

![useComposables](img/useComposables.png)

#### Crear el enum

![Enum](img/enum.png)

#### Crear el archivo barril

El fichero barril, lo usamos para al realizar imports en otra  clase, ahorrarnoslos, metiendolos todos en un archivo, el cual imporaremos y realizara interiormente los otros imports.

![BarrelFile](img/barrelFile.png)

#### Volvemos a nuestro archivo usePokemonGame.ts:
![GameStatus](img/gameStatus.png)

#### ¿Qué es lo que estamos haciendo con el código hasta ahora?
Estamos haciedo que al usar el usePokemonGame nos devuelva el estado de la partida, en este caso lo inicializamos en playing.

#### Ahora, vamos a conectarnos con nuestra PokeApi para poder recuperar una lista con los pokemons que vamos a usar en nuestro juego. Para ello, vamos a utilizar Axios. ¿Qué es Axios? ¿Lo has usado antes?
Si, los hemos usado en otas asignaturas, es una herramienta que nos facilita el realizar consultas HTTP a un servicio.

#### Instalamos Axios
```bash
npm install axios

added 4 packages, and audited 479 packages in 2s

129 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

#### Creamos PokemonAPI
![PokemonApi](img/pokemonApi.png)

#### Modificamos usePokemonGame
![usePokemonGame](img/usePokemonGameStatus.png)

#### Lo añadimos a pokemonGame
![pokemonGameUpdate](img/pokemonGameUpdate.png)

#### Creamos el tipo de la respuesta
![Response](img/PokemonListResponse.png)

#### Modificamos usePokemonGame para tipar el objeto
![Tipado](img/tipado.png)

#### Cambiamos el log a el results
![Results](img/pokemonConsoloResults.png)

Respuesta:

![ResponseConsoleLOg](img/response_console_log.png)

## Reto 5 

### Vamos a modificar el método getPokemons que hemos creado en el archivo usePokemonGame.ts para quedarnos solo con el nombre y el id de la respuesta:

#### ¿Recuerdas que habíamos tipado esta respuesta? Bien, pues vamos a crear un nuevo archivo dentro de la carpeta interfaces que se va a llamar pokemon.interface.ts y crea una interfaz para Pokemon que contenga el id de tipo number y name de tipo string.
![InterfazPokemon](img/Ipokemon.png)

#### Volvamos a usePokemonGame.ts. Importamos la interfaz que acabamos de crear:


#### Y modificamos el método getPokemons de la siguiente forma:


#### ¿Qué es lo que estamos haciendo? ¿Para qué sirve la línea de código: const id = urlParts[urlParts.length - 2] ?? 0;?

Esta linea contiene dos cositas interesantes a comentar, la priemra seria el [urlParts.lenght - 2], lo que estamos haciendo es coger la ultima division del split, por ejemplo : "http://poke.api/pokemon/id/", si pusieramos menos uno, pillariamos la ultima, que es una espacio vacio, pero al poner menos dos, pillamos la id.

Y despues esta el uso del "nullish", esto se usa para cuando el valor de la izquierda es nulo o un valor invalido, se establecera el valor de la derecha.

![GetPokemons](img/tarea6GetPoemons.png)

#### Ahora vamos a llamar a nuestro método modificando el onMounted() que habíamos creado anteriormente de la siguiente manera:
![onMountedTarea6](img/onMountedtarea6.png)

#### Muestra el resultado de la consola.
![resutlado](img/onMountedResultado.png)

### El resultado ahora nos muestra una lista de los 151 pokemons ordenados según su id. Nosotros NO queremos que estén ordenados los pokemons, por tanto, vamos a hacer que nuestra lista nos la devuelva de forma aleatoria, ¿se te ocurre cómo?
Si, usando Math.random() y usando un sort con ese valor, haciendo que por cada uno se ordene en una posicion aleatoria

#### Modifica el return del método getPokemons usando la función sort de javascript junto con Math.random() para devolver la lista de Pokemons desordenada. ¿Lo conseguiste?

Sí :D
```ts
pokemonsArray.sort(() => Math.random() - 0.5)
```

#### Muestra los resultados por la consola.
![resultadoDesordenado](img/unorndedResutl.png)

## Reto 6


### ¿Qué es una propiedad computada?

Hay operaciones que son muy pesadas para el template, para eso usamos el computed, ya que realiza esta funcion
y nos devolvera el resultado en la vista.

### En usePokemonGame.ts crea una nueva propiedad computada llamada isLoading de la siguiente forma:

![computed](img/computed.png)

#### Mostrar en PokemonGame.vue el mensaje de "Espere por favor" y "Cargando Pokemons":

![loading](img/loading.png)



### Al probar lo anterior, notarás que el cambio es prácticamente imperceptible. Por tanto:
#### Añade una promesa en onMounted() del archivo usePokemonGame usando la función setTimeout para que al cargar la respuesta, tarde 1000 milésimas de segundo.
```ts
onMounted(async () => {
    setTimeout(async () => {
    await getPokemons();
    console.log(pokemons.value);
    },1000);
  });
  ```
#### Comprueba que ahora se modifica el componente.
![loadingResult](img/loadinResult.png)


### Ahora vamos a crear otra propiedad reactiva a la que vamos a llamar pokemonOptions:
 

#### Estos pokemonOption van a ser las opciones de los Pokemons que vamos a mostrar, y por tanto, tenemos que crear una nueva función para manejarlas.
#### En usePokemonGame añade:
![pokemonOptionsUseState](img/pokemonOptionsState.png)


#### ¿Cómo funciona este fragmento de código? Muestra por consola pokemonOptions.value para comprobar que efectivamente nos está devolviendo 4 pokemons como propiedades reactivas.

Lo que hace es de la lista de pokemons que tenemos coge del primer valor hasta el de la cantidad que le indiquemos (por defecto 4), y despues, de la lista de pokemons, solo vamos a dejar los mismos menos los cuatro que ya hemos usado.

![pokemonOptionsResult](img/pokemonOptionsStateResult.png)

### ¿Cómo determinamos cuál es el Pokemon correcto? 
#### Tenemos que ser capaces de determinar cual es el Pokemon correcto. Vamos a hacerlo mediante una propiedad computada. Para ello vamos a crear:

```ts
const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex]
  }
```
```ts
return {
    gameStatus, pokemons, isLoading, getPokemons, getNextOptions, pokemonsOptions, randomPokemon
  }
  ```

#### Vamos a añadirlo en nuestro componente:

```ts
<section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quién es este Pokémon?</h1>
    <h3>{{ randomPokemon }}</h3>
    <!-- Pokemon Picture -->
    <PokemonPicture />
    <!-- Pokemon Options -->
    <PokemonOptions />
  </section>
  ```

![ResultImageRandoMpomeon](img/randomPokemon.png)
#### Comprueba que el Pokémon que aparece está en la lista que aparece por consola y no que siempre ocupa la primera posición.
Si, aparece y va rotando de posicon

### Ahora lo que debemos hacer es saber cual es la imagen correspondiente con ese Pokémon. 
```vue
 <PokemonPicture :pokemon-id="randomPokemon.id" />
 ```

#### ¿Qué estamos haciendo aquí?

Le estamos mandado un parametro por props, que despues inteceptaremos en el component, para obtener la imagne correspondiente

### Vamos a PokemonPicture.vue y lo que tenemos que hacer es:

#### Muestra el resultado y comprueba que es correcto.

![getPokemonImage](img/getPokemonImage.png)

![getPokemonIamgeResult](img/getPokemonImageResult.png)

#### Ahora necesitamos crear otra propiedad que se encargue de mostrar la imagen original si se ha seleccionado la opción correcta. De la misma forma que lo anterior, hacemos:

```vue
<PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="true" />
```

#### En PokemonPicture.vue:

![pokemonPictureShow](img/pokemonPictureShowPokemon.png)

#### Comprueba que ahora se visualiza la imagen del Pokémon original.

![showPokemon](img/pokemonPictureShowResult.png)

#### En v-else, añade la clase que tenemos en animations.css para que se aplique cuando se visualice la imagen original.

```vue
<img v-else class="h-[200px] fade-in" :src="pokemonImage" alt="Pokemon" />
```

### Siguiendo con nuestro PokemonGame, nosotros ya podemos determinar cuando se debe visualizar la imagen correcta. ¿Cómo? Pues usando la propiedad que ya habíamos creado llamada GameStatus. Teníamos 3 estados: 'Playing', 'Won', y 'Lost'. Por tanto, modificamos el código:
```vue
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus!= GameStatus.Playing" />
```

### Mostrar las posibles opciones:
#### Nosotros ya tenemos creado nuestras opciones en pokemonOpcions, por tanto, en PokemonGame.vue:

```vue
    <PokemonOptions :pokemon-options="pokemonsOptions" />
```

#### Ahora, en PokemonOptions.vue, borramos la lista que teniamos de ejemplo y la sustituimos por botones: 


#### Explica el funcionamiento del componente hasta ahora y muestra el resultado de la aplicación.
![pokemonOptionsNoAction](img/pokemonOptionsNoAction.png)

Primero usamos flex para poder ordenaro los botones de manera vertical, despues por cada uno ponemos que la key es la id, y enseñamos en nombre.

Todo esto cogiendo la lista de props.

![PokemonOptionsNoActionResult](img/pokemonOptionsNoActionResult.png)



#### Ahora tenemos que saber, cuando el usuario haga click sobre un botón, emitir cual es esa opción, para ello creamos defineEmits: 

```ts
const { pokemonOptions } = defineProps<Props>();
defineEmits<{
  selectedOption: [id: number];
}>();
```

```ts
div class="flex justify-center flex-col flex-wrap">
    <button type="button" @click="$emit('selectedOption', item.id)" class="btn capitalize"
      v-for="(item) in pokemonOptions" :key="item.id">{{ item.name
      }}
    </button>
```

#### y en PokemonGame.vue:
```vue
<PokemonOptions :pokemon-options="pokemonsOptions" @selected-option="onSelectedOption"/>
```
```ts
const onSelectedOption = (id: number) => {
  console.log(id);
}
```


#### Ahora, en la consola debería aparecer el id del Pokemon al que estamos haciendo click.

![onSelectedOption](img/onSelectedOption.png)

### Ahora vamos a centrarnos en saber cuando el jugador gana.
#### La lógica es muy sencilla. Será true cuando el id de la imagen del Pokemon sea igual al id que se emite cuando el usuario hace click sobre una opción.
#### En nuestro composable, vamos a crear una nueva función llamada checkAnswer. Esta función recibe el id de la opción que el usuario está pulsando y tendremos que verificar si ese id es igual el id del Pokemon. 
#### Si gana, el gameStatus cambia de valor. Pasará de Playing a Won. 
```ts
const checkAnswer = (id: number) => {
    if (randomPokemon.value.id === id) {
      gameStatus.value = GameStatus.Won
    } else {
      gameStatus.value = GameStatus.Lost
    }
  }
```
#### Cuando el usuario gana, vamos a lanzar una animación. Para ello: 
##### https://www.npmjs.com/package/canvas-confetti
##### Instala el paquete en el proyecto.
##### Importa el paquete en el composable. (Vale, aquí nos va a saltar un error ya que el paquete está pensado para javascript y no typescript. Para arreglarlo tendremos que ejecutar otro comando: npm i --save-dev @types/canvas-confetti, lo que estamos haciendo con este comando es instalar el paquete DT (archivo de definición) y eso debería hacer que el error desaparezca).
##### Ahora, si la persona gana, vamos a lanzar la animación. 
```ts
const checkAnswer = (id: number) => {
    if (randomPokemon.value.id === id) {
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 1000,
        spread: 150,
        origin: { y: 0.6 }
      })
    } else {
      gameStatus.value = GameStatus.Lost
    }
  }
  ```
```ts
const onSelectedOption = (id: number) => {
  checkAnswer(id);
}
```

##### Una vez que se determine que el usuario perdió, hay que bloquear los botones restantes para evitar que el usuario haga click hasta encontrar la respuesta correcta. 
```vue
<button type="button" @click="$emit('selectedOption', item.id)"
    class="btn capitalize" :disabled="blockSelection"
      v-for="(item) in pokemonOptions" :key="item.id">{{ item.name
      }}
    </button>
```
```vue
    <PokemonOptions :pokemon-options="pokemonsOptions" @selected-option="onSelectedOption" :block-selection="gameStatus != GameStatus.Playing"/>
```

Efectivamente, funciona correctamente.

#### Como tarea, ¿serías capaz de mostrar la opción correcta al usuario una vez pierda el juego? Impleméntalo.
```vue
    <PokemonOptions :pokemon-options="pokemonsOptions" @selected-option="onSelectedOption" :block-selection="gameStatus != GameStatus.Playing" :pokemon-correct="randomPokemon.id"/>
```
```vue
 <button
      type="button"
      @click="$emit('selectedOption', item.id)"
      :class="[
        'btn capitalize bg-gradient-to-r from-purple-500 to-pink-500',
        blockSelection && (item.id === pokemonCorrect
          ? 'bg-gradient-to-r from-green-500 to-green-700'
          : 'bg-gradient-to-r from-red-500 to-red-700')
      ]"
      :disabled="blockSelection"
      v-for="(item) in pokemonOptions"
      :key="item.id"
    >
      {{ item.name }}
    </button>
```
Si todo esta normal, aplicamos un gradiente, si la partida esta bloqueada y es el boton correcto, se le pone un gradiente verde, sino un gradiente rojo
#### Como extra, podrías intentar implementar un botón para volver a reiniciar el juego, ¿eres capaz?
```ts
const restartGame = () => {
    gameStatus.value = GameStatus.Playing
    getPokemons();
    getNextOptions();
  }
```
```vue
 <button @click="restartGame" class="btn bg-gradient-to-r from-purple-500 to-pink-500 mt-5">Reiniciar</button>
```

![End](img/finished.png)