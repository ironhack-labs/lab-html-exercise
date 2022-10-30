Ejercicio del módulo: HTML y CSS
Metas de aprendizaje
En este ejercicio, el objetivo es aplicar la mayor cantidad posible de los conceptos que acaba de aprender:

cuándo y cómo usar diferentes etiquetas HTML,
cómo estructurar una página HTML y agregarle contenido usando bloques y elementos en línea ,
cómo usar flexbox para colocar elementos en la página y
cómo diseñar la página.
Empezando
Bifurcar este repositorio
Clonar este repositorio
Siempre que cree un primer cambio significativo, debe realizar su primer compromiso.

Siga estas pautas para agregar, confirmar y enviar cambios .
Al final de este documento, encontrará pautas sobre cómo enviar el ejercicio.

Tenga en cuenta que no tiene que esperar a terminar completamente el ejercicio para realizar una solicitud de extracción. Solo tiene que hacer una solicitud de extracción una vez. Después de eso, cada vez que realice una confirmación, se agregará automáticamente y se mostrará en la solicitud de extracción.

Instrucciones
Introducción
En este ejercicio, clonará la página de destino del sitio web de NPM . NPM significa un administrador de paquetes de nodos, y lo usará mucho a lo largo de este curso. La versión que vas a clonar es la que ves en la siguiente imagen. Si quieres, puedes visitar la página oficial para recoger algunos de sus estilos, pero esto no es necesario; verá que la página de NPM se ha actualizado, pero está bien. Ya tienes todos los activos para esta versión en la carpeta de imágenes, así como el texto necesario en el archivo index.html.

Nuestro objetivo es acercarnos lo más posible a esto:



Puede ver la versión más grande de esta imagen aquí . Si tiene dificultades para ver los detalles, siéntase libre de acercar el zoom al 200%. Aunque no parece demasiado complicado, tendremos que aplicar bastantes estilos en nuestra página web: establecer un color de fondo en diferentes elementos, establecer un peso de fuente (negrita, normal) y posicionar elementos utilizando nuestras habilidades recién adquiridas en caja flexible.

Dividiremos nuestro trabajo en dos partes:

parte I: cree una página web sin estilos, solo agregue HTML y
parte II - agrega estilos y hazlo perfecto.🎨
¡Entonces empecemos!

Los activos que proporcionamos contienen el index.htmlarchivo con todo el texto necesario, así como la imagescarpeta con todas las imágenes necesarias para finalizar el ejercicio con éxito.

Parte I: HTML puro (sin estilos aplicados)
Puede parecer una broma, pero este es nuestro objetivo en esta iteración:

  


El primer paso es decidir cómo estructurar la página y seleccionar las etiquetas semánticas correctas . En general, elegir las etiquetas correctas facilitará su trabajo en el próximo paso cuando llegue el momento de diseñar.

Nuestra recomendación es tratar de mantenerlo lo más simple posible. Trate de identificar las diferentes secciones y agregue id's o classesa cada elemento <div>, <section>, <ul>o <header>bloque para identificar estos elementos. Aquí hay una guía sugerida, pero es posible que tenga algo en mente que sea diferente a esto: tráigalo a colación.



HTML 1 | <header>&<nav>
Su tarea en esta iteración será crear headery nav, que son los dos primeros elementos de la página. Como puede ver en la imagen de arriba, el primer elemento dentro del cuerpo headerestá compuesto por dos divs:

el div superior contiene otro div con imagen y algo de texto, y además de esto, tiene una etiqueta de navegación con una lista que se muestra horizontalmente
el div inferior tiene el logotipo, la barra de búsqueda (que es un formulario ) y algunos botones a la izquierda.


Sin embargo, recuerde que en la imagen de arriba los estilos ya están aplicados, por lo que nuestro resultado final no será el mismo.

Podríamos intentar representar esta parte del sitio web con lo siguiente:

<header>
  <div>
    <div>
      <img class="blackHeart" src="LINK TO IMAGE GOES HERE" alt="black heart" />
      <span> Nifty Penguin Magic </span>
    </div>
    <nav>
      <ul>
        <li><a href="#"> npm Enterprise </a></li>
        <li><a href="#"> Products </a></li>
        <li><a href="#"> Solutions </a></li>
        <li><a href="#"> Resources </a></li>
        <li><a href="#"> Docs </a></li>
        <li><a href="#"> Support </a></li>
      </ul>
    </nav>
  </div>

  <div>
    <!-- add logo, search bar and buttons (or links and style them as buttons later) -->
  </div>
</header>
Cuando haya terminado, debería obtener algo similar a esto: 

Está listo para pasar a la siguiente iteración.🙌

HTML 2 | Secciones de contenido
Eche un vistazo a la imagen con elementos HTML de mercado una vez más y podrá ver que tenemos tres secciones debajo del encabezado. Crea sectionetiquetas y dales a cada una de ellas idpara que puedas identificarlas rápidamente.

El contenido de cada una de estas secciones ya está en el index.html , pero debe organizarlo correctamente asegurándose de que haya encabezados, párrafos, divs, etc.

¡ Todas las imágenes se pueden encontrar en su imagescarpeta!

Puedes ver el resultado final en el gif al principio de este ejercicio.

¡El tiempo ha llegado! ¡Agreguemos algunos estilos y hagámoslo bonito!💅

Parte II - CSS/estilos
CSS 1 | Configuración
Como recordarás, lo primero que tenemos que hacer para añadir estilos a nuestra página es crear un style.cssarchivo y vincularlo a nuestro index.html.

Entonces, comencemos creando un nuevo archivo, en la misma carpeta que nuestro archivo HTML, y asígnele el nombre style.css. Ahora, vincule el archivo a index.html .

Sugerencia : en caso de que necesite refrescar su memoria sobre cómo hacer esto, consulte la lección Introducción a CSS .

Sugerencia 2 : es posible que desee considerar agregar la siguiente línea a su CSS, solo para confirmar que lo ha vinculado correctamente:

body {
  background-color: red;
}
Actualice la página en Chrome, y si su estilo.css está vinculado correctamente, la página debería volverse roja. ( Puede eliminar la propiedad de color de fondo que agregamos como prueba una vez que haya confirmado que funciona ) .😉

:::info Antes de seguir adelante, agregue en la parte superior de su archivo style.css las siguientes líneas:

@import url('https://fonts.googleapis.com/css?family=Poppins');

body {
  font-family: 'Poppins';
}
:::

Esta será la fuente predeterminada que utilizará en toda la página web.

Ahora estamos listos para comenzar a agregar algunos estilos a nuestra página.

CSS 2 | El encabezado y la barra de navegación
En la primera parte de este ejercicio, creó el encabezado y dentro de él la barra de navegación. Ahora tenemos que agregar algunos estilos para hacerlo más como esto:



Lo ayudaremos a diseñar la parte del código que le proporcionamos anteriormente: el div superior de la etiqueta del encabezado .

header > div {
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
}

nav {
  width: 600px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: black;
}

.blackHeart {
  width: 20px;
  margin-right: 1rem;
}
Información útil :

color de la etiqueta del formulario : rgba (0,0,0, .05)
color de entrada de formulario : rgba (0,0,0, .05)
color de fondo del botón de formulario : #fb3e44
color de las letras del botón de formulario : blanco
Como puede ver, hay una gran cantidad de flexbox involucrados: si es necesario, revise la lección nuevamente o eche un vistazo a los documentos oficiales (use sus habilidades de Google) o use este recurso como ayuda.

Asegúrese de usar flexbox en cualquier momento en el que necesite colocar elementos en un lugar específico; practique tanto como sea posible: cuanto más entienda ahora, más fácil será más adelante.

CSS 3 | sección 1


En este apartado, como podéis ver todo está centrado . Puede agregar algunas reglas de flexbox a la identificación que adjuntó a esta sección, como display: flex; y justificar-contenido: centro; . Pero esto es solo el comienzo: aún debe configurar align-items y flex-direction .

Información útil :

altura sugerida para esta sección: 600px
color de fondo: rgba(232,217,217,.3)
Color de fondo del botón "Ver planes": #FB3B49
Sombra del cuadro del botón "Ver planes": 8px 8px 0 rgba(251,59,73,.2)
CSS 4 | sección 2


Esta sección tiene prácticamente el mismo diseño que la anterior: algo de código para reutilizar😉.

Información útil :

color de fondo del título : rgba(255,204,53,.4)
para obtener la transformación del fondo amarillo en la dirección de la izquierda, use: transform: skew(9deg,0deg);
para colocarlo en la dirección opuesta a las letras, de la forma en que lo necesitamos en la página, use: font-style: italic;
para ajustar adicionalmente la posición de cada elemento, use la propiedad de margen .
Nuevamente, use mucho flexbox para obtener la posición correcta de los elementos: dirección, contenido justificado, elementos alineados.

Inspeccione elementos para obtener el tamaño correcto de la fuente para cada uno de ellos . Sin embargo, esto no es algo crucial, así que no le dediques demasiado tiempo; concéntrate en el posicionamiento principal.

CSS 5 | seccion 3


Información útil :

color de las letras en cada título de esta sección: #ED1C24
Sombra de cuadro "Crear una organización": 8px 8px 0 rgba(128,83,35,.2)
Color de las letras "Crear una organización": blanco
Envío
Si no agregó, confirmó y envió los cambios que realizó, esta es la última llamada.😄

Y al mismo tiempo, si no creó una solicitud de extracción, este también es el momento para hacerlo.

Tus TA revisarán tu trabajo y te darán retroalimentación.

Una vez más, un recordatorio amistoso : no tiene que esperar a terminar todo para seguir los pasos enumerados en las pautas . En el momento en que haya dado un primer paso importante para trabajar en esta evaluación, le recomendamos que realice una solicitud de extracción. A partir de ese momento, cada cambio que realice se agregará automáticamente a esa solicitud de extracción y sus TA podrán verlos para que los revisen.

Resumen
En este ejercicio, ha creado un clon de una parte de la página de inicio de npm. Este sitio es muy complejo, así que si lograste que se pareciera al original, ¡buen trabajo!🏆

Esto concluye el módulo HTML/CSS. ¡Estamos orgullosos de ti!

El equipo de Ironhack❤️
